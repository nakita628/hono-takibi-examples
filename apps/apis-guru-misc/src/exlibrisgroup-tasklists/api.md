<h1 id="ex-libris-apis">Ex Libris APIs v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

For more information on how to use these APIs, including how to create an API key required for authentication, see [Alma REST APIs](https://developers.exlibrisgroup.com/alma/apis).

Base URLs:

* <a href="https://api-eu.hosted.exlibrisgroup.com">https://api-eu.hosted.exlibrisgroup.com</a>

* <a href="https://api-na.hosted.exlibrisgroup.com">https://api-na.hosted.exlibrisgroup.com</a>

* <a href="https://api-ap.hosted.exlibrisgroup.com">https://api-ap.hosted.exlibrisgroup.com</a>

* <a href="https://api-cn.hosted.exlibrisgroup.com">https://api-cn.hosted.exlibrisgroup.com</a>

* <a href="https://api-ca.hosted.exlibrisgroup.com">https://api-ca.hosted.exlibrisgroup.com</a>

<a href="https://developers.exlibrisgroup.com/about/terms">Terms of service</a>

<a href="https://developers.exlibrisgroup.com/alma/apis/">Detailed documentation on these APIs at the Ex Libris Developer Network.</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **apikey**, in: query. API key used to authorize requests. Learn about how to create API keys at [Alma REST APIs](https://developers.exlibrisgroup.com/alma/apis/#defining)

<h1 id="ex-libris-apis-requested-resources">Requested Resources</h1>

## Get Requested Resources

<a id="opIdget/almaws/v1/task-lists/requested-resources"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/requested-resources?library=string&circ_desk=string&apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /almaws/v1/task-lists/requested-resources`

This API returns a list of requested resources to be picked from the shelf in Alma

<h3 id="get-requested-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library|query|string|true|The library of the given circulation desk or department where the resources are located. Mandatory.|
|circ_desk|query|string|true|The circulation desk where the action is being performed. Mandatory.|
|location|query|string|false|The location code. Optional.|
|order_by|query|string|false|The order in which to retrieve the results: location/call_number (default).|
|direction|query|string|false|The order direction in which to retrieve the results. Optional.|
|pickup_inst|query|string|false|The pickup institution. Optional.|
|reported|query|string|false|Show reported results: Y/N. Optional.|
|printed|query|string|false|Show printed results: Y/N. Optional.|
|limit|query|integer|false|Limits the number of results. Optional. Valid values are 0-100. Default value: 10.|
|offset|query|integer|false|Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.|

> Example responses

> 200 Response

```json
{
  "requested_resource": [
    {
      "location": {
        "call_number": "BD450 .T266 1989",
        "copy": [
          {
            "alternative_call_number": "",
            "barcode": "38751000062809",
            "base_status": {
              "desc": "string",
              "value": "0"
            },
            "link": "",
            "pid": "23321797470001021",
            "storage_location_id": "159111000"
          }
        ],
        "holding_id": {
          "link": "string",
          "value": "22321797490001021"
        },
        "library": {
          "desc": "string",
          "value": "TML"
        },
        "shelving_location": "STACK"
      },
      "request": [
        {
          "comment": "your request is important to us",
          "destination": {
            "desc": "string",
            "value": ""
          },
          "id": "1117421001021",
          "link": "",
          "printed": "true",
          "reported": "true",
          "request_date": "2015-05-05Z",
          "request_sub_type": {
            "desc": "string",
            "value": ""
          },
          "request_time": "2013-11-12T14:59:59.000Z",
          "request_type": "BOOKING",
          "requester": {
            "desc": "string",
            "value": "John Smith"
          }
        }
      ],
      "resource_metadata": {
        "author": "Taylor, Charles, 1931-",
        "isbn": "0674824253 (alk. paper)",
        "issn": "",
        "mms_id": {
          "link": "string",
          "value": "99102122810001021"
        },
        "publication_place": "Cambridge, Mass. :",
        "publication_year": "1989",
        "publisher": "Harvard University",
        "title": "Sources of the self : the making of the modern identity / Charles Taylor."
      }
    }
  ],
  "total_record_count": ""
}
```

<h3 id="get-requested-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>402119 - 'General error.'<br><br>401664 - 'Mandatory field is missing: X.'<br><br>40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-requested-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requested_resource|[object]|false|none|Requested resource object.|
|» location|object|false|none|Location of the requested resource.|
|» » call_number|string|false|none|Call number of the item.|
|» » copy|[object]|false|none|Copies of resource in a specific location.|
|» » » alternative_call_number|string|false|none|Alternative call number.|
|» » » barcode|string|false|none|The item's barcode.|
|» » » base_status|object|false|none|none|
|» » » » desc|string|false|none|none|
|» » » » value|string|false|none|none|
|» » » link|string|false|none|none|
|» » » pid|string|false|none|The resource's pid.|
|» » » storage_location_id|string|false|none|The item's storage location id.|
|» » holding_id|object|false|none|Holding pid, a unique holding id that the resource is associated with.|
|» » » link|string|false|none|none|
|» » » value|string|false|none|none|
|» » library|object|false|none|Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » shelving_location|string|false|none|The location.|
|» request|[object]|false|none|Requests for resource.|
|» » comment|string|false|none|The related note of the request.|
|» » destination|object|false|none|The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » id|string|false|none|The identifier of the request in Alma.|
|» » link|string|false|none|none|
|» » printed|boolean|false|none|Indication whether the request is printed.|
|» » reported|boolean|false|none|Indication whether the request is reported.|
|» » request_date|string(date)|false|none|Deprecated - use request_time instead. The request date.|
|» » request_sub_type|object|false|none|The sub type of the request.|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » request_time|string(date-time)|false|none|The creation date and exact time of the request. Output parameter.|
|» » request_type|string|true|none|none|
|» » requester|object|false|none|A description of the requester.|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» resource_metadata|object|false|none|Metadata about the requested resource.|
|» » author|string|false|none|An entity primarily responsible for making the resource.|
|» » isbn|string|false|none|ISBN|
|» » issn|string|false|none|ISSN|
|» » mms_id|object|false|none|The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).|
|» » » link|string|false|none|none|
|» » » value|string|false|none|none|
|» » publication_place|string|false|none|Place of publication.|
|» » publication_year|string|false|none|The year associated with the publication of the resource.|
|» » publisher|string|false|none|An entity responsible for making the resource available.|
|» » title|string|false|none|The resource title.|
|total_record_count|integer(int32)|false|none|The total number of requested resources.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » request_type|BOOKING|
|» » request_type|DIGITIZATION|
|» » request_type|HOLD|
|» » request_type|MOVE|
|» » request_type|WORK_ORDER|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Act on Requested Resources

<a id="opIdpost/almaws/v1/task-lists/requested-resources"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/requested-resources?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /almaws/v1/task-lists/requested-resources`

This API performs an action on requested resources that are on the shelf in Alma

<h3 id="act-on-requested-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library|query|string|false|The library of the given circulation desk or department where the resources are located. Mandatory.|
|circ_desk|query|string|false|The circulation desk where the action is being performed. Mandatory.|
|op|query|string|false|Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.|
|location|query|string|false|The location code. Optional.|
|pickup_inst|query|string|false|The pickup institution. Optional.|
|reported|query|string|false|Show reported results: Y/N. Optional.|
|printed|query|string|false|Show printed results: Y/N. Optional.|

> Example responses

> 200 Response

```json
{
  "requested_resource": [
    {
      "location": {
        "call_number": "BD450 .T266 1989",
        "copy": [
          {
            "alternative_call_number": "",
            "barcode": "38751000062809",
            "base_status": {
              "desc": "string",
              "value": "0"
            },
            "link": "",
            "pid": "23321797470001021",
            "storage_location_id": "159111000"
          }
        ],
        "holding_id": {
          "link": "string",
          "value": "22321797490001021"
        },
        "library": {
          "desc": "string",
          "value": "TML"
        },
        "shelving_location": "STACK"
      },
      "request": [
        {
          "comment": "your request is important to us",
          "destination": {
            "desc": "string",
            "value": ""
          },
          "id": "1117421001021",
          "link": "",
          "printed": "true",
          "reported": "true",
          "request_date": "2015-05-05Z",
          "request_sub_type": {
            "desc": "string",
            "value": ""
          },
          "request_time": "2013-11-12T14:59:59.000Z",
          "request_type": "BOOKING",
          "requester": {
            "desc": "string",
            "value": "John Smith"
          }
        }
      ],
      "resource_metadata": {
        "author": "Taylor, Charles, 1931-",
        "isbn": "0674824253 (alk. paper)",
        "issn": "",
        "mms_id": {
          "link": "string",
          "value": "99102122810001021"
        },
        "publication_place": "Cambridge, Mass. :",
        "publication_year": "1989",
        "publisher": "Harvard University",
        "title": "Sources of the self : the making of the modern identity / Charles Taylor."
      }
    }
  ],
  "total_record_count": ""
}
```

<h3 id="act-on-requested-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>402119 - 'General error.'<br><br>401664 - 'Mandatory field is missing: X.'<br><br>40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="act-on-requested-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requested_resource|[object]|false|none|Requested resource object.|
|» location|object|false|none|Location of the requested resource.|
|» » call_number|string|false|none|Call number of the item.|
|» » copy|[object]|false|none|Copies of resource in a specific location.|
|» » » alternative_call_number|string|false|none|Alternative call number.|
|» » » barcode|string|false|none|The item's barcode.|
|» » » base_status|object|false|none|none|
|» » » » desc|string|false|none|none|
|» » » » value|string|false|none|none|
|» » » link|string|false|none|none|
|» » » pid|string|false|none|The resource's pid.|
|» » » storage_location_id|string|false|none|The item's storage location id.|
|» » holding_id|object|false|none|Holding pid, a unique holding id that the resource is associated with.|
|» » » link|string|false|none|none|
|» » » value|string|false|none|none|
|» » library|object|false|none|Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » shelving_location|string|false|none|The location.|
|» request|[object]|false|none|Requests for resource.|
|» » comment|string|false|none|The related note of the request.|
|» » destination|object|false|none|The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » id|string|false|none|The identifier of the request in Alma.|
|» » link|string|false|none|none|
|» » printed|boolean|false|none|Indication whether the request is printed.|
|» » reported|boolean|false|none|Indication whether the request is reported.|
|» » request_date|string(date)|false|none|Deprecated - use request_time instead. The request date.|
|» » request_sub_type|object|false|none|The sub type of the request.|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » request_time|string(date-time)|false|none|The creation date and exact time of the request. Output parameter.|
|» » request_type|string|true|none|none|
|» » requester|object|false|none|A description of the requester.|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» resource_metadata|object|false|none|Metadata about the requested resource.|
|» » author|string|false|none|An entity primarily responsible for making the resource.|
|» » isbn|string|false|none|ISBN|
|» » issn|string|false|none|ISSN|
|» » mms_id|object|false|none|The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).|
|» » » link|string|false|none|none|
|» » » value|string|false|none|none|
|» » publication_place|string|false|none|Place of publication.|
|» » publication_year|string|false|none|The year associated with the publication of the resource.|
|» » publisher|string|false|none|An entity responsible for making the resource available.|
|» » title|string|false|none|The resource title.|
|total_record_count|integer(int32)|false|none|The total number of requested resources.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » request_type|BOOKING|
|» » request_type|DIGITIZATION|
|» » request_type|HOLD|
|» » request_type|MOVE|
|» » request_type|WORK_ORDER|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="ex-libris-apis-lending-requests">Lending Requests</h1>

## Get Lending Requests

<a id="opIdget/almaws/v1/task-lists/rs/lending-requests"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/rs/lending-requests?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /almaws/v1/task-lists/rs/lending-requests`

This API returns a list of lending requests in Alma

<h3 id="get-lending-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library|query|string|false|The resource sharing library for which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|status|query|string|false|The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed) and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|printed|query|string|false|The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.|
|reported|query|string|false|The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.|
|partner|query|string|false|The partner value. Only lending requests from this partner should be retrieved. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).|
|requested_format|query|string|false|Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|supplied_format|query|string|false|Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).|

> Example responses

> 200 Response

```json
{
  "total_record_count": "",
  "user_resource_sharing_request": [
    {
      "additional_barcode": [
        "00023705571000021"
      ],
      "additional_person_name": "John Smith",
      "agree_to_copyright_terms": "true",
      "allow_other_formats": "true",
      "author": "John Smith",
      "author_initials": "J.S",
      "barcode": "00023705571000021",
      "bib_note": "",
      "call_number": "1",
      "chapter": "4",
      "chapter_author": "John Smith",
      "chapter_title": "Chapter title",
      "citation_type": {
        "desc": "string",
        "value": "BK"
      },
      "copyright_status": {
        "desc": "string",
        "value": "APPROVED"
      },
      "created_date": "2013-11-12Z",
      "created_time": "2019-12-18T14:36:48.659Z",
      "doi": "",
      "edition": "1",
      "editor": "John Smith",
      "end_page": "49",
      "external_id": "12013330000874120",
      "format": {
        "desc": "string",
        "value": "PHYSICAL"
      },
      "fund": {
        "desc": "string",
        "value": ""
      },
      "has_active_notes": "false",
      "isbn": "0674824253 (alk. paper)",
      "issn": "",
      "issue": "",
      "journal_title": "Journal title",
      "last_interest_date": "2013-12-13Z",
      "last_modified_date": "2015-10-11Z",
      "last_modified_time": "2019-12-18T14:36:48.659Z",
      "lcc_number": "102188800001",
      "level_of_service": {
        "desc": "string",
        "value": "NORMAL_LOCAL"
      },
      "lost_damaged_fee": {
        "currency": {
          "desc": "string",
          "value": "USD"
        },
        "sum": "0.00"
      },
      "maximum_fee": "2000.0",
      "mms_id": "9933745180101020",
      "need_patron_info": "true",
      "note": "",
      "oclc_number": "100100100",
      "other_standard_id": "100100100",
      "owner": "John Smith",
      "pages": "",
      "part": "",
      "partner": {
        "desc": "string",
        "value": "10218885421021"
      },
      "pickup_location": {
        "desc": "string",
        "value": "ONL"
      },
      "pickup_location_type": "LIBRARY",
      "place_of_publication": "Cambridge, Mass. :",
      "pmid": "1284442031021",
      "preferred_send_method": {
        "desc": "string",
        "value": "ARIEL"
      },
      "printed": "true",
      "publisher": "John Smith",
      "reading_room": {
        "desc": "string",
        "value": ""
      },
      "receive_cost": {
        "currency": {
          "desc": "string",
          "value": "USD"
        },
        "sum": "0.00"
      },
      "remote_record_id": "100100100",
      "reported": "false",
      "request_cost": {
        "currency": {
          "desc": "string",
          "value": "USD"
        },
        "sum": "0.00"
      },
      "request_id": "1001966830001021",
      "requested_language": {
        "desc": "string",
        "value": "ml"
      },
      "requested_media": "1",
      "requester": {
        "desc": "string",
        "value": "Jane doe"
      },
      "rs_note": [
        {
          "content": "",
          "created_by": "",
          "created_date": "2024-05-30Z"
        }
      ],
      "series_title_number": "100",
      "shipping_cost": {
        "currency": {
          "desc": "string",
          "value": "USD"
        },
        "sum": "0.00"
      },
      "source": "",
      "specific_edition": "true",
      "start_page": "2",
      "status": {
        "desc": "string",
        "value": "ACTIVE"
      },
      "supplied_format": {
        "desc": "string",
        "value": "DIGITAL"
      },
      "text_email": "",
      "text_postal_1": "",
      "text_postal_2": "",
      "text_postal_3": "",
      "text_postal_4": "",
      "title": "Harry Potter",
      "use_alternative_address": "false",
      "user_request": {
        "link": "string",
        "value": ""
      },
      "volume": "10",
      "willing_to_pay": "false",
      "year": "2010"
    }
  ]
}
```

<h3 id="get-lending-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_user_resource_sharing_requests.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_requests.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>402119 - 'General error.'<br><br>401664 - 'Mandatory field is missing: X.'<br><br>40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-lending-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_record_count|integer(int64)|false|none|The total number of resource sharing requests in the given list.|
|user_resource_sharing_request|[object]|false|none|UserResourceSharingRequest object.|
|» additional_barcode|[string]|false|none|List of additional barcodes. Note that the first one appears in the main barcode field.|
|» additional_person_name|string|false|none|The name of an additional contact.|
|» agree_to_copyright_terms|boolean|false|none|Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.|
|» allow_other_formats|boolean|false|none|Indication whether other formats besides the value in format field are acceptable. Default is false.|
|» author|string|false|none|Author of the requested resource.|
|» author_initials|string|false|none|Author initials of the requested resource.|
|» barcode|string|false|none|Barcode of the requested resource.|
|» bib_note|string|false|none|The note of the bibliographic record.|
|» call_number|string|false|none|The call number of the book. Indicates the library shelf on which the books are located.|
|» chapter|string|false|none|The chapter number in the journal that contains the article.|
|» chapter_author|string|false|none|For a book chapter, the author of this chapter.|
|» chapter_title|string|false|none|For a book chapter, the title of this chapter.|
|» citation_type|object|false|none|Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» copyright_status|object|false|none|The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» created_date|string(date)|false|none|The request creation date.|
|» created_time|string(date-time)|false|none|The request creation time.|
|» doi|string|false|none|The doi of the requested resource.|
|» edition|string|false|none|The edition of the requested resource.|
|» editor|string|false|none|The editor of the book (typically used for books where chapters have different authors).|
|» end_page|string|false|none|The end page of the requested resource.|
|» external_id|string|false|none|External identifier of the resource sharing request. Mandatory when creating a lending request.|
|» format|object|false|none|Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» fund|object|false|none|The code of the fund. Not relevant for lending requests.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» has_active_notes|boolean|false|none|Indication whether the request has active notes. Output parameter.|
|» isbn|string|false|none|ISBN of the requested resource.|
|» issn|string|false|none|ISSN of the requested resource.|
|» issue|string|false|none|The issue of the requested resource.|
|» journal_title|string|false|none|The title of the journal. Relevant when an article is requested.|
|» last_interest_date|string(date)|false|none|Last date the request is needed. Optional.|
|» last_modified_date|string(date)|false|none|Date by which the last change to the request was made.|
|» last_modified_time|string(date-time)|false|none|Time by which the last change to the request was made.|
|» lcc_number|string|false|none|The library of congress number of the book.|
|» level_of_service|object|false|none|The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» lost_damaged_fee|object|false|none|none|
|» » currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » sum|number(double)|true|none|The total sum.|
|» maximum_fee|number(float)|false|none|Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.|
|» mms_id|string|false|none|MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).|
|» need_patron_info|boolean|false|none|Indication whether patron information is needed. Not relevant for lending requests.|
|» note|string|false|none|General note.|
|» oclc_number|string|false|none|The oclc number of the book.|
|» other_standard_id|string|false|none|The other standard id of the requested resource.|
|» owner|string|false|none|The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.|
|» pages|string|false|none|The relevant pages of the requested resource.|
|» part|string|false|none|The part of the requested resource.|
|» partner|object|false|none|The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» pickup_location|object|false|none|The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» pickup_location_type|string|false|none|The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.|
|» place_of_publication|string|false|none|The publication place of the requested resource.|
|» pmid|string|false|none|The pmid of the requested resource.|
|» preferred_send_method|object|false|none|Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» printed|boolean|false|none|Indication whether the request is printed. Output parameter. Relevant for lending requests.|
|» publisher|string|false|none|Publisher of the requested resource.|
|» reading_room|object|false|none|The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» receive_cost|object|false|none|none|
|» » currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » sum|number(double)|true|none|The total sum.|
|» remote_record_id|string|false|none|The remote record id of the requested resource.|
|» reported|boolean|false|none|Indication whether the request is reported. Output parameter. Relevant for lending requests.|
|» request_cost|object|false|none|none|
|» » currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » sum|number(double)|true|none|The total sum.|
|» request_id|string|false|none|Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.|
|» requested_language|object|false|none|The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» requested_media|string|false|none|A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.|
|» requester|object|false|none|The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» rs_note|[object]|false|none|List of related notes that appear in the Notes tab in the UI..|
|» » content|string|false|none|The note's text. Mandatory.|
|» » created_by|string|false|none|The creator of the note.|
|» » created_date|string(date)|false|none|The creation date of the note. Default is the current date.|
|» series_title_number|string|false|none|The series title number of the requested resource.|
|» shipping_cost|object|false|none|none|
|» » currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » » desc|string|false|none|none|
|» » » value|string|false|none|none|
|» » sum|number(double)|true|none|The total sum.|
|» source|string|false|none|The source of the requested resource.|
|» specific_edition|boolean|false|none|Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.|
|» start_page|string|false|none|The relevant start page of the requested resource.|
|» status|object|false|none|The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» supplied_format|object|false|none|Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» text_email|string|false|none|Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.|
|» text_postal_1|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|» text_postal_2|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|» text_postal_3|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|» text_postal_4|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|» title|string|false|none|Title of the requested resource. Mandatory unless mms_id is supplied.|
|» use_alternative_address|boolean|false|none|An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.|
|» user_request|object|false|none|The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).|
|» » link|string|false|none|none|
|» » value|string|false|none|none|
|» volume|string|false|none|The volume number of the journal that contains the article.|
|» willing_to_pay|boolean|false|none|Indication whether patron is willing to pay. Currently not relevant for lending requests.|
|» year|string|false|none|Publication date of the requested resource.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Act on Lending Requests

<a id="opIdpost/almaws/v1/task-lists/rs/lending-requests"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/rs/lending-requests?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /almaws/v1/task-lists/rs/lending-requests`

This API preforms the requested action on a list (specified by given filters) of lending requests in Alma

<h3 id="act-on-lending-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library|query|string|false|The resource sharing library from which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|op|query|string|false|Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.|
|status|query|string|false|The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|printed|query|string|false|The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.|
|reported|query|string|false|The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.|
|partner|query|string|false|The partner value. Only lending requests from this partner should be. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).|
|requested_format|query|string|false|Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).|
|supplied_format|query|string|false|Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).|

> Example responses

> 200 Response

```json
{
  "additional_barcode": [
    "00023705571000021"
  ],
  "additional_person_name": "John Smith",
  "agree_to_copyright_terms": "true",
  "allow_other_formats": "true",
  "author": "John Smith",
  "author_initials": "J.S",
  "barcode": "00023705571000021",
  "bib_note": "",
  "call_number": "1",
  "chapter": "4",
  "chapter_author": "John Smith",
  "chapter_title": "Chapter title",
  "citation_type": {
    "desc": "string",
    "value": "BK"
  },
  "copyright_status": {
    "desc": "string",
    "value": "APPROVED"
  },
  "created_date": "2013-11-12Z",
  "created_time": "2019-12-18T14:36:48.659Z",
  "doi": "",
  "edition": "1",
  "editor": "John Smith",
  "end_page": "49",
  "external_id": "12013330000874120",
  "format": {
    "desc": "string",
    "value": "PHYSICAL"
  },
  "fund": {
    "desc": "string",
    "value": ""
  },
  "has_active_notes": "false",
  "isbn": "0674824253 (alk. paper)",
  "issn": "",
  "issue": "",
  "journal_title": "Journal title",
  "last_interest_date": "2013-12-13Z",
  "last_modified_date": "2015-10-11Z",
  "last_modified_time": "2019-12-18T14:36:48.659Z",
  "lcc_number": "102188800001",
  "level_of_service": {
    "desc": "string",
    "value": "NORMAL_LOCAL"
  },
  "lost_damaged_fee": {
    "currency": {
      "desc": "string",
      "value": "USD"
    },
    "sum": "0.00"
  },
  "maximum_fee": "2000.0",
  "mms_id": "9933745180101020",
  "need_patron_info": "true",
  "note": "",
  "oclc_number": "100100100",
  "other_standard_id": "100100100",
  "owner": "John Smith",
  "pages": "",
  "part": "",
  "partner": {
    "desc": "string",
    "value": "10218885421021"
  },
  "pickup_location": {
    "desc": "string",
    "value": "ONL"
  },
  "pickup_location_type": "LIBRARY",
  "place_of_publication": "Cambridge, Mass. :",
  "pmid": "1284442031021",
  "preferred_send_method": {
    "desc": "string",
    "value": "ARIEL"
  },
  "printed": "true",
  "publisher": "John Smith",
  "reading_room": {
    "desc": "string",
    "value": ""
  },
  "receive_cost": {
    "currency": {
      "desc": "string",
      "value": "USD"
    },
    "sum": "0.00"
  },
  "remote_record_id": "100100100",
  "reported": "false",
  "request_cost": {
    "currency": {
      "desc": "string",
      "value": "USD"
    },
    "sum": "0.00"
  },
  "request_id": "1001966830001021",
  "requested_language": {
    "desc": "string",
    "value": "ml"
  },
  "requested_media": "1",
  "requester": {
    "desc": "string",
    "value": "Jane doe"
  },
  "rs_note": [
    {
      "content": "",
      "created_by": "",
      "created_date": "2024-05-30Z"
    }
  ],
  "series_title_number": "100",
  "shipping_cost": {
    "currency": {
      "desc": "string",
      "value": "USD"
    },
    "sum": "0.00"
  },
  "source": "",
  "specific_edition": "true",
  "start_page": "2",
  "status": {
    "desc": "string",
    "value": "ACTIVE"
  },
  "supplied_format": {
    "desc": "string",
    "value": "DIGITAL"
  },
  "text_email": "",
  "text_postal_1": "",
  "text_postal_2": "",
  "text_postal_3": "",
  "text_postal_4": "",
  "title": "Harry Potter",
  "use_alternative_address": "false",
  "user_request": {
    "link": "string",
    "value": ""
  },
  "volume": "10",
  "willing_to_pay": "false",
  "year": "2010"
}
```

<h3 id="act-on-lending-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_user_resource_sharing_request.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_request.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>402119 - 'General error.'<br><br>401666 - 'X parameter is not valid.'<br><br>401664 - 'Mandatory field is missing: X.'<br><br>40166414 - 'The parameter 'X' is mandatory. Valid options are: Y.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="act-on-lending-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_barcode|[string]|false|none|List of additional barcodes. Note that the first one appears in the main barcode field.|
|additional_person_name|string|false|none|The name of an additional contact.|
|agree_to_copyright_terms|boolean|false|none|Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.|
|allow_other_formats|boolean|false|none|Indication whether other formats besides the value in format field are acceptable. Default is false.|
|author|string|false|none|Author of the requested resource.|
|author_initials|string|false|none|Author initials of the requested resource.|
|barcode|string|false|none|Barcode of the requested resource.|
|bib_note|string|false|none|The note of the bibliographic record.|
|call_number|string|false|none|The call number of the book. Indicates the library shelf on which the books are located.|
|chapter|string|false|none|The chapter number in the journal that contains the article.|
|chapter_author|string|false|none|For a book chapter, the author of this chapter.|
|chapter_title|string|false|none|For a book chapter, the title of this chapter.|
|citation_type|object|false|none|Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|copyright_status|object|false|none|The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|created_date|string(date)|false|none|The request creation date.|
|created_time|string(date-time)|false|none|The request creation time.|
|doi|string|false|none|The doi of the requested resource.|
|edition|string|false|none|The edition of the requested resource.|
|editor|string|false|none|The editor of the book (typically used for books where chapters have different authors).|
|end_page|string|false|none|The end page of the requested resource.|
|external_id|string|false|none|External identifier of the resource sharing request. Mandatory when creating a lending request.|
|format|object|false|none|Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|fund|object|false|none|The code of the fund. Not relevant for lending requests.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|has_active_notes|boolean|false|none|Indication whether the request has active notes. Output parameter.|
|isbn|string|false|none|ISBN of the requested resource.|
|issn|string|false|none|ISSN of the requested resource.|
|issue|string|false|none|The issue of the requested resource.|
|journal_title|string|false|none|The title of the journal. Relevant when an article is requested.|
|last_interest_date|string(date)|false|none|Last date the request is needed. Optional.|
|last_modified_date|string(date)|false|none|Date by which the last change to the request was made.|
|last_modified_time|string(date-time)|false|none|Time by which the last change to the request was made.|
|lcc_number|string|false|none|The library of congress number of the book.|
|level_of_service|object|false|none|The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|lost_damaged_fee|object|false|none|none|
|» currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» sum|number(double)|true|none|The total sum.|
|maximum_fee|number(float)|false|none|Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.|
|mms_id|string|false|none|MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).|
|need_patron_info|boolean|false|none|Indication whether patron information is needed. Not relevant for lending requests.|
|note|string|false|none|General note.|
|oclc_number|string|false|none|The oclc number of the book.|
|other_standard_id|string|false|none|The other standard id of the requested resource.|
|owner|string|false|none|The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.|
|pages|string|false|none|The relevant pages of the requested resource.|
|part|string|false|none|The part of the requested resource.|
|partner|object|false|none|The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|pickup_location|object|false|none|The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|pickup_location_type|string|false|none|The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.|
|place_of_publication|string|false|none|The publication place of the requested resource.|
|pmid|string|false|none|The pmid of the requested resource.|
|preferred_send_method|object|false|none|Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|printed|boolean|false|none|Indication whether the request is printed. Output parameter. Relevant for lending requests.|
|publisher|string|false|none|Publisher of the requested resource.|
|reading_room|object|false|none|The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|receive_cost|object|false|none|none|
|» currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» sum|number(double)|true|none|The total sum.|
|remote_record_id|string|false|none|The remote record id of the requested resource.|
|reported|boolean|false|none|Indication whether the request is reported. Output parameter. Relevant for lending requests.|
|request_cost|object|false|none|none|
|» currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» sum|number(double)|true|none|The total sum.|
|request_id|string|false|none|Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.|
|requested_language|object|false|none|The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|requested_media|string|false|none|A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.|
|requester|object|false|none|The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|rs_note|[object]|false|none|List of related notes that appear in the Notes tab in the UI..|
|» content|string|false|none|The note's text. Mandatory.|
|» created_by|string|false|none|The creator of the note.|
|» created_date|string(date)|false|none|The creation date of the note. Default is the current date.|
|series_title_number|string|false|none|The series title number of the requested resource.|
|shipping_cost|object|false|none|none|
|» currency|object|true|none|The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» sum|number(double)|true|none|The total sum.|
|source|string|false|none|The source of the requested resource.|
|specific_edition|boolean|false|none|Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.|
|start_page|string|false|none|The relevant start page of the requested resource.|
|status|object|false|none|The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|supplied_format|object|false|none|Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|text_email|string|false|none|Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.|
|text_postal_1|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|text_postal_2|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|text_postal_3|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|text_postal_4|string|false|none|In use with alternative_address only. Not relevant for lending requests.|
|title|string|false|none|Title of the requested resource. Mandatory unless mms_id is supplied.|
|use_alternative_address|boolean|false|none|An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.|
|user_request|object|false|none|The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).|
|» link|string|false|none|none|
|» value|string|false|none|none|
|volume|string|false|none|The volume number of the journal that contains the article.|
|willing_to_pay|boolean|false|none|Indication whether patron is willing to pay. Currently not relevant for lending requests.|
|year|string|false|none|Publication date of the requested resource.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="ex-libris-apis-printouts">Printouts</h1>

## Retrieve Printouts

<a id="opIdget/almaws/v1/task-lists/printouts"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/printouts?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /almaws/v1/task-lists/printouts`

This API returns a list of Printouts.

<h3 id="retrieve-printouts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|letter|query|string|false|Printout Name. Optional. |
|status|query|string|false|Printout status. Optional. Valid values are: Printed, Pending, Canceled.|
|printer_id|query|string|false|Printout Printer|
|printout_id|query|string|false|A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters|
|limit|query|integer|false|Limits the number of results. Optional. Valid values are 0-100. Default value: 10.|
|offset|query|integer|false|Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.|

> Example responses

> 200 Response

```json
{
  "printout": [
    {
      "date": "2019-11-07T08:08:38.614Z",
      "id": "129313760000121",
      "letter": "<div> Welcome to...</div>",
      "link": "",
      "printer": {
        "desc": "printer name",
        "value": "Printout Queue."
      },
      "printout": "Testing",
      "size": "3.6kb",
      "source": "Implementor, Ex Libris",
      "status": {
        "desc": "Pending",
        "value": "Pending"
      }
    }
  ],
  "total_record_count": ""
}
```

<h3 id="retrieve-printouts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>401666\|40166410 - 'Invalid parameter.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="retrieve-printouts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|printout|[object]|false|none|printout object.|
|» date|string(date-time)|false|none|The time that the letter has been send to the Printout Queue.|
|» id|string|false|none|The printout id.|
|» letter|string|false|none|Letter Html body.|
|» link|string|false|none|none|
|» printer|object|false|none|The printer.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» printout|string|false|none|The printout name.|
|» size|string|false|none|The size of the letter.|
|» source|string|false|none|The user who printed the letter.|
|» status|object|false|none|Status of the printout (Pending/Printed/Canceled).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|total_record_count|integer(int32)|false|none|The total number of printouts.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Act on Printouts

<a id="opIdpost/almaws/v1/task-lists/printouts"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/printouts?op=string&apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /almaws/v1/task-lists/printouts`

This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.

<h3 id="act-on-printouts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|letter|query|string|false|Printout Name. Optional. |
|status|query|string|false|Printout status. Optional. Valid values are: Printed, Pending, Canceled.|
|printer_id|query|string|false|Printout Printer|
|printout_id|query|string|false|A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters|
|op|query|string|true|The operation to perform on the printout. Currently, the options are: 'mark_as_printed','mark_as_canceled'|

> Example responses

> 200 Response

```json
{
  "printout": [
    {
      "date": "2019-11-07T08:08:38.614Z",
      "id": "129313760000121",
      "letter": "<div> Welcome to...</div>",
      "link": "",
      "printer": {
        "desc": "printer name",
        "value": "Printout Queue."
      },
      "printout": "Testing",
      "size": "3.6kb",
      "source": "Implementor, Ex Libris",
      "status": {
        "desc": "Pending",
        "value": "Pending"
      }
    }
  ],
  "total_record_count": ""
}
```

<h3 id="act-on-printouts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>401666\|40166410 - 'Invalid parameter.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="act-on-printouts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|printout|[object]|false|none|printout object.|
|» date|string(date-time)|false|none|The time that the letter has been send to the Printout Queue.|
|» id|string|false|none|The printout id.|
|» letter|string|false|none|Letter Html body.|
|» link|string|false|none|none|
|» printer|object|false|none|The printer.|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|» printout|string|false|none|The printout name.|
|» size|string|false|none|The size of the letter.|
|» source|string|false|none|The user who printed the letter.|
|» status|object|false|none|Status of the printout (Pending/Printed/Canceled).|
|» » desc|string|false|none|none|
|» » value|string|false|none|none|
|total_record_count|integer(int32)|false|none|The total number of printouts.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Retrieve a Printout

<a id="opIdget/almaws/v1/task-lists/printouts/{printout_id}"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/printouts/string?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /almaws/v1/task-lists/printouts/{printout_id}`

This Web service returns a Printout given a Printout ID.

<h3 id="retrieve-a-printout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|printout_id|path|string|true|The Printout ID|

> Example responses

> 200 Response

```json
{
  "date": "2019-11-07T08:08:38.614Z",
  "id": "129313760000121",
  "letter": "<div> Welcome to...</div>",
  "link": "",
  "printer": {
    "desc": "printer name",
    "value": "Printout Queue."
  },
  "printout": "Testing",
  "size": "3.6kb",
  "source": "Implementor, Ex Libris",
  "status": {
    "desc": "Pending",
    "value": "Pending"
  }
}
```

<h3 id="retrieve-a-printout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>402896 - 'Invalid printout ID.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="retrieve-a-printout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|The time that the letter has been send to the Printout Queue.|
|id|string|false|none|The printout id.|
|letter|string|false|none|Letter Html body.|
|link|string|false|none|none|
|printer|object|false|none|The printer.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|printout|string|false|none|The printout name.|
|size|string|false|none|The size of the letter.|
|source|string|false|none|The user who printed the letter.|
|status|object|false|none|Status of the printout (Pending/Printed/Canceled).|
|» desc|string|false|none|none|
|» value|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Printout Service

<a id="opIdpost/almaws/v1/task-lists/printouts/{printout_id}"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/printouts/string?op=string&apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /almaws/v1/task-lists/printouts/{printout_id}`

This API operates on an printout. given a Printout ID.

<h3 id="printout-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|printout_id|path|string|true|The Printout ID|
|op|query|string|true|The operation to perform on the printout. Currently, the options are 'mark_as_printed','mark_as_canceled'|

> Example responses

> 200 Response

```json
{
  "date": "2019-11-07T08:08:38.614Z",
  "id": "129313760000121",
  "letter": "<div> Welcome to...</div>",
  "link": "",
  "printer": {
    "desc": "printer name",
    "value": "Printout Queue."
  },
  "printout": "Testing",
  "size": "3.6kb",
  "source": "Implementor, Ex Libris",
  "status": {
    "desc": "Pending",
    "value": "Pending"
  }
}
```

<h3 id="printout-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)|Inline|
|400|Bad Request|Bad Request<br><br>402896 - 'Invalid printout ID.'<br><br>40166410 - 'Invalid parameter.'<br><br>40166412 - 'Failed to perform action.'|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="printout-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|The time that the letter has been send to the Printout Queue.|
|id|string|false|none|The printout id.|
|letter|string|false|none|Letter Html body.|
|link|string|false|none|none|
|printer|object|false|none|The printer.|
|» desc|string|false|none|none|
|» value|string|false|none|none|
|printout|string|false|none|The printout name.|
|size|string|false|none|The size of the letter.|
|source|string|false|none|The user who printed the letter.|
|status|object|false|none|Status of the printout (Pending/Printed/Canceled).|
|» desc|string|false|none|none|
|» value|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="ex-libris-apis-test">Test</h1>

## GET Task-lists Test API

<a id="opIdget/almaws/v1/task-lists/test"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/test?apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /almaws/v1/task-lists/test`

This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-task-lists-test-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request<br><br>|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## POST Task-lists Test API

<a id="opIdpost/almaws/v1/task-lists/test"></a>

> Code samples

```bash
curl "https://example.com/almaws/v1/task-lists/test?apikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /almaws/v1/task-lists/test`

This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>

> Example responses

> 200 Response

```json
{}
```

<h3 id="post-task-lists-test-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request<br><br>|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Exl-Api-Remaining|integer||The number of remaining calls according to the [Governance Threshold](https://developers.exlibrisgroup.com/alma/apis/#threshold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>
