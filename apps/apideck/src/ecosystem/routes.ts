import { createRoute, z } from '@hono/zod-openapi'

const CTASettingsSchema = z
  .strictObject({
    background_color: z.string().exactOptional(),
    button_background_color: z.string().exactOptional(),
    button_color: z.string().exactOptional(),
    button_label: z.string().exactOptional(),
    button_link: z.string().exactOptional(),
    color: z.string().exactOptional(),
    description: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CTASettings')

const CardSettingsSchema = z
  .strictObject({
    background_color: z.string().exactOptional(),
    border_color: z.string().exactOptional(),
    border_radius: z.string().exactOptional(),
    border_size: z.string().exactOptional(),
    color: z.string().exactOptional(),
    columns: z.int().exactOptional(),
    description_lines: z.int().exactOptional(),
    icon_border_radius: z.string().exactOptional(),
    icon_shadow_enabled: z.boolean().exactOptional(),
    icon_size: z.int().exactOptional(),
    shadow_enabled: z.boolean().exactOptional(),
    show_action: z.boolean().exactOptional(),
    show_badges: z.boolean().exactOptional(),
    show_category: z.boolean().exactOptional(),
    show_description: z.boolean().exactOptional(),
    style: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CardSettings')

const LogoSchema = z
  .strictObject({
    content_type: z.string().exactOptional(),
    id: z.string().exactOptional(),
    type: z.enum(['LOGO', 'BANNER', 'SCREENSHOT']).exactOptional(),
    url: z.string(),
  })
  .openapi({ required: ['url'] })
  .openapi('Logo')

const TranslationSchema = z
  .object({ key: z.string(), locale: z.string(), value: z.string().exactOptional() })
  .openapi({ required: ['key', 'locale'] })
  .openapi('Translation')

const TranslationsSchema = z
  .array(TranslationSchema)
  .nullable()
  .openapi({ required: ['key', 'locale', 'value'] })
  .openapi('Translations')

const CategorySchema = z
  .strictObject({
    count: z.int().exactOptional().openapi({ example: 1 }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    listing_description_text_template: z.string().exactOptional(),
    listing_features_text_template: z.string().exactOptional(),
    listing_pricing_text_template: z.string().exactOptional(),
    logo: LogoSchema.exactOptional(),
    name: z.string(),
    slug: z.string(),
    translations: TranslationsSchema.exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'slug'] })
  .openapi('Category')

const FileSchema = z
  .object({
    content_type: z.string().exactOptional().openapi({ example: 'application/jpeg' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    type: z.enum(['LOGO', 'BANNER', 'SCREENSHOT']).exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    url: z.string(),
  })
  .openapi({ required: ['url'] })
  .openapi('File')

const CollectionSchema = z
  .strictObject({
    card_background_color: z.string().exactOptional(),
    card_background_image: FileSchema.exactOptional(),
    card_columns: z.int().exactOptional(),
    card_style: z.string().exactOptional(),
    count: z.int().exactOptional().openapi({ example: 1 }),
    description: z.string().exactOptional(),
    hidden_from_homepage: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    logo: FileSchema.exactOptional(),
    name: z.string(),
    sequence: z.int().exactOptional(),
    show_max_items_homepage: z.int().exactOptional(),
    slug: z.string(),
    translations: TranslationsSchema.exactOptional(),
    visible: z.boolean(),
  })
  .openapi({ required: ['name', 'slug', 'visible'] })
  .openapi('Collection')

const ContactSchema = z
  .object({
    email: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    last_name: z.string().exactOptional(),
    linked_in: z.string().exactOptional(),
    name: z.string(),
    role: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('Contact')

const CustomSettingsSchema = z
  .strictObject({
    css: z.string().exactOptional(),
    css_link: z.string().exactOptional(),
    domain: z.string().exactOptional(),
    html_footer: z.string().exactOptional(),
    html_nav: z.string().exactOptional(),
    java_script_link: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomSettings')

const IntegrationSettingsSchema = z
  .strictObject({
    albacross_id: z.string().exactOptional(),
    automate_enabled: z.boolean().exactOptional(),
    blendr_enabled: z.boolean().exactOptional(),
    combidesk_enabled: z.boolean().exactOptional(),
    crisp_id: z.string().exactOptional(),
    drift_id: z.string().exactOptional(),
    google_analytics_id: z.string().exactOptional(),
    google_tag_manager_id: z.string().exactOptional(),
    heap_id: z.string().exactOptional(),
    hubspot_portal_id: z.string().exactOptional(),
    integromat_enabled: z.boolean().exactOptional(),
    intercom_app_id: z.string().exactOptional(),
    iubenda_cookie_policy_id: z.string().exactOptional(),
    iubenda_site_id: z.string().exactOptional(),
    journy_io_domain: z.string().exactOptional(),
    journy_io_id: z.string().exactOptional(),
    livechat_id: z.string().exactOptional(),
    metomic_id: z.string().exactOptional(),
    microsoft_flow_enabled: z.boolean().exactOptional(),
    microsoft_flow_id: z.string().exactOptional(),
    onetrust_id: z.string().exactOptional(),
    piesync_enabled: z.boolean().exactOptional(),
    segment_enabled: z.boolean().exactOptional(),
    segment_id: z.string().exactOptional(),
    tray_io_enabled: z.boolean().exactOptional(),
    zapier_beta_link: z.string().exactOptional(),
    zapier_enabled: z.boolean().exactOptional(),
    zapier_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntegrationSettings')

const LeadFormSettingsSchema = z
  .strictObject({
    capture_form_enabled: z.boolean().exactOptional(),
    first_name_field_enabled: z.boolean().exactOptional(),
    first_name_field_required: z.boolean().exactOptional(),
    integration_enabled: z.boolean().exactOptional(),
    last_name_field_enabled: z.boolean().exactOptional(),
    last_name_field_required: z.boolean().exactOptional(),
    telephone_field_enabled: z.boolean().exactOptional(),
    telephone_field_required: z.boolean().exactOptional(),
    work_email_validation: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LeadFormSettings')

const ListingSettingsSchema = z
  .strictObject({
    description_text_template: z.string().exactOptional(),
    description_title: z.string().exactOptional(),
    features_text_template: z.string().exactOptional(),
    features_title: z.string().exactOptional(),
    install_button_label: z.string().exactOptional(),
    name_postfix: z.string().exactOptional(),
    naming: z
      .enum([
        'LISTING',
        'LISTINGS',
        'INTEGRATIONS',
        'APPS',
        'CONNECTORS',
        'DATASOURCES',
        'ADDONS',
        'PLUGINS',
        'PARTNERS',
        'CHANNELS',
        'CONNECTIONS',
        'EXTENSIONS',
      ])
      .exactOptional(),
    native_integration_link: z.string().exactOptional(),
    pricing_disabled: z.boolean().exactOptional(),
    pricing_text_template: z.string().exactOptional(),
    pricing_title: z.string().exactOptional(),
    sidebar_position: z.enum(['TOP', 'LEFT', 'RIGHT', 'HIDDEN']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListingSettings')

const MastheadSettingsSchema = z
  .strictObject({
    background: z.string().exactOptional(),
    background_color: z.string().exactOptional(),
    color: z.string().exactOptional(),
    columns: z.int().exactOptional(),
    description: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MastheadSettings')

const MetaTagSettingsSchema = z
  .strictObject({
    description: z.string().exactOptional(),
    description_category_page: z.string().exactOptional(),
    description_collection_page: z.string().exactOptional(),
    description_listing_page: z.string().exactOptional(),
    keywords: z.string().exactOptional(),
    title: z.string().exactOptional(),
    title_postfix: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetaTagSettings')

const EcosystemSchema = z
  .strictObject({
    about: z.string().exactOptional(),
    alternatives_background_color: z.string().exactOptional(),
    alternatives_color: z.string().exactOptional(),
    attribution: z.boolean().exactOptional(),
    body_background_color: z.string().exactOptional(),
    body_button_background_color: z.string().exactOptional(),
    body_button_color: z.string().exactOptional(),
    body_color: z.string().exactOptional(),
    body_link_color: z.string().exactOptional(),
    card_settings: CardSettingsSchema.exactOptional(),
    categories_count_badge: z.boolean().exactOptional(),
    categories_show_max_items: z.int().exactOptional(),
    collections_count_badge: z.boolean().exactOptional(),
    collections_title: z.string().exactOptional(),
    create_link: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    cta_settings: CTASettingsSchema.exactOptional(),
    custom_domain: z.string().exactOptional(),
    custom_settings: CustomSettingsSchema.exactOptional(),
    detail_pages_enabled: z.boolean().exactOptional(),
    footer_background_color: z.string().exactOptional(),
    footer_color: z.string().exactOptional(),
    google_site_verification_id: z.string().exactOptional(),
    hide_install_buttons: z.boolean().exactOptional(),
    home_page_collection_category_cards: z.boolean().exactOptional(),
    home_page_show_all_listings: z.boolean().exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    installation_request_flow_enabled: z.boolean().exactOptional(),
    integration_settings: IntegrationSettingsSchema.exactOptional(),
    is_published: z.boolean(),
    lead_form_settings: LeadFormSettingsSchema.exactOptional(),
    listing_settings: ListingSettingsSchema.exactOptional(),
    masthead_settings: MastheadSettingsSchema.exactOptional(),
    menu_position: z.enum(['TOP', 'LEFT', 'RIGHT', 'HIDDEN']).exactOptional(),
    menu_style: z.enum(['LIST', 'PILL', 'FILTER']).exactOptional(),
    meta_tag_settings: MetaTagSettingsSchema.exactOptional(),
    name: z.string(),
    navigation_background_color: z.string().exactOptional(),
    navigation_color: z.string().exactOptional(),
    navigation_logo_post_fix: z.string().exactOptional(),
    navigation_mobile_menu_type: z.enum(['ICON', 'TEXT']).exactOptional(),
    navigation_sticky: z.boolean().exactOptional(),
    primary_color: z.string().exactOptional(),
    privacy_link: z.string().exactOptional(),
    request_link: z.string().exactOptional(),
    shadow_page_description: z.string().exactOptional(),
    shadow_pages_enabled: z.boolean().exactOptional(),
    show_attribution_badge: z.boolean().exactOptional(),
    show_requested_listings: z.boolean().exactOptional(),
    slug: z.string(),
    terms_link: z.string().exactOptional(),
    total_published_listings: z.int().exactOptional(),
    unify_application_id: z.string().exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    utm_campaign: z.string().exactOptional(),
    website: z.string().exactOptional(),
    zaps_menu_title: z.string().exactOptional(),
    zaps_page_enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: ['name', 'slug', 'is_published'] })
  .openapi('Ecosystem')

const LinksSchema = z
  .object({
    current: z
      .string()
      .openapi({
        description: 'Link to navigate to the current page through the API',
        example: 'https://api.apideck.com/ecosystem/123abc/listings',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM',
      }),
    previous: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example:
          'https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
      }),
  })
  .openapi({
    description: 'Links to navigate to previous or next pages through the API',
    required: ['current'],
  })
  .openapi('Links')

const MetaSchema = z
  .object({
    cursors: z
      .object({
        current: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the current page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjI=',
          }),
        next: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the next page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjM=',
          }),
        previous: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the previous page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjE=',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cursors to navigate to previous or next pages through the API',
        required: [],
      }),
    items_on_page: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of items returned in the data property of the response',
        example: 50,
      }),
  })
  .openapi({ description: 'Response metadata', required: [] })
  .openapi('Meta')

const GetCategoriesResponseSchema = z
  .object({
    data: z.array(CategorySchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetCategoriesResponse')

const GetCategoryResponseSchema = z
  .object({
    data: CategorySchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetCategoryResponse')

const GetCollectionResponseSchema = z
  .object({
    data: CollectionSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetCollectionResponse')

const GetCollectionsResponseSchema = z
  .object({
    data: z.array(CollectionSchema),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetCollectionsResponse')

const GetEcosystemResponseSchema = z
  .object({
    data: EcosystemSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetEcosystemResponse')

const MediaSchema = z
  .strictObject({
    caption: z.string().exactOptional().openapi({ example: 'Media' }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    sequence: z.int().exactOptional().openapi({ example: 1 }),
    translations: TranslationsSchema.exactOptional(),
    type: z.enum(['SCREENSHOT', 'VIDEO']).exactOptional(),
    url: z.string(),
  })
  .openapi({ required: ['url'] })
  .openapi('Media')

const PartnerSchema = z
  .strictObject({
    company: z.string(),
    contacts: z.array(ContactSchema).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    icon: FileSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    listed: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    website: z.string().exactOptional(),
  })
  .openapi({ required: ['company'] })
  .openapi('Partner')

const ProductSchema = z
  .strictObject({
    count: z.int().exactOptional().openapi({ example: 1 }),
    description: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    logo: FileSchema.exactOptional(),
    name: z.string(),
    sequence: z.int().exactOptional().openapi({ example: 1 }),
    slug: z.string(),
    translations: TranslationsSchema.exactOptional(),
    visible: z.boolean(),
  })
  .openapi({ required: ['name', 'slug', 'visible'] })
  .openapi('Product')

const ScreenshotSchema = z
  .strictObject({
    caption: z.string().exactOptional().openapi({ example: 'Screenshot' }),
    file: FileSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    translations: TranslationsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Screenshot')

const ListingSchema = z
  .strictObject({
    automate_id: z.string().exactOptional(),
    blendr_id: z.string().exactOptional(),
    card_background_color: z.string().exactOptional(),
    card_background_image: FileSchema.exactOptional(),
    categories: z.array(CategorySchema).exactOptional(),
    cloud_service_id: z.string().exactOptional(),
    collections: z.array(CollectionSchema).exactOptional(),
    combidesk_id: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional(),
    detail_page_disabled: z.boolean().exactOptional(),
    external_id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    features: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    integromat_id: z.string().exactOptional(),
    logo: LogoSchema.exactOptional(),
    media: z.array(MediaSchema).exactOptional(),
    meta_tag_description: z.string().exactOptional(),
    meta_tag_keywords: z.string().exactOptional(),
    meta_tag_title: z.string().exactOptional(),
    microsoft_flow_id: z.string().exactOptional(),
    name: z.string(),
    native_integration: z.boolean().exactOptional(),
    native_integration_link: z.string().exactOptional(),
    partner: PartnerSchema.exactOptional(),
    piesync_id: z.string().exactOptional(),
    pricing: z.string().exactOptional(),
    products: z.array(ProductSchema).exactOptional(),
    published: z.boolean().exactOptional(),
    published_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    screenshots: z.array(ScreenshotSchema).exactOptional(),
    segment_id: z.string().exactOptional(),
    slug: z.string(),
    sticky: z.boolean().exactOptional(),
    tag_line: z.string().exactOptional(),
    third_party_integration: z.boolean().exactOptional(),
    third_party_integration_link: z.string().exactOptional(),
    translations: TranslationsSchema.exactOptional(),
    tray_io_id: z.string().exactOptional(),
    unify_connector_id: z.string().exactOptional(),
    upcoming: z.boolean().exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    zapier_id: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'slug'] })
  .openapi('Listing')

const GetListingResponseSchema = z
  .object({
    data: ListingSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetListingResponse')

const GetListingsResponseSchema = z
  .object({
    data: z.array(ListingSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetListingsResponse')

const GetProductResponseSchema = z
  .object({
    data: ProductSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetProductResponse')

const GetProductsResponseSchema = z
  .object({
    data: z.array(ProductSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'] })
  .openapi('GetProductsResponse')

const GetCategoriesResponseResponse = {
  description: 'Categories',
  content: { 'application/json': { schema: GetCategoriesResponseSchema } },
}

const GetCategoryResponseResponse = {
  description: 'Category',
  content: { 'application/json': { schema: GetCategoryResponseSchema } },
}

const GetCollectionResponseResponse = {
  description: 'Collection',
  content: { 'application/json': { schema: GetCollectionResponseSchema } },
}

const GetCollectionsResponseResponse = {
  description: 'Collections',
  content: { 'application/json': { schema: GetCollectionsResponseSchema } },
}

const GetEcosystemResponseResponse = {
  description: 'Ecosystems',
  content: { 'application/json': { schema: GetEcosystemResponseSchema } },
}

const GetListingResponseResponse = {
  description: 'Listing',
  content: { 'application/json': { schema: GetListingResponseSchema } },
}

const GetListingsResponseResponse = {
  description: 'Listings',
  content: { 'application/json': { schema: GetListingsResponseSchema } },
}

const GetProductResponseResponse = {
  description: 'Product',
  content: { 'application/json': { schema: GetProductResponseSchema } },
}

const GetProductsResponseResponse = {
  description: 'Products',
  content: { 'application/json': { schema: GetProductsResponseSchema } },
}

const CursorParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.',
      in: 'query',
      name: 'cursor',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const EcosystemIdParamsSchema = z
  .string()
  .openapi({
    param: { in: 'path', name: 'ecosystem_id', required: true, schema: { type: 'string' } },
  })

const ExternalIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter on external_id',
      in: 'query',
      name: 'external_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the record you are acting upon.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(50)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of records to return',
      in: 'query',
      name: 'limit',
      schema: { default: 50, maximum: 200, minimum: 1, type: 'integer' },
      required: false,
    },
  })

export const getEcosystemsEcosystemIdRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}',
  tags: ['Ecosystem'],
  summary: 'Get ecosystem',
  description: 'Get ecosystem',
  operationId: 'ecosystemsOne',
  request: { params: z.object({ ecosystem_id: EcosystemIdParamsSchema }) },
  responses: { 200: GetEcosystemResponseResponse },
})

export const getEcosystemsEcosystemIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/categories',
  tags: ['Category'],
  summary: 'List categories',
  description: 'List categories',
  operationId: 'categoriesAll',
  request: {
    params: z.object({ ecosystem_id: EcosystemIdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: { 200: GetCategoriesResponseResponse },
})

export const getEcosystemsEcosystemIdCategoriesIdRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/categories/{id}',
  tags: ['Category'],
  summary: 'Get category',
  description: 'Get category',
  operationId: 'categoriesOne',
  request: { params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: GetCategoryResponseResponse },
})

export const getEcosystemsEcosystemIdCategoriesIdListingsRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/categories/{id}/listings',
  tags: ['Category'],
  summary: 'List category listings',
  description: 'List category listings',
  operationId: 'categoryListingsAll',
  request: {
    params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: { 200: GetListingsResponseResponse },
})

export const getEcosystemsEcosystemIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/collections',
  tags: ['Collection'],
  summary: 'List collections',
  description: 'List collections',
  operationId: 'collectionsAll',
  request: {
    params: z.object({ ecosystem_id: EcosystemIdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: { 200: GetCollectionsResponseResponse },
})

export const getEcosystemsEcosystemIdCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/collections/{id}',
  tags: ['Collection'],
  summary: 'Get collection',
  description: 'Get collection',
  operationId: 'collectionsOne',
  request: { params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: GetCollectionResponseResponse },
})

export const getEcosystemsEcosystemIdCollectionsIdListingsRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/collections/{id}/listings',
  tags: ['Collection'],
  summary: 'List collection listings',
  description: 'List collection listings',
  operationId: 'collectionListingsAll',
  request: {
    params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: { 200: GetListingsResponseResponse },
})

export const getEcosystemsEcosystemIdListingsRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/listings',
  tags: ['Listing'],
  summary: 'List listings',
  description: 'List listings',
  operationId: 'listingsAll',
  request: {
    params: z.object({ ecosystem_id: EcosystemIdParamsSchema }),
    query: z.object({
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      external_id: ExternalIdParamsSchema,
    }),
  },
  responses: { 200: GetListingsResponseResponse },
})

export const getEcosystemsEcosystemIdListingsIdRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/listings/{id}',
  tags: ['Listing'],
  summary: 'Get listing',
  description: 'Get listing',
  operationId: 'listingsOne',
  request: { params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: GetListingResponseResponse },
})

export const getEcosystemsEcosystemIdProductsRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/products',
  tags: ['Product'],
  summary: 'List products',
  description: 'List products',
  operationId: 'productsAll',
  request: { params: z.object({ ecosystem_id: EcosystemIdParamsSchema }) },
  responses: { 200: GetProductsResponseResponse },
})

export const getEcosystemsEcosystemIdProductsIdRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/products/{id}',
  tags: ['Product'],
  summary: 'Get product',
  description: 'Get product',
  operationId: 'productsOne',
  request: { params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: GetProductResponseResponse },
})

export const getEcosystemsEcosystemIdProductsIdListingsRoute = createRoute({
  method: 'get',
  path: '/ecosystems/{ecosystem_id}/products/{id}/listings',
  tags: ['Product'],
  summary: 'List product listings',
  description: 'List product listings',
  operationId: 'productListingsAll',
  request: {
    params: z.object({ ecosystem_id: EcosystemIdParamsSchema, id: IdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: { 200: GetListingsResponseResponse },
})
