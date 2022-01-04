module Foreign.Path
  ( Path
  , class ToPath
  , abs
  , rel
  , absStr
  , relStr
  , absSegs
  , relSegs
  , toString
  ) where

import Prelude
import Data.Foldable (intercalate)

foreign import data Path :: Type

class ToPath a where
  abs :: a -> Path
  rel :: a -> Path

instance toPathString :: ToPath String where
  abs = absStr
  rel = relStr

instance toPathArrayString :: ToPath (Array String) where
  abs = absSegs
  rel = relSegs

-- | Create an absolute path from a segments
absSegs :: Array String -> Path
absSegs segs = absStr $ intercalate "/" segs

-- | Create a relative path from segments
relSegs :: Array String -> Path
relSegs segs = relStr $ intercalate "/" segs

-- | Create an absolute path from a string
foreign import absStr :: String -> Path

-- | Create a relative path from a string
foreign import relStr :: String -> Path

-- | Resolve a `Path` to a string.
-- | Relative paths will be turned into absolute paths
foreign import toString :: Path -> String
