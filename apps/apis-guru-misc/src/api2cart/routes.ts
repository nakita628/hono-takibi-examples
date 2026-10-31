import { createRoute, z } from '@hono/zod-openapi'

type CouponConditionType = {
  additional_fields?: { [key: string]: unknown }
  custom_fields?: { [key: string]: unknown }
  entity?: string
  id?: string
  key?: string
  logic_operator?: string
  match_items?: string
  operator?: string
  'sub-conditions'?: CouponConditionType[]
  value?: string
}

const A2CDateTimeSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    format: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('A2CDateTime')

const AccountCartAddSchema = z
  .object({
    '3dcart_access_token': z.string().exactOptional().openapi({ description: '3DCart Token' }),
    '3dcart_private_key': z.string().exactOptional().openapi({ description: '3DCart Private Key' }),
    '3dcartapi_api_key': z.string().exactOptional().openapi({ description: '3DCart API Key' }),
    amazon_access_key_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Amazon Secret Key Id' }),
    amazon_access_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'MWS Auth Token. Access token authorizing the app to access resources on behalf of a user',
      }),
    amazon_marketplaces_ids: z
      .string()
      .exactOptional()
      .openapi({ description: 'Amazon Marketplace IDs comma separated string' }),
    amazon_secret_key: z.string().exactOptional().openapi({ description: 'Amazon Secret Key' }),
    amazon_seller_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Amazon Seller ID (Merchant token)' }),
    amazon_sp_api_environment: z
      .string()
      .default('production')
      .exactOptional()
      .openapi({ description: 'Amazon SP API environment' }),
    amazon_sp_aws_region: z
      .enum(['eu-west-1', 'us-east-1', 'us-west-2'])
      .openapi({ description: 'Amazon AWS Region' }),
    amazon_sp_aws_role_arn: z.string().openapi({ description: 'Amazon AWS Role ARN' }),
    amazon_sp_aws_user_key_id: z.string().openapi({ description: 'Amazon AWS user access key ID' }),
    amazon_sp_aws_user_secret: z
      .string()
      .openapi({ description: 'Amazon AWS user secret access key' }),
    amazon_sp_client_id: z.string().openapi({ description: 'Amazon SP API app client id' }),
    amazon_sp_client_secret: z.string().openapi({ description: 'Amazon SP API app client secret' }),
    amazon_sp_refresh_token: z
      .string()
      .openapi({ description: 'Amazon SP API OAuth refresh token' }),
    aspdotnetstorefront_api_pass: z
      .string()
      .exactOptional()
      .openapi({ description: 'AspDotNetStorefront API Password' }),
    aspdotnetstorefront_api_user: z
      .string()
      .exactOptional()
      .openapi({ description: "It's a AspDotNetStorefront account for which API is available" }),
    bigcommerceapi_access_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Access token authorizing the app to access resources on behalf of a user',
      }),
    bigcommerceapi_admin_account: z
      .string()
      .exactOptional()
      .openapi({ description: "It's a BigCommerce account for which API is enabled" }),
    bigcommerceapi_api_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bigcommerce API Key' }),
    bigcommerceapi_api_path: z
      .string()
      .exactOptional()
      .openapi({ description: 'BigCommerce API URL' }),
    bigcommerceapi_client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client ID of the requesting app' }),
    bigcommerceapi_context: z
      .string()
      .exactOptional()
      .openapi({ description: 'API Path section unique to the store' }),
    bridge_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)',
      }),
    cart_id: z
      .enum([
        '3DCart',
        '3DCartApi',
        'AceShop',
        'AmazonSP',
        'Amazon',
        'AspDotNetStorefront',
        'BigcommerceApi',
        'Creloaded',
        'CommerceHQ',
        'Cscart',
        'Cubecart',
        'Demandware',
        'EBay',
        'Ecwid',
        'Etsy',
        'EtsyAPIv3',
        'Gambio',
        'Interspire',
        'JooCart',
        'Magento1212',
        'Magento2Api',
        'MijoShop',
        'Neto',
        'Opencart14',
        'LightSpeed',
        'Oscmax2',
        'Oscommerce22ms2',
        'Oxid',
        'Pinnacle',
        'Prestashop',
        'PrestashopApi',
        'SSPremium',
        'Shopify',
        'Squarespace',
        'Shopware',
        'ShopwareApi',
        'Tomatocart',
        'Ubercart',
        'Virtuemart',
        'Volusion',
        'WPecommerce',
        'Walmart',
        'WebAsyst',
        'Woocommerce',
        'WoocommerceApi',
        'Wix',
        'Xcart',
        'Xtcommerce',
        'XtcommerceVeyton',
        'Zencart137',
        'Hybris',
        'MercadoLibre',
        'Zid',
      ])
      .openapi({ description: 'Store’s identifier which you can get from cart_list method' }),
    commercehq_api_key: z.string().exactOptional().openapi({ description: 'CommerceHQ api key' }),
    commercehq_api_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'CommerceHQ api password' }),
    db_tables_prefix: z.string().exactOptional().openapi({ description: 'DB tables prefix' }),
    demandware_api_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Demandware api password' }),
    demandware_client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Demandware client id' }),
    demandware_user_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Demandware user name' }),
    demandware_user_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Demandware user password' }),
    ebay_access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to authenticate API requests.' }),
    ebay_client_id: z.string().exactOptional().openapi({ description: 'Application ID (AppID).' }),
    ebay_client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shared Secret from eBay application' }),
    ebay_environment: z
      .string()
      .default('production')
      .exactOptional()
      .openapi({ description: 'eBay environment' }),
    ebay_refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to renew the access token.' }),
    ebay_runame: z
      .string()
      .exactOptional()
      .openapi({ description: 'The RuName value that eBay assigns to your application.' }),
    ebay_site_id: z.int().default(0).exactOptional().openapi({ description: 'eBay global ID' }),
    ecwid_acess_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Access token authorizing the app to access resources on behalf of a user',
      }),
    ecwid_store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    etsy_access_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Access token authorizing the app to access resources on behalf of a user',
      }),
    etsy_client_id: z.string().openapi({ description: 'Etsy Client Id' }),
    etsy_keystring: z.string().exactOptional().openapi({ description: 'Etsy keystring' }),
    etsy_refresh_token: z.string().openapi({ description: 'Etsy Refresh token' }),
    etsy_shared_secret: z.string().exactOptional().openapi({ description: 'Etsy shared secret' }),
    etsy_token_secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Secret token authorizing the app to access resources on behalf of a user',
      }),
    ftp_host: z.string().exactOptional().openapi({ description: 'FTP connection host' }),
    ftp_password: z.string().exactOptional().openapi({ description: 'FTP Password' }),
    ftp_port: z.int().exactOptional().openapi({ description: 'FTP Port' }),
    ftp_store_dir: z.string().exactOptional().openapi({ description: 'FTP Store dir' }),
    ftp_user: z.string().exactOptional().openapi({ description: 'FTP User' }),
    hybris_client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Omni Commerce Connector Client ID' }),
    hybris_client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Omni Commerce Connector Client Secret' }),
    hybris_password: z.string().exactOptional().openapi({ description: 'User password' }),
    hybris_username: z.string().exactOptional().openapi({ description: 'User Name' }),
    hybris_websites: z
      .array(
        z
          .object({ storeIds: z.array(z.string()).min(1), uid: z.string(), url: z.string() })
          .openapi({ required: ['uid', 'url', 'storeIds'] }),
      )
      .min(1)
      .exactOptional()
      .openapi({ description: 'Websites to stores mapping data' }),
    lightspeed_api_key: z.string().exactOptional().openapi({ description: 'LightSpeed api key' }),
    lightspeed_api_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'LightSpeed api secret' }),
    magento_access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Magento Access Token' }),
    magento_consumer_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Magento Consumer Key' }),
    magento_consumer_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Magento Consumer Secret' }),
    magento_token_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Magento Token Secret' }),
    mercado_libre_app_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mercado Libre App ID' }),
    mercado_libre_app_secret_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mercado Libre App Secret Key' }),
    mercado_libre_refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mercado Libre Refresh Token' }),
    neto_api_key: z.string().exactOptional().openapi({ description: 'Neto API Key' }),
    neto_api_username: z.string().exactOptional().openapi({ description: 'Neto User Name' }),
    prestashop_webservice_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Prestashop webservice key' }),
    shopify_access_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Access token authorizing the app to access resources on behalf of a user',
      }),
    shopify_api_key: z.string().exactOptional().openapi({ description: 'Shopify API Key' }),
    shopify_api_password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shopify API Password' }),
    shopify_shared_secret: z.string().exactOptional().openapi({ description: 'Shared secret' }),
    shopware_access_key: z.string().exactOptional().openapi({ description: 'Shopware access key' }),
    shopware_api_key: z.string().exactOptional().openapi({ description: 'Shopware api key' }),
    shopware_api_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shopware client secret access key' }),
    squarespace_api_key: z.string().exactOptional().openapi({ description: 'Squarespace API Key' }),
    store_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Set this parameter if bridge is already uploaded to store' }),
    store_root: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Absolute path to the store root directory (used with "bridge_url" parameter)',
      }),
    store_url: z
      .string()
      .openapi({
        description: 'A web address of a store that you would like to connect to API2Cart',
      }),
    validate_version: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Specify if api2cart should validate cart version' }),
    verify: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: "Enables or disables cart's verification" }),
    volusion_login: z
      .string()
      .exactOptional()
      .openapi({ description: "It's a Volusion account for which API is enabled" }),
    volusion_password: z.string().exactOptional().openapi({ description: 'Volusion API Password' }),
    walmart_channel_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Walmart WM_CONSUMER.CHANNEL.TYPE header' }),
    walmart_client_id: z.string().exactOptional().openapi({ description: 'Walmart client ID' }),
    walmart_client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Walmart client secret' }),
    walmart_environment: z
      .string()
      .default('production')
      .exactOptional()
      .openapi({ description: 'Walmart environment' }),
    wc_consumer_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Woocommerce consumer key' }),
    wc_consumer_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Woocommerce consumer secret' }),
    wix_app_id: z.string().exactOptional().openapi({ description: 'Wix App ID' }),
    wix_app_secret_key: z.string().exactOptional().openapi({ description: 'Wix App Secret Key' }),
    wix_refresh_token: z.string().exactOptional().openapi({ description: 'Wix refresh token' }),
    zid_access_token: z.string().exactOptional().openapi({ description: 'Zid Access Token' }),
    zid_authorization: z.string().exactOptional().openapi({ description: 'Zid Authorization' }),
    zid_client_id: z.int().exactOptional().openapi({ description: 'Zid Client ID' }),
    zid_client_secret: z.string().exactOptional().openapi({ description: 'Zid Client Secret' }),
    zid_refresh_token: z.string().exactOptional().openapi({ description: 'Zid refresh token' }),
  })
  .openapi({
    required: [
      'cart_id',
      'store_url',
      'amazon_sp_client_id',
      'amazon_sp_client_secret',
      'amazon_sp_aws_user_key_id',
      'amazon_sp_aws_user_secret',
      'amazon_sp_aws_region',
      'amazon_sp_aws_role_arn',
      'amazon_sp_refresh_token',
      'etsy_client_id',
      'etsy_refresh_token',
    ],
  })
  .openapi('AccountCartAdd')

const BaseCustomerSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    email: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    id: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    phone: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BaseCustomer')

const BasketItemOptionSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    used_in_combination: z.boolean().exactOptional(),
    value: z.string().exactOptional(),
    value_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BasketItemOption')

const BasketItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    options: z.array(BasketItemOptionSchema).exactOptional(),
    parent_id: z.string().exactOptional(),
    price: z.number().exactOptional(),
    product_id: z.string().exactOptional(),
    quantity: z.number().exactOptional(),
    sku: z.string().exactOptional(),
    tax: z.number().exactOptional(),
    variant_id: z.string().exactOptional(),
    weight: z.number().exactOptional(),
    weight_unit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BasketItem')

const CurrencySchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    default: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    iso3: z.string().exactOptional(),
    name: z.string().exactOptional(),
    rate: z.number().exactOptional(),
    symbol_left: z.string().exactOptional(),
    symbol_right: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Currency')

const BasketSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    basket_products: z.array(BasketItemSchema).exactOptional(),
    basket_url: z.string().exactOptional(),
    created_at: A2CDateTimeSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    customer: BaseCustomerSchema.exactOptional(),
    id: z.string().exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Basket')

const BasketLiveShippingServiceSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    callback: z.string().exactOptional(),
    callback_err_cnt: z.int().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    enabled_on_store: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BasketLiveShippingService')

const ImageSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    alt: z.string().exactOptional(),
    avail: z.boolean().exactOptional(),
    create_at: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    file_name: z.string().exactOptional(),
    http_path: z.string().exactOptional(),
    id: z.string().exactOptional(),
    'mime-type': z.string().exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
    size: z.int().exactOptional(),
    sort_order: z.int().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Image')

const BrandSchema = z
  .object({
    active: z.boolean().exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    created_time: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    full_description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    images: z.array(ImageSchema).exactOptional(),
    meta_description: z.string().exactOptional(),
    meta_keywords: z.string().exactOptional(),
    meta_title: z.string().exactOptional(),
    modified_time: z.string().exactOptional(),
    name: z.string().exactOptional(),
    short_description: z.string().exactOptional(),
    stores_ids: z.array(z.string()).exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Brand')

const OrderShippingMethodSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderShippingMethod')

const CarrierSchema = z
  .object({
    active: z.boolean().exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    shipping_methods: z.array(OrderShippingMethodSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Carrier')

const CartShippingZoneSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    country: z.string().exactOptional(),
    country_iso2_codes: z.array(z.string()).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CartShippingZone')

const CartChannelSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    is_enabled: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    platform: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CartChannel')

const LanguageSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    iso_code: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Language')

const InfoSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    email: z.string().exactOptional(),
    owner: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    state: z.string().exactOptional(),
    state_code: z.string().exactOptional(),
    street_address: z.string().exactOptional(),
    street_address_line_2: z.string().exactOptional(),
    zip_code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Info')

const CartStoreInfoSchema = z
  .object({
    active: z.boolean().exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    carrier_info: z.array(CarrierSchema).exactOptional(),
    channels: z.array(CartChannelSchema).exactOptional(),
    country: z.string().exactOptional(),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    default_warehouse_id: z.string().exactOptional(),
    dimension_unit: z.string().exactOptional(),
    language: z.string().exactOptional(),
    multi_store_url: z.string().exactOptional(),
    name: z.string().exactOptional(),
    prices_include_tax: z.boolean().exactOptional(),
    root_category_id: z.string().exactOptional(),
    store_currencies: z.array(CurrencySchema).exactOptional(),
    store_id: z.string().exactOptional(),
    store_languages: z.array(LanguageSchema).exactOptional(),
    store_owner_info: InfoSchema.exactOptional(),
    timezone: z.string().exactOptional(),
    weight_unit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CartStoreInfo')

const CountrySchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code2: z.string().exactOptional(),
    code3: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Country')

const StateSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('State')

const CustomerAddressSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    city: z.string().exactOptional(),
    company: z.string().exactOptional(),
    country: CountrySchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    default: z.boolean().exactOptional(),
    fax: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    id: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    postcode: z.string().exactOptional(),
    region: z.string().exactOptional(),
    state: StateSchema.exactOptional(),
    type: z.string().exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerAddress')

const CartWarehouseSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    address: CustomerAddressSchema.exactOptional(),
    avail: z.boolean().exactOptional(),
    carriers_ids: z.array(z.string()).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    stores_ids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CartWarehouse')

const CartSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    db_prefix: z.string().exactOptional(),
    name: z.string().exactOptional(),
    shipping_zones: z.array(CartShippingZoneSchema).exactOptional(),
    stores_info: z.array(CartStoreInfoSchema).exactOptional(),
    url: z.string().exactOptional(),
    version: z.string().exactOptional(),
    warehouses: z.array(CartWarehouseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Cart')

const CartConfigUpdateSchema = z
  .object({
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({ description: 'This parameter sets the list of params to the shopping cart.' }),
    db_tables_prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This parameter is deprecated for this method. Please, use this parameter in method account.config.update',
      }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
  })
  .openapi({ required: [] })
  .openapi('CartConfigUpdate')

const CartCouponAddSchema = z
  .object({
    action_amount: z.number().openapi({ description: 'Defines the discount amount value.' }),
    action_apply_to: z
      .enum(['order_total', 'item_price', 'shipping'])
      .openapi({ description: 'Defines where discount should be applied' }),
    action_condition_entity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines entity for action condition.' }),
    action_condition_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines entity attribute code for action condition.' }),
    action_condition_operator: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines condition operator.' }),
    action_condition_value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Defines condition attribute value/s. Can be comma separated string.',
      }),
    action_scope: z
      .enum(['order', 'matching_items'])
      .openapi({
        description:
          'Specify how discount should be applied. If scope=matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once.',
      }),
    action_type: z.enum(['percent', 'fixed']).openapi({ description: 'Coupon discount type' }),
    code: z.string().openapi({ description: 'Coupon code' }),
    codes: z.array(z.string()).exactOptional().openapi({ description: 'Entity codes' }),
    date_end: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines when discount code will be expired.' }),
    date_start: z
      .string()
      .default('now')
      .exactOptional()
      .openapi({ description: 'Defines when discount code will be available.' }),
    name: z.string().exactOptional().openapi({ description: 'Coupon name' }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    usage_limit: z.int().exactOptional().openapi({ description: 'Usage limit for coupon.' }),
    usage_limit_per_customer: z
      .int()
      .exactOptional()
      .openapi({ description: 'Usage limit per customer.' }),
  })
  .openapi({
    required: ['code', 'action_type', 'action_apply_to', 'action_scope', 'action_amount'],
  })
  .openapi('CartCouponAdd')

const CartMetaDataSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    key: z.string().exactOptional(),
    namespace: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CartMetaData')

const CouponConditionSchema: z.ZodType<CouponConditionType> = z
  .lazy(() =>
    z
      .object({
        additional_fields: z.object({}).exactOptional(),
        custom_fields: z.object({}).exactOptional(),
        entity: z.string().exactOptional(),
        id: z.string().exactOptional(),
        key: z.string().exactOptional(),
        logic_operator: z.string().exactOptional(),
        match_items: z.string().exactOptional(),
        operator: z.string().exactOptional(),
        'sub-conditions': z.array(CouponConditionSchema).exactOptional(),
        value: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('CouponCondition')

const CatalogPriceRuleActionSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    apply_to: z.string().exactOptional(),
    conditions: z.array(CouponConditionSchema).exactOptional(),
    currency_code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    include_tax: z.boolean().exactOptional(),
    quantity: z.number().exactOptional(),
    scope: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CatalogPriceRuleAction')

const CatalogPriceRuleSchema = z
  .object({
    actions: z.array(CatalogPriceRuleActionSchema).exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    conditions: z.array(CouponConditionSchema).exactOptional(),
    created_time: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    date_end: A2CDateTimeSchema.exactOptional(),
    date_start: A2CDateTimeSchema.exactOptional(),
    description: z.string().exactOptional(),
    gid: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    short_description: z.string().exactOptional(),
    type: z.string().exactOptional(),
    usage_count: z.number().exactOptional(),
    uses_per_order_limit: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CatalogPriceRule')

const CategorySchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    created_at: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    images: z.array(ImageSchema).exactOptional(),
    keywords: z.string().exactOptional(),
    meta_description: z.string().exactOptional(),
    meta_title: z.string().exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    parent_id: z.string().exactOptional(),
    path: z.string().exactOptional(),
    seo_url: z.string().exactOptional(),
    short_description: z.string().exactOptional(),
    sort_order: z.int().exactOptional(),
    stores_ids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Category')

const ProductAdvancedPriceSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    expire_time: A2CDateTimeSchema.exactOptional(),
    group_id: z.string().exactOptional(),
    id: z.string().exactOptional(),
    quantity_from: z.number().exactOptional(),
    start_time: A2CDateTimeSchema.exactOptional(),
    value: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductAdvancedPrice')

const ProductChildItemCombinationSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    option_id: z.string().exactOptional(),
    option_value_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductChildItemCombination')

const ProductInventorySchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    in_stock: z.boolean().exactOptional(),
    priority: z.int().exactOptional(),
    quantity: z.number().exactOptional(),
    warehouse_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductInventory')

const ChildSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    advanced_price: z.array(ProductAdvancedPriceSchema).exactOptional(),
    allow_backorders: z.boolean().exactOptional(),
    avail_for_sale: z.boolean().exactOptional(),
    combination: z.array(ProductChildItemCombinationSchema).exactOptional(),
    cost_price: z.number().exactOptional(),
    created_time: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    default_price: z.number().exactOptional(),
    default_qty_in_pack: z.number().exactOptional(),
    dimensions_unit: z.string().exactOptional(),
    ean: z.string().exactOptional(),
    full_description: z.string().exactOptional(),
    gtin: z.string().exactOptional(),
    height: z.number().exactOptional(),
    id: z.string().exactOptional(),
    images: z.array(ImageSchema).exactOptional(),
    in_stock: z.boolean().exactOptional(),
    inventory: z.array(ProductInventorySchema).exactOptional(),
    inventory_level: z.number().exactOptional(),
    is_qty_in_pack_fixed: z.boolean().exactOptional(),
    isbn: z.string().exactOptional(),
    length: z.number().exactOptional(),
    list_price: z.number().exactOptional(),
    manage_stock: z.boolean().exactOptional(),
    meta_description: z.string().exactOptional(),
    meta_keywords: z.string().exactOptional(),
    meta_title: z.string().exactOptional(),
    min_quantity: z.number().exactOptional(),
    modified_time: A2CDateTimeSchema.exactOptional(),
    mpn: z.string().exactOptional(),
    name: z.string().exactOptional(),
    parent_id: z.string().exactOptional(),
    short_description: z.string().exactOptional(),
    sku: z.string().exactOptional(),
    sort_order: z.int().exactOptional(),
    tax_class_id: z.string().exactOptional(),
    upc: z.string().exactOptional(),
    weight: z.number().exactOptional(),
    weight_unit: z.string().exactOptional(),
    wholesale_price: z.number().exactOptional(),
    width: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Child')

const CouponActionSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    amount: z.number().exactOptional(),
    apply_to: z.string().exactOptional(),
    conditions: z.array(CouponConditionSchema).exactOptional(),
    currency_code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    discount_quantity_step: z.int().exactOptional(),
    discounted_quantity: z.number().exactOptional(),
    include_tax: z.boolean().exactOptional(),
    logic_operator: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CouponAction')

const CouponCodeSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    used_times: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CouponCode')

const CouponHistorySchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    amount: z.number().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    order_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CouponHistory')

const CouponSchema = z
  .object({
    actions: z.array(CouponActionSchema).exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    code: z.string().exactOptional(),
    codes: z.array(CouponCodeSchema).exactOptional(),
    conditions: z.array(CouponConditionSchema).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    date_end: A2CDateTimeSchema.exactOptional(),
    date_start: A2CDateTimeSchema.exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    logic_operator: z.string().exactOptional(),
    name: z.string().exactOptional(),
    priority: z.int().exactOptional(),
    usage_history: z.array(CouponHistorySchema).exactOptional(),
    usage_limit: z.int().exactOptional(),
    usage_limit_per_customer: z.int().exactOptional(),
    used_times: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Coupon')

const CustomerGroupSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerGroup')

const CustomerSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    address_book: z.array(CustomerAddressSchema).exactOptional(),
    birth_day: A2CDateTimeSchema.exactOptional(),
    company: z.string().exactOptional(),
    created_time: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    email: z.string().exactOptional(),
    fax: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    group: z.array(CustomerGroupSchema).exactOptional(),
    id: z.string().exactOptional(),
    ip_address: z.string().exactOptional(),
    last_login: A2CDateTimeSchema.exactOptional(),
    last_name: z.string().exactOptional(),
    last_order_id: z.string().exactOptional(),
    login: z.string().exactOptional(),
    modified_time: A2CDateTimeSchema.exactOptional(),
    news_letter_subscription: z.boolean().exactOptional(),
    orders_count: z.int().exactOptional(),
    phone: z.string().exactOptional(),
    status: z.string().exactOptional(),
    stores_ids: z.array(z.string()).exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Customer')

const CustomerAddSchema = z
  .object({
    address: z
      .array(
        z
          .object({
            address_book_address1: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's first address in the address book" }),
            address_book_address2: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's second address in the address book" }),
            address_book_city: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's city in the address book" }),
            address_book_company: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's company name in the address book" }),
            address_book_country: z
              .string()
              .exactOptional()
              .openapi({ description: 'ISO code or name of country' }),
            address_book_default: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Defines whether the address is used by default' }),
            address_book_fax: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's fax in the address book" }),
            address_book_first_name: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's first name in the address book" }),
            address_book_gender: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's gender" }),
            address_book_last_name: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's last name in the address book" }),
            address_book_phone: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's phone number in the address book" }),
            address_book_postcode: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's postcode" }),
            address_book_region: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's region" }),
            address_book_state: z
              .string()
              .exactOptional()
              .openapi({ description: 'ISO code or name of state.' }),
            address_book_type: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's address type" }),
            address_book_website: z
              .string()
              .exactOptional()
              .openapi({ description: "Specifies customer's website in the address book" }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    birth_day: z.string().exactOptional().openapi({ description: "Defines customer's birthday" }),
    company: z.string().exactOptional().openapi({ description: "Defines customer's company" }),
    created_time: z.string().exactOptional().openapi({ description: "Entity's date creation" }),
    email: z.string().openapi({ description: "Defines customer's email" }),
    fax: z.string().exactOptional().openapi({ description: "Defines customer's fax" }),
    first_name: z.string().openapi({ description: "Defines customer's first name" }),
    gender: z.string().exactOptional().openapi({ description: "Defines customer's gender" }),
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the group where the customer' }),
    last_login: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines customer's last login time" }),
    last_name: z.string().openapi({ description: "Defines customer's last name" }),
    login: z.string().exactOptional().openapi({ description: "Specifies customer's login name" }),
    modified_time: z
      .string()
      .exactOptional()
      .openapi({ description: "Entity's date modification" }),
    news_letter_subscription: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Defines whether the newsletter subscription is available for the user',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines customer's unique password" }),
    phone: z.string().exactOptional().openapi({ description: "Defines customer's phone number" }),
    status: z
      .string()
      .default('enabled')
      .exactOptional()
      .openapi({ description: "Defines customer's status" }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    website: z.string().exactOptional().openapi({ description: 'Link to customer website' }),
  })
  .openapi({ required: ['email', 'first_name', 'last_name'] })
  .openapi('CustomerAdd')

const CustomerAttributeValueSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerAttributeValue')

const CustomerAttributeSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    attribute_id: z.string().exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
    values: z.array(CustomerAttributeValueSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerAttribute')

const GiftCardSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    amount: z.number().exactOptional(),
    avail_to: z.string().exactOptional(),
    code: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    currency_code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    free_product_ids: z.string().exactOptional(),
    id: z.string().exactOptional(),
    initial_amount: z.number().exactOptional(),
    issuer_email: z.string().exactOptional(),
    issuer_name: z.string().exactOptional(),
    message: z.string().exactOptional(),
    name: z.string().exactOptional(),
    recipient_email: z.string().exactOptional(),
    recipient_name: z.string().exactOptional(),
    status: z.string().exactOptional(),
    type: z.string().exactOptional(),
    usage_history: z.array(CouponHistorySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GiftCard')

const PaginationSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    next: z.string().exactOptional(),
    previous: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const StoreAttributeSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    default_values: z.array(z.string()).exactOptional(),
    id: z.string().exactOptional(),
    lang_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    position: z.int().exactOptional(),
    required: z.boolean().exactOptional(),
    store_id: z.string().exactOptional(),
    system: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
    values: z.array(z.string()).exactOptional(),
    visible: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StoreAttribute')

const ResponseAttributeListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    attribute: z.array(StoreAttributeSchema).exactOptional(),
    attributes_count: z.int().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseAttributeListResult')

const ModelResponseAttributeListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseAttributeListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseAttributeList')

const ResponseCartCatalogPriceRulesListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    catalog_price_rules: z.array(CatalogPriceRuleSchema).exactOptional(),
    catalog_price_rules_count: z.int().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCartCatalogPriceRulesListResult')

const ModelResponseCartCatalogPriceRulesListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCartCatalogPriceRulesListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCartCatalogPriceRulesList')

const ResponseCartCouponListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    coupon: z.array(CouponSchema).exactOptional(),
    coupon_count: z.int().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCartCouponListResult')

const ModelResponseCartCouponListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCartCouponListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCartCouponList')

const ResponseCartGiftcardListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    gift_card: z.array(GiftCardSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCartGiftcardListResult')

const ModelResponseCartGiftCardListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCartGiftcardListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCartGiftCardList')

const ResponseCartMetaDataListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    items: z.array(CartMetaDataSchema).exactOptional(),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCartMetaDataListResult')

const ModelResponseCartMetaDataListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCartMetaDataListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCartMetaDataList')

const ScriptSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    created_time: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    description: z.string().exactOptional(),
    event: z.string().exactOptional(),
    html: z.string().exactOptional(),
    id: z.string().exactOptional(),
    load_method: z.string().exactOptional(),
    modified_time: A2CDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    src: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Script')

const ResponseCartScriptListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    scripts: z.array(ScriptSchema).exactOptional(),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCartScriptListResult')

const ModelResponseCartScriptListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCartScriptListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCartScriptList')

const ResponseCategoryListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    categories_count: z.int().exactOptional(),
    category: z.array(CategorySchema).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCategoryListResult')

const ModelResponseCategoryListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCategoryListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCategoryList')

const ResponseCustomerAttributeListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    items: z.array(CustomerAttributeSchema).exactOptional(),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCustomerAttributeListResult')

const ModelResponseCustomerAttributeListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCustomerAttributeListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCustomerAttributeList')

const ResponseCustomerGroupListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    group: z.array(CustomerGroupSchema).exactOptional(),
    group_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCustomerGroupListResult')

const ModelResponseCustomerGroupListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCustomerGroupListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCustomerGroupList')

const ResponseCustomerListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    customer: z.array(CustomerSchema).exactOptional(),
    customers_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseCustomerListResult')

const ModelResponseCustomerListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseCustomerListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseCustomerList')

const OrderItemOptionSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
    option_id: z.string().exactOptional(),
    price: z.number().exactOptional(),
    product_option_value_id: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.string().exactOptional(),
    weight: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderItemOption')

const OrderItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    barcode: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    discount_amount: z.number().exactOptional(),
    model: z.string().exactOptional(),
    name: z.string().exactOptional(),
    options: z.array(OrderItemOptionSchema).exactOptional(),
    order_product_id: z.string().exactOptional(),
    parent_order_product_id: z.string().exactOptional(),
    price: z.number().exactOptional(),
    price_inc_tax: z.number().exactOptional(),
    product_id: z.string().exactOptional(),
    quantity: z.number().exactOptional(),
    tax_percent: z.number().exactOptional(),
    tax_value: z.number().exactOptional(),
    tax_value_after_discount: z.number().exactOptional(),
    total_price: z.number().exactOptional(),
    variant_id: z.string().exactOptional(),
    weight: z.number().exactOptional(),
    weight_unit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderItem')

const OrderTotalsSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    discount: z.number().exactOptional(),
    shipping: z.number().exactOptional(),
    subtotal: z.number().exactOptional(),
    tax: z.number().exactOptional(),
    total: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderTotals')

const OrderAbandonedSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    basket_id: z.string().exactOptional(),
    basket_url: z.string().exactOptional(),
    created_at: A2CDateTimeSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    customer: BaseCustomerSchema.exactOptional(),
    id: z.string().exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
    order_products: z.array(OrderItemSchema).exactOptional(),
    totals: OrderTotalsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderAbandoned')

const ResponseOrderAbandonedListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    order: z.array(OrderAbandonedSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseOrderAbandonedListResult')

const ModelResponseOrderAbandonedListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseOrderAbandonedListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseOrderAbandonedList')

const OrderTotalsNewDiscountSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    type: z.string().exactOptional(),
    value: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderTotalsNewDiscount')

const OrderPaymentMethodSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderPaymentMethod')

const OrderStatusRefundItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    order_product_id: z.string().exactOptional(),
    product_id: z.string().exactOptional(),
    qty: z.number().exactOptional(),
    refund: z.number().exactOptional(),
    variant_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderStatusRefundItem')

const OrderRefundSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    comment: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    fee: z.number().exactOptional(),
    id: z.string().exactOptional(),
    items: z.array(OrderStatusRefundItemSchema).exactOptional(),
    modified_time: A2CDateTimeSchema.exactOptional(),
    shipping: z.number().exactOptional(),
    tax: z.number().exactOptional(),
    total: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderRefund')

const OrderStatusHistoryItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    comment: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    modified_time: A2CDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    notify: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderStatusHistoryItem')

const OrderStatusRefundSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    comment: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    fee: z.number().exactOptional(),
    refunded_items: z.array(OrderStatusRefundItemSchema).exactOptional(),
    shipping: z.number().exactOptional(),
    tax: z.number().exactOptional(),
    time: A2CDateTimeSchema.exactOptional(),
    total_refunded: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderStatusRefund')

const OrderStatusSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    history: z.array(OrderStatusHistoryItemSchema).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    refund_info: OrderStatusRefundSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderStatus')

const OrderTotalSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    shipping_ex_tax: z.number().exactOptional(),
    subtotal_ex_tax: z.number().exactOptional(),
    total: z.number().exactOptional(),
    total_discount: z.number().exactOptional(),
    total_paid: z.number().exactOptional(),
    total_tax: z.number().exactOptional(),
    wrapping_ex_tax: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderTotal')

const OrderSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    basket_id: z.string().exactOptional(),
    billing_address: CustomerAddressSchema.exactOptional(),
    bundles: z.array(OrderItemSchema).exactOptional(),
    channel_id: z.string().exactOptional(),
    comment: z.string().exactOptional(),
    create_at: A2CDateTimeSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    customer: BaseCustomerSchema.exactOptional(),
    discounts: z.array(OrderTotalsNewDiscountSchema).exactOptional(),
    finished_time: A2CDateTimeSchema.exactOptional(),
    gift_message: z.string().exactOptional(),
    id: z.string().exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
    order_details_url: z.string().exactOptional(),
    order_id: z.string().exactOptional(),
    order_products: z.array(OrderItemSchema).exactOptional(),
    payment_method: OrderPaymentMethodSchema.exactOptional(),
    refunds: z.array(OrderRefundSchema).exactOptional(),
    shipping_address: CustomerAddressSchema.exactOptional(),
    shipping_method: OrderShippingMethodSchema.exactOptional(),
    shipping_methods: z.array(OrderShippingMethodSchema).exactOptional(),
    status: OrderStatusSchema.exactOptional(),
    store_id: z.string().exactOptional(),
    total: OrderTotalSchema.exactOptional(),
    totals: OrderTotalsSchema.exactOptional(),
    warehouses_ids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Order')

const ResponseOrderListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    order: z.array(OrderSchema).exactOptional(),
    orders_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseOrderListResult')

const ModelResponseOrderListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseOrderListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseOrderList')

const OrderPreestimateShippingSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    carrier_code: z.string().exactOptional(),
    carrier_name: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    delivery_time: z.string().exactOptional(),
    description: z.string().exactOptional(),
    method_code: z.string().exactOptional(),
    method_name: z.string().exactOptional(),
    price: z.number().exactOptional(),
    price_inc_tax: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderPreestimateShipping')

const ResponseOrderPreestimateShippingListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    preestimate_shippings: z.array(OrderPreestimateShippingSchema).exactOptional(),
    preestimate_shippings_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseOrderPreestimateShippingListResult')

const ModelResponseOrderPreestimateShippingListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseOrderPreestimateShippingListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseOrderPreestimateShippingList')

const ShipmentItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    model: z.string().exactOptional(),
    name: z.string().exactOptional(),
    order_product_id: z.string().exactOptional(),
    price: z.number().exactOptional(),
    product_id: z.string().exactOptional(),
    quantity: z.number().exactOptional(),
    variant_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShipmentItem')

const ShipmentTrackingNumberSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    carrier_id: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    tracking_number: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShipmentTrackingNumber')

const ShipmentSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    created_at: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    is_shipped: z.boolean().exactOptional(),
    items: z.array(ShipmentItemSchema).exactOptional(),
    modified_time: A2CDateTimeSchema.exactOptional(),
    order_id: z.string().exactOptional(),
    shipment_provider: z.string().exactOptional(),
    tracking_numbers: z.array(ShipmentTrackingNumberSchema).exactOptional(),
    warehouse_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Shipment')

const ResponseOrderShipmentListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    shipment: z.array(ShipmentSchema).exactOptional(),
    shipment_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseOrderShipmentListResult')

const ModelResponseOrderShipmentListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseOrderShipmentListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseOrderShipmentList')

const OrderTransactionSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    amount: z.number().exactOptional(),
    avs_message: z.string().exactOptional(),
    avs_postal_resp_code: z.string().exactOptional(),
    avs_street_resp_code: z.string().exactOptional(),
    card_bin: z.string().exactOptional(),
    card_brand: z.string().exactOptional(),
    card_last_four: z.string().exactOptional(),
    created_time: A2CDateTimeSchema.exactOptional(),
    currency: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    cvv_code: z.string().exactOptional(),
    cvv_message: z.string().exactOptional(),
    description: z.string().exactOptional(),
    gateway: z.string().exactOptional(),
    id: z.string().exactOptional(),
    is_test_mode: z.boolean().exactOptional(),
    order_id: z.string().exactOptional(),
    parent_id: z.string().exactOptional(),
    reference_number: z.string().exactOptional(),
    settlement_amount: z.number().exactOptional(),
    settlement_created_time: A2CDateTimeSchema.exactOptional(),
    settlement_currency: z.string().exactOptional(),
    status: z.string().exactOptional(),
    transaction_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderTransaction')

const ResponseOrderTransactionListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    transactions: z.array(OrderTransactionSchema).exactOptional(),
    transactions_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseOrderTransactionListResult')

const ModelResponseOrderTransactionListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseOrderTransactionListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseOrderTransactionList')

const ProductAttributeSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    attribute_group_id: z.string().exactOptional(),
    attribute_id: z.string().exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    lang_id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    position: z.int().exactOptional(),
    product_id: z.string().exactOptional(),
    required: z.boolean().exactOptional(),
    store_id: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.string().exactOptional(),
    variant_id: z.string().exactOptional(),
    visible: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductAttribute')

const ResponseProductAttributeListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    attribute: z.array(ProductAttributeSchema).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseProductAttributeListResult')

const ModelResponseProductAttributeListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseProductAttributeListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseProductAttributeList')

const ResponseProductChildItemListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    children: z.array(ChildSchema).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseProductChildItemListResult')

const ModelResponseProductChildItemListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseProductChildItemListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseProductChildItemList')

const ProductGroupItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    child_item_id: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    default_qty_in_pack: z.string().exactOptional(),
    is_qty_in_pack_fixed: z.boolean().exactOptional(),
    product_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductGroupItem')

const ProductGroupPriceSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    expire_time: z.string().exactOptional(),
    group_id: z.string().exactOptional(),
    id: z.string().exactOptional(),
    price: z.number().exactOptional(),
    quantity: z.number().exactOptional(),
    start_time: z.string().exactOptional(),
    store_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductGroupPrice')

const ProductOptionItemSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    price: z.string().exactOptional(),
    product_option_item_id: z.string().exactOptional(),
    quantity: z.int().exactOptional(),
    sku: z.string().exactOptional(),
    sort_order: z.int().exactOptional(),
    type_price: z.string().exactOptional(),
    weight: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductOptionItem')

const ProductOptionSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    available: z.boolean().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    option_items: z.array(ProductOptionItemSchema).exactOptional(),
    product_option_id: z.string().exactOptional(),
    required: z.boolean().exactOptional(),
    sort_order: z.int().exactOptional(),
    type: z.string().exactOptional(),
    used_in_combination: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductOption')

const SpecialPriceSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    created_at: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    expired_at: A2CDateTimeSchema.exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
    value: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpecialPrice')

const ProductTierPriceSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    price: z.number().exactOptional(),
    qty: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductTierPrice')

const ProductSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    advanced_price: z.array(ProductAdvancedPriceSchema).exactOptional(),
    avail_sale: z.boolean().exactOptional(),
    avail_view: z.boolean().exactOptional(),
    backorders: z.string().exactOptional(),
    categories_ids: z.array(z.string()).exactOptional(),
    cost_price: z.number().exactOptional(),
    create_at: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    description: z.string().exactOptional(),
    dimensions_unit: z.string().exactOptional(),
    group_items: z.array(ProductGroupItemSchema).exactOptional(),
    group_price: z.array(ProductGroupPriceSchema).exactOptional(),
    height: z.number().exactOptional(),
    id: z.string().exactOptional(),
    images: z.array(ImageSchema).exactOptional(),
    inventory: z.array(ProductInventorySchema).exactOptional(),
    is_downloadable: z.boolean().exactOptional(),
    is_stock_managed: z.boolean().exactOptional(),
    is_virtual: z.boolean().exactOptional(),
    length: z.number().exactOptional(),
    manage_stock: z.string().exactOptional(),
    meta_description: z.string().exactOptional(),
    meta_keywords: z.string().exactOptional(),
    meta_title: z.string().exactOptional(),
    modified_at: A2CDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    price: z.number().exactOptional(),
    product_options: z.array(ProductOptionSchema).exactOptional(),
    quantity: z.number().exactOptional(),
    related_products_ids: z.array(z.string()).exactOptional(),
    seo_url: z.string().exactOptional(),
    short_description: z.string().exactOptional(),
    sort_order: z.int().exactOptional(),
    special_price: SpecialPriceSchema.exactOptional(),
    stores_ids: z.array(z.string()).exactOptional(),
    tax_class_id: z.string().exactOptional(),
    tier_price: z.array(ProductTierPriceSchema).exactOptional(),
    type: z.string().exactOptional(),
    u_brand: z.string().exactOptional(),
    u_brand_id: z.string().exactOptional(),
    u_model: z.string().exactOptional(),
    u_mpn: z.string().exactOptional(),
    u_sku: z.string().exactOptional(),
    u_upc: z.string().exactOptional(),
    url: z.string().exactOptional(),
    weight: z.number().exactOptional(),
    weight_unit: z.string().exactOptional(),
    width: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Product')

const ResponseProductListResultSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    product: z.array(ProductSchema).exactOptional(),
    products_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseProductListResult')

const ModelResponseProductListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    result: ResponseProductListResultSchema.exactOptional(),
    return_code: z.int().exactOptional(),
    return_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModelResponseProductList')

const OrderAddSchema = z
  .object({
    admin_comment: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies admin's order comment" }),
    admin_private_comment: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies private admin's order comment" }),
    bill_address_1: z.string().openapi({ description: 'Specifies first billing address' }),
    bill_address_2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies second billing address' }),
    bill_city: z.string().openapi({ description: 'Specifies billing city' }),
    bill_company: z.string().exactOptional().openapi({ description: 'Specifies billing company' }),
    bill_country: z.string().openapi({ description: 'Specifies billing country code' }),
    bill_fax: z.string().exactOptional().openapi({ description: 'Specifies billing fax' }),
    bill_first_name: z.string().openapi({ description: 'Specifies billing first name' }),
    bill_last_name: z.string().openapi({ description: 'Specifies billing last name' }),
    bill_phone: z.string().exactOptional().openapi({ description: 'Specifies billing phone' }),
    bill_postcode: z.string().openapi({ description: 'Specifies billing postcode' }),
    bill_state: z.string().openapi({ description: 'Specifies billing state code' }),
    channel_id: z.string().exactOptional().openapi({ description: 'Channel ID' }),
    clear_cache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Is cache clear required' }),
    comment: z.string().exactOptional().openapi({ description: 'Specifies order comment' }),
    coupon_discount: z
      .number()
      .exactOptional()
      .openapi({ description: "Specifies order's coupon discount" }),
    coupons: z
      .array(z.string())
      .min(1)
      .exactOptional()
      .openapi({ description: 'Coupons that will be applied to order' }),
    create_invoice: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Defines whether the invoice is created automatically along with the order',
      }),
    currency: z.string().exactOptional().openapi({ description: 'Currency code of order' }),
    customer_birthday: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies customer’s birthday' }),
    customer_email: z
      .string()
      .openapi({
        description: 'Defines the customer specified by email for whom order has to be created',
      }),
    customer_fax: z.string().exactOptional().openapi({ description: 'Specifies customer’s fax' }),
    customer_first_name: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies customer's first name" }),
    customer_last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies customer’s last name' }),
    customer_phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies customer’s phone' }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies an order creation date in format Y-m-d H:i:s' }),
    date_finished: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies order's  finished date" }),
    date_modified: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies order's  modification date" }),
    discount: z.number().exactOptional().openapi({ description: "Specifies order's discount" }),
    external_source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifying the system used to generate the order' }),
    financial_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Create order with financial status' }),
    fulfillment_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Create order with fulfillment status' }),
    gift_certificate_discount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Discounts for order with gift certificates' }),
    id: z.string().exactOptional().openapi({ description: "Defines order's id" }),
    inventory_behaviour: z
      .string()
      .default('bypass')
      .exactOptional()
      .openapi({
        description:
          'The behaviour to use when updating inventory.<hr><div style="font-style:normal">Values description:<div style="margin-left: 2%; padding-top: 2%"><div style="font-size:85%"><b>bypass</b> = Do not claim inventory </br></br><b>decrement_ignoring_policy</b> = Ignore the product\'s </br> inventory policy and claim amounts</br></br><b>decrement_obeying_policy</b> =  Obey the product\'s </br> inventory policy.</br></br></div></div></div>',
      }),
    note_attributes: z
      .array(
        z
          .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Defines note attributes' }),
    order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the order id if it is supported by the cart' }),
    order_item: z.array(
      z
        .object({
          order_item_allow_refund_items_separately: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Indicates whether subitems of the grouped/bundle product can be refunded separately',
            }),
          order_item_allow_ship_items_separately: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Indicates whether subitems of the grouped/bundle product can be shipped separately',
            }),
          order_item_id: z
            .string()
            .openapi({ description: 'Defines orders specified by order item id' }),
          order_item_model: z
            .string()
            .exactOptional()
            .openapi({ description: 'Defines orders specified by order item model' }),
          order_item_name: z
            .string()
            .openapi({ description: 'Defines orders specified by order item name' }),
          order_item_option: z
            .array(
              z
                .object({
                  order_item_option_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered Product Option Name. Where x is order item ID, y is order item option ID',
                    }),
                  order_item_option_price: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered product option price Where x is order item ID, y - order item option ID',
                    }),
                  order_item_option_value: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered product option value Where x is order item ID, y - order item option ID',
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          order_item_parent: z
            .int()
            .exactOptional()
            .openapi({ description: 'Index of the parent grouped/bundle product' }),
          order_item_parent_option_name: z
            .string()
            .exactOptional()
            .openapi({ description: 'Option name of the parent grouped/bundle product' }),
          order_item_price: z
            .number()
            .openapi({ description: 'Defines orders specified by order item price' }),
          order_item_price_includes_tax: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({ description: 'Defines if item price includes tax' }),
          order_item_property: z
            .array(
              z
                .object({
                  order_item_property_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered product property name. Where x is order item ID, y is order item property ID',
                    }),
                  order_item_property_value: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered product property value. Where x is order item ID, y - order item property ID',
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          order_item_quantity: z
            .int()
            .openapi({ description: 'Defines orders specified by order item quantity' }),
          order_item_tax: z
            .number()
            .default(0)
            .exactOptional()
            .openapi({ description: 'Percentage of tax for product order' }),
          order_item_variant_id: z
            .string()
            .exactOptional()
            .openapi({ description: 'Ordered product variant. Where x is order item ID' }),
          order_item_weight: z
            .number()
            .exactOptional()
            .openapi({ description: 'Defines orders specified by order item weight' }),
        })
        .openapi({
          required: ['order_item_id', 'order_item_name', 'order_item_price', 'order_item_quantity'],
        }),
    ),
    order_payment_method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'",
      }),
    order_shipping_method: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines order shipping method' }),
    order_status: z.string().openapi({ description: 'Defines order status.' }),
    prices_inc_tax: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates whether prices and subtotal includes tax.' }),
    send_admin_notifications: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify admin when new order was created.' }),
    send_notifications: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Send notifications to customer after order was created' }),
    shipp_address_1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies first shipping address' }),
    shipp_address_2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies second address line of a shipping street address' }),
    shipp_city: z.string().exactOptional().openapi({ description: 'Specifies shipping city' }),
    shipp_company: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping company' }),
    shipp_country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping country code' }),
    shipp_fax: z.string().exactOptional().openapi({ description: 'Specifies shipping fax' }),
    shipp_first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping first name' }),
    shipp_last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping last name' }),
    shipp_phone: z.string().exactOptional().openapi({ description: 'Specifies shipping phone' }),
    shipp_postcode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping postcode' }),
    shipp_state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping state code' }),
    shipping_price: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: "Specifies order's shipping price" }),
    shipping_tax: z
      .number()
      .exactOptional()
      .openapi({ description: "Specifies order's shipping price tax" }),
    store_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines store id where the order should be assigned' }),
    subtotal_price: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total price of all ordered products multiplied by their number, excluding tax, shipping price and discounts',
      }),
    tags: z.string().exactOptional().openapi({ description: 'Order tags' }),
    tax_price: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The value of tax cost for order' }),
    total_paid: z
      .number()
      .exactOptional()
      .openapi({ description: 'Defines total paid amount for the order' }),
    total_price: z.number().exactOptional().openapi({ description: "Defines order's total price" }),
    total_weight: z
      .int()
      .exactOptional()
      .openapi({ description: 'Defines the sum of all line item weights in grams for the order' }),
    transaction_id: z.string().exactOptional().openapi({ description: 'Payment transaction id' }),
  })
  .openapi({
    required: [
      'order_status',
      'customer_email',
      'bill_first_name',
      'bill_last_name',
      'bill_address_1',
      'bill_city',
      'bill_postcode',
      'bill_state',
      'bill_country',
      'order_item',
    ],
  })
  .openapi('OrderAdd')

const OrderPreestimateShippingListSchema = z
  .object({
    customer_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Retrieves orders specified by customer email' }),
    customer_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Retrieves orders specified by customer id' }),
    exclude: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
      }),
    order_item: z.array(
      z
        .object({
          order_item_id: z
            .string()
            .openapi({ description: 'Defines orders specified by order item id' }),
          order_item_model: z
            .string()
            .exactOptional()
            .openapi({ description: 'Defines orders specified by order item model' }),
          order_item_option: z
            .array(
              z
                .object({
                  order_item_option_id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Product Option ID. Where x is order item ID, y is order item option ID',
                    }),
                  order_item_option_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered Product Option Name. Where x is order item ID, y is order item option ID',
                    }),
                  order_item_option_used_in_combinations: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Product option used in combinations flag, where x is order item ID, y - order item option ID',
                    }),
                  order_item_option_value: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Ordered product option value Where x is order item ID, y - order item option ID',
                    }),
                  order_item_option_value_id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Product option value ID, where x is order item ID, y - order item option ID',
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          order_item_quantity: z
            .int()
            .openapi({ description: 'Defines orders specified by order item quantity' }),
          order_item_variant_id: z
            .string()
            .exactOptional()
            .openapi({ description: 'Ordered product variant. Where x is order item ID' }),
          order_item_weight: z
            .number()
            .exactOptional()
            .openapi({ description: 'Defines orders specified by order item weight' }),
        })
        .openapi({ required: ['order_item_id', 'order_item_quantity'] }),
    ),
    params: z
      .string()
      .default('force_all')
      .exactOptional()
      .openapi({
        description:
          'Set this parameter in order to choose which entity fields you want to retrieve',
      }),
    shipp_address_1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies first shipping address' }),
    shipp_city: z.string().exactOptional().openapi({ description: 'Specifies shipping city' }),
    shipp_country: z.string().openapi({ description: 'Specifies shipping country code' }),
    shipp_postcode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping postcode' }),
    shipp_state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies shipping state code' }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    warehouse_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This parameter is used for selecting a warehouse where you need to set/modify a product quantity.',
      }),
  })
  .openapi({ required: ['shipp_country', 'order_item'] })
  .openapi('OrderPreestimateShippingList')

const OrderRefundAddSchema = z
  .object({
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies an order creation date in format Y-m-d H:i:s' }),
    fee_price: z.number().exactOptional().openapi({ description: "Specifies refund's fee price" }),
    is_online: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates whether refund type is online' }),
    item_restock: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean, whether or not to add the line items back to the store inventory.',
      }),
    items: z
      .array(
        z
          .object({
            order_product_id: z.string().exactOptional(),
            price: z.number().exactOptional(),
            quantity: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Defines items in the order that will be refunded' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Refund reason, or some else message which assigned to refund.' }),
    order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the order for which the refund will be created.' }),
    send_notifications: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Send notifications to customer after refund was created' }),
    shipping_price: z
      .number()
      .exactOptional()
      .openapi({ description: 'Defines refund shipping amount.' }),
    total_price: z
      .number()
      .exactOptional()
      .openapi({ description: 'Defines order refund amount.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderRefundAdd')

const OrderShipmentAddSchema = z
  .object({
    adjust_stock: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'This parameter is used for adjust stock.' }),
    enable_cache: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "If the value is 'true' and order exist in our cache, we will use order.info from cache to prepare shipment items.",
      }),
    is_shipped: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: "Defines shipment's status" }),
    items: z
      .array(
        z
          .object({
            order_product_id: z.string().exactOptional(),
            quantity: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Defines items in the order that will be shipped' }),
    order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the order for which the shipment will be created' }),
    send_notifications: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Send notifications to customer after shipment was created' }),
    shipment_provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines company name that provide tracking of shipment' }),
    shipping_method: z.string().exactOptional().openapi({ description: 'Define shipping method' }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    tracking_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines custom tracking link' }),
    tracking_numbers: z
      .array(
        z
          .object({
            carrier_id: z.string().exactOptional(),
            tracking_number: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Defines shipment\'s tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "https://api2cart.com/docs/#/cart/CartInfo">cart.info</a > method',
      }),
    warehouse_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This parameter is used for selecting a warehouse where you need to set/modify a product quantity.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderShipmentAdd')

const OrderShipmentTrackingAddSchema = z
  .object({
    carrier_id: z.string().exactOptional().openapi({ description: 'Defines tracking carrier id' }),
    order_id: z.string().exactOptional().openapi({ description: 'Defines the order id' }),
    send_notifications: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Send notifications to customer after tracking was created' }),
    shipment_id: z
      .string()
      .openapi({ description: 'Shipment id indicates the number of delivery' }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    tracking_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines custom tracking link' }),
    tracking_number: z.string().openapi({ description: 'Defines tracking number' }),
    tracking_provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines name of the company which provides shipment tracking' }),
  })
  .openapi({ required: ['shipment_id', 'tracking_number'] })
  .openapi('OrderShipmentTrackingAdd')

const OrderShipmentUpdateSchema = z
  .object({
    is_shipped: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: "Defines shipment's status" }),
    order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the order that will be updated' }),
    replace: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Allows rewrite tracking numbers' }),
    shipment_id: z
      .string()
      .openapi({ description: 'Shipment id indicates the number of delivery' }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    tracking_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines custom tracking link' }),
    tracking_numbers: z
      .array(
        z
          .object({
            carrier_id: z.string().exactOptional(),
            tracking_number: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Defines shipment\'s tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "https://api2cart.com/docs/#/cart/CartInfo">cart.info</a > method',
      }),
  })
  .openapi({ required: ['shipment_id'] })
  .openapi('OrderShipmentUpdate')

const PluginSchema = z
  .object({
    active: z.boolean().exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Plugin')

const PluginListSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    all_plugins: z.int().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    plugins: z.array(PluginSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PluginList')

const ProductAddSchema = z
  .object({
    attribute_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Defines product’s attribute name separated with a comma in Magento',
      }),
    attribute_set_name: z
      .string()
      .default('Default')
      .exactOptional()
      .openapi({ description: 'Defines product’s attribute set name in Magento' }),
    avail_from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time.',
      }),
    available_for_sale: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Specifies the set of visible/invisible products for sale' }),
    available_for_view: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Specifies the set of visible/invisible products for users' }),
    backorder_status: z.string().exactOptional().openapi({ description: 'Set backorder status' }),
    barcode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A barcode is a unique code composed of numbers used as a product identifier.',
      }),
    best_offer: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The price at which Best Offers are automatically accepted.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">best_offer[<b>minimum_offer_price</b>] = decimal</br>best_offer[<b>auto_accept_price</b>] = decimal</br></code></div></div>',
      }),
    brand_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Retrieves brands specified by brand name' }),
    categories_ids: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Defines product add that is specified by comma-separated categories id',
      }),
    category_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines product add that is specified by category id' }),
    clear_cache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Is cache clear required' }),
    condition: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable label for the condition (e.g., "New").' }),
    cost_price: z
      .number()
      .exactOptional()
      .openapi({ description: "Defines new product's cost price" }),
    country_of_origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the inventory item was made' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the date of entity creation' }),
    description: z
      .string()
      .openapi({ description: "Defines product's description that has to be added" }),
    downloadable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Defines whether the product is downloadable' }),
    ean: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.',
      }),
    files: z
      .array(z.object({ name: z.string(), url: z.string() }).openapi({ required: ['name', 'url'] }))
      .exactOptional()
      .openapi({ description: 'File Url' }),
    group_prices: z
      .array(
        z
          .object({ group_id: z.string().exactOptional(), price: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines product's group prices" }),
    gtin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Global Trade Item Number. An GTIN is an identifier for trade items.',
      }),
    harmonized_system_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes',
      }),
    height: z.number().exactOptional().openapi({ description: "Defines product's height" }),
    image_name: z.string().exactOptional().openapi({ description: "Defines image's name" }),
    image_url: z.string().exactOptional().openapi({ description: 'Image Url' }),
    isbn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'International Standard Book Number. An ISBN is a unique identifier for books.',
      }),
    lang_id: z.string().exactOptional().openapi({ description: 'Language id' }),
    length: z.number().exactOptional().openapi({ description: "Defines product's length" }),
    listing_duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values.',
      }),
    listing_type: z
      .string()
      .default('FixedPrice')
      .exactOptional()
      .openapi({ description: 'Indicates the selling format of the marketplace listing.' }),
    manage_stock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines inventory tracking for product' }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines product's manufacturer" }),
    marketplace_item_properties: z
      .string()
      .default('false')
      .exactOptional()
      .openapi({ description: 'String containing the JSON representation of the supplied data' }),
    meta_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique meta description of a entity' }),
    meta_keywords: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique meta keywords for each entity' }),
    meta_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique meta title for each entity' }),
    model: z.string().openapi({ description: "Defines product's model that has to be added" }),
    mpn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.',
      }),
    name: z.string().openapi({ description: "Defines product's name that has to be added" }),
    old_price: z.number().exactOptional().openapi({ description: "Defines product's old price" }),
    ordered_count: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Defines how many times the product was ordered' }),
    package_details: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">package_details[<b>measure_unit</b>] = string</br> Allowed measure_unit values: [English or Metric] </br> Default: Metric</br>package_details[<b>weigh_unit</b>] = string</br> Allowed weigh_unit values: [kg, g, lbs, oz]</br>package_details[<b>package_depth</b>] = decimal</br>package_details[<b>package_length</b>] = decimal</br>package_details[<b>package_width</b>] = decimal</br>package_details[<b>weight_major</b>] = decimal</br>package_details[<b>weight_minor</b>] = decimal</br>package_details[<b>shipping_package</b>] = string</br> See cart.info method, param `eBay_shipping_package_details`</code></div></div>',
      }),
    payment_methods: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">payment_methods[0] = string</br>payment_methods[1] = string</br></code></div></div>',
      }),
    paypal_email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing.',
      }),
    price: z.number().openapi({ description: "Defines product's price that has to be added" }),
    product_class: z
      .string()
      .exactOptional()
      .openapi({ description: 'A categorization for the product' }),
    quantity: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: "Defines product's quantity that has to be added" }),
    return_accepted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the seller allows the buyer to return the item.',
      }),
    sales_tax: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Percent of an item\'s price to be charged as the sales tax for the order. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">sales_tax[<b>tax_percent</b>] = decimal (##.###)</br>sales_tax[<b>tax_state</b>] = string</br>sales_tax[<b>shipping_inc_in_tax</b>] = bool</br></code></div></div>',
      }),
    search_keywords: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique search keywords' }),
    seller_profiles: z
      .object({
        payment_profile_id: z.string().exactOptional(),
        return_profile_id: z.string().exactOptional(),
        shipping_profile_id: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">seller_profiles[<b>shipping_profile_id</b>] = integer</br>seller_profiles[<b>payment_profile_id</b>] = integer</br>seller_profiles[<b>return_profile_id</b>] = integer</br></code></div></div>',
        required: [],
      }),
    seo_url: z.string().exactOptional().openapi({ description: 'Defines unique URL for SEO' }),
    shipping_details: z
      .array(
        z
          .object({
            shipping_cost: z.number().exactOptional(),
            shipping_service: z.string().exactOptional(),
            shipping_type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">shipping_details[0][<b>shipping_type</b>] = string </br>shipping_details[0][<b>shipping_service</b>] = string</br>shipping_details[0][<b>shipping_cost</b>] = decimal</br>shipping_details[1][<b>shipping_type</b>] = string </br>shipping_details[1][<b>shipping_service</b>] = string</br>shipping_details[1][<b>shipping_cost</b>] = decimal</br></code></div></div>',
      }),
    shipping_template_id: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The numeric ID of the shipping template associated with the products in Etsy.',
      }),
    short_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines short description' }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines product's sku that has to be added" }),
    special_price: z
      .number()
      .exactOptional()
      .openapi({ description: "Defines product's model that has to be added" }),
    specifics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.\n        <hr>\n        <div style="font-style:normal">Param structure:\n          <div style="margin-left: 2%;">\n            <code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">\n              specifics[int][<b>name</b>] = string</br>\n              specifics[int][<b>value</b>] = string</br>\n            </code>\n          </div>\n        </div>',
      }),
    sprice_create: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the date of special price creation' }),
    sprice_expire: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the term of special price offer duration' }),
    sprice_modified: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the date of special price modification' }),
    status: z.string().exactOptional().openapi({ description: "Defines product's status" }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    stores_ids: z
      .string()
      .default('0')
      .exactOptional()
      .openapi({
        description: "Assign product to the stores that is specified by comma-separated stores' id",
      }),
    tags: z.string().exactOptional().openapi({ description: 'Product tags' }),
    tax_class_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Defines tax classes where entity has to be added' }),
    taxable: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Specifies whether a tax is charged' }),
    tier_prices: z
      .array(
        z
          .object({ price: z.number().exactOptional(), quantity: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines product's tier prices" }),
    type: z
      .string()
      .default('simple')
      .exactOptional()
      .openapi({ description: "Defines product's type" }),
    upc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.',
      }),
    url: z.string().exactOptional().openapi({ description: "Defines unique product's URL" }),
    viewed_count: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: "Specifies the number of product's reviews" }),
    visible: z.string().exactOptional().openapi({ description: 'Set visibility status' }),
    warehouse_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This parameter is used for selecting a warehouse where you need to set/modify a product quantity.',
      }),
    weight: z.number().default(0).exactOptional().openapi({ description: 'Weight' }),
    weight_unit: z.string().exactOptional().openapi({ description: 'Weight Unit' }),
    wholesale_price: z
      .number()
      .exactOptional()
      .openapi({ description: "Defines product's sale price" }),
    width: z.number().exactOptional().openapi({ description: "Defines product's width" }),
  })
  .openapi({ required: ['name', 'model', 'description', 'price'] })
  .openapi('ProductAdd')

const ProductImageAddSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content(body) encoded in base64 of image file' }),
    image_name: z.string().openapi({ description: "Defines image's name" }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines alternative text that has to be attached to the picture' }),
    lang_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Add product image on specified language id' }),
    mime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.',
      }),
    position: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Defines image’s position in the list' }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines product id where the image should be added' }),
    product_variant_id: z
      .int()
      .exactOptional()
      .openapi({ description: "Defines product's variants specified by variant id" }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    type: z
      .enum(['small', 'base', 'additional', 'thumbnail'])
      .openapi({ description: "Defines image's types that are specified by comma-separated list" }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines URL of the image that has to be added' }),
    variant_ids: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines product's variants ids" }),
  })
  .openapi({ required: ['image_name', 'type'] })
  .openapi('ProductImageAdd')

const ProductPriceAddSchema = z
  .object({
    group_prices: z
      .array(
        z
          .object({ group_id: z.string().exactOptional(), price: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines product's group prices" }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the product to which the price has to be added' }),
  })
  .openapi({ required: [] })
  .openapi('ProductPriceAdd')

const ProductPriceUpdateSchema = z
  .object({
    group_prices: z
      .array(
        z
          .object({
            group_id: z.string().exactOptional(),
            id: z.int().exactOptional(),
            price: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines product's group prices" }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the product where the price has to be updated' }),
  })
  .openapi({ required: [] })
  .openapi('ProductPriceUpdate')

const ProductTaxAddSchema = z
  .object({
    name: z.string().openapi({ description: 'Defines tax class name where tax has to be added' }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines products specified by product id' }),
    tax_rates: z
      .array(
        z
          .object({
            name: z.string().exactOptional(),
            type: z.string().exactOptional(),
            value: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .openapi({ description: 'Defines tax rates of specified tax classes' }),
  })
  .openapi({ required: ['name', 'tax_rates'] })
  .openapi('ProductTaxAdd')

const ProductVariantAddSchema = z
  .object({
    attributes: z
      .array(
        z
          .object({
            attribute_name: z.string().exactOptional(),
            attribute_price: z.number().exactOptional(),
            attribute_value: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines variant's attributes list" }),
    available_for_sale: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: "Specifies the set of visible/invisible product's variants for sale",
      }),
    available_for_view: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: "Specifies the set of visible/invisible product's variants for users",
      }),
    barcode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A barcode is a unique code composed of numbers used as a product identifier.',
      }),
    clear_cache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Is cache clear required' }),
    cost_price: z
      .number()
      .exactOptional()
      .openapi({ description: "Defines new product's cost price" }),
    country_of_origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the inventory item was made' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the date of entity creation' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies variant's description" }),
    harmonized_system_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes',
      }),
    height: z.number().exactOptional().openapi({ description: "Defines product's height" }),
    lang_id: z.string().exactOptional().openapi({ description: 'Language id' }),
    length: z.number().exactOptional().openapi({ description: "Defines product's length" }),
    manage_stock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines inventory tracking for product variant' }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: "Specifies the product variant's manufacturer" }),
    meta_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique meta description of a entity' }),
    meta_keywords: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique meta keywords for each entity' }),
    meta_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines unique meta title for each entity' }),
    model: z.string().openapi({ description: "Specifies variant's model that has to be added" }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines variant's name that has to be added" }),
    price: z
      .number()
      .exactOptional()
      .openapi({ description: "Defines new product's variant price" }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines product's id where the variant has to be added" }),
    quantity: z
      .number()
      .default(0)
      .exactOptional()
      .openapi({ description: "Defines product variant's quantity that has to be added" }),
    short_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines short description' }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines variant's sku that has to be added" }),
    special_price: z
      .number()
      .exactOptional()
      .openapi({ description: "Specifies variant's model that has to be added" }),
    sprice_create: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the date of special price creation' }),
    sprice_expire: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the term of special price offer duration' }),
    sprice_modified: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the date of special price modification' }),
    store_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Add variants specified by store id' }),
    tax_class_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Defines tax classes where entity has to be added' }),
    taxable: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Specifies whether a tax is charged' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: "Defines unique product variant's URL" }),
    warehouse_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This parameter is used for selecting a warehouse where you need to set/modify a product quantity.',
      }),
    weight: z.number().default(0).exactOptional().openapi({ description: 'Weight' }),
    weight_unit: z.string().exactOptional().openapi({ description: 'Weight Unit' }),
    width: z.number().exactOptional().openapi({ description: "Defines product's width" }),
  })
  .openapi({ required: ['model'] })
  .openapi('ProductVariantAdd')

const ProductVariantImageAddSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content(body) encoded in base64 of image file' }),
    image_name: z.string().openapi({ description: "Defines image's name" }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines alternative text that has to be attached to the picture' }),
    mime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.',
      }),
    option_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Defines option id of the product variant for which the image will be added',
      }),
    position: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Defines image’s position in the list' }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines product id where the variant image has to be added' }),
    product_variant_id: z
      .int()
      .openapi({ description: "Defines product's variants specified by variant id" }),
    store_id: z.string().exactOptional().openapi({ description: 'Store Id' }),
    type: z
      .enum(['small', 'base', 'additional', 'thumbnail'])
      .default('base')
      .openapi({ description: "Defines image's types that are specified by comma-separated list" }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines URL of the image that has to be added' }),
  })
  .openapi({ required: ['product_variant_id', 'image_name', 'type'] })
  .openapi('ProductVariantImageAdd')

const ProductVariantPriceAddSchema = z
  .object({
    group_prices: z
      .array(
        z
          .object({ group_id: z.string().exactOptional(), price: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines variants's group prices" }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the variant to which the price has to be added' }),
  })
  .openapi({ required: [] })
  .openapi('ProductVariantPriceAdd')

const ProductVariantPriceUpdateSchema = z
  .object({
    group_prices: z
      .array(
        z
          .object({
            group_id: z.string().exactOptional(),
            id: z.int().exactOptional(),
            price: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Defines variants's group prices" }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Defines the variant where the price has to be updated' }),
  })
  .openapi({ required: [] })
  .openapi('ProductVariantPriceUpdate')

const ProductReviewRatingSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    value: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductReviewRating')

const ProductReviewSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    created_time: A2CDateTimeSchema.exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    customer_id: z.string().exactOptional(),
    email: z.string().exactOptional(),
    id: z.string().exactOptional(),
    message: z.string().exactOptional(),
    nick_name: z.string().exactOptional(),
    product_id: z.string().exactOptional(),
    rating: z.number().exactOptional(),
    ratings: z.array(ProductReviewRatingSchema).exactOptional(),
    status: z.string().exactOptional(),
    summary: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductReview')

const StoreAttributeGroupSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    assigned_attribute_ids: z.array(z.string()).exactOptional(),
    attribute_set_id: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    position: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StoreAttributeGroup')

const SubscriberSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    created_time: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    customer_id: z.string().exactOptional(),
    email: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    id: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    modified_time: z.string().exactOptional(),
    subscribed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Subscriber')

const TaxClassZipCodesRangeSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    from: z.string().exactOptional(),
    to: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxClassZipCodesRange')

const TaxClassZipCodesSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    fields: z.array(TaxClassZipCodesRangeSchema).exactOptional(),
    is_range: z.boolean().exactOptional(),
    range: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxClassZipCodes')

const TaxClassStatesSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    tax: z.number().exactOptional(),
    tax_type: z.int().exactOptional(),
    zip_codes: z.array(TaxClassZipCodesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxClassStates')

const TaxClassCountriesSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    code: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    states: z.array(TaxClassStatesSchema).exactOptional(),
    tax: z.number().exactOptional(),
    tax_type: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxClassCountries')

const TaxClassRateSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    address: z.array(z.string()).exactOptional(),
    cities: z.array(z.string()).exactOptional(),
    countries: z.array(TaxClassCountriesSchema).exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    tax: z.number().exactOptional(),
    tax_based_on: z.string().exactOptional(),
    tax_type: z.int().exactOptional(),
    zip_codes: z.array(TaxClassZipCodesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxClassRate')

const TaxClassSchema = z
  .object({
    additional_fields: z.object({}).exactOptional(),
    avail: z.boolean().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    tax: z.number().exactOptional(),
    tax_rates: z.array(TaxClassRateSchema).exactOptional(),
    tax_type: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxClass')

const WebhookSchema = z
  .object({
    action: z.string().exactOptional(),
    active: z.boolean().exactOptional(),
    additional_fields: z.object({}).exactOptional(),
    callback: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    custom_fields: z.object({}).exactOptional(),
    entity: z.string().exactOptional(),
    fields: z.string().exactOptional(),
    id: z.int().exactOptional(),
    label: z.string().exactOptional(),
    store_id: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const ApiKeySecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

const StoreKeySecurityScheme = { in: 'header', name: 'x-store-key', type: 'apiKey' }

export const postAccountCartAddJsonRoute = createRoute({
  method: 'post',
  path: '/account.cart.add.json',
  tags: ['account'],
  description: 'Add store to the account',
  operationId: 'AccountCartAdd',
  request: {
    body: { content: { 'application/json': { schema: AccountCartAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ store_key: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [] }],
})

export const getAccountCartListJsonRoute = createRoute({
  method: 'get',
  path: '/account.cart.list.json',
  tags: ['account'],
  description: 'Get list of carts.',
  operationId: 'AccountCartList',
  request: {
    query: z.object({
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      request_from_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'request_from_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      request_to_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'request_to_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A web address of a store',
            in: 'query',
            name: 'store_url',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find store by store key',
            in: 'query',
            name: 'store_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  carts: z
                    .array(
                      z
                        .object({
                          cart_id: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          store_key: z.string().exactOptional(),
                          total_calls: z.string().exactOptional(),
                          url: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  carts_count: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [] }],
})

export const putAccountConfigUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/account.config.update.json',
  tags: ['account'],
  description: 'Update configs in the API2Cart database.',
  operationId: 'AccountConfigUpdate',
  request: {
    query: z.object({
      new_store_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Update store key',
            in: 'query',
            name: 'new_store_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bridge_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)',
            in: 'query',
            name: 'bridge_url',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_root: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Absolute path to the store root directory (used with "bridge_url" parameter)',
            in: 'query',
            name: 'store_root',
            required: false,
            schema: { type: 'string' },
          },
        }),
      db_tables_prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DB tables prefix',
            in: 'query',
            name: 'db_tables_prefix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      '3dcart_private_key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart Private Key',
            in: 'query',
            name: '3dcart_private_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      '3dcart_access_token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart Token',
            in: 'query',
            name: '3dcart_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      '3dcartapi_api_key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart API Key',
            in: 'query',
            name: '3dcartapi_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon SP API app client id',
            in: 'query',
            name: 'amazon_sp_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon SP API app client secret',
            in: 'query',
            name: 'amazon_sp_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_aws_user_key_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon AWS user access key ID',
            in: 'query',
            name: 'amazon_sp_aws_user_key_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_aws_user_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon AWS user secret access key',
            in: 'query',
            name: 'amazon_sp_aws_user_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_aws_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon AWS Region',
            in: 'query',
            name: 'amazon_sp_aws_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_aws_role_arn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon AWS Role ARN',
            in: 'query',
            name: 'amazon_sp_aws_role_arn',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon SP API OAuth refresh token',
            in: 'query',
            name: 'amazon_sp_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_sp_api_environment: z
        .string()
        .default('production')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon SP API environment',
            in: 'query',
            name: 'amazon_sp_api_environment',
            required: false,
            schema: { default: 'production', type: 'string' },
          },
        }),
      amazon_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'MWS Auth Token. Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'amazon_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_seller_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon Seller ID (Merchant token)',
            in: 'query',
            name: 'amazon_seller_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_marketplaces_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon Marketplace IDs comma separated string',
            in: 'query',
            name: 'amazon_marketplaces_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_secret_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon Secret Key',
            in: 'query',
            name: 'amazon_secret_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_access_key_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon Secret Key Id',
            in: 'query',
            name: 'amazon_access_key_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      aspdotnetstorefront_api_user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "It's a AspDotNetStorefront account for which API is available",
            in: 'query',
            name: 'aspdotnetstorefront_api_user',
            required: false,
            schema: { type: 'string' },
          },
        }),
      aspdotnetstorefront_api_pass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'AspDotNetStorefront API Password',
            in: 'query',
            name: 'aspdotnetstorefront_api_pass',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bigcommerceapi_admin_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "It's a BigCommerce account for which API is enabled",
            in: 'query',
            name: 'bigcommerceapi_admin_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bigcommerceapi_api_path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'BigCommerce API URL',
            in: 'query',
            name: 'bigcommerceapi_api_path',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bigcommerceapi_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bigcommerce API Key',
            in: 'query',
            name: 'bigcommerceapi_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bigcommerceapi_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Client ID of the requesting app',
            in: 'query',
            name: 'bigcommerceapi_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bigcommerceapi_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'bigcommerceapi_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bigcommerceapi_context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API Path section unique to the store',
            in: 'query',
            name: 'bigcommerceapi_context',
            required: false,
            schema: { type: 'string' },
          },
        }),
      demandware_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware client id',
            in: 'query',
            name: 'demandware_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      demandware_api_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware api password',
            in: 'query',
            name: 'demandware_api_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      demandware_user_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware user name',
            in: 'query',
            name: 'demandware_user_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      demandware_user_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware user password',
            in: 'query',
            name: 'demandware_user_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Application ID (AppID).',
            in: 'query',
            name: 'ebay_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shared Secret from eBay application',
            in: 'query',
            name: 'ebay_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_runame: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The RuName value that eBay assigns to your application.',
            in: 'query',
            name: 'ebay_runame',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to authenticate API requests.',
            in: 'query',
            name: 'ebay_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to renew the access token.',
            in: 'query',
            name: 'ebay_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_environment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'eBay environment',
            in: 'query',
            name: 'ebay_environment',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_site_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'eBay global ID',
            in: 'query',
            name: 'ebay_site_id',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      ecwid_acess_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'ecwid_acess_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ecwid_store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'ecwid_store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_keystring: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Etsy keystring',
            in: 'query',
            name: 'etsy_keystring',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_shared_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Etsy shared secret',
            in: 'query',
            name: 'etsy_shared_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'etsy_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Secret token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'etsy_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Etsy Client Id',
            in: 'query',
            name: 'etsy_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Etsy Refresh token',
            in: 'query',
            name: 'etsy_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      neto_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Neto API Key',
            in: 'query',
            name: 'neto_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      neto_api_username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Neto User Name',
            in: 'query',
            name: 'neto_api_username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopify_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopify API Key',
            in: 'query',
            name: 'shopify_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopify_api_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopify API Password',
            in: 'query',
            name: 'shopify_api_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopify_shared_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shared secret',
            in: 'query',
            name: 'shopify_shared_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopify_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'shopify_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopware_access_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopware access key',
            in: 'query',
            name: 'shopware_access_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopware_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopware api key',
            in: 'query',
            name: 'shopware_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopware_api_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopware client secret access key',
            in: 'query',
            name: 'shopware_api_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      volusion_login: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "It's a Volusion account for which API is enabled",
            in: 'query',
            name: 'volusion_login',
            required: false,
            schema: { type: 'string' },
          },
        }),
      volusion_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Volusion API Password',
            in: 'query',
            name: 'volusion_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      walmart_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart client ID',
            in: 'query',
            name: 'walmart_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      walmart_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart client secret',
            in: 'query',
            name: 'walmart_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      walmart_environment: z
        .string()
        .default('production')
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart environment',
            in: 'query',
            name: 'walmart_environment',
            required: false,
            schema: { default: 'production', type: 'string' },
          },
        }),
      walmart_channel_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart WM_CONSUMER.CHANNEL.TYPE header',
            in: 'query',
            name: 'walmart_channel_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      squarespace_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Squarespace API Key',
            in: 'query',
            name: 'squarespace_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Omni Commerce Connector Client ID',
            in: 'query',
            name: 'hybris_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Omni Commerce Connector Client Secret',
            in: 'query',
            name: 'hybris_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Name',
            in: 'query',
            name: 'hybris_username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User password',
            in: 'query',
            name: 'hybris_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_websites: z
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
            description: 'Websites to stores mapping data',
            explode: false,
            in: 'query',
            name: 'hybris_websites',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      lightspeed_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'LightSpeed api key',
            in: 'query',
            name: 'lightspeed_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lightspeed_api_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'LightSpeed api secret',
            in: 'query',
            name: 'lightspeed_api_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      commercehq_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CommerceHQ api key',
            in: 'query',
            name: 'commercehq_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      commercehq_api_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CommerceHQ api password',
            in: 'query',
            name: 'commercehq_api_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wc_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Woocommerce consumer key',
            in: 'query',
            name: 'wc_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wc_consumer_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Woocommerce consumer secret',
            in: 'query',
            name: 'wc_consumer_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Consumer Key',
            in: 'query',
            name: 'magento_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_consumer_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Consumer Secret',
            in: 'query',
            name: 'magento_consumer_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Access Token',
            in: 'query',
            name: 'magento_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Token Secret',
            in: 'query',
            name: 'magento_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      prestashop_webservice_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Prestashop webservice key',
            in: 'query',
            name: 'prestashop_webservice_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wix_app_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wix App ID',
            in: 'query',
            name: 'wix_app_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wix_app_secret_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wix App Secret Key',
            in: 'query',
            name: 'wix_app_secret_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wix_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wix refresh token',
            in: 'query',
            name: 'wix_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mercado_libre_app_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mercado Libre App ID',
            in: 'query',
            name: 'mercado_libre_app_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mercado_libre_app_secret_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mercado Libre App Secret Key',
            in: 'query',
            name: 'mercado_libre_app_secret_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mercado_libre_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mercado Libre Refresh Token',
            in: 'query',
            name: 'mercado_libre_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_client_id: z
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
            description: 'Zid Client ID',
            in: 'query',
            name: 'zid_client_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      zid_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid Client Secret',
            in: 'query',
            name: 'zid_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid Access Token',
            in: 'query',
            name: 'zid_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid Authorization',
            in: 'query',
            name: 'zid_authorization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid refresh token',
            in: 'query',
            name: 'zid_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAccountFailedWebhooksJsonRoute = createRoute({
  method: 'get',
  path: '/account.failed_webhooks.json',
  tags: ['account'],
  description: 'List webhooks that was not delivered to the callback.',
  operationId: 'AccountFailedWebhooks',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List of сomma-separated webhook ids',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  all_failed_webhook: z.string().exactOptional(),
                  webhook: z
                    .array(
                      z
                        .object({
                          entity_id: z.string().exactOptional(),
                          time: A2CDateTimeSchema.exactOptional(),
                          webhook_id: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [] }],
})

export const getAccountSupportedPlatformsJsonRoute = createRoute({
  method: 'get',
  path: '/account.supported_platforms.json',
  tags: ['account'],
  description: 'Get list of supported platforms',
  operationId: 'AccountSupportedPlatforms',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  supported_platforms: z
                    .array(
                      z
                        .object({
                          cart_id: z.string().exactOptional(),
                          cart_method: z.string().exactOptional(),
                          cart_name: z.string().exactOptional(),
                          cart_versions: z.string().exactOptional(),
                          params: z
                            .object({
                              additional: z
                                .array(
                                  z
                                    .object({
                                      description: z.string().exactOptional(),
                                      name: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              required: z
                                .array(
                                  z.array(
                                    z
                                      .object({
                                        description: z.string().exactOptional(),
                                        name: z.string().exactOptional(),
                                      })
                                      .openapi({ required: [] }),
                                  ),
                                )
                                .exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [] }],
})

export const postAttributeAddJsonRoute = createRoute({
  method: 'post',
  path: '/attribute.add.json',
  tags: ['attribute'],
  description: 'Add new attribute',
  operationId: 'AttributeAdd',
  request: {
    query: z.object({
      type: z
        .enum(['text', 'select', 'textarea', 'date', 'price', 'multiselect', 'boolean'])
        .openapi({
          param: {
            description: "Defines attribute's type",
            in: 'query',
            name: 'type',
            required: true,
            schema: {
              enum: ['text', 'select', 'textarea', 'date', 'price', 'multiselect', 'boolean'],
              type: 'string',
            },
          },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity code',
            in: 'query',
            name: 'code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: "Defines attributes's name",
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      visible: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set visibility status',
            in: 'query',
            name: 'visible',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      required: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the option is required',
            in: 'query',
            name: 'required',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      position: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute`s position',
            in: 'query',
            name: 'position',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      attribute_group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by attribute_group_id',
            in: 'query',
            name: 'attribute_group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      is_global: z
        .string()
        .default('Store')
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute saving scope',
            in: 'query',
            name: 'is_global',
            required: false,
            schema: { default: 'Store', type: 'string' },
          },
        }),
      is_searchable: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use attribute in Quick Search',
            in: 'query',
            name: 'is_searchable',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      is_filterable: z
        .string()
        .default('No')
        .exactOptional()
        .openapi({
          param: {
            description: 'Use In Layered Navigation',
            in: 'query',
            name: 'is_filterable',
            required: false,
            schema: { default: 'No', type: 'string' },
          },
        }),
      is_comparable: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Comparable on Front-end',
            in: 'query',
            name: 'is_comparable',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      is_html_allowed_on_front: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Allow HTML Tags on Frontend',
            in: 'query',
            name: 'is_html_allowed_on_front',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      is_filterable_in_search: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use In Search Results Layered Navigation',
            in: 'query',
            name: 'is_filterable_in_search',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      is_configurable: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use To Create Configurable Product',
            in: 'query',
            name: 'is_configurable',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      is_visible_in_advanced_search: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use in Advanced Search',
            in: 'query',
            name: 'is_visible_in_advanced_search',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      is_used_for_promo_rules: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use for Promo Rule Conditions',
            in: 'query',
            name: 'is_used_for_promo_rules',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      used_in_product_listing: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Used in Product Listing',
            in: 'query',
            name: 'used_in_product_listing',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      used_for_sort_by: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Used for Sorting in Product Listing',
            in: 'query',
            name: 'used_for_sort_by',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      apply_to: z
        .string()
        .default('all_types')
        .exactOptional()
        .openapi({
          param: {
            description: 'Types of products which can have this attribute',
            in: 'query',
            name: 'apply_to',
            required: false,
            schema: { default: 'all_types', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postAttributeAssignGroupJsonRoute = createRoute({
  method: 'post',
  path: '/attribute.assign.group.json',
  tags: ['attribute'],
  description: 'Assign attribute to the group',
  operationId: 'AttributeAssignGroup',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'Attribute group_id',
            in: 'query',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_set_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute set id',
            in: 'query',
            name: 'attribute_set_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ assigned: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postAttributeAssignSetJsonRoute = createRoute({
  method: 'post',
  path: '/attribute.assign.set.json',
  tags: ['attribute'],
  description: 'Assign attribute to the attribute set',
  operationId: 'AttributeAssignSet',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute group_id',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attribute_set_id: z
        .string()
        .openapi({
          param: {
            description: 'Attribute set id',
            in: 'query',
            name: 'attribute_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ assigned: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAttributeAttributesetListJsonRoute = createRoute({
  method: 'get',
  path: '/attribute.attributeset.list.json',
  tags: ['attribute'],
  description: 'Get attribute_set list',
  operationId: 'AttributeAttributesetList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.array(StoreAttributeGroupSchema).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAttributeCountJsonRoute = createRoute({
  method: 'get',
  path: '/attribute.count.json',
  tags: ['attribute'],
  description: 'Get attributes count',
  operationId: 'AttributeCount',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines attribute's type",
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      visible: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter items by visibility status',
            in: 'query',
            name: 'visible',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      required: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the option is required',
            in: 'query',
            name: 'required',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      system: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'True if attribute is system',
            in: 'query',
            name: 'system',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ attributes_count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteAttributeDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/attribute.delete.json',
  tags: ['attribute'],
  description: 'Delete attribute from store',
  operationId: 'AttributeDelete',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAttributeGroupListJsonRoute = createRoute({
  method: 'get',
  path: '/attribute.group.list.json',
  tags: ['attribute'],
  description: 'Get attribute group list',
  operationId: 'AttributeGroupList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attribute_set_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute set id',
            in: 'query',
            name: 'attribute_set_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.array(StoreAttributeGroupSchema).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAttributeInfoJsonRoute = createRoute({
  method: 'get',
  path: '/attribute.info.json',
  tags: ['attribute'],
  description: 'Get attribute info',
  operationId: 'AttributeInfo',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: StoreAttributeSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAttributeListJsonRoute = createRoute({
  method: 'get',
  path: '/attribute.list.json',
  tags: ['attribute'],
  description: 'Get attributes list',
  operationId: 'AttributeList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines attribute's type",
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attribute_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter attributes by ids',
            in: 'query',
            name: 'attribute_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves attributes on specified language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,name,code,type')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,code,type', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      visible: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter items by visibility status',
            in: 'query',
            name: 'visible',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      required: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the option is required',
            in: 'query',
            name: 'required',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      system: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'True if attribute is system',
            in: 'query',
            name: 'system',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseAttributeListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getAttributeTypeListJsonRoute = createRoute({
  method: 'get',
  path: '/attribute.type.list.json',
  tags: ['attribute'],
  description: 'Get list of supported attributes types',
  operationId: 'AttributeTypeList',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ attribute_type: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postAttributeUnassignGroupJsonRoute = createRoute({
  method: 'post',
  path: '/attribute.unassign.group.json',
  tags: ['attribute'],
  description: 'Unassign attribute from group',
  operationId: 'AttributeUnassignGroup',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'Customer group_id',
            in: 'query',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ unassigned: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postAttributeUnassignSetJsonRoute = createRoute({
  method: 'post',
  path: '/attribute.unassign.set.json',
  tags: ['attribute'],
  description: 'Unassign attribute from attribute set',
  operationId: 'AttributeUnassignSet',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_set_id: z
        .string()
        .openapi({
          param: {
            description: 'Attribute set id',
            in: 'query',
            name: 'attribute_set_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ unassigned: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postAttributeUpdateJsonRoute = createRoute({
  method: 'post',
  path: '/attribute.update.json',
  tags: ['attribute'],
  description: 'Update attribute data',
  operationId: 'AttributeUpdate',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: "Defines new attributes's name",
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getBasketInfoJsonRoute = createRoute({
  method: 'get',
  path: '/basket.info.json',
  tags: ['basket'],
  description: 'Retrieve basket information.',
  operationId: 'BasketInfo',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: BasketSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postBasketItemAddJsonRoute = createRoute({
  method: 'post',
  path: '/basket.item.add.json',
  tags: ['basket'],
  description: 'Add item to basket',
  operationId: 'BasketItemAdd',
  request: {
    query: z.object({
      customer_id: z
        .string()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer id',
            in: 'query',
            name: 'customer_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines id of the product which should be added to the basket',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variant_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's variants specified by variant id",
            in: 'query',
            name: 'variant_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines new items quantity',
            in: 'query',
            name: 'quantity',
            required: false,
            schema: { default: 0, type: 'number' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ added: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postBasketLiveShippingServiceCreateJsonRoute = createRoute({
  method: 'post',
  path: '/basket.live_shipping_service.create.json',
  tags: ['basket'],
  description: 'Create live shipping rate service. (Beta)',
  operationId: 'BasketLiveShippingServiceCreate',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Shipping Service Name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      callback: z
        .string()
        .openapi({
          param: {
            description:
              'Callback url that returns shipping rates. It should be able to accept POST requests with json data.',
            in: 'query',
            name: 'callback',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ id: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteBasketLiveShippingServiceDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/basket.live_shipping_service.delete.json',
  tags: ['basket'],
  description: 'Delete live shipping rate service. (Beta)',
  operationId: 'BasketLiveShippingServiceDelete',
  request: {
    query: z.object({
      id: z
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
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getBasketLiveShippingServiceListJsonRoute = createRoute({
  method: 'get',
  path: '/basket.live_shipping_service.list.json',
  tags: ['basket'],
  description: 'Retrieve a list of live shipping rate services. (Beta)',
  operationId: 'BasketLiveShippingServiceList',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  live_shipping_services: z.array(BasketLiveShippingServiceSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postBridgeDeleteJsonRoute = createRoute({
  method: 'post',
  path: '/bridge.delete.json',
  tags: ['bridge'],
  description: 'Delete bridge from the store.',
  operationId: 'BridgeDelete',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getBridgeDownloadFileRoute = createRoute({
  method: 'get',
  path: '/bridge.download.file',
  tags: ['cart'],
  description: 'Download bridge for store',
  operationId: 'BridgeDownload',
  request: {
    query: z.object({
      whitelabel: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies if there is a necessity to download whitelabel bridge.',
            in: 'query',
            name: 'whitelabel',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postBridgeUpdateJsonRoute = createRoute({
  method: 'post',
  path: '/bridge.update.json',
  tags: ['bridge'],
  description: 'Update bridge in the store.',
  operationId: 'BridgeUpdate',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartBridgeJsonRoute = createRoute({
  method: 'get',
  path: '/cart.bridge.json',
  tags: ['cart'],
  description: 'Get bridge key and store key',
  operationId: 'CartBridge',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  bridge: z.string().exactOptional(),
                  store_key: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [] }],
})

export const getCartCatalogPriceRulesCountJsonRoute = createRoute({
  method: 'get',
  path: '/cart.catalog_price_rules.count.json',
  tags: ['cart'],
  description: 'Get count of cart catalog price rules discounts.',
  operationId: 'CartCatalogPriceRulesCount',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ catalog_price_rules_count: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartCatalogPriceRulesListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.catalog_price_rules.list.json',
  tags: ['cart'],
  description: 'Get cart catalog price rules discounts.',
  operationId: 'CartCatalogPriceRulesList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves  catalog_price_rules by ids',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,name,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCartCatalogPriceRulesListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCartClearCacheJsonRoute = createRoute({
  method: 'post',
  path: '/cart.clear_cache.json',
  tags: ['cart'],
  description: 'Clear cache on store.',
  operationId: 'CartClearCache',
  request: {
    query: z.object({
      cache_type: z
        .string()
        .openapi({
          param: {
            description: 'Defines which cache should be cleared.',
            in: 'query',
            name: 'cache_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ cache_cleared: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartConfigJsonRoute = createRoute({
  method: 'get',
  path: '/cart.config.json',
  tags: ['cart'],
  description: 'Get list of cart configs',
  operationId: 'CartConfig',
  request: {
    query: z.object({
      params: z
        .string()
        .default('store_name,store_url,db_prefix')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'store_name,store_url,db_prefix', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  db_prefix: z.string().exactOptional(),
                  store_name: z.string().exactOptional(),
                  store_url: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putCartConfigUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/cart.config.update.json',
  tags: ['cart'],
  description: 'Use this API method to update custom data in client database.',
  operationId: 'CartConfigUpdate',
  request: {
    body: { content: { 'application/json': { schema: CartConfigUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.object({}).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ api_key: [], store_key: [] }],
})

export const postCartCouponAddJsonRoute = createRoute({
  method: 'post',
  path: '/cart.coupon.add.json',
  tags: ['cart'],
  description: 'Create new coupon',
  operationId: 'CartCouponAdd',
  request: {
    body: { content: { 'application/json': { schema: CartCouponAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ coupon_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCartCouponConditionAddJsonRoute = createRoute({
  method: 'post',
  path: '/cart.coupon.condition.add.json',
  tags: ['cart'],
  description: 'Create new coupon condition',
  operationId: 'CartCouponConditionAdd',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      coupon_id: z
        .string()
        .openapi({
          param: {
            description: 'Coupon Id',
            in: 'query',
            name: 'coupon_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .default('coupon_prerequisite')
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines condition operator',
            in: 'query',
            name: 'target',
            required: false,
            schema: { default: 'coupon_prerequisite', type: 'string' },
          },
        }),
      entity: z
        .enum(['order', 'order_shipping_address', 'product', 'customer'])
        .openapi({
          param: {
            description: 'Defines condition entity type',
            in: 'query',
            name: 'entity',
            required: true,
            schema: {
              enum: ['order', 'order_shipping_address', 'product', 'customer'],
              type: 'string',
            },
          },
        }),
      key: z
        .enum([
          'total',
          'subtotal',
          'shipping_total',
          'total_quantity',
          'total_weight',
          'country',
          'product_id',
          'variant_id',
          'category_id',
          'customer_id',
          'item_price',
          'item_total_price',
          'item_quantity',
        ])
        .openapi({
          param: {
            description: 'Defines condition entity attribute key',
            in: 'query',
            name: 'key',
            required: true,
            schema: {
              enum: [
                'total',
                'subtotal',
                'shipping_total',
                'total_quantity',
                'total_weight',
                'country',
                'product_id',
                'variant_id',
                'category_id',
                'customer_id',
                'item_price',
                'item_total_price',
                'item_quantity',
              ],
              type: 'string',
            },
          },
        }),
      operator: z
        .enum(['==', '<', '<=', '>', '>=', 'ONE_OF'])
        .openapi({
          param: {
            description: 'Defines condition operator',
            in: 'query',
            name: 'operator',
            required: true,
            schema: { enum: ['==', '<', '<=', '>', '>=', 'ONE_OF'], type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description:
              'Defines condition value, can be comma separated according to the operator.',
            in: 'query',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartCouponCountJsonRoute = createRoute({
  method: 'get',
  path: '/cart.coupon.count.json',
  tags: ['cart'],
  description: 'Get cart coupons count.',
  operationId: 'CartCouponCount',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_start_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_start (greater or equal)',
            in: 'query',
            name: 'date_start_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_start_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_start (less or equal)',
            in: 'query',
            name: 'date_start_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_end_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_end (greater or equal)',
            in: 'query',
            name: 'date_end_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_end_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_end (less or equal)',
            in: 'query',
            name: 'date_end_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ coupons_count: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteCartCouponDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/cart.coupon.delete.json',
  tags: ['cart'],
  description: 'Delete coupon',
  operationId: 'CartCouponDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartCouponListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.coupon.list.json',
  tags: ['cart'],
  description: 'Get cart coupon discounts.',
  operationId: 'CartCouponList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      coupons_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter coupons by ids',
            in: 'query',
            name: 'coupons_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter coupons by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_start_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_start (greater or equal)',
            in: 'query',
            name: 'date_start_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_start_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_start (less or equal)',
            in: 'query',
            name: 'date_start_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_end_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_end (greater or equal)',
            in: 'query',
            name: 'date_end_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_end_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entity by date_end (less or equal)',
            in: 'query',
            name: 'date_end_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter coupons by avail status',
            in: 'query',
            name: 'avail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,code,name,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,code,name,description', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCartCouponListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCartCreateJsonRoute = createRoute({
  method: 'post',
  path: '/cart.create.json',
  tags: ['cart'],
  description: 'Add store to the account',
  operationId: 'CartCreate',
  request: {
    query: z.object({
      cart_id: z
        .enum([
          '3DCart',
          '3DCartApi',
          'AceShop',
          'AmazonSP',
          'Amazon',
          'AspDotNetStorefront',
          'BigcommerceApi',
          'Creloaded',
          'CommerceHQ',
          'Cscart',
          'Cubecart',
          'Demandware',
          'EBay',
          'Ecwid',
          'Etsy',
          'EtsyAPIv3',
          'Gambio',
          'Interspire',
          'JooCart',
          'Magento1212',
          'Magento2Api',
          'MijoShop',
          'Neto',
          'Opencart14',
          'LightSpeed',
          'Oscmax2',
          'Oscommerce22ms2',
          'Oxid',
          'Pinnacle',
          'Prestashop',
          'PrestashopApi',
          'SSPremium',
          'Shopify',
          'Squarespace',
          'Shopware',
          'ShopwareApi',
          'Tomatocart',
          'Ubercart',
          'Virtuemart',
          'Volusion',
          'WPecommerce',
          'Walmart',
          'WebAsyst',
          'Woocommerce',
          'WoocommerceApi',
          'Wix',
          'Xcart',
          'Xtcommerce',
          'XtcommerceVeyton',
          'Zencart137',
          'Hybris',
          'MercadoLibre',
          'Zid',
        ])
        .openapi({
          param: {
            description: 'Store’s identifier which you can get from cart_list method',
            in: 'query',
            name: 'cart_id',
            required: true,
            schema: {
              enum: [
                '3DCart',
                '3DCartApi',
                'AceShop',
                'AmazonSP',
                'Amazon',
                'AspDotNetStorefront',
                'BigcommerceApi',
                'Creloaded',
                'CommerceHQ',
                'Cscart',
                'Cubecart',
                'Demandware',
                'EBay',
                'Ecwid',
                'Etsy',
                'EtsyAPIv3',
                'Gambio',
                'Interspire',
                'JooCart',
                'Magento1212',
                'Magento2Api',
                'MijoShop',
                'Neto',
                'Opencart14',
                'LightSpeed',
                'Oscmax2',
                'Oscommerce22ms2',
                'Oxid',
                'Pinnacle',
                'Prestashop',
                'PrestashopApi',
                'SSPremium',
                'Shopify',
                'Squarespace',
                'Shopware',
                'ShopwareApi',
                'Tomatocart',
                'Ubercart',
                'Virtuemart',
                'Volusion',
                'WPecommerce',
                'Walmart',
                'WebAsyst',
                'Woocommerce',
                'WoocommerceApi',
                'Wix',
                'Xcart',
                'Xtcommerce',
                'XtcommerceVeyton',
                'Zencart137',
                'Hybris',
                'MercadoLibre',
                'Zid',
              ],
              type: 'string',
            },
          },
        }),
      store_url: z
        .string()
        .openapi({
          param: {
            description: 'A web address of a store that you would like to connect to API2Cart',
            in: 'query',
            name: 'store_url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bridge_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)',
            in: 'query',
            name: 'bridge_url',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_root: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Absolute path to the store root directory (used with "bridge_url" parameter)',
            in: 'query',
            name: 'store_root',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set this parameter if bridge is already uploaded to store',
            in: 'query',
            name: 'store_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shared_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shared secret',
            in: 'query',
            name: 'shared_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      validate_version: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify if api2cart should validate cart version',
            in: 'query',
            name: 'validate_version',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      verify: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Enables or disables cart's verification",
            in: 'query',
            name: 'verify',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      db_tables_prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DB tables prefix',
            in: 'query',
            name: 'db_tables_prefix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ftp_host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'FTP connection host',
            in: 'query',
            name: 'ftp_host',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ftp_user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'FTP User',
            in: 'query',
            name: 'ftp_user',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ftp_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'FTP Password',
            in: 'query',
            name: 'ftp_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ftp_port: z
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
            description: 'FTP Port',
            in: 'query',
            name: 'ftp_port',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      ftp_store_dir: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'FTP Store dir',
            in: 'query',
            name: 'ftp_store_dir',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiKey_3dcart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart API Key',
            in: 'query',
            name: 'apiKey_3dcart',
            required: false,
            schema: { type: 'string' },
          },
        }),
      AdminAccount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "It's a BigCommerce account for which API is enabled",
            in: 'query',
            name: 'AdminAccount',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ApiPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'BigCommerce API URL',
            in: 'query',
            name: 'ApiPath',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ApiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bigcommerce API Key',
            in: 'query',
            name: 'ApiKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Client ID of the requesting app',
            in: 'query',
            name: 'client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      accessToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'accessToken',
            required: false,
            schema: { type: 'string' },
          },
        }),
      context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API Path section unique to the store',
            in: 'query',
            name: 'context',
            required: false,
            schema: { type: 'string' },
          },
        }),
      access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiKey_shopify: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopify API Key',
            in: 'query',
            name: 'apiKey_shopify',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopify API Password',
            in: 'query',
            name: 'apiPassword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      accessToken_shopify: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Access token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'accessToken_shopify',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Neto API Key',
            in: 'query',
            name: 'apiKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiUsername: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Neto User Name',
            in: 'query',
            name: 'apiUsername',
            required: false,
            schema: { type: 'string' },
          },
        }),
      EncryptedPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Volusion API Password',
            in: 'query',
            name: 'EncryptedPassword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      Login: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "It's a Volusion account for which API is enabled",
            in: 'query',
            name: 'Login',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiUser_adnsf: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "It's a AspDotNetStorefront account for which API is available",
            in: 'query',
            name: 'apiUser_adnsf',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiPass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'AspDotNetStorefront API Password',
            in: 'query',
            name: 'apiPass',
            required: false,
            schema: { type: 'string' },
          },
        }),
      accessKey_scelite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopping Cart Elite Access Key',
            in: 'query',
            name: 'accessKey_scelite',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiKey_scelite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopping Cart Elite API Key',
            in: 'query',
            name: 'apiKey_scelite',
            required: false,
            schema: { type: 'string' },
          },
        }),
      apiSecretKey_scelite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopping Cart Elite API Secret Key',
            in: 'query',
            name: 'apiSecretKey_scelite',
            required: false,
            schema: { type: 'string' },
          },
        }),
      privateKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart Application Private Key',
            in: 'query',
            name: 'privateKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      appToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart Token from Application',
            in: 'query',
            name: 'appToken',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_keystring: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Etsy keystring',
            in: 'query',
            name: 'etsy_keystring',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_shared_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Etsy shared secret',
            in: 'query',
            name: 'etsy_shared_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tokenSecret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Secret token authorizing the app to access resources on behalf of a user',
            in: 'query',
            name: 'tokenSecret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      etsy_client_id: z
        .string()
        .openapi({
          param: {
            description: 'Etsy Client Id',
            in: 'query',
            name: 'etsy_client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      etsy_refresh_token: z
        .string()
        .openapi({
          param: {
            description: 'Etsy Refresh token',
            in: 'query',
            name: 'etsy_refresh_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ebay_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Application ID (AppID).',
            in: 'query',
            name: 'ebay_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shared Secret from eBay application',
            in: 'query',
            name: 'ebay_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_runame: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The RuName value that eBay assigns to your application.',
            in: 'query',
            name: 'ebay_runame',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to authenticate API requests.',
            in: 'query',
            name: 'ebay_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to renew the access token.',
            in: 'query',
            name: 'ebay_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_environment: z
        .string()
        .default('production')
        .exactOptional()
        .openapi({
          param: {
            description: 'eBay environment',
            in: 'query',
            name: 'ebay_environment',
            required: false,
            schema: { default: 'production', type: 'string' },
          },
        }),
      ebay_site_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'eBay global ID',
            in: 'query',
            name: 'ebay_site_id',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      dw_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware client id',
            in: 'query',
            name: 'dw_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      dw_api_pass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware api password',
            in: 'query',
            name: 'dw_api_pass',
            required: false,
            schema: { type: 'string' },
          },
        }),
      demandware_user_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware user name',
            in: 'query',
            name: 'demandware_user_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      demandware_user_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Demandware user password',
            in: 'query',
            name: 'demandware_user_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      seller_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Seller Id',
            in: 'query',
            name: 'seller_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_secret_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon Secret Key',
            in: 'query',
            name: 'amazon_secret_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      amazon_access_key_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amazon Secret Key Id',
            in: 'query',
            name: 'amazon_access_key_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      marketplaces_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated marketplaces ids',
            in: 'query',
            name: 'marketplaces_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      environment: z
        .string()
        .default('production')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'environment',
            required: false,
            schema: { default: 'production', type: 'string' },
          },
        }),
      hybris_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Omni Commerce Connector Client ID',
            in: 'query',
            name: 'hybris_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Omni Commerce Connector Client Secret',
            in: 'query',
            name: 'hybris_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User Name',
            in: 'query',
            name: 'hybris_username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User password',
            in: 'query',
            name: 'hybris_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybris_websites: z
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
            description: 'Websites to stores mapping data',
            explode: false,
            in: 'query',
            name: 'hybris_websites',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      walmart_client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart client ID',
            in: 'query',
            name: 'walmart_client_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      walmart_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart client secret',
            in: 'query',
            name: 'walmart_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      walmart_environment: z
        .string()
        .default('production')
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart environment',
            in: 'query',
            name: 'walmart_environment',
            required: false,
            schema: { default: 'production', type: 'string' },
          },
        }),
      walmart_channel_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Walmart WM_CONSUMER.CHANNEL.TYPE header',
            in: 'query',
            name: 'walmart_channel_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lightspeed_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'LightSpeed api key',
            in: 'query',
            name: 'lightspeed_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lightspeed_api_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'LightSpeed api secret',
            in: 'query',
            name: 'lightspeed_api_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopware_access_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopware access key',
            in: 'query',
            name: 'shopware_access_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopware_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopware api key',
            in: 'query',
            name: 'shopware_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shopware_api_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopware client secret access key',
            in: 'query',
            name: 'shopware_api_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      commercehq_api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CommerceHQ api key',
            in: 'query',
            name: 'commercehq_api_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      commercehq_api_password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CommerceHQ api password',
            in: 'query',
            name: 'commercehq_api_password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      '3dcart_private_key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart Private Key',
            in: 'query',
            name: '3dcart_private_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      '3dcart_access_token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '3DCart Token',
            in: 'query',
            name: '3dcart_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wc_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Woocommerce consumer key',
            in: 'query',
            name: 'wc_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wc_consumer_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Woocommerce consumer secret',
            in: 'query',
            name: 'wc_consumer_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Consumer Key',
            in: 'query',
            name: 'magento_consumer_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_consumer_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Consumer Secret',
            in: 'query',
            name: 'magento_consumer_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Access Token',
            in: 'query',
            name: 'magento_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      magento_token_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Magento Token Secret',
            in: 'query',
            name: 'magento_token_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      prestashop_webservice_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Prestashop webservice key',
            in: 'query',
            name: 'prestashop_webservice_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wix_app_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wix App ID',
            in: 'query',
            name: 'wix_app_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wix_app_secret_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wix App Secret Key',
            in: 'query',
            name: 'wix_app_secret_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wix_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wix refresh token',
            in: 'query',
            name: 'wix_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mercado_libre_app_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mercado Libre App ID',
            in: 'query',
            name: 'mercado_libre_app_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mercado_libre_app_secret_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mercado Libre App Secret Key',
            in: 'query',
            name: 'mercado_libre_app_secret_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mercado_libre_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mercado Libre Refresh Token',
            in: 'query',
            name: 'mercado_libre_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_client_id: z
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
            description: 'Zid Client ID',
            in: 'query',
            name: 'zid_client_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      zid_client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid Client Secret',
            in: 'query',
            name: 'zid_client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid Access Token',
            in: 'query',
            name: 'zid_access_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid Authorization',
            in: 'query',
            name: 'zid_authorization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      zid_refresh_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zid refresh token',
            in: 'query',
            name: 'zid_refresh_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ store_key: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ api_key: [] }],
})

export const deleteCartDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/cart.delete.json',
  tags: ['cart'],
  description: 'Remove store from API2Cart',
  operationId: 'CartDelete',
  request: {
    query: z.object({
      delete_bridge: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies if there is a necessity to delete bridge',
            in: 'query',
            name: 'delete_bridge',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ store: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartDisconnectJsonRoute = createRoute({
  method: 'get',
  path: '/cart.disconnect.json',
  tags: ['cart'],
  description: 'Disconnect with the store and clear store session data.',
  operationId: 'CartDisconnect',
  request: {
    query: z.object({
      delete_bridge: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifies if there is a necessity to delete bridge',
            in: 'query',
            name: 'delete_bridge',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ connection: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ api_key: [], store_key: [] }],
})

export const postCartGiftcardAddJsonRoute = createRoute({
  method: 'post',
  path: '/cart.giftcard.add.json',
  tags: ['cart'],
  description: 'Create new gift card',
  operationId: 'CartGiftcardAdd',
  request: {
    query: z.object({
      amount: z
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
            description: 'Defines the gift card amount value.',
            in: 'query',
            name: 'amount',
            required: true,
            schema: { type: 'number' },
          },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Gift card code',
            in: 'query',
            name: 'code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      owner_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Gift card owner email',
            in: 'query',
            name: 'owner_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      recipient_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Gift card recipient email',
            in: 'query',
            name: 'recipient_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ code: z.string().exactOptional(), id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartGiftcardCountJsonRoute = createRoute({
  method: 'get',
  path: '/cart.giftcard.count.json',
  tags: ['cart'],
  description: 'Get gift cards count.',
  operationId: 'CartGiftcardCount',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ gift_cards_count: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartGiftcardListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.giftcard.list.json',
  tags: ['cart'],
  description: 'Get gift cards list.',
  operationId: 'CartGiftcardList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,code,name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,code,name', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCartGiftCardListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartInfoJsonRoute = createRoute({
  method: 'get',
  path: '/cart.info.json',
  tags: ['cart'],
  description: 'Get cart information',
  operationId: 'CartInfo',
  request: {
    query: z.object({
      params: z
        .string()
        .default('store_name,store_url,db_prefix')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'store_name,store_url,db_prefix', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: CartSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.list.json',
  tags: ['cart'],
  description: 'Get list of supported carts',
  operationId: 'CartList',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  supported_carts: z
                    .array(
                      z
                        .object({
                          cart_id: z.string().exactOptional(),
                          cart_name: z.string().exactOptional(),
                          cart_versions: z.string().exactOptional(),
                          params: z.array(z.string()).exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ api_key: [] }],
})

export const getCartMetaDataListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.meta_data.list.json',
  tags: ['cart'],
  description: 'Get entity meta data',
  operationId: 'CartMetaDataList',
  request: {
    query: z.object({
      entity_id: z
        .string()
        .openapi({
          param: {
            description: 'Entity Id',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .default('product')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity',
            in: 'query',
            name: 'entity',
            required: false,
            schema: { default: 'product', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Key',
            in: 'query',
            name: 'key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('key,value')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'key,value', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCartMetaDataListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCartMetaDataSetJsonRoute = createRoute({
  method: 'post',
  path: '/cart.meta_data.set.json',
  tags: ['cart'],
  description: 'Set meta data for a specific entity',
  operationId: 'CartMetaDataSet',
  request: {
    query: z.object({
      entity_id: z
        .string()
        .openapi({
          param: {
            description: 'Entity Id',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .default('product')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity',
            in: 'query',
            name: 'entity',
            required: false,
            schema: { default: 'product', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'Key',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value',
            in: 'query',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'Metafield namespace',
            in: 'query',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteCartMetaDataUnsetJsonRoute = createRoute({
  method: 'delete',
  path: '/cart.meta_data.unset.json',
  tags: ['cart'],
  description: 'Unset meta data for a specific entity',
  operationId: 'CartMetaDataUnset',
  request: {
    query: z.object({
      entity_id: z
        .string()
        .openapi({
          param: {
            description: 'Entity Id',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity: z
        .string()
        .default('product')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity',
            in: 'query',
            name: 'entity',
            required: false,
            schema: { default: 'product', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'Key',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartMethodsJsonRoute = createRoute({
  method: 'get',
  path: '/cart.methods.json',
  tags: ['cart'],
  description: 'Get list of cart methods',
  operationId: 'CartMethods',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ method: z.array(z.string()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartPluginListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.plugin.list.json',
  tags: ['cart'],
  description: 'Get list of installed plugins',
  operationId: 'CartPluginList',
  request: {
    query: z.object({
      store_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set this parameter if bridge is already uploaded to store',
            in: 'query',
            name: 'store_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  all_plugins: z.int().exactOptional(),
                  plugins: z.array(PluginListSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCartScriptAddJsonRoute = createRoute({
  method: 'post',
  path: '/cart.script.add.json',
  tags: ['cart'],
  description: 'Add new script to the storefront',
  operationId: 'CartScriptAdd',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The user-friendly script name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The user-friendly description',
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      html: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An html string containing exactly one `script` tag.',
            in: 'query',
            name: 'html',
            required: false,
            schema: { type: 'string' },
          },
        }),
      src: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The URL of the remote script',
            in: 'query',
            name: 'src',
            required: false,
            schema: { type: 'string' },
          },
        }),
      load_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The load method to use for the script',
            in: 'query',
            name: 'load_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      scope: z
        .string()
        .default('storefront')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page or pages on the online store where the script should be included',
            in: 'query',
            name: 'scope',
            required: false,
            schema: { default: 'storefront', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ script_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteCartScriptDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/cart.script.delete.json',
  tags: ['cart'],
  description: 'Remove script from the storefront',
  operationId: 'CartScriptDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartScriptListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.script.list.json',
  tags: ['cart'],
  description: 'Get scripts installed to the storefront',
  operationId: 'CartScriptList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      script_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves only scripts with specific ids',
            in: 'query',
            name: 'script_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,name,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCartScriptListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartShippingZonesListJsonRoute = createRoute({
  method: 'get',
  path: '/cart.shipping_zones.list.json',
  tags: ['cart'],
  description: 'Get list of shipping zones',
  operationId: 'CartShippingZonesList',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,name,enabled')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,enabled', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: CartShippingZoneSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCartValidateJsonRoute = createRoute({
  method: 'get',
  path: '/cart.validate.json',
  tags: ['cart'],
  description:
    'Check store availability, bridge connection for the downloadable carts, identify DB prefix, validate API accesses for API carts.',
  operationId: 'CartValidate',
  request: {
    query: z.object({
      validate_version: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify if api2cart should validate cart version',
            in: 'query',
            name: 'validate_version',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCategoryAddJsonRoute = createRoute({
  method: 'post',
  path: '/category.add.json',
  tags: ['category'],
  description: 'Add new category in store',
  operationId: 'CategoryAdd',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Defines category's name that has to be added",
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      parent_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Adds categories specified by parent id',
            in: 'query',
            name: 'parent_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      stores_ids: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Create category in the stores that is specified by comma-separated stores' id",
            in: 'query',
            name: 'stores_ids',
            required: false,
            schema: { default: 0, type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      sort_order: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort number in the list',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      created_time: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Entity's date creation",
            in: 'query',
            name: 'created_time',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_time: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Entity's date modification",
            in: 'query',
            name: 'modified_time',
            required: false,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's description",
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta title for each entity',
            in: 'query',
            name: 'meta_title',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta description of a entity',
            in: 'query',
            name: 'meta_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta keywords for each entity',
            in: 'query',
            name: 'meta_keywords',
            required: false,
            schema: { type: 'string' },
          },
        }),
      seo_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines unique category's URL for SEO",
            in: 'query',
            name: 'seo_url',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ category_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCategoryAssignJsonRoute = createRoute({
  method: 'post',
  path: '/category.assign.json',
  tags: ['category'],
  description: 'Assign category to product',
  operationId: 'CategoryAssign',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category assign to the product, specified by product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category assign, specified by category id',
            in: 'query',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.object({}).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCategoryCountJsonRoute = createRoute({
  method: 'get',
  path: '/category.count.json',
  tags: ['category'],
  description: 'Count categories in store.',
  operationId: 'CategoryCount',
  request: {
    query: z.object({
      parent_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts categories specified by parent id',
            in: 'query',
            name: 'parent_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts category specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts category specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ categories_count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteCategoryDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/category.delete.json',
  tags: ['category'],
  description: 'Delete category in store',
  operationId: 'CategoryDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category removal, specified by category id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCategoryFindJsonRoute = createRoute({
  method: 'get',
  path: '/category.find.json',
  tags: ['category'],
  description: 'Search category in store. "Laptop" is specified here by default.',
  operationId: 'CategoryFind',
  request: {
    query: z.object({
      find_value: z
        .string()
        .openapi({
          param: {
            description: 'Entity search that is specified by some value',
            in: 'query',
            name: 'find_value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      find_where: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by the comma-separated unique fields',
            in: 'query',
            name: 'find_where',
            required: false,
            schema: { default: 'name', type: 'string' },
          },
        }),
      find_params: z
        .string()
        .default('whole_words')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by comma-separated parameters',
            in: 'query',
            name: 'find_params',
            required: false,
            schema: { default: 'whole_words', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  category: z
                    .array(
                      z
                        .object({
                          description: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCategoryImageAddJsonRoute = createRoute({
  method: 'post',
  path: '/category.image.add.json',
  tags: ['category'],
  description: 'Add image to category',
  operationId: 'CategoryImageAdd',
  request: {
    query: z.object({
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category id where the image should be added',
            in: 'query',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      image_name: z
        .string()
        .openapi({
          param: {
            description: "Defines image's name",
            in: 'query',
            name: 'image_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      url: z
        .string()
        .openapi({
          param: {
            description: 'Defines URL of the image that has to be added',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines alternative text that has to be attached to the picture',
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.',
            in: 'query',
            name: 'mime',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['base', 'thumbnail'])
        .openapi({
          param: {
            description: "Defines image's types that are specified by comma-separated list",
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['base', 'thumbnail'], type: 'string' },
          },
        }),
      position: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines image’s position in the list',
            in: 'query',
            name: 'position',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ image_path: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteCategoryImageDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/category.image.delete.json',
  tags: ['category'],
  description: 'Delete image',
  operationId: 'CategoryImageDelete',
  request: {
    query: z.object({
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category id where the image should be deleted',
            in: 'query',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      image_id: z
        .string()
        .openapi({
          param: {
            description: 'Define image id',
            in: 'query',
            name: 'image_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCategoryInfoJsonRoute = createRoute({
  method: 'get',
  path: '/category.info.json',
  tags: ['category'],
  description: 'Get category info about category ID*** or specify other category ID.',
  operationId: 'CategoryInfo',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "Retrieves category's info specified by category id",
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,parent_id,name,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,parent_id,name,description', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves category info  specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves category info  specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: CategorySchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCategoryListJsonRoute = createRoute({
  method: 'get',
  path: '/category.list.json',
  tags: ['category'],
  description: 'Get list of categories from store.',
  operationId: 'CategoryList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      parent_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves categories specified by parent id',
            in: 'query',
            name: 'parent_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,parent_id,name,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,parent_id,name,description', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves categories specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves categorys specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCategoryListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCategoryUnassignJsonRoute = createRoute({
  method: 'post',
  path: '/category.unassign.json',
  tags: ['category'],
  description: 'Unassign category to product',
  operationId: 'CategoryUnassign',
  request: {
    query: z.object({
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category unassign, specified by category id',
            in: 'query',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category unassign to the product, specified by product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.object({}).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putCategoryUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/category.update.json',
  tags: ['category'],
  description: 'Update category in store',
  operationId: 'CategoryUpdate',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines category update specified by category id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines new category’s name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      parent_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines new parent category id',
            in: 'query',
            name: 'parent_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      stores_ids: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Update category in the stores that is specified by comma-separated stores' id",
            in: 'query',
            name: 'stores_ids',
            required: false,
            schema: { default: 0, type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sort_order: z
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
            description: 'Sort number in the list',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      modified_time: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Entity's date modification",
            in: 'query',
            name: 'modified_time',
            required: false,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new category's description",
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta title for each entity',
            in: 'query',
            name: 'meta_title',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta description of a entity',
            in: 'query',
            name: 'meta_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta keywords for each entity',
            in: 'query',
            name: 'meta_keywords',
            required: false,
            schema: { type: 'string' },
          },
        }),
      seo_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines unique category's URL for SEO",
            in: 'query',
            name: 'seo_url',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCustomerAddJsonRoute = createRoute({
  method: 'post',
  path: '/customer.add.json',
  tags: ['customer'],
  description: 'Add customer into store.',
  operationId: 'CustomerAdd',
  request: {
    body: { content: { 'application/json': { schema: CustomerAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ customer_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCustomerAttributeListJsonRoute = createRoute({
  method: 'get',
  path: '/customer.attribute.list.json',
  tags: ['customer'],
  description: 'Get attributes for specific customer',
  operationId: 'CustomerAttributeList',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_id: z
        .string()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer id',
            in: 'query',
            name: 'customer_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCustomerAttributeListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCustomerCountJsonRoute = createRoute({
  method: 'get',
  path: '/customer.count.json',
  tags: ['customer'],
  description: 'Get number of customers from store.',
  operationId: 'CustomerCount',
  request: {
    query: z.object({
      group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Customer group_id',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts customer specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_list_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The numeric ID of the customer list in Demandware.',
            in: 'query',
            name: 'customer_list_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ customers_count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCustomerFindJsonRoute = createRoute({
  method: 'get',
  path: '/customer.find.json',
  tags: ['customer'],
  description: 'Find customers in store.',
  operationId: 'CustomerFind',
  request: {
    query: z.object({
      find_value: z
        .string()
        .openapi({
          param: {
            description: 'Entity search that is specified by some value',
            in: 'query',
            name: 'find_value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      find_where: z
        .string()
        .default('email')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by the comma-separated unique fields',
            in: 'query',
            name: 'find_where',
            required: false,
            schema: { default: 'email', type: 'string' },
          },
        }),
      find_params: z
        .string()
        .default('whole_words')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by comma-separated parameters',
            in: 'query',
            name: 'find_params',
            required: false,
            schema: { default: 'whole_words', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  email: z.string().exactOptional(),
                  first_name: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  last_name: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postCustomerGroupAddJsonRoute = createRoute({
  method: 'post',
  path: '/customer.group.add.json',
  tags: ['customer'],
  description: 'Create customer group.',
  operationId: 'CustomerGroupAdd',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Customer group name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      stores_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Assign customer group to the stores that is specified by comma-separated stores' id",
            in: 'query',
            name: 'stores_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.object({}).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCustomerGroupListJsonRoute = createRoute({
  method: 'get',
  path: '/customer.group.list.json',
  tags: ['customer'],
  description: 'Get list of customers groups.',
  operationId: 'CustomerGroupList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Groups that will be assigned to a customer',
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,name,additional_fields')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,additional_fields', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCustomerGroupListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCustomerInfoJsonRoute = createRoute({
  method: 'get',
  path: '/customer.info.json',
  tags: ['customer'],
  description: "Get customers' details from store.",
  operationId: 'CustomerInfo',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "Retrieves customer's info specified by customer id",
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,email,first_name,last_name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,email,first_name,last_name', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves customer info specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: CustomerSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getCustomerListJsonRoute = createRoute({
  method: 'get',
  path: '/customer.list.json',
  tags: ['customer'],
  description: 'Get list of customers from store.',
  operationId: 'CustomerList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,email,first_name,last_name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,email,first_name,last_name', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Customer group_id',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves customers specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_list_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The numeric ID of the customer list in Demandware.',
            in: 'query',
            name: 'customer_list_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Defines category's visibility status",
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseCustomerListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putCustomerUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/customer.update.json',
  tags: ['customer'],
  description: 'Update information of customer in store.',
  operationId: 'CustomerUpdate',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Customer group_id',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Groups that will be assigned to a customer',
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines customer's first name",
            in: 'query',
            name: 'first_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines customer's last name",
            in: 'query',
            name: 'last_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      news_letter_subscription: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines whether the newsletter subscription is available for the user',
            in: 'query',
            name: 'news_letter_subscription',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Customer tags',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_id_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the address.',
            in: 'query',
            name: 'address_book_id_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_first_name_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's first name in the address book",
            in: 'query',
            name: 'address_book_first_name_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_last_name_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's last name in the address book",
            in: 'query',
            name: 'address_book_last_name_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_company_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's company name in the address book",
            in: 'query',
            name: 'address_book_company_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_phone_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's phone number in the address book",
            in: 'query',
            name: 'address_book_phone_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_address1_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's first address in the address book",
            in: 'query',
            name: 'address_book_address1_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_address2_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's second address in the address book",
            in: 'query',
            name: 'address_book_address2_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_city_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's city in the address book",
            in: 'query',
            name: 'address_book_city_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_country_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO code or name of country',
            in: 'query',
            name: 'address_book_country_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_state_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO code or name of state.',
            in: 'query',
            name: 'address_book_state_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'address_book_postcode_{x}': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies customer's postcode",
            in: 'query',
            name: 'address_book_postcode_{x}',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderAbandonedListJsonRoute = createRoute({
  method: 'get',
  path: '/order.abandoned.list.json',
  tags: ['order'],
  description: 'Get list of orders that were left by customers before completing the order.',
  operationId: 'OrderAbandonedList',
  request: {
    query: z.object({
      customer_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer id',
            in: 'query',
            name: 'customer_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer email',
            in: 'query',
            name: 'customer_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      skip_empty_email: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter empty emails',
            in: 'query',
            name: 'skip_empty_email',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('customer,totals,items')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'customer,totals,items', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseOrderAbandonedListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postOrderAddJsonRoute = createRoute({
  method: 'post',
  path: '/order.add.json',
  tags: ['order'],
  description: 'Add a new order to the cart.',
  operationId: 'OrderAdd',
  request: {
    body: { content: { 'application/json': { schema: OrderAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ order_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderCountJsonRoute = createRoute({
  method: 'get',
  path: '/order.count.json',
  tags: ['order'],
  description: 'Count orders in store',
  operationId: 'OrderCount',
  request: {
    query: z.object({
      customer_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders quantity specified by customer id',
            in: 'query',
            name: 'customer_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders quantity specified by customer email',
            in: 'query',
            name: 'customer_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders quantity specified by order status',
            in: 'query',
            name: 'order_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_status_ids: z
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
            description: 'Retrieves orders specified by order statuses',
            explode: false,
            in: 'query',
            name: 'order_status_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders quantity specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders specified by ids',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders specified by order ids',
            in: 'query',
            name: 'order_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_order_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders quantity specified by order status',
            in: 'query',
            name: 'ebay_order_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      financial_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts orders quantity specified by financial status',
            in: 'query',
            name: 'financial_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fulfillment_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Create order with fulfillment status',
            in: 'query',
            name: 'fulfillment_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shipping_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities according to shipping method',
            in: 'query',
            name: 'shipping_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      delivery_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order with delivery method',
            in: 'query',
            name: 'delivery_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ship_node_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order with ship node type',
            in: 'query',
            name: 'ship_node_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ orders_count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderFinancialStatusListJsonRoute = createRoute({
  method: 'get',
  path: '/order.financial_status.list.json',
  tags: ['order'],
  description: 'Retrieve list of financial statuses',
  operationId: 'OrderFinancialStatusList',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  order_financial_statuses: z
                    .array(
                      z
                        .object({
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderFindJsonRoute = createRoute({
  method: 'get',
  path: '/order.find.json',
  tags: ['order'],
  description:
    'This method is deprecated and won\'t be supported in the future. Please use "order.list" instead.',
  operationId: 'OrderFind',
  request: {
    query: z.object({
      customer_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer id',
            in: 'query',
            name: 'customer_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer email',
            in: 'query',
            name: 'customer_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by order status',
            in: 'query',
            name: 'order_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('order_id,customer,totals,address,items,bundles,status')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              default: 'order_id,customer,totals,address,items,bundles,status',
              type: 'string',
            },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      financial_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by financial status',
            in: 'query',
            name: 'financial_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ order: z.array(OrderSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderFulfillmentStatusListJsonRoute = createRoute({
  method: 'get',
  path: '/order.fulfillment_status.list.json',
  tags: ['order'],
  description: 'Retrieve list of fulfillment statuses',
  operationId: 'OrderFulfillmentStatusList',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  order_fulfillment_statuses: z
                    .array(
                      z
                        .object({
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderInfoJsonRoute = createRoute({
  method: 'get',
  path: '/order.info.json',
  tags: ['order'],
  description: 'Info about a specific order by ID',
  operationId: 'OrderInfo',
  request: {
    query: z.object({
      order_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order’s info specified by order id',
            in: 'query',
            name: 'order_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order info specified by id',
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('order_id,customer,totals,address,items,bundles,status')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              default: 'order_id,customer,totals,address,items,bundles,status',
              type: 'string',
            },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines store id where the order should be found',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      enable_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If the value is 'true' and order exist in our cache, we will return order.info response from cache",
            in: 'query',
            name: 'enable_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: OrderSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderListJsonRoute = createRoute({
  method: 'get',
  path: '/order.list.json',
  tags: ['order'],
  description: 'Get list of orders from store.',
  operationId: 'OrderList',
  request: {
    query: z.object({
      customer_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer id',
            in: 'query',
            name: 'customer_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      customer_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by customer email',
            in: 'query',
            name: 'customer_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      phone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Filter orders by customer's phone number",
            in: 'query',
            name: 'phone',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by order status',
            in: 'query',
            name: 'order_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_status_ids: z
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
            description: 'Retrieves orders specified by order statuses',
            explode: false,
            in: 'query',
            name: 'order_status_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve orders via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort_by: z
        .string()
        .default('order_id')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set field to sort by',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'order_id', type: 'string' },
          },
        }),
      sort_direction: z
        .string()
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set sorting direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { default: 'asc', type: 'string' },
          },
        }),
      params: z
        .string()
        .default('order_id,customer,totals,address,items,bundles,status')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              default: 'order_id,customer,totals,address,items,bundles,status',
              type: 'string',
            },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by ids',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by order ids',
            in: 'query',
            name: 'order_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ebay_order_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by order status',
            in: 'query',
            name: 'ebay_order_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      basket_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order’s info specified by basket id.',
            in: 'query',
            name: 'basket_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      financial_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves orders specified by financial status',
            in: 'query',
            name: 'financial_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fulfillment_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Create order with fulfillment status',
            in: 'query',
            name: 'fulfillment_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shipping_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities according to shipping method',
            in: 'query',
            name: 'shipping_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      skip_order_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Skipped orders by ids',
            in: 'query',
            name: 'skip_order_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since_id: z
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
            description: 'Retrieve entities starting from the specified id.',
            in: 'query',
            name: 'since_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      is_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter deleted orders',
            in: 'query',
            name: 'is_deleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      shipping_country_iso3: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities according to shipping country',
            in: 'query',
            name: 'shipping_country_iso3',
            required: false,
            schema: { type: 'string' },
          },
        }),
      enable_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If the value is 'true', we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)",
            in: 'query',
            name: 'enable_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      delivery_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order with delivery method',
            in: 'query',
            name: 'delivery_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ship_node_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves order with ship node type',
            in: 'query',
            name: 'ship_node_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      currency_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Currency Id',
            in: 'query',
            name: 'currency_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseOrderListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postOrderPreestimateShippingListJsonRoute = createRoute({
  method: 'post',
  path: '/order.preestimate_shipping.list.json',
  tags: ['order'],
  description: 'Retrieve list of order preestimated shipping methods',
  operationId: 'OrderPreestimateShippingList',
  request: {
    body: {
      content: { 'application/json': { schema: OrderPreestimateShippingListSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseOrderPreestimateShippingListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postOrderRefundAddJsonRoute = createRoute({
  method: 'post',
  path: '/order.refund.add.json',
  tags: ['order'],
  description: 'Add a refund to the order.',
  operationId: 'OrderRefundAdd',
  request: {
    body: { content: { 'application/json': { schema: OrderRefundAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ refund_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postOrderShipmentAddJsonRoute = createRoute({
  method: 'post',
  path: '/order.shipment.add.json',
  tags: ['order'],
  description: 'Add a shipment to the order.',
  operationId: 'OrderShipmentAdd',
  request: {
    body: { content: { 'application/json': { schema: OrderShipmentAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ shipment_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteOrderShipmentDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/order.shipment.delete.json',
  tags: ['order'],
  description: "Delete order's shipment.",
  operationId: 'OrderShipmentDelete',
  request: {
    query: z.object({
      shipment_id: z
        .string()
        .openapi({
          param: {
            description: 'Shipment id indicates the number of delivery',
            in: 'query',
            name: 'shipment_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      order_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines the order for which the shipment will be deleted',
            in: 'query',
            name: 'order_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderShipmentInfoJsonRoute = createRoute({
  method: 'get',
  path: '/order.shipment.info.json',
  tags: ['order'],
  description: 'Get information of shipment.',
  operationId: 'OrderShipmentInfo',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      order_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines the order id',
            in: 'query',
            name: 'order_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,order_id,items,tracking_numbers')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,order_id,items,tracking_numbers', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseOrderShipmentListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderShipmentListJsonRoute = createRoute({
  method: 'get',
  path: '/order.shipment.list.json',
  tags: ['order'],
  description: 'Get list of shipments by orders.',
  operationId: 'OrderShipmentList',
  request: {
    query: z.object({
      order_id: z
        .string()
        .openapi({
          param: {
            description: 'Retrieves shipments specified by order id',
            in: 'query',
            name: 'order_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,order_id,items,tracking_numbers')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,order_id,items,tracking_numbers', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseOrderShipmentListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postOrderShipmentTrackingAddJsonRoute = createRoute({
  method: 'post',
  path: '/order.shipment.tracking.add.json',
  tags: ['order'],
  description: "Add order shipment's tracking info.",
  operationId: 'OrderShipmentTrackingAdd',
  request: {
    body: {
      content: { 'application/json': { schema: OrderShipmentTrackingAddSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ tracking_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putOrderShipmentUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/order.shipment.update.json',
  tags: ['order'],
  description: "Update order's shipment information.",
  operationId: 'OrderShipmentUpdate',
  request: {
    body: {
      content: { 'application/json': { schema: OrderShipmentUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderStatusListJsonRoute = createRoute({
  method: 'get',
  path: '/order.status.list.json',
  tags: ['order'],
  description: 'Retrieve list of statuses',
  operationId: 'OrderStatusList',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  cart_order_statuses: z
                    .array(
                      z
                        .object({
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getOrderTransactionListJsonRoute = createRoute({
  method: 'get',
  path: '/order.transaction.list.json',
  tags: ['order'],
  description: 'Retrieve list of order transaction',
  operationId: 'OrderTransactionList',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      order_ids: z
        .string()
        .openapi({
          param: {
            description: 'Retrieves order transactions specified by order ids',
            in: 'query',
            name: 'order_ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,order_id,amount,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,order_id,amount,description', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseOrderTransactionListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putOrderUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/order.update.json',
  tags: ['order'],
  description: 'Update existing order.',
  operationId: 'OrderUpdate',
  request: {
    query: z.object({
      order_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines the orders specified by order id',
            in: 'query',
            name: 'order_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines store id where the order should be found',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new order's status",
            in: 'query',
            name: 'order_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      comment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies order comment',
            in: 'query',
            name: 'comment',
            required: false,
            schema: { type: 'string' },
          },
        }),
      admin_comment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies admin's order comment",
            in: 'query',
            name: 'admin_comment',
            required: false,
            schema: { type: 'string' },
          },
        }),
      admin_private_comment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies private admin's order comment",
            in: 'query',
            name: 'admin_private_comment',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_modified: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies order's  modification date",
            in: 'query',
            name: 'date_modified',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_finished: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies order's  finished date",
            in: 'query',
            name: 'date_finished',
            required: false,
            schema: { type: 'string' },
          },
        }),
      financial_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Update order financial status to specified',
            in: 'query',
            name: 'financial_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fulfillment_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Create order with fulfillment status',
            in: 'query',
            name: 'fulfillment_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_payment_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'",
            in: 'query',
            name: 'order_payment_method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      send_notifications: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Send notifications to customer after order was created',
            in: 'query',
            name: 'send_notifications',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.add.json',
  tags: ['product'],
  description: 'Add new product to store.',
  operationId: 'ProductAdd',
  request: {
    body: { content: { 'application/json': { schema: ProductAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ product_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductAttributeListJsonRoute = createRoute({
  method: 'get',
  path: '/product.attribute.list.json',
  tags: ['product'],
  description: 'Get list of attributes and values.',
  operationId: 'ProductAttributeList',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Retrieves attributes specified by product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves info for specified attribute_id',
            in: 'query',
            name: 'attribute_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      variant_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's variants specified by variant id",
            in: 'query',
            name: 'variant_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      attribute_group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by attribute_group_id',
            in: 'query',
            name: 'attribute_group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      set_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves attributes specified by set_name in Magento',
            in: 'query',
            name: 'set_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves attributes specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves attributes specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort_by: z
        .string()
        .default('attribute_id')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set field to sort by',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'attribute_id', type: 'string' },
          },
        }),
      sort_direction: z
        .string()
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set sorting direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { default: 'asc', type: 'string' },
          },
        }),
      params: z
        .string()
        .default('attribute_id,name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'attribute_id,name', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseProductAttributeListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductAttributeValueSetJsonRoute = createRoute({
  method: 'post',
  path: '/product.attribute.value.set.json',
  tags: ['product'],
  description: 'Set attribute value to product.',
  operationId: 'ProductAttributeValueSet',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the attribute should be added',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by attribute_id',
            in: 'query',
            name: 'attribute_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attribute_group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by attribute_group_id',
            in: 'query',
            name: 'attribute_group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attribute_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Define attribute name',
            in: 'query',
            name: 'attribute_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Define attribute value',
            in: 'query',
            name: 'value',
            required: false,
            schema: { type: 'string' },
          },
        }),
      value_id: z
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
            description: 'Define attribute value id',
            in: 'query',
            name: 'value_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  attribute_id: z.string().exactOptional(),
                  product_id: z.string().exactOptional(),
                  value_id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductAttributeValueUnsetJsonRoute = createRoute({
  method: 'post',
  path: '/product.attribute.value.unset.json',
  tags: ['product'],
  description: 'Removes attribute value for a product.',
  operationId: 'ProductAttributeValueUnset',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attribute_id: z
        .string()
        .openapi({
          param: {
            description: 'Attribute Id',
            in: 'query',
            name: 'attribute_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_default: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean, whether or not to unset default value of the attribute, if applicable',
            in: 'query',
            name: 'include_default',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      reindex: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is reindex required',
            in: 'query',
            name: 'reindex',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ success: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductBrandListJsonRoute = createRoute({
  method: 'get',
  path: '/product.brand.list.json',
  tags: ['product'],
  description: 'Get list of brands from your store.',
  operationId: 'ProductBrandList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,name,short_description,active,url')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,short_description,active,url', type: 'string' },
          },
        }),
      brand_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves brands specified by brand ids',
            in: 'query',
            name: 'brand_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ product: z.array(BrandSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductChildItemFindJsonRoute = createRoute({
  method: 'get',
  path: '/product.child_item.find.json',
  tags: ['product'],
  description:
    'Search product child item (bundled item or configurable product variant) in store catalog.',
  operationId: 'ProductChildItemFind',
  request: {
    query: z.object({
      find_value: z
        .string()
        .openapi({
          param: {
            description: 'Entity search that is specified by some value',
            in: 'query',
            name: 'find_value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      find_where: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by the comma-separated unique fields',
            in: 'query',
            name: 'find_where',
            required: false,
            schema: { default: 'name', type: 'string' },
          },
        }),
      find_params: z
        .string()
        .default('whole_words')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by comma-separated parameters',
            in: 'query',
            name: 'find_params',
            required: false,
            schema: { default: 'whole_words', type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  children: z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (Array.isArray(val)) {
                        {
                          const Schema = ChildSchema
                          for (let i = 0; i < val.length; i++) {
                            if (!Schema.safeParse(val[i]).success) {
                              ctx.addIssue({ code: 'custom' })
                            }
                          }
                        }
                      }
                    })
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductChildItemInfoJsonRoute = createRoute({
  method: 'get',
  path: '/product.child_item.info.json',
  tags: ['product'],
  description: 'Get child for specific product.',
  operationId: 'ProductChildItemInfo',
  request: {
    query: z.object({
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Filter by parent product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      currency_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Currency Id',
            in: 'query',
            name: 'currency_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: ChildSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductChildItemListJsonRoute = createRoute({
  method: 'get',
  path: '/product.child_item.list.json',
  tags: ['product'],
  description: 'Get child items list of specific product(s).',
  operationId: 'ProductChildItemList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve products child items via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by parent product id',
            in: 'query',
            name: 'product_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by parent product ids',
            in: 'query',
            name: 'product_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      currency_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Currency Id',
            in: 'query',
            name: 'currency_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail_sale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of available/not available products for sale',
            in: 'query',
            name: 'avail_sale',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      report_request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Report request id',
            in: 'query',
            name: 'report_request_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disable_report_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable report cache for current request',
            in: 'query',
            name: 'disable_report_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseProductChildItemListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductCountJsonRoute = createRoute({
  method: 'get',
  path: '/product.count.json',
  tags: ['product'],
  description: 'Count products in store.',
  operationId: 'ProductCount',
  request: {
    query: z.object({
      category_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts products specified by category id',
            in: 'query',
            name: 'category_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail_view: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of visible/invisible products',
            in: 'query',
            name: 'avail_view',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      avail_sale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of available/not available products for sale',
            in: 'query',
            name: 'avail_sale',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts products specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts products specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts products specified by product ids',
            in: 'query',
            name: 'product_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      report_request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Report request id',
            in: 'query',
            name: 'report_request_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disable_report_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable report cache for current request',
            in: 'query',
            name: 'disable_report_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      brand_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves brands specified by brand name',
            in: 'query',
            name: 'brand_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_attributes: z
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
            description: 'Defines product attributes',
            explode: false,
            in: 'query',
            name: 'product_attributes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's status",
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines products's type",
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ products_count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductCurrencyAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.currency.add.json',
  tags: ['product'],
  description: 'Add currency and/or set default in store',
  operationId: 'ProductCurrencyAdd',
  request: {
    query: z.object({
      iso3: z
        .string()
        .openapi({
          param: {
            description: 'Specifies standardized currency code',
            in: 'query',
            name: 'iso3',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rate: z
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
            description: 'Defines the numerical identifier against to the major currency',
            in: 'query',
            name: 'rate',
            required: true,
            schema: { type: 'number' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines currency's name",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies whether the currency is available',
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      symbol_left: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the symbol that is located before the currency',
            in: 'query',
            name: 'symbol_left',
            required: false,
            schema: { type: 'string' },
          },
        }),
      symbol_right: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the symbol that is located after the currency',
            in: 'query',
            name: 'symbol_right',
            required: false,
            schema: { type: 'string' },
          },
        }),
      default: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies currency's default meaning",
            in: 'query',
            name: 'default',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ currency_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductCurrencyListJsonRoute = createRoute({
  method: 'get',
  path: '/product.currency.list.json',
  tags: ['product'],
  description: 'Get list of currencies',
  operationId: 'ProductCurrencyList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('name,iso3,default,avail')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'name,iso3,default,avail', type: 'string' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      default: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of default/not default currencies',
            in: 'query',
            name: 'default',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      avail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of available/not available currencies',
            in: 'query',
            name: 'avail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ currency: z.array(CurrencySchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteProductDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/product.delete.json',
  tags: ['product'],
  description: 'Product delete',
  operationId: 'ProductDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Product id that will be removed',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ delete_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductFieldsJsonRoute = createRoute({
  method: 'get',
  path: '/product.fields.json',
  tags: ['product'],
  description: 'Retrieve all available fields for product item in store.',
  operationId: 'ProductFields',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z.object({}).exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductFindJsonRoute = createRoute({
  method: 'get',
  path: '/product.find.json',
  tags: ['product'],
  description: 'Search product in store catalog. "Apple" is specified here by default.',
  operationId: 'ProductFind',
  request: {
    query: z.object({
      find_value: z
        .string()
        .openapi({
          param: {
            description: 'Entity search that is specified by some value',
            in: 'query',
            name: 'find_value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      find_where: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by the comma-separated unique fields',
            in: 'query',
            name: 'find_where',
            required: false,
            schema: { default: 'name', type: 'string' },
          },
        }),
      find_params: z
        .string()
        .default('whole_words')
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity search that is specified by comma-separated parameters',
            in: 'query',
            name: 'find_params',
            required: false,
            schema: { default: 'whole_words', type: 'string' },
          },
        }),
      find_what: z
        .string()
        .default('product')
        .exactOptional()
        .openapi({
          param: {
            description: "Parameter's value specifies the entity that has to be found",
            in: 'query',
            name: 'find_what',
            required: false,
            schema: { default: 'product', type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search products specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  product: z
                    .array(
                      z
                        .object({
                          description: z.string().exactOptional(),
                          id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          price: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductImageAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.image.add.json',
  tags: ['product'],
  description: 'Add image to product',
  operationId: 'ProductImageAdd',
  request: {
    body: { content: { 'application/json': { schema: ProductImageAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ id: z.string().exactOptional(), image_path: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteProductImageDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/product.image.delete.json',
  tags: ['product'],
  description: 'Delete image',
  operationId: 'ProductImageDelete',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the image should be deleted',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putProductImageUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/product.image.update.json',
  tags: ['product'],
  description: 'Update details of image',
  operationId: 'ProductImageUpdate',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the image should be updated',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      image_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines image's name",
            in: 'query',
            name: 'image_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .default('additional')
        .exactOptional()
        .openapi({
          param: {
            description: "Defines image's types that are specified by comma-separated list",
            in: 'query',
            name: 'type',
            required: false,
            schema: { default: 'additional', type: 'string' },
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines alternative text that has to be attached to the picture',
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'string' },
          },
        }),
      position: z
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
            description: 'Defines image’s position in the list',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines image update specified by image id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Define is hide image',
            in: 'query',
            name: 'hidden',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductInfoJsonRoute = createRoute({
  method: 'get',
  path: '/product.info.json',
  tags: ['product'],
  description: 'Get product info about product ID *** or specify other product ID.',
  operationId: 'ProductInfo',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "Retrieves product's info specified by product id",
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('id,name,description,price,categories_ids')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description,price,categories_ids', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves product info specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves product info specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      currency_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Currency Id',
            in: 'query',
            name: 'currency_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      report_request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Report request id',
            in: 'query',
            name: 'report_request_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disable_report_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable report cache for current request',
            in: 'query',
            name: 'disable_report_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: ProductSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductListJsonRoute = createRoute({
  method: 'get',
  path: '/product.list.json',
  tags: ['product'],
  description: 'Get list of products from your store. Returns 10 products by default.',
  operationId: 'ProductList',
  request: {
    query: z.object({
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve products via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,name,description,price,categories_ids')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description,price,categories_ids', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves products specified by category id',
            in: 'query',
            name: 'category_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail_view: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of visible/invisible products',
            in: 'query',
            name: 'avail_view',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      avail_sale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the set of available/not available products for sale',
            in: 'query',
            name: 'avail_sale',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves products specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves products specified by language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      currency_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Currency Id',
            in: 'query',
            name: 'currency_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves products specified by product ids',
            in: 'query',
            name: 'product_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since_id: z
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
            description: 'Retrieve entities starting from the specified id.',
            in: 'query',
            name: 'since_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      report_request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Report request id',
            in: 'query',
            name: 'report_request_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disable_report_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable report cache for current request',
            in: 'query',
            name: 'disable_report_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sort_by: z
        .string()
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set field to sort by',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'id', type: 'string' },
          },
        }),
      sort_direction: z
        .string()
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set sorting direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { default: 'asc', type: 'string' },
          },
        }),
      sku: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Filter by product's sku",
            in: 'query',
            name: 'sku',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disable_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable cache for current request',
            in: 'query',
            name: 'disable_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      brand_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves brands specified by brand name',
            in: 'query',
            name: 'brand_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_attributes: z
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
            description: 'Defines product attributes',
            explode: false,
            in: 'query',
            name: 'product_attributes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's status",
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines products's type",
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ModelResponseProductListSchema } },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductManufacturerAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.manufacturer.add.json',
  tags: ['product'],
  description: 'Add manufacturer to store and assign to product',
  operationId: 'ProductManufacturerAdd',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines products specified by product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      manufacturer: z
        .string()
        .openapi({
          param: {
            description: "Defines product’s manufacturer's name",
            in: 'query',
            name: 'manufacturer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ manufacturer_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductOptionAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.option.add.json',
  tags: ['product'],
  description: 'Add product option from store.',
  operationId: 'ProductOptionAdd',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Defines option's name",
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum([
          'option_type_select',
          'option_type_text',
          'option_type_radio',
          'option_type_checkbox',
          'option_type_textarea',
          'option_type_readonly',
          'option_type_multiselect',
          'option_type_multicheckbox',
          'option_type_file',
          'option_type_date',
          'option_type_datetime',
          'option_type_time',
        ])
        .openapi({
          param: {
            description: "Defines option's type that has to be added",
            in: 'query',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'option_type_select',
                'option_type_text',
                'option_type_radio',
                'option_type_checkbox',
                'option_type_textarea',
                'option_type_readonly',
                'option_type_multiselect',
                'option_type_multicheckbox',
                'option_type_file',
                'option_type_date',
                'option_type_datetime',
                'option_type_time',
              ],
              type: 'string',
            },
          },
        }),
      product_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines product id where the option should be added',
            in: 'query',
            name: 'product_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      default_option_value: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines default option value that has to be added',
            in: 'query',
            name: 'default_option_value',
            required: false,
            schema: { type: 'string' },
          },
        }),
      option_values: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines option values that has to be added',
            in: 'query',
            name: 'option_values',
            required: false,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines option's description",
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      avail: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines whether the option is available',
            in: 'query',
            name: 'avail',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      sort_order: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort number in the list',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      required: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the option is required',
            in: 'query',
            name: 'required',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  option_id: z.string().exactOptional(),
                  product_option_id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductOptionAssignJsonRoute = createRoute({
  method: 'post',
  path: '/product.option.assign.json',
  tags: ['product'],
  description: 'Assign option from product.',
  operationId: 'ProductOptionAssign',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the option should be assigned',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      option_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines option id which has to be assigned',
            in: 'query',
            name: 'option_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      required: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the option is required',
            in: 'query',
            name: 'required',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sort_order: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort number in the list',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      option_values: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines option values that has to be assigned',
            in: 'query',
            name: 'option_values',
            required: false,
            schema: { type: 'string' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ product_option_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductOptionListJsonRoute = createRoute({
  method: 'get',
  path: '/product.option.list.json',
  tags: ['product'],
  description: 'Get list of options.',
  operationId: 'ProductOptionList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,name,description')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Retrieves products' options specified by product id",
            in: 'query',
            name: 'product_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ option: z.array(ProductOptionSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductOptionValueAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.option.value.add.json',
  tags: ['product'],
  description: 'Add product option item from option.',
  operationId: 'ProductOptionValueAdd',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the option value should be added',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      option_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines option id where the value has to be added',
            in: 'query',
            name: 'option_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      option_value: z
        .string()
        .openapi({
          param: {
            description: 'Defines option value that has to be added',
            in: 'query',
            name: 'option_value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort_order: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort number in the list',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ option_value_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductOptionValueAssignJsonRoute = createRoute({
  method: 'post',
  path: '/product.option.value.assign.json',
  tags: ['product'],
  description: 'Assign product option item from product.',
  operationId: 'ProductOptionValueAssign',
  request: {
    query: z.object({
      product_option_id: z
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
            description: "Defines product's option id where the value has to be assigned",
            in: 'query',
            name: 'product_option_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      option_value_id: z
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
            description: 'Defines value id that has to be assigned',
            in: 'query',
            name: 'option_value_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ product_option_value_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putProductOptionValueUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/product.option.value.update.json',
  tags: ['product'],
  description: 'Update product option item from option.',
  operationId: 'ProductOptionValueUpdate',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the option value should be updated',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      option_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines option id where the value has to be updated',
            in: 'query',
            name: 'option_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      option_value_id: z
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
            description: 'Defines value id that has to be assigned',
            in: 'query',
            name: 'option_value_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      option_value: z
        .string()
        .openapi({
          param: {
            description: 'Defines option value that has to be added',
            in: 'query',
            name: 'option_value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines new product option price',
            in: 'query',
            name: 'price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new products' options quantity",
            in: 'query',
            name: 'quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductPriceAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.price.add.json',
  tags: ['product'],
  description: 'Add some prices to the product.',
  operationId: 'ProductPriceAdd',
  request: {
    body: { content: { 'application/json': { schema: ProductPriceAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteProductPriceDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/product.price.delete.json',
  tags: ['product'],
  description: 'Delete some prices of the product',
  operationId: 'ProductPriceDelete',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines the product where the price has to be deleted',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_prices: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's group prices",
            in: 'query',
            name: 'group_prices',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putProductPriceUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/product.price.update.json',
  tags: ['product'],
  description: 'Update some prices of the product.',
  operationId: 'ProductPriceUpdate',
  request: {
    body: { content: { 'application/json': { schema: ProductPriceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductReviewListJsonRoute = createRoute({
  method: 'get',
  path: '/product.review.list.json',
  tags: ['product'],
  description: 'Get reviews of a specific product.',
  operationId: 'ProductReviewList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Product id',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves reviews specified by ids',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines status',
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default(
          'id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time',
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              default:
                'id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time',
              type: 'string',
            },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  reviews: z.array(ProductReviewSchema).exactOptional(),
                  total_count: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductStoreAssignJsonRoute = createRoute({
  method: 'post',
  path: '/product.store.assign.json',
  tags: ['product'],
  description: 'Assign product to store',
  operationId: 'ProductStoreAssign',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines id of the product which should be assigned to a store',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines id of the store product should be assigned to',
            in: 'query',
            name: 'store_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductTaxAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.tax.add.json',
  tags: ['product'],
  description: 'Add tax class and tax rate to store and assign to product.',
  operationId: 'ProductTaxAdd',
  request: {
    body: { content: { 'application/json': { schema: ProductTaxAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ tax_class_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putProductUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/product.update.json',
  tags: ['product'],
  description: 'Update price and quantity for a specific product',
  operationId: 'ProductUpdate',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id that has to be updated',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines product model that has to be updated',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      old_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's old price",
            in: 'query',
            name: 'old_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's price",
            in: 'query',
            name: 'price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      special_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's special price",
            in: 'query',
            name: 'special_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      sprice_create: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the date of special price creation',
            in: 'query',
            name: 'sprice_create',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sprice_expire: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the term of special price offer duration',
            in: 'query',
            name: 'sprice_expire',
            required: false,
            schema: { type: 'string' },
          },
        }),
      cost_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's cost price",
            in: 'query',
            name: 'cost_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      retail_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's retail price",
            in: 'query',
            name: 'retail_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's quantity",
            in: 'query',
            name: 'quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      weight: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Weight',
            in: 'query',
            name: 'weight',
            required: false,
            schema: { type: 'number' },
          },
        }),
      increase_quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the incremental changes in product quantity',
            in: 'query',
            name: 'increase_quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      reduce_quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the decrement changes in product quantity',
            in: 'query',
            name: 'reduce_quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      warehouse_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter is used for selecting a warehouse where you need to set/modify a product quantity.',
            in: 'query',
            name: 'warehouse_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      reserve_quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter allows to reserve/unreserve product quantity.',
            in: 'query',
            name: 'reserve_quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      manage_stock: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines inventory tracking for product',
            in: 'query',
            name: 'manage_stock',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      backorder_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set backorder status',
            in: 'query',
            name: 'backorder_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's name that has to be updated",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sku: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's sku",
            in: 'query',
            name: 'sku',
            required: false,
            schema: { type: 'string' },
          },
        }),
      visible: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set visibility status',
            in: 'query',
            name: 'visible',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manufacturer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's manufacturer",
            in: 'query',
            name: 'manufacturer',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manufacturer_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's manufacturer by manufacturer_id",
            in: 'query',
            name: 'manufacturer_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      categories_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines product add that is specified by comma-separated categories id',
            in: 'query',
            name: 'categories_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's description",
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines short description',
            in: 'query',
            name: 'short_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta title for each entity',
            in: 'query',
            name: 'meta_title',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta keywords for each entity',
            in: 'query',
            name: 'meta_keywords',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta description of a entity',
            in: 'query',
            name: 'meta_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines store id where the product should be found',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      in_stock: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set stock status',
            in: 'query',
            name: 'in_stock',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's status",
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      seo_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique URL for SEO',
            in: 'query',
            name: 'seo_url',
            required: false,
            schema: { type: 'string' },
          },
        }),
      report_request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Report request id',
            in: 'query',
            name: 'report_request_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disable_report_cache: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable report cache for current request',
            in: 'query',
            name: 'disable_report_cache',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      reindex: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is reindex required',
            in: 'query',
            name: 'reindex',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product tags',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      gtin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Global Trade Item Number. An GTIN is an identifier for trade items.',
            in: 'query',
            name: 'gtin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      taxable: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies whether a tax is charged',
            in: 'query',
            name: 'taxable',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      product_class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A categorization for the product',
            in: 'query',
            name: 'product_class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's height",
            in: 'query',
            name: 'height',
            required: false,
            schema: { type: 'number' },
          },
        }),
      length: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's length",
            in: 'query',
            name: 'length',
            required: false,
            schema: { type: 'number' },
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's width",
            in: 'query',
            name: 'width',
            required: false,
            schema: { type: 'number' },
          },
        }),
      harmonized_system_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes',
            in: 'query',
            name: 'harmonized_system_code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      country_of_origin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The country where the inventory item was made',
            in: 'query',
            name: 'country_of_origin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      search_keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique search keywords',
            in: 'query',
            name: 'search_keywords',
            required: false,
            schema: { type: 'string' },
          },
        }),
      barcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A barcode is a unique code composed of numbers used as a product identifier.',
            in: 'query',
            name: 'barcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductVariantAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.variant.add.json',
  tags: ['product'],
  description: 'Add variant to product.',
  operationId: 'ProductVariantAdd',
  request: {
    body: { content: { 'application/json': { schema: ProductVariantAddSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ product_variant_id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductVariantCountJsonRoute = createRoute({
  method: 'get',
  path: '/product.variant.count.json',
  tags: ['product'],
  description: 'Get count variants.',
  operationId: 'ProductVariantCount',
  request: {
    query: z.object({
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Counts products’ variants specified by category id',
            in: 'query',
            name: 'category_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: "Retrieves products' variants specified by product id",
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves variants specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ variants_count: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteProductVariantDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/product.variant.delete.json',
  tags: ['product'],
  description: 'Delete variant.',
  operationId: 'ProductVariantDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines variant removal, specified by variant id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: "Defines product's id where the variant has to be deleted",
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductVariantImageAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.variant.image.add.json',
  tags: ['product'],
  description: 'Add image to product',
  operationId: 'ProductVariantImageAdd',
  request: {
    body: {
      content: { 'application/json': { schema: ProductVariantImageAddSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ id: z.string().exactOptional(), image_path: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteProductVariantImageDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/product.variant.image.delete.json',
  tags: ['product'],
  description: 'Delete  image to product',
  operationId: 'ProductVariantImageDelete',
  request: {
    query: z.object({
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Defines product id where the variant image should be deleted',
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      product_variant_id: z
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
            description: "Defines product's variants specified by variant id",
            in: 'query',
            name: 'product_variant_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entity id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductVariantInfoJsonRoute = createRoute({
  method: 'get',
  path: '/product.variant.info.json',
  tags: ['product'],
  description: 'Get variant info.',
  operationId: 'ProductVariantInfo',
  request: {
    query: z.object({
      params: z
        .string()
        .default('id,name,description,price')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description,price', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: "Retrieves variant's info specified by variant id",
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves variant info specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: ProductSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getProductVariantListJsonRoute = createRoute({
  method: 'get',
  path: '/product.variant.list.json',
  tags: ['product'],
  description: 'Get list variants.',
  operationId: 'ProductVariantList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      params: z
        .string()
        .default('id,name,description,price')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,name,description,price', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves products’ variants specified by category id',
            in: 'query',
            name: 'category_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Retrieves products' variants specified by product id",
            in: 'query',
            name: 'product_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves variants specified by store id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ variant: z.array(ProductSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postProductVariantPriceAddJsonRoute = createRoute({
  method: 'post',
  path: '/product.variant.price.add.json',
  tags: ['product'],
  description: 'Add some prices to the product variant.',
  operationId: 'ProductVariantPriceAdd',
  request: {
    body: {
      content: { 'application/json': { schema: ProductVariantPriceAddSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ status: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteProductVariantPriceDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/product.variant.price.delete.json',
  tags: ['product'],
  description: 'Delete some prices of the product variant.',
  operationId: 'ProductVariantPriceDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines the variant where the price has to be deleted',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_prices: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines variants's group prices",
            in: 'query',
            name: 'group_prices',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putProductVariantPriceUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/product.variant.price.update.json',
  tags: ['product'],
  description: 'Update some prices of the product variant.',
  operationId: 'ProductVariantPriceUpdate',
  request: {
    body: {
      content: { 'application/json': { schema: ProductVariantPriceUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putProductVariantUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/product.variant.update.json',
  tags: ['product'],
  description: 'Update variant.',
  operationId: 'ProductVariantUpdate',
  request: {
    query: z.object({
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines store id where the variant should be found',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defines variant update specified by variant id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: "Defines product's id where the variant has to be updated",
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      warehouse_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter is used for selecting a warehouse where you need to set/modify a product quantity.',
            in: 'query',
            name: 'warehouse_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      reserve_quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter allows to reserve/unreserve product variants quantity.',
            in: 'query',
            name: 'reserve_quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new products' variants quantity",
            in: 'query',
            name: 'quantity',
            required: false,
            schema: { type: 'number' },
          },
        }),
      increase_quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the incremental changes in product quantity',
            in: 'query',
            name: 'increase_quantity',
            required: false,
            schema: { default: 0, type: 'number' },
          },
        }),
      reduce_quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the decrement changes in product quantity',
            in: 'query',
            name: 'reduce_quantity',
            required: false,
            schema: { default: 0, type: 'number' },
          },
        }),
      price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's variant price",
            in: 'query',
            name: 'price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      special_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's variant special price",
            in: 'query',
            name: 'special_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      retail_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's retail price",
            in: 'query',
            name: 'retail_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      old_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's old price",
            in: 'query',
            name: 'old_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      cost_price: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's cost price",
            in: 'query',
            name: 'cost_price',
            required: false,
            schema: { type: 'number' },
          },
        }),
      sprice_create: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the date of special price creation',
            in: 'query',
            name: 'sprice_create',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sprice_expire: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the term of special price offer duration',
            in: 'query',
            name: 'sprice_expire',
            required: false,
            schema: { type: 'string' },
          },
        }),
      manage_stock: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines inventory tracking for product variant',
            in: 'query',
            name: 'manage_stock',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      in_stock: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set stock status',
            in: 'query',
            name: 'in_stock',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines variant's name that has to be updated",
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies variant's description",
            in: 'query',
            name: 'description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sku: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines new product's variant sku",
            in: 'query',
            name: 'sku',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta title for each entity',
            in: 'query',
            name: 'meta_title',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta description of a entity',
            in: 'query',
            name: 'meta_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      meta_keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines unique meta keywords for each entity',
            in: 'query',
            name: 'meta_keywords',
            required: false,
            schema: { type: 'string' },
          },
        }),
      short_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines short description',
            in: 'query',
            name: 'short_description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      visible: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set visibility status',
            in: 'query',
            name: 'visible',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product variant's status",
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      backorder_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set backorder status',
            in: 'query',
            name: 'backorder_status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      weight: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Weight',
            in: 'query',
            name: 'weight',
            required: false,
            schema: { default: 0, type: 'number' },
          },
        }),
      barcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A barcode is a unique code composed of numbers used as a product identifier.',
            in: 'query',
            name: 'barcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      reindex: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is reindex required',
            in: 'query',
            name: 'reindex',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      taxable: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies whether a tax is charged',
            in: 'query',
            name: 'taxable',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      options: z
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
            description: "Defines variant's options list",
            explode: false,
            in: 'query',
            name: 'options',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      harmonized_system_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes',
            in: 'query',
            name: 'harmonized_system_code',
            required: false,
            schema: { type: 'string' },
          },
        }),
      country_of_origin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The country where the inventory item was made',
            in: 'query',
            name: 'country_of_origin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's width",
            in: 'query',
            name: 'width',
            required: false,
            schema: { type: 'number' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's height",
            in: 'query',
            name: 'height',
            required: false,
            schema: { type: 'number' },
          },
        }),
      length: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Defines product's length",
            in: 'query',
            name: 'length',
            required: false,
            schema: { type: 'number' },
          },
        }),
      gtin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Global Trade Item Number. An GTIN is an identifier for trade items.',
            in: 'query',
            name: 'gtin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      clear_cache: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is cache clear required',
            in: 'query',
            name: 'clear_cache',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies variant's model that has to be added",
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      available_for_sale: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "Specifies the set of visible/invisible product's variants for sale",
            in: 'query',
            name: 'available_for_sale',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated_items: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getSubscriberListJsonRoute = createRoute({
  method: 'get',
  path: '/subscriber.list.json',
  tags: ['subscriber'],
  description: 'Get subscribers list',
  operationId: 'SubscriberList',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      subscribed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by subscription status',
            in: 'query',
            name: 'subscribed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter subscribers by email',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their creation date',
            in: 'query',
            name: 'created_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their creation date',
            in: 'query',
            name: 'created_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities from their modification date',
            in: 'query',
            name: 'modified_from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modified_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve entities to their modification date',
            in: 'query',
            name: 'modified_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)",
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  subscribers: z.array(SubscriberSchema).exactOptional(),
                  total_count: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getTaxClassInfoJsonRoute = createRoute({
  method: 'get',
  path: '/tax.class.info.json',
  tags: ['tax'],
  description: 'Get info about tax',
  operationId: 'TaxClassInfo',
  request: {
    query: z.object({
      tax_class_id: z
        .string()
        .openapi({
          param: {
            description: 'Retrieves taxes specified by class id',
            in: 'query',
            name: 'tax_class_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Store Id',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language id',
            in: 'query',
            name: 'lang_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      params: z
        .string()
        .default('tax_class_id,name,avail')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'tax_class_id,name,avail', type: 'string' },
          },
        }),
      response_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all',
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: TaxClassSchema.exactOptional(),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getWebhookCountJsonRoute = createRoute({
  method: 'get',
  path: '/webhook.count.json',
  tags: ['webhook'],
  description: 'Count registered webhooks on the store.',
  operationId: 'WebhookCount',
  request: {
    query: z.object({
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The entity you want to filter webhooks by (e.g. order or product)',
            in: 'query',
            name: 'entity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The action you want to filter webhooks by (e.g. order or product)',
            in: 'query',
            name: 'action',
            required: false,
            schema: { type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'The webhook status you want to filter webhooks by',
            in: 'query',
            name: 'active',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ webhook_count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const postWebhookCreateJsonRoute = createRoute({
  method: 'post',
  path: '/webhook.create.json',
  tags: ['webhook'],
  description: 'Create webhook on the store and subscribe to it.',
  operationId: 'WebhookCreate',
  request: {
    query: z.object({
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)',
            in: 'query',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            description:
              'Specify what action (event) will trigger the webhook (e.g add, delete, or update)',
            in: 'query',
            name: 'action',
            required: true,
            schema: { type: 'string' },
          },
        }),
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Callback url that returns shipping rates. It should be able to accept POST requests with json data.',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name you give to the webhook',
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('force_all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields the webhook should send',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'force_all', type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Webhook status',
            in: 'query',
            name: 'active',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      store_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines store id where the webhook should be assigned',
            in: 'query',
            name: 'store_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ id: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const deleteWebhookDeleteJsonRoute = createRoute({
  method: 'delete',
  path: '/webhook.delete.json',
  tags: ['webhook'],
  description: 'Delete registered webhook on the store.',
  operationId: 'WebhookDelete',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Webhook id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ deleted: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getWebhookEventsJsonRoute = createRoute({
  method: 'get',
  path: '/webhook.events.json',
  tags: ['webhook'],
  description: 'List all Webhooks that are available on this store.',
  operationId: 'WebhookEvents',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  events: z
                    .array(
                      z
                        .object({
                          action: z.string().exactOptional(),
                          entity: z.string().exactOptional(),
                          webhook_name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const getWebhookListJsonRoute = createRoute({
  method: 'get',
  path: '/webhook.list.json',
  tags: ['webhook'],
  description: 'List registered webhook on the store.',
  operationId: 'WebhookList',
  request: {
    query: z.object({
      params: z
        .string()
        .default('id,entity,action,callback')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this parameter in order to choose which entity fields you want to retrieve',
            in: 'query',
            name: 'params',
            required: false,
            schema: { default: 'id,entity,action,callback', type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter sets the number from which you want to get entities',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter sets the entity amount that has to be retrieved. Max allowed count=250',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The entity you want to filter webhooks by (e.g. order or product)',
            in: 'query',
            name: 'entity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The action you want to filter webhooks by (e.g. add, update, or delete)',
            in: 'query',
            name: 'action',
            required: false,
            schema: { type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'The webhook status you want to filter webhooks by',
            in: 'query',
            name: 'active',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List of сomma-separated webhook ids',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ webhook: z.array(WebhookSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})

export const putWebhookUpdateJsonRoute = createRoute({
  method: 'put',
  path: '/webhook.update.json',
  tags: ['webhook'],
  description: 'Update Webhooks parameters.',
  operationId: 'WebhookUpdate',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Webhook id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Callback url that returns shipping rates. It should be able to accept POST requests with json data.',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name you give to the webhook',
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields the webhook should send',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Webhook status',
            in: 'query',
            name: 'active',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({ updated: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              return_code: z.int().exactOptional(),
              return_message: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_key: [], store_key: [] }],
})
