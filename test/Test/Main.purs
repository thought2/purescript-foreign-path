module Test.Main where

import Prelude
import Test.MiraculixLite (TestTree, runTests, testGroup)
import Tests.Foreign.Path as Tests.Foreign.Path

main = runTests tests

tests :: TestTree
tests =
  testGroup "foreign-path"
    [ Tests.Foreign.Path.tests
    ]
