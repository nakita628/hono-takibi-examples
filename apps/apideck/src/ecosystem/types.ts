type CardSettings = {
  background_color?: string | undefined
  border_color?: string | undefined
  border_radius?: string | undefined
  border_size?: string | undefined
  color?: string | undefined
  columns?: number | undefined
  description_lines?: number | undefined
  icon_border_radius?: string | undefined
  icon_shadow_enabled?: boolean | undefined
  icon_size?: number | undefined
  shadow_enabled?: boolean | undefined
  show_action?: boolean | undefined
  show_badges?: boolean | undefined
  show_category?: boolean | undefined
  show_description?: boolean | undefined
  style?: string | undefined
}
type CTASettings = {
  background_color?: string | undefined
  button_background_color?: string | undefined
  button_color?: string | undefined
  button_label?: string | undefined
  button_link?: string | undefined
  color?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  title?: string | undefined
}
type CustomSettings = {
  css?: string | undefined
  css_link?: string | undefined
  domain?: string | undefined
  html_footer?: string | undefined
  html_nav?: string | undefined
  java_script_link?: string | undefined
}
type IntegrationSettings = {
  albacross_id?: string | undefined
  automate_enabled?: boolean | undefined
  blendr_enabled?: boolean | undefined
  combidesk_enabled?: boolean | undefined
  crisp_id?: string | undefined
  drift_id?: string | undefined
  google_analytics_id?: string | undefined
  google_tag_manager_id?: string | undefined
  heap_id?: string | undefined
  hubspot_portal_id?: string | undefined
  integromat_enabled?: boolean | undefined
  intercom_app_id?: string | undefined
  iubenda_cookie_policy_id?: string | undefined
  iubenda_site_id?: string | undefined
  journy_io_domain?: string | undefined
  journy_io_id?: string | undefined
  livechat_id?: string | undefined
  metomic_id?: string | undefined
  microsoft_flow_enabled?: boolean | undefined
  microsoft_flow_id?: string | undefined
  onetrust_id?: string | undefined
  piesync_enabled?: boolean | undefined
  segment_enabled?: boolean | undefined
  segment_id?: string | undefined
  tray_io_enabled?: boolean | undefined
  zapier_beta_link?: string | undefined
  zapier_enabled?: boolean | undefined
  zapier_id?: string | undefined
}
type LeadFormSettings = {
  capture_form_enabled?: boolean | undefined
  first_name_field_enabled?: boolean | undefined
  first_name_field_required?: boolean | undefined
  integration_enabled?: boolean | undefined
  last_name_field_enabled?: boolean | undefined
  last_name_field_required?: boolean | undefined
  telephone_field_enabled?: boolean | undefined
  telephone_field_required?: boolean | undefined
  work_email_validation?: boolean | undefined
}
type ListingSettings = {
  description_text_template?: string | undefined
  description_title?: string | undefined
  features_text_template?: string | undefined
  features_title?: string | undefined
  install_button_label?: string | undefined
  name_postfix?: string | undefined
  naming?:
    | 'LISTING'
    | 'LISTINGS'
    | 'INTEGRATIONS'
    | 'APPS'
    | 'CONNECTORS'
    | 'DATASOURCES'
    | 'ADDONS'
    | 'PLUGINS'
    | 'PARTNERS'
    | 'CHANNELS'
    | 'CONNECTIONS'
    | 'EXTENSIONS'
    | undefined
  native_integration_link?: string | undefined
  pricing_disabled?: boolean | undefined
  pricing_text_template?: string | undefined
  pricing_title?: string | undefined
  sidebar_position?: 'TOP' | 'LEFT' | 'RIGHT' | 'HIDDEN' | undefined
}
type MastheadSettings = {
  background?: string | undefined
  background_color?: string | undefined
  color?: string | undefined
  columns?: number | undefined
  description?: string | undefined
  title?: string | undefined
}
type MetaTagSettings = {
  description?: string | undefined
  description_category_page?: string | undefined
  description_collection_page?: string | undefined
  description_listing_page?: string | undefined
  keywords?: string | undefined
  title?: string | undefined
  title_postfix?: string | undefined
}
type Ecosystem = {
  about?: string | undefined
  alternatives_background_color?: string | undefined
  alternatives_color?: string | undefined
  attribution?: boolean | undefined
  body_background_color?: string | undefined
  body_button_background_color?: string | undefined
  body_button_color?: string | undefined
  body_color?: string | undefined
  body_link_color?: string | undefined
  card_settings?: CardSettings | undefined
  categories_count_badge?: boolean | undefined
  categories_show_max_items?: number | undefined
  collections_count_badge?: boolean | undefined
  collections_title?: string | undefined
  create_link?: string | undefined
  created_at?: string | undefined
  cta_settings?: CTASettings | undefined
  custom_domain?: string | undefined
  custom_settings?: CustomSettings | undefined
  detail_pages_enabled?: boolean | undefined
  footer_background_color?: string | undefined
  footer_color?: string | undefined
  google_site_verification_id?: string | undefined
  hide_install_buttons?: boolean | undefined
  home_page_collection_category_cards?: boolean | undefined
  home_page_show_all_listings?: boolean | undefined
  id?: string | undefined
  installation_request_flow_enabled?: boolean | undefined
  integration_settings?: IntegrationSettings | undefined
  is_published: boolean
  lead_form_settings?: LeadFormSettings | undefined
  listing_settings?: ListingSettings | undefined
  masthead_settings?: MastheadSettings | undefined
  menu_position?: 'TOP' | 'LEFT' | 'RIGHT' | 'HIDDEN' | undefined
  menu_style?: 'LIST' | 'PILL' | 'FILTER' | undefined
  meta_tag_settings?: MetaTagSettings | undefined
  name: string
  navigation_background_color?: string | undefined
  navigation_color?: string | undefined
  navigation_logo_post_fix?: string | undefined
  navigation_mobile_menu_type?: 'ICON' | 'TEXT' | undefined
  navigation_sticky?: boolean | undefined
  primary_color?: string | undefined
  privacy_link?: string | undefined
  request_link?: string | undefined
  shadow_page_description?: string | undefined
  shadow_pages_enabled?: boolean | undefined
  show_attribution_badge?: boolean | undefined
  show_requested_listings?: boolean | undefined
  slug: string
  terms_link?: string | undefined
  total_published_listings?: number | undefined
  unify_application_id?: string | undefined
  updated_at?: string | undefined
  utm_campaign?: string | undefined
  website?: string | undefined
  zaps_menu_title?: string | undefined
  zaps_page_enabled?: boolean | undefined
}
type GetEcosystemResponse = { data: Ecosystem; status: string; status_code: number }
type Logo = {
  content_type?: string | undefined
  id?: string | undefined
  type?: 'LOGO' | 'BANNER' | 'SCREENSHOT' | undefined
  url: string
}
type Translation = { key: string; locale: string; value?: string | undefined }
type Translations = Translation[] | null
type Category = {
  count?: number | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  listing_description_text_template?: string | undefined
  listing_features_text_template?: string | undefined
  listing_pricing_text_template?: string | undefined
  logo?: Logo | undefined
  name: string
  slug: string
  translations?: Translations | undefined
  updated_at?: string | undefined
}
type Links = { current: string; next?: string | undefined; previous?: string | undefined }
type Meta = {
  cursors?:
    | {
        current?: (string | null) | undefined
        next?: (string | null) | undefined
        previous?: (string | null) | undefined
      }
    | undefined
  items_on_page?: number | undefined
}
type GetCategoriesResponse = {
  data: Category[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type GetCategoryResponse = { data: Category; status: string; status_code: number }
type File2 = {
  content_type?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  type?: 'LOGO' | 'BANNER' | 'SCREENSHOT' | undefined
  updated_at?: string | undefined
  url: string
}
type Collection = {
  card_background_color?: string | undefined
  card_background_image?: File2 | undefined
  card_columns?: number | undefined
  card_style?: string | undefined
  count?: number | undefined
  description?: string | undefined
  hidden_from_homepage?: boolean | undefined
  id?: string | undefined
  logo?: File2 | undefined
  name: string
  sequence?: number | undefined
  show_max_items_homepage?: number | undefined
  slug: string
  translations?: Translations | undefined
  visible: boolean
}
type Media = {
  caption?: string | undefined
  id?: string | undefined
  sequence?: number | undefined
  translations?: Translations | undefined
  type?: 'SCREENSHOT' | 'VIDEO' | undefined
  url: string
}
type Contact = {
  email?: string | undefined
  first_name?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  linked_in?: string | undefined
  name: string
  role?: string | undefined
  twitter?: string | undefined
}
type Partner = {
  company: string
  contacts?: Contact[] | undefined
  created_at?: string | undefined
  icon?: File2 | undefined
  id?: string | undefined
  listed?: string | undefined
  twitter?: string | undefined
  updated_at?: string | undefined
  website?: string | undefined
}
type Product = {
  count?: number | undefined
  description?: string | undefined
  id?: string | undefined
  logo?: File2 | undefined
  name: string
  sequence?: number | undefined
  slug: string
  translations?: Translations | undefined
  visible: boolean
}
type Screenshot = {
  caption?: string | undefined
  file?: File2 | undefined
  id?: string | undefined
  translations?: Translations | undefined
}
type Listing = {
  automate_id?: string | undefined
  blendr_id?: string | undefined
  card_background_color?: string | undefined
  card_background_image?: File2 | undefined
  categories?: Category[] | undefined
  cloud_service_id?: string | undefined
  collections?: Collection[] | undefined
  combidesk_id?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  detail_page_disabled?: boolean | undefined
  external_id?: string | undefined
  features?: string | undefined
  id?: string | undefined
  integromat_id?: string | undefined
  logo?: Logo | undefined
  media?: Media[] | undefined
  meta_tag_description?: string | undefined
  meta_tag_keywords?: string | undefined
  meta_tag_title?: string | undefined
  microsoft_flow_id?: string | undefined
  name: string
  native_integration?: boolean | undefined
  native_integration_link?: string | undefined
  partner?: Partner | undefined
  piesync_id?: string | undefined
  pricing?: string | undefined
  products?: Product[] | undefined
  published?: boolean | undefined
  published_at?: string | undefined
  screenshots?: Screenshot[] | undefined
  segment_id?: string | undefined
  slug: string
  sticky?: boolean | undefined
  tag_line?: string | undefined
  third_party_integration?: boolean | undefined
  third_party_integration_link?: string | undefined
  translations?: Translations | undefined
  tray_io_id?: string | undefined
  unify_connector_id?: string | undefined
  upcoming?: boolean | undefined
  updated_at?: string | undefined
  zapier_id?: string | undefined
}
type GetListingsResponse = {
  data: Listing[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type GetCollectionsResponse = { data: Collection[]; status: string; status_code: number }
type GetCollectionResponse = { data: Collection; status: string; status_code: number }
type GetListingResponse = { data: Listing; status: string; status_code: number }
type GetProductsResponse = {
  data: Product[]
  links?: Links | undefined
  meta?: Meta | undefined
  status: string
  status_code: number
}
type GetProductResponse = { data: Product; status: string; status_code: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ecosystems/:ecosystem_id': {
      $get: {
        input: { param: { ecosystem_id: string } }
        output: GetEcosystemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/categories': {
      $get: {
        input: { param: { ecosystem_id: string } } & {
          query: { cursor?: (string | null) | undefined; limit?: number | undefined }
        }
        output: GetCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/categories/:id': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } }
        output: GetCategoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/categories/:id/listings': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } } & {
          query: { cursor?: (string | null) | undefined; limit?: number | undefined }
        }
        output: GetListingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/collections': {
      $get: {
        input: { param: { ecosystem_id: string } } & {
          query: { cursor?: (string | null) | undefined; limit?: number | undefined }
        }
        output: GetCollectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/collections/:id': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } }
        output: GetCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/collections/:id/listings': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } } & {
          query: { cursor?: (string | null) | undefined; limit?: number | undefined }
        }
        output: GetListingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/listings': {
      $get: {
        input: { param: { ecosystem_id: string } } & {
          query: {
            cursor?: (string | null) | undefined
            limit?: number | undefined
            external_id?: string | undefined
          }
        }
        output: GetListingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/listings/:id': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } }
        output: GetListingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/products': {
      $get: {
        input: { param: { ecosystem_id: string } }
        output: GetProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/products/:id': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } }
        output: GetProductResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ecosystems/:ecosystem_id/products/:id/listings': {
      $get: {
        input: { param: { ecosystem_id: string; id: string } } & {
          query: { cursor?: (string | null) | undefined; limit?: number | undefined }
        }
        output: GetListingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
