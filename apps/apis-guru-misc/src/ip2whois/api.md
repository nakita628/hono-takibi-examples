<h1 id="ip2whois-domain-lookup">IP2WHOIS Domain Lookup v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

IP2WHOIS is a free tool to allow you to check WHOIS information for a particular domain, such as domain assigned owner contact information, registrar information, registrant information, location and much more.

Base URLs:

* <a href="https://api.ip2whois.com/v2">https://api.ip2whois.com/v2</a>

<h1 id="ip2whois-domain-lookup-default">Default</h1>

## get/

> Code samples

```bash
curl 'https://example.com/?domain=string&key=string'
```

`GET /`

Lookup WHOIS information

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|Domain name for lookup purpose.|
|key|query|string|true|API key.|
|format|query|string|false|Returns the API response in json (default) or xml format.|

> Example responses

> 200 Response

```text
{"response": "","domain": "","domain_id": "","status": "","create_date": "","update_date": "","expire_date": "","domain_age": "","whois_server": "","registrar_iana_id": "","registrar_name": "","registrar_url": "","registrant_name": "","registrant_organization": "","registrant_street_address": "","registrant_city": "","registrant_region": "","registrant_zip_code": "","registrant_country": "","registrant_phone": "","registrant_fax": "","registrant_email": "","admin_name": "","admin_organization": "","admin_street_address":  "","admin_city": "","admin_region": "","admin_zip_code": "","admin_country": "","admin_phone": "","admin_fax": "","admin_email": "","tech_name": "","tech_organization": "","tech_street_address": "","tech_city": "","tech_region": "","tech_zip_code": "","tech_country": "","tech_phone": "","tech_fax": "","tech_email": "","billing_name": "","billing_organization": "","billing_street_address": "","billing_city": "","billing_region": "","billing_zip_code": "","billing_country": "","billing_phone": "","billing_fax": "","billing_email": "","name_servers": "","error_code": "","error_message":""}
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get response from IP2WHOIS|Inline|

<aside class="success">
This operation does not require authentication
</aside>
