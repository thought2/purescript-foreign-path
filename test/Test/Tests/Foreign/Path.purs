module Tests.Foreign.Path where

import Prelude
import Foreign.Path as P
import Test.MiraculixLite (TestTree, testCase, testGroup, (@?=))
import Test.Util (getEnv)

pwd :: String
pwd = getEnv "PWD"

outputDir :: String
outputDir = pwd <> "/output"

outputModuleDir :: String
outputModuleDir = outputDir <> "/Foreign.Path"

tests :: TestTree
tests =
  testGroup "Foreign.Path"
    [ testGroup "abs"
        [ testCase "empty string" $ (P.abs "" # P.toString) @?= "/"
        , testCase "just a slash" $ (P.abs "/" # P.toString) @?= "/"
        , testCase "just one segment" $ (P.abs "foo" # P.toString) @?= "/foo"
        , testCase "just two segments" $ (P.abs "foo/bar" # P.toString) @?= "/foo/bar"
        , testCase "leading slash with two segments" $ (P.abs "/foo/bar" # P.toString) @?= "/foo/bar"
        , testCase "leading/trailing slash with two segments" $ (P.abs "/foo/bar/" # P.toString) @?= "/foo/bar"
        , testCase "double slash" $ (P.abs "//" # P.toString) @?= "/"
        , testCase "triple slash" $ (P.abs "///" # P.toString) @?= "/"
        , testCase "middle double slash" $ (P.abs "/foo//bar" # P.toString) @?= "/foo/bar"
        ]
    , testGroup "rel"
        [ testGroup "current dir"
            [ testCase "empty string" $ (P.rel "" # P.toString) @?= outputModuleDir
            , testCase "dot" $ (P.rel "." # P.toString) @?= outputModuleDir
            , testCase "dot slash" $ (P.rel "./" # P.toString) @?= outputModuleDir
            , testCase "dot slash dot" $ (P.rel "./." # P.toString) @?= outputModuleDir
            , testCase "dots and slashes" $ (P.rel ".///./" # P.toString) @?= outputModuleDir
            ]
        , testGroup "parent dir"
            [ testCase "two dots" $ (P.rel ".." # P.toString) @?= outputDir
            , testCase "two dots and slash" $ (P.rel "../" # P.toString) @?= outputDir
            , testCase "two dots, slash, dot" $ (P.rel "../." # P.toString) @?= outputDir
            ]
        ]
    ]
