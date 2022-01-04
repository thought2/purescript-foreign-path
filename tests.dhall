let lib = ./lib.dhall

in  { name = "purescript-foreign-paths-tests"
    , dependencies = lib.dependencies # [ "miraculix-lite" ]
    , backend = lib.backend
    , packages = lib.packages
    , sources = lib.sources # [ "test/**/*.purs" ]
    }
