let lib = ./spago.dhall

in  { name = "purescript-foreign-paths-tests"
    , dependencies = lib.dependencies # [ "miraculix" ]
    , backend = "purenix"
    , packages = ./packages.dhall
    , sources = lib.sources # [ "test/**/*.purs" ]
    }
