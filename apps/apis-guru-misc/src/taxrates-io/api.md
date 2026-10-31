<h1 id="taxratesio-api">Taxrates.io API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h3>Introduction</h3>
<p>Taxrates.io is a global tax rate service that automates the management of monitoring tax rates changes in 181 countries. We monitor over 14,000 US sales tax, VAT, GST rates for you and make updates via our API so you always have the most update tax rates.</p>
<p>You can use Taxrates.io as a virtual sandbox where we provide you with 30 days free trial.</p>
<h3>Countries</h3>
<p>We currently support the following countries around the world. If you would like to request the addition of a new country, please email us at <a href="mailto:support@taxrates.io">support@taxrates.io</a></p>
<table>
  <tr><td>Afghanistan</td><td>Gambia</td><td>Nicaragua</td></tr>
  <tr><td>Albania</td><td>Georgia</td><td>Niger</td></tr>
  <tr><td>Andorra</td><td>Germany</td><td>Nigeria</td></tr>
  <tr><td>Angola</td><td>Ghana</td><td>North Korea</td></tr>
  <tr><td>Antigua and Barbuda</td><td>Greece</td><td>Norway</td></tr>
  <tr><td>Argentina</td><td>Grenada</td><td>Pakistan</td></tr>
  <tr><td>Armenia</td><td>Guam</td><td>Palestine</td></tr>
  <tr><td>Aruba</td><td>Guatemala</td><td>Panama</td></tr>
  <tr><td>Australia</td><td>Guinea</td><td>Papua New Guinea</td></tr>
  <tr><td>Austria</td><td>Guyana</td><td>Paraguay</td></tr>
  <tr><td>Azerbaijan</td><td>Haiti</td><td>Peru</td></tr>
  <tr><td>Bahamas</td><td>Honduras</td><td>Philippines</td></tr>
  <tr><td>Bangladesh</td><td>Hungary</td><td>Poland</td></tr>
  <tr><td>Barbados</td><td>Iceland</td><td>Portugal</td></tr>
  <tr><td>Belarus</td><td>India</td><td>Puerto Rico</td></tr>
  <tr><td>Belgium</td><td>Indonesia</td><td>Republic of the Congo</td></tr>
  <tr><td>Belize</td><td>Iran</td><td>Romania</td></tr>
  <tr><td>Benin</td><td>Ireland</td><td>Russian Federation</td></tr>
  <tr><td>Bhutan</td><td>Isle of Man</td><td>Rwanda</td></tr>
  <tr><td>Bolivia</td><td>Israel</td><td>Samoa</td></tr>
  <tr><td>Bonaire</td><td>Italy</td><td>Senegal</td></tr>
  <tr><td>Bosnia and Herzegovina</td><td>Japan</td><td>Serbia</td></tr>
  <tr><td>Botswana</td><td>Jersey</td><td>Seychelles</td></tr>
  <tr><td>Brazil</td><td>Jordan</td><td>Sierra Leone</td></tr>
  <tr><td>Bulgaria</td><td>Jordan</td><td>Singapore</td></tr>
  <tr><td>Burkina Faso</td><td>Kazakhstan</td><td>Slovakia</td></tr>
  <tr><td>Burundi</td><td>Kenya</td><td>Slovenia</td></tr>
  <tr><td>Cambodia</td><td>Kiribati</td><td>Solomon Islands</td></tr>
  <tr><td>Cameroon</td><td>Kosovo</td><td>Somalia</td></tr>
  <tr><td>Cape Verde</td><td>Kyrgyzstan</td><td>South Africa</td></tr>
  <tr><td>Central African Republic</td><td>Laos</td><td>South Korea</td></tr>
  <tr><td>Chad</td><td>Latvia</td><td>South Sudan</td></tr>
  <tr><td>Chile</td><td>Lebanon</td><td>Spain</td></tr>
  <tr><td>China</td><td>Lesotho</td><td>Sri Lanka</td></tr>
  <tr><td>Columbia</td><td>Liberia</td><td>St Lucia</td></tr>
  <tr><td>Comoros</td><td>Liechtenstein</td><td>Sudan</td></tr>
  <tr><td>Cook Islands</td><td>Lithuania</td><td>Suriname</td></tr>
  <tr><td>Costa Rica</td><td>Luxembourg</td><td>Swaziland</td></tr>
  <tr><td>Cote d'Ivoire</td><td>Macedonia</td><td>Sweden</td></tr>
  <tr><td>Croatia</td><td>Madagascar</td><td>Switzerland</td></tr>
  <tr><td>Cuba</td><td>Malawi</td><td>Tahiti</td></tr>
  <tr><td>Curacao</td><td>Malaysia</td><td>Taiwan</td></tr>
  <tr><td>Cyprus</td><td>Maldives</td><td>Tajikistan</td></tr>
  <tr><td>Czech Republic</td><td>Mali</td><td>Tanzania</td></tr>
  <tr><td>Democratic Republic of the Congo</td><td>Malta</td><td>Thailand</td></tr>
  <tr><td>Denmark</td><td>Mauritania</td><td>Togo</td></tr>
  <tr><td>Djbouti</td><td>Mauritius</td><td>Tonga</td></tr>
  <tr><td>Dominica</td><td>Mexico</td><td>Trinidad and Tobago</td></tr>
  <tr><td>Dominican Republic</td><td>Micronesia</td><td>Tunisia</td></tr>
  <tr><td>Ecuador</td><td>Moldova</td><td>Turkmenistan</td></tr>
  <tr><td>Egypt</td><td>Monaco</td><td>Tuvalu</td></tr>
  <tr><td>El Salvador</td><td>Mongolia</td><td>Uganda</td></tr>
  <tr><td>Equatorial Guinea</td><td>Montenegro</td><td>Ukraine</td></tr>
  <tr><td>Eritrea</td><td>Morocco</td><td>United Kingdom</td></tr>
  <tr><td>Estonia</td><td>Mozambique</td><td>United States</td></tr>
  <tr><td>Ethiopia</td><td>Myanmar</td><td>Uruguay</td></tr>
  <tr><td>Fiji</td><td>Namibia</td><td>Vanuatu</td></tr>
  <tr><td>Finland</td><td>Nepal</td><td>Venezuela</td></tr>
  <tr><td>France</td><td>Netherlands</td><td>Vietnam</td></tr>
  <tr><td>Gabon</td><td>New Zealand</td><td>Yemen</td></tr>
</table>
<h3>Products codes</h3>
<p>The Taxrates.io API’s provides product-level tax rates for a subset of product codes. These codes are to be used for products that are either exempt from tax in some jurisdictions or are taxed at reduced rates.</p>
<p>We will be expanding support for additional, less common categories over time. If you would like to request the addition of a new product category, please email us at <a href="mailto:support@taxrates.io">support@taxrates.io</a></p>
<p>Please select a product code/s when making a request to the Taxrates.io API</p>
<table>
  <tr><th>Product code</th><th>Product Description</th></tr>
  <tr><td>C010</td><td>Services which are not subject to a service-specific tax</td></tr>
  <tr><td>C011</td><td>Software - Downloaded</td></tr>
  <tr><td>C012</td><td>Books - Downloaded</td></tr>
  <tr><td>C011</td><td>Music - Downloaded</td></tr>
  <tr><td>C011</td><td>Movies/Digital Video - Downloaded</td></tr>
  <tr><td>C011</td><td>Other Electronic Goods - Downloaded</td></tr>
  <tr><td>C011</td><td>Streaming Music/Audio Services new</td></tr>
  <tr><td>C011</td><td>Streaming Video Services new</td></tr>
  <tr><td>C018</td><td>Software as a Services, Generally (Remote Access to Hosted Software)</td></tr>
  <tr><td>C018</td><td>Remote Access to Hosted Software - Personal Use</td></tr>
  <tr><td>C018</td><td>Remote Access to Hosted Software - Business Use</td></tr>
  <tr><td>C021</td><td>Remote Access to Hosted Business Custom Applications</td></tr>
  <tr><td>C021</td><td>Personal Cloud Storage/Backup</td></tr>
  <tr><td>C021</td><td>Business Cloud Storage/Backup</td></tr>
  <tr><td>C021</td><td>Business Data Warehouses</td></tr>
  <tr><td>C022</td><td>Infrastructure as Service, Generally</td></tr>
  <tr><td>C022</td><td>Ecommerce Site/Webserver Hosting</td></tr>
  <tr><td>C022</td><td>Provision of Virtual Computing Capacity</td></tr>
  <tr><td>C022</td><td>Software - package or canned program</td></tr>
  <tr><td>C022</td><td>Software - modifications to canned program</td></tr>
  <tr><td>C022</td><td>Software - custom programs - material</td></tr>
  <tr><td>C022</td><td>Software - custom programs - professional serv.</td></tr>
  <tr><td>C022</td><td>Information services</td></tr>
  <tr><td>C022</td><td>Data processing services</td></tr>
  <tr><td>C022</td><td>Mainframe computer access and processing serv.</td></tr>
  <tr><td>C022</td><td>Online Data processing services</td></tr>
</table>
<h3>Filtering</h3>
<p>When calling the API endpoints you can use 'filter' parameters to get tax rate for the selected type. You can get the following tax types (Each tax rate will always have one of following types)</p>
<h3>US Sales tax Rates</h3>
<ol>
  <li>CombinedRate</li>
  <li>StateRate</li>
  <li>CountyRate</li>
  <li>CityRate</li>
  <li>SpecialRate</li>
</ol>
<p>We recommend using <a href="https://www.getpostman.com/">Postman</a> when discovering our API. Happy using!</p>
<h3>Rate Limiting</h3>
<p>We limit API requests.</p>
<p>If you’re exceeding this rate and encountering 429 errors, review the following:</p>
<ul>
  <li>Only make requests in states / regions where you have enabled.</li>
  <li>Cache responses if the order details haven’t changed since the last calculation at checkout.</li>
</ul>
<h3>Errors</h3>
<p>The Taxrates.io API uses the following error codes:<p/>
<table>
  <tr><th>Code</th><th>Error Message</th></tr>
  <tr><td>400</td><td>Bad Request – Your request format is bad.</td></tr>
  <tr><td>401</td><td>Unauthorized – Your API key is wrong.</td></tr>
  <tr><td>404</td><td>Not Found – The specified resource could not be found.</td></tr>
  <tr><td>405</td><td>Method Not Allowed – You tried to access a resource with an invalid method.</td></tr>
  <tr><td>429</td><td>Too Many Requests – You’re requesting too many resources! Slow down!</td></tr>
  <tr><td>500</td><td>Internal Server Error – We had a problem with our server. Try again later.</td></tr>
  <tr><td>503</td><td>Service Unavailable – We’re temporarily offline for maintenance. Try again later.</td></tr>
</table>
<p>Verify your API token is correct and make sure you’re correctly setting the <a href="#authentication">Authorization header</a>.</p>
<p>If you’re still not sure what’s wrong, <a href="mailto:support@taxrates.io">contact us</a> and we’ll investigate.</p>
<h3>Changelog</h3>
<p>Stay on top of new developer-facing features, accuracy improvements, and bug fixes for our API. Have a request? Encounter an issue? <a href="mailto:support@taxrates.io">We’d love to hear your feedback.</a></p>


Contact Support:
 Name: apiteam@taxrates.io

Base URLs:

* <a href="https://api.taxrates.io/api">https://api.taxrates.io/api</a>

<h1 id="taxratesio-api-v3tax">v3/tax</h1>

## All tax rates

<a id="opIdallTaxRates"></a>

> Code samples

```bash
curl https://example.com/v3/tax/rates \
  -H 'Accept: application/json'
```

`GET /v3/tax/rates`

<p>Get request. This method returns all tax rates configured on your account. Based on your country selection the endpoint will return all taxes for all countries. You can use the 'filter' parameter to narrow results to selected type of tax. Use 'zip' parameter when you have selected the United States.</p>
<p>We have development an easy to use scheduler so you can call the API to get the rates every hour or day. Please click on the following link to see the <a href="https://gist.github.com/gregbird/cd904ff230cdf86253716aa351154edb">code on Github</a>.</p>
<p><b>Please note</b> in cases when a US state doesn't have sales tax and when a product is tax exempt for a zip code or for a state the API response will be "null"</p>
<p>To get a response you need to have selected a product code in your Taxrates.io dashboard, please see the Introduction section above for description of the different types of product codes.</p>
<p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
<ul>
  <li>CombinedRate</li>
  <li>StateRate</li>
  <li>CountyRate</li>
  <li>CityRate</li>
  <li>SpecialRate</li>
</ul>
<pre><code class="js">
  var taxrates_endpoint = 'tax/rates';
  var taxrates_params = {'domain':'api.taxrates.io'};
  var taxrates_url = '/api/v3/';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint,
      type: 'get',
      method: 'get',
      dataType: "json",
      data: taxrates_params,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data, textStatus, jqXHR) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            var taxrates_range = '';
            jQuery.each(data, function(k, v) {
                if(v.hasOwnProperty("rates")){
                    jQuery.each(v.rates, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Type;
                            rates[i][1] = w.data_value;
                            rates[i][2] = w.product_code;
                            i++;
                        }
                    });
                }
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            var cursor = jqXHR.getResponseHeader('X-Cursor-Next');
            if (cursor) {
              // get next page...
            }
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>


<h3 id="all-tax-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|false|Domain name: api.taxrates.io|
|filter|query|string|false|You can filter your taxes by one of following types: 'standard', 'CombinedRate', 'CountyRate', 'CityRate', 'SPDRate' and 'MTARate'.|
|cursor|query|string|false|Cursor shows from which record you want to get information. Default value is 0, next value can be retrieved from X-Cursor-Next header.|
|Product_code|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "<integer>",
    "name": "<string>",
    "rates": [
      {
        "data_name": "<string>",
        "data_value": "<string>",
        "product_code": "<string>",
        "type": "<string>"
      },
      {
        "data_name": "<string>",
        "data_value": "<string>",
        "product_code": "<string>",
        "type": "<string>"
      }
    ],
    "state": "<string>",
    "zip": "<string>"
  },
  {
    "id": "<integer>",
    "name": "<string>",
    "rates": [
      {
        "data_name": "<string>",
        "data_value": "<string>",
        "product_code": "<string>",
        "type": "<string>"
      },
      {
        "data_name": "<string>",
        "data_value": "<string>",
        "product_code": "<string>",
        "type": "<string>"
      }
    ],
    "state": "<string>",
    "zip": "<string>"
  }
]
```

> 404 Response

```text

```

> 500 Response

```json
{
  "code": "<integer>",
  "fields": "<string>",
  "message": "<string>"
}
```

<h3 id="all-tax-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of locations with tax rates|Inline|
|404|Not Found|No configured tax rates found. Have you added any country to your account?|None|
|500|Internal Server Error|Unexpected error|Inline|

<h3 id="all-tax-rates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» rates|[object]|false|none|none|
|» » data_name|string|false|none|none|
|» » data_value|string|false|none|none|
|» » product_code|string|false|none|none|
|» » type|string|false|none|none|
|» state|string|false|none|none|
|» zip|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|fields|string|false|none|none|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="taxratesio-api-v1tax">v1/tax</h1>

## Tax rates by Country Code

<a id="opIdtaxRatesByCountryCode"></a>

> Code samples

```bash
curl https://example.com/v1/tax/countrycode \
  -H 'Accept: application/json'
```

`GET /v1/tax/countrycode`

Get request. This method returns all tax rates for country discovered based on country code. The country code must be 2 letters ISO 3166-1 alfa-2 country code (see <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">here</a> for more information). You can use 'filter' parameter to narrow results to selected type of tax
<p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
<ul>
  <li>CombinedRate</li>
  <li>StateRate</li>
  <li>CountyRate</li>
  <li>CityRate</li>
  <li>SpecialRate</li>
</ul>
<pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
  var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE', 'product_code':'C010'};
  var taxrates_url = '/api/v1/';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint,
      type: 'get',
      method: 'get',
      dataType: "json",
      data: taxrates_params,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            jQuery.each(data, function(k, v) {
                if(v.hasOwnProperty("taxes")){
                    jQuery.each(v.taxes, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Country;
                            rates[i][1] = w.Type;
                            rates[i][2] = w.data_value;
                            i++;
                        }
                    });
                }
            //Now you have all your rates inside rates variable.
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>


<h3 id="tax-rates-by-country-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|false|Domain name: api.taxrates.io|
|country_code|query|string|false|Country code alpha 2|
|filter|query|string|false|You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.|
|zip|query|string|false|You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.|
|product_codes[]|query|string|false|Use one or many product code/s.|
|province |query|string|false|Use for Canada|
|date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "country_name": "<string>",
  "taxes": [
    {
      "Country": "<string>",
      "Type": "<string>",
      "data_name": "<string>",
      "data_value": "<string>"
    },
    {
      "Country": "<string>",
      "Type": "<string>",
      "data_name": "<string>",
      "data_value": "<string>"
    }
  ]
}
```

> 404 Response

```text

```

> 500 Response

```json
{
  "code": "<integer>",
  "fields": "<string>",
  "message": "<string>"
}
```

<h3 id="tax-rates-by-country-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Country not found. Have you provided correct alpha-2 country code?|None|
|500|Internal Server Error|Unexpected error|Inline|

<h3 id="tax-rates-by-country-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_name|string|false|none|none|
|taxes|[object]|false|none|none|
|» Country|string|false|none|none|
|» Type|string|false|none|none|
|» data_name|string|false|none|none|
|» data_value|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|fields|string|false|none|none|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Tax rates by IP address

<a id="opIdtaxRatesByIpAddress"></a>

> Code samples

```bash
curl https://example.com/v1/tax/ip \
  -H 'Accept: application/json'
```

`GET /v1/tax/ip`

Get request. This method returns all tax rates for country discovered on either your IP address or IP address param. The IP param is not required. When empty, the taxrates.io will try to discover your IP address and based on this will retrieve the tax rates. You can use 'filter' parameter to narrow results to selected type of tax
<p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
<ul>
  <li>CombinedRate</li>
  <li>StateRate</li>
  <li>CountyRate</li>
  <li>CityRate</li>
  <li>SpecialRate</li>
</ul>
<pre><code class="js">var taxrates_endpoint = 'tax/ip';
  var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201', 'product_code':'C010'};
  var taxrates_url = '/api/v1/';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint,
      type: 'get',
      method: 'get',
      dataType: "json",
      data: taxrates_params,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            jQuery.each(data, function(k, v) {
                if(v.hasOwnProperty("taxes")){
                    jQuery.each(v.taxes, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Country;
                            rates[i][1] = w.Type;
                            rates[i][2] = w.data_value;
                            i++;
                        }
                    });
                }
            //Now you have all your rates inside rates variable.
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>


<h3 id="tax-rates-by-ip-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|false|Domain name: api.taxrates.io|
|ip|query|string|false|Customer's IP address|
|filter|query|string|false|For US sales tax you can filter the tax type|
|zip|query|string|false|For US sales tax a Zipcode must be proivded|
|product_code|query|string|false|Your can filter your taxes by product code|

> Example responses

> 200 Response

```json
[
  {
    "country_name": "<string>",
    "taxes": [
      {
        "Country": "<string>",
        "Type": "<string>",
        "data_name": "<string>",
        "data_value": "<string>"
      },
      {
        "Country": "<string>",
        "Type": "<string>",
        "data_name": "<string>",
        "data_value": "<string>"
      }
    ]
  },
  {
    "country_name": "<string>",
    "taxes": [
      {
        "Country": "<string>",
        "Type": "<string>",
        "data_name": "<string>",
        "data_value": "<string>"
      },
      {
        "Country": "<string>",
        "Type": "<string>",
        "data_name": "<string>",
        "data_value": "<string>"
      }
    ]
  }
]
```

> 404 Response

```text

```

> 500 Response

```json
{
  "code": "<integer>",
  "fields": "<string>",
  "message": "<string>"
}
```

<h3 id="tax-rates-by-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of tax rates for VAT, GST & TAX|Inline|
|404|Not Found|Geolocation can not be processed/No matching country found|None|
|500|Internal Server Error|Unexpected error|Inline|

<h3 id="tax-rates-by-ip-address-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» country_name|string|false|none|none|
|» taxes|[object]|false|none|none|
|» » Country|string|false|none|none|
|» » Type|string|false|none|none|
|» » data_name|string|false|none|none|
|» » data_value|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|fields|string|false|none|none|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
