{ name = "purescript-foreign-path"
, dependencies = [ "prelude", "foldable-traversable" ]
, backend = "purenix"
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
