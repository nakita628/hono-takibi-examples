import { createRoute, z } from '@hono/zod-openapi'

const DataTotalSchema = z
  .object({ $field: z.int().exactOptional().openapi({ description: 'The totals for the field' }) })
  .openapi({ description: 'The totals for the field', required: ['$appId'] })
  .openapi('DataTotal')

const AppTotalSchema = z
  .object({ $appId: DataTotalSchema })
  .openapi({ description: 'The totals for the app', required: ['$appId'] })
  .openapi('AppTotal')

type TotalType = {
  apps: z.infer<typeof AppTotalSchema>
  end?: bigint
  start?: bigint
  totals: z.infer<typeof DataTotalSchema>
}

const AccessSchema = z
  .object({
    access: z
      .array(z.string())
      .openapi({ description: 'The approved access restrictions for this app' }),
    appId: z.string().openapi({ description: 'The id of the app that owns this access key' }),
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The time (in milliseconds) of when the user agreed to the access request',
      }),
    ip: z
      .string()
      .openapi({ description: 'The ip address of the user agreeing to the access request' }),
    isValid: z
      .boolean()
      .openapi({
        description: 'True if this access is up to date with the current version of the app',
      }),
    userId: z.string().openapi({ description: 'The id for this user' }),
  })
  .openapi({ description: '', required: ['appId', 'userId', 'access', 'date', 'ip', 'isValid'] })
  .openapi('Access')

const AccountSchema = z
  .object({
    accountName: z.string().openapi({ description: 'The name of the Stripe account' }),
    country: z.string().openapi({ description: 'The country for this Stripe account' }),
    defaultCurrency: z
      .string()
      .openapi({ description: 'The default currency for this Stripe account' }),
    stripeId: z.string().openapi({ description: 'The id of the Stripe account' }),
  })
  .openapi({
    description: 'The connected Stripe account for a developer',
    required: ['stripeId', 'accountName', 'country', 'defaultCurrency'],
  })
  .openapi('Account')

const AccountsSchema = z
  .object({
    accounts: z
      .array(AccountSchema)
      .openapi({ description: 'An array of connected Stripe accounts' }),
    developerId: z.string().openapi({ description: 'The id of the developer' }),
  })
  .openapi({
    description: "A developer's connected Stripe accounts",
    required: ['developerId', 'accounts'],
  })
  .openapi('Accounts')

const RestrictionsSchema = z
  .object({
    own: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "A custom object containing fields paired with an array value of restrictions. Restricts the users that may own this app. Example: {'country':['Canada','Mexico']}",
      }),
    view: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "A custom object containing fields paired with an array value of restrictions. Restricts the users that may view this app. Example: {'country':['Canada','Mexico']}",
      }),
  })
  .openapi({ description: 'Resticts users from accessing this app', required: [] })
  .openapi('Restrictions')

const ModelSchema = z
  .object({
    billingPeriod: z
      .enum(['daily', 'weekly', 'monthly', 'annually'])
      .exactOptional()
      .openapi({
        description:
          'The billingPeriod along with the billingPeriodUnit make up the time between billing cycles',
      }),
    billingPeriodUnit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The billingPeriod along with the billingPeriodUnit make up the time between billing cycles',
      }),
    commission: z
      .int()
      .openapi({
        description:
          "The marketplace commission applied to this app's model multiplied by 100 to include two digits for fractions of a percent",
      }),
    currency: z.string().openapi({ description: 'The ISO 4217 currency code for this price' }),
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    feePayer: z
      .enum(['developer', 'marketplace'])
      .openapi({ description: 'The payee that will be paying for any payment processing fees' }),
    license: z
      .literal('single')
      .openapi({
        description:
          'The license model type. Single allows a purchase to a single user or organization',
      }),
    modelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id that uniquely identifies this model' }),
    price: z.int().openapi({ description: 'The price of this app in cents' }),
    subtype: z
      .enum(['usage', 'seat'])
      .exactOptional()
      .openapi({ description: 'The pricing model subtype' }),
    trial: z.int().openapi({ description: 'The maximum number of free trial days available' }),
    type: z
      .enum(['free', 'single', 'recurring'])
      .openapi({
        description:
          'The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription',
      }),
  })
  .openapi({
    description: 'The model that describes the cost and pricing for apps',
    required: ['type', 'price', 'trial', 'license', 'currency', 'commission', 'feePayer'],
  })
  .openapi('Model')

const OwnershipSchema = z
  .object({
    appId: z.string().openapi({ description: 'The id of the app that is owned' }),
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this app was owned',
      }),
    developerId: z.string().openapi({ description: 'The id of the developer for this app' }),
    expires: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this app ownership expires',
      }),
    model: ModelSchema,
    ownershipId: z.string().openapi({ description: 'The id of this ownership' }),
    ownershipStatus: z
      .enum(['pending', 'active', 'uninstalled', 'cancelled'])
      .openapi({ description: 'The current ownership status for this app' }),
    ownershipType: z
      .enum(['full', 'subscription', 'trial'])
      .openapi({ description: 'The current ownership type for this app' }),
    uninstallDate: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this app was uninstalled',
      }),
    userId: z.string().openapi({ description: 'The id of the user that owns this app' }),
  })
  .openapi({
    description: '',
    required: [
      'ownershipId',
      'date',
      'ownershipType',
      'ownershipStatus',
      'appId',
      'userId',
      'developerId',
      'model',
    ],
  })
  .openapi('Ownership')

const ProfanitySchema = z
  .object({
    end: z.int().openapi({ description: 'The ending location of the profanity' }),
    start: z.int().openapi({ description: 'The starting location of the profanity' }),
    word: z.string().openapi({ description: 'The profane word' }),
  })
  .openapi({ description: 'Profanity found in this review', required: ['start', 'end', 'word'] })
  .openapi('Profanity')

const StatusSchema = z
  .object({
    profanity: z
      .array(ProfanitySchema)
      .openapi({ description: 'A list of profanity found in this review' }),
    reason: z
      .enum(['profanity', 'spam'])
      .openapi({ description: 'Text describing the reason for the current status' }),
    value: z
      .enum(['pending', 'spam', 'flagged', 'approved'])
      .openapi({ description: 'The current status value' }),
  })
  .openapi({
    description: 'The current status of this review',
    required: ['value', 'profanity', 'reason'],
  })
  .openapi('Status')

const AppSchema = z
  .object({
    access: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A custom defined list of access requirements' }),
    allow: RestrictionsSchema,
    appId: z.string().openapi({ description: 'The id of this app' }),
    attributes: z.object({}).openapi({ description: 'A custom defined list of app attributes' }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) that this app was created',
      }),
    customData: z
      .object({})
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    developerId: z.string().openapi({ description: 'The id of the developer that owns this app' }),
    isLive: z.boolean().openapi({ description: 'True if this is the live version of the app' }),
    lastUpdated: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) that this app was last modified',
      }),
    model: z
      .array(ModelSchema)
      .openapi({ description: 'The models that describes the cost and pricing for this app' }),
    name: z.string().openapi({ description: 'The name of this app' }),
    ownership: OwnershipSchema.exactOptional(),
    randomize: z
      .int()
      .openapi({
        description:
          'A random number that changes hourly and is used for achieving a random sort order when displaying apps',
      }),
    rating: z
      .int()
      .min(0)
      .max(500)
      .openapi({
        description:
          'The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)',
      }),
    restrict: RestrictionsSchema,
    reviewCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of approved reviews for this app.' }),
    safeName: z
      .array(z.string())
      .openapi({
        description:
          'URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.',
      }),
    statistics: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity',
      }),
    status: StatusSchema,
    submittedDate: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) that this app was submitted for approval',
      }),
    type: z.string().exactOptional().openapi({ description: 'The type for this app' }),
    version: z.int().openapi({ description: 'The version number for this app' }),
  })
  .openapi({
    description: 'An app',
    required: [
      'appId',
      'name',
      'safeName',
      'developerId',
      'model',
      'status',
      'lastUpdated',
      'created',
      'rating',
      'randomize',
      'allow',
      'customData',
      'restrict',
      'version',
      'isLive',
      'attributes',
    ],
  })
  .openapi('App')

const AppPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z.array(AppSchema).openapi({ description: 'An array of apps for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of app results', required: ['count', 'list'] })
  .openapi('AppPages')

const ParentSchema = z
  .object({ status: StatusSchema.exactOptional() })
  .openapi({ description: 'Details of the live version of this app', required: [] })
  .openapi('Parent')

const AppVersionSchema = z
  .object({
    access: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A custom defined list of access requirements' }),
    allow: RestrictionsSchema,
    appId: z.string().openapi({ description: 'The id of this app' }),
    attributes: z
      .object({})
      .exactOptional()
      .openapi({ description: 'A custom defined list of app attributes' }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) that this app was created',
      }),
    customData: z
      .object({})
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    developerId: z.string().openapi({ description: 'The id of the developer that owns this app' }),
    isLatestVersion: z
      .boolean()
      .openapi({ description: 'True if this is the latest version of this app' }),
    isLive: z.boolean().openapi({ description: 'True if this is the live version of the app' }),
    lastUpdated: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) that this app was last modified',
      }),
    model: z
      .array(ModelSchema)
      .openapi({ description: 'The models that describes the cost and pricing for this app' }),
    name: z.string().openapi({ description: 'The name of this app' }),
    parent: ParentSchema,
    rating: z
      .int()
      .min(0)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)',
      }),
    restrict: RestrictionsSchema,
    reviewCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of approved reviews for this app.' }),
    safeName: z
      .array(z.string())
      .openapi({
        description:
          'URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.',
      }),
    status: StatusSchema,
    type: z.string().exactOptional().openapi({ description: 'The type for this app' }),
    version: z.int().openapi({ description: 'The version number for this app' }),
  })
  .openapi({
    description: 'An AppVersion',
    required: [
      'appId',
      'name',
      'safeName',
      'developerId',
      'model',
      'status',
      'lastUpdated',
      'created',
      'allow',
      'parent',
      'customData',
      'restrict',
      'version',
      'isLive',
      'isLatestVersion',
    ],
  })
  .openapi('AppVersion')

const AppEntrySchema = z
  .object({
    appId: z.string().openapi({ description: 'The id of the app involved in this action' }),
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this action was performed',
      }),
  })
  .openapi({ description: '', required: ['date', 'appId'] })
  .openapi('AppEntry')

const AttributesSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of this attribute' }),
    type: z
      .enum(['text', 'select', 'multi'])
      .openapi({ description: 'The type of this attribute' }),
    values: z
      .string()
      .exactOptional()
      .openapi({ description: 'A comma seperated list of values allowed for this attribute' }),
  })
  .openapi({ description: 'An app attribute', required: ['name', 'type'] })
  .openapi('Attributes')

const CardSchema = z
  .object({
    address_city: z.string().exactOptional().openapi({ description: "The card holder's city" }),
    address_country: z
      .string()
      .exactOptional()
      .openapi({ description: "The card holder's country" }),
    address_line1: z
      .string()
      .exactOptional()
      .openapi({ description: "The card holder's street address" }),
    address_line2: z
      .string()
      .exactOptional()
      .openapi({ description: "The card holder's street address" }),
    address_state: z
      .string()
      .exactOptional()
      .openapi({ description: "The card holder's city state/province" }),
    address_zip: z
      .string()
      .exactOptional()
      .openapi({ description: "The card holder's zip/postal code" }),
    brand: z.string().openapi({ description: 'The brand of the credit card. Example: Visa' }),
    cardId: z.string().openapi({ description: 'The id for this credit card' }),
    exp_month: z.int().openapi({ description: 'The two digit expiration month' }),
    exp_year: z.int().openapi({ description: 'The four digit expiration year' }),
    isDefault: z.boolean().openapi({ description: 'True if this is the default credit card' }),
    last4: z.string().openapi({ description: 'The last 4 digits of the credit card number' }),
    name: z.string().openapi({ description: "The card holder's full name" }),
  })
  .openapi({
    description: '',
    required: ['cardId', 'last4', 'exp_year', 'exp_month', 'brand', 'name', 'isDefault'],
  })
  .openapi('Card')

const CardsSchema = z
  .object({
    cards: z
      .array(CardSchema)
      .openapi({ description: 'An array of credit cards added by this user' }),
    userId: z.string().openapi({ description: 'The id of this user' }),
  })
  .openapi({ description: "A User's credit card details", required: ['userId', 'cards'] })
  .openapi('Cards')

const CategorySchema = z
  .object({
    description: z.string().openapi({ description: 'The description of this category' }),
    name: z.string().openapi({ description: 'The name of this category' }),
  })
  .openapi({
    description: 'The category supported by this category group',
    required: ['name', 'description'],
  })
  .openapi('Category')

const CategoryGroupsSchema = z
  .object({
    categories: z
      .array(CategorySchema)
      .openapi({ description: 'The categories supported by this category group' }),
    name: z.string().openapi({ description: 'The name of this category group' }),
  })
  .openapi({
    description: 'The category groups supported by this marketplace',
    required: ['name', 'categories'],
  })
  .openapi('CategoryGroups')

const DeveloperSchema = z
  .object({
    created: z
      .int()
      .openapi({ description: 'The time (in millis) of when this developer was created' }),
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    developerId: z.string().openapi({ description: 'The id of this developer' }),
    email: z.string().exactOptional().openapi({ description: "The developer's email" }),
    name: z.string().exactOptional().openapi({ description: "The developer's name" }),
    type: z.string().exactOptional().openapi({ description: 'The type for this developer' }),
  })
  .openapi({ description: 'A Developer', required: ['developerId', 'created'] })
  .openapi('Developer')

const DeveloperAccountSchema = z
  .object({
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    developerAccountId: z.string().openapi({ description: 'The id of this developer account' }),
    developerId: z
      .string()
      .openapi({ description: 'The id of the developer that this account belongs to' }),
    email: z.string().exactOptional().openapi({ description: 'The contact email address' }),
    name: z.string().exactOptional().openapi({ description: 'The name for the account' }),
  })
  .openapi({ description: 'A Developer Account', required: ['developerAccountId', 'developerId'] })
  .openapi('DeveloperAccount')

const DeveloperAccountPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(DeveloperAccountSchema)
      .openapi({ description: 'An array of developerAccounts for the current page' }),
    pageNumber: z.int().openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({
    description: 'Pages of developerAccount results',
    required: ['pages', 'list', 'pageNumber', 'count'],
  })
  .openapi('DeveloperAccountPages')

const DeveloperPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(DeveloperSchema)
      .openapi({ description: 'An array of developers for the current page' }),
    pageNumber: z.int().openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({
    description: 'Pages of developer results',
    required: ['pages', 'list', 'pageNumber', 'count'],
  })
  .openapi('DeveloperPages')

const DeveloperTokenSchema = z
  .object({
    developerId: z
      .string()
      .openapi({ description: 'The id of the developer connecting their Stripe account' }),
    expires: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The time (in milliseconds) when this URL expires',
      }),
    targetUrl: z
      .string()
      .openapi({
        description: 'The URL that this developer can use to connect their Stripe account',
      }),
  })
  .openapi({ description: '', required: ['developerId', 'expires', 'targetUrl'] })
  .openapi('DeveloperToken')

const UserSchema = z
  .object({
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this user was created',
      }),
    customData: z
      .object({})
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    email: z.string().exactOptional().openapi({ description: "The user's email" }),
    name: z.string().exactOptional().openapi({ description: "The user's name" }),
    type: z.string().exactOptional().openapi({ description: 'The type for this user' }),
    userId: z.string().openapi({ description: 'The id of this user' }),
  })
  .openapi({ description: 'A User', required: ['userId', 'created', 'customData'] })
  .openapi('User')

const UserAccountSchema = z
  .object({
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    email: z.string().exactOptional().openapi({ description: 'The contact email address' }),
    name: z.string().exactOptional().openapi({ description: 'The name for the account' }),
    userAccountId: z.string().openapi({ description: 'The id of this user account' }),
    userId: z.string().openapi({ description: 'The id of this user that this account belongs to' }),
  })
  .openapi({ description: 'A User Account', required: ['userAccountId', 'userId'] })
  .openapi('UserAccount')

const ReviewSchema = z
  .object({
    appId: z.string().openapi({ description: 'The Id of the App that owns this review' }),
    customData: z
      .string()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    description: z
      .string()
      .openapi({ description: "The review's description. Limited to 2000 characters." }),
    headline: z
      .string()
      .openapi({ description: "The review's headline. Limited to 50 characters." }),
    rating: z
      .int()
      .openapi({
        description:
          'The rating given within this review. The rating is represented as an integer between 100 and 500 (1 - 5 stars)',
      }),
    reportDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) this Review was posted',
      }),
    reviewId: z.string().openapi({ description: 'The id for this review.' }),
    status: StatusSchema,
    type: z.string().exactOptional().openapi({ description: 'The type for this review' }),
    user: UserSchema.exactOptional(),
    userAccount: UserAccountSchema.exactOptional(),
    userAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the user account that posted this review' }),
    userId: z.string().openapi({ description: 'The id of the User that posted this review' }),
  })
  .openapi({
    description: 'A Review',
    required: [
      'reviewId',
      'headline',
      'description',
      'rating',
      'reportDate',
      'appId',
      'userId',
      'status',
      'customData',
    ],
  })
  .openapi('Review')

const TransactionSchema = z
  .object({
    amount: z.int().openapi({ description: 'The total amount paid in cents' }),
    appId: z.string().openapi({ description: 'The id of the app involved with this transaction' }),
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A custom JSON object that you can create and attach to this record',
      }),
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this transaction occurred',
      }),
    developerAmount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount paid to the developer in cents' }),
    developerId: z
      .string()
      .openapi({ description: 'The id of the developer involved with this transaction' }),
    feeAmount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount paid to payment processing fees in cents' }),
    marketplaceAmount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount paid to the marketplace owner in cents' }),
    ownershipId: z
      .string()
      .openapi({ description: 'The id for the ownership associated with this transaction' }),
    transactionId: z.string().openapi({ description: 'The id for this transaction' }),
    type: z.enum(['payment', 'refund']).openapi({ description: 'The type for this transaction' }),
    userId: z.string().openapi({ description: 'The id of the user making the transaction' }),
  })
  .openapi({
    description: 'A transaction for an app initiated by a user',
    required: [
      'transactionId',
      'ownershipId',
      'type',
      'appId',
      'developerId',
      'userId',
      'date',
      'amount',
    ],
  })
  .openapi('Transaction')

const EventSchema = z
  .object({
    app: AppSchema.exactOptional(),
    createdDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this event occurred',
      }),
    description: z.string().exactOptional().openapi({ description: 'A description of the event' }),
    developer: DeveloperSchema.exactOptional(),
    eventId: z.string().openapi({ description: 'The id of the event' }),
    eventType: z
      .enum([
        'app.submitted',
        'app.approved',
        'app.suspended',
        'app.unsuspended',
        'app.rejected',
        'app.inReview',
        'app.installed',
        'app.uninstalled',
        'review.created',
        'review.updated',
        'review.approved',
        'review.spam',
        'review.removed',
        'user.created',
        'user.updated',
        'user.removed',
        'user.invalidPaymentDetails',
        'user.paymentDetailsRequired',
        'developer.created',
        'developer.updated',
        'developer.removed',
        'developer.paymentDetailsRequired',
        'permission.added',
        'permission.removed',
        'payment.complete',
        'payment.refunded',
        'payment.required',
        'ownership.expired',
      ])
      .openapi({ description: 'The current event type' }),
    marketplaceId: z
      .string()
      .openapi({ description: 'The id of the marketplace that owns this event' }),
    ownership: OwnershipSchema.exactOptional(),
    review: ReviewSchema.exactOptional(),
    transaction: TransactionSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description: '',
    required: ['eventId', 'eventType', 'createdDate', 'marketplaceId', 'message'],
  })
  .openapi('Event')

const HashSchema = z
  .object({
    MD5: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MD5 hash for this uploaded file.' }),
    'SHA-1': z
      .string()
      .exactOptional()
      .openapi({ description: 'The SHA-1 hash for this uploaded file.' }),
    'SHA-256': z
      .string()
      .exactOptional()
      .openapi({ description: 'The SHA-256 hash for this uploaded file.' }),
  })
  .openapi({ description: 'The hashes requested for the file.', required: [] })
  .openapi('Hash')

const FoundVirusSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ description: 'The name of the file' }),
    virusName: z.string().exactOptional().openapi({ description: 'The name of the virus' }),
  })
  .openapi({ description: 'The virus found within this file', required: ['url'] })
  .openapi('FoundVirus')

const VirusScanSchema = z
  .object({
    finished: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "The date (in milliseconds) when this file finished it's scan",
      }),
    foundViruses: z
      .array(FoundVirusSchema)
      .exactOptional()
      .openapi({ description: 'The list of viruses found in this file' }),
    started: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: "The date (in milliseconds) when this file started it's scan",
      }),
    status: z
      .string()
      .openapi({ description: 'The status of this scan. Can be NOT_SCANNED, CLEAN or DIRTY' }),
  })
  .openapi({ description: 'The virus scan results for this file', required: ['status'] })
  .openapi('VirusScan')

const FileSchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The internet media type of the file' }),
    fileId: z.string().openapi({ description: 'The id of the uploaded file' }),
    fileUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path where the file can be located.' }),
    hash: HashSchema.exactOptional(),
    mimeCheck: z
      .enum(['PASSED', 'FAILED'])
      .exactOptional()
      .openapi({
        description:
          "The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED",
      }),
    name: z.string().openapi({ description: 'The name of the uploaded file' }),
    size: z.int().openapi({ description: 'The number of bytes in the uploaded file' }),
    uploadDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The time in milliseconds when the file was uploaded',
      }),
    virusScan: VirusScanSchema.exactOptional(),
  })
  .openapi({
    description: 'The file ids of the uploaded file',
    required: ['fileId', 'name', 'size', 'uploadDate'],
  })
  .openapi('File')

const FileDownloadSchema = z
  .object({
    url: z.string().openapi({ description: 'The signed URL for downloading a private file' }),
  })
  .openapi({ description: 'The signed URL for downloading a private file', required: ['url'] })
  .openapi('FileDownload')

const FilePagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z.array(FileSchema).openapi({ description: 'An array of users for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of file results', required: ['count', 'list'] })
  .openapi('FilePages')

const MarketSchema = z
  .object({
    attributes: z
      .array(AttributesSchema)
      .openapi({ description: 'The different app attributes supported by this marketplace' }),
    categoryGroups: z
      .array(CategoryGroupsSchema)
      .exactOptional()
      .openapi({ description: 'The category groups supported by this marketplace' }),
    marketplaceId: z.string().openapi({ description: 'The id of this marketplace' }),
    previewAppUrl: z
      .string()
      .openapi({ description: 'The URL template for previewing apps on this marketplace' }),
    viewAppUrl: z
      .string()
      .openapi({ description: 'The URL template for viewing apps on this marketplace' }),
  })
  .openapi({
    description: 'A marketplace',
    required: ['marketplaceId', 'attributes', 'viewAppUrl', 'previewAppUrl'],
  })
  .openapi('Market')

const MarketPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(MarketSchema)
      .openapi({ description: 'An array of markets for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of marketplace results', required: ['count', 'list'] })
  .openapi('MarketPages')

const OwnershipPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(OwnershipSchema)
      .openapi({ description: 'An array of ownership records for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of ownership results', required: ['count', 'list'] })
  .openapi('OwnershipPages')

const RevenueSchema = z
  .object({
    developer: z
      .int()
      .openapi({
        description: 'The total revenue generated for the developer by this app in cents',
      }),
    total: z.int().openapi({ description: 'The total revenue generated by this app in cents' }),
  })
  .openapi({ description: 'The revenue generated by this app', required: ['total', 'developer'] })
  .openapi('Revenue')

const ReviewPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(ReviewSchema)
      .openapi({ description: 'An array of reviews for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of review results', required: ['count', 'list'] })
  .openapi('ReviewPages')

const ReviewEntrySchema = z
  .object({
    date: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The date (in millis) of when this action was performed',
      }),
    reviewId: z.string().openapi({ description: 'The id of the review involved in this action' }),
  })
  .openapi({ description: '', required: ['date', 'reviewId'] })
  .openapi('ReviewEntry')

const SearchPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z.array(AppSchema).openapi({ description: 'An array of results for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of search results', required: ['count', 'list'] })
  .openapi('SearchPages')

const StatSchema = z
  .object({
    value: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The statistic value' }),
  })
  .openapi({ description: 'The statistic value', required: ['value'] })
  .openapi('Stat')

const TotalSchema: z.ZodType<TotalType> = z
  .lazy(() =>
    z
      .object({
        apps: AppTotalSchema,
        end: z
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The end date for this total (in millis)',
          }),
        start: z
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The start date for this total (in millis)',
          }),
        totals: DataTotalSchema,
      })
      .openapi({
        description: 'The total number of events for a particular field',
        required: ['apps', 'totals'],
      }),
  )
  .openapi('Total')

const TransactionPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(TransactionSchema)
      .openapi({ description: 'An array of paymnets for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of transaction results', required: ['count', 'list'] })
  .openapi('TransactionPages')

const UserAccountPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(UserAccountSchema)
      .openapi({ description: 'An array of userAccounts for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of userAccount results', required: ['count', 'list'] })
  .openapi('UserAccountPages')

const UserPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z.array(UserSchema).openapi({ description: 'An array of users for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of user results', required: ['count', 'list'] })
  .openapi('UserPages')

const VersionPagesSchema = z
  .object({
    count: z.int().openapi({ description: 'The total number of results' }),
    list: z
      .array(AppVersionSchema)
      .openapi({ description: 'An array of apps for the current page' }),
    pageNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number for this result set' }),
    pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages available for this result set' }),
  })
  .openapi({ description: 'Pages of AppVersion results', required: ['count', 'list'] })
  .openapi('VersionPages')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getAppsRoute = createRoute({
  method: 'get',
  path: '/apps',
  tags: ['apps : Find and modify apps'],
  summary: 'Returns a paginated list of APPROVED or SUSPENDED apps',
  description:
    '- Results are paginated and the default is value is 1000 if no limit is provided\n- If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the user requesting this resource',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      isOwner: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether this result should only contain apps that are owned by this user',
            in: 'query',
            name: 'isOwner',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: AppPagesSchema } } },
  },
})

export const postAppsRoute = createRoute({
  method: 'post',
  path: '/apps',
  tags: ['apps : Find and modify apps'],
  summary: 'Adds a new app for this developer',
  description:
    "- This method is called on behalf of a developer.\n- Price is required if the model is 'single' or 'recurring'\n- Returns the newly created app\n",
  request: {
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is adding this app',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the app',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this app',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A JSON object representing the pricing model type for this app',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A custom set of app attributes defined by the administrator and attached to this app',
            in: 'query',
            name: 'attributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      restrict: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app",
            in: 'query',
            name: 'restrict',
            required: false,
            schema: { type: 'string' },
          },
        }),
      allow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app",
            in: 'query',
            name: 'allow',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'JSON array of data access requirements',
            in: 'query',
            name: 'access',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    409: { description: 'Already Exists - An app with this name already exists' },
    default: { description: 'OK', content: { '*/*': { schema: AppVersionSchema } } },
  },
})

export const getAppsBySafeNameSafeNameRoute = createRoute({
  method: 'get',
  path: '/apps/bySafeName/{safeName}',
  tags: ['apps : Find and modify apps'],
  summary: 'Returns a single APPROVED or SUSPENDED app',
  description: "- A 'view' event is recorded when trackViews is set to true\n",
  request: {
    params: z.object({
      safeName: z
        .string()
        .openapi({
          param: {
            description: 'The safeName of the App to be located',
            in: 'path',
            name: 'safeName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the user that is requesting this resource',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trackViews: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether this call should be tracked as a 'view' for this app. Default is false.",
            in: 'query',
            name: 'trackViews',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The App is either restricted or was not found' },
    default: { description: 'OK', content: { '*/*': { schema: AppSchema } } },
  },
})

export const getAppsTextSearchRoute = createRoute({
  method: 'get',
  path: '/apps/textSearch',
  tags: ['apps : Find and modify apps'],
  summary: 'Searches through the text of fields to find APPROVED or SUSPENDED apps',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'MyApp'} matches all the documents that have the name 'MyApp'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      text: z
        .string()
        .openapi({
          param: {
            description: 'The text to search for.',
            in: 'query',
            name: 'text',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .openapi({
          param: {
            description:
              "A JSON array containing all the fields to be searched through. Example: ['name', 'customData.description']",
            in: 'query',
            name: 'fields',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the user requesting this resource',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      isOwned: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether this result should only contain apps that are owned by this user',
            in: 'query',
            name: 'isOwned',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: SearchPagesSchema } } },
  },
})

export const getAppsVersionsRoute = createRoute({
  method: 'get',
  path: '/apps/versions',
  tags: ['apps : Find and modify apps'],
  summary: 'Returns a paginated list of AppVersions',
  description:
    '- Results are paginated when limit is set, otherwise all results are returned\n- If no query is specified, returns all AppVersions within the marketplace\n- Only returns AppVersions owned by this developer\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      developerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the developer requesting this resource',
            in: 'query',
            name: 'developerId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: VersionPagesSchema } } },
  },
})

export const getAppsAppIdRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}',
  tags: ['apps : Find and modify apps'],
  summary: 'Returns a single APPROVED or SUSPENDED app',
  description: "- A 'view' event is recorded when trackViews is set to true\n",
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be located',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the user that is requesting this resource',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trackViews: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether this call should be tracked as a 'view' for this app. Default is false.",
            in: 'query',
            name: 'trackViews',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The App is either restricted or was not found' },
    default: { description: 'OK', content: { '*/*': { schema: AppSchema } } },
  },
})

export const deleteAppsAppIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}',
  tags: ['apps : Find and modify apps'],
  summary: 'Removes app and all versions',
  description: '- This method is called on behalf of a developer.\n',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be removed',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is removing this app',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 404: { description: 'Not Found - App is not found' } },
})

export const postAppsAppIdLiveRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/live',
  tags: ['apps : Find and modify apps'],
  summary: 'Change the live app to another, previously approved version',
  description: '- This method is called on behalf of a developer.\n',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be changed',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is changing this AppVersion',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The new version of the live App',
            in: 'query',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App is not found' },
  },
})

export const postAppsAppIdPublishRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/publish',
  tags: ['apps : Find and modify apps'],
  summary: 'Publishes the current working version of the app to the marketplace',
  description:
    '- This method is called on behalf of a developer. \n- Only effects the current working version of the app.\n',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the app to be published',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is modifying this app',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The version of the app to be published',
            in: 'query',
            name: 'version',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      autoApprove: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, this AppVersion is automatically approved and becomes immediately available to end users',
            in: 'query',
            name: 'autoApprove',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted - Publishing succeeded but there are restrictions' },
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App was not found' },
    409: { description: 'Conflict - An app with that name already exists' },
  },
})

export const getAppsAppIdVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/versions/{version}',
  tags: ['apps : Find and modify apps'],
  summary: 'Returns a single AppVersion',
  description: '- Only returns AppVersions owned by this developer\n',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be located',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The version number of the app',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the developer that is requesting this resource',
            in: 'query',
            name: 'developerId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The App or version number was not found' },
    default: { description: 'OK', content: { '*/*': { schema: AppVersionSchema } } },
  },
})

export const postAppsAppIdVersionsVersionRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/versions/{version}',
  tags: ['apps : Find and modify apps'],
  summary: 'Updates the app or creates a new version',
  description:
    "- This method is called on behalf of a developer.\n- Price and is required if the model is 'single' or 'recurring'\n- Returns the newly updated app\n- This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).\n",
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be updated',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version of the App to be updated',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is updating this app',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the app',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this app',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A JSON object representing the pricing model type for this app',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A custom set of app attributes defined by the administrator and attached to this app',
            in: 'query',
            name: 'attributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      restrict: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app",
            in: 'query',
            name: 'restrict',
            required: false,
            schema: { type: 'string' },
          },
        }),
      allow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app",
            in: 'query',
            name: 'allow',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'JSON array of data access requirements',
            in: 'query',
            name: 'access',
            required: false,
            schema: { type: 'string' },
          },
        }),
      approvalRequired: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'False if updates should skip the approval process and be available immediately. Default is True',
            in: 'query',
            name: 'approvalRequired',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App is not found' },
    409: { description: 'Already Exists - An app with this name already exists' },
    default: { description: 'OK', content: { '*/*': { schema: AppVersionSchema } } },
  },
})

export const deleteAppsAppIdVersionsVersionRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}/versions/{version}',
  tags: ['apps : Find and modify apps'],
  summary: 'Removes AppVersion',
  description: '- This method is called on behalf of a developer.\n',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be removed',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version of the App to be removed',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is removing this app',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 404: { description: 'Not Found - App is not found' } },
})

export const patchAppsAppIdVersionsVersionRoute = createRoute({
  method: 'patch',
  path: '/apps/{appId}/versions/{version}',
  tags: ['apps : Find and modify apps'],
  summary: 'Updates the app fields or creates a new version',
  description:
    "- This method is called on behalf of a developer.\n- Price and is required if the model is 'single' or 'recurring'\n- Returns the newly updated app\n- This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). \n",
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be updated',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version of the App to be updated',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the developer that is updating this app',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the app',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this app',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A JSON object representing the pricing model type for this app',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attributes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A custom set of app attributes defined by the administrator and attached to this app',
            in: 'query',
            name: 'attributes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      restrict: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app",
            in: 'query',
            name: 'restrict',
            required: false,
            schema: { type: 'string' },
          },
        }),
      allow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app",
            in: 'query',
            name: 'allow',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'JSON array of data access requirements',
            in: 'query',
            name: 'access',
            required: false,
            schema: { type: 'string' },
          },
        }),
      approvalRequired: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'False if updates should skip the approval process and be available immediately. Default is True',
            in: 'query',
            name: 'approvalRequired',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App is not found' },
    409: { description: 'Already Exists - An app with this name already exists' },
    default: { description: 'OK', content: { '*/*': { schema: AppVersionSchema } } },
  },
})

export const postAppsAppIdVersionsVersionStatusRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/versions/{version}/status',
  tags: ['apps : Find and modify apps'],
  summary: 'Allows a developer or administrator to change the status of apps',
  description:
    'Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change\n',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App to be updated',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The version of the App to be updated',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique id of the developer that is modifying this app',
            in: 'query',
            name: 'developerId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['inReview', 'approved', 'suspended', 'rejected'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "The new status for this app. Can be either 'inReview', 'approved', 'suspended' or 'rejected'",
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['inReview', 'approved', 'suspended', 'rejected'], type: 'string' },
          },
        }),
      modifiedBy: z
        .enum(['developer', 'administrator'])
        .default('administrator')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The role initiating this status change. Can be either 'developer' or 'administrator' (default)",
            in: 'query',
            name: 'modifiedBy',
            required: false,
            schema: {
              default: 'administrator',
              enum: ['developer', 'administrator'],
              type: 'string',
            },
          },
        }),
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The reason for this status change',
            in: 'query',
            name: 'reason',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App is not found' },
    412: {
      description:
        "Precondition Failed - The app's new status is not valid because of the app's current status",
    },
  },
})

export const postCustomGatewayPaymentOwnershipIdRoute = createRoute({
  method: 'post',
  path: '/custom-gateway/payment/{ownershipId}',
  tags: ['custom-gateway : Process payments and refunds'],
  summary: 'Adds a payment for an app on behalf of a user',
  description:
    "- Results are returned for the market provided within the basic authentication credentials \n- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint\n",
  request: {
    params: z.object({
      ownershipId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the ownership record involved in this transaction',
            in: 'path',
            name: 'ownershipId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      amount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The total amount paid in cents',
            in: 'query',
            name: 'amount',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      date: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The date (in milliseconds) of when this payment was made',
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      feeAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The fee (in cents) paid to a payment processors or third parties to process this payment. Default is 0.',
            in: 'query',
            name: 'feeAmount',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      marketplaceAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The amount (in cents) paid to the marketplace owner as a commission for the purchase of this app. Defaults based on the commission amount configured for this marketplace.',
            in: 'query',
            name: 'marketplaceAmount',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      developerAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The amount (in cents) paid to the owner of the app. Defaults based on the commission amount configured for this marketplace.',
            in: 'query',
            name: 'developerAmount',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object to attach to this transaction',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: TransactionSchema } } },
  },
})

export const postCustomGatewayRefundOwnershipIdRoute = createRoute({
  method: 'post',
  path: '/custom-gateway/refund/{ownershipId}',
  tags: ['custom-gateway : Process payments and refunds'],
  summary: 'Fully or partially refund payment for an app on behalf of a user',
  description:
    "- Results are returned for the market provided within the basic authentication credentials\n- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint\n",
  request: {
    params: z.object({
      ownershipId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the ownership record involved in this transaction',
            in: 'path',
            name: 'ownershipId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      amount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The total amount refunded in cents',
            in: 'query',
            name: 'amount',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      date: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The date (in milliseconds) of when this refund was made',
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      feeAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The fee (in cents) recovered from a payment processor or third party to process this payment. The default value is 0',
            in: 'query',
            name: 'feeAmount',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      marketplaceAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The amount (in cents) recovered from the marketplace owner as a commission refund for the purchase of this app',
            in: 'query',
            name: 'marketplaceAmount',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      developerAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount (in cents) recovered from the owner of the app',
            in: 'query',
            name: 'developerAmount',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object to attach to this transaction',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: TransactionSchema } } },
  },
})

export const getDeveloperAccountsRoute = createRoute({
  method: 'get',
  path: '/developerAccounts',
  tags: ['developerAccounts : Find and modify developer accounts'],
  summary: 'Returns a paginated list of developerAccounts',
  description: '- Results are paginated and the default is value is 1000 if no limit is provided\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'NASA'} matches all the developerAccounts that have the name 'NASA'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperAccountPagesSchema } } },
  },
})

export const getDeveloperAccountsDeveloperAccountIdRoute = createRoute({
  method: 'get',
  path: '/developerAccounts/{developerAccountId}',
  tags: ['developerAccounts : Find and modify developer accounts'],
  summary: 'Returns a single developer account',
  request: {
    params: z.object({
      developerAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer account to be located',
            in: 'path',
            name: 'developerAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - Developer account is not found' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperAccountSchema } } },
  },
})

export const postDeveloperAccountsDeveloperAccountIdRoute = createRoute({
  method: 'post',
  path: '/developerAccounts/{developerAccountId}',
  tags: ['developerAccounts : Find and modify developer accounts'],
  summary: "Updates the developer account or adds the developer account if it doesn't exist",
  request: {
    params: z.object({
      developerAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer account to be updated',
            in: 'path',
            name: 'developerAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer that this account belongs to',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contact email address',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name for the account',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperAccountSchema } } },
  },
})

export const deleteDeveloperAccountsDeveloperAccountIdRoute = createRoute({
  method: 'delete',
  path: '/developerAccounts/{developerAccountId}',
  tags: ['developerAccounts : Find and modify developer accounts'],
  summary: 'Removes the developer account',
  request: {
    params: z.object({
      developerAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer account to be updated',
            in: 'path',
            name: 'developerAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK' },
  },
})

export const patchDeveloperAccountsDeveloperAccountIdRoute = createRoute({
  method: 'patch',
  path: '/developerAccounts/{developerAccountId}',
  tags: ['developerAccounts : Find and modify developer accounts'],
  summary: 'Updates the developer account fields',
  request: {
    params: z.object({
      developerAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer account to be updated',
            in: 'path',
            name: 'developerAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer that this account belongs to',
            in: 'query',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contact email address',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name for the account',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The developer is not found' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperAccountSchema } } },
  },
})

export const getDevelopersRoute = createRoute({
  method: 'get',
  path: '/developers',
  tags: ['developers : Find and modify developers'],
  summary: 'Returns a paginated list of developers',
  description: '- Results are paginated and the default is value is 100 if no limit is provided\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'John'} matches all the developers that have the name 'John'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperPagesSchema } } },
  },
})

export const getDevelopersDeveloperIdRoute = createRoute({
  method: 'get',
  path: '/developers/{developerId}',
  tags: ['developers : Find and modify developers'],
  summary: 'Returns a single developer',
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer to be located',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - Developer is not found' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperSchema } } },
  },
})

export const postDevelopersDeveloperIdRoute = createRoute({
  method: 'post',
  path: '/developers/{developerId}',
  tags: ['developers : Find and modify developers'],
  summary: "Updates the developer record or adds the developer if it doesn't exist",
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer to be located',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this developer',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The developer's email",
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The developer's username",
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The developer's name",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperSchema } } },
  },
})

export const deleteDevelopersDeveloperIdRoute = createRoute({
  method: 'delete',
  path: '/developers/{developerId}',
  tags: ['developers : Find and modify developers'],
  summary: 'Removes a single developer',
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer to be removed',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - Developer is not found' },
    default: { description: 'OK' },
  },
})

export const patchDevelopersDeveloperIdRoute = createRoute({
  method: 'patch',
  path: '/developers/{developerId}',
  tags: ['developers : Find and modify developers'],
  summary: 'Updates the developer fields',
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer to be located',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this developer',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The developer's email",
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The developer's username",
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The developer's name",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The developer is not found' },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperSchema } } },
  },
})

export const getEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/events/{eventId}',
  tags: ['events : Find events'],
  summary: 'Returns an event',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the event',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The event was not found' },
    default: { description: 'OK', content: { '*/*': { schema: EventSchema } } },
  },
})

export const getFilesRoute = createRoute({
  method: 'get',
  path: '/files',
  tags: ['files : Upload files '],
  summary: 'Returns a paginated list of files',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'file.txt'} matches all the files that have the name 'file.txt'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: FileSchema } } },
  },
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/files',
  tags: ['files : Upload files '],
  summary: 'Uploads a file.',
  description:
    '- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. \n- This method is called on behalf of a developer.\n',
  request: {
    query: z.object({
      isPrivate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.',
            in: 'query',
            name: 'isPrivate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma separated list of hashes to return in order to verify file integrity.',
            in: 'query',
            name: 'hash',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The file to be uploaded',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: FileSchema } } },
  },
})

export const getFilesByIdOrUrlRoute = createRoute({
  method: 'get',
  path: '/files/byIdOrUrl',
  tags: ['files : Upload files '],
  summary: 'Get the details for a file.',
  request: {
    query: z.object({
      fileIdOrUrl: z
        .string()
        .openapi({
          param: {
            description: 'The fileId or fileUrl of the file to be returned',
            in: 'query',
            name: 'fileIdOrUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: FileSchema } } },
  },
})

export const getFilesDownloadRoute = createRoute({
  method: 'get',
  path: '/files/download',
  tags: ['files : Upload files '],
  summary: 'A signed URL for downloading a private file can be returned by providing the fileId.',
  request: {
    query: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The URL of the file to be uploaded',
            in: 'query',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      validSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of seconds that this signed URL should be valid for. The default is 60.',
            in: 'query',
            name: 'validSeconds',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The file was not found' },
    default: { description: 'OK', content: { '*/*': { schema: FileDownloadSchema } } },
  },
})

export const postFilesUrlRoute = createRoute({
  method: 'post',
  path: '/files/url',
  tags: ['files : Upload files '],
  summary: 'Uploads a file from a URL',
  description:
    '- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.\n- This method is called on behalf of a developer.\n',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'The URL of the file to be uploaded',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      isPrivate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.',
            in: 'query',
            name: 'isPrivate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: FileSchema } } },
  },
})

export const getMarketsThisRoute = createRoute({
  method: 'get',
  path: '/markets/this',
  tags: ['markets : This marketplace'],
  summary: 'Returns the current marketplace',
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: MarketSchema } } },
  },
})

export const getOwnershipRoute = createRoute({
  method: 'get',
  path: '/ownership',
  tags: ['ownership : Find ownership'],
  summary: 'Returns a paginated list of app licenses',
  description:
    ' - Results are returned for the market provided within the basic authentication credentials ',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'userId':'12'} matches all the ownership records that have the userId '12'.",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'date':1} sorts the results by date in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: OwnershipPagesSchema } } },
  },
})

export const postOwnershipInstallRoute = createRoute({
  method: 'post',
  path: '/ownership/install',
  tags: ['ownership : Find ownership'],
  summary: 'Aquires an app license for a user (installs app)',
  description:
    ' - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called ',
  request: {
    query: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App being owned',
            in: 'query',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User requesting to own the App',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the model associated with this ownership request',
            in: 'query',
            name: 'modelId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A custom model that will override the app's default model for this install",
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object to attach to this ownership record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    402: { description: 'Payment Required - The App requires a user with pre-set payment details' },
    404: { description: 'Not Found - The App is either restricted or was not found' },
    409: {
      description:
        'Already Exists - The User already owns this app (or is already participating in a trial)',
    },
    412: { description: "Payment Failed - The User's payment details are invalid" },
    default: { description: 'OK', content: { '*/*': { schema: OwnershipSchema } } },
  },
})

export const postOwnershipUninstallOwnershipIdRoute = createRoute({
  method: 'post',
  path: '/ownership/uninstall/{ownershipId}',
  tags: ['ownership : Find ownership'],
  summary: 'Uninstalls a license for a particular user and app (uninstalls app)',
  description:
    ' - This method is called on behalf of a user - User data and statistics are recorded when this method is called ',
  request: {
    params: z.object({
      ownershipId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the ownership to be unintalled',
            in: 'path',
            name: 'ownershipId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User requesting to uninstall the App',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cancelOwnership: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if this app will require payment to be re-installed. Default is false',
            in: 'query',
            name: 'cancelOwnership',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object to attach to this ownership record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App is not found' },
    409: { description: 'App is not owned by this user' },
    default: { description: 'OK', content: { '*/*': { schema: OwnershipSchema } } },
  },
})

export const getOwnershipOwnershipIdRoute = createRoute({
  method: 'get',
  path: '/ownership/{ownershipId}',
  tags: ['ownership : Find ownership'],
  summary: 'Returns an ownership record',
  description:
    ' - Results are returned for the market provided within the basic authentication credentials ',
  request: {
    params: z.object({
      ownershipId: z
        .string()
        .openapi({
          param: {
            description: 'The id belonging to the ownership record',
            in: 'path',
            name: 'ownershipId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: OwnershipSchema } } },
  },
})

export const postOwnershipOwnershipIdRoute = createRoute({
  method: 'post',
  path: '/ownership/{ownershipId}',
  tags: ['ownership : Find ownership'],
  summary: 'Updates an ownership record',
  description:
    ' - Results are returned for the market provided within the basic authentication credentials ',
  request: {
    params: z.object({
      ownershipId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the ownership to be updated',
            in: 'path',
            name: 'ownershipId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Custom JSON object that will be attached to this ownership record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
      expires: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The date (in millis) of when this app ownership expires',
            in: 'query',
            name: 'expires',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: OwnershipSchema } } },
  },
})

export const patchOwnershipOwnershipIdRoute = createRoute({
  method: 'patch',
  path: '/ownership/{ownershipId}',
  tags: ['ownership : Find ownership'],
  summary: 'Updates ownership fields',
  description:
    ' - Results are returned for the market provided within the basic authentication credentials ',
  request: {
    params: z.object({
      ownershipId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the ownership to be updated',
            in: 'path',
            name: 'ownershipId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Custom JSON object that will be attached to this ownership record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
      expires: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The date (in millis) of when this app ownership expires',
            in: 'query',
            name: 'expires',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The ownership was not found' },
    default: { description: 'OK', content: { '*/*': { schema: OwnershipSchema } } },
  },
})

export const getPermissionAppsAppIdRoute = createRoute({
  method: 'get',
  path: '/permission/apps/{appId}',
  tags: ['permission : Add and remove permissions '],
  summary: "Returns permission that allows the app to access this user's data",
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the app',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The access is not found' },
    default: { description: 'OK', content: { '*/*': { schema: AccessSchema } } },
  },
})

export const postPermissionAppsAppIdRoute = createRoute({
  method: 'post',
  path: '/permission/apps/{appId}',
  tags: ['permission : Add and remove permissions '],
  summary: "Adds permission to allow the app to access this user's data",
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the app',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The time (in milliseconds) of when the user agreed to the access request',
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ip address of the user agreeing to the access request',
            in: 'query',
            name: 'ip',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - App not found' },
    default: { description: 'OK', content: { '*/*': { schema: AccessSchema } } },
  },
})

export const deletePermissionAppsAppIdRoute = createRoute({
  method: 'delete',
  path: '/permission/apps/{appId}',
  tags: ['permission : Add and remove permissions '],
  summary: "Removes permission that allows the app to access this user's data",
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the app',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - The access is not found' },
  },
})

export const getReviewsRoute = createRoute({
  method: 'get',
  path: '/reviews',
  tags: ['reviews : Find and modify reviews '],
  summary:
    'Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set',
  description: '- Results are paginated and the default is value is 100 if no limit is provided\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'rating': 500} matches all the reviews that have a rating of 500. ",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'rating':1} sorts the results by rating in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: ReviewPagesSchema } } },
  },
})

export const postReviewsRoute = createRoute({
  method: 'post',
  path: '/reviews',
  tags: ['reviews : Find and modify reviews '],
  summary: 'Post a review from a User and returns the new post',
  description:
    '- Only authenticated users are able to post reviews\n- Returns the newly created review\n',
  request: {
    query: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the App that will own this review',
            in: 'query',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User that is posting this review',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the User account that is posting this review',
            in: 'query',
            name: 'userAccountId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      headline: z
        .string()
        .openapi({
          param: {
            description: "The review's headline. Limited to 50 characters.",
            in: 'query',
            name: 'headline',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .openapi({
          param: {
            description:
              'The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)',
            in: 'query',
            name: 'rating',
            required: true,
            schema: { maximum: 500, minimum: 0, type: 'integer' },
          },
        }),
      description: z
        .string()
        .openapi({
          param: {
            description: "The review's description. Limited to 2000 characters.",
            in: 'query',
            name: 'description',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this review',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mustOwnApp: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if a review can be created only by a user that has owned the app. The default is True.',
            in: 'query',
            name: 'mustOwnApp',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      autoApprove: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if the review should be automatically approved. The default is False.',
            in: 'query',
            name: 'autoApprove',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    403: {
      description:
        'Forbidden - Users must have owned the app before they can post a review; Anonymous users cannot post reviews',
    },
    409: { description: 'Already Exists - The User has already reviewed this app' },
    default: { description: 'OK', content: { '*/*': { schema: ReviewSchema } } },
  },
})

export const getReviewsReviewIdRoute = createRoute({
  method: 'get',
  path: '/reviews/{reviewId}',
  tags: ['reviews : Find and modify reviews '],
  summary: 'Find a Review within a particular App and marketplace',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the review to be located',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - Review is not found' },
    default: { description: 'OK', content: { '*/*': { schema: ReviewSchema } } },
  },
})

export const postReviewsReviewIdRoute = createRoute({
  method: 'post',
  path: '/reviews/{reviewId}',
  tags: ['reviews : Find and modify reviews '],
  summary: 'Update a review from a User and returns the new post',
  description:
    '- Only the review author is able to update their review\n- Returns the newly updated review\n',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the Review to be updated',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User that is updating this review',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User account that is posting this review',
            in: 'query',
            name: 'userAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      headline: z
        .string()
        .openapi({
          param: {
            description: "The review's headline. Limited to 50 characters.",
            in: 'query',
            name: 'headline',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .openapi({
          param: {
            description:
              'The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)',
            in: 'query',
            name: 'rating',
            required: true,
            schema: { maximum: 500, minimum: 0, type: 'integer' },
          },
        }),
      description: z
        .string()
        .openapi({
          param: {
            description: "The review's description. Limited to 2000 characters.",
            in: 'query',
            name: 'description',
            required: true,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    403: { description: 'Forbidden - Anonymous users cannot update reviews' },
    404: { description: 'Not Found - This review was not found' },
    default: { description: 'OK', content: { '*/*': { schema: ReviewSchema } } },
  },
})

export const deleteReviewsReviewIdRoute = createRoute({
  method: 'delete',
  path: '/reviews/{reviewId}',
  tags: ['reviews : Find and modify reviews '],
  summary: 'Remove a review',
  description: '- Only the review author is able to remove their review\n',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the Review to be updated',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User that is removing this review',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the User account that is emoving this review',
            in: 'query',
            name: 'userAccountId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
  },
})

export const patchReviewsReviewIdRoute = createRoute({
  method: 'patch',
  path: '/reviews/{reviewId}',
  tags: ['reviews : Find and modify reviews '],
  summary: 'Update a review fields',
  description:
    '- Only the review author is able to update their review\n- Returns the newly updated review\n',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the Review to be updated',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the User that is updating this review',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the User account that is posting this review',
            in: 'query',
            name: 'userAccountId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      headline: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The review's headline. Limited to 50 characters.",
            in: 'query',
            name: 'headline',
            required: false,
            schema: { type: 'string' },
          },
        }),
      rating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)',
            in: 'query',
            name: 'rating',
            required: false,
            schema: { maximum: 500, minimum: 0, type: 'integer' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The review's description. Limited to 2000 characters.",
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    403: { description: 'Forbidden - Anonymous users cannot update reviews' },
    404: { description: 'Not Found - This review was not found' },
    default: { description: 'OK', content: { '*/*': { schema: ReviewSchema } } },
  },
})

export const postStatsIncrementFieldRoute = createRoute({
  method: 'post',
  path: '/stats/increment/{field}',
  tags: ['stats: Find marketplace statistics'],
  summary: 'Increments a statistics field',
  description: 'increment a statistics field',
  request: {
    params: z.object({
      field: z
        .string()
        .openapi({
          param: {
            description: 'The field to be incremented',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the app associated with this statistic value',
            in: 'query',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the user that is performing the action',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      value: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The increment amount. Default is 1 if no value is provided.',
            in: 'query',
            name: 'value',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      date: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'The date (in millis) for when this increment occurred. The default is the current date if no value is provided.',
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { default: { description: 'OK' } },
})

export const getStatsSeriesPeriodFieldsRoute = createRoute({
  method: 'get',
  path: '/stats/series/{period}/{fields}',
  tags: ['stats: Find marketplace statistics'],
  summary: 'Return a timeseries for a particular field',
  description:
    'Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]',
  request: {
    params: z.object({
      period: z
        .enum(['day', 'month'])
        .openapi({
          param: {
            description: 'The period for the series (day or month)',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['day', 'month'], type: 'string' },
          },
        }),
      fields: z
        .string()
        .openapi({
          param: {
            description:
              'The field to be graphed. This also be a comma separated list of fields and the result will be a single timeseries containing the sum of all fields.',
            in: 'path',
            name: 'fields',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The start date for this series (in millis)',
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      end: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The end date for this series (in millis)',
            in: 'query',
            name: 'end',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: { description: 'OK', content: { '*/*': { schema: z.array(z.array(z.object({}))) } } },
  },
})

export const getStatsTotalRoute = createRoute({
  method: 'get',
  path: '/stats/total',
  tags: ['stats: Find marketplace statistics'],
  summary: 'Returns the total number of events for a particular field.',
  request: {
    query: z.object({
      fields: z
        .string()
        .openapi({
          param: {
            description:
              'A comma seperated list of all the fields to be returned in the total (available by default: dislikes, likes, reviews, totalSales, developerSales, marketplaceSales, downloads, ownerships, views)',
            in: 'query',
            name: 'fields',
            required: true,
            schema: { type: 'string' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The start date for this total (in millis)',
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      end: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The end date for this total (in millis)',
            in: 'query',
            name: 'end',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { default: { description: 'OK', content: { '*/*': { schema: TotalSchema } } } },
})

export const getStripeGatewayDeveloperDeveloperIdAccountsRoute = createRoute({
  method: 'get',
  path: '/stripe-gateway/developer/{developerId}/accounts',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: 'Returns a developers connected Stripe accounts',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer connecting their Stripe account',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: AccountsSchema } } },
  },
})

export const postStripeGatewayDeveloperDeveloperIdAccountsRoute = createRoute({
  method: 'post',
  path: '/stripe-gateway/developer/{developerId}/accounts',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: 'Generate a temporary URL to allow a developer to connect their Stripe account',
  description:
    '- Results are returned for the market provided within the basic authentication credentials \n- The URL generated by this method is only valid for 48 hours.\n',
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer connecting their Stripe account',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      redirectUrl: z
        .string()
        .openapi({
          param: {
            description:
              'The URL to redirect this developer after they have connected their Stripe account',
            in: 'query',
            name: 'redirectUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: DeveloperTokenSchema } } },
  },
})

export const deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRoute = createRoute({
  method: 'delete',
  path: '/stripe-gateway/developer/{developerId}/accounts/{stripeId}',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: "Disconnects a developer's Stripe account",
  description:
    '\n- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      developerId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the developer disconnecting their Stripe account',
            in: 'path',
            name: 'developerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      stripeId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the stripe account to disconnect',
            in: 'path',
            name: 'stripeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: AccountsSchema } } },
  },
})

export const getStripeGatewayUserUserIdCardsRoute = createRoute({
  method: 'get',
  path: '/stripe-gateway/user/{userId}/cards',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: 'Returns credit cards for this user',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user requesting their credit cards',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: CardsSchema } } },
  },
})

export const postStripeGatewayUserUserIdCardsRoute = createRoute({
  method: 'post',
  path: '/stripe-gateway/user/{userId}/cards',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: 'Adds credit card for this user',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user adding their credit card',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The Stripe token returned by the Stripe.js Stripe.card.createToken call',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      isDefault: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true if this should be set to be the default credit card',
            in: 'query',
            name: 'isDefault',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: CardsSchema } } },
  },
})

export const postStripeGatewayUserUserIdCardsCardIdRoute = createRoute({
  method: 'post',
  path: '/stripe-gateway/user/{userId}/cards/{cardId}',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: 'Updates a credit card for this user',
  description:
    '\n- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user adding their credit card',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cardId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the card to be updated',
            in: 'path',
            name: 'cardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      isDefault: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true if this should be set to be the default credit card',
            in: 'query',
            name: 'isDefault',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      address_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The card holder's city",
            in: 'query',
            name: 'address_city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The card holder's country",
            in: 'query',
            name: 'address_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_line1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The card holder's street address",
            in: 'query',
            name: 'address_line1',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_line2: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The card holder's street address",
            in: 'query',
            name: 'address_line2',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The card holder's city state/province",
            in: 'query',
            name: 'address_state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The card holder's zip/postal code",
            in: 'query',
            name: 'address_zip',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: CardsSchema } } },
  },
})

export const deleteStripeGatewayUserUserIdCardsCardIdRoute = createRoute({
  method: 'delete',
  path: '/stripe-gateway/user/{userId}/cards/{cardId}',
  tags: ['stripe-gateway : Process payments and refunds '],
  summary: 'Removes a credit card for a user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user removing their credit card',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cardId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the credit card to remove',
            in: 'path',
            name: 'cardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    412: {
      description:
        "Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint",
    },
    default: { description: 'OK', content: { '*/*': { schema: CardsSchema } } },
  },
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['transactions : Find payments and refunds '],
  summary: 'Returns a paginated list of transactions',
  description: '- Results are paginated and the default is value is 100 if no limit is provided\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'userId':'1'} matches all the transactions that have the userId '1'.",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'date':1} sorts the results by total in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: TransactionPagesSchema } } },
  },
})

export const getTransactionsTransactionIdRoute = createRoute({
  method: 'get',
  path: '/transactions/{transactionId}',
  tags: ['transactions : Find payments and refunds '],
  summary: 'Returns a transaction',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the transaction to return',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
  },
})

export const postTransactionsTransactionIdRoute = createRoute({
  method: 'post',
  path: '/transactions/{transactionId}',
  tags: ['transactions : Find payments and refunds '],
  summary: 'Updates a transaction',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the transaction to be updated',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: TransactionSchema } } },
  },
})

export const deleteTransactionsTransactionIdRoute = createRoute({
  method: 'delete',
  path: '/transactions/{transactionId}',
  tags: ['transactions : Find payments and refunds '],
  summary: 'Deleted a transaction',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the transaction to be deleted',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
  },
})

export const getUserAccountsRoute = createRoute({
  method: 'get',
  path: '/userAccounts',
  tags: ['userAccounts : Find and modify user accounts '],
  summary: 'Returns a paginated list of userAccounts',
  description: '- Results are paginated and the default is value is 1000 if no limit is provided\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'NASA'} matches all the userAccounts that have the name 'NASA'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: UserAccountPagesSchema } } },
  },
})

export const getUserAccountsUserAccountIdRoute = createRoute({
  method: 'get',
  path: '/userAccounts/{userAccountId}',
  tags: ['userAccounts : Find and modify user accounts '],
  summary: 'Returns a single user account',
  request: {
    params: z.object({
      userAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user account to be located',
            in: 'path',
            name: 'userAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - Developer account is not found' },
    default: { description: 'OK', content: { '*/*': { schema: UserAccountSchema } } },
  },
})

export const postUserAccountsUserAccountIdRoute = createRoute({
  method: 'post',
  path: '/userAccounts/{userAccountId}',
  tags: ['userAccounts : Find and modify user accounts '],
  summary: "Updates the user account or adds the user account if it doesn't exist",
  request: {
    params: z.object({
      userAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user account to be updated',
            in: 'path',
            name: 'userAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The Id of the user that this account belongs to',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contact email address',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The user account name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: UserAccountSchema } } },
  },
})

export const deleteUserAccountsUserAccountIdRoute = createRoute({
  method: 'delete',
  path: '/userAccounts/{userAccountId}',
  tags: ['userAccounts : Find and modify user accounts '],
  summary: 'Removes the user account',
  request: {
    params: z.object({
      userAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user account to be removed',
            in: 'path',
            name: 'userAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK' },
  },
})

export const patchUserAccountsUserAccountIdRoute = createRoute({
  method: 'patch',
  path: '/userAccounts/{userAccountId}',
  tags: ['userAccounts : Find and modify user accounts '],
  summary: 'Updates the user account fields',
  request: {
    params: z.object({
      userAccountId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user account to be updated',
            in: 'path',
            name: 'userAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The Id of the user that this account belongs to',
            in: 'query',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contact email address',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The user account name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - User account is not found' },
    default: { description: 'OK', content: { '*/*': { schema: UserAccountSchema } } },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users : Find and modify users '],
  summary: 'Returns a paginated list of users',
  description: '- Results are paginated and the default is value is 100 if no limit is provided\n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A query document. Example: {'name':'John'} matches all the users that have the name 'John'",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A sort document. Example: {'name':1} sorts the results by name in ascending order",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The result set page number to be returned',
            in: 'query',
            name: 'pageNumber',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return per page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: UserPagesSchema } } },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['users : Find and modify users '],
  summary: 'Return a single user',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user to be located',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - User is not found' },
    default: { description: 'OK', content: { '*/*': { schema: UserSchema } } },
  },
})

export const postUsersUserIdRoute = createRoute({
  method: 'post',
  path: '/users/{userId}',
  tags: ['users : Find and modify users '],
  summary: "Updates a single user or adds the user if they don't exist",
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user to be updated',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this user',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The user's email",
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The user's username",
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The user's name",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    default: { description: 'OK', content: { '*/*': { schema: UserSchema } } },
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}',
  tags: ['users : Find and modify users '],
  summary: 'Removes a single user',
  description:
    '- Results are returned for the market provided within the basic authentication credentials\n',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user to be removed',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - User is not found' },
    default: { description: 'OK' },
  },
})

export const patchUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}',
  tags: ['users : Find and modify users '],
  summary: 'Updates user fields',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the user to be updated',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type for this user',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The user's email",
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The user's username",
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The user's name",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customData: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom JSON object that you can create and attach to this record',
            in: 'query',
            name: 'customData',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Bad Request - Required parameters are missing, malformed or invalid' },
    404: { description: 'Not Found - User is not found' },
    default: { description: 'OK', content: { '*/*': { schema: UserSchema } } },
  },
})
