import { createRoute, z } from '@hono/zod-openapi'

const ClassificationSummarySchema = z
  .object({
    code: z.string().openapi({ description: 'The unique code for a classification.' }),
    name: z.string().openapi({ description: 'The name of the classification for display.' }),
  })
  .openapi({ required: ['code', 'name'], 'x-emoji': '🔞' })
  .openapi('ClassificationSummary')

const ExclusionRuleSchema = z
  .strictObject({
    description: z.string().exactOptional(),
    device: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device type that the exclusion rules apply to.' }),
    excludeAirplay: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Prevent airplay from an apple device.' }),
    excludeChromecast: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Prevent chromecasting.' }),
    excludeDelivery: z
      .enum(['Stream', 'Download', 'StreamOrDownload', 'ProgressiveDownload', 'None'])
      .exactOptional(),
    excludeMinResolution: z
      .enum(['SD', 'HD-720', 'HD-1080', 'HD-4K', 'External', 'Unknown'])
      .exactOptional(),
  })
  .openapi({
    description: 'Defines playback exclusion rules for an Offer or Entitlement.',
    'x-emoji': '⛔️',
    required: [],
  })
  .openapi('ExclusionRule')

const OfferRightsSchema = z
  .object({
    deliveryType: z.enum(['Stream', 'Download', 'StreamOrDownload', 'ProgressiveDownload', 'None']),
    exclusionRules: z
      .array(ExclusionRuleSchema)
      .exactOptional()
      .openapi({ description: 'Any specific playback exclusion rules.' }),
    maxDownloads: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of allowed downloads.' }),
    maxPlays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of allowed plays.' }),
    ownership: z.enum(['Subscription', 'Free', 'Rent', 'Own', 'None']),
    playPeriod: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The length of time in minutes which the rental will last once played for the first time.',
      }),
    rentalPeriod: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The length of time in minutes which the rental will last once purchased.',
      }),
    resolution: z.enum(['SD', 'HD-720', 'HD-1080', 'HD-4K', 'External', 'Unknown']),
    scopes: z.array(z.string()),
  })
  .openapi({
    description: 'The base type for both Offer and Entitlement.',
    required: ['deliveryType', 'scopes', 'resolution', 'ownership'],
    'x-emoji': '🎟',
  })
  .openapi('OfferRights')

const OfferSchema = OfferRightsSchema.and(
  z
    .object({
      availability: z.enum(['Available', 'ComingSoon']),
      customFields: z
        .looseObject({})
        .exactOptional()
        .openapi({ description: 'A map of custom fields defined by a curator for an offer.' }),
      endDate: z.iso.datetime({ offset: true }).exactOptional(),
      id: z.string().exactOptional(),
      name: z.string().exactOptional(),
      price: z.float32(),
      startDate: z.iso.datetime({ offset: true }).exactOptional(),
      subscriptionCode: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The code of the subscription this offer is offered under, if any.',
        }),
    })
    .openapi({ required: ['price', 'availability'], 'x-emoji': '💰' }),
).openapi('Offer')

const ThemeColorSchema = z
  .strictObject({
    name: z.string().openapi({ description: 'The name of the theme color.' }),
    opacity: z
      .float32()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'The opacity of the theme color from 0 to 1.\n\nWhen omitted, no opacity level is to be applied to the color, or in other words we\nassume the color has an opacity of 1\n',
      }),
    value: z.string().openapi({ description: 'The hex value of the theme color.' }),
  })
  .openapi({ required: ['name', 'value'], 'x-emoji': '🎨' })
  .openapi('ThemeColor')

const ThemeSchema = z
  .strictObject({
    colors: z
      .array(ThemeColorSchema)
      .openapi({ description: 'The list of colors defined for the theme.' }),
    type: z.enum(['Background', 'Text', 'Custom']).openapi({ description: 'The type of theme.' }),
  })
  .openapi({ required: ['colors', 'type'], 'x-emoji': '🎨' })
  .openapi('Theme')

const ItemSummarySchema = z
  .object({
    advisoryText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advisory text about this item, related to the classification' }),
    availableEpisodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of available episodes in the season, if the item is a season.',
      }),
    availableSeasonCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of available seasons in the show, if the item is a show.',
      }),
    averageUserRating: z
      .number()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'The average user rating.\nWhen based on user ratings from our system this will be out of 10.\n',
      }),
    badge: z.string().exactOptional().openapi({ description: 'The badge this item has.' }),
    channelShortCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The channel short code, if the item is a channel.' }),
    classification: ClassificationSummarySchema.exactOptional(),
    contextualTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A contextually relative title to display after a parent title.\nMostly applicable to Season, Episode and Trailer.\n',
      }),
    customFields: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom fields defined by a curator for an item.' }),
    customId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom identifier for this item.\nFor example the id for this item under a different content system.\n',
      }),
    duration: z
      .int32()
      .min(0)
      .exactOptional()
      .openapi({ description: 'The duration of the media in seconds.' }),
    episodeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of episodes in the season, if the item is a season.' }),
    episodeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of an episode.' }),
    episodeNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of an episode, if the item is an episode.' }),
    genres: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The array of genres this item belongs to.' }),
    hasClosedCaptions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether closed captioning is available.' }),
    id: z.string().openapi({ description: 'Unique identifier for an Item' }),
    images: z.record(z.string(), z.url()).exactOptional(),
    offers: z
      .array(OfferSchema)
      .exactOptional()
      .openapi({ description: 'The array of available offers for this item.' }),
    path: z
      .string()
      .openapi({
        description:
          'The path to the detail page of this item. Can be used to load the item detail page via the /page endpoint.',
      }),
    releaseYear: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The year this item was released' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The scopes for this item' }),
    seasonId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the season this item belongs to, if the item is an episode.',
      }),
    seasonNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of a season, if the item is a season.' }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A truncated description of the item' }),
    showId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the show this item belongs to, if the item is a season or episode.',
      }),
    showTitle: z
      .string()
      .exactOptional()
      .openapi({
        'x-descritpion':
          'The title of the show this item belongs to, if the item is a season or episode.',
      }),
    subtype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subtype of the item. Mainly used to identify different types when `type`\nis `customAsset`\n',
      }),
    tagline: z.string().exactOptional().openapi({ description: 'The tagline of the item' }),
    themes: z
      .array(ThemeSchema)
      .exactOptional()
      .openapi({ description: 'Gets themes associated with the item' }),
    title: z.string().openapi({ description: 'The display title of the item.' }),
    type: z
      .enum([
        'movie',
        'show',
        'season',
        'episode',
        'program',
        'link',
        'trailer',
        'channel',
        'customAsset',
      ])
      .openapi({
        description: 'The type of item',
        'x-enumEmoji': {
          channel: '📺',
          episode: '📺',
          link: '🔗',
          movie: '🎬',
          program: '🎟',
          season: '📺',
          show: '📺',
          trailer: '🖥',
        },
      }),
    watchPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path to watch this item, if the item is a watchable type, e.g. a `movie`, `program` and `episode`.',
      }),
  })
  .openapi({
    discriminator: { propertyName: 'type' },
    required: ['id', 'type', 'path', 'title'],
    'x-emoji': '📘',
  })
  .openapi('ItemSummary')

const PersonSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the person.' }),
    path: z.string().openapi({ description: 'The path to the person' }),
  })
  .openapi({ required: ['name', 'path'], 'x-emoji': '👱' })
  .openapi('Person')

const CreditSchema = PersonSchema.and(
  z
    .object({
      character: z.string().exactOptional().openapi({ description: 'The name of the character.' }),
      role: z
        .enum([
          'actor',
          'associateproducer',
          'coactor',
          'director',
          'executiveproducer',
          'filminglocation',
          'guest',
          'narrator',
          'other',
          'presenter',
          'producer',
          'productmanager',
          'thememusicby',
          'voice',
          'writer',
        ])
        .openapi({ description: 'The type of role the credit performed, e.g. actor.' }),
    })
    .openapi({ required: ['role'] }),
).openapi('Credit')

const ItemCustomMetadataSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the custom metadata.' }),
    value: z.string().openapi({ description: 'The value of the custom metadata.' }),
  })
  .openapi({ description: 'Custom metadata associated with an item.', required: ['name', 'value'] })
  .openapi('ItemCustomMetadata')

const ListDataSchema: z.ZodType<ListDataType> = z
  .lazy(() =>
    z
      .strictObject({ ContinueWatching: ContinueWatchingListDataSchema.exactOptional() })
      .openapi({
        description:
          'Extra data to accompany ItemList content. The (single) key in the object is\nthe list name and the data changes depending on the list\n',
        required: [],
      }),
  )
  .openapi('ListData')

const PaginationAuthSchema = z
  .object({
    scope: z
      .enum(['Catalog', 'Commerce', 'Settings'])
      .openapi({ description: 'The token scope required.' }),
    type: z
      .enum(['UserAccount', 'UserProfile'])
      .openapi({ description: 'The token type required to load the list.' }),
  })
  .openapi({ required: ['type', 'scope'] })
  .openapi('PaginationAuth')

const PaginationOptionsSchema = z
  .strictObject({
    completed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Items filtered by whether they've been fully watched or not.\n\nOnly available on the `/account/profile/watched/list` endpoint currently.\n",
      }),
    itemType: z
      .enum([
        'movie',
        'show',
        'season',
        'episode',
        'program',
        'link',
        'trailer',
        'channel',
        'customAsset',
      ])
      .exactOptional()
      .openapi({
        description: 'Specific item type filter.',
        'x-enumEmoji': {
          channel: '📺',
          episode: '📺',
          link: '🔗',
          movie: '🎬',
          program: '🎟',
          season: '📺',
          show: '📺',
          trailer: '🖥',
        },
      }),
    maxRating: z
      .string()
      .exactOptional()
      .openapi({
        description: "The maximum rating (inclusive) of items returned, e.g. 'AUOFLC-PG'.",
      }),
    order: z
      .enum(['asc', 'desc'])
      .exactOptional()
      .openapi({ description: 'The applied sort order if any.' }),
    orderBy: z
      .enum(['a-z', 'release-year', 'date-added'])
      .exactOptional()
      .openapi({ description: 'The applied sort ordering property if any.' }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of items to return in a list page.' }),
  })
  .openapi({ required: [] })
  .openapi('PaginationOptions')

const PaginationSchema = z
  .strictObject({
    authorization: PaginationAuthSchema.exactOptional(),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to load next page of data, or null if not available' }),
    options: PaginationOptionsSchema.exactOptional(),
    page: z
      .int32()
      .min(0)
      .openapi({
        description:
          'The current page number.\n\nA value of 0 indicates that the fist page has not yet been loaded. This is\nuseful when wanting to return the paging metadata to indicate how to\nload in the first page.\n',
      }),
    previous: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to load previous page of data, or null if not available.' }),
    size: z
      .int32()
      .min(-1)
      .exactOptional()
      .openapi({
        description:
          'The current page size.\n\nA value of -1 indicates that the size has not yet been determined. This may\narise when embedding secure list pagination info in a page which must be cached\nby a CDN. For example a Bookmarks list.\n',
      }),
    total: z
      .int32()
      .min(-1)
      .openapi({
        description:
          'The total number of pages available given the current page size.\n\nA value of -1 indicates that the total has not yet been determined. This may\narise when embedding secure list pagination info in a page which must be cached\nby a CDN. For example a Bookmarks list.\n',
      }),
  })
  .openapi({ required: ['total', 'page'] })
  .openapi('Pagination')

const ItemListSchema = z
  .strictObject({
    customFields: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom fields defined by a curator for a list.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A full description of this list.' }),
    id: z.string().openapi({ description: 'The id of this list' }),
    images: z.record(z.string(), z.url()).exactOptional(),
    itemTypes: z
      .array(
        z
          .enum([
            'movie',
            'show',
            'season',
            'episode',
            'program',
            'link',
            'trailer',
            'channel',
            'customAsset',
          ])
          .openapi({
            'x-enumEmoji': {
              channel: '📺',
              episode: '📺',
              link: '🔗',
              movie: '🎬',
              program: '🎟',
              season: '📺',
              show: '📺',
              trailer: '🖥',
            },
          }),
      )
      .exactOptional()
      .openapi({ description: 'The types of items in the list' }),
    items: z.array(ItemSummarySchema).openapi({ description: 'A list of items' }),
    listData: ListDataSchema.exactOptional(),
    paging: PaginationSchema,
    parameter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this list is parameterized, then this contains the parameter of the list in the format `name:value`.\nFor example the Movies Genre list will take a parameter `genre` with a given value. e.g. `genre:action` or `genre:drama`.',
      }),
    path: z.string().openapi({ description: 'The path of this list' }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of this list.' }),
    size: z.int32().openapi({ description: 'The total size of the list' }),
    tagline: z.string().exactOptional().openapi({ description: 'The tagline of the item.' }),
    themes: z.array(ThemeSchema).exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'The title of this list' }),
  })
  .openapi({
    description: 'A pageable list of items.',
    required: ['id', 'size', 'items', 'paging', 'path'],
    'x-emoji': '📚',
  })
  .openapi('ItemList')

type ItemDetailType = z.infer<typeof ItemSummarySchema> & {
  copyright?: string
  credits?: z.infer<typeof CreditSchema>[]
  customMetadata?: z.infer<typeof ItemCustomMetadataSchema>[]
  description?: string
  distributor?: string
  episodes?: z.infer<typeof ItemListSchema>
  eventDate?: string
  genrePaths?: string[]
  location?: string
  season?: ItemDetailType
  seasons?: z.infer<typeof ItemListSchema>
  show?: ItemDetailType
  totalUserRatings?: number
  trailers?: z.infer<typeof ItemSummarySchema>[]
  venue?: string
}

const ContinueWatchingListDataExpansionSchema = z
  .strictObject({
    episode: ItemSummarySchema.exactOptional(),
    season: ItemSummarySchema.exactOptional(),
    show: ItemSummarySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinueWatchingListDataExpansion')

const ContinueWatchingListDataSchema = z
  .strictObject({
    itemInclusions: z
      .record(z.string(), ContinueWatchingListDataExpansionSchema)
      .exactOptional()
      .openapi({
        description:
          'Object where keys are itemIds for the items in the list and values are objects\ncontaining additional items (either episode/season/show) that were requested\nin the "include" query option.\n\nFor example if you request the ContinueWatching list with "season" items in\nthe list, you can specify `include=episode` and then the specific next episode\nwill be returned in this object.\n',
      }),
  })
  .openapi({ description: 'List data for ContinueWatching List', required: [] })
  .openapi('ContinueWatchingListData')

type ListDataType = { ContinueWatching?: z.infer<typeof ContinueWatchingListDataSchema> }

const NavContentSchema = z
  .object({
    imageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The image type to target when rendering items of the list.\n\ne.g wallpaper, poster, hero3x1, logo.\n',
      }),
    list: ItemListSchema.exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the embedded navigation content.' }),
  })
  .openapi({ required: [] })
  .openapi('NavContent')

type NavEntryType = {
  children?: NavEntryType[]
  content?: z.infer<typeof NavContentSchema>
  customFields?: { [key: string]: unknown }
  depth: number
  featured?: boolean
  icon?: string
  label?: string
  path?: string
}

const ItemPurchaseSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The identifier of the purchased item.' }),
    ownership: z
      .enum(['Subscription', 'Free', 'Rent', 'Own', 'None'])
      .openapi({ description: 'The ownership of the purchased item.' }),
    resolution: z
      .enum(['SD', 'HD-720', 'HD-1080', 'HD-4K', 'External', 'Unknown'])
      .openapi({ description: 'The resolution of the purchased item.' }),
    title: z.string().openapi({ description: 'The title of the purchased item.' }),
    type: z
      .enum([
        'movie',
        'show',
        'season',
        'episode',
        'program',
        'link',
        'trailer',
        'channel',
        'customAsset',
      ])
      .openapi({
        description: 'The type of item purchased.',
        'x-enumEmoji': {
          channel: '📺',
          episode: '📺',
          link: '🔗',
          movie: '🎬',
          program: '🎟',
          season: '📺',
          show: '📺',
          trailer: '🖥',
        },
      }),
  })
  .openapi({ required: ['id', 'ownership', 'resolution', 'title', 'type'], 'x-emoji': '💰' })
  .openapi('ItemPurchase')

const PlanPurchaseSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the purchased plan.' }),
    price: z.float32().exactOptional().openapi({ description: 'The price of the purchased plan.' }),
    subscriptionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the subscription membership to the plan.' }),
    title: z.string().openapi({ description: 'The title of the purchased plan.' }),
    type: z.enum(['Free', 'Subscription']).openapi({ description: 'The type of plan purchased.' }),
  })
  .openapi({ required: ['title', 'type'], 'x-emoji': '💰' })
  .openapi('PlanPurchase')

type PurchaseType = {
  authorizationDate?: string
  creationDate: string
  currency: string
  id: string
  item?: z.infer<typeof ItemPurchaseSchema>
  paymentMethodId?: string
  plan?: z.infer<typeof PlanPurchaseSchema>
  total: number
}

const AccessTokenSchema = z
  .strictObject({
    accountCreated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "When a `UserAccount` token is issued during a single-sign-on flow\na user may have been automatically registered if they didn't\nhave an account already. If this occurs then `accountCreated`\nwill be `true`.\n",
      }),
    expirationDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The timestamp this token expires.' }),
    refreshable: z
      .boolean()
      .openapi({ description: 'True if this token can be refreshed, false if not.' }),
    type: z.enum(['UserAccount', 'UserProfile']).openapi({ description: 'The type of the token.' }),
    value: z.string().openapi({ description: 'The token value used for authenticated requests.' }),
  })
  .openapi({ required: ['value', 'refreshable', 'expirationDate', 'type'], 'x-emoji': '🔑' })
  .openapi('AccessToken')

const AddressSchema = z
  .strictObject({
    addressLine1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first line of the street address.' }),
    addressLine2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The second line of the street address.' }),
    city: z.string().exactOptional().openapi({ description: 'The city name.' }),
    country: z.string().exactOptional().openapi({ description: 'The country name or code.' }),
    postcode: z.string().exactOptional().openapi({ description: 'The postal or zip code.' }),
    state: z.string().exactOptional().openapi({ description: 'The state name or abbreviation.' }),
  })
  .openapi({ 'x-emoji': '🏠', required: [] })
  .openapi('Address')

const EntitlementSchema = OfferRightsSchema.and(
  z
    .object({
      activationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The date of activation. If no date is defined the entitlement has not be activated.',
        }),
      classification: ClassificationSummarySchema.exactOptional(),
      creationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The date the entitlement was created.' }),
      expirationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The date the entitlement expires.' }),
      itemId: z
        .string()
        .exactOptional()
        .openapi({ description: 'The id of the item this entitlement is for.' }),
      itemType: z
        .enum([
          'movie',
          'show',
          'season',
          'episode',
          'program',
          'link',
          'trailer',
          'channel',
          'customAsset',
        ])
        .exactOptional()
        .openapi({
          description: 'The type of item this entitlement is for.',
          'x-enumEmoji': {
            channel: '📺',
            episode: '📺',
            link: '🔗',
            movie: '🎬',
            program: '🎟',
            season: '📺',
            show: '📺',
            trailer: '🖥',
          },
        }),
      mediaDuration: z
        .int32()
        .exactOptional()
        .openapi({ description: 'The duration of the entitled media.' }),
      planId: z
        .string()
        .exactOptional()
        .openapi({ description: 'The id of the plan this entitlement is for.' }),
      playCount: z
        .int32()
        .exactOptional()
        .openapi({ description: 'How many times the media has been played.' }),
      remainingDownloads: z
        .int32()
        .exactOptional()
        .openapi({ description: 'How many more downloads of this media are available.' }),
    })
    .openapi({ 'x-emoji': '🎟', required: [] }),
).openapi('Entitlement')

const ProfileSummarySchema = z
  .object({
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hex color value assigned to the profile.' }),
    heroAutoplay: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Gets the Hero row clip auto playback enabled' }),
    heroWithAudio: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Gets the Hero row clip auto playback audio enabled' }),
    id: z.string().openapi({ description: 'The id of the profile.' }),
    isActive: z
      .boolean()
      .openapi({
        description:
          'Whether the profile is active or not.\n\n**DEPRECATED** - Always true. Inactive profiles are no longer returned.\n',
        'x-deprecated': 'Inactive profiles are no longer returned',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the preferred language for the profile.\nMust be a valid ISO language code e.g. "en-US" and must match the code of\none of the languages specified in the app config.\nSee https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n',
      }),
    marketingEnabled: z
      .boolean()
      .openapi({
        description:
          'Whether the profile has opted in or out of marketing material.\n\n**DEPRECATED** - Marketing material is no longer tied to profiles, only account. See `Account.marketingEnabled`.\n',
        'x-deprecated': 'Has moved to Account.marketingEnabled',
      }),
    maxRatingContentFilter: ClassificationSummarySchema.exactOptional(),
    minRatingPlaybackGuard: ClassificationSummarySchema.exactOptional(),
    name: z.string().openapi({ description: 'The unique name of the profile.' }),
    pinEnabled: z
      .boolean()
      .openapi({ description: 'Whether a pin is required to enter the profile.' }),
    purchaseEnabled: z
      .boolean()
      .openapi({
        description: 'Whether the profile can make purchases with the account payment options.',
      }),
    segments: z
      .array(z.string())
      .openapi({ description: 'The segments a profile has been placed under' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'isActive',
      'pinEnabled',
      'purchaseEnabled',
      'marketingEnabled',
      'segments',
    ],
    'x-emoji': '👥',
  })
  .openapi('ProfileSummary')

const SubscriptionSchema = z
  .strictObject({
    code: z.string().openapi({ description: 'The unique subscription code.' }),
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The end date of a subscription.\n\nAfter this date the subscription will become expired. If this is a recurring\nsubscription which has not been cancelled then the account holder will be\nautomatically charged and a new subscription will be activated.\n\nSome subscriptions may not have an end date, in which case this\nproperty will not exist.\n',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the subscription.' }),
    isTrialPeriod: z
      .boolean()
      .openapi({ description: 'True if a subscription is in its trial period, false if not.' }),
    planId: z.string().openapi({ description: 'The plan a subscription belongs to.' }),
    startDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The start date of a subscription.' }),
    status: z
      .enum(['Active', 'Cancelled', 'Lapsed', 'Expired', 'None'])
      .openapi({ description: 'The status of a subscription.' }),
  })
  .openapi({
    required: ['code', 'startDate', 'isTrialPeriod', 'planId', 'status'],
    'x-emoji': '💳',
  })
  .openapi('Subscription')

const AccountSchema = z
  .looseObject({
    address: AddressSchema.exactOptional(),
    defaultPaymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the payment instrument to use by default for account transactions.\n\n **DEPRECATED** The property `defaultPaymentMethodId` is now preferred.\n',
        'x-deprecated': 'Replaced with defaultPaymentMethodId',
      }),
    defaultPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the payment method to use by default for account transactions.',
      }),
    emailVerified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the email address has been verified.\n\nUsers who receive an emailed verification url click the link to verify their email address.\n',
      }),
    entitlements: z
      .array(EntitlementSchema)
      .exactOptional()
      .openapi({ description: 'The list of entitlements to playback specific items.' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the account holder.' }),
    id: z.string().openapi({ description: 'The id of the account.' }),
    isFirstTimeSubscriber: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the account has the very first subscription.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the account holder.' }),
    marketingEnabled: z
      .boolean()
      .openapi({ description: 'Whether the account has opted in or out of marketing material.' }),
    minRatingPlaybackGuard: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The classification rating defining the minimum rating level a user should be\nforced to enter the account pin code for playback. Anything at this rating\nlevel or above will require the pin for playback.\n\ne.g. AUOFLC-MA15+\n\nIf you want to disable this guard pass an empty string or `null`.\n',
      }),
    pinEnabled: z
      .boolean()
      .openapi({ description: 'When an account level pin is defined this will be true.' }),
    primaryProfileId: z.string().openapi({ description: 'The id of the primary profile.' }),
    profiles: z
      .array(ProfileSummarySchema)
      .openapi({ description: 'The list of profiles under this account.' }),
    segments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The segments an account has been placed under' }),
    subscriptionCode: z
      .string()
      .openapi({
        description:
          'The active subscription code for an account.\n\nThe value of this should be passed to any endpoints accepting a `sub` query parameter.\n',
      }),
    subscriptions: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'The list of subscriptions, if any, the account has signed up to.' }),
    trackingEnabled: z
      .boolean()
      .openapi({
        description: 'Whether usage tracking is associated with the account or anonymous.',
      }),
    usedFreeTrial: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the account has used up their free trial period of a plan.',
      }),
  })
  .openapi({
    required: [
      'id',
      'email',
      'trackingEnabled',
      'pinEnabled',
      'marketingEnabled',
      'primaryProfileId',
      'subscriptionCode',
      'profiles',
    ],
    'x-emoji': '👤',
  })
  .openapi('Account')

const DeviceRegistrationWindowSchema = z
  .strictObject({
    endDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The end date of the current period.\n\nThis is based on the value of `startDate` plus the number of days defined by  `periodDays`.\n',
      }),
    limit: z
      .int32()
      .openapi({ description: 'The maximum de/registrations that can be made in a period.' }),
    periodDays: z
      .int32()
      .openapi({ description: 'The number of days a de/registration period runs for.' }),
    remaining: z
      .int32()
      .openapi({
        description: 'The remaining de/registrations that can be made in the current period.',
      }),
    startDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The start date of the current period.\n\nThis is based on the earliest device de/registrations in the past N days, where\nN is defined by `periodDays`.\n\nIf no device has been de/registered then start date will be from the current date.\n',
      }),
  })
  .openapi({ required: ['periodDays', 'limit', 'remaining', 'startDate', 'endDate'] })
  .openapi('DeviceRegistrationWindow')

const DeviceSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this device e.g. serial number.' }),
    name: z.string().openapi({ description: 'The human recognisable name for this device.' }),
    registrationDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date this device was registered.' }),
    type: z.string().openapi({ description: 'The device type e.g. web_browser.' }),
  })
  .openapi({ required: ['id', 'name', 'registrationDate', 'type'], 'x-emoji': '📱' })
  .openapi('Device')

const AccountDevicesSchema = z
  .strictObject({
    deregistrationWindow: DeviceRegistrationWindowSchema.exactOptional(),
    devices: z
      .array(DeviceSchema)
      .openapi({ description: 'The array of registered playack devices.' }),
    maxRegistered: z
      .int32()
      .openapi({
        description:
          'The maximum number of playback devices that can be registered\nunder an account at a single time.\n\nIf there is no maximum defined this value will be `-1`.\n',
      }),
    registrationWindow: DeviceRegistrationWindowSchema.exactOptional(),
  })
  .openapi({ required: ['devices', 'maxRegistered'] })
  .openapi('AccountDevices')

const AccountNonceSchema = z
  .strictObject({ value: z.string().openapi({ description: 'The nonce value.' }) })
  .openapi({ required: ['value'] })
  .openapi('AccountNonce')

const AccountTokenByCodeRequestSchema = z
  .strictObject({
    code: z.string().openapi({ description: 'The generated device authorization code.' }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the device e.g. serial number.' }),
    scopes: z
      .array(z.enum(['Catalog', 'Commerce', 'Settings', 'Playback']))
      .openapi({ description: 'The scope(s) of the token(s) required.' }),
  })
  .openapi({ required: ['id', 'code', 'scopes'] })
  .openapi('AccountTokenByCodeRequest')

const AccountTokenRequestSchema = z
  .strictObject({
    cookieType: z
      .enum(['Session', 'Persistent'])
      .exactOptional()
      .openapi({
        description:
          "If you specify a cookie type then a content filter cookie will be returned\nalong with the token(s). This is only intended for web based clients which\nneed to pass the cookies to a server to render a page based on the user's\ncontent filters e.g subscription code.\n\nIf type `Session` the cookie will be session based.\nIf type `Persistent` the cookie will have a medium term lifespan.\nIf undefined no cookies will be set.\n",
      }),
    email: z.string().openapi({ description: 'The email associated with the account.' }),
    password: z.string().openapi({ description: 'The password associated with the account.' }),
    scopes: z
      .array(z.enum(['Catalog', 'Commerce', 'Settings', 'Playback']))
      .openapi({
        description:
          'The scope(s) of the tokens required.\nFor each scope listed an Account and Profile token of that scope will be returned\n',
      }),
  })
  .openapi({
    example: { email: '', password: '', scopes: ['Catalog'] },
    required: ['email', 'password', 'scopes'],
  })
  .openapi('AccountTokenRequest')

const AccountUpdateRequestSchema = z
  .strictObject({
    address: AddressSchema.exactOptional(),
    defaultPaymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the payment instrument to use by default for account transactions.\n\n**DEPRECATED** The property `defaultPaymentMethodId` is now preferred.\n',
        'x-deprecated': 'Replaced with defaultPaymentMethodId',
      }),
    defaultPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the payment method to use by default for account transactions.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the account holder.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the account holder.' }),
    minRatingPlaybackGuard: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The classification rating defining the minimum rating level a user should be\nforced to enter the account pin code for playback. Anything at this rating\nlevel or above will require the pin for playback.\n\ne.g. AUOFLC-MA15+\n\nIf you want to disable this guard pass an empty string or `null`.\n',
      }),
    segments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The segments an account should be placed under' }),
    trackingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether usage tracking is associated with an account or anonymous.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountUpdateRequest')

const AddPaymentMethodRequestSchema = z
  .strictObject({
    makeDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this payment method should become the account default when \nmaking purchases.\n\nNote that if this is the first payment method of type Card being added to an\naccount then it will become the default whether this property is true or false.\n',
      }),
    token: z
      .string()
      .openapi({
        description:
          'The payment provider token representing a payment method, obtained by\nsubmitting payment method details to your third party provider.\n',
      }),
    type: z.literal('Card').openapi({ description: 'The type of payment method.' }),
  })
  .openapi({ required: ['token', 'type'] })
  .openapi('AddPaymentMethodRequest')

const ClassificationSchema = ClassificationSummarySchema.and(
  z
    .object({
      advisoryText: z.string().exactOptional().openapi({ description: 'Parental advisort text.' }),
      images: z.record(z.string(), z.url()),
      level: z
        .int32()
        .openapi({
          description:
            'The level of this classification when compared with its siblings.\nA higher level means a greater restriction.\nEach classification in a system should have a unique level.\n',
        }),
      system: z.string().openapi({ description: 'The parent system code of the classification.' }),
    })
    .openapi({ required: ['level', 'system', 'images'] }),
).openapi('Classification')

const AppConfigDisplaySchema = z
  .strictObject({
    themes: z
      .array(ThemeSchema)
      .openapi({ description: 'An array of globally configured themes.' }),
  })
  .openapi({ required: ['themes'] })
  .openapi('AppConfigDisplay')

const AppConfigGeneralSchema = z
  .strictObject({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code to target.' }),
    customFields: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom configuration fields.' }),
    defaultTimeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default time zone of the site. e.g. "Etc/GMT"' }),
    facebookAppId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Facebook application id associated with an environment.' }),
    gaToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Google Analytics token to track applicaton user events.' }),
    itemImageTypes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'A map of default item image types where the key is the item types.',
      }),
    mandatorySignIn: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to require sign in for customers to access content.' }),
    maxUserRating: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum value allowed for user ratings.' }),
    stripeKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The public Stripe key to use for payment transactions.' }),
    websiteUrl: z.url().exactOptional().openapi({ description: 'The url of the primary website.' }),
  })
  .openapi({ required: [] })
  .openapi('AppConfigGeneral')

const LanguageSchema = z
  .strictObject({
    code: z
      .string()
      .openapi({
        description:
          'The ISO language code of the language e.g. "en-US".\nSee https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n',
      }),
    label: z.string().openapi({ description: 'Display label for the language.' }),
    title: z.string().openapi({ description: 'Display title for the language.' }),
  })
  .openapi({ required: ['code', 'label', 'title'], 'x-emoji': '🌎' })
  .openapi('Language')

const AppConfigI18nSchema = z
  .strictObject({
    languages: z.array(LanguageSchema).openapi({ description: 'An array of available languages.' }),
  })
  .openapi({ required: ['languages'] })
  .openapi('AppConfigI18n')

const AppConfigLinearSchema = z
  .strictObject({
    scheduleCacheMaxAgeMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum minutes of schedule cache time.' }),
    viewingWindowDaysAfter: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of available upcoming day schedules.' }),
    viewingWindowDaysBefore: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of available day schedules in the past.' }),
  })
  .openapi({ required: [] })
  .openapi('AppConfigLinear')

const NavEntrySchema: z.ZodType<NavEntryType> = z
  .lazy(() =>
    z
      .strictObject({
        children: z
          .array(NavEntrySchema)
          .exactOptional()
          .openapi({ description: 'Child nav entries.' }),
        content: NavContentSchema.exactOptional(),
        customFields: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'A map of custom fields defined by a curator for a nav entry.' }),
        depth: z
          .int32()
          .min(0)
          .openapi({ description: 'The depth of the NavEntry (top level is 0)' }),
        featured: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'True if this is a featured menu item.\n\nFeatured menu items may have a more prominent presentation than others in the navigation.\n',
          }),
        icon: z.string().exactOptional().openapi({ description: 'The icon for this nav entry.' }),
        label: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text label for this nav entry.' }),
        path: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The path this nav entry links to.\nMay be undefined if the nav entry is not clickable e.g. a nav heading.\nIf the value begins with `http` then it's an external url.\n",
          }),
      })
      .openapi({ required: ['depth'] }),
  )
  .openapi('NavEntry')

const NavigationSchema = z
  .strictObject({
    account: NavEntrySchema.exactOptional(),
    copyright: z.string().exactOptional().openapi({ description: 'Copyright information.' }),
    customFields: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom fields defined by a curator for navigation.' }),
    footer: NavEntrySchema.exactOptional(),
    header: z.array(NavEntrySchema).openapi({ description: 'The header navigation.' }),
    mobile: NavEntrySchema.exactOptional(),
  })
  .openapi({ required: ['header'] })
  .openapi('Navigation')

const AppConfigPlaybackSchema = z
  .strictObject({
    chainPlayCountdown: z
      .int32()
      .openapi({
        description:
          'The number of seconds before autoplay of next video.\n\nIf set to 0 there will be no autoplay.\n',
      }),
    chainPlaySqueezeback: z
      .int32()
      .openapi({
        description:
          'The number of seconds before the end of playback when the current video\nshould be minimized and user options are presented within the video player.\n\nIf set to 0 there will be no squeezeback.\n',
      }),
    chainPlayTimeout: z
      .int32()
      .openapi({
        description:
          'The number of minutes of user inactivity before autoplay is paused.\n\nIf set to 0 there will be no autoplay timeout.\n',
      }),
    heartbeatFrequency: z
      .int32()
      .openapi({ description: 'How often a heartbeat should be renewed during playback.' }),
    viewEventPoints: z
      .array(z.number().min(0).max(1))
      .openapi({
        description:
          'An array of percentage points in which to fire off plabyack view events.\nFor example a value of 0.5 would indicate that an event should be\nfired when the user is half way through the video.\nOften known as quartiles when four equaly spread event points.\n',
      }),
  })
  .openapi({
    required: [
      'heartbeatFrequency',
      'viewEventPoints',
      'chainPlaySqueezeback',
      'chainPlayTimeout',
      'chainPlayCountdown',
    ],
  })
  .openapi('AppConfigPlayback')

const PageSummarySchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the page.' }),
    isStatic: z
      .boolean()
      .openapi({
        description:
          "True if this page is static and doesn't have any dynamic content to load.\n\nStatic pages don't need to go back to the page endpoint to load page content\ninstead the page summary loaded with the sitemap should be enough to determine\nthe page template type and render based on this.\n",
      }),
    isSystemPage: z
      .boolean()
      .openapi({
        description:
          "True if this page is a system page type.\n\n**DEPRECATED** This property doesn't have any real use in client applications\nanymore so shouldn't be used. It especially shouldn't be used to determine if\na page is static or not. Use the `isStatic` property instead.\n",
        'x-deprecated': 'Replaced with isStatic',
      }),
    key: z.string().exactOptional().openapi({ description: 'Key used to lookup a known page.' }),
    path: z.string().openapi({ description: 'Unique path for the page.' }),
    template: z
      .string()
      .openapi({ description: 'Identifier for of the page template to render this page.' }),
    title: z.string().openapi({ description: 'Title of the page.' }),
  })
  .openapi({
    required: ['id', 'path', 'title', 'template', 'isStatic', 'isSystemPage'],
    'x-emoji': '📃',
  })
  .openapi('PageSummary')

const PlanSchema = z
  .strictObject({
    alias: z.string().openapi({ description: 'An alias for a plan.' }),
    benefits: z
      .array(z.string())
      .openapi({ description: 'The list of benefits to display for a plan.' }),
    billingPeriodFrequency: z
      .int32()
      .openapi({
        description:
          'Given the `billingPeriodType` this is how frequently it will run. e.g. every 2 weeks.',
      }),
    billingPeriodType: z
      .enum(['day', 'week', 'month', 'year', 'none'])
      .openapi({ description: 'The type of billing period used.' }),
    currency: z.string().openapi({ description: 'The currency a plan is offered in.' }),
    customFields: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom fields defined by a curator for a plan.' }),
    hasTrialPeriod: z
      .boolean()
      .openapi({ description: 'True if a plan has a trial period, false if not.' }),
    id: z.string().openapi({ description: 'The identifier of a plan.' }),
    isActive: z
      .boolean()
      .openapi({ description: 'True if a plan is active, false if its retired.' }),
    isFeatured: z
      .boolean()
      .openapi({ description: 'True if a plan should be highlighted as featured, false if not.' }),
    isPrivate: z
      .boolean()
      .openapi({
        description:
          'True if a plan should not be presented in the primary plan options, false if not.',
      }),
    price: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The price of a plan. If a free plan then undefined.' }),
    revenueType: z
      .enum(['TVOD', 'SVOD'])
      .openapi({ description: 'The revenue type a plan targets.' }),
    subscriptionCode: z.string().openapi({ description: 'The subscription code a plan targets.' }),
    tagline: z.string().openapi({ description: 'The short tagline for a plan.' }),
    termsAndConditions: z.string().openapi({ description: 'The terms and conditions for a plan.' }),
    title: z.string().openapi({ description: 'The title of a plan.' }),
    trialPeriodDays: z
      .int32()
      .openapi({
        description:
          'How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.',
      }),
    type: z.enum(['Free', 'Subscription']).openapi({ description: 'The type of plan.' }),
  })
  .openapi({
    required: [
      'id',
      'title',
      'tagline',
      'type',
      'isFeatured',
      'isActive',
      'isPrivate',
      'revenueType',
      'subscriptionCode',
      'alias',
      'benefits',
      'billingPeriodType',
      'billingPeriodFrequency',
      'hasTrialPeriod',
      'trialPeriodDays',
      'termsAndConditions',
      'currency',
    ],
    'x-emoji': '💳',
  })
  .openapi('Plan')

const AppConfigSubscriptionSchema = z
  .strictObject({
    plans: z
      .array(PlanSchema)
      .exactOptional()
      .openapi({ description: 'The available public plans a user can subscribe to.' }),
  })
  .openapi({ required: [] })
  .openapi('AppConfigSubscription')

const AppConfigSchema = z
  .strictObject({
    classification: z
      .record(z.string(), ClassificationSchema)
      .exactOptional()
      .openapi({ description: 'The map of classification ratings.' }),
    display: AppConfigDisplaySchema.exactOptional(),
    general: AppConfigGeneralSchema.exactOptional(),
    i18n: AppConfigI18nSchema.exactOptional(),
    linear: AppConfigLinearSchema.exactOptional(),
    navigation: NavigationSchema.exactOptional(),
    playback: AppConfigPlaybackSchema.exactOptional(),
    sitemap: z.array(PageSummarySchema).exactOptional(),
    subscription: AppConfigSubscriptionSchema.exactOptional(),
  })
  .openapi({ 'x-emoji': '⚙️', required: [] })
  .openapi('AppConfig')

const BookmarkSchema = z
  .strictObject({
    creationDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date the bookmark was created.' }),
    itemId: z.string().openapi({ description: 'The id of the item bookmarked.' }),
  })
  .openapi({ required: ['itemId', 'creationDate'], 'x-emoji': '🔖' })
  .openapi('Bookmark')

const BtPlanListItemSchema = z
  .strictObject({
    amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The price of a plan. If a free plan then undefined.' }),
    ctaText: z.string().openapi({ description: 'The textual description.' }),
    currency: z.string().openapi({ description: 'The currency a plan is offered in.' }),
    description: z.string().openapi({ description: 'The textual description.' }),
    ees07PlanDescription: z.string().exactOptional(),
    ees07PlanTitle: z.string().exactOptional(),
    ees07Title: z.string().exactOptional(),
    headerText: z.string().openapi({ description: 'The textual description.' }),
    heroText: z.string().openapi({ description: 'The textual description.' }),
    id: z.string().openapi({ description: 'The identifier of a plan.' }),
    interval: z
      .enum(['day', 'week', 'month', 'year', 'none'])
      .exactOptional()
      .openapi({ description: 'The type of billing period used.' }),
    intervalCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Given the `interval` this is how frequently it will run. e.g. every 2 weeks.',
      }),
    longText: z.string().openapi({ description: 'The textual description.' }),
    nickname: z.string().openapi({ description: 'The title of a plan.' }),
    noThanksText: z.string().exactOptional(),
    product: z.string().openapi({ description: 'The product of a plan.' }),
    switchingText: z.string().exactOptional(),
    termsAndConditionsItunes: z.string().exactOptional(),
    termsAndConditionsStripe: z.string().exactOptional(),
    trialPeriodDays: z
      .int32()
      .openapi({
        description:
          'How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.',
      }),
  })
  .openapi({
    required: [
      'id',
      'nickname',
      'product',
      'currency',
      'trialPeriodDays',
      'description',
      'heroText',
      'ctaText',
      'headerText',
      'longText',
    ],
    'x-emoji': '💳',
  })
  .openapi('BtPlanListItem')

const BtPlansSchema = z
  .strictObject({
    plans: z.array(BtPlanListItemSchema).openapi({ description: 'The list of available plans.' }),
  })
  .openapi({ required: ['plans'] })
  .openapi('BtPlans')

const BtValidateTokenResponseSchema = z.object({}).openapi('BtValidateTokenResponse')

const ChangePasswordRequestSchema = z
  .strictObject({
    password: z.string().openapi({ description: 'The new password for the account.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['password', 'profileToken'] })
  .openapi('ChangePasswordRequest')

const ChangePinRequestSchema = z
  .strictObject({ pin: z.string().openapi({ description: 'The new pin to set.' }) })
  .openapi({ required: ['pin'] })
  .openapi('ChangePinRequest')

const DeviceAuthorizationCodeSchema = z
  .strictObject({
    code: z.string().openapi({ description: 'The generated device authorization code.' }),
  })
  .openapi({ required: ['code'] })
  .openapi('DeviceAuthorizationCode')

const DeviceRegistrationRequestSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this device e.g. serial number.' }),
    name: z.string().openapi({ description: 'A human recognisable name for this device.' }),
    type: z.string().openapi({ description: 'The device type e.g. web_browser.' }),
  })
  .openapi({ required: ['id', 'name', 'type'] })
  .openapi('DeviceRegistrationRequest')

const EeBtEligibilitySchema = z
  .strictObject({
    eligible: z.boolean().openapi({ description: 'Whether or not user is eligible' }),
    plan: z.string().exactOptional().openapi({ description: 'The identifier of a plan.' }),
    source: z.string().exactOptional().openapi({ description: 'Stripe etc.' }),
  })
  .openapi({ required: ['eligible'] })
  .openapi('EeBtEligibility')

const EeCreatePinRequestSchema = z
  .strictObject({
    accessToken: z
      .string()
      .openapi({ description: 'EE API authorization Token received from GET /ee/token/create.' }),
    msisdn: z.string().openapi({ description: 'The msisdn.' }),
    trackingHeader: z.string().exactOptional().openapi({ description: 'trackingHeader' }),
  })
  .openapi({
    example: {
      accessToken: 'wxg0fG4GQjBQVjAT0AhKxSkrxFbs',
      msisdn: '447931234567',
      trackingHeader: '1234E682-2C74-46A4-B8B3-5BBD3B3E165D',
    },
    required: ['msisdn', 'accessToken'],
  })
  .openapi('EeCreatePinRequest')

const EeCreatePinResponseSchema = z
  .strictObject({
    pinReference: z.string().openapi({ description: 'The pinReference.' }),
    trackingHeader: z.string().openapi({ description: 'trackingHeader' }),
  })
  .openapi({ required: ['pinReference', 'trackingHeader'] })
  .openapi('EeCreatePinResponse')

const EeCreateTokenResponseSchema = z
  .strictObject({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The authentication token for later use to call EE endpoints.' }),
    expiresIn: z.number().exactOptional(),
    tokenType: z.string().exactOptional(),
  })
  .openapi({ required: ['token'] })
  .openapi('EeCreateTokenResponse')

const EeIdentityRequestSchema = z
  .strictObject({
    accessToken: z
      .string()
      .openapi({ description: 'EE API authorization Token received from GET /ee/token/create.' }),
    sessionId: z
      .string()
      .openapi({ description: 'The sessionId returned in the ee/session response.' }),
  })
  .openapi({
    example: {
      accessToken: 'wxg0fG4GQjBQVjAT0AhKxSkrxFbs',
      sessionId: '7897E682-2C74-46A4-B8B3-5BBD3B3E165D',
    },
    required: ['sessionId', 'accessToken'],
  })
  .openapi('EeIdentityRequest')

const EeIdentityResponseSchema = z
  .strictObject({
    brand: z.string().exactOptional().openapi({ description: 'The operator brand.' }),
    brandCode: z.string().exactOptional().openapi({ description: 'The brand code.' }),
    msisdn: z.string().openapi({ description: 'The msisdn.' }),
    trackingHeader: z.string().openapi({ description: 'trackingHeader' }),
  })
  .openapi({ required: ['msisdn', 'trackingHeader'] })
  .openapi('EeIdentityResponse')

const EeOfferItemSchema = z
  .strictObject({ name: z.string().openapi({ description: 'The identifier of an offer.' }) })
  .openapi({ required: ['name'], 'x-emoji': '💳' })
  .openapi('EeOfferItem')

const EeOffersRequestSchema = z
  .strictObject({
    accessToken: z
      .string()
      .openapi({ description: 'EE API authorization Token received from GET /ee/token/create.' }),
    msisdn: z.string().openapi({ description: 'The msisdn.' }),
    trackingHeader: z.string().exactOptional().openapi({ description: 'trackingHeader.' }),
  })
  .openapi({
    example: {
      accessToken: 'wxg0fG4GQjBQVjAT0AhKxSkrxFbs',
      msisdn: '447931234567',
      trackingHeader: '1234E682-2C74-46A4-B8B3-5BBD3B3E165D',
    },
    required: ['msisdn', 'accessToken'],
  })
  .openapi('EeOffersRequest')

const EeOffersResponseSchema = z
  .strictObject({
    eligibleOffers: z
      .array(EeOfferItemSchema)
      .openapi({ description: 'The list of eligible offers.' }),
  })
  .openapi({ required: ['eligibleOffers'] })
  .openapi('EeOffersResponse')

const EePlanListItemSchema = z
  .strictObject({
    amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The price of a plan. If a free plan then undefined.' }),
    ctaText: z.string().openapi({ description: 'The textual description.' }),
    currency: z.string().openapi({ description: 'The currency a plan is offered in.' }),
    description: z.string().openapi({ description: 'The textual description.' }),
    headerText: z.string().openapi({ description: 'The textual description.' }),
    heroText: z.string().openapi({ description: 'The textual description.' }),
    id: z.string().openapi({ description: 'The identifier of a plan.' }),
    interval: z
      .enum(['day', 'week', 'month', 'year', 'none'])
      .exactOptional()
      .openapi({ description: 'The type of billing period used.' }),
    intervalCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Given the `interval` this is how frequently it will run. e.g. every 2 weeks.',
      }),
    longText: z.string().openapi({ description: 'The textual description.' }),
    nickname: z.string().openapi({ description: 'The title of a plan.' }),
    product: z.string().openapi({ description: 'The product of a plan.' }),
    trialPeriodDays: z
      .int32()
      .openapi({
        description:
          'How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.',
      }),
  })
  .openapi({
    required: [
      'id',
      'nickname',
      'product',
      'currency',
      'trialPeriodDays',
      'description',
      'heroText',
      'ctaText',
      'headerText',
      'longText',
    ],
    'x-emoji': '💳',
  })
  .openapi('EePlanListItem')

const EePlansSchema = z
  .strictObject({
    plans: z.array(EePlanListItemSchema).openapi({ description: 'The list of available plans.' }),
  })
  .openapi({ required: ['plans'] })
  .openapi('EePlans')

const EeSessionIdRequestSchema = z
  .strictObject({
    accessToken: z
      .string()
      .openapi({ description: 'EE API authorization Token received from GET /ee/token/create.' }),
    clientIP: z.string().openapi({ description: 'The IP address of the requesting device.' }),
  })
  .openapi({
    example: { accessToken: 'xxxDDxBoHnNG1qYWutsRqE0dHxxx', clientIP: '123.456.789' },
    required: ['clientIP', 'accessToken'],
  })
  .openapi('EeSessionIdRequest')

const EeSessionIdResponseSchema = z
  .strictObject({ sessionId: z.string().openapi({ description: 'The assigned SessionId.' }) })
  .openapi({ required: ['sessionId'] })
  .openapi('EeSessionIdResponse')

const EeValidatePinRequestSchema = z
  .strictObject({
    accessToken: z
      .string()
      .openapi({ description: 'EE API authorization Token received from GET /ee/token/create.' }),
    pin: z.string().openapi({ description: 'The pin entered by a user. 6 digits' }),
    pinReference: z.string().openapi({ description: 'The pinReference.' }),
    trackingHeader: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Tracking header to be able to search logs for a specific user requests. If not provided it will be generated. FE should store it for later user.',
      }),
  })
  .openapi({
    example: {
      accessToken: 'wxg0fG4GQjBQVjAT0AhKxSkrxFbs',
      pin: '123456',
      pinReference: '9897222307534',
      trackingHeader: '1234E682-2C74-46A4-B8B3-5BBD3B3E165D',
    },
    required: ['pinReference', 'pin', 'accessToken'],
  })
  .openapi('EeValidatePinRequest')

const EeValidatePinResponseSchema = z
  .strictObject({
    pinValid: z.string().exactOptional().openapi({ description: 'The validation status.' }),
    trackingHeader: z.string().openapi({ description: 'trackingHeader' }),
  })
  .openapi({ required: ['validationStatus', 'trackingHeader'] })
  .openapi('EeValidatePinResponse')

const ItemClipFileSchema = z
  .looseObject({
    channels: z.int32().exactOptional().openapi({ description: 'The number of audio channels.' }),
    deliveryType: z
      .enum(['Stream', 'Progressive', 'Download'])
      .openapi({ description: 'The way in which the media file is delivered.' }),
    drm: z
      .string()
      .openapi({
        description: "The type of drm used to encrypt the media. 'None' if unencrypted.",
      }),
    format: z.string().openapi({ description: 'The format the media was encoded in.' }),
    height: z.int32().openapi({ description: 'The height of the video media.' }),
    language: z.string().openapi({ description: "The language code for the media, e.g. 'en'." }),
    name: z.string().openapi({ description: 'The name of the media file.' }),
    resolution: z
      .enum(['SD', 'HD-720', 'HD-1080', 'HD-4K', 'External', 'Unknown'])
      .openapi({ description: 'The resolution of the video media.' }),
    url: z.url().openapi({ description: 'The url to access the media file.' }),
    width: z.int32().openapi({ description: 'The width of the video media.' }),
  })
  .openapi({
    required: [
      'name',
      'deliveryType',
      'url',
      'drm',
      'format',
      'resolution',
      'width',
      'height',
      'language',
    ],
    'x-emoji': '📀',
  })
  .openapi('ItemClipFile')

const ItemClipFilesSchema = z
  .object({
    clips: z.array(ItemClipFileSchema).openapi({ description: 'Array of item clip file.' }),
    id: z.string().openapi({ description: 'Unique identifier for an Item' }),
  })
  .openapi({ required: ['id', 'clips'] })
  .openapi('ItemClipFiles')

const ItemClipFilesListSchema = z
  .strictObject({ items: z.array(ItemClipFilesSchema).openapi({ description: 'A list of items' }) })
  .openapi({
    description: 'A list of items with its clip files.',
    required: ['items'],
    'x-emoji': '📚',
  })
  .openapi('ItemClipFilesList')

const ItemDetailSchema: z.ZodType<ItemDetailType> = z
  .lazy(() =>
    ItemSummarySchema.and(
      z
        .object({
          copyright: z
            .string()
            .exactOptional()
            .openapi({ description: 'Copyright information about this item' }),
          credits: z
            .array(CreditSchema)
            .exactOptional()
            .openapi({ description: 'A list of credits associated with this item.' }),
          customMetadata: z
            .array(ItemCustomMetadataSchema)
            .exactOptional()
            .openapi({
              description:
                'An ordered list of custom name-value-pair item metadata.\n\nUsually displayed on an item detail page.\n',
            }),
          description: z
            .string()
            .exactOptional()
            .openapi({ description: 'The description of this item.' }),
          distributor: z
            .string()
            .exactOptional()
            .openapi({ description: 'The distributor of this item.' }),
          episodes: ItemListSchema.exactOptional(),
          eventDate: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description: 'The optional date of an event.\nSpecific to a Program item type.\n',
            }),
          genrePaths: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An array of genre paths mapping to the values within the `genres` array from ItemSummary.\n',
            }),
          location: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The optional location (e.g. city) of an event.\nSpecific to a Program item type.\n',
            }),
          season: ItemDetailSchema.exactOptional(),
          seasons: ItemListSchema.exactOptional(),
          show: ItemDetailSchema.exactOptional(),
          totalUserRatings: z
            .int32()
            .min(0)
            .exactOptional()
            .openapi({ description: 'The total number of users who have rated this item.' }),
          trailers: z
            .array(ItemSummarySchema)
            .exactOptional()
            .openapi({ description: 'A list of trailers associated with this item.' }),
          venue: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The optional venue of an event.\nSpecific to a Program item type.\n',
            }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('ItemDetail')

const ItemDownloadableSchema = z
  .object({
    downloadable: z.boolean().openapi({ description: 'is the item downloadable?' }),
    id: z.string().openapi({ description: 'Unique identifier for an Item' }),
  })
  .openapi({
    discriminator: { propertyName: 'type' },
    required: ['id', 'downloadable'],
    'x-emoji': '📘',
  })
  .openapi('ItemDownloadable')

const ItemDownloadableListSchema = z
  .strictObject({
    items: z.array(ItemDownloadableSchema).openapi({ description: 'A list of items' }),
  })
  .openapi({
    description: 'A list of items downloadable data.',
    required: ['items'],
    'x-emoji': '📚',
  })
  .openapi('ItemDownloadableList')

const ItemDownloadableRequestSchema = z
  .strictObject({
    ids: z.string().openapi({ description: 'Comma-separated list of AXIS item ids.' }),
  })
  .openapi({ example: { ids: '1234,2345,3456' }, required: ['ids'] })
  .openapi('ItemDownloadableRequest')

const ItemScheduleSchema = z
  .looseObject({
    blackout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this schedule represents time when the channel is completely off air.',
      }),
    channelId: z
      .string()
      .openapi({ description: 'The id of the channel item this schedule belongs to.' }),
    endDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time this schedule ends.' }),
    featured: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this is a featured item schedule.' }),
    id: z.string(),
    live: z.boolean().exactOptional().openapi({ description: 'True if this is a live event.' }),
    repeat: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this has been aired previously on the same channel.' }),
    startDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time this schedule starts.' }),
  })
  .openapi({ required: ['id', 'channelId', 'startDate', 'endDate'], 'x-emoji': '⏳' })
  .openapi('ItemSchedule')

const ItemScheduleListSchema = z
  .strictObject({
    channelId: z
      .string()
      .openapi({ description: 'The id of the channel the schedules belong to.' }),
    endDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time this list of schedules ends.' }),
    schedules: z.array(ItemScheduleSchema).openapi({ description: 'The list of item schedules.' }),
    startDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time this list of schedules starts.' }),
  })
  .openapi({ required: ['channelId', 'startDate', 'endDate', 'schedules'] })
  .openapi('ItemScheduleList')

const ItvAssignBtTokenRequestSchema = z
  .strictObject({
    profileToken: z.string().openapi({ description: 'The ITV profile token' }),
    token: z.string().openapi({ description: 'The validated userToken.' }),
  })
  .openapi({ required: ['token', 'profileToken'] })
  .openapi('ItvAssignBtTokenRequest')

const ItvAssignMsisdnRequestSchema = z
  .strictObject({
    eeProductId: z.string().openapi({ description: 'Product id from /ee/offers' }),
    msisdn: z.string().openapi({ description: 'The validated msisdn.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token' }),
    trackingHeader: z.string().openapi({ description: 'trackingHeader' }),
  })
  .openapi({ required: ['msisdn', 'profileToken', 'trackingHeader', 'eeProductId'] })
  .openapi('ItvAssignMsisdnRequest')

const ItvBillingHistoryRecordSchema = z
  .strictObject({
    card: z.object({}).openapi({ description: 'The card info.' }),
    charge: z.object({}).openapi({ description: 'The amount charged.' }),
    invoice: z.object({}).openapi({ description: 'The object with invoice details.' }),
    subscription: z
      .object({})
      .openapi({ description: 'The object with subscription payment details.' }),
  })
  .openapi({ required: ['card', 'subscription', 'invoice', 'charge'], 'x-emoji': '💳' })
  .openapi('ItvBillingHistoryRecord')

const ItvBillingHistorySchema = z
  .strictObject({
    payment_history: z
      .array(ItvBillingHistoryRecordSchema)
      .openapi({ description: 'The array of objects with subscription payment details.' }),
  })
  .openapi({ required: ['payment_history'], 'x-emoji': '💳' })
  .openapi('ItvBillingHistory')

const ItvBillingHistoryRequestSchema = z
  .strictObject({ profileToken: z.string().openapi({ description: 'The ITV profile token.' }) })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvBillingHistoryRequest')

const ItvCancelSubscriptionRequestSchema = z
  .strictObject({ profileToken: z.string().openapi({ description: 'The ITV profile token.' }) })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvCancelSubscriptionRequest')

const ItvCardDetailsSchema = z
  .strictObject({
    card_type: z.string().openapi({ description: 'The payment card type (Visa/Mastercard/etc).' }),
    exp_month: z.int32().openapi({ description: 'Expiry date month.' }),
    exp_year: z.int32().openapi({ description: 'Expiry date year.' }),
    last4: z.string().openapi({ description: 'The last 4 digit of card number.' }),
  })
  .openapi({ required: ['card_type', 'last4', 'exp_month', 'exp_year'], 'x-emoji': '💳' })
  .openapi('ItvCardDetails')

const ItvChangeCardDetailsRequestSchema = z
  .strictObject({
    cardToken: z.string().openapi({ description: 'The credit card token.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['profileToken', 'cardToken'] })
  .openapi('ItvChangeCardDetailsRequest')

const ItvChangeEmailRequestSchema = z
  .strictObject({
    email: z.string().openapi({ description: 'New email address for account/profile.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['email', 'profileToken'] })
  .openapi('ItvChangeEmailRequest')

const ItvChangeMarketingRequestSchema = z
  .strictObject({
    emailOptIn: z
      .boolean()
      .openapi({ description: 'Updated marketing preferences for account/profile.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['emailOptIn', 'profileToken'] })
  .openapi('ItvChangeMarketingRequest')

const ItvCurrentSubscriptionSchema = z
  .strictObject({
    cancelAtPeriodEnd: z.boolean().openapi({ description: 'The cancellation period end flag.' }),
    collectionMethod: z
      .string()
      .openapi({ description: 'The description of payment collection method.' }),
    created: z.int32().openapi({ description: 'The creation timestamp.' }),
    currentPeriodEnd: z.int32().openapi({ description: 'The end of period timestamp.' }),
    currentPeriodStart: z.int32().openapi({ description: 'The start of period timestamp.' }),
    plan: z.object({}).openapi({ description: 'The plan used during subsribing.' }),
    status: z.string().openapi({ description: 'The status of subscription.' }),
  })
  .openapi({
    required: [
      'collectionMethod',
      'cancelAtPeriodEnd',
      'created',
      'currentPeriodEnd',
      'currentPeriodStart',
      'plan',
      'status',
    ],
    'x-emoji': '💰',
  })
  .openapi('ItvCurrentSubscription')

const ItvDeleteAccountRequestSchema = z
  .strictObject({ profileToken: z.string().openapi({ description: 'The ITV profile token.' }) })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvDeleteAccountRequest')

const ItvEntitlementSchema = z
  .strictObject({
    card_type: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start of subscription.' }),
    expiry: z.iso.datetime({ offset: true }).openapi({ description: 'Expiry of subscription.' }),
    plan: z.object({}).openapi({ description: 'Purchased plan data.' }),
    source: z.string().openapi({ description: 'Source platform of purchase.' }),
    subscriptionId: z.string().openapi({ description: 'Id of subscription.' }),
  })
  .openapi({ required: ['start', 'expiry', 'source', 'subscriptionId', 'plan'], 'x-emoji': '💳' })
  .openapi('ItvEntitlement')

const ItvEntitlementCancelationSchema = z
  .strictObject({
    cancelled_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Cancelation datetime.' }),
    itvId: z.string().openapi({ description: 'Itv internal id.' }),
    source: z.string().openapi({ description: 'Source platform of cancelation.' }),
    subscriptionId: z.string().openapi({ description: 'Id of subscription.' }),
  })
  .openapi({ required: ['itvId', 'source', 'cancelled_at', 'subscriptionId'], 'x-emoji': '💳' })
  .openapi('ItvEntitlementCancelation')

const ItvEntitlementCurrentSchema = z
  .strictObject({
    source: z.string().openapi({ description: 'one of “itunes”, “stripe”, “amazon”, “google”' }),
  })
  .openapi({ required: ['source'] })
  .openapi('ItvEntitlementCurrent')

const ItvEntitlementPlanSchema = z
  .strictObject({
    cost: z.int32().openapi({ description: 'Source platform of purchase.' }),
    interval: z
      .enum(['day', 'week', 'month', 'year', 'none'])
      .openapi({ description: 'The type of billing period used.' }),
    trialLength: z
      .int32()
      .openapi({
        description: 'Given the `interval` this is how frequently it will run. e.g. every 2 weeks.',
      }),
    type: z.string().openapi({ description: 'Type of the plan.' }),
  })
  .openapi({ required: ['type', 'interval', 'cost', 'trialLength'], 'x-emoji': '💳' })
  .openapi('ItvEntitlementPlan')

const ItvEntitlementsHistorySchema = z
  .strictObject({
    cancellations: z
      .array(ItvEntitlementCancelationSchema)
      .openapi({ description: 'The results of availability checks.' }),
    entitlements: z
      .array(ItvEntitlementSchema)
      .openapi({ description: 'The results of availability checks.' }),
  })
  .openapi({ required: ['entitlements', 'cancellations'], 'x-emoji': '💳' })
  .openapi('ItvEntitlementsHistory')

const ItvFeatureFlagSchema = z
  .strictObject({
    enabled: z.boolean().openapi({ description: 'Is the feature enabled?' }),
    flag: z.string().exactOptional().openapi({ description: 'Feature flag data.' }),
  })
  .openapi({ required: ['enabled'], 'x-emoji': '💳' })
  .openapi('ItvFeatureFlag')

const ItvGetCardDetailsRequestSchema = z
  .strictObject({ profileToken: z.string().openapi({ description: 'The ITV profile token.' }) })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvGetCardDetailsRequest')

const ItvGetDiscountResponseSchema = z
  .strictObject({
    currency: z.string().exactOptional().openapi({ description: 'Payment currency.' }),
    description: z.string().exactOptional().openapi({ description: 'Description' }),
    headline: z.string().exactOptional().openapi({ description: 'Headline' }),
    id: z.string().openapi({ description: 'The if of a discount for a user.' }),
    initialCost: z.number().exactOptional().openapi({ description: 'The initial cost.' }),
    longDescription: z.string().exactOptional().openapi({ description: 'Long description' }),
    nickname: z.string().exactOptional().openapi({ description: 'Discount nickname.' }),
    offerdurationperiod: z
      .string()
      .exactOptional()
      .openapi({ description: 'How long the descount will be valid for.' }),
    shortDescription: z.string().exactOptional().openapi({ description: 'Short description' }),
  })
  .openapi({ required: ['id'], 'x-emoji': '💳' })
  .openapi('ItvGetDiscountResponse')

const ItvGooglePaySubscriptionRequestSchema = z
  .strictObject({
    purchaseToken: z.string().openapi({ description: 'the unique identifier for this purchase' }),
    subscriptionItem: z
      .string()
      .openapi({ description: 'the SKU of the item from the play console' }),
  })
  .openapi({ required: ['purchaseToken', 'subscriptionItem'] })
  .openapi('ItvGooglePaySubscriptionRequest')

const ItvHadEntitlementSchema = z
  .strictObject({
    hasHadEntitlements: z
      .boolean()
      .openapi({ description: 'whether the user has been previously entitlement' }),
  })
  .openapi({ required: ['hasHadEntitlements'] })
  .openapi('ItvHadEntitlement')

const ItvPinAuthRequestSchema = z
  .strictObject({
    cookieType: z
      .enum(['Session', 'Persistent'])
      .exactOptional()
      .openapi({
        description:
          "If you specify a cookie type then a content filter cookie will be returned\nalong with the token(s). This is only intended for web based clients which\nneed to pass the cookies to a server to render a page based on the user's\ncontent filters e.g subscription code.\n\nIf type `Session` the cookie will be session based.\nIf type `Persistent` the cookie will have a medium term lifespan.\nIf undefined no cookies will be set.\n",
      }),
    pin: z.string().openapi({ description: 'The 4-digit parental control pin.' }),
    scopes: z
      .array(z.enum(['Catalog', 'Commerce', 'Settings', 'Playback']))
      .exactOptional()
      .openapi({ description: 'The scope(s) of the token(s) required.' }),
  })
  .openapi({ required: ['pin'] })
  .openapi('ItvPinAuthRequest')

const ItvPlanListItemSchema = z
  .strictObject({
    amount: z
      .float32()
      .openapi({ description: 'The price of a plan. If a free plan then undefined.' }),
    currency: z.string().openapi({ description: 'The currency a plan is offered in.' }),
    description: z.string().openapi({ description: 'The textual description.' }),
    id: z.string().openapi({ description: 'The identifier of a plan.' }),
    interval: z
      .enum(['day', 'week', 'month', 'year', 'none'])
      .openapi({ description: 'The type of billing period used.' }),
    intervalCount: z
      .int32()
      .openapi({
        description: 'Given the `interval` this is how frequently it will run. e.g. every 2 weeks.',
      }),
    nickname: z.string().openapi({ description: 'The title of a plan.' }),
    product: z.string().openapi({ description: 'The product description.' }),
    savingLabel: z.string().exactOptional().openapi({ description: 'The saving label.' }),
    switchingText: z.string().exactOptional().openapi({ description: 'The text to switch for.' }),
    trialPeriodDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.',
      }),
  })
  .openapi({
    required: [
      'id',
      'nickname',
      'amount',
      'currency',
      'interval',
      'intervalCount',
      'product',
      'description',
    ],
    'x-emoji': '💳',
  })
  .openapi('ItvPlanListItem')

const ItvPlansSchema = z
  .strictObject({
    plans: z.array(ItvPlanListItemSchema).openapi({ description: 'The list of available plans.' }),
  })
  .openapi({ required: ['plans'] })
  .openapi('ItvPlans')

const ItvProfileTokenSchema = z
  .strictObject({ profileToken: z.string().openapi({ description: 'The ITV profile token.' }) })
  .openapi({ required: ['profileToken'], 'x-emoji': '🔑' })
  .openapi('ItvProfileToken')

const ItvProfileTokenRequestSchema = z
  .strictObject({ password: z.string().openapi({ description: 'The password.' }) })
  .openapi({ required: ['password'] })
  .openapi('ItvProfileTokenRequest')

const ItvPurchaseSchema = z
  .strictObject({
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of user in payment system.' }),
    planId: z.string().openapi({ description: 'The identifier of subscription plan.' }),
    subscriptionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of subscription in payment system.' }),
  })
  .openapi({ required: ['planId'], 'x-emoji': '💰' })
  .openapi('ItvPurchase')

const ItvPurchaseRequestSchema = z
  .strictObject({
    cardToken: z.string().openapi({ description: 'The credit card token.' }),
    planId: z.string().openapi({ description: 'The identifier of the plan to purchase.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
    voucher: z
      .string()
      .exactOptional()
      .openapi({ description: 'A coupon/voucher for a discount.' }),
  })
  .openapi({ required: ['planId', 'profileToken', 'cardToken'] })
  .openapi('ItvPurchaseRequest')

const ItvPurchaseStrongRequestSchema = z
  .strictObject({
    paymentMethodFromToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A paymentMethodFromToken.' }),
    paymentMethodId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A paymentMethodId from Stripe.' }),
    planId: z.string().openapi({ description: 'The identifier of the plan to purchase.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
    voucher: z
      .string()
      .exactOptional()
      .openapi({ description: 'A coupon/voucher for a discount.' }),
  })
  .openapi({ required: ['planId', 'profileToken'] })
  .openapi('ItvPurchaseStrongRequest')

const ItvPurchaseStrongResponseSchema = z
  .strictObject({
    clientSecret: z.string().exactOptional().openapi({ description: 'clientSecret.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of user in payment system.' }),
    intentId: z.string().exactOptional().openapi({ description: 'IntentId.' }),
    intentType: z.string().exactOptional().openapi({ description: 'intentType.' }),
    planId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of subscription plan.' }),
    status: z.string().exactOptional().openapi({ description: 'Status.' }),
    subscriptionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of subscription in payment system.' }),
  })
  .openapi({ 'x-emoji': '💰', required: [] })
  .openapi('ItvPurchaseStrongResponse')

const ItvPurchaseWithOfferRequestSchema = z
  .strictObject({
    couponId: z
      .string()
      .openapi({
        description:
          'A coupon/voucher for a discount. Can be retrieved from GET itv/voucher/{platform} endpoint',
      }),
    paymentMethodFromToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A paymentMethodFromToken.' }),
    paymentMethodId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A paymentMethodId from Stripe.' }),
    planId: z.string().openapi({ description: 'The identifier of the plan to purchase.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['planId', 'profileToken', 'couponId'] })
  .openapi('ItvPurchaseWithOfferRequest')

const ItvPurchaseWithOfferResponseSchema = z
  .strictObject({
    clientSecret: z.string().exactOptional().openapi({ description: 'clientSecret.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of user in payment system.' }),
    intentId: z.string().exactOptional().openapi({ description: 'IntentId.' }),
    intentType: z.string().exactOptional().openapi({ description: 'intentType.' }),
    paymentMethodId: z.string().exactOptional().openapi({ description: 'Payment Method ID' }),
    status: z.string().exactOptional().openapi({ description: 'Status.' }),
    subscriptionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of subscription in payment system.' }),
  })
  .openapi({ 'x-emoji': '💰', required: [] })
  .openapi('ItvPurchaseWithOfferResponse')

const ItvRokuTransactionRequestSchema = z
  .strictObject({ profileToken: z.string().openapi({ description: 'The ITV profile token.' }) })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvRokuTransactionRequest')

const ItvSubscriptionFullPriceRenewalSchema = z
  .strictObject({
    fullPriceRenewal: z.boolean().openapi({ description: 'full price renewal state.' }),
    reason: z.string().openapi({ description: 'reason of full price renewal state.' }),
  })
  .openapi({ required: ['fullPriceRenewal', 'reason'] })
  .openapi('ItvSubscriptionFullPriceRenewal')

const ItvSubscriptionStateSchema = z
  .strictObject({
    effective_entitlements: z
      .array(ItvEntitlementSchema)
      .openapi({ description: 'The array of entitlement objects.' }),
    failed_availability_checks: z
      .array(z.string())
      .openapi({ description: 'The results of availability checks.' }),
    purchased: z.array(z.string()).openapi({ description: 'The array of entitlement names.' }),
    source: z.string().openapi({ description: 'The payment provider (stripe/itunes)' }),
  })
  .openapi({
    required: ['failed_availability_checks', 'effective_entitlements', 'source', 'purchased'],
    'x-emoji': '💳',
  })
  .openapi('ItvSubscriptionState')

const ItvSubscriptionStatusResponseSchema = z
  .strictObject({
    is_active: z
      .boolean()
      .openapi({ description: 'Defines whether last payment intent was successful or not.' }),
  })
  .openapi({ required: ['is_active'] })
  .openapi('ItvSubscriptionStatusResponse')

const ItvUpdateIntentStrongRequestSchema = z
  .strictObject({
    paymentMethodFromToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A paymentMethodFromToken.' }),
    paymentMethodId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The paymentMethodId from Stripe.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvUpdateIntentStrongRequest')

const ItvUpdateIntentStrongResponseSchema = z
  .strictObject({
    clientSecret: z.string().exactOptional().openapi({ description: 'ClientSecret.' }),
    intentId: z.string().exactOptional().openapi({ description: 'IntentId.' }),
    intentType: z.string().exactOptional().openapi({ description: 'IntentType.' }),
    status: z.string().exactOptional().openapi({ description: 'Status.' }),
  })
  .openapi({ 'x-emoji': '💰', required: [] })
  .openapi('ItvUpdateIntentStrongResponse')

const ItvUpdatePaymentStrongRequestSchema = z
  .strictObject({
    paymentMethodFromToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A paymentMethodFromToken.' }),
    paymentMethodId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The paymentMethodId from Stripe.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
  })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvUpdatePaymentStrongRequest')

const ItvUpdateProfileRequestSchema = z
  .strictObject({
    dateOfBirth: z.string().exactOptional().openapi({ description: 'The date of birth.' }),
    email: z.string().exactOptional().openapi({ description: 'The email address.' }),
    firstName: z.string().exactOptional().openapi({ description: 'Last name.' }),
    lastName: z.string().exactOptional().openapi({ description: 'First name.' }),
    postcode: z.string().exactOptional().openapi({ description: 'The postal code.' }),
    profileToken: z.string().openapi({ description: 'The ITV profile token.' }),
    title: z.string().exactOptional().openapi({ description: 'The title.' }),
  })
  .openapi({ required: ['profileToken'] })
  .openapi('ItvUpdateProfileRequest')

const ItvUpgradePlanRequestSchema = z
  .strictObject({
    planId: z.string().openapi({ description: 'The identifier of the plan to purchase.' }),
  })
  .openapi({ required: ['planId'] })
  .openapi('ItvUpgradePlanRequest')

const ItvVoucherDisplaySchema = z
  .looseObject({
    currency: z.string().exactOptional().openapi({ description: 'Currency.' }),
    discountPrice: z.string().exactOptional().openapi({ description: 'Discount price.' }),
    duration: z.string().exactOptional().openapi({ description: 'Duration.' }),
    durationInMonths: z.number().exactOptional().openapi({ description: 'Duration in months.' }),
    headlineLabel: z.string().exactOptional().openapi({ description: 'Headline label.' }),
    initialCost: z.float32().exactOptional().openapi({ description: 'InitialCost.' }),
    longDescription: z.string().exactOptional().openapi({ description: 'Long description.' }),
    percentOff: z.float32().exactOptional().openapi({ description: 'Percent off.' }),
    savingLabel: z.string().exactOptional().openapi({ description: 'SavingLabel.' }),
    shortDescription: z.string().exactOptional().openapi({ description: 'Short description.' }),
  })
  .openapi({ required: ['type'] })
  .openapi('ItvVoucherDisplay')

const ItvVoucherLinksHrefSchema = z
  .looseObject({ href: z.string().openapi({ description: 'The voucher link.' }) })
  .openapi({ required: ['href'] })
  .openapi('ItvVoucherLinksHref')

const ItvVoucherLinksSchema = z
  .looseObject({ redeem: ItvVoucherLinksHrefSchema, self: ItvVoucherLinksHrefSchema })
  .openapi({ required: ['self', 'redeem'] })
  .openapi('ItvVoucherLinks')

const ItvVoucherSchema = z
  .strictObject({
    display: ItvVoucherDisplaySchema,
    id: z.string().openapi({ description: 'The coupon/voucher.' }),
    links: ItvVoucherLinksSchema,
    offerType: z.enum(['stripe', 'talon one']).openapi({ description: 'The voucher offer type.' }),
  })
  .openapi({ required: ['id', 'offerType', 'display', 'links'], 'x-emoji': '💰' })
  .openapi('ItvVoucher')

const ItvVoucherRequestSchema = z
  .strictObject({ voucher: z.string().openapi({ description: 'The voucher.' }) })
  .openapi({ required: ['voucher'] })
  .openapi('ItvVoucherRequest')

const MediaFileSchema = z
  .strictObject({
    channels: z.int32().exactOptional().openapi({ description: 'The number of audio channels.' }),
    deliveryType: z
      .enum(['Stream', 'Progressive', 'Download'])
      .openapi({ description: 'The way in which the media file is delivered.' }),
    drm: z
      .string()
      .openapi({
        description: "The type of drm used to encrypt the media. 'None' if unencrypted.",
      }),
    format: z.string().openapi({ description: 'The format the media was encoded in.' }),
    height: z.int32().openapi({ description: 'The height of the video media.' }),
    language: z.string().openapi({ description: "The language code for the media, e.g. 'en'." }),
    name: z.string().openapi({ description: 'The name of the media file.' }),
    resolution: z
      .enum(['SD', 'HD-720', 'HD-1080', 'HD-4K', 'External', 'Unknown'])
      .openapi({ description: 'The resolution of the video media.' }),
    url: z.url().openapi({ description: 'The url to access the media file.' }),
    width: z.int32().openapi({ description: 'The width of the video media.' }),
  })
  .openapi({
    required: [
      'name',
      'deliveryType',
      'url',
      'drm',
      'format',
      'resolution',
      'width',
      'height',
      'language',
    ],
    'x-emoji': '📀',
  })
  .openapi('MediaFile')

const NextPlaybackItemSchema = z
  .strictObject({
    firstWatchedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time when the item corresponding to the itemId passed in by the client was\nfirst watched by the user. Will be `undefined` if the user has never\nwatched the item.\n\nIt can be used to identify the scenario where the user has never watched a\nshow and we are suggesting they watch the first episode (i.e. it is\nmissing in this scenario)\n\n**This will only be populated when a `showId` is passed in**\n',
      }),
    lastWatchedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time when the item corresponding to the itemId passed in by the client was\nlast watched by the user. Will be `undefined` if the user has never\nwatched the item.\n\nIt can be used to identify the scenario where the user has never watched a\nshow and we are suggesting they watch the first episode (i.e. it is\nmissing in this scenario)\n\n**This will only be populated when a `showId` is passed in**\n',
      }),
    next: ItemDetailSchema.exactOptional(),
    sourceItemId: z
      .string()
      .openapi({ description: 'The id of the item used to determine the next item to play.' }),
    suggestionType: z
      .enum(['StartWatching', 'ContinueWatching', 'RestartWatching', 'Sequential', 'None'])
      .exactOptional()
      .openapi({
        description:
          'Field indicating the type or reason behind the suggestion.\n\nId Type   | Show Watched Status| Value            | Description\n----------|--------------------|------------------|---------------------------------\nshowId    | Unwatched          | StartWatching    |\nshowId    | Completely watched | RestartWatching  |\nshowId    | Partly watched     | ContinueWatching | Suggested episode partly watched\nshowId    | Partly watched     | Sequential       | Suggested episode unwatched\nepisodeId | Any                | Sequential       | Next episode in show\n',
      }),
  })
  .openapi({ required: ['sourceItemId'] })
  .openapi('NextPlaybackItem')

const PageEntrySchema = z
  .strictObject({
    customFields: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom fields defined by a curator for a page entry.' }),
    id: z.string().openapi({ description: 'The unique identifier for a page entry.' }),
    images: z
      .record(z.string(), z.url())
      .exactOptional()
      .openapi({
        description:
          'The images for the page entry if any.\n\nFor example the images of an `ImageEntry`.\n',
      }),
    item: ItemSummarySchema.exactOptional(),
    list: ItemListSchema.exactOptional(),
    people: z
      .array(PersonSchema)
      .exactOptional()
      .openapi({
        description: "If 'type' is 'PeopleEntry' then this is the array of people to present.",
      }),
    template: z
      .string()
      .openapi({ description: 'Template type used to present the content of the PageEntry.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: "If 'type' is 'TextEntry' then this is the text to be represented.",
      }),
    title: z.string().openapi({ description: 'The name of the Page Entry.' }),
    type: z
      .enum([
        'ItemEntry',
        'ItemDetailEntry',
        'ListEntry',
        'ListDetailEntry',
        'UserEntry',
        'TextEntry',
        'ImageEntry',
        'CustomEntry',
        'PeopleEntry',
      ])
      .openapi({
        description:
          'The type of PageEntry. Used to help identify what type of content will be presented.',
        'x-enumEmoji': {
          CustomEntry: '⚙️',
          ImageEntry: '🌅',
          ItemDetailEntry: '📘',
          ItemEntry: '📘',
          ListDetailEntry: '📚',
          ListEntry: '📚',
          PeopleEntry: '👱',
          TextEntry: '📝',
          UserEntry: '👤',
        },
      }),
  })
  .openapi({
    description:
      'Represents an entry of a Page.\nDefines what specific piece of content should be presented e.g. an Item or ItemList.\nAlso defines what visual template should be used to render that content.\n',
    required: ['id', 'type', 'title', 'template'],
    'x-emoji': '📑',
  })
  .openapi('PageEntry')

const PageMetadataSchema = z
  .strictObject({
    description: z.string().exactOptional(),
    keywords: z.array(z.string()).exactOptional(),
    segments: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description: 'Metadata associated with a page. Primarily intended for SEO usage.',
    required: [],
  })
  .openapi('PageMetadata')

const PageSchema = PageSummarySchema.and(
  z
    .object({
      customFields: z
        .looseObject({})
        .exactOptional()
        .openapi({ description: 'A map of custom fields defined by a curator for a page.' }),
      entries: z.array(PageEntrySchema).openapi({ description: 'Entries of a page' }),
      item: ItemDetailSchema.exactOptional(),
      list: ItemListSchema.exactOptional(),
      metadata: PageMetadataSchema.exactOptional(),
      themes: z.array(ThemeSchema).exactOptional(),
    })
    .openapi({ required: ['entries'] }),
).openapi('Page')

const PasswordResetEmailRequestSchema = z
  .strictObject({
    email: z
      .string()
      .openapi({
        description: 'The email address of the primary account profile to reset the password for.',
      }),
  })
  .openapi({ required: ['email'] })
  .openapi('PasswordResetEmailRequest')

const PasswordResetRequestSchema = z
  .strictObject({
    password: z.string().openapi({ description: 'The new password for the account.' }),
    resetToken: z.string().openapi({ description: 'The ITV reset token.' }),
  })
  .openapi({ required: ['resetToken', 'password'] })
  .openapi('PasswordResetRequest')

const PaymentMethodSchema = z
  .strictObject({
    balance: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The balance of the wallet if the payment method is a wallet.' }),
    brand: z
      .enum(['Visa', 'MasterCard', 'AmericanExpress', 'Other'])
      .exactOptional()
      .openapi({ description: 'The brand of the card if the payment method is a card.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency code of the wallet if the payment method is a wallet.',
      }),
    description: z
      .string()
      .openapi({
        description:
          'A short description of a payment method.\n\nIf the payment method is of type `Wallet` this will be "My Wallet"\n\nFor `Card` type payment methods the format of this description may differ\ndepending on the payment gateway in use. In the case of Stripe, this will\nbe in the format "Visa (**** 4242, exp 08/19)"\n',
      }),
    expiryMonth: z
      .number()
      .exactOptional()
      .openapi({ description: 'The expiry month of the card if the payment method is a card.' }),
    expiryYear: z
      .number()
      .exactOptional()
      .openapi({ description: 'The expiry year of the card if the payment method is a card.' }),
    id: z.string().openapi({ description: 'The unique identifier of a payment method.' }),
    lastDigits: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The last digits of the card if the payment method is a card.\nDepending on the payment gateway in use this value may be undefined.\n',
      }),
    type: z.enum(['Card', 'Wallet']).openapi({ description: 'The type of payment method.' }),
  })
  .openapi({ required: ['id', 'description', 'type'], 'x-emoji': '💳' })
  .openapi('PaymentMethod')

const ProfileCreationRequestSchema = z
  .strictObject({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the preferred language for the profile.\nMust be a valid ISO language code e.g. "en-US" and must match the code of\none of the languages specified in the app config.\nSee https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n',
      }),
    name: z.string().min(1).openapi({ description: 'The unique name of the profile.' }),
    pinEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether an account pin is required to enter the profile.\n\nIf no account pin is defined this has no impact.\n',
      }),
    purchaseEnabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Whether the profile can make purchases with the account payment options.',
      }),
    segments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The segments a profile should be placed under' }),
  })
  .openapi({ required: ['name'] })
  .openapi('ProfileCreationRequest')

const WatchedSchema = z
  .strictObject({
    firstWatchedDate: z.iso.datetime({ offset: true }),
    isFullyWatched: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'True - if the item is fully watched, False - otherwise.' }),
    itemId: z.string().exactOptional().openapi({ description: 'The id of the item watched.' }),
    lastWatchedDate: z.iso.datetime({ offset: true }),
    position: z
      .int32()
      .openapi({ description: 'The last playhead position watched for the item.' }),
  })
  .openapi({ required: ['position', 'firstWatchedDate', 'lastWatchedDate'], 'x-emoji': '👀' })
  .openapi('Watched')

const ProfileDetailSchema = ProfileSummarySchema.and(
  z
    .object({
      bookmarked: z
        .record(z.string(), z.iso.datetime({ offset: true }))
        .openapi({ description: 'A map of bookmarked itemIds => created date' }),
      rated: z
        .record(z.string(), z.int32())
        .openapi({ description: 'A map of rated itemIds => rating out of 10' }),
      watched: z
        .record(z.string(), WatchedSchema)
        .openapi({ description: 'A map of watched itemIds => last watched position' }),
    })
    .openapi({ required: ['watched', 'rated', 'bookmarked'] }),
).openapi('ProfileDetail')

const ProfileTokenRequestSchema = z
  .strictObject({
    cookieType: z
      .enum(['Session', 'Persistent'])
      .exactOptional()
      .openapi({
        description:
          "If you specify a cookie type then a content filter cookie will be returned\nalong with the token(s). This is only intended for web based clients which\nneed to pass the cookies to a server to render a page based on the user's\ncontent filters e.g subscription code.\n\nIf type `Session` the cookie will be session based.\nIf type `Persistent` the cookie will have a medium term lifespan.\nIf undefined no cookies will be set.\n",
      }),
    pin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pin associated with this profile, if any.' }),
    profileId: z
      .string()
      .openapi({ description: 'The id of the profile the token should grant access rights to.' }),
    scopes: z
      .array(z.enum(['Catalog', 'Commerce', 'Settings']))
      .openapi({ description: 'The scope(s) of the token(s) required.' }),
  })
  .openapi({ required: ['profileId', 'scopes'] })
  .openapi('ProfileTokenRequest')

const ProfileUpdateRequestSchema = z
  .strictObject({
    heroAutoplay: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Sets the Hero row clip auto playback enabled' }),
    heroWithAudio: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Sets the Hero row clip auto playback audio enabled' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the preferred language for the profile.\nMust be a valid ISO language code e.g. "en-US" and must match the code of\none of the languages specified in the app config.\nSee https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n',
      }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The unique name of the profile.' }),
    pinEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether an account pin is required to enter the profile.\n\nIf no account pin is defined this has no impact.\n',
      }),
    purchaseEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the profile can make purchases with the account payment options.',
      }),
    segments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The segments a profile should be placed under' }),
  })
  .openapi({ required: [] })
  .openapi('ProfileUpdateRequest')

const PurchaseSchema: z.ZodType<PurchaseType> = z
  .lazy(() =>
    z
      .strictObject({
        authorizationDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The date the purchase was authorized.' }),
        creationDate: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date the purchase was created.' }),
        currency: z
          .string()
          .openapi({ description: 'The currency code used to make the purchase.' }),
        id: z.string().openapi({ description: 'The identifier of the purchase.' }),
        item: ItemPurchaseSchema.exactOptional(),
        paymentMethodId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The identifier of the payment method used to make the purchase.',
          }),
        plan: PlanPurchaseSchema.exactOptional(),
        total: z.float32().openapi({ description: 'The total cost of the purchase.' }),
      })
      .openapi({ required: ['creationDate', 'currency', 'id', 'total'], 'x-emoji': '💰' }),
  )
  .openapi('Purchase')

const PurchaseRequestSchema = z
  .strictObject({
    itemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the item to purchase.\nBoth `itemId` and `offerId` are required for item purchases.\n',
      }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the item offer to purchase.\nBoth `itemId` and `offerId` are required for item purchases.\n',
      }),
    paymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the payment method to use.\nIf omitted, or if purchasing a plan, the default payment method will be used.\n',
      }),
    planId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the plan to purchase.' }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseRequest')

const RegistrationRequestSchema = z
  .strictObject({
    email: z.string(),
    firstName: z.string().exactOptional(),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the preferred language for the primary profile.\nMust be a valid ISO language code e.g. "en-US" and must match the code of\none of the languages specified in the app config.\nSee https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n',
      }),
    lastName: z.string().exactOptional(),
    marketing: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether to receive marketing material or not. Default to true.' }),
    password: z.string(),
    pin: z.string().exactOptional().openapi({ description: 'The primary account pin.' }),
    segments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The segments to apply to the primary profile.' }),
  })
  .openapi({ required: ['email', 'password'] })
  .openapi('RegistrationRequest')

const RokuPlanListItemSchema = z
  .strictObject({
    amount: z
      .float32()
      .openapi({ description: 'The price of a plan. If a free plan then undefined.' }),
    currency: z.string().openapi({ description: 'The currency a plan is offered in.' }),
    description: z.string().openapi({ description: 'The textual description.' }),
    interval: z
      .enum(['day', 'week', 'month', 'year', 'none'])
      .openapi({ description: 'The type of billing period used.' }),
    intervalCount: z
      .int32()
      .openapi({
        description: 'Given the `interval` this is how frequently it will run. e.g. every 2 weeks.',
      }),
    nickname: z.string().openapi({ description: 'The title of a plan.' }),
    product: z.string().openapi({ description: 'The product of a plan.' }),
    productCode: z.string().openapi({ description: 'The identifier of a plan.' }),
    savingLabel: z.string().openapi({ description: 'NA.' }),
    trialPeriodDays: z
      .int32()
      .openapi({
        description:
          'How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.',
      }),
  })
  .openapi({
    required: [
      'productCode',
      'nickname',
      'product',
      'currency',
      'amount',
      'interval',
      'intervalCount',
      'trialPeriodDays',
      'description',
      'savingLabel',
    ],
  })
  .openapi('RokuPlanListItem')

const RokuPlansSchema = z
  .strictObject({
    plans: z.array(RokuPlanListItemSchema).openapi({ description: 'The list of available plans.' }),
    termsAndConditions: z
      .string()
      .openapi({ description: 'Details of terms and conditions of the plan.' }),
  })
  .openapi({ required: ['plans', 'termsAndConditions'] })
  .openapi('RokuPlans')

const SamsungPreviewSectionTileSchema = z
  .strictObject({
    action_data: z
      .string()
      .openapi({ description: 'Data to send to the application when the tile is clicked' }),
    display_from: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time to begin showing the tile' }),
    display_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time to stop showing the tile' }),
    image_ratio: z
      .string()
      .openapi({
        description:
          'Thumbnail image aspect ratio\n  "16:9"\n  "4:3"\n  "1:1" (default)\n  "2:3"\n  The thumbnail height is fixed at 250 px on presentation.\n',
      }),
    image_url: z.url().openapi({ description: 'Thumbnail image URL' }),
    is_playable: z
      .boolean()
      .openapi({ description: 'If "true", a "Play" icon is shown over the thumbnail image' }),
    position: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Section position. If specified, sections are shown in ascending position order',
      }),
    subtitle: z.string().exactOptional().openapi({ description: 'Tile subtitle' }),
    title: z.string().exactOptional().openapi({ description: 'Tile title' }),
  })
  .openapi({ required: ['image_url', 'image_ratio', 'action_data', 'is_playable'] })
  .openapi('SamsungPreviewSectionTile')

const SamsungPreviewSectionSchema = z
  .strictObject({
    position: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Section position. If specified, sections are shown in ascending position order.',
      }),
    tiles: z
      .array(SamsungPreviewSectionTileSchema)
      .openapi({ description: 'Tiles within the section' }),
    title: z.string().exactOptional().openapi({ description: 'Section title' }),
  })
  .openapi({ required: ['tiles'] })
  .openapi('SamsungPreviewSection')

const SamsungPreviewSchema = z
  .strictObject({
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
        description:
          'For public preview only\nIf specified, the time at which the preview content is updated.\nThe time is at most 1 week into the future. By default, the preview\ncontent is updated every 10 minutes, whenever the TV is switched on,\nor the JSON file changes.\n',
      }),
    expires_only: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'For public preview only\nIf this value is "true", the preview content is updated only at\nthe time specified by the "expires" parameter.\n',
      }),
    sections: z.array(SamsungPreviewSectionSchema).openapi({ description: 'Preview sections' }),
  })
  .openapi({ required: ['sections'] })
  .openapi('SamsungPreview')

const SearchResultsSchema = z
  .strictObject({
    items: ItemListSchema.exactOptional(),
    movies: ItemListSchema.exactOptional(),
    other: ItemListSchema.exactOptional(),
    people: z
      .array(PersonSchema)
      .exactOptional()
      .openapi({ description: 'The list of people relevant to the search term.' }),
    term: z.string().openapi({ description: 'The search term.' }),
    total: z.int32().min(0).openapi({ description: 'The total number of results.' }),
    tv: ItemListSchema.exactOptional(),
  })
  .openapi({ required: ['term', 'total'], 'x-emoji': '🔍' })
  .openapi('SearchResults')

const ServiceErrorSchema = z
  .strictObject({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An optional code classifying the error. Should be taken in the context of the http status code.',
      }),
    message: z.string().openapi({ description: 'A description of the error.' }),
  })
  .openapi({ required: ['message'], 'x-emoji': '🔴' })
  .openapi('ServiceError')

const SingleSignOnRequestSchema = z
  .strictObject({
    cookieType: z
      .enum(['Session', 'Persistent'])
      .exactOptional()
      .openapi({
        description:
          "If you specify a cookie type then a content filter cookie will be returned\nalong with the token(s). This is only intended for web based clients which\nneed to pass the cookies to a server to render a page based on the user's\ncontent filters e.g subscription code.\n\nIf type `Session` the cookie will be session based.\nIf type `Persistent` the cookie will have a medium term lifespan.\nIf undefined no cookies will be set.\n",
      }),
    linkAccounts: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When a user attempts to sign in using single-sign-on, we may find an account created\npreviously through the manual sign up flow with the same email. If this is the\ncase then an option to link the two accounts can be made available.\n\nIf this flag is set to true then accounts will be linked automatically.\n\nIf this flag is not set or set to false and an existing account is found \nthen an http 401 with subcode `6001` will be returned. Client apps can then present the\noption to link the accounts. If the user decides to accept, then the same call\ncan be repeated with this flag set to true.\n',
      }),
    provider: z
      .literal('Facebook')
      .openapi({ description: 'The third party single-sign-on provider.' }),
    scopes: z
      .array(z.enum(['Catalog', 'Commerce', 'Settings', 'Playback']))
      .exactOptional()
      .openapi({
        description:
          'The scope(s) of the tokens required.\nFor each scope listed an Account and Profile token of that scope will be returned.\n',
      }),
    token: z
      .string()
      .openapi({
        description:
          'A token from the third party single-sign-on provider e.g. an identity token from Facebook.',
      }),
  })
  .openapi({ required: ['provider', 'token'] })
  .openapi('SingleSignOnRequest')

const SubscriptionDetailsSchema = z
  .strictObject({
    itvData_purchased: z
      .object({})
      .openapi({ description: 'The ITV purchased subscription data.' }),
  })
  .openapi({ required: ['itvData_purchased'], 'x-emoji': '🔑' })
  .openapi('SubscriptionDetails')

const TokenRefreshRequestSchema = z
  .strictObject({
    cookieType: z
      .enum(['Session', 'Persistent'])
      .exactOptional()
      .openapi({
        description:
          "If you specify a cookie type then a content filter cookie will be returned\nalong with the token(s). This is only intended for web based clients which\nneed to pass the cookies to a server to render a page based on the user's\ncontent filters e.g subscription code.\n\nIf type `Session` the cookie will be session based.\nIf type `Persistent` the cookie will have a medium term lifespan.\nIf undefined no cookies will be set.\n",
      }),
    token: z.string().openapi({ description: 'The token to refresh.' }),
  })
  .openapi({ required: ['token'] })
  .openapi('TokenRefreshRequest')

const UserRatingSchema = z
  .strictObject({
    itemId: z.string().openapi({ description: 'The id of the item rated.' }),
    rating: z.int32().min(1).max(10).openapi({ description: 'The rating out of 10' }),
  })
  .openapi({ required: ['itemId', 'rating'], 'x-emoji': '⭐️' })
  .openapi('UserRating')

const DeviceParamsSchema = z
  .string()
  .default('web_browser')
  .exactOptional()
  .openapi({
    param: {
      description: 'The type of device the content is targeting.',
      in: 'query',
      name: 'device',
      schema: { default: 'web_browser', type: 'string' },
      required: false,
    },
  })

const FeatureFlagsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['all', 'idp', 'ldp', 'hb', 'rpt', 'cas', 'lrl', 'cd'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'The set of opt in feature flags which cause breaking changes to responses.\n\nWhile Rocket APIs look to avoid breaking changes under the active major version, the formats of responses\nmay need to evolve over this time.\n\nThese feature flags allow clients to select which response formats they expect and avoid breaking\nclients as these formats evolve under the current major version.\n\n### Flags\n\n- `all` - Enable all flags. Useful for testing. _Don\'t use in production_.\n- `idp` - Dynamic item detail pages with schedulable rows.\n- `ldp` - Dynamic list detail pages with schedulable rows.\n- `hb` - Hubble formatted image urls.\n- `rpt` - Updated resume point threshold logic.\n- `cas` - "Custom Asset Search", inlcude `customAssets` in search results.\n- `lrl` - Do not pre-populate related list if more than `max_list_prefetch` down the page.\n- `cd` - Custom Destination support.\n\nSee the `feature-flags.md` for available flag details.\n',
      explode: false,
      in: 'query',
      name: 'ff',
      schema: {
        items: { enum: ['all', 'idp', 'ldp', 'hb', 'rpt', 'cas', 'lrl', 'cd'], type: 'string' },
        type: 'array',
      },
      style: 'form',
      required: false,
    },
  })

const ItemTypeParamsSchema = z
  .enum([
    'movie',
    'show',
    'season',
    'episode',
    'program',
    'link',
    'trailer',
    'channel',
    'customAsset',
  ])
  .exactOptional()
  .openapi({
    param: {
      description: 'The item type to filter by. Defaults to unspecified.',
      in: 'query',
      name: 'item_type',
      schema: {
        enum: [
          'movie',
          'show',
          'season',
          'episode',
          'program',
          'link',
          'trailer',
          'channel',
          'customAsset',
        ],
        type: 'string',
      },
      'x-enumEmoji': {
        channel: '📺',
        episode: '📺',
        link: '🔗',
        movie: '🎬',
        program: '🎟',
        season: '📺',
        show: '📺',
        trailer: '🖥',
      },
      required: false,
    },
  })

const LanguageParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Language code for the preferred language to be returned in the response.\n\nParameter value is case-insensitive and should be\n  - a valid 2 letter language code without region such as en, de\n  - or with region such as en_us, en_au\n\nIf undefined then defaults to 'en', unless the server has been configured\nwith a custom default.\n\nSee https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n",
      in: 'query',
      name: 'lang',
      schema: { type: 'string' },
      required: false,
    },
  })

const ListOrderParamsSchema = z
  .enum(['asc', 'desc'])
  .default('desc')
  .exactOptional()
  .openapi({
    param: {
      description: "The list sort order, either 'asc' or 'desc'.",
      in: 'query',
      name: 'order',
      schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
      required: false,
    },
  })

const ListOrderByParamsSchema = z
  .enum(['a-z', 'release-year', 'date-added'])
  .exactOptional()
  .openapi({
    param: {
      description: 'What to order by.',
      in: 'query',
      name: 'order_by',
      schema: { enum: ['a-z', 'release-year', 'date-added'], type: 'string' },
      required: false,
    },
  })

const MediaFileDeliveryParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['stream', 'progressive', 'download'])),
  )
  .openapi({
    param: {
      description: 'The video delivery type you require.',
      explode: false,
      in: 'query',
      name: 'delivery',
      required: true,
      schema: {
        items: { enum: ['stream', 'progressive', 'download'], type: 'string' },
        type: 'array',
      },
      style: 'form',
    },
  })

const MediaFileFormatsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['mp4', 'mpd', 'hls', 'external'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'The set of media file formats that the device supports, in the order of preference.\n\nWhen provided, Rocket API returns only media files in formats specified in this parameter. For each resolution, only the first media file of matching supported format is returned. Files of different resolutions may be of different supported media file formats.\n\n`external` value is reserved for project customizations where the real MIME type of the file on the specified URL is unknown at the time of ingestion.\n\nWhen not provided, Rocket API uses the legacy `User-Agent` header-based logic to find matching media files.\n',
      explode: false,
      in: 'query',
      name: 'formats',
      schema: { items: { enum: ['mp4', 'mpd', 'hls', 'external'], type: 'string' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const MediaFileResolutionParamsSchema = z
  .enum(['HD-4K', 'HD-1080', 'HD-720', 'SD', 'External'])
  .openapi({
    param: {
      description: 'The maximum resolution the device to playback the media can present.',
      in: 'query',
      name: 'resolution',
      required: true,
      schema: { enum: ['HD-4K', 'HD-1080', 'HD-720', 'SD', 'External'], type: 'string' },
    },
  })

const SegmentsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The list of segments to filter the response by.',
      explode: false,
      in: 'query',
      name: 'segments',
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const SubscriptionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The active subscription code.',
      in: 'query',
      name: 'sub',
      schema: { type: 'string' },
      required: false,
    },
  })

const ItemDownloadableRequestRequestBody = {
  description: 'The item Axis ids joined string with comma.',
  content: { 'application/json': { schema: ItemDownloadableRequestSchema } },
  required: true,
}

const AccountAuthSecurityScheme = {
  description: 'Account JWT token',
  flows: {
    password: {
      scopes: {
        Catalog: 'Access all read only content',
        Commerce: 'Perform account level transactions',
        Playback: 'Allow playback of restricted content',
        Settings: 'Modify account settings',
      },
      tokenUrl: '/account/authorization',
    },
  },
  type: 'oauth2',
}

const ProfileAuthSecurityScheme = {
  description: 'Profile JWT token',
  flows: {
    password: {
      scopes: { Catalog: 'Modify profile preferences and activity (bookmarks, watch list)' },
      tokenUrl: '/account/profile/authorization',
    },
  },
  type: 'oauth2',
}

const ResetPasswordAuthSecurityScheme = { in: 'header', name: 'authorization', type: 'apiKey' }

const VerifyEmailAuthSecurityScheme = { in: 'header', name: 'authorization', type: 'apiKey' }

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['account'],
  description: 'Get the details of an account along with the profiles and entitlements under it.',
  operationId: 'getAccount',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AccountSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const patchAccountRoute = createRoute({
  method: 'patch',
  path: '/account',
  tags: ['account'],
  description:
    'Update the details of an account.\n\nWith the exception of the address, this supports partial updates, so you can send just the\nproperties you wish to update.\n\nWhen the address is provided any properties which are omitted from the address will be cleared.\n',
  operationId: 'updateAccount',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Updated account details.',
      content: { 'application/json': { schema: AccountUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const getAccountBillingMethodsRoute = createRoute({
  method: 'get',
  path: '/account/billing/methods',
  tags: ['account'],
  description: 'Get the available payment methods under an account.',
  operationId: 'getPaymentMethods',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'The list of available payment methods.',
      content: { 'application/json': { schema: z.array(PaymentMethodSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postAccountBillingMethodsRoute = createRoute({
  method: 'post',
  path: '/account/billing/methods',
  tags: ['account'],
  description: 'Add a new payment method to an account.',
  operationId: 'addPaymentMethod',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Registration details for a new payment method.',
      content: { 'application/json': { schema: AddPaymentMethodRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The created payment method.',
      content: { 'application/json': { schema: PaymentMethodSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Commerce'] }],
})

export const getAccountBillingMethodsIdRoute = createRoute({
  method: 'get',
  path: '/account/billing/methods/{id}',
  tags: ['account'],
  description: 'Get a payment method under an account.',
  operationId: 'getPaymentMethod',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the payment method to get.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'The payment method requested.',
      content: { 'application/json': { schema: PaymentMethodSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const deleteAccountBillingMethodsIdRoute = createRoute({
  method: 'delete',
  path: '/account/billing/methods/{id}',
  tags: ['account'],
  description: 'Remove a payment method from an account.',
  operationId: 'removePaymentMethod',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the payment method to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    204: { description: 'Payment method removed.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Commerce'] }],
})

export const getAccountBillingPurchasesRoute = createRoute({
  method: 'get',
  path: '/account/billing/purchases',
  tags: ['account'],
  description: 'Get a list of all purchases made under an account.',
  operationId: 'getPurchases',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'A list of all purchases made under the account.',
      content: { 'application/json': { schema: z.array(PurchaseSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Commerce'] }],
})

export const postAccountBillingPurchasesRoute = createRoute({
  method: 'post',
  path: '/account/billing/purchases',
  tags: ['account'],
  description:
    'Purchase a plan or item offer.\nThe result of a successful transaction is a new entitlement.\n',
  operationId: 'makePurchase',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a plan or item purchase.',
      content: { 'application/json': { schema: PurchaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The entitlement for the purchased plan or item.',
      content: { 'application/json': { schema: EntitlementSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Commerce'] }],
})

export const putAccountBillingSubscriptionsIdRoute = createRoute({
  method: 'put',
  path: '/account/billing/subscriptions/{id}',
  tags: ['account'],
  description:
    'Renew a cancelled subscription or switch subscription to a different plan.\n\nWhen renewing a cancelled subscription membership, hit this endpoint with\nthe id of subscription to renew.\n\nTo switch plans provide the id of the current active subscription membership\nof the account, and in the query specify the id of the plan to switch to.\n',
  operationId: 'updateSubscription',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the current subscription membership\nassociated with the account.\n',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the plan to switch to if switching plans.',
            in: 'query',
            name: 'planId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Commerce'] }],
})

export const deleteAccountBillingSubscriptionsIdRoute = createRoute({
  method: 'delete',
  path: '/account/billing/subscriptions/{id}',
  tags: ['account'],
  description:
    'Cancel a plan subscription.\n\nA cancelled subscription will continue to be valid until the subscription\nexpiry date or next renewal date.\n',
  operationId: 'cancelSubscription',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the current active subscription membership of the account.\n',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Commerce'] }],
})

export const getAccountDevicesRoute = createRoute({
  method: 'get',
  path: '/account/devices',
  tags: ['account'],
  description:
    'Get all devices registered under this account.\n\nAlso includes information around device registration and deregistration limits.\n',
  operationId: 'getDevices',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AccountDevicesSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postAccountDevicesRoute = createRoute({
  method: 'post',
  path: '/account/devices',
  tags: ['account'],
  description:
    'Register a playback device under an account.\n\nIf a device with the same id already exists a `409` conflict will be returned.\n',
  operationId: 'registerDevice',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Registration details for a new playback device.',
      content: { 'application/json': { schema: DeviceRegistrationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeviceSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    409: {
      description: 'A device with the provided id already exists.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postAccountDevicesAuthorizationRoute = createRoute({
  method: 'post',
  path: '/account/devices/authorization',
  tags: ['account'],
  description:
    'Authorize a device from a generated device authorization code.\n\nThis is the second step in the process of authorizing a device by pin code.\n\nFirstly the device must request a generated authorization code via the\n`/authorization/device/code` endpoint.\n\nThis endpoint then authorizes the device associated with the code to sign in\nto a user account. Typically this endpoint will be called from a page\npresented in the web app under the account section.\n\nOnce authorized, the device will then be able to sign in to that account\nvia the `/authorization/device` endpoint, without needing to provide the \ncredentials of the user.\n',
  operationId: 'authorizeDevice',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The generated device authorization code.',
      content: { 'application/json': { schema: DeviceAuthorizationCodeSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getAccountDevicesIdRoute = createRoute({
  method: 'get',
  path: '/account/devices/{id}',
  tags: ['account'],
  description: 'Get a registered device.',
  operationId: 'getDevice',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the registered device e.g. serial number.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeviceSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const deleteAccountDevicesIdRoute = createRoute({
  method: 'delete',
  path: '/account/devices/{id}',
  tags: ['account'],
  description: 'Deregister a playback device from an account.',
  operationId: 'deregisterDevice',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the registered device e.g. serial number.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    204: { description: 'Device deregistered.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const putAccountDevicesIdNameRoute = createRoute({
  method: 'put',
  path: '/account/devices/{id}/name',
  tags: ['account'],
  description: 'Rename a device',
  operationId: 'renameDevice',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for this registered device e.g. serial number.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The new name for the device.',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Device renamed.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getAccountEntitlementsRoute = createRoute({
  method: 'get',
  path: '/account/entitlements',
  tags: ['account'],
  description:
    'Get all entitlements under the account.\n\nThis list is returned under the call to get account information so a call here is\nonly required when wishing to refresh a local copy of entitlements.\n',
  operationId: 'getEntitlements',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(EntitlementSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getAccountItemsIdVideosRoute = createRoute({
  method: 'get',
  path: '/account/items/{id}/videos',
  tags: ['account'],
  description:
    "Get the video files associated with an item given maximum resolution, device type\nand one or more delivery types.\n\nThis endpoint accepts an Account Catalog token, however if when requesting\nplayback files you receive an *403 status code with error code 1* then the file\nyou're requesting is classification restricted. This means you should switch\nto target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account\nPlayback token. If not already obtained, this token can be requested via the\n`/itv/pinauthorization` endpoint with an account level pin.\n\nFor convenience you may also access free / public files through this endpoint\ninstead of the /items/{id}/videos endpoint, when authenticated.\n\nReturns an array of video file objects which each include a url to a video.\n\nThe first entry in the array contains what is predicted to be the best match.\nThe remainder of the entries, if any, may contain resolutions below what was\nrequests. For example if you request HD-720 the response may also contain\nSD entries.\n\nIf you specify multiple delivery types, then the response array will insert\ntypes in the order you specify them in the query. For example `stream,progressive`\nwould return an array with 0 or more stream files followed by 0 or more progressive files.\n\nIf no files are found a 404 is returned.\n",
  operationId: 'getItemMediaFiles',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the item whose video files to load.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      delivery: MediaFileDeliveryParamsSchema,
      resolution: MediaFileResolutionParamsSchema,
      formats: MediaFileFormatsParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'The list of video files available.\nThe first entry containing what is predicted to be the best match.\n',
      content: { 'application/json': { schema: z.array(MediaFileSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getAccountItemsIdVideosGuardedRoute = createRoute({
  method: 'get',
  path: '/account/items/{id}/videos-guarded',
  tags: ['account'],
  description:
    'Get the video files associated with an item given maximum resolution, device type\nand one or more delivery types.\n\nThis endpoint is identical to the `/account/items/{id}/videos` however it expects\nan Account Playback token. This token, and in association this endpoint, is specifically\nfor use when playback files are classification restricted and require an account\nlevel pin to access them.\n\nReturns an array of video file objects which each include a url to a video.\n\nThe first entry in the array contains what is predicted to be the best match.\nThe remainder of the entries, if any, may contain resolutions below what was\nrequests. For example if you request HD-720 the response may also contain\nSD entries.\n\nIf you specify multiple delivery types, then the response array will insert\ntypes in the order you specify them in the query. For example `stream,progressive`\nwould return an array with 0 or more stream files followed by 0 or more progressive files.\n\nIf no files are found a 404 is returned.\n',
  operationId: 'getItemMediaFilesGuarded',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the item whose video files to load.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      delivery: MediaFileDeliveryParamsSchema,
      resolution: MediaFileResolutionParamsSchema,
      formats: MediaFileFormatsParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'The list of video files available.\nThe first entry containing what is predicted to be the best match.\n',
      content: { 'application/json': { schema: z.array(MediaFileSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Playback'] }],
})

export const getAccountNonceRoute = createRoute({
  method: 'get',
  path: '/account/nonce',
  tags: ['account'],
  description:
    'Generate a new account nonce.\n\nA nonce may be required to help sign a response from a third party\nservice which will be passed back to these services.\n\nFor example a Facebook single-sign-on request initiated by a client\napplication may first get a nonce from here to include in the request.\nFacebook will then include the nonce in the auth token it issues. This\ntoken can be passed back to our services and the nonce checked for validity.\n',
  operationId: 'generateNonce',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AccountNonceSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const putAccountPasswordRoute = createRoute({
  method: 'put',
  path: '/account/password',
  tags: ['account'],
  description: 'Change the password of an account.\n\nThe expected token scope is Settings.\n',
  operationId: 'changePassword',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The new account password & ITV profile token.',
      content: { 'application/json': { schema: ChangePasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const putAccountPinRoute = createRoute({
  method: 'put',
  path: '/account/pin',
  tags: ['account'],
  description: 'Change the pin of an account.',
  operationId: 'changePin',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The new account pin.',
      content: { 'application/json': { schema: ChangePinRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const getAccountProfileRoute = createRoute({
  method: 'get',
  path: '/account/profile',
  tags: ['profile'],
  description:
    'Get the details of the active profile, including watched, bookmarked and rated items.',
  operationId: 'getProfile',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Details of the active profile.',
      content: { 'application/json': { schema: ProfileDetailSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileBookmarksRoute = createRoute({
  method: 'get',
  path: '/account/profile/bookmarks',
  tags: ['profile'],
  description:
    'Get the map of bookmarked item ids (itemId => creationDate) under the active profile.',
  operationId: 'getBookmarks',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.record(z.string(), z.iso.datetime({ offset: true })) },
      },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileBookmarksListRoute = createRoute({
  method: 'get',
  path: '/account/profile/bookmarks/list',
  tags: ['profile'],
  description: 'Returns the list of bookmarked items under the active profile.',
  operationId: 'getBookmarkList',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      order: ListOrderParamsSchema,
      item_type: ItemTypeParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileBookmarksItemIdRoute = createRoute({
  method: 'get',
  path: '/account/profile/bookmarks/{itemId}',
  tags: ['profile'],
  description: 'Get the bookmark for an item under the active profile.',
  operationId: 'getItemBookmark',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the item to get the bookmark for.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookmarkSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const putAccountProfileBookmarksItemIdRoute = createRoute({
  method: 'put',
  path: '/account/profile/bookmarks/{itemId}',
  tags: ['profile'],
  description:
    "Bookmark an item under the active profile.\n\nCreates one if it doesn't exist, overwrites one if it does.\n",
  operationId: 'bookmarkItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the item to bookmark.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Bookmark created.',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const deleteAccountProfileBookmarksItemIdRoute = createRoute({
  method: 'delete',
  path: '/account/profile/bookmarks/{itemId}',
  tags: ['profile'],
  description: 'Unbookmark an item under the active profile.',
  operationId: 'deleteItemBookmark',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the bookmark to delete.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    204: { description: 'Bookmark deleted.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileContinueWatchingListRoute = createRoute({
  method: 'get',
  path: '/account/profile/continue-watching/list',
  tags: ['profile'],
  description:
    'Returns a list of items which have been watched but not completed under the active\nprofile.\n\nMultiple episodes under the same show may be watched or in progress, however only a\nsingle item belonging to a particular show will be included in the returned list.\n\nThe next episode to continue watching for a particular show will be the most recent\nincompletely watched episode, or the next episode following the most recently\ncompletely watched episode. Based on the specified `show_item_type` type, either the next\nepisode, the season of the next episode, or the show will be included in the list.\n',
  operationId: 'getContinueWatchingList',
  request: {
    query: z.object({
      show_item_type: z
        .enum(['episode', 'season', 'show'])
        .default('episode')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The item type to be returned for continue watching items belonging to a show.\n\nMultiple episodes under the same show may be watched or in progress, however only a\nsingle item belonging to a particular show will be included in the returned list.\n\nThe next episode to continue watching for a particular show will be the most recent\nincompletely watched episode, or the next episode following the most recently\ncompletely watched episode. Based on the specified `show_item_type` type, either the next\nepisode, the season of the next episode, or the show will be included in the list.\n\nIf `episode` is specified, then only the next episode to continue watching for a\nshow will be returned.\n\nIf `season` is specified, then only the season of the next episode will be returned.\n\nIf `show` is specified, then only the show of the next episode will be returned\n\nThe recommended value of this parameter should reflect the desitination the\nuser will be sent to when they select this item in the list. So if a user will\nbe sent to the show detail page then this should be `show` and you can use\nthe `include` parameter to get metadata about the episode or season if needed\n',
            in: 'query',
            name: 'show_item_type',
            schema: { default: 'episode', enum: ['episode', 'season', 'show'], type: 'string' },
            required: false,
          },
        }),
      include: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['episode', 'season', 'show'])),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include one opr more ancestor/children for items belonging to a show. Extra items\nwill be populated in the `listData` property of the list\n\nIf no value is specified no dependencies are included.\n\nIf `episode` is specified, then the next episode will be added for season/show\nitems. Has no effect if `show_item_type` is set to `episode`.\n\nIf `season` is specified, then the season of the next episode will be added for\nepisode/show items. Has no effect if `show_item_type` is set to `season`.\n\nIf `show` is specified, then the show of the next episode will be added for\nepisode/season items. Has no effect if `show_item_type` is set to `show`.\n',
            explode: false,
            in: 'query',
            name: 'include',
            schema: {
              default: [],
              items: { enum: ['episode', 'season', 'show'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileItemsItemIdNextRoute = createRoute({
  method: 'get',
  path: '/account/profile/items/{itemId}/next',
  tags: ['profile'],
  description:
    'Returns the next item to play given a source item id.\n\nFor an unwatched show it returns the first episode available to the account.\n\nFor a watched show it returns the last incompletely watched episode by the profile,\nor the episode that immediately follows the last completely watched episode \nor nothing.\n\nFor an episode it always returns the immediately following episode, if available to\nthe account, or nothing.\n\nIf the response does not contain a `next` property then no item was found.\n',
  operationId: 'getNextPlaybackItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the source item to base the next to watch item off.\n',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: z
        .enum(['parent', 'ancestors'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "If no value is specified no dependencies are expanded.\n\nIf 'parent' is specified then only the direct parent will be expanded.\nFor example if an `Episode` then the `Season` would be included.\n\nIf 'ancestors' is specified then the full parent chain is expanded.\nFor example if an `Episode` then both the `Season` and `Show` would be included.\n",
            in: 'query',
            name: 'expand',
            schema: { enum: ['parent', 'ancestors'], type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The detail of the next item to play.',
      content: { 'application/json': { schema: NextPlaybackItemSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileRatingsRoute = createRoute({
  method: 'get',
  path: '/account/profile/ratings',
  tags: ['profile'],
  description:
    'Get the map of rated item ids (itemId => rating out of 10) under the active profile.',
  operationId: 'getRatings',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileRatingsListRoute = createRoute({
  method: 'get',
  path: '/account/profile/ratings/list',
  tags: ['profile'],
  description: 'Returns the list of rated items under the active profile.',
  operationId: 'getRatingsList',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      order: ListOrderParamsSchema,
      order_by: z
        .enum(['date-added', 'date-modified'])
        .default('date-added')
        .exactOptional()
        .openapi({
          param: {
            description:
              'What to order by.\n\nOrdering by `date-modified` equates to ordering by the last rated date.\n',
            in: 'query',
            name: 'order_by',
            schema: {
              default: 'date-added',
              enum: ['date-added', 'date-modified'],
              type: 'string',
            },
            required: false,
          },
        }),
      item_type: ItemTypeParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileRatingsItemIdRoute = createRoute({
  method: 'get',
  path: '/account/profile/ratings/{itemId}',
  tags: ['profile'],
  description: 'Get the rating info for an item under the active profile.',
  operationId: 'getItemRating',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the item to get the rating info for.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserRatingSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const putAccountProfileRatingsItemIdRoute = createRoute({
  method: 'put',
  path: '/account/profile/ratings/{itemId}',
  tags: ['profile'],
  description:
    "Rate an item under the active profile.\n\nCreates one if it doesn't exist, overwrites one if it does.\n",
  operationId: 'rateItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the item to rate.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(10),
        )
        .openapi({
          param: {
            description: 'The item rating between 1 and 10 inclusive.',
            in: 'query',
            name: 'rating',
            required: true,
            schema: { format: 'int32', maximum: 10, minimum: 1, type: 'integer' },
          },
        }),
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK.', content: { 'application/json': { schema: UserRatingSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileWatchedRoute = createRoute({
  method: 'get',
  path: '/account/profile/watched',
  tags: ['profile'],
  description:
    'Get the map of watched item ids (itemId => last playhead position) under the active profile.',
  operationId: 'getWatched',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), WatchedSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const deleteAccountProfileWatchedRoute = createRoute({
  method: 'delete',
  path: '/account/profile/watched',
  tags: ['profile'],
  description:
    'Remove the watched status of items under the active profile. Passing in\nspecific `itemId`s to the `item_ids` query parameter will cause only these\nitems to be removed. **If this list is missing all watched items will be\nremoved**\n',
  operationId: 'deleteWatched',
  request: {
    query: z.object({
      item_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string().min(1).openapi({ description: 'itemId to delete' })).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of `itemId`s to delete. Omit this parameter to delete all items\n',
            explode: false,
            in: 'query',
            name: 'item_ids',
            schema: {
              items: { description: 'itemId to delete', minLength: 1, type: 'string' },
              minItems: 1,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Watched statuses deleted.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileWatchedListRoute = createRoute({
  method: 'get',
  path: '/account/profile/watched/list',
  tags: ['profile'],
  description: 'Returns the list of watched items under the active profile.',
  operationId: 'getWatchedList',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      completed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by whether an item has been fully watched (completed) or not.\n\nIf `undefined` then both partially and fully watched items are returned.\n',
            in: 'query',
            name: 'completed',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      order: ListOrderParamsSchema,
      order_by: z
        .enum(['date-added', 'date-modified'])
        .default('date-added')
        .exactOptional()
        .openapi({
          param: {
            description:
              'What to order by.\n\nOrdering by `date-modified` equates to ordering by the last watched date.\n',
            in: 'query',
            name: 'order_by',
            schema: {
              default: 'date-added',
              enum: ['date-added', 'date-modified'],
              type: 'string',
            },
            required: false,
          },
        }),
      item_type: ItemTypeParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getAccountProfileWatchedItemIdRoute = createRoute({
  method: 'get',
  path: '/account/profile/watched/{itemId}',
  tags: ['profile'],
  description: 'Get the watched status info for an item under the active profile.',
  operationId: 'getItemWatchedStatus',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the item to get the watched status for.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: WatchedSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const putAccountProfileWatchedItemIdRoute = createRoute({
  method: 'put',
  path: '/account/profile/watched/{itemId}',
  tags: ['profile'],
  description:
    "Record the watched playhead position of a video under the active profile.\n\nCan be used later to resume a video from where it was last watched.\n\nCreates one if it doesn't exist, overwrites one if it does.\n",
  operationId: 'setItemWatchedStatus',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the item being watched.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .openapi({
          param: {
            description: 'The playhead position to record.',
            in: 'query',
            name: 'position',
            required: true,
            schema: { format: 'int32', minimum: 0, type: 'integer' },
          },
        }),
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK.', content: { 'application/json': { schema: WatchedSchema } } },
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const postAccountProfilesRoute = createRoute({
  method: 'post',
  path: '/account/profiles',
  tags: ['account'],
  description: 'Create a new profile under the active account.',
  operationId: 'createProfile',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Profile details.',
      content: { 'application/json': { schema: ProfileCreationRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Details of the created profile.',
      content: { 'application/json': { schema: ProfileDetailSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getAccountProfilesIdRoute = createRoute({
  method: 'get',
  path: '/account/profiles/{id}',
  tags: ['account'],
  description: 'Get the summary of a profile with a specific id under the active account.',
  operationId: 'getProfileWithId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the profile to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ProfileSummarySchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const deleteAccountProfilesIdRoute = createRoute({
  method: 'delete',
  path: '/account/profiles/{id}',
  tags: ['account'],
  description:
    'Delete a profile with a specific id under the active account.\n\nNote that you cannot delete the primary profile.\n',
  operationId: 'deleteProfileWithId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the profile to delete.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
  },
  responses: {
    204: { description: 'Profile deleted.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const patchAccountProfilesIdRoute = createRoute({
  method: 'patch',
  path: '/account/profiles/{id}',
  tags: ['account'],
  description:
    'Update the summary of a profile with a specific id under the active account.\n\nThis supports partial updates so you can send just the properties you wish to update.\n',
  operationId: 'updateProfileWithId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the profile to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Updated profile details.',
      content: { 'application/json': { schema: ProfileUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Profile updated.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postAccountRequestEmailVerificationRoute = createRoute({
  method: 'post',
  path: '/account/request-email-verification',
  tags: ['account'],
  description:
    "Request that the email address tied to an account be verified.\n\nThis will send a verification email to the email address of the primary profile containing\na link which, once clicked, completes the verification process via the /verify-email endpoint.\n\nNote that when an account is created this email is sent automatically so there's no need\nto call this directly.\n\nIf the user doesn't click the link before it expires then this endpoint can be called\nto request a new verification email. In the future it may also be used if we add support\nfor changing an account email address.\n",
  operationId: 'requestEmailVerification',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postAuthorizationRoute = createRoute({
  method: 'post',
  path: '/authorization',
  tags: ['authorization'],
  description:
    'Request one or more `Account` level authorization tokens each with a chosen scope.\n\nTokens are used to access restricted service endpoints. These restricted endpoints\nwill require a specific token type (e.g Account) with a specific scope (e.g. Catalog)\nbefore access is granted.\n\nFor convenience, where a Profile level token with the same scope exists it will also be returned.\n\nAuthorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`\nendpoint instead.\n',
  operationId: 'getAccountToken',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The account credentials with requested token scope.',
      content: { 'application/json': { schema: AccountTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccessTokenSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const deleteAuthorizationRoute = createRoute({
  method: 'delete',
  path: '/authorization',
  tags: ['authorization'],
  description:
    'When a user signs out of an application we need to clear some\nbasic cookies we assigned them during token authorization.\n',
  operationId: 'signOut',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postAuthorizationDeviceRoute = createRoute({
  method: 'post',
  path: '/authorization/device',
  tags: ['authorization'],
  description:
    'Get Catalog tokens for an account using a device authorization code.\nWhere a Profile level token of Catalog scope exists it will also be returned.\n\nThis is the final step in the process of authorizing a device by pin code.\n\nFirstly the device must request a generated authorization code via the\n`/authorization/device/code` endpoint.\n\nThe code is subsequently used to authorize the device to sign in to a given\naccount via the `/account/devices/authorization` endpoint. Typically this\nwill be from a page presented in the web app under the account section.\n\nOnce authorized, this endpoint will allow the device to sign in without\nneeding to provide the credentials of the user.\n',
  operationId: 'getAccountTokenByCode',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The device id e.g. serial number and authorization code.',
      content: { 'application/json': { schema: AccountTokenByCodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccessTokenSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postAuthorizationDeviceCodeRoute = createRoute({
  method: 'post',
  path: '/authorization/device/code',
  tags: ['authorization'],
  description:
    'Get a generated device authorization code.\n\nThis is the first step in the process of authorizing a device by pin code.\nThe device will make a request to this endpoint providing a unique identifier\nfor the device such as a serial number. This endpoint will then return a\ngenerated code which is tied to the given device.\n\nThe code may subsequently be used to authorize the device to sign in to an\naccount via the `/account/devices/authorization` endpoint. Typically this\nwill be from a page presented in the web app under the account section.\n\nOnce authorized, the device will then be able to sign in to that account\nvia the `/authorization/device` endpoint, without needing to provide the \ncredentials of the user.\n',
  operationId: 'generateDeviceAuthorizationCode',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Details of the device being authorized.',
      content: { 'application/json': { schema: DeviceRegistrationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeviceAuthorizationCodeSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postAuthorizationProfileRoute = createRoute({
  method: 'post',
  path: '/authorization/profile',
  tags: ['authorization'],
  description:
    'Request one or more `Profile` level authorization tokens each with a chosen scope.\n\nTokens are used to access restricted service endpoints. These restriced endpoints\nwill require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)\nbefore access is granted.\n',
  operationId: 'getProfileToken',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The profile id and optional pin with required token scope.',
      content: { 'application/json': { schema: ProfileTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccessTokenSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postAuthorizationRefreshRoute = createRoute({
  method: 'post',
  path: '/authorization/refresh',
  tags: ['authorization'],
  description:
    'Refresh an account or profile level authorization token which is marked as refreshable.',
  operationId: 'refreshToken',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'The token to refresh.',
      content: { 'application/json': { schema: TokenRefreshRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AccessTokenSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postAuthorizationSsoRoute = createRoute({
  method: 'post',
  path: '/authorization/sso',
  tags: ['authorization'],
  description: 'Exchange a third party single-sign-on token for our own authorization tokens.',
  operationId: 'singleSignOn',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'A single-sign-on request.',
      content: { 'application/json': { schema: SingleSignOnRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccessTokenSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description:
        "Unauthorized.\n\nError codes:\n  - 6000: Unknown or default error code.\n  - 6001: An account with the same email already exists but it's not linked to this social identity.\n  - 6002: The social provider token provided is invalid.\n  - 6003: The account is already linked to a different account with the same provider.\n  - 6004: The user data returned from the social provider is missing the email address.\n",
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getBtPlanTokenRoute = createRoute({
  method: 'get',
  path: '/bt/plan/{token}',
  tags: ['bt'],
  description: 'Returns all the plans available for BT flow including additional description data.',
  operationId: 'getPlanByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the user provided by BT in an initial URL.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Available plan for current user.',
      content: { 'application/json': { schema: BtPlanListItemSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getBtPlansRoute = createRoute({
  method: 'get',
  path: '/bt/plans',
  tags: ['bt'],
  description: 'Returns all the plans available for BT flow including additional description data.',
  operationId: 'getPlans',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'List of available plans.',
      content: { 'application/json': { schema: BtPlansSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postBtTokenAssignRoute = createRoute({
  method: 'post',
  path: '/bt/token/assign',
  tags: ['bt'],
  description: 'Assigns an UserToken to a profile on the ITV side. Currently throws an exception.',
  operationId: 'assignToken',
  request: {
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of an assign request.',
      content: { 'application/json': { schema: ItvAssignBtTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'OK' },
    401: { description: 'User unknown' },
    500: {
      description: 'Failure',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getBtTokenValidateRoute = createRoute({
  method: 'get',
  path: '/bt/token/validate',
  tags: ['bt'],
  description: 'Checks a provided token for BT eligible user.\n',
  operationId: 'checkUserToken',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User token provided by BT.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: { description: 'The token is eligeble for BT.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getCheckSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/check-subscription/{id}',
  tags: ['support'],
  description: 'Returns the details of subscription data for a user with specified id.',
  operationId: 'getSubscriptionData',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the user to load.\n',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The data requested',
      content: { 'application/json': { schema: SubscriptionDetailsSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['app'],
  description:
    "Get the global configuration for an application. Should be called during app statup.\n\nThis includes things like device and playback rules, classifications,\nsitemap and subscriptions.\n\nYou have the option to select specific configuration objects using the 'include'\nparameter, or if unspecified, getting all configuration.\n",
  operationId: 'getAppConfig',
  request: {
    query: z.object({
      include: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'classification',
              'playback',
              'sitemap',
              'navigation',
              'subscription',
              'general',
              'display',
              'i18n',
              'linear',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma delimited list of config objects to return.\nIf none specified then all configuration is returned.\n',
            explode: false,
            in: 'query',
            name: 'include',
            schema: {
              items: {
                enum: [
                  'classification',
                  'playback',
                  'sitemap',
                  'navigation',
                  'subscription',
                  'general',
                  'display',
                  'i18n',
                  'linear',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      system: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Classification system to load in case include = classification.\n',
            in: 'query',
            name: 'system',
            required: false,
            schema: { type: 'string' },
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of available pages',
      content: { 'application/json': { schema: AppConfigSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getEeBtEligibilityRoute = createRoute({
  method: 'get',
  path: '/ee-bt/eligibility',
  tags: ['ee', 'bt'],
  description: 'Check whether or not a user is eligible for switching to Bt or EE offers.',
  operationId: 'checkEeBtEligibility',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Success, returns eligibility data.',
      content: { 'application/json': { schema: EeBtEligibilitySchema } },
    },
    406: { description: 'Customer does not exist.' },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postEeMsisdnRoute = createRoute({
  method: 'post',
  path: '/ee/msisdn',
  tags: ['ee'],
  description: 'Assigns a msisdn to a profile on ITV side.',
  operationId: 'assignMsisdn',
  request: {
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of an assign request.',
      content: { 'application/json': { schema: ItvAssignMsisdnRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'OK' },
    401: { description: 'User unknown' },
    500: {
      description: 'Failure',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postEeOffersRoute = createRoute({
  method: 'post',
  path: '/ee/offers',
  tags: ['ee'],
  description:
    'Returns eligible partner specific offers for the querying partner for an EE MSISDN.\nThis call is supposed to be called after we have MSISDN accired.\nThis call should be followed by POST /ee/msisdn.\n',
  operationId: 'getEligibleOffers',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Data for getting the eligible offers.',
      content: { 'application/json': { schema: EeOffersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The list of eligible offers value.',
      content: { 'application/json': { schema: EeOffersResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const putEePinRoute = createRoute({
  method: 'put',
  path: '/ee/pin',
  tags: ['ee'],
  description:
    'Creates a PIN request that will send an SMS to the given msisdn.\nThis call is to validate MSISDN entered by a user not comming through EE network.\nThis call should be followed by POST ee/pin.\n',
  operationId: 'createPinRequest',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Data for creating the PIN request.',
      content: { 'application/json': { schema: EeCreatePinRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The PIN reference value.',
      content: { 'application/json': { schema: EeCreatePinResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postEePinRoute = createRoute({
  method: 'post',
  path: '/ee/pin',
  tags: ['ee'],
  description:
    'Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.',
  operationId: 'validatePinRequest',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Data for validating PIN.',
      content: { 'application/json': { schema: EeValidatePinRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The validation status - success.',
      content: { 'application/json': { schema: EeValidatePinResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getEePlansRoute = createRoute({
  method: 'get',
  path: '/ee/plans',
  tags: ['ee'],
  description: 'Returns all the plans available for EE flow including additional description data.',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'List of available plans.',
      content: { 'application/json': { schema: EePlansSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getEePlansIdRoute = createRoute({
  method: 'get',
  path: '/ee/plans/{id}',
  tags: ['ee'],
  description: 'Returns the plan description for EE flow including additional description data.',
  operationId: 'getPlan',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the plan received from ee/offers.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'List of available plans.',
      content: { 'application/json': { schema: EePlanListItemSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getEeTokenCreateRoute = createRoute({
  method: 'get',
  path: '/ee/token/create',
  tags: ['ee'],
  description:
    'Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.',
  operationId: 'createToken',
  responses: {
    200: {
      description: 'The token.',
      content: { 'application/json': { schema: EeCreateTokenResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItemsIdRoute = createRoute({
  method: 'get',
  path: '/items/{id}',
  tags: ['content'],
  description: 'Returns the details of an item with the specified id.',
  operationId: 'getItem',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the item to load.\n\nThe custom identifier of an item can be used here if the `use_custom_id` parameter is true.\n',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: z
        .enum(['all', 'children', 'ancestors', 'parent'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "If no value is specified no dependencies are expanded.\n\nIf 'children' is specified then the list of any direct children will be expanded. For example\nseasons of a show or episodes of a season.\n\nIf 'all' is specified then the parent chain will be expanded along with any child list at each level.\nFor example if an episode is specified then its season will be expanded and that season's episode list.\nThe season will have its show expanded and the show will have its season list expanded.\n\nThe 'all' options is useful when you deep link into a show/season/episode for the first time as\nit provides full context for navigating around the show page. Subsequent navigation around\nchildren of the show should only need to request expand of children.\n\nIf 'ancestors' is specified then only the parent chain is included.\n\nIf 'parent' is specified then only the direct parent is included.\n\nIf an expand is specified which is not relevant to the item type, it will be ignored.\n",
            in: 'query',
            name: 'expand',
            schema: { enum: ['all', 'children', 'ancestors', 'parent'], type: 'string' },
            required: false,
          },
        }),
      select_season: z
        .enum(['first', 'latest'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Given a provided show id, it can be useful to get the details of a child season. This option\nprovides a means to return the `first` or `latest` season of a show given the show id.\n\nThe `expand` parameter also works here so for example you could land on a show page and request the\nlatest season along with `expand=all`. This would then return the detail of the latest season with\nits list of child episode summaries, and also expand the detail of the show with its list of seasons summaries.\n\nNote the `id` parameter must be a show id for this parameter to work correctly.\n',
            in: 'query',
            name: 'select_season',
            schema: { enum: ['first', 'latest'], type: 'string' },
            required: false,
          },
        }),
      use_custom_id: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true when passing a custom Id as the `id` path parameter.',
            in: 'query',
            name: 'use_custom_id',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The item requested',
      content: { 'application/json': { schema: ItemDetailSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItemsIdChildrenRoute = createRoute({
  method: 'get',
  path: '/items/{id}/children',
  tags: ['content'],
  description:
    'Returns the List of child summary items under an item.\n\nIf the item is a Season then the children will be episodes and ordered by episode number.\n\nIf the item is a Show then the children will be Seasons and ordered by season number.\n\nReturns 404 if no children found.\n',
  operationId: 'getItemChildrenList',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the item whose children to load.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: ListOrderParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItemsIdRelatedRoute = createRoute({
  method: 'get',
  path: '/items/{id}/related',
  tags: ['content'],
  description:
    'Returns the list of items related to the parent item.\n\nNote for now, due to the size of the list being unknown, only a single page will be returned.\n',
  operationId: 'getItemRelatedList',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the item to based related items off.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItemsIdVideosRoute = createRoute({
  method: 'get',
  path: '/items/{id}/videos',
  tags: ['content'],
  description:
    'Get the free / public video files associated with an item given maximum resolution,\ndevice type and one or more delivery types.\n\nReturns an array of video file objects which each include a url to a video.\n\nThe first entry in the array contains what is predicted to be the best match.\nThe remainder of the entries, if any, may contain resolutions below what was\nrequests. For example if you request HD-720 the response may also contain\nSD entries.\n\nIf you specify multiple delivery types, then the response array will insert\ntypes in the order you specify them in the query. For example `stream,progressive`\nwould return an array with 0 or more stream files followed by 0 or more progressive files.\n\nIf no files are found a 404 is returned.\n',
  operationId: 'getPublicItemMediaFiles',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the item whose video files to load.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      delivery: MediaFileDeliveryParamsSchema,
      resolution: MediaFileResolutionParamsSchema,
      formats: MediaFileFormatsParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'The list of video files available.\nThe first entry containing what is predicted to be the best match.\n',
      content: { 'application/json': { schema: z.array(MediaFileSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItemsItemIdNextRoute = createRoute({
  method: 'get',
  path: '/items/{itemId}/next',
  tags: ['content'],
  description:
    'Identical to GET /account/profile/items/{itemId}/next route but for users\nthat are not logged in i.e. this endpoint does not require authorisation\n',
  operationId: 'getAnonNextPlaybackItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the source item to base the next to watch item off.\n',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: z
        .enum(['parent', 'ancestors'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "If no value is specified no dependencies are expanded.\n\nIf 'parent' is specified then only the direct parent will be expanded.\nFor example if an `Episode` then the `Season` would be included.\n\nIf 'ancestors' is specified then the full parent chain is expanded.\nFor example if an `Episode` then both the `Season` and `Show` would be included.\n",
            in: 'query',
            name: 'expand',
            schema: { enum: ['parent', 'ancestors'], type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The detail of the next item to play.',
      content: { 'application/json': { schema: NextPlaybackItemSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postItvBillinghistoryPlatformRoute = createRoute({
  method: 'post',
  path: '/itv/billinghistory/{platform}',
  tags: ['itv'],
  description: 'Returns the list of billing records for specified payment platform.',
  operationId: 'getBillingHistory',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a billing history request.',
      content: { 'application/json': { schema: ItvBillingHistoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'List of billing records.',
      content: { 'application/json': { schema: ItvBillingHistorySchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const putItvCardsPlatformRoute = createRoute({
  method: 'put',
  path: '/itv/cards/{platform}',
  tags: ['itv'],
  description: 'Change payment card details.',
  operationId: 'changeCardDetails',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of change card details request.',
      content: { 'application/json': { schema: ItvChangeCardDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvCardsPlatformRoute = createRoute({
  method: 'post',
  path: '/itv/cards/{platform}',
  tags: ['itv'],
  description: 'Get payment card details.',
  operationId: 'getCardDetails',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'ITV profile token in body.',
      content: { 'application/json': { schema: ItvGetCardDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ItvCardDetailsSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvChangeemailRoute = createRoute({
  method: 'post',
  path: '/itv/changeemail',
  tags: ['itv'],
  description:
    'Change email address related to account/profile.\n\nThe expected token scope is Settings.\n',
  operationId: 'changeEmail',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'New email address & ITV profile token.',
      content: { 'application/json': { schema: ItvChangeEmailRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const postItvChangemarketingRoute = createRoute({
  method: 'post',
  path: '/itv/changemarketing',
  tags: ['itv'],
  description:
    'Change marketing preferences related to account/profile.\n\nThe expected token scope is Settings.\n',
  operationId: 'changeMarketing',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Updated marketing preferences & ITV profile token.',
      content: { 'application/json': { schema: ItvChangeMarketingRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const postItvDeleteaccountRoute = createRoute({
  method: 'post',
  path: '/itv/deleteaccount',
  tags: ['itv'],
  description: 'Delete account in compliance with GDPR.\n\nThe expected token scope is Settings.\n',
  operationId: 'deleteAccount',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'New email address & ITV profile token.',
      content: { 'application/json': { schema: ItvDeleteAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const getItvEntitlementsCurrentRoute = createRoute({
  method: 'get',
  path: '/itv/entitlements/current',
  tags: ['itv'],
  description: 'Returns current entitlement.',
  operationId: 'getCurrentEntitlement',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Current entitlement.',
      content: { 'application/json': { schema: ItvEntitlementCurrentSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvEntitlementsHistoryRoute = createRoute({
  method: 'get',
  path: '/itv/entitlements/history',
  tags: ['itv'],
  description: 'Returns the state of subscription for any payment platform.',
  operationId: 'getEntitlementsHistory',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Details of current subscription.',
      content: { 'application/json': { schema: ItvEntitlementsHistorySchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvFeatureFlagFeatureRoute = createRoute({
  method: 'get',
  path: '/itv/featureFlag/{feature}',
  tags: ['itv'],
  description:
    'Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.',
  operationId: 'getFeatureFlag',
  request: {
    params: z.object({
      feature: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the feature to check for feature flag.',
            in: 'path',
            name: 'feature',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: ItvFeatureFlagSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postItvGooglepaySubscriptionRoute = createRoute({
  method: 'post',
  path: '/itv/googlepay/subscription',
  tags: ['itv'],
  description: 'Get the list of recommended items under the active profile.',
  operationId: 'googlePaySubscription',
  request: {
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of googlePay subscription request.',
      content: { 'application/json': { schema: ItvGooglePaySubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description:
        'missing purchase token/subscription item in body, or subscription item undefined',
    },
    401: { description: 'Invalid or missing grant' },
    409: { description: 'Purchase token is already attached to a different user' },
    415: { description: 'wrong content-type' },
    500: { description: 'something bad has happened' },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const getItvHadEntitlementsRoute = createRoute({
  method: 'get',
  path: '/itv/had/entitlements',
  tags: ['itv'],
  description: 'Check whether the user has been previously entitled.',
  operationId: 'checkPreviousEntitlements',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ItvHadEntitlementSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvItemsClipsRoute = createRoute({
  method: 'post',
  path: '/itv/items/clips',
  tags: ['content'],
  description: 'Get the media clip files associated with items.\n',
  operationId: 'getItemsMediaClipFiles',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: ItemDownloadableRequestRequestBody,
  },
  responses: {
    200: {
      description: 'The item id with clip files',
      content: { 'application/json': { schema: ItemClipFilesListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postItvItemsDownloadableRoute = createRoute({
  method: 'post',
  path: '/itv/items/downloadable',
  tags: ['content'],
  description: 'Returns the details of an item with the specified id.',
  operationId: 'getItemDownloadables',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: ItemDownloadableRequestRequestBody,
  },
  responses: {
    200: {
      description: 'The item requested',
      content: { 'application/json': { schema: ItemDownloadableListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItvItemsummaryExternalIdRoute = createRoute({
  method: 'get',
  path: '/itv/itemsummary/{externalId}',
  tags: ['itv'],
  description: 'Redirects to corresponding Axis Item details page.',
  request: {
    params: z.object({
      externalId: z
        .string()
        .openapi({
          param: {
            description: 'The external identifier of the item.',
            in: 'path',
            name: 'externalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    302: { description: 'Item found.', content: { 'application/json': { schema: z.object({}) } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItvPageRoute = createRoute({
  method: 'get',
  path: '/itv/page',
  tags: ['app'],
  description:
    'Returns a page with the specified id.\n\nThis is a cut down version for low memory devices.123\n\nIf targeting the search page you must url encode the search term as a parameter\nusing the `q` key. For example if your browser path looks like `/search?q=the`\nthen what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.\n',
  operationId: 'getItvPage',
  request: {
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description: "The path of the page to load, e.g. '/movies'.",
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to load when prefetching and paging each list in the page row.',
            in: 'query',
            name: 'list_page_size',
            schema: { default: 12, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      list_page_size_large: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to load when prefetching a continuous scroll list entry in a page.\n\nBy default any list page entry with template pattern `/^CS\\d+$/` will\nbe considered a continuous scroll list.\n',
            in: 'query',
            name: 'list_page_size_large',
            schema: { default: 50, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_list_prefetch: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(15),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of lists to prefetch in the page.',
            in: 'query',
            name: 'max_list_prefetch',
            schema: { default: 2, format: 'int32', maximum: 15, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      item_detail_expand: z
        .enum(['all', 'children', 'ancestors'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only relevant when loading item detail pages as these embed a detailed item in the main page entry.\n\nIf no value is specified no item dependencies are expanded.\n\nIf 'children' is specified then the list of any direct children will be expanded. For example\nseasons of a show or episodes of a season.\n\nIf 'all' is specified then the parent chain will be expanded along with any child list at each level.\nFor example if an episode is specified then its season will be expanded and that season's episode list.\nThe season will have its show expanded and the show will have its season list expanded.\n\nThe 'all' options is useful when you deep link into a show/season/episode for the first time as\nit provides full context for navigating around the show page. Subsequent navigation around\nchildren of the show should only need to request expand of children.\n\nIf 'ancestors' is specified then only the parent chain is included\n\nIf an expand is specified which is not relevant to the item type, it will be ignored.\n",
            in: 'query',
            name: 'item_detail_expand',
            schema: { enum: ['all', 'children', 'ancestors'], type: 'string' },
            required: false,
          },
        }),
      item_detail_select_season: z
        .enum(['first', 'latest'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only relevant when loading show detail pages as these embed a detailed item in the main page entry.\n\nSince the introduction of the D1,2,3 templates this parameter is now somewhat redundant, or less\nlikely to have any effect. While it may still be useful in some cases, most of the time the season\nselection will be dictated by the configuration of the rows scheduled on the show detail page.\nThis parameter will only take effect if there are rows used to schedule episodes of a season, like\nD1,2,3, or if no rows have a value set for their `seasonOrder` custom field.\n\nGiven a targeted show page, it can be useful to get the details of a child season. This option\nprovides a means to return the `first` or `latest` season of a show embedded in the page.\n\nThe `expand` parameter also works here so for example you could land on a show page and request the\n`item_detail_select_season=latest` along with `item_detail_expand=all`. This would then return the\ndetail of the latest season with its list of child episode summaries, and also expand\nthe detail of the show with its list of seasons summaries.\n',
            in: 'query',
            name: 'item_detail_select_season',
            schema: { enum: ['first', 'latest'], type: 'string' },
            required: false,
          },
        }),
      text_entry_format: z
        .enum(['markdown', 'html'])
        .default('markdown')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only relevant to page entries of type `TextEntry`.\n\nConverts the value of a text page entry to the specified format.\n',
            in: 'query',
            name: 'text_entry_format',
            schema: { default: 'markdown', enum: ['markdown', 'html'], type: 'string' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The page requested.',
      content: { 'application/json': { schema: PageSchema } },
    },
    301: {
      description:
        'Returned if feature flag `cd` is set and item detail is requested of an item that has\nCustom Destination set to an External URL. The `Location` response header contains the URL.\n',
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postItvPinauthorizationRoute = createRoute({
  method: 'post',
  path: '/itv/pinauthorization',
  tags: ['itv'],
  description:
    'Provides authorization with parental control pin.\n\nReturns an array containing account token with Playback scope.\n\nRequires access token with Catalog scope.\n\nPin must be a 4-digit string\n',
  operationId: 'getAccountTokenWithPin',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Details of token request.',
      content: { 'application/json': { schema: ItvPinAuthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccessTokenSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvPlanPlatformRoute = createRoute({
  method: 'post',
  path: '/itv/plan/{platform}',
  tags: ['itv'],
  description: 'Upgrades the plan for the current user.',
  operationId: 'upgradePlan',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the payment platform (stripe/itunes). Only Stripe is supported',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of an upgrade request.',
      content: { 'application/json': { schema: ItvUpgradePlanRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Upgrade succeeded.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvPlansPlatformRoute = createRoute({
  method: 'get',
  path: '/itv/plans/{platform}',
  tags: ['itv'],
  description: 'Returns the plans available for specified payment platform.',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'List of available plans.',
      content: { 'application/json': { schema: ItvPlansSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvProfileRoute = createRoute({
  method: 'get',
  path: '/itv/profile',
  tags: ['itv'],
  description: 'Returns the ITV profile object.',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'The ITV profile object.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const putItvProfileRoute = createRoute({
  method: 'put',
  path: '/itv/profile',
  tags: ['itv'],
  description: 'Update ITV profile.\n\nThe expected token scope is Settings.\n',
  operationId: 'updateProfile',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'ITV profile object with updated values & ITV profile token.',
      content: { 'application/json': { schema: ItvUpdateProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Settings'] }],
})

export const getItvProfileRecommendationListRoute = createRoute({
  method: 'get',
  path: '/itv/profile/recommendation/list',
  tags: ['itv'],
  description: 'Get the list of recommended items under the active profile.',
  operationId: 'getRecommendedList',
  request: {
    query: z.object({
      item_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string().min(1).openapi({ description: 'item type name' })),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of item types to filter the recommendation list',
            example: { item_types: 'show,movie' },
            explode: false,
            in: 'query',
            name: 'item_types',
            schema: {
              items: { description: 'item type name', minLength: 1, type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ profileAuth: ['Catalog'] }],
})

export const postItvProfiletokenRoute = createRoute({
  method: 'post',
  path: '/itv/profiletoken',
  tags: ['itv'],
  description: 'Returns the ITV profile token.',
  operationId: 'getItvProfileToken',
  request: {
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of token request.',
      content: { 'application/json': { schema: ItvProfileTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The ITV profile token.',
      content: { 'application/json': { schema: ItvProfileTokenSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvPurchasePlatformRoute = createRoute({
  method: 'get',
  path: '/itv/purchase/{platform}',
  tags: ['itv'],
  description: 'Returns the details of current subscription for specified payment platform.',
  operationId: 'getCurrentSubscription',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Details of current subscription.',
      content: { 'application/json': { schema: ItvCurrentSubscriptionSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvPurchasePlatformRoute = createRoute({
  method: 'post',
  path: '/itv/purchase/{platform}',
  tags: ['itv'],
  description:
    'Confirms purchase and returns the details of purchased subscription for specified payment platform.',
  operationId: 'confirmPurchase',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a purchase request.',
      content: { 'application/json': { schema: ItvPurchaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Details of purchased subscription.',
      content: { 'application/json': { schema: ItvPurchaseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const deleteItvPurchasePlatformRoute = createRoute({
  method: 'delete',
  path: '/itv/purchase/{platform}',
  tags: ['itv'],
  description:
    'Cancel a plan subscription.\n\nA cancelled subscription will continue to be valid until the subscription\nexpiry date or next renewal date.\n',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a cancellation request.',
      content: { 'application/json': { schema: ItvCancelSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvPurchasePlatformStrongRoute = createRoute({
  method: 'post',
  path: '/itv/purchase/{platform}/strong',
  tags: ['itv'],
  description:
    'Confirms purchase and returns the details of purchased subscription for specified payment platform.',
  operationId: 'confirmPurchaseStrong',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a purchase request.',
      content: { 'application/json': { schema: ItvPurchaseStrongRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Details of purchased subscription.',
      content: { 'application/json': { schema: ItvPurchaseStrongResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvPurchasePlatformWithofferRoute = createRoute({
  method: 'post',
  path: '/itv/purchase/{platform}/withoffer',
  tags: ['itv'],
  description:
    'Confirms purchase and returns the details of purchased subscription for specified payment platform.',
  operationId: 'confirmPurchaseWithOffer',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a purchase request.',
      content: { 'application/json': { schema: ItvPurchaseWithOfferRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Details of purchased subscription.',
      content: { 'application/json': { schema: ItvPurchaseWithOfferResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvResubscribePlatformRoute = createRoute({
  method: 'post',
  path: '/itv/resubscribe/{platform}',
  tags: ['itv'],
  description: 'Resubscription for a user.',
  operationId: 'resubscribe',
  request: {
    query: z.object({
      planId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the plan to renew.',
            in: 'query',
            name: 'planId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lang: LanguageParamsSchema,
    }),
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the payment platform (stripe/itunes). Only stripe is currently supported.',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success. The response body is the updated plan information.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: { description: 'Invalid Rocket token.' },
    404: { description: 'Customer not found or no active subscription.' },
    406: { description: 'Invalid ITV token.' },
    409: { description: 'Customer not already set for cancellation.' },
    500: { description: 'Third party API internal server error.' },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvRokuPlansRoute = createRoute({
  method: 'get',
  path: '/itv/roku/plans',
  tags: ['itv'],
  description: 'Gets available Roku plans.',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Details of available Roku plans.',
      content: { 'application/json': { schema: RokuPlansSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postItvRokuTransactionTransactionidRoute = createRoute({
  method: 'post',
  path: '/itv/roku/transaction/{transactionid}',
  tags: ['itv'],
  description: 'Sends request to execute specified transaction.',
  operationId: 'executeTransaction',
  request: {
    params: z.object({
      transactionid: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the Roku transaction (subscribe/upgrade/downgrade/cancellation).',
            in: 'path',
            name: 'transactionid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of a transaction request.',
      content: { 'application/json': { schema: ItvRokuTransactionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK.' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getItvSaveOfferRoute = createRoute({
  method: 'get',
  path: '/itv/save-offer',
  tags: ['itv'],
  description:
    'Checks the provided coupon id for a user. Only Stripe platform is currently supported.',
  operationId: 'getSaveOffer',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Avalable save offer plan, if any.',
      content: { 'application/json': { schema: ItvGetDiscountResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvSaveOfferRoute = createRoute({
  method: 'post',
  path: '/itv/save-offer',
  tags: ['itv'],
  description: 'Activates the discount for a user. Only Stripe platform is currently supported.',
  operationId: 'activateSaveOffer',
  request: {
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'The coupon id to be checked.',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Authentication  passes, the user has an active subscription and the coupon id is valid. The response body is the updated subscription object.',
    },
    401: {
      description:
        'Unauthorised. In the case of a token this can happen if the token is missing, invalid, or if the token bearer does not match the user in the path.',
    },
    404: {
      description:
        'The customer could not be found.The customer does not have an active subscription. The coupon could not be found.',
    },
    406: { description: 'Invalid Token/Customer Not Eligible for Offer.' },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvSubscriptionFullpricerenewalRoute = createRoute({
  method: 'get',
  path: '/itv/subscription/fullpricerenewal',
  tags: ['itv'],
  description: 'Returns full price renewal state and reason for specific user.',
  operationId: 'getFullPriceRenewal',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'full price renewal state and reason for specific user.',
      content: { 'application/json': { schema: ItvSubscriptionFullPriceRenewalSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvSubscriptionStatusPlatformRoute = createRoute({
  method: 'get',
  path: '/itv/subscription/status/{platform}',
  tags: ['itv'],
  description: 'Returns status of latest payment intent.',
  operationId: 'getSubscriptionStatus',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Status of the latest payment intent',
      content: { 'application/json': { schema: ItvSubscriptionStatusResponseSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvSubscriptionstateRoute = createRoute({
  method: 'get',
  path: '/itv/subscriptionstate',
  tags: ['itv'],
  description: 'Returns the state of subscription for any payment platform.',
  operationId: 'getSubscriptionState',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Details of current subscription.',
      content: { 'application/json': { schema: ItvSubscriptionStateSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvUpcominginvoiceRoute = createRoute({
  method: 'get',
  path: '/itv/upcominginvoice',
  tags: ['itv'],
  description: 'Returns an upcoming invoice',
  operationId: 'getUpcomingInvoice',
  request: { query: z.object({ lang: LanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Avalable save offer plan, if any.',
      content: { 'application/json': { schema: ItvGetDiscountResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const putItvUpdateIntentStrongPlatformRoute = createRoute({
  method: 'put',
  path: '/itv/updateIntent/strong/{platform}',
  tags: ['itv'],
  description: 'Change payment method details.',
  operationId: 'updatePaymentIntentStrong',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the payment platform (stripe only is currently supported).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of change card details request.',
      content: { 'application/json': { schema: ItvUpdateIntentStrongRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ItvUpdateIntentStrongResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const putItvUpdatePaymentStrongPlatformRoute = createRoute({
  method: 'put',
  path: '/itv/updatePayment/strong/{platform}',
  tags: ['itv'],
  description: 'Change payment method details.',
  operationId: 'updatePaymentMethodStrong',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the payment platform (stripe only is currently supported).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Details of change card details request.',
      content: { 'application/json': { schema: ItvUpdatePaymentStrongRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getItvVoucherPlanIdVoucherIdRoute = createRoute({
  method: 'get',
  path: '/itv/voucher/{planId}/{voucherId}',
  tags: ['itv'],
  description:
    'Checks the provided coupon id for a user. Only Stripe platform is currently supported.',
  operationId: 'getVoucherById',
  request: {
    params: z.object({
      voucherId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the voucher.',
            in: 'path',
            name: 'voucherId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      planId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the plan.',
            in: 'path',
            name: 'planId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Avalable voucher, if any.',
      content: { 'application/json': { schema: ItvVoucherSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const postItvVoucherPlatformRoute = createRoute({
  method: 'post',
  path: '/itv/voucher/{platform}',
  tags: ['itv'],
  description: 'Validates the coupon/voucher for specified payment platform.',
  operationId: 'checkVoucher',
  request: {
    params: z.object({
      platform: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the payment platform (stripe/itunes).',
            in: 'path',
            name: 'platform',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ lang: LanguageParamsSchema }),
    body: {
      description: 'Coupon/voucher.',
      content: { 'application/json': { schema: ItvVoucherRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Details of requested coupon/voucher.',
      content: { 'application/json': { schema: ItvVoucherSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ accountAuth: ['Catalog'] }],
})

export const getListsRoute = createRoute({
  method: 'get',
  path: '/lists',
  tags: ['content'],
  description: 'Returns an array of item lists with their first page of content resolved.',
  operationId: 'getLists',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'A comma delimited list of item list identifiers.\n\nThese can be list ids e.g. `14354,65473,3234`\n\nOr more complex sort/filter queries using pipes e.g.\n\n`14354|max_rating=AUOFLC-E|order=asc|order_by=year-added,65473|page_size=30,3234`\n\n_Note the id must always come first for each encoded list query_\n\nList parameters may be provide without the `param=` prefix e.g. `14354|genre:action`\n\nOnly the following options can be present.\n  - `order`\n  - `order_by`\n  - `max_rating`\n  - `page_size`\n  - `item_type`\n  - `param`\n',
            explode: false,
            in: 'query',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: ListOrderParamsSchema,
      order_by: ListOrderByParamsSchema,
      item_type: ItemTypeParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The array of item lists requested.',
      content: { 'application/json': { schema: z.array(ItemListSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getListsIdRoute = createRoute({
  method: 'get',
  path: '/lists/{id}',
  tags: ['content'],
  description: 'Returns a list of items under the specified item list',
  operationId: 'getList',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the list to load.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of items to load. Starts from page 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to return in a page.',
            in: 'query',
            name: 'page_size',
            schema: { default: 12, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: ListOrderParamsSchema,
      order_by: ListOrderByParamsSchema,
      param: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The list parameter in format 'key:value', e.g. 'genre:action'.",
            in: 'query',
            name: 'param',
            schema: { type: 'string' },
            required: false,
          },
        }),
      item_type: ItemTypeParamsSchema,
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of items requested.',
      content: { 'application/json': { schema: ItemListSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getPageRoute = createRoute({
  method: 'get',
  path: '/page',
  tags: ['app'],
  description:
    'Returns a page with the specified id.\n\nIf targeting the search page you must url encode the search term as a parameter\nusing the `q` key. For example if your browser path looks like `/search?q=the`\nthen what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.\n',
  operationId: 'getPage',
  request: {
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description: "The path of the page to load, e.g. '/movies'.",
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to load when prefetching and paging each list in the page row.',
            in: 'query',
            name: 'list_page_size',
            schema: { default: 12, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      list_page_size_large: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items to load when prefetching a continuous scroll list entry in a page.\n\nBy default any list page entry with template pattern `/^CS\\d+$/` will\nbe considered a continuous scroll list.\n',
            in: 'query',
            name: 'list_page_size_large',
            schema: { default: 50, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_list_prefetch: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(15),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of lists to prefetch in the page.',
            in: 'query',
            name: 'max_list_prefetch',
            schema: { default: 2, format: 'int32', maximum: 15, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      item_detail_expand: z
        .enum(['all', 'children', 'ancestors'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only relevant when loading item detail pages as these embed a detailed item in the main page entry.\n\nIf no value is specified no item dependencies are expanded.\n\nIf 'children' is specified then the list of any direct children will be expanded. For example\nseasons of a show or episodes of a season.\n\nIf 'all' is specified then the parent chain will be expanded along with any child list at each level.\nFor example if an episode is specified then its season will be expanded and that season's episode list.\nThe season will have its show expanded and the show will have its season list expanded.\n\nThe 'all' options is useful when you deep link into a show/season/episode for the first time as\nit provides full context for navigating around the show page. Subsequent navigation around\nchildren of the show should only need to request expand of children.\n\nIf 'ancestors' is specified then only the parent chain is included\n\nIf an expand is specified which is not relevant to the item type, it will be ignored.\n",
            in: 'query',
            name: 'item_detail_expand',
            schema: { enum: ['all', 'children', 'ancestors'], type: 'string' },
            required: false,
          },
        }),
      item_detail_select_season: z
        .enum(['first', 'latest'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only relevant when loading show detail pages as these embed a detailed item in the main page entry.\n\nSince the introduction of the D1,2,3 templates this parameter is now somewhat redundant, or less\nlikely to have any effect. While it may still be useful in some cases, most of the time the season\nselection will be dictated by the configuration of the rows scheduled on the show detail page.\nThis parameter will only take effect if there are rows used to schedule episodes of a season, like\nD1,2,3, or if no rows have a value set for their `seasonOrder` custom field.\n\nGiven a targeted show page, it can be useful to get the details of a child season. This option\nprovides a means to return the `first` or `latest` season of a show embedded in the page.\n\nThe `expand` parameter also works here so for example you could land on a show page and request the\n`item_detail_select_season=latest` along with `item_detail_expand=all`. This would then return the\ndetail of the latest season with its list of child episode summaries, and also expand\nthe detail of the show with its list of seasons summaries.\n',
            in: 'query',
            name: 'item_detail_select_season',
            schema: { enum: ['first', 'latest'], type: 'string' },
            required: false,
          },
        }),
      text_entry_format: z
        .enum(['markdown', 'html'])
        .default('markdown')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only relevant to page entries of type `TextEntry`.\n\nConverts the value of a text page entry to the specified format.\n',
            in: 'query',
            name: 'text_entry_format',
            schema: { default: 'markdown', enum: ['markdown', 'html'], type: 'string' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The page requested.',
      content: { 'application/json': { schema: PageSchema } },
    },
    301: {
      description:
        'Returned if feature flag `cd` is set and item detail is requested of an item that has\nCustom Destination set to an External URL. The `Location` response header contains the URL.\n',
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getPlansIdRoute = createRoute({
  method: 'get',
  path: '/plans/{id}',
  tags: ['content'],
  description: 'Returns the details of a Plan with the specified id.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the Plan to load.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The Plan requested.',
      content: { 'application/json': { schema: PlanSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postRegisterRoute = createRoute({
  method: 'post',
  path: '/register',
  tags: ['registration'],
  description:
    'Register a new user, creating them an account.\n\nRegistration, when successful, will return an array of access tokens so the user is\nimmediately signed in.\n\nIt returns Catalog and Commerce scoped tokens for both Account and Profile.\nThe Commerce ones are intended to allow the purchase of a subscription plan\nin the step after registration, without the user being prompted to enter\ntheir username and password again.\n\nAn email will also be sent with a link they need to click to confirm their\nemail address. This confirmation is done via the /verify-email endpoint.\n',
  operationId: 'register',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Registration details.',
      content: { 'application/json': { schema: RegistrationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccessTokenSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postRequestPasswordResetRoute = createRoute({
  method: 'post',
  path: '/request-password-reset',
  tags: ['support'],
  description:
    'Request the password of an account\'s primary profile be reset.\n\nShould be called when a user has forgotten their password.\n\nThis will send an email with a password reset link to the email address of the\nprimary profile of an account.\n\nThe link, once clicked, should take the user to the "reset-password" page of the\nwebsite. Here they will enter their new password and submit to the /reset-password\nendpoint here, along with the password reset token provided in the original link.\n',
  operationId: 'forgotPassword',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'Email address of account to request a password reset on.',
      content: { 'application/json': { schema: PasswordResetEmailRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postResetPasswordRoute = createRoute({
  method: 'post',
  path: '/reset-password',
  tags: ['support'],
  description:
    'When a user requests to reset their password via the /request-password-reset endpoint, an\nemail is sent to the email address of the primary profile of the account. This email contains a link\nwith a reset token as query parameter. The link should take the user to the "reset-password"\npage of the website.\n\nFrom the reset-password page a user should enter the new password they wish to use. \nIt should then be submitted to this endpoint,\nalong with the reset token from the email link. \nThe token should be provided in the body as resetToken property.\n',
  operationId: 'resetPassword',
  request: {
    query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }),
    body: {
      description: 'ITV reset token from email link and a new password.',
      content: { 'application/json': { schema: PasswordResetRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getSamsungPreviewRoute = createRoute({
  method: 'get',
  path: '/samsung-preview',
  tags: ['itv'],
  description:
    "Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.\nThere is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.\n",
  operationId: 'getPublicPreview',
  responses: {
    200: {
      description: 'The samsung public preview requested.',
      content: { 'application/json': { schema: SamsungPreviewSchema } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getSchedulesRoute = createRoute({
  method: 'get',
  path: '/schedules',
  tags: ['content'],
  description:
    "Returns schedules for a defined set of channels over a requested period.\n\nSchedules are requested in hour blocks and returned grouped by the channel\nthey belong to.\n\nFor example, to load 12 hours of schedules for channels `4343` and `5234`,\non 21/2/2017 starting from 08:00.\n\n```\nchannels=4343,5234\ndate=2017-02-21\nhour=8\nduration=12\n```\n\nPlease remember that `date` and `hour` combined represent a normal datetime, \nso they should be converted to UTC on the client - this will help to avoid \nissues with EPG schedules near midnight.\n\nIf a channel id is passed which doesn't exist then this endpoint will\nreturn an empty schedule list for it. If instead we returned 404,\nthis would invalidate all other channel schedules in the same request\nwhich would be unfriendly for clients presenting these channel schedules.\n",
  operationId: 'getSchedules',
  request: {
    query: z.object({
      channels: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The list of channel ids to get schedules for.',
            explode: false,
            in: 'query',
            name: 'channels',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      date: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The date to target in ISO format, e.g. `2017-05-23` (converted to UTC - see main description).\n\nThe base hour requested will belong to this date.\n',
            in: 'query',
            name: 'date',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      hour: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(23),
        )
        .openapi({
          param: {
            description:
              'The base hour in the day, defined by the `date` parameter, you wish to load schedules for \n(converted to UTC - see main description).\n\nFrom 0 to 23, where 0 is midnight.\n',
            in: 'query',
            name: 'hour',
            required: true,
            schema: { format: 'int32', maximum: 23, minimum: 0, type: 'integer' },
          },
        }),
      duration: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(-24).max(24),
        )
        .openapi({
          param: {
            description:
              'The number of hours of schedules to load from the base `hour` parameter.\n\nThis may be negative or positive depending on whether you want to load past or future schedules.\n\nMinimum value is -24, maximum is 24. A value of zero is invalid.\n',
            in: 'query',
            name: 'duration',
            required: true,
            schema: { format: 'int32', maximum: 24, minimum: -24, type: 'integer' },
          },
        }),
      intersect: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag indicating whether schedules should intersect or be contained in the\nprovided interval.\n\nIf set to `true`, the result will contain all schedules where either\nschedule start time or end time touches the provided interval.\n\nIf set to `false`, only schedules fully contained in the given period\nwill be returned.\n',
            in: 'query',
            name: 'intersect',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'An array of schedule lists for each channel requested.\n\nThe order of the channels will match the order of channel ids passed during the request.\n',
      content: { 'application/json': { schema: z.array(ItemScheduleListSchema) } },
    },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['content'],
  description: 'Search the catalog of items and people.',
  operationId: 'search',
  request: {
    query: z.object({
      term: z
        .string()
        .openapi({
          param: {
            description: 'The search term to query.',
            in: 'query',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['tv', 'movies', 'people', 'other'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'By default people, movies and tv (shows + programs) will be included\nin the search results.\n\nIf the `cas` feature flag is set, "other" items (`customAsset`s) will\nalso be included by default\n\nIf you don\'t want all of these types you can specifiy the specific\nincludes you care about.\n',
            explode: false,
            in: 'query',
            name: 'include',
            schema: {
              items: { enum: ['tv', 'movies', 'people', 'other'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      group: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When this option is set, instead of all search result items being returned\nin a single list, they will instead be returned under two lists. One for\nmovies and another for tv (shows + programs).\n\nif the `cas` feature flag is set, a third `other` list will be\nincluded containing `customAsset` results\n\nDefault is undefined meaning items will be returned in a single list.\n\nThe array of `people` results will always be separate from items.\n',
            in: 'query',
            name: 'group',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return.',
            in: 'query',
            name: 'max_results',
            schema: { default: 20, format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      max_rating: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.",
            in: 'query',
            name: 'max_rating',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: DeviceParamsSchema,
      sub: SubscriptionParamsSchema,
      segments: SegmentsParamsSchema,
      ff: FeatureFlagsParamsSchema,
      lang: LanguageParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK.', content: { 'application/json': { schema: SearchResultsSchema } } },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
})

export const postVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/verify-email',
  tags: ['support'],
  description:
    'When an account is created an email is sent to the email address of the new account.\nThis contains a link, which once clicked, verifies the email address of the account is correct.\n\nThe link contains a token as a query parameter which should be passed as the authorization\nbearer token to this endpoint to complete email verification.\n\nThe token has en expiry, so if the link is not clicked before it expires, the account holder\nmay need to request a new verification email be sent. This can be done via the endpoint\n/account/request-email-verification.\n',
  operationId: 'verifyEmail',
  request: { query: z.object({ ff: FeatureFlagsParamsSchema, lang: LanguageParamsSchema }) },
  responses: {
    204: { description: 'OK' },
    400: {
      description: 'Bad request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Invalid access token.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    404: {
      description: 'Not found.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    415: {
      description: 'Unsupported Media Type',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal server error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    default: {
      description: 'Service error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ verifyEmailAuth: [] }],
})
