import { createRoute, z } from '@hono/zod-openapi'

const MonetarySchema = z
  .object({
    amount: z.float32().exactOptional(),
    currency: z.string().default('usd').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Monetary')

const ClientStatsSchema = z
  .object({
    document_count: z
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
    nps: z.float32().exactOptional(),
    started_project_count: z
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
    total_discounted: MonetarySchema.exactOptional(),
    total_project_count: z
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
    total_spending: z.float32().exactOptional(),
    translator_count: z
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
  })
  .openapi({ required: [] })
  .openapi('ClientStats')

const VendorEarningStatsSchema = z
  .object({
    total: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'total amount of USD that this user has earned in the platform so far.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VendorEarningStats')

const VendorProjectStatsSchema = z
  .object({
    invited: z
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
          'total number of projects that this user was invited to. TODO this key is to replace "total" key due to naming ambiguity.',
      }),
    total: z
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
        description: 'total number of projects that this user was invited to.',
      }),
    worked: z
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
        description: 'total number of projects that this user actually worked on.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VendorProjectStats')

const VendorWordStatsSchema = z
  .object({
    approved: z
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
        description: 'total number of words that this user has approved so far.',
      }),
    translated: z
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
        description: 'total number of words that this user has translated so far.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VendorWordStats')

const VendorStatsSchema = z
  .object({
    earnings: VendorEarningStatsSchema.exactOptional(),
    projects: VendorProjectStatsSchema.exactOptional(),
    words: VendorWordStatsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VendorStats')

type StatsType = {
  client?: z.infer<typeof ClientStatsSchema>
  vendor?: z.infer<typeof VendorStatsSchema>
}

const AccountGlossaryUploadRequestSchema = z
  .object({
    glossary: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Glossary file. Currently supported formats: .xlsx, .tbx',
      }),
  })
  .openapi({ required: ['glossary'] })
  .openapi('AccountGlossaryUploadRequest')

const AccountStyleGuideUploadRequestSchema = z
  .object({
    styleguide: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Style guide file. Currently supported formats: .pdf, .docx, .txt',
      }),
  })
  .openapi({ required: ['styleguide'] })
  .openapi('AccountStyleGuideUploadRequest')

const ActiveWidgetSchema = z
  .object({
    allow_hash_in_url: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, hash params are included in filenames. When false, params are ignored.',
      }),
    allow_query_in_url: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, query params are included in filenames. When false, params are ignored.',
      }),
    auto_detect_source_language: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    elements: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuous project exclusive elements and rules' }),
    follow_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specify whether we should follow the user around in your website and automatically translate pages.',
      }),
    force_cache_refresh_interval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.',
      }),
    id: z
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
    language_mappings: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuous project language mappings' }),
    live: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.',
      }),
    modify_links: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.',
      }),
    name: z.string().exactOptional(),
    optimize_per_page: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.',
      }),
    pages: z.string().exactOptional().openapi({ description: 'Continuous project page rules' }),
    path_regex: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom regex for path-type URL mode.' }),
    position: z
      .string()
      .exactOptional()
      .openapi({ description: 'Options are "bottom-left", "bottom-right", "in-place"' }),
    query_name: z
      .string()
      .default('locale')
      .exactOptional()
      .openapi({
        description:
          "Query parameter name to be used with query-type URL mode. Default is 'locale'.",
      }),
    reboot_on_url_change: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'When true, Active ecosystem reboots itself when url changes.' }),
    restricted_domains: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "JSON string for a list of domains that this widget's API interactions are limited to.",
      }),
    sections: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuous project section rules' }),
    test_mode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.',
      }),
    theme: z
      .string()
      .exactOptional()
      .openapi({ description: '\\"light\\", \\"dark\\" OR custom JSON.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Token that you should use when you are using this widget on your website.',
      }),
    url_change_mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.",
      }),
    url_mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.",
      }),
    use_cache: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.',
      }),
    use_dummy_translations: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, we will translate your website with dummy content, rather than actually using MT/TM.',
      }),
    variables: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuous project variable definitions' }),
  })
  .openapi({ required: [] })
  .openapi('ActiveWidget')

const HrefSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Href')

const LinksMetaSchema = z
  .object({ self: HrefSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LinksMeta')

const PagingLinksMetaSchema = LinksMetaSchema.and(
  z
    .object({ next: z.string().exactOptional(), previous: z.string().exactOptional() })
    .openapi({ required: [] }),
).openapi('PagingLinksMeta')

const PagingMetaSchema = z
  .object({
    paging: z
      .object({
        count: z
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
        links: PagingLinksMetaSchema.exactOptional(),
        page: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .default(1n)
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', default: 1 }),
        per_page: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .default(10n)
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', default: 10 }),
        total_count: z
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
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PagingMeta')

const ActiveWidgetListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    widgets: z.array(ActiveWidgetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActiveWidgetList')

const ActivityLinksSchema = LinksMetaSchema.and(
  z
    .object({ comments: HrefSchema.exactOptional(), project: HrefSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('ActivityLinks')

const ActivitySchema = z
  .object({
    activity_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    id: z
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
    links: ActivityLinksSchema.exactOptional(),
    source_text: z.string().exactOptional().openapi({ description: 'Source text' }),
    target_text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target text of the activity, which is actually the translation of the source text.',
      }),
    translator: z
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
        description: 'Unique identifier of the translator/proofreader of this activity.',
      }),
    type: z
      .enum(['translated', 'proofread'])
      .exactOptional()
      .openapi({
        description: "Currently there are two available activity types; 'translated', 'proofread'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const ActivityListSchema = z
  .object({
    activities: z.array(ActivitySchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityList')

const FileAsDataSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base64 encoded contents of your file.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of your file' }),
  })
  .openapi({ required: [] })
  .openapi('FileAsData')

const AddOrUpdateDocumentRequestSchema = z
  .object({ document: FileAsDataSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AddOrUpdateDocumentRequest')

const AddressSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    state: z.string().exactOptional(),
    street: z.string().exactOptional(),
    zip: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Address')

const AnalyticsCollectionSchema = z
  .object({
    anonymousId: z.string().exactOptional(),
    properties: z.record(z.string(), z.string()).exactOptional(),
    sessionId: z.string().exactOptional(),
    type: z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyticsCollection')

const AnalyticsTokenSchema = z
  .object({ jwt: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AnalyticsToken')

const AsyncOperationStatusEnumSchema = z
  .enum(['sent', 'started', 'completed', 'failed'])
  .default('sent')
  .openapi('AsyncOperationStatusEnum')

const AsyncOperationStatusSchema = z
  .object({
    duration: z
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
        description: 'operation duration in milliseconds',
      }),
    key: z.string().exactOptional(),
    message: z.object({}).exactOptional(),
    status: AsyncOperationStatusEnumSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AsyncOperationStatus')

const AvailableVendorsFilterSchema = z
  .object({
    corporateId: z
      .number()
      .exactOptional()
      .openapi({ description: 'Corporate account ID to filter for vendor authorization' }),
    manualWorkPermission: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Filter vendors for manual work permission', default: 0 }),
    sourceLanguage: z.string().exactOptional().openapi({ description: 'Source language code' }),
    targetLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of target language codes.' }),
    types: z
      .array(z.enum(['translator', 'proofreader', 'both']))
      .exactOptional()
      .openapi({ description: 'List of vendor types' }),
  })
  .openapi({ required: [] })
  .openapi('AvailableVendorsFilter')

const BillingAddressSchema = AddressSchema.and(
  z
    .object({
      name: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          description: 'addressing name, such as company name. used in billing address.',
        }),
    })
    .openapi({ required: [] }),
).openapi('BillingAddress')

const BlogArticleLinksSchema = LinksMetaSchema.and(
  z
    .object({
      android: HrefSchema.exactOptional(),
      header_image: HrefSchema.exactOptional(),
      ios: HrefSchema.exactOptional(),
      web: HrefSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BlogArticleLinks')

const BlogArticleSchema = z
  .object({
    announcement_type: z.enum(['article', 'case', 'famous-translators', 'sales']).exactOptional(),
    author: z.string().exactOptional(),
    content: z.string().exactOptional().openapi({ description: 'Article content' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    excerpt: z.string().exactOptional().openapi({ description: 'Article excerpt' }),
    id: z
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
    language: z.string().exactOptional().openapi({ description: 'language code' }),
    links: BlogArticleLinksSchema.exactOptional(),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
    topic: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlogArticle')

const BlogArticleListSchema = z
  .object({
    articles: z.array(BlogArticleSchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlogArticleList')

const CMSchema = z
  .object({
    user_id: z
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
  })
  .openapi({ required: [] })
  .openapi('CM')

const LanguageScoreSchema = z.float32().openapi('LanguageScore')

const LanguagePairSchema = z
  .object({
    source_language: z.string().exactOptional(),
    target_language: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LanguagePair')

const UserLinksSchema = LinksMetaSchema.and(
  z
    .object({
      login_as: HrefSchema.exactOptional().openapi({ description: 'Exculusive users only' }),
      projects: HrefSchema.exactOptional().openapi({ description: 'client users only' }),
      responsivity: HrefSchema.exactOptional().openapi({ description: 'vendor users only' }),
      stats: HrefSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('UserLinks')

const SocialMediaSchema = z
  .object({
    facebook_url: z.string().exactOptional(),
    linkedIn_url: z.string().exactOptional(),
    twitter_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SocialMedia')

const UserGroupSchema = z
  .object({
    corporate_id: z
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
    id: z
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
    name: z.string().exactOptional(),
    permissions: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserGroup')

const ProfileSurveySchema = z
  .object({
    current_services: z.string().exactOptional(),
    daily_proofreading_capacity: z.string().exactOptional(),
    daily_translation_capacity: z.string().exactOptional(),
    dtp_software: z.string().exactOptional(),
    experience: z.string().exactOptional(),
    is_certified_translator: z.string().exactOptional(),
    is_sworn_translator: z.string().exactOptional(),
    memoq: z.string().exactOptional(),
    memsource: z.string().exactOptional(),
    omegat: z.string().exactOptional(),
    proofreader_experience: z.string().exactOptional(),
    provides_creative_writing_service: z.string().exactOptional(),
    provides_postedit_service: z.string().exactOptional(),
    reference: z.string().exactOptional(),
    sdl_trados: z.string().exactOptional(),
    skype_id: z.string().exactOptional(),
    smartcat: z.string().exactOptional(),
    smartling: z.string().exactOptional(),
    software: z.string().exactOptional(),
    specialization: z.string().exactOptional(),
    subtitle_edit: z.string().exactOptional(),
    subtitle_workshop: z.string().exactOptional(),
    translator_association: z.string().exactOptional(),
    transsuite_2000: z.string().exactOptional(),
    vendor_profile_lsp: z.string().exactOptional(),
    wordbee: z.string().exactOptional(),
    wordfast: z.string().exactOptional(),
    work_type: z.string().exactOptional(),
    work_with: z.string().exactOptional(),
    working_as: z.string().exactOptional(),
    working_timezone: z.string().exactOptional(),
    xbench: z.string().exactOptional(),
    xtm: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileSurvey')

const TagSchema = z.string().openapi('Tag')

const UserSchema = z
  .object({
    billing: BillingAddressSchema.exactOptional().openapi({ 'x-internal': true }),
    birthday: z.iso.date().exactOptional().openapi({ 'x-internal': true }),
    can_work_manual_files: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '\\@deprecated. use `vendor` key' }),
    city: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use mailing or billing key.',
        'x-internal': true,
      }),
    client: z
      .object({
        corporate: z
          .object({
            email: z.string().exactOptional().openapi({ 'x-internal': true }),
            id: z
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
            logo: z.string().exactOptional(),
            name: z.string().exactOptional(),
            phone_number: z.string().exactOptional().openapi({ 'x-internal': true }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        nps: z.float32().exactOptional(),
        subjects: z
          .record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    corporate_id: z
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
    country: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use mailing or billing key.',
        'x-internal': true,
      }),
    created_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    do_not_contact: z.boolean().exactOptional(),
    email: z.string().exactOptional().openapi({ 'x-internal': true }),
    first_name: z.string().exactOptional(),
    has_pwd: z.boolean().exactOptional(),
    id: z
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
    is_client: z.boolean().exactOptional(),
    is_developer: z.boolean().exactOptional(),
    is_proofreader: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '\\@deprecated. use `vendor` key' }),
    is_prospect: z.boolean().exactOptional().openapi({ 'x-internal': true }),
    is_sales_person: z.boolean().exactOptional().openapi({ 'x-internal': true }),
    is_vendor: z.boolean().exactOptional(),
    language_pairs: z
      .array(LanguagePairSchema)
      .exactOptional()
      .openapi({ deprecated: true, description: '\\@deprecated. use `vendor` key' }),
    last_name: z.string().exactOptional(),
    last_seen_online_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    links: UserLinksSchema.exactOptional(),
    locale: z.string().exactOptional().openapi({ description: 'User Locale' }),
    mailing: AddressSchema.exactOptional().openapi({ 'x-internal': true }),
    name: z.string().exactOptional(),
    native_language: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: '\\@deprecated. Native language of user' }),
    nps: z
      .float32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use /stats endpoint for the current nps value.',
        'x-internal': true,
      }),
    phone_number: z.string().exactOptional().openapi({ 'x-internal': true }),
    profile_picture_path: z.string().exactOptional(),
    social_media: SocialMediaSchema.exactOptional().openapi({ 'x-internal': true }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use mailing or billing key.',
        'x-internal': true,
      }),
    status: z.string().exactOptional(),
    street: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use mailing or billing key.',
        'x-internal': true,
      }),
    timezone: z.string().exactOptional(),
    tms_user_name: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use `vendor` key',
        'x-internal': true,
      }),
    user_groups: z.array(UserGroupSchema).exactOptional(),
    vendor: z
      .object({
        can_work_manual_files: z.boolean().exactOptional(),
        email_open_rate: z.float32().exactOptional(),
        is_frozen: z.boolean().exactOptional(),
        is_proofreader: z.boolean().exactOptional(),
        language_pairs: z.array(LanguagePairSchema).exactOptional(),
        native_language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Native language of user' }),
        pam_tqs: z.float32().exactOptional(),
        paypal_email: z.string().exactOptional().openapi({ 'x-internal': true }),
        profile_survey: ProfileSurveySchema.exactOptional().openapi({
          description: 'Vendor Profile Survey answers',
        }),
        require_1099: z.boolean().exactOptional().openapi({ 'x-internal': true }),
        tags: z.array(TagSchema).exactOptional().openapi({ 'x-internal': true }),
        tms_user_name: z.string().exactOptional().openapi({ 'x-internal': true }),
        vendor_type: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    zip_code: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: '\\@deprecated. use mailing or billing key. new key name is "zip".',
        'x-internal': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('User')

const ErrorSchema = z
  .object({
    code: z.string().exactOptional(),
    help: z.string().exactOptional(),
    http_code: z.int32().exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ProjectLinksSchema = LinksMetaSchema.and(
  z
    .object({
      documents: HrefSchema.exactOptional(),
      glossaries: HrefSchema.exactOptional(),
      payment: HrefSchema.exactOptional(),
      'quote-pdf': HrefSchema.exactOptional(),
      styleguides: HrefSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ProjectLinks')

const VendorProjectPairSchema = z
  .object({
    currency: z.string().default('usd').exactOptional(),
    is_proofreader: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the vendor be able to proofred this pair' }),
    proofreader: UserSchema.exactOptional(),
    proofreading_rate: z.float32().exactOptional(),
    source_language: z.string().exactOptional().openapi({ description: 'Source language code' }),
    target_language: z.string().exactOptional().openapi({ description: 'Target language code' }),
    translation_rate: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VendorProjectPair')

const VendorProjectRoleSchema = z
  .enum(['translator', 'proofreader', 'both'])
  .openapi({
    description:
      "Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with.",
  })
  .openapi('VendorProjectRole')

const ProjectSourceSchema = z.enum(['api', 'web']).openapi('ProjectSource')

const ProjectStatusSchema = z
  .enum(['pending', 'started', 'completed', 'translated', 'proofread'])
  .openapi('ProjectStatus')

const ProjectSchema = z
  .object({
    average_scores: z
      .record(z.string(), LanguageScoreSchema)
      .exactOptional()
      .openapi({ 'x-internal': true }),
    budget_code: z.string().exactOptional(),
    callback_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Callback URL to notify when project status changed.' }),
    can_pam_manage: z.boolean().exactOptional().openapi({ 'x-internal': true }),
    client: UserSchema.exactOptional().openapi({
      description:
        'User entity for Client. This is only given when project is requested with detailed=true',
    }),
    cm_id: z
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
        description: "Assigned admin's id",
        'x-internal': true,
      }),
    completed_on: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    continuous_project_type: z.string().exactOptional(),
    created_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    custom: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Custom data provided while creating a new project.' }),
    delivery_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.',
      }),
    id: z
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
    is_api_project: z.boolean().exactOptional().openapi({ 'x-internal': true }),
    is_certified: z.boolean().exactOptional(),
    is_continuous: z.boolean().exactOptional(),
    is_manual: z.boolean().exactOptional().openapi({ 'x-internal': true }),
    links: ProjectLinksSchema.exactOptional(),
    pairs: z
      .array(VendorProjectPairSchema)
      .exactOptional()
      .openapi({
        description:
          "Currently authed vendor's available working language pairs in this project. Includes rates per language pair. Includes complex pair logic such as bilingualism, project reverse pair enforcement etc.",
        'x-internal': true,
      }),
    pivoted_projects: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'Quote IDs of pivots' }),
    price: z
      .object({
        amount: z.float32().exactOptional(),
        base_amount: z.float32().exactOptional(),
        base_currency: z.string().default('usd').exactOptional(),
        currency: z.string().default('usd').exactOptional(),
        usd_amount: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'USD is our base pricing currency. If `currency` is different, this will help.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    price_without_discount: z
      .object({
        amount: z.float32().exactOptional(),
        base_amount: z.float32().exactOptional(),
        base_currency: z.string().default('usd').exactOptional(),
        currency: z.string().default('usd').exactOptional(),
        usd_amount: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'USD is our base pricing currency. If `currency` is different, this will help.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    role: VendorProjectRoleSchema.exactOptional().openapi({ 'x-internal': true }),
    should_send_client_survey: z.boolean().exactOptional().openapi({ 'x-internal': true }),
    source: ProjectSourceSchema.exactOptional().openapi({
      description:
        'The source platform where this project was first created. Current options are "api", "web".',
    }),
    source_language: z.string().exactOptional(),
    status: ProjectStatusSchema.exactOptional(),
    subjects: z.array(z.string()).exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
    tms_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'TMS project name for this MW project. Requires privileged scope.',
        'x-internal': true,
      }),
    valid_until: z
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
        description: 'Unix epoch time. Available only if status is `pending`.',
      }),
    vendor_word_count: z
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
      .openapi({ type: 'integer', format: 'int64', 'x-internal': true }),
    word_count: z
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
    word_count_analysis: z
      .object({
        base: z.number().exactOptional(),
        duplicate: z.number().exactOptional(),
        exclusion: z.number().exactOptional(),
        final: z.number().exactOptional(),
        tm: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Project')

const CallbackResultSchema = z
  .object({
    data: ProjectSchema.exactOptional(),
    result: z
      .string()
      .exactOptional()
      .openapi({ description: 'Callback response returned from `url`.' }),
    type: ProjectStatusSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'The URL that received the callback.' }),
  })
  .openapi({ required: [] })
  .openapi('CallbackResult')

const CancelProjectRequestSchema = z
  .object({ reason: z.string().exactOptional().openapi({ description: 'Cancellation reason' }) })
  .openapi({ required: [] })
  .openapi('CancelProjectRequest')

const ProofreaderWithLanguageSchema = z
  .object({
    full_name: z.string().exactOptional().openapi({ description: 'full name of the proofreader' }),
    id: z.number().exactOptional().openapi({ description: 'proofreader id' }),
    language: z.string().exactOptional().openapi({ description: 'language code (i.e en-US)' }),
    vendor_link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'link to the vendor that can be only used in motaword admin application',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProofreaderWithLanguage')

const ClientProfileSchema = z
  .object({
    account_creation_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    client_project_count: z
      .number()
      .exactOptional()
      .openapi({ description: 'total project count that this client sent' }),
    corporate: z.string().exactOptional().openapi({ description: 'corporate name' }),
    corporate_id: z.number().exactOptional().openapi({ description: 'corporate id' }),
    corporate_user_count: z
      .number()
      .exactOptional()
      .openapi({ description: 'total user count in a corporation' }),
    frequent_file_extension: z
      .string()
      .exactOptional()
      .openapi({ description: 'the file extension for the files that usually this client sent' }),
    frequent_language_pairs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'frequent language pairs' }),
    full_name: z.string().exactOptional().openapi({ description: 'full name of the client' }),
    growth: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The answer for the question "Is there any growth for this corporate\'s spending". The values can be true, false or null if the corporate is oour client for less than 6 months',
      }),
    is_complex: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'the answer for the question "Is this client usually sent complex projects?"',
      }),
    last_12_months_spending: z
      .float32()
      .exactOptional()
      .openapi({ description: "corporate's spending in twelve months" }),
    last_project: z
      .number()
      .exactOptional()
      .openapi({ description: 'the quote number for the last project of this client' }),
    last_project_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'the creation date of the last project that is sent by this client',
      }),
    last_proofreaders: z
      .array(ProofreaderWithLanguageSchema)
      .exactOptional()
      .openapi({ description: 'list of prooofreaders for the target languages of last project' }),
    notes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'notes that is submited for this client and/or with her projects' }),
    nps: z
      .object({
        average: z
          .object({
            completed_surveys_count: z
              .number()
              .exactOptional()
              .openapi({ description: 'total number of completed survey count by this client' }),
            score: z
              .float32()
              .exactOptional()
              .openapi({ description: 'average score for all coompleted surveys' }),
          })
          .exactOptional()
          .openapi({
            description: 'information for all nps survey that this client completed',
            required: [],
          }),
        last: z
          .object({
            completion_date: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'last surveys completion date' }),
            score: z
              .number()
              .exactOptional()
              .openapi({ description: 'score that the client gave us' }),
          })
          .exactOptional()
          .openapi({ description: 'last survey info', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'net promoter score info for this client', required: [] }),
    user_rank_in_project_count: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'rank of the user in all corporate users for project count. If the user is the most active user foor sending projects her rank is 1',
      }),
    user_rank_in_spending: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'rank of the user in all corporate users for total spending. If the user is the most active user for spending her rank is 1',
      }),
  })
  .openapi({ required: [] })
  .openapi('ClientProfile')

const ClientProjectStatSchema = z
  .object({
    languages: z.array(z.string()).exactOptional(),
    month: z.string().exactOptional(),
    number_of_projects: z
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
    total_spending: z.float32().exactOptional(),
    week: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientProjectStat')

const ClientProjectStatsSchema = z
  .object({ stats: z.array(ClientProjectStatSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ClientProjectStats')

const LanguageStringStatSchema = z
  .object({
    project_string_count: z
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
    source_language: z.string().exactOptional(),
    tm_string_count: z
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
  })
  .openapi({ required: [] })
  .openapi('LanguageStringStat')

const ClientStringStatsSchema = z
  .object({
    language_counts: z.array(LanguageStringStatSchema).exactOptional(),
    total_project_strings_count: z
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
    total_tm_strings_count: z
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
  })
  .openapi({ required: [] })
  .openapi('ClientStringStats')

const ClientStringTranslationSchema = z
  .object({
    content: z.string().exactOptional(),
    last_changed: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    resource: z.string().exactOptional(),
    resource_id: z.string().exactOptional(),
    state: z.enum(['Translated', 'Approved']).exactOptional(),
    target_language: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientStringTranslation')

const ClientStringWithTranslationsSchema = z
  .object({
    content: z.string().exactOptional(),
    language: z.string().exactOptional(),
    last_changed: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    translations: z.array(ClientStringTranslationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientStringWithTranslations')

const ClientStringsSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    strings: z.array(ClientStringWithTranslationsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientStrings')

const CommentLinksSchema = LinksMetaSchema.and(
  z
    .object({
      activity: HrefSchema.exactOptional().openapi({
        description: 'Link to the activity to which this comment was submitted.',
      }),
      project: HrefSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('CommentLinks')

const CommentSchema = z
  .object({
    comment: z.string().openapi({ description: 'Comment text.' }),
    commented_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    id: z
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
    links: CommentLinksSchema.exactOptional(),
  })
  .openapi({ required: ['comment'] })
  .openapi('Comment')

const CommentListSchema = z
  .object({
    activities: z.array(CommentSchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommentList')

const CommissionSchema = z
  .object({
    amount: MonetarySchema.exactOptional(),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    project: ProjectSchema.exactOptional(),
    status: z
      .enum(['completed', 'unclaimed', 'failed', 'sent', 'waiting', 'waiting_invoice'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Commission')

const CommissionListSchema = z
  .object({
    commissions: z.array(CommissionSchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommissionList')

const CommissionStatsSchema = z
  .object({
    balance: MonetarySchema.exactOptional(),
    paid: MonetarySchema.exactOptional(),
    quote_total: MonetarySchema.exactOptional(),
    total: MonetarySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommissionStats')

const ContinuousProjectLinksSchema = LinksMetaSchema.and(
  z
    .object({
      editors: z
        .record(
          z.string(),
          HrefSchema.openapi({
            description: 'MotaWord editor link for this file, in this language code.',
          }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ContinuousProjectLinks')

const SubscriptionSchema = z
  .object({
    downgrade: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Stripe downgradable plan' }),
    payment_method: z
      .int()
      .exactOptional()
      .openapi({ description: 'Stripe subscription plan payment card internal id' }),
    period_end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Stripe plan period end' }),
    plan_id: z.string().exactOptional().openapi({ description: 'Stripe subscription plan id' }),
    plan_name: z.string().exactOptional().openapi({ description: 'Stripe subscription plan name' }),
    price: z.string().exactOptional().openapi({ description: 'Stripe plan price' }),
    products: z.array(z.any()).exactOptional(),
    schedule_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stripe Scheduled plan period end' }),
    schedule_start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Stripe Scheduled start date' }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stripe subscription id for this project' }),
    upgrade: z.array(z.string()).exactOptional().openapi({ description: 'Stripe upgradable plan' }),
    withTrial: z.any().exactOptional().openapi({ description: 'Stripe plan trial' }),
  })
  .openapi({ required: [] })
  .openapi('Subscription')

const ContinuousProjectSchema = z
  .object({
    analytics_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should we collect analytics data from Active for this continuous project?',
      }),
    auto_start_postedit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Immediately start post-editing project for translation requests that are applied MT.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    id: z
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
    is_enabled: z.boolean().exactOptional(),
    last_activity_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    links: ContinuousProjectLinksSchema.exactOptional(),
    mt_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Immediately apply MT on translation requests if they are missing from TM.',
      }),
    mt_engine: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One of "MOTAWORD", "GOOGLE", "AMAZON", "MS". Default is "MOTAWORD".',
      }),
    name: z.string().exactOptional(),
    postedit_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Get an instant quote for translation requests that are applied MT.',
      }),
    source_language: z.string().exactOptional(),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One of "a => ACTIVE", "i => INACTIVE", "d => DELETED", "c => SCHEDULED CANCELLATION", "p => SCHEDULED CHANGE"',
      }),
    subscription: SubscriptionSchema.exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Continuous project type. We currently have only 2 types, NULL and "active".',
      }),
    word_count: z
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
  })
  .openapi({ required: [] })
  .openapi('ContinuousProject')

const ContinuousProjectCachedStringsSchema = z
  .record(z.string(), z.string())
  .openapi({ description: 'source > target map of strings for translations' })
  .openapi('ContinuousProjectCachedStrings')

const ContinuousProjectLanguageCacheSchema = z
  .object({
    mt: ContinuousProjectCachedStringsSchema.exactOptional(),
    nonparsed: ContinuousProjectCachedStringsSchema.exactOptional(),
    tm: ContinuousProjectCachedStringsSchema.exactOptional(),
  })
  .openapi({ description: 'TM, MT and Nonparsed cache list for translations', required: [] })
  .openapi('ContinuousProjectLanguageCache')

const ContinuousProjectCacheSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    translations: z.record(z.string(), ContinuousProjectLanguageCacheSchema).exactOptional(),
  })
  .openapi({
    description: 'Continuous project cache for translations per target language.',
    required: [],
  })
  .openapi('ContinuousProjectCache')

const ContinuousProjectCostsSchema = z
  .object({
    mt: MonetarySchema.exactOptional(),
    post_edit: MonetarySchema.exactOptional(),
    saved: MonetarySchema.exactOptional(),
    total: MonetarySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectCosts')

const DocumentLinksSchema = LinksMetaSchema.and(
  z
    .object({
      admins: z
        .record(
          z.string(),
          HrefSchema.openapi({
            description: 'MotaWord admin link for this file, in this language code.',
          }),
        )
        .exactOptional(),
      download: HrefSchema.exactOptional(),
      editors: z
        .record(
          z.string(),
          HrefSchema.openapi({
            description: 'MotaWord editor link for this file, in this language code.',
          }),
        )
        .exactOptional(),
      'preview-box': HrefSchema.exactOptional().openapi({
        description:
          'Box.com URL to preview this document. This URL is temporary. You need to re-fetch the file to refresh the Box.com preview URL. Available for documents and style guides.',
      }),
      'preview-pdf': HrefSchema.exactOptional().openapi({
        description:
          'This is our fallback preview URL, providing a PDF file. Use this file to embed in your PDF viewer. Available for documents and style guides.',
      }),
      'preview-pdf-viewer': HrefSchema.exactOptional().openapi({
        description:
          'This is another version of preview-pdf, this time pointing to a preview viewer page on front application. This page requires authentication and comes with its own PDF viewer.',
      }),
      progress: HrefSchema.exactOptional().openapi({
        description: 'Progress endpoint URL for this file',
      }),
      project: HrefSchema.exactOptional(),
      strings: HrefSchema.exactOptional().openapi({
        description: 'Strings endpoint URL for this file',
      }),
      thumbnail: HrefSchema.exactOptional().openapi({
        description:
          'Thumbnail preview URL of the document. If doc has a page structure, this is probably only the first page.',
      }),
    })
    .openapi({ required: [] }),
).openapi('DocumentLinks')

const ContinuousProjectDocumentSchema = z
  .object({
    billed_word_count: z
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
    id: z.string().exactOptional(),
    links: DocumentLinksSchema.exactOptional(),
    name: z.string().exactOptional(),
    post_edit_enabled: z.boolean().exactOptional(),
    project_id: z.string().exactOptional(),
    source_language: z.string().exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
    word_count: z
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
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectDocument')

const ContinuousProjectDocumentListSchema = z
  .object({
    documents: z.array(ContinuousProjectDocumentSchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectDocumentList')

const ContinuousProjectDocumentProgressBodySchema = z
  .object({
    documentName: z.string().exactOptional(),
    filterByLanguage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectDocumentProgressBody')

const ContinuousProjectDocumentStringsBodySchema = z
  .object({ documentName: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ContinuousProjectDocumentStringsBody')

const InvoiceLinksSchema = LinksMetaSchema.and(
  z
    .object({
      corporate: HrefSchema.exactOptional(),
      html: HrefSchema.exactOptional(),
      json: HrefSchema.exactOptional(),
      pdf: HrefSchema.exactOptional(),
      project: HrefSchema.exactOptional(),
      view: HrefSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('InvoiceLinks')

const InvoiceSchema = z
  .object({
    amount: z.float32().exactOptional().openapi({ description: 'Monetary amount' }),
    base_amount: z.float32().exactOptional().openapi({ description: 'Monetary amount' }),
    base_currency: z.string().default('usd').exactOptional(),
    billing: BillingAddressSchema.exactOptional(),
    currency: z.string().default('usd').exactOptional(),
    id: z
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
    invoice_no: z
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
    invoiced_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    links: InvoiceLinksSchema.exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Invoice')

const ContinuousProjectInvoicesSchema = z
  .object({ invoices: z.array(InvoiceSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ContinuousProjectInvoices')

const ContinuousProjectLanguageSchema = z
  .object({ code: z.string().exactOptional(), is_enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ContinuousProjectLanguage')

const ProgressSubSchema = z
  .object({
    proofreading: z.float32().exactOptional(),
    total: z.float32().exactOptional(),
    translation: z.float32().exactOptional(),
    word_count: z
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
  })
  .openapi({ required: [] })
  .openapi('ProgressSub')

const ProgressLinkSchema = LinksMetaSchema.and(
  z.object({ project: HrefSchema.exactOptional() }).openapi({ required: [] }),
).openapi('ProgressLink')

const ProgressSchema = z
  .object({
    languages: z.record(z.string(), ProgressSubSchema).exactOptional(),
    links: ProgressLinkSchema.exactOptional(),
    project_status: ProjectStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .and(ProgressSubSchema)
  .openapi('Progress')

const ContinuousProjectWordCountsSchema = z
  .object({
    mt: z
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
    post_edit: z
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
    total: z
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
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectWordCounts')

const ContinuousProjectProgressSchema = z
  .object({
    costs: ContinuousProjectCostsSchema.exactOptional(),
    progress: ProgressSchema.exactOptional(),
    word_counts: ContinuousProjectWordCountsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectProgress')

const ContinuousProjectUpdateContentSchema = z
  .object({
    analytics_enabled: z.boolean().exactOptional(),
    auto_start_postedit: z.boolean().exactOptional(),
    is_enabled: z.boolean().exactOptional(),
    languages: z.array(ContinuousProjectLanguageSchema).exactOptional(),
    mt_enabled: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    postedit_enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectUpdateContent')

const ContinuousProjectsListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    projects: z.array(ContinuousProjectSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContinuousProjectsList')

const CorporateAccountSchema = z
  .object({
    billing: BillingAddressSchema.exactOptional(),
    domain: z.string().exactOptional(),
    email: z.string().exactOptional(),
    id: z
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
    logo: z.string().exactOptional(),
    name: z.string().exactOptional(),
    web_site: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated, use `domain`.' }),
  })
  .openapi({ required: [] })
  .openapi('CorporateAccount')

const CreditCardSchema = z
  .object({
    bin: z.string().exactOptional(),
    id: z
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
    is_default: z.boolean().exactOptional(),
    payment_code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreditCard')

const DeliveryPredictionInLanguageSchema = z
  .object({
    language: z.string().exactOptional(),
    late: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'true for late, false for on-time delivery' }),
    probability: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeliveryPredictionInLanguage')

const DeliveryPredictionPayloadSchema = z
  .object({
    projectId: z
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
  })
  .openapi({ required: [] })
  .openapi('DeliveryPredictionPayload')

const DeliveryPredictionResponseSchema = z
  .object({ result: z.array(DeliveryPredictionInLanguageSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DeliveryPredictionResponse')

const DeprecatedStringTranslationContentSchema = z
  .object({
    contents: z.array(z.string()).exactOptional(),
    source_language: z.string().exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeprecatedStringTranslationContent')

const ManualFileSchema = z
  .object({
    driveFileId: z
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
    isProofread: z.boolean().exactOptional(),
    isTranslated: z.boolean().exactOptional(),
    language: z.string().exactOptional(),
    proofreadingFileId: z
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
    translationFileId: z
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
  })
  .openapi({ required: [] })
  .openapi('ManualFile')

const DocumentSchema = z
  .object({
    file_type: z.string().exactOptional().openapi({ description: 'Extension of the file' }),
    has_custom_package: z.boolean().exactOptional(),
    id: z
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
    links: DocumentLinksSchema.exactOptional(),
    manual_files: z.array(ManualFileSchema).exactOptional(),
    name: z.string().exactOptional(),
    project_id: z
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
    review_in_manual_editor: z.boolean().exactOptional(),
    scheme: z.object({}).exactOptional(),
    search_score: z.float32().exactOptional(),
    source_language: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
    uploaded_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
    word_count: z
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
  })
  .openapi({ required: [] })
  .openapi('Document')

const DocumentInSearchSchema = DocumentSchema.and(
  z.object({ search_result_reason: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('DocumentInSearch')

const DocumentListSchema = z
  .object({
    documents: z.array(DocumentSchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentList')

const DocumentSubjectsSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DocumentSubjects')

const LinkedSourceDocumentSchema = z
  .object({
    name: z.string().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'file size in bytes. optional.' }),
    source: z
      .enum(['dropbox', 'googledrive', 'icloud'])
      .exactOptional()
      .openapi({
        description:
          'Preferred source names are listed as enum. If you have a custom file type, simply enter that name.',
      }),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LinkedSourceDocument')

const DocumentUpdatesSchema = z
  .object({
    'documents[]': z
      .array(z.file().openapi({ type: 'string', format: 'binary' }))
      .exactOptional()
      .openapi({ description: 'You can add as many files as you want in documents[] parameter.' }),
    'schemes[]': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.',
      }),
    'source-links[]': z
      .array(LinkedSourceDocumentSchema)
      .exactOptional()
      .openapi({
        description:
          'When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents',
      }),
  })
  .openapi({ required: [] })
  .openapi('DocumentUpdates')

const DocumentUploadRequestSchema = z
  .object({
    documents: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Single file data. The name is plural to provide a consistent naming convention.',
      }),
    schemes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.',
      }),
    'source-link': LinkedSourceDocumentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentUploadRequest')

const EarningSchema = z
  .object({
    amount: z.float32().exactOptional(),
    currency: z.string().default('usd').exactOptional(),
    due_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    status: z.enum(['paid', 'pending', 'failed']).exactOptional(),
    words: z
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
    words_approved: z
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
    words_translated: z
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
  })
  .openapi({ required: [] })
  .openapi('Earning')

const ProjectTQSSchema = z
  .object({
    is_above_average: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Is this score above or below the average among other vendors in the same project?',
      }),
    score: z.float32().exactOptional(),
    strings_edited: z
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
          'The number of translated strings by this translator which was edited by a proofreader.',
      }),
    strings_translated: z
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
        description: 'The number of translated strings by this translator.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProjectTQS')

const EarningWithTQSSchema = EarningSchema.and(ProjectTQSSchema)
  .and(
    z
      .object({
        project_id: z
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
      })
      .openapi({ required: [] }),
  )
  .openapi('EarningWithTQS')

const EarningsSchema = z
  .object({
    completed: z.array(EarningWithTQSSchema).exactOptional(),
    ongoing: z.array(EarningWithTQSSchema).exactOptional(),
    total: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Earnings')

const EmailSchema = z
  .object({ email: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Email')

const FileNeedsVendorSchema = z
  .object({
    fileId: z
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
    guid: z.string().exactOptional(),
    projectId: z
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
    reason: z.string().exactOptional(),
    targetLanguage: z.array(z.string()).exactOptional(),
    taskType: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileNeedsVendor')

const SimpleModelSchema = z
  .object({
    id: z
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
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimpleModel')

const FilterContentsSchema = z
  .object({
    budget_codes: z.array(z.string()).exactOptional(),
    categories: z.array(z.string()).exactOptional(),
    clients: z.array(SimpleModelSchema).exactOptional(),
    documents: z.array(SimpleModelSchema).exactOptional(),
    projects: z.array(SimpleModelSchema).exactOptional(),
    severities: z.array(z.string()).exactOptional(),
    source_languages: z.array(z.string()).exactOptional(),
    subjects: z.array(z.string()).exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
    vendors: z.array(SimpleModelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterContents')

const FilterDatesSchema = z
  .object({
    date_from: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    date_to: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('FilterDates')

const FilterVendorRequestSchema = z
  .object({
    clients: z.array(z.int()).exactOptional(),
    communication_channel: z.array(z.string()).exactOptional(),
    corporate_ids_for_auth: z.array(z.int()).exactOptional(),
    corporates: z.array(z.int()).exactOptional(),
    country: z.array(z.string()).exactOptional(),
    created_at: z.string().exactOptional(),
    current_services: z.array(z.string()).exactOptional(),
    daily_proofreading_capacity: z.int().exactOptional(),
    daily_translation_capacity: z.int().exactOptional(),
    destination_languages: z.array(z.int()).exactOptional(),
    dtp_software: z.array(z.string()).exactOptional(),
    email_address: z.string().exactOptional(),
    experience: z.array(z.string()).exactOptional(),
    first_name: z.string().exactOptional(),
    id: z.array(z.int()).exactOptional(),
    is_certified_translator: z.boolean().exactOptional(),
    is_sworn_translator: z.boolean().exactOptional(),
    language_pairs: z.array(z.array(z.int())).exactOptional(),
    last_name: z.string().exactOptional(),
    last_online: z.string().exactOptional(),
    last_worked: z.string().exactOptional(),
    memoq: z.int().exactOptional(),
    memsource: z.int().exactOptional(),
    min_tqs: z.number().exactOptional(),
    omegat: z.int().exactOptional(),
    project_count: z.int().exactOptional(),
    proofreader_experience: z.int().exactOptional(),
    provides_creative_writing_service: z.boolean().exactOptional(),
    provides_postedit_service: z.boolean().exactOptional(),
    quote_file_subjects: z.array(z.string()).exactOptional(),
    reference: z.string().exactOptional(),
    sdl_trados: z.int().exactOptional(),
    search: z.string().exactOptional(),
    skype_id: z.string().exactOptional(),
    smartcat: z.int().exactOptional(),
    smartling: z.int().exactOptional(),
    source_languages: z.array(z.int()).exactOptional(),
    specialization: z.array(z.string()).exactOptional(),
    status: z.array(z.string()).exactOptional(),
    subtitle_edit: z.int().exactOptional(),
    subtitle_workshop: z.int().exactOptional(),
    translator_association: z.string().exactOptional(),
    transsuite_2000: z.int().exactOptional(),
    user_working_timezone: z.array(z.string()).exactOptional(),
    vendor_profile_lsp: z.string().exactOptional(),
    vendor_tags: z.array(z.string()).exactOptional(),
    vendor_type: z.array(z.string()).exactOptional(),
    vendor_working_timezone: z.array(z.string()).exactOptional(),
    word_count: z.int().exactOptional(),
    wordbee: z.int().exactOptional(),
    wordfast: z.int().exactOptional(),
    work_type: z.string().exactOptional(),
    work_with: z.string().exactOptional(),
    working_as: z.array(z.string()).exactOptional(),
    xbench: z.int().exactOptional(),
    xtm: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterVendorRequest')

const FormatsSchema = z
  .object({
    documents: z
      .object({
        extensions: z.array(z.string()).exactOptional(),
        mimes: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    glossaries: z
      .object({ extensions: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    styleguides: z
      .object({ extensions: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Formats')

const GetQuotesForDocumentsBodySchema = z
  .object({
    files: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQuotesForDocumentsBody')

const GetQuotesForLanguagesBodySchema = z
  .object({ languages: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetQuotesForLanguagesBody')

const GlossarySchema = z
  .object({
    id: z
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
    links: DocumentLinksSchema.exactOptional(),
    name: z.string().exactOptional(),
    uploaded_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
  })
  .openapi({ required: [] })
  .openapi('Glossary')

const GlossaryListSchema = z
  .object({
    glossaries: z.array(GlossarySchema).exactOptional(),
    meta: PagingMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlossaryList')

const GlossaryUploadRequestSchema = z
  .object({
    glossaries: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.',
      }),
  })
  .openapi({ required: ['glossaries'] })
  .openapi('GlossaryUploadRequest')

const InstantContentsTranslationResultSchema = z
  .object({
    results: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'a map of source string > translated string.' }),
  })
  .openapi({ required: [] })
  .openapi('InstantContentsTranslationResult')

const InstantFilesTranslationResultSchema = z
  .object({
    results: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'a map of source file name > base64-encoded translated file.' }),
  })
  .openapi({ required: [] })
  .openapi('InstantFilesTranslationResult')

const InstantTranslationFilterSchema = z
  .object({
    skipMt: z.array(z.string()).exactOptional(),
    skipPostEdit: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InstantTranslationFilter')

const InstantTranslationRequestSchema = z
  .object({
    contents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Simple list of strings to be translated. You can also choose to upload files instead of strings.',
      }),
    documents: z
      .array(FileAsDataSchema)
      .exactOptional()
      .openapi({ description: 'You can add as many files as you want in documents parameter.' }),
    filters: InstantTranslationFilterSchema.exactOptional(),
    meta: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InstantTranslationRequest')

const InstantTranslationResultSchema = z
  .xor([InstantContentsTranslationResultSchema, InstantFilesTranslationResultSchema])
  .openapi('InstantTranslationResult')

const IntegrationsTokenSchema = z
  .object({ token: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('IntegrationsToken')

const InvitedVendorSchema = z
  .object({
    action: z.string().exactOptional().openapi({ description: 'Action to be taken' }),
    email_open_rate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Email opening rate of the vendor' }),
    is_entered: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Did the vendor enter the given project' }),
    is_get_paid: z.boolean().exactOptional().openapi({ description: 'Is vendor get ever paid?' }),
    is_worked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Did the vendor work on the given project' }),
    is_worked_in_any_project: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Vendors working status in any project' }),
    last_project_date: z.iso.date().exactOptional().openapi({ description: 'Last project date' }),
    project_status_when_interacted: z
      .number()
      .exactOptional()
      .openapi({ description: 'Project translation percentage when interacted with the vendor' }),
    registration_date: z.iso.date().exactOptional().openapi({ description: 'Registration date' }),
    responsiveness: z
      .number()
      .exactOptional()
      .openapi({ description: 'Responsiveness of the vendor' }),
    user_id: z.number().exactOptional().openapi({ description: 'Id in the Users' }),
    vendor_id: z.number().exactOptional().openapi({ description: 'Id in the Vendors' }),
    vendor_name: z.string().exactOptional().openapi({ description: 'The name of the vendor' }),
    vendor_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Type of the vendor in the given project namely translator or proofreader',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvitedVendor')

const InvitedVendorsByLanguageSchema = z
  .object({
    invited_vendors: z
      .array(InvitedVendorSchema)
      .exactOptional()
      .openapi({ description: 'Invited vendors for this target language' }),
    target_language: z
      .string()
      .exactOptional()
      .openapi({ description: 'Target Language that the vendors invited for' }),
  })
  .openapi({ required: [] })
  .openapi('InvitedVendorsByLanguage')

const LanguageSchema = z
  .object({ code: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Language')

const LanguagePairsReportSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    report: z
      .array(
        z
          .object({
            language_pair: z
              .object({
                source_language: z.string().exactOptional(),
                target_language: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            spending: z.float32().exactOptional(),
            word_count: z
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
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LanguagePairsReport')

const ListOrderTypeSchema = z.enum(['asc', 'desc']).openapi('ListOrderType')

const LocationUpdateContentSchema = z
  .object({
    lat: z.float32().openapi({ description: 'Latitude of location' }),
    lon: z.float32().openapi({ description: 'Longitude of location' }),
    timestamp: z.int().exactOptional(),
  })
  .openapi({ required: ['lat', 'lon'] })
  .openapi('LocationUpdateContent')

const MachineTranslatedStringsSchema = z
  .object({
    cost: MonetarySchema.exactOptional(),
    strings: z.array(ClientStringWithTranslationsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MachineTranslatedStrings')

const NewProjectSchema = z
  .object({
    callback_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
      }),
    coupon_code: z.string().exactOptional().openapi({ description: 'Coupon code to redeem' }),
    custom: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.',
      }),
    'documents[]': z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.',
      }),
    'glossaries[]': z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Optional. Only one glossary is supported at the moment.',
      }),
    source_language: z.string().exactOptional(),
    'styleguides[]': z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.',
      }),
    'target_languages[]': z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewProject')

const NewSalesActivitySchema = z
  .object({
    subject: z.string().exactOptional(),
    timestamp: z
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
    type: z.string().exactOptional().openapi({ description: 'Activity Type' }),
  })
  .openapi({ required: [] })
  .openapi('NewSalesActivity')

const NotificationSubscriptionSchema = z
  .object({
    device: z
      .enum([
        'iOS',
        'Android',
        'Chrome',
        'Firefox',
        'Safari',
        'Edge',
        'Amazon',
        'WindowsPhone',
        'Windows',
        'MacOS',
      ])
      .exactOptional(),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'OneSignal calls this "player ID".' }),
    type: z.literal('OneSignal').default('OneSignal').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationSubscription')

const OperationStatusEnumSchema = z
  .enum(['success', 'error'])
  .default('success')
  .openapi('OperationStatusEnum')

const OperationStatusSchema = z
  .object({ status: OperationStatusEnumSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('OperationStatus')

const PackageStatusEnumSchema = z
  .enum(['started', 'packaging', 'completed'])
  .openapi({
    description:
      "The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.",
  })
  .openapi('PackageStatusEnum')

const PackageStatusSchema = z
  .object({ status: PackageStatusEnumSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PackageStatus')

const PackageSchema = PackageStatusSchema.and(
  z
    .object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call.',
        }),
    })
    .openapi({ required: [] }),
).openapi('Package')

const PamMessageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'the message to be sent' }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'name of the recipients in the channel' }),
    slots: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'contexts for next message' }),
    thread_id: z.string().exactOptional().openapi({ description: 'id of the thread' }),
    thread_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'the key for thread_id default is project' }),
  })
  .openapi({ required: [] })
  .openapi('PamMessage')

const PasswordUpdateContentSchema = z
  .object({ password: z.string().exactOptional().openapi({ description: 'New Password' }) })
  .openapi({ required: [] })
  .openapi('PasswordUpdateContent')

const PaymentInfoSchema = z
  .object({
    billing: BillingAddressSchema.exactOptional(),
    card: CreditCardSchema.exactOptional(),
    cards: z.array(CreditCardSchema).exactOptional(),
    corporate: z
      .object({
        allow_api_invoicing: z.boolean().exactOptional(),
        allow_payment_code: z.boolean().exactOptional(),
        auto_charge: z.boolean().exactOptional(),
        billing: BillingAddressSchema.exactOptional(),
        card: CreditCardSchema.exactOptional(),
        contact_email_address: z.string().exactOptional(),
        payment_code: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    shared_card: CreditCardSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentInfo')

const PermissionSchema = z.string().openapi('Permission')

const PermissionListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    permissions: z.array(PermissionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PermissionList')

const PopularLanguagePairsSchema = z
  .object({ pairs: z.array(LanguagePairSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('PopularLanguagePairs')

const ProfilePictureUploadSchema = z
  .object({
    profile_picture: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Profile picture file contents. Accepted extensions are png, jpg.',
      }),
  })
  .openapi({ required: ['profile_picture'] })
  .openapi('ProfilePictureUpload')

const ProjectCompletionReportSchema = z
  .object({
    admin_user_id: z.number().exactOptional().openapi({ description: "Assigned admin's user id" }),
    completion_report_data: z.array(InvitedVendorsByLanguageSchema).exactOptional(),
    id: z.number().exactOptional().openapi({ description: 'internal id of the project' }),
    quote_id: z.number().exactOptional().openapi({ description: 'quote id of the project' }),
  })
  .openapi({ required: [] })
  .openapi('ProjectCompletionReport')

const ProjectIdSchema = z
  .object({
    'internal-id': z
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
    'public-id': z
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
  })
  .openapi({ required: [] })
  .openapi('ProjectId')

const ProjectInSearchSchema = ProjectSchema.and(
  z.object({ search_result_reason: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('ProjectInSearch')

const ProjectLaunchResponseEnumSchema = z.literal('started').openapi('ProjectLaunchResponseEnum')

const ProjectLaunchResponseSchema = z
  .object({ status: ProjectLaunchResponseEnumSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ProjectLaunchResponse')

const ProjectListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    projects: z.array(ProjectSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectList')

const ProjectPaymentSchema = z
  .object({
    bin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided.',
        'x-internal': true,
      }),
    budget_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional with corporate accounts. Not available for others.' }),
    card_id: z
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
          'Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.',
      }),
    payment_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. `corporate` payment method requires this.s' }),
    payment_method: z
      .enum(['corporate', 'client', 'app', 'credit', 'corporate_card'])
      .exactOptional()
      .openapi({
        description:
          "Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.",
      }),
    stripe_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card.',
        'x-internal': true,
      }),
  })
  .openapi({ required: [] })
  .openapi('ProjectPayment')

const ProjectUpdateSchema = z
  .object({
    callback_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
      }),
    coupon_code: z.string().exactOptional().openapi({ description: 'Coupon code to redeem' }),
    custom: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.',
      }),
    source_language: z.string().exactOptional(),
    'target_languages[]': z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectUpdate')

const QaEntrySchema = z
  .object({
    category: z.string().exactOptional(),
    comment: z.string().exactOptional(),
    docId: z.string().exactOptional(),
    editorLink: z.string().exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64' }),
    inSource: z.boolean().exactOptional(),
    isCurrent: z.boolean().exactOptional(),
    module: z.string().exactOptional(),
    projectId: SimpleModelSchema.exactOptional(),
    severity: z.string().exactOptional(),
    source: z.string().exactOptional(),
    sourceLanguage: SimpleModelSchema.exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64' }),
    state: z.string().exactOptional(),
    targetLanguage: SimpleModelSchema.exactOptional(),
    translation: z.string().exactOptional(),
    uniqueKey: z.string().exactOptional(),
    vendor: SimpleModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QaEntry')

const QaFilterSchema = z
  .object({
    budget_codes: z.array(z.string()).exactOptional(),
    categories: z.array(z.string()).exactOptional(),
    clients: z.array(z.number()).exactOptional(),
    date_from: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    date_to: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    documents: z.array(z.number()).exactOptional(),
    projects: z.array(z.number()).exactOptional(),
    severities: z.array(z.string()).exactOptional(),
    source_languages: z.array(z.string()).exactOptional(),
    subjects: z.array(z.string()).exactOptional(),
    target_languages: z.array(z.string()).exactOptional(),
    vendors: z.array(z.number()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QaFilter')

const QaWarningsSchema = z
  .object({ report: z.array(QaEntrySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('QaWarnings')

const RegeneratePreviewResponseSchema = z
  .object({ link: HrefSchema.exactOptional(), source: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RegeneratePreviewResponse')

const ReportContentSchema = z
  .object({
    activity_type: z.string().exactOptional().openapi({ description: 'Activity Type' }),
    message: z.string().exactOptional().openapi({ description: 'Report Message' }),
  })
  .openapi({ required: [] })
  .openapi('ReportContent')

const ReportFilterSchema = z
  .object({
    budget_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'budget code filter. valid for corporate accounts only.' }),
    date_from: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    date_to: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    source_languages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of source language codes.' }),
    target_languages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of target language codes.' }),
    users: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'List of corporate user IDs. Valid for corporate accounts only.' }),
  })
  .openapi({ required: [] })
  .openapi('ReportFilter')

const ResponsivitySchema = z
  .object({
    invited: z
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
    month: z.string().exactOptional(),
    notEntered: z
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
    onlyEntered: z
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
    score: z.float32().exactOptional(),
    week: z.string().exactOptional(),
    worked: z
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
  })
  .openapi({ required: [] })
  .openapi('Responsivity')

const ResponsivityListSchema = z
  .object({
    links: LinksMetaSchema.exactOptional(),
    responsivity: z.array(ResponsivitySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponsivityList')

const SalesActivitySchema = z
  .object({
    body: z.string().exactOptional(),
    created_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'timestamp' }),
    created_by: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SalesActivity')

const SalesActivitiesSchema = z
  .object({ activities: z.array(SalesActivitySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SalesActivities')

const SalesActivityTypeSchema = z
  .enum(['EMAIL', 'NOTE', 'INCOMING_EMAIL', 'TASK'])
  .openapi('SalesActivityType')

const StringTranslationStateSchema = z
  .enum(['Approved', 'Translated'])
  .openapi('StringTranslationState')

const StringInSearchSchema = z
  .object({
    file_id: z
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
    internal_project_id: z
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
    last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z',
      }),
    project_id: z
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
    search_score: z.float32().exactOptional(),
    source: z.string().exactOptional(),
    status: StringTranslationStateSchema.exactOptional(),
    string_id: z
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
    target: z.string().exactOptional(),
    targets: z.array(z.string()).exactOptional(),
    tm_name: z.string().exactOptional(),
    type: z
      .enum(['LOCAL_PROJECT', 'IMPORTED_TM'])
      .exactOptional()
      .openapi({
        description:
          'String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users.',
      }),
  })
  .openapi({ required: [] })
  .openapi('StringInSearch')

const SearchEverywhereResultSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    result: z
      .object({
        documents: z.array(DocumentInSearchSchema).exactOptional(),
        projects: z.array(ProjectInSearchSchema).exactOptional(),
        strings: z.array(StringInSearchSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SearchEverywhereResult')

const SingleStringSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'source string content' }),
    file_id: z
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
    id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SingleString')

const StatsSchema: z.ZodType<StatsType> = z
  .lazy(() =>
    z
      .object({
        client: ClientStatsSchema.exactOptional(),
        vendor: VendorStatsSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Stats')

const StringTranslationSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'source string content' }),
    id: z.string().exactOptional(),
    state: StringTranslationStateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringTranslation')

const StringWithTranslationsSchema = SingleStringSchema.and(
  z
    .object({ translations: z.record(z.string(), StringTranslationSchema).exactOptional() })
    .openapi({ required: [] }),
).openapi('StringWithTranslations')

const StringListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    translations: z.array(StringWithTranslationsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringList')

const StyleGuideSchema = z
  .object({
    id: z
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
    links: DocumentLinksSchema.exactOptional(),
    name: z.string().exactOptional(),
    uploaded_at: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
  })
  .openapi({ required: [] })
  .openapi('StyleGuide')

const StyleGuideListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    styleguides: z.array(StyleGuideSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StyleGuideList')

const StyleGuideUploadRequestSchema = z
  .object({
    styleguides: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.',
      }),
  })
  .openapi({ required: ['styleguides'] })
  .openapi('StyleGuideUploadRequest')

const SurveyAnswerSchema = z
  .object({
    answer: z.string().exactOptional(),
    project_id: z
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
    question_answer_id: z
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
    question_id: z
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
    user_id: z
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
  })
  .openapi({ required: [] })
  .openapi('SurveyAnswer')

const SurveyAnswersSchema = z
  .object({ answers: z.array(SurveyAnswerSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SurveyAnswers')

const SurveyQuestionSchema = z
  .object({
    answers: z.array(SimpleModelSchema).exactOptional(),
    question: z
      .object({
        enabled: z.boolean().exactOptional(),
        format: z.string().exactOptional(),
        id: z
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
        question: z.string().exactOptional(),
        text: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    question_answers: z.array(SimpleModelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SurveyQuestion')

const SurveyQuestionsSchema = z.array(SurveyQuestionSchema).openapi('SurveyQuestions')

const SuspendUserRequestSchema = z
  .object({
    reason: z.string().exactOptional().openapi({ description: 'Suspension reason for vendor' }),
  })
  .openapi({ required: [] })
  .openapi('SuspendUserRequest')

const TokenSchema = z
  .object({
    access_token: z.string().exactOptional(),
    expires_in: z
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
    refresh_token: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    token_type: z.string().exactOptional(),
    user_id: z
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
  })
  .openapi({ required: [] })
  .openapi('Token')

const TokenErrorSchema = ErrorSchema.and(
  z
    .object({
      account_status: z
        .enum([
          'registered',
          'email_confirmed',
          'deleted',
          'suspended',
          'rejected',
          'approved',
          'resume',
          'webinar',
          'course',
        ])
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('TokenError')

const TokenRequestSchema = z
  .object({
    grant_type: z
      .string()
      .openapi({
        description:
          "OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.",
        'x-public-description':
          "OAuth2 grant type. We publicly support 'client_credentials' or 'refresh_token' grant types, while other strategies are also possible but not allowed regularly.",
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'MW Account password (to be used in password grant type)',
        'x-internal': true,
      }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Refresh token value for refresh token flow.' }),
    scope: z
      .string()
      .openapi({ description: "Authorization scope. Use 'privileged' for private endpoints." }),
    user_id: z
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
        description: 'Value for user_id grant type flow.',
        'x-internal': true,
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description: 'MW Account email (to be used in password grant type)',
        'x-internal': true,
      }),
  })
  .openapi({ required: ['grant_type', 'scope'] })
  .openapi('TokenRequest')

const TranslationMemoryUnitSchema = z
  .object({
    sourceLanguage: z.string().exactOptional(),
    sourceText: z.string().exactOptional(),
    targetLanguage: z.string().exactOptional(),
    targetText: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TranslationMemoryUnit')

const UpdatePaymentInfoSchema = AddressSchema.and(
  z
    .object({
      bin: z.string().exactOptional(),
      save_as_corporate_primary: z.boolean().exactOptional(),
      share_with_corporate_users: z.boolean().exactOptional(),
      stripeToken: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('UpdatePaymentInfo')

const UseAsDraftPayloadSchema = z
  .object({
    fromFileId: z.number().exactOptional(),
    fromManualTranslationFileId: z.number().exactOptional(),
    toManualTranslationFileId: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UseAsDraftPayload')

const UseAsRegularPayloadSchema = z
  .object({
    allowOriginalFilePreview: z.boolean().exactOptional(),
    allowReviewInManualEditor: z.boolean().exactOptional(),
    disableInvitations: z.boolean().exactOptional(),
    fromManualTranslationFileId: z.number().exactOptional(),
    hideNumbers: z.boolean().exactOptional(),
    recreate: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UseAsRegularPayload')

const UserGroupListSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    user_groups: z.array(UserGroupSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserGroupList')

const UserListSchema = z
  .object({ meta: PagingMetaSchema.exactOptional(), users: z.array(UserSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UserList')

const UserUpdateContentSchema = AddressSchema.and(
  z
    .object({
      birthday: z.iso.date().exactOptional(),
      email: z.string().exactOptional().openapi({ description: 'Optional. User e-mail.' }),
      first_name: z.string().exactOptional().openapi({ description: 'Optional. User first name.' }),
      id: z
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
          description: 'Optional. ID of the user being updated.',
        }),
      last_name: z.string().exactOptional().openapi({ description: 'Optional. User last name.' }),
      notifications: z
        .object({
          phone_number: z.string().exactOptional().openapi({ description: 'User phone number' }),
          sms_enabled: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'User sms notification setting' }),
        })
        .exactOptional()
        .openapi({ description: 'Notification settings', required: [] }),
      notify: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Notify new user account creation with login information and MotaWord introduction.',
        }),
      paypal_email: z
        .string()
        .exactOptional()
        .openapi({ description: 'Optional. Vendor paypal e-mail' }),
      require_1099: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Optional. Whether this vendor requires 1099 form in US for their earnings.',
        }),
      user_groups: z
        .array(
          z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        )
        .exactOptional()
        .openapi({ description: 'A list of user group IDs' }),
    })
    .openapi({ required: [] }),
).openapi('UserUpdateContent')

const UsersReportSchema = z
  .object({
    meta: PagingMetaSchema.exactOptional(),
    report: z
      .array(
        z
          .object({
            currency: z.string().exactOptional(),
            spending: z.float32().exactOptional(),
            user: UserSchema.exactOptional(),
            word_count: z
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
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersReport')

const VendorWithNeedsSchema = z
  .object({
    matchedNeeds: z.array(FileNeedsVendorSchema).exactOptional(),
    userId: z
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
  })
  .openapi({ required: [] })
  .openapi('VendorWithNeeds')

const VendorInvitationListSchema = z
  .object({ vendors: z.array(VendorWithNeedsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('VendorInvitationList')

const VendorTagSchema = z
  .object({ color: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VendorTag')

const WebhookSchema = z
  .object({
    callback_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const MwoAuthSecurityScheme = {
  description: 'OAuth2 authentication, Client Credentials flow.',
  flows: {
    authorizationCode: {
      authorizationUrl: '/token',
      refreshUrl: '/token',
      scopes: { default: 'default', privileged: 'privileged' },
      tokenUrl: '/token',
    },
    clientCredentials: {
      scopes: { default: 'default', privileged: 'privileged' },
      tokenUrl: '/token',
    },
    password: {
      refreshUrl: '/token',
      scopes: { default: 'default', privileged: 'privileged' },
      tokenUrl: '/token',
    },
  },
  type: 'oauth2',
}

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Static'],
  summary: 'Available endpoints',
  description: 'The root endpoint will provide you with an OpenAPI definition of MotaWord API.\n',
  operationId: 'getEndpoints',
  responses: {
    200: {
      description: 'YAML representation of our OpenAPI definition.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: {
      description: 'Authentication error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [],
})

export const getAsyncDownloadRoute = createRoute({
  method: 'get',
  path: '/async/download',
  tags: ['Async'],
  summary: 'Download result of an async operation',
  description:
    'Download the result of an async operation that you have requested in other endpoints.',
  operationId: 'downloadAsync',
  request: {
    query: z.object({
      async_request_key: z
        .string()
        .openapi({
          param: {
            description: 'Async operation key',
            in: 'query',
            name: 'async_request_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBlogsRoute = createRoute({
  method: 'get',
  path: '/blogs',
  tags: ['Blog'],
  summary: 'Get blog posts - ordered by created desc by default',
  operationId: 'getBlogPosts',
  request: {
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Article language, default `en`. When no blog article is available and `fallback=true` is specified, it falls back to `en`.',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fallback: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true`, and no article is found in the locale, it falls back to `locale=en`.',
            in: 'query',
            name: 'fallback',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of blog articles',
      content: { 'application/json': { schema: BlogArticleListSchema } },
    },
  },
})

export const deleteCacheKeyRoute = createRoute({
  method: 'delete',
  path: '/cache/{key}',
  summary: 'Clear cache by key',
  operationId: 'deleteCache',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'Cache key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation status',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const getCommissionsRoute = createRoute({
  method: 'get',
  path: '/commissions',
  tags: ['Commission'],
  summary: 'Returns a commission list of current client.',
  operationId: 'getCommissions',
  responses: {
    200: {
      description: 'Commissions for client.',
      content: { 'application/json': { schema: CommissionListSchema } },
    },
    401: {
      description: 'UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postCommissionsRoute = createRoute({
  method: 'post',
  path: '/commissions',
  tags: ['Commission'],
  summary: 'Returns a commission list of current client.',
  operationId: 'getCommissionsByFilter',
  request: { body: { content: { 'application/json': { schema: ReportFilterSchema } } } },
  responses: {
    200: {
      description: 'Commissions for client.',
      content: { 'application/json': { schema: CommissionListSchema } },
    },
    401: {
      description: 'UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsRoute = createRoute({
  method: 'get',
  path: '/continuous_projects',
  tags: ['ContinuousProject'],
  summary: 'View continuous projects',
  description:
    'View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.',
  operationId: 'getContinuousProjects',
  request: {
    query: z.object({
      type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.literal('active').nullable(),
      )
        .default('active')
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of continuous project.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { default: 'active', enum: ['active'], nullable: true, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Newly created continuous project',
      content: { 'application/json': { schema: ContinuousProjectsListSchema } },
    },
  },
})

export const postContinuousProjectsRoute = createRoute({
  method: 'post',
  path: '/continuous_projects',
  tags: ['ContinuousProject'],
  summary: 'Create a continuous project',
  description:
    'Create a new continuous project for your software, website, CI/CD translation needs.',
  operationId: 'createContinuousProject',
  request: { body: { content: { 'application/json': { schema: ContinuousProjectSchema } } } },
  responses: {
    200: {
      description: 'Newly created continuous project',
      content: { 'application/json': { schema: ContinuousProjectSchema } },
    },
  },
})

export const getContinuousProjectsIdRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{id}',
  tags: ['ContinuousProject'],
  summary: 'View a continuous project',
  description: 'View the details of a continuous project.',
  operationId: 'getContinuousProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ContinuousProject model',
      content: { 'application/json': { schema: ContinuousProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}',
  tags: ['ContinuousProject'],
  summary: 'Update a continuous project',
  description: 'Update the details and settings of continuous project.',
  operationId: 'updateContinuousProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContinuousProjectUpdateContentSchema } } },
  },
  responses: {
    200: {
      description: 'Update continuous project operation status',
      content: { 'application/json': { schema: ContinuousProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteContinuousProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/continuous_projects/{id}',
  tags: ['ContinuousProject'],
  summary: 'Delete a continuous project',
  description:
    'Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.',
  operationId: 'deleteContinuousProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Continuous project deleted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsIdAnalyticsTokenRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{id}/analytics-token',
  tags: ['ContinuousProject'],
  summary: 'Get JWT token to be used in analytics dashboards',
  description: 'Get JWT token to be used in analytics dashboards',
  operationId: 'getAnalyticsToken',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'JWT token result',
      content: { 'application/json': { schema: AnalyticsTokenSchema } },
    },
  },
})

export const postContinuousProjectsIdCollectAnalyticsRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/collect-analytics',
  tags: ['ContinuousProject'],
  summary: 'Save/collect analytics data from Active widget',
  description: 'Save/collect analytics data from Active widget',
  operationId: 'collectAnalytics',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnalyticsCollectionSchema } } },
  },
  responses: {
    200: {
      description: 'Analytics data collection result',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const postContinuousProjectsIdCompleteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/complete',
  tags: ['ContinuousProject'],
  summary: 'Complete continuous project',
  description: 'Complete continuous project',
  operationId: 'complete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation status',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const postContinuousProjectsIdDocumentsQuoteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/documents/quote',
  tags: ['ContinuousProject'],
  summary: 'Get quote for documents',
  description: 'Get a new quote for provided documents in continuous project',
  operationId: 'getQuoteForDocuments',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetQuotesForDocumentsBodySchema } } },
  },
  responses: {
    200: {
      description: 'Newly created project',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description:
        'UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'ProjectInsertFailed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdDocumentsDocumentIdCompleteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/documents/{documentId}/complete',
  tags: ['ContinuousProject'],
  summary: 'Complete a continuous project document',
  description:
    'Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.',
  operationId: 'completeContinuousDocument',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation status',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound FileNotFound DocumentNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdDocumentsDocumentIdQuoteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/documents/{documentId}/quote',
  tags: ['ContinuousProject'],
  summary: 'Get a quote for a continuous project document',
  description:
    'Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.',
  operationId: 'getQuoteForDocument',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Newly created project',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description:
        'UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'ProjectInsertFailed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdLanguagesQuoteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/languages/quote',
  tags: ['ContinuousProject'],
  summary: 'Get quote for languages',
  description: 'Get a new quote for provided target languages in continuous project',
  operationId: 'getQuoteForLanguages',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetQuotesForLanguagesBodySchema } } },
  },
  responses: {
    200: {
      description: 'Newly created project',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description:
        'UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'ProjectInsertFailed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdLanguagesTargetLanguageCompleteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/languages/{targetLanguage}/complete',
  tags: ['ContinuousProject'],
  summary: 'Complete continuous project language',
  description: 'Complete continuous project language',
  operationId: 'completeLanguage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      targetLanguage: z
        .string()
        .openapi({
          param: {
            description: 'Target language that you want to complete',
            in: 'path',
            name: 'targetLanguage',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation status',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const postContinuousProjectsIdLanguagesTargetLanguageQuoteRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/languages/{targetLanguage}/quote',
  tags: ['ContinuousProject'],
  summary: 'Get quote for language',
  description: 'Get a new quote for provided target language in continuous project',
  operationId: 'getQuoteForLanguage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      targetLanguage: z
        .string()
        .openapi({
          param: {
            description: 'Target language that you want to complete',
            in: 'path',
            name: 'targetLanguage',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Newly created project(s)',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description:
        'UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'ProjectInsertFailed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsIdSubscriptionRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{id}/subscription',
  tags: ['ContinuousProject'],
  summary: 'Get subscription for continuous project',
  description: 'Get subscription for continuous project',
  operationId: 'getSubscription',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get continuous project subscription',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putContinuousProjectsIdSubscriptionRoute = createRoute({
  method: 'put',
  path: '/continuous_projects/{id}/subscription',
  tags: ['ContinuousProject'],
  summary: 'Update subscription for continuous project',
  description: 'Update subscription for continuous project',
  operationId: 'updateSubscription',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated continuous project subscription',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdSubscriptionRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/subscription',
  tags: ['ContinuousProject'],
  summary: 'Create subscription for continuous project',
  description: 'Create subscription for continuous project',
  operationId: 'createSubscription',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Newly created continuous project subscription',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteContinuousProjectsIdSubscriptionRoute = createRoute({
  method: 'delete',
  path: '/continuous_projects/{id}/subscription',
  tags: ['ContinuousProject'],
  summary: 'Delete subscription for continuous project',
  description: 'Delete subscription for continuous project',
  operationId: 'deleteSubscription',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete continuous project subscription',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putContinuousProjectsIdSubscriptionPaymentRoute = createRoute({
  method: 'put',
  path: '/continuous_projects/{id}/subscription/payment',
  tags: ['ContinuousProject'],
  summary: 'Update subscription payment method for continuous project',
  description: 'Update subscription payment method for continuous project',
  operationId: 'updateSubscriptionPaymentMethod',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated continuous project subscription',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsIdTranslateTargetLanguageRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{id}/translate/{targetLanguage}',
  tags: ['ContinuousProject'],
  summary: 'Instantly translate your content',
  description:
    'Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.',
  operationId: 'translate',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      targetLanguage: z
        .string()
        .openapi({
          param: {
            description: 'Target language that you want to instantly translate your file into.',
            in: 'path',
            name: 'targetLanguage',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstantTranslationRequestSchema } } },
  },
  responses: {
    200: {
      description:
        'Instant translation result. It may return a list of translated strings, or a list of translated files.',
      content: { 'application/json': { schema: InstantTranslationResultSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/documents',
  tags: ['ContinuousProject'],
  summary: 'View continuous documents',
  description: 'View the documents under this continuous project',
  operationId: 'getContinuousProjectDocuments',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      filterByLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filterByLanguage',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of continuous project document models',
      content: { 'application/json': { schema: ContinuousProjectDocumentListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: {
        'application/json': {
          schema: ErrorSchema.openapi({
            '/continuous_projects/{id}/translate/{targetLanguage}': null,
          }),
        },
      },
    },
  },
})

export const postContinuousProjectsProjectIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/documents',
  tags: ['ContinuousProject'],
  summary: 'Add a new document to your continuous project',
  description:
    'Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.',
  operationId: 'addDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddOrUpdateDocumentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The newly added continuous project document object.',
      content: { 'application/json': { schema: ContinuousProjectDocumentSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdDocumentsProgressRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/documents/progress',
  tags: ['ContinuousProject'],
  summary: 'Get continuous project document progress for multiple IDs',
  description: 'Get continuous project document progress for multiple IDs',
  operationId: 'postContinuousProjectDocumentProgress',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ContinuousProjectDocumentProgressBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Progress information',
      content: { 'application/json': { schema: ProgressSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdDocumentsStringsRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/documents/strings',
  tags: ['Strings'],
  summary: 'Get a list of strings and its translations in the project.',
  operationId: 'postContinuousProjectFileStrings',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ContinuousProjectDocumentStringsBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/documents/{documentId}',
  tags: ['ContinuousProject'],
  summary: 'View a continuous document',
  description: 'View the details of a source document in continuous translation project.',
  operationId: 'getContinuousProjectDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID/Name',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Progress information',
      content: { 'application/json': { schema: ContinuousProjectDocumentSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdDocumentsDocumentIdRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/documents/{documentId}',
  tags: ['ContinuousProject'],
  summary: 'Update the document',
  description:
    'Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.',
  operationId: 'updateDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddOrUpdateDocumentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The updated continuous project document object.',
      content: { 'application/json': { schema: ContinuousProjectDocumentSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdDocumentsDocumentIdProgressRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/documents/{documentId}/progress',
  tags: ['ContinuousProject'],
  summary: 'Monitor progress of a continuous document',
  description:
    'Monitor the translation progress of a document in a continuous project in real-time.',
  operationId: 'getContinuousProjectDocumentProgress',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID/Name',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      filterByLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filterByLanguage',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Progress information',
      content: { 'application/json': { schema: ProgressSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdDocumentsDocumentIdStringsRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/documents/{documentId}/strings',
  tags: ['Strings'],
  summary: 'View strings their translations in a continuous document',
  description:
    'View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.',
  operationId: 'getContinuousProjectFileStrings',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID/Name',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdInvoicesRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/invoices',
  tags: ['ContinuousProject'],
  summary: 'Invoices of a continuous project',
  description: "Get real-time access to a continuous project's invoices.",
  operationId: 'getContinuousProjectInvoices',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invoices List',
      content: { 'application/json': { schema: ContinuousProjectInvoicesSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdProgressRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/progress',
  tags: ['ContinuousProject'],
  summary: 'Monitor progress and status of a continous project',
  description: 'Monitor the translation progress of an ongoing continuous project in real-time.',
  operationId: 'getContinuousProjectProgress',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      filterByLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filterByLanguage',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Progress information',
      content: { 'application/json': { schema: ContinuousProjectProgressSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdStringsRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/strings',
  tags: ['Strings'],
  summary: 'View strings and translations in continuous project',
  description:
    'View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.',
  operationId: 'getContinuousProjectStrings',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdStringsCachedRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/strings/cached',
  tags: ['Strings'],
  summary: 'View cached strings translations in continuous project',
  description:
    'MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.',
  operationId: 'getTranslationCache',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      flatten: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flatten cache results and ignore document keys',
            in: 'query',
            name: 'flatten',
            required: false,
            schema: { default: 1, type: 'boolean' },
          },
          default: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: ContinuousProjectCacheSchema } },
    },
  },
})

export const deleteContinuousProjectsProjectIdStringsCachedRoute = createRoute({
  method: 'delete',
  path: '/continuous_projects/{projectId}/strings/cached',
  tags: ['Strings'],
  summary: 'Clear translation cache',
  description: 'Clear/delete continuous project translation cache.',
  operationId: 'clearTranslationCache',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Locale',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { type: 'string' },
          },
        }),
      file_id: z
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
            description: 'Continuous Project File ID',
            in: 'query',
            name: 'file_id',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation response',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdStringsRecacheTmsRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/strings/recache-tms',
  tags: ['Strings'],
  summary: 'Recache translations',
  description: 'Recache translations for the continuous project.',
  operationId: 'recacheTranslations',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Locale',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { type: 'string' },
          },
        }),
      file_id: z
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
            description: 'Continuous Project File ID',
            in: 'query',
            name: 'file_id',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation response',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdWidgetsRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/widgets',
  tags: ['ContinuousProject'],
  summary: 'View Active widgets',
  description:
    'View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.',
  operationId: 'getActiveWidgets',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of widgets',
      content: { 'application/json': { schema: ActiveWidgetListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdWidgetsRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/widgets',
  tags: ['ContinuousProject'],
  summary: 'Create a new Active widget',
  description:
    'Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.',
  operationId: 'createActiveWidget',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActiveWidgetSchema } } },
  },
  responses: {
    200: {
      description: 'Updated widget details',
      content: { 'application/json': { schema: ActiveWidgetSchema } },
    },
    404: {
      description: 'ProjectNotFound | ActiveWidgetNotFound | UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getContinuousProjectsProjectIdWidgetsWidgetIdRoute = createRoute({
  method: 'get',
  path: '/continuous_projects/{projectId}/widgets/{widgetId}',
  tags: ['ContinuousProject'],
  summary: 'View an Active widget',
  description:
    'View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.',
  operationId: 'getActiveWidget',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      widgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Active widget ID belonging to this Continuous Project',
            in: 'path',
            name: 'widgetId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Active widget details',
      content: { 'application/json': { schema: ActiveWidgetSchema } },
    },
    404: {
      description: 'ProjectNotFound | ActiveWidgetNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdWidgetsWidgetIdRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/widgets/{widgetId}',
  tags: ['ContinuousProject'],
  summary: 'Update Active widget settings.',
  description: 'Update Active widget settings.',
  operationId: 'updateActiveWidget',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      widgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Active widget ID belonging to this Continuous Project',
            in: 'path',
            name: 'widgetId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActiveWidgetSchema } } },
  },
  responses: {
    200: {
      description: 'Updated widget details',
      content: { 'application/json': { schema: ActiveWidgetSchema } },
    },
    404: {
      description: 'ProjectNotFound | ActiveWidgetNotFound | UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteContinuousProjectsProjectIdWidgetsWidgetIdRoute = createRoute({
  method: 'delete',
  path: '/continuous_projects/{projectId}/widgets/{widgetId}',
  tags: ['ContinuousProject'],
  summary: 'Delete a single widget for this Active project',
  description: 'Delete a single widget for this Active project',
  operationId: 'deleteActiveWidget',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      widgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Active widget ID belonging to this Continuous Project',
            in: 'path',
            name: 'widgetId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete operation result',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound | ActiveWidgetNotFound | UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRoute = createRoute({
  method: 'post',
  path: '/continuous_projects/{projectId}/widgets/{widgetId}/reset-token',
  tags: ['ContinuousProject'],
  summary: 'Reset Active widget token',
  description:
    'Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.',
  operationId: 'resetActiveWidgetToken',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Continuous Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      widgetId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Active widget ID belonging to this Continuous Project',
            in: 'path',
            name: 'widgetId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Updated widget details',
      content: { 'application/json': { schema: ActiveWidgetSchema } },
    },
    404: {
      description: 'ProjectNotFound | ActiveWidgetNotFound | UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getCorporateRoute = createRoute({
  method: 'get',
  path: '/corporate',
  tags: ['Corporate'],
  summary: 'View your corporate account',
  description: 'View the details of the corporate account that your user account belongs to.',
  operationId: 'getCorporate',
  responses: {
    200: {
      description: 'Corporate account details',
      content: { 'application/json': { schema: CorporateAccountSchema } },
    },
  },
})

export const getCorporatePermissionsRoute = createRoute({
  method: 'get',
  path: '/corporate/permissions',
  tags: ['Corporate'],
  summary: 'View available permissions',
  description:
    'View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.',
  operationId: 'getAvailableCorporatePermissions',
  responses: {
    200: {
      description: 'List of permission strings',
      content: { 'application/json': { schema: PermissionListSchema } },
    },
  },
})

export const getCorporateUserGroupsRoute = createRoute({
  method: 'get',
  path: '/corporate/user-groups',
  tags: ['Corporate'],
  summary: 'View user groups',
  description:
    'View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.',
  operationId: 'getCorporateUserGroups',
  responses: {
    200: {
      description: 'User group list',
      content: { 'application/json': { schema: UserGroupListSchema } },
    },
  },
})

export const postCorporateUserGroupsRoute = createRoute({
  method: 'post',
  path: '/corporate/user-groups',
  tags: ['Corporate'],
  summary: 'Create or update a corporate user group',
  description: 'Create or update a corporate user group',
  operationId: 'saveCorporateUserGroup',
  request: {
    body: { content: { 'application/json': { schema: UserGroupSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'User group list',
      content: { 'application/json': { schema: UserGroupSchema } },
    },
  },
})

export const getCorporateUsersRoute = createRoute({
  method: 'get',
  path: '/corporate/users',
  tags: ['Corporate'],
  summary: 'View users',
  description:
    'View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.',
  operationId: 'getCorporateUsers',
  responses: {
    200: { description: 'User list', content: { 'application/json': { schema: UserListSchema } } },
  },
})

export const postCorporateUsersRoute = createRoute({
  method: 'post',
  path: '/corporate/users',
  tags: ['Corporate'],
  summary: 'Create or update a user',
  description:
    'Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.',
  operationId: 'saveCorporateUser',
  request: {
    body: { content: { 'application/json': { schema: UserUpdateContentSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Created or updated user',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const getCorporatesAllRoute = createRoute({
  method: 'get',
  path: '/corporates/all',
  tags: ['Corporate'],
  summary: 'Get a list of corporate accounts',
  description: 'Get a list of corporate accounts',
  operationId: 'getCorporatesList',
  responses: {
    200: {
      description: 'Corporate account list',
      content: { 'application/json': { schema: z.array(CorporateAccountSchema) } },
    },
  },
})

export const getCorporatesCorporateIdRoute = createRoute({
  method: 'get',
  path: '/corporates/{corporateId}',
  tags: ['Corporate'],
  summary: 'Get details of this corporate account',
  description: 'Get details of this corporate account',
  operationId: 'getCorporateById',
  request: {
    params: z.object({
      corporateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Corporate ID',
            in: 'path',
            name: 'corporateId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Corporate account details',
      content: { 'application/json': { schema: CorporateAccountSchema } },
    },
  },
})

export const getCorporatesCorporateIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/corporates/{corporateId}/permissions',
  tags: ['Corporate'],
  summary:
    'Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.',
  description:
    'Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.',
  operationId: 'getAvailableCorporatePermissionsById',
  request: {
    params: z.object({
      corporateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Corporate ID',
            in: 'path',
            name: 'corporateId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of permission strings',
      content: { 'application/json': { schema: PermissionListSchema } },
    },
  },
})

export const getCorporatesCorporateIdUserGroupsRoute = createRoute({
  method: 'get',
  path: '/corporates/{corporateId}/user-groups',
  tags: ['Corporate'],
  summary: 'Get a list of user groups for this corporate account',
  description: 'Get a list of user groups for this corporate account',
  operationId: 'getCorporateUserGroupsById',
  request: {
    params: z.object({
      corporateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Corporate ID',
            in: 'path',
            name: 'corporateId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User group list',
      content: { 'application/json': { schema: UserGroupListSchema } },
    },
  },
})

export const postCorporatesCorporateIdUserGroupsRoute = createRoute({
  method: 'post',
  path: '/corporates/{corporateId}/user-groups',
  tags: ['Corporate'],
  summary: 'Create or update a corporate user group for this corporate account',
  description: 'Create or update a corporate user group for this corporate account',
  operationId: 'saveCorporateUserGroupById',
  request: {
    params: z.object({
      corporateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Corporate ID',
            in: 'path',
            name: 'corporateId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserGroupSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'User group list',
      content: { 'application/json': { schema: UserGroupSchema } },
    },
  },
})

export const getCorporatesCorporateIdUsersRoute = createRoute({
  method: 'get',
  path: '/corporates/{corporateId}/users',
  tags: ['Corporate'],
  summary: 'Get a list of users for this corporate account',
  description: 'Get a list of users for this corporate account',
  operationId: 'getCorporateUsersById',
  request: {
    params: z.object({
      corporateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Corporate ID',
            in: 'path',
            name: 'corporateId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User list', content: { 'application/json': { schema: UserListSchema } } },
  },
})

export const deleteDeleteAccountRoute = createRoute({
  method: 'delete',
  path: '/delete-account',
  tags: ['User'],
  summary: 'Delete your account',
  description:
    'Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.',
  operationId: 'deleteAccount',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDocumentsRoute = createRoute({
  method: 'get',
  path: '/documents',
  tags: ['Document'],
  summary: 'View your documents',
  description:
    'View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.',
  operationId: 'getDocuments',
  request: {
    query: z.object({
      recent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'When true, this will return the most 4 recent active documents.',
            in: 'query',
            name: 'recent',
            required: false,
            schema: { default: 0, type: 'boolean' },
          },
          default: 0,
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      type_filter: z
        .enum([
          'ALL',
          'TEXT_DOCUMENTS',
          'PRESENTATIONS',
          'SPREADSHEETS',
          'PDFS',
          'IMAGES',
          'SUBTITLES',
          'DESIGNS',
          'LOCALIZATION',
          'WEB',
          'STYLE_GUIDES',
          'GLOSSARIES',
        ])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type_filter',
            required: false,
            schema: {
              default: 'ALL',
              enum: [
                'ALL',
                'TEXT_DOCUMENTS',
                'PRESENTATIONS',
                'SPREADSHEETS',
                'PDFS',
                'IMAGES',
                'SUBTITLES',
                'DESIGNS',
                'LOCALIZATION',
                'WEB',
                'STYLE_GUIDES',
                'GLOSSARIES',
              ],
              type: 'string',
            },
          },
        }),
      language_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "searches in source language of documents, in source and target languages of document's quote",
            in: 'query',
            name: 'language_code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
      order_by: z
        .enum(['id', 'updated_at', 'created_at', 'name'])
        .default('updated_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              default: 'updated_at',
              enum: ['id', 'updated_at', 'created_at', 'name'],
              type: 'string',
            },
          },
        }),
      order_type: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_type',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string', default: 'desc' },
          },
        }),
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['preview', 'editors'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['preview', 'editors'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document list',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
})

export const getDocumentsSubjectsRoute = createRoute({
  method: 'get',
  path: '/documents/subjects',
  tags: ['Document'],
  summary: 'Get a list of subjects of projects',
  description: 'Get a list of subjects of projects',
  operationId: 'getAllDocumentSubjects',
  responses: {
    200: {
      description: 'List of subjects of all projects.',
      content: { 'application/json': { schema: z.array(DocumentSubjectsSchema) } },
    },
  },
})

export const getDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/documents/{documentId}',
  tags: ['Document'],
  summary: 'View a single document',
  description: 'View a single document from your MotaWord account with its translation info.',
  operationId: 'getDocument',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'Document ID or filename',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document',
      content: { 'application/json': { schema: ContinuousProjectDocumentSchema } },
    },
  },
})

export const getDocumentsDocumentIdProgressRoute = createRoute({
  method: 'get',
  path: '/documents/{documentId}/progress',
  tags: ['Document'],
  summary: 'View a document translation progress',
  description:
    'View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.',
  operationId: 'getDocumentProgress',
  request: {
    params: z.object({
      documentId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Progress information',
      content: { 'application/json': { schema: ProgressSchema } },
    },
    404: {
      description: 'DocumentNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postDocumentsDocumentIdRegeneratePreviewRoute = createRoute({
  method: 'post',
  path: '/documents/{documentId}/regenerate_preview',
  tags: ['Document'],
  summary: 'Regenerate preview and return preview URL for given file',
  description: 'Regenerate preview and return preview URL for given file',
  operationId: 'regeneratePreview',
  request: {
    params: z.object({
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'RegeneratePreviewResponse',
      content: { 'application/json': { schema: RegeneratePreviewResponseSchema } },
    },
  },
})

export const getDocumentsDocumentIdSimilarsRoute = createRoute({
  method: 'get',
  path: '/documents/{documentId}/similars',
  tags: ['Document'],
  summary: 'Find documents similar to this document.',
  description:
    'Find documents similar to this document. Optionally, include translation information.',
  operationId: 'getSimilarDocuments',
  request: {
    params: z.object({
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Determines the number of similar documents to return.',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['preview', 'editors'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['preview', 'editors'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document list',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
})

export const postDocumentsDocumentIdUseAsDraftRoute = createRoute({
  method: 'post',
  path: '/documents/{documentId}/use_as_draft',
  tags: ['Document'],
  summary:
    'Use the translation of given source manual document as manual draft source for the given target document.',
  description:
    'Use the translation of given source manual document as manual draft source for the given target document.',
  operationId: 'useAsDraft',
  request: {
    params: z.object({
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UseAsDraftPayloadSchema } } },
  },
  responses: {
    200: {
      description: 'Operation status',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const postDocumentsDocumentIdUseAsRegularRoute = createRoute({
  method: 'post',
  path: '/documents/{documentId}/use_as_regular',
  tags: ['Document'],
  summary: 'Use the translation of the given manual document as a regular file.',
  description: 'Use the translation of the given manual document as a regular file.',
  operationId: 'useAsRegular',
  request: {
    params: z.object({
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UseAsRegularPayloadSchema } } },
  },
  responses: {
    200: {
      description: 'Operation status',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
  },
})

export const postDowngradeProofreaderRoute = createRoute({
  method: 'post',
  path: '/downgrade-proofreader',
  tags: ['User'],
  operationId: 'downgradeProofreader',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Vendor is already a translator' },
    400: {
      description: 'VendorNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getEarningsRoute = createRoute({
  method: 'get',
  path: '/earnings',
  tags: ['User'],
  summary: 'View your vendor earnings',
  description:
    'View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.',
  operationId: 'getEarnings',
  responses: {
    200: {
      description: 'Earnings for vendors',
      content: { 'application/json': { schema: EarningsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getFormatsRoute = createRoute({
  method: 'get',
  path: '/formats',
  tags: ['Static'],
  summary: 'List of supported file formats',
  description: 'Get a list of supported formats for documents, style guides and extensions.\n',
  operationId: 'getFormats',
  responses: {
    200: {
      description: 'A list of supported formats',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
  security: [],
})

export const postFreezeAccountRoute = createRoute({
  method: 'post',
  path: '/freeze-account',
  tags: ['User'],
  summary: 'Freeze account',
  description:
    'Freeze your account temporarily, especially to stop receiving project notifications.',
  operationId: 'freezeAccount',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Account is already frozen for notifications' },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getGlossaryRoute = createRoute({
  method: 'get',
  path: '/glossary',
  tags: ['Glossary'],
  summary: 'Download account glossary.',
  description:
    "Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.",
  operationId: 'downloadGlobalGlossary',
  responses: {
    200: {
      description: 'Glossary file streamed.',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'GlossaryNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postGlossaryRoute = createRoute({
  method: 'post',
  path: '/glossary',
  tags: ['Glossary'],
  summary: 'Create or update the account glossary',
  description:
    "Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.",
  operationId: 'updateGlobalGlossary',
  request: {
    body: {
      content: {
        'application/json': { schema: AccountGlossaryUploadRequestSchema },
        'multipart/form-data': { schema: AccountGlossaryUploadRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall NoFileUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getIntegrationsTokenRoute = createRoute({
  method: 'get',
  path: '/integrations/token',
  tags: ['Integrations'],
  summary: "Generate a new access token for MotaWord's integrations service",
  description: "Generate a new access token for MotaWord's integrations service",
  operationId: 'getIntegrationsToken',
  responses: {
    200: {
      description: 'Token',
      content: { 'application/json': { schema: IntegrationsTokenSchema } },
    },
    403: {
      description: 'IntegrationsNotEnabled',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postInvitationVendorsRoute = createRoute({
  method: 'post',
  path: '/invitation/vendors',
  tags: ['Invitation'],
  summary: 'Get vendor list for compiled invitation needs',
  description: 'Get vendor list for compiled invitation needs',
  operationId: 'getInvitationVendors',
  request: {
    body: { content: { 'application/json': { schema: z.array(FileNeedsVendorSchema) } } },
  },
  responses: {
    200: {
      description: 'Invitation need grouped by vendor',
      content: { 'application/json': { schema: VendorInvitationListSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall NoFileUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getLanguagesRoute = createRoute({
  method: 'get',
  path: '/languages',
  tags: ['Static'],
  summary: 'List of supported languages',
  description: 'Get a list of supported languages',
  operationId: 'getLanguages',
  responses: {
    200: {
      description: 'A list of supported languages',
      content: { 'application/json': { schema: z.array(LanguageSchema) } },
    },
  },
  security: [],
})

export const postLocationRoute = createRoute({
  method: 'post',
  path: '/location',
  tags: ['User'],
  summary:
    "Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.",
  operationId: 'logLocation',
  request: { body: { content: { 'application/json': { schema: LocationUpdateContentSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postMakeProofreaderRoute = createRoute({
  method: 'post',
  path: '/make-proofreader',
  tags: ['User'],
  operationId: 'makeProofreader',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Vendor is already a proofreader' },
    400: {
      description: 'VendorNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['User'],
  summary: 'View your account info',
  description:
    'Get your user information, including client, corporate account and vendor account information.',
  operationId: 'getMe',
  responses: {
    200: { description: 'User summary', content: { 'application/json': { schema: UserSchema } } },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postMeRoute = createRoute({
  method: 'post',
  path: '/me',
  tags: ['User'],
  summary: 'Update your account info',
  operationId: 'updateMe',
  request: { body: { content: { 'application/json': { schema: UserUpdateContentSchema } } } },
  responses: {
    200: { description: 'User info', content: { 'application/json': { schema: UserSchema } } },
    400: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postMlDeliveryPredictionRoute = createRoute({
  method: 'post',
  path: '/ml/delivery-prediction',
  tags: ['MachineLearning'],
  summary: 'Get a delivery prediction for a project',
  description: 'Get a delivery prediction for a project',
  operationId: 'getDeliveryPrediction',
  request: {
    body: { content: { 'application/json': { schema: DeliveryPredictionPayloadSchema } } },
  },
  responses: {
    200: {
      description: 'Prediction and its probability',
      content: { 'application/json': { schema: DeliveryPredictionResponseSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNotificationsSubscribeRoute = createRoute({
  method: 'post',
  path: '/notifications/subscribe',
  tags: ['User'],
  summary: 'Subscribe to push notifications',
  description: 'Subscribe to push notifications to receive project and platform notifications.',
  operationId: 'subscribeNotification',
  request: {
    body: { content: { 'application/json': { schema: NotificationSubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Saved notification subscription information',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'MissingParameter | Failed to save subscription',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postNotificationsUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/notifications/unsubscribe',
  tags: ['User'],
  operationId: 'unsubscribeNotification',
  request: {
    body: { content: { 'application/json': { schema: NotificationSubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Deleted notification subscription information',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'MissingParameter | Failed to delete subscription',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postPamChatRoute = createRoute({
  method: 'post',
  path: '/pam/chat',
  tags: ['Pam'],
  summary: 'Sends a message to chat',
  description: 'Sends a message to the channel.',
  operationId: 'postMessage',
  request: { body: { content: { 'application/json': { schema: PamMessageSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'Missing Parameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPamProfilesClientClientIdRoute = createRoute({
  method: 'get',
  path: '/pam/profiles/client/{clientId}',
  tags: ['Pam'],
  summary: 'Get the Pam profile of a client for this client ID',
  description: 'Get the Pam  profile of a client for this client ID',
  operationId: 'getClientProfileForPam',
  request: {
    params: z.object({
      clientId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Client ID',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client profile',
      content: { 'application/json': { schema: ClientProfileSchema } },
    },
    404: {
      description: 'ClientProfileNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPamProjectsProjectIdCompletionReportRoute = createRoute({
  method: 'get',
  path: '/pam/projects/{projectId}/completion-report',
  tags: ['Pam'],
  summary: 'Get completion report data of a project',
  description: 'Get completion report data of a project',
  operationId: 'getProjectCompletionReportForPam',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project Completion Report',
      content: { 'application/json': { schema: ProjectCompletionReportSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postPasswordRoute = createRoute({
  method: 'post',
  path: '/password',
  tags: ['User'],
  summary: 'Update your account password',
  description: 'Password should contain at least one uppercase, lowercase character and one number',
  operationId: 'updatePassword',
  request: { body: { content: { 'application/json': { schema: PasswordUpdateContentSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getPaymentRoute = createRoute({
  method: 'get',
  path: '/payment',
  tags: ['User'],
  summary: 'View your payment and billing info',
  description:
    'Returns billing and saved credit card information for user, and their corporate account if present & allowed.',
  operationId: 'getPaymentInfo',
  responses: {
    200: {
      description:
        'Returns billing and saved card information for user, and their corporate if present.',
      content: { 'application/json': { schema: PaymentInfoSchema } },
    },
    404: {
      description: 'UserNotFound UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postPaymentRoute = createRoute({
  method: 'post',
  path: '/payment',
  tags: ['User'],
  summary: 'Update payment info',
  description: 'Update your billing and saved credit card information',
  operationId: 'updatePaymentInfo',
  request: { body: { content: { 'application/json': { schema: UpdatePaymentInfoSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PaymentInfoSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postPaymentResetCorporatePaymentCodeRoute = createRoute({
  method: 'post',
  path: '/payment/reset-corporate-payment-code',
  tags: ['Payment'],
  summary: 'Reset payment code',
  description:
    "Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.",
  operationId: 'resetCorporatePaymentCode',
  responses: {
    200: {
      description: 'Credit card content',
      content: { 'application/json': { schema: CreditCardSchema } },
    },
    404: {
      description: 'UserNotFound UnauthorizedUser MissingCorporateAccount',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postPaymentToggleCorporateAutoChargeRoute = createRoute({
  method: 'post',
  path: '/payment/toggle-corporate-auto-charge',
  tags: ['Payment'],
  summary: 'Manage automatic charges on your credit card',
  description: 'Toggle (enable/disable) automatic charges on the credit card on file.',
  operationId: 'toggleCorporateAutoCharge',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'UserNotFound UnauthorizedUser MissingCorporateAccount',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPaymentCardIdRoute = createRoute({
  method: 'get',
  path: '/payment/{cardId}',
  tags: ['Payment'],
  summary: 'View saved credit card',
  operationId: 'getCreditCard',
  request: {
    params: z.object({
      cardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Credit Card ID',
            in: 'path',
            name: 'cardId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Credit card content',
      content: { 'application/json': { schema: CreditCardSchema } },
    },
    404: {
      description: 'MissingCreditCard',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deletePaymentCardIdDeleteRoute = createRoute({
  method: 'delete',
  path: '/payment/{cardId}/delete',
  tags: ['Payment'],
  summary: 'Delete credit card',
  operationId: 'deleteCreditCard',
  request: {
    params: z.object({
      cardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Credit Card ID',
            in: 'path',
            name: 'cardId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description:
        'UserNotFound MissingCorporateAccount MissingParameter MissingCreditCard UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postPaymentCardIdResetPaymentCodeRoute = createRoute({
  method: 'post',
  path: '/payment/{cardId}/reset-payment-code',
  tags: ['Payment'],
  summary: 'Reset credit card payment code',
  description:
    'Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.',
  operationId: 'resetCardPaymentCode',
  request: {
    params: z.object({
      cardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Credit Card ID',
            in: 'path',
            name: 'cardId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Credit card content',
      content: { 'application/json': { schema: CreditCardSchema } },
    },
    404: {
      description:
        'UserNotFound MissingCorporateAccount MissingParameter MissingCreditCard UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPermissionsRoute = createRoute({
  method: 'get',
  path: '/permissions',
  tags: ['User'],
  summary: 'View your permissions',
  description:
    'View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.',
  operationId: 'getPermissions',
  responses: {
    200: {
      description: 'List of permission strings',
      content: { 'application/json': { schema: PermissionListSchema } },
    },
  },
})

export const postProfilePictureRoute = createRoute({
  method: 'post',
  path: '/profile-picture',
  tags: ['User'],
  summary: 'Upload profile picture',
  description:
    'Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.',
  operationId: 'uploadProfilePicture',
  request: {
    body: {
      content: {
        'application/json': { schema: ProfilePictureUploadSchema },
        'multipart/form-data': { schema: ProfilePictureUploadSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'Email already exists',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  tags: ['Project'],
  summary: 'View your translation projects',
  description:
    'View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.',
  operationId: 'getProjects',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
      'status[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ProjectStatusSchema.openapi({
              description:
                'progress-related project status enums are not supported, such as "translated", "proofread".',
            }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter projects by status. Accepts multiple statuses. Possible values 'pending', 'started', 'completed'",
            in: 'query',
            name: 'status[]',
            required: false,
            schema: {
              items: {
                $ref: '#/components/schemas/ProjectStatus',
                description:
                  'progress-related project status enums are not supported, such as "translated", "proofread".',
              },
              type: 'array',
            },
          },
        }),
      with_pending: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'deprecated. use `status[]` param.',
            in: 'query',
            name: 'with_pending',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      with_started: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'deprecated. use `status[]` param.',
            in: 'query',
            name: 'with_started',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      with_completed: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: 'deprecated. use `status[]` param.',
            in: 'query',
            name: 'with_completed',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      order_by: z
        .enum(['id', 'status', 'delivery', 'price'])
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: { default: 'id', enum: ['id', 'status', 'delivery', 'price'], type: 'string' },
          },
        }),
      order_type: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_type',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string', default: 'desc' },
          },
        }),
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['client', 'vendor'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Include detailed information. Possible values 'client', 'vendor'",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['client', 'vendor'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project list',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['Project'],
  summary: 'Create a new project',
  description:
    'Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.',
  operationId: 'createProject',
  request: {
    body: {
      content: {
        'application/json': { schema: NewProjectSchema },
        'multipart/form-data': { schema: NewProjectSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Newly created project',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description:
        'UnsupportedDocumentFormat UnsupportedStyleGuideFormat UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'UnsupportedLanguage TooManyGlossaries ProjectAlreadyHasGlossary',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'ProjectInsertFailed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsFromInternalIdProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/from-internal-id/{projectId}',
  tags: ['Project'],
  summary: 'Get Quote Id',
  description: 'Get Quote Id',
  operationId: 'getQuoteIdFromInternalId',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'QuoteId', content: { 'application/json': { schema: ProjectIdSchema } } },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsVendorRoute = createRoute({
  method: 'get',
  path: '/projects/vendor',
  tags: ['Project'],
  summary: 'List projects as a vendor',
  description:
    'Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.',
  operationId: 'getVendorProjects',
  request: {
    query: z.object({
      joined: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only projects that this user has already joined',
            in: 'query',
            name: 'joined',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      completed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only projects that have been completed. When `true`, this makes `joined` true as well.',
            in: 'query',
            name: 'completed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vendor project list',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    400: {
      description: 'VendorNotFound - this is not a vendor user account',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdRoute = createRoute({
  method: 'get',
  path: '/projects/{id}',
  tags: ['Project'],
  summary: 'View a translation project',
  description: 'View the details of a translation project in your account.',
  operationId: 'getProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['client', 'vendor', 'score'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Include detailed information. Possible values 'client', 'vendor', 'score'",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: {
              items: { enum: ['client', 'vendor', 'score'], type: 'string' },
              type: 'array',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project model',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putProjectsIdRoute = createRoute({
  method: 'put',
  path: '/projects/{id}',
  tags: ['Project'],
  summary: 'Update project info and settings',
  operationId: 'updateProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProjectUpdateSchema },
        'multipart/form-data': { schema: ProjectUpdateSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated project',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'UnsupportedLanguage',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{id}',
  tags: ['Project'],
  summary: 'Delete your translation project',
  description:
    "If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.",
  operationId: 'deleteProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project canceled successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdAssignCmRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/assign-cm',
  tags: ['Project'],
  summary: 'Assign a CM to the project',
  operationId: 'assignCM',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CMSchema } } },
  },
  responses: {
    200: {
      description: 'Operation started successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdCallbackActionTypeRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/callback/{actionType}',
  tags: ['Project'],
  summary: 'Trigger a call to your callback URL related to this project.',
  description: 'Trigger a call to your callback URL related to this project.',
  operationId: 'triggerCallback',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      actionType: z
        .enum(['translated', 'proofread', 'completed'])
        .openapi({
          param: {
            description: 'Callback type',
            in: 'path',
            name: 'actionType',
            required: true,
            schema: { enum: ['translated', 'proofread', 'completed'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Callback result',
      content: { 'application/json': { schema: CallbackResultSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdCancelRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/cancel',
  tags: ['Project'],
  summary: 'Cancel your translation project',
  description:
    "If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.",
  operationId: 'cancelProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelProjectRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Project canceled successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdDeliverRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/deliver',
  tags: ['Project'],
  summary: 'Deliver project',
  description:
    'Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.',
  operationId: 'deliverProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Operation started successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdDownloadRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/download',
  tags: ['Project'],
  summary: 'Download your translated project',
  description:
    "Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.",
  operationId: 'download',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'TranslationPackageNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdDownloadLanguageRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/download/{language}',
  tags: ['Project'],
  summary: 'Download your translated project language',
  description:
    "Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.",
  operationId: 'downloadLanguage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description:
              'Language code. You can download the translation of only a specific language.',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'TranslationPackageNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdEmailQuoteRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/email-quote',
  tags: ['Project'],
  summary: 'Send a quote email',
  description: 'Send a quote email',
  operationId: 'sendQuoteEmail',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Email sent successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdInvoiceRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/invoice',
  tags: ['Project'],
  summary: 'View project invoice',
  description: 'View your invoice details for your translation project.',
  operationId: 'getInvoice',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Invoice', content: { 'application/json': { schema: InvoiceSchema } } },
    404: {
      description: 'ProjectNotFound or InvoiceNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdInvoiceHtmlRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/invoice.html',
  tags: ['Project'],
  summary: 'Download project invoice (HTML)',
  description:
    'Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.',
  operationId: 'downloadHtmlInvoice',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Invoice', content: { 'text/html': { schema: z.string() } } },
    404: {
      description: 'ProjectNotFound or InvoiceNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdInvoicePdfRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/invoice.pdf',
  tags: ['Project'],
  summary: 'Download project invoice (PDF)',
  description:
    'Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.',
  operationId: 'downloadPdfInvoice',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invoice',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    404: {
      description: 'ProjectNotFound or InvoiceNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdLaunchRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/launch',
  tags: ['Project'],
  summary: 'Launch your translation project',
  description:
    'Launch your translation project so MotaWord can actually start working on your translation.',
  operationId: 'launchProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProjectPaymentSchema } } },
  },
  responses: {
    200: {
      description: 'Project launched successfully',
      content: { 'application/json': { schema: ProjectLaunchResponseSchema } },
    },
    400: {
      description: 'MissingPaymentCode MissingCorporateAccount MissingPaymentMethod',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'CorporateAccountNotAllowedForApiPayment ApiClientMissingPaymentInformation',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdPackageRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/package',
  tags: ['Project'],
  summary: 'Package your translated project',
  description:
    'Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.',
  operationId: 'package',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      async: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.",
            in: 'query',
            name: 'async',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Packaged translation streamed.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'TranslationPackageNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdPackageCheckRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/package/check',
  tags: ['Project'],
  summary: 'Track translation packaging status',
  description:
    'Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.',
  operationId: 'trackPackage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This is the package tracking key provided in the response of a /package call.',
            in: 'query',
            name: 'key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current status of packaging process.',
      content: { 'application/json': { schema: PackageStatusSchema } },
    },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'PackagingStatusMissing',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdPackageLanguageRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/package/{language}',
  tags: ['Project'],
  summary: 'Package your translated project language',
  description:
    'Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.',
  operationId: 'packageLanguage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description:
              'Language code. You can package the translation of only a specific language.',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      async: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.",
            in: 'query',
            name: 'async',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Packaging status and tracking code. With the package key, you can track the progress of translation packaging.Also packaged translation streamed.',
      content: {
        'application/json': { schema: PackageSchema },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'TranslationPackageNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdProgressRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/progress',
  tags: ['Project'],
  summary: 'View progress of a project',
  description: 'Monitor the translation progress of an already launched project in real-time.',
  operationId: 'getProgress',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      raw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This will return a more raw progress information for translation and proofreading. For instance, when completed, we will return 100% for both tasks by default, whereas their actual progress may be lower than 100%.',
            in: 'query',
            name: 'raw',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Progress information',
      content: { 'application/json': { schema: ProgressSchema } },
    },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdRecreateRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/recreate',
  tags: ['Project'],
  summary:
    'Recreate your translation project from scratch. This is a risky action, you will lose current translations.',
  operationId: 'recreateProject',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project recreation process started successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    401: {
      description: 'UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdReportsRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/reports',
  tags: ['Project'],
  summary: 'Submit feedback report for a project',
  operationId: 'submitProjectReports',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportContentSchema } } },
  },
  responses: {
    200: {
      description: 'Report submitted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'MissingMessage',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsIdSalesActivitiesRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/sales/activities',
  tags: ['Activity'],
  summary: 'Get sales activities for a project',
  operationId: 'getSalesActivities',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      excludeOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'excludeOwner', required: false, schema: { type: 'string' } },
        }),
      type: SalesActivityTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'type',
          required: false,
          schema: { $ref: '#/components/schemas/SalesActivityType' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Activities fetched successfully',
      content: { 'application/json': { schema: SalesActivitiesSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdSalesActivitiesRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/sales/activities',
  tags: ['Activity'],
  summary: 'Insert sales activity for a project',
  operationId: 'insertSalesActivity',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: NewSalesActivitySchema },
        'multipart/form-data': {
          schema: z
            .object({
              subject: z.string().exactOptional(),
              timestamp: z
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
              type: z.string().exactOptional().openapi({ description: 'Activity Type' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Acvitity inserted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: { description: 'BadRequest', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getProjectsIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/projects/{id}/webhooks',
  tags: ['Project Webhooks'],
  summary: 'View project webhooks',
  description:
    'This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.',
  operationId: 'getProjectWebhooks',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project model',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putProjectsIdWebhooksRoute = createRoute({
  method: 'put',
  path: '/projects/{id}/webhooks',
  tags: ['Project Webhooks'],
  summary: 'Update project webhook',
  description: 'Update project webhook URL',
  operationId: 'updateProjectWebhook',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookSchema } } },
  },
  responses: {
    200: {
      description: 'Updated project',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/projects/{id}/webhooks',
  tags: ['Project Webhooks'],
  summary: 'Update project webhook',
  description: 'Update project webhook URL',
  operationId: 'postProjectWebhook',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookSchema } } },
  },
  responses: {
    200: {
      description: 'Updated project',
      content: { 'application/json': { schema: ProjectSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteProjectsIdWebhooksRoute = createRoute({
  method: 'delete',
  path: '/projects/{id}/webhooks',
  tags: ['Project Webhooks'],
  summary: 'Delete project webhooks',
  description:
    'Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.',
  operationId: 'deleteProjectWebhook',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project webhook deleted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdActivitiesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/activities',
  tags: ['Activity'],
  summary: 'Monitor project activities',
  description:
    'Get a list of real-time activities in the project, such as translation suggestion and translation approval.',
  operationId: 'getActivities',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            schema: { default: 10, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of activity models',
      content: { 'application/json': { schema: ActivityListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdActivitiesActivityIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/activities/{activityId}',
  tags: ['Activity'],
  summary: 'View an activity',
  description: 'View the details of an activity in the project.',
  operationId: 'getActivity',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      activityId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Activity ID',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Activity model',
      content: { 'application/json': { schema: ActivitySchema } },
    },
    404: {
      description: 'ProjectActivityNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsProjectIdActivitiesActivityIdRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/activities/{activityId}',
  tags: ['Activity'],
  summary: 'Submit comment to an activity',
  description: 'Submit a comment to an activity in the project, such as translation or editing.',
  operationId: 'submitComment',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      activityId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Activity ID',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: CommentSchema },
        'multipart/form-data': {
          schema: z
            .object({
              comment: z.string().openapi({ description: 'Comment text.' }),
              commented_at: z
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
                .openapi({ type: 'integer', format: 'int64', description: 'Unix epoch time' }),
              id: z
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
              links: CommentLinksSchema.exactOptional(),
            })
            .openapi({ required: ['comment'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Comment model',
      content: { 'application/json': { schema: CommentSchema } },
    },
    404: {
      description: 'ProjectActivityNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdActivitiesActivityIdCommentsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/activities/{activityId}/comments',
  tags: ['Activity'],
  summary: 'View activity comments',
  description: 'View a list of comments added to this activity.',
  operationId: 'getActivityComments',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      activityId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Activity ID',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of Comment models',
      content: { 'application/json': { schema: CommentListSchema } },
    },
    404: {
      description: 'ProjectActivityNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdCommentsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/comments',
  tags: ['Activity'],
  summary: 'View all project comments',
  description: 'View a list of activity comments in the project.',
  operationId: 'getComments',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            schema: { default: 10, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of Comment models',
      content: { 'application/json': { schema: CommentListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/documents',
  tags: ['Project Document'],
  summary: 'View project source documents',
  description: 'Get a list of source files you uploaded to be translated in your project.',
  operationId: 'getProjectDocuments',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['preview', 'editors'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['preview', 'editors'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of document models',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsProjectIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/documents',
  tags: ['Project Document'],
  summary: 'Upload a new document',
  description: 'Upload a new document',
  operationId: 'createProjectDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DocumentUpdatesSchema },
        'multipart/form-data': {
          schema: z
            .object({
              'documents[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .exactOptional()
                .openapi({
                  description: 'You can add as many files as you want in documents[] parameter.',
                }),
              'schemes[]': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.',
                }),
              'source-links[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        name: z.string().exactOptional(),
                        size: z
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
                          .openapi({
                            type: 'integer',
                            format: 'int64',
                            description: 'file size in bytes. optional.',
                          }),
                        source: z
                          .enum(['dropbox', 'googledrive', 'icloud'])
                          .exactOptional()
                          .openapi({
                            description:
                              'Preferred source names are listed as enum. If you have a custom file type, simply enter that name.',
                          }),
                        url: z.url().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A list of successfully added new documents.',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedDocumentFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'InvalidDocumentScheme',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/documents/{documentId}',
  tags: ['Project Document'],
  summary: 'View a project source document',
  description: 'View the details of a source file you uploaded to be translated in your project.',
  operationId: 'getProjectDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['preview', 'editors'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['preview', 'editors'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document model',
      content: { 'application/json': { schema: DocumentSchema } },
    },
    404: {
      description: 'DocumentNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsProjectIdDocumentsDocumentIdRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/documents/{documentId}',
  tags: ['Project Document'],
  summary: 'Update the document.',
  description: 'Update the document. File name and contents will replaced with the new one.',
  operationId: 'updateProjectDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DocumentUploadRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              documents: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Single file data. The name is plural to provide a consistent naming convention.',
                }),
              schemes: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.',
                }),
              'source-link': z
                .object({
                  name: z.string().exactOptional(),
                  size: z
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
                    .openapi({
                      type: 'integer',
                      format: 'int64',
                      description: 'file size in bytes. optional.',
                    }),
                  source: z
                    .enum(['dropbox', 'googledrive', 'icloud'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Preferred source names are listed as enum. If you have a custom file type, simply enter that name.',
                    }),
                  url: z.url().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated document model',
      content: { 'application/json': { schema: DocumentSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall FileWasAlreadyUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'DocumentNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedDocumentFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'InvalidDocumentScheme',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteProjectsProjectIdDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/documents/{documentId}',
  tags: ['Project Document'],
  summary: 'Delete the document',
  description: 'Delete the document',
  operationId: 'deleteProjectDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document deleted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'DocumentNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdDocumentsDocumentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/documents/{documentId}/download',
  tags: ['Project Document'],
  summary: 'Download a project source document',
  description: 'Download an actual source file you uploaded to be translated in your project.',
  operationId: 'downloadProjectDocument',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document streamed',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'DocumentNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdDocumentsDocumentIdTranslationsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/documents/{documentId}/translations',
  tags: ['Strings'],
  summary: 'View strings and translations of a document',
  description:
    'View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.',
  operationId: 'getDocumentTranslations',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute = createRoute(
  {
    method: 'get',
    path: '/projects/{projectId}/documents/{documentId}/translations/download/{language}',
    tags: ['Project Document'],
    summary: 'Download translated document',
    description: 'Download translated document in the given target language.',
    operationId: 'downloadTranslatedDocumentForLanguage',
    request: {
      params: z.object({
        projectId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              description: 'Project ID',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { format: 'int64', type: 'integer' },
            },
          }),
        documentId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              description: 'Document ID',
              in: 'path',
              name: 'documentId',
              required: true,
              schema: { format: 'int64', type: 'integer' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description: 'Target language code.',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        certified: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description: 'Download certified translation',
              in: 'query',
              name: 'certified',
              required: false,
              schema: { default: 0, type: 'boolean' },
            },
            default: 0,
          }),
      }),
    },
    responses: {
      200: {
        description: 'File',
        content: {
          'application/octet-stream': {
            schema: z.file().openapi({ type: 'string', format: 'binary' }),
          },
        },
      },
      404: {
        description: 'DocumentNotFound',
        content: { 'application/json': { schema: ErrorSchema } },
      },
    },
  },
)

export const getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/documents/{documentId}/translations/{language}',
  tags: ['Strings'],
  summary: 'View strings and translations of a document for target language',
  description:
    'View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.',
  operationId: 'getDocumentTranslationsForLanguage',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      documentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Document ID',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: 'Target language code.',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const getProjectsProjectIdGlossariesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/glossaries',
  tags: ['Glossary'],
  summary: 'View glossaries',
  description: 'View a list of glossaries previously uploaded to the project.',
  operationId: 'getGlossaries',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of glossary models',
      content: { 'application/json': { schema: GlossaryListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsProjectIdGlossariesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/glossaries',
  tags: ['Glossary'],
  summary: 'Upload a glossary file',
  description:
    'Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.',
  operationId: 'createGlossary',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GlossaryUploadRequestSchema },
        'multipart/form-data': { schema: GlossaryUploadRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Newly created glossary model.',
      content: { 'application/json': { schema: GlossarySchema } },
    },
    400: { description: 'FileTooLarge', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    406: {
      description: 'ProjectAlreadyHasGlossary',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdGlossariesGlossaryIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/glossaries/{glossaryId}',
  tags: ['Glossary'],
  summary: 'View a glossary',
  description: 'View the details of a glossary file uploaded to a project.',
  operationId: 'getGlossary',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      glossaryId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Glossary ID',
            in: 'path',
            name: 'glossaryId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Glossary model',
      content: { 'application/json': { schema: GlossarySchema } },
    },
    404: {
      description: 'GlossaryNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putProjectsProjectIdGlossariesGlossaryIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/glossaries/{glossaryId}',
  tags: ['Glossary'],
  summary: 'Update a glossary',
  description:
    'Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.',
  operationId: 'updateGlossary',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      glossaryId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Glossary ID',
            in: 'path',
            name: 'glossaryId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GlossaryUploadRequestSchema },
        'multipart/form-data': { schema: GlossaryUploadRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated glossary model',
      content: { 'application/json': { schema: GlossarySchema } },
    },
    400: { description: 'FileTooLarge', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'GlossaryNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedGlossaryFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteProjectsProjectIdGlossariesGlossaryIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/glossaries/{glossaryId}',
  tags: ['Glossary'],
  summary: 'Delete a glossary',
  description: 'Delete the existing glossary from the project.',
  operationId: 'deleteGlossary',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      glossaryId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Glossary ID',
            in: 'path',
            name: 'glossaryId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Glossary deleted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'GlossaryNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdGlossariesGlossaryIdDownloadRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/glossaries/{glossaryId}/download',
  tags: ['Glossary'],
  summary: 'Download a glossary',
  description: 'Download a previously uploaded glossary file.',
  operationId: 'downloadGlossary',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      glossaryId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Glossary ID',
            in: 'path',
            name: 'glossaryId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Glossary streamed',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'GlossaryNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdStringsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/strings',
  tags: ['Strings'],
  summary: 'View project strings and translations',
  description:
    'View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.',
  operationId: 'getProjectStrings',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const postProjectsProjectIdStringsPackageRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/strings/package',
  tags: ['Strings'],
  summary: 'Download project translation memory',
  description: 'Package and download project translation memory in TMX format',
  operationId: 'packageProjectTranslationMemory',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      async: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.",
            in: 'query',
            name: 'async',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      format: z
        .string()
        .default('tmx')
        .exactOptional()
        .openapi({
          param: {
            description: 'Translation Memory file format',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'tmx', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response in TMX or async request',
      content: {
        'application/json': { schema: AsyncOperationStatusSchema },
        'application/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getProjectsProjectIdStringsPackageStatusRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/strings/package/status',
  tags: ['Strings'],
  summary: 'Check translation memory packaging status',
  description:
    'Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.',
  operationId: 'packageProjectTranslationMemoryStatus',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      async_request_key: z
        .string()
        .openapi({
          param: {
            description: 'Async operation key',
            in: 'query',
            name: 'async_request_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Async operation status. Use the key to query status of this operation.',
      content: { 'application/json': { schema: AsyncOperationStatusSchema } },
    },
  },
})

export const postProjectsProjectIdStringsLanguageCodePackageRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/strings/{languageCode}/package',
  tags: ['Strings'],
  summary: 'Download language-specific project translation memory',
  description:
    'Package and download project translation memory in TMX format for a specific target language.',
  operationId: 'packageProjectTranslationMemoryForLanguage',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      languageCode: z
        .string()
        .openapi({
          param: {
            description: 'Language Code',
            in: 'path',
            name: 'languageCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      async: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.",
            in: 'query',
            name: 'async',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      format: z
        .string()
        .default('tmx')
        .exactOptional()
        .openapi({
          param: {
            description: 'Translation Memory file format',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'tmx', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response in TMX or async request',
      content: {
        'application/json': { schema: AsyncOperationStatusSchema },
        'application/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getProjectsProjectIdStringsLanguageCodePackageStatusRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/strings/{languageCode}/package/status',
  tags: ['Strings'],
  summary: 'Check language-specific translation memory packaging status',
  description:
    'Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.',
  operationId: 'packageProjectTranslationMemoryForLanguageStatus',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      languageCode: z
        .string()
        .openapi({
          param: {
            description: 'Language Code',
            in: 'path',
            name: 'languageCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      async_request_key: z
        .string()
        .openapi({
          param: {
            description: 'Async operation key',
            in: 'query',
            name: 'async_request_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Async operation status. Use the key to query status of this operation.',
      content: { 'application/json': { schema: AsyncOperationStatusSchema } },
    },
  },
})

export const getProjectsProjectIdStringsLanguageRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/strings/{language}',
  tags: ['Strings'],
  summary: 'View strings and translations for target language',
  description:
    'View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.',
  operationId: 'getProjectStringsForLanguage',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: 'Target language code',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
})

export const getProjectsProjectIdStyleguidesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/styleguides',
  tags: ['Style Guide'],
  summary: 'View style guides',
  description: 'View a list of style guides in your project.',
  operationId: 'getStyleGuides',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('preview')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['preview'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of style guide models',
      content: { 'application/json': { schema: StyleGuideListSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postProjectsProjectIdStyleguidesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/styleguides',
  tags: ['Style Guide'],
  summary: 'Upload a new style guide',
  description: 'Upload a new style guide',
  operationId: 'createStyleGuide',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: StyleGuideUploadRequestSchema },
        'multipart/form-data': { schema: StyleGuideUploadRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Newly created style guide model or a list of new style guide models',
      content: { 'application/json': { schema: StyleGuideListSchema } },
    },
    400: { description: 'FileTooLarge', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedStyleGuideFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdStyleguidesStyleGuideIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/styleguides/{styleGuideId}',
  tags: ['Style Guide'],
  summary: 'View a style guide',
  description: 'View the details of a style guide uploaded to a project',
  operationId: 'getStyleGuide',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      styleGuideId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Style Guide ID',
            in: 'path',
            name: 'styleGuideId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('preview')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['preview'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Style guide model',
      content: { 'application/json': { schema: StyleGuideSchema } },
    },
    404: {
      description: 'StyleGuideNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putProjectsProjectIdStyleguidesStyleGuideIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/styleguides/{styleGuideId}',
  tags: ['Style Guide'],
  summary: 'Update a style guide',
  description:
    'Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.',
  operationId: 'updateStyleGuide',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      styleGuideId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Style guide ID',
            in: 'path',
            name: 'styleGuideId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: StyleGuideUploadRequestSchema },
        'multipart/form-data': { schema: StyleGuideUploadRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated style guide model',
      content: { 'application/json': { schema: StyleGuideSchema } },
    },
    400: { description: 'FileTooLarge', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'StyleGuideNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedStyleGuideFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteProjectsProjectIdStyleguidesStyleGuideIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/styleguides/{styleGuideId}',
  tags: ['Style Guide'],
  summary: 'Delete a style guide',
  description: 'Delete the existing style guide from the project.',
  operationId: 'deleteStyleGuide',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      styleGuideId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Style Guide ID',
            in: 'path',
            name: 'styleGuideId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Style guide deleted successfully',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: {
      description: 'StyleGuideNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'ProjectAlreadyStarted',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/styleguides/{styleGuideId}/download',
  tags: ['Style Guide'],
  summary: 'Download a style guide',
  description: 'Download a previously uploaded style guide file.',
  operationId: 'downloadStyleGuide',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      styleGuideId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Style Guide ID',
            in: 'path',
            name: 'styleGuideId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Style guide streamed',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'StyleGuideNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getProjectsProjectIdTranslationsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/translations',
  tags: ['Strings'],
  summary: 'Deprecated. Use /projects/{projectId}/strings instead.',
  operationId: 'getProjectTranslations',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
  deprecated: true,
})

export const getProjectsProjectIdTranslationsLanguageRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/translations/{language}',
  tags: ['Strings'],
  summary: 'Deprecated. use /projects/{projectId}/strings/{language} instead.',
  operationId: 'getProjectTranslationsForLanguage',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: 'Target language code',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response for strings and their translations',
      content: { 'application/json': { schema: StringListSchema } },
    },
  },
  deprecated: true,
})

export const getProjectsProjectIdVendorsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/vendors',
  tags: ['Project'],
  summary: 'Get a list of vendors.',
  description: 'Get a list of vendors.',
  operationId: 'getProjectVendors',
  request: {
    params: z.object({
      projectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Project ID',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User list', content: { 'application/json': { schema: UserListSchema } } },
    402: {
      description: 'ProjectNotLaunchedYet',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'ProjectNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postReportsFilterRoute = createRoute({
  method: 'post',
  path: '/reports/filter',
  tags: ['Report'],
  summary: 'Returns available options for selected timeframe.',
  operationId: 'getFilterContents',
  request: { body: { content: { 'application/json': { schema: FilterDatesSchema } } } },
  responses: {
    200: {
      description: 'Filter contents',
      content: { 'application/json': { schema: FilterContentsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postReportsLanguagePairsRoute = createRoute({
  method: 'post',
  path: '/reports/language-pairs',
  tags: ['Report'],
  summary: 'Language pairs report',
  description:
    'View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.',
  operationId: 'getLanguagePairsReport',
  request: { body: { content: { 'application/json': { schema: ReportFilterSchema } } } },
  responses: {
    200: {
      description: 'Language pairs stats for client and vendors',
      content: { 'application/json': { schema: LanguagePairsReportSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postReportsProjectsRoute = createRoute({
  method: 'post',
  path: '/reports/projects',
  tags: ['Report'],
  summary: 'Projects report',
  description:
    'View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.',
  operationId: 'getProjectsReport',
  request: { body: { content: { 'application/json': { schema: ReportFilterSchema } } } },
  responses: {
    200: {
      description: 'User stats for client and vendors',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postReportsQaRoute = createRoute({
  method: 'post',
  path: '/reports/qa',
  tags: ['Report'],
  summary: 'Generate a QA report for given filter',
  description: 'Generate a QA report for given filter',
  operationId: 'generateQAReport',
  request: { body: { content: { 'application/json': { schema: QaFilterSchema } } } },
  responses: {
    200: {
      description: 'List of QA entries',
      content: { 'application/json': { schema: QaWarningsSchema } },
    },
    400: {
      description: 'MissingParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postReportsUsersRoute = createRoute({
  method: 'post',
  path: '/reports/users',
  tags: ['Report'],
  summary: 'Company users report',
  description:
    'View translation reports for each user under your company account. You need the permission to view users in your company.',
  operationId: 'getUsersReport',
  request: { body: { content: { 'application/json': { schema: ReportFilterSchema } } } },
  responses: {
    200: {
      description: 'User stats for client and vendors',
      content: { 'application/json': { schema: UsersReportSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postResendEmailConfirmationRoute = createRoute({
  method: 'post',
  path: '/resend-email-confirmation',
  tags: ['User'],
  summary: 'Sends email confirmation email for current user',
  operationId: 'sendEmailConfirmation',
  responses: {
    200: {
      description:
        'When confirmation email is sent, status is `success`, or `already_confirmed` when user has already confirmed their email address.',
      content: {
        'application/json': {
          schema: OperationStatusSchema.and(
            z
              .object({
                status: z.enum(['success', 'already_confirmed']).default('success').exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getResponsivityRoute = createRoute({
  method: 'get',
  path: '/responsivity',
  tags: ['User'],
  summary: 'View your vendor responsiveness',
  description:
    'View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.',
  operationId: 'getResponsivity',
  request: {
    query: z.object({
      period: z
        .enum(['monthly', 'weekly'])
        .default('monthly')
        .exactOptional()
        .openapi({
          param: {
            description: 'Time period to calculate your responsiveness',
            in: 'query',
            name: 'period',
            schema: { default: 'monthly', enum: ['monthly', 'weekly'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vendor responsivity stats',
      content: { 'application/json': { schema: ResponsivityListSchema } },
    },
    400: {
      description: 'VendorNotFound - this is not a vendor user account',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['Search'],
  summary: 'Search everything in your account',
  description:
    'Search through everything in your account, from projects to documents, from source strings to translations...',
  operationId: 'searchEverywhere',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query term',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'include[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['projects', 'documents', 'strings'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search in these entities. Current oprions are projects, documents, strings. Can be multiple. When not provided, we'll search through all entities.",
            in: 'query',
            name: 'include[]',
            required: false,
            schema: {
              items: { enum: ['projects', 'documents', 'strings'], type: 'string' },
              type: 'array',
            },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search result for multiple entities and paging',
      content: { 'application/json': { schema: SearchEverywhereResultSchema } },
    },
  },
})

export const postSearchDocumentsReindexRoute = createRoute({
  method: 'post',
  path: '/search/documents/reindex',
  tags: ['Search'],
  summary: 'Reindex for search all of the client source and translation documents.',
  operationId: 'reindexDocuments',
  responses: {
    200: {
      description: 'Async operation status. Use the key to query status of this operation.',
      content: { 'application/json': { schema: AsyncOperationStatusSchema } },
    },
  },
})

export const getSearchDocumentsReindexStatusRoute = createRoute({
  method: 'get',
  path: '/search/documents/reindex/status',
  tags: ['Search'],
  summary: 'Check reindex status of the client source and translation documents.',
  operationId: 'checkDocumentsReindex',
  request: {
    query: z.object({
      async_request_key: z
        .string()
        .openapi({
          param: {
            description: 'Async operation key',
            in: 'query',
            name: 'async_request_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Async operation status. Use the key to query status of this operation.',
      content: { 'application/json': { schema: AsyncOperationStatusSchema } },
    },
  },
})

export const getStatsRoute = createRoute({
  method: 'get',
  path: '/stats',
  tags: ['User'],
  summary: 'View your account statistics',
  description: 'View your client and vendor statistics.',
  operationId: 'getStats',
  responses: {
    200: {
      description: 'Client and vendor statistics for your account',
      content: { 'application/json': { schema: StatsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getStatsCommissionsRoute = createRoute({
  method: 'get',
  path: '/stats/commissions',
  tags: ['Stats'],
  summary: 'Returns the total commissions stats.',
  operationId: 'getCommissionStats',
  responses: {
    200: {
      description: "User's commission stats",
      content: { 'application/json': { schema: CommissionStatsSchema } },
    },
    401: {
      description: 'UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStatsCommissionsRoute = createRoute({
  method: 'post',
  path: '/stats/commissions',
  tags: ['Stats'],
  summary: 'Returns the total commissions stats by report filter.',
  operationId: 'getCommissionStatsByFilter',
  request: { body: { content: { 'application/json': { schema: ReportFilterSchema } } } },
  responses: {
    200: {
      description: "User's commission stats",
      content: { 'application/json': { schema: CommissionStatsSchema } },
    },
    401: {
      description: 'UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getStatsPopularPairsRoute = createRoute({
  method: 'get',
  path: '/stats/popular-pairs',
  tags: ['Stats'],
  summary: 'View your popular language pairs',
  operationId: 'getPopularPairs',
  responses: {
    200: {
      description: 'Your most ordered language pairs',
      content: { 'application/json': { schema: PopularLanguagePairsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getStatsProjectsRoute = createRoute({
  method: 'get',
  path: '/stats/projects',
  tags: ['Stats'],
  summary: 'View your project statistics',
  operationId: 'getProjectStats',
  responses: {
    200: {
      description: 'Project statistics for your account',
      content: { 'application/json': { schema: ClientProjectStatsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getStatsStringsRoute = createRoute({
  method: 'get',
  path: '/stats/strings',
  tags: ['Stats'],
  summary: 'View your translation statistics',
  operationId: 'getStringStats',
  responses: {
    200: {
      description: 'Translation statistics for your account',
      content: { 'application/json': { schema: ClientStringStatsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getStringsRoute = createRoute({
  method: 'get',
  path: '/strings',
  tags: ['Strings'],
  summary: 'View account strings (translation memory)',
  description:
    'Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.',
  operationId: 'getStrings',
  request: {
    query: z.object({
      source_language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Source Language Code',
            in: 'query',
            name: 'source_language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Requested page',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of strings in JSON',
      content: { 'application/json': { schema: ClientStringsSchema } },
    },
  },
})

export const putStringsRoute = createRoute({
  method: 'put',
  path: '/strings',
  tags: ['Strings'],
  summary: 'Update string translation',
  description: 'Update the translation of a string from your account strings/translation memory.',
  operationId: 'updateTranslationMemoryUnit',
  request: { body: { content: { 'application/json': { schema: TranslationMemoryUnitSchema } } } },
  responses: {
    200: {
      description: 'Translation updated by adding new translation memory unit',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description:
        'Corporate id, source language, target language, source string or target string is not provided',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Source language or target language is not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Something went wrong and translation unit is not updated',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStringsRoute = createRoute({
  method: 'post',
  path: '/strings',
  tags: ['Strings'],
  summary: 'Translate Strings with MT',
  description: 'Deprecated, use instant translation mechanism for continuous projects.',
  operationId: 'postStrings',
  request: {
    body: { content: { 'application/json': { schema: DeprecatedStringTranslationContentSchema } } },
  },
  responses: {
    200: {
      description: 'Machine Translated Strings in JSON',
      content: { 'application/json': { schema: MachineTranslatedStringsSchema } },
    },
  },
  deprecated: true,
})

export const postStringsLanguageCodePackageRoute = createRoute({
  method: 'post',
  path: '/strings/{languageCode}/package',
  tags: ['Strings'],
  summary: 'Download account translation memory',
  description:
    'Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.',
  operationId: 'packageUserTranslationMemory',
  request: {
    params: z.object({
      languageCode: z
        .string()
        .openapi({
          param: {
            description: 'Source Language Code',
            in: 'path',
            name: 'languageCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      async: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.",
            in: 'query',
            name: 'async',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      email: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: "If you don't need us to email the TMX, set this to '0'. Default is 1.",
            in: 'query',
            name: 'email',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response in TMX or async request',
      content: {
        'application/json': { schema: AsyncOperationStatusSchema },
        'application/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getStringsLanguageCodePackageStatusRoute = createRoute({
  method: 'get',
  path: '/strings/{languageCode}/package/status',
  tags: ['Strings'],
  summary: 'Check account translation memory packaging status',
  description:
    'Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.',
  operationId: 'packageUserTranslationMemoryForLanguageStatus',
  request: {
    params: z.object({
      languageCode: z
        .string()
        .openapi({
          param: {
            description: 'Language Code',
            in: 'path',
            name: 'languageCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      async_request_key: z
        .string()
        .openapi({
          param: {
            description: 'Async operation key',
            in: 'query',
            name: 'async_request_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Async operation status. Use the key to query status of this operation.',
      content: { 'application/json': { schema: AsyncOperationStatusSchema } },
    },
  },
})

export const getStyleguideRoute = createRoute({
  method: 'get',
  path: '/styleguide',
  tags: ['Style Guide'],
  summary: 'Download account style guide',
  description:
    "Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.",
  operationId: 'downloadGlobalStyleGuide',
  responses: {
    200: {
      description: 'Style guide file streamed.',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'StyleGuideNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStyleguideRoute = createRoute({
  method: 'post',
  path: '/styleguide',
  tags: ['Style Guide'],
  summary: 'Create or update the account style guide',
  description:
    "Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.",
  operationId: 'updateGlobalStyleGuide',
  request: {
    body: {
      content: {
        'application/json': { schema: AccountStyleGuideUploadRequestSchema },
        'multipart/form-data': { schema: AccountStyleGuideUploadRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'FileTooLarge FileTooSmall NoFileUploaded MissingCorporateAccount',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'UnsupportedStyleGuideFormat',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSurveysScopeTypeRoute = createRoute({
  method: 'get',
  path: '/surveys/{scope}/{type}',
  tags: ['Surveys'],
  summary: 'Get survey questions in given scope and type',
  description: 'Get survey questions in given scope and type',
  operationId: 'getQuestions',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: {
            description: 'Scope',
            in: 'path',
            name: 'scope',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Type',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      attach_answers_for_project: z
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
            description: 'Project ID',
            in: 'query',
            name: 'attach_answers_for_project',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Survey Questions',
      content: { 'application/json': { schema: SurveyQuestionsSchema } },
    },
    404: {
      description: 'SurveyQuestionsNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSurveysScopeTypeRoute = createRoute({
  method: 'post',
  path: '/surveys/{scope}/{type}',
  tags: ['Surveys'],
  summary: 'Post survey answers for scope and type',
  description: 'Post survey answers for scope and type',
  operationId: 'submitAnswers',
  request: {
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: {
            description: 'Scope',
            in: 'path',
            name: 'scope',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Type',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SurveyAnswersSchema } } },
  },
  responses: {
    200: {
      description: 'Survey Answers',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    500: {
      description: 'FailedToSubmitSurveyAnswers',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSwaggerRoute = createRoute({
  method: 'get',
  path: '/swagger',
  tags: ['Static'],
  summary: 'OpenAPI YAML representation of our API',
  description: 'Get Swagger YAML',
  operationId: 'getSwaggerYaml',
  responses: {
    200: { description: 'Swagger YAML', content: { 'text/yaml': { schema: z.string() } } },
  },
})

export const postTokenRoute = createRoute({
  method: 'post',
  path: '/token',
  tags: ['Auth'],
  summary: 'Retrieve an access token',
  description:
    'MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.\n',
  operationId: 'getAccessToken',
  request: {
    body: {
      content: {
        'application/json': { schema: TokenRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              grant_type: z
                .string()
                .openapi({
                  description:
                    "OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.",
                  'x-public-description':
                    "OAuth2 grant type. We publicly support 'client_credentials' or 'refresh_token' grant types, while other strategies are also possible but not allowed regularly.",
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'MW Account password (to be used in password grant type)',
                  'x-internal': true,
                }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Refresh token value for refresh token flow.' }),
              scope: z
                .string()
                .openapi({
                  description: "Authorization scope. Use 'privileged' for private endpoints.",
                }),
              user_id: z
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
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Value for user_id grant type flow.',
                  'x-internal': true,
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'MW Account email (to be used in password grant type)',
                  'x-internal': true,
                }),
            })
            .openapi({ required: ['grant_type', 'scope'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Authentication response',
      content: { 'application/json': { schema: TokenSchema } },
    },
    default: {
      description:
        'Authentication error - for vendor auth, it will also fail if their account is not approved yet. In that case, the error response will include "account_status" key.',
      content: { 'application/json': { schema: TokenErrorSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const postUnfreezeAccountRoute = createRoute({
  method: 'post',
  path: '/unfreeze-account',
  tags: ['User'],
  summary: 'Defreeze your account',
  description: 'Reactive your account to start receiving notifications.',
  operationId: 'unfreezeAccount',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Account is already unfrozen for notifications' },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getUserGroupsRoute = createRoute({
  method: 'get',
  path: '/user-groups',
  tags: ['User'],
  summary: 'View your user groups',
  description:
    "View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.",
  operationId: 'getUserGroups',
  responses: {
    200: {
      description: 'List of user groups',
      content: { 'application/json': { schema: UserGroupListSchema } },
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['User'],
  summary: 'Get a list of platform users',
  description: 'Get a list of platform users',
  operationId: 'getUsers',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
      user_type: z
        .enum(['vendor', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_type',
            required: false,
            schema: { default: 'all', enum: ['vendor', 'all'], type: 'string' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'email', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'User list', content: { 'application/json': { schema: UserListSchema } } },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['User'],
  summary: 'Create a new user',
  description: 'Create a new platform user',
  operationId: 'createUser',
  request: {
    query: z.object({
      notify: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Send a welcome email to the user',
            in: 'query',
            name: 'notify',
            required: false,
            schema: { default: 1, type: 'boolean' },
          },
          default: 1,
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: { description: 'Created user', content: { 'application/json': { schema: UserSchema } } },
  },
})

export const postUsersAvailableVendorsRoute = createRoute({
  method: 'post',
  path: '/users/available-vendors',
  tags: ['Vendor'],
  summary: 'Get a list of vendors available for the criteria given',
  description: 'Get a list of vendors available for the criteria given',
  operationId: 'getAvailableVendors',
  request: {
    query: z.object({
      'with[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('user')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Include detailed information. Possible values 'user'. Requesting user info enrichment takes much longer.",
            in: 'query',
            name: 'with[]',
            required: false,
            schema: { items: { enum: ['user'], type: 'string' }, type: 'array' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AvailableVendorsFilterSchema } } },
  },
  responses: {
    200: { description: 'User list', content: { 'application/json': { schema: UserListSchema } } },
  },
})

export const postUsersFilterRoute = createRoute({
  method: 'post',
  path: '/users/filter',
  tags: ['User'],
  summary: 'Filter vendors based on provided parameters',
  description: 'Get a list of vendors available for the criteria given',
  operationId: 'getFilteredVendors',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      per_page: z
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
            description: 'The number of items per page',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to order the results by',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The order to sort the results by (ascending or descending)',
            in: 'query',
            name: 'order',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FilterVendorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response User List',
      content: { 'application/json': { schema: UserListSchema } },
    },
  },
})

export const postUsersSendPasswordReminderRoute = createRoute({
  method: 'post',
  path: '/users/send-password-reminder',
  tags: ['User'],
  summary: "Sends password reset email to the user's registered email address",
  operationId: 'sendPasswordReminder',
  request: { body: { content: { 'application/json': { schema: EmailSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'Reminder already sent, wait for a while before new request!',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getUsersTagsRoute = createRoute({
  method: 'get',
  path: '/users/tags',
  tags: ['User'],
  summary: 'Returns all vendor tags for vendors filter',
  description: 'Returns all vendor tags for vendors filter',
  operationId: 'getAllVendorTags',
  responses: {
    200: {
      description: 'Successful response tag list',
      content: { 'application/json': { schema: z.array(VendorTagSchema) } },
    },
  },
})

export const getUserIdRoute = createRoute({
  method: 'get',
  path: '/{userId}',
  tags: ['User'],
  summary: 'Get user information, including client or vendor specific info.',
  operationId: 'getUser',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User summary', content: { 'application/json': { schema: UserSchema } } },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdRoute = createRoute({
  method: 'post',
  path: '/{userId}',
  tags: ['User'],
  operationId: 'updateUser',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserUpdateContentSchema } } },
  },
  responses: {
    200: { description: 'User info', content: { 'application/json': { schema: UserSchema } } },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postUserIdApproveRoute = createRoute({
  method: 'post',
  path: '/{userId}/approve',
  tags: ['User'],
  operationId: 'approveVendorApplication',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vendor application of this user is approved. User is ready to work with us.',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const deleteUserIdDeleteAccountRoute = createRoute({
  method: 'delete',
  path: '/{userId}/delete-account',
  tags: ['User'],
  summary: 'Delete requester account',
  operationId: 'deleteUserAccount',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getUserIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/{userId}/documents',
  tags: ['Document'],
  summary: 'Get a list of your documents',
  description: 'Get a list of your documents',
  operationId: 'getUserDocuments',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      recent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'When true, this will return the most 4 recent active documents.',
            in: 'query',
            name: 'recent',
            required: false,
            schema: { default: 0, type: 'boolean' },
          },
          default: 0,
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      type_filter: z
        .enum([
          'ALL',
          'TEXT_DOCUMENTS',
          'PRESENTATIONS',
          'SPREADSHEETS',
          'PDFS',
          'IMAGES',
          'SUBTITLES',
          'DESIGNS',
          'LOCALIZATION',
          'WEB',
          'STYLE_GUIDES',
          'GLOSSARIES',
        ])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type_filter',
            required: false,
            schema: {
              default: 'ALL',
              enum: [
                'ALL',
                'TEXT_DOCUMENTS',
                'PRESENTATIONS',
                'SPREADSHEETS',
                'PDFS',
                'IMAGES',
                'SUBTITLES',
                'DESIGNS',
                'LOCALIZATION',
                'WEB',
                'STYLE_GUIDES',
                'GLOSSARIES',
              ],
              type: 'string',
            },
          },
        }),
      language_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "searches in source language of documents, in source and target languages of document's quote",
            in: 'query',
            name: 'language_code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
      order_by: z
        .enum(['id', 'updated_at', 'created_at', 'name'])
        .default('updated_at')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              default: 'updated_at',
              enum: ['id', 'updated_at', 'created_at', 'name'],
              type: 'string',
            },
          },
        }),
      order_type: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_type',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string', default: 'desc' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document list',
      content: { 'application/json': { schema: DocumentListSchema } },
    },
  },
})

export const postUserIdDowngradeProofreaderRoute = createRoute({
  method: 'post',
  path: '/{userId}/downgrade-proofreader',
  tags: ['User'],
  operationId: 'downgradeUserProofreader',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Vendor is already a translator' },
    400: {
      description: 'VendorNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdEarningsRoute = createRoute({
  method: 'get',
  path: '/{userId}/earnings',
  tags: ['User'],
  summary:
    'Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.',
  operationId: 'getUserEarnings',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Earnings for vendors',
      content: { 'application/json': { schema: EarningsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdFreezeAccountRoute = createRoute({
  method: 'post',
  path: '/{userId}/freeze-account',
  tags: ['User'],
  summary: 'Freeze requester account for project notifications',
  operationId: 'freezeUserAccount',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Account is already frozen for notifications' },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postUserIdMakeProofreaderRoute = createRoute({
  method: 'post',
  path: '/{userId}/make-proofreader',
  tags: ['User'],
  operationId: 'makeUserProofreader',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Vendor is already a proofreader' },
    400: {
      description: 'VendorNotFound',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdNotificationsSubscribeRoute = createRoute({
  method: 'post',
  path: '/{userId}/notifications/subscribe',
  tags: ['User'],
  operationId: 'subscribeUserNotification',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationSubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Saved notification subscription information',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'MissingParameter | Failed to save subscription',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdNotificationsUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/{userId}/notifications/unsubscribe',
  tags: ['User'],
  operationId: 'unsubscribeUserNotification',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationSubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Deleted notification subscription information',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'MissingParameter | Failed to delete subscription',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdPaymentRoute = createRoute({
  method: 'get',
  path: '/{userId}/payment',
  tags: ['User'],
  summary: "View user's payment and billing info",
  description:
    'Returns billing and saved credit card information for user, and their corporate account if present & allowed.',
  operationId: 'getUserPaymentInfo',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns billing and saved card information for user, and their corporate if present.',
      content: { 'application/json': { schema: PaymentInfoSchema } },
    },
    404: {
      description: 'UserNotFound UnauthorizedUser',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postUserIdPaymentRoute = createRoute({
  method: 'post',
  path: '/{userId}/payment',
  tags: ['User'],
  summary: 'Update user payment info',
  description: "Update user's billing and saved credit card information",
  operationId: 'updateUserPaymentInfo',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PaymentInfoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getUserIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/{userId}/permissions',
  tags: ['User'],
  summary: 'Returns a list of permissions that this user is authorized for.',
  operationId: 'getUserPermissions',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of permission strings',
      content: { 'application/json': { schema: PermissionListSchema } },
    },
  },
})

export const postUserIdProfilePictureRoute = createRoute({
  method: 'post',
  path: '/{userId}/profile-picture',
  tags: ['User'],
  operationId: 'uploadUserProfilePicture',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ProfilePictureUploadSchema },
        'multipart/form-data': { schema: ProfilePictureUploadSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    400: {
      description: 'NoFileUploaded',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdProjectsVendorRoute = createRoute({
  method: 'get',
  path: '/{userId}/projects/vendor',
  tags: ['Project'],
  summary: 'Get a list of user/vendor projects',
  description: 'Get a list of user/vendor projects',
  operationId: 'getVendorProjectsByUserId',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      joined: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only projects that this user has already joined',
            in: 'query',
            name: 'joined',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      completed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only projects that have been completed. When `true`, this makes `joined` true as well.',
            in: 'query',
            name: 'completed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int64', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vendor project list',
      content: { 'application/json': { schema: ProjectListSchema } },
    },
    400: {
      description: 'VendorNotFound - this is not a vendor user account',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postUserIdRejectRoute = createRoute({
  method: 'post',
  path: '/{userId}/reject',
  tags: ['User'],
  operationId: 'rejectVendorApplication',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vendor application of this user is rejected.',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdResendEmailConfirmationRoute = createRoute({
  method: 'post',
  path: '/{userId}/resend-email-confirmation',
  tags: ['User'],
  summary: 'Sends email confirmation email for a user',
  operationId: 'sendUserEmailConfirmation',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'confirmation email has been sent',
      content: {
        'application/json': {
          schema: OperationStatusSchema.and(
            z
              .object({ status: z.literal('success').default('success').exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    202: {
      description:
        'status is `already_confirmed` when user has already confirmed their email address.',
      content: {
        'application/json': {
          schema: OperationStatusSchema.and(
            z
              .object({
                status: z.literal('already_confirmed').default('already_confirmed').exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: {
      description: 'VendorNotFound - this is not a vendor user account',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdResponsivityRoute = createRoute({
  method: 'get',
  path: '/{userId}/responsivity',
  tags: ['User'],
  summary: "Returns a user's vendor responsivity stats",
  operationId: 'getUserResponsivity',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      period: z
        .enum(['monthly', 'weekly'])
        .default('monthly')
        .exactOptional()
        .openapi({
          param: {
            description: 'Period for calcualtion.',
            in: 'query',
            name: 'period',
            schema: { default: 'monthly', enum: ['monthly', 'weekly'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vendor responsivity stats',
      content: { 'application/json': { schema: ResponsivityListSchema } },
    },
    400: {
      description: 'VendorNotFound - this is not a vendor user account',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdStatsRoute = createRoute({
  method: 'get',
  path: '/{userId}/stats',
  tags: ['User'],
  summary:
    'Returns a user\'s client and vendor statistics. This used to be called "summary" (\\@deprecated).',
  operationId: 'getUserStats',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User stats for client and vendors',
      content: { 'application/json': { schema: StatsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdStatsPopularPairsRoute = createRoute({
  method: 'get',
  path: '/{userId}/stats/popular-pairs',
  tags: ['User'],
  summary: 'Returns the language pairs that the user has ordered most.',
  operationId: 'getUserPopularPairs',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "User's most ordered language pairs",
      content: { 'application/json': { schema: PopularLanguagePairsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const getUserIdStatsProjectsRoute = createRoute({
  method: 'get',
  path: '/{userId}/stats/projects',
  tags: ['User'],
  summary: "Returns a user's project statistics.",
  operationId: 'getUserProjectStats',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User stats for client and vendors',
      content: { 'application/json': { schema: ClientProjectStatsSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdSuspendRoute = createRoute({
  method: 'post',
  path: '/{userId}/suspend',
  tags: ['User'],
  operationId: 'suspendUser',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SuspendUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Suspended user account.',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ mwoAuth: ['privileged'] }],
})

export const postUserIdUnfreezeAccountRoute = createRoute({
  method: 'post',
  path: '/{userId}/unfreeze-account',
  tags: ['User'],
  summary: 'Unfreeze requester account for project notifications',
  operationId: 'unfreezeUserAccount',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationStatusSchema } },
    },
    304: { description: 'Account is already unfrozen for notifications' },
    404: { description: 'UserNotFound', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getUserIdUserGroupsRoute = createRoute({
  method: 'get',
  path: '/{userId}/user-groups',
  tags: ['User'],
  summary: 'Returns a list of user groups that this user belongs to.',
  operationId: 'getThisUserGroups',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of user groups',
      content: { 'application/json': { schema: UserGroupListSchema } },
    },
  },
})

export const postUserIdUserGroupsRoute = createRoute({
  method: 'post',
  path: '/{userId}/user-groups',
  tags: ['User'],
  operationId: 'updateUserGroup',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'User ID',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActiveWidgetSchema } } },
  },
  responses: {
    200: {
      description: 'List of user groups',
      content: { 'application/json': { schema: UserGroupListSchema } },
    },
    400: {
      description: 'InvalidParameter',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ mwoAuth: ['privileged'] }],
})
