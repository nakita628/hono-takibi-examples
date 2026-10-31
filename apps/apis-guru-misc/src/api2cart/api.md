<h1 id="swagger-api2cart">Swagger API2Cart v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API2Cart

Base URLs:

* <a href="https://api.api2cart.com/v1.1">https://api.api2cart.com/v1.1</a>

<a href="https://api2cart.com/terms-service">Terms of service</a>
Email: <a href="mailto:contact@api2cart.com">contact@api2cart.com</a> 

<a href="http://docs.api2cart.com">Find out more about API2Cart</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **x-api-key**, in: header.

* API Key (store_key)
    - Parameter Name: **x-store-key**, in: header.

<h1 id="swagger-api2cart-account">account</h1>

## AccountCartAdd

<a id="opIdAccountCartAdd"></a>

> Code samples

```bash
curl https://example.com/account.cart.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "3dcart_access_token": "string",
    "3dcart_private_key": "string",
    "3dcartapi_api_key": "string",
    "amazon_access_key_id": "string",
    "amazon_access_token": "string",
    "amazon_marketplaces_ids": "string",
    "amazon_secret_key": "string",
    "amazon_seller_id": "string",
    "amazon_sp_api_environment": "production",
    "amazon_sp_aws_region": "eu-west-1",
    "amazon_sp_aws_role_arn": "string",
    "amazon_sp_aws_user_key_id": "string",
    "amazon_sp_aws_user_secret": "string",
    "amazon_sp_client_id": "string",
    "amazon_sp_client_secret": "string",
    "amazon_sp_refresh_token": "string",
    "aspdotnetstorefront_api_pass": "string",
    "aspdotnetstorefront_api_user": "string",
    "bigcommerceapi_access_token": "string",
    "bigcommerceapi_admin_account": "string",
    "bigcommerceapi_api_key": "string",
    "bigcommerceapi_api_path": "string",
    "bigcommerceapi_client_id": "string",
    "bigcommerceapi_context": "string",
    "bridge_url": "string",
    "cart_id": "3DCart",
    "commercehq_api_key": "string",
    "commercehq_api_password": "string",
    "db_tables_prefix": "string",
    "demandware_api_password": "string",
    "demandware_client_id": "string",
    "demandware_user_name": "string",
    "demandware_user_password": "string",
    "ebay_access_token": "string",
    "ebay_client_id": "string",
    "ebay_client_secret": "string",
    "ebay_environment": "production",
    "ebay_refresh_token": "string",
    "ebay_runame": "string",
    "ebay_site_id": 0,
    "ecwid_acess_token": "string",
    "ecwid_store_id": "string",
    "etsy_access_token": "string",
    "etsy_client_id": "string",
    "etsy_keystring": "string",
    "etsy_refresh_token": "string",
    "etsy_shared_secret": "string",
    "etsy_token_secret": "string",
    "ftp_host": "string",
    "ftp_password": "string",
    "ftp_port": 0,
    "ftp_store_dir": "string",
    "ftp_user": "string",
    "hybris_client_id": "string",
    "hybris_client_secret": "string",
    "hybris_password": "string",
    "hybris_username": "string",
    "hybris_websites": [
      {
        "storeIds": [
          "string"
        ],
        "uid": "string",
        "url": "string"
      }
    ],
    "lightspeed_api_key": "string",
    "lightspeed_api_secret": "string",
    "magento_access_token": "string",
    "magento_consumer_key": "string",
    "magento_consumer_secret": "string",
    "magento_token_secret": "string",
    "mercado_libre_app_id": "string",
    "mercado_libre_app_secret_key": "string",
    "mercado_libre_refresh_token": "string",
    "neto_api_key": "string",
    "neto_api_username": "string",
    "prestashop_webservice_key": "string",
    "shopify_access_token": "string",
    "shopify_api_key": "string",
    "shopify_api_password": "string",
    "shopify_shared_secret": "string",
    "shopware_access_key": "string",
    "shopware_api_key": "string",
    "shopware_api_secret": "string",
    "squarespace_api_key": "string",
    "store_key": "string",
    "store_root": "string",
    "store_url": "string",
    "validate_version": false,
    "verify": true,
    "volusion_login": "string",
    "volusion_password": "string",
    "walmart_channel_type": "string",
    "walmart_client_id": "string",
    "walmart_client_secret": "string",
    "walmart_environment": "production",
    "wc_consumer_key": "string",
    "wc_consumer_secret": "string",
    "wix_app_id": "string",
    "wix_app_secret_key": "string",
    "wix_refresh_token": "string",
    "zid_access_token": "string",
    "zid_authorization": "string",
    "zid_client_id": 0,
    "zid_client_secret": "string",
    "zid_refresh_token": "string"
  }'
```

`POST /account.cart.add.json`

Add store to the account

> Body parameter

```json
{
  "3dcart_access_token": "string",
  "3dcart_private_key": "string",
  "3dcartapi_api_key": "string",
  "amazon_access_key_id": "string",
  "amazon_access_token": "string",
  "amazon_marketplaces_ids": "string",
  "amazon_secret_key": "string",
  "amazon_seller_id": "string",
  "amazon_sp_api_environment": "production",
  "amazon_sp_aws_region": "eu-west-1",
  "amazon_sp_aws_role_arn": "string",
  "amazon_sp_aws_user_key_id": "string",
  "amazon_sp_aws_user_secret": "string",
  "amazon_sp_client_id": "string",
  "amazon_sp_client_secret": "string",
  "amazon_sp_refresh_token": "string",
  "aspdotnetstorefront_api_pass": "string",
  "aspdotnetstorefront_api_user": "string",
  "bigcommerceapi_access_token": "string",
  "bigcommerceapi_admin_account": "string",
  "bigcommerceapi_api_key": "string",
  "bigcommerceapi_api_path": "string",
  "bigcommerceapi_client_id": "string",
  "bigcommerceapi_context": "string",
  "bridge_url": "string",
  "cart_id": "3DCart",
  "commercehq_api_key": "string",
  "commercehq_api_password": "string",
  "db_tables_prefix": "string",
  "demandware_api_password": "string",
  "demandware_client_id": "string",
  "demandware_user_name": "string",
  "demandware_user_password": "string",
  "ebay_access_token": "string",
  "ebay_client_id": "string",
  "ebay_client_secret": "string",
  "ebay_environment": "production",
  "ebay_refresh_token": "string",
  "ebay_runame": "string",
  "ebay_site_id": 0,
  "ecwid_acess_token": "string",
  "ecwid_store_id": "string",
  "etsy_access_token": "string",
  "etsy_client_id": "string",
  "etsy_keystring": "string",
  "etsy_refresh_token": "string",
  "etsy_shared_secret": "string",
  "etsy_token_secret": "string",
  "ftp_host": "string",
  "ftp_password": "string",
  "ftp_port": 0,
  "ftp_store_dir": "string",
  "ftp_user": "string",
  "hybris_client_id": "string",
  "hybris_client_secret": "string",
  "hybris_password": "string",
  "hybris_username": "string",
  "hybris_websites": [
    {
      "storeIds": [
        "string"
      ],
      "uid": "string",
      "url": "string"
    }
  ],
  "lightspeed_api_key": "string",
  "lightspeed_api_secret": "string",
  "magento_access_token": "string",
  "magento_consumer_key": "string",
  "magento_consumer_secret": "string",
  "magento_token_secret": "string",
  "mercado_libre_app_id": "string",
  "mercado_libre_app_secret_key": "string",
  "mercado_libre_refresh_token": "string",
  "neto_api_key": "string",
  "neto_api_username": "string",
  "prestashop_webservice_key": "string",
  "shopify_access_token": "string",
  "shopify_api_key": "string",
  "shopify_api_password": "string",
  "shopify_shared_secret": "string",
  "shopware_access_key": "string",
  "shopware_api_key": "string",
  "shopware_api_secret": "string",
  "squarespace_api_key": "string",
  "store_key": "string",
  "store_root": "string",
  "store_url": "string",
  "validate_version": false,
  "verify": true,
  "volusion_login": "string",
  "volusion_password": "string",
  "walmart_channel_type": "string",
  "walmart_client_id": "string",
  "walmart_client_secret": "string",
  "walmart_environment": "production",
  "wc_consumer_key": "string",
  "wc_consumer_secret": "string",
  "wix_app_id": "string",
  "wix_app_secret_key": "string",
  "wix_refresh_token": "string",
  "zid_access_token": "string",
  "zid_authorization": "string",
  "zid_client_id": 0,
  "zid_client_secret": "string",
  "zid_refresh_token": "string"
}
```

<h3 id="accountcartadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCartAdd](#schemaaccountcartadd)|true|none|
|» 3dcart_access_token|body|string|false|3DCart Token|
|» 3dcart_private_key|body|string|false|3DCart Private Key|
|» 3dcartapi_api_key|body|string|false|3DCart API Key|
|» amazon_access_key_id|body|string|false|Amazon Secret Key Id|
|» amazon_access_token|body|string|false|MWS Auth Token. Access token authorizing the app to access resources on behalf of a user|
|» amazon_marketplaces_ids|body|string|false|Amazon Marketplace IDs comma separated string|
|» amazon_secret_key|body|string|false|Amazon Secret Key|
|» amazon_seller_id|body|string|false|Amazon Seller ID (Merchant token)|
|» amazon_sp_api_environment|body|string|false|Amazon SP API environment|
|» amazon_sp_aws_region|body|string|true|Amazon AWS Region|
|» amazon_sp_aws_role_arn|body|string|true|Amazon AWS Role ARN|
|» amazon_sp_aws_user_key_id|body|string|true|Amazon AWS user access key ID|
|» amazon_sp_aws_user_secret|body|string|true|Amazon AWS user secret access key|
|» amazon_sp_client_id|body|string|true|Amazon SP API app client id|
|» amazon_sp_client_secret|body|string|true|Amazon SP API app client secret|
|» amazon_sp_refresh_token|body|string|true|Amazon SP API OAuth refresh token|
|» aspdotnetstorefront_api_pass|body|string|false|AspDotNetStorefront API Password|
|» aspdotnetstorefront_api_user|body|string|false|It's a AspDotNetStorefront account for which API is available|
|» bigcommerceapi_access_token|body|string|false|Access token authorizing the app to access resources on behalf of a user|
|» bigcommerceapi_admin_account|body|string|false|It's a BigCommerce account for which API is enabled|
|» bigcommerceapi_api_key|body|string|false|Bigcommerce API Key|
|» bigcommerceapi_api_path|body|string|false|BigCommerce API URL|
|» bigcommerceapi_client_id|body|string|false|Client ID of the requesting app|
|» bigcommerceapi_context|body|string|false|API Path section unique to the store|
|» bridge_url|body|string|false|This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)|
|» cart_id|body|string|true|Store’s identifier which you can get from cart_list method|
|» commercehq_api_key|body|string|false|CommerceHQ api key|
|» commercehq_api_password|body|string|false|CommerceHQ api password|
|» db_tables_prefix|body|string|false|DB tables prefix|
|» demandware_api_password|body|string|false|Demandware api password|
|» demandware_client_id|body|string|false|Demandware client id|
|» demandware_user_name|body|string|false|Demandware user name|
|» demandware_user_password|body|string|false|Demandware user password|
|» ebay_access_token|body|string|false|Used to authenticate API requests.|
|» ebay_client_id|body|string|false|Application ID (AppID).|
|» ebay_client_secret|body|string|false|Shared Secret from eBay application|
|» ebay_environment|body|string|false|eBay environment|
|» ebay_refresh_token|body|string|false|Used to renew the access token.|
|» ebay_runame|body|string|false|The RuName value that eBay assigns to your application.|
|» ebay_site_id|body|integer|false|eBay global ID|
|» ecwid_acess_token|body|string|false|Access token authorizing the app to access resources on behalf of a user|
|» ecwid_store_id|body|string|false|Store Id|
|» etsy_access_token|body|string|false|Access token authorizing the app to access resources on behalf of a user|
|» etsy_client_id|body|string|true|Etsy Client Id|
|» etsy_keystring|body|string|false|Etsy keystring|
|» etsy_refresh_token|body|string|true|Etsy Refresh token|
|» etsy_shared_secret|body|string|false|Etsy shared secret|
|» etsy_token_secret|body|string|false|Secret token authorizing the app to access resources on behalf of a user|
|» ftp_host|body|string|false|FTP connection host|
|» ftp_password|body|string|false|FTP Password|
|» ftp_port|body|integer|false|FTP Port|
|» ftp_store_dir|body|string|false|FTP Store dir|
|» ftp_user|body|string|false|FTP User|
|» hybris_client_id|body|string|false|Omni Commerce Connector Client ID|
|» hybris_client_secret|body|string|false|Omni Commerce Connector Client Secret|
|» hybris_password|body|string|false|User password|
|» hybris_username|body|string|false|User Name|
|» hybris_websites|body|[object]|false|Websites to stores mapping data|
|» » storeIds|body|[string]|true|none|
|» » uid|body|string|true|none|
|» » url|body|string|true|none|
|» lightspeed_api_key|body|string|false|LightSpeed api key|
|» lightspeed_api_secret|body|string|false|LightSpeed api secret|
|» magento_access_token|body|string|false|Magento Access Token|
|» magento_consumer_key|body|string|false|Magento Consumer Key|
|» magento_consumer_secret|body|string|false|Magento Consumer Secret|
|» magento_token_secret|body|string|false|Magento Token Secret|
|» mercado_libre_app_id|body|string|false|Mercado Libre App ID|
|» mercado_libre_app_secret_key|body|string|false|Mercado Libre App Secret Key|
|» mercado_libre_refresh_token|body|string|false|Mercado Libre Refresh Token|
|» neto_api_key|body|string|false|Neto API Key|
|» neto_api_username|body|string|false|Neto User Name|
|» prestashop_webservice_key|body|string|false|Prestashop webservice key|
|» shopify_access_token|body|string|false|Access token authorizing the app to access resources on behalf of a user|
|» shopify_api_key|body|string|false|Shopify API Key|
|» shopify_api_password|body|string|false|Shopify API Password|
|» shopify_shared_secret|body|string|false|Shared secret|
|» shopware_access_key|body|string|false|Shopware access key|
|» shopware_api_key|body|string|false|Shopware api key|
|» shopware_api_secret|body|string|false|Shopware client secret access key|
|» squarespace_api_key|body|string|false|Squarespace API Key|
|» store_key|body|string|false|Set this parameter if bridge is already uploaded to store|
|» store_root|body|string|false|Absolute path to the store root directory (used with "bridge_url" parameter)|
|» store_url|body|string|true|A web address of a store that you would like to connect to API2Cart|
|» validate_version|body|boolean|false|Specify if api2cart should validate cart version|
|» verify|body|boolean|false|Enables or disables cart's verification|
|» volusion_login|body|string|false|It's a Volusion account for which API is enabled|
|» volusion_password|body|string|false|Volusion API Password|
|» walmart_channel_type|body|string|false|Walmart WM_CONSUMER.CHANNEL.TYPE header|
|» walmart_client_id|body|string|false|Walmart client ID|
|» walmart_client_secret|body|string|false|Walmart client secret|
|» walmart_environment|body|string|false|Walmart environment|
|» wc_consumer_key|body|string|false|Woocommerce consumer key|
|» wc_consumer_secret|body|string|false|Woocommerce consumer secret|
|» wix_app_id|body|string|false|Wix App ID|
|» wix_app_secret_key|body|string|false|Wix App Secret Key|
|» wix_refresh_token|body|string|false|Wix refresh token|
|» zid_access_token|body|string|false|Zid Access Token|
|» zid_authorization|body|string|false|Zid Authorization|
|» zid_client_id|body|integer|false|Zid Client ID|
|» zid_client_secret|body|string|false|Zid Client Secret|
|» zid_refresh_token|body|string|false|Zid refresh token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» amazon_sp_aws_region|eu-west-1|
|» amazon_sp_aws_region|us-east-1|
|» amazon_sp_aws_region|us-west-2|
|» cart_id|3DCart|
|» cart_id|3DCartApi|
|» cart_id|AceShop|
|» cart_id|AmazonSP|
|» cart_id|Amazon|
|» cart_id|AspDotNetStorefront|
|» cart_id|BigcommerceApi|
|» cart_id|Creloaded|
|» cart_id|CommerceHQ|
|» cart_id|Cscart|
|» cart_id|Cubecart|
|» cart_id|Demandware|
|» cart_id|EBay|
|» cart_id|Ecwid|
|» cart_id|Etsy|
|» cart_id|EtsyAPIv3|
|» cart_id|Gambio|
|» cart_id|Interspire|
|» cart_id|JooCart|
|» cart_id|Magento1212|
|» cart_id|Magento2Api|
|» cart_id|MijoShop|
|» cart_id|Neto|
|» cart_id|Opencart14|
|» cart_id|LightSpeed|
|» cart_id|Oscmax2|
|» cart_id|Oscommerce22ms2|
|» cart_id|Oxid|
|» cart_id|Pinnacle|
|» cart_id|Prestashop|
|» cart_id|PrestashopApi|
|» cart_id|SSPremium|
|» cart_id|Shopify|
|» cart_id|Squarespace|
|» cart_id|Shopware|
|» cart_id|ShopwareApi|
|» cart_id|Tomatocart|
|» cart_id|Ubercart|
|» cart_id|Virtuemart|
|» cart_id|Volusion|
|» cart_id|WPecommerce|
|» cart_id|Walmart|
|» cart_id|WebAsyst|
|» cart_id|Woocommerce|
|» cart_id|WoocommerceApi|
|» cart_id|Wix|
|» cart_id|Xcart|
|» cart_id|Xtcommerce|
|» cart_id|XtcommerceVeyton|
|» cart_id|Zencart137|
|» cart_id|Hybris|
|» cart_id|MercadoLibre|
|» cart_id|Zid|

> Example responses

> 200 Response

```json
{
  "result": {
    "store_key": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="accountcartadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="accountcartadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» store_key|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## AccountCartList

<a id="opIdAccountCartList"></a>

> Code samples

```bash
curl https://example.com/account.cart.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /account.cart.list.json`

Get list of carts.

<h3 id="accountcartlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|request_from_date|query|string|false|Retrieve entities from their creation date|
|request_to_date|query|string|false|Retrieve entities to their creation date|
|store_url|query|string|false|A web address of a store|
|store_key|query|string|false|Find store by store key|

> Example responses

> 200 Response

```json
{
  "result": {
    "carts": [
      {
        "cart_id": "string",
        "id": "string",
        "store_key": "string",
        "total_calls": "string",
        "url": "string"
      }
    ],
    "carts_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="accountcartlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="accountcartlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» carts|[object]|false|none|none|
|» » cart_id|string|false|none|none|
|» » id|string|false|none|none|
|» » store_key|string|false|none|none|
|» » total_calls|string|false|none|none|
|» » url|string|false|none|none|
|» carts_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## AccountConfigUpdate

<a id="opIdAccountConfigUpdate"></a>

> Code samples

```bash
curl https://example.com/account.config.update.json \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /account.config.update.json`

Update configs in the API2Cart database.

<h3 id="accountconfigupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|new_store_key|query|string|false|Update store key|
|bridge_url|query|string|false|This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)|
|store_root|query|string|false|Absolute path to the store root directory (used with "bridge_url" parameter)|
|db_tables_prefix|query|string|false|DB tables prefix|
|3dcart_private_key|query|string|false|3DCart Private Key|
|3dcart_access_token|query|string|false|3DCart Token|
|3dcartapi_api_key|query|string|false|3DCart API Key|
|amazon_sp_client_id|query|string|false|Amazon SP API app client id|
|amazon_sp_client_secret|query|string|false|Amazon SP API app client secret|
|amazon_sp_aws_user_key_id|query|string|false|Amazon AWS user access key ID|
|amazon_sp_aws_user_secret|query|string|false|Amazon AWS user secret access key|
|amazon_sp_aws_region|query|string|false|Amazon AWS Region|
|amazon_sp_aws_role_arn|query|string|false|Amazon AWS Role ARN|
|amazon_sp_refresh_token|query|string|false|Amazon SP API OAuth refresh token|
|amazon_sp_api_environment|query|string|false|Amazon SP API environment|
|amazon_access_token|query|string|false|MWS Auth Token. Access token authorizing the app to access resources on behalf of a user|
|amazon_seller_id|query|string|false|Amazon Seller ID (Merchant token)|
|amazon_marketplaces_ids|query|string|false|Amazon Marketplace IDs comma separated string|
|amazon_secret_key|query|string|false|Amazon Secret Key|
|amazon_access_key_id|query|string|false|Amazon Secret Key Id|
|aspdotnetstorefront_api_user|query|string|false|It's a AspDotNetStorefront account for which API is available|
|aspdotnetstorefront_api_pass|query|string|false|AspDotNetStorefront API Password|
|bigcommerceapi_admin_account|query|string|false|It's a BigCommerce account for which API is enabled|
|bigcommerceapi_api_path|query|string|false|BigCommerce API URL|
|bigcommerceapi_api_key|query|string|false|Bigcommerce API Key|
|bigcommerceapi_client_id|query|string|false|Client ID of the requesting app|
|bigcommerceapi_access_token|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|bigcommerceapi_context|query|string|false|API Path section unique to the store|
|demandware_client_id|query|string|false|Demandware client id|
|demandware_api_password|query|string|false|Demandware api password|
|demandware_user_name|query|string|false|Demandware user name|
|demandware_user_password|query|string|false|Demandware user password|
|ebay_client_id|query|string|false|Application ID (AppID).|
|ebay_client_secret|query|string|false|Shared Secret from eBay application|
|ebay_runame|query|string|false|The RuName value that eBay assigns to your application.|
|ebay_access_token|query|string|false|Used to authenticate API requests.|
|ebay_refresh_token|query|string|false|Used to renew the access token.|
|ebay_environment|query|string|false|eBay environment|
|ebay_site_id|query|integer|false|eBay global ID|
|ecwid_acess_token|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|ecwid_store_id|query|string|false|Store Id|
|etsy_keystring|query|string|false|Etsy keystring|
|etsy_shared_secret|query|string|false|Etsy shared secret|
|etsy_access_token|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|etsy_token_secret|query|string|false|Secret token authorizing the app to access resources on behalf of a user|
|etsy_client_id|query|string|false|Etsy Client Id|
|etsy_refresh_token|query|string|false|Etsy Refresh token|
|neto_api_key|query|string|false|Neto API Key|
|neto_api_username|query|string|false|Neto User Name|
|shopify_api_key|query|string|false|Shopify API Key|
|shopify_api_password|query|string|false|Shopify API Password|
|shopify_shared_secret|query|string|false|Shared secret|
|shopify_access_token|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|shopware_access_key|query|string|false|Shopware access key|
|shopware_api_key|query|string|false|Shopware api key|
|shopware_api_secret|query|string|false|Shopware client secret access key|
|volusion_login|query|string|false|It's a Volusion account for which API is enabled|
|volusion_password|query|string|false|Volusion API Password|
|walmart_client_id|query|string|false|Walmart client ID|
|walmart_client_secret|query|string|false|Walmart client secret|
|walmart_environment|query|string|false|Walmart environment|
|walmart_channel_type|query|string|false|Walmart WM_CONSUMER.CHANNEL.TYPE header|
|squarespace_api_key|query|string|false|Squarespace API Key|
|hybris_client_id|query|string|false|Omni Commerce Connector Client ID|
|hybris_client_secret|query|string|false|Omni Commerce Connector Client Secret|
|hybris_username|query|string|false|User Name|
|hybris_password|query|string|false|User password|
|hybris_websites|query|[string]|false|Websites to stores mapping data|
|lightspeed_api_key|query|string|false|LightSpeed api key|
|lightspeed_api_secret|query|string|false|LightSpeed api secret|
|commercehq_api_key|query|string|false|CommerceHQ api key|
|commercehq_api_password|query|string|false|CommerceHQ api password|
|wc_consumer_key|query|string|false|Woocommerce consumer key|
|wc_consumer_secret|query|string|false|Woocommerce consumer secret|
|magento_consumer_key|query|string|false|Magento Consumer Key|
|magento_consumer_secret|query|string|false|Magento Consumer Secret|
|magento_access_token|query|string|false|Magento Access Token|
|magento_token_secret|query|string|false|Magento Token Secret|
|prestashop_webservice_key|query|string|false|Prestashop webservice key|
|wix_app_id|query|string|false|Wix App ID|
|wix_app_secret_key|query|string|false|Wix App Secret Key|
|wix_refresh_token|query|string|false|Wix refresh token|
|mercado_libre_app_id|query|string|false|Mercado Libre App ID|
|mercado_libre_app_secret_key|query|string|false|Mercado Libre App Secret Key|
|mercado_libre_refresh_token|query|string|false|Mercado Libre Refresh Token|
|zid_client_id|query|integer|false|Zid Client ID|
|zid_client_secret|query|string|false|Zid Client Secret|
|zid_access_token|query|string|false|Zid Access Token|
|zid_authorization|query|string|false|Zid Authorization|
|zid_refresh_token|query|string|false|Zid refresh token|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="accountconfigupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="accountconfigupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AccountFailedWebhooks

<a id="opIdAccountFailedWebhooks"></a>

> Code samples

```bash
curl https://example.com/account.failed_webhooks.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /account.failed_webhooks.json`

List webhooks that was not delivered to the callback.

<h3 id="accountfailedwebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|ids|query|string|false|List of сomma-separated webhook ids|

> Example responses

> 200 Response

```json
{
  "result": {
    "all_failed_webhook": "string",
    "webhook": [
      {
        "entity_id": "string",
        "time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "webhook_id": 0
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="accountfailedwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="accountfailedwebhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» all_failed_webhook|string|false|none|none|
|» webhook|[object]|false|none|none|
|» » entity_id|string|false|none|none|
|» » time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|» » webhook_id|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## AccountSupportedPlatforms

<a id="opIdAccountSupportedPlatforms"></a>

> Code samples

```bash
curl https://example.com/account.supported_platforms.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /account.supported_platforms.json`

Get list of supported platforms

> Example responses

> 200 Response

```json
{
  "result": {
    "supported_platforms": [
      {
        "cart_id": "string",
        "cart_method": "string",
        "cart_name": "string",
        "cart_versions": "string",
        "params": {
          "additional": [
            {
              "description": "string",
              "name": "string"
            }
          ],
          "required": [
            [
              {
                "description": "string",
                "name": "string"
              }
            ]
          ]
        }
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="accountsupportedplatforms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="accountsupportedplatforms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» supported_platforms|[object]|false|none|none|
|» » cart_id|string|false|none|none|
|» » cart_method|string|false|none|none|
|» » cart_name|string|false|none|none|
|» » cart_versions|string|false|none|none|
|» » params|object|false|none|none|
|» » » additional|[object]|false|none|none|
|» » » » description|string|false|none|none|
|» » » » name|string|false|none|none|
|» » » required|[[object]]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="swagger-api2cart-cart">cart</h1>

## BridgeDownload

<a id="opIdBridgeDownload"></a>

> Code samples

```bash
curl https://example.com/bridge.download.file \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /bridge.download.file`

Download bridge for store

<h3 id="bridgedownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|whitelabel|query|boolean|false|Identifies if there is a necessity to download whitelabel bridge.|

<h3 id="bridgedownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartBridge

<a id="opIdCartBridge"></a>

> Code samples

```bash
curl https://example.com/cart.bridge.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /cart.bridge.json`

Get bridge key and store key

> Example responses

> 200 Response

```json
{
  "result": {
    "bridge": "string",
    "store_key": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartbridge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartbridge-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» bridge|string|false|none|none|
|» store_key|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## CartCatalogPriceRulesCount

<a id="opIdCartCatalogPriceRulesCount"></a>

> Code samples

```bash
curl https://example.com/cart.catalog_price_rules.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.catalog_price_rules.count.json`

Get count of cart catalog price rules discounts.

> Example responses

> 200 Response

```json
{
  "result": {
    "catalog_price_rules_count": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcatalogpricerulescount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartcatalogpricerulescount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» catalog_price_rules_count|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCatalogPriceRulesList

<a id="opIdCartCatalogPriceRulesList"></a>

> Code samples

```bash
curl https://example.com/cart.catalog_price_rules.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.catalog_price_rules.list.json`

Get cart catalog price rules discounts.

<h3 id="cartcatalogpriceruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|ids|query|string|false|Retrieves  catalog_price_rules by ids|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "catalog_price_rules": [
      {
        "actions": [
          {
            "additional_fields": {},
            "apply_to": "string",
            "conditions": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "entity": "string",
                "id": "string",
                "key": "string",
                "logic_operator": "string",
                "match_items": "string",
                "operator": "string",
                "sub-conditions": [
                  {}
                ],
                "value": "string"
              }
            ],
            "currency_code": "string",
            "custom_fields": {},
            "include_tax": true,
            "quantity": 0,
            "scope": "string",
            "type": "string",
            "value": 0
          }
        ],
        "additional_fields": {},
        "avail": true,
        "conditions": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "entity": "string",
            "id": "string",
            "key": "string",
            "logic_operator": "string",
            "match_items": "string",
            "operator": "string",
            "sub-conditions": [
              {}
            ],
            "value": "string"
          }
        ],
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "date_end": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "date_start": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "description": "string",
        "gid": "string",
        "id": "string",
        "name": "string",
        "short_description": "string",
        "type": "string",
        "usage_count": 0,
        "uses_per_order_limit": 0
      }
    ],
    "catalog_price_rules_count": 0,
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcatalogpriceruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Cart_Catalog_PriceRules_List](#schemamodel_response_cart_catalog_pricerules_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartClearCache

<a id="opIdCartClearCache"></a>

> Code samples

```bash
curl 'https://example.com/cart.clear_cache.json?cache_type=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /cart.clear_cache.json`

Clear cache on store.

<h3 id="cartclearcache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cache_type|query|string|true|Defines which cache should be cleared.|

> Example responses

> 200 Response

```json
{
  "result": {
    "cache_cleared": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartclearcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartclearcache-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» cache_cleared|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartConfig

<a id="opIdCartConfig"></a>

> Code samples

```bash
curl https://example.com/cart.config.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.config.json`

Get list of cart configs

<h3 id="cartconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "result": {
    "db_prefix": "string",
    "store_name": "string",
    "store_url": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartconfig-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» db_prefix|string|false|none|none|
|» store_name|string|false|none|none|
|» store_url|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartConfigUpdate

<a id="opIdCartConfigUpdate"></a>

> Code samples

```bash
curl https://example.com/cart.config.update.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "custom_fields": {},
    "db_tables_prefix": "string",
    "store_id": "string"
  }'
```

`PUT /cart.config.update.json`

<aside class="warning">
This operation is deprecated
</aside>

Use this API method to update custom data in client database.

> Body parameter

```json
{
  "custom_fields": {},
  "db_tables_prefix": "string",
  "store_id": "string"
}
```

<h3 id="cartconfigupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CartConfigUpdate](#schemacartconfigupdate)|true|none|
|» custom_fields|body|object|false|This parameter sets the list of params to the shopping cart.|
|» db_tables_prefix|body|string|false|This parameter is deprecated for this method. Please, use this parameter in method account.config.update|
|» store_id|body|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {},
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartconfigupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartconfigupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCouponAdd

<a id="opIdCartCouponAdd"></a>

> Code samples

```bash
curl https://example.com/cart.coupon.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "action_amount": 0,
    "action_apply_to": "order_total",
    "action_condition_entity": "string",
    "action_condition_key": "string",
    "action_condition_operator": "string",
    "action_condition_value": "string",
    "action_scope": "order",
    "action_type": "percent",
    "code": "string",
    "codes": [
      "string"
    ],
    "date_end": "string",
    "date_start": "now",
    "name": "string",
    "store_id": "string",
    "usage_limit": 0,
    "usage_limit_per_customer": 0
  }'
```

`POST /cart.coupon.add.json`

Create new coupon

> Body parameter

```json
{
  "action_amount": 0,
  "action_apply_to": "order_total",
  "action_condition_entity": "string",
  "action_condition_key": "string",
  "action_condition_operator": "string",
  "action_condition_value": "string",
  "action_scope": "order",
  "action_type": "percent",
  "code": "string",
  "codes": [
    "string"
  ],
  "date_end": "string",
  "date_start": "now",
  "name": "string",
  "store_id": "string",
  "usage_limit": 0,
  "usage_limit_per_customer": 0
}
```

<h3 id="cartcouponadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CartCouponAdd](#schemacartcouponadd)|true|none|
|» action_amount|body|number|true|Defines the discount amount value.|
|» action_apply_to|body|string|true|Defines where discount should be applied|
|» action_condition_entity|body|string|false|Defines entity for action condition.|
|» action_condition_key|body|string|false|Defines entity attribute code for action condition.|
|» action_condition_operator|body|string|false|Defines condition operator.|
|» action_condition_value|body|string|false|Defines condition attribute value/s. Can be comma separated string.|
|» action_scope|body|string|true|Specify how discount should be applied. If scope=matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once.|
|» action_type|body|string|true|Coupon discount type|
|» code|body|string|true|Coupon code|
|» codes|body|[string]|false|Entity codes|
|» date_end|body|string|false|Defines when discount code will be expired.|
|» date_start|body|string|false|Defines when discount code will be available.|
|» name|body|string|false|Coupon name|
|» store_id|body|string|false|Store Id|
|» usage_limit|body|integer|false|Usage limit for coupon.|
|» usage_limit_per_customer|body|integer|false|Usage limit per customer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action_apply_to|order_total|
|» action_apply_to|item_price|
|» action_apply_to|shipping|
|» action_scope|order|
|» action_scope|matching_items|
|» action_type|percent|
|» action_type|fixed|

> Example responses

> 200 Response

```json
{
  "result": {
    "coupon_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcouponadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartcouponadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» coupon_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCouponConditionAdd

<a id="opIdCartCouponConditionAdd"></a>

> Code samples

```bash
curl 'https://example.com/cart.coupon.condition.add.json?coupon_id=string&entity=order&key=total&operator=%3D%3D&value=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /cart.coupon.condition.add.json`

Create new coupon condition

<h3 id="cartcouponconditionadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|
|coupon_id|query|string|true|Coupon Id|
|target|query|string|false|Defines condition operator|
|entity|query|string|true|Defines condition entity type|
|key|query|string|true|Defines condition entity attribute key|
|operator|query|string|true|Defines condition operator|
|value|query|string|true|Defines condition value, can be comma separated according to the operator.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entity|order|
|entity|order_shipping_address|
|entity|product|
|entity|customer|
|key|total|
|key|subtotal|
|key|shipping_total|
|key|total_quantity|
|key|total_weight|
|key|country|
|key|product_id|
|key|variant_id|
|key|category_id|
|key|customer_id|
|key|item_price|
|key|item_total_price|
|key|item_quantity|
|operator|==|
|operator|<|
|operator|<=|
|operator|>|
|operator|>=|
|operator|ONE_OF|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcouponconditionadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartcouponconditionadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCouponCount

<a id="opIdCartCouponCount"></a>

> Code samples

```bash
curl https://example.com/cart.coupon.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.coupon.count.json`

Get cart coupons count.

<h3 id="cartcouponcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|
|date_start_from|query|string|false|Filter entity by date_start (greater or equal)|
|date_start_to|query|string|false|Filter entity by date_start (less or equal)|
|date_end_from|query|string|false|Filter entity by date_end (greater or equal)|
|date_end_to|query|string|false|Filter entity by date_end (less or equal)|
|avail|query|boolean|false|Defines category's visibility status|

> Example responses

> 200 Response

```json
{
  "result": {
    "coupons_count": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcouponcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartcouponcount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» coupons_count|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCouponDelete

<a id="opIdCartCouponDelete"></a>

> Code samples

```bash
curl 'https://example.com/cart.coupon.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /cart.coupon.delete.json`

Delete coupon

<h3 id="cartcoupondelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcoupondelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartcoupondelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCouponList

<a id="opIdCartCouponList"></a>

> Code samples

```bash
curl https://example.com/cart.coupon.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.coupon.list.json`

Get cart coupon discounts.

<h3 id="cartcouponlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|coupons_ids|query|string|false|Filter coupons by ids|
|store_id|query|string|false|Filter coupons by store id|
|date_start_from|query|string|false|Filter entity by date_start (greater or equal)|
|date_start_to|query|string|false|Filter entity by date_start (less or equal)|
|date_end_from|query|string|false|Filter entity by date_end (greater or equal)|
|date_end_to|query|string|false|Filter entity by date_end (less or equal)|
|avail|query|boolean|false|Filter coupons by avail status|
|lang_id|query|string|false|Language id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "coupon": [
      {
        "actions": [
          {
            "additional_fields": {},
            "amount": 0,
            "apply_to": "string",
            "conditions": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "entity": "string",
                "id": "string",
                "key": "string",
                "logic_operator": "string",
                "match_items": "string",
                "operator": "string",
                "sub-conditions": [
                  {}
                ],
                "value": "string"
              }
            ],
            "currency_code": "string",
            "custom_fields": {},
            "discount_quantity_step": 0,
            "discounted_quantity": 0,
            "include_tax": true,
            "logic_operator": "string",
            "scope": "string",
            "type": "string"
          }
        ],
        "additional_fields": {},
        "avail": true,
        "code": "string",
        "codes": [
          {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "id": "string",
            "used_times": 0
          }
        ],
        "conditions": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "entity": "string",
            "id": "string",
            "key": "string",
            "logic_operator": "string",
            "match_items": "string",
            "operator": "string",
            "sub-conditions": [
              {}
            ],
            "value": "string"
          }
        ],
        "custom_fields": {},
        "date_end": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "date_start": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "description": "string",
        "id": "string",
        "logic_operator": "string",
        "name": "string",
        "priority": 0,
        "usage_history": [
          {
            "additional_fields": {},
            "amount": 0,
            "custom_fields": {},
            "order_id": "string"
          }
        ],
        "usage_limit": 0,
        "usage_limit_per_customer": 0,
        "used_times": 0
      }
    ],
    "coupon_count": 0,
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcouponlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Cart_Coupon_List](#schemamodel_response_cart_coupon_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartCreate

<a id="opIdCartCreate"></a>

> Code samples

```bash
curl 'https://example.com/cart.create.json?cart_id=3DCart&store_url=string&etsy_client_id=string&etsy_refresh_token=string&store_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /cart.create.json`

<aside class="warning">
This operation is deprecated
</aside>

Add store to the account

<h3 id="cartcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cart_id|query|string|true|Store’s identifier which you can get from cart_list method|
|store_url|query|string|true|A web address of a store that you would like to connect to API2Cart|
|bridge_url|query|string|false|This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)|
|store_root|query|string|false|Absolute path to the store root directory (used with "bridge_url" parameter)|
|store_key|query|string|false|Set this parameter if bridge is already uploaded to store|
|shared_secret|query|string|false|Shared secret|
|validate_version|query|boolean|false|Specify if api2cart should validate cart version|
|verify|query|boolean|false|Enables or disables cart's verification|
|db_tables_prefix|query|string|false|DB tables prefix|
|ftp_host|query|string|false|FTP connection host|
|ftp_user|query|string|false|FTP User|
|ftp_password|query|string|false|FTP Password|
|ftp_port|query|integer|false|FTP Port|
|ftp_store_dir|query|string|false|FTP Store dir|
|apiKey_3dcart|query|string|false|3DCart API Key|
|AdminAccount|query|string|false|It's a BigCommerce account for which API is enabled|
|ApiPath|query|string|false|BigCommerce API URL|
|ApiKey|query|string|false|Bigcommerce API Key|
|client_id|query|string|false|Client ID of the requesting app|
|accessToken|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|context|query|string|false|API Path section unique to the store|
|access_token|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|apiKey_shopify|query|string|false|Shopify API Key|
|apiPassword|query|string|false|Shopify API Password|
|accessToken_shopify|query|string|false|Access token authorizing the app to access resources on behalf of a user|
|apiKey|query|string|false|Neto API Key|
|apiUsername|query|string|false|Neto User Name|
|EncryptedPassword|query|string|false|Volusion API Password|
|Login|query|string|false|It's a Volusion account for which API is enabled|
|apiUser_adnsf|query|string|false|It's a AspDotNetStorefront account for which API is available|
|apiPass|query|string|false|AspDotNetStorefront API Password|
|accessKey_scelite|query|string|false|Shopping Cart Elite Access Key|
|apiKey_scelite|query|string|false|Shopping Cart Elite API Key|
|apiSecretKey_scelite|query|string|false|Shopping Cart Elite API Secret Key|
|privateKey|query|string|false|3DCart Application Private Key|
|appToken|query|string|false|3DCart Token from Application|
|etsy_keystring|query|string|false|Etsy keystring|
|etsy_shared_secret|query|string|false|Etsy shared secret|
|tokenSecret|query|string|false|Secret token authorizing the app to access resources on behalf of a user|
|etsy_client_id|query|string|true|Etsy Client Id|
|etsy_refresh_token|query|string|true|Etsy Refresh token|
|ebay_client_id|query|string|false|Application ID (AppID).|
|ebay_client_secret|query|string|false|Shared Secret from eBay application|
|ebay_runame|query|string|false|The RuName value that eBay assigns to your application.|
|ebay_access_token|query|string|false|Used to authenticate API requests.|
|ebay_refresh_token|query|string|false|Used to renew the access token.|
|ebay_environment|query|string|false|eBay environment|
|ebay_site_id|query|integer|false|eBay global ID|
|dw_client_id|query|string|false|Demandware client id|
|dw_api_pass|query|string|false|Demandware api password|
|demandware_user_name|query|string|false|Demandware user name|
|demandware_user_password|query|string|false|Demandware user password|
|store_id|query|string|true|Store Id|
|seller_id|query|string|false|Seller Id|
|amazon_secret_key|query|string|false|Amazon Secret Key|
|amazon_access_key_id|query|string|false|Amazon Secret Key Id|
|marketplaces_ids|query|string|false|Comma separated marketplaces ids|
|environment|query|string|false|none|
|hybris_client_id|query|string|false|Omni Commerce Connector Client ID|
|hybris_client_secret|query|string|false|Omni Commerce Connector Client Secret|
|hybris_username|query|string|false|User Name|
|hybris_password|query|string|false|User password|
|hybris_websites|query|[string]|false|Websites to stores mapping data|
|walmart_client_id|query|string|false|Walmart client ID|
|walmart_client_secret|query|string|false|Walmart client secret|
|walmart_environment|query|string|false|Walmart environment|
|walmart_channel_type|query|string|false|Walmart WM_CONSUMER.CHANNEL.TYPE header|
|lightspeed_api_key|query|string|false|LightSpeed api key|
|lightspeed_api_secret|query|string|false|LightSpeed api secret|
|shopware_access_key|query|string|false|Shopware access key|
|shopware_api_key|query|string|false|Shopware api key|
|shopware_api_secret|query|string|false|Shopware client secret access key|
|commercehq_api_key|query|string|false|CommerceHQ api key|
|commercehq_api_password|query|string|false|CommerceHQ api password|
|3dcart_private_key|query|string|false|3DCart Private Key|
|3dcart_access_token|query|string|false|3DCart Token|
|wc_consumer_key|query|string|false|Woocommerce consumer key|
|wc_consumer_secret|query|string|false|Woocommerce consumer secret|
|magento_consumer_key|query|string|false|Magento Consumer Key|
|magento_consumer_secret|query|string|false|Magento Consumer Secret|
|magento_access_token|query|string|false|Magento Access Token|
|magento_token_secret|query|string|false|Magento Token Secret|
|prestashop_webservice_key|query|string|false|Prestashop webservice key|
|wix_app_id|query|string|false|Wix App ID|
|wix_app_secret_key|query|string|false|Wix App Secret Key|
|wix_refresh_token|query|string|false|Wix refresh token|
|mercado_libre_app_id|query|string|false|Mercado Libre App ID|
|mercado_libre_app_secret_key|query|string|false|Mercado Libre App Secret Key|
|mercado_libre_refresh_token|query|string|false|Mercado Libre Refresh Token|
|zid_client_id|query|integer|false|Zid Client ID|
|zid_client_secret|query|string|false|Zid Client Secret|
|zid_access_token|query|string|false|Zid Access Token|
|zid_authorization|query|string|false|Zid Authorization|
|zid_refresh_token|query|string|false|Zid refresh token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cart_id|3DCart|
|cart_id|3DCartApi|
|cart_id|AceShop|
|cart_id|AmazonSP|
|cart_id|Amazon|
|cart_id|AspDotNetStorefront|
|cart_id|BigcommerceApi|
|cart_id|Creloaded|
|cart_id|CommerceHQ|
|cart_id|Cscart|
|cart_id|Cubecart|
|cart_id|Demandware|
|cart_id|EBay|
|cart_id|Ecwid|
|cart_id|Etsy|
|cart_id|EtsyAPIv3|
|cart_id|Gambio|
|cart_id|Interspire|
|cart_id|JooCart|
|cart_id|Magento1212|
|cart_id|Magento2Api|
|cart_id|MijoShop|
|cart_id|Neto|
|cart_id|Opencart14|
|cart_id|LightSpeed|
|cart_id|Oscmax2|
|cart_id|Oscommerce22ms2|
|cart_id|Oxid|
|cart_id|Pinnacle|
|cart_id|Prestashop|
|cart_id|PrestashopApi|
|cart_id|SSPremium|
|cart_id|Shopify|
|cart_id|Squarespace|
|cart_id|Shopware|
|cart_id|ShopwareApi|
|cart_id|Tomatocart|
|cart_id|Ubercart|
|cart_id|Virtuemart|
|cart_id|Volusion|
|cart_id|WPecommerce|
|cart_id|Walmart|
|cart_id|WebAsyst|
|cart_id|Woocommerce|
|cart_id|WoocommerceApi|
|cart_id|Wix|
|cart_id|Xcart|
|cart_id|Xtcommerce|
|cart_id|XtcommerceVeyton|
|cart_id|Zencart137|
|cart_id|Hybris|
|cart_id|MercadoLibre|
|cart_id|Zid|

> Example responses

> 200 Response

```json
{
  "result": {
    "store_key": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartcreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» store_key|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## CartDelete

<a id="opIdCartDelete"></a>

> Code samples

```bash
curl https://example.com/cart.delete.json \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /cart.delete.json`

Remove store from API2Cart

<h3 id="cartdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delete_bridge|query|boolean|false|Identifies if there is a necessity to delete bridge|

> Example responses

> 200 Response

```json
{
  "result": {
    "store": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» store|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartDisconnect

<a id="opIdCartDisconnect"></a>

> Code samples

```bash
curl https://example.com/cart.disconnect.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.disconnect.json`

<aside class="warning">
This operation is deprecated
</aside>

Disconnect with the store and clear store session data.

<h3 id="cartdisconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delete_bridge|query|boolean|false|Identifies if there is a necessity to delete bridge|

> Example responses

> 200 Response

```json
{
  "result": {
    "connection": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartdisconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartdisconnect-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» connection|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartGiftcardAdd

<a id="opIdCartGiftcardAdd"></a>

> Code samples

```bash
curl 'https://example.com/cart.giftcard.add.json?amount=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /cart.giftcard.add.json`

Create new gift card

<h3 id="cartgiftcardadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|number|true|Defines the gift card amount value.|
|code|query|string|false|Gift card code|
|owner_email|query|string|false|Gift card owner email|
|recipient_email|query|string|false|Gift card recipient email|

> Example responses

> 200 Response

```json
{
  "result": {
    "code": "string",
    "id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartgiftcardadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartgiftcardadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» code|string|false|none|none|
|» id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartGiftcardCount

<a id="opIdCartGiftcardCount"></a>

> Code samples

```bash
curl https://example.com/cart.giftcard.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.giftcard.count.json`

Get gift cards count.

<h3 id="cartgiftcardcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "gift_cards_count": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartgiftcardcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartgiftcardcount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» gift_cards_count|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartGiftcardList

<a id="opIdCartGiftcardList"></a>

> Code samples

```bash
curl https://example.com/cart.giftcard.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.giftcard.list.json`

Get gift cards list.

<h3 id="cartgiftcardlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|store_id|query|string|false|Store Id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "gift_card": [
      {
        "additional_fields": {},
        "amount": 0,
        "avail_to": "string",
        "code": "string",
        "created_at": "string",
        "currency_code": "string",
        "custom_fields": {},
        "free_product_ids": "string",
        "id": "string",
        "initial_amount": 0,
        "issuer_email": "string",
        "issuer_name": "string",
        "message": "string",
        "name": "string",
        "recipient_email": "string",
        "recipient_name": "string",
        "status": "string",
        "type": "string",
        "usage_history": [
          {
            "additional_fields": {},
            "amount": 0,
            "custom_fields": {},
            "order_id": "string"
          }
        ]
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartgiftcardlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Cart_GiftCard_List](#schemamodel_response_cart_giftcard_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartInfo

<a id="opIdCartInfo"></a>

> Code samples

```bash
curl https://example.com/cart.info.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.info.json`

Get cart information

<h3 id="cartinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "db_prefix": "string",
    "name": "string",
    "shipping_zones": [
      {
        "additional_fields": {},
        "code": "string",
        "country": "string",
        "country_iso2_codes": [
          "string"
        ],
        "custom_fields": {},
        "id": "string",
        "name": "string"
      }
    ],
    "stores_info": [
      {
        "active": true,
        "additional_fields": {},
        "carrier_info": [
          {
            "active": true,
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "shipping_methods": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string"
              }
            ]
          }
        ],
        "channels": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "is_enabled": true,
            "name": "string",
            "platform": "string"
          }
        ],
        "country": "string",
        "currency": {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        },
        "custom_fields": {},
        "default_warehouse_id": "string",
        "dimension_unit": "string",
        "language": "string",
        "multi_store_url": "string",
        "name": "string",
        "prices_include_tax": true,
        "root_category_id": "string",
        "store_currencies": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "default": true,
            "id": "string",
            "iso3": "string",
            "name": "string",
            "rate": 0,
            "symbol_left": "string",
            "symbol_right": "string"
          }
        ],
        "store_id": "string",
        "store_languages": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "iso_code": "string",
            "name": "string"
          }
        ],
        "store_owner_info": {
          "additional_fields": {},
          "city": "string",
          "country": "string",
          "custom_fields": {},
          "email": "string",
          "owner": "string",
          "phone": "string",
          "state": "string",
          "state_code": "string",
          "street_address": "string",
          "street_address_line_2": "string",
          "zip_code": "string"
        },
        "timezone": "string",
        "weight_unit": "string"
      }
    ],
    "url": "string",
    "version": "string",
    "warehouses": [
      {
        "additional_fields": {},
        "address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "avail": true,
        "carriers_ids": [
          "string"
        ],
        "custom_fields": {},
        "description": "string",
        "id": "string",
        "name": "string",
        "stores_ids": [
          "string"
        ]
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Cart](#schemacart)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartList

<a id="opIdCartList"></a>

> Code samples

```bash
curl https://example.com/cart.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /cart.list.json`

<aside class="warning">
This operation is deprecated
</aside>

Get list of supported carts

> Example responses

> 200 Response

```json
{
  "result": {
    "supported_carts": [
      {
        "cart_id": "string",
        "cart_name": "string",
        "cart_versions": "string",
        "params": [
          "string"
        ]
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» supported_carts|[object]|false|none|none|
|» » cart_id|string|false|none|none|
|» » cart_name|string|false|none|none|
|» » cart_versions|string|false|none|none|
|» » params|[string]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## CartMetaDataList

<a id="opIdCartMetaDataList"></a>

> Code samples

```bash
curl 'https://example.com/cart.meta_data.list.json?entity_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.meta_data.list.json`

Get entity meta data

<h3 id="cartmetadatalist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|query|string|true|Entity Id|
|entity|query|string|false|Entity|
|store_id|query|string|false|Store Id|
|key|query|string|false|Key|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "items": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "id": "string",
        "key": "string",
        "namespace": "string",
        "value": "string"
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartmetadatalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Cart_MetaData_List](#schemamodel_response_cart_metadata_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartMetaDataSet

<a id="opIdCartMetaDataSet"></a>

> Code samples

```bash
curl 'https://example.com/cart.meta_data.set.json?entity_id=string&key=string&value=string&namespace=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /cart.meta_data.set.json`

Set meta data for a specific entity

<h3 id="cartmetadataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|query|string|true|Entity Id|
|entity|query|string|false|Entity|
|store_id|query|string|false|Store Id|
|key|query|string|true|Key|
|value|query|string|true|Value|
|namespace|query|string|true|Metafield namespace|

> Example responses

> 200 Response

```json
{
  "result": {
    "id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartmetadataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartmetadataset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartMetaDataUnset

<a id="opIdCartMetaDataUnset"></a>

> Code samples

```bash
curl 'https://example.com/cart.meta_data.unset.json?entity_id=string&key=string&id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /cart.meta_data.unset.json`

Unset meta data for a specific entity

<h3 id="cartmetadataunset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|query|string|true|Entity Id|
|entity|query|string|false|Entity|
|store_id|query|string|false|Store Id|
|key|query|string|true|Key|
|id|query|string|true|Entity id|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartmetadataunset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartmetadataunset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartMethods

<a id="opIdCartMethods"></a>

> Code samples

```bash
curl https://example.com/cart.methods.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.methods.json`

Get list of cart methods

> Example responses

> 200 Response

```json
{
  "result": {
    "method": [
      "string"
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartmethods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» method|[string]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartPluginList

<a id="opIdCartPluginList"></a>

> Code samples

```bash
curl https://example.com/cart.plugin.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.plugin.list.json`

Get list of installed plugins

<h3 id="cartpluginlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_key|query|string|false|Set this parameter if bridge is already uploaded to store|
|store_id|query|string|false|Store Id|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|

> Example responses

> 200 Response

```json
{
  "result": {
    "all_plugins": 0,
    "plugins": [
      {
        "additional_fields": {},
        "all_plugins": 0,
        "custom_fields": {},
        "plugins": [
          {
            "active": true,
            "additional_fields": {},
            "custom_fields": {},
            "name": "string"
          }
        ]
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartpluginlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartpluginlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» all_plugins|integer|false|none|none|
|» plugins|[[PluginList](#schemapluginlist)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartScriptAdd

<a id="opIdCartScriptAdd"></a>

> Code samples

```bash
curl https://example.com/cart.script.add.json \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /cart.script.add.json`

Add new script to the storefront

<h3 id="cartscriptadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The user-friendly script name|
|description|query|string|false|The user-friendly description|
|html|query|string|false|An html string containing exactly one `script` tag.|
|src|query|string|false|The URL of the remote script|
|load_method|query|string|false|The load method to use for the script|
|scope|query|string|false|The page or pages on the online store where the script should be included|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "script_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartscriptadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartscriptadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» script_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartScriptDelete

<a id="opIdCartScriptDelete"></a>

> Code samples

```bash
curl 'https://example.com/cart.script.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /cart.script.delete.json`

Remove script from the storefront

<h3 id="cartscriptdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartscriptdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartscriptdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartScriptList

<a id="opIdCartScriptList"></a>

> Code samples

```bash
curl https://example.com/cart.script.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.script.list.json`

Get scripts installed to the storefront

<h3 id="cartscriptlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|script_ids|query|string|false|Retrieves only scripts with specific ids|
|store_id|query|string|false|Store Id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "scripts": [
      {
        "additional_fields": {},
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "event": "string",
        "html": "string",
        "id": "string",
        "load_method": "string",
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "scope": "string",
        "src": "string"
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartscriptlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Cart_Script_List](#schemamodel_response_cart_script_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartShippingZonesList

<a id="opIdCartShippingZonesList"></a>

> Code samples

```bash
curl https://example.com/cart.shipping_zones.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.shipping_zones.list.json`

Get list of shipping zones

<h3 id="cartshippingzoneslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "code": "string",
    "country": "string",
    "country_iso2_codes": [
      "string"
    ],
    "custom_fields": {},
    "id": "string",
    "name": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartshippingzoneslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartshippingzoneslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Cart_ShippingZone](#schemacart_shippingzone)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CartValidate

<a id="opIdCartValidate"></a>

> Code samples

```bash
curl https://example.com/cart.validate.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /cart.validate.json`

Check store availability, bridge connection for the downloadable carts, identify DB prefix, validate API accesses for API carts.

<h3 id="cartvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validate_version|query|boolean|false|Specify if api2cart should validate cart version|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="cartvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="cartvalidate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-product">product</h1>

## ProductAdd

<a id="opIdProductAdd"></a>

> Code samples

```bash
curl https://example.com/product.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "attribute_name": "string",
    "attribute_set_name": "Default",
    "avail_from": "string",
    "available_for_sale": true,
    "available_for_view": true,
    "backorder_status": "string",
    "barcode": "string",
    "best_offer": [
      "string"
    ],
    "brand_name": "string",
    "categories_ids": "string",
    "category_id": "string",
    "clear_cache": true,
    "condition": "string",
    "cost_price": 0,
    "country_of_origin": "string",
    "created_at": "string",
    "description": "string",
    "downloadable": false,
    "ean": "string",
    "files": [
      {
        "name": "string",
        "url": "string"
      }
    ],
    "group_prices": [
      {
        "group_id": "string",
        "price": 0
      }
    ],
    "gtin": "string",
    "harmonized_system_code": "string",
    "height": 0,
    "image_name": "string",
    "image_url": "string",
    "isbn": "string",
    "lang_id": "string",
    "length": 0,
    "listing_duration": "string",
    "listing_type": "FixedPrice",
    "manage_stock": true,
    "manufacturer": "string",
    "marketplace_item_properties": false,
    "meta_description": "string",
    "meta_keywords": "string",
    "meta_title": "string",
    "model": "string",
    "mpn": "string",
    "name": "string",
    "old_price": 0,
    "ordered_count": 0,
    "package_details": [
      "string"
    ],
    "payment_methods": [
      "string"
    ],
    "paypal_email": "string",
    "price": 0,
    "product_class": "string",
    "quantity": 0,
    "return_accepted": true,
    "sales_tax": [
      "string"
    ],
    "search_keywords": "string",
    "seller_profiles": {
      "payment_profile_id": "string",
      "return_profile_id": "string",
      "shipping_profile_id": "string"
    },
    "seo_url": "string",
    "shipping_details": [
      {
        "shipping_cost": 0,
        "shipping_service": "string",
        "shipping_type": "string"
      }
    ],
    "shipping_template_id": 0,
    "short_description": "string",
    "sku": "string",
    "special_price": 0,
    "specifics": [
      "string"
    ],
    "sprice_create": "string",
    "sprice_expire": "string",
    "sprice_modified": "string",
    "status": "string",
    "store_id": "string",
    "stores_ids": 0,
    "tags": "string",
    "tax_class_id": 0,
    "taxable": true,
    "tier_prices": [
      {
        "price": 0,
        "quantity": 0
      }
    ],
    "type": "simple",
    "upc": "string",
    "url": "string",
    "viewed_count": 0,
    "visible": "string",
    "warehouse_id": "string",
    "weight": 0,
    "weight_unit": "string",
    "wholesale_price": 0,
    "width": 0
  }'
```

`POST /product.add.json`

Add new product to store.

> Body parameter

```json
{
  "attribute_name": "string",
  "attribute_set_name": "Default",
  "avail_from": "string",
  "available_for_sale": true,
  "available_for_view": true,
  "backorder_status": "string",
  "barcode": "string",
  "best_offer": [
    "string"
  ],
  "brand_name": "string",
  "categories_ids": "string",
  "category_id": "string",
  "clear_cache": true,
  "condition": "string",
  "cost_price": 0,
  "country_of_origin": "string",
  "created_at": "string",
  "description": "string",
  "downloadable": false,
  "ean": "string",
  "files": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "group_prices": [
    {
      "group_id": "string",
      "price": 0
    }
  ],
  "gtin": "string",
  "harmonized_system_code": "string",
  "height": 0,
  "image_name": "string",
  "image_url": "string",
  "isbn": "string",
  "lang_id": "string",
  "length": 0,
  "listing_duration": "string",
  "listing_type": "FixedPrice",
  "manage_stock": true,
  "manufacturer": "string",
  "marketplace_item_properties": false,
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "model": "string",
  "mpn": "string",
  "name": "string",
  "old_price": 0,
  "ordered_count": 0,
  "package_details": [
    "string"
  ],
  "payment_methods": [
    "string"
  ],
  "paypal_email": "string",
  "price": 0,
  "product_class": "string",
  "quantity": 0,
  "return_accepted": true,
  "sales_tax": [
    "string"
  ],
  "search_keywords": "string",
  "seller_profiles": {
    "payment_profile_id": "string",
    "return_profile_id": "string",
    "shipping_profile_id": "string"
  },
  "seo_url": "string",
  "shipping_details": [
    {
      "shipping_cost": 0,
      "shipping_service": "string",
      "shipping_type": "string"
    }
  ],
  "shipping_template_id": 0,
  "short_description": "string",
  "sku": "string",
  "special_price": 0,
  "specifics": [
    "string"
  ],
  "sprice_create": "string",
  "sprice_expire": "string",
  "sprice_modified": "string",
  "status": "string",
  "store_id": "string",
  "stores_ids": 0,
  "tags": "string",
  "tax_class_id": 0,
  "taxable": true,
  "tier_prices": [
    {
      "price": 0,
      "quantity": 0
    }
  ],
  "type": "simple",
  "upc": "string",
  "url": "string",
  "viewed_count": 0,
  "visible": "string",
  "warehouse_id": "string",
  "weight": 0,
  "weight_unit": "string",
  "wholesale_price": 0,
  "width": 0
}
```

<h3 id="productadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductAdd](#schemaproductadd)|true|none|
|» attribute_name|body|string|false|Defines product’s attribute name separated with a comma in Magento|
|» attribute_set_name|body|string|false|Defines product’s attribute set name in Magento|
|» avail_from|body|string|false|Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time.|
|» available_for_sale|body|boolean|false|Specifies the set of visible/invisible products for sale|
|» available_for_view|body|boolean|false|Specifies the set of visible/invisible products for users|
|» backorder_status|body|string|false|Set backorder status|
|» barcode|body|string|false|A barcode is a unique code composed of numbers used as a product identifier.|
|» best_offer|body|[string]|false|The price at which Best Offers are automatically accepted.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">best_offer[<b>minimum_offer_price</b>] = decimal</br>best_offer[<b>auto_accept_price</b>] = decimal</br></code></div></div>|
|» brand_name|body|string|false|Retrieves brands specified by brand name|
|» categories_ids|body|string|false|Defines product add that is specified by comma-separated categories id|
|» category_id|body|string|false|Defines product add that is specified by category id|
|» clear_cache|body|boolean|false|Is cache clear required|
|» condition|body|string|false|The human-readable label for the condition (e.g., "New").|
|» cost_price|body|number|false|Defines new product's cost price|
|» country_of_origin|body|string|false|The country where the inventory item was made|
|» created_at|body|string|false|Defines the date of entity creation|
|» description|body|string|true|Defines product's description that has to be added|
|» downloadable|body|boolean|false|Defines whether the product is downloadable|
|» ean|body|string|false|European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.|
|» files|body|[object]|false|File Url|
|» » name|body|string|true|none|
|» » url|body|string|true|none|
|» group_prices|body|[object]|false|Defines product's group prices|
|» » group_id|body|string|false|none|
|» » price|body|number|false|none|
|» gtin|body|string|false|Global Trade Item Number. An GTIN is an identifier for trade items.|
|» harmonized_system_code|body|string|false|Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes|
|» height|body|number|false|Defines product's height|
|» image_name|body|string|false|Defines image's name|
|» image_url|body|string|false|Image Url|
|» isbn|body|string|false|International Standard Book Number. An ISBN is a unique identifier for books.|
|» lang_id|body|string|false|Language id|
|» length|body|number|false|Defines product's length|
|» listing_duration|body|string|false|Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values.|
|» listing_type|body|string|false|Indicates the selling format of the marketplace listing.|
|» manage_stock|body|boolean|false|Defines inventory tracking for product|
|» manufacturer|body|string|false|Defines product's manufacturer|
|» marketplace_item_properties|body|string|false|String containing the JSON representation of the supplied data|
|» meta_description|body|string|false|Defines unique meta description of a entity|
|» meta_keywords|body|string|false|Defines unique meta keywords for each entity|
|» meta_title|body|string|false|Defines unique meta title for each entity|
|» model|body|string|true|Defines product's model that has to be added|
|» mpn|body|string|false|Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.|
|» name|body|string|true|Defines product's name that has to be added|
|» old_price|body|number|false|Defines product's old price|
|» ordered_count|body|integer|false|Defines how many times the product was ordered|
|» package_details|body|[string]|false|If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">package_details[<b>measure_unit</b>] = string</br> Allowed measure_unit values: [English or Metric] </br> Default: Metric</br>package_details[<b>weigh_unit</b>] = string</br> Allowed weigh_unit values: [kg, g, lbs, oz]</br>package_details[<b>package_depth</b>] = decimal</br>package_details[<b>package_length</b>] = decimal</br>package_details[<b>package_width</b>] = decimal</br>package_details[<b>weight_major</b>] = decimal</br>package_details[<b>weight_minor</b>] = decimal</br>package_details[<b>shipping_package</b>] = string</br> See cart.info method, param `eBay_shipping_package_details`</code></div></div>|
|» payment_methods|body|[string]|false|Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">payment_methods[0] = string</br>payment_methods[1] = string</br></code></div></div>|
|» paypal_email|body|string|false|Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing.|
|» price|body|number|true|Defines product's price that has to be added|
|» product_class|body|string|false|A categorization for the product|
|» quantity|body|number|false|Defines product's quantity that has to be added|
|» return_accepted|body|boolean|false|Indicates whether the seller allows the buyer to return the item.|
|» sales_tax|body|[string]|false|Percent of an item's price to be charged as the sales tax for the order. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">sales_tax[<b>tax_percent</b>] = decimal (##.###)</br>sales_tax[<b>tax_state</b>] = string</br>sales_tax[<b>shipping_inc_in_tax</b>] = bool</br></code></div></div>|
|» search_keywords|body|string|false|Defines unique search keywords|
|» seller_profiles|body|object|false|If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">seller_profiles[<b>shipping_profile_id</b>] = integer</br>seller_profiles[<b>payment_profile_id</b>] = integer</br>seller_profiles[<b>return_profile_id</b>] = integer</br></code></div></div>|
|» » payment_profile_id|body|string|false|none|
|» » return_profile_id|body|string|false|none|
|» » shipping_profile_id|body|string|false|none|
|» seo_url|body|string|false|Defines unique URL for SEO|
|» shipping_details|body|[object]|false|The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">shipping_details[0][<b>shipping_type</b>] = string </br>shipping_details[0][<b>shipping_service</b>] = string</br>shipping_details[0][<b>shipping_cost</b>] = decimal</br>shipping_details[1][<b>shipping_type</b>] = string </br>shipping_details[1][<b>shipping_service</b>] = string</br>shipping_details[1][<b>shipping_cost</b>] = decimal</br></code></div></div>|
|» » shipping_cost|body|number|false|none|
|» » shipping_service|body|string|false|none|
|» » shipping_type|body|string|false|none|
|» shipping_template_id|body|integer|false|The numeric ID of the shipping template associated with the products in Etsy.|
|» short_description|body|string|false|Defines short description|
|» sku|body|string|false|Defines product's sku that has to be added|
|» special_price|body|number|false|Defines product's model that has to be added|
|» specifics|body|[string]|false|An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.<br>        <hr><br>        <div style="font-style:normal">Param structure:<br>          <div style="margin-left: 2%;"><br>            <code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;"><br>              specifics[int][<b>name</b>] = string</br><br>              specifics[int][<b>value</b>] = string</br><br>            </code><br>          </div><br>        </div>|
|» sprice_create|body|string|false|Defines the date of special price creation|
|» sprice_expire|body|string|false|Defines the term of special price offer duration|
|» sprice_modified|body|string|false|Defines the date of special price modification|
|» status|body|string|false|Defines product's status|
|» store_id|body|string|false|Store Id|
|» stores_ids|body|string|false|Assign product to the stores that is specified by comma-separated stores' id|
|» tags|body|string|false|Product tags|
|» tax_class_id|body|integer|false|Defines tax classes where entity has to be added|
|» taxable|body|boolean|false|Specifies whether a tax is charged|
|» tier_prices|body|[object]|false|Defines product's tier prices|
|» » price|body|number|false|none|
|» » quantity|body|number|false|none|
|» type|body|string|false|Defines product's type|
|» upc|body|string|false|Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.|
|» url|body|string|false|Defines unique product's URL|
|» viewed_count|body|integer|false|Specifies the number of product's reviews|
|» visible|body|string|false|Set visibility status|
|» warehouse_id|body|string|false|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|
|» weight|body|number|false|Weight|
|» weight_unit|body|string|false|Weight Unit|
|» wholesale_price|body|number|false|Defines product's sale price|
|» width|body|number|false|Defines product's width|

> Example responses

> 200 Response

```json
{
  "result": {
    "product_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» product_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductAttributeList

<a id="opIdProductAttributeList"></a>

> Code samples

```bash
curl 'https://example.com/product.attribute.list.json?product_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.attribute.list.json`

Get list of attributes and values.

<h3 id="productattributelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Retrieves attributes specified by product id|
|attribute_id|query|string|false|Retrieves info for specified attribute_id|
|variant_id|query|string|false|Defines product's variants specified by variant id|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|attribute_group_id|query|string|false|Filter by attribute_group_id|
|set_name|query|string|false|Retrieves attributes specified by set_name in Magento|
|lang_id|query|string|false|Retrieves attributes specified by language id|
|store_id|query|string|false|Retrieves attributes specified by store id|
|sort_by|query|string|false|Set field to sort by|
|sort_direction|query|string|false|Set sorting direction|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "attribute": [
      {
        "additional_fields": {},
        "attribute_group_id": "string",
        "attribute_id": "string",
        "code": "string",
        "custom_fields": {},
        "lang_id": "string",
        "name": "string",
        "position": 0,
        "product_id": "string",
        "required": true,
        "store_id": "string",
        "type": "string",
        "value": "string",
        "variant_id": "string",
        "visible": true
      }
    ],
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productattributelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Product_Attribute_List](#schemamodel_response_product_attribute_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductAttributeValueSet

<a id="opIdProductAttributeValueSet"></a>

> Code samples

```bash
curl 'https://example.com/product.attribute.value.set.json?product_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.attribute.value.set.json`

Set attribute value to product.

<h3 id="productattributevalueset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the attribute should be added|
|attribute_id|query|string|false|Filter by attribute_id|
|attribute_group_id|query|string|false|Filter by attribute_group_id|
|attribute_name|query|string|false|Define attribute name|
|value|query|string|false|Define attribute value|
|value_id|query|integer|false|Define attribute value id|
|lang_id|query|string|false|Language id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "attribute_id": "string",
    "product_id": "string",
    "value_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productattributevalueset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productattributevalueset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» attribute_id|string|false|none|none|
|» product_id|string|false|none|none|
|» value_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductAttributeValueUnset

<a id="opIdProductAttributeValueUnset"></a>

> Code samples

```bash
curl 'https://example.com/product.attribute.value.unset.json?product_id=string&attribute_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.attribute.value.unset.json`

Removes attribute value for a product.

<h3 id="productattributevalueunset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Product id|
|attribute_id|query|string|true|Attribute Id|
|store_id|query|string|false|Store Id|
|include_default|query|boolean|false|Boolean, whether or not to unset default value of the attribute, if applicable|
|reindex|query|boolean|false|Is reindex required|
|clear_cache|query|boolean|false|Is cache clear required|

> Example responses

> 200 Response

```json
{
  "result": {
    "success": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productattributevalueunset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productattributevalueunset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» success|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductBrandList

<a id="opIdProductBrandList"></a>

> Code samples

```bash
curl https://example.com/product.brand.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.brand.list.json`

Get list of brands from your store.

<h3 id="productbrandlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|brand_ids|query|string|false|Retrieves brands specified by brand ids|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "result": {
    "product": [
      {
        "active": true,
        "additional_fields": {},
        "created_time": "string",
        "custom_fields": {},
        "full_description": "string",
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "modified_time": "string",
        "name": "string",
        "short_description": "string",
        "stores_ids": [
          "string"
        ],
        "url": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productbrandlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productbrandlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» product|[[Brand](#schemabrand)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductChildItemFind

<a id="opIdProductChildItemFind"></a>

> Code samples

```bash
curl 'https://example.com/product.child_item.find.json?find_value=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.child_item.find.json`

Search product child item (bundled item or configurable product variant) in store catalog.

<h3 id="productchilditemfind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|find_value|query|string|true|Entity search that is specified by some value|
|find_where|query|string|false|Entity search that is specified by the comma-separated unique fields|
|find_params|query|string|false|Entity search that is specified by comma-separated parameters|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "children": [
      {
        "additional_fields": {},
        "advanced_price": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "expire_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "group_id": "string",
            "id": "string",
            "quantity_from": 0,
            "start_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "value": 0
          }
        ],
        "allow_backorders": true,
        "avail_for_sale": true,
        "combination": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "option_id": "string",
            "option_value_id": "string"
          }
        ],
        "cost_price": 0,
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "default_price": 0,
        "default_qty_in_pack": 0,
        "dimensions_unit": "string",
        "ean": "string",
        "full_description": "string",
        "gtin": "string",
        "height": 0,
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "in_stock": true,
        "inventory": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "in_stock": true,
            "priority": 0,
            "quantity": 0,
            "warehouse_id": "string"
          }
        ],
        "inventory_level": 0,
        "is_qty_in_pack_fixed": true,
        "isbn": "string",
        "length": 0,
        "list_price": 0,
        "manage_stock": true,
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "min_quantity": 0,
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "mpn": "string",
        "name": "string",
        "parent_id": "string",
        "short_description": "string",
        "sku": "string",
        "sort_order": 0,
        "tax_class_id": "string",
        "upc": "string",
        "weight": 0,
        "weight_unit": "string",
        "wholesale_price": 0,
        "width": 0
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productchilditemfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productchilditemfind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» children|[[Child](#schemachild)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductChildItemInfo

<a id="opIdProductChildItemInfo"></a>

> Code samples

```bash
curl 'https://example.com/product.child_item.info.json?product_id=string&id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.child_item.info.json`

Get child for specific product.

<h3 id="productchilditeminfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|product_id|query|string|true|Filter by parent product id|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|currency_id|query|string|false|Currency Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "advanced_price": [
      {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "expire_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "group_id": "string",
        "id": "string",
        "quantity_from": 0,
        "start_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "value": 0
      }
    ],
    "allow_backorders": true,
    "avail_for_sale": true,
    "combination": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "option_id": "string",
        "option_value_id": "string"
      }
    ],
    "cost_price": 0,
    "created_time": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "custom_fields": {},
    "default_price": 0,
    "default_qty_in_pack": 0,
    "dimensions_unit": "string",
    "ean": "string",
    "full_description": "string",
    "gtin": "string",
    "height": 0,
    "id": "string",
    "images": [
      {
        "additional_fields": {},
        "alt": "string",
        "avail": true,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "file_name": "string",
        "http_path": "string",
        "id": "string",
        "mime-type": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "size": 0,
        "sort_order": 0,
        "type": "string"
      }
    ],
    "in_stock": true,
    "inventory": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "in_stock": true,
        "priority": 0,
        "quantity": 0,
        "warehouse_id": "string"
      }
    ],
    "inventory_level": 0,
    "is_qty_in_pack_fixed": true,
    "isbn": "string",
    "length": 0,
    "list_price": 0,
    "manage_stock": true,
    "meta_description": "string",
    "meta_keywords": "string",
    "meta_title": "string",
    "min_quantity": 0,
    "modified_time": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "mpn": "string",
    "name": "string",
    "parent_id": "string",
    "short_description": "string",
    "sku": "string",
    "sort_order": 0,
    "tax_class_id": "string",
    "upc": "string",
    "weight": 0,
    "weight_unit": "string",
    "wholesale_price": 0,
    "width": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productchilditeminfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productchilditeminfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Child](#schemachild)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductChildItemList

<a id="opIdProductChildItemList"></a>

> Code samples

```bash
curl https://example.com/product.child_item.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.child_item.list.json`

Get child items list of specific product(s).

<h3 id="productchilditemlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve products child items via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|product_id|query|string|false|Filter by parent product id|
|product_ids|query|string|false|Filter by parent product ids|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|currency_id|query|string|false|Currency Id|
|avail_sale|query|boolean|false|Specifies the set of available/not available products for sale|
|report_request_id|query|string|false|Report request id|
|disable_report_cache|query|boolean|false|Disable report cache for current request|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "children": [
      {
        "additional_fields": {},
        "advanced_price": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "expire_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "group_id": "string",
            "id": "string",
            "quantity_from": 0,
            "start_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "value": 0
          }
        ],
        "allow_backorders": true,
        "avail_for_sale": true,
        "combination": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "option_id": "string",
            "option_value_id": "string"
          }
        ],
        "cost_price": 0,
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "default_price": 0,
        "default_qty_in_pack": 0,
        "dimensions_unit": "string",
        "ean": "string",
        "full_description": "string",
        "gtin": "string",
        "height": 0,
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "in_stock": true,
        "inventory": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "in_stock": true,
            "priority": 0,
            "quantity": 0,
            "warehouse_id": "string"
          }
        ],
        "inventory_level": 0,
        "is_qty_in_pack_fixed": true,
        "isbn": "string",
        "length": 0,
        "list_price": 0,
        "manage_stock": true,
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "min_quantity": 0,
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "mpn": "string",
        "name": "string",
        "parent_id": "string",
        "short_description": "string",
        "sku": "string",
        "sort_order": 0,
        "tax_class_id": "string",
        "upc": "string",
        "weight": 0,
        "weight_unit": "string",
        "wholesale_price": 0,
        "width": 0
      }
    ],
    "custom_fields": {},
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productchilditemlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Product_ChildItem_List](#schemamodel_response_product_childitem_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductCount

<a id="opIdProductCount"></a>

> Code samples

```bash
curl https://example.com/product.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.count.json`

Count products in store.

<h3 id="productcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|query|string|false|Counts products specified by category id|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|avail_view|query|boolean|false|Specifies the set of visible/invisible products|
|avail_sale|query|boolean|false|Specifies the set of available/not available products for sale|
|store_id|query|string|false|Counts products specified by store id|
|lang_id|query|string|false|Counts products specified by language id|
|product_ids|query|string|false|Counts products specified by product ids|
|report_request_id|query|string|false|Report request id|
|disable_report_cache|query|boolean|false|Disable report cache for current request|
|brand_name|query|string|false|Retrieves brands specified by brand name|
|product_attributes|query|[string]|false|Defines product attributes|
|status|query|string|false|Defines product's status|
|type|query|string|false|Defines products's type|

> Example responses

> 200 Response

```json
{
  "result": {
    "products_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productcount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» products_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductCurrencyAdd

<a id="opIdProductCurrencyAdd"></a>

> Code samples

```bash
curl 'https://example.com/product.currency.add.json?iso3=string&rate=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.currency.add.json`

Add currency and/or set default in store

<h3 id="productcurrencyadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|iso3|query|string|true|Specifies standardized currency code|
|rate|query|number|true|Defines the numerical identifier against to the major currency|
|name|query|string|false|Defines currency's name|
|avail|query|boolean|false|Specifies whether the currency is available|
|symbol_left|query|string|false|Defines the symbol that is located before the currency|
|symbol_right|query|string|false|Defines the symbol that is located after the currency|
|default|query|boolean|false|Specifies currency's default meaning|

> Example responses

> 200 Response

```json
{
  "result": {
    "currency_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productcurrencyadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productcurrencyadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» currency_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductCurrencyList

<a id="opIdProductCurrencyList"></a>

> Code samples

```bash
curl https://example.com/product.currency.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.currency.list.json`

Get list of currencies

<h3 id="productcurrencylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|default|query|boolean|false|Specifies the set of default/not default currencies|
|avail|query|boolean|false|Specifies the set of available/not available currencies|

> Example responses

> 200 Response

```json
{
  "result": {
    "currency": [
      {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "default": true,
        "id": "string",
        "iso3": "string",
        "name": "string",
        "rate": 0,
        "symbol_left": "string",
        "symbol_right": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productcurrencylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productcurrencylist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» currency|[[Currency](#schemacurrency)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductDelete

<a id="opIdProductDelete"></a>

> Code samples

```bash
curl 'https://example.com/product.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /product.delete.json`

Product delete

<h3 id="productdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Product id that will be removed|

> Example responses

> 200 Response

```json
{
  "result": {
    "delete_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» delete_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductFields

<a id="opIdProductFields"></a>

> Code samples

```bash
curl https://example.com/product.fields.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.fields.json`

Retrieve all available fields for product item in store.

> Example responses

> 200 Response

```json
{
  "result": {},
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productfields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productfields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductFind

<a id="opIdProductFind"></a>

> Code samples

```bash
curl 'https://example.com/product.find.json?find_value=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.find.json`

Search product in store catalog. "Apple" is specified here by default.

<h3 id="productfind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|find_value|query|string|true|Entity search that is specified by some value|
|find_where|query|string|false|Entity search that is specified by the comma-separated unique fields|
|find_params|query|string|false|Entity search that is specified by comma-separated parameters|
|find_what|query|string|false|Parameter's value specifies the entity that has to be found|
|lang_id|query|string|false|Search products specified by language id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "product": [
      {
        "description": "string",
        "id": "string",
        "name": "string",
        "price": 0
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productfind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» product|[object]|false|none|none|
|» » description|string|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|» » price|number|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductImageAdd

<a id="opIdProductImageAdd"></a>

> Code samples

```bash
curl https://example.com/product.image.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "content": "string",
    "image_name": "string",
    "label": "string",
    "lang_id": "string",
    "mime": "string",
    "position": 0,
    "product_id": "string",
    "product_variant_id": 0,
    "store_id": "string",
    "type": "small",
    "url": "string",
    "variant_ids": "string"
  }'
```

`POST /product.image.add.json`

Add image to product

> Body parameter

```json
{
  "content": "string",
  "image_name": "string",
  "label": "string",
  "lang_id": "string",
  "mime": "string",
  "position": 0,
  "product_id": "string",
  "product_variant_id": 0,
  "store_id": "string",
  "type": "small",
  "url": "string",
  "variant_ids": "string"
}
```

<h3 id="productimageadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductImageAdd](#schemaproductimageadd)|true|none|
|» content|body|string|false|Content(body) encoded in base64 of image file|
|» image_name|body|string|true|Defines image's name|
|» label|body|string|false|Defines alternative text that has to be attached to the picture|
|» lang_id|body|string|false|Add product image on specified language id|
|» mime|body|string|false|Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.|
|» position|body|integer|false|Defines image’s position in the list|
|» product_id|body|string|false|Defines product id where the image should be added|
|» product_variant_id|body|integer|false|Defines product's variants specified by variant id|
|» store_id|body|string|false|Store Id|
|» type|body|string|true|Defines image's types that are specified by comma-separated list|
|» url|body|string|false|Defines URL of the image that has to be added|
|» variant_ids|body|string|false|Defines product's variants ids|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|small|
|» type|base|
|» type|additional|
|» type|thumbnail|

> Example responses

> 200 Response

```json
{
  "result": {
    "id": "string",
    "image_path": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productimageadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productimageadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» id|string|false|none|none|
|» image_path|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductImageDelete

<a id="opIdProductImageDelete"></a>

> Code samples

```bash
curl 'https://example.com/product.image.delete.json?product_id=string&id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /product.image.delete.json`

Delete image

<h3 id="productimagedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the image should be deleted|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productimagedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productimagedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductImageUpdate

<a id="opIdProductImageUpdate"></a>

> Code samples

```bash
curl 'https://example.com/product.image.update.json?product_id=string&id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /product.image.update.json`

Update details of image

<h3 id="productimageupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the image should be updated|
|image_name|query|string|false|Defines image's name|
|type|query|string|false|Defines image's types that are specified by comma-separated list|
|label|query|string|false|Defines alternative text that has to be attached to the picture|
|position|query|integer|false|Defines image’s position in the list|
|id|query|string|true|Defines image update specified by image id|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|hidden|query|boolean|false|Define is hide image|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productimageupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productimageupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductInfo

<a id="opIdProductInfo"></a>

> Code samples

```bash
curl 'https://example.com/product.info.json?id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.info.json`

Get product info about product ID *** or specify other product ID.

<h3 id="productinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Retrieves product's info specified by product id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Retrieves product info specified by store id|
|lang_id|query|string|false|Retrieves product info specified by language id|
|currency_id|query|string|false|Currency Id|
|report_request_id|query|string|false|Report request id|
|disable_report_cache|query|boolean|false|Disable report cache for current request|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "advanced_price": [
      {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "expire_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "group_id": "string",
        "id": "string",
        "quantity_from": 0,
        "start_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "value": 0
      }
    ],
    "avail_sale": true,
    "avail_view": true,
    "backorders": "string",
    "categories_ids": [
      "string"
    ],
    "cost_price": 0,
    "create_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "custom_fields": {},
    "description": "string",
    "dimensions_unit": "string",
    "group_items": [
      {
        "additional_fields": {},
        "child_item_id": "string",
        "custom_fields": {},
        "default_qty_in_pack": "string",
        "is_qty_in_pack_fixed": true,
        "product_id": "string"
      }
    ],
    "group_price": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "expire_time": "string",
        "group_id": "string",
        "id": "string",
        "price": 0,
        "quantity": 0,
        "start_time": "string",
        "store_id": "string"
      }
    ],
    "height": 0,
    "id": "string",
    "images": [
      {
        "additional_fields": {},
        "alt": "string",
        "avail": true,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "file_name": "string",
        "http_path": "string",
        "id": "string",
        "mime-type": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "size": 0,
        "sort_order": 0,
        "type": "string"
      }
    ],
    "inventory": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "in_stock": true,
        "priority": 0,
        "quantity": 0,
        "warehouse_id": "string"
      }
    ],
    "is_downloadable": true,
    "is_stock_managed": true,
    "is_virtual": true,
    "length": 0,
    "manage_stock": "string",
    "meta_description": "string",
    "meta_keywords": "string",
    "meta_title": "string",
    "modified_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "name": "string",
    "price": 0,
    "product_options": [
      {
        "additional_fields": {},
        "available": true,
        "custom_fields": {},
        "description": "string",
        "id": "string",
        "name": "string",
        "option_items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "price": "string",
            "product_option_item_id": "string",
            "quantity": 0,
            "sku": "string",
            "sort_order": 0,
            "type_price": "string",
            "weight": "string"
          }
        ],
        "product_option_id": "string",
        "required": true,
        "sort_order": 0,
        "type": "string",
        "used_in_combination": true
      }
    ],
    "quantity": 0,
    "related_products_ids": [
      "string"
    ],
    "seo_url": "string",
    "short_description": "string",
    "sort_order": 0,
    "special_price": {
      "additional_fields": {},
      "avail": true,
      "created_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "expired_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "value": 0
    },
    "stores_ids": [
      "string"
    ],
    "tax_class_id": "string",
    "tier_price": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "price": 0,
        "qty": 0
      }
    ],
    "type": "string",
    "u_brand": "string",
    "u_brand_id": "string",
    "u_model": "string",
    "u_mpn": "string",
    "u_sku": "string",
    "u_upc": "string",
    "url": "string",
    "weight": 0,
    "weight_unit": "string",
    "width": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Product](#schemaproduct)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductList

<a id="opIdProductList"></a>

> Code samples

```bash
curl https://example.com/product.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.list.json`

Get list of products from your store. Returns 10 products by default.

<h3 id="productlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve products via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|category_id|query|string|false|Retrieves products specified by category id|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|avail_view|query|boolean|false|Specifies the set of visible/invisible products|
|avail_sale|query|boolean|false|Specifies the set of available/not available products for sale|
|store_id|query|string|false|Retrieves products specified by store id|
|lang_id|query|string|false|Retrieves products specified by language id|
|currency_id|query|string|false|Currency Id|
|product_ids|query|string|false|Retrieves products specified by product ids|
|since_id|query|integer|false|Retrieve entities starting from the specified id.|
|report_request_id|query|string|false|Report request id|
|disable_report_cache|query|boolean|false|Disable report cache for current request|
|sort_by|query|string|false|Set field to sort by|
|sort_direction|query|string|false|Set sorting direction|
|sku|query|string|false|Filter by product's sku|
|disable_cache|query|boolean|false|Disable cache for current request|
|brand_name|query|string|false|Retrieves brands specified by brand name|
|product_attributes|query|[string]|false|Defines product attributes|
|status|query|string|false|Defines product's status|
|type|query|string|false|Defines products's type|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "product": [
      {
        "additional_fields": {},
        "advanced_price": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "expire_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "group_id": "string",
            "id": "string",
            "quantity_from": 0,
            "start_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "value": 0
          }
        ],
        "avail_sale": true,
        "avail_view": true,
        "backorders": "string",
        "categories_ids": [
          "string"
        ],
        "cost_price": 0,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "dimensions_unit": "string",
        "group_items": [
          {
            "additional_fields": {},
            "child_item_id": "string",
            "custom_fields": {},
            "default_qty_in_pack": "string",
            "is_qty_in_pack_fixed": true,
            "product_id": "string"
          }
        ],
        "group_price": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "expire_time": "string",
            "group_id": "string",
            "id": "string",
            "price": 0,
            "quantity": 0,
            "start_time": "string",
            "store_id": "string"
          }
        ],
        "height": 0,
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "inventory": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "in_stock": true,
            "priority": 0,
            "quantity": 0,
            "warehouse_id": "string"
          }
        ],
        "is_downloadable": true,
        "is_stock_managed": true,
        "is_virtual": true,
        "length": 0,
        "manage_stock": "string",
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "price": 0,
        "product_options": [
          {
            "additional_fields": {},
            "available": true,
            "custom_fields": {},
            "description": "string",
            "id": "string",
            "name": "string",
            "option_items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "id": "string",
                "name": "string",
                "price": "string",
                "product_option_item_id": "string",
                "quantity": 0,
                "sku": "string",
                "sort_order": 0,
                "type_price": "string",
                "weight": "string"
              }
            ],
            "product_option_id": "string",
            "required": true,
            "sort_order": 0,
            "type": "string",
            "used_in_combination": true
          }
        ],
        "quantity": 0,
        "related_products_ids": [
          "string"
        ],
        "seo_url": "string",
        "short_description": "string",
        "sort_order": 0,
        "special_price": {
          "additional_fields": {},
          "avail": true,
          "created_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "custom_fields": {},
          "expired_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "modified_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "value": 0
        },
        "stores_ids": [
          "string"
        ],
        "tax_class_id": "string",
        "tier_price": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "price": 0,
            "qty": 0
          }
        ],
        "type": "string",
        "u_brand": "string",
        "u_brand_id": "string",
        "u_model": "string",
        "u_mpn": "string",
        "u_sku": "string",
        "u_upc": "string",
        "url": "string",
        "weight": 0,
        "weight_unit": "string",
        "width": 0
      }
    ],
    "products_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Product_List](#schemamodel_response_product_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductManufacturerAdd

<a id="opIdProductManufacturerAdd"></a>

> Code samples

```bash
curl 'https://example.com/product.manufacturer.add.json?product_id=string&manufacturer=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.manufacturer.add.json`

Add manufacturer to store and assign to product

<h3 id="productmanufactureradd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines products specified by product id|
|manufacturer|query|string|true|Defines product’s manufacturer's name|

> Example responses

> 200 Response

```json
{
  "result": {
    "manufacturer_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productmanufactureradd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productmanufactureradd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» manufacturer_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductOptionAdd

<a id="opIdProductOptionAdd"></a>

> Code samples

```bash
curl 'https://example.com/product.option.add.json?name=string&type=option_type_select' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.option.add.json`

Add product option from store.

<h3 id="productoptionadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Defines option's name|
|type|query|string|true|Defines option's type that has to be added|
|product_id|query|string|false|Defines product id where the option should be added|
|default_option_value|query|string|false|Defines default option value that has to be added|
|option_values|query|string|false|Defines option values that has to be added|
|description|query|string|false|Defines option's description|
|avail|query|boolean|false|Defines whether the option is available|
|sort_order|query|integer|false|Sort number in the list|
|required|query|boolean|false|Defines if the option is required|
|clear_cache|query|boolean|false|Is cache clear required|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|option_type_select|
|type|option_type_text|
|type|option_type_radio|
|type|option_type_checkbox|
|type|option_type_textarea|
|type|option_type_readonly|
|type|option_type_multiselect|
|type|option_type_multicheckbox|
|type|option_type_file|
|type|option_type_date|
|type|option_type_datetime|
|type|option_type_time|

> Example responses

> 200 Response

```json
{
  "result": {
    "option_id": "string",
    "product_option_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productoptionadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productoptionadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» option_id|string|false|none|none|
|» product_option_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductOptionAssign

<a id="opIdProductOptionAssign"></a>

> Code samples

```bash
curl 'https://example.com/product.option.assign.json?product_id=string&option_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.option.assign.json`

Assign option from product.

<h3 id="productoptionassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the option should be assigned|
|option_id|query|string|true|Defines option id which has to be assigned|
|required|query|boolean|false|Defines if the option is required|
|sort_order|query|integer|false|Sort number in the list|
|option_values|query|string|false|Defines option values that has to be assigned|
|clear_cache|query|boolean|false|Is cache clear required|

> Example responses

> 200 Response

```json
{
  "result": {
    "product_option_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productoptionassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productoptionassign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» product_option_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductOptionList

<a id="opIdProductOptionList"></a>

> Code samples

```bash
curl https://example.com/product.option.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.option.list.json`

Get list of options.

<h3 id="productoptionlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|product_id|query|string|false|Retrieves products' options specified by product id|
|lang_id|query|string|false|Language id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "option": [
      {
        "additional_fields": {},
        "available": true,
        "custom_fields": {},
        "description": "string",
        "id": "string",
        "name": "string",
        "option_items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "price": "string",
            "product_option_item_id": "string",
            "quantity": 0,
            "sku": "string",
            "sort_order": 0,
            "type_price": "string",
            "weight": "string"
          }
        ],
        "product_option_id": "string",
        "required": true,
        "sort_order": 0,
        "type": "string",
        "used_in_combination": true
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productoptionlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productoptionlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» option|[[Product_Option](#schemaproduct_option)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductOptionValueAdd

<a id="opIdProductOptionValueAdd"></a>

> Code samples

```bash
curl 'https://example.com/product.option.value.add.json?product_id=string&option_id=string&option_value=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.option.value.add.json`

Add product option item from option.

<h3 id="productoptionvalueadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the option value should be added|
|option_id|query|string|true|Defines option id where the value has to be added|
|option_value|query|string|true|Defines option value that has to be added|
|sort_order|query|integer|false|Sort number in the list|
|clear_cache|query|boolean|false|Is cache clear required|

> Example responses

> 200 Response

```json
{
  "result": {
    "option_value_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productoptionvalueadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productoptionvalueadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» option_value_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductOptionValueAssign

<a id="opIdProductOptionValueAssign"></a>

> Code samples

```bash
curl 'https://example.com/product.option.value.assign.json?product_option_id=0&option_value_id=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.option.value.assign.json`

Assign product option item from product.

<h3 id="productoptionvalueassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_option_id|query|integer|true|Defines product's option id where the value has to be assigned|
|option_value_id|query|integer|true|Defines value id that has to be assigned|
|clear_cache|query|boolean|false|Is cache clear required|

> Example responses

> 200 Response

```json
{
  "result": {
    "product_option_value_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productoptionvalueassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productoptionvalueassign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» product_option_value_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductOptionValueUpdate

<a id="opIdProductOptionValueUpdate"></a>

> Code samples

```bash
curl 'https://example.com/product.option.value.update.json?product_id=string&option_id=string&option_value_id=0&option_value=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /product.option.value.update.json`

Update product option item from option.

<h3 id="productoptionvalueupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the option value should be updated|
|option_id|query|string|true|Defines option id where the value has to be updated|
|option_value_id|query|integer|true|Defines value id that has to be assigned|
|option_value|query|string|true|Defines option value that has to be added|
|price|query|number|false|Defines new product option price|
|quantity|query|number|false|Defines new products' options quantity|
|clear_cache|query|boolean|false|Is cache clear required|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productoptionvalueupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productoptionvalueupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductPriceAdd

<a id="opIdProductPriceAdd"></a>

> Code samples

```bash
curl https://example.com/product.price.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "group_prices": [
      {
        "group_id": "string",
        "price": 0
      }
    ],
    "product_id": "string"
  }'
```

`POST /product.price.add.json`

Add some prices to the product.

> Body parameter

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "price": 0
    }
  ],
  "product_id": "string"
}
```

<h3 id="productpriceadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductPriceAdd](#schemaproductpriceadd)|true|none|
|» group_prices|body|[object]|false|Defines product's group prices|
|» » group_id|body|string|false|none|
|» » price|body|number|false|none|
|» product_id|body|string|false|Defines the product to which the price has to be added|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productpriceadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productpriceadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductPriceDelete

<a id="opIdProductPriceDelete"></a>

> Code samples

```bash
curl 'https://example.com/product.price.delete.json?product_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /product.price.delete.json`

Delete some prices of the product

<h3 id="productpricedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines the product where the price has to be deleted|
|group_prices|query|string|false|Defines product's group prices|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productpricedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productpricedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductPriceUpdate

<a id="opIdProductPriceUpdate"></a>

> Code samples

```bash
curl https://example.com/product.price.update.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "group_prices": [
      {
        "group_id": "string",
        "id": 0,
        "price": 0
      }
    ],
    "product_id": "string"
  }'
```

`PUT /product.price.update.json`

Update some prices of the product.

> Body parameter

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "id": 0,
      "price": 0
    }
  ],
  "product_id": "string"
}
```

<h3 id="productpriceupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductPriceUpdate](#schemaproductpriceupdate)|true|none|
|» group_prices|body|[object]|false|Defines product's group prices|
|» » group_id|body|string|false|none|
|» » id|body|integer|false|none|
|» » price|body|number|false|none|
|» product_id|body|string|false|Defines the product where the price has to be updated|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productpriceupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productpriceupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductReviewList

<a id="opIdProductReviewList"></a>

> Code samples

```bash
curl 'https://example.com/product.review.list.json?product_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.review.list.json`

Get reviews of a specific product.

<h3 id="productreviewlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|product_id|query|string|true|Product id|
|ids|query|string|false|Retrieves reviews specified by ids|
|store_id|query|string|false|Store Id|
|status|query|string|false|Defines status|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "result": {
    "reviews": [
      {
        "additional_fields": {},
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "customer_id": "string",
        "email": "string",
        "id": "string",
        "message": "string",
        "nick_name": "string",
        "product_id": "string",
        "rating": 0,
        "ratings": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "value": 0
          }
        ],
        "status": "string",
        "summary": "string"
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productreviewlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productreviewlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» reviews|[[Product_Review](#schemaproduct_review)]|false|none|none|
|» total_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductStoreAssign

<a id="opIdProductStoreAssign"></a>

> Code samples

```bash
curl 'https://example.com/product.store.assign.json?product_id=string&store_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /product.store.assign.json`

Assign product to store

<h3 id="productstoreassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines id of the product which should be assigned to a store|
|store_id|query|string|true|Defines id of the store product should be assigned to|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productstoreassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productstoreassign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductTaxAdd

<a id="opIdProductTaxAdd"></a>

> Code samples

```bash
curl https://example.com/product.tax.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "name": "string",
    "product_id": "string",
    "tax_rates": [
      {
        "name": "string",
        "type": "string",
        "value": 0
      }
    ]
  }'
```

`POST /product.tax.add.json`

Add tax class and tax rate to store and assign to product.

> Body parameter

```json
{
  "name": "string",
  "product_id": "string",
  "tax_rates": [
    {
      "name": "string",
      "type": "string",
      "value": 0
    }
  ]
}
```

<h3 id="producttaxadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductTaxAdd](#schemaproducttaxadd)|true|none|
|» name|body|string|true|Defines tax class name where tax has to be added|
|» product_id|body|string|false|Defines products specified by product id|
|» tax_rates|body|[object]|true|Defines tax rates of specified tax classes|
|» » name|body|string|false|none|
|» » type|body|string|false|none|
|» » value|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "tax_class_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="producttaxadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="producttaxadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» tax_class_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductUpdate

<a id="opIdProductUpdate"></a>

> Code samples

```bash
curl 'https://example.com/product.update.json?id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /product.update.json`

Update price and quantity for a specific product

<h3 id="productupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Defines product id that has to be updated|
|model|query|string|false|Defines product model that has to be updated|
|old_price|query|number|false|Defines product's old price|
|price|query|number|false|Defines new product's price|
|special_price|query|number|false|Defines new product's special price|
|sprice_create|query|string|false|Defines the date of special price creation|
|sprice_expire|query|string|false|Defines the term of special price offer duration|
|cost_price|query|number|false|Defines new product's cost price|
|retail_price|query|number|false|Defines new product's retail price|
|quantity|query|number|false|Defines new product's quantity|
|weight|query|number|false|Weight|
|increase_quantity|query|number|false|Defines the incremental changes in product quantity|
|reduce_quantity|query|number|false|Defines the decrement changes in product quantity|
|warehouse_id|query|string|false|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|
|reserve_quantity|query|number|false|This parameter allows to reserve/unreserve product quantity.|
|manage_stock|query|boolean|false|Defines inventory tracking for product|
|backorder_status|query|string|false|Set backorder status|
|name|query|string|false|Defines product's name that has to be updated|
|sku|query|string|false|Defines new product's sku|
|visible|query|string|false|Set visibility status|
|manufacturer|query|string|false|Defines product's manufacturer|
|manufacturer_id|query|string|false|Defines product's manufacturer by manufacturer_id|
|categories_ids|query|string|false|Defines product add that is specified by comma-separated categories id|
|description|query|string|false|Defines new product's description|
|short_description|query|string|false|Defines short description|
|meta_title|query|string|false|Defines unique meta title for each entity|
|meta_keywords|query|string|false|Defines unique meta keywords for each entity|
|meta_description|query|string|false|Defines unique meta description of a entity|
|store_id|query|string|false|Defines store id where the product should be found|
|lang_id|query|string|false|Language id|
|in_stock|query|boolean|false|Set stock status|
|status|query|string|false|Defines product's status|
|seo_url|query|string|false|Defines unique URL for SEO|
|report_request_id|query|string|false|Report request id|
|disable_report_cache|query|boolean|false|Disable report cache for current request|
|reindex|query|boolean|false|Is reindex required|
|tags|query|string|false|Product tags|
|clear_cache|query|boolean|false|Is cache clear required|
|gtin|query|string|false|Global Trade Item Number. An GTIN is an identifier for trade items.|
|taxable|query|boolean|false|Specifies whether a tax is charged|
|product_class|query|string|false|A categorization for the product|
|height|query|number|false|Defines product's height|
|length|query|number|false|Defines product's length|
|width|query|number|false|Defines product's width|
|harmonized_system_code|query|string|false|Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes|
|country_of_origin|query|string|false|The country where the inventory item was made|
|search_keywords|query|string|false|Defines unique search keywords|
|barcode|query|string|false|A barcode is a unique code composed of numbers used as a product identifier.|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantAdd

<a id="opIdProductVariantAdd"></a>

> Code samples

```bash
curl https://example.com/product.variant.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "attributes": [
      {
        "attribute_name": "string",
        "attribute_price": 0,
        "attribute_value": "string"
      }
    ],
    "available_for_sale": true,
    "available_for_view": true,
    "barcode": "string",
    "clear_cache": true,
    "cost_price": 0,
    "country_of_origin": "string",
    "created_at": "string",
    "description": "string",
    "harmonized_system_code": "string",
    "height": 0,
    "lang_id": "string",
    "length": 0,
    "manage_stock": true,
    "manufacturer": "string",
    "meta_description": "string",
    "meta_keywords": "string",
    "meta_title": "string",
    "model": "string",
    "name": "string",
    "price": 0,
    "product_id": "string",
    "quantity": 0,
    "short_description": "string",
    "sku": "string",
    "special_price": 0,
    "sprice_create": "string",
    "sprice_expire": "string",
    "sprice_modified": "string",
    "store_id": "string",
    "tax_class_id": 0,
    "taxable": true,
    "url": "string",
    "warehouse_id": "string",
    "weight": 0,
    "weight_unit": "string",
    "width": 0
  }'
```

`POST /product.variant.add.json`

Add variant to product.

> Body parameter

```json
{
  "attributes": [
    {
      "attribute_name": "string",
      "attribute_price": 0,
      "attribute_value": "string"
    }
  ],
  "available_for_sale": true,
  "available_for_view": true,
  "barcode": "string",
  "clear_cache": true,
  "cost_price": 0,
  "country_of_origin": "string",
  "created_at": "string",
  "description": "string",
  "harmonized_system_code": "string",
  "height": 0,
  "lang_id": "string",
  "length": 0,
  "manage_stock": true,
  "manufacturer": "string",
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "model": "string",
  "name": "string",
  "price": 0,
  "product_id": "string",
  "quantity": 0,
  "short_description": "string",
  "sku": "string",
  "special_price": 0,
  "sprice_create": "string",
  "sprice_expire": "string",
  "sprice_modified": "string",
  "store_id": "string",
  "tax_class_id": 0,
  "taxable": true,
  "url": "string",
  "warehouse_id": "string",
  "weight": 0,
  "weight_unit": "string",
  "width": 0
}
```

<h3 id="productvariantadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductVariantAdd](#schemaproductvariantadd)|true|none|
|» attributes|body|[object]|false|Defines variant's attributes list|
|» » attribute_name|body|string|false|none|
|» » attribute_price|body|number|false|none|
|» » attribute_value|body|string|false|none|
|» available_for_sale|body|boolean|false|Specifies the set of visible/invisible product's variants for sale|
|» available_for_view|body|boolean|false|Specifies the set of visible/invisible product's variants for users|
|» barcode|body|string|false|A barcode is a unique code composed of numbers used as a product identifier.|
|» clear_cache|body|boolean|false|Is cache clear required|
|» cost_price|body|number|false|Defines new product's cost price|
|» country_of_origin|body|string|false|The country where the inventory item was made|
|» created_at|body|string|false|Defines the date of entity creation|
|» description|body|string|false|Specifies variant's description|
|» harmonized_system_code|body|string|false|Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes|
|» height|body|number|false|Defines product's height|
|» lang_id|body|string|false|Language id|
|» length|body|number|false|Defines product's length|
|» manage_stock|body|boolean|false|Defines inventory tracking for product variant|
|» manufacturer|body|string|false|Specifies the product variant's manufacturer|
|» meta_description|body|string|false|Defines unique meta description of a entity|
|» meta_keywords|body|string|false|Defines unique meta keywords for each entity|
|» meta_title|body|string|false|Defines unique meta title for each entity|
|» model|body|string|true|Specifies variant's model that has to be added|
|» name|body|string|false|Defines variant's name that has to be added|
|» price|body|number|false|Defines new product's variant price|
|» product_id|body|string|false|Defines product's id where the variant has to be added|
|» quantity|body|number|false|Defines product variant's quantity that has to be added|
|» short_description|body|string|false|Defines short description|
|» sku|body|string|false|Defines variant's sku that has to be added|
|» special_price|body|number|false|Specifies variant's model that has to be added|
|» sprice_create|body|string|false|Defines the date of special price creation|
|» sprice_expire|body|string|false|Defines the term of special price offer duration|
|» sprice_modified|body|string|false|Defines the date of special price modification|
|» store_id|body|string|false|Add variants specified by store id|
|» tax_class_id|body|integer|false|Defines tax classes where entity has to be added|
|» taxable|body|boolean|false|Specifies whether a tax is charged|
|» url|body|string|false|Defines unique product variant's URL|
|» warehouse_id|body|string|false|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|
|» weight|body|number|false|Weight|
|» weight_unit|body|string|false|Weight Unit|
|» width|body|number|false|Defines product's width|

> Example responses

> 200 Response

```json
{
  "result": {
    "product_variant_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» product_variant_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantCount

<a id="opIdProductVariantCount"></a>

> Code samples

```bash
curl 'https://example.com/product.variant.count.json?product_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.variant.count.json`

Get count variants.

<h3 id="productvariantcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|category_id|query|string|false|Counts products’ variants specified by category id|
|product_id|query|string|true|Retrieves products' variants specified by product id|
|store_id|query|string|false|Retrieves variants specified by store id|

> Example responses

> 200 Response

```json
{
  "result": {
    "variants_count": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantcount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» variants_count|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantDelete

<a id="opIdProductVariantDelete"></a>

> Code samples

```bash
curl 'https://example.com/product.variant.delete.json?id=string&product_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /product.variant.delete.json`

Delete variant.

<h3 id="productvariantdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Defines variant removal, specified by variant id|
|product_id|query|string|true|Defines product's id where the variant has to be deleted|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantImageAdd

<a id="opIdProductVariantImageAdd"></a>

> Code samples

```bash
curl https://example.com/product.variant.image.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "content": "string",
    "image_name": "string",
    "label": "string",
    "mime": "string",
    "option_id": "string",
    "position": 0,
    "product_id": "string",
    "product_variant_id": 0,
    "store_id": "string",
    "type": "base",
    "url": "string"
  }'
```

`POST /product.variant.image.add.json`

Add image to product

> Body parameter

```json
{
  "content": "string",
  "image_name": "string",
  "label": "string",
  "mime": "string",
  "option_id": "string",
  "position": 0,
  "product_id": "string",
  "product_variant_id": 0,
  "store_id": "string",
  "type": "base",
  "url": "string"
}
```

<h3 id="productvariantimageadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductVariantImageAdd](#schemaproductvariantimageadd)|true|none|
|» content|body|string|false|Content(body) encoded in base64 of image file|
|» image_name|body|string|true|Defines image's name|
|» label|body|string|false|Defines alternative text that has to be attached to the picture|
|» mime|body|string|false|Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.|
|» option_id|body|string|false|Defines option id of the product variant for which the image will be added|
|» position|body|integer|false|Defines image’s position in the list|
|» product_id|body|string|false|Defines product id where the variant image has to be added|
|» product_variant_id|body|integer|true|Defines product's variants specified by variant id|
|» store_id|body|string|false|Store Id|
|» type|body|string|true|Defines image's types that are specified by comma-separated list|
|» url|body|string|false|Defines URL of the image that has to be added|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|small|
|» type|base|
|» type|additional|
|» type|thumbnail|

> Example responses

> 200 Response

```json
{
  "result": {
    "id": "string",
    "image_path": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantimageadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantimageadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» id|string|false|none|none|
|» image_path|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantImageDelete

<a id="opIdProductVariantImageDelete"></a>

> Code samples

```bash
curl 'https://example.com/product.variant.image.delete.json?product_id=string&product_variant_id=0&id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /product.variant.image.delete.json`

Delete  image to product

<h3 id="productvariantimagedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines product id where the variant image should be deleted|
|product_variant_id|query|integer|true|Defines product's variants specified by variant id|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantimagedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantimagedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantInfo

<a id="opIdProductVariantInfo"></a>

> Code samples

```bash
curl 'https://example.com/product.variant.info.json?id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.variant.info.json`

Get variant info.

<h3 id="productvariantinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|id|query|string|true|Retrieves variant's info specified by variant id|
|store_id|query|string|false|Retrieves variant info specified by store id|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "advanced_price": [
      {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "expire_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "group_id": "string",
        "id": "string",
        "quantity_from": 0,
        "start_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "value": 0
      }
    ],
    "avail_sale": true,
    "avail_view": true,
    "backorders": "string",
    "categories_ids": [
      "string"
    ],
    "cost_price": 0,
    "create_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "custom_fields": {},
    "description": "string",
    "dimensions_unit": "string",
    "group_items": [
      {
        "additional_fields": {},
        "child_item_id": "string",
        "custom_fields": {},
        "default_qty_in_pack": "string",
        "is_qty_in_pack_fixed": true,
        "product_id": "string"
      }
    ],
    "group_price": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "expire_time": "string",
        "group_id": "string",
        "id": "string",
        "price": 0,
        "quantity": 0,
        "start_time": "string",
        "store_id": "string"
      }
    ],
    "height": 0,
    "id": "string",
    "images": [
      {
        "additional_fields": {},
        "alt": "string",
        "avail": true,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "file_name": "string",
        "http_path": "string",
        "id": "string",
        "mime-type": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "size": 0,
        "sort_order": 0,
        "type": "string"
      }
    ],
    "inventory": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "in_stock": true,
        "priority": 0,
        "quantity": 0,
        "warehouse_id": "string"
      }
    ],
    "is_downloadable": true,
    "is_stock_managed": true,
    "is_virtual": true,
    "length": 0,
    "manage_stock": "string",
    "meta_description": "string",
    "meta_keywords": "string",
    "meta_title": "string",
    "modified_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "name": "string",
    "price": 0,
    "product_options": [
      {
        "additional_fields": {},
        "available": true,
        "custom_fields": {},
        "description": "string",
        "id": "string",
        "name": "string",
        "option_items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "price": "string",
            "product_option_item_id": "string",
            "quantity": 0,
            "sku": "string",
            "sort_order": 0,
            "type_price": "string",
            "weight": "string"
          }
        ],
        "product_option_id": "string",
        "required": true,
        "sort_order": 0,
        "type": "string",
        "used_in_combination": true
      }
    ],
    "quantity": 0,
    "related_products_ids": [
      "string"
    ],
    "seo_url": "string",
    "short_description": "string",
    "sort_order": 0,
    "special_price": {
      "additional_fields": {},
      "avail": true,
      "created_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "expired_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "value": 0
    },
    "stores_ids": [
      "string"
    ],
    "tax_class_id": "string",
    "tier_price": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "price": 0,
        "qty": 0
      }
    ],
    "type": "string",
    "u_brand": "string",
    "u_brand_id": "string",
    "u_model": "string",
    "u_mpn": "string",
    "u_sku": "string",
    "u_upc": "string",
    "url": "string",
    "weight": 0,
    "weight_unit": "string",
    "width": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Product](#schemaproduct)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantList

<a id="opIdProductVariantList"></a>

> Code samples

```bash
curl https://example.com/product.variant.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /product.variant.list.json`

Get list variants.

<h3 id="productvariantlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|category_id|query|string|false|Retrieves products’ variants specified by category id|
|product_id|query|string|false|Retrieves products' variants specified by product id|
|store_id|query|string|false|Retrieves variants specified by store id|

> Example responses

> 200 Response

```json
{
  "result": {
    "variant": [
      {
        "additional_fields": {},
        "advanced_price": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "expire_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "group_id": "string",
            "id": "string",
            "quantity_from": 0,
            "start_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "value": 0
          }
        ],
        "avail_sale": true,
        "avail_view": true,
        "backorders": "string",
        "categories_ids": [
          "string"
        ],
        "cost_price": 0,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "dimensions_unit": "string",
        "group_items": [
          {
            "additional_fields": {},
            "child_item_id": "string",
            "custom_fields": {},
            "default_qty_in_pack": "string",
            "is_qty_in_pack_fixed": true,
            "product_id": "string"
          }
        ],
        "group_price": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "expire_time": "string",
            "group_id": "string",
            "id": "string",
            "price": 0,
            "quantity": 0,
            "start_time": "string",
            "store_id": "string"
          }
        ],
        "height": 0,
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "inventory": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "in_stock": true,
            "priority": 0,
            "quantity": 0,
            "warehouse_id": "string"
          }
        ],
        "is_downloadable": true,
        "is_stock_managed": true,
        "is_virtual": true,
        "length": 0,
        "manage_stock": "string",
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "price": 0,
        "product_options": [
          {
            "additional_fields": {},
            "available": true,
            "custom_fields": {},
            "description": "string",
            "id": "string",
            "name": "string",
            "option_items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "id": "string",
                "name": "string",
                "price": "string",
                "product_option_item_id": "string",
                "quantity": 0,
                "sku": "string",
                "sort_order": 0,
                "type_price": "string",
                "weight": "string"
              }
            ],
            "product_option_id": "string",
            "required": true,
            "sort_order": 0,
            "type": "string",
            "used_in_combination": true
          }
        ],
        "quantity": 0,
        "related_products_ids": [
          "string"
        ],
        "seo_url": "string",
        "short_description": "string",
        "sort_order": 0,
        "special_price": {
          "additional_fields": {},
          "avail": true,
          "created_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "custom_fields": {},
          "expired_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "modified_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "value": 0
        },
        "stores_ids": [
          "string"
        ],
        "tax_class_id": "string",
        "tier_price": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "price": 0,
            "qty": 0
          }
        ],
        "type": "string",
        "u_brand": "string",
        "u_brand_id": "string",
        "u_model": "string",
        "u_mpn": "string",
        "u_sku": "string",
        "u_upc": "string",
        "url": "string",
        "weight": 0,
        "weight_unit": "string",
        "width": 0
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» variant|[[Product](#schemaproduct)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantPriceAdd

<a id="opIdProductVariantPriceAdd"></a>

> Code samples

```bash
curl https://example.com/product.variant.price.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "group_prices": [
      {
        "group_id": "string",
        "price": 0
      }
    ],
    "id": "string"
  }'
```

`POST /product.variant.price.add.json`

Add some prices to the product variant.

> Body parameter

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "price": 0
    }
  ],
  "id": "string"
}
```

<h3 id="productvariantpriceadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductVariantPriceAdd](#schemaproductvariantpriceadd)|true|none|
|» group_prices|body|[object]|false|Defines variants's group prices|
|» » group_id|body|string|false|none|
|» » price|body|number|false|none|
|» id|body|string|false|Defines the variant to which the price has to be added|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantpriceadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantpriceadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantPriceDelete

<a id="opIdProductVariantPriceDelete"></a>

> Code samples

```bash
curl 'https://example.com/product.variant.price.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /product.variant.price.delete.json`

Delete some prices of the product variant.

<h3 id="productvariantpricedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Defines the variant where the price has to be deleted|
|group_prices|query|string|false|Defines variants's group prices|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantpricedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantpricedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantPriceUpdate

<a id="opIdProductVariantPriceUpdate"></a>

> Code samples

```bash
curl https://example.com/product.variant.price.update.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "group_prices": [
      {
        "group_id": "string",
        "id": 0,
        "price": 0
      }
    ],
    "id": "string"
  }'
```

`PUT /product.variant.price.update.json`

Update some prices of the product variant.

> Body parameter

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "id": 0,
      "price": 0
    }
  ],
  "id": "string"
}
```

<h3 id="productvariantpriceupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductVariantPriceUpdate](#schemaproductvariantpriceupdate)|true|none|
|» group_prices|body|[object]|false|Defines variants's group prices|
|» » group_id|body|string|false|none|
|» » id|body|integer|false|none|
|» » price|body|number|false|none|
|» id|body|string|false|Defines the variant where the price has to be updated|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantpriceupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantpriceupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## ProductVariantUpdate

<a id="opIdProductVariantUpdate"></a>

> Code samples

```bash
curl 'https://example.com/product.variant.update.json?id=string&product_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /product.variant.update.json`

Update variant.

<h3 id="productvariantupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Defines store id where the variant should be found|
|id|query|string|true|Defines variant update specified by variant id|
|product_id|query|string|true|Defines product's id where the variant has to be updated|
|warehouse_id|query|string|false|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|
|reserve_quantity|query|number|false|This parameter allows to reserve/unreserve product variants quantity.|
|quantity|query|number|false|Defines new products' variants quantity|
|increase_quantity|query|number|false|Defines the incremental changes in product quantity|
|reduce_quantity|query|number|false|Defines the decrement changes in product quantity|
|price|query|number|false|Defines new product's variant price|
|special_price|query|number|false|Defines new product's variant special price|
|retail_price|query|number|false|Defines new product's retail price|
|old_price|query|number|false|Defines product's old price|
|cost_price|query|number|false|Defines new product's cost price|
|sprice_create|query|string|false|Defines the date of special price creation|
|sprice_expire|query|string|false|Defines the term of special price offer duration|
|manage_stock|query|boolean|false|Defines inventory tracking for product variant|
|in_stock|query|boolean|false|Set stock status|
|name|query|string|false|Defines variant's name that has to be updated|
|description|query|string|false|Specifies variant's description|
|sku|query|string|false|Defines new product's variant sku|
|meta_title|query|string|false|Defines unique meta title for each entity|
|meta_description|query|string|false|Defines unique meta description of a entity|
|meta_keywords|query|string|false|Defines unique meta keywords for each entity|
|short_description|query|string|false|Defines short description|
|visible|query|string|false|Set visibility status|
|status|query|string|false|Defines product variant's status|
|backorder_status|query|string|false|Set backorder status|
|weight|query|number|false|Weight|
|barcode|query|string|false|A barcode is a unique code composed of numbers used as a product identifier.|
|reindex|query|boolean|false|Is reindex required|
|taxable|query|boolean|false|Specifies whether a tax is charged|
|options|query|[string]|false|Defines variant's options list|
|harmonized_system_code|query|string|false|Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes|
|country_of_origin|query|string|false|The country where the inventory item was made|
|width|query|number|false|Defines product's width|
|height|query|number|false|Defines product's height|
|length|query|number|false|Defines product's length|
|gtin|query|string|false|Global Trade Item Number. An GTIN is an identifier for trade items.|
|clear_cache|query|boolean|false|Is cache clear required|
|lang_id|query|string|false|Language id|
|model|query|string|false|Specifies variant's model that has to be added|
|available_for_sale|query|boolean|false|Specifies the set of visible/invisible product's variants for sale|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="productvariantupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="productvariantupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-category">category</h1>

## CategoryAdd

<a id="opIdCategoryAdd"></a>

> Code samples

```bash
curl 'https://example.com/category.add.json?name=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /category.add.json`

Add new category in store

<h3 id="categoryadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Defines category's name that has to be added|
|parent_id|query|string|false|Adds categories specified by parent id|
|stores_ids|query|string|false|Create category in the stores that is specified by comma-separated stores' id|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|avail|query|boolean|false|Defines category's visibility status|
|sort_order|query|integer|false|Sort number in the list|
|created_time|query|string|false|Entity's date creation|
|modified_time|query|string|false|Entity's date modification|
|description|query|string|false|Defines category's description|
|meta_title|query|string|false|Defines unique meta title for each entity|
|meta_description|query|string|false|Defines unique meta description of a entity|
|meta_keywords|query|string|false|Defines unique meta keywords for each entity|
|seo_url|query|string|false|Defines unique category's URL for SEO|

> Example responses

> 200 Response

```json
{
  "result": {
    "category_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» category_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryAssign

<a id="opIdCategoryAssign"></a>

> Code samples

```bash
curl 'https://example.com/category.assign.json?product_id=string&category_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /category.assign.json`

Assign category to product

<h3 id="categoryassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|query|string|true|Defines category assign to the product, specified by product id|
|category_id|query|string|true|Defines category assign, specified by category id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {},
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryassign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryCount

<a id="opIdCategoryCount"></a>

> Code samples

```bash
curl https://example.com/category.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /category.count.json`

Count categories in store.

<h3 id="categorycount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent_id|query|string|false|Counts categories specified by parent id|
|store_id|query|string|false|Counts category specified by store id|
|lang_id|query|string|false|Counts category specified by language id|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|avail|query|boolean|false|Defines category's visibility status|

> Example responses

> 200 Response

```json
{
  "result": {
    "categories_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categorycount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categorycount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» categories_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryDelete

<a id="opIdCategoryDelete"></a>

> Code samples

```bash
curl 'https://example.com/category.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /category.delete.json`

Delete category in store

<h3 id="categorydelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Defines category removal, specified by category id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categorydelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categorydelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryFind

<a id="opIdCategoryFind"></a>

> Code samples

```bash
curl 'https://example.com/category.find.json?find_value=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /category.find.json`

Search category in store. "Laptop" is specified here by default.

<h3 id="categoryfind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|find_value|query|string|true|Entity search that is specified by some value|
|find_where|query|string|false|Entity search that is specified by the comma-separated unique fields|
|find_params|query|string|false|Entity search that is specified by comma-separated parameters|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|

> Example responses

> 200 Response

```json
{
  "result": {
    "category": [
      {
        "description": "string",
        "id": "string",
        "name": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryfind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» category|[object]|false|none|none|
|» » description|string|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryImageAdd

<a id="opIdCategoryImageAdd"></a>

> Code samples

```bash
curl 'https://example.com/category.image.add.json?category_id=string&image_name=string&url=string&type=base' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /category.image.add.json`

Add image to category

<h3 id="categoryimageadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|query|string|true|Defines category id where the image should be added|
|image_name|query|string|true|Defines image's name|
|url|query|string|true|Defines URL of the image that has to be added|
|label|query|string|false|Defines alternative text that has to be attached to the picture|
|mime|query|string|false|Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.|
|type|query|string|true|Defines image's types that are specified by comma-separated list|
|position|query|integer|false|Defines image’s position in the list|
|store_id|query|string|false|Store Id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|base|
|type|thumbnail|

> Example responses

> 200 Response

```json
{
  "result": {
    "image_path": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryimageadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryimageadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» image_path|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryImageDelete

<a id="opIdCategoryImageDelete"></a>

> Code samples

```bash
curl 'https://example.com/category.image.delete.json?category_id=string&image_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /category.image.delete.json`

Delete image

<h3 id="categoryimagedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|query|string|true|Defines category id where the image should be deleted|
|image_id|query|string|true|Define image id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryimagedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryimagedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryInfo

<a id="opIdCategoryInfo"></a>

> Code samples

```bash
curl 'https://example.com/category.info.json?id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /category.info.json`

Get category info about category ID*** or specify other category ID.

<h3 id="categoryinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Retrieves category's info specified by category id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Retrieves category info  specified by store id|
|lang_id|query|string|false|Retrieves category info  specified by language id|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "avail": true,
    "created_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "custom_fields": {},
    "description": "string",
    "id": "string",
    "images": [
      {
        "additional_fields": {},
        "alt": "string",
        "avail": true,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "file_name": "string",
        "http_path": "string",
        "id": "string",
        "mime-type": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "size": 0,
        "sort_order": 0,
        "type": "string"
      }
    ],
    "keywords": "string",
    "meta_description": "string",
    "meta_title": "string",
    "modified_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "name": "string",
    "parent_id": "string",
    "path": "string",
    "seo_url": "string",
    "short_description": "string",
    "sort_order": 0,
    "stores_ids": [
      "string"
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Category](#schemacategory)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryList

<a id="opIdCategoryList"></a>

> Code samples

```bash
curl https://example.com/category.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /category.list.json`

Get list of categories from store.

<h3 id="categorylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|parent_id|query|string|false|Retrieves categories specified by parent id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Retrieves categories specified by store id|
|lang_id|query|string|false|Retrieves categorys specified by language id|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|avail|query|boolean|false|Defines category's visibility status|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "categories_count": 0,
    "category": [
      {
        "additional_fields": {},
        "avail": true,
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "keywords": "string",
        "meta_description": "string",
        "meta_title": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "parent_id": "string",
        "path": "string",
        "seo_url": "string",
        "short_description": "string",
        "sort_order": 0,
        "stores_ids": [
          "string"
        ]
      }
    ],
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categorylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Category_List](#schemamodel_response_category_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryUnassign

<a id="opIdCategoryUnassign"></a>

> Code samples

```bash
curl 'https://example.com/category.unassign.json?category_id=string&product_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /category.unassign.json`

Unassign category to product

<h3 id="categoryunassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|query|string|true|Defines category unassign, specified by category id|
|product_id|query|string|true|Defines category unassign to the product, specified by product id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {},
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryunassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryunassign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CategoryUpdate

<a id="opIdCategoryUpdate"></a>

> Code samples

```bash
curl 'https://example.com/category.update.json?id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /category.update.json`

Update category in store

<h3 id="categoryupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Defines category update specified by category id|
|name|query|string|false|Defines new category’s name|
|parent_id|query|string|false|Defines new parent category id|
|stores_ids|query|string|false|Update category in the stores that is specified by comma-separated stores' id|
|avail|query|boolean|false|Defines category's visibility status|
|sort_order|query|integer|false|Sort number in the list|
|modified_time|query|string|false|Entity's date modification|
|description|query|string|false|Defines new category's description|
|meta_title|query|string|false|Defines unique meta title for each entity|
|meta_description|query|string|false|Defines unique meta description of a entity|
|meta_keywords|query|string|false|Defines unique meta keywords for each entity|
|seo_url|query|string|false|Defines unique category's URL for SEO|
|lang_id|query|string|false|Language id|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="categoryupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="categoryupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-order">order</h1>

## OrderAbandonedList

<a id="opIdOrderAbandonedList"></a>

> Code samples

```bash
curl https://example.com/order.abandoned.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.abandoned.list.json`

Get list of orders that were left by customers before completing the order.

<h3 id="orderabandonedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|query|string|false|Retrieves orders specified by customer id|
|customer_email|query|string|false|Retrieves orders specified by customer email|
|created_to|query|string|false|Retrieve entities to their creation date|
|created_from|query|string|false|Retrieve entities from their creation date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|skip_empty_email|query|boolean|false|Filter empty emails|
|store_id|query|string|false|Store Id|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "order": [
      {
        "additional_fields": {},
        "basket_id": "string",
        "basket_url": "string",
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        },
        "custom_fields": {},
        "customer": {
          "additional_fields": {},
          "custom_fields": {},
          "email": "string",
          "first_name": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string"
        },
        "id": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_products": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "totals": {
          "additional_fields": {},
          "custom_fields": {},
          "discount": 0,
          "shipping": 0,
          "subtotal": 0,
          "tax": 0,
          "total": 0
        }
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderabandonedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Order_Abandoned_List](#schemamodel_response_order_abandoned_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderAdd

<a id="opIdOrderAdd"></a>

> Code samples

```bash
curl https://example.com/order.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "admin_comment": "string",
    "admin_private_comment": "string",
    "bill_address_1": "string",
    "bill_address_2": "string",
    "bill_city": "string",
    "bill_company": "string",
    "bill_country": "string",
    "bill_fax": "string",
    "bill_first_name": "string",
    "bill_last_name": "string",
    "bill_phone": "string",
    "bill_postcode": "string",
    "bill_state": "string",
    "channel_id": "string",
    "clear_cache": true,
    "comment": "string",
    "coupon_discount": 0,
    "coupons": [
      "string"
    ],
    "create_invoice": false,
    "currency": "string",
    "customer_birthday": "string",
    "customer_email": "string",
    "customer_fax": "string",
    "customer_first_name": "string",
    "customer_last_name": "string",
    "customer_phone": "string",
    "date": "string",
    "date_finished": "string",
    "date_modified": "string",
    "discount": 0,
    "external_source": "string",
    "financial_status": "string",
    "fulfillment_status": "string",
    "gift_certificate_discount": 0,
    "id": "string",
    "inventory_behaviour": "bypass",
    "note_attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "order_id": "string",
    "order_item": [
      {
        "order_item_allow_refund_items_separately": true,
        "order_item_allow_ship_items_separately": true,
        "order_item_id": "string",
        "order_item_model": "string",
        "order_item_name": "string",
        "order_item_option": [
          {
            "order_item_option_name": "string",
            "order_item_option_price": 0,
            "order_item_option_value": "string"
          }
        ],
        "order_item_parent": 0,
        "order_item_parent_option_name": "string",
        "order_item_price": 0,
        "order_item_price_includes_tax": false,
        "order_item_property": [
          {
            "order_item_property_name": "string",
            "order_item_property_value": "string"
          }
        ],
        "order_item_quantity": 0,
        "order_item_tax": 0,
        "order_item_variant_id": "string",
        "order_item_weight": 0
      }
    ],
    "order_payment_method": "string",
    "order_shipping_method": "string",
    "order_status": "string",
    "prices_inc_tax": false,
    "send_admin_notifications": false,
    "send_notifications": false,
    "shipp_address_1": "string",
    "shipp_address_2": "string",
    "shipp_city": "string",
    "shipp_company": "string",
    "shipp_country": "string",
    "shipp_fax": "string",
    "shipp_first_name": "string",
    "shipp_last_name": "string",
    "shipp_phone": "string",
    "shipp_postcode": "string",
    "shipp_state": "string",
    "shipping_price": 0,
    "shipping_tax": 0,
    "store_id": "string",
    "subtotal_price": 0,
    "tags": "string",
    "tax_price": 0,
    "total_paid": 0,
    "total_price": 0,
    "total_weight": 0,
    "transaction_id": "string"
  }'
```

`POST /order.add.json`

Add a new order to the cart.

> Body parameter

```json
{
  "admin_comment": "string",
  "admin_private_comment": "string",
  "bill_address_1": "string",
  "bill_address_2": "string",
  "bill_city": "string",
  "bill_company": "string",
  "bill_country": "string",
  "bill_fax": "string",
  "bill_first_name": "string",
  "bill_last_name": "string",
  "bill_phone": "string",
  "bill_postcode": "string",
  "bill_state": "string",
  "channel_id": "string",
  "clear_cache": true,
  "comment": "string",
  "coupon_discount": 0,
  "coupons": [
    "string"
  ],
  "create_invoice": false,
  "currency": "string",
  "customer_birthday": "string",
  "customer_email": "string",
  "customer_fax": "string",
  "customer_first_name": "string",
  "customer_last_name": "string",
  "customer_phone": "string",
  "date": "string",
  "date_finished": "string",
  "date_modified": "string",
  "discount": 0,
  "external_source": "string",
  "financial_status": "string",
  "fulfillment_status": "string",
  "gift_certificate_discount": 0,
  "id": "string",
  "inventory_behaviour": "bypass",
  "note_attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "order_id": "string",
  "order_item": [
    {
      "order_item_allow_refund_items_separately": true,
      "order_item_allow_ship_items_separately": true,
      "order_item_id": "string",
      "order_item_model": "string",
      "order_item_name": "string",
      "order_item_option": [
        {
          "order_item_option_name": "string",
          "order_item_option_price": 0,
          "order_item_option_value": "string"
        }
      ],
      "order_item_parent": 0,
      "order_item_parent_option_name": "string",
      "order_item_price": 0,
      "order_item_price_includes_tax": false,
      "order_item_property": [
        {
          "order_item_property_name": "string",
          "order_item_property_value": "string"
        }
      ],
      "order_item_quantity": 0,
      "order_item_tax": 0,
      "order_item_variant_id": "string",
      "order_item_weight": 0
    }
  ],
  "order_payment_method": "string",
  "order_shipping_method": "string",
  "order_status": "string",
  "prices_inc_tax": false,
  "send_admin_notifications": false,
  "send_notifications": false,
  "shipp_address_1": "string",
  "shipp_address_2": "string",
  "shipp_city": "string",
  "shipp_company": "string",
  "shipp_country": "string",
  "shipp_fax": "string",
  "shipp_first_name": "string",
  "shipp_last_name": "string",
  "shipp_phone": "string",
  "shipp_postcode": "string",
  "shipp_state": "string",
  "shipping_price": 0,
  "shipping_tax": 0,
  "store_id": "string",
  "subtotal_price": 0,
  "tags": "string",
  "tax_price": 0,
  "total_paid": 0,
  "total_price": 0,
  "total_weight": 0,
  "transaction_id": "string"
}
```

<h3 id="orderadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderAdd](#schemaorderadd)|true|none|
|» admin_comment|body|string|false|Specifies admin's order comment|
|» admin_private_comment|body|string|false|Specifies private admin's order comment|
|» bill_address_1|body|string|true|Specifies first billing address|
|» bill_address_2|body|string|false|Specifies second billing address|
|» bill_city|body|string|true|Specifies billing city|
|» bill_company|body|string|false|Specifies billing company|
|» bill_country|body|string|true|Specifies billing country code|
|» bill_fax|body|string|false|Specifies billing fax|
|» bill_first_name|body|string|true|Specifies billing first name|
|» bill_last_name|body|string|true|Specifies billing last name|
|» bill_phone|body|string|false|Specifies billing phone|
|» bill_postcode|body|string|true|Specifies billing postcode|
|» bill_state|body|string|true|Specifies billing state code|
|» channel_id|body|string|false|Channel ID|
|» clear_cache|body|boolean|false|Is cache clear required|
|» comment|body|string|false|Specifies order comment|
|» coupon_discount|body|number|false|Specifies order's coupon discount|
|» coupons|body|[string]|false|Coupons that will be applied to order|
|» create_invoice|body|boolean|false|Defines whether the invoice is created automatically along with the order|
|» currency|body|string|false|Currency code of order|
|» customer_birthday|body|string|false|Specifies customer’s birthday|
|» customer_email|body|string|true|Defines the customer specified by email for whom order has to be created|
|» customer_fax|body|string|false|Specifies customer’s fax|
|» customer_first_name|body|string|false|Specifies customer's first name|
|» customer_last_name|body|string|false|Specifies customer’s last name|
|» customer_phone|body|string|false|Specifies customer’s phone|
|» date|body|string|false|Specifies an order creation date in format Y-m-d H:i:s|
|» date_finished|body|string|false|Specifies order's  finished date|
|» date_modified|body|string|false|Specifies order's  modification date|
|» discount|body|number|false|Specifies order's discount|
|» external_source|body|string|false|Identifying the system used to generate the order|
|» financial_status|body|string|false|Create order with financial status|
|» fulfillment_status|body|string|false|Create order with fulfillment status|
|» gift_certificate_discount|body|number|false|Discounts for order with gift certificates|
|» id|body|string|false|Defines order's id|
|» inventory_behaviour|body|string|false|The behaviour to use when updating inventory.<hr><div style="font-style:normal">Values description:<div style="margin-left: 2%; padding-top: 2%"><div style="font-size:85%"><b>bypass</b> = Do not claim inventory </br></br><b>decrement_ignoring_policy</b> = Ignore the product's </br> inventory policy and claim amounts</br></br><b>decrement_obeying_policy</b> =  Obey the product's </br> inventory policy.</br></br></div></div></div>|
|» note_attributes|body|[object]|false|Defines note attributes|
|» » name|body|string|false|none|
|» » value|body|string|false|none|
|» order_id|body|string|false|Defines the order id if it is supported by the cart|
|» order_item|body|[object]|true|none|
|» » order_item_allow_refund_items_separately|body|boolean|false|Indicates whether subitems of the grouped/bundle product can be refunded separately|
|» » order_item_allow_ship_items_separately|body|boolean|false|Indicates whether subitems of the grouped/bundle product can be shipped separately|
|» » order_item_id|body|string|true|Defines orders specified by order item id|
|» » order_item_model|body|string|false|Defines orders specified by order item model|
|» » order_item_name|body|string|true|Defines orders specified by order item name|
|» » order_item_option|body|[object]|false|none|
|» » » order_item_option_name|body|string|false|Ordered Product Option Name. Where x is order item ID, y is order item option ID|
|» » » order_item_option_price|body|number|false|Ordered product option price Where x is order item ID, y - order item option ID|
|» » » order_item_option_value|body|string|false|Ordered product option value Where x is order item ID, y - order item option ID|
|» » order_item_parent|body|integer|false|Index of the parent grouped/bundle product|
|» » order_item_parent_option_name|body|string|false|Option name of the parent grouped/bundle product|
|» » order_item_price|body|number|true|Defines orders specified by order item price|
|» » order_item_price_includes_tax|body|boolean|false|Defines if item price includes tax|
|» » order_item_property|body|[object]|false|none|
|» » » order_item_property_name|body|string|false|Ordered product property name. Where x is order item ID, y is order item property ID|
|» » » order_item_property_value|body|string|false|Ordered product property value. Where x is order item ID, y - order item property ID|
|» » order_item_quantity|body|integer|true|Defines orders specified by order item quantity|
|» » order_item_tax|body|number|false|Percentage of tax for product order|
|» » order_item_variant_id|body|string|false|Ordered product variant. Where x is order item ID|
|» » order_item_weight|body|number|false|Defines orders specified by order item weight|
|» order_payment_method|body|string|false|Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'|
|» order_shipping_method|body|string|false|Defines order shipping method|
|» order_status|body|string|true|Defines order status.|
|» prices_inc_tax|body|boolean|false|Indicates whether prices and subtotal includes tax.|
|» send_admin_notifications|body|boolean|false|Notify admin when new order was created.|
|» send_notifications|body|boolean|false|Send notifications to customer after order was created|
|» shipp_address_1|body|string|false|Specifies first shipping address|
|» shipp_address_2|body|string|false|Specifies second address line of a shipping street address|
|» shipp_city|body|string|false|Specifies shipping city|
|» shipp_company|body|string|false|Specifies shipping company|
|» shipp_country|body|string|false|Specifies shipping country code|
|» shipp_fax|body|string|false|Specifies shipping fax|
|» shipp_first_name|body|string|false|Specifies shipping first name|
|» shipp_last_name|body|string|false|Specifies shipping last name|
|» shipp_phone|body|string|false|Specifies shipping phone|
|» shipp_postcode|body|string|false|Specifies shipping postcode|
|» shipp_state|body|string|false|Specifies shipping state code|
|» shipping_price|body|number|false|Specifies order's shipping price|
|» shipping_tax|body|number|false|Specifies order's shipping price tax|
|» store_id|body|string|false|Defines store id where the order should be assigned|
|» subtotal_price|body|number|false|Total price of all ordered products multiplied by their number, excluding tax, shipping price and discounts|
|» tags|body|string|false|Order tags|
|» tax_price|body|number|false|The value of tax cost for order|
|» total_paid|body|number|false|Defines total paid amount for the order|
|» total_price|body|number|false|Defines order's total price|
|» total_weight|body|integer|false|Defines the sum of all line item weights in grams for the order|
|» transaction_id|body|string|false|Payment transaction id|

> Example responses

> 200 Response

```json
{
  "result": {
    "order_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» order_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderCount

<a id="opIdOrderCount"></a>

> Code samples

```bash
curl https://example.com/order.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.count.json`

Count orders in store

<h3 id="ordercount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|query|string|false|Counts orders quantity specified by customer id|
|customer_email|query|string|false|Counts orders quantity specified by customer email|
|order_status|query|string|false|Counts orders quantity specified by order status|
|order_status_ids|query|[string]|false|Retrieves orders specified by order statuses|
|created_to|query|string|false|Retrieve entities to their creation date|
|created_from|query|string|false|Retrieve entities from their creation date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|store_id|query|string|false|Counts orders quantity specified by store id|
|ids|query|string|false|Counts orders specified by ids|
|order_ids|query|string|false|Counts orders specified by order ids|
|ebay_order_status|query|string|false|Counts orders quantity specified by order status|
|financial_status|query|string|false|Counts orders quantity specified by financial status|
|fulfillment_status|query|string|false|Create order with fulfillment status|
|shipping_method|query|string|false|Retrieve entities according to shipping method|
|delivery_method|query|string|false|Retrieves order with delivery method|
|ship_node_type|query|string|false|Retrieves order with ship node type|

> Example responses

> 200 Response

```json
{
  "result": {
    "orders_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordercount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="ordercount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» orders_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderFinancialStatusList

<a id="opIdOrderFinancialStatusList"></a>

> Code samples

```bash
curl https://example.com/order.financial_status.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.financial_status.list.json`

Retrieve list of financial statuses

> Example responses

> 200 Response

```json
{
  "result": {
    "order_financial_statuses": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderfinancialstatuslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderfinancialstatuslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» order_financial_statuses|[object]|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderFind

<a id="opIdOrderFind"></a>

> Code samples

```bash
curl https://example.com/order.find.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.find.json`

<aside class="warning">
This operation is deprecated
</aside>

This method is deprecated and won't be supported in the future. Please use "order.list" instead.

<h3 id="orderfind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|query|string|false|Retrieves orders specified by customer id|
|customer_email|query|string|false|Retrieves orders specified by customer email|
|order_status|query|string|false|Retrieves orders specified by order status|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|created_to|query|string|false|Retrieve entities to their creation date|
|created_from|query|string|false|Retrieve entities from their creation date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|financial_status|query|string|false|Retrieves orders specified by financial status|

> Example responses

> 200 Response

```json
{
  "result": {
    "order": [
      {
        "additional_fields": {},
        "basket_id": "string",
        "billing_address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "bundles": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "channel_id": "string",
        "comment": "string",
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        },
        "custom_fields": {},
        "customer": {
          "additional_fields": {},
          "custom_fields": {},
          "email": "string",
          "first_name": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string"
        },
        "discounts": [
          {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "type": "string",
            "value": 0
          }
        ],
        "finished_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "gift_message": "string",
        "id": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_details_url": "string",
        "order_id": "string",
        "order_products": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "payment_method": {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        },
        "refunds": [
          {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "fee": 0,
            "id": "string",
            "items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "order_product_id": "string",
                "product_id": "string",
                "qty": 0,
                "refund": 0,
                "variant_id": "string"
              }
            ],
            "modified_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "shipping": 0,
            "tax": 0,
            "total": 0
          }
        ],
        "shipping_address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "shipping_method": {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        },
        "shipping_methods": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "name": "string"
          }
        ],
        "status": {
          "additional_fields": {},
          "custom_fields": {},
          "history": [
            {
              "additional_fields": {},
              "comment": "string",
              "custom_fields": {},
              "id": "string",
              "modified_time": {
                "additional_fields": {},
                "custom_fields": {},
                "format": "string",
                "value": "string"
              },
              "name": "string",
              "notify": true
            }
          ],
          "id": "string",
          "name": "string",
          "refund_info": {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "fee": 0,
            "refunded_items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "order_product_id": "string",
                "product_id": "string",
                "qty": 0,
                "refund": 0,
                "variant_id": "string"
              }
            ],
            "shipping": 0,
            "tax": 0,
            "time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "total_refunded": 0
          }
        },
        "store_id": "string",
        "total": {
          "additional_fields": {},
          "custom_fields": {},
          "shipping_ex_tax": 0,
          "subtotal_ex_tax": 0,
          "total": 0,
          "total_discount": 0,
          "total_paid": 0,
          "total_tax": 0,
          "wrapping_ex_tax": 0
        },
        "totals": {
          "additional_fields": {},
          "custom_fields": {},
          "discount": 0,
          "shipping": 0,
          "subtotal": 0,
          "tax": 0,
          "total": 0
        },
        "warehouses_ids": [
          "string"
        ]
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderfind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» order|[[Order](#schemaorder)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderFulfillmentStatusList

<a id="opIdOrderFulfillmentStatusList"></a>

> Code samples

```bash
curl https://example.com/order.fulfillment_status.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.fulfillment_status.list.json`

Retrieve list of fulfillment statuses

> Example responses

> 200 Response

```json
{
  "result": {
    "order_fulfillment_statuses": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderfulfillmentstatuslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderfulfillmentstatuslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» order_fulfillment_statuses|[object]|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderInfo

<a id="opIdOrderInfo"></a>

> Code samples

```bash
curl https://example.com/order.info.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.info.json`

Info about a specific order by ID

<h3 id="orderinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|query|string|false|Retrieves order’s info specified by order id|
|id|query|string|false|Retrieves order info specified by id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Defines store id where the order should be found|
|enable_cache|query|boolean|false|If the value is 'true' and order exist in our cache, we will return order.info response from cache|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "basket_id": "string",
    "billing_address": {
      "additional_fields": {},
      "address1": "string",
      "address2": "string",
      "city": "string",
      "company": "string",
      "country": {
        "additional_fields": {},
        "code2": "string",
        "code3": "string",
        "custom_fields": {},
        "name": "string"
      },
      "custom_fields": {},
      "default": true,
      "fax": "string",
      "first_name": "string",
      "gender": "string",
      "id": "string",
      "last_name": "string",
      "phone": "string",
      "postcode": "string",
      "region": "string",
      "state": {
        "additional_fields": {},
        "code": "string",
        "custom_fields": {},
        "name": "string"
      },
      "type": "string",
      "website": "string"
    },
    "bundles": [
      {
        "additional_fields": {},
        "barcode": "string",
        "custom_fields": {},
        "discount_amount": 0,
        "model": "string",
        "name": "string",
        "options": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "name": "string",
            "option_id": "string",
            "price": 0,
            "product_option_value_id": "string",
            "type": "string",
            "value": "string",
            "weight": 0
          }
        ],
        "order_product_id": "string",
        "parent_order_product_id": "string",
        "price": 0,
        "price_inc_tax": 0,
        "product_id": "string",
        "quantity": 0,
        "tax_percent": 0,
        "tax_value": 0,
        "tax_value_after_discount": 0,
        "total_price": 0,
        "variant_id": "string",
        "weight": 0,
        "weight_unit": "string"
      }
    ],
    "channel_id": "string",
    "comment": "string",
    "create_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "currency": {
      "additional_fields": {},
      "avail": true,
      "custom_fields": {},
      "default": true,
      "id": "string",
      "iso3": "string",
      "name": "string",
      "rate": 0,
      "symbol_left": "string",
      "symbol_right": "string"
    },
    "custom_fields": {},
    "customer": {
      "additional_fields": {},
      "custom_fields": {},
      "email": "string",
      "first_name": "string",
      "id": "string",
      "last_name": "string",
      "phone": "string"
    },
    "discounts": [
      {
        "additional_fields": {},
        "code": "string",
        "custom_fields": {},
        "type": "string",
        "value": 0
      }
    ],
    "finished_time": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "gift_message": "string",
    "id": "string",
    "modified_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "order_details_url": "string",
    "order_id": "string",
    "order_products": [
      {
        "additional_fields": {},
        "barcode": "string",
        "custom_fields": {},
        "discount_amount": 0,
        "model": "string",
        "name": "string",
        "options": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "name": "string",
            "option_id": "string",
            "price": 0,
            "product_option_value_id": "string",
            "type": "string",
            "value": "string",
            "weight": 0
          }
        ],
        "order_product_id": "string",
        "parent_order_product_id": "string",
        "price": 0,
        "price_inc_tax": 0,
        "product_id": "string",
        "quantity": 0,
        "tax_percent": 0,
        "tax_value": 0,
        "tax_value_after_discount": 0,
        "total_price": 0,
        "variant_id": "string",
        "weight": 0,
        "weight_unit": "string"
      }
    ],
    "payment_method": {
      "additional_fields": {},
      "custom_fields": {},
      "name": "string"
    },
    "refunds": [
      {
        "additional_fields": {},
        "comment": "string",
        "custom_fields": {},
        "fee": 0,
        "id": "string",
        "items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "order_product_id": "string",
            "product_id": "string",
            "qty": 0,
            "refund": 0,
            "variant_id": "string"
          }
        ],
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "shipping": 0,
        "tax": 0,
        "total": 0
      }
    ],
    "shipping_address": {
      "additional_fields": {},
      "address1": "string",
      "address2": "string",
      "city": "string",
      "company": "string",
      "country": {
        "additional_fields": {},
        "code2": "string",
        "code3": "string",
        "custom_fields": {},
        "name": "string"
      },
      "custom_fields": {},
      "default": true,
      "fax": "string",
      "first_name": "string",
      "gender": "string",
      "id": "string",
      "last_name": "string",
      "phone": "string",
      "postcode": "string",
      "region": "string",
      "state": {
        "additional_fields": {},
        "code": "string",
        "custom_fields": {},
        "name": "string"
      },
      "type": "string",
      "website": "string"
    },
    "shipping_method": {
      "additional_fields": {},
      "custom_fields": {},
      "name": "string"
    },
    "shipping_methods": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "name": "string"
      }
    ],
    "status": {
      "additional_fields": {},
      "custom_fields": {},
      "history": [
        {
          "additional_fields": {},
          "comment": "string",
          "custom_fields": {},
          "id": "string",
          "modified_time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "name": "string",
          "notify": true
        }
      ],
      "id": "string",
      "name": "string",
      "refund_info": {
        "additional_fields": {},
        "comment": "string",
        "custom_fields": {},
        "fee": 0,
        "refunded_items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "order_product_id": "string",
            "product_id": "string",
            "qty": 0,
            "refund": 0,
            "variant_id": "string"
          }
        ],
        "shipping": 0,
        "tax": 0,
        "time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "total_refunded": 0
      }
    },
    "store_id": "string",
    "total": {
      "additional_fields": {},
      "custom_fields": {},
      "shipping_ex_tax": 0,
      "subtotal_ex_tax": 0,
      "total": 0,
      "total_discount": 0,
      "total_paid": 0,
      "total_tax": 0,
      "wrapping_ex_tax": 0
    },
    "totals": {
      "additional_fields": {},
      "custom_fields": {},
      "discount": 0,
      "shipping": 0,
      "subtotal": 0,
      "tax": 0,
      "total": 0
    },
    "warehouses_ids": [
      "string"
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Order](#schemaorder)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderList

<a id="opIdOrderList"></a>

> Code samples

```bash
curl https://example.com/order.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.list.json`

Get list of orders from store.

<h3 id="orderlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|query|string|false|Retrieves orders specified by customer id|
|customer_email|query|string|false|Retrieves orders specified by customer email|
|phone|query|string|false|Filter orders by customer's phone number|
|order_status|query|string|false|Retrieves orders specified by order status|
|order_status_ids|query|[string]|false|Retrieves orders specified by order statuses|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|page_cursor|query|string|false|Used to retrieve orders via cursor-based pagination (it can't be used with any other filtering parameter)|
|sort_by|query|string|false|Set field to sort by|
|sort_direction|query|string|false|Set sorting direction|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|created_to|query|string|false|Retrieve entities to their creation date|
|created_from|query|string|false|Retrieve entities from their creation date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|store_id|query|string|false|Store Id|
|ids|query|string|false|Retrieves orders specified by ids|
|order_ids|query|string|false|Retrieves orders specified by order ids|
|ebay_order_status|query|string|false|Retrieves orders specified by order status|
|basket_id|query|string|false|Retrieves order’s info specified by basket id.|
|financial_status|query|string|false|Retrieves orders specified by financial status|
|fulfillment_status|query|string|false|Create order with fulfillment status|
|shipping_method|query|string|false|Retrieve entities according to shipping method|
|skip_order_ids|query|string|false|Skipped orders by ids|
|since_id|query|integer|false|Retrieve entities starting from the specified id.|
|is_deleted|query|boolean|false|Filter deleted orders|
|shipping_country_iso3|query|string|false|Retrieve entities according to shipping country|
|enable_cache|query|boolean|false|If the value is 'true', we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)|
|delivery_method|query|string|false|Retrieves order with delivery method|
|ship_node_type|query|string|false|Retrieves order with ship node type|
|currency_id|query|string|false|Currency Id|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "order": [
      {
        "additional_fields": {},
        "basket_id": "string",
        "billing_address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "bundles": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "channel_id": "string",
        "comment": "string",
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        },
        "custom_fields": {},
        "customer": {
          "additional_fields": {},
          "custom_fields": {},
          "email": "string",
          "first_name": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string"
        },
        "discounts": [
          {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "type": "string",
            "value": 0
          }
        ],
        "finished_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "gift_message": "string",
        "id": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_details_url": "string",
        "order_id": "string",
        "order_products": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "payment_method": {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        },
        "refunds": [
          {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "fee": 0,
            "id": "string",
            "items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "order_product_id": "string",
                "product_id": "string",
                "qty": 0,
                "refund": 0,
                "variant_id": "string"
              }
            ],
            "modified_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "shipping": 0,
            "tax": 0,
            "total": 0
          }
        ],
        "shipping_address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "shipping_method": {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        },
        "shipping_methods": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "name": "string"
          }
        ],
        "status": {
          "additional_fields": {},
          "custom_fields": {},
          "history": [
            {
              "additional_fields": {},
              "comment": "string",
              "custom_fields": {},
              "id": "string",
              "modified_time": {
                "additional_fields": {},
                "custom_fields": {},
                "format": "string",
                "value": "string"
              },
              "name": "string",
              "notify": true
            }
          ],
          "id": "string",
          "name": "string",
          "refund_info": {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "fee": 0,
            "refunded_items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "order_product_id": "string",
                "product_id": "string",
                "qty": 0,
                "refund": 0,
                "variant_id": "string"
              }
            ],
            "shipping": 0,
            "tax": 0,
            "time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "total_refunded": 0
          }
        },
        "store_id": "string",
        "total": {
          "additional_fields": {},
          "custom_fields": {},
          "shipping_ex_tax": 0,
          "subtotal_ex_tax": 0,
          "total": 0,
          "total_discount": 0,
          "total_paid": 0,
          "total_tax": 0,
          "wrapping_ex_tax": 0
        },
        "totals": {
          "additional_fields": {},
          "custom_fields": {},
          "discount": 0,
          "shipping": 0,
          "subtotal": 0,
          "tax": 0,
          "total": 0
        },
        "warehouses_ids": [
          "string"
        ]
      }
    ],
    "orders_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Order_List](#schemamodel_response_order_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderPreestimateShippingList

<a id="opIdOrderPreestimateShippingList"></a>

> Code samples

```bash
curl https://example.com/order.preestimate_shipping.list.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "customer_email": "string",
    "customer_id": "string",
    "exclude": "string",
    "order_item": [
      {
        "order_item_id": "string",
        "order_item_model": "string",
        "order_item_option": [
          {
            "order_item_option_id": "string",
            "order_item_option_name": "string",
            "order_item_option_used_in_combinations": true,
            "order_item_option_value": "string",
            "order_item_option_value_id": "string"
          }
        ],
        "order_item_quantity": 0,
        "order_item_variant_id": "string",
        "order_item_weight": 0
      }
    ],
    "params": "force_all",
    "shipp_address_1": "string",
    "shipp_city": "string",
    "shipp_country": "string",
    "shipp_postcode": "string",
    "shipp_state": "string",
    "store_id": "string",
    "warehouse_id": "string"
  }'
```

`POST /order.preestimate_shipping.list.json`

Retrieve list of order preestimated shipping methods

> Body parameter

```json
{
  "customer_email": "string",
  "customer_id": "string",
  "exclude": "string",
  "order_item": [
    {
      "order_item_id": "string",
      "order_item_model": "string",
      "order_item_option": [
        {
          "order_item_option_id": "string",
          "order_item_option_name": "string",
          "order_item_option_used_in_combinations": true,
          "order_item_option_value": "string",
          "order_item_option_value_id": "string"
        }
      ],
      "order_item_quantity": 0,
      "order_item_variant_id": "string",
      "order_item_weight": 0
    }
  ],
  "params": "force_all",
  "shipp_address_1": "string",
  "shipp_city": "string",
  "shipp_country": "string",
  "shipp_postcode": "string",
  "shipp_state": "string",
  "store_id": "string",
  "warehouse_id": "string"
}
```

<h3 id="orderpreestimateshippinglist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderPreestimateShippingList](#schemaorderpreestimateshippinglist)|true|none|
|» customer_email|body|string|false|Retrieves orders specified by customer email|
|» customer_id|body|string|false|Retrieves orders specified by customer id|
|» exclude|body|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|» order_item|body|[object]|true|none|
|» » order_item_id|body|string|true|Defines orders specified by order item id|
|» » order_item_model|body|string|false|Defines orders specified by order item model|
|» » order_item_option|body|[object]|false|none|
|» » » order_item_option_id|body|string|false|Product Option ID. Where x is order item ID, y is order item option ID|
|» » » order_item_option_name|body|string|false|Ordered Product Option Name. Where x is order item ID, y is order item option ID|
|» » » order_item_option_used_in_combinations|body|boolean|false|Product option used in combinations flag, where x is order item ID, y - order item option ID|
|» » » order_item_option_value|body|string|false|Ordered product option value Where x is order item ID, y - order item option ID|
|» » » order_item_option_value_id|body|string|false|Product option value ID, where x is order item ID, y - order item option ID|
|» » order_item_quantity|body|integer|true|Defines orders specified by order item quantity|
|» » order_item_variant_id|body|string|false|Ordered product variant. Where x is order item ID|
|» » order_item_weight|body|number|false|Defines orders specified by order item weight|
|» params|body|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|» shipp_address_1|body|string|false|Specifies first shipping address|
|» shipp_city|body|string|false|Specifies shipping city|
|» shipp_country|body|string|true|Specifies shipping country code|
|» shipp_postcode|body|string|false|Specifies shipping postcode|
|» shipp_state|body|string|false|Specifies shipping state code|
|» store_id|body|string|false|Store Id|
|» warehouse_id|body|string|false|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "preestimate_shippings": [
      {
        "additional_fields": {},
        "carrier_code": "string",
        "carrier_name": "string",
        "custom_fields": {},
        "delivery_time": "string",
        "description": "string",
        "method_code": "string",
        "method_name": "string",
        "price": 0,
        "price_inc_tax": 0
      }
    ],
    "preestimate_shippings_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderpreestimateshippinglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Order_PreestimateShipping_List](#schemamodel_response_order_preestimateshipping_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderRefundAdd

<a id="opIdOrderRefundAdd"></a>

> Code samples

```bash
curl https://example.com/order.refund.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "date": "string",
    "fee_price": 0,
    "is_online": false,
    "item_restock": false,
    "items": [
      {
        "order_product_id": "string",
        "price": 0,
        "quantity": 0
      }
    ],
    "message": "string",
    "order_id": "string",
    "send_notifications": false,
    "shipping_price": 0,
    "total_price": 0
  }'
```

`POST /order.refund.add.json`

Add a refund to the order.

> Body parameter

```json
{
  "date": "string",
  "fee_price": 0,
  "is_online": false,
  "item_restock": false,
  "items": [
    {
      "order_product_id": "string",
      "price": 0,
      "quantity": 0
    }
  ],
  "message": "string",
  "order_id": "string",
  "send_notifications": false,
  "shipping_price": 0,
  "total_price": 0
}
```

<h3 id="orderrefundadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderRefundAdd](#schemaorderrefundadd)|true|none|
|» date|body|string|false|Specifies an order creation date in format Y-m-d H:i:s|
|» fee_price|body|number|false|Specifies refund's fee price|
|» is_online|body|boolean|false|Indicates whether refund type is online|
|» item_restock|body|boolean|false|Boolean, whether or not to add the line items back to the store inventory.|
|» items|body|[object]|false|Defines items in the order that will be refunded|
|» » order_product_id|body|string|false|none|
|» » price|body|number|false|none|
|» » quantity|body|integer|false|none|
|» message|body|string|false|Refund reason, or some else message which assigned to refund.|
|» order_id|body|string|false|Defines the order for which the refund will be created.|
|» send_notifications|body|boolean|false|Send notifications to customer after refund was created|
|» shipping_price|body|number|false|Defines refund shipping amount.|
|» total_price|body|number|false|Defines order refund amount.|

> Example responses

> 200 Response

```json
{
  "result": {
    "refund_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderrefundadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderrefundadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» refund_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderShipmentAdd

<a id="opIdOrderShipmentAdd"></a>

> Code samples

```bash
curl https://example.com/order.shipment.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "adjust_stock": false,
    "enable_cache": false,
    "is_shipped": true,
    "items": [
      {
        "order_product_id": "string",
        "quantity": 0
      }
    ],
    "order_id": "string",
    "send_notifications": false,
    "shipment_provider": "string",
    "shipping_method": "string",
    "store_id": "string",
    "tracking_link": "string",
    "tracking_numbers": [
      {
        "carrier_id": "string",
        "tracking_number": "string"
      }
    ],
    "warehouse_id": "string"
  }'
```

`POST /order.shipment.add.json`

Add a shipment to the order.

> Body parameter

```json
{
  "adjust_stock": false,
  "enable_cache": false,
  "is_shipped": true,
  "items": [
    {
      "order_product_id": "string",
      "quantity": 0
    }
  ],
  "order_id": "string",
  "send_notifications": false,
  "shipment_provider": "string",
  "shipping_method": "string",
  "store_id": "string",
  "tracking_link": "string",
  "tracking_numbers": [
    {
      "carrier_id": "string",
      "tracking_number": "string"
    }
  ],
  "warehouse_id": "string"
}
```

<h3 id="ordershipmentadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderShipmentAdd](#schemaordershipmentadd)|true|none|
|» adjust_stock|body|boolean|false|This parameter is used for adjust stock.|
|» enable_cache|body|boolean|false|If the value is 'true' and order exist in our cache, we will use order.info from cache to prepare shipment items.|
|» is_shipped|body|boolean|false|Defines shipment's status|
|» items|body|[object]|false|Defines items in the order that will be shipped|
|» » order_product_id|body|string|false|none|
|» » quantity|body|number|false|none|
|» order_id|body|string|false|Defines the order for which the shipment will be created|
|» send_notifications|body|boolean|false|Send notifications to customer after shipment was created|
|» shipment_provider|body|string|false|Defines company name that provide tracking of shipment|
|» shipping_method|body|string|false|Define shipping method|
|» store_id|body|string|false|Store Id|
|» tracking_link|body|string|false|Defines custom tracking link|
|» tracking_numbers|body|[object]|false|Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "https://api2cart.com/docs/#/cart/CartInfo">cart.info</a > method|
|» » carrier_id|body|string|false|none|
|» » tracking_number|body|string|false|none|
|» warehouse_id|body|string|false|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|

> Example responses

> 200 Response

```json
{
  "result": {
    "shipment_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordershipmentadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="ordershipmentadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» shipment_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderShipmentDelete

<a id="opIdOrderShipmentDelete"></a>

> Code samples

```bash
curl 'https://example.com/order.shipment.delete.json?shipment_id=string&order_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /order.shipment.delete.json`

Delete order's shipment.

<h3 id="ordershipmentdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|query|string|true|Shipment id indicates the number of delivery|
|order_id|query|string|true|Defines the order for which the shipment will be deleted|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordershipmentdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="ordershipmentdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderShipmentInfo

<a id="opIdOrderShipmentInfo"></a>

> Code samples

```bash
curl 'https://example.com/order.shipment.info.json?id=string&order_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.shipment.info.json`

Get information of shipment.

<h3 id="ordershipmentinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|order_id|query|string|true|Defines the order id|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "shipment": [
      {
        "additional_fields": {},
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "id": "string",
        "is_shipped": true,
        "items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "model": "string",
            "name": "string",
            "order_product_id": "string",
            "price": 0,
            "product_id": "string",
            "quantity": 0,
            "variant_id": "string"
          }
        ],
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_id": "string",
        "shipment_provider": "string",
        "tracking_numbers": [
          {
            "additional_fields": {},
            "carrier_id": "string",
            "custom_fields": {},
            "tracking_number": "string"
          }
        ],
        "warehouse_id": "string"
      }
    ],
    "shipment_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordershipmentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Order_Shipment_List](#schemamodel_response_order_shipment_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderShipmentList

<a id="opIdOrderShipmentList"></a>

> Code samples

```bash
curl 'https://example.com/order.shipment.list.json?order_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.shipment.list.json`

Get list of shipments by orders.

<h3 id="ordershipmentlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|query|string|true|Retrieves shipments specified by order id|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "shipment": [
      {
        "additional_fields": {},
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "id": "string",
        "is_shipped": true,
        "items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "model": "string",
            "name": "string",
            "order_product_id": "string",
            "price": 0,
            "product_id": "string",
            "quantity": 0,
            "variant_id": "string"
          }
        ],
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_id": "string",
        "shipment_provider": "string",
        "tracking_numbers": [
          {
            "additional_fields": {},
            "carrier_id": "string",
            "custom_fields": {},
            "tracking_number": "string"
          }
        ],
        "warehouse_id": "string"
      }
    ],
    "shipment_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordershipmentlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Order_Shipment_List](#schemamodel_response_order_shipment_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderShipmentTrackingAdd

<a id="opIdOrderShipmentTrackingAdd"></a>

> Code samples

```bash
curl https://example.com/order.shipment.tracking.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "carrier_id": "string",
    "order_id": "string",
    "send_notifications": false,
    "shipment_id": "string",
    "store_id": "string",
    "tracking_link": "string",
    "tracking_number": "string",
    "tracking_provider": "string"
  }'
```

`POST /order.shipment.tracking.add.json`

Add order shipment's tracking info.

> Body parameter

```json
{
  "carrier_id": "string",
  "order_id": "string",
  "send_notifications": false,
  "shipment_id": "string",
  "store_id": "string",
  "tracking_link": "string",
  "tracking_number": "string",
  "tracking_provider": "string"
}
```

<h3 id="ordershipmenttrackingadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderShipmentTrackingAdd](#schemaordershipmenttrackingadd)|true|none|
|» carrier_id|body|string|false|Defines tracking carrier id|
|» order_id|body|string|false|Defines the order id|
|» send_notifications|body|boolean|false|Send notifications to customer after tracking was created|
|» shipment_id|body|string|true|Shipment id indicates the number of delivery|
|» store_id|body|string|false|Store Id|
|» tracking_link|body|string|false|Defines custom tracking link|
|» tracking_number|body|string|true|Defines tracking number|
|» tracking_provider|body|string|false|Defines name of the company which provides shipment tracking|

> Example responses

> 200 Response

```json
{
  "result": {
    "tracking_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordershipmenttrackingadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="ordershipmenttrackingadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» tracking_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderShipmentUpdate

<a id="opIdOrderShipmentUpdate"></a>

> Code samples

```bash
curl https://example.com/order.shipment.update.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "is_shipped": true,
    "order_id": "string",
    "replace": true,
    "shipment_id": "string",
    "store_id": "string",
    "tracking_link": "string",
    "tracking_numbers": [
      {
        "carrier_id": "string",
        "tracking_number": "string"
      }
    ]
  }'
```

`PUT /order.shipment.update.json`

Update order's shipment information.

> Body parameter

```json
{
  "is_shipped": true,
  "order_id": "string",
  "replace": true,
  "shipment_id": "string",
  "store_id": "string",
  "tracking_link": "string",
  "tracking_numbers": [
    {
      "carrier_id": "string",
      "tracking_number": "string"
    }
  ]
}
```

<h3 id="ordershipmentupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderShipmentUpdate](#schemaordershipmentupdate)|true|none|
|» is_shipped|body|boolean|false|Defines shipment's status|
|» order_id|body|string|false|Defines the order that will be updated|
|» replace|body|boolean|false|Allows rewrite tracking numbers|
|» shipment_id|body|string|true|Shipment id indicates the number of delivery|
|» store_id|body|string|false|Store Id|
|» tracking_link|body|string|false|Defines custom tracking link|
|» tracking_numbers|body|[object]|false|Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "https://api2cart.com/docs/#/cart/CartInfo">cart.info</a > method|
|» » carrier_id|body|string|false|none|
|» » tracking_number|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordershipmentupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="ordershipmentupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderStatusList

<a id="opIdOrderStatusList"></a>

> Code samples

```bash
curl https://example.com/order.status.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.status.list.json`

Retrieve list of statuses

<h3 id="orderstatuslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "cart_order_statuses": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderstatuslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderstatuslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» cart_order_statuses|[object]|false|none|none|
|» » id|string|false|none|none|
|» » name|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderTransactionList

<a id="opIdOrderTransactionList"></a>

> Code samples

```bash
curl 'https://example.com/order.transaction.list.json?order_ids=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /order.transaction.list.json`

Retrieve list of order transaction

<h3 id="ordertransactionlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|order_ids|query|string|true|Retrieves order transactions specified by order ids|
|store_id|query|string|false|Store Id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "transactions": [
      {
        "additional_fields": {},
        "amount": 0,
        "avs_message": "string",
        "avs_postal_resp_code": "string",
        "avs_street_resp_code": "string",
        "card_bin": "string",
        "card_brand": "string",
        "card_last_four": "string",
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": "string",
        "custom_fields": {},
        "cvv_code": "string",
        "cvv_message": "string",
        "description": "string",
        "gateway": "string",
        "id": "string",
        "is_test_mode": true,
        "order_id": "string",
        "parent_id": "string",
        "reference_number": "string",
        "settlement_amount": 0,
        "settlement_created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "settlement_currency": "string",
        "status": "string",
        "transaction_id": "string"
      }
    ],
    "transactions_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="ordertransactionlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Order_Transaction_List](#schemamodel_response_order_transaction_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## OrderUpdate

<a id="opIdOrderUpdate"></a>

> Code samples

```bash
curl 'https://example.com/order.update.json?order_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /order.update.json`

Update existing order.

<h3 id="orderupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|query|string|true|Defines the orders specified by order id|
|store_id|query|string|false|Defines store id where the order should be found|
|order_status|query|string|false|Defines new order's status|
|comment|query|string|false|Specifies order comment|
|admin_comment|query|string|false|Specifies admin's order comment|
|admin_private_comment|query|string|false|Specifies private admin's order comment|
|date_modified|query|string|false|Specifies order's  modification date|
|date_finished|query|string|false|Specifies order's  finished date|
|financial_status|query|string|false|Update order financial status to specified|
|fulfillment_status|query|string|false|Create order with fulfillment status|
|order_payment_method|query|string|false|Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'|
|send_notifications|query|boolean|false|Send notifications to customer after order was created|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated_items": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="orderupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="orderupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated_items|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-customer">customer</h1>

## CustomerAdd

<a id="opIdCustomerAdd"></a>

> Code samples

```bash
curl https://example.com/customer.add.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}" \
  -d '{
    "address": [
      {
        "address_book_address1": "string",
        "address_book_address2": "string",
        "address_book_city": "string",
        "address_book_company": "string",
        "address_book_country": "string",
        "address_book_default": true,
        "address_book_fax": "string",
        "address_book_first_name": "string",
        "address_book_gender": "string",
        "address_book_last_name": "string",
        "address_book_phone": "string",
        "address_book_postcode": "string",
        "address_book_region": "string",
        "address_book_state": "string",
        "address_book_type": "string",
        "address_book_website": "string"
      }
    ],
    "birth_day": "string",
    "company": "string",
    "created_time": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "gender": "string",
    "group": "string",
    "last_login": "string",
    "last_name": "string",
    "login": "string",
    "modified_time": "string",
    "news_letter_subscription": false,
    "password": "string",
    "phone": "string",
    "status": "enabled",
    "store_id": "string",
    "website": "string"
  }'
```

`POST /customer.add.json`

Add customer into store.

> Body parameter

```json
{
  "address": [
    {
      "address_book_address1": "string",
      "address_book_address2": "string",
      "address_book_city": "string",
      "address_book_company": "string",
      "address_book_country": "string",
      "address_book_default": true,
      "address_book_fax": "string",
      "address_book_first_name": "string",
      "address_book_gender": "string",
      "address_book_last_name": "string",
      "address_book_phone": "string",
      "address_book_postcode": "string",
      "address_book_region": "string",
      "address_book_state": "string",
      "address_book_type": "string",
      "address_book_website": "string"
    }
  ],
  "birth_day": "string",
  "company": "string",
  "created_time": "string",
  "email": "string",
  "fax": "string",
  "first_name": "string",
  "gender": "string",
  "group": "string",
  "last_login": "string",
  "last_name": "string",
  "login": "string",
  "modified_time": "string",
  "news_letter_subscription": false,
  "password": "string",
  "phone": "string",
  "status": "enabled",
  "store_id": "string",
  "website": "string"
}
```

<h3 id="customeradd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomerAdd](#schemacustomeradd)|true|none|
|» address|body|[object]|false|none|
|» » address_book_address1|body|string|false|Specifies customer's first address in the address book|
|» » address_book_address2|body|string|false|Specifies customer's second address in the address book|
|» » address_book_city|body|string|false|Specifies customer's city in the address book|
|» » address_book_company|body|string|false|Specifies customer's company name in the address book|
|» » address_book_country|body|string|false|ISO code or name of country|
|» » address_book_default|body|boolean|false|Defines whether the address is used by default|
|» » address_book_fax|body|string|false|Specifies customer's fax in the address book|
|» » address_book_first_name|body|string|false|Specifies customer's first name in the address book|
|» » address_book_gender|body|string|false|Specifies customer's gender|
|» » address_book_last_name|body|string|false|Specifies customer's last name in the address book|
|» » address_book_phone|body|string|false|Specifies customer's phone number in the address book|
|» » address_book_postcode|body|string|false|Specifies customer's postcode|
|» » address_book_region|body|string|false|Specifies customer's region|
|» » address_book_state|body|string|false|ISO code or name of state.|
|» » address_book_type|body|string|false|Specifies customer's address type|
|» » address_book_website|body|string|false|Specifies customer's website in the address book|
|» birth_day|body|string|false|Defines customer's birthday|
|» company|body|string|false|Defines customer's company|
|» created_time|body|string|false|Entity's date creation|
|» email|body|string|true|Defines customer's email|
|» fax|body|string|false|Defines customer's fax|
|» first_name|body|string|true|Defines customer's first name|
|» gender|body|string|false|Defines customer's gender|
|» group|body|string|false|Defines the group where the customer|
|» last_login|body|string|false|Defines customer's last login time|
|» last_name|body|string|true|Defines customer's last name|
|» login|body|string|false|Specifies customer's login name|
|» modified_time|body|string|false|Entity's date modification|
|» news_letter_subscription|body|boolean|false|Defines whether the newsletter subscription is available for the user|
|» password|body|string|false|Defines customer's unique password|
|» phone|body|string|false|Defines customer's phone number|
|» status|body|string|false|Defines customer's status|
|» store_id|body|string|false|Store Id|
|» website|body|string|false|Link to customer website|

> Example responses

> 200 Response

```json
{
  "result": {
    "customer_id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customeradd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="customeradd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» customer_id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerAttributeList

<a id="opIdCustomerAttributeList"></a>

> Code samples

```bash
curl 'https://example.com/customer.attribute.list.json?customer_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /customer.attribute.list.json`

Get attributes for specific customer

<h3 id="customerattributelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|customer_id|query|string|true|Retrieves orders specified by customer id|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "items": [
      {
        "additional_fields": {},
        "attribute_id": "string",
        "code": "string",
        "custom_fields": {},
        "name": "string",
        "type": "string",
        "values": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "value": "string"
          }
        ]
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customerattributelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Customer_Attribute_List](#schemamodel_response_customer_attribute_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerCount

<a id="opIdCustomerCount"></a>

> Code samples

```bash
curl https://example.com/customer.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /customer.count.json`

Get number of customers from store.

<h3 id="customercount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|query|string|false|Customer group_id|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|store_id|query|string|false|Counts customer specified by store id|
|customer_list_id|query|string|false|The numeric ID of the customer list in Demandware.|
|avail|query|boolean|false|Defines category's visibility status|

> Example responses

> 200 Response

```json
{
  "result": {
    "customers_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customercount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="customercount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» customers_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerFind

<a id="opIdCustomerFind"></a>

> Code samples

```bash
curl 'https://example.com/customer.find.json?find_value=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /customer.find.json`

Find customers in store.

<h3 id="customerfind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|find_value|query|string|true|Entity search that is specified by some value|
|find_where|query|string|false|Entity search that is specified by the comma-separated unique fields|
|find_params|query|string|false|Entity search that is specified by comma-separated parameters|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "email": "string",
    "first_name": "string",
    "id": "string",
    "last_name": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customerfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="customerfind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» email|string|false|none|none|
|» first_name|string|false|none|none|
|» id|string|false|none|none|
|» last_name|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerGroupAdd

<a id="opIdCustomerGroupAdd"></a>

> Code samples

```bash
curl 'https://example.com/customer.group.add.json?name=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /customer.group.add.json`

Create customer group.

<h3 id="customergroupadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Customer group name|
|store_id|query|string|false|Store Id|
|stores_ids|query|string|false|Assign customer group to the stores that is specified by comma-separated stores' id|

> Example responses

> 200 Response

```json
{
  "result": {},
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customergroupadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="customergroupadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerGroupList

<a id="opIdCustomerGroupList"></a>

> Code samples

```bash
curl https://example.com/customer.group.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /customer.group.list.json`

Get list of customers groups.

<h3 id="customergrouplist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|group_ids|query|string|false|Groups that will be assigned to a customer|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "group": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "id": "string",
        "name": "string"
      }
    ],
    "group_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customergrouplist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Customer_Group_List](#schemamodel_response_customer_group_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerInfo

<a id="opIdCustomerInfo"></a>

> Code samples

```bash
curl 'https://example.com/customer.info.json?id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /customer.info.json`

Get customers' details from store.

<h3 id="customerinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Retrieves customer's info specified by customer id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|store_id|query|string|false|Retrieves customer info specified by store id|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "address_book": [
      {
        "additional_fields": {},
        "address1": "string",
        "address2": "string",
        "city": "string",
        "company": "string",
        "country": {
          "additional_fields": {},
          "code2": "string",
          "code3": "string",
          "custom_fields": {},
          "name": "string"
        },
        "custom_fields": {},
        "default": true,
        "fax": "string",
        "first_name": "string",
        "gender": "string",
        "id": "string",
        "last_name": "string",
        "phone": "string",
        "postcode": "string",
        "region": "string",
        "state": {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "name": "string"
        },
        "type": "string",
        "website": "string"
      }
    ],
    "birth_day": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "company": "string",
    "created_time": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "custom_fields": {},
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "gender": "string",
    "group": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "id": "string",
        "name": "string"
      }
    ],
    "id": "string",
    "ip_address": "string",
    "last_login": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "last_name": "string",
    "last_order_id": "string",
    "login": "string",
    "modified_time": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "news_letter_subscription": true,
    "orders_count": 0,
    "phone": "string",
    "status": "string",
    "stores_ids": [
      "string"
    ],
    "website": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customerinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="customerinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Customer](#schemacustomer)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerList

<a id="opIdCustomerList"></a>

> Code samples

```bash
curl https://example.com/customer.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /customer.list.json`

Get list of customers from store.

<h3 id="customerlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|group_id|query|string|false|Customer group_id|
|store_id|query|string|false|Retrieves customers specified by store id|
|customer_list_id|query|string|false|The numeric ID of the customer list in Demandware.|
|avail|query|boolean|false|Defines category's visibility status|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "customer": [
      {
        "additional_fields": {},
        "address_book": [
          {
            "additional_fields": {},
            "address1": "string",
            "address2": "string",
            "city": "string",
            "company": "string",
            "country": {
              "additional_fields": {},
              "code2": "string",
              "code3": "string",
              "custom_fields": {},
              "name": "string"
            },
            "custom_fields": {},
            "default": true,
            "fax": "string",
            "first_name": "string",
            "gender": "string",
            "id": "string",
            "last_name": "string",
            "phone": "string",
            "postcode": "string",
            "region": "string",
            "state": {
              "additional_fields": {},
              "code": "string",
              "custom_fields": {},
              "name": "string"
            },
            "type": "string",
            "website": "string"
          }
        ],
        "birth_day": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "company": "string",
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "email": "string",
        "fax": "string",
        "first_name": "string",
        "gender": "string",
        "group": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string"
          }
        ],
        "id": "string",
        "ip_address": "string",
        "last_login": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "last_name": "string",
        "last_order_id": "string",
        "login": "string",
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "news_letter_subscription": true,
        "orders_count": 0,
        "phone": "string",
        "status": "string",
        "stores_ids": [
          "string"
        ],
        "website": "string"
      }
    ],
    "customers_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customerlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Customer_List](#schemamodel_response_customer_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## CustomerUpdate

<a id="opIdCustomerUpdate"></a>

> Code samples

```bash
curl 'https://example.com/customer.update.json?id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /customer.update.json`

Update information of customer in store.

<h3 id="customerupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|group_id|query|string|false|Customer group_id|
|group_ids|query|string|false|Groups that will be assigned to a customer|
|first_name|query|string|false|Defines customer's first name|
|last_name|query|string|false|Defines customer's last name|
|news_letter_subscription|query|boolean|false|Defines whether the newsletter subscription is available for the user|
|tags|query|string|false|Customer tags|
|address_book_id_{x}|query|string|false|The ID of the address.|
|address_book_first_name_{x}|query|string|false|Specifies customer's first name in the address book|
|address_book_last_name_{x}|query|string|false|Specifies customer's last name in the address book|
|address_book_company_{x}|query|string|false|Specifies customer's company name in the address book|
|address_book_phone_{x}|query|string|false|Specifies customer's phone number in the address book|
|address_book_address1_{x}|query|string|false|Specifies customer's first address in the address book|
|address_book_address2_{x}|query|string|false|Specifies customer's second address in the address book|
|address_book_city_{x}|query|string|false|Specifies customer's city in the address book|
|address_book_country_{x}|query|string|false|ISO code or name of country|
|address_book_state_{x}|query|string|false|ISO code or name of state.|
|address_book_postcode_{x}|query|string|false|Specifies customer's postcode|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="customerupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="customerupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-attribute">attribute</h1>

## AttributeAdd

<a id="opIdAttributeAdd"></a>

> Code samples

```bash
curl 'https://example.com/attribute.add.json?type=text&name=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /attribute.add.json`

Add new attribute

<h3 id="attributeadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Defines attribute's type|
|code|query|string|false|Entity code|
|name|query|string|true|Defines attributes's name|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|visible|query|boolean|false|Set visibility status|
|required|query|boolean|false|Defines if the option is required|
|position|query|integer|false|Attribute`s position|
|attribute_group_id|query|string|false|Filter by attribute_group_id|
|is_global|query|string|false|Attribute saving scope|
|is_searchable|query|boolean|false|Use attribute in Quick Search|
|is_filterable|query|string|false|Use In Layered Navigation|
|is_comparable|query|boolean|false|Comparable on Front-end|
|is_html_allowed_on_front|query|boolean|false|Allow HTML Tags on Frontend|
|is_filterable_in_search|query|boolean|false|Use In Search Results Layered Navigation|
|is_configurable|query|boolean|false|Use To Create Configurable Product|
|is_visible_in_advanced_search|query|boolean|false|Use in Advanced Search|
|is_used_for_promo_rules|query|boolean|false|Use for Promo Rule Conditions|
|used_in_product_listing|query|boolean|false|Used in Product Listing|
|used_for_sort_by|query|boolean|false|Used for Sorting in Product Listing|
|apply_to|query|string|false|Types of products which can have this attribute|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|text|
|type|select|
|type|textarea|
|type|date|
|type|price|
|type|multiselect|
|type|boolean|

> Example responses

> 200 Response

```json
{
  "result": {
    "id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeAssignGroup

<a id="opIdAttributeAssignGroup"></a>

> Code samples

```bash
curl 'https://example.com/attribute.assign.group.json?id=string&group_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /attribute.assign.group.json`

Assign attribute to the group

<h3 id="attributeassigngroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|group_id|query|string|true|Attribute group_id|
|attribute_set_id|query|string|false|Attribute set id|

> Example responses

> 200 Response

```json
{
  "result": {
    "assigned": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeassigngroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeassigngroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» assigned|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeAssignSet

<a id="opIdAttributeAssignSet"></a>

> Code samples

```bash
curl 'https://example.com/attribute.assign.set.json?id=string&attribute_set_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /attribute.assign.set.json`

Assign attribute to the attribute set

<h3 id="attributeassignset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|group_id|query|string|false|Attribute group_id|
|attribute_set_id|query|string|true|Attribute set id|

> Example responses

> 200 Response

```json
{
  "result": {
    "assigned": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeassignset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeassignset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» assigned|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeAttributesetList

<a id="opIdAttributeAttributesetList"></a>

> Code samples

```bash
curl https://example.com/attribute.attributeset.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /attribute.attributeset.list.json`

Get attribute_set list

<h3 id="attributeattributesetlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "additional_fields": {},
      "assigned_attribute_ids": [
        "string"
      ],
      "attribute_set_id": "string",
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "position": 0
    }
  ],
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeattributesetlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeattributesetlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[StoreAttribute_Group](#schemastoreattribute_group)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeCount

<a id="opIdAttributeCount"></a>

> Code samples

```bash
curl https://example.com/attribute.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /attribute.count.json`

Get attributes count

<h3 id="attributecount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Defines attribute's type|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|visible|query|boolean|false|Filter items by visibility status|
|required|query|boolean|false|Defines if the option is required|
|system|query|boolean|false|True if attribute is system|

> Example responses

> 200 Response

```json
{
  "result": {
    "attributes_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributecount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributecount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» attributes_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeDelete

<a id="opIdAttributeDelete"></a>

> Code samples

```bash
curl 'https://example.com/attribute.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /attribute.delete.json`

Delete attribute from store

<h3 id="attributedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|
|id|query|string|true|Entity id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeGroupList

<a id="opIdAttributeGroupList"></a>

> Code samples

```bash
curl https://example.com/attribute.group.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /attribute.group.list.json`

Get attribute group list

<h3 id="attributegrouplist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|lang_id|query|string|false|Language id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|attribute_set_id|query|string|false|Attribute set id|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "additional_fields": {},
      "assigned_attribute_ids": [
        "string"
      ],
      "attribute_set_id": "string",
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "position": 0
    }
  ],
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributegrouplist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributegrouplist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[StoreAttribute_Group](#schemastoreattribute_group)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeInfo

<a id="opIdAttributeInfo"></a>

> Code samples

```bash
curl 'https://example.com/attribute.info.json?id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /attribute.info.json`

Get attribute info

<h3 id="attributeinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "code": "string",
    "custom_fields": {},
    "default_values": [
      "string"
    ],
    "id": "string",
    "lang_id": "string",
    "name": "string",
    "position": 0,
    "required": true,
    "store_id": "string",
    "system": true,
    "type": "string",
    "values": [
      "string"
    ],
    "visible": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[StoreAttribute](#schemastoreattribute)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeList

<a id="opIdAttributeList"></a>

> Code samples

```bash
curl https://example.com/attribute.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /attribute.list.json`

Get attributes list

<h3 id="attributelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|type|query|string|false|Defines attribute's type|
|attribute_ids|query|string|false|Filter attributes by ids|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Retrieves attributes on specified language id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|visible|query|boolean|false|Filter items by visibility status|
|required|query|boolean|false|Defines if the option is required|
|system|query|boolean|false|True if attribute is system|

> Example responses

> 200 Response

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "attribute": [
      {
        "additional_fields": {},
        "code": "string",
        "custom_fields": {},
        "default_values": [
          "string"
        ],
        "id": "string",
        "lang_id": "string",
        "name": "string",
        "position": 0,
        "required": true,
        "store_id": "string",
        "system": true,
        "type": "string",
        "values": [
          "string"
        ],
        "visible": true
      }
    ],
    "attributes_count": 0,
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Model_Response_Attribute_List](#schemamodel_response_attribute_list)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeTypeList

<a id="opIdAttributeTypeList"></a>

> Code samples

```bash
curl https://example.com/attribute.type.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /attribute.type.list.json`

Get list of supported attributes types

> Example responses

> 200 Response

```json
{
  "result": {
    "attribute_type": [
      "string"
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributetypelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributetypelist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» attribute_type|[string]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeUnassignGroup

<a id="opIdAttributeUnassignGroup"></a>

> Code samples

```bash
curl 'https://example.com/attribute.unassign.group.json?id=string&group_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /attribute.unassign.group.json`

Unassign attribute from group

<h3 id="attributeunassigngroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|group_id|query|string|true|Customer group_id|

> Example responses

> 200 Response

```json
{
  "result": {
    "unassigned": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeunassigngroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeunassigngroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» unassigned|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeUnassignSet

<a id="opIdAttributeUnassignSet"></a>

> Code samples

```bash
curl 'https://example.com/attribute.unassign.set.json?id=string&attribute_set_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /attribute.unassign.set.json`

Unassign attribute from attribute set

<h3 id="attributeunassignset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|attribute_set_id|query|string|true|Attribute set id|

> Example responses

> 200 Response

```json
{
  "result": {
    "unassigned": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeunassignset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeunassignset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» unassigned|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## AttributeUpdate

<a id="opIdAttributeUpdate"></a>

> Code samples

```bash
curl 'https://example.com/attribute.update.json?id=string&name=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /attribute.update.json`

Update attribute data

<h3 id="attributeupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|name|query|string|true|Defines new attributes's name|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="attributeupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attributeupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-tax">tax</h1>

## TaxClassInfo

<a id="opIdTaxClassInfo"></a>

> Code samples

```bash
curl 'https://example.com/tax.class.info.json?tax_class_id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /tax.class.info.json`

Get info about tax

<h3 id="taxclassinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tax_class_id|query|string|true|Retrieves taxes specified by class id|
|store_id|query|string|false|Store Id|
|lang_id|query|string|false|Language id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "avail": true,
    "custom_fields": {},
    "id": "string",
    "name": "string",
    "tax": 0,
    "tax_rates": [
      {
        "additional_fields": {},
        "address": [
          "string"
        ],
        "cities": [
          "string"
        ],
        "countries": [
          {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "states": [
              {
                "additional_fields": {},
                "code": "string",
                "custom_fields": {},
                "id": "string",
                "name": "string",
                "tax": 0,
                "tax_type": 0,
                "zip_codes": [
                  {
                    "additional_fields": {},
                    "custom_fields": {},
                    "fields": [
                      {
                        "additional_fields": {},
                        "custom_fields": {},
                        "from": "string",
                        "to": "string"
                      }
                    ],
                    "is_range": true,
                    "range": [
                      "string"
                    ]
                  }
                ]
              }
            ],
            "tax": 0,
            "tax_type": 0
          }
        ],
        "custom_fields": {},
        "id": "string",
        "name": "string",
        "tax": 0,
        "tax_based_on": "string",
        "tax_type": 0,
        "zip_codes": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "fields": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "from": "string",
                "to": "string"
              }
            ],
            "is_range": true,
            "range": [
              "string"
            ]
          }
        ]
      }
    ],
    "tax_type": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="taxclassinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="taxclassinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[TaxClass](#schemataxclass)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-webhook">webhook</h1>

## WebhookCount

<a id="opIdWebhookCount"></a>

> Code samples

```bash
curl https://example.com/webhook.count.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /webhook.count.json`

Count registered webhooks on the store.

<h3 id="webhookcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity|query|string|false|The entity you want to filter webhooks by (e.g. order or product)|
|action|query|string|false|The action you want to filter webhooks by (e.g. order or product)|
|active|query|boolean|false|The webhook status you want to filter webhooks by|

> Example responses

> 200 Response

```json
{
  "result": {
    "webhook_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="webhookcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="webhookcount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» webhook_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## WebhookCreate

<a id="opIdWebhookCreate"></a>

> Code samples

```bash
curl 'https://example.com/webhook.create.json?entity=string&action=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /webhook.create.json`

Create webhook on the store and subscribe to it.

<h3 id="webhookcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity|query|string|true|Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)|
|action|query|string|true|Specify what action (event) will trigger the webhook (e.g add, delete, or update)|
|callback|query|string|false|Callback url that returns shipping rates. It should be able to accept POST requests with json data.|
|label|query|string|false|The name you give to the webhook|
|fields|query|string|false|Fields the webhook should send|
|active|query|boolean|false|Webhook status|
|store_id|query|string|false|Defines store id where the webhook should be assigned|

> Example responses

> 200 Response

```json
{
  "result": {
    "id": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="webhookcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="webhookcreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» id|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## WebhookDelete

<a id="opIdWebhookDelete"></a>

> Code samples

```bash
curl 'https://example.com/webhook.delete.json?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /webhook.delete.json`

Delete registered webhook on the store.

<h3 id="webhookdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Webhook id|

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="webhookdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="webhookdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## WebhookEvents

<a id="opIdWebhookEvents"></a>

> Code samples

```bash
curl https://example.com/webhook.events.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /webhook.events.json`

List all Webhooks that are available on this store.

> Example responses

> 200 Response

```json
{
  "result": {
    "events": [
      {
        "action": "string",
        "entity": "string",
        "webhook_name": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="webhookevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="webhookevents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» events|[object]|false|none|none|
|» » action|string|false|none|none|
|» » entity|string|false|none|none|
|» » webhook_name|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## WebhookList

<a id="opIdWebhookList"></a>

> Code samples

```bash
curl https://example.com/webhook.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /webhook.list.json`

List registered webhook on the store.

<h3 id="webhooklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|entity|query|string|false|The entity you want to filter webhooks by (e.g. order or product)|
|action|query|string|false|The action you want to filter webhooks by (e.g. add, update, or delete)|
|active|query|boolean|false|The webhook status you want to filter webhooks by|
|ids|query|string|false|List of сomma-separated webhook ids|

> Example responses

> 200 Response

```json
{
  "result": {
    "webhook": [
      {
        "action": "string",
        "active": true,
        "additional_fields": {},
        "callback": "string",
        "created_at": "string",
        "custom_fields": {},
        "entity": "string",
        "fields": "string",
        "id": 0,
        "label": "string",
        "store_id": "string",
        "updated_at": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="webhooklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="webhooklist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» webhook|[[Webhook](#schemawebhook)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## WebhookUpdate

<a id="opIdWebhookUpdate"></a>

> Code samples

```bash
curl 'https://example.com/webhook.update.json?id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`PUT /webhook.update.json`

Update Webhooks parameters.

<h3 id="webhookupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Webhook id|
|callback|query|string|false|Callback url that returns shipping rates. It should be able to accept POST requests with json data.|
|label|query|string|false|The name you give to the webhook|
|fields|query|string|false|Fields the webhook should send|
|active|query|boolean|false|Webhook status|

> Example responses

> 200 Response

```json
{
  "result": {
    "updated": "string"
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="webhookupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="webhookupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated|string|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-basket">basket</h1>

## BasketInfo

<a id="opIdBasketInfo"></a>

> Code samples

```bash
curl 'https://example.com/basket.info.json?id=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /basket.info.json`

Retrieve basket information.

<h3 id="basketinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Entity id|
|store_id|query|string|false|Store Id|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_fields": {},
    "basket_products": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "id": "string",
        "name": "string",
        "options": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string",
            "used_in_combination": true,
            "value": "string",
            "value_id": "string"
          }
        ],
        "parent_id": "string",
        "price": 0,
        "product_id": "string",
        "quantity": 0,
        "sku": "string",
        "tax": 0,
        "variant_id": "string",
        "weight": 0,
        "weight_unit": "string"
      }
    ],
    "basket_url": "string",
    "created_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "currency": {
      "additional_fields": {},
      "avail": true,
      "custom_fields": {},
      "default": true,
      "id": "string",
      "iso3": "string",
      "name": "string",
      "rate": 0,
      "symbol_left": "string",
      "symbol_right": "string"
    },
    "custom_fields": {},
    "customer": {
      "additional_fields": {},
      "custom_fields": {},
      "email": "string",
      "first_name": "string",
      "id": "string",
      "last_name": "string",
      "phone": "string"
    },
    "id": "string",
    "modified_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    }
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="basketinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="basketinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[Basket](#schemabasket)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## BasketItemAdd

<a id="opIdBasketItemAdd"></a>

> Code samples

```bash
curl 'https://example.com/basket.item.add.json?customer_id=string&product_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /basket.item.add.json`

Add item to basket

<h3 id="basketitemadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|query|string|true|Retrieves orders specified by customer id|
|product_id|query|string|true|Defines id of the product which should be added to the basket|
|variant_id|query|string|false|Defines product's variants specified by variant id|
|quantity|query|number|false|Defines new items quantity|
|store_id|query|string|false|Store Id|

> Example responses

> 200 Response

```json
{
  "result": {
    "added": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="basketitemadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="basketitemadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» added|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## BasketLiveShippingServiceCreate

<a id="opIdBasketLiveShippingServiceCreate"></a>

> Code samples

```bash
curl 'https://example.com/basket.live_shipping_service.create.json?name=string&callback=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /basket.live_shipping_service.create.json`

Create live shipping rate service. (Beta)

<h3 id="basketliveshippingservicecreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|
|name|query|string|true|Shipping Service Name|
|callback|query|string|true|Callback url that returns shipping rates. It should be able to accept POST requests with json data.|

> Example responses

> 200 Response

```json
{
  "result": {
    "id": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="basketliveshippingservicecreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="basketliveshippingservicecreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» id|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## BasketLiveShippingServiceDelete

<a id="opIdBasketLiveShippingServiceDelete"></a>

> Code samples

```bash
curl 'https://example.com/basket.live_shipping_service.delete.json?id=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`DELETE /basket.live_shipping_service.delete.json`

Delete live shipping rate service. (Beta)

<h3 id="basketliveshippingservicedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|Entity id|

> Example responses

> 200 Response

```json
{
  "result": {
    "status": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="basketliveshippingservicedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="basketliveshippingservicedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» status|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## BasketLiveShippingServiceList

<a id="opIdBasketLiveShippingServiceList"></a>

> Code samples

```bash
curl https://example.com/basket.live_shipping_service.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /basket.live_shipping_service.list.json`

Retrieve a list of live shipping rate services. (Beta)

<h3 id="basketliveshippingservicelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|store_id|query|string|false|Store Id|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|

> Example responses

> 200 Response

```json
{
  "result": {
    "live_shipping_services": [
      {
        "additional_fields": {},
        "callback": "string",
        "callback_err_cnt": 0,
        "custom_fields": {},
        "enabled_on_store": true,
        "id": "string",
        "name": "string"
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="basketliveshippingservicelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="basketliveshippingservicelist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» live_shipping_services|[[Basket_LiveShippingService](#schemabasket_liveshippingservice)]|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-bridge">bridge</h1>

## BridgeDelete

<a id="opIdBridgeDelete"></a>

> Code samples

```bash
curl https://example.com/bridge.delete.json \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /bridge.delete.json`

Delete bridge from the store.

> Example responses

> 200 Response

```json
{
  "result": {
    "deleted": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="bridgedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="bridgedelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» deleted|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

## BridgeUpdate

<a id="opIdBridgeUpdate"></a>

> Code samples

```bash
curl https://example.com/bridge.update.json \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`POST /bridge.update.json`

Update bridge in the store.

> Example responses

> 200 Response

```json
{
  "result": {
    "updated": true
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="bridgeupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="bridgeupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» updated|boolean|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

<h1 id="swagger-api2cart-subscriber">subscriber</h1>

## SubscriberList

<a id="opIdSubscriberList"></a>

> Code samples

```bash
curl https://example.com/subscriber.list.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -H "x-store-key: ${API_KEY}"
```

`GET /subscriber.list.json`

Get subscribers list

<h3 id="subscriberlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|This parameter sets the number from which you want to get entities|
|count|query|integer|false|This parameter sets the entity amount that has to be retrieved. Max allowed count=250|
|subscribed|query|boolean|false|Filter by subscription status|
|store_id|query|string|false|Store Id|
|email|query|string|false|Filter subscribers by email|
|params|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|
|exclude|query|string|false|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|created_from|query|string|false|Retrieve entities from their creation date|
|created_to|query|string|false|Retrieve entities to their creation date|
|modified_from|query|string|false|Retrieve entities from their modification date|
|modified_to|query|string|false|Retrieve entities to their modification date|
|page_cursor|query|string|false|Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)|
|response_fields|query|string|false|Set this parameter in order to choose which entity fields you want to retrieve|

> Example responses

> 200 Response

```json
{
  "result": {
    "subscribers": [
      {
        "additional_fields": {},
        "created_time": "string",
        "custom_fields": {},
        "customer_id": "string",
        "email": "string",
        "first_name": "string",
        "id": "string",
        "last_name": "string",
        "modified_time": "string",
        "subscribed": true
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

<h3 id="subscriberlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="subscriberlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» subscribers|[[Subscriber](#schemasubscriber)]|false|none|none|
|» total_count|integer|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key & store_key
</aside>

# Schemas

<h2 id="tocS_A2CDateTime">A2CDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaa2cdatetime"></a>
<a id="schema_A2CDateTime"></a>
<a id="tocSa2cdatetime"></a>
<a id="tocsa2cdatetime"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "format": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|format|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_AccountCartAdd">AccountCartAdd</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcartadd"></a>
<a id="schema_AccountCartAdd"></a>
<a id="tocSaccountcartadd"></a>
<a id="tocsaccountcartadd"></a>

```json
{
  "3dcart_access_token": "string",
  "3dcart_private_key": "string",
  "3dcartapi_api_key": "string",
  "amazon_access_key_id": "string",
  "amazon_access_token": "string",
  "amazon_marketplaces_ids": "string",
  "amazon_secret_key": "string",
  "amazon_seller_id": "string",
  "amazon_sp_api_environment": "production",
  "amazon_sp_aws_region": "eu-west-1",
  "amazon_sp_aws_role_arn": "string",
  "amazon_sp_aws_user_key_id": "string",
  "amazon_sp_aws_user_secret": "string",
  "amazon_sp_client_id": "string",
  "amazon_sp_client_secret": "string",
  "amazon_sp_refresh_token": "string",
  "aspdotnetstorefront_api_pass": "string",
  "aspdotnetstorefront_api_user": "string",
  "bigcommerceapi_access_token": "string",
  "bigcommerceapi_admin_account": "string",
  "bigcommerceapi_api_key": "string",
  "bigcommerceapi_api_path": "string",
  "bigcommerceapi_client_id": "string",
  "bigcommerceapi_context": "string",
  "bridge_url": "string",
  "cart_id": "3DCart",
  "commercehq_api_key": "string",
  "commercehq_api_password": "string",
  "db_tables_prefix": "string",
  "demandware_api_password": "string",
  "demandware_client_id": "string",
  "demandware_user_name": "string",
  "demandware_user_password": "string",
  "ebay_access_token": "string",
  "ebay_client_id": "string",
  "ebay_client_secret": "string",
  "ebay_environment": "production",
  "ebay_refresh_token": "string",
  "ebay_runame": "string",
  "ebay_site_id": 0,
  "ecwid_acess_token": "string",
  "ecwid_store_id": "string",
  "etsy_access_token": "string",
  "etsy_client_id": "string",
  "etsy_keystring": "string",
  "etsy_refresh_token": "string",
  "etsy_shared_secret": "string",
  "etsy_token_secret": "string",
  "ftp_host": "string",
  "ftp_password": "string",
  "ftp_port": 0,
  "ftp_store_dir": "string",
  "ftp_user": "string",
  "hybris_client_id": "string",
  "hybris_client_secret": "string",
  "hybris_password": "string",
  "hybris_username": "string",
  "hybris_websites": [
    {
      "storeIds": [
        "string"
      ],
      "uid": "string",
      "url": "string"
    }
  ],
  "lightspeed_api_key": "string",
  "lightspeed_api_secret": "string",
  "magento_access_token": "string",
  "magento_consumer_key": "string",
  "magento_consumer_secret": "string",
  "magento_token_secret": "string",
  "mercado_libre_app_id": "string",
  "mercado_libre_app_secret_key": "string",
  "mercado_libre_refresh_token": "string",
  "neto_api_key": "string",
  "neto_api_username": "string",
  "prestashop_webservice_key": "string",
  "shopify_access_token": "string",
  "shopify_api_key": "string",
  "shopify_api_password": "string",
  "shopify_shared_secret": "string",
  "shopware_access_key": "string",
  "shopware_api_key": "string",
  "shopware_api_secret": "string",
  "squarespace_api_key": "string",
  "store_key": "string",
  "store_root": "string",
  "store_url": "string",
  "validate_version": false,
  "verify": true,
  "volusion_login": "string",
  "volusion_password": "string",
  "walmart_channel_type": "string",
  "walmart_client_id": "string",
  "walmart_client_secret": "string",
  "walmart_environment": "production",
  "wc_consumer_key": "string",
  "wc_consumer_secret": "string",
  "wix_app_id": "string",
  "wix_app_secret_key": "string",
  "wix_refresh_token": "string",
  "zid_access_token": "string",
  "zid_authorization": "string",
  "zid_client_id": 0,
  "zid_client_secret": "string",
  "zid_refresh_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|3dcart_access_token|string|false|none|3DCart Token|
|3dcart_private_key|string|false|none|3DCart Private Key|
|3dcartapi_api_key|string|false|none|3DCart API Key|
|amazon_access_key_id|string|false|none|Amazon Secret Key Id|
|amazon_access_token|string|false|none|MWS Auth Token. Access token authorizing the app to access resources on behalf of a user|
|amazon_marketplaces_ids|string|false|none|Amazon Marketplace IDs comma separated string|
|amazon_secret_key|string|false|none|Amazon Secret Key|
|amazon_seller_id|string|false|none|Amazon Seller ID (Merchant token)|
|amazon_sp_api_environment|string|false|none|Amazon SP API environment|
|amazon_sp_aws_region|string|true|none|Amazon AWS Region|
|amazon_sp_aws_role_arn|string|true|none|Amazon AWS Role ARN|
|amazon_sp_aws_user_key_id|string|true|none|Amazon AWS user access key ID|
|amazon_sp_aws_user_secret|string|true|none|Amazon AWS user secret access key|
|amazon_sp_client_id|string|true|none|Amazon SP API app client id|
|amazon_sp_client_secret|string|true|none|Amazon SP API app client secret|
|amazon_sp_refresh_token|string|true|none|Amazon SP API OAuth refresh token|
|aspdotnetstorefront_api_pass|string|false|none|AspDotNetStorefront API Password|
|aspdotnetstorefront_api_user|string|false|none|It's a AspDotNetStorefront account for which API is available|
|bigcommerceapi_access_token|string|false|none|Access token authorizing the app to access resources on behalf of a user|
|bigcommerceapi_admin_account|string|false|none|It's a BigCommerce account for which API is enabled|
|bigcommerceapi_api_key|string|false|none|Bigcommerce API Key|
|bigcommerceapi_api_path|string|false|none|BigCommerce API URL|
|bigcommerceapi_client_id|string|false|none|Client ID of the requesting app|
|bigcommerceapi_context|string|false|none|API Path section unique to the store|
|bridge_url|string|false|none|This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)|
|cart_id|string|true|none|Store’s identifier which you can get from cart_list method|
|commercehq_api_key|string|false|none|CommerceHQ api key|
|commercehq_api_password|string|false|none|CommerceHQ api password|
|db_tables_prefix|string|false|none|DB tables prefix|
|demandware_api_password|string|false|none|Demandware api password|
|demandware_client_id|string|false|none|Demandware client id|
|demandware_user_name|string|false|none|Demandware user name|
|demandware_user_password|string|false|none|Demandware user password|
|ebay_access_token|string|false|none|Used to authenticate API requests.|
|ebay_client_id|string|false|none|Application ID (AppID).|
|ebay_client_secret|string|false|none|Shared Secret from eBay application|
|ebay_environment|string|false|none|eBay environment|
|ebay_refresh_token|string|false|none|Used to renew the access token.|
|ebay_runame|string|false|none|The RuName value that eBay assigns to your application.|
|ebay_site_id|integer|false|none|eBay global ID|
|ecwid_acess_token|string|false|none|Access token authorizing the app to access resources on behalf of a user|
|ecwid_store_id|string|false|none|Store Id|
|etsy_access_token|string|false|none|Access token authorizing the app to access resources on behalf of a user|
|etsy_client_id|string|true|none|Etsy Client Id|
|etsy_keystring|string|false|none|Etsy keystring|
|etsy_refresh_token|string|true|none|Etsy Refresh token|
|etsy_shared_secret|string|false|none|Etsy shared secret|
|etsy_token_secret|string|false|none|Secret token authorizing the app to access resources on behalf of a user|
|ftp_host|string|false|none|FTP connection host|
|ftp_password|string|false|none|FTP Password|
|ftp_port|integer|false|none|FTP Port|
|ftp_store_dir|string|false|none|FTP Store dir|
|ftp_user|string|false|none|FTP User|
|hybris_client_id|string|false|none|Omni Commerce Connector Client ID|
|hybris_client_secret|string|false|none|Omni Commerce Connector Client Secret|
|hybris_password|string|false|none|User password|
|hybris_username|string|false|none|User Name|
|hybris_websites|[object]|false|none|Websites to stores mapping data|
|lightspeed_api_key|string|false|none|LightSpeed api key|
|lightspeed_api_secret|string|false|none|LightSpeed api secret|
|magento_access_token|string|false|none|Magento Access Token|
|magento_consumer_key|string|false|none|Magento Consumer Key|
|magento_consumer_secret|string|false|none|Magento Consumer Secret|
|magento_token_secret|string|false|none|Magento Token Secret|
|mercado_libre_app_id|string|false|none|Mercado Libre App ID|
|mercado_libre_app_secret_key|string|false|none|Mercado Libre App Secret Key|
|mercado_libre_refresh_token|string|false|none|Mercado Libre Refresh Token|
|neto_api_key|string|false|none|Neto API Key|
|neto_api_username|string|false|none|Neto User Name|
|prestashop_webservice_key|string|false|none|Prestashop webservice key|
|shopify_access_token|string|false|none|Access token authorizing the app to access resources on behalf of a user|
|shopify_api_key|string|false|none|Shopify API Key|
|shopify_api_password|string|false|none|Shopify API Password|
|shopify_shared_secret|string|false|none|Shared secret|
|shopware_access_key|string|false|none|Shopware access key|
|shopware_api_key|string|false|none|Shopware api key|
|shopware_api_secret|string|false|none|Shopware client secret access key|
|squarespace_api_key|string|false|none|Squarespace API Key|
|store_key|string|false|none|Set this parameter if bridge is already uploaded to store|
|store_root|string|false|none|Absolute path to the store root directory (used with "bridge_url" parameter)|
|store_url|string|true|none|A web address of a store that you would like to connect to API2Cart|
|validate_version|boolean|false|none|Specify if api2cart should validate cart version|
|verify|boolean|false|none|Enables or disables cart's verification|
|volusion_login|string|false|none|It's a Volusion account for which API is enabled|
|volusion_password|string|false|none|Volusion API Password|
|walmart_channel_type|string|false|none|Walmart WM_CONSUMER.CHANNEL.TYPE header|
|walmart_client_id|string|false|none|Walmart client ID|
|walmart_client_secret|string|false|none|Walmart client secret|
|walmart_environment|string|false|none|Walmart environment|
|wc_consumer_key|string|false|none|Woocommerce consumer key|
|wc_consumer_secret|string|false|none|Woocommerce consumer secret|
|wix_app_id|string|false|none|Wix App ID|
|wix_app_secret_key|string|false|none|Wix App Secret Key|
|wix_refresh_token|string|false|none|Wix refresh token|
|zid_access_token|string|false|none|Zid Access Token|
|zid_authorization|string|false|none|Zid Authorization|
|zid_client_id|integer|false|none|Zid Client ID|
|zid_client_secret|string|false|none|Zid Client Secret|
|zid_refresh_token|string|false|none|Zid refresh token|

#### Enumerated Values

|Property|Value|
|---|---|
|amazon_sp_aws_region|eu-west-1|
|amazon_sp_aws_region|us-east-1|
|amazon_sp_aws_region|us-west-2|
|cart_id|3DCart|
|cart_id|3DCartApi|
|cart_id|AceShop|
|cart_id|AmazonSP|
|cart_id|Amazon|
|cart_id|AspDotNetStorefront|
|cart_id|BigcommerceApi|
|cart_id|Creloaded|
|cart_id|CommerceHQ|
|cart_id|Cscart|
|cart_id|Cubecart|
|cart_id|Demandware|
|cart_id|EBay|
|cart_id|Ecwid|
|cart_id|Etsy|
|cart_id|EtsyAPIv3|
|cart_id|Gambio|
|cart_id|Interspire|
|cart_id|JooCart|
|cart_id|Magento1212|
|cart_id|Magento2Api|
|cart_id|MijoShop|
|cart_id|Neto|
|cart_id|Opencart14|
|cart_id|LightSpeed|
|cart_id|Oscmax2|
|cart_id|Oscommerce22ms2|
|cart_id|Oxid|
|cart_id|Pinnacle|
|cart_id|Prestashop|
|cart_id|PrestashopApi|
|cart_id|SSPremium|
|cart_id|Shopify|
|cart_id|Squarespace|
|cart_id|Shopware|
|cart_id|ShopwareApi|
|cart_id|Tomatocart|
|cart_id|Ubercart|
|cart_id|Virtuemart|
|cart_id|Volusion|
|cart_id|WPecommerce|
|cart_id|Walmart|
|cart_id|WebAsyst|
|cart_id|Woocommerce|
|cart_id|WoocommerceApi|
|cart_id|Wix|
|cart_id|Xcart|
|cart_id|Xtcommerce|
|cart_id|XtcommerceVeyton|
|cart_id|Zencart137|
|cart_id|Hybris|
|cart_id|MercadoLibre|
|cart_id|Zid|

<h2 id="tocS_BaseCustomer">BaseCustomer</h2>
<!-- backwards compatibility -->
<a id="schemabasecustomer"></a>
<a id="schema_BaseCustomer"></a>
<a id="tocSbasecustomer"></a>
<a id="tocsbasecustomer"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "email": "string",
  "first_name": "string",
  "id": "string",
  "last_name": "string",
  "phone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|id|string|false|none|none|
|last_name|string|false|none|none|
|phone|string|false|none|none|

<h2 id="tocS_Basket">Basket</h2>
<!-- backwards compatibility -->
<a id="schemabasket"></a>
<a id="schema_Basket"></a>
<a id="tocSbasket"></a>
<a id="tocsbasket"></a>

```json
{
  "additional_fields": {},
  "basket_products": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "options": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "name": "string",
          "used_in_combination": true,
          "value": "string",
          "value_id": "string"
        }
      ],
      "parent_id": "string",
      "price": 0,
      "product_id": "string",
      "quantity": 0,
      "sku": "string",
      "tax": 0,
      "variant_id": "string",
      "weight": 0,
      "weight_unit": "string"
    }
  ],
  "basket_url": "string",
  "created_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "currency": {
    "additional_fields": {},
    "avail": true,
    "custom_fields": {},
    "default": true,
    "id": "string",
    "iso3": "string",
    "name": "string",
    "rate": 0,
    "symbol_left": "string",
    "symbol_right": "string"
  },
  "custom_fields": {},
  "customer": {
    "additional_fields": {},
    "custom_fields": {},
    "email": "string",
    "first_name": "string",
    "id": "string",
    "last_name": "string",
    "phone": "string"
  },
  "id": "string",
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|basket_products|[[Basket_Item](#schemabasket_item)]|false|none|none|
|basket_url|string|false|none|none|
|created_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|currency|[Currency](#schemacurrency)|false|none|none|
|custom_fields|object|false|none|none|
|customer|[BaseCustomer](#schemabasecustomer)|false|none|none|
|id|string|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|

<h2 id="tocS_Basket_Item">Basket_Item</h2>
<!-- backwards compatibility -->
<a id="schemabasket_item"></a>
<a id="schema_Basket_Item"></a>
<a id="tocSbasket_item"></a>
<a id="tocsbasket_item"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "options": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "used_in_combination": true,
      "value": "string",
      "value_id": "string"
    }
  ],
  "parent_id": "string",
  "price": 0,
  "product_id": "string",
  "quantity": 0,
  "sku": "string",
  "tax": 0,
  "variant_id": "string",
  "weight": 0,
  "weight_unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|options|[[Basket_Item_Option](#schemabasket_item_option)]|false|none|none|
|parent_id|string|false|none|none|
|price|number|false|none|none|
|product_id|string|false|none|none|
|quantity|number|false|none|none|
|sku|string|false|none|none|
|tax|number|false|none|none|
|variant_id|string|false|none|none|
|weight|number|false|none|none|
|weight_unit|string|false|none|none|

<h2 id="tocS_Basket_Item_Option">Basket_Item_Option</h2>
<!-- backwards compatibility -->
<a id="schemabasket_item_option"></a>
<a id="schema_Basket_Item_Option"></a>
<a id="tocSbasket_item_option"></a>
<a id="tocsbasket_item_option"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "used_in_combination": true,
  "value": "string",
  "value_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|used_in_combination|boolean|false|none|none|
|value|string|false|none|none|
|value_id|string|false|none|none|

<h2 id="tocS_Basket_LiveShippingService">Basket_LiveShippingService</h2>
<!-- backwards compatibility -->
<a id="schemabasket_liveshippingservice"></a>
<a id="schema_Basket_LiveShippingService"></a>
<a id="tocSbasket_liveshippingservice"></a>
<a id="tocsbasket_liveshippingservice"></a>

```json
{
  "additional_fields": {},
  "callback": "string",
  "callback_err_cnt": 0,
  "custom_fields": {},
  "enabled_on_store": true,
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|callback|string|false|none|none|
|callback_err_cnt|integer|false|none|none|
|custom_fields|object|false|none|none|
|enabled_on_store|boolean|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Brand">Brand</h2>
<!-- backwards compatibility -->
<a id="schemabrand"></a>
<a id="schema_Brand"></a>
<a id="tocSbrand"></a>
<a id="tocsbrand"></a>

```json
{
  "active": true,
  "additional_fields": {},
  "created_time": "string",
  "custom_fields": {},
  "full_description": "string",
  "id": "string",
  "images": [
    {
      "additional_fields": {},
      "alt": "string",
      "avail": true,
      "create_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "file_name": "string",
      "http_path": "string",
      "id": "string",
      "mime-type": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "size": 0,
      "sort_order": 0,
      "type": "string"
    }
  ],
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "modified_time": "string",
  "name": "string",
  "short_description": "string",
  "stores_ids": [
    "string"
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|additional_fields|object|false|none|none|
|created_time|string|false|none|none|
|custom_fields|object|false|none|none|
|full_description|string|false|none|none|
|id|string|false|none|none|
|images|[[Image](#schemaimage)]|false|none|none|
|meta_description|string|false|none|none|
|meta_keywords|string|false|none|none|
|meta_title|string|false|none|none|
|modified_time|string|false|none|none|
|name|string|false|none|none|
|short_description|string|false|none|none|
|stores_ids|[string]|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Carrier">Carrier</h2>
<!-- backwards compatibility -->
<a id="schemacarrier"></a>
<a id="schema_Carrier"></a>
<a id="tocScarrier"></a>
<a id="tocscarrier"></a>

```json
{
  "active": true,
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "shipping_methods": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|shipping_methods|[[Order_ShippingMethod](#schemaorder_shippingmethod)]|false|none|none|

<h2 id="tocS_Cart">Cart</h2>
<!-- backwards compatibility -->
<a id="schemacart"></a>
<a id="schema_Cart"></a>
<a id="tocScart"></a>
<a id="tocscart"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "db_prefix": "string",
  "name": "string",
  "shipping_zones": [
    {
      "additional_fields": {},
      "code": "string",
      "country": "string",
      "country_iso2_codes": [
        "string"
      ],
      "custom_fields": {},
      "id": "string",
      "name": "string"
    }
  ],
  "stores_info": [
    {
      "active": true,
      "additional_fields": {},
      "carrier_info": [
        {
          "active": true,
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "name": "string",
          "shipping_methods": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "name": "string"
            }
          ]
        }
      ],
      "channels": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "is_enabled": true,
          "name": "string",
          "platform": "string"
        }
      ],
      "country": "string",
      "currency": {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "default": true,
        "id": "string",
        "iso3": "string",
        "name": "string",
        "rate": 0,
        "symbol_left": "string",
        "symbol_right": "string"
      },
      "custom_fields": {},
      "default_warehouse_id": "string",
      "dimension_unit": "string",
      "language": "string",
      "multi_store_url": "string",
      "name": "string",
      "prices_include_tax": true,
      "root_category_id": "string",
      "store_currencies": [
        {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        }
      ],
      "store_id": "string",
      "store_languages": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "iso_code": "string",
          "name": "string"
        }
      ],
      "store_owner_info": {
        "additional_fields": {},
        "city": "string",
        "country": "string",
        "custom_fields": {},
        "email": "string",
        "owner": "string",
        "phone": "string",
        "state": "string",
        "state_code": "string",
        "street_address": "string",
        "street_address_line_2": "string",
        "zip_code": "string"
      },
      "timezone": "string",
      "weight_unit": "string"
    }
  ],
  "url": "string",
  "version": "string",
  "warehouses": [
    {
      "additional_fields": {},
      "address": {
        "additional_fields": {},
        "address1": "string",
        "address2": "string",
        "city": "string",
        "company": "string",
        "country": {
          "additional_fields": {},
          "code2": "string",
          "code3": "string",
          "custom_fields": {},
          "name": "string"
        },
        "custom_fields": {},
        "default": true,
        "fax": "string",
        "first_name": "string",
        "gender": "string",
        "id": "string",
        "last_name": "string",
        "phone": "string",
        "postcode": "string",
        "region": "string",
        "state": {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "name": "string"
        },
        "type": "string",
        "website": "string"
      },
      "avail": true,
      "carriers_ids": [
        "string"
      ],
      "custom_fields": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "stores_ids": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|db_prefix|string|false|none|none|
|name|string|false|none|none|
|shipping_zones|[[Cart_ShippingZone](#schemacart_shippingzone)]|false|none|none|
|stores_info|[[Cart_StoreInfo](#schemacart_storeinfo)]|false|none|none|
|url|string|false|none|none|
|version|string|false|none|none|
|warehouses|[[Cart_Warehouse](#schemacart_warehouse)]|false|none|none|

<h2 id="tocS_CartConfigUpdate">CartConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacartconfigupdate"></a>
<a id="schema_CartConfigUpdate"></a>
<a id="tocScartconfigupdate"></a>
<a id="tocscartconfigupdate"></a>

```json
{
  "custom_fields": {},
  "db_tables_prefix": "string",
  "store_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|object|false|none|This parameter sets the list of params to the shopping cart.|
|db_tables_prefix|string|false|none|This parameter is deprecated for this method. Please, use this parameter in method account.config.update|
|store_id|string|false|none|Store Id|

<h2 id="tocS_CartCouponAdd">CartCouponAdd</h2>
<!-- backwards compatibility -->
<a id="schemacartcouponadd"></a>
<a id="schema_CartCouponAdd"></a>
<a id="tocScartcouponadd"></a>
<a id="tocscartcouponadd"></a>

```json
{
  "action_amount": 0,
  "action_apply_to": "order_total",
  "action_condition_entity": "string",
  "action_condition_key": "string",
  "action_condition_operator": "string",
  "action_condition_value": "string",
  "action_scope": "order",
  "action_type": "percent",
  "code": "string",
  "codes": [
    "string"
  ],
  "date_end": "string",
  "date_start": "now",
  "name": "string",
  "store_id": "string",
  "usage_limit": 0,
  "usage_limit_per_customer": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_amount|number|true|none|Defines the discount amount value.|
|action_apply_to|string|true|none|Defines where discount should be applied|
|action_condition_entity|string|false|none|Defines entity for action condition.|
|action_condition_key|string|false|none|Defines entity attribute code for action condition.|
|action_condition_operator|string|false|none|Defines condition operator.|
|action_condition_value|string|false|none|Defines condition attribute value/s. Can be comma separated string.|
|action_scope|string|true|none|Specify how discount should be applied. If scope=matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once.|
|action_type|string|true|none|Coupon discount type|
|code|string|true|none|Coupon code|
|codes|[string]|false|none|Entity codes|
|date_end|string|false|none|Defines when discount code will be expired.|
|date_start|string|false|none|Defines when discount code will be available.|
|name|string|false|none|Coupon name|
|store_id|string|false|none|Store Id|
|usage_limit|integer|false|none|Usage limit for coupon.|
|usage_limit_per_customer|integer|false|none|Usage limit per customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_apply_to|order_total|
|action_apply_to|item_price|
|action_apply_to|shipping|
|action_scope|order|
|action_scope|matching_items|
|action_type|percent|
|action_type|fixed|

<h2 id="tocS_Cart_Channel">Cart_Channel</h2>
<!-- backwards compatibility -->
<a id="schemacart_channel"></a>
<a id="schema_Cart_Channel"></a>
<a id="tocScart_channel"></a>
<a id="tocscart_channel"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "is_enabled": true,
  "name": "string",
  "platform": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|is_enabled|boolean|false|none|none|
|name|string|false|none|none|
|platform|string|false|none|none|

<h2 id="tocS_Cart_MetaData">Cart_MetaData</h2>
<!-- backwards compatibility -->
<a id="schemacart_metadata"></a>
<a id="schema_Cart_MetaData"></a>
<a id="tocScart_metadata"></a>
<a id="tocscart_metadata"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "key": "string",
  "namespace": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|key|string|false|none|none|
|namespace|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Cart_ShippingZone">Cart_ShippingZone</h2>
<!-- backwards compatibility -->
<a id="schemacart_shippingzone"></a>
<a id="schema_Cart_ShippingZone"></a>
<a id="tocScart_shippingzone"></a>
<a id="tocscart_shippingzone"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "country": "string",
  "country_iso2_codes": [
    "string"
  ],
  "custom_fields": {},
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|country|string|false|none|none|
|country_iso2_codes|[string]|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Cart_StoreInfo">Cart_StoreInfo</h2>
<!-- backwards compatibility -->
<a id="schemacart_storeinfo"></a>
<a id="schema_Cart_StoreInfo"></a>
<a id="tocScart_storeinfo"></a>
<a id="tocscart_storeinfo"></a>

```json
{
  "active": true,
  "additional_fields": {},
  "carrier_info": [
    {
      "active": true,
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "shipping_methods": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        }
      ]
    }
  ],
  "channels": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "is_enabled": true,
      "name": "string",
      "platform": "string"
    }
  ],
  "country": "string",
  "currency": {
    "additional_fields": {},
    "avail": true,
    "custom_fields": {},
    "default": true,
    "id": "string",
    "iso3": "string",
    "name": "string",
    "rate": 0,
    "symbol_left": "string",
    "symbol_right": "string"
  },
  "custom_fields": {},
  "default_warehouse_id": "string",
  "dimension_unit": "string",
  "language": "string",
  "multi_store_url": "string",
  "name": "string",
  "prices_include_tax": true,
  "root_category_id": "string",
  "store_currencies": [
    {
      "additional_fields": {},
      "avail": true,
      "custom_fields": {},
      "default": true,
      "id": "string",
      "iso3": "string",
      "name": "string",
      "rate": 0,
      "symbol_left": "string",
      "symbol_right": "string"
    }
  ],
  "store_id": "string",
  "store_languages": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "iso_code": "string",
      "name": "string"
    }
  ],
  "store_owner_info": {
    "additional_fields": {},
    "city": "string",
    "country": "string",
    "custom_fields": {},
    "email": "string",
    "owner": "string",
    "phone": "string",
    "state": "string",
    "state_code": "string",
    "street_address": "string",
    "street_address_line_2": "string",
    "zip_code": "string"
  },
  "timezone": "string",
  "weight_unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|additional_fields|object|false|none|none|
|carrier_info|[[Carrier](#schemacarrier)]|false|none|none|
|channels|[[Cart_Channel](#schemacart_channel)]|false|none|none|
|country|string|false|none|none|
|currency|[Currency](#schemacurrency)|false|none|none|
|custom_fields|object|false|none|none|
|default_warehouse_id|string|false|none|none|
|dimension_unit|string|false|none|none|
|language|string|false|none|none|
|multi_store_url|string|false|none|none|
|name|string|false|none|none|
|prices_include_tax|boolean|false|none|none|
|root_category_id|string|false|none|none|
|store_currencies|[[Currency](#schemacurrency)]|false|none|none|
|store_id|string|false|none|none|
|store_languages|[[Language](#schemalanguage)]|false|none|none|
|store_owner_info|[Info](#schemainfo)|false|none|none|
|timezone|string|false|none|none|
|weight_unit|string|false|none|none|

<h2 id="tocS_Cart_Warehouse">Cart_Warehouse</h2>
<!-- backwards compatibility -->
<a id="schemacart_warehouse"></a>
<a id="schema_Cart_Warehouse"></a>
<a id="tocScart_warehouse"></a>
<a id="tocscart_warehouse"></a>

```json
{
  "additional_fields": {},
  "address": {
    "additional_fields": {},
    "address1": "string",
    "address2": "string",
    "city": "string",
    "company": "string",
    "country": {
      "additional_fields": {},
      "code2": "string",
      "code3": "string",
      "custom_fields": {},
      "name": "string"
    },
    "custom_fields": {},
    "default": true,
    "fax": "string",
    "first_name": "string",
    "gender": "string",
    "id": "string",
    "last_name": "string",
    "phone": "string",
    "postcode": "string",
    "region": "string",
    "state": {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "name": "string"
    },
    "type": "string",
    "website": "string"
  },
  "avail": true,
  "carriers_ids": [
    "string"
  ],
  "custom_fields": {},
  "description": "string",
  "id": "string",
  "name": "string",
  "stores_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|address|[Customer_Address](#schemacustomer_address)|false|none|none|
|avail|boolean|false|none|none|
|carriers_ids|[string]|false|none|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|stores_ids|[string]|false|none|none|

<h2 id="tocS_CatalogPriceRule">CatalogPriceRule</h2>
<!-- backwards compatibility -->
<a id="schemacatalogpricerule"></a>
<a id="schema_CatalogPriceRule"></a>
<a id="tocScatalogpricerule"></a>
<a id="tocscatalogpricerule"></a>

```json
{
  "actions": [
    {
      "additional_fields": {},
      "apply_to": "string",
      "conditions": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "entity": "string",
          "id": "string",
          "key": "string",
          "logic_operator": "string",
          "match_items": "string",
          "operator": "string",
          "sub-conditions": [
            {}
          ],
          "value": "string"
        }
      ],
      "currency_code": "string",
      "custom_fields": {},
      "include_tax": true,
      "quantity": 0,
      "scope": "string",
      "type": "string",
      "value": 0
    }
  ],
  "additional_fields": {},
  "avail": true,
  "conditions": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "entity": "string",
      "id": "string",
      "key": "string",
      "logic_operator": "string",
      "match_items": "string",
      "operator": "string",
      "sub-conditions": [
        {}
      ],
      "value": "string"
    }
  ],
  "created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "date_end": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "date_start": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "description": "string",
  "gid": "string",
  "id": "string",
  "name": "string",
  "short_description": "string",
  "type": "string",
  "usage_count": 0,
  "uses_per_order_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[CatalogPriceRule_Action](#schemacatalogpricerule_action)]|false|none|none|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|conditions|[[Coupon_Condition](#schemacoupon_condition)]|false|none|none|
|created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|date_end|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|date_start|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|description|string|false|none|none|
|gid|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|short_description|string|false|none|none|
|type|string|false|none|none|
|usage_count|number|false|none|none|
|uses_per_order_limit|integer|false|none|none|

<h2 id="tocS_CatalogPriceRule_Action">CatalogPriceRule_Action</h2>
<!-- backwards compatibility -->
<a id="schemacatalogpricerule_action"></a>
<a id="schema_CatalogPriceRule_Action"></a>
<a id="tocScatalogpricerule_action"></a>
<a id="tocscatalogpricerule_action"></a>

```json
{
  "additional_fields": {},
  "apply_to": "string",
  "conditions": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "entity": "string",
      "id": "string",
      "key": "string",
      "logic_operator": "string",
      "match_items": "string",
      "operator": "string",
      "sub-conditions": [
        {}
      ],
      "value": "string"
    }
  ],
  "currency_code": "string",
  "custom_fields": {},
  "include_tax": true,
  "quantity": 0,
  "scope": "string",
  "type": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|apply_to|string|false|none|none|
|conditions|[[Coupon_Condition](#schemacoupon_condition)]|false|none|none|
|currency_code|string|false|none|none|
|custom_fields|object|false|none|none|
|include_tax|boolean|false|none|none|
|quantity|number|false|none|none|
|scope|string|false|none|none|
|type|string|false|none|none|
|value|number|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "additional_fields": {},
  "avail": true,
  "created_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "description": "string",
  "id": "string",
  "images": [
    {
      "additional_fields": {},
      "alt": "string",
      "avail": true,
      "create_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "file_name": "string",
      "http_path": "string",
      "id": "string",
      "mime-type": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "size": 0,
      "sort_order": 0,
      "type": "string"
    }
  ],
  "keywords": "string",
  "meta_description": "string",
  "meta_title": "string",
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "name": "string",
  "parent_id": "string",
  "path": "string",
  "seo_url": "string",
  "short_description": "string",
  "sort_order": 0,
  "stores_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|created_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|images|[[Image](#schemaimage)]|false|none|none|
|keywords|string|false|none|none|
|meta_description|string|false|none|none|
|meta_title|string|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|name|string|false|none|none|
|parent_id|string|false|none|none|
|path|string|false|none|none|
|seo_url|string|false|none|none|
|short_description|string|false|none|none|
|sort_order|integer|false|none|none|
|stores_ids|[string]|false|none|none|

<h2 id="tocS_Child">Child</h2>
<!-- backwards compatibility -->
<a id="schemachild"></a>
<a id="schema_Child"></a>
<a id="tocSchild"></a>
<a id="tocschild"></a>

```json
{
  "additional_fields": {},
  "advanced_price": [
    {
      "additional_fields": {},
      "avail": true,
      "custom_fields": {},
      "expire_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "group_id": "string",
      "id": "string",
      "quantity_from": 0,
      "start_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "value": 0
    }
  ],
  "allow_backorders": true,
  "avail_for_sale": true,
  "combination": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "option_id": "string",
      "option_value_id": "string"
    }
  ],
  "cost_price": 0,
  "created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "default_price": 0,
  "default_qty_in_pack": 0,
  "dimensions_unit": "string",
  "ean": "string",
  "full_description": "string",
  "gtin": "string",
  "height": 0,
  "id": "string",
  "images": [
    {
      "additional_fields": {},
      "alt": "string",
      "avail": true,
      "create_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "file_name": "string",
      "http_path": "string",
      "id": "string",
      "mime-type": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "size": 0,
      "sort_order": 0,
      "type": "string"
    }
  ],
  "in_stock": true,
  "inventory": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "in_stock": true,
      "priority": 0,
      "quantity": 0,
      "warehouse_id": "string"
    }
  ],
  "inventory_level": 0,
  "is_qty_in_pack_fixed": true,
  "isbn": "string",
  "length": 0,
  "list_price": 0,
  "manage_stock": true,
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "min_quantity": 0,
  "modified_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "mpn": "string",
  "name": "string",
  "parent_id": "string",
  "short_description": "string",
  "sku": "string",
  "sort_order": 0,
  "tax_class_id": "string",
  "upc": "string",
  "weight": 0,
  "weight_unit": "string",
  "wholesale_price": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|advanced_price|[[Product_AdvancedPrice](#schemaproduct_advancedprice)]|false|none|none|
|allow_backorders|boolean|false|none|none|
|avail_for_sale|boolean|false|none|none|
|combination|[[Product_ChildItem_Combination](#schemaproduct_childitem_combination)]|false|none|none|
|cost_price|number|false|none|none|
|created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|default_price|number|false|none|none|
|default_qty_in_pack|number|false|none|none|
|dimensions_unit|string|false|none|none|
|ean|string|false|none|none|
|full_description|string|false|none|none|
|gtin|string|false|none|none|
|height|number|false|none|none|
|id|string|false|none|none|
|images|[[Image](#schemaimage)]|false|none|none|
|in_stock|boolean|false|none|none|
|inventory|[[Product_Inventory](#schemaproduct_inventory)]|false|none|none|
|inventory_level|number|false|none|none|
|is_qty_in_pack_fixed|boolean|false|none|none|
|isbn|string|false|none|none|
|length|number|false|none|none|
|list_price|number|false|none|none|
|manage_stock|boolean|false|none|none|
|meta_description|string|false|none|none|
|meta_keywords|string|false|none|none|
|meta_title|string|false|none|none|
|min_quantity|number|false|none|none|
|modified_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|mpn|string|false|none|none|
|name|string|false|none|none|
|parent_id|string|false|none|none|
|short_description|string|false|none|none|
|sku|string|false|none|none|
|sort_order|integer|false|none|none|
|tax_class_id|string|false|none|none|
|upc|string|false|none|none|
|weight|number|false|none|none|
|weight_unit|string|false|none|none|
|wholesale_price|number|false|none|none|
|width|number|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "additional_fields": {},
  "code2": "string",
  "code3": "string",
  "custom_fields": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code2|string|false|none|none|
|code3|string|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Coupon">Coupon</h2>
<!-- backwards compatibility -->
<a id="schemacoupon"></a>
<a id="schema_Coupon"></a>
<a id="tocScoupon"></a>
<a id="tocscoupon"></a>

```json
{
  "actions": [
    {
      "additional_fields": {},
      "amount": 0,
      "apply_to": "string",
      "conditions": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "entity": "string",
          "id": "string",
          "key": "string",
          "logic_operator": "string",
          "match_items": "string",
          "operator": "string",
          "sub-conditions": [
            {}
          ],
          "value": "string"
        }
      ],
      "currency_code": "string",
      "custom_fields": {},
      "discount_quantity_step": 0,
      "discounted_quantity": 0,
      "include_tax": true,
      "logic_operator": "string",
      "scope": "string",
      "type": "string"
    }
  ],
  "additional_fields": {},
  "avail": true,
  "code": "string",
  "codes": [
    {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "id": "string",
      "used_times": 0
    }
  ],
  "conditions": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "entity": "string",
      "id": "string",
      "key": "string",
      "logic_operator": "string",
      "match_items": "string",
      "operator": "string",
      "sub-conditions": [
        {}
      ],
      "value": "string"
    }
  ],
  "custom_fields": {},
  "date_end": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "date_start": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "description": "string",
  "id": "string",
  "logic_operator": "string",
  "name": "string",
  "priority": 0,
  "usage_history": [
    {
      "additional_fields": {},
      "amount": 0,
      "custom_fields": {},
      "order_id": "string"
    }
  ],
  "usage_limit": 0,
  "usage_limit_per_customer": 0,
  "used_times": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Coupon_Action](#schemacoupon_action)]|false|none|none|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|code|string|false|none|none|
|codes|[[Coupon_Code](#schemacoupon_code)]|false|none|none|
|conditions|[[Coupon_Condition](#schemacoupon_condition)]|false|none|none|
|custom_fields|object|false|none|none|
|date_end|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|date_start|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|logic_operator|string|false|none|none|
|name|string|false|none|none|
|priority|integer|false|none|none|
|usage_history|[[Coupon_History](#schemacoupon_history)]|false|none|none|
|usage_limit|integer|false|none|none|
|usage_limit_per_customer|integer|false|none|none|
|used_times|integer|false|none|none|

<h2 id="tocS_Coupon_Action">Coupon_Action</h2>
<!-- backwards compatibility -->
<a id="schemacoupon_action"></a>
<a id="schema_Coupon_Action"></a>
<a id="tocScoupon_action"></a>
<a id="tocscoupon_action"></a>

```json
{
  "additional_fields": {},
  "amount": 0,
  "apply_to": "string",
  "conditions": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "entity": "string",
      "id": "string",
      "key": "string",
      "logic_operator": "string",
      "match_items": "string",
      "operator": "string",
      "sub-conditions": [
        {}
      ],
      "value": "string"
    }
  ],
  "currency_code": "string",
  "custom_fields": {},
  "discount_quantity_step": 0,
  "discounted_quantity": 0,
  "include_tax": true,
  "logic_operator": "string",
  "scope": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|amount|number|false|none|none|
|apply_to|string|false|none|none|
|conditions|[[Coupon_Condition](#schemacoupon_condition)]|false|none|none|
|currency_code|string|false|none|none|
|custom_fields|object|false|none|none|
|discount_quantity_step|integer|false|none|none|
|discounted_quantity|number|false|none|none|
|include_tax|boolean|false|none|none|
|logic_operator|string|false|none|none|
|scope|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Coupon_Code">Coupon_Code</h2>
<!-- backwards compatibility -->
<a id="schemacoupon_code"></a>
<a id="schema_Coupon_Code"></a>
<a id="tocScoupon_code"></a>
<a id="tocscoupon_code"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "custom_fields": {},
  "id": "string",
  "used_times": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|used_times|integer|false|none|none|

<h2 id="tocS_Coupon_Condition">Coupon_Condition</h2>
<!-- backwards compatibility -->
<a id="schemacoupon_condition"></a>
<a id="schema_Coupon_Condition"></a>
<a id="tocScoupon_condition"></a>
<a id="tocscoupon_condition"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "entity": "string",
  "id": "string",
  "key": "string",
  "logic_operator": "string",
  "match_items": "string",
  "operator": "string",
  "sub-conditions": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "entity": "string",
      "id": "string",
      "key": "string",
      "logic_operator": "string",
      "match_items": "string",
      "operator": "string",
      "sub-conditions": [
        {}
      ],
      "value": "string"
    }
  ],
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|entity|string|false|none|none|
|id|string|false|none|none|
|key|string|false|none|none|
|logic_operator|string|false|none|none|
|match_items|string|false|none|none|
|operator|string|false|none|none|
|sub-conditions|[[Coupon_Condition](#schemacoupon_condition)]|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Coupon_History">Coupon_History</h2>
<!-- backwards compatibility -->
<a id="schemacoupon_history"></a>
<a id="schema_Coupon_History"></a>
<a id="tocScoupon_history"></a>
<a id="tocscoupon_history"></a>

```json
{
  "additional_fields": {},
  "amount": 0,
  "custom_fields": {},
  "order_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|amount|number|false|none|none|
|custom_fields|object|false|none|none|
|order_id|string|false|none|none|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "additional_fields": {},
  "avail": true,
  "custom_fields": {},
  "default": true,
  "id": "string",
  "iso3": "string",
  "name": "string",
  "rate": 0,
  "symbol_left": "string",
  "symbol_right": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|custom_fields|object|false|none|none|
|default|boolean|false|none|none|
|id|string|false|none|none|
|iso3|string|false|none|none|
|name|string|false|none|none|
|rate|number|false|none|none|
|symbol_left|string|false|none|none|
|symbol_right|string|false|none|none|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "additional_fields": {},
  "address_book": [
    {
      "additional_fields": {},
      "address1": "string",
      "address2": "string",
      "city": "string",
      "company": "string",
      "country": {
        "additional_fields": {},
        "code2": "string",
        "code3": "string",
        "custom_fields": {},
        "name": "string"
      },
      "custom_fields": {},
      "default": true,
      "fax": "string",
      "first_name": "string",
      "gender": "string",
      "id": "string",
      "last_name": "string",
      "phone": "string",
      "postcode": "string",
      "region": "string",
      "state": {
        "additional_fields": {},
        "code": "string",
        "custom_fields": {},
        "name": "string"
      },
      "type": "string",
      "website": "string"
    }
  ],
  "birth_day": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "company": "string",
  "created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "email": "string",
  "fax": "string",
  "first_name": "string",
  "gender": "string",
  "group": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string"
    }
  ],
  "id": "string",
  "ip_address": "string",
  "last_login": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "last_name": "string",
  "last_order_id": "string",
  "login": "string",
  "modified_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "news_letter_subscription": true,
  "orders_count": 0,
  "phone": "string",
  "status": "string",
  "stores_ids": [
    "string"
  ],
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|address_book|[[Customer_Address](#schemacustomer_address)]|false|none|none|
|birth_day|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|company|string|false|none|none|
|created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|first_name|string|false|none|none|
|gender|string|false|none|none|
|group|[[Customer_Group](#schemacustomer_group)]|false|none|none|
|id|string|false|none|none|
|ip_address|string|false|none|none|
|last_login|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|last_name|string|false|none|none|
|last_order_id|string|false|none|none|
|login|string|false|none|none|
|modified_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|news_letter_subscription|boolean|false|none|none|
|orders_count|integer|false|none|none|
|phone|string|false|none|none|
|status|string|false|none|none|
|stores_ids|[string]|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_CustomerAdd">CustomerAdd</h2>
<!-- backwards compatibility -->
<a id="schemacustomeradd"></a>
<a id="schema_CustomerAdd"></a>
<a id="tocScustomeradd"></a>
<a id="tocscustomeradd"></a>

```json
{
  "address": [
    {
      "address_book_address1": "string",
      "address_book_address2": "string",
      "address_book_city": "string",
      "address_book_company": "string",
      "address_book_country": "string",
      "address_book_default": true,
      "address_book_fax": "string",
      "address_book_first_name": "string",
      "address_book_gender": "string",
      "address_book_last_name": "string",
      "address_book_phone": "string",
      "address_book_postcode": "string",
      "address_book_region": "string",
      "address_book_state": "string",
      "address_book_type": "string",
      "address_book_website": "string"
    }
  ],
  "birth_day": "string",
  "company": "string",
  "created_time": "string",
  "email": "string",
  "fax": "string",
  "first_name": "string",
  "gender": "string",
  "group": "string",
  "last_login": "string",
  "last_name": "string",
  "login": "string",
  "modified_time": "string",
  "news_letter_subscription": false,
  "password": "string",
  "phone": "string",
  "status": "enabled",
  "store_id": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[object]|false|none|none|
|birth_day|string|false|none|Defines customer's birthday|
|company|string|false|none|Defines customer's company|
|created_time|string|false|none|Entity's date creation|
|email|string|true|none|Defines customer's email|
|fax|string|false|none|Defines customer's fax|
|first_name|string|true|none|Defines customer's first name|
|gender|string|false|none|Defines customer's gender|
|group|string|false|none|Defines the group where the customer|
|last_login|string|false|none|Defines customer's last login time|
|last_name|string|true|none|Defines customer's last name|
|login|string|false|none|Specifies customer's login name|
|modified_time|string|false|none|Entity's date modification|
|news_letter_subscription|boolean|false|none|Defines whether the newsletter subscription is available for the user|
|password|string|false|none|Defines customer's unique password|
|phone|string|false|none|Defines customer's phone number|
|status|string|false|none|Defines customer's status|
|store_id|string|false|none|Store Id|
|website|string|false|none|Link to customer website|

<h2 id="tocS_Customer_Address">Customer_Address</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_address"></a>
<a id="schema_Customer_Address"></a>
<a id="tocScustomer_address"></a>
<a id="tocscustomer_address"></a>

```json
{
  "additional_fields": {},
  "address1": "string",
  "address2": "string",
  "city": "string",
  "company": "string",
  "country": {
    "additional_fields": {},
    "code2": "string",
    "code3": "string",
    "custom_fields": {},
    "name": "string"
  },
  "custom_fields": {},
  "default": true,
  "fax": "string",
  "first_name": "string",
  "gender": "string",
  "id": "string",
  "last_name": "string",
  "phone": "string",
  "postcode": "string",
  "region": "string",
  "state": {
    "additional_fields": {},
    "code": "string",
    "custom_fields": {},
    "name": "string"
  },
  "type": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|address1|string|false|none|none|
|address2|string|false|none|none|
|city|string|false|none|none|
|company|string|false|none|none|
|country|[Country](#schemacountry)|false|none|none|
|custom_fields|object|false|none|none|
|default|boolean|false|none|none|
|fax|string|false|none|none|
|first_name|string|false|none|none|
|gender|string|false|none|none|
|id|string|false|none|none|
|last_name|string|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|region|string|false|none|none|
|state|[State](#schemastate)|false|none|none|
|type|string|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_Customer_Attribute">Customer_Attribute</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_attribute"></a>
<a id="schema_Customer_Attribute"></a>
<a id="tocScustomer_attribute"></a>
<a id="tocscustomer_attribute"></a>

```json
{
  "additional_fields": {},
  "attribute_id": "string",
  "code": "string",
  "custom_fields": {},
  "name": "string",
  "type": "string",
  "values": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|attribute_id|string|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|values|[[Customer_Attribute_Value](#schemacustomer_attribute_value)]|false|none|none|

<h2 id="tocS_Customer_Attribute_Value">Customer_Attribute_Value</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_attribute_value"></a>
<a id="schema_Customer_Attribute_Value"></a>
<a id="tocScustomer_attribute_value"></a>
<a id="tocscustomer_attribute_value"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Customer_Group">Customer_Group</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_group"></a>
<a id="schema_Customer_Group"></a>
<a id="tocScustomer_group"></a>
<a id="tocscustomer_group"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_GiftCard">GiftCard</h2>
<!-- backwards compatibility -->
<a id="schemagiftcard"></a>
<a id="schema_GiftCard"></a>
<a id="tocSgiftcard"></a>
<a id="tocsgiftcard"></a>

```json
{
  "additional_fields": {},
  "amount": 0,
  "avail_to": "string",
  "code": "string",
  "created_at": "string",
  "currency_code": "string",
  "custom_fields": {},
  "free_product_ids": "string",
  "id": "string",
  "initial_amount": 0,
  "issuer_email": "string",
  "issuer_name": "string",
  "message": "string",
  "name": "string",
  "recipient_email": "string",
  "recipient_name": "string",
  "status": "string",
  "type": "string",
  "usage_history": [
    {
      "additional_fields": {},
      "amount": 0,
      "custom_fields": {},
      "order_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|amount|number|false|none|none|
|avail_to|string|false|none|none|
|code|string|false|none|none|
|created_at|string|false|none|none|
|currency_code|string|false|none|none|
|custom_fields|object|false|none|none|
|free_product_ids|string|false|none|none|
|id|string|false|none|none|
|initial_amount|number|false|none|none|
|issuer_email|string|false|none|none|
|issuer_name|string|false|none|none|
|message|string|false|none|none|
|name|string|false|none|none|
|recipient_email|string|false|none|none|
|recipient_name|string|false|none|none|
|status|string|false|none|none|
|type|string|false|none|none|
|usage_history|[[Coupon_History](#schemacoupon_history)]|false|none|none|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "additional_fields": {},
  "alt": "string",
  "avail": true,
  "create_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "file_name": "string",
  "http_path": "string",
  "id": "string",
  "mime-type": "string",
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "size": 0,
  "sort_order": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|alt|string|false|none|none|
|avail|boolean|false|none|none|
|create_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|file_name|string|false|none|none|
|http_path|string|false|none|none|
|id|string|false|none|none|
|mime-type|string|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|size|integer|false|none|none|
|sort_order|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Info">Info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_Info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "additional_fields": {},
  "city": "string",
  "country": "string",
  "custom_fields": {},
  "email": "string",
  "owner": "string",
  "phone": "string",
  "state": "string",
  "state_code": "string",
  "street_address": "string",
  "street_address_line_2": "string",
  "zip_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|custom_fields|object|false|none|none|
|email|string|false|none|none|
|owner|string|false|none|none|
|phone|string|false|none|none|
|state|string|false|none|none|
|state_code|string|false|none|none|
|street_address|string|false|none|none|
|street_address_line_2|string|false|none|none|
|zip_code|string|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "iso_code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|iso_code|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Model_Response_Attribute_List">Model_Response_Attribute_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_attribute_list"></a>
<a id="schema_Model_Response_Attribute_List"></a>
<a id="tocSmodel_response_attribute_list"></a>
<a id="tocsmodel_response_attribute_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "attribute": [
      {
        "additional_fields": {},
        "code": "string",
        "custom_fields": {},
        "default_values": [
          "string"
        ],
        "id": "string",
        "lang_id": "string",
        "name": "string",
        "position": 0,
        "required": true,
        "store_id": "string",
        "system": true,
        "type": "string",
        "values": [
          "string"
        ],
        "visible": true
      }
    ],
    "attributes_count": 0,
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Attribute_List_Result](#schemaresponse_attribute_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Cart_Catalog_PriceRules_List">Model_Response_Cart_Catalog_PriceRules_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_cart_catalog_pricerules_list"></a>
<a id="schema_Model_Response_Cart_Catalog_PriceRules_List"></a>
<a id="tocSmodel_response_cart_catalog_pricerules_list"></a>
<a id="tocsmodel_response_cart_catalog_pricerules_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "catalog_price_rules": [
      {
        "actions": [
          {
            "additional_fields": {},
            "apply_to": "string",
            "conditions": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "entity": "string",
                "id": "string",
                "key": "string",
                "logic_operator": "string",
                "match_items": "string",
                "operator": "string",
                "sub-conditions": [
                  {}
                ],
                "value": "string"
              }
            ],
            "currency_code": "string",
            "custom_fields": {},
            "include_tax": true,
            "quantity": 0,
            "scope": "string",
            "type": "string",
            "value": 0
          }
        ],
        "additional_fields": {},
        "avail": true,
        "conditions": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "entity": "string",
            "id": "string",
            "key": "string",
            "logic_operator": "string",
            "match_items": "string",
            "operator": "string",
            "sub-conditions": [
              {}
            ],
            "value": "string"
          }
        ],
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "date_end": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "date_start": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "description": "string",
        "gid": "string",
        "id": "string",
        "name": "string",
        "short_description": "string",
        "type": "string",
        "usage_count": 0,
        "uses_per_order_limit": 0
      }
    ],
    "catalog_price_rules_count": 0,
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Cart_CatalogPriceRules_List_Result](#schemaresponse_cart_catalogpricerules_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Cart_Coupon_List">Model_Response_Cart_Coupon_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_cart_coupon_list"></a>
<a id="schema_Model_Response_Cart_Coupon_List"></a>
<a id="tocSmodel_response_cart_coupon_list"></a>
<a id="tocsmodel_response_cart_coupon_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "coupon": [
      {
        "actions": [
          {
            "additional_fields": {},
            "amount": 0,
            "apply_to": "string",
            "conditions": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "entity": "string",
                "id": "string",
                "key": "string",
                "logic_operator": "string",
                "match_items": "string",
                "operator": "string",
                "sub-conditions": [
                  {}
                ],
                "value": "string"
              }
            ],
            "currency_code": "string",
            "custom_fields": {},
            "discount_quantity_step": 0,
            "discounted_quantity": 0,
            "include_tax": true,
            "logic_operator": "string",
            "scope": "string",
            "type": "string"
          }
        ],
        "additional_fields": {},
        "avail": true,
        "code": "string",
        "codes": [
          {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "id": "string",
            "used_times": 0
          }
        ],
        "conditions": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "entity": "string",
            "id": "string",
            "key": "string",
            "logic_operator": "string",
            "match_items": "string",
            "operator": "string",
            "sub-conditions": [
              {}
            ],
            "value": "string"
          }
        ],
        "custom_fields": {},
        "date_end": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "date_start": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "description": "string",
        "id": "string",
        "logic_operator": "string",
        "name": "string",
        "priority": 0,
        "usage_history": [
          {
            "additional_fields": {},
            "amount": 0,
            "custom_fields": {},
            "order_id": "string"
          }
        ],
        "usage_limit": 0,
        "usage_limit_per_customer": 0,
        "used_times": 0
      }
    ],
    "coupon_count": 0,
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Cart_Coupon_List_Result](#schemaresponse_cart_coupon_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Cart_GiftCard_List">Model_Response_Cart_GiftCard_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_cart_giftcard_list"></a>
<a id="schema_Model_Response_Cart_GiftCard_List"></a>
<a id="tocSmodel_response_cart_giftcard_list"></a>
<a id="tocsmodel_response_cart_giftcard_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "gift_card": [
      {
        "additional_fields": {},
        "amount": 0,
        "avail_to": "string",
        "code": "string",
        "created_at": "string",
        "currency_code": "string",
        "custom_fields": {},
        "free_product_ids": "string",
        "id": "string",
        "initial_amount": 0,
        "issuer_email": "string",
        "issuer_name": "string",
        "message": "string",
        "name": "string",
        "recipient_email": "string",
        "recipient_name": "string",
        "status": "string",
        "type": "string",
        "usage_history": [
          {
            "additional_fields": {},
            "amount": 0,
            "custom_fields": {},
            "order_id": "string"
          }
        ]
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Cart_Giftcard_List_Result](#schemaresponse_cart_giftcard_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Cart_MetaData_List">Model_Response_Cart_MetaData_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_cart_metadata_list"></a>
<a id="schema_Model_Response_Cart_MetaData_List"></a>
<a id="tocSmodel_response_cart_metadata_list"></a>
<a id="tocsmodel_response_cart_metadata_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "items": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "id": "string",
        "key": "string",
        "namespace": "string",
        "value": "string"
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Cart_MetaData_List_Result](#schemaresponse_cart_metadata_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Cart_Script_List">Model_Response_Cart_Script_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_cart_script_list"></a>
<a id="schema_Model_Response_Cart_Script_List"></a>
<a id="tocSmodel_response_cart_script_list"></a>
<a id="tocsmodel_response_cart_script_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "scripts": [
      {
        "additional_fields": {},
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "event": "string",
        "html": "string",
        "id": "string",
        "load_method": "string",
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "scope": "string",
        "src": "string"
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Cart_Script_List_Result](#schemaresponse_cart_script_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Category_List">Model_Response_Category_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_category_list"></a>
<a id="schema_Model_Response_Category_List"></a>
<a id="tocSmodel_response_category_list"></a>
<a id="tocsmodel_response_category_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "categories_count": 0,
    "category": [
      {
        "additional_fields": {},
        "avail": true,
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "keywords": "string",
        "meta_description": "string",
        "meta_title": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "parent_id": "string",
        "path": "string",
        "seo_url": "string",
        "short_description": "string",
        "sort_order": 0,
        "stores_ids": [
          "string"
        ]
      }
    ],
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Category_List_Result](#schemaresponse_category_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Customer_Attribute_List">Model_Response_Customer_Attribute_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_customer_attribute_list"></a>
<a id="schema_Model_Response_Customer_Attribute_List"></a>
<a id="tocSmodel_response_customer_attribute_list"></a>
<a id="tocsmodel_response_customer_attribute_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "items": [
      {
        "additional_fields": {},
        "attribute_id": "string",
        "code": "string",
        "custom_fields": {},
        "name": "string",
        "type": "string",
        "values": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "value": "string"
          }
        ]
      }
    ],
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Customer_Attribute_List_Result](#schemaresponse_customer_attribute_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Customer_Group_List">Model_Response_Customer_Group_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_customer_group_list"></a>
<a id="schema_Model_Response_Customer_Group_List"></a>
<a id="tocSmodel_response_customer_group_list"></a>
<a id="tocsmodel_response_customer_group_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "group": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "id": "string",
        "name": "string"
      }
    ],
    "group_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Customer_Group_List_Result](#schemaresponse_customer_group_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Customer_List">Model_Response_Customer_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_customer_list"></a>
<a id="schema_Model_Response_Customer_List"></a>
<a id="tocSmodel_response_customer_list"></a>
<a id="tocsmodel_response_customer_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "customer": [
      {
        "additional_fields": {},
        "address_book": [
          {
            "additional_fields": {},
            "address1": "string",
            "address2": "string",
            "city": "string",
            "company": "string",
            "country": {
              "additional_fields": {},
              "code2": "string",
              "code3": "string",
              "custom_fields": {},
              "name": "string"
            },
            "custom_fields": {},
            "default": true,
            "fax": "string",
            "first_name": "string",
            "gender": "string",
            "id": "string",
            "last_name": "string",
            "phone": "string",
            "postcode": "string",
            "region": "string",
            "state": {
              "additional_fields": {},
              "code": "string",
              "custom_fields": {},
              "name": "string"
            },
            "type": "string",
            "website": "string"
          }
        ],
        "birth_day": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "company": "string",
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "email": "string",
        "fax": "string",
        "first_name": "string",
        "gender": "string",
        "group": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "id": "string",
            "name": "string"
          }
        ],
        "id": "string",
        "ip_address": "string",
        "last_login": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "last_name": "string",
        "last_order_id": "string",
        "login": "string",
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "news_letter_subscription": true,
        "orders_count": 0,
        "phone": "string",
        "status": "string",
        "stores_ids": [
          "string"
        ],
        "website": "string"
      }
    ],
    "customers_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Customer_List_Result](#schemaresponse_customer_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Order_Abandoned_List">Model_Response_Order_Abandoned_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_order_abandoned_list"></a>
<a id="schema_Model_Response_Order_Abandoned_List"></a>
<a id="tocSmodel_response_order_abandoned_list"></a>
<a id="tocsmodel_response_order_abandoned_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "order": [
      {
        "additional_fields": {},
        "basket_id": "string",
        "basket_url": "string",
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        },
        "custom_fields": {},
        "customer": {
          "additional_fields": {},
          "custom_fields": {},
          "email": "string",
          "first_name": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string"
        },
        "id": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_products": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "totals": {
          "additional_fields": {},
          "custom_fields": {},
          "discount": 0,
          "shipping": 0,
          "subtotal": 0,
          "tax": 0,
          "total": 0
        }
      }
    ]
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Order_Abandoned_List_Result](#schemaresponse_order_abandoned_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Order_List">Model_Response_Order_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_order_list"></a>
<a id="schema_Model_Response_Order_List"></a>
<a id="tocSmodel_response_order_list"></a>
<a id="tocsmodel_response_order_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "order": [
      {
        "additional_fields": {},
        "basket_id": "string",
        "billing_address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "bundles": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "channel_id": "string",
        "comment": "string",
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "default": true,
          "id": "string",
          "iso3": "string",
          "name": "string",
          "rate": 0,
          "symbol_left": "string",
          "symbol_right": "string"
        },
        "custom_fields": {},
        "customer": {
          "additional_fields": {},
          "custom_fields": {},
          "email": "string",
          "first_name": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string"
        },
        "discounts": [
          {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "type": "string",
            "value": 0
          }
        ],
        "finished_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "gift_message": "string",
        "id": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_details_url": "string",
        "order_id": "string",
        "order_products": [
          {
            "additional_fields": {},
            "barcode": "string",
            "custom_fields": {},
            "discount_amount": 0,
            "model": "string",
            "name": "string",
            "options": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "name": "string",
                "option_id": "string",
                "price": 0,
                "product_option_value_id": "string",
                "type": "string",
                "value": "string",
                "weight": 0
              }
            ],
            "order_product_id": "string",
            "parent_order_product_id": "string",
            "price": 0,
            "price_inc_tax": 0,
            "product_id": "string",
            "quantity": 0,
            "tax_percent": 0,
            "tax_value": 0,
            "tax_value_after_discount": 0,
            "total_price": 0,
            "variant_id": "string",
            "weight": 0,
            "weight_unit": "string"
          }
        ],
        "payment_method": {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        },
        "refunds": [
          {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "fee": 0,
            "id": "string",
            "items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "order_product_id": "string",
                "product_id": "string",
                "qty": 0,
                "refund": 0,
                "variant_id": "string"
              }
            ],
            "modified_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "shipping": 0,
            "tax": 0,
            "total": 0
          }
        ],
        "shipping_address": {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        },
        "shipping_method": {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        },
        "shipping_methods": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "name": "string"
          }
        ],
        "status": {
          "additional_fields": {},
          "custom_fields": {},
          "history": [
            {
              "additional_fields": {},
              "comment": "string",
              "custom_fields": {},
              "id": "string",
              "modified_time": {
                "additional_fields": {},
                "custom_fields": {},
                "format": "string",
                "value": "string"
              },
              "name": "string",
              "notify": true
            }
          ],
          "id": "string",
          "name": "string",
          "refund_info": {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "fee": 0,
            "refunded_items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "order_product_id": "string",
                "product_id": "string",
                "qty": 0,
                "refund": 0,
                "variant_id": "string"
              }
            ],
            "shipping": 0,
            "tax": 0,
            "time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "total_refunded": 0
          }
        },
        "store_id": "string",
        "total": {
          "additional_fields": {},
          "custom_fields": {},
          "shipping_ex_tax": 0,
          "subtotal_ex_tax": 0,
          "total": 0,
          "total_discount": 0,
          "total_paid": 0,
          "total_tax": 0,
          "wrapping_ex_tax": 0
        },
        "totals": {
          "additional_fields": {},
          "custom_fields": {},
          "discount": 0,
          "shipping": 0,
          "subtotal": 0,
          "tax": 0,
          "total": 0
        },
        "warehouses_ids": [
          "string"
        ]
      }
    ],
    "orders_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Order_List_Result](#schemaresponse_order_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Order_PreestimateShipping_List">Model_Response_Order_PreestimateShipping_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_order_preestimateshipping_list"></a>
<a id="schema_Model_Response_Order_PreestimateShipping_List"></a>
<a id="tocSmodel_response_order_preestimateshipping_list"></a>
<a id="tocsmodel_response_order_preestimateshipping_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "preestimate_shippings": [
      {
        "additional_fields": {},
        "carrier_code": "string",
        "carrier_name": "string",
        "custom_fields": {},
        "delivery_time": "string",
        "description": "string",
        "method_code": "string",
        "method_name": "string",
        "price": 0,
        "price_inc_tax": 0
      }
    ],
    "preestimate_shippings_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Order_PreestimateShipping_List_Result](#schemaresponse_order_preestimateshipping_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Order_Shipment_List">Model_Response_Order_Shipment_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_order_shipment_list"></a>
<a id="schema_Model_Response_Order_Shipment_List"></a>
<a id="tocSmodel_response_order_shipment_list"></a>
<a id="tocsmodel_response_order_shipment_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "shipment": [
      {
        "additional_fields": {},
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "id": "string",
        "is_shipped": true,
        "items": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "model": "string",
            "name": "string",
            "order_product_id": "string",
            "price": 0,
            "product_id": "string",
            "quantity": 0,
            "variant_id": "string"
          }
        ],
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "order_id": "string",
        "shipment_provider": "string",
        "tracking_numbers": [
          {
            "additional_fields": {},
            "carrier_id": "string",
            "custom_fields": {},
            "tracking_number": "string"
          }
        ],
        "warehouse_id": "string"
      }
    ],
    "shipment_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Order_Shipment_List_Result](#schemaresponse_order_shipment_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Order_Transaction_List">Model_Response_Order_Transaction_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_order_transaction_list"></a>
<a id="schema_Model_Response_Order_Transaction_List"></a>
<a id="tocSmodel_response_order_transaction_list"></a>
<a id="tocsmodel_response_order_transaction_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "transactions": [
      {
        "additional_fields": {},
        "amount": 0,
        "avs_message": "string",
        "avs_postal_resp_code": "string",
        "avs_street_resp_code": "string",
        "card_bin": "string",
        "card_brand": "string",
        "card_last_four": "string",
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "currency": "string",
        "custom_fields": {},
        "cvv_code": "string",
        "cvv_message": "string",
        "description": "string",
        "gateway": "string",
        "id": "string",
        "is_test_mode": true,
        "order_id": "string",
        "parent_id": "string",
        "reference_number": "string",
        "settlement_amount": 0,
        "settlement_created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "settlement_currency": "string",
        "status": "string",
        "transaction_id": "string"
      }
    ],
    "transactions_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Order_Transaction_List_Result](#schemaresponse_order_transaction_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Product_Attribute_List">Model_Response_Product_Attribute_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_product_attribute_list"></a>
<a id="schema_Model_Response_Product_Attribute_List"></a>
<a id="tocSmodel_response_product_attribute_list"></a>
<a id="tocsmodel_response_product_attribute_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "attribute": [
      {
        "additional_fields": {},
        "attribute_group_id": "string",
        "attribute_id": "string",
        "code": "string",
        "custom_fields": {},
        "lang_id": "string",
        "name": "string",
        "position": 0,
        "product_id": "string",
        "required": true,
        "store_id": "string",
        "type": "string",
        "value": "string",
        "variant_id": "string",
        "visible": true
      }
    ],
    "custom_fields": {}
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Product_Attribute_List_Result](#schemaresponse_product_attribute_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Product_ChildItem_List">Model_Response_Product_ChildItem_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_product_childitem_list"></a>
<a id="schema_Model_Response_Product_ChildItem_List"></a>
<a id="tocSmodel_response_product_childitem_list"></a>
<a id="tocsmodel_response_product_childitem_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "children": [
      {
        "additional_fields": {},
        "advanced_price": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "expire_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "group_id": "string",
            "id": "string",
            "quantity_from": 0,
            "start_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "value": 0
          }
        ],
        "allow_backorders": true,
        "avail_for_sale": true,
        "combination": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "option_id": "string",
            "option_value_id": "string"
          }
        ],
        "cost_price": 0,
        "created_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "default_price": 0,
        "default_qty_in_pack": 0,
        "dimensions_unit": "string",
        "ean": "string",
        "full_description": "string",
        "gtin": "string",
        "height": 0,
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "in_stock": true,
        "inventory": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "in_stock": true,
            "priority": 0,
            "quantity": 0,
            "warehouse_id": "string"
          }
        ],
        "inventory_level": 0,
        "is_qty_in_pack_fixed": true,
        "isbn": "string",
        "length": 0,
        "list_price": 0,
        "manage_stock": true,
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "min_quantity": 0,
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "mpn": "string",
        "name": "string",
        "parent_id": "string",
        "short_description": "string",
        "sku": "string",
        "sort_order": 0,
        "tax_class_id": "string",
        "upc": "string",
        "weight": 0,
        "weight_unit": "string",
        "wholesale_price": 0,
        "width": 0
      }
    ],
    "custom_fields": {},
    "total_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Product_ChildItem_List_Result](#schemaresponse_product_childitem_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Model_Response_Product_List">Model_Response_Product_List</h2>
<!-- backwards compatibility -->
<a id="schemamodel_response_product_list"></a>
<a id="schema_Model_Response_Product_List"></a>
<a id="tocSmodel_response_product_list"></a>
<a id="tocsmodel_response_product_list"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "pagination": {
    "additional_fields": {},
    "custom_fields": {},
    "next": "string",
    "previous": "string"
  },
  "result": {
    "additional_fields": {},
    "custom_fields": {},
    "product": [
      {
        "additional_fields": {},
        "advanced_price": [
          {
            "additional_fields": {},
            "avail": true,
            "custom_fields": {},
            "expire_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "group_id": "string",
            "id": "string",
            "quantity_from": 0,
            "start_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "value": 0
          }
        ],
        "avail_sale": true,
        "avail_view": true,
        "backorders": "string",
        "categories_ids": [
          "string"
        ],
        "cost_price": 0,
        "create_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "description": "string",
        "dimensions_unit": "string",
        "group_items": [
          {
            "additional_fields": {},
            "child_item_id": "string",
            "custom_fields": {},
            "default_qty_in_pack": "string",
            "is_qty_in_pack_fixed": true,
            "product_id": "string"
          }
        ],
        "group_price": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "expire_time": "string",
            "group_id": "string",
            "id": "string",
            "price": 0,
            "quantity": 0,
            "start_time": "string",
            "store_id": "string"
          }
        ],
        "height": 0,
        "id": "string",
        "images": [
          {
            "additional_fields": {},
            "alt": "string",
            "avail": true,
            "create_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "custom_fields": {},
            "file_name": "string",
            "http_path": "string",
            "id": "string",
            "mime-type": "string",
            "modified_at": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "size": 0,
            "sort_order": 0,
            "type": "string"
          }
        ],
        "inventory": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "in_stock": true,
            "priority": 0,
            "quantity": 0,
            "warehouse_id": "string"
          }
        ],
        "is_downloadable": true,
        "is_stock_managed": true,
        "is_virtual": true,
        "length": 0,
        "manage_stock": "string",
        "meta_description": "string",
        "meta_keywords": "string",
        "meta_title": "string",
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "price": 0,
        "product_options": [
          {
            "additional_fields": {},
            "available": true,
            "custom_fields": {},
            "description": "string",
            "id": "string",
            "name": "string",
            "option_items": [
              {
                "additional_fields": {},
                "custom_fields": {},
                "id": "string",
                "name": "string",
                "price": "string",
                "product_option_item_id": "string",
                "quantity": 0,
                "sku": "string",
                "sort_order": 0,
                "type_price": "string",
                "weight": "string"
              }
            ],
            "product_option_id": "string",
            "required": true,
            "sort_order": 0,
            "type": "string",
            "used_in_combination": true
          }
        ],
        "quantity": 0,
        "related_products_ids": [
          "string"
        ],
        "seo_url": "string",
        "short_description": "string",
        "sort_order": 0,
        "special_price": {
          "additional_fields": {},
          "avail": true,
          "created_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "custom_fields": {},
          "expired_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "modified_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "value": 0
        },
        "stores_ids": [
          "string"
        ],
        "tax_class_id": "string",
        "tier_price": [
          {
            "additional_fields": {},
            "custom_fields": {},
            "price": 0,
            "qty": 0
          }
        ],
        "type": "string",
        "u_brand": "string",
        "u_brand_id": "string",
        "u_model": "string",
        "u_mpn": "string",
        "u_sku": "string",
        "u_upc": "string",
        "url": "string",
        "weight": 0,
        "weight_unit": "string",
        "width": 0
      }
    ],
    "products_count": 0
  },
  "return_code": 0,
  "return_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|result|[Response_Product_List_Result](#schemaresponse_product_list_result)|false|none|none|
|return_code|integer|false|none|none|
|return_message|string|false|none|none|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "additional_fields": {},
  "basket_id": "string",
  "billing_address": {
    "additional_fields": {},
    "address1": "string",
    "address2": "string",
    "city": "string",
    "company": "string",
    "country": {
      "additional_fields": {},
      "code2": "string",
      "code3": "string",
      "custom_fields": {},
      "name": "string"
    },
    "custom_fields": {},
    "default": true,
    "fax": "string",
    "first_name": "string",
    "gender": "string",
    "id": "string",
    "last_name": "string",
    "phone": "string",
    "postcode": "string",
    "region": "string",
    "state": {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "name": "string"
    },
    "type": "string",
    "website": "string"
  },
  "bundles": [
    {
      "additional_fields": {},
      "barcode": "string",
      "custom_fields": {},
      "discount_amount": 0,
      "model": "string",
      "name": "string",
      "options": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string",
          "option_id": "string",
          "price": 0,
          "product_option_value_id": "string",
          "type": "string",
          "value": "string",
          "weight": 0
        }
      ],
      "order_product_id": "string",
      "parent_order_product_id": "string",
      "price": 0,
      "price_inc_tax": 0,
      "product_id": "string",
      "quantity": 0,
      "tax_percent": 0,
      "tax_value": 0,
      "tax_value_after_discount": 0,
      "total_price": 0,
      "variant_id": "string",
      "weight": 0,
      "weight_unit": "string"
    }
  ],
  "channel_id": "string",
  "comment": "string",
  "create_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "currency": {
    "additional_fields": {},
    "avail": true,
    "custom_fields": {},
    "default": true,
    "id": "string",
    "iso3": "string",
    "name": "string",
    "rate": 0,
    "symbol_left": "string",
    "symbol_right": "string"
  },
  "custom_fields": {},
  "customer": {
    "additional_fields": {},
    "custom_fields": {},
    "email": "string",
    "first_name": "string",
    "id": "string",
    "last_name": "string",
    "phone": "string"
  },
  "discounts": [
    {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "type": "string",
      "value": 0
    }
  ],
  "finished_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "gift_message": "string",
  "id": "string",
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "order_details_url": "string",
  "order_id": "string",
  "order_products": [
    {
      "additional_fields": {},
      "barcode": "string",
      "custom_fields": {},
      "discount_amount": 0,
      "model": "string",
      "name": "string",
      "options": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string",
          "option_id": "string",
          "price": 0,
          "product_option_value_id": "string",
          "type": "string",
          "value": "string",
          "weight": 0
        }
      ],
      "order_product_id": "string",
      "parent_order_product_id": "string",
      "price": 0,
      "price_inc_tax": 0,
      "product_id": "string",
      "quantity": 0,
      "tax_percent": 0,
      "tax_value": 0,
      "tax_value_after_discount": 0,
      "total_price": 0,
      "variant_id": "string",
      "weight": 0,
      "weight_unit": "string"
    }
  ],
  "payment_method": {
    "additional_fields": {},
    "custom_fields": {},
    "name": "string"
  },
  "refunds": [
    {
      "additional_fields": {},
      "comment": "string",
      "custom_fields": {},
      "fee": 0,
      "id": "string",
      "items": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "order_product_id": "string",
          "product_id": "string",
          "qty": 0,
          "refund": 0,
          "variant_id": "string"
        }
      ],
      "modified_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "shipping": 0,
      "tax": 0,
      "total": 0
    }
  ],
  "shipping_address": {
    "additional_fields": {},
    "address1": "string",
    "address2": "string",
    "city": "string",
    "company": "string",
    "country": {
      "additional_fields": {},
      "code2": "string",
      "code3": "string",
      "custom_fields": {},
      "name": "string"
    },
    "custom_fields": {},
    "default": true,
    "fax": "string",
    "first_name": "string",
    "gender": "string",
    "id": "string",
    "last_name": "string",
    "phone": "string",
    "postcode": "string",
    "region": "string",
    "state": {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "name": "string"
    },
    "type": "string",
    "website": "string"
  },
  "shipping_method": {
    "additional_fields": {},
    "custom_fields": {},
    "name": "string"
  },
  "shipping_methods": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "name": "string"
    }
  ],
  "status": {
    "additional_fields": {},
    "custom_fields": {},
    "history": [
      {
        "additional_fields": {},
        "comment": "string",
        "custom_fields": {},
        "id": "string",
        "modified_time": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "name": "string",
        "notify": true
      }
    ],
    "id": "string",
    "name": "string",
    "refund_info": {
      "additional_fields": {},
      "comment": "string",
      "custom_fields": {},
      "fee": 0,
      "refunded_items": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "order_product_id": "string",
          "product_id": "string",
          "qty": 0,
          "refund": 0,
          "variant_id": "string"
        }
      ],
      "shipping": 0,
      "tax": 0,
      "time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "total_refunded": 0
    }
  },
  "store_id": "string",
  "total": {
    "additional_fields": {},
    "custom_fields": {},
    "shipping_ex_tax": 0,
    "subtotal_ex_tax": 0,
    "total": 0,
    "total_discount": 0,
    "total_paid": 0,
    "total_tax": 0,
    "wrapping_ex_tax": 0
  },
  "totals": {
    "additional_fields": {},
    "custom_fields": {},
    "discount": 0,
    "shipping": 0,
    "subtotal": 0,
    "tax": 0,
    "total": 0
  },
  "warehouses_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|basket_id|string|false|none|none|
|billing_address|[Customer_Address](#schemacustomer_address)|false|none|none|
|bundles|[[Order_Item](#schemaorder_item)]|false|none|none|
|channel_id|string|false|none|none|
|comment|string|false|none|none|
|create_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|currency|[Currency](#schemacurrency)|false|none|none|
|custom_fields|object|false|none|none|
|customer|[BaseCustomer](#schemabasecustomer)|false|none|none|
|discounts|[[Order_Totals_NewDiscount](#schemaorder_totals_newdiscount)]|false|none|none|
|finished_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|gift_message|string|false|none|none|
|id|string|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|order_details_url|string|false|none|none|
|order_id|string|false|none|none|
|order_products|[[Order_Item](#schemaorder_item)]|false|none|none|
|payment_method|[Order_PaymentMethod](#schemaorder_paymentmethod)|false|none|none|
|refunds|[[Order_Refund](#schemaorder_refund)]|false|none|none|
|shipping_address|[Customer_Address](#schemacustomer_address)|false|none|none|
|shipping_method|[Order_ShippingMethod](#schemaorder_shippingmethod)|false|none|none|
|shipping_methods|[[Order_ShippingMethod](#schemaorder_shippingmethod)]|false|none|none|
|status|[Order_Status](#schemaorder_status)|false|none|none|
|store_id|string|false|none|none|
|total|[Order_Total](#schemaorder_total)|false|none|none|
|totals|[Order_Totals](#schemaorder_totals)|false|none|none|
|warehouses_ids|[string]|false|none|none|

<h2 id="tocS_OrderAbandoned">OrderAbandoned</h2>
<!-- backwards compatibility -->
<a id="schemaorderabandoned"></a>
<a id="schema_OrderAbandoned"></a>
<a id="tocSorderabandoned"></a>
<a id="tocsorderabandoned"></a>

```json
{
  "additional_fields": {},
  "basket_id": "string",
  "basket_url": "string",
  "created_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "currency": {
    "additional_fields": {},
    "avail": true,
    "custom_fields": {},
    "default": true,
    "id": "string",
    "iso3": "string",
    "name": "string",
    "rate": 0,
    "symbol_left": "string",
    "symbol_right": "string"
  },
  "custom_fields": {},
  "customer": {
    "additional_fields": {},
    "custom_fields": {},
    "email": "string",
    "first_name": "string",
    "id": "string",
    "last_name": "string",
    "phone": "string"
  },
  "id": "string",
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "order_products": [
    {
      "additional_fields": {},
      "barcode": "string",
      "custom_fields": {},
      "discount_amount": 0,
      "model": "string",
      "name": "string",
      "options": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string",
          "option_id": "string",
          "price": 0,
          "product_option_value_id": "string",
          "type": "string",
          "value": "string",
          "weight": 0
        }
      ],
      "order_product_id": "string",
      "parent_order_product_id": "string",
      "price": 0,
      "price_inc_tax": 0,
      "product_id": "string",
      "quantity": 0,
      "tax_percent": 0,
      "tax_value": 0,
      "tax_value_after_discount": 0,
      "total_price": 0,
      "variant_id": "string",
      "weight": 0,
      "weight_unit": "string"
    }
  ],
  "totals": {
    "additional_fields": {},
    "custom_fields": {},
    "discount": 0,
    "shipping": 0,
    "subtotal": 0,
    "tax": 0,
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|basket_id|string|false|none|none|
|basket_url|string|false|none|none|
|created_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|currency|[Currency](#schemacurrency)|false|none|none|
|custom_fields|object|false|none|none|
|customer|[BaseCustomer](#schemabasecustomer)|false|none|none|
|id|string|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|order_products|[[Order_Item](#schemaorder_item)]|false|none|none|
|totals|[Order_Totals](#schemaorder_totals)|false|none|none|

<h2 id="tocS_OrderAdd">OrderAdd</h2>
<!-- backwards compatibility -->
<a id="schemaorderadd"></a>
<a id="schema_OrderAdd"></a>
<a id="tocSorderadd"></a>
<a id="tocsorderadd"></a>

```json
{
  "admin_comment": "string",
  "admin_private_comment": "string",
  "bill_address_1": "string",
  "bill_address_2": "string",
  "bill_city": "string",
  "bill_company": "string",
  "bill_country": "string",
  "bill_fax": "string",
  "bill_first_name": "string",
  "bill_last_name": "string",
  "bill_phone": "string",
  "bill_postcode": "string",
  "bill_state": "string",
  "channel_id": "string",
  "clear_cache": true,
  "comment": "string",
  "coupon_discount": 0,
  "coupons": [
    "string"
  ],
  "create_invoice": false,
  "currency": "string",
  "customer_birthday": "string",
  "customer_email": "string",
  "customer_fax": "string",
  "customer_first_name": "string",
  "customer_last_name": "string",
  "customer_phone": "string",
  "date": "string",
  "date_finished": "string",
  "date_modified": "string",
  "discount": 0,
  "external_source": "string",
  "financial_status": "string",
  "fulfillment_status": "string",
  "gift_certificate_discount": 0,
  "id": "string",
  "inventory_behaviour": "bypass",
  "note_attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "order_id": "string",
  "order_item": [
    {
      "order_item_allow_refund_items_separately": true,
      "order_item_allow_ship_items_separately": true,
      "order_item_id": "string",
      "order_item_model": "string",
      "order_item_name": "string",
      "order_item_option": [
        {
          "order_item_option_name": "string",
          "order_item_option_price": 0,
          "order_item_option_value": "string"
        }
      ],
      "order_item_parent": 0,
      "order_item_parent_option_name": "string",
      "order_item_price": 0,
      "order_item_price_includes_tax": false,
      "order_item_property": [
        {
          "order_item_property_name": "string",
          "order_item_property_value": "string"
        }
      ],
      "order_item_quantity": 0,
      "order_item_tax": 0,
      "order_item_variant_id": "string",
      "order_item_weight": 0
    }
  ],
  "order_payment_method": "string",
  "order_shipping_method": "string",
  "order_status": "string",
  "prices_inc_tax": false,
  "send_admin_notifications": false,
  "send_notifications": false,
  "shipp_address_1": "string",
  "shipp_address_2": "string",
  "shipp_city": "string",
  "shipp_company": "string",
  "shipp_country": "string",
  "shipp_fax": "string",
  "shipp_first_name": "string",
  "shipp_last_name": "string",
  "shipp_phone": "string",
  "shipp_postcode": "string",
  "shipp_state": "string",
  "shipping_price": 0,
  "shipping_tax": 0,
  "store_id": "string",
  "subtotal_price": 0,
  "tags": "string",
  "tax_price": 0,
  "total_paid": 0,
  "total_price": 0,
  "total_weight": 0,
  "transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin_comment|string|false|none|Specifies admin's order comment|
|admin_private_comment|string|false|none|Specifies private admin's order comment|
|bill_address_1|string|true|none|Specifies first billing address|
|bill_address_2|string|false|none|Specifies second billing address|
|bill_city|string|true|none|Specifies billing city|
|bill_company|string|false|none|Specifies billing company|
|bill_country|string|true|none|Specifies billing country code|
|bill_fax|string|false|none|Specifies billing fax|
|bill_first_name|string|true|none|Specifies billing first name|
|bill_last_name|string|true|none|Specifies billing last name|
|bill_phone|string|false|none|Specifies billing phone|
|bill_postcode|string|true|none|Specifies billing postcode|
|bill_state|string|true|none|Specifies billing state code|
|channel_id|string|false|none|Channel ID|
|clear_cache|boolean|false|none|Is cache clear required|
|comment|string|false|none|Specifies order comment|
|coupon_discount|number|false|none|Specifies order's coupon discount|
|coupons|[string]|false|none|Coupons that will be applied to order|
|create_invoice|boolean|false|none|Defines whether the invoice is created automatically along with the order|
|currency|string|false|none|Currency code of order|
|customer_birthday|string|false|none|Specifies customer’s birthday|
|customer_email|string|true|none|Defines the customer specified by email for whom order has to be created|
|customer_fax|string|false|none|Specifies customer’s fax|
|customer_first_name|string|false|none|Specifies customer's first name|
|customer_last_name|string|false|none|Specifies customer’s last name|
|customer_phone|string|false|none|Specifies customer’s phone|
|date|string|false|none|Specifies an order creation date in format Y-m-d H:i:s|
|date_finished|string|false|none|Specifies order's  finished date|
|date_modified|string|false|none|Specifies order's  modification date|
|discount|number|false|none|Specifies order's discount|
|external_source|string|false|none|Identifying the system used to generate the order|
|financial_status|string|false|none|Create order with financial status|
|fulfillment_status|string|false|none|Create order with fulfillment status|
|gift_certificate_discount|number|false|none|Discounts for order with gift certificates|
|id|string|false|none|Defines order's id|
|inventory_behaviour|string|false|none|The behaviour to use when updating inventory.<hr><div style="font-style:normal">Values description:<div style="margin-left: 2%; padding-top: 2%"><div style="font-size:85%"><b>bypass</b> = Do not claim inventory </br></br><b>decrement_ignoring_policy</b> = Ignore the product's </br> inventory policy and claim amounts</br></br><b>decrement_obeying_policy</b> =  Obey the product's </br> inventory policy.</br></br></div></div></div>|
|note_attributes|[object]|false|none|Defines note attributes|
|order_id|string|false|none|Defines the order id if it is supported by the cart|
|order_item|[object]|true|none|none|
|order_payment_method|string|false|none|Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'|
|order_shipping_method|string|false|none|Defines order shipping method|
|order_status|string|true|none|Defines order status.|
|prices_inc_tax|boolean|false|none|Indicates whether prices and subtotal includes tax.|
|send_admin_notifications|boolean|false|none|Notify admin when new order was created.|
|send_notifications|boolean|false|none|Send notifications to customer after order was created|
|shipp_address_1|string|false|none|Specifies first shipping address|
|shipp_address_2|string|false|none|Specifies second address line of a shipping street address|
|shipp_city|string|false|none|Specifies shipping city|
|shipp_company|string|false|none|Specifies shipping company|
|shipp_country|string|false|none|Specifies shipping country code|
|shipp_fax|string|false|none|Specifies shipping fax|
|shipp_first_name|string|false|none|Specifies shipping first name|
|shipp_last_name|string|false|none|Specifies shipping last name|
|shipp_phone|string|false|none|Specifies shipping phone|
|shipp_postcode|string|false|none|Specifies shipping postcode|
|shipp_state|string|false|none|Specifies shipping state code|
|shipping_price|number|false|none|Specifies order's shipping price|
|shipping_tax|number|false|none|Specifies order's shipping price tax|
|store_id|string|false|none|Defines store id where the order should be assigned|
|subtotal_price|number|false|none|Total price of all ordered products multiplied by their number, excluding tax, shipping price and discounts|
|tags|string|false|none|Order tags|
|tax_price|number|false|none|The value of tax cost for order|
|total_paid|number|false|none|Defines total paid amount for the order|
|total_price|number|false|none|Defines order's total price|
|total_weight|integer|false|none|Defines the sum of all line item weights in grams for the order|
|transaction_id|string|false|none|Payment transaction id|

<h2 id="tocS_OrderPreestimateShippingList">OrderPreestimateShippingList</h2>
<!-- backwards compatibility -->
<a id="schemaorderpreestimateshippinglist"></a>
<a id="schema_OrderPreestimateShippingList"></a>
<a id="tocSorderpreestimateshippinglist"></a>
<a id="tocsorderpreestimateshippinglist"></a>

```json
{
  "customer_email": "string",
  "customer_id": "string",
  "exclude": "string",
  "order_item": [
    {
      "order_item_id": "string",
      "order_item_model": "string",
      "order_item_option": [
        {
          "order_item_option_id": "string",
          "order_item_option_name": "string",
          "order_item_option_used_in_combinations": true,
          "order_item_option_value": "string",
          "order_item_option_value_id": "string"
        }
      ],
      "order_item_quantity": 0,
      "order_item_variant_id": "string",
      "order_item_weight": 0
    }
  ],
  "params": "force_all",
  "shipp_address_1": "string",
  "shipp_city": "string",
  "shipp_country": "string",
  "shipp_postcode": "string",
  "shipp_state": "string",
  "store_id": "string",
  "warehouse_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_email|string|false|none|Retrieves orders specified by customer email|
|customer_id|string|false|none|Retrieves orders specified by customer id|
|exclude|string|false|none|Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all|
|order_item|[object]|true|none|none|
|params|string|false|none|Set this parameter in order to choose which entity fields you want to retrieve|
|shipp_address_1|string|false|none|Specifies first shipping address|
|shipp_city|string|false|none|Specifies shipping city|
|shipp_country|string|true|none|Specifies shipping country code|
|shipp_postcode|string|false|none|Specifies shipping postcode|
|shipp_state|string|false|none|Specifies shipping state code|
|store_id|string|false|none|Store Id|
|warehouse_id|string|false|none|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|

<h2 id="tocS_OrderRefundAdd">OrderRefundAdd</h2>
<!-- backwards compatibility -->
<a id="schemaorderrefundadd"></a>
<a id="schema_OrderRefundAdd"></a>
<a id="tocSorderrefundadd"></a>
<a id="tocsorderrefundadd"></a>

```json
{
  "date": "string",
  "fee_price": 0,
  "is_online": false,
  "item_restock": false,
  "items": [
    {
      "order_product_id": "string",
      "price": 0,
      "quantity": 0
    }
  ],
  "message": "string",
  "order_id": "string",
  "send_notifications": false,
  "shipping_price": 0,
  "total_price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Specifies an order creation date in format Y-m-d H:i:s|
|fee_price|number|false|none|Specifies refund's fee price|
|is_online|boolean|false|none|Indicates whether refund type is online|
|item_restock|boolean|false|none|Boolean, whether or not to add the line items back to the store inventory.|
|items|[object]|false|none|Defines items in the order that will be refunded|
|message|string|false|none|Refund reason, or some else message which assigned to refund.|
|order_id|string|false|none|Defines the order for which the refund will be created.|
|send_notifications|boolean|false|none|Send notifications to customer after refund was created|
|shipping_price|number|false|none|Defines refund shipping amount.|
|total_price|number|false|none|Defines order refund amount.|

<h2 id="tocS_OrderShipmentAdd">OrderShipmentAdd</h2>
<!-- backwards compatibility -->
<a id="schemaordershipmentadd"></a>
<a id="schema_OrderShipmentAdd"></a>
<a id="tocSordershipmentadd"></a>
<a id="tocsordershipmentadd"></a>

```json
{
  "adjust_stock": false,
  "enable_cache": false,
  "is_shipped": true,
  "items": [
    {
      "order_product_id": "string",
      "quantity": 0
    }
  ],
  "order_id": "string",
  "send_notifications": false,
  "shipment_provider": "string",
  "shipping_method": "string",
  "store_id": "string",
  "tracking_link": "string",
  "tracking_numbers": [
    {
      "carrier_id": "string",
      "tracking_number": "string"
    }
  ],
  "warehouse_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjust_stock|boolean|false|none|This parameter is used for adjust stock.|
|enable_cache|boolean|false|none|If the value is 'true' and order exist in our cache, we will use order.info from cache to prepare shipment items.|
|is_shipped|boolean|false|none|Defines shipment's status|
|items|[object]|false|none|Defines items in the order that will be shipped|
|order_id|string|false|none|Defines the order for which the shipment will be created|
|send_notifications|boolean|false|none|Send notifications to customer after shipment was created|
|shipment_provider|string|false|none|Defines company name that provide tracking of shipment|
|shipping_method|string|false|none|Define shipping method|
|store_id|string|false|none|Store Id|
|tracking_link|string|false|none|Defines custom tracking link|
|tracking_numbers|[object]|false|none|Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "https://api2cart.com/docs/#/cart/CartInfo">cart.info</a > method|
|warehouse_id|string|false|none|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|

<h2 id="tocS_OrderShipmentTrackingAdd">OrderShipmentTrackingAdd</h2>
<!-- backwards compatibility -->
<a id="schemaordershipmenttrackingadd"></a>
<a id="schema_OrderShipmentTrackingAdd"></a>
<a id="tocSordershipmenttrackingadd"></a>
<a id="tocsordershipmenttrackingadd"></a>

```json
{
  "carrier_id": "string",
  "order_id": "string",
  "send_notifications": false,
  "shipment_id": "string",
  "store_id": "string",
  "tracking_link": "string",
  "tracking_number": "string",
  "tracking_provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|string|false|none|Defines tracking carrier id|
|order_id|string|false|none|Defines the order id|
|send_notifications|boolean|false|none|Send notifications to customer after tracking was created|
|shipment_id|string|true|none|Shipment id indicates the number of delivery|
|store_id|string|false|none|Store Id|
|tracking_link|string|false|none|Defines custom tracking link|
|tracking_number|string|true|none|Defines tracking number|
|tracking_provider|string|false|none|Defines name of the company which provides shipment tracking|

<h2 id="tocS_OrderShipmentUpdate">OrderShipmentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaordershipmentupdate"></a>
<a id="schema_OrderShipmentUpdate"></a>
<a id="tocSordershipmentupdate"></a>
<a id="tocsordershipmentupdate"></a>

```json
{
  "is_shipped": true,
  "order_id": "string",
  "replace": true,
  "shipment_id": "string",
  "store_id": "string",
  "tracking_link": "string",
  "tracking_numbers": [
    {
      "carrier_id": "string",
      "tracking_number": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_shipped|boolean|false|none|Defines shipment's status|
|order_id|string|false|none|Defines the order that will be updated|
|replace|boolean|false|none|Allows rewrite tracking numbers|
|shipment_id|string|true|none|Shipment id indicates the number of delivery|
|store_id|string|false|none|Store Id|
|tracking_link|string|false|none|Defines custom tracking link|
|tracking_numbers|[object]|false|none|Defines shipment's tracking numbers that have to be added</br> How set tracking numbers to appropriate carrier:<ul><li>tracking_numbers[]=a2c.demo1,a2c.demo2 - set default carrier</li><li>tracking_numbers[<b>carrier_id</b>]=a2c.demo - set appropriate carrier</li></ul>To get the list of carriers IDs that are available in your store, use the <a href = "https://api2cart.com/docs/#/cart/CartInfo">cart.info</a > method|

<h2 id="tocS_Order_Item">Order_Item</h2>
<!-- backwards compatibility -->
<a id="schemaorder_item"></a>
<a id="schema_Order_Item"></a>
<a id="tocSorder_item"></a>
<a id="tocsorder_item"></a>

```json
{
  "additional_fields": {},
  "barcode": "string",
  "custom_fields": {},
  "discount_amount": 0,
  "model": "string",
  "name": "string",
  "options": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "name": "string",
      "option_id": "string",
      "price": 0,
      "product_option_value_id": "string",
      "type": "string",
      "value": "string",
      "weight": 0
    }
  ],
  "order_product_id": "string",
  "parent_order_product_id": "string",
  "price": 0,
  "price_inc_tax": 0,
  "product_id": "string",
  "quantity": 0,
  "tax_percent": 0,
  "tax_value": 0,
  "tax_value_after_discount": 0,
  "total_price": 0,
  "variant_id": "string",
  "weight": 0,
  "weight_unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|barcode|string|false|none|none|
|custom_fields|object|false|none|none|
|discount_amount|number|false|none|none|
|model|string|false|none|none|
|name|string|false|none|none|
|options|[[Order_Item_Option](#schemaorder_item_option)]|false|none|none|
|order_product_id|string|false|none|none|
|parent_order_product_id|string|false|none|none|
|price|number|false|none|none|
|price_inc_tax|number|false|none|none|
|product_id|string|false|none|none|
|quantity|number|false|none|none|
|tax_percent|number|false|none|none|
|tax_value|number|false|none|none|
|tax_value_after_discount|number|false|none|none|
|total_price|number|false|none|none|
|variant_id|string|false|none|none|
|weight|number|false|none|none|
|weight_unit|string|false|none|none|

<h2 id="tocS_Order_Item_Option">Order_Item_Option</h2>
<!-- backwards compatibility -->
<a id="schemaorder_item_option"></a>
<a id="schema_Order_Item_Option"></a>
<a id="tocSorder_item_option"></a>
<a id="tocsorder_item_option"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "name": "string",
  "option_id": "string",
  "price": 0,
  "product_option_value_id": "string",
  "type": "string",
  "value": "string",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|
|option_id|string|false|none|none|
|price|number|false|none|none|
|product_option_value_id|string|false|none|none|
|type|string|false|none|none|
|value|string|false|none|none|
|weight|number|false|none|none|

<h2 id="tocS_Order_PaymentMethod">Order_PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemaorder_paymentmethod"></a>
<a id="schema_Order_PaymentMethod"></a>
<a id="tocSorder_paymentmethod"></a>
<a id="tocsorder_paymentmethod"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Order_PreestimateShipping">Order_PreestimateShipping</h2>
<!-- backwards compatibility -->
<a id="schemaorder_preestimateshipping"></a>
<a id="schema_Order_PreestimateShipping"></a>
<a id="tocSorder_preestimateshipping"></a>
<a id="tocsorder_preestimateshipping"></a>

```json
{
  "additional_fields": {},
  "carrier_code": "string",
  "carrier_name": "string",
  "custom_fields": {},
  "delivery_time": "string",
  "description": "string",
  "method_code": "string",
  "method_name": "string",
  "price": 0,
  "price_inc_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|carrier_code|string|false|none|none|
|carrier_name|string|false|none|none|
|custom_fields|object|false|none|none|
|delivery_time|string|false|none|none|
|description|string|false|none|none|
|method_code|string|false|none|none|
|method_name|string|false|none|none|
|price|number|false|none|none|
|price_inc_tax|number|false|none|none|

<h2 id="tocS_Order_Refund">Order_Refund</h2>
<!-- backwards compatibility -->
<a id="schemaorder_refund"></a>
<a id="schema_Order_Refund"></a>
<a id="tocSorder_refund"></a>
<a id="tocsorder_refund"></a>

```json
{
  "additional_fields": {},
  "comment": "string",
  "custom_fields": {},
  "fee": 0,
  "id": "string",
  "items": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "order_product_id": "string",
      "product_id": "string",
      "qty": 0,
      "refund": 0,
      "variant_id": "string"
    }
  ],
  "modified_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "shipping": 0,
  "tax": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|comment|string|false|none|none|
|custom_fields|object|false|none|none|
|fee|number|false|none|none|
|id|string|false|none|none|
|items|[[Order_Status_Refund_Item](#schemaorder_status_refund_item)]|false|none|none|
|modified_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|shipping|number|false|none|none|
|tax|number|false|none|none|
|total|number|false|none|none|

<h2 id="tocS_Order_ShippingMethod">Order_ShippingMethod</h2>
<!-- backwards compatibility -->
<a id="schemaorder_shippingmethod"></a>
<a id="schema_Order_ShippingMethod"></a>
<a id="tocSorder_shippingmethod"></a>
<a id="tocsorder_shippingmethod"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Order_Status">Order_Status</h2>
<!-- backwards compatibility -->
<a id="schemaorder_status"></a>
<a id="schema_Order_Status"></a>
<a id="tocSorder_status"></a>
<a id="tocsorder_status"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "history": [
    {
      "additional_fields": {},
      "comment": "string",
      "custom_fields": {},
      "id": "string",
      "modified_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "name": "string",
      "notify": true
    }
  ],
  "id": "string",
  "name": "string",
  "refund_info": {
    "additional_fields": {},
    "comment": "string",
    "custom_fields": {},
    "fee": 0,
    "refunded_items": [
      {
        "additional_fields": {},
        "custom_fields": {},
        "order_product_id": "string",
        "product_id": "string",
        "qty": 0,
        "refund": 0,
        "variant_id": "string"
      }
    ],
    "shipping": 0,
    "tax": 0,
    "time": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "total_refunded": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|history|[[Order_Status_HistoryItem](#schemaorder_status_historyitem)]|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|refund_info|[Order_Status_Refund](#schemaorder_status_refund)|false|none|none|

<h2 id="tocS_Order_Status_HistoryItem">Order_Status_HistoryItem</h2>
<!-- backwards compatibility -->
<a id="schemaorder_status_historyitem"></a>
<a id="schema_Order_Status_HistoryItem"></a>
<a id="tocSorder_status_historyitem"></a>
<a id="tocsorder_status_historyitem"></a>

```json
{
  "additional_fields": {},
  "comment": "string",
  "custom_fields": {},
  "id": "string",
  "modified_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "name": "string",
  "notify": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|comment|string|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|modified_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|name|string|false|none|none|
|notify|boolean|false|none|none|

<h2 id="tocS_Order_Status_Refund">Order_Status_Refund</h2>
<!-- backwards compatibility -->
<a id="schemaorder_status_refund"></a>
<a id="schema_Order_Status_Refund"></a>
<a id="tocSorder_status_refund"></a>
<a id="tocsorder_status_refund"></a>

```json
{
  "additional_fields": {},
  "comment": "string",
  "custom_fields": {},
  "fee": 0,
  "refunded_items": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "order_product_id": "string",
      "product_id": "string",
      "qty": 0,
      "refund": 0,
      "variant_id": "string"
    }
  ],
  "shipping": 0,
  "tax": 0,
  "time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "total_refunded": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|comment|string|false|none|none|
|custom_fields|object|false|none|none|
|fee|number|false|none|none|
|refunded_items|[[Order_Status_Refund_Item](#schemaorder_status_refund_item)]|false|none|none|
|shipping|number|false|none|none|
|tax|number|false|none|none|
|time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|total_refunded|number|false|none|none|

<h2 id="tocS_Order_Status_Refund_Item">Order_Status_Refund_Item</h2>
<!-- backwards compatibility -->
<a id="schemaorder_status_refund_item"></a>
<a id="schema_Order_Status_Refund_Item"></a>
<a id="tocSorder_status_refund_item"></a>
<a id="tocsorder_status_refund_item"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "order_product_id": "string",
  "product_id": "string",
  "qty": 0,
  "refund": 0,
  "variant_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|order_product_id|string|false|none|none|
|product_id|string|false|none|none|
|qty|number|false|none|none|
|refund|number|false|none|none|
|variant_id|string|false|none|none|

<h2 id="tocS_Order_Total">Order_Total</h2>
<!-- backwards compatibility -->
<a id="schemaorder_total"></a>
<a id="schema_Order_Total"></a>
<a id="tocSorder_total"></a>
<a id="tocsorder_total"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "shipping_ex_tax": 0,
  "subtotal_ex_tax": 0,
  "total": 0,
  "total_discount": 0,
  "total_paid": 0,
  "total_tax": 0,
  "wrapping_ex_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|shipping_ex_tax|number|false|none|none|
|subtotal_ex_tax|number|false|none|none|
|total|number|false|none|none|
|total_discount|number|false|none|none|
|total_paid|number|false|none|none|
|total_tax|number|false|none|none|
|wrapping_ex_tax|number|false|none|none|

<h2 id="tocS_Order_Totals">Order_Totals</h2>
<!-- backwards compatibility -->
<a id="schemaorder_totals"></a>
<a id="schema_Order_Totals"></a>
<a id="tocSorder_totals"></a>
<a id="tocsorder_totals"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "discount": 0,
  "shipping": 0,
  "subtotal": 0,
  "tax": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|discount|number|false|none|none|
|shipping|number|false|none|none|
|subtotal|number|false|none|none|
|tax|number|false|none|none|
|total|number|false|none|none|

<h2 id="tocS_Order_Totals_NewDiscount">Order_Totals_NewDiscount</h2>
<!-- backwards compatibility -->
<a id="schemaorder_totals_newdiscount"></a>
<a id="schema_Order_Totals_NewDiscount"></a>
<a id="tocSorder_totals_newdiscount"></a>
<a id="tocsorder_totals_newdiscount"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "custom_fields": {},
  "type": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|type|string|false|none|none|
|value|number|false|none|none|

<h2 id="tocS_Order_Transaction">Order_Transaction</h2>
<!-- backwards compatibility -->
<a id="schemaorder_transaction"></a>
<a id="schema_Order_Transaction"></a>
<a id="tocSorder_transaction"></a>
<a id="tocsorder_transaction"></a>

```json
{
  "additional_fields": {},
  "amount": 0,
  "avs_message": "string",
  "avs_postal_resp_code": "string",
  "avs_street_resp_code": "string",
  "card_bin": "string",
  "card_brand": "string",
  "card_last_four": "string",
  "created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "currency": "string",
  "custom_fields": {},
  "cvv_code": "string",
  "cvv_message": "string",
  "description": "string",
  "gateway": "string",
  "id": "string",
  "is_test_mode": true,
  "order_id": "string",
  "parent_id": "string",
  "reference_number": "string",
  "settlement_amount": 0,
  "settlement_created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "settlement_currency": "string",
  "status": "string",
  "transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|amount|number|false|none|none|
|avs_message|string|false|none|none|
|avs_postal_resp_code|string|false|none|none|
|avs_street_resp_code|string|false|none|none|
|card_bin|string|false|none|none|
|card_brand|string|false|none|none|
|card_last_four|string|false|none|none|
|created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|currency|string|false|none|none|
|custom_fields|object|false|none|none|
|cvv_code|string|false|none|none|
|cvv_message|string|false|none|none|
|description|string|false|none|none|
|gateway|string|false|none|none|
|id|string|false|none|none|
|is_test_mode|boolean|false|none|none|
|order_id|string|false|none|none|
|parent_id|string|false|none|none|
|reference_number|string|false|none|none|
|settlement_amount|number|false|none|none|
|settlement_created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|settlement_currency|string|false|none|none|
|status|string|false|none|none|
|transaction_id|string|false|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|next|string|false|none|none|
|previous|string|false|none|none|

<h2 id="tocS_Plugin">Plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_Plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "active": true,
  "additional_fields": {},
  "custom_fields": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PluginList">PluginList</h2>
<!-- backwards compatibility -->
<a id="schemapluginlist"></a>
<a id="schema_PluginList"></a>
<a id="tocSpluginlist"></a>
<a id="tocspluginlist"></a>

```json
{
  "additional_fields": {},
  "all_plugins": 0,
  "custom_fields": {},
  "plugins": [
    {
      "active": true,
      "additional_fields": {},
      "custom_fields": {},
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|all_plugins|integer|false|none|none|
|custom_fields|object|false|none|none|
|plugins|[[Plugin](#schemaplugin)]|false|none|none|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "additional_fields": {},
  "advanced_price": [
    {
      "additional_fields": {},
      "avail": true,
      "custom_fields": {},
      "expire_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "group_id": "string",
      "id": "string",
      "quantity_from": 0,
      "start_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "value": 0
    }
  ],
  "avail_sale": true,
  "avail_view": true,
  "backorders": "string",
  "categories_ids": [
    "string"
  ],
  "cost_price": 0,
  "create_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "description": "string",
  "dimensions_unit": "string",
  "group_items": [
    {
      "additional_fields": {},
      "child_item_id": "string",
      "custom_fields": {},
      "default_qty_in_pack": "string",
      "is_qty_in_pack_fixed": true,
      "product_id": "string"
    }
  ],
  "group_price": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "expire_time": "string",
      "group_id": "string",
      "id": "string",
      "price": 0,
      "quantity": 0,
      "start_time": "string",
      "store_id": "string"
    }
  ],
  "height": 0,
  "id": "string",
  "images": [
    {
      "additional_fields": {},
      "alt": "string",
      "avail": true,
      "create_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "file_name": "string",
      "http_path": "string",
      "id": "string",
      "mime-type": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "size": 0,
      "sort_order": 0,
      "type": "string"
    }
  ],
  "inventory": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "in_stock": true,
      "priority": 0,
      "quantity": 0,
      "warehouse_id": "string"
    }
  ],
  "is_downloadable": true,
  "is_stock_managed": true,
  "is_virtual": true,
  "length": 0,
  "manage_stock": "string",
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "name": "string",
  "price": 0,
  "product_options": [
    {
      "additional_fields": {},
      "available": true,
      "custom_fields": {},
      "description": "string",
      "id": "string",
      "name": "string",
      "option_items": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "name": "string",
          "price": "string",
          "product_option_item_id": "string",
          "quantity": 0,
          "sku": "string",
          "sort_order": 0,
          "type_price": "string",
          "weight": "string"
        }
      ],
      "product_option_id": "string",
      "required": true,
      "sort_order": 0,
      "type": "string",
      "used_in_combination": true
    }
  ],
  "quantity": 0,
  "related_products_ids": [
    "string"
  ],
  "seo_url": "string",
  "short_description": "string",
  "sort_order": 0,
  "special_price": {
    "additional_fields": {},
    "avail": true,
    "created_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "custom_fields": {},
    "expired_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "modified_at": {
      "additional_fields": {},
      "custom_fields": {},
      "format": "string",
      "value": "string"
    },
    "value": 0
  },
  "stores_ids": [
    "string"
  ],
  "tax_class_id": "string",
  "tier_price": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "price": 0,
      "qty": 0
    }
  ],
  "type": "string",
  "u_brand": "string",
  "u_brand_id": "string",
  "u_model": "string",
  "u_mpn": "string",
  "u_sku": "string",
  "u_upc": "string",
  "url": "string",
  "weight": 0,
  "weight_unit": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|advanced_price|[[Product_AdvancedPrice](#schemaproduct_advancedprice)]|false|none|none|
|avail_sale|boolean|false|none|none|
|avail_view|boolean|false|none|none|
|backorders|string|false|none|none|
|categories_ids|[string]|false|none|none|
|cost_price|number|false|none|none|
|create_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|dimensions_unit|string|false|none|none|
|group_items|[[Product_GroupItem](#schemaproduct_groupitem)]|false|none|none|
|group_price|[[Product_GroupPrice](#schemaproduct_groupprice)]|false|none|none|
|height|number|false|none|none|
|id|string|false|none|none|
|images|[[Image](#schemaimage)]|false|none|none|
|inventory|[[Product_Inventory](#schemaproduct_inventory)]|false|none|none|
|is_downloadable|boolean|false|none|none|
|is_stock_managed|boolean|false|none|none|
|is_virtual|boolean|false|none|none|
|length|number|false|none|none|
|manage_stock|string|false|none|none|
|meta_description|string|false|none|none|
|meta_keywords|string|false|none|none|
|meta_title|string|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|name|string|false|none|none|
|price|number|false|none|none|
|product_options|[[Product_Option](#schemaproduct_option)]|false|none|none|
|quantity|number|false|none|none|
|related_products_ids|[string]|false|none|none|
|seo_url|string|false|none|none|
|short_description|string|false|none|none|
|sort_order|integer|false|none|none|
|special_price|[SpecialPrice](#schemaspecialprice)|false|none|none|
|stores_ids|[string]|false|none|none|
|tax_class_id|string|false|none|none|
|tier_price|[[Product_TierPrice](#schemaproduct_tierprice)]|false|none|none|
|type|string|false|none|none|
|u_brand|string|false|none|none|
|u_brand_id|string|false|none|none|
|u_model|string|false|none|none|
|u_mpn|string|false|none|none|
|u_sku|string|false|none|none|
|u_upc|string|false|none|none|
|url|string|false|none|none|
|weight|number|false|none|none|
|weight_unit|string|false|none|none|
|width|number|false|none|none|

<h2 id="tocS_ProductAdd">ProductAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproductadd"></a>
<a id="schema_ProductAdd"></a>
<a id="tocSproductadd"></a>
<a id="tocsproductadd"></a>

```json
{
  "attribute_name": "string",
  "attribute_set_name": "Default",
  "avail_from": "string",
  "available_for_sale": true,
  "available_for_view": true,
  "backorder_status": "string",
  "barcode": "string",
  "best_offer": [
    "string"
  ],
  "brand_name": "string",
  "categories_ids": "string",
  "category_id": "string",
  "clear_cache": true,
  "condition": "string",
  "cost_price": 0,
  "country_of_origin": "string",
  "created_at": "string",
  "description": "string",
  "downloadable": false,
  "ean": "string",
  "files": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "group_prices": [
    {
      "group_id": "string",
      "price": 0
    }
  ],
  "gtin": "string",
  "harmonized_system_code": "string",
  "height": 0,
  "image_name": "string",
  "image_url": "string",
  "isbn": "string",
  "lang_id": "string",
  "length": 0,
  "listing_duration": "string",
  "listing_type": "FixedPrice",
  "manage_stock": true,
  "manufacturer": "string",
  "marketplace_item_properties": false,
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "model": "string",
  "mpn": "string",
  "name": "string",
  "old_price": 0,
  "ordered_count": 0,
  "package_details": [
    "string"
  ],
  "payment_methods": [
    "string"
  ],
  "paypal_email": "string",
  "price": 0,
  "product_class": "string",
  "quantity": 0,
  "return_accepted": true,
  "sales_tax": [
    "string"
  ],
  "search_keywords": "string",
  "seller_profiles": {
    "payment_profile_id": "string",
    "return_profile_id": "string",
    "shipping_profile_id": "string"
  },
  "seo_url": "string",
  "shipping_details": [
    {
      "shipping_cost": 0,
      "shipping_service": "string",
      "shipping_type": "string"
    }
  ],
  "shipping_template_id": 0,
  "short_description": "string",
  "sku": "string",
  "special_price": 0,
  "specifics": [
    "string"
  ],
  "sprice_create": "string",
  "sprice_expire": "string",
  "sprice_modified": "string",
  "status": "string",
  "store_id": "string",
  "stores_ids": 0,
  "tags": "string",
  "tax_class_id": 0,
  "taxable": true,
  "tier_prices": [
    {
      "price": 0,
      "quantity": 0
    }
  ],
  "type": "simple",
  "upc": "string",
  "url": "string",
  "viewed_count": 0,
  "visible": "string",
  "warehouse_id": "string",
  "weight": 0,
  "weight_unit": "string",
  "wholesale_price": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_name|string|false|none|Defines product’s attribute name separated with a comma in Magento|
|attribute_set_name|string|false|none|Defines product’s attribute set name in Magento|
|avail_from|string|false|none|Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time.|
|available_for_sale|boolean|false|none|Specifies the set of visible/invisible products for sale|
|available_for_view|boolean|false|none|Specifies the set of visible/invisible products for users|
|backorder_status|string|false|none|Set backorder status|
|barcode|string|false|none|A barcode is a unique code composed of numbers used as a product identifier.|
|best_offer|[string]|false|none|The price at which Best Offers are automatically accepted.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">best_offer[<b>minimum_offer_price</b>] = decimal</br>best_offer[<b>auto_accept_price</b>] = decimal</br></code></div></div>|
|brand_name|string|false|none|Retrieves brands specified by brand name|
|categories_ids|string|false|none|Defines product add that is specified by comma-separated categories id|
|category_id|string|false|none|Defines product add that is specified by category id|
|clear_cache|boolean|false|none|Is cache clear required|
|condition|string|false|none|The human-readable label for the condition (e.g., "New").|
|cost_price|number|false|none|Defines new product's cost price|
|country_of_origin|string|false|none|The country where the inventory item was made|
|created_at|string|false|none|Defines the date of entity creation|
|description|string|true|none|Defines product's description that has to be added|
|downloadable|boolean|false|none|Defines whether the product is downloadable|
|ean|string|false|none|European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.|
|files|[object]|false|none|File Url|
|group_prices|[object]|false|none|Defines product's group prices|
|gtin|string|false|none|Global Trade Item Number. An GTIN is an identifier for trade items.|
|harmonized_system_code|string|false|none|Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes|
|height|number|false|none|Defines product's height|
|image_name|string|false|none|Defines image's name|
|image_url|string|false|none|Image Url|
|isbn|string|false|none|International Standard Book Number. An ISBN is a unique identifier for books.|
|lang_id|string|false|none|Language id|
|length|number|false|none|Defines product's length|
|listing_duration|string|false|none|Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values.|
|listing_type|string|false|none|Indicates the selling format of the marketplace listing.|
|manage_stock|boolean|false|none|Defines inventory tracking for product|
|manufacturer|string|false|none|Defines product's manufacturer|
|marketplace_item_properties|string|false|none|String containing the JSON representation of the supplied data|
|meta_description|string|false|none|Defines unique meta description of a entity|
|meta_keywords|string|false|none|Defines unique meta keywords for each entity|
|meta_title|string|false|none|Defines unique meta title for each entity|
|model|string|true|none|Defines product's model that has to be added|
|mpn|string|false|none|Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.|
|name|string|true|none|Defines product's name that has to be added|
|old_price|number|false|none|Defines product's old price|
|ordered_count|integer|false|none|Defines how many times the product was ordered|
|package_details|[string]|false|none|If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">package_details[<b>measure_unit</b>] = string</br> Allowed measure_unit values: [English or Metric] </br> Default: Metric</br>package_details[<b>weigh_unit</b>] = string</br> Allowed weigh_unit values: [kg, g, lbs, oz]</br>package_details[<b>package_depth</b>] = decimal</br>package_details[<b>package_length</b>] = decimal</br>package_details[<b>package_width</b>] = decimal</br>package_details[<b>weight_major</b>] = decimal</br>package_details[<b>weight_minor</b>] = decimal</br>package_details[<b>shipping_package</b>] = string</br> See cart.info method, param `eBay_shipping_package_details`</code></div></div>|
|payment_methods|[string]|false|none|Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">payment_methods[0] = string</br>payment_methods[1] = string</br></code></div></div>|
|paypal_email|string|false|none|Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing.|
|price|number|true|none|Defines product's price that has to be added|
|product_class|string|false|none|A categorization for the product|
|quantity|number|false|none|Defines product's quantity that has to be added|
|return_accepted|boolean|false|none|Indicates whether the seller allows the buyer to return the item.|
|sales_tax|[string]|false|none|Percent of an item's price to be charged as the sales tax for the order. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">sales_tax[<b>tax_percent</b>] = decimal (##.###)</br>sales_tax[<b>tax_state</b>] = string</br>sales_tax[<b>shipping_inc_in_tax</b>] = bool</br></code></div></div>|
|search_keywords|string|false|none|Defines unique search keywords|
|seller_profiles|object|false|none|If the seller is subscribed to "Business Policies", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">seller_profiles[<b>shipping_profile_id</b>] = integer</br>seller_profiles[<b>payment_profile_id</b>] = integer</br>seller_profiles[<b>return_profile_id</b>] = integer</br></code></div></div>|
|seo_url|string|false|none|Defines unique URL for SEO|
|shipping_details|[object]|false|none|The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.<hr><div style="font-style:normal">Param structure:<div style="margin-left: 2%;"><code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;">shipping_details[0][<b>shipping_type</b>] = string </br>shipping_details[0][<b>shipping_service</b>] = string</br>shipping_details[0][<b>shipping_cost</b>] = decimal</br>shipping_details[1][<b>shipping_type</b>] = string </br>shipping_details[1][<b>shipping_service</b>] = string</br>shipping_details[1][<b>shipping_cost</b>] = decimal</br></code></div></div>|
|shipping_template_id|integer|false|none|The numeric ID of the shipping template associated with the products in Etsy.|
|short_description|string|false|none|Defines short description|
|sku|string|false|none|Defines product's sku that has to be added|
|special_price|number|false|none|Defines product's model that has to be added|
|specifics|[string]|false|none|An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.<br>        <hr><br>        <div style="font-style:normal">Param structure:<br>          <div style="margin-left: 2%;"><br>            <code style="padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;"><br>              specifics[int][<b>name</b>] = string</br><br>              specifics[int][<b>value</b>] = string</br><br>            </code><br>          </div><br>        </div>|
|sprice_create|string|false|none|Defines the date of special price creation|
|sprice_expire|string|false|none|Defines the term of special price offer duration|
|sprice_modified|string|false|none|Defines the date of special price modification|
|status|string|false|none|Defines product's status|
|store_id|string|false|none|Store Id|
|stores_ids|string|false|none|Assign product to the stores that is specified by comma-separated stores' id|
|tags|string|false|none|Product tags|
|tax_class_id|integer|false|none|Defines tax classes where entity has to be added|
|taxable|boolean|false|none|Specifies whether a tax is charged|
|tier_prices|[object]|false|none|Defines product's tier prices|
|type|string|false|none|Defines product's type|
|upc|string|false|none|Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.|
|url|string|false|none|Defines unique product's URL|
|viewed_count|integer|false|none|Specifies the number of product's reviews|
|visible|string|false|none|Set visibility status|
|warehouse_id|string|false|none|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|
|weight|number|false|none|Weight|
|weight_unit|string|false|none|Weight Unit|
|wholesale_price|number|false|none|Defines product's sale price|
|width|number|false|none|Defines product's width|

<h2 id="tocS_ProductImageAdd">ProductImageAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproductimageadd"></a>
<a id="schema_ProductImageAdd"></a>
<a id="tocSproductimageadd"></a>
<a id="tocsproductimageadd"></a>

```json
{
  "content": "string",
  "image_name": "string",
  "label": "string",
  "lang_id": "string",
  "mime": "string",
  "position": 0,
  "product_id": "string",
  "product_variant_id": 0,
  "store_id": "string",
  "type": "small",
  "url": "string",
  "variant_ids": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Content(body) encoded in base64 of image file|
|image_name|string|true|none|Defines image's name|
|label|string|false|none|Defines alternative text that has to be attached to the picture|
|lang_id|string|false|none|Add product image on specified language id|
|mime|string|false|none|Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.|
|position|integer|false|none|Defines image’s position in the list|
|product_id|string|false|none|Defines product id where the image should be added|
|product_variant_id|integer|false|none|Defines product's variants specified by variant id|
|store_id|string|false|none|Store Id|
|type|string|true|none|Defines image's types that are specified by comma-separated list|
|url|string|false|none|Defines URL of the image that has to be added|
|variant_ids|string|false|none|Defines product's variants ids|

#### Enumerated Values

|Property|Value|
|---|---|
|type|small|
|type|base|
|type|additional|
|type|thumbnail|

<h2 id="tocS_ProductPriceAdd">ProductPriceAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproductpriceadd"></a>
<a id="schema_ProductPriceAdd"></a>
<a id="tocSproductpriceadd"></a>
<a id="tocsproductpriceadd"></a>

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "price": 0
    }
  ],
  "product_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_prices|[object]|false|none|Defines product's group prices|
|product_id|string|false|none|Defines the product to which the price has to be added|

<h2 id="tocS_ProductPriceUpdate">ProductPriceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaproductpriceupdate"></a>
<a id="schema_ProductPriceUpdate"></a>
<a id="tocSproductpriceupdate"></a>
<a id="tocsproductpriceupdate"></a>

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "id": 0,
      "price": 0
    }
  ],
  "product_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_prices|[object]|false|none|Defines product's group prices|
|product_id|string|false|none|Defines the product where the price has to be updated|

<h2 id="tocS_ProductTaxAdd">ProductTaxAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproducttaxadd"></a>
<a id="schema_ProductTaxAdd"></a>
<a id="tocSproducttaxadd"></a>
<a id="tocsproducttaxadd"></a>

```json
{
  "name": "string",
  "product_id": "string",
  "tax_rates": [
    {
      "name": "string",
      "type": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Defines tax class name where tax has to be added|
|product_id|string|false|none|Defines products specified by product id|
|tax_rates|[object]|true|none|Defines tax rates of specified tax classes|

<h2 id="tocS_ProductVariantAdd">ProductVariantAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproductvariantadd"></a>
<a id="schema_ProductVariantAdd"></a>
<a id="tocSproductvariantadd"></a>
<a id="tocsproductvariantadd"></a>

```json
{
  "attributes": [
    {
      "attribute_name": "string",
      "attribute_price": 0,
      "attribute_value": "string"
    }
  ],
  "available_for_sale": true,
  "available_for_view": true,
  "barcode": "string",
  "clear_cache": true,
  "cost_price": 0,
  "country_of_origin": "string",
  "created_at": "string",
  "description": "string",
  "harmonized_system_code": "string",
  "height": 0,
  "lang_id": "string",
  "length": 0,
  "manage_stock": true,
  "manufacturer": "string",
  "meta_description": "string",
  "meta_keywords": "string",
  "meta_title": "string",
  "model": "string",
  "name": "string",
  "price": 0,
  "product_id": "string",
  "quantity": 0,
  "short_description": "string",
  "sku": "string",
  "special_price": 0,
  "sprice_create": "string",
  "sprice_expire": "string",
  "sprice_modified": "string",
  "store_id": "string",
  "tax_class_id": 0,
  "taxable": true,
  "url": "string",
  "warehouse_id": "string",
  "weight": 0,
  "weight_unit": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[object]|false|none|Defines variant's attributes list|
|available_for_sale|boolean|false|none|Specifies the set of visible/invisible product's variants for sale|
|available_for_view|boolean|false|none|Specifies the set of visible/invisible product's variants for users|
|barcode|string|false|none|A barcode is a unique code composed of numbers used as a product identifier.|
|clear_cache|boolean|false|none|Is cache clear required|
|cost_price|number|false|none|Defines new product's cost price|
|country_of_origin|string|false|none|The country where the inventory item was made|
|created_at|string|false|none|Defines the date of entity creation|
|description|string|false|none|Specifies variant's description|
|harmonized_system_code|string|false|none|Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes|
|height|number|false|none|Defines product's height|
|lang_id|string|false|none|Language id|
|length|number|false|none|Defines product's length|
|manage_stock|boolean|false|none|Defines inventory tracking for product variant|
|manufacturer|string|false|none|Specifies the product variant's manufacturer|
|meta_description|string|false|none|Defines unique meta description of a entity|
|meta_keywords|string|false|none|Defines unique meta keywords for each entity|
|meta_title|string|false|none|Defines unique meta title for each entity|
|model|string|true|none|Specifies variant's model that has to be added|
|name|string|false|none|Defines variant's name that has to be added|
|price|number|false|none|Defines new product's variant price|
|product_id|string|false|none|Defines product's id where the variant has to be added|
|quantity|number|false|none|Defines product variant's quantity that has to be added|
|short_description|string|false|none|Defines short description|
|sku|string|false|none|Defines variant's sku that has to be added|
|special_price|number|false|none|Specifies variant's model that has to be added|
|sprice_create|string|false|none|Defines the date of special price creation|
|sprice_expire|string|false|none|Defines the term of special price offer duration|
|sprice_modified|string|false|none|Defines the date of special price modification|
|store_id|string|false|none|Add variants specified by store id|
|tax_class_id|integer|false|none|Defines tax classes where entity has to be added|
|taxable|boolean|false|none|Specifies whether a tax is charged|
|url|string|false|none|Defines unique product variant's URL|
|warehouse_id|string|false|none|This parameter is used for selecting a warehouse where you need to set/modify a product quantity.|
|weight|number|false|none|Weight|
|weight_unit|string|false|none|Weight Unit|
|width|number|false|none|Defines product's width|

<h2 id="tocS_ProductVariantImageAdd">ProductVariantImageAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproductvariantimageadd"></a>
<a id="schema_ProductVariantImageAdd"></a>
<a id="tocSproductvariantimageadd"></a>
<a id="tocsproductvariantimageadd"></a>

```json
{
  "content": "string",
  "image_name": "string",
  "label": "string",
  "mime": "string",
  "option_id": "string",
  "position": 0,
  "product_id": "string",
  "product_variant_id": 0,
  "store_id": "string",
  "type": "base",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Content(body) encoded in base64 of image file|
|image_name|string|true|none|Defines image's name|
|label|string|false|none|Defines alternative text that has to be attached to the picture|
|mime|string|false|none|Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.|
|option_id|string|false|none|Defines option id of the product variant for which the image will be added|
|position|integer|false|none|Defines image’s position in the list|
|product_id|string|false|none|Defines product id where the variant image has to be added|
|product_variant_id|integer|true|none|Defines product's variants specified by variant id|
|store_id|string|false|none|Store Id|
|type|string|true|none|Defines image's types that are specified by comma-separated list|
|url|string|false|none|Defines URL of the image that has to be added|

#### Enumerated Values

|Property|Value|
|---|---|
|type|small|
|type|base|
|type|additional|
|type|thumbnail|

<h2 id="tocS_ProductVariantPriceAdd">ProductVariantPriceAdd</h2>
<!-- backwards compatibility -->
<a id="schemaproductvariantpriceadd"></a>
<a id="schema_ProductVariantPriceAdd"></a>
<a id="tocSproductvariantpriceadd"></a>
<a id="tocsproductvariantpriceadd"></a>

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "price": 0
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_prices|[object]|false|none|Defines variants's group prices|
|id|string|false|none|Defines the variant to which the price has to be added|

<h2 id="tocS_ProductVariantPriceUpdate">ProductVariantPriceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaproductvariantpriceupdate"></a>
<a id="schema_ProductVariantPriceUpdate"></a>
<a id="tocSproductvariantpriceupdate"></a>
<a id="tocsproductvariantpriceupdate"></a>

```json
{
  "group_prices": [
    {
      "group_id": "string",
      "id": 0,
      "price": 0
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_prices|[object]|false|none|Defines variants's group prices|
|id|string|false|none|Defines the variant where the price has to be updated|

<h2 id="tocS_Product_AdvancedPrice">Product_AdvancedPrice</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_advancedprice"></a>
<a id="schema_Product_AdvancedPrice"></a>
<a id="tocSproduct_advancedprice"></a>
<a id="tocsproduct_advancedprice"></a>

```json
{
  "additional_fields": {},
  "avail": true,
  "custom_fields": {},
  "expire_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "group_id": "string",
  "id": "string",
  "quantity_from": 0,
  "start_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|custom_fields|object|false|none|none|
|expire_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|group_id|string|false|none|none|
|id|string|false|none|none|
|quantity_from|number|false|none|none|
|start_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|value|number|false|none|none|

<h2 id="tocS_Product_Attribute">Product_Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_attribute"></a>
<a id="schema_Product_Attribute"></a>
<a id="tocSproduct_attribute"></a>
<a id="tocsproduct_attribute"></a>

```json
{
  "additional_fields": {},
  "attribute_group_id": "string",
  "attribute_id": "string",
  "code": "string",
  "custom_fields": {},
  "lang_id": "string",
  "name": "string",
  "position": 0,
  "product_id": "string",
  "required": true,
  "store_id": "string",
  "type": "string",
  "value": "string",
  "variant_id": "string",
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|attribute_group_id|string|false|none|none|
|attribute_id|string|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|lang_id|string|false|none|none|
|name|string|false|none|none|
|position|integer|false|none|none|
|product_id|string|false|none|none|
|required|boolean|false|none|none|
|store_id|string|false|none|none|
|type|string|false|none|none|
|value|string|false|none|none|
|variant_id|string|false|none|none|
|visible|boolean|false|none|none|

<h2 id="tocS_Product_ChildItem_Combination">Product_ChildItem_Combination</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_childitem_combination"></a>
<a id="schema_Product_ChildItem_Combination"></a>
<a id="tocSproduct_childitem_combination"></a>
<a id="tocsproduct_childitem_combination"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "option_id": "string",
  "option_value_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|option_id|string|false|none|none|
|option_value_id|string|false|none|none|

<h2 id="tocS_Product_GroupItem">Product_GroupItem</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_groupitem"></a>
<a id="schema_Product_GroupItem"></a>
<a id="tocSproduct_groupitem"></a>
<a id="tocsproduct_groupitem"></a>

```json
{
  "additional_fields": {},
  "child_item_id": "string",
  "custom_fields": {},
  "default_qty_in_pack": "string",
  "is_qty_in_pack_fixed": true,
  "product_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|child_item_id|string|false|none|none|
|custom_fields|object|false|none|none|
|default_qty_in_pack|string|false|none|none|
|is_qty_in_pack_fixed|boolean|false|none|none|
|product_id|string|false|none|none|

<h2 id="tocS_Product_GroupPrice">Product_GroupPrice</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_groupprice"></a>
<a id="schema_Product_GroupPrice"></a>
<a id="tocSproduct_groupprice"></a>
<a id="tocsproduct_groupprice"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "expire_time": "string",
  "group_id": "string",
  "id": "string",
  "price": 0,
  "quantity": 0,
  "start_time": "string",
  "store_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|expire_time|string|false|none|none|
|group_id|string|false|none|none|
|id|string|false|none|none|
|price|number|false|none|none|
|quantity|number|false|none|none|
|start_time|string|false|none|none|
|store_id|string|false|none|none|

<h2 id="tocS_Product_Inventory">Product_Inventory</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_inventory"></a>
<a id="schema_Product_Inventory"></a>
<a id="tocSproduct_inventory"></a>
<a id="tocsproduct_inventory"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "in_stock": true,
  "priority": 0,
  "quantity": 0,
  "warehouse_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|in_stock|boolean|false|none|none|
|priority|integer|false|none|none|
|quantity|number|false|none|none|
|warehouse_id|string|false|none|none|

<h2 id="tocS_Product_Option">Product_Option</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_option"></a>
<a id="schema_Product_Option"></a>
<a id="tocSproduct_option"></a>
<a id="tocsproduct_option"></a>

```json
{
  "additional_fields": {},
  "available": true,
  "custom_fields": {},
  "description": "string",
  "id": "string",
  "name": "string",
  "option_items": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "price": "string",
      "product_option_item_id": "string",
      "quantity": 0,
      "sku": "string",
      "sort_order": 0,
      "type_price": "string",
      "weight": "string"
    }
  ],
  "product_option_id": "string",
  "required": true,
  "sort_order": 0,
  "type": "string",
  "used_in_combination": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|available|boolean|false|none|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|option_items|[[Product_Option_Item](#schemaproduct_option_item)]|false|none|none|
|product_option_id|string|false|none|none|
|required|boolean|false|none|none|
|sort_order|integer|false|none|none|
|type|string|false|none|none|
|used_in_combination|boolean|false|none|none|

<h2 id="tocS_Product_Option_Item">Product_Option_Item</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_option_item"></a>
<a id="schema_Product_Option_Item"></a>
<a id="tocSproduct_option_item"></a>
<a id="tocsproduct_option_item"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "price": "string",
  "product_option_item_id": "string",
  "quantity": 0,
  "sku": "string",
  "sort_order": 0,
  "type_price": "string",
  "weight": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|price|string|false|none|none|
|product_option_item_id|string|false|none|none|
|quantity|integer|false|none|none|
|sku|string|false|none|none|
|sort_order|integer|false|none|none|
|type_price|string|false|none|none|
|weight|string|false|none|none|

<h2 id="tocS_Product_Review">Product_Review</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_review"></a>
<a id="schema_Product_Review"></a>
<a id="tocSproduct_review"></a>
<a id="tocsproduct_review"></a>

```json
{
  "additional_fields": {},
  "created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "customer_id": "string",
  "email": "string",
  "id": "string",
  "message": "string",
  "nick_name": "string",
  "product_id": "string",
  "rating": 0,
  "ratings": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "value": 0
    }
  ],
  "status": "string",
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|customer_id|string|false|none|none|
|email|string|false|none|none|
|id|string|false|none|none|
|message|string|false|none|none|
|nick_name|string|false|none|none|
|product_id|string|false|none|none|
|rating|number|false|none|none|
|ratings|[[Product_Review_Rating](#schemaproduct_review_rating)]|false|none|none|
|status|string|false|none|none|
|summary|string|false|none|none|

<h2 id="tocS_Product_Review_Rating">Product_Review_Rating</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_review_rating"></a>
<a id="schema_Product_Review_Rating"></a>
<a id="tocSproduct_review_rating"></a>
<a id="tocsproduct_review_rating"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|value|integer|false|none|none|

<h2 id="tocS_Product_TierPrice">Product_TierPrice</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_tierprice"></a>
<a id="schema_Product_TierPrice"></a>
<a id="tocSproduct_tierprice"></a>
<a id="tocsproduct_tierprice"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "price": 0,
  "qty": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|price|number|false|none|none|
|qty|number|false|none|none|

<h2 id="tocS_Response_Attribute_List_Result">Response_Attribute_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_attribute_list_result"></a>
<a id="schema_Response_Attribute_List_Result"></a>
<a id="tocSresponse_attribute_list_result"></a>
<a id="tocsresponse_attribute_list_result"></a>

```json
{
  "additional_fields": {},
  "attribute": [
    {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "default_values": [
        "string"
      ],
      "id": "string",
      "lang_id": "string",
      "name": "string",
      "position": 0,
      "required": true,
      "store_id": "string",
      "system": true,
      "type": "string",
      "values": [
        "string"
      ],
      "visible": true
    }
  ],
  "attributes_count": 0,
  "custom_fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|attribute|[[StoreAttribute](#schemastoreattribute)]|false|none|none|
|attributes_count|integer|false|none|none|
|custom_fields|object|false|none|none|

<h2 id="tocS_Response_Cart_CatalogPriceRules_List_Result">Response_Cart_CatalogPriceRules_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_cart_catalogpricerules_list_result"></a>
<a id="schema_Response_Cart_CatalogPriceRules_List_Result"></a>
<a id="tocSresponse_cart_catalogpricerules_list_result"></a>
<a id="tocsresponse_cart_catalogpricerules_list_result"></a>

```json
{
  "additional_fields": {},
  "catalog_price_rules": [
    {
      "actions": [
        {
          "additional_fields": {},
          "apply_to": "string",
          "conditions": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "entity": "string",
              "id": "string",
              "key": "string",
              "logic_operator": "string",
              "match_items": "string",
              "operator": "string",
              "sub-conditions": [
                {}
              ],
              "value": "string"
            }
          ],
          "currency_code": "string",
          "custom_fields": {},
          "include_tax": true,
          "quantity": 0,
          "scope": "string",
          "type": "string",
          "value": 0
        }
      ],
      "additional_fields": {},
      "avail": true,
      "conditions": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "entity": "string",
          "id": "string",
          "key": "string",
          "logic_operator": "string",
          "match_items": "string",
          "operator": "string",
          "sub-conditions": [
            {}
          ],
          "value": "string"
        }
      ],
      "created_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "date_end": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "date_start": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "description": "string",
      "gid": "string",
      "id": "string",
      "name": "string",
      "short_description": "string",
      "type": "string",
      "usage_count": 0,
      "uses_per_order_limit": 0
    }
  ],
  "catalog_price_rules_count": 0,
  "custom_fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|catalog_price_rules|[[CatalogPriceRule](#schemacatalogpricerule)]|false|none|none|
|catalog_price_rules_count|integer|false|none|none|
|custom_fields|object|false|none|none|

<h2 id="tocS_Response_Cart_Coupon_List_Result">Response_Cart_Coupon_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_cart_coupon_list_result"></a>
<a id="schema_Response_Cart_Coupon_List_Result"></a>
<a id="tocSresponse_cart_coupon_list_result"></a>
<a id="tocsresponse_cart_coupon_list_result"></a>

```json
{
  "additional_fields": {},
  "coupon": [
    {
      "actions": [
        {
          "additional_fields": {},
          "amount": 0,
          "apply_to": "string",
          "conditions": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "entity": "string",
              "id": "string",
              "key": "string",
              "logic_operator": "string",
              "match_items": "string",
              "operator": "string",
              "sub-conditions": [
                {}
              ],
              "value": "string"
            }
          ],
          "currency_code": "string",
          "custom_fields": {},
          "discount_quantity_step": 0,
          "discounted_quantity": 0,
          "include_tax": true,
          "logic_operator": "string",
          "scope": "string",
          "type": "string"
        }
      ],
      "additional_fields": {},
      "avail": true,
      "code": "string",
      "codes": [
        {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "id": "string",
          "used_times": 0
        }
      ],
      "conditions": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "entity": "string",
          "id": "string",
          "key": "string",
          "logic_operator": "string",
          "match_items": "string",
          "operator": "string",
          "sub-conditions": [
            {}
          ],
          "value": "string"
        }
      ],
      "custom_fields": {},
      "date_end": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "date_start": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "description": "string",
      "id": "string",
      "logic_operator": "string",
      "name": "string",
      "priority": 0,
      "usage_history": [
        {
          "additional_fields": {},
          "amount": 0,
          "custom_fields": {},
          "order_id": "string"
        }
      ],
      "usage_limit": 0,
      "usage_limit_per_customer": 0,
      "used_times": 0
    }
  ],
  "coupon_count": 0,
  "custom_fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|coupon|[[Coupon](#schemacoupon)]|false|none|none|
|coupon_count|integer|false|none|none|
|custom_fields|object|false|none|none|

<h2 id="tocS_Response_Cart_Giftcard_List_Result">Response_Cart_Giftcard_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_cart_giftcard_list_result"></a>
<a id="schema_Response_Cart_Giftcard_List_Result"></a>
<a id="tocSresponse_cart_giftcard_list_result"></a>
<a id="tocsresponse_cart_giftcard_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "gift_card": [
    {
      "additional_fields": {},
      "amount": 0,
      "avail_to": "string",
      "code": "string",
      "created_at": "string",
      "currency_code": "string",
      "custom_fields": {},
      "free_product_ids": "string",
      "id": "string",
      "initial_amount": 0,
      "issuer_email": "string",
      "issuer_name": "string",
      "message": "string",
      "name": "string",
      "recipient_email": "string",
      "recipient_name": "string",
      "status": "string",
      "type": "string",
      "usage_history": [
        {
          "additional_fields": {},
          "amount": 0,
          "custom_fields": {},
          "order_id": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|gift_card|[[GiftCard](#schemagiftcard)]|false|none|none|

<h2 id="tocS_Response_Cart_MetaData_List_Result">Response_Cart_MetaData_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_cart_metadata_list_result"></a>
<a id="schema_Response_Cart_MetaData_List_Result"></a>
<a id="tocSresponse_cart_metadata_list_result"></a>
<a id="tocsresponse_cart_metadata_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "items": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "key": "string",
      "namespace": "string",
      "value": "string"
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|items|[[Cart_MetaData](#schemacart_metadata)]|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_Response_Cart_Script_List_Result">Response_Cart_Script_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_cart_script_list_result"></a>
<a id="schema_Response_Cart_Script_List_Result"></a>
<a id="tocSresponse_cart_script_list_result"></a>
<a id="tocsresponse_cart_script_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "scripts": [
    {
      "additional_fields": {},
      "created_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "description": "string",
      "event": "string",
      "html": "string",
      "id": "string",
      "load_method": "string",
      "modified_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "name": "string",
      "scope": "string",
      "src": "string"
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|scripts|[[Script](#schemascript)]|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_Response_Category_List_Result">Response_Category_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_category_list_result"></a>
<a id="schema_Response_Category_List_Result"></a>
<a id="tocSresponse_category_list_result"></a>
<a id="tocsresponse_category_list_result"></a>

```json
{
  "additional_fields": {},
  "categories_count": 0,
  "category": [
    {
      "additional_fields": {},
      "avail": true,
      "created_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "description": "string",
      "id": "string",
      "images": [
        {
          "additional_fields": {},
          "alt": "string",
          "avail": true,
          "create_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "custom_fields": {},
          "file_name": "string",
          "http_path": "string",
          "id": "string",
          "mime-type": "string",
          "modified_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "size": 0,
          "sort_order": 0,
          "type": "string"
        }
      ],
      "keywords": "string",
      "meta_description": "string",
      "meta_title": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "name": "string",
      "parent_id": "string",
      "path": "string",
      "seo_url": "string",
      "short_description": "string",
      "sort_order": 0,
      "stores_ids": [
        "string"
      ]
    }
  ],
  "custom_fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|categories_count|integer|false|none|none|
|category|[[Category](#schemacategory)]|false|none|none|
|custom_fields|object|false|none|none|

<h2 id="tocS_Response_Customer_Attribute_List_Result">Response_Customer_Attribute_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_customer_attribute_list_result"></a>
<a id="schema_Response_Customer_Attribute_List_Result"></a>
<a id="tocSresponse_customer_attribute_list_result"></a>
<a id="tocsresponse_customer_attribute_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "items": [
    {
      "additional_fields": {},
      "attribute_id": "string",
      "code": "string",
      "custom_fields": {},
      "name": "string",
      "type": "string",
      "values": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "value": "string"
        }
      ]
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|items|[[Customer_Attribute](#schemacustomer_attribute)]|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_Response_Customer_Group_List_Result">Response_Customer_Group_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_customer_group_list_result"></a>
<a id="schema_Response_Customer_Group_List_Result"></a>
<a id="tocSresponse_customer_group_list_result"></a>
<a id="tocsresponse_customer_group_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "group": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "id": "string",
      "name": "string"
    }
  ],
  "group_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|group|[[Customer_Group](#schemacustomer_group)]|false|none|none|
|group_count|integer|false|none|none|

<h2 id="tocS_Response_Customer_List_Result">Response_Customer_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_customer_list_result"></a>
<a id="schema_Response_Customer_List_Result"></a>
<a id="tocSresponse_customer_list_result"></a>
<a id="tocsresponse_customer_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "customer": [
    {
      "additional_fields": {},
      "address_book": [
        {
          "additional_fields": {},
          "address1": "string",
          "address2": "string",
          "city": "string",
          "company": "string",
          "country": {
            "additional_fields": {},
            "code2": "string",
            "code3": "string",
            "custom_fields": {},
            "name": "string"
          },
          "custom_fields": {},
          "default": true,
          "fax": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "phone": "string",
          "postcode": "string",
          "region": "string",
          "state": {
            "additional_fields": {},
            "code": "string",
            "custom_fields": {},
            "name": "string"
          },
          "type": "string",
          "website": "string"
        }
      ],
      "birth_day": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "company": "string",
      "created_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "email": "string",
      "fax": "string",
      "first_name": "string",
      "gender": "string",
      "group": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "id": "string",
          "name": "string"
        }
      ],
      "id": "string",
      "ip_address": "string",
      "last_login": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "last_name": "string",
      "last_order_id": "string",
      "login": "string",
      "modified_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "news_letter_subscription": true,
      "orders_count": 0,
      "phone": "string",
      "status": "string",
      "stores_ids": [
        "string"
      ],
      "website": "string"
    }
  ],
  "customers_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|customer|[[Customer](#schemacustomer)]|false|none|none|
|customers_count|integer|false|none|none|

<h2 id="tocS_Response_Order_Abandoned_List_Result">Response_Order_Abandoned_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_order_abandoned_list_result"></a>
<a id="schema_Response_Order_Abandoned_List_Result"></a>
<a id="tocSresponse_order_abandoned_list_result"></a>
<a id="tocsresponse_order_abandoned_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "order": [
    {
      "additional_fields": {},
      "basket_id": "string",
      "basket_url": "string",
      "created_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "currency": {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "default": true,
        "id": "string",
        "iso3": "string",
        "name": "string",
        "rate": 0,
        "symbol_left": "string",
        "symbol_right": "string"
      },
      "custom_fields": {},
      "customer": {
        "additional_fields": {},
        "custom_fields": {},
        "email": "string",
        "first_name": "string",
        "id": "string",
        "last_name": "string",
        "phone": "string"
      },
      "id": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "order_products": [
        {
          "additional_fields": {},
          "barcode": "string",
          "custom_fields": {},
          "discount_amount": 0,
          "model": "string",
          "name": "string",
          "options": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "name": "string",
              "option_id": "string",
              "price": 0,
              "product_option_value_id": "string",
              "type": "string",
              "value": "string",
              "weight": 0
            }
          ],
          "order_product_id": "string",
          "parent_order_product_id": "string",
          "price": 0,
          "price_inc_tax": 0,
          "product_id": "string",
          "quantity": 0,
          "tax_percent": 0,
          "tax_value": 0,
          "tax_value_after_discount": 0,
          "total_price": 0,
          "variant_id": "string",
          "weight": 0,
          "weight_unit": "string"
        }
      ],
      "totals": {
        "additional_fields": {},
        "custom_fields": {},
        "discount": 0,
        "shipping": 0,
        "subtotal": 0,
        "tax": 0,
        "total": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|order|[[OrderAbandoned](#schemaorderabandoned)]|false|none|none|

<h2 id="tocS_Response_Order_List_Result">Response_Order_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_order_list_result"></a>
<a id="schema_Response_Order_List_Result"></a>
<a id="tocSresponse_order_list_result"></a>
<a id="tocsresponse_order_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "order": [
    {
      "additional_fields": {},
      "basket_id": "string",
      "billing_address": {
        "additional_fields": {},
        "address1": "string",
        "address2": "string",
        "city": "string",
        "company": "string",
        "country": {
          "additional_fields": {},
          "code2": "string",
          "code3": "string",
          "custom_fields": {},
          "name": "string"
        },
        "custom_fields": {},
        "default": true,
        "fax": "string",
        "first_name": "string",
        "gender": "string",
        "id": "string",
        "last_name": "string",
        "phone": "string",
        "postcode": "string",
        "region": "string",
        "state": {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "name": "string"
        },
        "type": "string",
        "website": "string"
      },
      "bundles": [
        {
          "additional_fields": {},
          "barcode": "string",
          "custom_fields": {},
          "discount_amount": 0,
          "model": "string",
          "name": "string",
          "options": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "name": "string",
              "option_id": "string",
              "price": 0,
              "product_option_value_id": "string",
              "type": "string",
              "value": "string",
              "weight": 0
            }
          ],
          "order_product_id": "string",
          "parent_order_product_id": "string",
          "price": 0,
          "price_inc_tax": 0,
          "product_id": "string",
          "quantity": 0,
          "tax_percent": 0,
          "tax_value": 0,
          "tax_value_after_discount": 0,
          "total_price": 0,
          "variant_id": "string",
          "weight": 0,
          "weight_unit": "string"
        }
      ],
      "channel_id": "string",
      "comment": "string",
      "create_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "currency": {
        "additional_fields": {},
        "avail": true,
        "custom_fields": {},
        "default": true,
        "id": "string",
        "iso3": "string",
        "name": "string",
        "rate": 0,
        "symbol_left": "string",
        "symbol_right": "string"
      },
      "custom_fields": {},
      "customer": {
        "additional_fields": {},
        "custom_fields": {},
        "email": "string",
        "first_name": "string",
        "id": "string",
        "last_name": "string",
        "phone": "string"
      },
      "discounts": [
        {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "type": "string",
          "value": 0
        }
      ],
      "finished_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "gift_message": "string",
      "id": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "order_details_url": "string",
      "order_id": "string",
      "order_products": [
        {
          "additional_fields": {},
          "barcode": "string",
          "custom_fields": {},
          "discount_amount": 0,
          "model": "string",
          "name": "string",
          "options": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "name": "string",
              "option_id": "string",
              "price": 0,
              "product_option_value_id": "string",
              "type": "string",
              "value": "string",
              "weight": 0
            }
          ],
          "order_product_id": "string",
          "parent_order_product_id": "string",
          "price": 0,
          "price_inc_tax": 0,
          "product_id": "string",
          "quantity": 0,
          "tax_percent": 0,
          "tax_value": 0,
          "tax_value_after_discount": 0,
          "total_price": 0,
          "variant_id": "string",
          "weight": 0,
          "weight_unit": "string"
        }
      ],
      "payment_method": {
        "additional_fields": {},
        "custom_fields": {},
        "name": "string"
      },
      "refunds": [
        {
          "additional_fields": {},
          "comment": "string",
          "custom_fields": {},
          "fee": 0,
          "id": "string",
          "items": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "order_product_id": "string",
              "product_id": "string",
              "qty": 0,
              "refund": 0,
              "variant_id": "string"
            }
          ],
          "modified_time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "shipping": 0,
          "tax": 0,
          "total": 0
        }
      ],
      "shipping_address": {
        "additional_fields": {},
        "address1": "string",
        "address2": "string",
        "city": "string",
        "company": "string",
        "country": {
          "additional_fields": {},
          "code2": "string",
          "code3": "string",
          "custom_fields": {},
          "name": "string"
        },
        "custom_fields": {},
        "default": true,
        "fax": "string",
        "first_name": "string",
        "gender": "string",
        "id": "string",
        "last_name": "string",
        "phone": "string",
        "postcode": "string",
        "region": "string",
        "state": {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "name": "string"
        },
        "type": "string",
        "website": "string"
      },
      "shipping_method": {
        "additional_fields": {},
        "custom_fields": {},
        "name": "string"
      },
      "shipping_methods": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "name": "string"
        }
      ],
      "status": {
        "additional_fields": {},
        "custom_fields": {},
        "history": [
          {
            "additional_fields": {},
            "comment": "string",
            "custom_fields": {},
            "id": "string",
            "modified_time": {
              "additional_fields": {},
              "custom_fields": {},
              "format": "string",
              "value": "string"
            },
            "name": "string",
            "notify": true
          }
        ],
        "id": "string",
        "name": "string",
        "refund_info": {
          "additional_fields": {},
          "comment": "string",
          "custom_fields": {},
          "fee": 0,
          "refunded_items": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "order_product_id": "string",
              "product_id": "string",
              "qty": 0,
              "refund": 0,
              "variant_id": "string"
            }
          ],
          "shipping": 0,
          "tax": 0,
          "time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "total_refunded": 0
        }
      },
      "store_id": "string",
      "total": {
        "additional_fields": {},
        "custom_fields": {},
        "shipping_ex_tax": 0,
        "subtotal_ex_tax": 0,
        "total": 0,
        "total_discount": 0,
        "total_paid": 0,
        "total_tax": 0,
        "wrapping_ex_tax": 0
      },
      "totals": {
        "additional_fields": {},
        "custom_fields": {},
        "discount": 0,
        "shipping": 0,
        "subtotal": 0,
        "tax": 0,
        "total": 0
      },
      "warehouses_ids": [
        "string"
      ]
    }
  ],
  "orders_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|order|[[Order](#schemaorder)]|false|none|none|
|orders_count|integer|false|none|none|

<h2 id="tocS_Response_Order_PreestimateShipping_List_Result">Response_Order_PreestimateShipping_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_order_preestimateshipping_list_result"></a>
<a id="schema_Response_Order_PreestimateShipping_List_Result"></a>
<a id="tocSresponse_order_preestimateshipping_list_result"></a>
<a id="tocsresponse_order_preestimateshipping_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "preestimate_shippings": [
    {
      "additional_fields": {},
      "carrier_code": "string",
      "carrier_name": "string",
      "custom_fields": {},
      "delivery_time": "string",
      "description": "string",
      "method_code": "string",
      "method_name": "string",
      "price": 0,
      "price_inc_tax": 0
    }
  ],
  "preestimate_shippings_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|preestimate_shippings|[[Order_PreestimateShipping](#schemaorder_preestimateshipping)]|false|none|none|
|preestimate_shippings_count|integer|false|none|none|

<h2 id="tocS_Response_Order_Shipment_List_Result">Response_Order_Shipment_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_order_shipment_list_result"></a>
<a id="schema_Response_Order_Shipment_List_Result"></a>
<a id="tocSresponse_order_shipment_list_result"></a>
<a id="tocsresponse_order_shipment_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "shipment": [
    {
      "additional_fields": {},
      "created_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "id": "string",
      "is_shipped": true,
      "items": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "model": "string",
          "name": "string",
          "order_product_id": "string",
          "price": 0,
          "product_id": "string",
          "quantity": 0,
          "variant_id": "string"
        }
      ],
      "modified_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "order_id": "string",
      "shipment_provider": "string",
      "tracking_numbers": [
        {
          "additional_fields": {},
          "carrier_id": "string",
          "custom_fields": {},
          "tracking_number": "string"
        }
      ],
      "warehouse_id": "string"
    }
  ],
  "shipment_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|shipment|[[Shipment](#schemashipment)]|false|none|none|
|shipment_count|integer|false|none|none|

<h2 id="tocS_Response_Order_Transaction_List_Result">Response_Order_Transaction_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_order_transaction_list_result"></a>
<a id="schema_Response_Order_Transaction_List_Result"></a>
<a id="tocSresponse_order_transaction_list_result"></a>
<a id="tocsresponse_order_transaction_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "transactions": [
    {
      "additional_fields": {},
      "amount": 0,
      "avs_message": "string",
      "avs_postal_resp_code": "string",
      "avs_street_resp_code": "string",
      "card_bin": "string",
      "card_brand": "string",
      "card_last_four": "string",
      "created_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "currency": "string",
      "custom_fields": {},
      "cvv_code": "string",
      "cvv_message": "string",
      "description": "string",
      "gateway": "string",
      "id": "string",
      "is_test_mode": true,
      "order_id": "string",
      "parent_id": "string",
      "reference_number": "string",
      "settlement_amount": 0,
      "settlement_created_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "settlement_currency": "string",
      "status": "string",
      "transaction_id": "string"
    }
  ],
  "transactions_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|transactions|[[Order_Transaction](#schemaorder_transaction)]|false|none|none|
|transactions_count|integer|false|none|none|

<h2 id="tocS_Response_Product_Attribute_List_Result">Response_Product_Attribute_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_product_attribute_list_result"></a>
<a id="schema_Response_Product_Attribute_List_Result"></a>
<a id="tocSresponse_product_attribute_list_result"></a>
<a id="tocsresponse_product_attribute_list_result"></a>

```json
{
  "additional_fields": {},
  "attribute": [
    {
      "additional_fields": {},
      "attribute_group_id": "string",
      "attribute_id": "string",
      "code": "string",
      "custom_fields": {},
      "lang_id": "string",
      "name": "string",
      "position": 0,
      "product_id": "string",
      "required": true,
      "store_id": "string",
      "type": "string",
      "value": "string",
      "variant_id": "string",
      "visible": true
    }
  ],
  "custom_fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|attribute|[[Product_Attribute](#schemaproduct_attribute)]|false|none|none|
|custom_fields|object|false|none|none|

<h2 id="tocS_Response_Product_ChildItem_List_Result">Response_Product_ChildItem_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_product_childitem_list_result"></a>
<a id="schema_Response_Product_ChildItem_List_Result"></a>
<a id="tocSresponse_product_childitem_list_result"></a>
<a id="tocsresponse_product_childitem_list_result"></a>

```json
{
  "additional_fields": {},
  "children": [
    {
      "additional_fields": {},
      "advanced_price": [
        {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "expire_time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "group_id": "string",
          "id": "string",
          "quantity_from": 0,
          "start_time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "value": 0
        }
      ],
      "allow_backorders": true,
      "avail_for_sale": true,
      "combination": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "option_id": "string",
          "option_value_id": "string"
        }
      ],
      "cost_price": 0,
      "created_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "default_price": 0,
      "default_qty_in_pack": 0,
      "dimensions_unit": "string",
      "ean": "string",
      "full_description": "string",
      "gtin": "string",
      "height": 0,
      "id": "string",
      "images": [
        {
          "additional_fields": {},
          "alt": "string",
          "avail": true,
          "create_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "custom_fields": {},
          "file_name": "string",
          "http_path": "string",
          "id": "string",
          "mime-type": "string",
          "modified_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "size": 0,
          "sort_order": 0,
          "type": "string"
        }
      ],
      "in_stock": true,
      "inventory": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "in_stock": true,
          "priority": 0,
          "quantity": 0,
          "warehouse_id": "string"
        }
      ],
      "inventory_level": 0,
      "is_qty_in_pack_fixed": true,
      "isbn": "string",
      "length": 0,
      "list_price": 0,
      "manage_stock": true,
      "meta_description": "string",
      "meta_keywords": "string",
      "meta_title": "string",
      "min_quantity": 0,
      "modified_time": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "mpn": "string",
      "name": "string",
      "parent_id": "string",
      "short_description": "string",
      "sku": "string",
      "sort_order": 0,
      "tax_class_id": "string",
      "upc": "string",
      "weight": 0,
      "weight_unit": "string",
      "wholesale_price": 0,
      "width": 0
    }
  ],
  "custom_fields": {},
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|children|[[Child](#schemachild)]|false|none|none|
|custom_fields|object|false|none|none|
|total_count|integer|false|none|none|

<h2 id="tocS_Response_Product_List_Result">Response_Product_List_Result</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_product_list_result"></a>
<a id="schema_Response_Product_List_Result"></a>
<a id="tocSresponse_product_list_result"></a>
<a id="tocsresponse_product_list_result"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "product": [
    {
      "additional_fields": {},
      "advanced_price": [
        {
          "additional_fields": {},
          "avail": true,
          "custom_fields": {},
          "expire_time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "group_id": "string",
          "id": "string",
          "quantity_from": 0,
          "start_time": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "value": 0
        }
      ],
      "avail_sale": true,
      "avail_view": true,
      "backorders": "string",
      "categories_ids": [
        "string"
      ],
      "cost_price": 0,
      "create_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "custom_fields": {},
      "description": "string",
      "dimensions_unit": "string",
      "group_items": [
        {
          "additional_fields": {},
          "child_item_id": "string",
          "custom_fields": {},
          "default_qty_in_pack": "string",
          "is_qty_in_pack_fixed": true,
          "product_id": "string"
        }
      ],
      "group_price": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "expire_time": "string",
          "group_id": "string",
          "id": "string",
          "price": 0,
          "quantity": 0,
          "start_time": "string",
          "store_id": "string"
        }
      ],
      "height": 0,
      "id": "string",
      "images": [
        {
          "additional_fields": {},
          "alt": "string",
          "avail": true,
          "create_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "custom_fields": {},
          "file_name": "string",
          "http_path": "string",
          "id": "string",
          "mime-type": "string",
          "modified_at": {
            "additional_fields": {},
            "custom_fields": {},
            "format": "string",
            "value": "string"
          },
          "size": 0,
          "sort_order": 0,
          "type": "string"
        }
      ],
      "inventory": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "in_stock": true,
          "priority": 0,
          "quantity": 0,
          "warehouse_id": "string"
        }
      ],
      "is_downloadable": true,
      "is_stock_managed": true,
      "is_virtual": true,
      "length": 0,
      "manage_stock": "string",
      "meta_description": "string",
      "meta_keywords": "string",
      "meta_title": "string",
      "modified_at": {
        "additional_fields": {},
        "custom_fields": {},
        "format": "string",
        "value": "string"
      },
      "name": "string",
      "price": 0,
      "product_options": [
        {
          "additional_fields": {},
          "available": true,
          "custom_fields": {},
          "description": "string",
          "id": "string",
          "name": "string",
          "option_items": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "id": "string",
              "name": "string",
              "price": "string",
              "product_option_item_id": "string",
              "quantity": 0,
              "sku": "string",
              "sort_order": 0,
              "type_price": "string",
              "weight": "string"
            }
          ],
          "product_option_id": "string",
          "required": true,
          "sort_order": 0,
          "type": "string",
          "used_in_combination": true
        }
      ],
      "quantity": 0,
      "related_products_ids": [
        "string"
      ],
      "seo_url": "string",
      "short_description": "string",
      "sort_order": 0,
      "special_price": {
        "additional_fields": {},
        "avail": true,
        "created_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "custom_fields": {},
        "expired_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "modified_at": {
          "additional_fields": {},
          "custom_fields": {},
          "format": "string",
          "value": "string"
        },
        "value": 0
      },
      "stores_ids": [
        "string"
      ],
      "tax_class_id": "string",
      "tier_price": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "price": 0,
          "qty": 0
        }
      ],
      "type": "string",
      "u_brand": "string",
      "u_brand_id": "string",
      "u_model": "string",
      "u_mpn": "string",
      "u_sku": "string",
      "u_upc": "string",
      "url": "string",
      "weight": 0,
      "weight_unit": "string",
      "width": 0
    }
  ],
  "products_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|product|[[Product](#schemaproduct)]|false|none|none|
|products_count|integer|false|none|none|

<h2 id="tocS_Script">Script</h2>
<!-- backwards compatibility -->
<a id="schemascript"></a>
<a id="schema_Script"></a>
<a id="tocSscript"></a>
<a id="tocsscript"></a>

```json
{
  "additional_fields": {},
  "created_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "description": "string",
  "event": "string",
  "html": "string",
  "id": "string",
  "load_method": "string",
  "modified_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "name": "string",
  "scope": "string",
  "src": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|created_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|description|string|false|none|none|
|event|string|false|none|none|
|html|string|false|none|none|
|id|string|false|none|none|
|load_method|string|false|none|none|
|modified_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|name|string|false|none|none|
|scope|string|false|none|none|
|src|string|false|none|none|

<h2 id="tocS_Shipment">Shipment</h2>
<!-- backwards compatibility -->
<a id="schemashipment"></a>
<a id="schema_Shipment"></a>
<a id="tocSshipment"></a>
<a id="tocsshipment"></a>

```json
{
  "additional_fields": {},
  "created_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "id": "string",
  "is_shipped": true,
  "items": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "model": "string",
      "name": "string",
      "order_product_id": "string",
      "price": 0,
      "product_id": "string",
      "quantity": 0,
      "variant_id": "string"
    }
  ],
  "modified_time": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "order_id": "string",
  "shipment_provider": "string",
  "tracking_numbers": [
    {
      "additional_fields": {},
      "carrier_id": "string",
      "custom_fields": {},
      "tracking_number": "string"
    }
  ],
  "warehouse_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|created_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|is_shipped|boolean|false|none|none|
|items|[[Shipment_Item](#schemashipment_item)]|false|none|none|
|modified_time|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|order_id|string|false|none|none|
|shipment_provider|string|false|none|none|
|tracking_numbers|[[Shipment_TrackingNumber](#schemashipment_trackingnumber)]|false|none|none|
|warehouse_id|string|false|none|none|

<h2 id="tocS_Shipment_Item">Shipment_Item</h2>
<!-- backwards compatibility -->
<a id="schemashipment_item"></a>
<a id="schema_Shipment_Item"></a>
<a id="tocSshipment_item"></a>
<a id="tocsshipment_item"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "model": "string",
  "name": "string",
  "order_product_id": "string",
  "price": 0,
  "product_id": "string",
  "quantity": 0,
  "variant_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|model|string|false|none|none|
|name|string|false|none|none|
|order_product_id|string|false|none|none|
|price|number|false|none|none|
|product_id|string|false|none|none|
|quantity|number|false|none|none|
|variant_id|string|false|none|none|

<h2 id="tocS_Shipment_TrackingNumber">Shipment_TrackingNumber</h2>
<!-- backwards compatibility -->
<a id="schemashipment_trackingnumber"></a>
<a id="schema_Shipment_TrackingNumber"></a>
<a id="tocSshipment_trackingnumber"></a>
<a id="tocsshipment_trackingnumber"></a>

```json
{
  "additional_fields": {},
  "carrier_id": "string",
  "custom_fields": {},
  "tracking_number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|carrier_id|string|false|none|none|
|custom_fields|object|false|none|none|
|tracking_number|string|false|none|none|

<h2 id="tocS_SpecialPrice">SpecialPrice</h2>
<!-- backwards compatibility -->
<a id="schemaspecialprice"></a>
<a id="schema_SpecialPrice"></a>
<a id="tocSspecialprice"></a>
<a id="tocsspecialprice"></a>

```json
{
  "additional_fields": {},
  "avail": true,
  "created_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "custom_fields": {},
  "expired_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "modified_at": {
    "additional_fields": {},
    "custom_fields": {},
    "format": "string",
    "value": "string"
  },
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|created_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|custom_fields|object|false|none|none|
|expired_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|modified_at|[A2CDateTime](#schemaa2cdatetime)|false|none|none|
|value|number|false|none|none|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "custom_fields": {},
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_StoreAttribute">StoreAttribute</h2>
<!-- backwards compatibility -->
<a id="schemastoreattribute"></a>
<a id="schema_StoreAttribute"></a>
<a id="tocSstoreattribute"></a>
<a id="tocsstoreattribute"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "custom_fields": {},
  "default_values": [
    "string"
  ],
  "id": "string",
  "lang_id": "string",
  "name": "string",
  "position": 0,
  "required": true,
  "store_id": "string",
  "system": true,
  "type": "string",
  "values": [
    "string"
  ],
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|default_values|[string]|false|none|none|
|id|string|false|none|none|
|lang_id|string|false|none|none|
|name|string|false|none|none|
|position|integer|false|none|none|
|required|boolean|false|none|none|
|store_id|string|false|none|none|
|system|boolean|false|none|none|
|type|string|false|none|none|
|values|[string]|false|none|none|
|visible|boolean|false|none|none|

<h2 id="tocS_StoreAttribute_Group">StoreAttribute_Group</h2>
<!-- backwards compatibility -->
<a id="schemastoreattribute_group"></a>
<a id="schema_StoreAttribute_Group"></a>
<a id="tocSstoreattribute_group"></a>
<a id="tocsstoreattribute_group"></a>

```json
{
  "additional_fields": {},
  "assigned_attribute_ids": [
    "string"
  ],
  "attribute_set_id": "string",
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|assigned_attribute_ids|[string]|false|none|none|
|attribute_set_id|string|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|position|integer|false|none|none|

<h2 id="tocS_Subscriber">Subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_Subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "additional_fields": {},
  "created_time": "string",
  "custom_fields": {},
  "customer_id": "string",
  "email": "string",
  "first_name": "string",
  "id": "string",
  "last_name": "string",
  "modified_time": "string",
  "subscribed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|created_time|string|false|none|none|
|custom_fields|object|false|none|none|
|customer_id|string|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|id|string|false|none|none|
|last_name|string|false|none|none|
|modified_time|string|false|none|none|
|subscribed|boolean|false|none|none|

<h2 id="tocS_TaxClass">TaxClass</h2>
<!-- backwards compatibility -->
<a id="schemataxclass"></a>
<a id="schema_TaxClass"></a>
<a id="tocStaxclass"></a>
<a id="tocstaxclass"></a>

```json
{
  "additional_fields": {},
  "avail": true,
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "tax": 0,
  "tax_rates": [
    {
      "additional_fields": {},
      "address": [
        "string"
      ],
      "cities": [
        "string"
      ],
      "countries": [
        {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "id": "string",
          "name": "string",
          "states": [
            {
              "additional_fields": {},
              "code": "string",
              "custom_fields": {},
              "id": "string",
              "name": "string",
              "tax": 0,
              "tax_type": 0,
              "zip_codes": [
                {
                  "additional_fields": {},
                  "custom_fields": {},
                  "fields": [
                    {
                      "additional_fields": {},
                      "custom_fields": {},
                      "from": "string",
                      "to": "string"
                    }
                  ],
                  "is_range": true,
                  "range": [
                    "string"
                  ]
                }
              ]
            }
          ],
          "tax": 0,
          "tax_type": 0
        }
      ],
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "tax": 0,
      "tax_based_on": "string",
      "tax_type": 0,
      "zip_codes": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "fields": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "from": "string",
              "to": "string"
            }
          ],
          "is_range": true,
          "range": [
            "string"
          ]
        }
      ]
    }
  ],
  "tax_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|avail|boolean|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|tax|number|false|none|none|
|tax_rates|[[TaxClass_Rate](#schemataxclass_rate)]|false|none|none|
|tax_type|integer|false|none|none|

<h2 id="tocS_TaxClass_Countries">TaxClass_Countries</h2>
<!-- backwards compatibility -->
<a id="schemataxclass_countries"></a>
<a id="schema_TaxClass_Countries"></a>
<a id="tocStaxclass_countries"></a>
<a id="tocstaxclass_countries"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "states": [
    {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "tax": 0,
      "tax_type": 0,
      "zip_codes": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "fields": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "from": "string",
              "to": "string"
            }
          ],
          "is_range": true,
          "range": [
            "string"
          ]
        }
      ]
    }
  ],
  "tax": 0,
  "tax_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|states|[[TaxClass_States](#schemataxclass_states)]|false|none|none|
|tax|number|false|none|none|
|tax_type|integer|false|none|none|

<h2 id="tocS_TaxClass_Rate">TaxClass_Rate</h2>
<!-- backwards compatibility -->
<a id="schemataxclass_rate"></a>
<a id="schema_TaxClass_Rate"></a>
<a id="tocStaxclass_rate"></a>
<a id="tocstaxclass_rate"></a>

```json
{
  "additional_fields": {},
  "address": [
    "string"
  ],
  "cities": [
    "string"
  ],
  "countries": [
    {
      "additional_fields": {},
      "code": "string",
      "custom_fields": {},
      "id": "string",
      "name": "string",
      "states": [
        {
          "additional_fields": {},
          "code": "string",
          "custom_fields": {},
          "id": "string",
          "name": "string",
          "tax": 0,
          "tax_type": 0,
          "zip_codes": [
            {
              "additional_fields": {},
              "custom_fields": {},
              "fields": [
                {
                  "additional_fields": {},
                  "custom_fields": {},
                  "from": "string",
                  "to": "string"
                }
              ],
              "is_range": true,
              "range": [
                "string"
              ]
            }
          ]
        }
      ],
      "tax": 0,
      "tax_type": 0
    }
  ],
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "tax": 0,
  "tax_based_on": "string",
  "tax_type": 0,
  "zip_codes": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "fields": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "from": "string",
          "to": "string"
        }
      ],
      "is_range": true,
      "range": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|address|[string]|false|none|none|
|cities|[string]|false|none|none|
|countries|[[TaxClass_Countries](#schemataxclass_countries)]|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|tax|number|false|none|none|
|tax_based_on|string|false|none|none|
|tax_type|integer|false|none|none|
|zip_codes|[[TaxClass_ZipCodes](#schemataxclass_zipcodes)]|false|none|none|

<h2 id="tocS_TaxClass_States">TaxClass_States</h2>
<!-- backwards compatibility -->
<a id="schemataxclass_states"></a>
<a id="schema_TaxClass_States"></a>
<a id="tocStaxclass_states"></a>
<a id="tocstaxclass_states"></a>

```json
{
  "additional_fields": {},
  "code": "string",
  "custom_fields": {},
  "id": "string",
  "name": "string",
  "tax": 0,
  "tax_type": 0,
  "zip_codes": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "fields": [
        {
          "additional_fields": {},
          "custom_fields": {},
          "from": "string",
          "to": "string"
        }
      ],
      "is_range": true,
      "range": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|code|string|false|none|none|
|custom_fields|object|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|tax|number|false|none|none|
|tax_type|integer|false|none|none|
|zip_codes|[[TaxClass_ZipCodes](#schemataxclass_zipcodes)]|false|none|none|

<h2 id="tocS_TaxClass_ZipCodes">TaxClass_ZipCodes</h2>
<!-- backwards compatibility -->
<a id="schemataxclass_zipcodes"></a>
<a id="schema_TaxClass_ZipCodes"></a>
<a id="tocStaxclass_zipcodes"></a>
<a id="tocstaxclass_zipcodes"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "fields": [
    {
      "additional_fields": {},
      "custom_fields": {},
      "from": "string",
      "to": "string"
    }
  ],
  "is_range": true,
  "range": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|fields|[[TaxClass_ZipCodes_Range](#schemataxclass_zipcodes_range)]|false|none|none|
|is_range|boolean|false|none|none|
|range|[string]|false|none|none|

<h2 id="tocS_TaxClass_ZipCodes_Range">TaxClass_ZipCodes_Range</h2>
<!-- backwards compatibility -->
<a id="schemataxclass_zipcodes_range"></a>
<a id="schema_TaxClass_ZipCodes_Range"></a>
<a id="tocStaxclass_zipcodes_range"></a>
<a id="tocstaxclass_zipcodes_range"></a>

```json
{
  "additional_fields": {},
  "custom_fields": {},
  "from": "string",
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_fields|object|false|none|none|
|custom_fields|object|false|none|none|
|from|string|false|none|none|
|to|string|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "action": "string",
  "active": true,
  "additional_fields": {},
  "callback": "string",
  "created_at": "string",
  "custom_fields": {},
  "entity": "string",
  "fields": "string",
  "id": 0,
  "label": "string",
  "store_id": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|active|boolean|false|none|none|
|additional_fields|object|false|none|none|
|callback|string|false|none|none|
|created_at|string|false|none|none|
|custom_fields|object|false|none|none|
|entity|string|false|none|none|
|fields|string|false|none|none|
|id|integer|false|none|none|
|label|string|false|none|none|
|store_id|string|false|none|none|
|updated_at|string|false|none|none|
