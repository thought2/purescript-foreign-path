// This file was generated by purescript-docs-search.
window.DocsSearchIndex["20"] = [["t6",[{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/functors/master/src/Data/Functor/Product/Nested.purs","end":[39,47]},"score":0,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"T6","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product"],"Product"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"T5"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["d",null],["e",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/tuples/master/src/Data/Tuple/Nested.purs","end":[89,45]},"score":0,"packageInfo":{"values":["tuples"],"tag":"Package"},"name":"T6","moduleName":"Data.Tuple.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple","Nested"],"T5"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["d",null],["e",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/miraculix-lite/lite/src/deps/functors/Data/Functor/Product/Nested.purs","end":[39,47]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"T6","moduleName":"LocalDependency.Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Functor","Product"],"Product"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Functor","Product","Nested"],"T5"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["d",null],["e",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/miraculix-lite/lite/src/deps/tuples/Data/Tuple/Nested.purs","end":[89,45]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"T6","moduleName":"LocalDependency.Data.Tuple.Nested","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Tuple","Nested"],"T5"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"z"}]}}]},"arguments":[["a",null],["b",null],["c",null],["d",null],["e",null],["z",null]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]],["signum",[{"values":[{"sourceSpan":{"start":[216,1],"name":".spago/prelude/master/src/Data/Ord.purs","end":[216,46]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"signum","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The sign function; always evaluates to either `one` or `negate one`. For\nany `x`, we should have `signum x * abs x == x`.\n"}],"tag":"SearchResult"}]],["plus",[{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/control/master/src/Control/Plus.purs","end":[24,25]},"score":1,"packageInfo":{"values":["control"],"tag":"Package"},"name":"Plus","moduleName":"Control.Plus","info":{"values":[{"superclasses":[{"constraintClass":[["Control","Alt"],"Alt"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]}],"fundeps":[],"arguments":[["f",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `Plus` type class extends the `Alt` type class with a value that\nshould be the left and right identity for `(<|>)`.\n\nIt is similar to `Monoid`, except that it applies to types of\nkind `* -> *`, like `Array` or `List`, rather than concrete types like\n`String` or `Number`.\n\n`Plus` instances should satisfy the following laws:\n\n- Left identity: `empty <|> x == x`\n- Right identity: `x <|> empty == x`\n- Annihilation: `f <$> empty == empty`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/miraculix-lite/lite/src/deps/control/Control/Plus.purs","end":[24,25]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"Plus","moduleName":"LocalDependency.Control.Plus","info":{"values":[{"superclasses":[{"constraintClass":[["LocalDependency","Control","Alt"],"Alt"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]}],"fundeps":[],"arguments":[["f",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `Plus` type class extends the `Alt` type class with a value that\nshould be the left and right identity for `(<|>)`.\n\nIt is similar to `Monoid`, except that it applies to types of\nkind `* -> *`, like `Array` or `List`, rather than concrete types like\n`String` or `Number`.\n\n`Plus` instances should satisfy the following laws:\n\n- Left identity: `empty <|> x == x`\n- Right identity: `x <|> empty == x`\n- Annihilation: `f <$> empty == empty`\n"}],"tag":"SearchResult"}]],["mod",[{"values":[{"sourceSpan":{"start":[66,3],"name":".spago/prelude/master/src/Data/EuclideanRing.purs","end":[66,21]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"mod","moduleName":"Data.EuclideanRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","EuclideanRing"],"EuclideanRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["monad",[{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/prelude/master/src/Control/Monad.purs","end":[31,41]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"Monad","moduleName":"Control.Monad","info":{"values":[{"superclasses":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["Control","Bind"],"Bind"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]}],"fundeps":[],"arguments":[["m",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `Monad` type class combines the operations of the `Bind` and\n`Applicative` type classes. Therefore, `Monad` instances represent type\nconstructors which support sequential composition, and also lifting of\nfunctions of arbitrary arity.\n\nInstances must satisfy the following laws in addition to the\n`Applicative` and `Bind` laws:\n\n- Left Identity: `pure x >>= f = f x`\n- Right Identity: `x >>= pure = x`\n"}],"tag":"SearchResult"}]],["monadplus",[{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/control/master/src/Control/MonadPlus.purs","end":[32,46]},"score":1,"packageInfo":{"values":["control"],"tag":"Package"},"name":"MonadPlus","moduleName":"Control.MonadPlus","info":{"values":[{"superclasses":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]}],"fundeps":[],"arguments":[["m",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `MonadPlus` type class has no members of its own; it just specifies\nthat the type has both `Monad` and `Alternative` instances.\n\nTypes which have `MonadPlus` instances should also satisfy the following\nlaw:\n\n- Distributivity: `(x <|> y) >>= f == (x >>= f) <|> (y >>= f)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,1],"name":".spago/miraculix-lite/lite/src/deps/control/Control/MonadPlus.purs","end":[32,46]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"MonadPlus","moduleName":"LocalDependency.Control.MonadPlus","info":{"values":[{"superclasses":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["LocalDependency","Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]}],"fundeps":[],"arguments":[["m",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `MonadPlus` type class has no members of its own; it just specifies\nthat the type has both `Monad` and `Alternative` instances.\n\nTypes which have `MonadPlus` instances should also satisfy the following\nlaw:\n\n- Distributivity: `(x <|> y) >>= f == (x >>= f) <|> (y >>= f)`\n"}],"tag":"SearchResult"}]],["monadzero",[{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/control/master/src/Control/MonadZero.purs","end":[46,69]},"score":1,"packageInfo":{"values":["control"],"tag":"Package"},"name":"MonadZero","moduleName":"Control.MonadZero","info":{"values":[{"superclasses":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["Control","MonadZero"],"MonadZeroIsDeprecated"],"constraintArgs":[]}],"fundeps":[],"arguments":[["m",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `MonadZero` type class has no members of its own; it just specifies\nthat the type has both `Monad` and `Alternative` instances.\n\nTypes which have `MonadZero` instances should also satisfy the following\nlaws:\n\n- Annihilation: `empty >>= f = empty`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":".spago/miraculix-lite/lite/src/deps/control/Control/MonadZero.purs","end":[46,69]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"MonadZero","moduleName":"LocalDependency.Control.MonadZero","info":{"values":[{"superclasses":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["LocalDependency","Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"constraintClass":[["LocalDependency","Control","MonadZero"],"MonadZeroIsDeprecated"],"constraintArgs":[]}],"fundeps":[],"arguments":[["m",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"The `MonadZero` type class has no members of its own; it just specifies\nthat the type has both `Monad` and `Alternative` instances.\n\nTypes which have `MonadZero` instances should also satisfy the following\nlaws:\n\n- Annihilation: `empty >>= f = empty`\n"}],"tag":"SearchResult"}]],["monadzeroisdeprecated",[{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/control/master/src/Control/MonadZero.purs","end":[36,28]},"score":1,"packageInfo":{"values":["control"],"tag":"Package"},"name":"MonadZeroIsDeprecated","moduleName":"Control.MonadZero","info":{"values":[{"superclasses":[],"fundeps":[],"arguments":[]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/miraculix-lite/lite/src/deps/control/Control/MonadZero.purs","end":[36,28]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"MonadZeroIsDeprecated","moduleName":"LocalDependency.Control.MonadZero","info":{"values":[{"superclasses":[],"fundeps":[],"arguments":[]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]],["monoid",[{"values":[{"sourceSpan":{"start":[44,1],"name":".spago/prelude/master/src/Data/Monoid.purs","end":[45,14]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"Monoid","moduleName":"Data.Monoid","info":{"values":[{"superclasses":[{"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]}],"fundeps":[],"arguments":[["m",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"A `Monoid` is a `Semigroup` with a value `mempty`, which is both a\nleft and right unit for the associative operation `<>`:\n\n- Left unit: `(mempty <> x) = x`\n- Right unit: `(x <> mempty) = x`\n\n`Monoid`s are commonly used as the result of fold operations, where\n`<>` is used to combine individual results, and `mempty` gives the result\nof folding an empty collection of elements.\n\n### Newtypes for Monoid\n\nSome types (e.g. `Int`, `Boolean`) can implement multiple law-abiding\ninstances for `Monoid`. Let's use `Int` as an example\n1. `<>` could be `+` and `mempty` could be `0`\n2. `<>` could be `*` and `mempty` could be `1`.\n\nTo clarify these ambiguous situations, one should use the newtypes\ndefined in `Data.Monoid.<NewtypeName>` modules.\n\nIn the above ambiguous situation, we could use `Additive`\nfor the first situation or `Multiplicative` for the second one.\n"}],"tag":"SearchResult"}]],["monoidrecord",[{"values":[{"sourceSpan":{"start":[101,1],"name":".spago/prelude/master/src/Data/Monoid.purs","end":[102,67]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"MonoidRecord","moduleName":"Data.Monoid","info":{"values":[{"superclasses":[{"constraintClass":[["Data","Semigroup"],"SemigroupRecord"],"constraintArgs":[{"tag":"TypeVar","contents":"rowlist"},{"tag":"TypeVar","contents":"row"},{"tag":"TypeVar","contents":"subrow"}]}],"fundeps":[[["rowlist"],["row","subrow"]]],"arguments":[["rowlist",null],["row",null],["subrow",null]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"A class for records where all fields have `Monoid` instances, used to\nimplement the `Monoid` instance for records.\n"}],"tag":"SearchResult"}]],["isjust",[{"values":[{"sourceSpan":{"start":[271,1],"name":".spago/maybe/master/src/Data/Maybe.purs","end":[271,39]},"score":0,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"isJust","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Maybe` value was constructed with `Just`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[271,1],"name":".spago/miraculix-lite/lite/src/deps/maybe/Data/Maybe.purs","end":[271,39]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"isJust","moduleName":"LocalDependency.Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Maybe` value was constructed with `Just`.\n"}],"tag":"SearchResult"}]],["isleft",[{"values":[{"sourceSpan":{"start":[217,1],"name":".spago/either/master/src/Data/Either.purs","end":[217,44]},"score":0,"packageInfo":{"values":["either"],"tag":"Package"},"name":"isLeft","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Either` value was constructed with `Left`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[217,1],"name":".spago/miraculix-lite/lite/src/deps/either/Data/Either.purs","end":[217,44]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"isLeft","moduleName":"LocalDependency.Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Either` value was constructed with `Left`.\n"}],"tag":"SearchResult"}]],["isnothing",[{"values":[{"sourceSpan":{"start":[275,1],"name":".spago/maybe/master/src/Data/Maybe.purs","end":[275,42]},"score":0,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"isNothing","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Maybe` value is `Nothing`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[275,1],"name":".spago/miraculix-lite/lite/src/deps/maybe/Data/Maybe.purs","end":[275,42]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"isNothing","moduleName":"LocalDependency.Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Maybe` value is `Nothing`.\n"}],"tag":"SearchResult"}]],["isright",[{"values":[{"sourceSpan":{"start":[221,1],"name":".spago/either/master/src/Data/Either.purs","end":[221,45]},"score":0,"packageInfo":{"values":["either"],"tag":"Package"},"name":"isRight","moduleName":"Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Either` value was constructed with `Right`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[221,1],"name":".spago/miraculix-lite/lite/src/deps/either/Data/Either.purs","end":[221,45]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"isRight","moduleName":"LocalDependency.Data.Either","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["LocalDependency","Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns `true` when the `Either` value was constructed with `Right`.\n"}],"tag":"SearchResult"}]],["issuccess",[{"values":[{"sourceSpan":{"start":[56,1],"name":".spago/miraculix-lite/lite/src/Test/Miraculix/Assertion.purs","end":[56,34]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"isSuccess","moduleName":"Test.MiraculixLite.Assertion","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","MiraculixLite","Assertion"],"Assertion"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["issymbol",[{"values":[{"sourceSpan":{"start":[16,1],"name":".spago/prelude/master/src/Data/Symbol.purs","end":[24,53]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"IsSymbol","moduleName":"Data.Symbol","info":{"values":[{"superclasses":[],"fundeps":[],"arguments":[["sym",{"tag":"TypeConstructor","contents":[["Prim"],"Symbol"]}]]}],"tag":"TypeClassResult"},"hashAnchor":"t","comments":"A class for known symbols\n"}],"tag":"SearchResult"}]],["guard",[{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/control/master/src/Control/Alternative.purs","end":[48,54]},"score":1,"packageInfo":{"values":["control"],"tag":"Package"},"name":"guard","moduleName":"Control.Alternative","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fail using `Plus` if a condition does not hold, or\nsucceed using `Applicative` if it does.\n\nFor example:\n\n```purescript\nimport Prelude\nimport Control.Alternative (guard)\nimport Data.Array ((..))\n\nfactors :: Int -> Array Int\nfactors n = do\n  a <- 1..n\n  b <- 1..n\n  guard $ a * b == n\n  pure a\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/prelude/master/src/Data/Monoid.purs","end":[94,49]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"guard","moduleName":"Data.Monoid","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Monoid"],"Monoid"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"m"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Allow or \"truncate\" a Monoid to its `mempty` value based on a condition.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":".spago/miraculix-lite/lite/src/deps/control/Control/Alternative.purs","end":[48,54]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"guard","moduleName":"LocalDependency.Control.Alternative","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["LocalDependency","Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Fail using `Plus` if a condition does not hold, or\nsucceed using `Applicative` if it does.\n\nFor example:\n\n```purescript\nimport Prelude\nimport LocalDependency.Control.Alternative (guard)\nimport Data.Array ((..))\n\nfactors :: Int -> Array Int\nfactors n = do\n  a <- 1..n\n  b <- 1..n\n  guard $ a * b == n\n  pure a\n```\n"}],"tag":"SearchResult"}]],["<<$>>",[{"values":[{"sourceSpan":{"start":[14,1],"name":".spago/bifunctors/master/src/Control/Biapply.purs","end":[14,27]},"score":0,"packageInfo":{"values":["bifunctors"],"tag":"Package"},"name":"(<<$>>)","moduleName":"Control.Biapply","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":"A convenience operator which can be used to apply the result of `bipure` in\nthe style of `Applicative`:\n\n```purescript\nbipure f g <<$>> x <<*>> y\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[14,1],"name":".spago/miraculix-lite/lite/src/deps/bifunctors/Control/Biapply.purs","end":[14,27]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"(<<$>>)","moduleName":"LocalDependency.Control.Biapply","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":"A convenience operator which can be used to apply the result of `bipure` in\nthe style of `Applicative`:\n\n```purescript\nbipure f g <<$>> x <<*>> y\n```\n"}],"tag":"SearchResult"}]],["<<*",[{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/bifunctors/master/src/Control/Biapply.purs","end":[33,30]},"score":0,"packageInfo":{"values":["bifunctors"],"tag":"Package"},"name":"(<<*)","moduleName":"Control.Biapply","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/miraculix-lite/lite/src/deps/bifunctors/Control/Biapply.purs","end":[33,30]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"(<<*)","moduleName":"LocalDependency.Control.Biapply","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["<<*>>",[{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/bifunctors/master/src/Control/Biapply.purs","end":[21,26]},"score":0,"packageInfo":{"values":["bifunctors"],"tag":"Package"},"name":"(<<*>>)","moduleName":"Control.Biapply","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/miraculix-lite/lite/src/deps/bifunctors/Control/Biapply.purs","end":[21,26]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"(<<*>>)","moduleName":"LocalDependency.Control.Biapply","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["<<<",[{"values":[{"sourceSpan":{"start":[19,1],"name":".spago/prelude/master/src/Control/Semigroupoid.purs","end":[19,24]},"score":1,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"(<<<)","moduleName":"Control.Semigroupoid","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["<<=",[{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/control/master/src/Control/Extend.purs","end":[35,23]},"score":1,"packageInfo":{"values":["control"],"tag":"Package"},"name":"(<<=)","moduleName":"Control.Extend","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/miraculix-lite/lite/src/deps/control/Control/Extend.purs","end":[35,23]},"score":0,"packageInfo":{"values":["miraculix-lite"],"tag":"Package"},"name":"(<<=)","moduleName":"LocalDependency.Control.Extend","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]]]