<h1 id="departureboardio-api">departureboard.io API v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The departureboard.io is a high performance API written in Golang. Its goal is to provide to main functions:<br><br> (1): A JSON API interface to the legacy National Rail SOAP API: Giving developers the ability to pull live information on departures, arrivals, and services from National Rail, without having to use the legacy SOAP API provided by National Rail. Information is still pulled directly from National Rail in the background, providing the same level of real-time data without the additional complexity of having to interact with SOAP. <br><br>(2): A JSON API interface for additional National Rail information: Giving developers the ability to pull a range of information about the Rail Network, via a JSON API interface. This is not an offering that National Rail currently provide, and is custom developed. Data is sourced from periodically updated XML documents, parsed, and provided for consumption via the departureboard.io API.<br><br>This API is completely free to use for non-commercial purposes. You can explore the various sections of the documentation using the links below.<br><br> For more information please see <a href="https://api.departureboard.io">https://api.departureboard.io</a>

Base URLs:

* <a href="https://api.departureboard.io/api/v2.0">https://api.departureboard.io/api/v2.0</a> - V2 Production Server

<h1 id="departureboardio-api-departures-arrivals">Departures &amp; Arrivals</h1>

## getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

<a id="opIdgetArrivalsAndDeparturesByCRS"></a>

> Code samples

```bash
curl 'https://example.com/getArrivalsAndDeparturesByCRS/str?apiKey=string'
```

`GET /getArrivalsAndDeparturesByCRS/{CRS}`

<h3 id="getarrivalsanddeparturesbycrs-is-used-to-get-a-list-of-services-arriving-to-and-departing-from-a-uk-train-station-by-the-crs-computer-reservation-system-code-this-will-typically-return-a-list-of-train-services-but-will-also-return-any-replacement-bus-or-ferry-services-that-are-in-place-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CRS|path|string|true|The CRS (Computer Reservation System) for the Station you wish to get departure and arrival information for, e.g. KGX for London Kings Cross.|
|apiKey|query|string|true|The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.|
|numServices|query|integer|false|The number of arriving and departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services arriving to or departing from this station within the time window specified.|
|timeOffset|query|integer|false|The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.|
|timeWindow|query|integer|false|The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.|
|serviceDetails|query|boolean|false|Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.|
|filterStation|query|string|false|The CRS (Computer Reservation System) code to filter the results by. When setting this you must also set the filterType parameter. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading) and filterType to from, will only show services arriving to London Paddington that stopped at Reading. Setting a filter for getArrivalsAndDeparturesByCRS is similar to performing a getArrivalsByCRS or getDeparturesByCRS lookup, with the appropriate filterStation parameter. However using the getArrivalsAndDeparturesByCRS endpoint shows more details for each of the returned services.|
|filterType|query|string|false|Determines if the filterStation parameter should be applied for services arriving to, or leaving from the selected station. Required if filterStation is set.|

<h3 id="getarrivalsanddeparturesbycrs-is-used-to-get-a-list-of-services-arriving-to-and-departing-from-a-uk-train-station-by-the-crs-computer-reservation-system-code-this-will-typically-return-a-list-of-train-services-but-will-also-return-any-replacement-bus-or-ferry-services-that-are-in-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**OK**: The API Request was successful and returned data.|None|
|400|Bad Request|Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.|None|
|401|Unauthorized|**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.|None|
|429|Too Many Requests|**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.|None|
|500|Internal Server Error|**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.|None|
|503|Service Unavailable|**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

<a id="opIdgetArrivalsByCRS"></a>

> Code samples

```bash
curl 'https://example.com/getArrivalsByCRS/str?apiKey=string'
```

`GET /getArrivalsByCRS/{CRS}`

<h3 id="getarrivalsbycrs-is-used-to-get-a-list-of-services-arriving-to-a-uk-train-station-by-the-crs-computer-reservation-system-code-this-will-typically-return-a-list-of-train-services-but-will-also-return-any-replacement-bus-or-ferry-services-that-are-in-place-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CRS|path|string|true|The CRS (Computer Reservation System) for the Station you wish to get arrival information for, e.g. KGX for London Kings Cross.|
|apiKey|query|string|true|The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.|
|numServices|query|integer|false|The number of arriving train services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running to this station within the time window specified.|
|timeOffset|query|integer|false|The time window in minutes to offset the arrival information by. For example, a value of 20 will not show services arriving within the next 20 minutes.|
|timeWindow|query|integer|false|The time window to show train services for in minutes. For example, a value of 60 will show services arriving to the station in the next 60 minutes.|
|serviceDetails|query|boolean|false|Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.|
|filterStation|query|string|false|The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services arriving to Paddington that stopped at Reading.|

<h3 id="getarrivalsbycrs-is-used-to-get-a-list-of-services-arriving-to-a-uk-train-station-by-the-crs-computer-reservation-system-code-this-will-typically-return-a-list-of-train-services-but-will-also-return-any-replacement-bus-or-ferry-services-that-are-in-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**OK**: The API Request was successful and returned data.|None|
|400|Bad Request|Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.|None|
|401|Unauthorized|**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.|None|
|429|Too Many Requests|**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.|None|
|500|Internal Server Error|**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.|None|
|503|Service Unavailable|**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

<a id="opIdgetDeparturesByCRS"></a>

> Code samples

```bash
curl 'https://example.com/getDeparturesByCRS/str?apiKey=string'
```

`GET /getDeparturesByCRS/{CRS}`

<h3 id="getdeparturesbycrs-is-used-to-get-a-list-of-services-departing-from-a-uk-train-station-by-the-crs-computer-reservation-system-code-this-will-typically-return-a-list-of-train-services-but-will-also-return-any-replacement-bus-or-ferry-services-that-are-in-place-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CRS|path|string|true|The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.|
|apiKey|query|string|true|The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.|
|numServices|query|integer|false|The number of departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running from the selected station within the time window specified.|
|timeOffset|query|integer|false|The time window in minutes to offset the departure information by. For example, a value of 20 will not show services departing within the next 20 minutes.|
|timeWindow|query|integer|false|The time window to show services for in minutes. For example, a value of 60 will show services departing the station in the next 60 minutes.|
|serviceDetails|query|boolean|false|Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.|
|filterStation|query|string|false|The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services departing from Paddington that stop at Reading.|

<h3 id="getdeparturesbycrs-is-used-to-get-a-list-of-services-departing-from-a-uk-train-station-by-the-crs-computer-reservation-system-code-this-will-typically-return-a-list-of-train-services-but-will-also-return-any-replacement-bus-or-ferry-services-that-are-in-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**OK**: The API Request was successful and returned data.|None|
|400|Bad Request|Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.|None|
|401|Unauthorized|**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.|None|
|429|Too Many Requests|**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.|None|
|500|Internal Server Error|**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.|None|
|503|Service Unavailable|**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="departureboardio-api-fastest-and-next-departures">Fastest and Next Departures</h1>

## getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.

<a id="opIdgetFastestDeparturesByCRS"></a>

> Code samples

```bash
curl 'https://example.com/getFastestDeparturesByCRS/str?apiKey=string&filterList=string'
```

`GET /getFastestDeparturesByCRS/{CRS}`

<h3 id="getfastestdeparturesbycrs-is-used-to-get-the-fastest-next-service-running-between-two-stations-multiple-destinations-can-be-specified-this-will-typically-return-a-single-train-service-but-will-also-return-a-replacement-bus-or-ferry-service-if-in-place-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CRS|path|string|true|The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.|
|apiKey|query|string|true|The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.|
|filterList|query|string|true|The CRS (Computer Reservation System) codes to show the fastest departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.|
|timeOffset|query|integer|false|The time window in minutes to offset the departure information by. For example, a value of 20 will show the fastest services departing after 20 minutes.|
|timeWindow|query|integer|false|The time window to show train services for in minutes. For example, a value of 60 will show the fastest services departing the station in the next 60 minutes.|
|serviceDetails|query|boolean|false|Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.|

<h3 id="getfastestdeparturesbycrs-is-used-to-get-the-fastest-next-service-running-between-two-stations-multiple-destinations-can-be-specified-this-will-typically-return-a-single-train-service-but-will-also-return-a-replacement-bus-or-ferry-service-if-in-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**OK**: The API Request was successful and returned data.|None|
|400|Bad Request|Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.|None|
|401|Unauthorized|**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.|None|
|429|Too Many Requests|**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.|None|
|500|Internal Server Error|**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.|None|
|503|Service Unavailable|**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

<a id="opIdgetNextDeparturesByCRS"></a>

> Code samples

```bash
curl 'https://example.com/getNextDeparturesByCRS/str?apiKey=string&filterList=string'
```

`GET /getNextDeparturesByCRS/{CRS}`

<h3 id="getnextdeparturesbycrs-is-used-to-get-the-next-service-running-between-two-stations-multiple-destinations-can-be-specified-this-will-typically-return-a-single-train-service-but-will-also-return-a-replacement-bus-or-ferry-service-if-in-place-this-will-return-the-next-departures-for-each-of-the-filterlist-stations-specified-it-may-not-return-the-fastest-next-service-to-get-the-fastest-next-service-use-the-getfastestdeparturesbycrs-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CRS|path|string|true|The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.|
|apiKey|query|string|true|The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.|
|filterList|query|string|true|The CRS (Computer Reservation System) codes to show departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.|
|timeOffset|query|integer|false|The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.|
|timeWindow|query|integer|false|The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.|
|serviceDetails|query|boolean|false|Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.|

<h3 id="getnextdeparturesbycrs-is-used-to-get-the-next-service-running-between-two-stations-multiple-destinations-can-be-specified-this-will-typically-return-a-single-train-service-but-will-also-return-a-replacement-bus-or-ferry-service-if-in-place-this-will-return-the-next-departures-for-each-of-the-filterlist-stations-specified-it-may-not-return-the-fastest-next-service-to-get-the-fastest-next-service-use-the-getfastestdeparturesbycrs-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**OK**: The API Request was successful and returned data.|None|
|400|Bad Request|Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.|None|
|401|Unauthorized|**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.|None|
|429|Too Many Requests|**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.|None|
|500|Internal Server Error|**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.|None|
|503|Service Unavailable|**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="departureboardio-api-service-information">Service Information</h1>

## getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.

<a id="opIdgetServiceDetailsByID"></a>

> Code samples

```bash
curl 'https://example.com/getServiceDetailsByID/string?apiKey=string'
```

`GET /getServiceDetailsByID/{serviceID}`

<h3 id="getservicedetailsbyid-is-used-to-get-information-on-a-service-by-the-service-id-this-will-typically-return-a-train-service-but-will-also-return-a-bus-and-ferry-services-the-service-id-must-be-provided-in-the-serviceidurlsafe-format-that-is-provided-in-the-response-for-arrival-and-departure-boards-a-service-id-is-specific-to-a-station-and-can-only-be-looked-up-for-a-short-time-after-a-trainbusferry-arrives-at-or-departs-from-a-station-this-is-a-national-rail-limitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceID|path|string|true|The Service ID for the Train Service you wish to look up in the URL Safe format. For example "qsec4O8LW7k8ITcOt_ir4Q--".|
|apiKey|query|string|true|The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.|

<h3 id="getservicedetailsbyid-is-used-to-get-information-on-a-service-by-the-service-id-this-will-typically-return-a-train-service-but-will-also-return-a-bus-and-ferry-services-the-service-id-must-be-provided-in-the-serviceidurlsafe-format-that-is-provided-in-the-response-for-arrival-and-departure-boards-a-service-id-is-specific-to-a-station-and-can-only-be-looked-up-for-a-short-time-after-a-trainbusferry-arrives-at-or-departs-from-a-station-this-is-a-national-rail-limitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**OK**: The API Request was successful and returned data.|None|
|400|Bad Request|Your request was not valid. <br><br>The departureboard.io API performs validation of queries to make sure they make sense and will return a valid response from National Rail. Bad queries made directly to the National Rail API return a generic `500 Internal Server Error` response which is difficult to troubleshoot.<br><br>By validating requests the departureboard.io API can provide improved error messages to help with troubleshooting, and prevent bad queries from ever reaching National Rail.|None|
|401|Unauthorized|**Unauthorized**: Your National Rail API key is wrong or your key has not been registered in the [departureboard.io API Portal](https://api-portal.departureboard.io) as detailed in the [registration](https://api.departureboard.io/docs/registration) section of the documentation.<br><br>You should double check your API Key is valid and has been whitelisted. Newly generated API Keys can take up to 15 minutes to become active.|None|
|429|Too Many Requests|**Too Many Requests**: You have exceeded the rate limit. <br><br>Get in touch to arrange an exception, or slow down your requests.|None|
|500|Internal Server Error|**Internal Server Error**: There was an unknown error returning the response.<br><br>This error is served when an unknown error is encountered returning your response. This is often due to upstream problems with National Rail, for example them returning a bad response or malformed data. In rare circumstances it can be caused by a bad request that was not caught in the departureboard.io validation.|None|
|503|Service Unavailable|**Service Unavailable**: The National Rail upstream API is experiencing issues.<br><br>This error is returned when the departureboard.io API detects issues with the upstream National Rail API. The departureboard.io API is functioning but cannot return a result as the National Rail API is down.|None|

<aside class="success">
This operation does not require authentication
</aside>
