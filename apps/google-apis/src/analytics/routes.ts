import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .object({
    childLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the list of web properties for this account.' }),
        type: z
          .string()
          .default('analytics#webproperties')
          .exactOptional()
          .openapi({
            description: 'Type of the child link. Its value is "analytics#webproperties".',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Child link for an account entry. Points to the list of web properties for this account.',
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the account was created.' }),
    id: z.string().exactOptional().openapi({ description: 'Account ID.' }),
    kind: z
      .string()
      .default('analytics#account')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics account.' }),
    name: z.string().exactOptional().openapi({ description: 'Account name.' }),
    permissions: z
      .object({
        effective: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW).',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Permissions the user has for this account.', required: [] }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link for this account.' }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this account is starred or not.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the account was last modified.' }),
  })
  .openapi({ description: 'JSON template for Analytics account entry.', required: [] })
  .openapi('Account')

const AccountRefSchema = z
  .object({
    href: z.string().exactOptional().openapi({ description: 'Link for this account.' }),
    id: z.string().exactOptional().openapi({ description: 'Account ID.' }),
    kind: z
      .string()
      .default('analytics#accountRef')
      .exactOptional()
      .openapi({ description: 'Analytics account reference.' }),
    name: z.string().exactOptional().openapi({ description: 'Account name.' }),
  })
  .openapi({ description: 'JSON template for a linked account.', required: [] })
  .openapi('AccountRef')

const ProfileSummarySchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'View (profile) ID.' }),
    kind: z
      .string()
      .default('analytics#profileSummary')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics ProfileSummary.' }),
    name: z.string().exactOptional().openapi({ description: 'View (profile) name.' }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this view (profile) is starred or not.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'View (Profile) type. Supported types: WEB or APP.' }),
  })
  .openapi({
    description:
      'JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.',
    required: [],
  })
  .openapi('ProfileSummary')

const WebPropertySummarySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Web property ID of the form UA-XXXXX-YY.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal ID for this web property.' }),
    kind: z
      .string()
      .default('analytics#webPropertySummary')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics WebPropertySummary.' }),
    level: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Level for this web property. Possible values are STANDARD or PREMIUM.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Web property name.' }),
    profiles: z
      .array(ProfileSummarySchema)
      .exactOptional()
      .openapi({ description: 'List of profiles under this web property.' }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this web property is starred or not.' }),
    websiteUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Website url for this web property.' }),
  })
  .openapi({
    description:
      'JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.',
    required: [],
  })
  .openapi('WebPropertySummary')

const AccountSummarySchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Account ID.' }),
    kind: z
      .string()
      .default('analytics#accountSummary')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics AccountSummary.' }),
    name: z.string().exactOptional().openapi({ description: 'Account name.' }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this account is starred or not.' }),
    webProperties: z
      .array(WebPropertySummarySchema)
      .exactOptional()
      .openapi({ description: 'List of web properties under this account.' }),
  })
  .openapi({
    description:
      'JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.',
    required: [],
  })
  .openapi('AccountSummary')

const AccountSummariesSchema = z
  .object({
    items: z
      .array(AccountSummarySchema)
      .exactOptional()
      .openapi({ description: 'A list of AccountSummaries.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#accountSummaries')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this AccountSummary collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this AccountSummary collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.',
    required: [],
  })
  .openapi('AccountSummaries')

const ProfileSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this view (profile) belongs.' }),
    botFilteringEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether bot filtering is enabled for this view (profile).',
      }),
    childLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the list of goals for this view (profile).' }),
        type: z
          .string()
          .default('analytics#goals')
          .exactOptional()
          .openapi({ description: 'Value is "analytics#goals".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Child link for this view (profile). Points to the list of goals for this view (profile).',
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this view (profile) was created.', readOnly: true }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency type associated with this view (profile), defaults to USD. The supported values are:\nUSD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL',
      }),
    defaultPage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default page for this view (profile).' }),
    eCommerceTracking: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether ecommerce tracking is enabled for this view (profile).',
      }),
    enhancedECommerceTracking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.',
      }),
    excludeQueryParameters: z
      .string()
      .exactOptional()
      .openapi({ description: 'The query parameters that are excluded from this view (profile).' }),
    id: z.string().exactOptional().openapi({ description: 'View (Profile) ID.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Internal ID for the web property to which this view (profile) belongs.',
        readOnly: true,
      }),
    kind: z
      .string()
      .default('analytics#profile')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics view (profile).', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: 'Name of this view (profile).' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Link to the web property to which this view (profile) belongs.',
          }),
        type: z
          .string()
          .default('analytics#webproperty')
          .exactOptional()
          .openapi({ description: 'Value is "analytics#webproperty".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for this view (profile). Points to the web property to which this view (profile) belongs.',
        required: [],
      }),
    permissions: z
      .object({
        effective: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property.',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Permissions the user has for this view (profile).', required: [] }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this view (profile).', readOnly: true }),
    siteSearchCategoryParameters: z
      .string()
      .exactOptional()
      .openapi({ description: 'Site search category parameters for this view (profile).' }),
    siteSearchQueryParameters: z
      .string()
      .exactOptional()
      .openapi({ description: 'The site search query parameters for this view (profile).' }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this view (profile) is starred or not.' }),
    stripSiteSearchCategoryParameters: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not Analytics will strip search category parameters from the URLs in your reports.',
      }),
    stripSiteSearchQueryParameters: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not Analytics will strip search query parameters from the URLs in your reports.',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'View (Profile) type. Supported types: WEB or APP.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this view (profile) was last modified.', readOnly: true }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.',
        readOnly: true,
      }),
    websiteUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Website URL for this view (profile).' }),
  })
  .openapi({ description: 'JSON template for an Analytics view (profile).', required: [] })
  .openapi('Profile')

const WebpropertySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this web property belongs.' }),
    childLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the list of views (profiles) for this web property.' }),
        type: z
          .string()
          .default('analytics#profiles')
          .exactOptional()
          .openapi({ description: 'Type of the parent link. Its value is "analytics#profiles".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Child link for this web property. Points to the list of views (profiles) for this web property.',
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this web property was created.', readOnly: true }),
    dataRetentionResetOnNewActivity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).\nSet to false to delete data associated with the user identifier automatically after the rentention period.\nThis property cannot be set on insert.',
      }),
    dataRetentionTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The length of time for which user and event data is retained.\nThis property cannot be set on insert.',
      }),
    defaultProfileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default view (profile) ID.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Web property ID of the form UA-XXXXX-YY.' }),
    industryVertical: z
      .string()
      .exactOptional()
      .openapi({ description: 'The industry vertical/category selected for this web property.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal ID for this web property.', readOnly: true }),
    kind: z
      .string()
      .default('analytics#webproperty')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics WebProperty.', readOnly: true }),
    level: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Level for this web property. Possible values are STANDARD or PREMIUM.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this web property.' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the account for this web property.' }),
        type: z
          .string()
          .default('analytics#account')
          .exactOptional()
          .openapi({ description: 'Type of the parent link. Its value is "analytics#account".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for this web property. Points to the account to which this web property belongs.',
        required: [],
      }),
    permissions: z
      .object({
        effective: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account.',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Permissions the user has for this web property.', required: [] }),
    profileCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'View (Profile) count for this web property.', readOnly: true }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this web property.', readOnly: true }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether this web property is starred or not.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this web property was last modified.', readOnly: true }),
    websiteUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Website url for this web property.' }),
  })
  .openapi({ description: 'JSON template for an Analytics web property.', required: [] })
  .openapi('Webproperty')

const AccountTicketSchema = z
  .object({
    account: AccountSchema.exactOptional().openapi({ description: 'Account for this ticket.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ticket ID used to access the account ticket.' }),
    kind: z
      .string()
      .default('analytics#accountTicket')
      .exactOptional()
      .openapi({ description: 'Resource type for account ticket.' }),
    profile: ProfileSchema.exactOptional().openapi({
      description: 'View (Profile) for the account.',
    }),
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.',
      }),
    webproperty: WebpropertySchema.exactOptional().openapi({
      description: 'Web property for the account.',
    }),
  })
  .openapi({
    description:
      'JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.',
    required: [],
  })
  .openapi('AccountTicket')

const AccountTreeRequestSchema = z
  .object({
    accountName: z.string().exactOptional(),
    kind: z
      .string()
      .default('analytics#accountTreeRequest')
      .exactOptional()
      .openapi({ description: 'Resource type for account ticket.' }),
    profileName: z.string().exactOptional(),
    timezone: z.string().exactOptional(),
    webpropertyName: z.string().exactOptional(),
    websiteUrl: z.string().exactOptional(),
  })
  .openapi({
    description:
      'JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.',
    required: [],
  })
  .openapi('AccountTreeRequest')

const AccountTreeResponseSchema = z
  .object({
    account: AccountSchema.exactOptional().openapi({ description: 'The account created.' }),
    kind: z
      .string()
      .default('analytics#accountTreeResponse')
      .exactOptional()
      .openapi({ description: 'Resource type for account ticket.' }),
    profile: ProfileSchema.exactOptional().openapi({
      description: 'View (Profile) for the account.',
    }),
    webproperty: WebpropertySchema.exactOptional().openapi({
      description: 'Web property for the account.',
    }),
  })
  .openapi({
    description:
      'JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).',
    required: [],
  })
  .openapi('AccountTreeResponse')

const AccountsSchema = z
  .object({
    items: z.array(AccountSchema).exactOptional().openapi({ description: 'A list of accounts.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#accounts')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Next link for this account collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Previous link for this account collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.',
    required: [],
  })
  .openapi('Accounts')

const AdWordsAccountSchema = z
  .object({
    autoTaggingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation.',
      }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Customer ID. This field is required when creating a Google Ads link.',
      }),
    kind: z
      .string()
      .default('analytics#adWordsAccount')
      .exactOptional()
      .openapi({ description: 'Resource type for Google Ads account.' }),
  })
  .openapi({ description: 'JSON template for an Google Ads account.', required: [] })
  .openapi('AdWordsAccount')

const AnalyticsDataimportDeleteUploadDataRequestSchema = z
  .object({
    customDataImportUids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of upload UIDs.' }),
  })
  .openapi({ description: 'Request template for the delete upload data request.', required: [] })
  .openapi('AnalyticsDataimportDeleteUploadDataRequest')

const ColumnSchema = z
  .object({
    attributes: z
      .record(z.string(), z.string().openapi({ description: 'The name of the attribute.' }))
      .exactOptional()
      .openapi({ description: 'Map of attribute name and value for this column.' }),
    id: z.string().exactOptional().openapi({ description: 'Column id.' }),
    kind: z
      .string()
      .default('analytics#column')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics column.' }),
  })
  .openapi({ description: 'JSON template for a metadata column.', required: [] })
  .openapi('Column')

const ColumnsSchema = z
  .object({
    attributeNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of attributes names returned by columns.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Etag of collection. This etag can be compared with the last response etag to check if response has changed.',
      }),
    items: z
      .array(ColumnSchema)
      .exactOptional()
      .openapi({ description: 'List of columns for a report type.' }),
    kind: z
      .string()
      .default('analytics#columns')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of columns returned in the response.' }),
  })
  .openapi({
    description: 'Lists columns (dimensions and metrics) for a particular report type.',
    required: [],
  })
  .openapi('Columns')

const CustomDataSourceSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this custom data source belongs.' }),
    childLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Value is "analytics#dailyUploads". Value is "analytics#uploads".',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this custom data source was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of custom data source.' }),
    id: z.string().exactOptional().openapi({ description: 'Custom data source ID.' }),
    importBehavior: z.string().exactOptional(),
    kind: z
      .string()
      .default('analytics#customDataSource')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics custom data source.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this custom data source.' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Link to the web property to which this custom data source belongs.',
          }),
        type: z
          .string()
          .default('analytics#webproperty')
          .exactOptional()
          .openapi({ description: 'Value is "analytics#webproperty".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for this custom data source. Points to the web property to which this custom data source belongs.',
        required: [],
      }),
    profilesLinked: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of views (profiles) linked to the custom data source.' }),
    schema: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Collection of schema headers of the custom data source.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this Analytics custom data source.' }),
    type: z.string().exactOptional().openapi({ description: 'Type of the custom data source.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this custom data source was last modified.' }),
    uploadType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Upload type of the custom data source.' }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.',
      }),
  })
  .openapi({ description: 'JSON template for an Analytics custom data source.', required: [] })
  .openapi('CustomDataSource')

const CustomDataSourcesSchema = z
  .object({
    items: z
      .array(CustomDataSourceSchema)
      .exactOptional()
      .openapi({ description: 'Collection of custom data sources.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#customDataSources')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this custom data source collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this custom data source collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.',
    required: [],
  })
  .openapi('CustomDataSources')

const CustomDimensionSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Account ID.' }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether the custom dimension is active.' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the custom dimension was created.', readOnly: true }),
    id: z.string().exactOptional().openapi({ description: 'Custom dimension ID.' }),
    index: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the custom dimension.', readOnly: true }),
    kind: z
      .string()
      .default('analytics#customDimension')
      .exactOptional()
      .openapi({
        description:
          'Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the custom dimension.' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the property to which the custom dimension belongs.' }),
        type: z
          .string()
          .default('analytics#webproperty')
          .exactOptional()
          .openapi({ description: 'Type of the parent link. Set to "analytics#webproperty".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for the custom dimension. Points to the property to which the custom dimension belongs.',
        required: [],
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for the custom dimension', readOnly: true }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the custom dimension was last modified.', readOnly: true }),
    webPropertyId: z.string().exactOptional().openapi({ description: 'Property ID.' }),
  })
  .openapi({ description: 'JSON template for Analytics Custom Dimension.', required: [] })
  .openapi('CustomDimension')

const CustomDimensionsSchema = z
  .object({
    items: z
      .array(CustomDimensionSchema)
      .exactOptional()
      .openapi({ description: 'Collection of custom dimensions.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#customDimensions')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this custom dimension collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this custom dimension collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.',
    required: [],
  })
  .openapi('CustomDimensions')

const CustomMetricSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Account ID.' }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether the custom metric is active.' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the custom metric was created.', readOnly: true }),
    id: z.string().exactOptional().openapi({ description: 'Custom metric ID.' }),
    index: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the custom metric.', readOnly: true }),
    kind: z
      .string()
      .default('analytics#customMetric')
      .exactOptional()
      .openapi({
        description:
          'Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.',
        readOnly: true,
      }),
    max_value: z.string().exactOptional().openapi({ description: 'Max value of custom metric.' }),
    min_value: z.string().exactOptional().openapi({ description: 'Min value of custom metric.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the custom metric.' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the property to which the custom metric belongs.' }),
        type: z
          .string()
          .default('analytics#webproperty')
          .exactOptional()
          .openapi({ description: 'Type of the parent link. Set to "analytics#webproperty".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for the custom metric. Points to the property to which the custom metric belongs.',
        required: [],
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'Scope of the custom metric: HIT or PRODUCT.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for the custom metric', readOnly: true }),
    type: z.string().exactOptional().openapi({ description: 'Data type of custom metric.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the custom metric was last modified.', readOnly: true }),
    webPropertyId: z.string().exactOptional().openapi({ description: 'Property ID.' }),
  })
  .openapi({ description: 'JSON template for Analytics Custom Metric.', required: [] })
  .openapi('CustomMetric')

const CustomMetricsSchema = z
  .object({
    items: z
      .array(CustomMetricSchema)
      .exactOptional()
      .openapi({ description: 'Collection of custom metrics.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#customMetrics')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this custom metric collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this custom metric collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.',
    required: [],
  })
  .openapi('CustomMetrics')

const WebPropertyRefSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this web property belongs.' }),
    href: z.string().exactOptional().openapi({ description: 'Link for this web property.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Web property ID of the form UA-XXXXX-YY.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal ID for this web property.' }),
    kind: z
      .string()
      .default('analytics#webPropertyRef')
      .exactOptional()
      .openapi({ description: 'Analytics web property reference.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this web property.' }),
  })
  .openapi({ description: 'JSON template for a web property reference.', required: [] })
  .openapi('WebPropertyRef')

const EntityAdWordsLinkSchema = z
  .object({
    adWordsAccounts: z
      .array(AdWordsAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.',
      }),
    entity: z
      .object({ webPropertyRef: WebPropertyRefSchema.exactOptional() })
      .exactOptional()
      .openapi({ description: 'Web property being linked.', required: [] }),
    id: z.string().exactOptional().openapi({ description: 'Entity Google Ads link ID' }),
    kind: z
      .string()
      .default('analytics#entityAdWordsLink')
      .exactOptional()
      .openapi({ description: 'Resource type for entity Google Ads link.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the link. This field is required when creating a Google Ads link.',
      }),
    profileIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of linked Views (Profiles) represented as strings.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL link for this Google Analytics - Google Ads link.' }),
  })
  .openapi({ description: 'JSON template for Analytics Entity Google Ads Link.', required: [] })
  .openapi('EntityAdWordsLink')

const EntityAdWordsLinksSchema = z
  .object({
    items: z
      .array(EntityAdWordsLinkSchema)
      .exactOptional()
      .openapi({ description: 'A list of entity Google Ads links.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#entityAdWordsLinks')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Next link for this Google Ads link collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Previous link for this Google Ads link collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
  })
  .openapi({
    description:
      'An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.',
    required: [],
  })
  .openapi('EntityAdWordsLinks')

const ProfileRefSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this view (profile) belongs.' }),
    href: z.string().exactOptional().openapi({ description: 'Link for this view (profile).' }),
    id: z.string().exactOptional().openapi({ description: 'View (Profile) ID.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Internal ID for the web property to which this view (profile) belongs.',
      }),
    kind: z
      .string()
      .default('analytics#profileRef')
      .exactOptional()
      .openapi({ description: 'Analytics view (profile) reference.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this view (profile).' }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.',
      }),
  })
  .openapi({ description: 'JSON template for a linked view (profile).', required: [] })
  .openapi('ProfileRef')

const UserRefSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Email ID of this user.' }),
    id: z.string().exactOptional().openapi({ description: 'User ID.' }),
    kind: z.string().default('analytics#userRef').exactOptional(),
  })
  .openapi({ description: 'JSON template for a user reference.', required: [] })
  .openapi('UserRef')

const EntityUserLinkSchema = z
  .object({
    entity: z
      .object({
        accountRef: AccountRefSchema.exactOptional().openapi({
          description: 'Account for this link.',
        }),
        profileRef: ProfileRefSchema.exactOptional().openapi({
          description: 'View (Profile) for this link.',
        }),
        webPropertyRef: WebPropertyRefSchema.exactOptional().openapi({
          description: 'Web property for this link.',
        }),
      })
      .exactOptional()
      .openapi({
        description:
          'Entity for this link. It can be an account, a web property, or a view (profile).',
        required: [],
      }),
    id: z.string().exactOptional().openapi({ description: 'Entity user link ID' }),
    kind: z
      .string()
      .default('analytics#entityUserLink')
      .exactOptional()
      .openapi({ description: 'Resource type for entity user link.' }),
    permissions: z
      .object({
        effective: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only.',
            readOnly: true,
          }),
        local: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Permissions the user has for this entity.', required: [] }),
    selfLink: z.string().exactOptional().openapi({ description: 'Self link for this resource.' }),
    userRef: UserRefSchema.exactOptional().openapi({ description: 'User reference.' }),
  })
  .openapi({
    description:
      'JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.',
    required: [],
  })
  .openapi('EntityUserLink')

const EntityUserLinksSchema = z
  .object({
    items: z
      .array(EntityUserLinkSchema)
      .exactOptional()
      .openapi({ description: 'A list of entity user links.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#entityUserLinks')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Next link for this account collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Previous link for this account collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
  })
  .openapi({
    description:
      'An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.',
    required: [],
  })
  .openapi('EntityUserLinks')

const ExperimentSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Account ID to which this experiment belongs. This field is read-only.',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the experiment was created. This field is read-only.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Notes about this experiment.' }),
    editableInGaUi: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the end user will be able to edit the experiment via the Google Analytics user interface.',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.',
      }),
    equalWeighting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Experiment ID. Required for patch and update. Disallowed for create.',
      }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Internal ID for the web property to which this experiment belongs. This field is read-only.',
      }),
    kind: z
      .string()
      .default('analytics#experiment')
      .exactOptional()
      .openapi({
        description: 'Resource type for an Analytics experiment. This field is read-only.',
      }),
    minimumExperimentLengthInDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.',
      }),
    objectiveMetric: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".',
      }),
    optimizationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".',
      }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Link to the view (profile) to which this experiment belongs. This field is read-only.',
          }),
        type: z
          .string()
          .default('analytics#profile')
          .exactOptional()
          .openapi({ description: 'Value is "analytics#profile". This field is read-only.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for an experiment. Points to the view (profile) to which this experiment belongs.',
        required: [],
      }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'View (Profile) ID to which this experiment belongs. This field is read-only.',
      }),
    reasonExperimentEnded: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn\'t expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.',
      }),
    rewriteVariationUrlsAsOriginal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this experiment. This field is read-only.' }),
    servingFramework: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The framework used to serve the experiment variations and evaluate the results. One of:  \n- REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.\n- API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.\n- EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.',
      }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The snippet of code to include on the control page(s). This field is read-only.',
      }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.',
      }),
    trafficCoverage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.',
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the experiment was last modified. This field is read-only.' }),
    variations: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.',
              }),
            status: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.',
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.',
              }),
            weight: z
              .float64()
              .exactOptional()
              .openapi({
                description:
                  'Weight that this variation should receive. Only present if the experiment is running. This field is read-only.',
              }),
            won: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.',
      }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.',
      }),
    winnerConfidenceLevel: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.',
      }),
    winnerFound: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean specifying whether a winner has been found for this experiment. This field is read-only.',
      }),
  })
  .openapi({ description: 'JSON template for Analytics experiment resource.', required: [] })
  .openapi('Experiment')

const ExperimentsSchema = z
  .object({
    items: z
      .array(ExperimentSchema)
      .exactOptional()
      .openapi({ description: 'A list of experiments.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#experiments')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this experiment collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this experiment collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of resources in the result.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.',
    required: [],
  })
  .openapi('Experiments')

const FilterExpressionSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if the filter is case sensitive.' }),
    expressionValue: z.string().exactOptional().openapi({ description: 'Filter expression value' }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Field to filter. Possible values:  \n- Content and Traffic  \n- PAGE_REQUEST_URI, \n- PAGE_HOSTNAME, \n- PAGE_TITLE, \n- REFERRAL, \n- COST_DATA_URI (Campaign target URL), \n- HIT_TYPE, \n- INTERNAL_SEARCH_TERM, \n- INTERNAL_SEARCH_TYPE, \n- SOURCE_PROPERTY_TRACKING_ID,   \n- Campaign or AdGroup  \n- CAMPAIGN_SOURCE, \n- CAMPAIGN_MEDIUM, \n- CAMPAIGN_NAME, \n- CAMPAIGN_AD_GROUP, \n- CAMPAIGN_TERM, \n- CAMPAIGN_CONTENT, \n- CAMPAIGN_CODE, \n- CAMPAIGN_REFERRAL_PATH,   \n- E-Commerce  \n- TRANSACTION_COUNTRY, \n- TRANSACTION_REGION, \n- TRANSACTION_CITY, \n- TRANSACTION_AFFILIATION (Store or order location), \n- ITEM_NAME, \n- ITEM_CODE, \n- ITEM_VARIATION, \n- TRANSACTION_ID, \n- TRANSACTION_CURRENCY_CODE, \n- PRODUCT_ACTION_TYPE,   \n- Audience/Users  \n- BROWSER, \n- BROWSER_VERSION, \n- BROWSER_SIZE, \n- PLATFORM, \n- PLATFORM_VERSION, \n- LANGUAGE, \n- SCREEN_RESOLUTION, \n- SCREEN_COLORS, \n- JAVA_ENABLED (Boolean Field), \n- FLASH_VERSION, \n- GEO_SPEED (Connection speed), \n- VISITOR_TYPE, \n- GEO_ORGANIZATION (ISP organization), \n- GEO_DOMAIN, \n- GEO_IP_ADDRESS, \n- GEO_IP_VERSION,   \n- Location  \n- GEO_COUNTRY, \n- GEO_REGION, \n- GEO_CITY,   \n- Event  \n- EVENT_CATEGORY, \n- EVENT_ACTION, \n- EVENT_LABEL,   \n- Other  \n- CUSTOM_FIELD_1, \n- CUSTOM_FIELD_2, \n- USER_DEFINED_VALUE,   \n- Application  \n- APP_ID, \n- APP_INSTALLER_ID, \n- APP_NAME, \n- APP_VERSION, \n- SCREEN, \n- IS_APP (Boolean Field), \n- IS_FATAL_EXCEPTION (Boolean Field), \n- EXCEPTION_DESCRIPTION,   \n- Mobile device  \n- IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile), \n- IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet), \n- DEVICE_CATEGORY, \n- MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field), \n- MOBILE_HAS_NFC_SUPPORT (Boolean Field), \n- MOBILE_HAS_CELLULAR_RADIO (Boolean Field), \n- MOBILE_HAS_WIFI_SUPPORT (Boolean Field), \n- MOBILE_BRAND_NAME, \n- MOBILE_MODEL_NAME, \n- MOBILE_MARKETING_NAME, \n- MOBILE_POINTING_METHOD,   \n- Social  \n- SOCIAL_NETWORK, \n- SOCIAL_ACTION, \n- SOCIAL_ACTION_TARGET,   \n- Custom dimension  \n- CUSTOM_DIMENSION (See accompanying field index),',
      }),
    fieldIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.',
      }),
    kind: z
      .string()
      .default('analytics#filterExpression')
      .exactOptional()
      .openapi({ description: 'Kind value for filter expression' }),
    matchType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.',
      }),
  })
  .openapi({ description: 'JSON template for an Analytics filter expression.', required: [] })
  .openapi('FilterExpression')

const FilterSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this filter belongs.' }),
    advancedDetails: z
      .object({
        caseSensitive: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if the filter expressions are case sensitive.' }),
        extractA: z
          .string()
          .exactOptional()
          .openapi({ description: 'Expression to extract from field A.' }),
        extractB: z
          .string()
          .exactOptional()
          .openapi({ description: 'Expression to extract from field B.' }),
        fieldA: z.string().exactOptional().openapi({ description: 'Field A.' }),
        fieldAIndex: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.',
          }),
        fieldARequired: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if field A is required to match.' }),
        fieldB: z.string().exactOptional().openapi({ description: 'Field B.' }),
        fieldBIndex: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.',
          }),
        fieldBRequired: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if field B is required to match.' }),
        outputConstructor: z
          .string()
          .exactOptional()
          .openapi({ description: 'Expression used to construct the output value.' }),
        outputToField: z.string().exactOptional().openapi({ description: 'Output field.' }),
        outputToFieldIndex: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.',
          }),
        overrideOutputField: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates if the existing value of the output field, if any, should be overridden by the output expression.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details for the filter of the type ADVANCED.', required: [] }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this filter was created.', readOnly: true }),
    excludeDetails: FilterExpressionSchema.exactOptional().openapi({
      description: 'Details for the filter of the type EXCLUDE.',
    }),
    id: z.string().exactOptional().openapi({ description: 'Filter ID.' }),
    includeDetails: FilterExpressionSchema.exactOptional().openapi({
      description: 'Details for the filter of the type INCLUDE.',
    }),
    kind: z
      .string()
      .default('analytics#filter')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics filter.', readOnly: true }),
    lowercaseDetails: z
      .object({
        field: z.string().exactOptional().openapi({ description: 'Field to use in the filter.' }),
        fieldIndex: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details for the filter of the type LOWER.', required: [] }),
    name: z.string().exactOptional().openapi({ description: 'Name of this filter.' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the account to which this filter belongs.' }),
        type: z
          .string()
          .default('analytics#account')
          .exactOptional()
          .openapi({ description: 'Value is "analytics#account".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for this filter. Points to the account to which this filter belongs.',
        required: [],
      }),
    searchAndReplaceDetails: z
      .object({
        caseSensitive: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines if the filter is case sensitive.' }),
        field: z.string().exactOptional().openapi({ description: 'Field to use in the filter.' }),
        fieldIndex: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.',
          }),
        replaceString: z
          .string()
          .exactOptional()
          .openapi({ description: 'Term to replace the search term with.' }),
        searchString: z.string().exactOptional().openapi({ description: 'Term to search.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Details for the filter of the type SEARCH_AND_REPLACE.',
        required: [],
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this filter.', readOnly: true }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.',
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this filter was last modified.', readOnly: true }),
    uppercaseDetails: z
      .object({
        field: z.string().exactOptional().openapi({ description: 'Field to use in the filter.' }),
        fieldIndex: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details for the filter of the type UPPER.', required: [] }),
  })
  .openapi({ description: 'JSON template for an Analytics account filter.', required: [] })
  .openapi('Filter')

const FilterRefSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this filter belongs.', readOnly: true }),
    href: z.string().exactOptional().openapi({ description: 'Link for this filter.' }),
    id: z.string().exactOptional().openapi({ description: 'Filter ID.' }),
    kind: z
      .string()
      .default('analytics#filterRef')
      .exactOptional()
      .openapi({ description: 'Kind value for filter reference.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of this filter.', readOnly: true }),
  })
  .openapi({ description: 'JSON template for a profile filter link.', required: [] })
  .openapi('FilterRef')

const FiltersSchema = z
  .object({
    items: z.array(FilterSchema).exactOptional().openapi({ description: 'A list of filters.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#filters')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this filter collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this filter collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.',
    required: [],
  })
  .openapi('Filters')

const GaDataSchema = z
  .object({
    columnHeaders: z
      .array(
        z
          .object({
            columnType: z
              .string()
              .exactOptional()
              .openapi({ description: 'Column Type. Either DIMENSION or METRIC.' }),
            dataType: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.',
              }),
            name: z.string().exactOptional().openapi({ description: 'Column name.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.',
      }),
    containsSampledData: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if Analytics data contains samples.' }),
    dataLastRefreshed: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last refreshed time in seconds for Analytics data.' }),
    dataTable: z
      .object({
        cols: z
          .array(
            z
              .object({
                id: z.string().exactOptional(),
                label: z.string().exactOptional(),
                type: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        rows: z
          .array(
            z
              .object({
                c: z
                  .array(z.object({ v: z.string().exactOptional() }).openapi({ required: [] }))
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.string().exactOptional().openapi({ description: 'Unique ID for this data response.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#gaData')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this Analytics data query.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this Analytics data query.' }),
    profileInfo: z
      .object({
        accountId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Account ID to which this view (profile) belongs.' }),
        internalWebPropertyId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Internal ID for the web property to which this view (profile) belongs.',
          }),
        profileId: z.string().exactOptional().openapi({ description: 'View (Profile) ID.' }),
        profileName: z.string().exactOptional().openapi({ description: 'View (Profile) name.' }),
        tableId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Table ID for view (profile).' }),
        webPropertyId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Web Property ID to which this view (profile) belongs.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information for the view (profile), for which the Analytics data was requested.',
        required: [],
      }),
    query: z
      .object({
        dimensions: z
          .string()
          .exactOptional()
          .openapi({ description: 'List of analytics dimensions.' }),
        'end-date': z.string().exactOptional().openapi({ description: 'End date.' }),
        filters: z
          .string()
          .exactOptional()
          .openapi({ description: 'Comma-separated list of dimension or metric filters.' }),
        ids: z.string().exactOptional().openapi({ description: 'Unique table ID.' }),
        'max-results': z
          .int32()
          .exactOptional()
          .openapi({ description: 'Maximum results per page.' }),
        metrics: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of analytics metrics.' }),
        samplingLevel: z
          .string()
          .exactOptional()
          .openapi({ description: 'Desired sampling level' }),
        segment: z.string().exactOptional().openapi({ description: 'Analytics advanced segment.' }),
        sort: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'List of dimensions or metrics based on which Analytics data is sorted.',
          }),
        'start-date': z.string().exactOptional().openapi({ description: 'Start date.' }),
        'start-index': z.int32().exactOptional().openapi({ description: 'Start index.' }),
      })
      .exactOptional()
      .openapi({ description: 'Analytics data request query parameters.', required: [] }),
    rows: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.',
      }),
    sampleSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of samples used to calculate the result.' }),
    sampleSpace: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total size of the sample space from which the samples were selected.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link to this page.' }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows for the query, regardless of the number of rows in the response.',
      }),
    totalsForAllResults: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              'Key-value pair for the total value of a metric. Key is the metric name and the value is the total value for that metric.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.',
      }),
  })
  .openapi({ description: 'Analytics data for a given view (profile).', required: [] })
  .openapi('GaData')

const GoalSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this goal belongs.' }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines whether this goal is active.' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this goal was created.' }),
    eventDetails: z
      .object({
        eventConditions: z
          .array(
            z
              .object({
                comparisonType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.',
                  }),
                comparisonValue: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Value used for this comparison.' }),
                expression: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Expression used for this match.' }),
                matchType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.',
                  }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of event conditions.' }),
        useEventValue: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Determines if the event value should be used as the value for this goal.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details for the goal of the type EVENT.', required: [] }),
    id: z.string().exactOptional().openapi({ description: 'Goal ID.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal ID for the web property to which this goal belongs.' }),
    kind: z
      .string()
      .default('analytics#goal')
      .exactOptional()
      .openapi({ description: 'Resource type for an Analytics goal.' }),
    name: z.string().exactOptional().openapi({ description: 'Goal name.' }),
    parentLink: z
      .object({
        href: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to the view (profile) to which this goal belongs.' }),
        type: z
          .string()
          .default('analytics#profile')
          .exactOptional()
          .openapi({ description: 'Value is "analytics#profile".' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parent link for a goal. Points to the view (profile) to which this goal belongs.',
        required: [],
      }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'View (Profile) ID to which this goal belongs.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link for this goal.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.',
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this goal was last modified.' }),
    urlDestinationDetails: z
      .object({
        caseSensitive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Determines if the goal URL must exactly match the capitalization of visited URLs.',
          }),
        firstStepRequired: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines if the first step in this goal is required.' }),
        matchType: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.',
          }),
        steps: z
          .array(
            z
              .object({
                name: z.string().exactOptional().openapi({ description: 'Step name.' }),
                number: z.int32().exactOptional().openapi({ description: 'Step number.' }),
                url: z.string().exactOptional().openapi({ description: 'URL for this step.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of steps configured for this goal funnel.' }),
        url: z.string().exactOptional().openapi({ description: 'URL for this goal.' }),
      })
      .exactOptional()
      .openapi({ description: 'Details for the goal of the type URL_DESTINATION.', required: [] }),
    value: z.float32().exactOptional().openapi({ description: 'Goal value.' }),
    visitNumPagesDetails: z
      .object({
        comparisonType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.',
          }),
        comparisonValue: z
          .string()
          .exactOptional()
          .openapi({ description: 'Value used for this comparison.' }),
      })
      .exactOptional()
      .openapi({ description: 'Details for the goal of the type VISIT_NUM_PAGES.', required: [] }),
    visitTimeOnSiteDetails: z
      .object({
        comparisonType: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Type of comparison. Possible values are LESS_THAN or GREATER_THAN.',
          }),
        comparisonValue: z
          .string()
          .exactOptional()
          .openapi({ description: 'Value used for this comparison.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Details for the goal of the type VISIT_TIME_ON_SITE.',
        required: [],
      }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.',
      }),
  })
  .openapi({ description: 'JSON template for Analytics goal resource.', required: [] })
  .openapi('Goal')

const GoalsSchema = z
  .object({
    items: z.array(GoalSchema).exactOptional().openapi({ description: 'A list of goals.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#goals')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this goal collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this goal collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of resources in the result.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.',
    required: [],
  })
  .openapi('Goals')

const HashClientIdRequestSchema = z
  .object({
    clientId: z.string().exactOptional(),
    kind: z.string().default('analytics#hashClientIdRequest').exactOptional(),
    webPropertyId: z.string().exactOptional(),
  })
  .openapi({ description: 'JSON template for a hash Client Id request resource.', required: [] })
  .openapi('HashClientIdRequest')

const HashClientIdResponseSchema = z
  .object({
    clientId: z.string().exactOptional(),
    hashedClientId: z.string().exactOptional(),
    kind: z.string().default('analytics#hashClientIdResponse').exactOptional(),
    webPropertyId: z.string().exactOptional(),
  })
  .openapi({ description: 'JSON template for a hash Client Id response resource.', required: [] })
  .openapi('HashClientIdResponse')

const IncludeConditionsSchema = z
  .object({
    daysToLookBack: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.',
      }),
    isSmartList: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577',
      }),
    kind: z
      .string()
      .default('analytics#includeConditions')
      .exactOptional()
      .openapi({ description: 'Resource type for include conditions.' }),
    membershipDurationDays: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of days (in the range 1 to 540) a user remains in the audience.',
      }),
    segment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The segment condition that will cause a user to be added to an audience.',
      }),
  })
  .openapi({
    description: 'JSON template for an Analytics Remarketing Include Conditions.',
    required: [],
  })
  .openapi('IncludeConditions')

const LinkedForeignAccountSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this linked foreign account belongs.' }),
    eligibleForSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating whether this is eligible for search.',
        readOnly: true,
      }),
    id: z.string().exactOptional().openapi({ description: 'Entity ad account link ID.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Internal ID for the web property to which this linked foreign account belongs.',
        readOnly: true,
      }),
    kind: z
      .string()
      .default('analytics#linkedForeignAccount')
      .exactOptional()
      .openapi({ description: 'Resource type for linked foreign account.' }),
    linkedAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.',
      }),
    remarketingAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Remarketing audience ID to which this linked foreign account belongs.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of this foreign account link.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.',
      }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.',
      }),
  })
  .openapi({
    description: 'JSON template for an Analytics Remarketing Audience Foreign Link.',
    required: [],
  })
  .openapi('LinkedForeignAccount')

const McfDataSchema = z
  .object({
    columnHeaders: z
      .array(
        z
          .object({
            columnType: z
              .string()
              .exactOptional()
              .openapi({ description: 'Column Type. Either DIMENSION or METRIC.' }),
            dataType: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc.',
              }),
            name: z.string().exactOptional().openapi({ description: 'Column name.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.',
      }),
    containsSampledData: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if the Analytics data contains sampled data.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique ID for this data response.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#mcfData')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this Analytics data query.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this Analytics data query.' }),
    profileInfo: z
      .object({
        accountId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Account ID to which this view (profile) belongs.' }),
        internalWebPropertyId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Internal ID for the web property to which this view (profile) belongs.',
          }),
        profileId: z.string().exactOptional().openapi({ description: 'View (Profile) ID.' }),
        profileName: z.string().exactOptional().openapi({ description: 'View (Profile) name.' }),
        tableId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Table ID for view (profile).' }),
        webPropertyId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Web Property ID to which this view (profile) belongs.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information for the view (profile), for which the Analytics data was requested.',
        required: [],
      }),
    query: z
      .object({
        dimensions: z
          .string()
          .exactOptional()
          .openapi({ description: 'List of analytics dimensions.' }),
        'end-date': z.string().exactOptional().openapi({ description: 'End date.' }),
        filters: z
          .string()
          .exactOptional()
          .openapi({ description: 'Comma-separated list of dimension or metric filters.' }),
        ids: z.string().exactOptional().openapi({ description: 'Unique table ID.' }),
        'max-results': z
          .int32()
          .exactOptional()
          .openapi({ description: 'Maximum results per page.' }),
        metrics: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of analytics metrics.' }),
        samplingLevel: z
          .string()
          .exactOptional()
          .openapi({ description: 'Desired sampling level' }),
        segment: z.string().exactOptional().openapi({ description: 'Analytics advanced segment.' }),
        sort: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'List of dimensions or metrics based on which Analytics data is sorted.',
          }),
        'start-date': z.string().exactOptional().openapi({ description: 'Start date.' }),
        'start-index': z.int32().exactOptional().openapi({ description: 'Start index.' }),
      })
      .exactOptional()
      .openapi({ description: 'Analytics data request query parameters.', required: [] }),
    rows: z
      .array(
        z.array(
          z
            .object({
              conversionPathValue: z
                .array(
                  z
                    .object({
                      interactionType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Type of an interaction on conversion path. Such as CLICK, IMPRESSION etc.',
                        }),
                      nodeValue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Node value of an interaction on conversion path. Such as source, medium etc.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A conversion path dimension value, containing a list of interactions with their attributes.',
                }),
              primitiveValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'A primitive dimension value. A primitive metric value.' }),
            })
            .openapi({
              description:
                'A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.',
              required: [],
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.',
      }),
    sampleSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of samples used to calculate the result.' }),
    sampleSpace: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total size of the sample space from which the samples were selected.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link to this page.' }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows for the query, regardless of the number of rows in the response.',
      }),
    totalsForAllResults: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              'Key-value pair for the total value of a metric. Key is the metric name and the value is the total value for that metric.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.',
      }),
  })
  .openapi({ description: 'Multi-Channel Funnels data for a given view (profile).', required: [] })
  .openapi('McfData')

const ProfileFilterLinkSchema = z
  .object({
    filterRef: FilterRefSchema.exactOptional().openapi({ description: 'Filter for this link.' }),
    id: z.string().exactOptional().openapi({ description: 'Profile filter link ID.' }),
    kind: z
      .string()
      .default('analytics#profileFilterLink')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics filter.', readOnly: true }),
    profileRef: ProfileRefSchema.exactOptional().openapi({
      description: 'View (Profile) for this link.',
    }),
    rank: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The rank of this profile filter link relative to the other filters linked to the same profile.\nFor readonly (i.e., list and get) operations, the rank always starts at 1.\nFor write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.",
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this profile filter link.', readOnly: true }),
  })
  .openapi({ description: 'JSON template for an Analytics profile filter link.', required: [] })
  .openapi('ProfileFilterLink')

const ProfileFilterLinksSchema = z
  .object({
    items: z
      .array(ProfileFilterLinkSchema)
      .exactOptional()
      .openapi({ description: 'A list of profile filter links.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#profileFilterLinks')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this profile filter link collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this profile filter link collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.',
    required: [],
  })
  .openapi('ProfileFilterLinks')

const ProfilesSchema = z
  .object({
    items: z
      .array(ProfileSchema)
      .exactOptional()
      .openapi({ description: 'A list of views (profiles).' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#profiles')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this view (profile) collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this view (profile) collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).',
    required: [],
  })
  .openapi('Profiles')

const RealtimeDataSchema = z
  .object({
    columnHeaders: z
      .array(
        z
          .object({
            columnType: z
              .string()
              .exactOptional()
              .openapi({ description: 'Column Type. Either DIMENSION or METRIC.' }),
            dataType: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.',
              }),
            name: z.string().exactOptional().openapi({ description: 'Column name.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Unique ID for this data response.' }),
    kind: z
      .string()
      .default('analytics#realtimeData')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    profileInfo: z
      .object({
        accountId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Account ID to which this view (profile) belongs.' }),
        internalWebPropertyId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Internal ID for the web property to which this view (profile) belongs.',
          }),
        profileId: z.string().exactOptional().openapi({ description: 'View (Profile) ID.' }),
        profileName: z.string().exactOptional().openapi({ description: 'View (Profile) name.' }),
        tableId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Table ID for view (profile).' }),
        webPropertyId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Web Property ID to which this view (profile) belongs.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information for the view (profile), for which the real time data was requested.',
        required: [],
      }),
    query: z
      .object({
        dimensions: z
          .string()
          .exactOptional()
          .openapi({ description: 'List of real time dimensions.' }),
        filters: z
          .string()
          .exactOptional()
          .openapi({ description: 'Comma-separated list of dimension or metric filters.' }),
        ids: z.string().exactOptional().openapi({ description: 'Unique table ID.' }),
        'max-results': z
          .int32()
          .exactOptional()
          .openapi({ description: 'Maximum results per page.' }),
        metrics: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of real time metrics.' }),
        sort: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'List of dimensions or metrics based on which real time data is sorted.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Real time data request query parameters.', required: [] }),
    rows: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link to this page.' }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows for the query, regardless of the number of rows in the response.',
      }),
    totalsForAllResults: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              'Key-value pair for the total value of a metric. Key is the metric name and the value is the total value for that metric.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.',
      }),
  })
  .openapi({ description: 'Real time data for a given view (profile).', required: [] })
  .openapi('RealtimeData')

const RemarketingAudienceSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this remarketing audience belongs.' }),
    audienceDefinition: z
      .object({
        includeConditions: IncludeConditionsSchema.exactOptional().openapi({
          description: 'Defines the conditions to include users to the audience.',
        }),
      })
      .exactOptional()
      .openapi({
        description:
          'The simple audience definition that will cause a user to be added to an audience.',
        required: [],
      }),
    audienceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of audience, either SIMPLE or STATE_BASED.' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this remarketing audience was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this remarketing audience.', readOnly: true }),
    id: z.string().exactOptional().openapi({ description: 'Remarketing Audience ID.' }),
    internalWebPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Internal ID for the web property to which this remarketing audience belongs.',
        readOnly: true,
      }),
    kind: z
      .string()
      .default('analytics#remarketingAudience')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    linkedAdAccounts: z
      .array(LinkedForeignAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.',
      }),
    linkedViews: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The views (profiles) that this remarketing audience is linked to.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this remarketing audience.' }),
    stateBasedAudienceDefinition: z
      .object({
        excludeConditions: z
          .object({
            exclusionDuration: z
              .string()
              .exactOptional()
              .openapi({ description: 'Whether to make the exclusion TEMPORARY or PERMANENT.' }),
            segment: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The segment condition that will cause a user to be removed from an audience.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Defines the conditions to exclude users from the audience.',
            required: [],
          }),
        includeConditions: IncludeConditionsSchema.exactOptional().openapi({
          description: 'Defines the conditions to include users to the audience.',
        }),
      })
      .exactOptional()
      .openapi({
        description:
          'A state based audience definition that will cause a user to be added or removed from an audience.',
        required: [],
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time this remarketing audience was last modified.',
        readOnly: true,
      }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.',
      }),
  })
  .openapi({ description: 'JSON template for an Analytics remarketing audience.', required: [] })
  .openapi('RemarketingAudience')

const RemarketingAudiencesSchema = z
  .object({
    items: z
      .array(RemarketingAudienceSchema)
      .exactOptional()
      .openapi({ description: 'A list of remarketing audiences.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#remarketingAudiences')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this remarketing audience collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this view (profile) collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.',
    required: [],
  })
  .openapi('RemarketingAudiences')

const SegmentSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the segment was created.' }),
    definition: z.string().exactOptional().openapi({ description: 'Segment definition.' }),
    id: z.string().exactOptional().openapi({ description: 'Segment ID.' }),
    kind: z
      .string()
      .default('analytics#segment')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics segment.' }),
    name: z.string().exactOptional().openapi({ description: 'Segment name.' }),
    segmentId: z
      .string()
      .exactOptional()
      .openapi({
        description: "Segment ID. Can be used with the 'segment' parameter in Core Reporting API.",
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link for this segment.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the segment was last modified.' }),
  })
  .openapi({ description: 'JSON template for an Analytics segment.', required: [] })
  .openapi('Segment')

const SegmentsSchema = z
  .object({
    items: z.array(SegmentSchema).exactOptional().openapi({ description: 'A list of segments.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#segments')
      .exactOptional()
      .openapi({ description: 'Collection type for segments.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this segment collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this segment collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.',
    required: [],
  })
  .openapi('Segments')

const UnsampledReportSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID to which this unsampled report belongs.' }),
    cloudStorageDownloadDetails: z
      .object({
        bucketId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Id of the bucket the file object is stored in.' }),
        objectId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Id of the file object containing the report data.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Download details for a file stored in Google Cloud Storage.',
        readOnly: true,
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this unsampled report was created.', readOnly: true }),
    dimensions: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dimensions for the unsampled report.' }),
    downloadType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.',
        readOnly: true,
      }),
    driveDownloadDetails: z
      .object({
        documentId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Id of the document/file containing the report data.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Download details for a file stored in Google Drive.',
        readOnly: true,
        required: [],
      }),
    'end-date': z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date for the unsampled report.' }),
    filters: z
      .string()
      .exactOptional()
      .openapi({ description: 'The filters for the unsampled report.' }),
    id: z.string().exactOptional().openapi({ description: 'Unsampled report ID.' }),
    kind: z
      .string()
      .default('analytics#unsampledReport')
      .exactOptional()
      .openapi({ description: 'Resource type for an Analytics unsampled report.', readOnly: true }),
    metrics: z
      .string()
      .exactOptional()
      .openapi({ description: 'The metrics for the unsampled report.' }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'View (Profile) ID to which this unsampled report belongs.' }),
    segment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The segment for the unsampled report.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for this unsampled report.', readOnly: true }),
    'start-date': z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date for the unsampled report.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.',
        readOnly: true,
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the unsampled report.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this unsampled report was last modified.', readOnly: true }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.',
      }),
  })
  .openapi({ description: 'JSON template for Analytics unsampled report resource.', required: [] })
  .openapi('UnsampledReport')

const UnsampledReportsSchema = z
  .object({
    items: z
      .array(UnsampledReportSchema)
      .exactOptional()
      .openapi({ description: 'A list of unsampled reports.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#unsampledReports')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this unsampled report collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this unsampled report collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of resources in the result.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.',
    required: [],
  })
  .openapi('UnsampledReports')

const UploadSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account Id to which this upload belongs.' }),
    customDataSourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom data source Id to which this data import belongs.' }),
    errors: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Data import errors collection.' }),
    id: z.string().exactOptional().openapi({ description: 'A unique ID for this upload.' }),
    kind: z
      .string()
      .default('analytics#upload')
      .exactOptional()
      .openapi({ description: 'Resource type for Analytics upload.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.',
      }),
    uploadTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this file is uploaded.' }),
  })
  .openapi({ description: 'Metadata returned for an upload operation.', required: [] })
  .openapi('Upload')

const UploadsSchema = z
  .object({
    items: z.array(UploadSchema).exactOptional().openapi({ description: 'A list of uploads.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#uploads')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this upload collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this upload collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of resources in the result.',
      }),
  })
  .openapi({
    description:
      'Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.',
    required: [],
  })
  .openapi('Uploads')

const UserDeletionRequestSchema = z
  .object({
    deletionRequestTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'This marks the point in time for which all user data before should be deleted',
        readOnly: true,
      }),
    firebaseProjectId: z.string().exactOptional().openapi({ description: 'Firebase Project Id' }),
    id: z
      .object({
        type: z.string().exactOptional().openapi({ description: 'Type of user' }),
        userId: z.string().exactOptional().openapi({ description: "The User's id" }),
      })
      .exactOptional()
      .openapi({ description: 'User ID.', required: [] }),
    kind: z
      .string()
      .default('analytics#userDeletionRequest')
      .exactOptional()
      .openapi({ description: 'Value is "analytics#userDeletionRequest".' }),
    propertyId: z.string().exactOptional().openapi({ description: 'Property ID' }),
    webPropertyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Web property ID of the form UA-XXXXX-YY.' }),
  })
  .openapi({ description: 'JSON template for a user deletion request resource.', required: [] })
  .openapi('UserDeletionRequest')

const WebpropertiesSchema = z
  .object({
    items: z
      .array(WebpropertySchema)
      .exactOptional()
      .openapi({ description: 'A list of web properties.' }),
    itemsPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.',
      }),
    kind: z
      .string()
      .default('analytics#webproperties')
      .exactOptional()
      .openapi({ description: 'Collection type.' }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to next page for this web property collection.' }),
    previousLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to previous page for this web property collection.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.',
      }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of results for the query, regardless of the number of results in the response.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email ID of the authenticated user' }),
  })
  .openapi({
    description:
      'A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.',
    required: [],
  })
  .openapi('Webproperties')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/analytics': 'View and manage your Google Analytics data',
        'https://www.googleapis.com/auth/analytics.edit':
          'Edit Google Analytics management entities',
        'https://www.googleapis.com/auth/analytics.manage.users':
          'Manage Google Analytics Account users by email address',
        'https://www.googleapis.com/auth/analytics.manage.users.readonly':
          'View Google Analytics user permissions',
        'https://www.googleapis.com/auth/analytics.provision':
          'Create a new Google Analytics account along with its default property and view',
        'https://www.googleapis.com/auth/analytics.readonly': 'View your Google Analytics data',
        'https://www.googleapis.com/auth/analytics.user.deletion':
          'Manage Google Analytics user deletion requests',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/analytics': 'View and manage your Google Analytics data',
        'https://www.googleapis.com/auth/analytics.edit':
          'Edit Google Analytics management entities',
        'https://www.googleapis.com/auth/analytics.manage.users':
          'Manage Google Analytics Account users by email address',
        'https://www.googleapis.com/auth/analytics.manage.users.readonly':
          'View Google Analytics user permissions',
        'https://www.googleapis.com/auth/analytics.provision':
          'Create a new Google Analytics account along with its default property and view',
        'https://www.googleapis.com/auth/analytics.readonly': 'View your Google Analytics data',
        'https://www.googleapis.com/auth/analytics.user.deletion':
          'Manage Google Analytics user deletion requests',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getDataGaRoute = createRoute({
  method: 'get',
  path: '/data/ga',
  tags: ['data'],
  description: 'Returns Analytics data for a view (profile).',
  operationId: 'analytics.data.ga.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      ids: z
        .string()
        .openapi({
          param: {
            description:
              'Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.',
            in: 'query',
            name: 'ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'start-date': z
        .string()
        .openapi({
          param: {
            description:
              'Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.',
            in: 'query',
            name: 'start-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'end-date': z
        .string()
        .openapi({
          param: {
            description:
              'End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.',
            in: 'query',
            name: 'end-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      metrics: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.",
            in: 'query',
            name: 'metrics',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dimensions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.",
            in: 'query',
            name: 'dimensions',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of dimension or metric filters to be applied to Analytics data.',
            in: 'query',
            name: 'filters',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'include-empty-rows': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response will include empty rows if this parameter is set to true, the default is true',
            in: 'query',
            name: 'include-empty-rows',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'max-results': z
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
            description: 'The maximum number of entries to include in this feed.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      output: z
        .enum(['dataTable', 'json'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The selected format for the response. Default format is JSON.',
            in: 'query',
            name: 'output',
            schema: { enum: ['dataTable', 'json'], type: 'string' },
            required: false,
          },
        }),
      samplingLevel: z
        .enum(['DEFAULT', 'FASTER', 'HIGHER_PRECISION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The desired sampling level.',
            in: 'query',
            name: 'samplingLevel',
            schema: { enum: ['DEFAULT', 'FASTER', 'HIGHER_PRECISION'], type: 'string' },
            required: false,
          },
        }),
      segment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An Analytics segment to be applied to data.',
            in: 'query',
            name: 'segment',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GaDataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getDataMcfRoute = createRoute({
  method: 'get',
  path: '/data/mcf',
  tags: ['data'],
  description: 'Returns Analytics Multi-Channel Funnels data for a view (profile).',
  operationId: 'analytics.data.mcf.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      ids: z
        .string()
        .openapi({
          param: {
            description:
              'Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.',
            in: 'query',
            name: 'ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'start-date': z
        .string()
        .openapi({
          param: {
            description:
              'Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.',
            in: 'query',
            name: 'start-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'end-date': z
        .string()
        .openapi({
          param: {
            description:
              'End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.',
            in: 'query',
            name: 'end-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      metrics: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.",
            in: 'query',
            name: 'metrics',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dimensions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.",
            in: 'query',
            name: 'dimensions',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of dimension or metric filters to be applied to the Analytics data.',
            in: 'query',
            name: 'filters',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'max-results': z
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
            description: 'The maximum number of entries to include in this feed.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      samplingLevel: z
        .enum(['DEFAULT', 'FASTER', 'HIGHER_PRECISION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The desired sampling level.',
            in: 'query',
            name: 'samplingLevel',
            schema: { enum: ['DEFAULT', 'FASTER', 'HIGHER_PRECISION'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: McfDataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getDataRealtimeRoute = createRoute({
  method: 'get',
  path: '/data/realtime',
  tags: ['data'],
  description: 'Returns real time data for a view (profile).',
  operationId: 'analytics.data.realtime.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      ids: z
        .string()
        .openapi({
          param: {
            description:
              'Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.',
            in: 'query',
            name: 'ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      metrics: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.",
            in: 'query',
            name: 'metrics',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dimensions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.",
            in: 'query',
            name: 'dimensions',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of dimension or metric filters to be applied to real time data.',
            in: 'query',
            name: 'filters',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'max-results': z
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
            description: 'The maximum number of entries to include in this feed.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of dimensions or metrics that determine the sort order for real time data.',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RealtimeDataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getManagementAccountSummariesRoute = createRoute({
  method: 'get',
  path: '/management/accountSummaries',
  tags: ['management'],
  description:
    'Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.',
  operationId: 'analytics.management.accountSummaries.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
              'The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSummariesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getManagementAccountsRoute = createRoute({
  method: 'get',
  path: '/management/accounts',
  tags: ['management'],
  description: 'Lists all accounts to which the user has access.',
  operationId: 'analytics.management.accounts.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
            description: 'The maximum number of accounts to include in this response.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getManagementAccountsAccountIdEntityUserLinksRoute = createRoute({
  method: 'get',
  path: '/management/accounts/{accountId}/entityUserLinks',
  tags: ['management'],
  description: 'Lists account-user links for a given account.',
  operationId: 'analytics.management.accountUserLinks.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
            description: 'The maximum number of account-user links to include in this response.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to retrieve the user links for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EntityUserLinksSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
    },
  ],
})

export const postManagementAccountsAccountIdEntityUserLinksRoute = createRoute({
  method: 'post',
  path: '/management/accounts/{accountId}/entityUserLinks',
  tags: ['management'],
  description: 'Adds a new user to the given account.',
  operationId: 'analytics.management.accountUserLinks.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to create the user link for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityUserLinkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EntityUserLinkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
    },
  ],
})

export const putManagementAccountsAccountIdEntityUserLinksLinkIdRoute = createRoute({
  method: 'put',
  path: '/management/accounts/{accountId}/entityUserLinks/{linkId}',
  tags: ['management'],
  description: 'Updates permissions for an existing user on the given account.',
  operationId: 'analytics.management.accountUserLinks.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to update the account-user link for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      linkId: z
        .string()
        .openapi({
          param: {
            description: 'Link ID to update the account-user link for.',
            in: 'path',
            name: 'linkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityUserLinkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EntityUserLinkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
    },
  ],
})

export const deleteManagementAccountsAccountIdEntityUserLinksLinkIdRoute = createRoute({
  method: 'delete',
  path: '/management/accounts/{accountId}/entityUserLinks/{linkId}',
  tags: ['management'],
  description: 'Removes a user from the given account.',
  operationId: 'analytics.management.accountUserLinks.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to delete the user link for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      linkId: z
        .string()
        .openapi({
          param: {
            description: 'Link ID to delete the user link for.',
            in: 'path',
            name: 'linkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
    },
  ],
})

export const getManagementAccountsAccountIdFiltersRoute = createRoute({
  method: 'get',
  path: '/management/accounts/{accountId}/filters',
  tags: ['management'],
  description: 'Lists all filters for an account',
  operationId: 'analytics.management.filters.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
            description: 'The maximum number of filters to include in this response.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to retrieve filters for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FiltersSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postManagementAccountsAccountIdFiltersRoute = createRoute({
  method: 'post',
  path: '/management/accounts/{accountId}/filters',
  tags: ['management'],
  description: 'Create a new filter.',
  operationId: 'analytics.management.filters.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to create filter for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FilterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getManagementAccountsAccountIdFiltersFilterIdRoute = createRoute({
  method: 'get',
  path: '/management/accounts/{accountId}/filters/{filterId}',
  tags: ['management'],
  description: 'Returns filters to which the user has access.',
  operationId: 'analytics.management.filters.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to retrieve filters for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filterId: z
        .string()
        .openapi({
          param: {
            description: 'Filter ID to retrieve filters for.',
            in: 'path',
            name: 'filterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const putManagementAccountsAccountIdFiltersFilterIdRoute = createRoute({
  method: 'put',
  path: '/management/accounts/{accountId}/filters/{filterId}',
  tags: ['management'],
  description: 'Updates an existing filter.',
  operationId: 'analytics.management.filters.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to which the filter belongs.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filterId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the filter to be updated.',
            in: 'path',
            name: 'filterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FilterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const deleteManagementAccountsAccountIdFiltersFilterIdRoute = createRoute({
  method: 'delete',
  path: '/management/accounts/{accountId}/filters/{filterId}',
  tags: ['management'],
  description: 'Delete a filter.',
  operationId: 'analytics.management.filters.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to delete the filter for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filterId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the filter to be deleted.',
            in: 'path',
            name: 'filterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const patchManagementAccountsAccountIdFiltersFilterIdRoute = createRoute({
  method: 'patch',
  path: '/management/accounts/{accountId}/filters/{filterId}',
  tags: ['management'],
  description: 'Updates an existing filter. This method supports patch semantics.',
  operationId: 'analytics.management.filters.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to which the filter belongs.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filterId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the filter to be updated.',
            in: 'path',
            name: 'filterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FilterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getManagementAccountsAccountIdWebpropertiesRoute = createRoute({
  method: 'get',
  path: '/management/accounts/{accountId}/webproperties',
  tags: ['management'],
  description: 'Lists web properties to which the user has access.',
  operationId: 'analytics.management.webproperties.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
            description: 'The maximum number of web properties to include in this response.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              "Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebpropertiesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postManagementAccountsAccountIdWebpropertiesRoute = createRoute({
  method: 'post',
  path: '/management/accounts/{accountId}/webproperties',
  tags: ['management'],
  description:
    'Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.',
  operationId: 'analytics.management.webproperties.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to create the web property for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebpropertySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebpropertySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute = createRoute({
  method: 'get',
  path: '/management/accounts/{accountId}/webproperties/{webPropertyId}',
  tags: ['management'],
  description: 'Gets a web property to which the user has access.',
  operationId: 'analytics.management.webproperties.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to retrieve the web property for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webPropertyId: z
        .string()
        .openapi({
          param: {
            description: 'ID to retrieve the web property for.',
            in: 'path',
            name: 'webPropertyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebpropertySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute = createRoute({
  method: 'put',
  path: '/management/accounts/{accountId}/webproperties/{webPropertyId}',
  tags: ['management'],
  description: 'Updates an existing web property.',
  operationId: 'analytics.management.webproperties.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to which the web property belongs',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webPropertyId: z
        .string()
        .openapi({
          param: {
            description: 'Web property ID',
            in: 'path',
            name: 'webPropertyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebpropertySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebpropertySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute = createRoute({
  method: 'patch',
  path: '/management/accounts/{accountId}/webproperties/{webPropertyId}',
  tags: ['management'],
  description: 'Updates an existing web property. This method supports patch semantics.',
  operationId: 'analytics.management.webproperties.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to which the web property belongs',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webPropertyId: z
        .string()
        .openapi({
          param: {
            description: 'Web property ID',
            in: 'path',
            name: 'webPropertyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebpropertySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebpropertySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources',
    tags: ['management'],
    description: 'List custom data sources to which the user has access.',
    operationId: 'analytics.management.customDataSources.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'The maximum number of custom data sources to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account Id for the custom data sources to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id for the custom data sources to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomDataSourcesSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData',
    tags: ['management'],
    description: 'Delete data associated with a previous upload.',
    operationId: 'analytics.management.uploads.deleteUploadData',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account Id for the uploads to be deleted.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id for the uploads to be deleted.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDataSourceId: z
          .string()
          .openapi({
            param: {
              description: 'Custom data source Id for the uploads to be deleted.',
              in: 'path',
              name: 'customDataSourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AnalyticsDataimportDeleteUploadDataRequestSchema },
        },
      },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads',
    tags: ['management'],
    description: 'List uploads to which the user has access.',
    operationId: 'analytics.management.uploads.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'The maximum number of uploads to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account Id for the uploads to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id for the uploads to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDataSourceId: z
          .string()
          .openapi({
            param: {
              description: 'Custom data source Id for uploads to retrieve.',
              in: 'path',
              name: 'customDataSourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: UploadsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads',
    tags: ['management'],
    description: 'Upload data for a custom data source.',
    operationId: 'analytics.management.uploads.uploadData',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account Id associated with the upload.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property UA-string associated with the upload.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDataSourceId: z
          .string()
          .openapi({
            param: {
              description: 'Custom data source Id to which the data being uploaded belongs.',
              in: 'path',
              name: 'customDataSourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: UploadSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}',
    tags: ['management'],
    description: 'List uploads to which the user has access.',
    operationId: 'analytics.management.uploads.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account Id for the upload to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id for the upload to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDataSourceId: z
          .string()
          .openapi({
            param: {
              description: 'Custom data source Id for upload to retrieve.',
              in: 'path',
              name: 'customDataSourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        uploadId: z
          .string()
          .openapi({
            param: {
              description: 'Upload Id to retrieve.',
              in: 'path',
              name: 'uploadId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: UploadSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions',
    tags: ['management'],
    description: 'Lists custom dimensions to which the user has access.',
    operationId: 'analytics.management.customDimensions.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
              description: 'The maximum number of custom dimensions to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom dimensions to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom dimensions to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomDimensionsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions',
    tags: ['management'],
    description: 'Create a new custom dimension.',
    operationId: 'analytics.management.customDimensions.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom dimension to create.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom dimension to create.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CustomDimensionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomDimensionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}',
    tags: ['management'],
    description: 'Get a custom dimension to which the user has access.',
    operationId: 'analytics.management.customDimensions.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom dimension to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom dimension to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDimensionId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the custom dimension to retrieve.',
              in: 'path',
              name: 'customDimensionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomDimensionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}',
    tags: ['management'],
    description: 'Updates an existing custom dimension.',
    operationId: 'analytics.management.customDimensions.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        ignoreCustomDataSourceLinks: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.',
              in: 'query',
              name: 'ignoreCustomDataSourceLinks',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom dimension to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom dimension to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDimensionId: z
          .string()
          .openapi({
            param: {
              description: 'Custom dimension ID for the custom dimension to update.',
              in: 'path',
              name: 'customDimensionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CustomDimensionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomDimensionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}',
    tags: ['management'],
    description: 'Updates an existing custom dimension. This method supports patch semantics.',
    operationId: 'analytics.management.customDimensions.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        ignoreCustomDataSourceLinks: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.',
              in: 'query',
              name: 'ignoreCustomDataSourceLinks',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom dimension to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom dimension to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customDimensionId: z
          .string()
          .openapi({
            param: {
              description: 'Custom dimension ID for the custom dimension to update.',
              in: 'path',
              name: 'customDimensionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CustomDimensionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomDimensionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics',
    tags: ['management'],
    description: 'Lists custom metrics to which the user has access.',
    operationId: 'analytics.management.customMetrics.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
              description: 'The maximum number of custom metrics to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom metrics to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom metrics to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomMetricsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics',
    tags: ['management'],
    description: 'Create a new custom metric.',
    operationId: 'analytics.management.customMetrics.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom metric to create.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom dimension to create.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CustomMetricSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomMetricSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}',
    tags: ['management'],
    description: 'Get a custom metric to which the user has access.',
    operationId: 'analytics.management.customMetrics.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom metric to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom metric to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customMetricId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the custom metric to retrieve.',
              in: 'path',
              name: 'customMetricId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomMetricSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}',
    tags: ['management'],
    description: 'Updates an existing custom metric.',
    operationId: 'analytics.management.customMetrics.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        ignoreCustomDataSourceLinks: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.',
              in: 'query',
              name: 'ignoreCustomDataSourceLinks',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom metric to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom metric to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customMetricId: z
          .string()
          .openapi({
            param: {
              description: 'Custom metric ID for the custom metric to update.',
              in: 'path',
              name: 'customMetricId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CustomMetricSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomMetricSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}',
    tags: ['management'],
    description: 'Updates an existing custom metric. This method supports patch semantics.',
    operationId: 'analytics.management.customMetrics.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        ignoreCustomDataSourceLinks: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.',
              in: 'query',
              name: 'ignoreCustomDataSourceLinks',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID for the custom metric to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for the custom metric to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customMetricId: z
          .string()
          .openapi({
            param: {
              description: 'Custom metric ID for the custom metric to update.',
              in: 'path',
              name: 'customMetricId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CustomMetricSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomMetricSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks',
    tags: ['management'],
    description: 'Lists webProperty-Google Ads links for a given web property.',
    operationId: 'analytics.management.webPropertyAdWordsLinks.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
                'The maximum number of webProperty-Google Ads links to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the account which the given web property belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the Google Ads links for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityAdWordsLinksSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks',
    tags: ['management'],
    description: 'Creates a webProperty-Google Ads link.',
    operationId: 'analytics.management.webPropertyAdWordsLinks.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the Google Analytics account to create the link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to create the link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityAdWordsLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityAdWordsLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}',
    tags: ['management'],
    description: 'Returns a web property-Google Ads link to which the user has access.',
    operationId: 'analytics.management.webPropertyAdWordsLinks.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the account which the given web property belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the Google Ads link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyAdWordsLinkId: z
          .string()
          .openapi({
            param: {
              description: 'Web property-Google Ads link ID.',
              in: 'path',
              name: 'webPropertyAdWordsLinkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityAdWordsLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}',
    tags: ['management'],
    description: 'Updates an existing webProperty-Google Ads link.',
    operationId: 'analytics.management.webPropertyAdWordsLinks.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the account which the given web property belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the Google Ads link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyAdWordsLinkId: z
          .string()
          .openapi({
            param: {
              description: 'Web property-Google Ads link ID.',
              in: 'path',
              name: 'webPropertyAdWordsLinkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityAdWordsLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityAdWordsLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}',
    tags: ['management'],
    description: 'Deletes a web property-Google Ads link.',
    operationId: 'analytics.management.webPropertyAdWordsLinks.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the account which the given web property belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to delete the Google Ads link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyAdWordsLinkId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Google Ads link ID.',
              in: 'path',
              name: 'webPropertyAdWordsLinkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}',
    tags: ['management'],
    description:
      'Updates an existing webProperty-Google Ads link. This method supports patch semantics.',
    operationId: 'analytics.management.webPropertyAdWordsLinks.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the account which the given web property belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the Google Ads link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyAdWordsLinkId: z
          .string()
          .openapi({
            param: {
              description: 'Web property-Google Ads link ID.',
              in: 'path',
              name: 'webPropertyAdWordsLinkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityAdWordsLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityAdWordsLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks',
    tags: ['management'],
    description: 'Lists webProperty-user links for a given web property.',
    operationId: 'analytics.management.webpropertyUserLinks.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
                'The maximum number of webProperty-user Links to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID which the given web property belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description:
                "Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.",
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityUserLinksSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks',
    tags: ['management'],
    description: 'Adds a new user to the given web property.',
    operationId: 'analytics.management.webpropertyUserLinks.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to create the user link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web Property ID to create the user link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityUserLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityUserLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}',
    tags: ['management'],
    description: 'Updates permissions for an existing user on the given web property.',
    operationId: 'analytics.management.webpropertyUserLinks.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to update the account-user link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to update the account-user link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'Link ID to update the account-user link for.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityUserLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityUserLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}',
    tags: ['management'],
    description: 'Removes a user from the given web property.',
    operationId: 'analytics.management.webpropertyUserLinks.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to delete the user link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web Property ID to delete the user link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'Link ID to delete the user link for.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute = createRoute({
  method: 'get',
  path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles',
  tags: ['management'],
  description: 'Lists views (profiles) to which the user has access.',
  operationId: 'analytics.management.profiles.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
            description: 'The maximum number of views (profiles) to include in this response.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              "Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webPropertyId: z
        .string()
        .openapi({
          param: {
            description:
              "Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.",
            in: 'path',
            name: 'webPropertyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProfilesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute = createRoute({
  method: 'post',
  path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles',
  tags: ['management'],
  description: 'Create a new view (profile).',
  operationId: 'analytics.management.profiles.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID to create the view (profile) for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webPropertyId: z
        .string()
        .openapi({
          param: {
            description: 'Web property ID to create the view (profile) for.',
            in: 'path',
            name: 'webPropertyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProfileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}',
    tags: ['management'],
    description: 'Gets a view (profile) to which the user has access.',
    operationId: 'analytics.management.profiles.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve the view (profile) for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the view (profile) for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to retrieve the view (profile) for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}',
    tags: ['management'],
    description: 'Updates an existing view (profile).',
    operationId: 'analytics.management.profiles.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which the view (profile) belongs',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to which the view (profile) belongs',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the view (profile) to be updated.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProfileSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}',
    tags: ['management'],
    description: 'Deletes a view (profile).',
    operationId: 'analytics.management.profiles.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to delete the view (profile) for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to delete the view (profile) for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the view (profile) to be deleted.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}',
    tags: ['management'],
    description: 'Updates an existing view (profile). This method supports patch semantics.',
    operationId: 'analytics.management.profiles.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which the view (profile) belongs',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to which the view (profile) belongs',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the view (profile) to be updated.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProfileSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks',
    tags: ['management'],
    description: 'Lists profile-user links for a given view (profile).',
    operationId: 'analytics.management.profileUserLinks.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
              description: 'The maximum number of profile-user links to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID which the given view (profile) belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description:
                "Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.",
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description:
                "View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.",
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityUserLinksSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks',
    tags: ['management'],
    description: 'Adds a new user to the given view (profile).',
    operationId: 'analytics.management.profileUserLinks.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to create the user link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web Property ID to create the user link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to create the user link for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityUserLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityUserLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}',
    tags: ['management'],
    description: 'Updates permissions for an existing user on the given view (profile).',
    operationId: 'analytics.management.profileUserLinks.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to update the user link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web Property ID to update the user link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile ID) to update the user link for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'Link ID to update the user link for.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntityUserLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntityUserLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}',
    tags: ['management'],
    description: 'Removes a user from the given view (profile).',
    operationId: 'analytics.management.profileUserLinks.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to delete the user link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web Property ID to delete the user link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to delete the user link for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'Link ID to delete the user link for.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.manage.users'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.manage.users'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments',
    tags: ['management'],
    description: 'Lists experiments to which the user has access.',
    operationId: 'analytics.management.experiments.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
              description: 'The maximum number of experiments to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve experiments for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve experiments for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to retrieve experiments for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExperimentsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments',
    tags: ['management'],
    description: 'Create a new experiment.',
    operationId: 'analytics.management.experiments.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to create the experiment for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to create the experiment for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to create the experiment for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ExperimentSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExperimentSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}',
    tags: ['management'],
    description: 'Returns an experiment to which the user has access.',
    operationId: 'analytics.management.experiments.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve the experiment for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the experiment for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to retrieve the experiment for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        experimentId: z
          .string()
          .openapi({
            param: {
              description: 'Experiment ID to retrieve the experiment for.',
              in: 'path',
              name: 'experimentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExperimentSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}',
    tags: ['management'],
    description: 'Update an existing experiment.',
    operationId: 'analytics.management.experiments.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID of the experiment to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID of the experiment to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID of the experiment to update.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        experimentId: z
          .string()
          .openapi({
            param: {
              description: 'Experiment ID of the experiment to update.',
              in: 'path',
              name: 'experimentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ExperimentSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExperimentSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}',
    tags: ['management'],
    description: 'Delete an experiment.',
    operationId: 'analytics.management.experiments.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which the experiment belongs',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to which the experiment belongs',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to which the experiment belongs',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        experimentId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the experiment to delete',
              in: 'path',
              name: 'experimentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}',
    tags: ['management'],
    description: 'Update an existing experiment. This method supports patch semantics.',
    operationId: 'analytics.management.experiments.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID of the experiment to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID of the experiment to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID of the experiment to update.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        experimentId: z
          .string()
          .openapi({
            param: {
              description: 'Experiment ID of the experiment to update.',
              in: 'path',
              name: 'experimentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ExperimentSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExperimentSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals',
    tags: ['management'],
    description: 'Lists goals to which the user has access.',
    operationId: 'analytics.management.goals.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
              description: 'The maximum number of goals to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description:
                "Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.",
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description:
                "Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.",
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description:
                "View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.",
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GoalsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals',
    tags: ['management'],
    description: 'Create a new goal.',
    operationId: 'analytics.management.goals.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to create the goal for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to create the goal for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to create the goal for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GoalSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GoalSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}',
    tags: ['management'],
    description: 'Gets a goal to which the user has access.',
    operationId: 'analytics.management.goals.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve the goal for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve the goal for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to retrieve the goal for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        goalId: z
          .string()
          .openapi({
            param: {
              description: 'Goal ID to retrieve the goal for.',
              in: 'path',
              name: 'goalId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GoalSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}',
    tags: ['management'],
    description: 'Updates an existing goal.',
    operationId: 'analytics.management.goals.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to update the goal.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to update the goal.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to update the goal.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        goalId: z
          .string()
          .openapi({
            param: {
              description: 'Index of the goal to be updated.',
              in: 'path',
              name: 'goalId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GoalSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GoalSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}',
    tags: ['management'],
    description: 'Updates an existing goal. This method supports patch semantics.',
    operationId: 'analytics.management.goals.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to update the goal.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to update the goal.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to update the goal.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        goalId: z
          .string()
          .openapi({
            param: {
              description: 'Index of the goal to be updated.',
              in: 'path',
              name: 'goalId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GoalSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GoalSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks',
    tags: ['management'],
    description: 'Lists all profile filter links for a profile.',
    operationId: 'analytics.management.profileFilterLinks.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
                'The maximum number of profile filter links to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve profile filter links for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description:
                "Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.",
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description:
                "Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.",
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileFilterLinksSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks',
    tags: ['management'],
    description: 'Create a new profile filter link.',
    operationId: 'analytics.management.profileFilterLinks.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to create profile filter link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id to create profile filter link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'Profile ID to create filter link for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProfileFilterLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileFilterLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}',
    tags: ['management'],
    description: 'Returns a single profile filter link.',
    operationId: 'analytics.management.profileFilterLinks.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve profile filter link for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id to retrieve profile filter link for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'Profile ID to retrieve filter link for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the profile filter link.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileFilterLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}',
    tags: ['management'],
    description: 'Update an existing profile filter link.',
    operationId: 'analytics.management.profileFilterLinks.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which profile filter link belongs.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id to which profile filter link belongs',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'Profile ID to which filter link belongs',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the profile filter link to be updated.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProfileFilterLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileFilterLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}',
    tags: ['management'],
    description: 'Delete a profile filter link.',
    operationId: 'analytics.management.profileFilterLinks.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which the profile filter link belongs.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id to which the profile filter link belongs.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'Profile ID to which the filter link belongs.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the profile filter link to delete.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}',
    tags: ['management'],
    description: 'Update an existing profile filter link. This method supports patch semantics.',
    operationId: 'analytics.management.profileFilterLinks.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which profile filter link belongs.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property Id to which profile filter link belongs',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'Profile ID to which filter link belongs',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        linkId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the profile filter link to be updated.',
              in: 'path',
              name: 'linkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProfileFilterLinkSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProfileFilterLinkSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports',
    tags: ['management'],
    description: 'Lists unsampled reports to which the user has access.',
    operationId: 'analytics.management.unsampledReports.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
              description: 'The maximum number of unsampled reports to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description:
                'Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description:
                'Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description:
                'View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: UnsampledReportsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports',
    tags: ['management'],
    description: 'Create a new unsampled report.',
    operationId: 'analytics.management.unsampledReports.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to create the unsampled report for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to create the unsampled report for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to create the unsampled report for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: UnsampledReportSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: UnsampledReportSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}',
    tags: ['management'],
    description: 'Returns a single unsampled report.',
    operationId: 'analytics.management.unsampledReports.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to retrieve unsampled report for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to retrieve unsampled reports for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to retrieve unsampled report for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        unsampledReportId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the unsampled report to retrieve.',
              in: 'path',
              name: 'unsampledReportId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: UnsampledReportSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}',
    tags: ['management'],
    description: 'Deletes an unsampled report.',
    operationId: 'analytics.management.unsampledReports.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to delete the unsampled report for.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to delete the unsampled reports for.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'View (Profile) ID to delete the unsampled report for.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        unsampledReportId: z
          .string()
          .openapi({
            param: {
              description: 'ID of the unsampled report to be deleted.',
              in: 'path',
              name: 'unsampledReportId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences',
    tags: ['management'],
    description: 'Lists remarketing audiences to which the user has access.',
    operationId: 'analytics.management.remarketingAudience.list',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
        'max-results': z
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
                'The maximum number of remarketing audiences to include in this response.',
              in: 'query',
              name: 'max-results',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        'start-index': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
              in: 'query',
              name: 'start-index',
              schema: { minimum: 1, type: 'integer' },
              required: false,
            },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'type', schema: { type: 'string' }, required: false },
          }),
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'The account ID of the remarketing audiences to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'The web property ID of the remarketing audiences to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: RemarketingAudiencesSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute =
  createRoute({
    method: 'post',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences',
    tags: ['management'],
    description: 'Creates a new remarketing audience.',
    operationId: 'analytics.management.remarketingAudience.insert',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'The account ID for which to create the remarketing audience.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID for which to create the remarketing audience.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RemarketingAudienceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: RemarketingAudienceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute =
  createRoute({
    method: 'get',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}',
    tags: ['management'],
    description: 'Gets a remarketing audience to which the user has access.',
    operationId: 'analytics.management.remarketingAudience.get',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'The account ID of the remarketing audience to retrieve.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'The web property ID of the remarketing audience to retrieve.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        remarketingAudienceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the remarketing audience to retrieve.',
              in: 'path',
              name: 'remarketingAudienceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: RemarketingAudienceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
      },
    ],
  })

export const putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute =
  createRoute({
    method: 'put',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}',
    tags: ['management'],
    description: 'Updates an existing remarketing audience.',
    operationId: 'analytics.management.remarketingAudience.update',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'The account ID of the remarketing audience to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'The web property ID of the remarketing audience to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        remarketingAudienceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the remarketing audience to update.',
              in: 'path',
              name: 'remarketingAudienceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RemarketingAudienceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: RemarketingAudienceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute =
  createRoute({
    method: 'delete',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}',
    tags: ['management'],
    description: 'Delete a remarketing audience.',
    operationId: 'analytics.management.remarketingAudience.delete',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account ID to which the remarketing audience belongs.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'Web property ID to which the remarketing audience belongs.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        remarketingAudienceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the remarketing audience to delete.',
              in: 'path',
              name: 'remarketingAudienceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute =
  createRoute({
    method: 'patch',
    path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}',
    tags: ['management'],
    description: 'Updates an existing remarketing audience. This method supports patch semantics.',
    operationId: 'analytics.management.remarketingAudience.patch',
    request: {
      query: z.object({
        alt: AltParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        userIp: UserIpParamsSchema,
      }),
      params: z.object({
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'The account ID of the remarketing audience to update.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        webPropertyId: z
          .string()
          .openapi({
            param: {
              description: 'The web property ID of the remarketing audience to update.',
              in: 'path',
              name: 'webPropertyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        remarketingAudienceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the remarketing audience to update.',
              in: 'path',
              name: 'remarketingAudienceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RemarketingAudienceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: RemarketingAudienceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
        Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
      },
    ],
  })

export const postManagementClientIdHashClientIdRoute = createRoute({
  method: 'post',
  path: '/management/clientId:hashClientId',
  tags: ['management'],
  description: 'Hashes the given Client ID.',
  operationId: 'analytics.management.clientId.hashClientId',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    body: { content: { 'application/json': { schema: HashClientIdRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HashClientIdResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getManagementSegmentsRoute = createRoute({
  method: 'get',
  path: '/management/segments',
  tags: ['management'],
  description: 'Lists segments to which the user has access.',
  operationId: 'analytics.management.segments.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      'max-results': z
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
            description: 'The maximum number of segments to include in this response.',
            in: 'query',
            name: 'max-results',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'start-index': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.',
            in: 'query',
            name: 'start-index',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SegmentsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getMetadataReportTypeColumnsRoute = createRoute({
  method: 'get',
  path: '/metadata/{reportType}/columns',
  tags: ['metadata'],
  description: 'Lists all columns for a report type',
  operationId: 'analytics.metadata.columns.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      reportType: z
        .string()
        .openapi({
          param: {
            description:
              "Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API",
            in: 'path',
            name: 'reportType',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ColumnsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postProvisioningCreateAccountTicketRoute = createRoute({
  method: 'post',
  path: '/provisioning/createAccountTicket',
  tags: ['provisioning'],
  description: 'Creates an account ticket.',
  operationId: 'analytics.provisioning.createAccountTicket',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    body: { content: { 'application/json': { schema: AccountTicketSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountTicketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.provision'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.provision'],
    },
  ],
})

export const postProvisioningCreateAccountTreeRoute = createRoute({
  method: 'post',
  path: '/provisioning/createAccountTree',
  tags: ['provisioning'],
  description: 'Provision account.',
  operationId: 'analytics.provisioning.createAccountTree',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    body: { content: { 'application/json': { schema: AccountTreeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountTreeResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.provision'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.provision'],
    },
  ],
})

export const postUserDeletionUserDeletionRequestsUpsertRoute = createRoute({
  method: 'post',
  path: '/userDeletion/userDeletionRequests:upsert',
  tags: ['userDeletion'],
  description: 'Insert or update a user deletion requests.',
  operationId: 'analytics.userDeletion.userDeletionRequest.upsert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    body: { content: { 'application/json': { schema: UserDeletionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserDeletionRequestSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.user.deletion'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.user.deletion'],
    },
  ],
})
