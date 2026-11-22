type ParseAddressRequestBody = {
  address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  text: string
}
type NormalizedEntity = { [x: string]: unknown }
type RecognizedEntity = {
  end_index: number
  result?: NormalizedEntity | undefined
  score: number
  start_index: number
  text: string
  type: string
}
type ParseAddressResponseBody = {
  address: {
    address_line1?: string | undefined
    address_line2?: (string | null) | undefined
    address_line3?: (string | null) | undefined
    address_residential_indicator?: {} | undefined
    city_locality?: string | undefined
    company_name?: (string | null) | undefined
    country_code?: {} | undefined
    email?: (string | null) | undefined
    name?: string | undefined
    phone?: string | undefined
    postal_code?: {} | undefined
    state_province?: string | undefined
  }
  entities: RecognizedEntity[]
  score: number
}
type ErrorResponseBody = {
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
}
type ValidateAddressRequestBody = {
  address_line1?: string | undefined
  address_line2?: (string | null) | undefined
  address_line3?: (string | null) | undefined
  address_residential_indicator?: {} | undefined
  city_locality?: string | undefined
  company_name?: (string | null) | undefined
  country_code?: {} | undefined
  email?: (string | null) | undefined
  name?: string | undefined
  phone?: string | undefined
  postal_code?: {} | undefined
  state_province?: string | undefined
}[]
type ResponseMessage = { code: {}; detail_code: {}; message: string; type: {} }
type ValidateAddressResponseBody = {
  matched_address: {
    address_line1?: string | undefined
    address_line2?: (string | null) | undefined
    address_line3?: (string | null) | undefined
    address_residential_indicator?: {} | undefined
    city_locality?: string | undefined
    company_name?: (string | null) | undefined
    country_code?: {} | undefined
    email?: (string | null) | undefined
    name?: string | undefined
    phone?: string | undefined
    postal_code?: {} | undefined
    state_province?: string | undefined
  }
  messages: ResponseMessage[]
  original_address: {
    address_line1?: string | undefined
    address_line2?: (string | null) | undefined
    address_line3?: (string | null) | undefined
    address_residential_indicator?: {} | undefined
    city_locality?: string | undefined
    company_name?: (string | null) | undefined
    country_code?: {} | undefined
    email?: (string | null) | undefined
    name?: string | undefined
    phone?: string | undefined
    postal_code?: {} | undefined
    state_province?: string | undefined
  }
  status: {}
}[]
type BatchStatus =
  | 'open'
  | 'queued'
  | 'processing'
  | 'completed'
  | 'completed_with_errors'
  | 'archived'
  | 'notifying'
  | 'invalid'
type BatchesSortBy = 'ship_date' | 'processed_at' | 'created_at'
type ListBatchesResponseBody = {
  batches: {
    batch_errors_url: { href?: {} | undefined; type?: string | undefined }
    batch_id: {}
    batch_labels_url: { href?: {} | undefined; type?: string | undefined }
    batch_notes: string | null
    batch_number: string
    batch_shipments_url: { href?: {} | undefined; type?: string | undefined }
    completed: number
    count: number
    created_at: {}
    errors: number
    external_batch_id: string | null
    form_download: { href?: {} | undefined; type?: string | undefined }
    forms: number
    label_download: {
      href?: {} | undefined
      pdf?: {} | undefined
      png?: {} | undefined
      zpl?: {} | undefined
    }
    label_format: {}
    label_layout: {}
    processed_at: {}
    status: {}
    warnings: number
  }[]
  links: {
    first: { href?: {} | undefined; type?: string | undefined }
    last: { href?: {} | undefined; type?: string | undefined }
    next: { href?: {} | undefined; type?: string | undefined }
    prev: { href?: {} | undefined; type?: string | undefined }
  }
  page: number
  pages: number
  total: bigint
}
type CreateBatchRequestBody = {
  batch_notes?: string | undefined
  external_batch_id?: {} | undefined
  rate_ids?: {}[] | undefined
  shipment_ids?: {}[] | undefined
}
type CreateBatchResponseBody = {
  batch_errors_url: { href?: {} | undefined; type?: string | undefined }
  batch_id: {}
  batch_labels_url: { href?: {} | undefined; type?: string | undefined }
  batch_notes: string | null
  batch_number: string
  batch_shipments_url: { href?: {} | undefined; type?: string | undefined }
  completed: number
  count: number
  created_at: {}
  errors: number
  external_batch_id: string | null
  form_download: { href?: {} | undefined; type?: string | undefined }
  forms: number
  label_download: {
    href?: {} | undefined
    pdf?: {} | undefined
    png?: {} | undefined
    zpl?: {} | undefined
  }
  label_format: {}
  label_layout: {}
  processed_at: {}
  status: {}
  warnings: number
}
type GetBatchByExternalIdResponseBody = {
  batch_errors_url: { href?: {} | undefined; type?: string | undefined }
  batch_id: {}
  batch_labels_url: { href?: {} | undefined; type?: string | undefined }
  batch_notes: string | null
  batch_number: string
  batch_shipments_url: { href?: {} | undefined; type?: string | undefined }
  completed: number
  count: number
  created_at: {}
  errors: number
  external_batch_id: string | null
  form_download: { href?: {} | undefined; type?: string | undefined }
  forms: number
  label_download: {
    href?: {} | undefined
    pdf?: {} | undefined
    png?: {} | undefined
    zpl?: {} | undefined
  }
  label_format: {}
  label_layout: {}
  processed_at: {}
  status: {}
  warnings: number
}
type SeId = string
type EmptyResponseBody = string
type GetBatchByIdResponseBody = {
  batch_errors_url: { href?: {} | undefined; type?: string | undefined }
  batch_id: {}
  batch_labels_url: { href?: {} | undefined; type?: string | undefined }
  batch_notes: string | null
  batch_number: string
  batch_shipments_url: { href?: {} | undefined; type?: string | undefined }
  completed: number
  count: number
  created_at: {}
  errors: number
  external_batch_id: string | null
  form_download: { href?: {} | undefined; type?: string | undefined }
  forms: number
  label_download: {
    href?: {} | undefined
    pdf?: {} | undefined
    png?: {} | undefined
    zpl?: {} | undefined
  }
  label_format: {}
  label_layout: {}
  processed_at: {}
  status: {}
  warnings: number
}
type AddToBatchRequestBody = { rate_ids?: {}[] | undefined; shipment_ids?: {}[] | undefined }
type BatchResponseError = {
  error?: string | undefined
  external_shipment_id?: string | undefined
  shipment_id?: {} | undefined
}
type ListBatchErrorsResponseBody = {
  errors: BatchResponseError[]
  links: {
    first: { href?: {} | undefined; type?: string | undefined }
    last: { href?: {} | undefined; type?: string | undefined }
    next: { href?: {} | undefined; type?: string | undefined }
    prev: { href?: {} | undefined; type?: string | undefined }
  }
}
type ProcessBatchRequestBody = {
  display_scheme?: {} | undefined
  label_format?: {} | undefined
  label_layout?: {} | undefined
  ship_date?: {} | undefined
}
type RemoveFromBatchRequestBody = { rate_ids?: {}[] | undefined; shipment_ids?: {}[] | undefined }
type GetCarriersResponseBody = {
  carriers: {
    account_number?: string | undefined
    balance?: number | undefined
    carrier_code?: {} | undefined
    carrier_id?: {} | undefined
    friendly_name?: string | undefined
    has_multi_package_supporting_services?: boolean | undefined
    nickname?: string | undefined
    options?:
      | {
          default_value?: string | undefined
          description?: string | undefined
          name?: string | undefined
        }[]
      | undefined
    packages?:
      | {
          description?: (string | null) | undefined
          dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
          name: string
          package_code: {}
          package_id?: {} | undefined
        }[]
      | undefined
    primary?: boolean | undefined
    requires_funded_amount?: boolean | undefined
    services?:
      | {
          carrier_code?: {} | undefined
          carrier_id?: {} | undefined
          domestic?: boolean | undefined
          international?: boolean | undefined
          is_multi_package_supported?: boolean | undefined
          name?: string | undefined
          service_code?: string | undefined
        }[]
      | undefined
    supports_label_messages?: boolean | undefined
  }[]
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
}
type GetCarrierByIdResponseBody = {
  account_number?: string | undefined
  balance?: number | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  friendly_name?: string | undefined
  has_multi_package_supporting_services?: boolean | undefined
  nickname?: string | undefined
  options?:
    | {
        default_value?: string | undefined
        description?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  packages?:
    | {
        description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        name: string
        package_code: {}
        package_id?: {} | undefined
      }[]
    | undefined
  primary?: boolean | undefined
  requires_funded_amount?: boolean | undefined
  services?:
    | {
        carrier_code?: {} | undefined
        carrier_id?: {} | undefined
        domestic?: boolean | undefined
        international?: boolean | undefined
        is_multi_package_supported?: boolean | undefined
        name?: string | undefined
        service_code?: string | undefined
      }[]
    | undefined
  supports_label_messages?: boolean | undefined
}
type AddFundsToCarrierRequestBody = { amount: number; currency: {} }
type AddFundsToCarrierResponseBody = { balance: { amount: number; currency: {} } }
type GetCarrierOptionsResponseBody = {
  options?:
    | {
        default_value?: string | undefined
        description?: string | undefined
        name?: string | undefined
      }[]
    | undefined
}
type ListCarrierPackageTypesResponseBody = {
  packages?:
    | {
        description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        name: string
        package_code: {}
        package_id?: {} | undefined
      }[]
    | undefined
}
type ListCarrierServicesResponseBody = {
  services?:
    | {
        carrier_code?: {} | undefined
        carrier_id?: {} | undefined
        domestic?: boolean | undefined
        international?: boolean | undefined
        is_multi_package_supported?: boolean | undefined
        name?: string | undefined
        service_code?: string | undefined
      }[]
    | undefined
}
type CarrierName =
  | 'access_worldwide'
  | 'amazon_buy_shipping'
  | 'amazon_shipping_uk'
  | 'apc'
  | 'asendia'
  | 'australia_post'
  | 'canada_post'
  | 'dhl_ecommerce'
  | 'dhl_express'
  | 'dhl_express_au'
  | 'dhl_express_ca'
  | 'dhl_express_uk'
  | 'dpd'
  | 'endicia'
  | 'fedex'
  | 'fedex_uk'
  | 'firstmile'
  | 'imex'
  | 'newgistics'
  | 'ontrac'
  | 'purolator_canada'
  | 'royal_mail'
  | 'rr_donnelley'
  | 'seko'
  | 'sendle'
  | 'stamps_com'
  | 'ups'
type ConnectAccessWorldwideRequestBody = { nickname: string; password: string; username: string }
type ConnectAmazonBuyShippingRequestBody = {
  email: {}
  merchant_seller_id: string
  mws_auth_token: string
  nickname: string
}
type ConnectAmazonShippingUk = { auth_code: string; nickname: string }
type ConnectApcRequestBody = { nickname: string; password: string; username: string }
type ConnectAsendiaRequestBody = {
  account_number: string
  ftp_password: string
  ftp_username: string
  nickname: string
}
type ConnectAustraliaPostRequestBody = {
  account_number: string
  api_key: string
  api_secret: string
  nickname: string
}
type ConnectCanadaPostRequestBody = {
  account_number: string
  api_key: string
  api_secret: string
  contract_id: string
  nickname: string
}
type ConnectDhlEcommerceRequestBody = {
  account_number?: string | undefined
  ancillary_endorsement?: {} | undefined
  api_key?: string | undefined
  api_secret?: string | undefined
  client_id: string
  distribution_center: string
  ftp_password?: string | undefined
  ftp_username?: string | undefined
  nickname: string
  password: string
  pickup_number: string
  registration_id?: string | undefined
  software_name?: string | undefined
  sold_to?: string | undefined
  username: string
}
type ConnectDhlExpressRequestBody = {
  account_number: string
  country_code?: {} | undefined
  nickname: string
  password?: string | undefined
  site_id?: string | undefined
}
type ConnectDhlExpressAuRequestBody = { account_number: string; nickname: string }
type ConnectDhlExpressCaRequestBody = { account_number: string; nickname: string }
type ConnectDhlExpressUkRequestBody = {
  account_number: string
  nickname: string
  password: string
  site_id: {}
}
type ConnectDpdRequestBody = { account_number: string; nickname: string; password: string }
type ConnectEndiciaRequestBody = { account: string; nickname: string; passphrase: string }
type ConnectFedexRequestBody = {
  account_number: string
  address1: string
  address2?: string | undefined
  agree_to_eula: boolean
  city: string
  company?: string | undefined
  country_code: string
  email: {}
  first_name: string
  last_name: string
  meter_number?: string | undefined
  nickname: string
  phone: string
  postal_code: string
  state: string
}
type ConnectFedexUkRequestBody = {
  account_number: string
  address1: string
  address2?: string | undefined
  agree_to_eula: boolean
  city: string
  company?: string | undefined
  country_code: string
  email: {}
  first_name: string
  last_name: string
  meter_number?: string | undefined
  nickname: string
  phone: string
  postal_code: string
  state: string
}
type ConnectFirstmileRequestBody = {
  mailer_id: {}
  nickname: string
  password: string
  profile_name?: string | undefined
}
type ConnectImexRequestBody = { nickname: string; password: string; username: string }
type ConnectNewgisticsRequestBody = {
  induction_site: string
  mailer_id?: number | undefined
  merchant_id?: number | undefined
  nickname: string
}
type ConnectOntracRequestBody = { account_number: string; nickname: string; password: string }
type ConnectPurolatorRequestBody = {
  account_number: string
  activation_key: string
  nickname: string
}
type ConnectRoyalMailRequestBody = {
  account_number: string
  city: string
  company_name?: string | undefined
  contact_name: string
  email?: {} | undefined
  nickname: string
  oba_email?: {} | undefined
  phone?: string | undefined
  postal_code: string
  street_line1?: string | undefined
  street_line2?: string | undefined
  street_line3?: string | undefined
}
type ConnectRrDonnelleyRequestBody = { nickname: string; password: string; username: string }
type ConnectSekoRequestBody = { access_key: string; nickname: string }
type ConnectSendleRequestBody = { api_key: string; nickname: string; sendle_id: {} }
type ConnectStampsRequestBody = { nickname: string; password: string; username: string }
type ConnectUpsRequestBody = {
  account_country_code: string
  account_number: string
  account_postal_code: string
  address1: string
  address2?: string | undefined
  agree_to_technology_agreement: boolean
  city: string
  company: string
  country_code: string
  email: {}
  first_name: string
  invoice?:
    | {
        control_id?: {} | undefined
        invoice_amount?: number | undefined
        invoice_currency_code?: string | undefined
        invoice_date?: string | undefined
        invoice_number?: string | undefined
      }
    | undefined
  invoice_amount?: number | undefined
  invoice_currency_code?: string | undefined
  last_name: string
  nickname: string
  phone: string
  postal_code: string
  state: string
  title?: string | undefined
}
type ConnectCarrierRequestBody =
  | ConnectAccessWorldwideRequestBody
  | ConnectAmazonBuyShippingRequestBody
  | ConnectAmazonShippingUk
  | ConnectApcRequestBody
  | ConnectAsendiaRequestBody
  | ConnectAustraliaPostRequestBody
  | ConnectCanadaPostRequestBody
  | ConnectDhlEcommerceRequestBody
  | ConnectDhlExpressRequestBody
  | ConnectDhlExpressAuRequestBody
  | ConnectDhlExpressCaRequestBody
  | ConnectDhlExpressUkRequestBody
  | ConnectDpdRequestBody
  | ConnectEndiciaRequestBody
  | ConnectFedexRequestBody
  | ConnectFedexUkRequestBody
  | ConnectFirstmileRequestBody
  | ConnectImexRequestBody
  | ConnectNewgisticsRequestBody
  | ConnectOntracRequestBody
  | ConnectPurolatorRequestBody
  | ConnectRoyalMailRequestBody
  | ConnectRrDonnelleyRequestBody
  | ConnectSekoRequestBody
  | ConnectSendleRequestBody
  | ConnectStampsRequestBody
  | ConnectUpsRequestBody
type ConnectCarrierResponseBody = { carrier_id: {} }
type CarrierNameWithSettings = 'dhl_express' | 'fedex' | 'newgistics' | 'ups'
type DhlExpressSettingsResponseBody = {
  is_primary_account?: boolean | undefined
  nickname?: string | undefined
  should_hide_account_number_on_archive_doc?: boolean | undefined
}
type FedexSettingsResponseBody = {
  is_primary_account?: boolean | undefined
  letterhead_image?: string | undefined
  nickname?: string | undefined
  pickup_type?: {} | undefined
  signature_image?: string | undefined
  smart_post_endorsement?: {} | undefined
  smart_post_hub?: {} | undefined
}
type UpsSettingsResponseBody = {
  account_postal_code?: string | undefined
  invoice?:
    | {
        control_id?: {} | undefined
        invoice_amount?: number | undefined
        invoice_currency_code?: string | undefined
        invoice_date?: string | undefined
        invoice_number?: string | undefined
      }
    | undefined
  is_primary_account?: boolean | undefined
  mail_innovations_cost_center?: string | undefined
  mail_innovations_endorsement?: {} | undefined
  nickname?: string | undefined
  pickup_type?: {} | undefined
  use_carbon_neutral_shipping_program?: boolean | undefined
  use_consolidation_services?: boolean | undefined
  use_ground_freight_pricing?: boolean | undefined
  use_negotiated_rates?: boolean | undefined
  use_order_number_on_mail_innovations_labels?: boolean | undefined
}
type GetCarrierSettingsResponseBody =
  | DhlExpressSettingsResponseBody
  | FedexSettingsResponseBody
  | UpsSettingsResponseBody
type UpdateDhlExpressSettingsRequestBody = {
  is_primary_account?: boolean | undefined
  nickname?: string | undefined
  should_hide_account_number_on_archive_doc?: boolean | undefined
}
type UpdateFedexSettingsRequestBody = {
  is_primary_account?: boolean | undefined
  letterhead_image?: string | undefined
  nickname?: string | undefined
  pickup_type?: {} | undefined
  signature_image?: string | undefined
  smart_post_endorsement?: {} | undefined
  smart_post_hub?: {} | undefined
}
type UpdateNewgisticsSettingsRequestBody = {
  include_barcode_with_order_number?: boolean | undefined
  receive_email_on_manifest_processing?: boolean | undefined
}
type UpdateUpsSettingsRequestBody = {
  account_postal_code?: string | undefined
  invoice?:
    | {
        control_id?: {} | undefined
        invoice_amount?: number | undefined
        invoice_currency_code?: string | undefined
        invoice_date?: string | undefined
        invoice_number?: string | undefined
      }
    | undefined
  is_primary_account?: boolean | undefined
  mail_innovations_cost_center?: string | undefined
  mail_innovations_endorsement?: {} | undefined
  nickname?: string | undefined
  pickup_type?: {} | undefined
  use_carbon_neutral_shipping_program?: boolean | undefined
  use_consolidation_services?: boolean | undefined
  use_ground_freight_pricing?: boolean | undefined
  use_negotiated_rates?: boolean | undefined
  use_order_number_on_mail_innovations_labels?: boolean | undefined
}
type UpdateAmazonBuyShippingRequestBody = { email?: string | undefined }
type UpdateCarrierSettingsRequestBody =
  | UpdateDhlExpressSettingsRequestBody
  | UpdateFedexSettingsRequestBody
  | UpdateNewgisticsSettingsRequestBody
  | UpdateUpsSettingsRequestBody
  | UpdateAmazonBuyShippingRequestBody
type DisconnectInsurerResponseBody = { [x: string]: unknown }
type ConnectInsurerRequestBody = { email: {}; policy_id: string }
type ConnectInsurerResponseBody = { [x: string]: unknown }
type DownloadFilePdfResponseBody = File
type DownloadFileZplResponseBody = File
type DownloadFilePngResponseBody = File
type ListWebhooksResponseBody = {
  event?: {} | undefined
  url?: {} | undefined
  webhook_id?: {} | undefined
}[]
type CreateWebhookRequestBody = { event: {}; url: {} }
type CreateWebhookResponseBody = {
  event?: {} | undefined
  url?: {} | undefined
  webhook_id?: {} | undefined
}
type GetWebhookByIdResponseBody = {
  event?: {} | undefined
  url?: {} | undefined
  webhook_id?: {} | undefined
}
type UpdateWebhookRequestBody = { url?: {} | undefined }
type AddFundsToInsuranceRequestBody = { amount: number; currency: {} }
type AddFundsToInsuranceResponseBody = { amount: number; currency: {} }
type GetInsuranceBalanceResponseBody = { amount: number; currency: {} }
type LabelStatus = 'processing' | 'completed' | 'error' | 'voided'
type ServiceCode = string
type ListLabelsResponseBody = {
  links: {
    first: { href?: {} | undefined; type?: string | undefined }
    last: { href?: {} | undefined; type?: string | undefined }
    next: { href?: {} | undefined; type?: string | undefined }
    prev: { href?: {} | undefined; type?: string | undefined }
  }
  page: number
  pages: number
  total: number
}
type AlternativeIdentifier = { type?: string | undefined; value?: string | undefined }
type Package = {
  content_description?: (string | null) | undefined
  dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
  external_package_id?: string | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insured_value?: { amount: number; currency: {} } | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_messages?:
    | { reference1: string | null; reference2: string | null; reference3: string | null }
    | undefined
  package_code?: {} | undefined
  package_id?: {} | undefined
  sequence?: number | undefined
  tracking_number?: {} | undefined
  weight: { unit: {}; value: number }
}
type PaymentAmount = { amount?: number | undefined; currency?: {} | undefined }
type CollectOnDelivery = {
  payment_amount?: PaymentAmount | undefined
  payment_type?: {} | undefined
}
type CustomsItem = {
  country_of_origin?: {} | undefined
  customs_item_id: {}
  description?: (string | null) | undefined
  harmonized_tariff_code?: (string | null) | undefined
  quantity?: number | undefined
  sku?: (string | null) | undefined
  sku_description?: (string | null) | undefined
  unit_of_measure?: (string | null) | undefined
  value?: { amount: number; currency: {} } | undefined
  weight?: { unit: {}; value: number } | undefined
}
type CreateLabelRequestBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type CreateLabelResponseBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type LabelDownloadType = 'url' | 'inline'
type GetLabelByExternalShipmentIdResponseBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type CreateLabelFromRateRequestBody = {
  display_scheme?: {} | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_layout?: {} | undefined
  validate_address?: {} | undefined
}
type CreateLabelFromRateResponseBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type CreateLabelFromShipmentRequestBody = {
  display_scheme?: {} | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_layout?: {} | undefined
  validate_address?: {} | undefined
}
type CreateLabelFromShipmentResponseBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type GetLabelByIdResponseBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type CreateReturnLabelRequestBody = {
  charge_event?: {} | undefined
  display_scheme?: {} | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
}
type CreateReturnLabelResponseBody = {
  alternative_identifiers?: (AlternativeIdentifier[] | null) | undefined
  batch_id?: {} | undefined
  carrier_code?: {} | undefined
  carrier_id?: {} | undefined
  charge_event?: {} | undefined
  created_at?: {} | undefined
  display_scheme?: {} | undefined
  form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_claim?: { href?: {} | undefined; type?: string | undefined } | undefined
  insurance_cost?: { amount: number; currency: {} } | undefined
  is_international?: boolean | undefined
  is_return_label?: boolean | undefined
  label_download?:
    | { href?: {} | undefined; pdf?: {} | undefined; png?: {} | undefined; zpl?: {} | undefined }
    | undefined
  label_download_type?: {} | undefined
  label_format?: {} | undefined
  label_id?: {} | undefined
  label_image_id?: {} | undefined
  label_layout?: {} | undefined
  outbound_label_id?: {} | undefined
  package_code?: {} | undefined
  packages?: Package[] | undefined
  rma_number?: (string | null) | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  shipment_cost?: { amount: number; currency: {} } | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
  test_label?: boolean | undefined
  trackable?: boolean | undefined
  tracking_number?: string | undefined
  tracking_status?: {} | undefined
  validate_address?: {} | undefined
  voided?: boolean | undefined
  voided_at?: {} | undefined
}
type TrackEvent = {
  carrier_detail_code: string
  carrier_occurred_at?: {} | undefined
  carrier_status_code: string
  carrier_status_description: string
  city_locality: string
  company_name?: string | undefined
  country_code?: {} | undefined
  description?: string | undefined
  event_code?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  occurred_at: {}
  postal_code: string
  signer?: string | undefined
  state_province: string
  status_code: {}
  status_description: string
}
type GetTrackingLogFromLabelResponseBody = {
  actual_delivery_date?: {} | undefined
  carrier_code?: {} | undefined
  carrier_detail_code?: string | undefined
  carrier_id?: {} | undefined
  carrier_status_code?: string | undefined
  carrier_status_description?: string | undefined
  estimated_delivery_date?: {} | undefined
  events?: TrackEvent[] | undefined
  exception_description?: string | undefined
  ship_date?: {} | undefined
  status_code?: {} | undefined
  status_description?: string | undefined
  tracking_number?: {} | undefined
  tracking_url?: string | undefined
}
type VoidLabelResponseBody = { approved: boolean; message: string }
type ListManifestsResponseBody = {
  links: {
    first: { href?: {} | undefined; type?: string | undefined }
    last: { href?: {} | undefined; type?: string | undefined }
    next: { href?: {} | undefined; type?: string | undefined }
    prev: { href?: {} | undefined; type?: string | undefined }
  }
  manifests: {
    carrier_id?: {} | undefined
    created_at?: string | undefined
    form_id?: {} | undefined
    label_ids?: {}[] | undefined
    manifest_download?: { href?: {} | undefined } | undefined
    manifest_id?: {} | undefined
    ship_date?: string | undefined
    shipments?: number | undefined
    submission_id?: string | undefined
    warehouse_id?: {} | undefined
  }[]
  page: number
  pages: number
  total: bigint
}
type CreateManifestByObjectRequestBody = {
  carrier_id: {}
  excluded_label_ids?: {}[] | undefined
  label_ids?: {}[] | undefined
  ship_date: string
  warehouse_id: {}
}
type CreateManifestLabelIdsRequestBody = { label_ids: {}[] }
type CreateManifestRequestBody =
  | CreateManifestByObjectRequestBody
  | CreateManifestLabelIdsRequestBody
type Manifest = {
  carrier_id?: {} | undefined
  created_at?: string | undefined
  form_id?: {} | undefined
  label_ids?: {}[] | undefined
  manifest_download?: { href?: {} | undefined } | undefined
  manifest_id?: {} | undefined
  ship_date?: string | undefined
  shipments?: number | undefined
  submission_id?: string | undefined
  warehouse_id?: {} | undefined
}
type ManifestRequest = { manifest_request_id?: {} | undefined; status?: {} | undefined }
type CreateManifestResponseBody = {
  manifests?: Manifest[] | undefined
  manifest_requests?: ManifestRequest[] | undefined
  carrier_id?: {} | undefined
  created_at?: string | undefined
  form_id?: {} | undefined
  label_ids?: {}[] | undefined
  manifest_download?: { href?: {} | undefined } | undefined
  manifest_id?: {} | undefined
  ship_date?: string | undefined
  shipments?: number | undefined
  submission_id?: string | undefined
  warehouse_id?: {} | undefined
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
}
type GetManifestByIdResponseBody = {
  carrier_id?: {} | undefined
  created_at?: string | undefined
  form_id?: {} | undefined
  label_ids?: {}[] | undefined
  manifest_download?: { href?: {} | undefined } | undefined
  manifest_id?: {} | undefined
  ship_date?: string | undefined
  shipments?: number | undefined
  submission_id?: string | undefined
  warehouse_id?: {} | undefined
}
type ListPackageTypesResponseBody = {
  packages?:
    | {
        description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        name: string
        package_code: {}
        package_id?: {} | undefined
      }[]
    | undefined
}
type CreatePackageTypeRequestBody = {
  description?: (string | null) | undefined
  dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
  name: string
  package_code: {}
  package_id?: {} | undefined
}
type CreatePackageTypeResponseBody = {
  description?: (string | null) | undefined
  dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
  name: string
  package_code: {}
  package_id?: {} | undefined
}
type GetPackageTypeByIdResponseBody = {
  description?: (string | null) | undefined
  dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
  name: string
  package_code: {}
  package_id?: {} | undefined
}
type UpdatePackageTypeRequestBody = {
  description?: (string | null) | undefined
  dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
  name: string
  package_code: {}
  package_id?: {} | undefined
}
type ContactDetails = { email: {}; name: string; phone: string }
type PickupWindow = { end_at: {}; start_at: {} }
type GetPickupsResponseBody = {
  links: {
    first: { href?: {} | undefined; type?: string | undefined }
    last: { href?: {} | undefined; type?: string | undefined }
    next: { href?: {} | undefined; type?: string | undefined }
    prev: { href?: {} | undefined; type?: string | undefined }
  }
  page: number
  pages: number
  pickups: {
    cancelled_at?: {} | undefined
    carrier_id?: {} | undefined
    confirmation_number?: (string | null) | undefined
    contact_details?: ContactDetails | undefined
    created_at?: {} | undefined
    label_ids?: {}[] | undefined
    pickup_address?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
        }
      | undefined
    pickup_id?: {} | undefined
    pickup_notes?: string | undefined
    pickup_window?: PickupWindow | undefined
    pickup_windows?: { end_at?: {} | undefined; start_at?: {} | undefined }[] | undefined
    warehouse_id?: {} | undefined
  }[]
  total: bigint
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
}
type SchedulePickupRequestBody = {
  cancelled_at?: {} | undefined
  carrier_id?: {} | undefined
  confirmation_number?: (string | null) | undefined
  contact_details?: ContactDetails | undefined
  created_at?: {} | undefined
  label_ids?: {}[] | undefined
  pickup_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  pickup_id?: {} | undefined
  pickup_notes?: string | undefined
  pickup_window?: PickupWindow | undefined
  pickup_windows?: { end_at?: {} | undefined; start_at?: {} | undefined }[] | undefined
  warehouse_id?: {} | undefined
}
type SchedulePickupResponseBody = {
  cancelled_at?: {} | undefined
  carrier_id?: {} | undefined
  confirmation_number?: (string | null) | undefined
  contact_details?: ContactDetails | undefined
  created_at?: {} | undefined
  label_ids?: {}[] | undefined
  pickup_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  pickup_id?: {} | undefined
  pickup_notes?: string | undefined
  pickup_window?: PickupWindow | undefined
  pickup_windows?: { end_at?: {} | undefined; start_at?: {} | undefined }[] | undefined
  warehouse_id?: {} | undefined
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
}
type PickupResourceId = string
type DeletePickupByIdResponseBody = {
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
  pickup_id: {}
}
type GetPickupByIdResponseBody = {
  cancelled_at?: {} | undefined
  carrier_id?: {} | undefined
  confirmation_number?: (string | null) | undefined
  contact_details?: ContactDetails | undefined
  created_at?: {} | undefined
  label_ids?: {}[] | undefined
  pickup_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  pickup_id?: {} | undefined
  pickup_notes?: string | undefined
  pickup_window?: PickupWindow | undefined
  pickup_windows?: { end_at?: {} | undefined; start_at?: {} | undefined }[] | undefined
  warehouse_id?: {} | undefined
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  request_id: {}
}
type ShipmentIdRequest = { shipment_id?: {} | undefined }
type ShipmentRequest = {
  shipment?:
    | {
        validate_address?: {} | undefined
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
}
type CalculateRatesRequestBody = ShipmentIdRequest | ShipmentRequest
type CalculateRatesResponseBody = {
  advanced_options?:
    | {
        bill_to_account?: (string | null) | undefined
        bill_to_country_code?: {} | undefined
        bill_to_party?: {} | undefined
        bill_to_postal_code?: (string | null) | undefined
        collect_on_delivery?: CollectOnDelivery | undefined
        contains_alcohol?: boolean | undefined
        custom_field1?: (string | null) | undefined
        custom_field2?: (string | null) | undefined
        custom_field3?: (string | null) | undefined
        delivered_duty_paid?: boolean | undefined
        dry_ice?: boolean | undefined
        dry_ice_weight?: { unit: {}; value: number } | undefined
        fedex_freight?:
          | {
              booking_confirmation?: string | undefined
              shipper_load_and_count?: string | undefined
            }
          | undefined
        freight_class?: (string | null) | undefined
        non_machinable?: boolean | undefined
        origin_type?: {} | undefined
        saturday_delivery?: boolean | undefined
        shipper_release?: (boolean | null) | undefined
        third_party_consignee?: boolean | undefined
        use_ups_ground_freight_pricing?: (boolean | null) | undefined
      }
    | undefined
  carrier_id?: {} | undefined
  confirmation?: {} | undefined
  created_at?: {} | undefined
  customs?:
    | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
    | undefined
  external_order_id?: (string | null) | undefined
  external_shipment_id?: (string | null) | undefined
  insurance_provider?: {} | undefined
  items?:
    | {
        asin?: (string | null) | undefined
        external_order_id?: (string | null) | undefined
        external_order_item_id?: (string | null) | undefined
        name?: string | undefined
        order_source_code?: {} | undefined
        quantity?: number | undefined
        sales_order_id?: (string | null) | undefined
        sales_order_item_id?: (string | null) | undefined
        sku?: (string | null) | undefined
      }[]
    | undefined
  modified_at?: {} | undefined
  order_source_code?: {} | undefined
  origin_type?: {} | undefined
  packages?:
    | {
        content_description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        external_package_id?: string | undefined
        form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
        insured_value?: { amount: number; currency: {} } | undefined
        label_download?:
          | {
              href?: {} | undefined
              pdf?: {} | undefined
              png?: {} | undefined
              zpl?: {} | undefined
            }
          | undefined
        label_messages?:
          | { reference1: string | null; reference2: string | null; reference3: string | null }
          | undefined
        package_code?: {} | undefined
        package_id?: {} | undefined
        sequence?: number | undefined
        tracking_number?: {} | undefined
        weight: { unit: {}; value: number }
      }[]
    | undefined
  return_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  ship_from?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  ship_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  shipment_id?: {} | undefined
  shipment_number?: (string | null) | undefined
  shipment_status?: {} | undefined
  tags?: { name: string }[] | undefined
  tax_identifiers?:
    | (
        | {
            identifier_type: {}
            issuing_authority: string
            taxable_entity_type: {}
            value: string
          }[]
        | null
      )
    | undefined
  total_weight?: { unit: {}; value: number } | undefined
  warehouse_id?: {} | undefined
  rate_response?:
    | {
        created_at?: {} | undefined
        errors?: { error_code: {}; error_source: {}; error_type: {}; message: string }[] | undefined
        invalid_rates?:
          | {
              carrier_code: string
              carrier_delivery_days?: string | undefined
              carrier_friendly_name: string
              carrier_id: {}
              carrier_nickname: string
              confirmation_amount: { amount: number; currency: {} }
              delivery_days?: number | undefined
              error_messages: string[]
              estimated_delivery_date?: {} | undefined
              guaranteed_service: boolean
              insurance_amount: { amount: number; currency: {} }
              negotiated_rate: boolean
              other_amount: { amount: number; currency: {} }
              package_type: string | null
              rate_id: {}
              rate_type: {}
              service_code: string
              service_type: string
              ship_date?: string | undefined
              shipping_amount: { amount: number; currency: {} }
              tax_amount?: { amount: number; currency: {} } | undefined
              trackable: boolean
              validation_status: {}
              warning_messages: string[]
              zone: number | null
            }[]
          | undefined
        rate_request_id?: {} | undefined
        rates?:
          | {
              carrier_code: string
              carrier_delivery_days?: string | undefined
              carrier_friendly_name: string
              carrier_id: {}
              carrier_nickname: string
              confirmation_amount: { amount: number; currency: {} }
              delivery_days?: number | undefined
              error_messages: string[]
              estimated_delivery_date?: {} | undefined
              guaranteed_service: boolean
              insurance_amount: { amount: number; currency: {} }
              negotiated_rate: boolean
              other_amount: { amount: number; currency: {} }
              package_type: string | null
              rate_id: {}
              rate_type: {}
              service_code: string
              service_type: string
              ship_date?: string | undefined
              shipping_amount: { amount: number; currency: {} }
              tax_amount?: { amount: number; currency: {} } | undefined
              trackable: boolean
              validation_status: {}
              warning_messages: string[]
              zone: number | null
            }[]
          | undefined
        shipment_id?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type RateRequestByShipmentIds = { shipment_ids: {}[] }
type RateRequestByShipments = {
  shipments: {
    validate_address?: {} | undefined
    advanced_options?:
      | {
          bill_to_account?: (string | null) | undefined
          bill_to_country_code?: {} | undefined
          bill_to_party?: {} | undefined
          bill_to_postal_code?: (string | null) | undefined
          collect_on_delivery?: CollectOnDelivery | undefined
          contains_alcohol?: boolean | undefined
          custom_field1?: (string | null) | undefined
          custom_field2?: (string | null) | undefined
          custom_field3?: (string | null) | undefined
          delivered_duty_paid?: boolean | undefined
          dry_ice?: boolean | undefined
          dry_ice_weight?: { unit: {}; value: number } | undefined
          fedex_freight?:
            | {
                booking_confirmation?: string | undefined
                shipper_load_and_count?: string | undefined
              }
            | undefined
          freight_class?: (string | null) | undefined
          non_machinable?: boolean | undefined
          origin_type?: {} | undefined
          saturday_delivery?: boolean | undefined
          shipper_release?: (boolean | null) | undefined
          third_party_consignee?: boolean | undefined
          use_ups_ground_freight_pricing?: (boolean | null) | undefined
        }
      | undefined
    carrier_id?: {} | undefined
    confirmation?: {} | undefined
    created_at?: {} | undefined
    customs?:
      | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
      | undefined
    external_order_id?: (string | null) | undefined
    external_shipment_id?: (string | null) | undefined
    insurance_provider?: {} | undefined
    items?:
      | {
          asin?: (string | null) | undefined
          external_order_id?: (string | null) | undefined
          external_order_item_id?: (string | null) | undefined
          name?: string | undefined
          order_source_code?: {} | undefined
          quantity?: number | undefined
          sales_order_id?: (string | null) | undefined
          sales_order_item_id?: (string | null) | undefined
          sku?: (string | null) | undefined
        }[]
      | undefined
    modified_at?: {} | undefined
    order_source_code?: {} | undefined
    origin_type?: {} | undefined
    packages?:
      | {
          content_description?: (string | null) | undefined
          dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
          external_package_id?: string | undefined
          form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
          insured_value?: { amount: number; currency: {} } | undefined
          label_download?:
            | {
                href?: {} | undefined
                pdf?: {} | undefined
                png?: {} | undefined
                zpl?: {} | undefined
              }
            | undefined
          label_messages?:
            | { reference1: string | null; reference2: string | null; reference3: string | null }
            | undefined
          package_code?: {} | undefined
          package_id?: {} | undefined
          sequence?: number | undefined
          tracking_number?: {} | undefined
          weight: { unit: {}; value: number }
        }[]
      | undefined
    return_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    service_code?: {} | undefined
    ship_date?: {} | undefined
    ship_from?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    ship_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    shipment_id?: {} | undefined
    shipment_number?: (string | null) | undefined
    shipment_status?: {} | undefined
    tags?: { name: string }[] | undefined
    tax_identifiers?:
      | (
          | {
              identifier_type: {}
              issuing_authority: string
              taxable_entity_type: {}
              value: string
            }[]
          | null
        )
      | undefined
    total_weight?: { unit: {}; value: number } | undefined
    warehouse_id?: {} | undefined
  }[]
}
type CompareBulkRatesRequestBody = RateRequestByShipmentIds | RateRequestByShipments
type BulkRate = {
  created_at: {}
  errors: { error_code: {}; error_source: {}; error_type: {}; message: string }[]
  rate_request_id: {}
  shipment_id: {}
  status: {}
}
type CompareBulkRatesResponseBody = BulkRate[]
type RateEstimateByCarrierId = { carrier_id?: {} | undefined }
type RateEstimateByCarrierIds = { carrier_ids?: {}[] | undefined }
type EstimateRatesRequestBody = RateEstimateByCarrierId | RateEstimateByCarrierIds
type EstimateRatesResponseBody = {
  carrier_code: string
  carrier_delivery_days?: string | undefined
  carrier_friendly_name: string
  carrier_id: {}
  carrier_nickname: string
  confirmation_amount: { amount: number; currency: {} }
  delivery_days?: number | undefined
  error_messages: string[]
  estimated_delivery_date?: {} | undefined
  guaranteed_service: boolean
  insurance_amount: { amount: number; currency: {} }
  negotiated_rate: boolean
  other_amount: { amount: number; currency: {} }
  package_type: string | null
  rate_type: {}
  service_code: string
  service_type: string
  ship_date?: string | undefined
  shipping_amount: { amount: number; currency: {} }
  tax_amount?: { amount: number; currency: {} } | undefined
  trackable: boolean
  validation_status: {}
  warning_messages: string[]
  zone: number | null
}[]
type GetRateByIdResponseBody = {
  carrier_code: string
  carrier_delivery_days?: string | undefined
  carrier_friendly_name: string
  carrier_id: {}
  carrier_nickname: string
  confirmation_amount: { amount: number; currency: {} }
  delivery_days?: number | undefined
  error_messages: string[]
  estimated_delivery_date?: {} | undefined
  guaranteed_service: boolean
  insurance_amount: { amount: number; currency: {} }
  negotiated_rate: boolean
  other_amount: { amount: number; currency: {} }
  package_type: string | null
  rate_id: {}
  rate_type: {}
  service_code: string
  service_type: string
  ship_date?: string | undefined
  shipping_amount: { amount: number; currency: {} }
  tax_amount?: { amount: number; currency: {} } | undefined
  trackable: boolean
  validation_status: {}
  warning_messages: string[]
  zone: number | null
}
type GetServicePointsRequestBody = {
  address?:
    | {
        address_line1?: string | undefined
        address_line2?: string | undefined
        address_line3?: string | undefined
        city_locality?: string | undefined
        country_code: string
        postal_code?: string | undefined
        state_province?: string | undefined
      }
    | undefined
  address_query?: string | undefined
  lat?: number | undefined
  long?: number | undefined
  max_results?: number | undefined
  providers: { carrier_id?: string | undefined; service_code?: string[] | undefined }[]
  radius?: number | undefined
}
type GetServicePointsRequest = GetServicePointsRequestBody
type ListServicePointsResponseBody = {
  errors?: { error_code: {}; error_source: {}; error_type: {}; message: string }[] | undefined
  lat?: number | undefined
  long?: number | undefined
  service_points?:
    | {
        address_line1?: string | undefined
        carrier_code?: string | undefined
        city_locality?: string | undefined
        company_name?: string | undefined
        country_code?: string | undefined
        distance_in_meters?: number | undefined
        features?:
          | (
              | 'drop_off_point'
              | 'pickup_point'
              | 'print_services'
              | 'after_hours_locker'
              | 'after_hours_dropbox'
            )[]
          | undefined
        hours_of_operation?:
          | {
              friday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              monday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              saturday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              sunday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              thursday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              tuesday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              wednesday?: { close?: string | undefined; open?: string | undefined }[] | undefined
            }
          | undefined
        lat?: number | undefined
        long?: number | undefined
        phone_number?: string | undefined
        postal_code?: string | undefined
        service_codes?: string[] | undefined
        service_point_id?: string | undefined
        state_province?: string | undefined
      }[]
    | undefined
}
type GetServicePointByIdResponseBody = {
  service_point?:
    | {
        address_line1?: string | undefined
        carrier_code?: string | undefined
        city_locality?: string | undefined
        company_name?: string | undefined
        country_code?: string | undefined
        features?:
          | (
              | 'drop_off_point'
              | 'pickup_point'
              | 'print_services'
              | 'after_hours_locker'
              | 'after_hours_dropbox'
            )[]
          | undefined
        hours_of_operation?:
          | {
              friday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              monday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              saturday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              sunday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              thursday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              tuesday?: { close?: string | undefined; open?: string | undefined }[] | undefined
              wednesday?: { close?: string | undefined; open?: string | undefined }[] | undefined
            }
          | undefined
        lat?: number | undefined
        long?: number | undefined
        phone_number?: string | undefined
        postal_code?: string | undefined
        service_codes?: string[] | undefined
        service_point_id?: string | undefined
        state_province?: string | undefined
      }
    | undefined
}
type ShipmentStatus = 'pending' | 'processing' | 'label_purchased' | 'cancelled'
type ShipmentsSortBy = 'modified_at' | 'created_at'
type ListShipmentsResponseBody = {
  links: {
    first: { href?: {} | undefined; type?: string | undefined }
    last: { href?: {} | undefined; type?: string | undefined }
    next: { href?: {} | undefined; type?: string | undefined }
    prev: { href?: {} | undefined; type?: string | undefined }
  }
  page: number
  pages: number
  shipments: {
    advanced_options?:
      | {
          bill_to_account?: (string | null) | undefined
          bill_to_country_code?: {} | undefined
          bill_to_party?: {} | undefined
          bill_to_postal_code?: (string | null) | undefined
          collect_on_delivery?: CollectOnDelivery | undefined
          contains_alcohol?: boolean | undefined
          custom_field1?: (string | null) | undefined
          custom_field2?: (string | null) | undefined
          custom_field3?: (string | null) | undefined
          delivered_duty_paid?: boolean | undefined
          dry_ice?: boolean | undefined
          dry_ice_weight?: { unit: {}; value: number } | undefined
          fedex_freight?:
            | {
                booking_confirmation?: string | undefined
                shipper_load_and_count?: string | undefined
              }
            | undefined
          freight_class?: (string | null) | undefined
          non_machinable?: boolean | undefined
          origin_type?: {} | undefined
          saturday_delivery?: boolean | undefined
          shipper_release?: (boolean | null) | undefined
          third_party_consignee?: boolean | undefined
          use_ups_ground_freight_pricing?: (boolean | null) | undefined
        }
      | undefined
    carrier_id?: {} | undefined
    confirmation?: {} | undefined
    created_at?: {} | undefined
    customs?:
      | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
      | undefined
    external_order_id?: (string | null) | undefined
    external_shipment_id?: (string | null) | undefined
    insurance_provider?: {} | undefined
    items?:
      | {
          asin?: (string | null) | undefined
          external_order_id?: (string | null) | undefined
          external_order_item_id?: (string | null) | undefined
          name?: string | undefined
          order_source_code?: {} | undefined
          quantity?: number | undefined
          sales_order_id?: (string | null) | undefined
          sales_order_item_id?: (string | null) | undefined
          sku?: (string | null) | undefined
        }[]
      | undefined
    modified_at?: {} | undefined
    order_source_code?: {} | undefined
    origin_type?: {} | undefined
    packages?:
      | {
          content_description?: (string | null) | undefined
          dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
          external_package_id?: string | undefined
          form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
          insured_value?: { amount: number; currency: {} } | undefined
          label_download?:
            | {
                href?: {} | undefined
                pdf?: {} | undefined
                png?: {} | undefined
                zpl?: {} | undefined
              }
            | undefined
          label_messages?:
            | { reference1: string | null; reference2: string | null; reference3: string | null }
            | undefined
          package_code?: {} | undefined
          package_id?: {} | undefined
          sequence?: number | undefined
          tracking_number?: {} | undefined
          weight: { unit: {}; value: number }
        }[]
      | undefined
    return_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    service_code?: {} | undefined
    ship_date?: {} | undefined
    ship_from?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    ship_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    shipment_id?: {} | undefined
    shipment_number?: (string | null) | undefined
    shipment_status?: {} | undefined
    tags?: { name: string }[] | undefined
    tax_identifiers?:
      | (
          | {
              identifier_type: {}
              issuing_authority: string
              taxable_entity_type: {}
              value: string
            }[]
          | null
        )
      | undefined
    total_weight?: { unit: {}; value: number } | undefined
    warehouse_id?: {} | undefined
  }[]
  total: bigint
}
type CreateShipmentsRequestBody = {
  shipments: {
    validate_address?: {} | undefined
    advanced_options?:
      | {
          bill_to_account?: (string | null) | undefined
          bill_to_country_code?: {} | undefined
          bill_to_party?: {} | undefined
          bill_to_postal_code?: (string | null) | undefined
          collect_on_delivery?: CollectOnDelivery | undefined
          contains_alcohol?: boolean | undefined
          custom_field1?: (string | null) | undefined
          custom_field2?: (string | null) | undefined
          custom_field3?: (string | null) | undefined
          delivered_duty_paid?: boolean | undefined
          dry_ice?: boolean | undefined
          dry_ice_weight?: { unit: {}; value: number } | undefined
          fedex_freight?:
            | {
                booking_confirmation?: string | undefined
                shipper_load_and_count?: string | undefined
              }
            | undefined
          freight_class?: (string | null) | undefined
          non_machinable?: boolean | undefined
          origin_type?: {} | undefined
          saturday_delivery?: boolean | undefined
          shipper_release?: (boolean | null) | undefined
          third_party_consignee?: boolean | undefined
          use_ups_ground_freight_pricing?: (boolean | null) | undefined
        }
      | undefined
    carrier_id?: {} | undefined
    confirmation?: {} | undefined
    created_at?: {} | undefined
    customs?:
      | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
      | undefined
    external_order_id?: (string | null) | undefined
    external_shipment_id?: (string | null) | undefined
    insurance_provider?: {} | undefined
    items?:
      | {
          asin?: (string | null) | undefined
          external_order_id?: (string | null) | undefined
          external_order_item_id?: (string | null) | undefined
          name?: string | undefined
          order_source_code?: {} | undefined
          quantity?: number | undefined
          sales_order_id?: (string | null) | undefined
          sales_order_item_id?: (string | null) | undefined
          sku?: (string | null) | undefined
        }[]
      | undefined
    modified_at?: {} | undefined
    order_source_code?: {} | undefined
    origin_type?: {} | undefined
    packages?:
      | {
          content_description?: (string | null) | undefined
          dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
          external_package_id?: string | undefined
          form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
          insured_value?: { amount: number; currency: {} } | undefined
          label_download?:
            | {
                href?: {} | undefined
                pdf?: {} | undefined
                png?: {} | undefined
                zpl?: {} | undefined
              }
            | undefined
          label_messages?:
            | { reference1: string | null; reference2: string | null; reference3: string | null }
            | undefined
          package_code?: {} | undefined
          package_id?: {} | undefined
          sequence?: number | undefined
          tracking_number?: {} | undefined
          weight: { unit: {}; value: number }
        }[]
      | undefined
    return_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    service_code?: {} | undefined
    ship_date?: {} | undefined
    ship_from?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    ship_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    shipment_id?: {} | undefined
    shipment_number?: (string | null) | undefined
    shipment_status?: {} | undefined
    tags?: { name: string }[] | undefined
    tax_identifiers?:
      | (
          | {
              identifier_type: {}
              issuing_authority: string
              taxable_entity_type: {}
              value: string
            }[]
          | null
        )
      | undefined
    total_weight?: { unit: {}; value: number } | undefined
    warehouse_id?: {} | undefined
  }[]
}
type CreateShipmentsResponseBody = {
  has_errors: boolean
  shipments: {
    advanced_options?:
      | {
          bill_to_account?: (string | null) | undefined
          bill_to_country_code?: {} | undefined
          bill_to_party?: {} | undefined
          bill_to_postal_code?: (string | null) | undefined
          collect_on_delivery?: CollectOnDelivery | undefined
          contains_alcohol?: boolean | undefined
          custom_field1?: (string | null) | undefined
          custom_field2?: (string | null) | undefined
          custom_field3?: (string | null) | undefined
          delivered_duty_paid?: boolean | undefined
          dry_ice?: boolean | undefined
          dry_ice_weight?: { unit: {}; value: number } | undefined
          fedex_freight?:
            | {
                booking_confirmation?: string | undefined
                shipper_load_and_count?: string | undefined
              }
            | undefined
          freight_class?: (string | null) | undefined
          non_machinable?: boolean | undefined
          origin_type?: {} | undefined
          saturday_delivery?: boolean | undefined
          shipper_release?: (boolean | null) | undefined
          third_party_consignee?: boolean | undefined
          use_ups_ground_freight_pricing?: (boolean | null) | undefined
        }
      | undefined
    carrier_id?: {} | undefined
    confirmation?: {} | undefined
    created_at?: {} | undefined
    customs?:
      | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
      | undefined
    external_order_id?: (string | null) | undefined
    external_shipment_id?: (string | null) | undefined
    insurance_provider?: {} | undefined
    items?:
      | {
          asin?: (string | null) | undefined
          external_order_id?: (string | null) | undefined
          external_order_item_id?: (string | null) | undefined
          name?: string | undefined
          order_source_code?: {} | undefined
          quantity?: number | undefined
          sales_order_id?: (string | null) | undefined
          sales_order_item_id?: (string | null) | undefined
          sku?: (string | null) | undefined
        }[]
      | undefined
    modified_at?: {} | undefined
    order_source_code?: {} | undefined
    origin_type?: {} | undefined
    packages?:
      | {
          content_description?: (string | null) | undefined
          dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
          external_package_id?: string | undefined
          form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
          insured_value?: { amount: number; currency: {} } | undefined
          label_download?:
            | {
                href?: {} | undefined
                pdf?: {} | undefined
                png?: {} | undefined
                zpl?: {} | undefined
              }
            | undefined
          label_messages?:
            | { reference1: string | null; reference2: string | null; reference3: string | null }
            | undefined
          package_code?: {} | undefined
          package_id?: {} | undefined
          sequence?: number | undefined
          tracking_number?: {} | undefined
          weight: { unit: {}; value: number }
        }[]
      | undefined
    return_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    service_code?: {} | undefined
    ship_date?: {} | undefined
    ship_from?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    ship_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    shipment_id?: {} | undefined
    shipment_number?: (string | null) | undefined
    shipment_status?: {} | undefined
    tags?: { name: string }[] | undefined
    tax_identifiers?:
      | (
          | {
              identifier_type: {}
              issuing_authority: string
              taxable_entity_type: {}
              value: string
            }[]
          | null
        )
      | undefined
    total_weight?: { unit: {}; value: number } | undefined
    warehouse_id?: {} | undefined
    address_validation?:
      | {
          matched_address: {
            address_line1?: string | undefined
            address_line2?: (string | null) | undefined
            address_line3?: (string | null) | undefined
            address_residential_indicator?: {} | undefined
            city_locality?: string | undefined
            company_name?: (string | null) | undefined
            country_code?: {} | undefined
            email?: (string | null) | undefined
            name?: string | undefined
            phone?: string | undefined
            postal_code?: {} | undefined
            state_province?: string | undefined
          }
          messages: ResponseMessage[]
          original_address: {
            address_line1?: string | undefined
            address_line2?: (string | null) | undefined
            address_line3?: (string | null) | undefined
            address_residential_indicator?: {} | undefined
            city_locality?: string | undefined
            company_name?: (string | null) | undefined
            country_code?: {} | undefined
            email?: (string | null) | undefined
            name?: string | undefined
            phone?: string | undefined
            postal_code?: {} | undefined
            state_province?: string | undefined
          }
          status: {}
        }
      | undefined
    errors?: string[] | undefined
  }[]
}
type GetShipmentByExternalIdResponseBody = {
  advanced_options?:
    | {
        bill_to_account?: (string | null) | undefined
        bill_to_country_code?: {} | undefined
        bill_to_party?: {} | undefined
        bill_to_postal_code?: (string | null) | undefined
        collect_on_delivery?: CollectOnDelivery | undefined
        contains_alcohol?: boolean | undefined
        custom_field1?: (string | null) | undefined
        custom_field2?: (string | null) | undefined
        custom_field3?: (string | null) | undefined
        delivered_duty_paid?: boolean | undefined
        dry_ice?: boolean | undefined
        dry_ice_weight?: { unit: {}; value: number } | undefined
        fedex_freight?:
          | {
              booking_confirmation?: string | undefined
              shipper_load_and_count?: string | undefined
            }
          | undefined
        freight_class?: (string | null) | undefined
        non_machinable?: boolean | undefined
        origin_type?: {} | undefined
        saturday_delivery?: boolean | undefined
        shipper_release?: (boolean | null) | undefined
        third_party_consignee?: boolean | undefined
        use_ups_ground_freight_pricing?: (boolean | null) | undefined
      }
    | undefined
  carrier_id?: {} | undefined
  confirmation?: {} | undefined
  created_at?: {} | undefined
  customs?:
    | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
    | undefined
  external_order_id?: (string | null) | undefined
  external_shipment_id?: (string | null) | undefined
  insurance_provider?: {} | undefined
  items?:
    | {
        asin?: (string | null) | undefined
        external_order_id?: (string | null) | undefined
        external_order_item_id?: (string | null) | undefined
        name?: string | undefined
        order_source_code?: {} | undefined
        quantity?: number | undefined
        sales_order_id?: (string | null) | undefined
        sales_order_item_id?: (string | null) | undefined
        sku?: (string | null) | undefined
      }[]
    | undefined
  modified_at?: {} | undefined
  order_source_code?: {} | undefined
  origin_type?: {} | undefined
  packages?:
    | {
        content_description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        external_package_id?: string | undefined
        form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
        insured_value?: { amount: number; currency: {} } | undefined
        label_download?:
          | {
              href?: {} | undefined
              pdf?: {} | undefined
              png?: {} | undefined
              zpl?: {} | undefined
            }
          | undefined
        label_messages?:
          | { reference1: string | null; reference2: string | null; reference3: string | null }
          | undefined
        package_code?: {} | undefined
        package_id?: {} | undefined
        sequence?: number | undefined
        tracking_number?: {} | undefined
        weight: { unit: {}; value: number }
      }[]
    | undefined
  return_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  ship_from?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  ship_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  shipment_id?: {} | undefined
  shipment_number?: (string | null) | undefined
  shipment_status?: {} | undefined
  tags?: { name: string }[] | undefined
  tax_identifiers?:
    | (
        | {
            identifier_type: {}
            issuing_authority: string
            taxable_entity_type: {}
            value: string
          }[]
        | null
      )
    | undefined
  total_weight?: { unit: {}; value: number } | undefined
  warehouse_id?: {} | undefined
}
type ParseShipmentRequestBody = {
  shipment?:
    | {
        advanced_options?:
          | {
              bill_to_account?: (string | null) | undefined
              bill_to_country_code?: {} | undefined
              bill_to_party?: {} | undefined
              bill_to_postal_code?: (string | null) | undefined
              collect_on_delivery?: CollectOnDelivery | undefined
              contains_alcohol?: boolean | undefined
              custom_field1?: (string | null) | undefined
              custom_field2?: (string | null) | undefined
              custom_field3?: (string | null) | undefined
              delivered_duty_paid?: boolean | undefined
              dry_ice?: boolean | undefined
              dry_ice_weight?: { unit: {}; value: number } | undefined
              fedex_freight?:
                | {
                    booking_confirmation?: string | undefined
                    shipper_load_and_count?: string | undefined
                  }
                | undefined
              freight_class?: (string | null) | undefined
              non_machinable?: boolean | undefined
              origin_type?: {} | undefined
              saturday_delivery?: boolean | undefined
              shipper_release?: (boolean | null) | undefined
              third_party_consignee?: boolean | undefined
              use_ups_ground_freight_pricing?: (boolean | null) | undefined
            }
          | undefined
        carrier_id?: {} | undefined
        confirmation?: {} | undefined
        created_at?: {} | undefined
        customs?:
          | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
          | undefined
        external_order_id?: (string | null) | undefined
        external_shipment_id?: (string | null) | undefined
        insurance_provider?: {} | undefined
        items?:
          | {
              asin?: (string | null) | undefined
              external_order_id?: (string | null) | undefined
              external_order_item_id?: (string | null) | undefined
              name?: string | undefined
              order_source_code?: {} | undefined
              quantity?: number | undefined
              sales_order_id?: (string | null) | undefined
              sales_order_item_id?: (string | null) | undefined
              sku?: (string | null) | undefined
            }[]
          | undefined
        modified_at?: {} | undefined
        order_source_code?: {} | undefined
        origin_type?: {} | undefined
        packages?:
          | {
              content_description?: (string | null) | undefined
              dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
              external_package_id?: string | undefined
              form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
              insured_value?: { amount: number; currency: {} } | undefined
              label_download?:
                | {
                    href?: {} | undefined
                    pdf?: {} | undefined
                    png?: {} | undefined
                    zpl?: {} | undefined
                  }
                | undefined
              label_messages?:
                | {
                    reference1: string | null
                    reference2: string | null
                    reference3: string | null
                  }
                | undefined
              package_code?: {} | undefined
              package_id?: {} | undefined
              sequence?: number | undefined
              tracking_number?: {} | undefined
              weight: { unit: {}; value: number }
            }[]
          | undefined
        return_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        service_code?: {} | undefined
        ship_date?: {} | undefined
        ship_from?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        ship_to?:
          | {
              address_line1?: string | undefined
              address_line2?: (string | null) | undefined
              address_line3?: (string | null) | undefined
              address_residential_indicator?: {} | undefined
              city_locality?: string | undefined
              company_name?: (string | null) | undefined
              country_code?: {} | undefined
              email?: (string | null) | undefined
              name?: string | undefined
              phone?: string | undefined
              postal_code?: {} | undefined
              state_province?: string | undefined
              instructions?: (string | null) | undefined
            }
          | undefined
        shipment_id?: {} | undefined
        shipment_number?: (string | null) | undefined
        shipment_status?: {} | undefined
        tags?: { name: string }[] | undefined
        tax_identifiers?:
          | (
              | {
                  identifier_type: {}
                  issuing_authority: string
                  taxable_entity_type: {}
                  value: string
                }[]
              | null
            )
          | undefined
        total_weight?: { unit: {}; value: number } | undefined
        warehouse_id?: {} | undefined
      }
    | undefined
  text: string
}
type ParseShipmentResponseBody = {
  entities: RecognizedEntity[]
  score: number
  shipment: {
    advanced_options?:
      | {
          bill_to_account?: (string | null) | undefined
          bill_to_country_code?: {} | undefined
          bill_to_party?: {} | undefined
          bill_to_postal_code?: (string | null) | undefined
          collect_on_delivery?: CollectOnDelivery | undefined
          contains_alcohol?: boolean | undefined
          custom_field1?: (string | null) | undefined
          custom_field2?: (string | null) | undefined
          custom_field3?: (string | null) | undefined
          delivered_duty_paid?: boolean | undefined
          dry_ice?: boolean | undefined
          dry_ice_weight?: { unit: {}; value: number } | undefined
          fedex_freight?:
            | {
                booking_confirmation?: string | undefined
                shipper_load_and_count?: string | undefined
              }
            | undefined
          freight_class?: (string | null) | undefined
          non_machinable?: boolean | undefined
          origin_type?: {} | undefined
          saturday_delivery?: boolean | undefined
          shipper_release?: (boolean | null) | undefined
          third_party_consignee?: boolean | undefined
          use_ups_ground_freight_pricing?: (boolean | null) | undefined
        }
      | undefined
    carrier_id?: {} | undefined
    confirmation?: {} | undefined
    created_at?: {} | undefined
    customs?:
      | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
      | undefined
    external_order_id?: (string | null) | undefined
    external_shipment_id?: (string | null) | undefined
    insurance_provider?: {} | undefined
    items?:
      | {
          asin?: (string | null) | undefined
          external_order_id?: (string | null) | undefined
          external_order_item_id?: (string | null) | undefined
          name?: string | undefined
          order_source_code?: {} | undefined
          quantity?: number | undefined
          sales_order_id?: (string | null) | undefined
          sales_order_item_id?: (string | null) | undefined
          sku?: (string | null) | undefined
        }[]
      | undefined
    modified_at?: {} | undefined
    order_source_code?: {} | undefined
    origin_type?: {} | undefined
    packages?:
      | {
          content_description?: (string | null) | undefined
          dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
          external_package_id?: string | undefined
          form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
          insured_value?: { amount: number; currency: {} } | undefined
          label_download?:
            | {
                href?: {} | undefined
                pdf?: {} | undefined
                png?: {} | undefined
                zpl?: {} | undefined
              }
            | undefined
          label_messages?:
            | { reference1: string | null; reference2: string | null; reference3: string | null }
            | undefined
          package_code?: {} | undefined
          package_id?: {} | undefined
          sequence?: number | undefined
          tracking_number?: {} | undefined
          weight: { unit: {}; value: number }
        }[]
      | undefined
    return_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    service_code?: {} | undefined
    ship_date?: {} | undefined
    ship_from?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    ship_to?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
          instructions?: (string | null) | undefined
        }
      | undefined
    shipment_id?: {} | undefined
    shipment_number?: (string | null) | undefined
    shipment_status?: {} | undefined
    tags?: { name: string }[] | undefined
    tax_identifiers?:
      | (
          | {
              identifier_type: {}
              issuing_authority: string
              taxable_entity_type: {}
              value: string
            }[]
          | null
        )
      | undefined
    total_weight?: { unit: {}; value: number } | undefined
    warehouse_id?: {} | undefined
  }
}
type GetShipmentByIdResponseBody = {
  advanced_options?:
    | {
        bill_to_account?: (string | null) | undefined
        bill_to_country_code?: {} | undefined
        bill_to_party?: {} | undefined
        bill_to_postal_code?: (string | null) | undefined
        collect_on_delivery?: CollectOnDelivery | undefined
        contains_alcohol?: boolean | undefined
        custom_field1?: (string | null) | undefined
        custom_field2?: (string | null) | undefined
        custom_field3?: (string | null) | undefined
        delivered_duty_paid?: boolean | undefined
        dry_ice?: boolean | undefined
        dry_ice_weight?: { unit: {}; value: number } | undefined
        fedex_freight?:
          | {
              booking_confirmation?: string | undefined
              shipper_load_and_count?: string | undefined
            }
          | undefined
        freight_class?: (string | null) | undefined
        non_machinable?: boolean | undefined
        origin_type?: {} | undefined
        saturday_delivery?: boolean | undefined
        shipper_release?: (boolean | null) | undefined
        third_party_consignee?: boolean | undefined
        use_ups_ground_freight_pricing?: (boolean | null) | undefined
      }
    | undefined
  carrier_id?: {} | undefined
  confirmation?: {} | undefined
  created_at?: {} | undefined
  customs?:
    | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
    | undefined
  external_order_id?: (string | null) | undefined
  external_shipment_id?: (string | null) | undefined
  insurance_provider?: {} | undefined
  items?:
    | {
        asin?: (string | null) | undefined
        external_order_id?: (string | null) | undefined
        external_order_item_id?: (string | null) | undefined
        name?: string | undefined
        order_source_code?: {} | undefined
        quantity?: number | undefined
        sales_order_id?: (string | null) | undefined
        sales_order_item_id?: (string | null) | undefined
        sku?: (string | null) | undefined
      }[]
    | undefined
  modified_at?: {} | undefined
  order_source_code?: {} | undefined
  origin_type?: {} | undefined
  packages?:
    | {
        content_description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        external_package_id?: string | undefined
        form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
        insured_value?: { amount: number; currency: {} } | undefined
        label_download?:
          | {
              href?: {} | undefined
              pdf?: {} | undefined
              png?: {} | undefined
              zpl?: {} | undefined
            }
          | undefined
        label_messages?:
          | { reference1: string | null; reference2: string | null; reference3: string | null }
          | undefined
        package_code?: {} | undefined
        package_id?: {} | undefined
        sequence?: number | undefined
        tracking_number?: {} | undefined
        weight: { unit: {}; value: number }
      }[]
    | undefined
  return_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  ship_from?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  ship_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  shipment_id?: {} | undefined
  shipment_number?: (string | null) | undefined
  shipment_status?: {} | undefined
  tags?: { name: string }[] | undefined
  tax_identifiers?:
    | (
        | {
            identifier_type: {}
            issuing_authority: string
            taxable_entity_type: {}
            value: string
          }[]
        | null
      )
    | undefined
  total_weight?: { unit: {}; value: number } | undefined
  warehouse_id?: {} | undefined
}
type UpdateShipmentRequestBody = {
  advanced_options?:
    | {
        bill_to_account?: (string | null) | undefined
        bill_to_country_code?: {} | undefined
        bill_to_party?: {} | undefined
        bill_to_postal_code?: (string | null) | undefined
        collect_on_delivery?: CollectOnDelivery | undefined
        contains_alcohol?: boolean | undefined
        custom_field1?: (string | null) | undefined
        custom_field2?: (string | null) | undefined
        custom_field3?: (string | null) | undefined
        delivered_duty_paid?: boolean | undefined
        dry_ice?: boolean | undefined
        dry_ice_weight?: { unit: {}; value: number } | undefined
        fedex_freight?:
          | {
              booking_confirmation?: string | undefined
              shipper_load_and_count?: string | undefined
            }
          | undefined
        freight_class?: (string | null) | undefined
        non_machinable?: boolean | undefined
        origin_type?: {} | undefined
        saturday_delivery?: boolean | undefined
        shipper_release?: (boolean | null) | undefined
        third_party_consignee?: boolean | undefined
        use_ups_ground_freight_pricing?: (boolean | null) | undefined
      }
    | undefined
  carrier_id?: {} | undefined
  confirmation?: {} | undefined
  created_at?: {} | undefined
  customs?:
    | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
    | undefined
  external_order_id?: (string | null) | undefined
  external_shipment_id?: (string | null) | undefined
  insurance_provider?: {} | undefined
  items?:
    | {
        asin?: (string | null) | undefined
        external_order_id?: (string | null) | undefined
        external_order_item_id?: (string | null) | undefined
        name?: string | undefined
        order_source_code?: {} | undefined
        quantity?: number | undefined
        sales_order_id?: (string | null) | undefined
        sales_order_item_id?: (string | null) | undefined
        sku?: (string | null) | undefined
      }[]
    | undefined
  modified_at?: {} | undefined
  order_source_code?: {} | undefined
  origin_type?: {} | undefined
  packages?:
    | {
        content_description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        external_package_id?: string | undefined
        form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
        insured_value?: { amount: number; currency: {} } | undefined
        label_download?:
          | {
              href?: {} | undefined
              pdf?: {} | undefined
              png?: {} | undefined
              zpl?: {} | undefined
            }
          | undefined
        label_messages?:
          | { reference1: string | null; reference2: string | null; reference3: string | null }
          | undefined
        package_code?: {} | undefined
        package_id?: {} | undefined
        sequence?: number | undefined
        tracking_number?: {} | undefined
        weight: { unit: {}; value: number }
      }[]
    | undefined
  return_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  ship_from?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  ship_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  shipment_id?: {} | undefined
  shipment_number?: (string | null) | undefined
  shipment_status?: {} | undefined
  tags?: { name: string }[] | undefined
  tax_identifiers?:
    | (
        | {
            identifier_type: {}
            issuing_authority: string
            taxable_entity_type: {}
            value: string
          }[]
        | null
      )
    | undefined
  total_weight?: { unit: {}; value: number } | undefined
  warehouse_id?: {} | undefined
  validate_address?: {} | undefined
}
type UpdateShipmentResponseBody = {
  advanced_options?:
    | {
        bill_to_account?: (string | null) | undefined
        bill_to_country_code?: {} | undefined
        bill_to_party?: {} | undefined
        bill_to_postal_code?: (string | null) | undefined
        collect_on_delivery?: CollectOnDelivery | undefined
        contains_alcohol?: boolean | undefined
        custom_field1?: (string | null) | undefined
        custom_field2?: (string | null) | undefined
        custom_field3?: (string | null) | undefined
        delivered_duty_paid?: boolean | undefined
        dry_ice?: boolean | undefined
        dry_ice_weight?: { unit: {}; value: number } | undefined
        fedex_freight?:
          | {
              booking_confirmation?: string | undefined
              shipper_load_and_count?: string | undefined
            }
          | undefined
        freight_class?: (string | null) | undefined
        non_machinable?: boolean | undefined
        origin_type?: {} | undefined
        saturday_delivery?: boolean | undefined
        shipper_release?: (boolean | null) | undefined
        third_party_consignee?: boolean | undefined
        use_ups_ground_freight_pricing?: (boolean | null) | undefined
      }
    | undefined
  carrier_id?: {} | undefined
  confirmation?: {} | undefined
  created_at?: {} | undefined
  customs?:
    | { contents: {}; customs_items?: CustomsItem[] | undefined; non_delivery: {} }
    | undefined
  external_order_id?: (string | null) | undefined
  external_shipment_id?: (string | null) | undefined
  insurance_provider?: {} | undefined
  items?:
    | {
        asin?: (string | null) | undefined
        external_order_id?: (string | null) | undefined
        external_order_item_id?: (string | null) | undefined
        name?: string | undefined
        order_source_code?: {} | undefined
        quantity?: number | undefined
        sales_order_id?: (string | null) | undefined
        sales_order_item_id?: (string | null) | undefined
        sku?: (string | null) | undefined
      }[]
    | undefined
  modified_at?: {} | undefined
  order_source_code?: {} | undefined
  origin_type?: {} | undefined
  packages?:
    | {
        content_description?: (string | null) | undefined
        dimensions?: { height: number; length: number; unit: {}; width: number } | undefined
        external_package_id?: string | undefined
        form_download?: { href?: {} | undefined; type?: string | undefined } | undefined
        insured_value?: { amount: number; currency: {} } | undefined
        label_download?:
          | {
              href?: {} | undefined
              pdf?: {} | undefined
              png?: {} | undefined
              zpl?: {} | undefined
            }
          | undefined
        label_messages?:
          | { reference1: string | null; reference2: string | null; reference3: string | null }
          | undefined
        package_code?: {} | undefined
        package_id?: {} | undefined
        sequence?: number | undefined
        tracking_number?: {} | undefined
        weight: { unit: {}; value: number }
      }[]
    | undefined
  return_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  service_code?: {} | undefined
  ship_date?: {} | undefined
  ship_from?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  ship_to?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
        instructions?: (string | null) | undefined
      }
    | undefined
  shipment_id?: {} | undefined
  shipment_number?: (string | null) | undefined
  shipment_status?: {} | undefined
  tags?: { name: string }[] | undefined
  tax_identifiers?:
    | (
        | {
            identifier_type: {}
            issuing_authority: string
            taxable_entity_type: {}
            value: string
          }[]
        | null
      )
    | undefined
  total_weight?: { unit: {}; value: number } | undefined
  warehouse_id?: {} | undefined
  address_validation?:
    | {
        matched_address: {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
        }
        messages: ResponseMessage[]
        original_address: {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
        }
        status: {}
      }
    | undefined
  errors?: string[] | undefined
}
type ListShipmentRatesResponseBody = {
  created_at?: {} | undefined
  errors?: { error_code: {}; error_source: {}; error_type: {}; message: string }[] | undefined
  invalid_rates?:
    | {
        carrier_code: string
        carrier_delivery_days?: string | undefined
        carrier_friendly_name: string
        carrier_id: {}
        carrier_nickname: string
        confirmation_amount: { amount: number; currency: {} }
        delivery_days?: number | undefined
        error_messages: string[]
        estimated_delivery_date?: {} | undefined
        guaranteed_service: boolean
        insurance_amount: { amount: number; currency: {} }
        negotiated_rate: boolean
        other_amount: { amount: number; currency: {} }
        package_type: string | null
        rate_id: {}
        rate_type: {}
        service_code: string
        service_type: string
        ship_date?: string | undefined
        shipping_amount: { amount: number; currency: {} }
        tax_amount?: { amount: number; currency: {} } | undefined
        trackable: boolean
        validation_status: {}
        warning_messages: string[]
        zone: number | null
      }[]
    | undefined
  rate_request_id?: {} | undefined
  rates?:
    | {
        carrier_code: string
        carrier_delivery_days?: string | undefined
        carrier_friendly_name: string
        carrier_id: {}
        carrier_nickname: string
        confirmation_amount: { amount: number; currency: {} }
        delivery_days?: number | undefined
        error_messages: string[]
        estimated_delivery_date?: {} | undefined
        guaranteed_service: boolean
        insurance_amount: { amount: number; currency: {} }
        negotiated_rate: boolean
        other_amount: { amount: number; currency: {} }
        package_type: string | null
        rate_id: {}
        rate_type: {}
        service_code: string
        service_type: string
        ship_date?: string | undefined
        shipping_amount: { amount: number; currency: {} }
        tax_amount?: { amount: number; currency: {} } | undefined
        trackable: boolean
        validation_status: {}
        warning_messages: string[]
        zone: number | null
      }[]
    | undefined
  shipment_id?: {} | undefined
  status?: {} | undefined
}
type TagName = string
type TagShipmentResponseBody = { shipment_id: {}; tag: { name: string } }
type ListTagsResponseBody = { tags?: { name: string }[] | undefined }
type CreateTagResponseBody = { name: string }
type Redirect = 'shipengine-dashboard'
type TokensGetEphemeralTokenResponseBodyYaml = {
  redirect_url?: string | undefined
  token?: string | undefined
}
type GetTrackingLogResponseBody = {
  actual_delivery_date?: {} | undefined
  carrier_code?: {} | undefined
  carrier_detail_code?: string | undefined
  carrier_id?: {} | undefined
  carrier_status_code?: string | undefined
  carrier_status_description?: string | undefined
  estimated_delivery_date?: {} | undefined
  events?: TrackEvent[] | undefined
  exception_description?: string | undefined
  ship_date?: {} | undefined
  status_code?: {} | undefined
  status_description?: string | undefined
  tracking_number?: {} | undefined
  tracking_url?: string | undefined
}
type ListWarehousesResponseBody = {
  warehouses: {
    created_at?: string | undefined
    is_default?: (boolean | null) | undefined
    name?: string | undefined
    origin_address?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
        }
      | undefined
    return_address?:
      | {
          address_line1?: string | undefined
          address_line2?: (string | null) | undefined
          address_line3?: (string | null) | undefined
          address_residential_indicator?: {} | undefined
          city_locality?: string | undefined
          company_name?: (string | null) | undefined
          country_code?: {} | undefined
          email?: (string | null) | undefined
          name?: string | undefined
          phone?: string | undefined
          postal_code?: {} | undefined
          state_province?: string | undefined
        }
      | undefined
    warehouse_id?: {} | undefined
  }[]
}
type CreateWarehouseRequestBody = {
  created_at?: string | undefined
  is_default?: (boolean | null) | undefined
  name?: string | undefined
  origin_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  return_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  warehouse_id?: {} | undefined
}
type CreateWarehouseResponseBody = {
  created_at?: string | undefined
  is_default?: (boolean | null) | undefined
  name?: string | undefined
  origin_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  return_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  warehouse_id?: {} | undefined
}
type GetWarehouseByIdResponseBody = {
  created_at?: string | undefined
  is_default?: (boolean | null) | undefined
  name?: string | undefined
  origin_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  return_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  warehouse_id?: {} | undefined
}
type UpdateWarehouseRequestBody = {
  created_at?: string | undefined
  is_default?: (boolean | null) | undefined
  name?: string | undefined
  origin_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  return_address?:
    | {
        address_line1?: string | undefined
        address_line2?: (string | null) | undefined
        address_line3?: (string | null) | undefined
        address_residential_indicator?: {} | undefined
        city_locality?: string | undefined
        company_name?: (string | null) | undefined
        country_code?: {} | undefined
        email?: (string | null) | undefined
        name?: string | undefined
        phone?: string | undefined
        postal_code?: {} | undefined
        state_province?: string | undefined
      }
    | undefined
  warehouse_id?: {} | undefined
}
type UpdateWarehouseSettingsRequestBody = { is_default?: (boolean | null) | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/addresses/recognize': {
      $put:
        | {
            input: { json: ParseAddressRequestBody }
            output: ParseAddressResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ParseAddressRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ParseAddressRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/addresses/validate': {
      $post:
        | {
            input: { json: ValidateAddressRequestBody }
            output: ValidateAddressResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ValidateAddressRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidateAddressRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches': {
      $get:
        | {
            input: {
              query: {
                status?: BatchStatus | undefined
                page?: number | undefined
                page_size?: number | undefined
                sort_dir?: {} | undefined
                batch_number?: string | undefined
                sort_by?: BatchesSortBy | undefined
              }
            }
            output: ListBatchesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: BatchStatus | undefined
                page?: number | undefined
                page_size?: number | undefined
                sort_dir?: {} | undefined
                batch_number?: string | undefined
                sort_by?: BatchesSortBy | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                status?: BatchStatus | undefined
                page?: number | undefined
                page_size?: number | undefined
                sort_dir?: {} | undefined
                batch_number?: string | undefined
                sort_by?: BatchesSortBy | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateBatchRequestBody }
            output: CreateBatchResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches/external_batch_id/:external_batch_id': {
      $get:
        | {
            input: { param: { external_batch_id: string } }
            output: GetBatchByExternalIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_batch_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_batch_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_batch_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches/:batch_id': {
      $delete:
        | {
            input: { param: { batch_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { batch_id: SeId } }
            output: GetBatchByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { batch_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches/:batch_id/add': {
      $post:
        | {
            input: { param: { batch_id: SeId } } & { json: AddToBatchRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } } & { json: AddToBatchRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } } & { json: AddToBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } } & { json: AddToBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } } & { json: AddToBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches/:batch_id/errors': {
      $get:
        | {
            input: { param: { batch_id: SeId } } & {
              query: { page?: number | undefined; pagesize?: number | undefined }
            }
            output: ListBatchErrorsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: SeId } } & {
              query: { page?: number | undefined; pagesize?: number | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } } & {
              query: { page?: number | undefined; pagesize?: number | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } } & {
              query: { page?: number | undefined; pagesize?: number | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches/:batch_id/process/labels': {
      $post:
        | {
            input: { param: { batch_id: SeId } } & { json: ProcessBatchRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } } & { json: ProcessBatchRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } } & { json: ProcessBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } } & { json: ProcessBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } } & { json: ProcessBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/batches/:batch_id/remove': {
      $post:
        | {
            input: { param: { batch_id: SeId } } & { json: RemoveFromBatchRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } } & { json: RemoveFromBatchRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { batch_id: SeId } } & { json: RemoveFromBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: SeId } } & { json: RemoveFromBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: SeId } } & { json: RemoveFromBatchRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/carriers': {
      $get:
        | { input: {}; output: GetCarriersResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GetCarriersResponseBody; outputFormat: 'json'; status: 207 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/carriers/:carrier_id': {
      $get:
        | {
            input: { param: { carrier_id: SeId } }
            output: GetCarrierByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/carriers/:carrier_id/add_funds': {
      $put:
        | {
            input: { param: { carrier_id: SeId } } & { json: AddFundsToCarrierRequestBody }
            output: AddFundsToCarrierResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_id: SeId } } & { json: AddFundsToCarrierRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { carrier_id: SeId } } & { json: AddFundsToCarrierRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_id: SeId } } & { json: AddFundsToCarrierRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/carriers/:carrier_id/options': {
      $get:
        | {
            input: { param: { carrier_id: SeId } }
            output: GetCarrierOptionsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/carriers/:carrier_id/packages': {
      $get:
        | {
            input: { param: { carrier_id: SeId } }
            output: ListCarrierPackageTypesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/carriers/:carrier_id/services': {
      $get:
        | {
            input: { param: { carrier_id: SeId } }
            output: ListCarrierServicesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/connections/carriers/:carrier_name': {
      $post:
        | {
            input: { param: { carrier_name: CarrierName } } & { json: ConnectCarrierRequestBody }
            output: ConnectCarrierResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_name: CarrierName } } & { json: ConnectCarrierRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { carrier_name: CarrierName } } & { json: ConnectCarrierRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_name: CarrierName } } & { json: ConnectCarrierRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/connections/carriers/:carrier_name/:carrier_id': {
      $delete:
        | {
            input: { param: { carrier_name: CarrierName; carrier_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { carrier_name: CarrierName; carrier_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { carrier_name: CarrierName; carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_name: CarrierName; carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/connections/carriers/:carrier_name/:carrier_id/settings': {
      $get:
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } }
            output: GetCarrierSettingsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } } & {
              json: UpdateCarrierSettingsRequestBody
            }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } } & {
              json: UpdateCarrierSettingsRequestBody
            }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } } & {
              json: UpdateCarrierSettingsRequestBody
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { carrier_name: CarrierNameWithSettings; carrier_id: SeId } } & {
              json: UpdateCarrierSettingsRequestBody
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/connections/insurance/shipsurance': {
      $delete:
        | { input: {}; output: DisconnectInsurerResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: ConnectInsurerRequestBody }
            output: ConnectInsurerResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectInsurerRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectInsurerRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/downloads/:dir/:subdir/:filename': {
      $get:
        | {
            input: { param: { subdir: string; filename: string; dir: string } } & {
              query: { download?: string | undefined; rotation?: number | undefined }
            }
            output: DownloadFilePdfResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subdir: string; filename: string; dir: string } } & {
              query: { download?: string | undefined; rotation?: number | undefined }
            }
            output: DownloadFileZplResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subdir: string; filename: string; dir: string } } & {
              query: { download?: string | undefined; rotation?: number | undefined }
            }
            output: DownloadFilePngResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subdir: string; filename: string; dir: string } } & {
              query: { download?: string | undefined; rotation?: number | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subdir: string; filename: string; dir: string } } & {
              query: { download?: string | undefined; rotation?: number | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subdir: string; filename: string; dir: string } } & {
              query: { download?: string | undefined; rotation?: number | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/environment/webhooks': {
      $get:
        | { input: {}; output: ListWebhooksResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreateWebhookRequestBody }
            output: CreateWebhookResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateWebhookRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateWebhookRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateWebhookRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/environment/webhooks/:webhook_id': {
      $delete:
        | {
            input: { param: { webhook_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { webhook_id: SeId } }
            output: GetWebhookByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { webhook_id: SeId } } & { json: UpdateWebhookRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { webhook_id: SeId } } & { json: UpdateWebhookRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { webhook_id: SeId } } & { json: UpdateWebhookRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: SeId } } & { json: UpdateWebhookRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: SeId } } & { json: UpdateWebhookRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/insurance/shipsurance/add_funds': {
      $patch:
        | {
            input: { json: AddFundsToInsuranceRequestBody }
            output: AddFundsToInsuranceResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddFundsToInsuranceRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddFundsToInsuranceRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/insurance/shipsurance/balance': {
      $get:
        | { input: {}; output: GetInsuranceBalanceResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/labels': {
      $get:
        | {
            input: {
              query: {
                label_status?: LabelStatus | undefined
                service_code?: ServiceCode | undefined
                carrier_id?: SeId | undefined
                tracking_number?: string | undefined
                batch_id?: SeId | undefined
                rate_id?: SeId | undefined
                shipment_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sort_dir?: {} | undefined
                sort_by?: 'modified_at' | 'created_at' | undefined
              }
            }
            output: ListLabelsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                label_status?: LabelStatus | undefined
                service_code?: ServiceCode | undefined
                carrier_id?: SeId | undefined
                tracking_number?: string | undefined
                batch_id?: SeId | undefined
                rate_id?: SeId | undefined
                shipment_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sort_dir?: {} | undefined
                sort_by?: 'modified_at' | 'created_at' | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                label_status?: LabelStatus | undefined
                service_code?: ServiceCode | undefined
                carrier_id?: SeId | undefined
                tracking_number?: string | undefined
                batch_id?: SeId | undefined
                rate_id?: SeId | undefined
                shipment_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sort_dir?: {} | undefined
                sort_by?: 'modified_at' | 'created_at' | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateLabelRequestBody }
            output: CreateLabelResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateLabelRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateLabelRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateLabelRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/external_shipment_id/:external_shipment_id': {
      $get:
        | {
            input: { param: { external_shipment_id: string } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: GetLabelByExternalShipmentIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_shipment_id: string } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_shipment_id: string } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_shipment_id: string } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/rates/:rate_id': {
      $post:
        | {
            input: { param: { rate_id: SeId } } & { json: CreateLabelFromRateRequestBody }
            output: CreateLabelFromRateResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rate_id: SeId } } & { json: CreateLabelFromRateRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rate_id: SeId } } & { json: CreateLabelFromRateRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rate_id: SeId } } & { json: CreateLabelFromRateRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/shipment/:shipment_id': {
      $post:
        | {
            input: { param: { shipment_id: SeId } } & { json: CreateLabelFromShipmentRequestBody }
            output: CreateLabelFromShipmentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipment_id: SeId } } & { json: CreateLabelFromShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId } } & { json: CreateLabelFromShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId } } & { json: CreateLabelFromShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/:label_id': {
      $get:
        | {
            input: { param: { label_id: SeId } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: GetLabelByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label_id: SeId } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { label_id: SeId } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { label_id: SeId } } & {
              query: { label_download_type?: LabelDownloadType | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/:label_id/return': {
      $post:
        | {
            input: { param: { label_id: SeId } } & { json: CreateReturnLabelRequestBody }
            output: CreateReturnLabelResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label_id: SeId } } & { json: CreateReturnLabelRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { label_id: SeId } } & { json: CreateReturnLabelRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { label_id: SeId } } & { json: CreateReturnLabelRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/:label_id/track': {
      $get:
        | {
            input: { param: { label_id: SeId } }
            output: GetTrackingLogFromLabelResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { label_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { label_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/labels/:label_id/void': {
      $put:
        | {
            input: { param: { label_id: SeId } }
            output: VoidLabelResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { label_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { label_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/manifests': {
      $get:
        | {
            input: {
              query: {
                warehouse_id?: SeId | undefined
                ship_date_start?: string | undefined
                ship_date_end?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                carrier_id?: SeId | undefined
                page?: number | undefined
                page_size?: number | undefined
                label_ids?: string[] | undefined
              }
            }
            output: ListManifestsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                warehouse_id?: SeId | undefined
                ship_date_start?: string | undefined
                ship_date_end?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                carrier_id?: SeId | undefined
                page?: number | undefined
                page_size?: number | undefined
                label_ids?: string[] | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                warehouse_id?: SeId | undefined
                ship_date_start?: string | undefined
                ship_date_end?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                carrier_id?: SeId | undefined
                page?: number | undefined
                page_size?: number | undefined
                label_ids?: string[] | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                warehouse_id?: SeId | undefined
                ship_date_start?: string | undefined
                ship_date_end?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                carrier_id?: SeId | undefined
                page?: number | undefined
                page_size?: number | undefined
                label_ids?: string[] | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateManifestRequestBody }
            output: CreateManifestResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateManifestRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateManifestRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/manifests/requests/:manifest_request_id': {
      $get:
        | {
            input: { param: { manifest_request_id: SeId } }
            output: CreateManifestResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { manifest_request_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { manifest_request_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { manifest_request_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/manifests/:manifest_id': {
      $get:
        | {
            input: { param: { manifest_id: SeId } }
            output: GetManifestByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { manifest_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { manifest_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { manifest_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/packages': {
      $get:
        | { input: {}; output: ListPackageTypesResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreatePackageTypeRequestBody }
            output: CreatePackageTypeResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePackageTypeRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePackageTypeRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/packages/:package_id': {
      $delete:
        | {
            input: { param: { package_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { package_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { package_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { package_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { package_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { package_id: SeId } }
            output: GetPackageTypeByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { package_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { package_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { package_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { package_id: SeId } } & { json: UpdatePackageTypeRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { package_id: SeId } } & { json: UpdatePackageTypeRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { package_id: SeId } } & { json: UpdatePackageTypeRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { package_id: SeId } } & { json: UpdatePackageTypeRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { package_id: SeId } } & { json: UpdatePackageTypeRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/pickups': {
      $get:
        | {
            input: {
              query: {
                carrier_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: GetPickupsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                carrier_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                carrier_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                carrier_id?: SeId | undefined
                warehouse_id?: SeId | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SchedulePickupRequestBody }
            output: SchedulePickupResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SchedulePickupRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SchedulePickupRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SchedulePickupRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/pickups/:pickup_id': {
      $delete:
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: DeletePickupByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: GetPickupByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pickup_id: PickupResourceId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rates': {
      $post:
        | {
            input: { json: CalculateRatesRequestBody }
            output: CalculateRatesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CalculateRatesRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CalculateRatesRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rates/bulk': {
      $post:
        | {
            input: { json: CompareBulkRatesRequestBody }
            output: CompareBulkRatesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompareBulkRatesRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CompareBulkRatesRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rates/estimate': {
      $post:
        | {
            input: { json: EstimateRatesRequestBody }
            output: EstimateRatesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EstimateRatesRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EstimateRatesRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rates/:rate_id': {
      $get:
        | {
            input: { param: { rate_id: SeId } }
            output: GetRateByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rate_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rate_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rate_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/service_points/list': {
      $post:
        | {
            input: { json: GetServicePointsRequest }
            output: ListServicePointsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetServicePointsRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetServicePointsRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GetServicePointsRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/service_points/:carrier_code/:country_code/:service_point_id': {
      $get:
        | {
            input: {
              param: { carrier_code: string; country_code: string; service_point_id: string }
            }
            output: GetServicePointByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { carrier_code: string; country_code: string; service_point_id: string }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { carrier_code: string; country_code: string; service_point_id: string }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { carrier_code: string; country_code: string; service_point_id: string }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments': {
      $get:
        | {
            input: {
              query: {
                shipment_status?: ShipmentStatus | undefined
                batch_id?: SeId | undefined
                tag?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                modified_at_start?: string | undefined
                modified_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sales_order_id?: string | undefined
                sort_dir?: {} | undefined
                sort_by?: ShipmentsSortBy | undefined
              }
            }
            output: ListShipmentsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                shipment_status?: ShipmentStatus | undefined
                batch_id?: SeId | undefined
                tag?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                modified_at_start?: string | undefined
                modified_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sales_order_id?: string | undefined
                sort_dir?: {} | undefined
                sort_by?: ShipmentsSortBy | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                shipment_status?: ShipmentStatus | undefined
                batch_id?: SeId | undefined
                tag?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                modified_at_start?: string | undefined
                modified_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sales_order_id?: string | undefined
                sort_dir?: {} | undefined
                sort_by?: ShipmentsSortBy | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                shipment_status?: ShipmentStatus | undefined
                batch_id?: SeId | undefined
                tag?: string | undefined
                created_at_start?: string | undefined
                created_at_end?: string | undefined
                modified_at_start?: string | undefined
                modified_at_end?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                sales_order_id?: string | undefined
                sort_dir?: {} | undefined
                sort_by?: ShipmentsSortBy | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateShipmentsRequestBody }
            output: CreateShipmentsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateShipmentsRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateShipmentsRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments/external_shipment_id/:external_shipment_id': {
      $get:
        | {
            input: { param: { external_shipment_id: string } }
            output: GetShipmentByExternalIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_shipment_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_shipment_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_shipment_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments/recognize': {
      $put:
        | {
            input: { json: ParseShipmentRequestBody }
            output: ParseShipmentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ParseShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ParseShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments/:shipment_id': {
      $get:
        | {
            input: { param: { shipment_id: SeId } }
            output: GetShipmentByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { shipment_id: SeId } } & { json: UpdateShipmentRequestBody }
            output: UpdateShipmentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipment_id: SeId } } & { json: UpdateShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId } } & { json: UpdateShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId } } & { json: UpdateShipmentRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments/:shipment_id/cancel': {
      $put:
        | {
            input: { param: { shipment_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments/:shipment_id/rates': {
      $get:
        | {
            input: { param: { shipment_id: SeId } } & {
              query: { created_at_start?: string | undefined }
            }
            output: ListShipmentRatesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipment_id: SeId } } & {
              query: { created_at_start?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId } } & {
              query: { created_at_start?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId } } & {
              query: { created_at_start?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shipments/:shipment_id/tags/:tag_name': {
      $delete:
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: TagShipmentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shipment_id: SeId; tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/tags': {
      $get:
        | { input: {}; output: ListTagsResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/tags/:tag_name': {
      $delete:
        | {
            input: { param: { tag_name: TagName } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { tag_name: TagName } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { tag_name: TagName } }
            output: CreateTagResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/tags/:tag_name/:new_tag_name': {
      $put:
        | {
            input: { param: { tag_name: TagName; new_tag_name: TagName } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { tag_name: TagName; new_tag_name: TagName } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { tag_name: TagName; new_tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_name: TagName; new_tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_name: TagName; new_tag_name: TagName } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/tokens/ephemeral': {
      $post: {
        input: { query: { redirect?: Redirect | undefined } }
        output: TokensGetEphemeralTokenResponseBodyYaml
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tracking': {
      $get:
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: GetTrackingLogResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/tracking/start': {
      $post:
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/tracking/stop': {
      $post:
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { carrier_code?: string | undefined; tracking_number?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/warehouses': {
      $get:
        | { input: {}; output: ListWarehousesResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreateWarehouseRequestBody }
            output: CreateWarehouseResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateWarehouseRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateWarehouseRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateWarehouseRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/warehouses/:warehouse_id': {
      $delete:
        | {
            input: { param: { warehouse_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { warehouse_id: SeId } }
            output: GetWarehouseByIdResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { warehouse_id: SeId } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/warehouses/:warehouse_id/settings': {
      $put:
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseSettingsRequestBody }
            output: EmptyResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseSettingsRequestBody }
            output: EmptyResponseBody
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseSettingsRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseSettingsRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { warehouse_id: SeId } } & { json: UpdateWarehouseSettingsRequestBody }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
