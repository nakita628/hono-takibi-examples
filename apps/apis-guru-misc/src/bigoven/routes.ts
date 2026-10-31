import { createRoute, z } from '@hono/zod-openapi'

const BigOvenModelAPIUserInfoTinySchema = z
  .object({
    FirstName: z.string().exactOptional(),
    LastName: z.string().exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    UserID: z.int32().exactOptional(),
    UserName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIUserInfoTiny')

const BigOvenModelAPIReplySchema = z
  .object({
    Comment: z.string().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    ID: z.string().exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    Poster: BigOvenModelAPIUserInfoTinySchema.exactOptional(),
    ReviewID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIReply')

const BigOvenModelAPIUserInfoSchema = z
  .object({
    FirstName: z.string().exactOptional(),
    ImageUrl48: z.string().exactOptional(),
    IsKitchenHelper: z.boolean().exactOptional(),
    IsPremium: z.boolean().exactOptional(),
    IsUsingRecurly: z.boolean().exactOptional(),
    LastName: z.string().exactOptional(),
    MemberSince: z.iso.datetime({ offset: true }).exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    PhotoUrl48: z.string().exactOptional().openapi({ readOnly: true }),
    PremiumExpiryDate: z.iso.datetime({ offset: true }).exactOptional(),
    UserID: z.int32().exactOptional(),
    UserName: z.string().exactOptional(),
    WebUrl: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIUserInfo')

type BigOvenModelAPIReviewType = {
  ActiveMinutes?: number
  Comment?: string
  CreationDate?: string
  FeaturedReply?: z.infer<typeof BigOvenModelAPIReplySchema>
  GUID?: string
  ID?: string
  LastModified?: string
  ParentID?: bigint
  Poster?: z.infer<typeof BigOvenModelAPIUserInfoSchema>
  Replies?: BigOvenModelAPIReviewType[]
  ReplyCount?: number
  ReviewID?: bigint
  StarRating?: number
  TotalMinutes?: number
}

const API2ControllersWebAPIGroceryListControllerDepartmentModelSchema = z
  .object({ items: z.string().exactOptional().openapi({ description: 'Gets or sets the items.' }) })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIGroceryListControllerDepartmentModel')

const API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestSchema = z
  .object({ text: z.string().exactOptional().openapi({ description: 'Gets or sets the text.' }) })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest')

const API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestSchema = z
  .object({
    markAsPending: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Gets or sets the mark as pending.' }),
    recipeId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Gets or sets the recipe identifier.' }),
    scale: z.float64().exactOptional().openapi({ description: 'Gets or sets the scale.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest')

const BigOvenModelAPIGroceryItemSchema = z
  .object({
    BigOvenObject: z.string().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Department: z.string().exactOptional(),
    DisplayQuantity: z.string().exactOptional(),
    GUID: z.string().exactOptional(),
    IsChecked: z.boolean().exactOptional(),
    ItemID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    LocalStatus: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    Notes: z.string().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ThirdPartyURL: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIGroceryItem')

const BigOvenModelAPIRecipeInfoSchema = z
  .object({
    BookmarkURL: z.string().exactOptional(),
    Category: z.string().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Cuisine: z.string().exactOptional(),
    HasVideos: z.boolean().exactOptional(),
    HeroPhotoUrl: z.string().exactOptional(),
    HideFromPublicSearch: z.boolean().exactOptional(),
    ImageURL: z.string().exactOptional(),
    ImageURL120: z.string().exactOptional(),
    IsBookmark: z.boolean().exactOptional(),
    IsPrivate: z.boolean().exactOptional(),
    MaxImageSquare: z.int32().exactOptional(),
    Microcategory: z.string().exactOptional(),
    Poster: BigOvenModelAPIUserInfoSchema.exactOptional(),
    QualityScore: z.float64().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ReviewCount: z.int32().exactOptional(),
    StarRating: z.float64().exactOptional(),
    StarRatingIMG: z.string().exactOptional(),
    Subcategory: z.string().exactOptional(),
    Title: z.string().exactOptional(),
    TotalTries: z.int32().exactOptional(),
    WebURL: z.string().exactOptional(),
    YieldNumber: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIRecipeInfo')

const BigOvenModelAPIGroceryGroceryListSchema = z
  .object({
    Items: z.array(BigOvenModelAPIGroceryItemSchema).exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    Recipes: z.array(BigOvenModelAPIRecipeInfoSchema).exactOptional(),
    VersionGuid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIGroceryGroceryList')

const API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestSchema = z
  .object({
    list: BigOvenModelAPIGroceryGroceryListSchema.exactOptional(),
    since: z.string().exactOptional().openapi({ description: 'Gets or sets the since.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest')

const API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestSchema = z
  .object({
    department: z.string().exactOptional().openapi({ description: 'Gets or sets the department.' }),
    name: z.string().exactOptional().openapi({ description: 'Gets or sets the name.' }),
    notes: z.string().exactOptional().openapi({ description: 'Gets or sets the notes.' }),
    quantity: z.string().exactOptional().openapi({ description: 'Gets or sets the quantity.' }),
    unit: z.string().exactOptional().openapi({ description: 'Gets or sets the unit.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest')

const API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestSchema = z
  .object({
    department: z.string().exactOptional().openapi({ description: 'Gets or sets the department.' }),
    guid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the unique identifier.' }),
    ischecked: z.boolean().exactOptional().openapi({ description: 'Gets or sets the ischecked.' }),
    name: z.string().exactOptional().openapi({ description: 'Gets or sets the name.' }),
    notes: z.string().exactOptional().openapi({ description: 'Gets or sets the notes.' }),
    quantity: z.string().exactOptional().openapi({ description: 'Gets or sets the quantity.' }),
    unit: z.string().exactOptional().openapi({ description: 'Gets or sets the unit.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest')

const BigOvenModelAPI2UserInfoTinyxSchema = z
  .object({
    FirstName: z.string().exactOptional(),
    LastName: z.string().exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    UserID: z.int32().exactOptional(),
    UserName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2UserInfoTinyx')

const BigOvenModelAPI2PhotoSchema = z
  .object({
    Caption: z.string().exactOptional(),
    CreationDate: z.string().exactOptional(),
    ImageID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    IsPrimary: z.boolean().exactOptional(),
    MaxImageSquare: z.int32().exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    Poster: BigOvenModelAPI2UserInfoTinyxSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2Photo')

const API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema = z
  .object({
    ResultCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Gets or sets the result count.' }),
    Results: z
      .array(BigOvenModelAPI2PhotoSchema)
      .exactOptional()
      .openapi({ description: 'Gets or sets the results.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIImagesControllerRecipePhotosResponse')

const API2ControllersWebAPIMeControllerOptionSchema = z
  .object({
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the description.' }),
    Key: z.string().exactOptional().openapi({ description: 'Gets or sets the key.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIMeControllerOption')

const API2ControllersWebAPIMeControllerEatingStyleSchema = z
  .object({
    Options: z
      .array(API2ControllersWebAPIMeControllerOptionSchema)
      .exactOptional()
      .openapi({ description: 'Gets or sets the options.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIMeControllerEatingStyle')

const API2ControllersWebAPIMeControllerPreferenceOptionsSchema = z
  .object({ EatingStyle: API2ControllersWebAPIMeControllerEatingStyleSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPIMeControllerPreferenceOptions')

const API2ControllersWebAPINoteControllerNoteRequestSchema = z
  .object({
    CreationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets or sets the creation date.' }),
    Date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets or sets the date.' }),
    DateDT: z.string().exactOptional().openapi({ description: 'Gets or sets the date dt.' }),
    GUID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the unique identifier.' }),
    ID: z.int32().exactOptional().openapi({ description: 'Gets or sets the identifier.' }),
    Notes: z.string().exactOptional().openapi({ description: 'Gets or sets the notes.' }),
    People: z.string().exactOptional().openapi({ description: 'Gets or sets the people.' }),
    RecipeID: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Gets or sets the recipe identifier.' }),
    UserID: z.int32().exactOptional().openapi({ description: 'Gets or sets the user identifier.' }),
    Variations: z.string().exactOptional().openapi({ description: 'Gets or sets the variations.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ControllersWebAPINoteControllerNoteRequest')

const API2ControllersWebAPIReviewControllerPostReplyReqSchema = z
  .object({
    Comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames.',
      }),
  })
  .openapi({ description: 'Reply request parameters', required: [] })
  .openapi('API2ControllersWebAPIReviewControllerPostReplyReq')

const API2ControllersWebAPIReviewControllerReviewRequestSchema = z
  .object({
    ActiveMinutes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it \r\n            demand of the cook? Optional.',
      }),
    Comment: z.string().exactOptional().openapi({ description: 'The notes' }),
    MakeAgain: z.string().exactOptional().openapi({ description: '"yes" or "no"' }),
    StarRating: z.int32().exactOptional().openapi({ description: '1, 2, 3, 4, or 5' }),
    TotalMinutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'How long, start to finish, in minutes (integer) did it take? Optional.',
      }),
  })
  .openapi({ description: 'Payload for reviews', required: [] })
  .openapi('API2ControllersWebAPIReviewControllerReviewRequest')

const API2ControllersWebAPIReviewControllerReviewRequestLegacySchema = z
  .object({
    ActiveMinutes: z.int32().exactOptional(),
    Comment: z.string().exactOptional(),
    GUID: z.string().exactOptional(),
    MakeAgain: z.string().exactOptional(),
    ParentID: z.int32().exactOptional(),
    StarRating: z.int32().exactOptional(),
    TotalMinutes: z.int32().exactOptional(),
  })
  .openapi({
    description:
      'Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development',
    required: [],
  })
  .openapi('API2ControllersWebAPIReviewControllerReviewRequestLegacy')

const API2GroceryListDepartmentResultSchema = z
  .object({
    dept: z.string().exactOptional().openapi({ description: 'Gets or sets the dept.' }),
    item: z.string().exactOptional().openapi({ description: 'Gets or sets the item.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2GroceryListDepartmentResult')

const API2ModelsAccountingSchema = z
  .object({
    CreditBalance: z.int32().exactOptional().openapi({ description: '' }),
    MemberSince: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: '' }),
    PremiumExpiryDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '' }),
    UserLevel: z.string().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ModelsAccounting')

const API2ModelsLocationSchema = z
  .object({
    City: z.string().exactOptional().openapi({ description: '' }),
    Country: z.string().exactOptional().openapi({ description: '' }),
    DMA: z.int32().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ModelsLocation')

const API2ModelsPersonalSchema = z
  .object({
    Email: z.string().exactOptional().openapi({ description: '' }),
    Location: API2ModelsLocationSchema.exactOptional(),
  })
  .openapi({ description: 'Personal level info -- email, location, etc.', required: [] })
  .openapi('API2ModelsPersonal')

const API2ModelsPreferenceSchema = z
  .object({ EatingStyle: z.string().exactOptional().openapi({ description: '' }) })
  .openapi({ description: '', required: [] })
  .openapi('API2ModelsPreference')

const API2ModelsCountsSchema = z
  .object({
    AddedCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    FollowersCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    FollowingCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    PrivateRecipeCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    PublicRecipeCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    TotalRecipes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ModelsCounts')

const API2ModelsProfileSchema = z
  .object({
    AboutMe: z.string().exactOptional().openapi({ description: '' }),
    BackgroundUrl: z.string().exactOptional().openapi({ description: '' }),
    Counts: API2ModelsCountsSchema.exactOptional(),
    FirstName: z.string().exactOptional().openapi({ description: '' }),
    FullName: z.string().exactOptional().openapi({ description: '' }),
    HomeUrl: z.string().exactOptional().openapi({ description: '' }),
    LastName: z.string().exactOptional().openapi({ description: '' }),
    PhotoUrl: z.string().exactOptional().openapi({ description: '' }),
    UserID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    UserName: z.string().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('API2ModelsProfile')

const API2ModelsBigOvenUserSchema = z
  .object({
    Accounting: API2ModelsAccountingSchema.exactOptional(),
    BOAuthToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-specific authentication token' }),
    LastChangeLogID: z.string().exactOptional().openapi({ description: 'Last change log' }),
    Personal: API2ModelsPersonalSchema.exactOptional(),
    Preferences: API2ModelsPreferenceSchema.exactOptional(),
    Profile: API2ModelsProfileSchema.exactOptional(),
  })
  .openapi({ description: 'An API2 wrapper object for a user', required: [] })
  .openapi('API2ModelsBigOvenUser')

const API2ModelsRecipesFeedbackDTOSchema = z
  .object({ feedback: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('API2ModelsRecipesFeedbackDTO')

const BigOvenModelAPIIngredientInfoSchema = z
  .object({
    Department: z.string().exactOptional(),
    MasterIngredientID: z.int32().exactOptional(),
    Name: z.string().exactOptional(),
    UsuallyOnHand: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIIngredientInfo')

const BigOvenModelAPIIngredientSchema = z
  .object({
    DisplayIndex: z.int32().exactOptional(),
    DisplayQuantity: z.string().exactOptional(),
    HTMLName: z.string().exactOptional(),
    IngredientID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    IngredientInfo: BigOvenModelAPIIngredientInfoSchema.exactOptional(),
    IsHeading: z.boolean().exactOptional(),
    IsLinked: z.boolean().exactOptional(),
    MetricDisplayQuantity: z.string().exactOptional(),
    MetricQuantity: z.float64().exactOptional(),
    MetricUnit: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    PreparationNotes: z.string().exactOptional(),
    Quantity: z.float64().exactOptional(),
    Unit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIIngredient')

const BigOvenModelAPINutritionInfoSchema = z
  .object({
    CaloriesFromFat: z.float64().exactOptional(),
    Cholesterol: z.float64().exactOptional(),
    CholesterolPct: z.float64().exactOptional(),
    DietaryFiber: z.float64().exactOptional(),
    DietaryFiberPct: z.float64().exactOptional(),
    MonoFat: z.float64().exactOptional(),
    PolyFat: z.float64().exactOptional(),
    Potassium: z.float64().exactOptional(),
    PotassiumPct: z.float64().exactOptional(),
    Protein: z.float64().exactOptional(),
    ProteinPct: z.float64().exactOptional(),
    SatFat: z.float64().exactOptional(),
    SatFatPct: z.float64().exactOptional(),
    SingularYieldUnit: z.string().exactOptional(),
    Sodium: z.float64().exactOptional(),
    SodiumPct: z.float64().exactOptional(),
    Sugar: z.float64().exactOptional(),
    TotalCalories: z.float64().exactOptional(),
    TotalCarbs: z.float64().exactOptional(),
    TotalCarbsPct: z.float64().exactOptional(),
    TotalFat: z.float64().exactOptional(),
    TotalFatPct: z.float64().exactOptional(),
    TransFat: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPINutritionInfo')

const BigOvenModelInstructionStepSchema = z
  .object({
    EndGantt: z.int32().exactOptional(),
    StartGantt: z.int32().exactOptional(),
    Text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelInstructionStep')

const API2ModelsRecipesRecipeVideoResponseSchema = z
  .object({
    InsertedOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets or sets the date the video was added.' }),
    IsPrimaryVideo: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Gets or sets a value indicating whether the video is the primary video of the recipe.',
      }),
    MediaId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the JWPlayer media id.' }),
    VidId: z.int32().exactOptional().openapi({ description: 'Gets or sets the video id.' }),
  })
  .openapi({ description: 'DTO used to return the details of a recipe video', required: [] })
  .openapi('API2ModelsRecipesRecipeVideoResponse')

const API2ModelsRecipesRecipeResponseSchema = z
  .object({
    ActiveMinutes: z.int32().exactOptional(),
    AdTags: z.string().exactOptional(),
    AdminBoost: z.int32().exactOptional(),
    AllCategoriesText: z.string().exactOptional(),
    BookmarkImageURL: z.string().exactOptional(),
    BookmarkSiteLogo: z.string().exactOptional(),
    BookmarkURL: z.string().exactOptional(),
    Category: z.string().exactOptional(),
    Collection: z.string().exactOptional(),
    CollectionID: z.int32().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Cuisine: z.string().exactOptional(),
    Description: z.string().exactOptional(),
    FavoriteCount: z.int32().exactOptional(),
    ImageSquares: z.array(z.int32()).exactOptional(),
    ImageURL: z.string().exactOptional(),
    Ingredients: z.array(BigOvenModelAPIIngredientSchema).exactOptional(),
    IngredientsTextBlock: z.string().exactOptional(),
    Instructions: z.string().exactOptional(),
    IsBookmark: z.boolean().exactOptional(),
    IsPrivate: z.boolean().exactOptional(),
    IsRecipeScan: z.boolean().exactOptional(),
    IsSponsored: z.boolean().exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    MaxImageSquare: z.int32().exactOptional(),
    MedalCount: z.int32().exactOptional(),
    MenuCount: z.int32().exactOptional(),
    Microcategory: z.string().exactOptional(),
    NotesCount: z.int32().exactOptional(),
    NutritionInfo: BigOvenModelAPINutritionInfoSchema.exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    Poster: BigOvenModelAPIUserInfoSchema.exactOptional(),
    PrimaryIngredient: z.string().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ReviewCount: z.int32().exactOptional(),
    StarRating: z.float64().exactOptional(),
    Steps: z.array(BigOvenModelInstructionStepSchema).exactOptional(),
    Subcategory: z.string().exactOptional(),
    Title: z.string().exactOptional(),
    TotalMinutes: z.int32().exactOptional(),
    VariantOfRecipeID: z.int32().exactOptional(),
    VerifiedByClass: z.string().exactOptional(),
    VerifiedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    Videos: z
      .array(API2ModelsRecipesRecipeVideoResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Gets or sets the recipe videos, i.e. a list of type {API2.Models.Recipes.RecipeVideoResponse}',
      }),
    WebURL: z.string().exactOptional(),
    YieldNumber: z.float64().exactOptional(),
    YieldUnit: z.string().exactOptional(),
  })
  .openapi({ description: 'DTO used to return a recipe with videos', required: [] })
  .openapi('API2ModelsRecipesRecipeResponse')

const SystemObjectSchema = z.object({}).openapi('SystemObject')

const API2ResultSchema = z
  .object({
    Data: SystemObjectSchema.exactOptional(),
    Message: z.string().exactOptional(),
    StatusCode: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('API2Result')

const BigOvenModelAPIImageSchema = z
  .object({
    Caption: z.string().exactOptional(),
    CreationDate: z.string().exactOptional(),
    ImageID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ImageSquares: z.array(z.int32()).exactOptional(),
    ImageURL: z.string().exactOptional(),
    ImageURL120: z.string().exactOptional(),
    ImageURL128: z.string().exactOptional(),
    ImageURL200: z.string().exactOptional(),
    ImageURL256: z.string().exactOptional(),
    ImageURL48: z.string().exactOptional(),
    ImageURL64: z.string().exactOptional(),
    IsPrimary: z.boolean().exactOptional(),
    MaxImageSquare: z.int32().exactOptional(),
    Poster: BigOvenModelAPIUserInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIImage')

const BigOvenModelAPIRecipeSchema = z
  .object({
    ActiveMinutes: z.int32().exactOptional(),
    AdTags: z.string().exactOptional(),
    AdminBoost: z.int32().exactOptional(),
    AllCategoriesText: z.string().exactOptional(),
    BookmarkImageURL: z.string().exactOptional(),
    BookmarkSiteLogo: z.string().exactOptional(),
    BookmarkURL: z.string().exactOptional(),
    Category: z.string().exactOptional(),
    Collection: z.string().exactOptional(),
    CollectionID: z.int32().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Cuisine: z.string().exactOptional(),
    Description: z.string().exactOptional(),
    FavoriteCount: z.int32().exactOptional(),
    HeroPhotoUrl: z.string().exactOptional(),
    ImageSquares: z.array(z.int32()).exactOptional(),
    ImageURL: z.string().exactOptional(),
    Ingredients: z.array(BigOvenModelAPIIngredientSchema).exactOptional(),
    IngredientsTextBlock: z.string().exactOptional(),
    Instructions: z.string().exactOptional(),
    IsBookmark: z.boolean().exactOptional(),
    IsPrivate: z.boolean().exactOptional(),
    IsRecipeScan: z.boolean().exactOptional(),
    IsSponsored: z.boolean().exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    MaxImageSquare: z.int32().exactOptional(),
    MedalCount: z.int32().exactOptional(),
    MenuCount: z.int32().exactOptional(),
    Microcategory: z.string().exactOptional(),
    NotesCount: z.int32().exactOptional(),
    NutritionInfo: BigOvenModelAPINutritionInfoSchema.exactOptional(),
    Poster: BigOvenModelAPIUserInfoSchema.exactOptional(),
    PrimaryIngredient: z.string().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ReviewCount: z.int32().exactOptional(),
    StarRating: z.float64().exactOptional(),
    Subcategory: z.string().exactOptional(),
    Title: z.string().exactOptional(),
    TotalMinutes: z.int32().exactOptional(),
    VariantOfRecipeID: z.int32().exactOptional(),
    VerifiedByClass: z.string().exactOptional(),
    VerifiedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    WebURL: z.string().exactOptional(),
    YieldNumber: z.float64().exactOptional(),
    YieldUnit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIRecipe')

const BigOvenModelAPIRecipeNoteSchema = z
  .object({
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Date: z.string().exactOptional(),
    DateDT: z.iso.datetime({ offset: true }).exactOptional(),
    GUID: z.string().exactOptional(),
    ID: z.int32().exactOptional(),
    Notes: z.string().exactOptional(),
    People: z.string().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    UserID: z.int32().exactOptional(),
    Variations: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIRecipeNote')

const BigOvenModelAPIRecipeNoteListSchema = z
  .object({
    ResultCount: z.int32().exactOptional(),
    Results: z.array(BigOvenModelAPIRecipeNoteSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPIRecipeNoteList')

const BigOvenModelAPIReviewSchema: z.ZodType<BigOvenModelAPIReviewType> = z
  .lazy(() =>
    z
      .object({
        ActiveMinutes: z.int32().exactOptional(),
        Comment: z.string().exactOptional(),
        CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
        FeaturedReply: BigOvenModelAPIReplySchema.exactOptional(),
        GUID: z.string().exactOptional(),
        ID: z.string().exactOptional(),
        LastModified: z.iso.datetime({ offset: true }).exactOptional(),
        ParentID: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        Poster: BigOvenModelAPIUserInfoSchema.exactOptional(),
        Replies: z.array(BigOvenModelAPIReviewSchema).exactOptional(),
        ReplyCount: z.int32().exactOptional(),
        ReviewID: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        StarRating: z.float64().exactOptional(),
        TotalMinutes: z.int32().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('BigOvenModelAPIReview')

const BigOvenModelAPI2RecipeInfoxSchema = z
  .object({
    Category: z.string().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Cuisine: z.string().exactOptional(),
    HasVideos: z.boolean().exactOptional(),
    IsBookmark: z.boolean().exactOptional(),
    IsPrivate: z.boolean().exactOptional(),
    IsRecipeScan: z.boolean().exactOptional(),
    Microcategory: z.string().exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    Poster: BigOvenModelAPI2UserInfoTinyxSchema.exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ReviewCount: z.int32().exactOptional(),
    Servings: z.float64().exactOptional(),
    StarRating: z.float64().exactOptional(),
    Subcategory: z.string().exactOptional(),
    Title: z.string().exactOptional(),
    TotalTries: z.int32().exactOptional(),
    WebURL: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2RecipeInfox')

const BigOvenModelAPI2CollectionInfoSchema = z
  .object({
    Description: z.string().exactOptional(),
    ID: z.int32().exactOptional(),
    IsFiltered: z.boolean().exactOptional(),
    IsSponsored: z.boolean().exactOptional(),
    MobileUrl: z.string().exactOptional(),
    PRO: z.boolean().exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    Results: z.array(BigOvenModelAPI2RecipeInfoxSchema).exactOptional(),
    Title: z.string().exactOptional(),
    Token: z.string().exactOptional(),
    WebUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2CollectionInfo')

const BigOvenModelAPI2GroceryListSchema = z
  .object({
    Items: z.array(BigOvenModelAPIGroceryItemSchema).exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    Recipes: z.array(BigOvenModelAPI2RecipeInfoxSchema).exactOptional(),
    VersionGuid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2GroceryList')

const BigOvenModelAPI2RecipeSchema = z
  .object({
    ActiveMinutes: z.int32().exactOptional(),
    AdTags: z.string().exactOptional(),
    AdminBoost: z.int32().exactOptional(),
    AllCategoriesText: z.string().exactOptional(),
    BookmarkImageURL: z.string().exactOptional(),
    BookmarkSiteLogo: z.string().exactOptional(),
    BookmarkURL: z.string().exactOptional(),
    Category: z.string().exactOptional(),
    Collection: z.string().exactOptional(),
    CollectionID: z.int32().exactOptional(),
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Cuisine: z.string().exactOptional(),
    Description: z.string().exactOptional(),
    FavoriteCount: z.int32().exactOptional(),
    ImageSquares: z.array(z.int32()).exactOptional(),
    ImageURL: z.string().exactOptional(),
    Ingredients: z.array(BigOvenModelAPIIngredientSchema).exactOptional(),
    IngredientsTextBlock: z.string().exactOptional(),
    Instructions: z.string().exactOptional(),
    IsBookmark: z.boolean().exactOptional(),
    IsPrivate: z.boolean().exactOptional(),
    IsRecipeScan: z.boolean().exactOptional(),
    IsSponsored: z.boolean().exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    MaxImageSquare: z.int32().exactOptional(),
    MedalCount: z.int32().exactOptional(),
    MenuCount: z.int32().exactOptional(),
    Microcategory: z.string().exactOptional(),
    NotesCount: z.int32().exactOptional(),
    NutritionInfo: BigOvenModelAPINutritionInfoSchema.exactOptional(),
    PhotoUrl: z.string().exactOptional(),
    Poster: BigOvenModelAPIUserInfoSchema.exactOptional(),
    PrimaryIngredient: z.string().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ReviewCount: z.int32().exactOptional(),
    StarRating: z.float64().exactOptional(),
    Steps: z.array(BigOvenModelInstructionStepSchema).exactOptional(),
    Subcategory: z.string().exactOptional(),
    Title: z.string().exactOptional(),
    TotalMinutes: z.int32().exactOptional(),
    VariantOfRecipeID: z.int32().exactOptional(),
    VerifiedByClass: z.string().exactOptional(),
    VerifiedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    WebURL: z.string().exactOptional(),
    YieldNumber: z.float64().exactOptional(),
    YieldUnit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2Recipe')

const BigOvenModelAPI2RecipeNoteSchema = z
  .object({
    CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
    Date: z.string().exactOptional(),
    DateDT: z.iso.datetime({ offset: true }).exactOptional(),
    GUID: z.string().exactOptional(),
    ID: z.int32().exactOptional(),
    Notes: z.string().exactOptional(),
    People: z.string().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    UserID: z.int32().exactOptional(),
    Variations: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2RecipeNote')

const BigOvenModelAPI2RecipeSearchResultSchema = z
  .object({
    ResultCount: z.int32().exactOptional(),
    Results: z.array(BigOvenModelAPI2RecipeInfoxSchema).exactOptional(),
    SpellSuggest: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelAPI2RecipeSearchResult')

const BigOvenModelRecipeCategorySchema = z
  .object({
    Category: z.string().exactOptional(),
    DefaultActiveMinutes: z.int32().exactOptional(),
    DefaultTotalMinutes: z.int32().exactOptional(),
    ID: z.int32().exactOptional(),
    ParentID: z.int32().exactOptional(),
    PrimaryImage: z.string().exactOptional(),
    ShortDescription: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelRecipeCategory')

const BigOvenModelRecipeInfoDateTuple2Schema = z
  .object({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    recipeInfo: BigOvenModelAPI2RecipeInfoxSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelRecipeInfoDateTuple2')

const BigOvenModelRecipeInfoReviewTuple2Schema = z
  .object({
    RecipeInfo: BigOvenModelAPI2RecipeInfoxSchema.exactOptional(),
    Review: BigOvenModelAPIReviewSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelRecipeInfoReviewTuple2')

const BigOvenModelRecipeInfoTinySchema = z
  .object({
    ImageURL: z.string().exactOptional(),
    QualityScore: z.int32().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    Servings: z.float64().exactOptional(),
    Title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelRecipeInfoTiny')

const BigOvenModelShoppingListLineSchema = z
  .object({
    DateAdded: z.iso.datetime({ offset: true }).exactOptional(),
    Dept: z.string().exactOptional(),
    GUID: z.string().exactOptional(),
    HTMLItemName: z.string().exactOptional(),
    IsChecked: z.boolean().exactOptional(),
    ItemName: z.string().exactOptional(),
    LastModified: z.iso.datetime({ offset: true }).exactOptional(),
    ListID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    MealPlanID: z.int32().exactOptional(),
    MealPlanObjectType: z.int32().exactOptional(),
    Notes: z.string().exactOptional(),
    PendingAddition: z.boolean().exactOptional(),
    RecipeID: z.int32().exactOptional(),
    ShoppingListLineID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    Store: z.string().exactOptional(),
    TextAmt: z.string().exactOptional(),
    ThirdPartyHost: z.string().exactOptional(),
    ThirdPartyTitle: z.string().exactOptional(),
    ThirdPartyURL: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenModelShoppingListLine')

const BigOvenResultSchema = z
  .object({
    Data: SystemObjectSchema.exactOptional(),
    Message: z.string().exactOptional(),
    StatusCode: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BigOvenResult')

const API2ControllersWebAPIReviewControllerPostReplyReqRequestBody = {
  content: {
    'application/json': { schema: API2ControllersWebAPIReviewControllerPostReplyReqSchema },
    'application/x-www-form-urlencoded': {
      schema: API2ControllersWebAPIReviewControllerPostReplyReqSchema,
    },
    'application/xml': { schema: API2ControllersWebAPIReviewControllerPostReplyReqSchema },
    'text/json': { schema: API2ControllersWebAPIReviewControllerPostReplyReqSchema },
    'text/xml': { schema: API2ControllersWebAPIReviewControllerPostReplyReqSchema },
  },
  required: true,
}

const API2ControllersWebAPIReviewControllerReviewRequestRequestBody = {
  content: {
    'application/json': { schema: API2ControllersWebAPIReviewControllerReviewRequestSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          ActiveMinutes: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description:
                'How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it \r\n            demand of the cook? Optional.',
            }),
          Comment: z.string().exactOptional().openapi({ description: 'The notes' }),
          MakeAgain: z.string().exactOptional().openapi({ description: '"yes" or "no"' }),
          StarRating: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({ description: '1, 2, 3, 4, or 5' }),
          TotalMinutes: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional()
            .openapi({
              description: 'How long, start to finish, in minutes (integer) did it take? Optional.',
            }),
        })
        .openapi({ description: 'Payload for reviews', required: [] }),
    },
    'application/xml': { schema: API2ControllersWebAPIReviewControllerReviewRequestSchema },
    'text/json': { schema: API2ControllersWebAPIReviewControllerReviewRequestSchema },
    'text/xml': { schema: API2ControllersWebAPIReviewControllerReviewRequestSchema },
  },
  required: true,
}

const BigOvenModelAPIRecipeRequestBody = {
  content: {
    'application/json': { schema: BigOvenModelAPIRecipeSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          ActiveMinutes: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          AdTags: z.string().exactOptional(),
          AdminBoost: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          AllCategoriesText: z.string().exactOptional(),
          BookmarkImageURL: z.string().exactOptional(),
          BookmarkSiteLogo: z.string().exactOptional(),
          BookmarkURL: z.string().exactOptional(),
          Category: z.string().exactOptional(),
          Collection: z.string().exactOptional(),
          CollectionID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
          Cuisine: z.string().exactOptional(),
          Description: z.string().exactOptional(),
          FavoriteCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          HeroPhotoUrl: z.string().exactOptional(),
          ImageSquares: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                ),
              ),
            )
            .exactOptional(),
          ImageURL: z.string().exactOptional(),
          Ingredients: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    DisplayIndex: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      )
                      .exactOptional(),
                    DisplayQuantity: z.string().exactOptional(),
                    HTMLName: z.string().exactOptional(),
                    IngredientID: z
                      .preprocess((val) => {
                        if (
                          typeof val !== 'string' ||
                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                        )
                          return val
                        if (/^-?\d+$/.test(val)) return BigInt(val)
                        const num = Number(val)
                        return Number.isSafeInteger(num) ? BigInt(num) : val
                      }, z.int64())
                      .exactOptional()
                      .openapi({ type: 'integer', format: 'int64' }),
                    IngredientInfo: z
                      .object({
                        Department: z.string().exactOptional(),
                        MasterIngredientID: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                        Name: z.string().exactOptional(),
                        UsuallyOnHand: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    IsHeading: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        z.boolean(),
                      )
                      .exactOptional(),
                    IsLinked: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        z.boolean(),
                      )
                      .exactOptional(),
                    MetricDisplayQuantity: z.string().exactOptional(),
                    MetricQuantity: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    MetricUnit: z.string().exactOptional(),
                    Name: z.string().exactOptional(),
                    PreparationNotes: z.string().exactOptional(),
                    Quantity: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.float64(),
                      )
                      .exactOptional(),
                    Unit: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            )
            .exactOptional(),
          IngredientsTextBlock: z.string().exactOptional(),
          Instructions: z.string().exactOptional(),
          IsBookmark: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          IsPrivate: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          IsRecipeScan: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          IsSponsored: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          LastModified: z.iso.datetime({ offset: true }).exactOptional(),
          MaxImageSquare: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          MedalCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          MenuCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          Microcategory: z.string().exactOptional(),
          NotesCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          NutritionInfo: z
            .object({
              CaloriesFromFat: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              Cholesterol: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              CholesterolPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              DietaryFiber: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              DietaryFiberPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              MonoFat: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              PolyFat: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              Potassium: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              PotassiumPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              Protein: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              ProteinPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              SatFat: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              SatFatPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              SingularYieldUnit: z.string().exactOptional(),
              Sodium: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              SodiumPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              Sugar: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TotalCalories: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TotalCarbs: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TotalCarbsPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TotalFat: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TotalFatPct: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
              TransFat: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          Poster: z
            .object({
              FirstName: z.string().exactOptional(),
              ImageUrl48: z.string().exactOptional(),
              IsKitchenHelper: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              IsPremium: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              IsUsingRecurly: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              LastName: z.string().exactOptional(),
              MemberSince: z.iso.datetime({ offset: true }).exactOptional(),
              PhotoUrl: z.string().exactOptional(),
              PhotoUrl48: z.string().exactOptional().openapi({ readOnly: true }),
              PremiumExpiryDate: z.iso.datetime({ offset: true }).exactOptional(),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              UserName: z.string().exactOptional(),
              WebUrl: z.string().exactOptional().openapi({ readOnly: true }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          PrimaryIngredient: z.string().exactOptional(),
          RecipeID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          ReviewCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          StarRating: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .exactOptional(),
          Subcategory: z.string().exactOptional(),
          Title: z.string().exactOptional(),
          TotalMinutes: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          VariantOfRecipeID: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .exactOptional(),
          VerifiedByClass: z.string().exactOptional(),
          VerifiedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
          WebURL: z.string().exactOptional(),
          YieldNumber: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float64(),
            )
            .exactOptional(),
          YieldUnit: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'application/xml': { schema: BigOvenModelAPIRecipeSchema },
    'text/json': { schema: BigOvenModelAPIRecipeSchema },
    'text/xml': { schema: BigOvenModelAPIRecipeSchema },
  },
  required: true,
}

const ApiKeySecurityScheme = {
  description:
    'Pass your api_key in the header (recommended) or as a URL parameter. For the URL parameter, use api_key. For the header, send it as a header value for: X-BigOven-API-Key',
  in: 'header',
  name: 'X-BigOven-API-Key',
  type: 'apiKey',
}

const BasicSecurityScheme = {
  description:
    'Basic HTTP Authentication is used for those endpoint calls where you want to act as a BigOven user -- e.g., to get the list of favorites of a signed-in user, or add items to their grocery list.',
  scheme: 'basic',
  type: 'http',
}

export const getCollectionIdRoute = createRoute({
  method: 'get',
  path: '/collection/{id}',
  tags: ['Collection'],
  summary: 'Gets a recipe collection. A recipe collection is a curated set of recipes.',
  operationId: 'Collection_GetCollection',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'the collection identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'results per page',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'page number (starting with 1)',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      test: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'test',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sessionForLogging: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'sessionForLogging',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
      },
    },
  },
})

export const getCollectionIdMetaRoute = createRoute({
  method: 'get',
  path: '/collection/{id}/meta',
  tags: ['Collection'],
  summary: 'Gets a recipe collection metadata. A recipe collection is a curated set of recipes.',
  operationId: 'Collection_GetCollectionMeta',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'the collection identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2CollectionInfoSchema },
        'application/xml': { schema: BigOvenModelAPI2CollectionInfoSchema },
        'text/json': { schema: BigOvenModelAPI2CollectionInfoSchema },
        'text/xml': { schema: BigOvenModelAPI2CollectionInfoSchema },
      },
    },
  },
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Collection'],
  summary:
    'Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.',
  operationId: 'Collection_Collections',
  request: {
    query: z.object({
      test: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'test', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelAPI2CollectionInfoSchema) },
        'application/xml': { schema: z.array(BigOvenModelAPI2CollectionInfoSchema) },
        'text/json': { schema: z.array(BigOvenModelAPI2CollectionInfoSchema) },
        'text/xml': { schema: z.array(BigOvenModelAPI2CollectionInfoSchema) },
      },
    },
  },
})

export const getGrocerylistRoute = createRoute({
  method: 'get',
  path: '/grocerylist',
  tags: ['GroceryList'],
  summary: "Get the user's grocery list.  User is determined by Basic Authentication.",
  operationId: 'GroceryList_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2GroceryListSchema },
        'application/xml': { schema: BigOvenModelAPI2GroceryListSchema },
        'text/json': { schema: BigOvenModelAPI2GroceryListSchema },
        'text/xml': { schema: BigOvenModelAPI2GroceryListSchema },
      },
    },
  },
})

export const deleteGrocerylistRoute = createRoute({
  method: 'delete',
  path: '/grocerylist',
  tags: ['GroceryList'],
  summary:
    'Delete all the items on a grocery list; faster operation than a sync with deleted items.',
  operationId: 'GroceryList_Delete',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const postGrocerylistClearcheckedlinesRoute = createRoute({
  method: 'post',
  path: '/grocerylist/clearcheckedlines',
  tags: ['GroceryList'],
  summary: 'Clears the checked lines.',
  operationId: 'GroceryList_GroceryListRemoveMarkedItems',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2GroceryListSchema },
        'application/xml': { schema: BigOvenModelAPI2GroceryListSchema },
        'text/json': { schema: BigOvenModelAPI2GroceryListSchema },
        'text/xml': { schema: BigOvenModelAPI2GroceryListSchema },
      },
    },
  },
})

export const postGrocerylistDepartmentRoute = createRoute({
  method: 'post',
  path: '/grocerylist/department',
  tags: ['GroceryList'],
  summary: 'Departmentalize a list of strings -- used for ad-hoc grocery list item addition',
  operationId: 'GroceryList_Department',
  request: {
    body: {
      description: 'see DepartmentModel for the request payload',
      content: {
        'application/json': {
          schema: API2ControllersWebAPIGroceryListControllerDepartmentModelSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: API2ControllersWebAPIGroceryListControllerDepartmentModelSchema,
        },
        'application/xml': {
          schema: API2ControllersWebAPIGroceryListControllerDepartmentModelSchema,
        },
        'text/json': { schema: API2ControllersWebAPIGroceryListControllerDepartmentModelSchema },
        'text/xml': { schema: API2ControllersWebAPIGroceryListControllerDepartmentModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(API2GroceryListDepartmentResultSchema) },
        'application/xml': { schema: z.array(API2GroceryListDepartmentResultSchema) },
        'text/json': { schema: z.array(API2GroceryListDepartmentResultSchema) },
        'text/xml': { schema: z.array(API2GroceryListDepartmentResultSchema) },
      },
    },
  },
})

export const postGrocerylistItemRoute = createRoute({
  method: 'post',
  path: '/grocerylist/item',
  tags: ['GroceryList'],
  summary: 'Add a single line item to the grocery list',
  request: {
    body: {
      description: 'name, quantity, unit, notes, department',
      content: {
        'application/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestSchema,
        },
        'application/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestSchema,
        },
        'text/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestSchema,
        },
        'text/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequestSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelShoppingListLineSchema },
        'application/xml': { schema: BigOvenModelShoppingListLineSchema },
        'text/json': { schema: BigOvenModelShoppingListLineSchema },
        'text/xml': { schema: BigOvenModelShoppingListLineSchema },
      },
    },
  },
})

export const putGrocerylistItemGuidRoute = createRoute({
  method: 'put',
  path: '/grocerylist/item/{guid}',
  tags: ['GroceryList'],
  summary: 'Update a grocery item by GUID',
  operationId: 'GroceryList_GroceryListItemGuid',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'guid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              department: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the department.' }),
              guid: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the unique identifier.' }),
              ischecked: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the ischecked.' }),
              name: z.string().exactOptional().openapi({ description: 'Gets or sets the name.' }),
              notes: z.string().exactOptional().openapi({ description: 'Gets or sets the notes.' }),
              quantity: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the quantity.' }),
              unit: z.string().exactOptional().openapi({ description: 'Gets or sets the unit.' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'application/xml': {
          schema: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestSchema,
        },
        'text/json': {
          schema: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestSchema,
        },
        'text/xml': {
          schema: API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequestSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const deleteGrocerylistItemGuidRoute = createRoute({
  method: 'delete',
  path: '/grocerylist/item/{guid}',
  tags: ['GroceryList'],
  summary: '/grocerylist/item/{guid}  DELETE will delete this item assuming you own it.',
  operationId: 'GroceryList_DeleteItemByGuid',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'guid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const postGrocerylistLineRoute = createRoute({
  method: 'post',
  path: '/grocerylist/line',
  tags: ['GroceryList'],
  summary: 'Add a single line item to the grocery list',
  operationId: 'GroceryList_Post',
  request: {
    body: {
      description: 'name, quantity, unit, notes, department',
      content: {
        'application/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestSchema,
        },
        'application/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestSchema,
        },
        'text/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestSchema,
        },
        'text/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequestSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelShoppingListLineSchema },
        'application/xml': { schema: BigOvenModelShoppingListLineSchema },
        'text/json': { schema: BigOvenModelShoppingListLineSchema },
        'text/xml': { schema: BigOvenModelShoppingListLineSchema },
      },
    },
  },
})

export const postGrocerylistRecipeRoute = createRoute({
  method: 'post',
  path: '/grocerylist/recipe',
  tags: ['GroceryList'],
  summary:
    'Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that\r\n            the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.',
  operationId: 'GroceryList_AddRecipe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              markAsPending: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the mark as pending.' }),
              recipeId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the recipe identifier.' }),
              scale: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the scale.' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'application/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestSchema,
        },
        'text/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestSchema,
        },
        'text/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequestSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const postGrocerylistSyncRoute = createRoute({
  method: 'post',
  path: '/grocerylist/sync',
  tags: ['GroceryList'],
  summary: 'Synchronize the grocery list.  Call this with a POST to /grocerylist/sync',
  operationId: 'GroceryList_PostGroceryListSync',
  request: {
    body: {
      content: {
        'application/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestSchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              list: z
                .object({
                  Items: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            BigOvenObject: z.string().exactOptional(),
                            CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
                            Department: z.string().exactOptional(),
                            DisplayQuantity: z.string().exactOptional(),
                            GUID: z.string().exactOptional(),
                            IsChecked: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            ItemID: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({ type: 'integer', format: 'int64' }),
                            LastModified: z.iso.datetime({ offset: true }).exactOptional(),
                            LocalStatus: z.string().exactOptional(),
                            Name: z.string().exactOptional(),
                            Notes: z.string().exactOptional(),
                            RecipeID: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            ThirdPartyURL: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                  LastModified: z.iso.datetime({ offset: true }).exactOptional(),
                  Recipes: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            BookmarkURL: z.string().exactOptional(),
                            Category: z.string().exactOptional(),
                            CreationDate: z.iso.datetime({ offset: true }).exactOptional(),
                            Cuisine: z.string().exactOptional(),
                            HasVideos: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            HeroPhotoUrl: z.string().exactOptional(),
                            HideFromPublicSearch: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            ImageURL: z.string().exactOptional(),
                            ImageURL120: z.string().exactOptional(),
                            IsBookmark: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            IsPrivate: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            MaxImageSquare: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            Microcategory: z.string().exactOptional(),
                            Poster: z
                              .object({
                                FirstName: z.string().exactOptional(),
                                ImageUrl48: z.string().exactOptional(),
                                IsKitchenHelper: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional(),
                                IsPremium: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional(),
                                IsUsingRecurly: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional(),
                                LastName: z.string().exactOptional(),
                                MemberSince: z.iso.datetime({ offset: true }).exactOptional(),
                                PhotoUrl: z.string().exactOptional(),
                                PhotoUrl48: z.string().exactOptional().openapi({ readOnly: true }),
                                PremiumExpiryDate: z.iso.datetime({ offset: true }).exactOptional(),
                                UserID: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .exactOptional(),
                                UserName: z.string().exactOptional(),
                                WebUrl: z.string().exactOptional().openapi({ readOnly: true }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            QualityScore: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              )
                              .exactOptional(),
                            RecipeID: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            ReviewCount: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            StarRating: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              )
                              .exactOptional(),
                            StarRatingIMG: z.string().exactOptional(),
                            Subcategory: z.string().exactOptional(),
                            Title: z.string().exactOptional(),
                            TotalTries: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            WebURL: z.string().exactOptional(),
                            YieldNumber: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float64(),
                              )
                              .exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                  VersionGuid: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              since: z.string().exactOptional().openapi({ description: 'Gets or sets the since.' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'application/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestSchema,
        },
        'text/json': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestSchema,
        },
        'text/xml': {
          schema: API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const postImageAvatarRoute = createRoute({
  method: 'post',
  path: '/image/avatar',
  tags: ['Images'],
  summary:
    'POST: /image/avatar\r\n             \r\n            Testing with Postman (validated 11/20/2015):\r\n            1) Remove the Content-Type header; add authentication information\r\n            2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,\r\n            change the type of the input from Text to File.  Browse and choose a JPG.',
  operationId: 'Images_UploadUserAvatar',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    400: { description: 'if bad request (e.g., missing parameters)' },
    401: { description: 'if the user is unknown' },
    415: { description: 'if unsupported media type (e.g., bad JPG)' },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Me'],
  summary: 'Indexes this instance.',
  operationId: 'Me_Index',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
    },
  },
})

export const putMeRoute = createRoute({
  method: 'put',
  path: '/me',
  tags: ['Me'],
  summary: 'Puts me.',
  operationId: 'Me_PutMe',
  request: {
    body: {
      description: 'The req.',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Accounting: z
                .object({
                  CreditBalance: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: '' }),
                  MemberSince: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: '' }),
                  PremiumExpiryDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: '' }),
                  UserLevel: z.string().exactOptional().openapi({ description: '' }),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
              BOAuthToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The user-specific authentication token' }),
              LastChangeLogID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Last change log' }),
              Personal: z
                .object({
                  Email: z.string().exactOptional().openapi({ description: '' }),
                  Location: z
                    .object({
                      City: z.string().exactOptional().openapi({ description: '' }),
                      Country: z.string().exactOptional().openapi({ description: '' }),
                      DMA: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({ description: '' }),
                    })
                    .exactOptional()
                    .openapi({ description: '', required: [] }),
                })
                .exactOptional()
                .openapi({
                  description: 'Personal level info -- email, location, etc.',
                  required: [],
                }),
              Preferences: API2ModelsPreferenceSchema.exactOptional(),
              Profile: z
                .object({
                  AboutMe: z.string().exactOptional().openapi({ description: '' }),
                  BackgroundUrl: z.string().exactOptional().openapi({ description: '' }),
                  Counts: z
                    .object({
                      AddedCount: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', description: '' }),
                      FollowersCount: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', description: '' }),
                      FollowingCount: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', description: '' }),
                      PrivateRecipeCount: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', description: '' }),
                      PublicRecipeCount: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', description: '' }),
                      TotalRecipes: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', description: '' }),
                    })
                    .exactOptional()
                    .openapi({ description: '', required: [] }),
                  FirstName: z.string().exactOptional().openapi({ description: '' }),
                  FullName: z.string().exactOptional().openapi({ description: '' }),
                  HomeUrl: z.string().exactOptional().openapi({ description: '' }),
                  LastName: z.string().exactOptional().openapi({ description: '' }),
                  PhotoUrl: z.string().exactOptional().openapi({ description: '' }),
                  UserID: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                  UserName: z.string().exactOptional().openapi({ description: '' }),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
            })
            .openapi({ description: 'An API2 wrapper object for a user', required: [] }),
        },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
    },
  },
})

export const putMePersonalRoute = createRoute({
  method: 'put',
  path: '/me/personal',
  tags: ['Me'],
  summary: 'Puts me personal.',
  operationId: 'Me_PutMePersonal',
  request: {
    body: {
      description: 'The req.',
      content: {
        'application/json': { schema: API2ModelsPersonalSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Email: z.string().exactOptional().openapi({ description: '' }),
              Location: z
                .object({
                  City: z.string().exactOptional().openapi({ description: '' }),
                  Country: z.string().exactOptional().openapi({ description: '' }),
                  DMA: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional()
                    .openapi({ description: '' }),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
            })
            .openapi({ description: 'Personal level info -- email, location, etc.', required: [] }),
        },
        'application/xml': { schema: API2ModelsPersonalSchema },
        'text/json': { schema: API2ModelsPersonalSchema },
        'text/xml': { schema: API2ModelsPersonalSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
    },
  },
})

export const putMePreferencesRoute = createRoute({
  method: 'put',
  path: '/me/preferences',
  tags: ['Me'],
  summary: 'Puts me preferences.',
  operationId: 'Me_PutMePreferences',
  request: {
    body: {
      description: 'The req.',
      content: {
        'application/json': { schema: API2ModelsPreferenceSchema },
        'application/x-www-form-urlencoded': { schema: API2ModelsPreferenceSchema },
        'application/xml': { schema: API2ModelsPreferenceSchema },
        'text/json': { schema: API2ModelsPreferenceSchema },
        'text/xml': { schema: API2ModelsPreferenceSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
    },
  },
})

export const getMePreferencesOptionsRoute = createRoute({
  method: 'get',
  path: '/me/preferences/options',
  tags: ['Me'],
  summary: 'Gets the options.',
  operationId: 'Me_GetOptions',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ControllersWebAPIMeControllerPreferenceOptionsSchema },
        'application/xml': { schema: API2ControllersWebAPIMeControllerPreferenceOptionsSchema },
        'text/json': { schema: API2ControllersWebAPIMeControllerPreferenceOptionsSchema },
        'text/xml': { schema: API2ControllersWebAPIMeControllerPreferenceOptionsSchema },
      },
    },
  },
})

export const putMeProfileRoute = createRoute({
  method: 'put',
  path: '/me/profile',
  tags: ['Me'],
  summary: 'Puts me.',
  request: {
    body: {
      description: 'The req.',
      content: {
        'application/json': { schema: API2ModelsProfileSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              AboutMe: z.string().exactOptional().openapi({ description: '' }),
              BackgroundUrl: z.string().exactOptional().openapi({ description: '' }),
              Counts: z
                .object({
                  AddedCount: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                  FollowersCount: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                  FollowingCount: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                  PrivateRecipeCount: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                  PublicRecipeCount: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                  TotalRecipes: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', description: '' }),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
              FirstName: z.string().exactOptional().openapi({ description: '' }),
              FullName: z.string().exactOptional().openapi({ description: '' }),
              HomeUrl: z.string().exactOptional().openapi({ description: '' }),
              LastName: z.string().exactOptional().openapi({ description: '' }),
              PhotoUrl: z.string().exactOptional().openapi({ description: '' }),
              UserID: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', description: '' }),
              UserName: z.string().exactOptional().openapi({ description: '' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'application/xml': { schema: API2ModelsProfileSchema },
        'text/json': { schema: API2ModelsProfileSchema },
        'text/xml': { schema: API2ModelsProfileSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
    },
  },
})

export const getMeSkinnyRoute = createRoute({
  method: 'get',
  path: '/me/skinny',
  tags: ['Me'],
  summary: 'Skinnies this instance.',
  operationId: 'Me_Skinny',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsBigOvenUserSchema },
        'application/xml': { schema: API2ModelsBigOvenUserSchema },
        'text/json': { schema: API2ModelsBigOvenUserSchema },
        'text/xml': { schema: API2ModelsBigOvenUserSchema },
      },
    },
  },
})

export const putRecipeRoute = createRoute({
  method: 'put',
  path: '/recipe',
  tags: ['Recipe'],
  summary: 'Update a recipe',
  operationId: 'Recipe_Put',
  request: { body: BigOvenModelAPIRecipeRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIRecipeSchema },
        'application/xml': { schema: BigOvenModelAPIRecipeSchema },
        'text/json': { schema: BigOvenModelAPIRecipeSchema },
        'text/xml': { schema: BigOvenModelAPIRecipeSchema },
      },
    },
  },
})

export const postRecipeRoute = createRoute({
  method: 'post',
  path: '/recipe',
  tags: ['Recipe'],
  summary: 'Add a new recipe',
  operationId: 'Recipe_Post',
  request: { body: BigOvenModelAPIRecipeRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIRecipeSchema },
        'application/xml': { schema: BigOvenModelAPIRecipeSchema },
        'text/json': { schema: BigOvenModelAPIRecipeSchema },
        'text/xml': { schema: BigOvenModelAPIRecipeSchema },
      },
    },
  },
})

export const getRecipeAutocompleteRoute = createRoute({
  method: 'get',
  path: '/recipe/autocomplete',
  tags: ['Recipe'],
  summary:
    'Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.',
  operationId: 'Recipe_AutoComplete',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getRecipeAutocompleteAllRoute = createRoute({
  method: 'get',
  path: '/recipe/autocomplete/all',
  tags: ['Recipe'],
  summary: 'Automatics the complete all recipes.',
  operationId: 'Recipe_AutoCompleteAllRecipes',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The query.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The limit.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
        'application/xml': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
        'text/json': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
        'text/xml': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
      },
    },
  },
})

export const getRecipeAutocompleteMineRoute = createRoute({
  method: 'get',
  path: '/recipe/autocomplete/mine',
  tags: ['Recipe'],
  summary: 'Automatics the complete my recipes.',
  operationId: 'Recipe_AutoCompleteMyRecipes',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The query.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The limit.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
        'application/xml': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
        'text/json': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
        'text/xml': { schema: z.array(BigOvenModelRecipeInfoTinySchema) },
      },
    },
  },
})

export const getRecipeCategoriesRoute = createRoute({
  method: 'get',
  path: '/recipe/categories',
  tags: ['Recipe'],
  summary:
    'Get a list of recipe categories (the ID field can be used for include_cat in search parameters)',
  operationId: 'Recipe_Categories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelRecipeCategorySchema) },
        'application/xml': { schema: z.array(BigOvenModelRecipeCategorySchema) },
        'text/json': { schema: z.array(BigOvenModelRecipeCategorySchema) },
        'text/xml': { schema: z.array(BigOvenModelRecipeCategorySchema) },
      },
    },
  },
})

export const getRecipeGetActiveRecipeRoute = createRoute({
  method: 'get',
  path: '/recipe/get/active/recipe',
  tags: ['Recipe'],
  summary: 'Returns last active recipe for the user',
  operationId: 'Recipe_GetActiveRecipe',
  request: {
    query: z.object({
      userName: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenResultSchema },
        'application/xml': { schema: BigOvenResultSchema },
        'text/json': { schema: BigOvenResultSchema },
        'text/xml': { schema: BigOvenResultSchema },
      },
    },
  },
})

export const postRecipeGetSavedStepRoute = createRoute({
  method: 'post',
  path: '/recipe/get/saved/step',
  tags: ['Recipe'],
  summary: 'Gets recipe single step as text',
  operationId: 'Recipe_GetStep',
  request: {
    query: z.object({
      userName: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      stepId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'stepId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const postRecipeGetStepNumberRoute = createRoute({
  method: 'post',
  path: '/recipe/get/step/number',
  tags: ['Recipe'],
  summary: 'Returns stored step number and number of steps in recipe',
  operationId: 'Recipe_GetStepNumber',
  request: {
    query: z.object({
      userName: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ResultSchema },
        'application/xml': { schema: API2ResultSchema },
        'text/json': { schema: API2ResultSchema },
        'text/xml': { schema: API2ResultSchema },
      },
    },
  },
})

export const getRecipePhotosPendingRoute = createRoute({
  method: 'get',
  path: '/recipe/photos/pending',
  tags: ['Images'],
  summary: 'Gets the pending by user.',
  operationId: 'Images_GetPendingByUser',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema,
        },
        'application/xml': {
          schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema,
        },
        'text/json': { schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema },
        'text/xml': { schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema },
      },
    },
  },
})

export const postRecipePostStepRoute = createRoute({
  method: 'post',
  path: '/recipe/post/step',
  tags: ['Recipe'],
  summary: 'Stores recipe step number and returns saved step data',
  operationId: 'Recipe_GetSteps',
  request: {
    query: z.object({
      userName: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      stepId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'stepId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenResultSchema },
        'application/xml': { schema: BigOvenResultSchema },
        'text/json': { schema: BigOvenResultSchema },
        'text/xml': { schema: BigOvenResultSchema },
      },
    },
  },
})

export const putRecipeReviewRepliesReplyIdRoute = createRoute({
  method: 'put',
  path: '/recipe/review/replies/{replyId}',
  tags: ['Review'],
  summary:
    'Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.',
  operationId: 'Review_PutReply',
  request: {
    params: z.object({
      replyId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: API2ControllersWebAPIReviewControllerPostReplyReqRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReplySchema },
        'application/xml': { schema: BigOvenModelAPIReplySchema },
        'text/json': { schema: BigOvenModelAPIReplySchema },
        'text/xml': { schema: BigOvenModelAPIReplySchema },
      },
    },
  },
})

export const deleteRecipeReviewRepliesReplyIdRoute = createRoute({
  method: 'delete',
  path: '/recipe/review/replies/{replyId}',
  tags: ['Review'],
  summary:
    'DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.',
  operationId: 'Review_DeleteReply',
  request: {
    params: z.object({
      replyId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRecipeReviewReviewIdRoute = createRoute({
  method: 'get',
  path: '/recipe/review/{reviewId}',
  tags: ['Review'],
  summary:
    'Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.\r\n            Recommended display is to list top-level reviews with one featured reply underneath. \r\n            Currently, the FeaturedReply is the most recent one for that rating.',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'reviewId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReviewSchema },
        'application/xml': { schema: BigOvenModelAPIReviewSchema },
        'text/json': { schema: BigOvenModelAPIReviewSchema },
        'text/xml': { schema: BigOvenModelAPIReviewSchema },
      },
    },
  },
})

export const putRecipeReviewReviewIdRoute = createRoute({
  method: 'put',
  path: '/recipe/review/{reviewId}',
  tags: ['Review'],
  summary: 'Update a given top-level review.',
  operationId: 'Review_Put',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: API2ControllersWebAPIReviewControllerReviewRequestRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReviewSchema },
        'application/xml': { schema: BigOvenModelAPIReviewSchema },
        'text/json': { schema: BigOvenModelAPIReviewSchema },
        'text/xml': { schema: BigOvenModelAPIReviewSchema },
      },
    },
  },
})

export const getRecipeReviewReviewIdRepliesRoute = createRoute({
  method: 'get',
  path: '/recipe/review/{reviewId}/replies',
  tags: ['Review'],
  summary: 'Get a paged list of replies for a given review.',
  operationId: 'Review_GetReplies',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the page (int), starting with 1',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'results per page (int)',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelAPIReplySchema) },
        'application/xml': { schema: z.array(BigOvenModelAPIReplySchema) },
        'text/json': { schema: z.array(BigOvenModelAPIReplySchema) },
        'text/xml': { schema: z.array(BigOvenModelAPIReplySchema) },
      },
    },
  },
})

export const postRecipeReviewReviewIdRepliesRoute = createRoute({
  method: 'post',
  path: '/recipe/review/{reviewId}/replies',
  tags: ['Review'],
  summary:
    'POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.',
  operationId: 'Review_PostReply',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: API2ControllersWebAPIReviewControllerPostReplyReqRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReplySchema },
        'application/xml': { schema: BigOvenModelAPIReplySchema },
        'text/json': { schema: BigOvenModelAPIReplySchema },
        'text/xml': { schema: BigOvenModelAPIReplySchema },
      },
    },
  },
})

export const postRecipeScanRoute = createRoute({
  method: 'post',
  path: '/recipe/scan',
  tags: ['Recipe'],
  summary:
    'POST an image as a new RecipeScan request\r\n                1)  Fetch the filename -- DONE\r\n                2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE\r\n                3)  Create 120 thumbnail size  in pics/scan/120 -- DONE\r\n                4)  Insert the CloudTasks record\r\n                5)  Create the HIT\r\n                6)  Update the CloudTasks record with the HIT ID\r\n                7)  Email the requesing user\r\n                8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail',
  operationId: 'Recipe_Scan',
  request: {
    query: z.object({
      test: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'test', required: false, schema: { type: 'boolean' } },
        }),
      devicetype: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'devicetype', required: false, schema: { type: 'string' } },
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lat',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lng',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    401: { description: 'Not authorized' },
    402: { description: 'Payment required (not enough credits)' },
    415: { description: 'Bad media type (bad JPG)' },
    500: {
      description:
        'General error on initiating RecipeScan task; please try again or contact us at support[at]bigoven.com',
    },
  },
})

export const getRecipeStepsIdRoute = createRoute({
  method: 'get',
  path: '/recipe/steps/{id}',
  tags: ['Recipe'],
  summary:
    'Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.',
  operationId: 'Recipe_GetRecipeWithSteps',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'the Recipe ID to retrieve',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      prefetch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'prefetch', required: false, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeSchema },
      },
    },
  },
})

export const getRecipeIdRoute = createRoute({
  method: 'get',
  path: '/recipe/{id}',
  tags: ['Recipe'],
  summary: 'Return full Recipe detail. Returns 403 if the recipe is owned by someone else.',
  operationId: 'Recipe_Get',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The Recipe ID to retrieve',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      prefetch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'The prefetch.',
            in: 'query',
            name: 'prefetch',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeSchema },
      },
    },
  },
})

export const deleteRecipeIdRoute = createRoute({
  method: 'delete',
  path: '/recipe/{id}',
  tags: ['Recipe'],
  summary: 'Delete a Recipe (you must be authenticated as an owner of the recipe)',
  operationId: 'Recipe_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRecipeIdZapRoute = createRoute({
  method: 'get',
  path: '/recipe/{id}/zap',
  tags: ['Recipe'],
  summary: 'Zaps the recipe.',
  operationId: 'Recipe_ZapRecipe',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The identifier.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const postRecipeRecipeIdFeedbackRoute = createRoute({
  method: 'post',
  path: '/recipe/{recipeId}/feedback',
  tags: ['Recipe'],
  summary: 'Feedback on a Recipe -- for internal BigOven editors',
  operationId: 'Recipe_Feedback',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The payload for feedback, which includes the field "feedback"',
      content: {
        'application/json': { schema: API2ModelsRecipesFeedbackDTOSchema },
        'application/x-www-form-urlencoded': { schema: API2ModelsRecipesFeedbackDTOSchema },
        'application/xml': { schema: API2ModelsRecipesFeedbackDTOSchema },
        'text/json': { schema: API2ModelsRecipesFeedbackDTOSchema },
        'text/xml': { schema: API2ModelsRecipesFeedbackDTOSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const postRecipeRecipeIdImageRoute = createRoute({
  method: 'post',
  path: '/recipe/{recipeId}/image',
  tags: ['Images'],
  summary:
    'POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption\r\n             \r\n             Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint\r\n             needs a multipart/mime content header and will not parse JSON in the body along with it.\r\n            \r\n             Testing with Postman (validated 11/20/2015):\r\n             1) Remove the Content-Type header; add authentication information\r\n             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,\r\n             change the type of the input from Text to File.  Browse and choose a JPG.',
  operationId: 'Images_UploadRecipeImage',
  request: {
    params: z.object({
      recipeId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'recipeId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      caption: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'caption', required: false, schema: { type: 'string' } },
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lat',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lng',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
    400: { description: 'if bad request (e.g., missing parameters)' },
    401: { description: 'if the user is unknown' },
    415: { description: 'if unsupported media type (e.g., bad JPG)' },
  },
})

export const getRecipeRecipeIdImagesRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/images',
  tags: ['Images'],
  summary: 'Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.',
  operationId: 'Images_Get',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Recipe ID (required)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelAPIImageSchema) },
        'application/xml': { schema: z.array(BigOvenModelAPIImageSchema) },
        'text/json': { schema: z.array(BigOvenModelAPIImageSchema) },
        'text/xml': { schema: z.array(BigOvenModelAPIImageSchema) },
      },
    },
  },
})

export const postRecipeRecipeIdNoteRoute = createRoute({
  method: 'post',
  path: '/recipe/{recipeId}/note',
  tags: ['Note'],
  summary: 'HTTP POST a new note into the system.',
  operationId: 'Note_Post',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'recipeId (int)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description:
        'a recipe note, with fields: Date (YYYY-MM-DD string), Notes (string), People (string), Variations (string), RecipeID (int?)',
      content: {
        'application/json': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CreationDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Gets or sets the creation date.' }),
              Date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Gets or sets the date.' }),
              DateDT: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the date dt.' }),
              GUID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the unique identifier.' }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the identifier.' }),
              Notes: z.string().exactOptional().openapi({ description: 'Gets or sets the notes.' }),
              People: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the people.' }),
              RecipeID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the recipe identifier.' }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the user identifier.' }),
              Variations: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the variations.' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'application/xml': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
        'text/json': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
        'text/xml': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeNoteSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeNoteSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeNoteSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeNoteSchema },
      },
    },
  },
})

export const getRecipeRecipeIdNoteNoteIdRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/note/{noteId}',
  tags: ['Note'],
  summary:
    "Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.",
  operationId: 'Note_Get',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'recipe identifier (integer)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      noteId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: "The note ID (note -- it's not the RecipeID)",
            in: 'path',
            name: 'noteId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIRecipeNoteSchema },
        'application/xml': { schema: BigOvenModelAPIRecipeNoteSchema },
        'text/json': { schema: BigOvenModelAPIRecipeNoteSchema },
        'text/xml': { schema: BigOvenModelAPIRecipeNoteSchema },
      },
    },
  },
})

export const putRecipeRecipeIdNoteNoteIdRoute = createRoute({
  method: 'put',
  path: '/recipe/{recipeId}/note/{noteId}',
  tags: ['Note'],
  summary: 'HTTP PUT (update) a Recipe note (RecipeNote).',
  operationId: 'Note_Put',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      noteId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'noteId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CreationDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Gets or sets the creation date.' }),
              Date: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Gets or sets the date.' }),
              DateDT: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the date dt.' }),
              GUID: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the unique identifier.' }),
              ID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the identifier.' }),
              Notes: z.string().exactOptional().openapi({ description: 'Gets or sets the notes.' }),
              People: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the people.' }),
              RecipeID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the recipe identifier.' }),
              UserID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Gets or sets the user identifier.' }),
              Variations: z
                .string()
                .exactOptional()
                .openapi({ description: 'Gets or sets the variations.' }),
            })
            .openapi({ description: '', required: [] }),
        },
        'application/xml': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
        'text/json': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
        'text/xml': { schema: API2ControllersWebAPINoteControllerNoteRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIRecipeNoteSchema },
        'application/xml': { schema: BigOvenModelAPIRecipeNoteSchema },
        'text/json': { schema: BigOvenModelAPIRecipeNoteSchema },
        'text/xml': { schema: BigOvenModelAPIRecipeNoteSchema },
      },
    },
  },
})

export const deleteRecipeRecipeIdNoteNoteIdRoute = createRoute({
  method: 'delete',
  path: '/recipe/{recipeId}/note/{noteId}',
  tags: ['Note'],
  summary: 'Delete a review\r\n                do a DELETE Http request of /note/{ID}',
  operationId: 'Note_Delete',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'recipeId (int)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      noteId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'noteId (int)',
            in: 'path',
            name: 'noteId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRecipeRecipeIdNotesRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/notes',
  tags: ['Note'],
  summary: 'recipe/100/notes',
  operationId: 'Note_GetNotes',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'recipeId (int)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'page (int, starting from 1)',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'recipeId',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIRecipeNoteListSchema },
        'application/xml': { schema: BigOvenModelAPIRecipeNoteListSchema },
        'text/json': { schema: BigOvenModelAPIRecipeNoteListSchema },
        'text/xml': { schema: BigOvenModelAPIRecipeNoteListSchema },
      },
    },
  },
})

export const getRecipeRecipeIdPhotosRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/photos',
  tags: ['Images'],
  summary: 'Get all the photos for a recipe',
  operationId: 'Images_GetRecipePhotos',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Recipe ID (required)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema,
        },
        'application/xml': {
          schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema,
        },
        'text/json': { schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema },
        'text/xml': { schema: API2ControllersWebAPIImagesControllerRecipePhotosResponseSchema },
      },
    },
  },
})

export const getRecipeRecipeIdRelatedRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/related',
  tags: ['Recipe'],
  summary: 'Get recipes related to the given recipeId',
  operationId: 'Recipe_Related',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The recipe id',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The results per page',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
      },
    },
  },
})

export const getRecipeRecipeIdReviewRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/review',
  tags: ['Review'],
  summary:
    'Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReviewSchema },
        'application/xml': { schema: BigOvenModelAPIReviewSchema },
        'text/json': { schema: BigOvenModelAPIReviewSchema },
        'text/xml': { schema: BigOvenModelAPIReviewSchema },
      },
    },
  },
})

export const postRecipeRecipeIdReviewRoute = createRoute({
  method: 'post',
  path: '/recipe/{recipeId}/review',
  tags: ['Review'],
  summary:
    'Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.',
  operationId: 'Review_Post',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: API2ControllersWebAPIReviewControllerReviewRequestRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRecipeRecipeIdReviewReviewIdRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/review/{reviewId}',
  tags: ['Review'],
  summary:
    'Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.\r\n            Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.\r\n            We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then\r\n            an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review \r\n            per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed\r\n            which do NOT carry the "DEPRECATED" flag.',
  operationId: 'Review_Get',
  request: {
    params: z.object({
      reviewId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'int',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'int',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReviewSchema },
        'application/xml': { schema: BigOvenModelAPIReviewSchema },
        'text/json': { schema: BigOvenModelAPIReviewSchema },
        'text/xml': { schema: BigOvenModelAPIReviewSchema },
      },
    },
  },
})

export const putRecipeRecipeIdReviewReviewIdRoute = createRoute({
  method: 'put',
  path: '/recipe/{recipeId}/review/{reviewId}',
  tags: ['Review'],
  summary:
    'HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.\r\n            We are moving to a string-based primary key system, no longer integers, for reviews and replies.',
  operationId: 'Review_PutLegacy',
  request: {
    params: z.object({
      reviewId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'reviewId (int)',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'recipeId (int)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: API2ControllersWebAPIReviewControllerReviewRequestLegacySchema,
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActiveMinutes: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              Comment: z.string().exactOptional(),
              GUID: z.string().exactOptional(),
              MakeAgain: z.string().exactOptional(),
              ParentID: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              StarRating: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              TotalMinutes: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
            })
            .openapi({
              description:
                'Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development',
              required: [],
            }),
        },
        'application/xml': {
          schema: API2ControllersWebAPIReviewControllerReviewRequestLegacySchema,
        },
        'text/json': { schema: API2ControllersWebAPIReviewControllerReviewRequestLegacySchema },
        'text/xml': { schema: API2ControllersWebAPIReviewControllerReviewRequestLegacySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIReviewSchema },
        'application/xml': { schema: BigOvenModelAPIReviewSchema },
        'text/json': { schema: BigOvenModelAPIReviewSchema },
        'text/xml': { schema: BigOvenModelAPIReviewSchema },
      },
    },
  },
})

export const deleteRecipeRecipeIdReviewReviewIdRoute = createRoute({
  method: 'delete',
  path: '/recipe/{recipeId}/review/{reviewId}',
  tags: ['Review'],
  summary:
    'DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.',
  operationId: 'Review_Delete',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      reviewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRecipeRecipeIdReviewsRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/reviews',
  tags: ['Review'],
  summary:
    'Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.',
  operationId: 'Review_GetReviews',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'recipe id (int)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the page (int), starting with 1',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'results per page (int)',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelAPIReviewSchema) },
        'application/xml': { schema: z.array(BigOvenModelAPIReviewSchema) },
        'text/json': { schema: z.array(BigOvenModelAPIReviewSchema) },
        'text/xml': { schema: z.array(BigOvenModelAPIReviewSchema) },
      },
    },
  },
})

export const getRecipeRecipeIdScansRoute = createRoute({
  method: 'get',
  path: '/recipe/{recipeId}/scans',
  tags: ['Images'],
  summary: 'Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.',
  operationId: 'Images_GetScanImages',
  request: {
    params: z.object({
      recipeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'the recipe identifier (int)',
            in: 'path',
            name: 'recipeId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelAPIImageSchema) },
        'application/xml': { schema: z.array(BigOvenModelAPIImageSchema) },
        'text/json': { schema: z.array(BigOvenModelAPIImageSchema) },
        'text/xml': { schema: z.array(BigOvenModelAPIImageSchema) },
      },
    },
  },
})

export const getRecipesRoute = createRoute({
  method: 'get',
  path: '/recipes',
  tags: ['Recipe'],
  summary:
    'Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.\r\n            Use any_kw to search across the entire recipe.\r\n            If you\'d like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).\r\n            If you\'d like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.\r\n            If you\'d like to include a category, set include_cat to one or more (comma-separated) of those categories to include.\r\n            To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips\r\n            To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.\r\n            All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).\r\n            So, to get the third page of a result set paged with 25 recipes per page, you\'d pass pg=3&amp;rpp=25\r\n            If you\'d like to target searches to just a single target user\'s recipes, set userId=the target userId (number).\r\n            Or, you can set username=theirusername\r\n            vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps\r\n            cuisine\r\n            photos\r\n            filter=added,try,favorites,myrecipes\\r\\n\\r\\n\r\n            folder=FolderNameCaseSensitive\r\n            coll=ID of Collection',
  operationId: 'Recipe_RecipeSearch',
  request: {
    query: z.object({
      any_kw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search anywhere in the recipe for the keyword',
            in: 'query',
            name: 'any_kw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search in a specific folder name for the authenticated user',
            in: 'query',
            name: 'folder',
            required: false,
            schema: { type: 'string' },
          },
        }),
      coll: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to a collection ID number',
            in: 'query',
            name: 'coll',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user\'s recipe set',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      title_kw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search just in the recipe title for the keyword',
            in: 'query',
            name: 'title_kw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Set the target userid to search their public recipes',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set the target username to search their public recipes',
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      photos: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'if set to true, limit search results to photos only',
            in: 'query',
            name: 'photos',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      boostmine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)',
            in: 'query',
            name: 'boostmine',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_cat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'integer of the subcategory you\'d like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".',
            in: 'query',
            name: 'include_cat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_cat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'like include_cat, set this to an integer to exclude a specific category',
            in: 'query',
            name: 'exclude_cat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_primarycat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]',
            in: 'query',
            name: 'include_primarycat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_primarycat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]',
            in: 'query',
            name: 'exclude_primarycat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_ing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken',
            in: 'query',
            name: 'include_ing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_ing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)',
            in: 'query',
            name: 'exclude_ing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese',
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { type: 'string' },
          },
        }),
      db: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'db',
            required: false,
            schema: { type: 'string' },
          },
        }),
      userset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to a given username, it'll force the search to filter to just that username",
            in: 'query',
            name: 'userset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      servingsMin: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."',
            in: 'query',
            name: 'servingsMin',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      totalMins: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)',
            in: 'query',
            name: 'totalMins',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      maxIngredients: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less',
            in: 'query',
            name: 'maxIngredients',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      minIngredients: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If supplied, will restrict results to recipes that have at least {minIngredients}',
            in: 'query',
            name: 'minIngredients',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'integer; results per page',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'integer: the page number',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      vtn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to vegetarian (Powersearch-capable plan required)',
            in: 'query',
            name: 'vtn',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      vgn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to vegan (Powersearch-capable plan required)',
            in: 'query',
            name: 'vgn',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      chs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to contains-cheese (Powersearch-capable plan required)',
            in: 'query',
            name: 'chs',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      glf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to gluten-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'glf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ntf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to nut-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'ntf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dyf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to dairy-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'dyf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sff: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to seafood-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'sff',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      slf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to shellfish-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'slf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      tnf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to tree-nut free (Powersearch-capable plan required)',
            in: 'query',
            name: 'tnf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      wmf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to white-meat free (Powersearch-capable plan required)',
            in: 'query',
            name: 'wmf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rmf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to red-meat free (Powersearch-capable plan required)',
            in: 'query',
            name: 'rmf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      cps: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)',
            in: 'query',
            name: 'cps',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      champion: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don\'t include this parameter.',
            in: 'query',
            name: 'champion',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      synonyms: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)',
            in: 'query',
            name: 'synonyms',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
      },
    },
  },
})

export const getRecipesRandomRoute = createRoute({
  method: 'get',
  path: '/recipes/random',
  tags: ['Recipe'],
  summary: 'Get a random, home-page-quality Recipe.',
  operationId: 'Recipe_GetRandomRecipe',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPIRecipeSchema },
        'application/xml': { schema: BigOvenModelAPIRecipeSchema },
        'text/json': { schema: BigOvenModelAPIRecipeSchema },
        'text/xml': { schema: BigOvenModelAPIRecipeSchema },
      },
    },
  },
})

export const getRecipesRavesRoute = createRoute({
  method: 'get',
  path: '/recipes/raves',
  tags: ['Recipe'],
  summary: 'Get the recipe/comment tuples for those recipes with 4 or 5 star ratings',
  operationId: 'Recipe_Raves',
  request: {
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'page, starting with 1',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'results per page',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelRecipeInfoReviewTuple2Schema) },
        'application/xml': { schema: z.array(BigOvenModelRecipeInfoReviewTuple2Schema) },
        'text/json': { schema: z.array(BigOvenModelRecipeInfoReviewTuple2Schema) },
        'text/xml': { schema: z.array(BigOvenModelRecipeInfoReviewTuple2Schema) },
      },
    },
  },
})

export const getRecipesRecentviewsRoute = createRoute({
  method: 'get',
  path: '/recipes/recentviews',
  tags: ['Recipe'],
  summary: 'Get a list of recipes that the authenticated user has most recently viewed',
  operationId: 'Recipe_RecentViews',
  request: {
    query: z.object({
      pg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number starting with 1',
            in: 'query',
            name: 'pg',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rpp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'results per page',
            in: 'query',
            name: 'rpp',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BigOvenModelRecipeInfoDateTuple2Schema) },
        'application/xml': { schema: z.array(BigOvenModelRecipeInfoDateTuple2Schema) },
        'text/json': { schema: z.array(BigOvenModelRecipeInfoDateTuple2Schema) },
        'text/xml': { schema: z.array(BigOvenModelRecipeInfoDateTuple2Schema) },
      },
    },
  },
})

export const getRecipesTop25randomRoute = createRoute({
  method: 'get',
  path: '/recipes/top25random',
  tags: ['Recipe'],
  summary:
    'Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.\r\n            Use any_kw to search across the entire recipe.\r\n            If you\'d like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).\r\n            If you\'d like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.\r\n            If you\'d like to include a category, set include_cat to one or more (comma-separated) of those categories to include.\r\n            To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips\r\n            To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.\r\n            All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).\r\n            So, to get the third page of a result set paged with 25 recipes per page, you\'d pass pg=3&amp;rpp=25\r\n            If you\'d like to target searches to just a single target user\'s recipes, set userId=the target userId (number).\r\n            Or, you can set username=theirusername\r\n            vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps\r\n            cuisine\r\n            photos\r\n            filter=added,try,favorites,myrecipes\\r\\n\\r\\n\r\n            folder=FolderNameCaseSensitive\r\n            coll=ID of Collection',
  operationId: 'Recipe_RecipeSearchRandom',
  request: {
    query: z.object({
      any_kw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search anywhere in the recipe for the keyword',
            in: 'query',
            name: 'any_kw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search in a specific folder name for the authenticated user',
            in: 'query',
            name: 'folder',
            required: false,
            schema: { type: 'string' },
          },
        }),
      coll: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit to a collection ID number',
            in: 'query',
            name: 'coll',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user\'s recipe set',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      title_kw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search just in the recipe title for the keyword',
            in: 'query',
            name: 'title_kw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Set the target userid to search their public recipes',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set the target username to search their public recipes',
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      photos: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'if set to true, limit search results to photos only',
            in: 'query',
            name: 'photos',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      boostmine: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)',
            in: 'query',
            name: 'boostmine',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_cat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'integer of the subcategory you\'d like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".',
            in: 'query',
            name: 'include_cat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_cat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'like include_cat, set this to an integer to exclude a specific category',
            in: 'query',
            name: 'exclude_cat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_primarycat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]',
            in: 'query',
            name: 'include_primarycat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_primarycat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]',
            in: 'query',
            name: 'exclude_primarycat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_ing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken',
            in: 'query',
            name: 'include_ing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_ing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)',
            in: 'query',
            name: 'exclude_ing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese',
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { type: 'string' },
          },
        }),
      db: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'db',
            required: false,
            schema: { type: 'string' },
          },
        }),
      userset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to a given username, it'll force the search to filter to just that username",
            in: 'query',
            name: 'userset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      servingsMin: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."',
            in: 'query',
            name: 'servingsMin',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      totalMins: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)',
            in: 'query',
            name: 'totalMins',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      maxIngredients: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less',
            in: 'query',
            name: 'maxIngredients',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      minIngredients: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If supplied, will restrict results to recipes that have at least {minIngredients}',
            in: 'query',
            name: 'minIngredients',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      vtn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to vegetarian (Powersearch-capable plan required)',
            in: 'query',
            name: 'vtn',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      vgn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to vegan (Powersearch-capable plan required)',
            in: 'query',
            name: 'vgn',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      chs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to contains-cheese (Powersearch-capable plan required)',
            in: 'query',
            name: 'chs',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      glf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to gluten-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'glf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ntf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to nut-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'ntf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dyf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to dairy-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'dyf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sff: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'when set to 1, limit to seafood-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'sff',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      slf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to shellfish-free (Powersearch-capable plan required)',
            in: 'query',
            name: 'slf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      tnf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to tree-nut free (Powersearch-capable plan required)',
            in: 'query',
            name: 'tnf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      wmf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to white-meat free (Powersearch-capable plan required)',
            in: 'query',
            name: 'wmf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      rmf: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, limit to red-meat free (Powersearch-capable plan required)',
            in: 'query',
            name: 'rmf',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      cps: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)',
            in: 'query',
            name: 'cps',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      champion: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don\'t include this parameter.',
            in: 'query',
            name: 'champion',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      synonyms: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)',
            in: 'query',
            name: 'synonyms',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'application/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/json': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
        'text/xml': { schema: BigOvenModelAPI2RecipeSearchResultSchema },
      },
    },
  },
})

export const getRecipesIdRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}',
  tags: ['Recipe'],
  summary: 'Same as GET recipe but also includes the recipe videos (if any)',
  operationId: 'Recipe_GetV2',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The Recipe ID to retrieve',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      prefetch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'The prefetch.',
            in: 'query',
            name: 'prefetch',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: API2ModelsRecipesRecipeResponseSchema },
        'application/xml': { schema: API2ModelsRecipesRecipeResponseSchema },
        'text/json': { schema: API2ModelsRecipesRecipeResponseSchema },
        'text/xml': { schema: API2ModelsRecipesRecipeResponseSchema },
      },
    },
  },
})
