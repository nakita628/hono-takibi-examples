type BigOvenModelAPI2UserInfoTinyx = {
  FirstName?: string | undefined
  LastName?: string | undefined
  PhotoUrl?: string | undefined
  UserID?: number | undefined
  UserName?: string | undefined
}
type BigOvenModelAPI2RecipeInfox = {
  Category?: string | undefined
  CreationDate?: string | undefined
  Cuisine?: string | undefined
  HasVideos?: boolean | undefined
  IsBookmark?: boolean | undefined
  IsPrivate?: boolean | undefined
  IsRecipeScan?: boolean | undefined
  Microcategory?: string | undefined
  PhotoUrl?: string | undefined
  Poster?: BigOvenModelAPI2UserInfoTinyx | undefined
  RecipeID?: number | undefined
  ReviewCount?: number | undefined
  Servings?: number | undefined
  StarRating?: number | undefined
  Subcategory?: string | undefined
  Title?: string | undefined
  TotalTries?: number | undefined
  WebURL?: string | undefined
}
type BigOvenModelAPI2RecipeSearchResult = {
  ResultCount?: number | undefined
  Results?: BigOvenModelAPI2RecipeInfox[] | undefined
  SpellSuggest?: string | undefined
}
type BigOvenModelAPI2CollectionInfo = {
  Description?: string | undefined
  ID?: number | undefined
  IsFiltered?: boolean | undefined
  IsSponsored?: boolean | undefined
  MobileUrl?: string | undefined
  PRO?: boolean | undefined
  PhotoUrl?: string | undefined
  Results?: BigOvenModelAPI2RecipeInfox[] | undefined
  Title?: string | undefined
  Token?: string | undefined
  WebUrl?: string | undefined
}
type SystemObject = { [x: string]: unknown }
type BigOvenModelAPIGroceryItem = {
  BigOvenObject?: string | undefined
  CreationDate?: string | undefined
  Department?: string | undefined
  DisplayQuantity?: string | undefined
  GUID?: string | undefined
  IsChecked?: boolean | undefined
  ItemID?: bigint | undefined
  LastModified?: string | undefined
  LocalStatus?: string | undefined
  Name?: string | undefined
  Notes?: string | undefined
  RecipeID?: number | undefined
  ThirdPartyURL?: string | undefined
}
type BigOvenModelAPI2GroceryList = {
  Items?: BigOvenModelAPIGroceryItem[] | undefined
  LastModified?: string | undefined
  Recipes?: BigOvenModelAPI2RecipeInfox[] | undefined
  VersionGuid?: string | undefined
}
type API2ControllersWebAPIGroceryListControllerDepartmentModel = { items?: string | undefined }
type API2GroceryListDepartmentResult = { dept?: string | undefined; item?: string | undefined }
type API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest = {
  department?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  quantity?: string | undefined
  unit?: string | undefined
}
type BigOvenModelShoppingListLine = {
  DateAdded?: string | undefined
  Dept?: string | undefined
  GUID?: string | undefined
  HTMLItemName?: string | undefined
  IsChecked?: boolean | undefined
  ItemName?: string | undefined
  LastModified?: string | undefined
  ListID?: bigint | undefined
  MealPlanID?: number | undefined
  MealPlanObjectType?: number | undefined
  Notes?: string | undefined
  PendingAddition?: boolean | undefined
  RecipeID?: number | undefined
  ShoppingListLineID?: bigint | undefined
  Store?: string | undefined
  TextAmt?: string | undefined
  ThirdPartyHost?: string | undefined
  ThirdPartyTitle?: string | undefined
  ThirdPartyURL?: string | undefined
}
type API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest = {
  department?: string | undefined
  guid?: string | undefined
  ischecked?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  quantity?: string | undefined
  unit?: string | undefined
}
type API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest = {
  text?: string | undefined
}
type API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest = {
  markAsPending?: boolean | undefined
  recipeId?: number | undefined
  scale?: number | undefined
}
type BigOvenModelAPIUserInfo = {
  FirstName?: string | undefined
  ImageUrl48?: string | undefined
  IsKitchenHelper?: boolean | undefined
  IsPremium?: boolean | undefined
  IsUsingRecurly?: boolean | undefined
  LastName?: string | undefined
  MemberSince?: string | undefined
  PhotoUrl?: string | undefined
  PhotoUrl48?: string | undefined
  PremiumExpiryDate?: string | undefined
  UserID?: number | undefined
  UserName?: string | undefined
  WebUrl?: string | undefined
}
type BigOvenModelAPIRecipeInfo = {
  BookmarkURL?: string | undefined
  Category?: string | undefined
  CreationDate?: string | undefined
  Cuisine?: string | undefined
  HasVideos?: boolean | undefined
  HeroPhotoUrl?: string | undefined
  HideFromPublicSearch?: boolean | undefined
  ImageURL?: string | undefined
  ImageURL120?: string | undefined
  IsBookmark?: boolean | undefined
  IsPrivate?: boolean | undefined
  MaxImageSquare?: number | undefined
  Microcategory?: string | undefined
  Poster?: BigOvenModelAPIUserInfo | undefined
  QualityScore?: number | undefined
  RecipeID?: number | undefined
  ReviewCount?: number | undefined
  StarRating?: number | undefined
  StarRatingIMG?: string | undefined
  Subcategory?: string | undefined
  Title?: string | undefined
  TotalTries?: number | undefined
  WebURL?: string | undefined
  YieldNumber?: number | undefined
}
type BigOvenModelAPIGroceryGroceryList = {
  Items?: BigOvenModelAPIGroceryItem[] | undefined
  LastModified?: string | undefined
  Recipes?: BigOvenModelAPIRecipeInfo[] | undefined
  VersionGuid?: string | undefined
}
type API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest = {
  list?: BigOvenModelAPIGroceryGroceryList | undefined
  since?: string | undefined
}
type API2ModelsAccounting = {
  CreditBalance?: number | undefined
  MemberSince?: string | undefined
  PremiumExpiryDate?: string | undefined
  UserLevel?: string | undefined
}
type API2ModelsLocation = {
  City?: string | undefined
  Country?: string | undefined
  DMA?: number | undefined
}
type API2ModelsPersonal = { Email?: string | undefined; Location?: API2ModelsLocation | undefined }
type API2ModelsPreference = { EatingStyle?: string | undefined }
type API2ModelsCounts = {
  AddedCount?: bigint | undefined
  FollowersCount?: bigint | undefined
  FollowingCount?: bigint | undefined
  PrivateRecipeCount?: bigint | undefined
  PublicRecipeCount?: bigint | undefined
  TotalRecipes?: bigint | undefined
}
type API2ModelsProfile = {
  AboutMe?: string | undefined
  BackgroundUrl?: string | undefined
  Counts?: API2ModelsCounts | undefined
  FirstName?: string | undefined
  FullName?: string | undefined
  HomeUrl?: string | undefined
  LastName?: string | undefined
  PhotoUrl?: string | undefined
  UserID?: bigint | undefined
  UserName?: string | undefined
}
type API2ModelsBigOvenUser = {
  Accounting?: API2ModelsAccounting | undefined
  BOAuthToken?: string | undefined
  LastChangeLogID?: string | undefined
  Personal?: API2ModelsPersonal | undefined
  Preferences?: API2ModelsPreference | undefined
  Profile?: API2ModelsProfile | undefined
}
type API2ControllersWebAPIMeControllerOption = {
  Description?: string | undefined
  Key?: string | undefined
}
type API2ControllersWebAPIMeControllerEatingStyle = {
  Options?: API2ControllersWebAPIMeControllerOption[] | undefined
}
type API2ControllersWebAPIMeControllerPreferenceOptions = {
  EatingStyle?: API2ControllersWebAPIMeControllerEatingStyle | undefined
}
type BigOvenModelAPIIngredientInfo = {
  Department?: string | undefined
  MasterIngredientID?: number | undefined
  Name?: string | undefined
  UsuallyOnHand?: boolean | undefined
}
type BigOvenModelAPIIngredient = {
  DisplayIndex?: number | undefined
  DisplayQuantity?: string | undefined
  HTMLName?: string | undefined
  IngredientID?: bigint | undefined
  IngredientInfo?: BigOvenModelAPIIngredientInfo | undefined
  IsHeading?: boolean | undefined
  IsLinked?: boolean | undefined
  MetricDisplayQuantity?: string | undefined
  MetricQuantity?: number | undefined
  MetricUnit?: string | undefined
  Name?: string | undefined
  PreparationNotes?: string | undefined
  Quantity?: number | undefined
  Unit?: string | undefined
}
type BigOvenModelAPINutritionInfo = {
  CaloriesFromFat?: number | undefined
  Cholesterol?: number | undefined
  CholesterolPct?: number | undefined
  DietaryFiber?: number | undefined
  DietaryFiberPct?: number | undefined
  MonoFat?: number | undefined
  PolyFat?: number | undefined
  Potassium?: number | undefined
  PotassiumPct?: number | undefined
  Protein?: number | undefined
  ProteinPct?: number | undefined
  SatFat?: number | undefined
  SatFatPct?: number | undefined
  SingularYieldUnit?: string | undefined
  Sodium?: number | undefined
  SodiumPct?: number | undefined
  Sugar?: number | undefined
  TotalCalories?: number | undefined
  TotalCarbs?: number | undefined
  TotalCarbsPct?: number | undefined
  TotalFat?: number | undefined
  TotalFatPct?: number | undefined
  TransFat?: number | undefined
}
type BigOvenModelAPIRecipe = {
  ActiveMinutes?: number | undefined
  AdTags?: string | undefined
  AdminBoost?: number | undefined
  AllCategoriesText?: string | undefined
  BookmarkImageURL?: string | undefined
  BookmarkSiteLogo?: string | undefined
  BookmarkURL?: string | undefined
  Category?: string | undefined
  Collection?: string | undefined
  CollectionID?: number | undefined
  CreationDate?: string | undefined
  Cuisine?: string | undefined
  Description?: string | undefined
  FavoriteCount?: number | undefined
  HeroPhotoUrl?: string | undefined
  ImageSquares?: number[] | undefined
  ImageURL?: string | undefined
  Ingredients?: BigOvenModelAPIIngredient[] | undefined
  IngredientsTextBlock?: string | undefined
  Instructions?: string | undefined
  IsBookmark?: boolean | undefined
  IsPrivate?: boolean | undefined
  IsRecipeScan?: boolean | undefined
  IsSponsored?: boolean | undefined
  LastModified?: string | undefined
  MaxImageSquare?: number | undefined
  MedalCount?: number | undefined
  MenuCount?: number | undefined
  Microcategory?: string | undefined
  NotesCount?: number | undefined
  NutritionInfo?: BigOvenModelAPINutritionInfo | undefined
  Poster?: BigOvenModelAPIUserInfo | undefined
  PrimaryIngredient?: string | undefined
  RecipeID?: number | undefined
  ReviewCount?: number | undefined
  StarRating?: number | undefined
  Subcategory?: string | undefined
  Title?: string | undefined
  TotalMinutes?: number | undefined
  VariantOfRecipeID?: number | undefined
  VerifiedByClass?: string | undefined
  VerifiedDateTime?: string | undefined
  WebURL?: string | undefined
  YieldNumber?: number | undefined
  YieldUnit?: string | undefined
}
type BigOvenModelRecipeInfoTiny = {
  ImageURL?: string | undefined
  QualityScore?: number | undefined
  RecipeID?: number | undefined
  Servings?: number | undefined
  Title?: string | undefined
}
type BigOvenModelRecipeCategory = {
  Category?: string | undefined
  DefaultActiveMinutes?: number | undefined
  DefaultTotalMinutes?: number | undefined
  ID?: number | undefined
  ParentID?: number | undefined
  PrimaryImage?: string | undefined
  ShortDescription?: string | undefined
}
type BigOvenResult = {
  Data?: SystemObject | undefined
  Message?: string | undefined
  StatusCode?: number | undefined
}
type API2Result = {
  Data?: SystemObject | undefined
  Message?: string | undefined
  StatusCode?: number | undefined
}
type BigOvenModelAPI2Photo = {
  Caption?: string | undefined
  CreationDate?: string | undefined
  ImageID?: bigint | undefined
  IsPrimary?: boolean | undefined
  MaxImageSquare?: number | undefined
  PhotoUrl?: string | undefined
  Poster?: BigOvenModelAPI2UserInfoTinyx | undefined
}
type API2ControllersWebAPIImagesControllerRecipePhotosResponse = {
  ResultCount?: number | undefined
  Results?: BigOvenModelAPI2Photo[] | undefined
}
type API2ControllersWebAPIReviewControllerPostReplyReq = { Comment?: string | undefined }
type BigOvenModelAPIUserInfoTiny = {
  FirstName?: string | undefined
  LastName?: string | undefined
  PhotoUrl?: string | undefined
  UserID?: number | undefined
  UserName?: string | undefined
}
type BigOvenModelAPIReply = {
  Comment?: string | undefined
  CreationDate?: string | undefined
  ID?: string | undefined
  LastModified?: string | undefined
  Poster?: BigOvenModelAPIUserInfoTiny | undefined
  ReviewID?: string | undefined
}
type BigOvenModelAPIReview = {
  ActiveMinutes?: number | undefined
  Comment?: string | undefined
  CreationDate?: string | undefined
  FeaturedReply?: BigOvenModelAPIReply | undefined
  GUID?: string | undefined
  ID?: string | undefined
  LastModified?: string | undefined
  ParentID?: bigint | undefined
  Poster?: BigOvenModelAPIUserInfo | undefined
  Replies?: BigOvenModelAPIReview[] | undefined
  ReplyCount?: number | undefined
  ReviewID?: bigint | undefined
  StarRating?: number | undefined
  TotalMinutes?: number | undefined
}
type API2ControllersWebAPIReviewControllerReviewRequest = {
  ActiveMinutes?: number | undefined
  Comment?: string | undefined
  MakeAgain?: string | undefined
  StarRating?: number | undefined
  TotalMinutes?: number | undefined
}
type BigOvenModelInstructionStep = {
  EndGantt?: number | undefined
  StartGantt?: number | undefined
  Text?: string | undefined
}
type BigOvenModelAPI2Recipe = {
  ActiveMinutes?: number | undefined
  AdTags?: string | undefined
  AdminBoost?: number | undefined
  AllCategoriesText?: string | undefined
  BookmarkImageURL?: string | undefined
  BookmarkSiteLogo?: string | undefined
  BookmarkURL?: string | undefined
  Category?: string | undefined
  Collection?: string | undefined
  CollectionID?: number | undefined
  CreationDate?: string | undefined
  Cuisine?: string | undefined
  Description?: string | undefined
  FavoriteCount?: number | undefined
  ImageSquares?: number[] | undefined
  ImageURL?: string | undefined
  Ingredients?: BigOvenModelAPIIngredient[] | undefined
  IngredientsTextBlock?: string | undefined
  Instructions?: string | undefined
  IsBookmark?: boolean | undefined
  IsPrivate?: boolean | undefined
  IsRecipeScan?: boolean | undefined
  IsSponsored?: boolean | undefined
  LastModified?: string | undefined
  MaxImageSquare?: number | undefined
  MedalCount?: number | undefined
  MenuCount?: number | undefined
  Microcategory?: string | undefined
  NotesCount?: number | undefined
  NutritionInfo?: BigOvenModelAPINutritionInfo | undefined
  PhotoUrl?: string | undefined
  Poster?: BigOvenModelAPIUserInfo | undefined
  PrimaryIngredient?: string | undefined
  RecipeID?: number | undefined
  ReviewCount?: number | undefined
  StarRating?: number | undefined
  Steps?: BigOvenModelInstructionStep[] | undefined
  Subcategory?: string | undefined
  Title?: string | undefined
  TotalMinutes?: number | undefined
  VariantOfRecipeID?: number | undefined
  VerifiedByClass?: string | undefined
  VerifiedDateTime?: string | undefined
  WebURL?: string | undefined
  YieldNumber?: number | undefined
  YieldUnit?: string | undefined
}
type API2ModelsRecipesFeedbackDTO = { feedback?: string | undefined }
type BigOvenModelAPIImage = {
  Caption?: string | undefined
  CreationDate?: string | undefined
  ImageID?: bigint | undefined
  ImageSquares?: number[] | undefined
  ImageURL?: string | undefined
  ImageURL120?: string | undefined
  ImageURL128?: string | undefined
  ImageURL200?: string | undefined
  ImageURL256?: string | undefined
  ImageURL48?: string | undefined
  ImageURL64?: string | undefined
  IsPrimary?: boolean | undefined
  MaxImageSquare?: number | undefined
  Poster?: BigOvenModelAPIUserInfo | undefined
}
type API2ControllersWebAPINoteControllerNoteRequest = {
  CreationDate?: string | undefined
  Date?: string | undefined
  DateDT?: string | undefined
  GUID?: string | undefined
  ID?: number | undefined
  Notes?: string | undefined
  People?: string | undefined
  RecipeID?: number | undefined
  UserID?: number | undefined
  Variations?: string | undefined
}
type BigOvenModelAPI2RecipeNote = {
  CreationDate?: string | undefined
  Date?: string | undefined
  DateDT?: string | undefined
  GUID?: string | undefined
  ID?: number | undefined
  Notes?: string | undefined
  People?: string | undefined
  RecipeID?: number | undefined
  UserID?: number | undefined
  Variations?: string | undefined
}
type BigOvenModelAPIRecipeNote = {
  CreationDate?: string | undefined
  Date?: string | undefined
  DateDT?: string | undefined
  GUID?: string | undefined
  ID?: number | undefined
  Notes?: string | undefined
  People?: string | undefined
  RecipeID?: number | undefined
  UserID?: number | undefined
  Variations?: string | undefined
}
type BigOvenModelAPIRecipeNoteList = {
  ResultCount?: number | undefined
  Results?: BigOvenModelAPIRecipeNote[] | undefined
}
type API2ControllersWebAPIReviewControllerReviewRequestLegacy = {
  ActiveMinutes?: number | undefined
  Comment?: string | undefined
  GUID?: string | undefined
  MakeAgain?: string | undefined
  ParentID?: number | undefined
  StarRating?: number | undefined
  TotalMinutes?: number | undefined
}
type BigOvenModelRecipeInfoReviewTuple2 = {
  RecipeInfo?: BigOvenModelAPI2RecipeInfox | undefined
  Review?: BigOvenModelAPIReview | undefined
}
type BigOvenModelRecipeInfoDateTuple2 = {
  date?: string | undefined
  recipeInfo?: BigOvenModelAPI2RecipeInfox | undefined
}
type API2ModelsRecipesRecipeVideoResponse = {
  InsertedOn?: string | undefined
  IsPrimaryVideo?: boolean | undefined
  MediaId?: string | undefined
  VidId?: number | undefined
}
type API2ModelsRecipesRecipeResponse = {
  ActiveMinutes?: number | undefined
  AdTags?: string | undefined
  AdminBoost?: number | undefined
  AllCategoriesText?: string | undefined
  BookmarkImageURL?: string | undefined
  BookmarkSiteLogo?: string | undefined
  BookmarkURL?: string | undefined
  Category?: string | undefined
  Collection?: string | undefined
  CollectionID?: number | undefined
  CreationDate?: string | undefined
  Cuisine?: string | undefined
  Description?: string | undefined
  FavoriteCount?: number | undefined
  ImageSquares?: number[] | undefined
  ImageURL?: string | undefined
  Ingredients?: BigOvenModelAPIIngredient[] | undefined
  IngredientsTextBlock?: string | undefined
  Instructions?: string | undefined
  IsBookmark?: boolean | undefined
  IsPrivate?: boolean | undefined
  IsRecipeScan?: boolean | undefined
  IsSponsored?: boolean | undefined
  LastModified?: string | undefined
  MaxImageSquare?: number | undefined
  MedalCount?: number | undefined
  MenuCount?: number | undefined
  Microcategory?: string | undefined
  NotesCount?: number | undefined
  NutritionInfo?: BigOvenModelAPINutritionInfo | undefined
  PhotoUrl?: string | undefined
  Poster?: BigOvenModelAPIUserInfo | undefined
  PrimaryIngredient?: string | undefined
  RecipeID?: number | undefined
  ReviewCount?: number | undefined
  StarRating?: number | undefined
  Steps?: BigOvenModelInstructionStep[] | undefined
  Subcategory?: string | undefined
  Title?: string | undefined
  TotalMinutes?: number | undefined
  VariantOfRecipeID?: number | undefined
  VerifiedByClass?: string | undefined
  VerifiedDateTime?: string | undefined
  Videos?: API2ModelsRecipesRecipeVideoResponse[] | undefined
  WebURL?: string | undefined
  YieldNumber?: number | undefined
  YieldUnit?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/collection/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                rpp?: number | undefined
                pg?: number | undefined
                test?: boolean | undefined
                sessionForLogging?: string | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                rpp?: number | undefined
                pg?: number | undefined
                test?: boolean | undefined
                sessionForLogging?: string | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                rpp?: number | undefined
                pg?: number | undefined
                test?: boolean | undefined
                sessionForLogging?: string | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                rpp?: number | undefined
                pg?: number | undefined
                test?: boolean | undefined
                sessionForLogging?: string | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/collection/:id/meta': {
      $get:
        | {
            input: { param: { id: number } }
            output: BigOvenModelAPI2CollectionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BigOvenModelAPI2CollectionInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BigOvenModelAPI2CollectionInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BigOvenModelAPI2CollectionInfo
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/collections': {
      $get:
        | {
            input: { query: { test?: string | undefined } }
            output: BigOvenModelAPI2CollectionInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { test?: string | undefined } }
            output: BigOvenModelAPI2CollectionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { test?: string | undefined } }
            output: BigOvenModelAPI2CollectionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { test?: string | undefined } }
            output: BigOvenModelAPI2CollectionInfo[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/grocerylist': {
      $delete:
        | { input: {}; output: SystemObject; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
      $get:
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/grocerylist/clearcheckedlines': {
      $post:
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelAPI2GroceryList; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/grocerylist/department': {
      $post:
        | {
            input: { json: API2ControllersWebAPIGroceryListControllerDepartmentModel } & {
              form: API2ControllersWebAPIGroceryListControllerDepartmentModel
            }
            output: API2GroceryListDepartmentResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: API2ControllersWebAPIGroceryListControllerDepartmentModel } & {
              form: API2ControllersWebAPIGroceryListControllerDepartmentModel
            }
            output: API2GroceryListDepartmentResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ControllersWebAPIGroceryListControllerDepartmentModel } & {
              form: API2ControllersWebAPIGroceryListControllerDepartmentModel
            }
            output: API2GroceryListDepartmentResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ControllersWebAPIGroceryListControllerDepartmentModel } & {
              form: API2ControllersWebAPIGroceryListControllerDepartmentModel
            }
            output: API2GroceryListDepartmentResult[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/grocerylist/item': {
      $post:
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/grocerylist/item/:guid': {
      $delete:
        | {
            input: { param: { guid: string } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guid: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guid: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guid: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { guid: string } } & {
              json: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest
            } & { form: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guid: string } } & {
              json: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest
            } & { form: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guid: string } } & {
              json: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest
            } & { form: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guid: string } } & {
              json: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest
            } & { form: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/grocerylist/line': {
      $post:
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest }
            output: BigOvenModelShoppingListLine
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/grocerylist/recipe': {
      $post:
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/grocerylist/sync': {
      $post:
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest
            } & { form: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/image/avatar': {
      $post:
        | { input: {}; output: SystemObject; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { json: API2ModelsBigOvenUser } & { form: API2ModelsBigOvenUser }
            output: API2ModelsBigOvenUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: API2ModelsBigOvenUser } & { form: API2ModelsBigOvenUser }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsBigOvenUser } & { form: API2ModelsBigOvenUser }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsBigOvenUser } & { form: API2ModelsBigOvenUser }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/me/personal': {
      $put:
        | {
            input: { json: API2ModelsPersonal } & { form: API2ModelsPersonal }
            output: API2ModelsBigOvenUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: API2ModelsPersonal } & { form: API2ModelsPersonal }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsPersonal } & { form: API2ModelsPersonal }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsPersonal } & { form: API2ModelsPersonal }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/me/preferences': {
      $put:
        | {
            input: { json: API2ModelsPreference } & { form: API2ModelsPreference }
            output: API2ModelsBigOvenUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: API2ModelsPreference } & { form: API2ModelsPreference }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsPreference } & { form: API2ModelsPreference }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsPreference } & { form: API2ModelsPreference }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/me/preferences/options': {
      $get:
        | {
            input: {}
            output: API2ControllersWebAPIMeControllerPreferenceOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: API2ControllersWebAPIMeControllerPreferenceOptions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: API2ControllersWebAPIMeControllerPreferenceOptions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: API2ControllersWebAPIMeControllerPreferenceOptions
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/me/profile': {
      $put:
        | {
            input: { json: API2ModelsProfile } & { form: API2ModelsProfile }
            output: API2ModelsBigOvenUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: API2ModelsProfile } & { form: API2ModelsProfile }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsProfile } & { form: API2ModelsProfile }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: API2ModelsProfile } & { form: API2ModelsProfile }
            output: API2ModelsBigOvenUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/me/skinny': {
      $get:
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: API2ModelsBigOvenUser; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/recipe': {
      $post:
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BigOvenModelAPIRecipe } & { form: BigOvenModelAPIRecipe }
            output: BigOvenModelAPIRecipe
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/autocomplete': {
      $get:
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/autocomplete/all': {
      $get:
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/autocomplete/mine': {
      $get:
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string; limit: number } }
            output: BigOvenModelRecipeInfoTiny[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/categories': {
      $get:
        | { input: {}; output: BigOvenModelRecipeCategory[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BigOvenModelRecipeCategory[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelRecipeCategory[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelRecipeCategory[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/recipe/get/active/recipe': {
      $get:
        | {
            input: { query: { userName: string } }
            output: BigOvenResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userName: string } }
            output: BigOvenResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string } }
            output: BigOvenResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string } }
            output: BigOvenResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/get/saved/step': {
      $post:
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/get/step/number': {
      $post:
        | {
            input: { query: { userName: string; recipeId: number } }
            output: API2Result
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number } }
            output: API2Result
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number } }
            output: API2Result
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number } }
            output: API2Result
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/photos/pending': {
      $get:
        | {
            input: {}
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/post/step': {
      $post:
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: BigOvenResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: BigOvenResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: BigOvenResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userName: string; recipeId: number; stepId: number } }
            output: BigOvenResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/review/replies/:replyId': {
      $delete:
        | {
            input: { param: { replyId: string } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { replyId: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { replyId: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { replyId: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { replyId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { replyId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { replyId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { replyId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/review/:reviewId': {
      $get:
        | {
            input: { param: { reviewId: string } }
            output: BigOvenModelAPIReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reviewId: string } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: BigOvenModelAPIReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/review/:reviewId/replies': {
      $get:
        | {
            input: { param: { reviewId: string } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReply[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReply[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReply[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReply[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: string } } & {
              json: API2ControllersWebAPIReviewControllerPostReplyReq
            } & { form: API2ControllersWebAPIReviewControllerPostReplyReq }
            output: BigOvenModelAPIReply
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/scan': {
      $post:
        | {
            input: {
              query: {
                test?: boolean | undefined
                devicetype?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                test?: boolean | undefined
                devicetype?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              query: {
                test?: boolean | undefined
                devicetype?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              query: {
                test?: boolean | undefined
                devicetype?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/recipe/steps/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:id': {
      $delete:
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: BigOvenModelAPI2Recipe
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:id/zap': {
      $get:
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/feedback': {
      $post:
        | {
            input: { param: { recipeId: number } } & { json: API2ModelsRecipesFeedbackDTO } & {
              form: API2ModelsRecipesFeedbackDTO
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & { json: API2ModelsRecipesFeedbackDTO } & {
              form: API2ModelsRecipesFeedbackDTO
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & { json: API2ModelsRecipesFeedbackDTO } & {
              form: API2ModelsRecipesFeedbackDTO
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & { json: API2ModelsRecipesFeedbackDTO } & {
              form: API2ModelsRecipesFeedbackDTO
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/image': {
      $post:
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { recipeId: string } } & {
              query: {
                caption?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
    }
  } & {
    '/recipe/:recipeId/images': {
      $get:
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/note': {
      $post:
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPI2RecipeNote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPI2RecipeNote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPI2RecipeNote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPI2RecipeNote
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/note/:noteId': {
      $delete:
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { recipeId: number; noteId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; noteId: number } } & {
              json: API2ControllersWebAPINoteControllerNoteRequest
            } & { form: API2ControllersWebAPINoteControllerNoteRequest }
            output: BigOvenModelAPIRecipeNote
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/notes': {
      $get:
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIRecipeNoteList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIRecipeNoteList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIRecipeNoteList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIRecipeNoteList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/photos': {
      $get:
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: API2ControllersWebAPIImagesControllerRecipePhotosResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/related': {
      $get:
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/review': {
      $get:
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequest
            } & { form: API2ControllersWebAPIReviewControllerReviewRequest }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/review/:reviewId': {
      $delete:
        | {
            input: { param: { recipeId: number; reviewId: bigint } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number; reviewId: bigint } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; reviewId: bigint } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number; reviewId: bigint } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { reviewId: number; recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reviewId: number; recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: number; recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: number; recipeId: number } }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { reviewId: number; recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequestLegacy
            } & { form: API2ControllersWebAPIReviewControllerReviewRequestLegacy }
            output: BigOvenModelAPIReview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reviewId: number; recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequestLegacy
            } & { form: API2ControllersWebAPIReviewControllerReviewRequestLegacy }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: number; recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequestLegacy
            } & { form: API2ControllersWebAPIReviewControllerReviewRequestLegacy }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reviewId: number; recipeId: number } } & {
              json: API2ControllersWebAPIReviewControllerReviewRequestLegacy
            } & { form: API2ControllersWebAPIReviewControllerReviewRequestLegacy }
            output: BigOvenModelAPIReview
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/reviews': {
      $get:
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReview[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReview[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReview[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } } & {
              query: { pg?: number | undefined; rpp?: number | undefined }
            }
            output: BigOvenModelAPIReview[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipe/:recipeId/scans': {
      $get:
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { recipeId: number } }
            output: BigOvenModelAPIImage[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipes': {
      $get:
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                rpp?: number | undefined
                pg?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                rpp?: number | undefined
                pg?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                rpp?: number | undefined
                pg?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                rpp?: number | undefined
                pg?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipes/random': {
      $get:
        | { input: {}; output: BigOvenModelAPIRecipe; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BigOvenModelAPIRecipe; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelAPIRecipe; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BigOvenModelAPIRecipe; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/recipes/raves': {
      $get:
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoReviewTuple2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoReviewTuple2[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoReviewTuple2[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoReviewTuple2[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipes/recentviews': {
      $get:
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoDateTuple2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoDateTuple2[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoDateTuple2[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pg?: number | undefined; rpp?: number | undefined } }
            output: BigOvenModelRecipeInfoDateTuple2[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipes/top25random': {
      $get:
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                any_kw?: string | undefined
                folder?: string | undefined
                coll?: number | undefined
                filter?: string | undefined
                title_kw?: string | undefined
                userId?: number | undefined
                username?: string | undefined
                token?: string | undefined
                photos?: boolean | undefined
                boostmine?: boolean | undefined
                include_cat?: string | undefined
                exclude_cat?: string | undefined
                include_primarycat?: string | undefined
                exclude_primarycat?: string | undefined
                include_ing?: string | undefined
                exclude_ing?: string | undefined
                cuisine?: string | undefined
                db?: string | undefined
                userset?: string | undefined
                servingsMin?: number | undefined
                totalMins?: number | undefined
                maxIngredients?: number | undefined
                minIngredients?: number | undefined
                vtn?: number | undefined
                vgn?: number | undefined
                chs?: number | undefined
                glf?: number | undefined
                ntf?: number | undefined
                dyf?: number | undefined
                sff?: number | undefined
                slf?: number | undefined
                tnf?: number | undefined
                wmf?: number | undefined
                rmf?: number | undefined
                cps?: number | undefined
                champion?: number | undefined
                synonyms?: boolean | undefined
              }
            }
            output: BigOvenModelAPI2RecipeSearchResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recipes/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: API2ModelsRecipesRecipeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: API2ModelsRecipesRecipeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: API2ModelsRecipesRecipeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { prefetch?: boolean | undefined } }
            output: API2ModelsRecipesRecipeResponse
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
