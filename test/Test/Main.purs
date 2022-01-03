module Test.Main where

import Prelude
import Test.Miraculix (TestTree, runTests, testGroup)
import Test.Foreign.Path as Test.Foreign.Path

main = runTests tests

tests :: TestTree
tests =
  testGroup "functions"
    [ Test.Foreign.Path.tests
    ]
