<h1 id="ooxml-automation">OOXML Automation v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API helps users convert Excel and Powerpoint documents into rich, live dashboards and stories.

Base URLs:

* <a href="https://api.presalytics.io/ooxml-automation">https://api.presalytics.io/ooxml-automation</a>

<h1 id="ooxml-automation-charts">Charts</h1>

Charts

## Charts: Get Chart Data

<a id="opIdcharts_charts_chartupdate_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/ChartUpdate/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/ChartUpdate/{id}`

Gets a ChartDataDTO object, usually used for downstream analytics and chart updates

<h3 id="charts-get-chart-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "categoryNames": [
    "string"
  ],
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataPoints": [
    [
      0
    ]
  ],
  "seriesNames": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="charts-get-chart-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.ChartDataDTO](#schemachart.chartdatadto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Update Chart Data

<a id="opIdcharts_charts_chartupdate_put_id"></a>

> Code samples

```bash
curl https://example.com/Charts/ChartUpdate/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "categoryNames": [
      "string"
    ],
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dataPoints": [
      [
        0
      ]
    ],
    "seriesNames": [
      "string"
    ]
  }'
```

`PUT /Charts/ChartUpdate/{id}`

Simplifies chart update by allowing users to supply data via ChartDataDTO

> Body parameter

```json
{
  "categoryNames": [
    "string"
  ],
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataPoints": [
    [
      0
    ]
  ],
  "seriesNames": [
    "string"
  ]
}
```

<h3 id="charts-update-chart-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Chart Id|
|body|body|[Chart.ChartDataDTO](#schemachart.chartdatadto)|false|The ChartDataDto Object|
|» categoryNames|body|[string]|false|none|
|» chartId|body|string(uuid)|false|none|
|» dataPoints|body|[[number(double)]]|false|none|
|» seriesNames|body|[string]|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="charts-update-chart-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Get Dependent Objects Tree

<a id="opIdcharts_charts_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Chart and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="charts-get-dependent-objects-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="charts-get-dependent-objects-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="charts-get-dependent-objects-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Get Details

<a id="opIdcharts_charts_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="charts-get-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "axes": [
    {}
  ],
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "chartData": {},
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {},
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "titleTextContainer": {},
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="charts-get-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.Charts.Details](#schemachart.charts.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Get Underlying Xml

<a id="opIdcharts_charts_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Charts/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Chart object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Chart objects.

<h3 id="charts-get-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="charts-get-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Modify Underlying Xml

<a id="opIdcharts_charts_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Charts/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Charts/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Chart object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Chart objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="charts-modify-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="charts-modify-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Get Svg file

<a id="opIdcharts_charts_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Charts/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/Svg/{id}`

This endpoint is helpful for rending this Chart as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="charts-get-svg-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="charts-get-svg-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Charts: Get by Id

<a id="opIdcharts_charts_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/{id}`

Get by Id: Use this method to retrieve a Charts object by its primary key (id)

<h3 id="charts-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string"
}
```

<h3 id="charts-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.Charts](#schemachart.charts)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsaxes">Charts/Axes</h1>

Charts / Axes

## Axes: Get by Id

<a id="opIdchart_axes_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/Axes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/Axes/{id}`

Get by Id: Use this method to retrieve a Axes object by its primary key (id)

<h3 id="axes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "axisDataTypeId": 0,
  "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ooxmlId": 0
}
```

<h3 id="axes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.Axes](#schemachart.axes)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsaxisdatatypes">Charts/AxisDataTypes</h1>

Charts / AxisDataTypes

## AxisDataTypes: List All Possible Types

<a id="opIdchart_axisdatatypes_get"></a>

> Code samples

```bash
curl https://example.com/Charts/AxisDataTypes \
  -H 'Accept: application/json'
```

`GET /Charts/AxisDataTypes`

List Types: Use this method to retreive a list of possible options for the AxisDataTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlName": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="axisdatatypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="axisdatatypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Chart.AxisDataTypes](#schemachart.axisdatatypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## AxisDataTypes: Get By Type Id

<a id="opIdchart_axisdatatypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Charts/AxisDataTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Charts/AxisDataTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="axisdatatypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlName": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="axisdatatypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.AxisDataTypes](#schemachart.axisdatatypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## AxisDataTypes: Get by Id

<a id="opIdchart_axisdatatypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/AxisDataTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/AxisDataTypes/{id}`

Get by Id: Use this method to retrieve a AxisDataTypes object by its primary key (id)

<h3 id="axisdatatypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlName": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="axisdatatypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.AxisDataTypes](#schemachart.axisdatatypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartschartdata">Charts/ChartData</h1>

Charts / ChartData

## ChartData: Get by Id

<a id="opIdchart_chartdata_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/ChartData/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/ChartData/{id}`

Get by Id: Use this method to retrieve a ChartData object by its primary key (id)

<h3 id="chartdata-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="chartdata-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.ChartData](#schemachart.chartdata)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartscolumncollections">Charts/ColumnCollections</h1>

Charts / ColumnCollections

## ColumnCollections: Get by Id

<a id="opIdchart_columncollections_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/ColumnCollections/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/ColumnCollections/{id}`

Get by Id: Use this method to retrieve a ColumnCollections object by its primary key (id)

<h3 id="columncollections-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="columncollections-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.ColumnCollections](#schemachart.columncollections)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartscolumns">Charts/Columns</h1>

Charts / Columns

## Columns: Get by Id

<a id="opIdchart_columns_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/Columns/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/Columns/{id}`

Get by Id: Use this method to retrieve a Columns object by its primary key (id)

<h3 id="columns-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "name": "string"
}
```

<h3 id="columns-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.Columns](#schemachart.columns)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsdatapoints">Charts/DataPoints</h1>

Charts / DataPoints

## DataPoints: Get by Id

<a id="opIdchart_datapoints_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/DataPoints/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/DataPoints/{id}`

Get by Id: Use this method to retrieve a DataPoints object by its primary key (id)

<h3 id="datapoints-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": 0
}
```

<h3 id="datapoints-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.DataPoints](#schemachart.datapoints)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsplottype">Charts/PlotType</h1>

Charts / PlotType

## PlotType: List All Possible Types

<a id="opIdchart_plottype_get"></a>

> Code samples

```bash
curl https://example.com/Charts/PlotType \
  -H 'Accept: application/json'
```

`GET /Charts/PlotType`

List Types: Use this method to retreive a list of possible options for the PlotType type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "plotQualifedAssy": "string",
    "plotTypeName": "string",
    "rowColTypeId": 0,
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="plottype-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="plottype-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Chart.PlotType](#schemachart.plottype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## PlotType: Get By Type Id

<a id="opIdchart_plottype_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Charts/PlotType/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Charts/PlotType/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="plottype-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plotQualifedAssy": "string",
  "plotTypeName": "string",
  "rowColTypeId": 0,
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="plottype-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.PlotType](#schemachart.plottype)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## PlotType: Get by Id

<a id="opIdchart_plottype_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/PlotType/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/PlotType/{id}`

Get by Id: Use this method to retrieve a PlotType object by its primary key (id)

<h3 id="plottype-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plotQualifedAssy": "string",
  "plotTypeName": "string",
  "rowColTypeId": 0,
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="plottype-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.PlotType](#schemachart.plottype)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsrowcol">Charts/RowCol</h1>

Charts / RowCol

## RowCol: List All Possible Types

<a id="opIdchart_rowcol_get"></a>

> Code samples

```bash
curl https://example.com/Charts/RowCol \
  -H 'Accept: application/json'
```

`GET /Charts/RowCol`

List Types: Use this method to retreive a list of possible options for the RowCol type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.

> Example responses

> 200 Response

```json
[
  {
    "colName": "string",
    "colQualifiedAssy": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowName": "string",
    "rowQualifedAssy": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="rowcol-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="rowcol-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Chart.RowCol](#schemachart.rowcol)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## RowCol: Get By Type Id

<a id="opIdchart_rowcol_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Charts/RowCol/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Charts/RowCol/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="rowcol-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "colName": "string",
  "colQualifiedAssy": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowName": "string",
  "rowQualifedAssy": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="rowcol-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.RowCol](#schemachart.rowcol)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## RowCol: Get by Id

<a id="opIdchart_rowcol_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/RowCol/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/RowCol/{id}`

Get by Id: Use this method to retrieve a RowCol object by its primary key (id)

<h3 id="rowcol-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "colName": "string",
  "colQualifiedAssy": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowName": "string",
  "rowQualifedAssy": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="rowcol-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.RowCol](#schemachart.rowcol)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsrowcollections">Charts/RowCollections</h1>

Charts / RowCollections

## RowCollections: Get by Id

<a id="opIdchart_rowcollections_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/RowCollections/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/RowCollections/{id}`

Get by Id: Use this method to retrieve a RowCollections object by its primary key (id)

<h3 id="rowcollections-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "nameFormatType": 0
}
```

<h3 id="rowcollections-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.RowCollections](#schemachart.rowcollections)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsrownameformattypes">Charts/RowNameFormatTypes</h1>

Charts / RowNameFormatTypes

## RowNameFormatTypes: List All Possible Types

<a id="opIdchart_rownameformattypes_get"></a>

> Code samples

```bash
curl https://example.com/Charts/RowNameFormatTypes \
  -H 'Accept: application/json'
```

`GET /Charts/RowNameFormatTypes`

List Types: Use this method to retreive a list of possible options for the RowNameFormatTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.

> Example responses

> 200 Response

```json
[
  {
    "formatCode": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "powerToolsId": 0,
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="rownameformattypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="rownameformattypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Chart.RowNameFormatTypes](#schemachart.rownameformattypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## RowNameFormatTypes: Get By Type Id

<a id="opIdchart_rownameformattypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Charts/RowNameFormatTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Charts/RowNameFormatTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="rownameformattypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "formatCode": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "powerToolsId": 0,
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="rownameformattypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.RowNameFormatTypes](#schemachart.rownameformattypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## RowNameFormatTypes: Get by Id

<a id="opIdchart_rownameformattypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/RowNameFormatTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/RowNameFormatTypes/{id}`

Get by Id: Use this method to retrieve a RowNameFormatTypes object by its primary key (id)

<h3 id="rownameformattypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "formatCode": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "powerToolsId": 0,
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="rownameformattypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.RowNameFormatTypes](#schemachart.rownameformattypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-chartsrows">Charts/Rows</h1>

Charts / Rows

## Rows: Get by Id

<a id="opIdchart_rows_get_id"></a>

> Code samples

```bash
curl https://example.com/Charts/Rows/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Charts/Rows/{id}`

Get by Id: Use this method to retrieve a Rows object by its primary key (id)

<h3 id="rows-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "name": "string",
  "rowNameCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="rows-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Chart.Rows](#schemachart.rows)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-connectionshapes">ConnectionShapes</h1>

ConnectionShapes

## Slides: Get Dependent Objects Tree

<a id="opIdslides_connectionshapes_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/ConnectionShapes/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ConnectionShapes/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="slides-get-dependent-objects-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-dependent-objects-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="slides-get-dependent-objects-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Details

<a id="opIdslides_connectionshapes_details_get_id"></a>

> Code samples

```bash
curl https://example.com/ConnectionShapes/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ConnectionShapes/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="slides-get-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effect": {},
  "endConnectionIdx": 0,
  "endConnectionShape": {},
  "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "fillMap": {},
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElement": {},
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "line": {},
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "startConnectionIdx": 0,
  "startConnectionShape": {},
  "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="slides-get-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Connector.Details](#schemaslide.connector.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Underlying Xml

<a id="opIdslides_connectionshapes_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/ConnectionShapes/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ConnectionShapes/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.

<h3 id="slides-get-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Modify Underlying Xml

<a id="opIdslides_connectionshapes_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/ConnectionShapes/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /ConnectionShapes/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="slides-modify-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-modify-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Svg file

<a id="opIdslides_connectionshapes_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/ConnectionShapes/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ConnectionShapes/Svg/{id}`

This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="slides-get-svg-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-svg-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## ConnectionShapes: Get by Id

<a id="opIdslides_connectionshapes_get_id"></a>

> Code samples

```bash
curl https://example.com/ConnectionShapes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ConnectionShapes/{id}`

Get by Id: Use this method to retrieve a ConnectionShapes object by its primary key (id)

<h3 id="connectionshapes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "endConnectionIdx": 0,
  "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "startConnectionIdx": 0,
  "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string"
}
```

<h3 id="connectionshapes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Connector](#schemaslide.connector)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-documents">Documents</h1>

Documents

## Documents: Upload

<a id="opIddocuments_post"></a>

> Code samples

```bash
curl https://example.com/Documents \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=@/path/to/file' \
  -F 'storyId=497f6eca-6276-4993-bfeb-53cbbbba6f08'
```

`POST /Documents`

Upload an OpenOfficeXml document (e.g., .xlsx, .pptx) for processing by the API.

> Body parameter

```yaml
file: string
storyId: "497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h3 id="documents-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|true|The file to upload.  Must be of type .pptx, ppt|
|» storyId|body|string(uuid)|true|The story_id of the document being uploaded.|

> Example responses

> 200 Response

```json
[
  {
    "baseElementBlobUrl": "string",
    "blobLocation": "string",
    "changedBaseElementBlobUrl": "string",
    "documentTypeId": 0,
    "filename": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ownerGuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "packageUri": "string",
    "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableStylesXmlBlobUrl": "string",
    "title": "string"
  }
]
```

<h3 id="documents-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="documents-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Document](#schemadocument)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## DocumentsController: Get Dependent Objects Tree

<a id="opIddocuments_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Documents/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Documents/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this DocumentsController and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="documentscontroller-get-dependent-objects-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

<h3 id="documentscontroller-get-dependent-objects-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|

<h3 id="documentscontroller-get-dependent-objects-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Documents: Clone an existing Ooxml Document to new Parent Story

<a id="opIddocuments_clone_post_id"></a>

> Code samples

```bash
curl https://example.com/Documents/Clone/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /Documents/Clone/{id}`

Clone A Document that has already been uploaded to a new Story

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="documents-clone-an-existing-ooxml-document-to-new-parent-story-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|the Source document Id|
|body|body|[DocumentCloneDTO](#schemadocumentclonedto)|false|A DocumentCloneDto object with containing information required for cloning the document|
|» id|body|string(uuid)|false|none|
|» storyId|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "blobLocation": "string",
  "changedBaseElementBlobUrl": "string",
  "documentTypeId": 0,
  "filename": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ownerGuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "packageUri": "string",
  "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableStylesXmlBlobUrl": "string",
  "title": "string"
}
```

<h3 id="documents-clone-an-existing-ooxml-document-to-new-parent-story-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Document](#schemadocument)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Documents: Download

<a id="opIddocuments_download_get_id_orginal"></a>

> Code samples

```bash
curl https://example.com/Documents/Download/497f6eca-6276-4993-bfeb-53cbbbba6f08
```

`GET /Documents/Download/{id}`

Download the into a bytestream for client-side processing.

<h3 id="documents-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|orginal|query|boolean|false|none|

<h3 id="documents-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an updated version of the OpenOffice Xml file|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Documents: Get by Id

<a id="opIddocuments_get_id"></a>

> Code samples

```bash
curl https://example.com/Documents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Documents/{id}`

Get by Id: Use this method to retrieve a Documents object by its primary key (id)

<h3 id="documents-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "blobLocation": "string",
  "changedBaseElementBlobUrl": "string",
  "documentTypeId": 0,
  "filename": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ownerGuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "packageUri": "string",
  "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableStylesXmlBlobUrl": "string",
  "title": "string"
}
```

<h3 id="documents-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Document](#schemadocument)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Documents: Delete by Id

<a id="opIddocuments_delete_id"></a>

> Code samples

```bash
curl https://example.com/Documents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE
```

`DELETE /Documents/{id}`

Permantly delete a document from the Ooxml Automation API. Note that is does not make changes to the related Presalytics APIs.
Please use the delete endpoint in the story API to ensure that stories are not left with orphaned references to the Ooxml Automation API.

<h3 id="documents-delete-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="documents-delete-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-documentsdocumenttype">Documents/DocumentType</h1>

Documents / DocumentType

## DocumentType: List All Possible Types

<a id="opIddocuments_documenttype_get"></a>

> Code samples

```bash
curl https://example.com/Documents/DocumentType \
  -H 'Accept: application/json'
```

`GET /Documents/DocumentType`

List Types: Use this method to retreive a list of possible options for the DocumentType type. Use the Id from oneof the returned elements on to make changes to elements in the Documents object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "fileExtension": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "mimeType": "string",
    "name": "string",
    "ooxmlPackageType": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="documenttype-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="documenttype-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DocumentType](#schemadocumenttype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## DocumentType: Get By Type Id

<a id="opIddocuments_documenttype_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Documents/DocumentType/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Documents/DocumentType/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="documenttype-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "fileExtension": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "mimeType": "string",
  "name": "string",
  "ooxmlPackageType": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="documenttype-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentType](#schemadocumenttype)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## DocumentType: Get by Id

<a id="opIddocuments_documenttype_get_id"></a>

> Code samples

```bash
curl https://example.com/Documents/DocumentType/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Documents/DocumentType/{id}`

Get by Id: Use this method to retrieve a DocumentType object by its primary key (id)

<h3 id="documenttype-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "fileExtension": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "mimeType": "string",
  "name": "string",
  "ooxmlPackageType": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="documenttype-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentType](#schemadocumenttype)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-groups">Groups</h1>

Groups

## Slides: Get Dependent Objects Tree

<a id="opIdslides_groups_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Groups/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Groups/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="slides-get-dependent-objects-tree-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-dependent-objects-tree-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="slides-get-dependent-objects-tree-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Details

<a id="opIdslides_groups_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Groups/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Groups/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="slides-get-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "groupElement": {},
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "svgBlobUrl": "string",
  "title": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="slides-get-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Groups.Details](#schemaslide.groups.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Underlying Xml

<a id="opIdslides_groups_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Groups/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Groups/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.

<h3 id="slides-get-underlying-xml-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-underlying-xml-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Modify Underlying Xml

<a id="opIdslides_groups_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Groups/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Groups/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="slides-modify-underlying-xml-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-modify-underlying-xml-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Svg file

<a id="opIdslides_groups_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Groups/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Groups/Svg/{id}`

This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="slides-get-svg-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-svg-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Groups: Get by Id

<a id="opIdslides_groups_get_id"></a>

> Code samples

```bash
curl https://example.com/Groups/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Groups/{id}`

Get by Id: Use this method to retrieve a Groups object by its primary key (id)

<h3 id="groups-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "svgBlobUrl": "string",
  "title": "string"
}
```

<h3 id="groups-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Groups](#schemaslide.groups)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-images">Images</h1>

Images

## Shared: Get Dependent Objects Tree

<a id="opIdshared_images_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Images/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Images/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Shared and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="shared-get-dependent-objects-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="shared-get-dependent-objects-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="shared-get-dependent-objects-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Shared: Get Details

<a id="opIdshared_images_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Images/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Images/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="shared-get-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fileExtension": "string",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageFileBlobUrl": "string",
  "imageFill": {},
  "imageFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {},
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="shared-get-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.Pictures.Details](#schemashared.pictures.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Image: Download Image

<a id="opIdshared_images_getimage_put_id"></a>

> Code samples

```bash
curl https://example.com/Images/GetImage/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /Images/GetImage/{Id}`

Download Images extracted from Ooxml Documents

<h3 id="image-download-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string(uuid)|true|The Image Id|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="image-download-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|504|Gateway Timeout|Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Shared: Get Underlying Xml

<a id="opIdshared_images_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Images/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Images/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Shared object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Shared objects.

<h3 id="shared-get-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="shared-get-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Shared: Modify Underlying Xml

<a id="opIdshared_images_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Images/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Images/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Shared object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Shared objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="shared-modify-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="shared-modify-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Shared: Get Svg file

<a id="opIdshared_images_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Images/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Images/Svg/{id}`

This endpoint is helpful for rending this Shared as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="shared-get-svg-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="shared-get-svg-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Images: Get by Id

<a id="opIdshared_images_get_id"></a>

> Code samples

```bash
curl https://example.com/Images/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Images/{id}`

Get by Id: Use this method to retrieve a Images object by its primary key (id)

<h3 id="images-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "fileExtension": "string",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageFileBlobUrl": "string",
  "imageFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string"
}
```

<h3 id="images-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.Pictures](#schemashared.pictures)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-shapes">Shapes</h1>

Shapes

## Slides: Get Dependent Objects Tree

<a id="opIdslides_shapes_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Shapes/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shapes/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="slides-get-dependent-objects-tree-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-dependent-objects-tree-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="slides-get-dependent-objects-tree-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Details

<a id="opIdslides_shapes_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Shapes/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shapes/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="slides-get-details-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effect": {},
  "fillMap": {},
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElement": {},
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "line": {},
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "svgBlobUrl": "string",
  "textContainer": {},
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

<h3 id="slides-get-details-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Shapes.Details](#schemaslide.shapes.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Underlying Xml

<a id="opIdslides_shapes_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Shapes/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shapes/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.

<h3 id="slides-get-underlying-xml-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-underlying-xml-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Modify Underlying Xml

<a id="opIdslides_shapes_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Shapes/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Shapes/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="slides-modify-underlying-xml-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-modify-underlying-xml-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Svg file

<a id="opIdslides_shapes_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Shapes/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shapes/Svg/{id}`

This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="slides-get-svg-file-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-svg-file-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Shapes: Get by Id

<a id="opIdslides_shapes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shapes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shapes/{id}`

Get by Id: Use this method to retrieve a Shapes object by its primary key (id)

<h3 id="shapes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "svgBlobUrl": "string",
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

<h3 id="shapes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Shapes](#schemaslide.shapes)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-shapetrees">ShapeTrees</h1>

ShapeTrees

## Slides: Get Dependent Objects Tree

<a id="opIdslides_shapetrees_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/ShapeTrees/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ShapeTrees/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="slides-get-dependent-objects-tree-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-dependent-objects-tree-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="slides-get-dependent-objects-tree-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Details

<a id="opIdslides_shapetrees_details_get_id"></a>

> Code samples

```bash
curl https://example.com/ShapeTrees/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ShapeTrees/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="slides-get-details-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "groupElement": {},
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "groupElements": [
    {}
  ],
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "slide": {},
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "title": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="slides-get-details-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.ShapeTrees.Details](#schemaslide.shapetrees.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Underlying Xml

<a id="opIdslides_shapetrees_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/ShapeTrees/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ShapeTrees/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.

<h3 id="slides-get-underlying-xml-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-underlying-xml-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Modify Underlying Xml

<a id="opIdslides_shapetrees_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/ShapeTrees/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /ShapeTrees/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="slides-modify-underlying-xml-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-modify-underlying-xml-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Svg file

<a id="opIdslides_shapetrees_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/ShapeTrees/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ShapeTrees/Svg/{id}`

This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="slides-get-svg-file-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-svg-file-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## ShapeTrees: Get by Id

<a id="opIdslides_shapetrees_get_id"></a>

> Code samples

```bash
curl https://example.com/ShapeTrees/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /ShapeTrees/{id}`

Get by Id: Use this method to retrieve a ShapeTrees object by its primary key (id)

<h3 id="shapetrees-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "title": "string"
}
```

<h3 id="shapetrees-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.ShapeTrees](#schemaslide.shapetrees)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedcolortransformationattributes">Shared/ColorTransformationAttributes</h1>

Shared / ColorTransformationAttributes

## ColorTransformationAttributes: Get by Id

<a id="opIdshared_colortransformationattributes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/ColorTransformationAttributes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/ColorTransformationAttributes/{id}`

Get by Id: Use this method to retrieve a ColorTransformationAttributes object by its primary key (id)

<h3 id="colortransformationattributes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "colorTransformationsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "value": "string"
}
```

<h3 id="colortransformationattributes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.ColorTransformationAttributes](#schemashared.colortransformationattributes)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedcolortransformations">Shared/ColorTransformations</h1>

Shared / ColorTransformations

## ColorTransformations: Get by Id

<a id="opIdshared_colortransformations_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/ColorTransformations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/ColorTransformations/{id}`

Get by Id: Use this method to retrieve a ColorTransformations object by its primary key (id)

<h3 id="colortransformations-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "solidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="colortransformations-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.ColorTransformations](#schemashared.colortransformations)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedcolortypes">Shared/ColorTypes</h1>

Shared / ColorTypes

## ColorTypes: List All Possible Types

<a id="opIdshared_colortypes_get"></a>

> Code samples

```bash
curl https://example.com/Shared/ColorTypes \
  -H 'Accept: application/json'
```

`GET /Shared/ColorTypes`

List Types: Use this method to retreive a list of possible options for the ColorTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.

> Example responses

> 200 Response

```json
[
  {
    "colorSchemeIndexValueEnum": 0,
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="colortypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="colortypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Shared.ColorTypes](#schemashared.colortypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ColorTypes: Get By Type Id

<a id="opIdshared_colortypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Shared/ColorTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Shared/ColorTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="colortypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "colorSchemeIndexValueEnum": 0,
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="colortypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.ColorTypes](#schemashared.colortypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## ColorTypes: Get by Id

<a id="opIdshared_colortypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/ColorTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/ColorTypes/{id}`

Get by Id: Use this method to retrieve a ColorTypes object by its primary key (id)

<h3 id="colortypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "colorSchemeIndexValueEnum": 0,
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="colortypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.ColorTypes](#schemashared.colortypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-shareddashtypes">Shared/DashTypes</h1>

Shared / DashTypes

## DashTypes: List All Possible Types

<a id="opIdshared_dashtypes_get"></a>

> Code samples

```bash
curl https://example.com/Shared/DashTypes \
  -H 'Accept: application/json'
```

`GET /Shared/DashTypes`

List Types: Use this method to retreive a list of possible options for the DashTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "serializedAs": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="dashtypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="dashtypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Shared.DashTypes](#schemashared.dashtypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## DashTypes: Get By Type Id

<a id="opIdshared_dashtypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Shared/DashTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Shared/DashTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="dashtypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="dashtypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.DashTypes](#schemashared.dashtypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashTypes: Get by Id

<a id="opIdshared_dashtypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/DashTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/DashTypes/{id}`

Get by Id: Use this method to retrieve a DashTypes object by its primary key (id)

<h3 id="dashtypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="dashtypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.DashTypes](#schemashared.dashtypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedeffectattributes">Shared/EffectAttributes</h1>

Shared / EffectAttributes

## EffectAttributes: Get by Id

<a id="opIdshared_effectattributes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/EffectAttributes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/EffectAttributes/{id}`

Get by Id: Use this method to retrieve a EffectAttributes object by its primary key (id)

<h3 id="effectattributes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "attributesJson": "string",
  "effectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectTypeId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="effectattributes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.EffectAttributes](#schemashared.effectattributes)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedeffects">Shared/Effects</h1>

Shared / Effects

## Effects: Get by Id

<a id="opIdshared_effects_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/Effects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/Effects/{id}`

Get by Id: Use this method to retrieve a Effects object by its primary key (id)

<h3 id="effects-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="effects-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.Effects](#schemashared.effects)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedeffecttypes">Shared/EffectTypes</h1>

Shared / EffectTypes

## EffectTypes: List All Possible Types

<a id="opIdshared_effecttypes_get"></a>

> Code samples

```bash
curl https://example.com/Shared/EffectTypes \
  -H 'Accept: application/json'
```

`GET /Shared/EffectTypes`

List Types: Use this method to retreive a list of possible options for the EffectTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="effecttypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="effecttypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Shared.EffectTypes](#schemashared.effecttypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## EffectTypes: Get By Type Id

<a id="opIdshared_effecttypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Shared/EffectTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Shared/EffectTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="effecttypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="effecttypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.EffectTypes](#schemashared.effecttypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## EffectTypes: Get by Id

<a id="opIdshared_effecttypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/EffectTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/EffectTypes/{id}`

Get by Id: Use this method to retrieve a EffectTypes object by its primary key (id)

<h3 id="effecttypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="effecttypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.EffectTypes](#schemashared.effecttypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedfillmap">Shared/FillMap</h1>

Shared / FillMap

## FillMap: Get by Id

<a id="opIdshared_fillmap_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/FillMap/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/FillMap/{id}`

Get by Id: Use this method to retrieve a FillMap object by its primary key (id)

<h3 id="fillmap-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "fillTypeId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="fillmap-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.FillMap](#schemashared.fillmap)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedfilltypes">Shared/FillTypes</h1>

Shared / FillTypes

## FillTypes: List All Possible Types

<a id="opIdshared_filltypes_get"></a>

> Code samples

```bash
curl https://example.com/Shared/FillTypes \
  -H 'Accept: application/json'
```

`GET /Shared/FillTypes`

List Types: Use this method to retreive a list of possible options for the FillTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="filltypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="filltypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Shared.FillTypes](#schemashared.filltypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## FillTypes: Get By Type Id

<a id="opIdshared_filltypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Shared/FillTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Shared/FillTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="filltypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="filltypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.FillTypes](#schemashared.filltypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## FillTypes: Get by Id

<a id="opIdshared_filltypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/FillTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/FillTypes/{id}`

Get by Id: Use this method to retrieve a FillTypes object by its primary key (id)

<h3 id="filltypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="filltypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.FillTypes](#schemashared.filltypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedgradientfills">Shared/GradientFills</h1>

Shared / GradientFills

## GradientFills: Get by Id

<a id="opIdshared_gradientfills_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/GradientFills/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/GradientFills/{id}`

Get by Id: Use this method to retrieve a GradientFills object by its primary key (id)

<h3 id="gradientfills-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "angle": 0,
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isPath": true,
  "pathType": "string",
  "rotateWithShape": true
}
```

<h3 id="gradientfills-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.GradientFills](#schemashared.gradientfills)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedgradientstops">Shared/GradientStops</h1>

Shared / GradientStops

## GradientStops: Get by Id

<a id="opIdshared_gradientstops_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/GradientStops/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/GradientStops/{id}`

Get by Id: Use this method to retrieve a GradientStops object by its primary key (id)

<h3 id="gradientstops-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "gradientFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position": 0
}
```

<h3 id="gradientstops-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.GradientStops](#schemashared.gradientstops)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedimagefills">Shared/ImageFills</h1>

Shared / ImageFills

## ImageFills: Get by Id

<a id="opIdshared_imagefills_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/ImageFills/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/ImageFills/{id}`

Get by Id: Use this method to retrieve a ImageFills object by its primary key (id)

<h3 id="imagefills-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "compressionState": "string",
  "dpi": 0,
  "effectsJson": "string",
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rotateWithShape": true,
  "sourceRectangle": "string",
  "stretch": true,
  "tile": "string"
}
```

<h3 id="imagefills-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.ImageFills](#schemashared.imagefills)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedlineendsizes">Shared/LineEndSizes</h1>

Shared / LineEndSizes

## LineEndSizes: List All Possible Types

<a id="opIdshared_lineendsizes_get"></a>

> Code samples

```bash
curl https://example.com/Shared/LineEndSizes \
  -H 'Accept: application/json'
```

`GET /Shared/LineEndSizes`

List Types: Use this method to retreive a list of possible options for the LineEndSizes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "serializedAs": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="lineendsizes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="lineendsizes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Shared.LineEndSizes](#schemashared.lineendsizes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## LineEndSizes: Get By Type Id

<a id="opIdshared_lineendsizes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Shared/LineEndSizes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Shared/LineEndSizes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="lineendsizes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="lineendsizes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.LineEndSizes](#schemashared.lineendsizes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## LineEndSizes: Get by Id

<a id="opIdshared_lineendsizes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/LineEndSizes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/LineEndSizes/{id}`

Get by Id: Use this method to retrieve a LineEndSizes object by its primary key (id)

<h3 id="lineendsizes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="lineendsizes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.LineEndSizes](#schemashared.lineendsizes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedlineendtypes">Shared/LineEndTypes</h1>

Shared / LineEndTypes

## LineEndTypes: List All Possible Types

<a id="opIdshared_lineendtypes_get"></a>

> Code samples

```bash
curl https://example.com/Shared/LineEndTypes \
  -H 'Accept: application/json'
```

`GET /Shared/LineEndTypes`

List Types: Use this method to retreive a list of possible options for the LineEndTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "serializedAs": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="lineendtypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="lineendtypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Shared.LineEndTypes](#schemashared.lineendtypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## LineEndTypes: Get By Type Id

<a id="opIdshared_lineendtypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Shared/LineEndTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Shared/LineEndTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="lineendtypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="lineendtypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.LineEndTypes](#schemashared.lineendtypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## LineEndTypes: Get by Id

<a id="opIdshared_lineendtypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/LineEndTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/LineEndTypes/{id}`

Get by Id: Use this method to retrieve a LineEndTypes object by its primary key (id)

<h3 id="lineendtypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="lineendtypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.LineEndTypes](#schemashared.lineendtypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedlines">Shared/Lines</h1>

Shared / Lines

## Lines: Get by Id

<a id="opIdshared_lines_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/Lines/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/Lines/{id}`

Get by Id: Use this method to retrieve a Lines object by its primary key (id)

<h3 id="lines-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dashTypeId": 0,
  "headEndHeightId": 0,
  "headEndTypeId": 0,
  "headEndWidthId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tailEndHeightId": 0,
  "tailEndTypeId": 0,
  "tailEndWidthId": 0,
  "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "weight": 0
}
```

<h3 id="lines-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.Lines](#schemashared.lines)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedparagraph">Shared/Paragraph</h1>

Shared / Paragraph

## Paragraph: Get by Id

<a id="opIdshared_paragraph_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/Paragraph/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/Paragraph/{id}`

Get by Id: Use this method to retrieve a Paragraph object by its primary key (id)

<h3 id="paragraph-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "number": 0,
  "textContainerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="paragraph-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.Paragraph](#schemashared.paragraph)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedsolidfills">Shared/SolidFills</h1>

Shared / SolidFills

## SolidFills: Get by Id

<a id="opIdshared_solidfills_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/SolidFills/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/SolidFills/{id}`

Get by Id: Use this method to retrieve a SolidFills object by its primary key (id)

<h3 id="solidfills-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "colorTypeId": 0,
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hexValue": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isUserColor": true,
  "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="solidfills-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.SolidFills](#schemashared.solidfills)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedtext">Shared/Text</h1>

Shared / Text

## Text: Get by Id

<a id="opIdshared_text_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/Text/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/Text/{id}`

Get by Id: Use this method to retrieve a Text object by its primary key (id)

<h3 id="text-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "colorSolidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "font": "string",
  "fontSize": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isBold": true,
  "isItalic": true,
  "isThemeFont": true,
  "isUnderline": true,
  "paragraphId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rawText": "string",
  "sequence": 0
}
```

<h3 id="text-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.Text](#schemashared.text)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-sharedtextcontainer">Shared/TextContainer</h1>

Shared / TextContainer

## TextContainer: Get by Id

<a id="opIdshared_textcontainer_get_id"></a>

> Code samples

```bash
curl https://example.com/Shared/TextContainer/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Shared/TextContainer/{id}`

Get by Id: Use this method to retrieve a TextContainer object by its primary key (id)

<h3 id="textcontainer-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outerXml": "string",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="textcontainer-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shared.TextContainer](#schemashared.textcontainer)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slides">Slides</h1>

Slides

## Slides: Get Dependent Objects Tree

<a id="opIdslides_slides_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="slides-get-dependent-objects-tree-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-dependent-objects-tree-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="slides-get-dependent-objects-tree-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Details

<a id="opIdslides_slides_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="slides-get-details-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "document": {},
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "number": 0,
  "ooxmlId": 0,
  "packageUri": "string",
  "shapeTree": {},
  "slideDocumentUrl": "string",
  "slideMaster": {},
  "svgBlobUrl": "string",
  "theme": {},
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="slides-get-details-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Slides.Details](#schemaslide.slides.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Underlying Xml

<a id="opIdslides_slides_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Slides/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.

<h3 id="slides-get-underlying-xml-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-underlying-xml-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Modify Underlying Xml

<a id="opIdslides_slides_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Slides/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Slides/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="slides-modify-underlying-xml-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-modify-underlying-xml-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Svg file

<a id="opIdslides_slides_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Slides/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/Svg/{id}`

This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="slides-get-svg-file-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-svg-file-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get by Id

<a id="opIdslides_slides_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/{id}`

Get by Id: Use this method to retrieve a Slides object by its primary key (id)

<h3 id="slides-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "number": 0,
  "ooxmlId": 0,
  "packageUri": "string",
  "slideDocumentUrl": "string",
  "svgBlobUrl": "string"
}
```

<h3 id="slides-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Slides](#schemaslide.slides)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slidescolormaps">Slides/ColorMaps</h1>

Slides / ColorMaps

## ColorMaps: Get by Id

<a id="opIdslides_colormaps_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/ColorMaps/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/ColorMaps/{id}`

Get by Id: Use this method to retrieve a ColorMaps object by its primary key (id)

<h3 id="colormaps-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accent1": 0,
  "accent2": 0,
  "accent3": 0,
  "accent4": 0,
  "accent5": 0,
  "accent6": 0,
  "background1": 0,
  "background2": 0,
  "followedHyperlink": 0,
  "hyperlink": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "slideMasterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "text1": 0,
  "text2": 0
}
```

<h3 id="colormaps-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.ColorMaps](#schemaslide.colormaps)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slidesgraphics">Slides/Graphics</h1>

Slides / Graphics

## Graphics: Get by Id

<a id="opIdslides_graphics_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/Graphics/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/Graphics/{id}`

Get by Id: Use this method to retrieve a Graphics object by its primary key (id)

<h3 id="graphics-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "graphicTypeId": 0,
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

<h3 id="graphics-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.Graphics](#schemaslide.graphics)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slidesgraphictypes">Slides/GraphicTypes</h1>

Slides / GraphicTypes

## GraphicTypes: List All Possible Types

<a id="opIdslides_graphictypes_get"></a>

> Code samples

```bash
curl https://example.com/Slides/GraphicTypes \
  -H 'Accept: application/json'
```

`GET /Slides/GraphicTypes`

List Types: Use this method to retreive a list of possible options for the GraphicTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="graphictypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="graphictypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Slide.GraphicTypes](#schemaslide.graphictypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GraphicTypes: Get By Type Id

<a id="opIdslides_graphictypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Slides/GraphicTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Slides/GraphicTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="graphictypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="graphictypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.GraphicTypes](#schemaslide.graphictypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## GraphicTypes: Get by Id

<a id="opIdslides_graphictypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/GraphicTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/GraphicTypes/{id}`

Get by Id: Use this method to retrieve a GraphicTypes object by its primary key (id)

<h3 id="graphictypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="graphictypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.GraphicTypes](#schemaslide.graphictypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slidesgroupelements">Slides/GroupElements</h1>

Slides / GroupElements

## GroupElements: Get by Id

<a id="opIdslides_groupelements_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/GroupElements/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/GroupElements/{id}`

Get by Id: Use this method to retrieve a GroupElements object by its primary key (id)

<h3 id="groupelements-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "groupElementTypeId": 0,
  "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="groupelements-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.GroupElements](#schemaslide.groupelements)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slidesgroupelementtypes">Slides/GroupElementTypes</h1>

Slides / GroupElementTypes

## GroupElementTypes: List All Possible Types

<a id="opIdslides_groupelementtypes_get"></a>

> Code samples

```bash
curl https://example.com/Slides/GroupElementTypes \
  -H 'Accept: application/json'
```

`GET /Slides/GroupElementTypes`

List Types: Use this method to retreive a list of possible options for the GroupElementTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="groupelementtypes-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="groupelementtypes-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Slide.GroupElementTypes](#schemaslide.groupelementtypes)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GroupElementTypes: Get By Type Id

<a id="opIdslides_groupelementtypes_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Slides/GroupElementTypes/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Slides/GroupElementTypes/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="groupelementtypes-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="groupelementtypes-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.GroupElementTypes](#schemaslide.groupelementtypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## GroupElementTypes: Get by Id

<a id="opIdslides_groupelementtypes_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/GroupElementTypes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/GroupElementTypes/{id}`

Get by Id: Use this method to retrieve a GroupElementTypes object by its primary key (id)

<h3 id="groupelementtypes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="groupelementtypes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.GroupElementTypes](#schemaslide.groupelementtypes)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-slidesslidemasters">Slides/SlideMasters</h1>

Slides / SlideMasters

## SlideMasters: Get by Id

<a id="opIdslides_slidemasters_get_id"></a>

> Code samples

```bash
curl https://example.com/Slides/SlideMasters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Slides/SlideMasters/{id}`

Get by Id: Use this method to retrieve a SlideMasters object by its primary key (id)

<h3 id="slidemasters-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="slidemasters-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.SlideMasters](#schemaslide.slidemasters)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-smartarts">SmartArts</h1>

SmartArts

## Slides: Get Dependent Objects Tree

<a id="opIdslides_smartarts_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/SmartArts/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /SmartArts/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="slides-get-dependent-objects-tree-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-dependent-objects-tree-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="slides-get-dependent-objects-tree-5-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Details

<a id="opIdslides_smartarts_details_get_id"></a>

> Code samples

```bash
curl https://example.com/SmartArts/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /SmartArts/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="slides-get-details-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {},
  "svgBlobUrl": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="slides-get-details-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.SmartArts.Details](#schemaslide.smartarts.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Underlying Xml

<a id="opIdslides_smartarts_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/SmartArts/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /SmartArts/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.

<h3 id="slides-get-underlying-xml-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-underlying-xml-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Modify Underlying Xml

<a id="opIdslides_smartarts_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/SmartArts/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /SmartArts/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="slides-modify-underlying-xml-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-modify-underlying-xml-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Slides: Get Svg file

<a id="opIdslides_smartarts_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/SmartArts/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /SmartArts/Svg/{id}`

This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="slides-get-svg-file-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="slides-get-svg-file-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## SmartArts: Get by Id

<a id="opIdslides_smartarts_get_id"></a>

> Code samples

```bash
curl https://example.com/SmartArts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /SmartArts/{id}`

Get by Id: Use this method to retrieve a SmartArts object by its primary key (id)

<h3 id="smartarts-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "svgBlobUrl": "string"
}
```

<h3 id="smartarts-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide.SmartArts](#schemaslide.smartarts)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-tables">Tables</h1>

Tables

## Tables: Get Dependent Objects Tree

<a id="opIdtables_tables_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Table and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="tables-get-dependent-objects-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="tables-get-dependent-objects-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="tables-get-dependent-objects-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Tables: Get Details

<a id="opIdtables_tables_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="tables-get-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "cells": [
    {}
  ],
  "changedBaseElementBlobUrl": "string",
  "columns": [
    {}
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "hasStylePart": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {},
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rows": [
    {}
  ],
  "stylePartOuterXml": "string",
  "svgBlobUrl": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="tables-get-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.Tables.Details](#schematable.tables.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Tables: Get Underlying Xml

<a id="opIdtables_tables_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Tables/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Table object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Table objects.

<h3 id="tables-get-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="tables-get-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Tables: Modify Underlying Xml

<a id="opIdtables_tables_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Tables/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Tables/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Table object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Table objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="tables-modify-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="tables-modify-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Tables: Get Svg file

<a id="opIdtables_tables_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Tables/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/Svg/{id}`

This endpoint is helpful for rending this Table as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="tables-get-svg-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="tables-get-svg-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Table: Get Table Data

<a id="opIdtables_tables_tableupdate_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/TableUpdate/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/TableUpdate/{id}`

Gets a TabletDataDTO object, usually used for downstream updates to table content

<h3 id="table-get-table-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "tableData": [
    [
      "string"
    ]
  ],
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="table-get-table-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.TableDataDTO](#schematable.tabledatadto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Tables: Update Table Data

<a id="opIdtables_tables_tableupdate_put_id"></a>

> Code samples

```bash
curl https://example.com/Tables/TableUpdate/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tableData": [
      [
        "string"
      ]
    ],
    "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`PUT /Tables/TableUpdate/{id}`

Simplifies table update by allowing users to supply strings to table cells  via TableDataDTO

> Body parameter

```json
{
  "tableData": [
    [
      "string"
    ]
  ],
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="tables-update-table-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[Table.TableDataDTO](#schematable.tabledatadto)|false|none|
|» tableData|body|[[string]]|false|none|
|» tableId|body|string(uuid)|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="tables-update-table-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Tables: Get by Id

<a id="opIdtables_tables_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/{id}`

Get by Id: Use this method to retrieve a Tables object by its primary key (id)

<h3 id="tables-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "hasStylePart": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "stylePartOuterXml": "string",
  "svgBlobUrl": "string"
}
```

<h3 id="tables-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.Tables](#schematable.tables)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-tablesborders">Tables/Borders</h1>

Tables / Borders

## Borders: Get by Id

<a id="opIdtables_borders_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/Borders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/Borders/{id}`

Get by Id: Use this method to retrieve a Borders object by its primary key (id)

<h3 id="borders-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="borders-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.Borders](#schematable.borders)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-tablescells">Tables/Cells</h1>

Tables / Cells

## Cells: Get by Id

<a id="opIdtables_cells_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/Cells/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/Cells/{id}`

Get by Id: Use this method to retrieve a Cells object by its primary key (id)

<h3 id="cells-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnSpan": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isMergedHorozontal": true,
  "isMergedVertical": true,
  "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowSpan": 0
}
```

<h3 id="cells-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.Cells](#schematable.cells)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-tablescolumns">Tables/Columns</h1>

Tables / Columns

## Columns: Get by Id

<a id="opIdtables_columns_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/Columns/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/Columns/{id}`

Get by Id: Use this method to retrieve a Columns object by its primary key (id)

<h3 id="columns-get-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "width": 0
}
```

<h3 id="columns-get-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.Columns](#schematable.columns)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-tablesrows">Tables/Rows</h1>

Tables / Rows

## Rows: Get by Id

<a id="opIdtables_rows_get_id"></a>

> Code samples

```bash
curl https://example.com/Tables/Rows/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Tables/Rows/{id}`

Get by Id: Use this method to retrieve a Rows object by its primary key (id)

<h3 id="rows-get-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="rows-get-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Table.Rows](#schematable.rows)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themes">Themes</h1>

Themes

## Theme: Get Dependent Objects Tree

<a id="opIdtheme_themes_childobjects_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/ChildObjects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/ChildObjects/{id}`

This endpoint is helpful for helping users and bots identify dependent objects to this Theme and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.

<h3 id="theme-get-dependent-objects-tree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "entityName": "string",
    "objectType": "string",
    "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentObjectType": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="theme-get-dependent-objects-tree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden|[ProblemDetails](#schemaproblemdetails)|

<h3 id="theme-get-dependent-objects-tree-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChildObjects](#schemachildobjects)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Theme: Get Details

<a id="opIdtheme_themes_details_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/Details/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/Details/{id}`

Returns object metadata and information about relative dependent objects 

<h3 id="theme-get-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "backgroundFills": [
    {}
  ],
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "colors": {},
  "customColors": [
    {}
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effectMaps": [
    {}
  ],
  "fills": [
    {}
  ],
  "fonts": {},
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lineMaps": [
    {}
  ],
  "name": "string",
  "packageUri": "string",
  "slide": {},
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="theme-get-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Themes.Details](#schematheme.themes.details)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Theme: Get Underlying Xml

<a id="opIdtheme_themes_openofficexml_get_id_updated"></a>

> Code samples

```bash
curl https://example.com/Themes/OpenOfficeXml/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/OpenOfficeXml/{id}`

Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Theme object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Theme objects.

<h3 id="theme-get-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|updated|query|boolean|false|Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="theme-get-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OoxmlDTO](#schemaooxmldto)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Theme: Modify Underlying Xml

<a id="opIdtheme_themes_openofficexml_put_id"></a>

> Code samples

```bash
curl https://example.com/Themes/OpenOfficeXml/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "openOfficeXml": "string",
    "type": "string"
  }'
```

`PUT /Themes/OpenOfficeXml/{id}`

Directly eidt the underlying xml of a Theme object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Theme objects.

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

<h3 id="theme-modify-underlying-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[OoxmlDTO](#schemaooxmldto)|false|none|
|» id|body|string(uuid) \| null|false|none|
|» openOfficeXml|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="theme-modify-underlying-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Theme: Get Svg file

<a id="opIdtheme_themes_svg_get_id_use_cache"></a>

> Code samples

```bash
curl https://example.com/Themes/Svg/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/Svg/{id}`

This endpoint is helpful for rending this Theme as an svg or image object that can then be rendered in a story, dashboard or website.

<h3 id="theme-get-svg-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|use_cache|query|boolean|false|Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="theme-get-svg-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an svg formatted-image of this object.|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Themes: Get by Id

<a id="opIdtheme_themes_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/{id}`

Get by Id: Use this method to retrieve a Themes object by its primary key (id)

<h3 id="themes-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|An Id of the respository DTO elemennt|

> Example responses

> 200 Response

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="themes-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Themes](#schematheme.themes)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themesbackgroundfills">Themes/BackgroundFills</h1>

Themes / BackgroundFills

## BackgroundFills: Get by Id

<a id="opIdthemes_backgroundfills_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/BackgroundFills/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/BackgroundFills/{id}`

Get by Id: Use this method to retrieve a BackgroundFills object by its primary key (id)

<h3 id="backgroundfills-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="backgroundfills-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.BackgroundFills](#schematheme.backgroundfills)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themescolors">Themes/Colors</h1>

Themes / Colors

## Colors: Get by Id

<a id="opIdthemes_colors_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/Colors/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/Colors/{id}`

Get by Id: Use this method to retrieve a Colors object by its primary key (id)

<h3 id="colors-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accent1": "string",
  "accent2": "string",
  "accent3": "string",
  "accent4": "string",
  "accent5": "string",
  "accent6": "string",
  "dark1": "string",
  "dark2": "string",
  "followedHyperlink": "string",
  "hyperlink": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "light1": "string",
  "light2": "string",
  "name": "string",
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="colors-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Colors](#schematheme.colors)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themescustomcolors">Themes/CustomColors</h1>

Themes / CustomColors

## CustomColors: Get by Id

<a id="opIdthemes_customcolors_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/CustomColors/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/CustomColors/{id}`

Get by Id: Use this method to retrieve a CustomColors object by its primary key (id)

<h3 id="customcolors-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "hexValue": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="customcolors-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.CustomColors](#schematheme.customcolors)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themeseffectmap">Themes/EffectMap</h1>

Themes / EffectMap

## EffectMap: Get by Id

<a id="opIdthemes_effectmap_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/EffectMap/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/EffectMap/{id}`

Get by Id: Use this method to retrieve a EffectMap object by its primary key (id)

<h3 id="effectmap-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="effectmap-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.EffectMap](#schematheme.effectmap)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themesfills">Themes/Fills</h1>

Themes / Fills

## Fills: Get by Id

<a id="opIdthemes_fills_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/Fills/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/Fills/{id}`

Get by Id: Use this method to retrieve a Fills object by its primary key (id)

<h3 id="fills-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="fills-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Fills](#schematheme.fills)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themesfonts">Themes/Fonts</h1>

Themes / Fonts

## Fonts: Get by Id

<a id="opIdthemes_fonts_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/Fonts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/Fonts/{id}`

Get by Id: Use this method to retrieve a Fonts object by its primary key (id)

<h3 id="fonts-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "bodyFont": "string",
  "headingFont": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="fonts-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Fonts](#schematheme.fonts)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themesintensity">Themes/Intensity</h1>

Themes / Intensity

## Intensity: List All Possible Types

<a id="opIdthemes_intensity_get"></a>

> Code samples

```bash
curl https://example.com/Themes/Intensity \
  -H 'Accept: application/json'
```

`GET /Themes/Intensity`

List Types: Use this method to retreive a list of possible options for the Intensity type. Use the Id from oneof the returned elements on to make changes to elements in the Themes object space.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="intensity-list-all-possible-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<h3 id="intensity-list-all-possible-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Theme.Intensity](#schematheme.intensity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Intensity: Get By Type Id

<a id="opIdthemes_intensity_typeid_get_type_id"></a>

> Code samples

```bash
curl https://example.com/Themes/Intensity/TypeId/0 \
  -H 'Accept: application/json'
```

`GET /Themes/Intensity/TypeId/{type_id}`

This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.

<h3 id="intensity-get-by-type-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="intensity-get-by-type-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Intensity](#schematheme.intensity)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Intensity: Get by Id

<a id="opIdthemes_intensity_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/Intensity/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/Intensity/{id}`

Get by Id: Use this method to retrieve a Intensity object by its primary key (id)

<h3 id="intensity-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

<h3 id="intensity-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.Intensity](#schematheme.intensity)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ooxml-automation-themeslinemap">Themes/LineMap</h1>

Themes / LineMap

## LineMap: Get by Id

<a id="opIdthemes_linemap_get_id"></a>

> Code samples

```bash
curl https://example.com/Themes/LineMap/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /Themes/LineMap/{id}`

Get by Id: Use this method to retrieve a LineMap object by its primary key (id)

<h3 id="linemap-get-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="linemap-get-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme.LineMap](#schematheme.linemap)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Chart.Axes">Chart.Axes</h2>
<!-- backwards compatibility -->
<a id="schemachart.axes"></a>
<a id="schema_Chart.Axes"></a>
<a id="tocSchart.axes"></a>
<a id="tocschart.axes"></a>

```json
{
  "axisDataTypeId": 0,
  "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ooxmlId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axisDataTypeId|integer(int32)|false|none|none|
|chartsId|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|ooxmlId|integer(int32)|false|none|none|

<h2 id="tocS_Chart.Axes.Details">Chart.Axes.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.axes.details"></a>
<a id="schema_Chart.Axes.Details"></a>
<a id="tocSchart.axes.details"></a>
<a id="tocschart.axes.details"></a>

```json
{
  "axisDataTypeId": 0,
  "chart": {
    "axes": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "chartData": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ooxmlId": 0,
  "titleTextContainer": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "outerXml": "string",
    "paragraphs": [
      {}
    ],
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axisDataTypeId|integer(int32)|false|none|none|
|chart|[Chart.Charts.Details](#schemachart.charts.details)|false|none|none|
|chartsId|string(uuid)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|titleTextContainer|[Shared.TextContainer.Details](#schemashared.textcontainer.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Chart.AxisDataTypes">Chart.AxisDataTypes</h2>
<!-- backwards compatibility -->
<a id="schemachart.axisdatatypes"></a>
<a id="schema_Chart.AxisDataTypes"></a>
<a id="tocSchart.axisdatatypes"></a>
<a id="tocschart.axisdatatypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlName": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlName|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Chart.ChartData">Chart.ChartData</h2>
<!-- backwards compatibility -->
<a id="schemachart.chartdata"></a>
<a id="schema_Chart.ChartData"></a>
<a id="tocSchart.chartdata"></a>
<a id="tocschart.chartdata"></a>

```json
{
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|

<h2 id="tocS_Chart.ChartData.Details">Chart.ChartData.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.chartdata.details"></a>
<a id="schema_Chart.ChartData.Details"></a>
<a id="tocSchart.chartdata.details"></a>
<a id="tocschart.chartdata.details"></a>

```json
{
  "chart": {
    "axes": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "chartData": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnCollection": {
    "chartData": {},
    "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columns": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "dataPoints": [
    {
      "chartData": {},
      "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "column": {},
      "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "row": {},
      "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": 0
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowCollection": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chartData": {},
    "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "nameFormatType": 0,
    "rows": [
      {}
    ],
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chart|[Chart.Charts.Details](#schemachart.charts.details)|false|none|none|
|chartId|string(uuid) \| null|false|none|none|
|columnCollection|[Chart.ColumnCollections.Details](#schemachart.columncollections.details)|false|none|none|
|dataPoints|[[Chart.DataPoints.Details](#schemachart.datapoints.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|rowCollection|[Chart.RowCollections.Details](#schemachart.rowcollections.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Chart.ChartDataDTO">Chart.ChartDataDTO</h2>
<!-- backwards compatibility -->
<a id="schemachart.chartdatadto"></a>
<a id="schema_Chart.ChartDataDTO"></a>
<a id="tocSchart.chartdatadto"></a>
<a id="tocschart.chartdatadto"></a>

```json
{
  "categoryNames": [
    "string"
  ],
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataPoints": [
    [
      0
    ]
  ],
  "seriesNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryNames|[string]|false|none|none|
|chartId|string(uuid)|false|none|none|
|dataPoints|[[number(double)]]|false|none|none|
|seriesNames|[string]|false|none|none|

<h2 id="tocS_Chart.Charts">Chart.Charts</h2>
<!-- backwards compatibility -->
<a id="schemachart.charts"></a>
<a id="schema_Chart.Charts"></a>
<a id="tocSchart.charts"></a>
<a id="tocschart.charts"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|parentGraphicId|string(uuid) \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|

<h2 id="tocS_Chart.Charts.Details">Chart.Charts.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.charts.details"></a>
<a id="schema_Chart.Charts.Details"></a>
<a id="tocSchart.charts.details"></a>
<a id="tocschart.charts.details"></a>

```json
{
  "axes": [
    {
      "axisDataTypeId": 0,
      "chart": {},
      "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "ooxmlId": 0,
      "titleTextContainer": {},
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "chartData": {
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnCollection": {},
    "dataPoints": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowCollection": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {
    "chart": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphicTypeId": 0,
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "picture": {},
    "smartArt": {},
    "table": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "titleTextContainer": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "outerXml": "string",
    "paragraphs": [
      {}
    ],
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axes|[[Chart.Axes.Details](#schemachart.axes.details)]|false|none|none|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|chartData|[Chart.ChartData.Details](#schemachart.chartdata.details)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|parentGraphic|[Slide.Graphics.Details](#schemaslide.graphics.details)|false|none|The graphics class provides a bridge between the Slides and <br>lower level models including Charts, Tables, Pictures, and SmartArts|
|parentGraphicId|string(uuid) \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|titleTextContainer|[Shared.TextContainer.Details](#schemashared.textcontainer.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Chart.ColumnCollections">Chart.ColumnCollections</h2>
<!-- backwards compatibility -->
<a id="schemachart.columncollections"></a>
<a id="schema_Chart.ColumnCollections"></a>
<a id="tocSchart.columncollections"></a>
<a id="tocschart.columncollections"></a>

```json
{
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartDataId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|

<h2 id="tocS_Chart.ColumnCollections.Details">Chart.ColumnCollections.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.columncollections.details"></a>
<a id="schema_Chart.ColumnCollections.Details"></a>
<a id="tocSchart.columncollections.details"></a>
<a id="tocschart.columncollections.details"></a>

```json
{
  "chartData": {
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnCollection": {},
    "dataPoints": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowCollection": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columns": [
    {
      "axis": {},
      "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "columnCollection": {},
      "columnCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "index": 0,
      "name": "string",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartData|[Chart.ChartData.Details](#schemachart.chartdata.details)|false|none|none|
|chartDataId|string(uuid) \| null|false|none|none|
|columns|[[Chart.Columns.Details](#schemachart.columns.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Chart.Columns">Chart.Columns</h2>
<!-- backwards compatibility -->
<a id="schemachart.columns"></a>
<a id="schema_Chart.Columns"></a>
<a id="tocSchart.columns"></a>
<a id="tocschart.columns"></a>

```json
{
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axisId|string(uuid) \| null|false|none|none|
|columnCollectionId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_Chart.Columns.Details">Chart.Columns.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.columns.details"></a>
<a id="schema_Chart.Columns.Details"></a>
<a id="tocSchart.columns.details"></a>
<a id="tocschart.columns.details"></a>

```json
{
  "axis": {
    "axisDataTypeId": 0,
    "chart": {},
    "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ooxmlId": 0,
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnCollection": {
    "chartData": {},
    "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columns": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "columnCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "name": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axis|[Chart.Axes.Details](#schemachart.axes.details)|false|none|none|
|axisId|string(uuid) \| null|false|none|none|
|columnCollection|[Chart.ColumnCollections.Details](#schemachart.columncollections.details)|false|none|none|
|columnCollectionId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Chart.DataPoints">Chart.DataPoints</h2>
<!-- backwards compatibility -->
<a id="schemachart.datapoints"></a>
<a id="schema_Chart.DataPoints"></a>
<a id="tocSchart.datapoints"></a>
<a id="tocschart.datapoints"></a>

```json
{
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartDataId|string(uuid) \| null|false|none|none|
|columnId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|rowId|string(uuid) \| null|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_Chart.DataPoints.Details">Chart.DataPoints.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.datapoints.details"></a>
<a id="schema_Chart.DataPoints.Details"></a>
<a id="tocSchart.datapoints.details"></a>
<a id="tocschart.datapoints.details"></a>

```json
{
  "chartData": {
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnCollection": {},
    "dataPoints": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowCollection": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "column": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnCollection": {},
    "columnCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": 0,
    "name": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "row": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": 0,
    "name": "string",
    "rowNameCollection": {},
    "rowNameCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartData|[Chart.ChartData.Details](#schemachart.chartdata.details)|false|none|none|
|chartDataId|string(uuid) \| null|false|none|none|
|column|[Chart.Columns.Details](#schemachart.columns.details)|false|none|none|
|columnId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|row|[Chart.Rows.Details](#schemachart.rows.details)|false|none|none|
|rowId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_Chart.PlotType">Chart.PlotType</h2>
<!-- backwards compatibility -->
<a id="schemachart.plottype"></a>
<a id="schema_Chart.PlotType"></a>
<a id="tocSchart.plottype"></a>
<a id="tocschart.plottype"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "plotQualifedAssy": "string",
  "plotTypeName": "string",
  "rowColTypeId": 0,
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|plotQualifedAssy|string \| null|false|none|none|
|plotTypeName|string \| null|false|none|none|
|rowColTypeId|integer(int32)|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Chart.RowCol">Chart.RowCol</h2>
<!-- backwards compatibility -->
<a id="schemachart.rowcol"></a>
<a id="schema_Chart.RowCol"></a>
<a id="tocSchart.rowcol"></a>
<a id="tocschart.rowcol"></a>

```json
{
  "colName": "string",
  "colQualifiedAssy": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowName": "string",
  "rowQualifedAssy": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colName|string \| null|false|none|none|
|colQualifiedAssy|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|rowName|string \| null|false|none|none|
|rowQualifedAssy|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Chart.RowCollections">Chart.RowCollections</h2>
<!-- backwards compatibility -->
<a id="schemachart.rowcollections"></a>
<a id="schema_Chart.RowCollections"></a>
<a id="tocSchart.rowcollections"></a>
<a id="tocschart.rowcollections"></a>

```json
{
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "nameFormatType": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axisId|string(uuid) \| null|false|none|none|
|chartDataId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|nameFormatType|integer(int32)|false|none|none|

<h2 id="tocS_Chart.RowCollections.Details">Chart.RowCollections.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.rowcollections.details"></a>
<a id="schema_Chart.RowCollections.Details"></a>
<a id="tocSchart.rowcollections.details"></a>
<a id="tocschart.rowcollections.details"></a>

```json
{
  "axis": {
    "axisDataTypeId": 0,
    "chart": {},
    "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ooxmlId": 0,
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "chartData": {
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnCollection": {},
    "dataPoints": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowCollection": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "nameFormatType": 0,
  "rows": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "index": 0,
      "name": "string",
      "rowNameCollection": {},
      "rowNameCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axis|[Chart.Axes.Details](#schemachart.axes.details)|false|none|none|
|axisId|string(uuid) \| null|false|none|none|
|chartData|[Chart.ChartData.Details](#schemachart.chartdata.details)|false|none|none|
|chartDataId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|nameFormatType|integer(int32)|false|none|none|
|rows|[[Chart.Rows.Details](#schemachart.rows.details)]|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Chart.RowNameFormatTypes">Chart.RowNameFormatTypes</h2>
<!-- backwards compatibility -->
<a id="schemachart.rownameformattypes"></a>
<a id="schema_Chart.RowNameFormatTypes"></a>
<a id="tocSchart.rownameformattypes"></a>
<a id="tocschart.rownameformattypes"></a>

```json
{
  "formatCode": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "powerToolsId": 0,
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatCode|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|powerToolsId|integer(int32)|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Chart.Rows">Chart.Rows</h2>
<!-- backwards compatibility -->
<a id="schemachart.rows"></a>
<a id="schema_Chart.Rows"></a>
<a id="tocSchart.rows"></a>
<a id="tocschart.rows"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "name": "string",
  "rowNameCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|rowNameCollectionId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Chart.Rows.Details">Chart.Rows.Details</h2>
<!-- backwards compatibility -->
<a id="schemachart.rows.details"></a>
<a id="schema_Chart.Rows.Details"></a>
<a id="tocSchart.rows.details"></a>
<a id="tocschart.rows.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "name": "string",
  "rowNameCollection": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chartData": {},
    "chartDataId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "nameFormatType": 0,
    "rows": [
      {}
    ],
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "rowNameCollectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|rowNameCollection|[Chart.RowCollections.Details](#schemachart.rowcollections.details)|false|none|none|
|rowNameCollectionId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_ChildObjects">ChildObjects</h2>
<!-- backwards compatibility -->
<a id="schemachildobjects"></a>
<a id="schema_ChildObjects"></a>
<a id="tocSchildobjects"></a>
<a id="tocschildobjects"></a>

```json
{
  "entityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "entityName": "string",
  "objectType": "string",
  "parentEntityId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentObjectType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string(uuid) \| null|false|none|none|
|entityName|string \| null|false|none|none|
|objectType|string \| null|false|none|none|
|parentEntityId|string(uuid) \| null|false|none|none|
|parentObjectType|string \| null|false|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "baseElementBlobUrl": "string",
  "blobLocation": "string",
  "changedBaseElementBlobUrl": "string",
  "documentTypeId": 0,
  "filename": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ownerGuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "packageUri": "string",
  "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableStylesXmlBlobUrl": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|blobLocation|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|documentTypeId|integer(int32)|false|none|none|
|filename|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ownerGuid|string(uuid)|false|none|none|
|packageUri|string \| null|false|none|none|
|storyId|string(uuid)|false|none|none|
|tableStylesXmlBlobUrl|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_Document.Details">Document.Details</h2>
<!-- backwards compatibility -->
<a id="schemadocument.details"></a>
<a id="schema_Document.Details"></a>
<a id="tocSdocument.details"></a>
<a id="tocsdocument.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "blobLocation": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "documentTypeId": 0,
  "filename": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ownerGuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "packageUri": "string",
  "slides": [
    {
      "baseElementBlobUrl": "string",
      "changedBaseElementBlobUrl": "string",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "document": {},
      "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "number": 0,
      "ooxmlId": 0,
      "packageUri": "string",
      "shapeTree": {},
      "slideDocumentUrl": "string",
      "slideMaster": {},
      "svgBlobUrl": "string",
      "theme": {},
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableStylesXmlBlobUrl": "string",
  "title": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|blobLocation|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|documentTypeId|integer(int32)|false|none|none|
|filename|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ownerGuid|string(uuid)|false|none|none|
|packageUri|string \| null|false|none|none|
|slides|[[Slide.Slides.Details](#schemaslide.slides.details)]|false|none|none|
|storyId|string(uuid)|false|none|none|
|tableStylesXmlBlobUrl|string \| null|false|none|none|
|title|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_DocumentCloneDTO">DocumentCloneDTO</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclonedto"></a>
<a id="schema_DocumentCloneDTO"></a>
<a id="tocSdocumentclonedto"></a>
<a id="tocsdocumentclonedto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|storyId|string(uuid)|false|none|none|

<h2 id="tocS_DocumentType">DocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttype"></a>
<a id="schema_DocumentType"></a>
<a id="tocSdocumenttype"></a>
<a id="tocsdocumenttype"></a>

```json
{
  "description": "string",
  "fileExtension": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "mimeType": "string",
  "name": "string",
  "ooxmlPackageType": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|fileExtension|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|mimeType|string \| null|false|none|none|
|name|string \| null|false|none|none|
|ooxmlPackageType|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_OoxmlDTO">OoxmlDTO</h2>
<!-- backwards compatibility -->
<a id="schemaooxmldto"></a>
<a id="schema_OoxmlDTO"></a>
<a id="tocSooxmldto"></a>
<a id="tocsooxmldto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "openOfficeXml": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid) \| null|false|none|none|
|openOfficeXml|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": {},
  "property2": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| null|false|none|none|
|instance|string \| null|false|none|none|
|status|integer(int32) \| null|false|none|none|
|title|string \| null|false|none|none|
|type|string \| null|false|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_Shared.ColorTransformationAttributes">Shared.ColorTransformationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemashared.colortransformationattributes"></a>
<a id="schema_Shared.ColorTransformationAttributes"></a>
<a id="tocSshared.colortransformationattributes"></a>
<a id="tocsshared.colortransformationattributes"></a>

```json
{
  "colorTransformationsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorTransformationsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_Shared.ColorTransformationAttributes.Details">Shared.ColorTransformationAttributes.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.colortransformationattributes.details"></a>
<a id="schema_Shared.ColorTransformationAttributes.Details"></a>
<a id="tocSshared.colortransformationattributes.details"></a>
<a id="tocsshared.colortransformationattributes.details"></a>

```json
{
  "colorTransformation": {
    "colorTransformationAttributes": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "parentSolidFill": {},
    "solidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "colorTransformationsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorTransformation|[Shared.ColorTransformations.Details](#schemashared.colortransformations.details)|false|none|none|
|colorTransformationsId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_Shared.ColorTransformations">Shared.ColorTransformations</h2>
<!-- backwards compatibility -->
<a id="schemashared.colortransformations"></a>
<a id="schema_Shared.ColorTransformations"></a>
<a id="tocSshared.colortransformations"></a>
<a id="tocsshared.colortransformations"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "solidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|solidFillsId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Shared.ColorTransformations.Details">Shared.ColorTransformations.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.colortransformations.details"></a>
<a id="schema_Shared.ColorTransformations.Details"></a>
<a id="tocSshared.colortransformations.details"></a>
<a id="tocsshared.colortransformations.details"></a>

```json
{
  "colorTransformationAttributes": [
    {
      "colorTransformation": {},
      "colorTransformationsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": "string"
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "parentSolidFill": {
    "colorTransformations": {},
    "colorTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hexValue": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isUserColor": true,
    "parentFillMap": {},
    "parentGradientStop": {},
    "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentLine": {},
    "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentText": {},
    "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "solidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorTransformationAttributes|[[Shared.ColorTransformationAttributes.Details](#schemashared.colortransformationattributes.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|parentSolidFill|[Shared.SolidFills.Details](#schemashared.solidfills.details)|false|none|none|
|solidFillsId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.ColorTypes">Shared.ColorTypes</h2>
<!-- backwards compatibility -->
<a id="schemashared.colortypes"></a>
<a id="schema_Shared.ColorTypes"></a>
<a id="tocSshared.colortypes"></a>
<a id="tocsshared.colortypes"></a>

```json
{
  "colorSchemeIndexValueEnum": 0,
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorSchemeIndexValueEnum|integer(int32) \| null|false|none|none|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Shared.DashTypes">Shared.DashTypes</h2>
<!-- backwards compatibility -->
<a id="schemashared.dashtypes"></a>
<a id="schema_Shared.DashTypes"></a>
<a id="tocSshared.dashtypes"></a>
<a id="tocsshared.dashtypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|serializedAs|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Shared.EffectAttributes">Shared.EffectAttributes</h2>
<!-- backwards compatibility -->
<a id="schemashared.effectattributes"></a>
<a id="schema_Shared.EffectAttributes"></a>
<a id="tocSshared.effectattributes"></a>
<a id="tocsshared.effectattributes"></a>

```json
{
  "attributesJson": "string",
  "effectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectTypeId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributesJson|string \| null|false|none|none|
|effectId|string(uuid) \| null|false|none|none|
|effectTypeId|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|

<h2 id="tocS_Shared.EffectAttributes.Details">Shared.EffectAttributes.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.effectattributes.details"></a>
<a id="schema_Shared.EffectAttributes.Details"></a>
<a id="tocSshared.effectattributes.details"></a>
<a id="tocsshared.effectattributes.details"></a>

```json
{
  "attributesJson": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effect": {
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttributes": [
      {}
    ],
    "effectMap": {},
    "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "parentConnector": {},
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "effectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectTypeId": 0,
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributesJson|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effect|[Shared.Effects.Details](#schemashared.effects.details)|false|none|none|
|effectId|string(uuid) \| null|false|none|none|
|effectTypeId|integer(int32)|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|id|string(uuid)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.EffectTypes">Shared.EffectTypes</h2>
<!-- backwards compatibility -->
<a id="schemashared.effecttypes"></a>
<a id="schema_Shared.EffectTypes"></a>
<a id="tocSshared.effecttypes"></a>
<a id="tocsshared.effecttypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Shared.Effects">Shared.Effects</h2>
<!-- backwards compatibility -->
<a id="schemashared.effects"></a>
<a id="schema_Shared.Effects"></a>
<a id="tocSshared.effects"></a>
<a id="tocsshared.effects"></a>

```json
{
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorId|string(uuid) \| null|false|none|none|
|effectMapId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Shared.Effects.Details">Shared.Effects.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.effects.details"></a>
<a id="schema_Shared.Effects.Details"></a>
<a id="tocSshared.effects.details"></a>
<a id="tocsshared.effects.details"></a>

```json
{
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effectAttributes": [
    {
      "attributesJson": "string",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "effect": {},
      "effectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "effectTypeId": 0,
      "fillMap": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "effectMap": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "intensityId": 0,
    "theme": {},
    "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "parentConnector": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "endConnectionIdx": 0,
    "endConnectionShape": {},
    "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "startConnectionIdx": 0,
    "startConnectionShape": {},
    "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "parentShape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effectAttributes|[[Shared.EffectAttributes.Details](#schemashared.effectattributes.details)]|false|none|none|
|effectMap|[Theme.EffectMap.Details](#schematheme.effectmap.details)|false|none|none|
|effectMapId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|parentConnector|[Slide.Connector.Details](#schemaslide.connector.details)|false|none|none|
|parentShape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.FillMap">Shared.FillMap</h2>
<!-- backwards compatibility -->
<a id="schemashared.fillmap"></a>
<a id="schema_Shared.FillMap"></a>
<a id="tocSshared.fillmap"></a>
<a id="tocsshared.fillmap"></a>

```json
{
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "fillTypeId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorId|string(uuid) \| null|false|none|none|
|effectAttributeId|string(uuid) \| null|false|none|none|
|fillTypeId|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|tableCellId|string(uuid) \| null|false|none|none|
|themeBackgroundFillId|string(uuid) \| null|false|none|none|
|themeFillId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Shared.FillMap.Details">Shared.FillMap.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.fillmap.details"></a>
<a id="schema_Shared.FillMap.Details"></a>
<a id="tocSshared.fillmap.details"></a>
<a id="tocsshared.fillmap.details"></a>

```json
{
  "connector": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "endConnectionIdx": 0,
    "endConnectionShape": {},
    "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "startConnectionIdx": 0,
    "startConnectionShape": {},
    "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effectAttribute": {
    "attributesJson": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "effectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "effectTypeId": 0,
    "fillMap": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "fillTypeId": 0,
  "gradientFill": {
    "angle": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "gradientStops": [
      {}
    ],
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isPath": true,
    "pathType": "string",
    "rotateWithShape": true,
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageFill": {
    "compressionState": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "dpi": 0,
    "effectsJson": "string",
    "fillMap": {},
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "picture": {},
    "rotateWithShape": true,
    "sourceRectangle": "string",
    "stretch": true,
    "tile": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "shape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "solidFill": {
    "colorTransformations": {},
    "colorTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hexValue": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isUserColor": true,
    "parentFillMap": {},
    "parentGradientStop": {},
    "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentLine": {},
    "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentText": {},
    "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "tableCell": {
    "border": {},
    "column": {},
    "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnSpan": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isMergedHorozontal": true,
    "isMergedVertical": true,
    "row": {},
    "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowSpan": 0,
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeBackgroundFill": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "intensityId": 0,
    "theme": {},
    "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeFill": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "intensityId": 0,
    "theme": {},
    "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connector|[Slide.Connector.Details](#schemaslide.connector.details)|false|none|none|
|connectorId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effectAttribute|[Shared.EffectAttributes.Details](#schemashared.effectattributes.details)|false|none|none|
|effectAttributeId|string(uuid) \| null|false|none|none|
|fillTypeId|integer(int32)|false|none|none|
|gradientFill|[Shared.GradientFills.Details](#schemashared.gradientfills.details)|false|none|none|
|id|string(uuid)|false|none|none|
|imageFill|[Shared.ImageFills.Details](#schemashared.imagefills.details)|false|none|none|
|shape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|solidFill|[Shared.SolidFills.Details](#schemashared.solidfills.details)|false|none|none|
|tableCell|[Table.Cells.Details](#schematable.cells.details)|false|none|none|
|tableCellId|string(uuid) \| null|false|none|none|
|themeBackgroundFill|[Theme.BackgroundFills.Details](#schematheme.backgroundfills.details)|false|none|none|
|themeBackgroundFillId|string(uuid) \| null|false|none|none|
|themeFill|[Theme.Fills.Details](#schematheme.fills.details)|false|none|none|
|themeFillId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.FillTypes">Shared.FillTypes</h2>
<!-- backwards compatibility -->
<a id="schemashared.filltypes"></a>
<a id="schema_Shared.FillTypes"></a>
<a id="tocSshared.filltypes"></a>
<a id="tocsshared.filltypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Shared.GradientFills">Shared.GradientFills</h2>
<!-- backwards compatibility -->
<a id="schemashared.gradientfills"></a>
<a id="schema_Shared.GradientFills"></a>
<a id="tocSshared.gradientfills"></a>
<a id="tocsshared.gradientfills"></a>

```json
{
  "angle": 0,
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isPath": true,
  "pathType": "string",
  "rotateWithShape": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|integer(int32) \| null|false|none|none|
|fillMapId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|isPath|boolean|false|none|none|
|pathType|string \| null|false|none|none|
|rotateWithShape|boolean|false|none|none|

<h2 id="tocS_Shared.GradientFills.Details">Shared.GradientFills.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.gradientfills.details"></a>
<a id="schema_Shared.GradientFills.Details"></a>
<a id="tocSshared.gradientfills.details"></a>
<a id="tocsshared.gradientfills.details"></a>

```json
{
  "angle": 0,
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "gradientStops": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "gradientFill": {},
      "gradientFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "position": 0,
      "solidFill": {},
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isPath": true,
  "pathType": "string",
  "rotateWithShape": true,
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|integer(int32) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|fillMapId|string(uuid) \| null|false|none|none|
|gradientStops|[[Shared.GradientStops.Details](#schemashared.gradientstops.details)]|false|none|none|
|id|string(uuid)|false|none|none|
|isPath|boolean|false|none|none|
|pathType|string \| null|false|none|none|
|rotateWithShape|boolean|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.GradientStops">Shared.GradientStops</h2>
<!-- backwards compatibility -->
<a id="schemashared.gradientstops"></a>
<a id="schema_Shared.GradientStops"></a>
<a id="tocSshared.gradientstops"></a>
<a id="tocsshared.gradientstops"></a>

```json
{
  "gradientFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gradientFillsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|position|integer(int32)|false|none|none|

<h2 id="tocS_Shared.GradientStops.Details">Shared.GradientStops.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.gradientstops.details"></a>
<a id="schema_Shared.GradientStops.Details"></a>
<a id="tocSshared.gradientstops.details"></a>
<a id="tocsshared.gradientstops.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "gradientFill": {
    "angle": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "gradientStops": [
      {}
    ],
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isPath": true,
    "pathType": "string",
    "rotateWithShape": true,
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "gradientFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position": 0,
  "solidFill": {
    "colorTransformations": {},
    "colorTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hexValue": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isUserColor": true,
    "parentFillMap": {},
    "parentGradientStop": {},
    "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentLine": {},
    "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentText": {},
    "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|gradientFill|[Shared.GradientFills.Details](#schemashared.gradientfills.details)|false|none|none|
|gradientFillsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|position|integer(int32)|false|none|none|
|solidFill|[Shared.SolidFills.Details](#schemashared.solidfills.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.ImageFills">Shared.ImageFills</h2>
<!-- backwards compatibility -->
<a id="schemashared.imagefills"></a>
<a id="schema_Shared.ImageFills"></a>
<a id="tocSshared.imagefills"></a>
<a id="tocsshared.imagefills"></a>

```json
{
  "compressionState": "string",
  "dpi": 0,
  "effectsJson": "string",
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rotateWithShape": true,
  "sourceRectangle": "string",
  "stretch": true,
  "tile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compressionState|string \| null|false|none|none|
|dpi|integer(int32) \| null|false|none|none|
|effectsJson|string \| null|false|none|none|
|fillMapId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|rotateWithShape|boolean|false|none|none|
|sourceRectangle|string \| null|false|none|none|
|stretch|boolean|false|none|none|
|tile|string \| null|false|none|none|

<h2 id="tocS_Shared.ImageFills.Details">Shared.ImageFills.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.imagefills.details"></a>
<a id="schema_Shared.ImageFills.Details"></a>
<a id="tocSshared.imagefills.details"></a>
<a id="tocsshared.imagefills.details"></a>

```json
{
  "compressionState": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "dpi": 0,
  "effectsJson": "string",
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "picture": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fileExtension": "string",
    "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFileBlobUrl": "string",
    "imageFill": {},
    "imageFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "rotateWithShape": true,
  "sourceRectangle": "string",
  "stretch": true,
  "tile": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compressionState|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|dpi|integer(int32) \| null|false|none|none|
|effectsJson|string \| null|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|fillMapId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|picture|[Shared.Pictures.Details](#schemashared.pictures.details)|false|none|none|
|rotateWithShape|boolean|false|none|none|
|sourceRectangle|string \| null|false|none|none|
|stretch|boolean|false|none|none|
|tile|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.LineEndSizes">Shared.LineEndSizes</h2>
<!-- backwards compatibility -->
<a id="schemashared.lineendsizes"></a>
<a id="schema_Shared.LineEndSizes"></a>
<a id="tocSshared.lineendsizes"></a>
<a id="tocsshared.lineendsizes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|serializedAs|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Shared.LineEndTypes">Shared.LineEndTypes</h2>
<!-- backwards compatibility -->
<a id="schemashared.lineendtypes"></a>
<a id="schema_Shared.LineEndTypes"></a>
<a id="tocSshared.lineendtypes"></a>
<a id="tocsshared.lineendtypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "serializedAs": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|serializedAs|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Shared.Lines">Shared.Lines</h2>
<!-- backwards compatibility -->
<a id="schemashared.lines"></a>
<a id="schema_Shared.Lines"></a>
<a id="tocSshared.lines"></a>
<a id="tocsshared.lines"></a>

```json
{
  "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dashTypeId": 0,
  "headEndHeightId": 0,
  "headEndTypeId": 0,
  "headEndWidthId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tailEndHeightId": 0,
  "tailEndTypeId": 0,
  "tailEndWidthId": 0,
  "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bLtoTRBorderId|string(uuid) \| null|false|none|none|
|bottomBorderId|string(uuid) \| null|false|none|none|
|connectorId|string(uuid) \| null|false|none|none|
|dashTypeId|integer(int32)|false|none|none|
|headEndHeightId|integer(int32)|false|none|none|
|headEndTypeId|integer(int32)|false|none|none|
|headEndWidthId|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|leftBorderId|string(uuid) \| null|false|none|none|
|lineMapId|string(uuid) \| null|false|none|none|
|rightBorderId|string(uuid) \| null|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|tLtoBRBorderId|string(uuid) \| null|false|none|none|
|tailEndHeightId|integer(int32)|false|none|none|
|tailEndTypeId|integer(int32)|false|none|none|
|tailEndWidthId|integer(int32)|false|none|none|
|topBorderId|string(uuid) \| null|false|none|none|
|weight|integer(int32)|false|none|none|

<h2 id="tocS_Shared.Lines.Details">Shared.Lines.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.lines.details"></a>
<a id="schema_Shared.Lines.Details"></a>
<a id="tocSshared.lines.details"></a>
<a id="tocsshared.lines.details"></a>

```json
{
  "bLtoTRBorder": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "bottomBorder": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dashTypeId": 0,
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "headEndHeightId": 0,
  "headEndTypeId": 0,
  "headEndWidthId": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "leftBorder": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lineColorSolidFill": {
    "colorTransformations": {},
    "colorTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hexValue": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isUserColor": true,
    "parentFillMap": {},
    "parentGradientStop": {},
    "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentLine": {},
    "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentText": {},
    "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "lineMap": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "intensityId": 0,
    "line": {},
    "theme": {},
    "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentConnector": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "endConnectionIdx": 0,
    "endConnectionShape": {},
    "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "startConnectionIdx": 0,
    "startConnectionShape": {},
    "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "parentShape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "rightBorder": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tLtoBRBorder": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tailEndHeightId": 0,
  "tailEndTypeId": 0,
  "tailEndWidthId": 0,
  "topBorder": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bLtoTRBorder|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|bLtoTRBorderId|string(uuid) \| null|false|none|none|
|bottomBorder|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|bottomBorderId|string(uuid) \| null|false|none|none|
|connectorId|string(uuid) \| null|false|none|none|
|dashTypeId|integer(int32)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|headEndHeightId|integer(int32)|false|none|none|
|headEndTypeId|integer(int32)|false|none|none|
|headEndWidthId|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|leftBorder|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|leftBorderId|string(uuid) \| null|false|none|none|
|lineColorSolidFill|[Shared.SolidFills.Details](#schemashared.solidfills.details)|false|none|none|
|lineMap|[Theme.LineMap.Details](#schematheme.linemap.details)|false|none|none|
|lineMapId|string(uuid) \| null|false|none|none|
|parentConnector|[Slide.Connector.Details](#schemaslide.connector.details)|false|none|none|
|parentShape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|rightBorder|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|rightBorderId|string(uuid) \| null|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|tLtoBRBorder|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|tLtoBRBorderId|string(uuid) \| null|false|none|none|
|tailEndHeightId|integer(int32)|false|none|none|
|tailEndTypeId|integer(int32)|false|none|none|
|tailEndWidthId|integer(int32)|false|none|none|
|topBorder|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|topBorderId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
|weight|integer(int32)|false|none|none|

<h2 id="tocS_Shared.Paragraph">Shared.Paragraph</h2>
<!-- backwards compatibility -->
<a id="schemashared.paragraph"></a>
<a id="schema_Shared.Paragraph"></a>
<a id="tocSshared.paragraph"></a>
<a id="tocsshared.paragraph"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "number": 0,
  "textContainerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|number|integer(int32)|false|none|none|
|textContainerId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Shared.Paragraph.Details">Shared.Paragraph.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.paragraph.details"></a>
<a id="schema_Shared.Paragraph.Details"></a>
<a id="tocSshared.paragraph.details"></a>
<a id="tocsshared.paragraph.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "number": 0,
  "text": [
    {
      "colorSolidFill": {},
      "colorSolidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "font": "string",
      "fontSize": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isBold": true,
      "isItalic": true,
      "isThemeFont": true,
      "isUnderline": true,
      "paragraph": {},
      "paragraphId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "rawText": "string",
      "sequence": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "textContainer": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "outerXml": "string",
    "paragraphs": [
      {}
    ],
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "textContainerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|number|integer(int32)|false|none|none|
|text|[[Shared.Text.Details](#schemashared.text.details)]|false|none|none|
|textContainer|[Shared.TextContainer.Details](#schemashared.textcontainer.details)|false|none|none|
|textContainerId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.Pictures">Shared.Pictures</h2>
<!-- backwards compatibility -->
<a id="schemashared.pictures"></a>
<a id="schema_Shared.Pictures"></a>
<a id="tocSshared.pictures"></a>
<a id="tocsshared.pictures"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "fileExtension": "string",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageFileBlobUrl": "string",
  "imageFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|fileExtension|string \| null|false|none|none|
|graphicsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|imageFileBlobUrl|string \| null|false|none|none|
|imageFillsId|string(uuid) \| null|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|

<h2 id="tocS_Shared.Pictures.Details">Shared.Pictures.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.pictures.details"></a>
<a id="schema_Shared.Pictures.Details"></a>
<a id="tocSshared.pictures.details"></a>
<a id="tocsshared.pictures.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fileExtension": "string",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageFileBlobUrl": "string",
  "imageFill": {
    "compressionState": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "dpi": 0,
    "effectsJson": "string",
    "fillMap": {},
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "picture": {},
    "rotateWithShape": true,
    "sourceRectangle": "string",
    "stretch": true,
    "tile": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "imageFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {
    "chart": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphicTypeId": 0,
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "picture": {},
    "smartArt": {},
    "table": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|fileExtension|string \| null|false|none|none|
|graphicsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|imageFileBlobUrl|string \| null|false|none|none|
|imageFill|[Shared.ImageFills.Details](#schemashared.imagefills.details)|false|none|none|
|imageFillsId|string(uuid) \| null|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|parentGraphic|[Slide.Graphics.Details](#schemaslide.graphics.details)|false|none|The graphics class provides a bridge between the Slides and <br>lower level models including Charts, Tables, Pictures, and SmartArts|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.SolidFills">Shared.SolidFills</h2>
<!-- backwards compatibility -->
<a id="schemashared.solidfills"></a>
<a id="schema_Shared.SolidFills"></a>
<a id="tocSshared.solidfills"></a>
<a id="tocsshared.solidfills"></a>

```json
{
  "colorTypeId": 0,
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hexValue": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isUserColor": true,
  "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorTypeId|integer(int32) \| null|false|none|none|
|fillMapId|string(uuid) \| null|false|none|none|
|hexValue|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|isUserColor|boolean|false|none|none|
|parentGradientStopId|string(uuid) \| null|false|none|none|
|parentLineId|string(uuid) \| null|false|none|none|
|parentTextId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Shared.SolidFills.Details">Shared.SolidFills.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.solidfills.details"></a>
<a id="schema_Shared.SolidFills.Details"></a>
<a id="tocSshared.solidfills.details"></a>
<a id="tocsshared.solidfills.details"></a>

```json
{
  "colorTransformations": {
    "colorTransformationAttributes": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "parentSolidFill": {},
    "solidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "colorTypeId": 0,
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hexValue": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isUserColor": true,
  "parentFillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "parentGradientStop": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "gradientFill": {},
    "gradientFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "position": 0,
    "solidFill": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentLine": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentText": {
    "colorSolidFill": {},
    "colorSolidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "font": "string",
    "fontSize": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isBold": true,
    "isItalic": true,
    "isThemeFont": true,
    "isUnderline": true,
    "paragraph": {},
    "paragraphId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rawText": "string",
    "sequence": 0,
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorTransformations|[Shared.ColorTransformations.Details](#schemashared.colortransformations.details)|false|none|none|
|colorTypeId|integer(int32) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|fillMapId|string(uuid) \| null|false|none|none|
|hexValue|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|isUserColor|boolean|false|none|none|
|parentFillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|parentGradientStop|[Shared.GradientStops.Details](#schemashared.gradientstops.details)|false|none|none|
|parentGradientStopId|string(uuid) \| null|false|none|none|
|parentLine|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|parentLineId|string(uuid) \| null|false|none|none|
|parentText|[Shared.Text.Details](#schemashared.text.details)|false|none|none|
|parentTextId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.Text">Shared.Text</h2>
<!-- backwards compatibility -->
<a id="schemashared.text"></a>
<a id="schema_Shared.Text"></a>
<a id="tocSshared.text"></a>
<a id="tocsshared.text"></a>

```json
{
  "colorSolidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "font": "string",
  "fontSize": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isBold": true,
  "isItalic": true,
  "isThemeFont": true,
  "isUnderline": true,
  "paragraphId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rawText": "string",
  "sequence": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorSolidFillsId|string(uuid) \| null|false|none|none|
|font|string \| null|false|none|none|
|fontSize|integer(int32) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|isBold|boolean|false|none|none|
|isItalic|boolean|false|none|none|
|isThemeFont|boolean|false|none|none|
|isUnderline|boolean|false|none|none|
|paragraphId|string(uuid) \| null|false|none|none|
|rawText|string \| null|false|none|none|
|sequence|integer(int32)|false|none|none|

<h2 id="tocS_Shared.Text.Details">Shared.Text.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.text.details"></a>
<a id="schema_Shared.Text.Details"></a>
<a id="tocSshared.text.details"></a>
<a id="tocsshared.text.details"></a>

```json
{
  "colorSolidFill": {
    "colorTransformations": {},
    "colorTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hexValue": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isUserColor": true,
    "parentFillMap": {},
    "parentGradientStop": {},
    "parentGradientStopId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentLine": {},
    "parentLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentText": {},
    "parentTextId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "colorSolidFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "font": "string",
  "fontSize": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isBold": true,
  "isItalic": true,
  "isThemeFont": true,
  "isUnderline": true,
  "paragraph": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "number": 0,
    "text": [
      {}
    ],
    "textContainer": {},
    "textContainerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "paragraphId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rawText": "string",
  "sequence": 0,
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorSolidFill|[Shared.SolidFills.Details](#schemashared.solidfills.details)|false|none|none|
|colorSolidFillsId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|font|string \| null|false|none|none|
|fontSize|integer(int32) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|isBold|boolean|false|none|none|
|isItalic|boolean|false|none|none|
|isThemeFont|boolean|false|none|none|
|isUnderline|boolean|false|none|none|
|paragraph|[Shared.Paragraph.Details](#schemashared.paragraph.details)|false|none|none|
|paragraphId|string(uuid) \| null|false|none|none|
|rawText|string \| null|false|none|none|
|sequence|integer(int32)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Shared.TextContainer">Shared.TextContainer</h2>
<!-- backwards compatibility -->
<a id="schemashared.textcontainer"></a>
<a id="schema_Shared.TextContainer"></a>
<a id="tocSshared.textcontainer"></a>
<a id="tocsshared.textcontainer"></a>

```json
{
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outerXml": "string",
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axisId|string(uuid) \| null|false|none|none|
|chartId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|outerXml|string \| null|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|tableCellId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Shared.TextContainer.Details">Shared.TextContainer.Details</h2>
<!-- backwards compatibility -->
<a id="schemashared.textcontainer.details"></a>
<a id="schema_Shared.TextContainer.Details"></a>
<a id="tocSshared.textcontainer.details"></a>
<a id="tocsshared.textcontainer.details"></a>

```json
{
  "axis": {
    "axisDataTypeId": 0,
    "chart": {},
    "chartsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "ooxmlId": 0,
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "chart": {
    "axes": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "chartData": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outerXml": "string",
  "paragraphs": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "number": 0,
      "text": [
        {}
      ],
      "textContainer": {},
      "textContainerId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "parentShape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tableCell": {
    "border": {},
    "column": {},
    "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnSpan": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isMergedHorozontal": true,
    "isMergedVertical": true,
    "row": {},
    "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowSpan": 0,
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axis|[Chart.Axes.Details](#schemachart.axes.details)|false|none|none|
|axisId|string(uuid) \| null|false|none|none|
|chart|[Chart.Charts.Details](#schemachart.charts.details)|false|none|none|
|chartId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|outerXml|string \| null|false|none|none|
|paragraphs|[[Shared.Paragraph.Details](#schemashared.paragraph.details)]|false|none|none|
|parentShape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|shapeId|string(uuid) \| null|false|none|none|
|tableCell|[Table.Cells.Details](#schematable.cells.details)|false|none|none|
|tableCellId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.ColorMaps">Slide.ColorMaps</h2>
<!-- backwards compatibility -->
<a id="schemaslide.colormaps"></a>
<a id="schema_Slide.ColorMaps"></a>
<a id="tocSslide.colormaps"></a>
<a id="tocsslide.colormaps"></a>

```json
{
  "accent1": 0,
  "accent2": 0,
  "accent3": 0,
  "accent4": 0,
  "accent5": 0,
  "accent6": 0,
  "background1": 0,
  "background2": 0,
  "followedHyperlink": 0,
  "hyperlink": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "slideMasterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "text1": 0,
  "text2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent1|integer(int32)|false|none|none|
|accent2|integer(int32)|false|none|none|
|accent3|integer(int32)|false|none|none|
|accent4|integer(int32)|false|none|none|
|accent5|integer(int32)|false|none|none|
|accent6|integer(int32)|false|none|none|
|background1|integer(int32)|false|none|none|
|background2|integer(int32)|false|none|none|
|followedHyperlink|integer(int32)|false|none|none|
|hyperlink|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|slideMasterId|string(uuid) \| null|false|none|none|
|text1|integer(int32)|false|none|none|
|text2|integer(int32)|false|none|none|

<h2 id="tocS_Slide.ColorMaps.Details">Slide.ColorMaps.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.colormaps.details"></a>
<a id="schema_Slide.ColorMaps.Details"></a>
<a id="tocSslide.colormaps.details"></a>
<a id="tocsslide.colormaps.details"></a>

```json
{
  "accent1": 0,
  "accent2": 0,
  "accent3": 0,
  "accent4": 0,
  "accent5": 0,
  "accent6": 0,
  "background1": 0,
  "background2": 0,
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "followedHyperlink": 0,
  "hyperlink": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "slideMaster": {
    "colorMap": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentSlide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "slideMasterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "text1": 0,
  "text2": 0,
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent1|integer(int32)|false|none|none|
|accent2|integer(int32)|false|none|none|
|accent3|integer(int32)|false|none|none|
|accent4|integer(int32)|false|none|none|
|accent5|integer(int32)|false|none|none|
|accent6|integer(int32)|false|none|none|
|background1|integer(int32)|false|none|none|
|background2|integer(int32)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|followedHyperlink|integer(int32)|false|none|none|
|hyperlink|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|slideMaster|[Slide.SlideMasters.Details](#schemaslide.slidemasters.details)|false|none|none|
|slideMasterId|string(uuid) \| null|false|none|none|
|text1|integer(int32)|false|none|none|
|text2|integer(int32)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.Connector">Slide.Connector</h2>
<!-- backwards compatibility -->
<a id="schemaslide.connector"></a>
<a id="schema_Slide.Connector"></a>
<a id="tocSslide.connector"></a>
<a id="tocsslide.connector"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "endConnectionIdx": 0,
  "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "startConnectionIdx": 0,
  "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|endConnectionIdx|integer(int32)|false|none|none|
|endConnectionShapeId|string(uuid) \| null|false|none|none|
|flipHorizontal|boolean|false|none|none|
|flipVertical|boolean|false|none|none|
|freeFormPathXml|string \| null|false|none|none|
|groupElementsId|string(uuid) \| null|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|isThemeEffect|boolean|false|none|none|
|isThemeFill|boolean|false|none|none|
|isThemeLine|boolean|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|presetTypeId|string \| null|false|none|none|
|rotation|integer(int32)|false|none|none|
|startConnectionIdx|integer(int32)|false|none|none|
|startConnectionShapeId|string(uuid) \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|

<h2 id="tocS_Slide.Connector.Details">Slide.Connector.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.connector.details"></a>
<a id="schema_Slide.Connector.Details"></a>
<a id="tocSslide.connector.details"></a>
<a id="tocsslide.connector.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effect": {
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttributes": [
      {}
    ],
    "effectMap": {},
    "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "parentConnector": {},
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "endConnectionIdx": 0,
  "endConnectionShape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElement": {
    "childGroupElements": [
      {}
    ],
    "connector": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphic": {},
    "group": {},
    "groupElementTypeId": 0,
    "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentGroupElement": {},
    "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shape": {},
    "shapeTree": {},
    "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "typeInfo": {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "typeId": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "line": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "startConnectionIdx": 0,
  "startConnectionShape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effect|[Shared.Effects.Details](#schemashared.effects.details)|false|none|none|
|endConnectionIdx|integer(int32)|false|none|none|
|endConnectionShape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|endConnectionShapeId|string(uuid) \| null|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|flipHorizontal|boolean|false|none|none|
|flipVertical|boolean|false|none|none|
|freeFormPathXml|string \| null|false|none|none|
|groupElement|[Slide.GroupElements.Details](#schemaslide.groupelements.details)|false|none|none|
|groupElementsId|string(uuid) \| null|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|isThemeEffect|boolean|false|none|none|
|isThemeFill|boolean|false|none|none|
|isThemeLine|boolean|false|none|none|
|line|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|presetTypeId|string \| null|false|none|none|
|rotation|integer(int32)|false|none|none|
|startConnectionIdx|integer(int32)|false|none|none|
|startConnectionShape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|startConnectionShapeId|string(uuid) \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.GraphicTypes">Slide.GraphicTypes</h2>
<!-- backwards compatibility -->
<a id="schemaslide.graphictypes"></a>
<a id="schema_Slide.GraphicTypes"></a>
<a id="tocSslide.graphictypes"></a>
<a id="tocsslide.graphictypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Slide.Graphics">Slide.Graphics</h2>
<!-- backwards compatibility -->
<a id="schemaslide.graphics"></a>
<a id="schema_Slide.Graphics"></a>
<a id="tocSslide.graphics"></a>
<a id="tocsslide.graphics"></a>

```json
{
  "graphicTypeId": 0,
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graphicTypeId|integer(int32)|false|none|none|
|groupElementsId|string(uuid) \| null|false|none|none|
|height|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|width|integer(int32)|false|none|none|
|xOffset|integer(int32)|false|none|none|
|yOffset|integer(int32)|false|none|none|

<h2 id="tocS_Slide.Graphics.Details">Slide.Graphics.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.graphics.details"></a>
<a id="schema_Slide.Graphics.Details"></a>
<a id="tocSslide.graphics.details"></a>
<a id="tocsslide.graphics.details"></a>

```json
{
  "chart": {
    "axes": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "chartData": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "titleTextContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "graphicTypeId": 0,
  "groupElement": {
    "childGroupElements": [
      {}
    ],
    "connector": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphic": {},
    "group": {},
    "groupElementTypeId": 0,
    "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentGroupElement": {},
    "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shape": {},
    "shapeTree": {},
    "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "typeInfo": {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "typeId": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "picture": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fileExtension": "string",
    "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFileBlobUrl": "string",
    "imageFill": {},
    "imageFillsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "smartArt": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "table": {
    "baseElementBlobUrl": "string",
    "cells": [
      {}
    ],
    "changedBaseElementBlobUrl": "string",
    "columns": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "hasStylePart": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rows": [
      {}
    ],
    "stylePartOuterXml": "string",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

The graphics class provides a bridge between the Slides and 
lower level models including Charts, Tables, Pictures, and SmartArts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chart|[Chart.Charts.Details](#schemachart.charts.details)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|graphicTypeId|integer(int32)|false|none|none|
|groupElement|[Slide.GroupElements.Details](#schemaslide.groupelements.details)|false|none|none|
|groupElementsId|string(uuid) \| null|false|none|Foreign key to the GroupElements object|
|height|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|picture|[Shared.Pictures.Details](#schemashared.pictures.details)|false|none|none|
|smartArt|[Slide.SmartArts.Details](#schemaslide.smartarts.details)|false|none|none|
|table|[Table.Tables.Details](#schematable.tables.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
|width|integer(int32)|false|none|none|
|xOffset|integer(int32)|false|none|none|
|yOffset|integer(int32)|false|none|none|

<h2 id="tocS_Slide.GroupElementTypes">Slide.GroupElementTypes</h2>
<!-- backwards compatibility -->
<a id="schemaslide.groupelementtypes"></a>
<a id="schema_Slide.GroupElementTypes"></a>
<a id="tocSslide.groupelementtypes"></a>
<a id="tocsslide.groupelementtypes"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Slide.GroupElementTypes.Details">Slide.GroupElementTypes.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.groupelementtypes.details"></a>
<a id="schema_Slide.GroupElementTypes.Details"></a>
<a id="tocSslide.groupelementtypes.details"></a>
<a id="tocsslide.groupelementtypes.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0,
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.GroupElements">Slide.GroupElements</h2>
<!-- backwards compatibility -->
<a id="schemaslide.groupelements"></a>
<a id="schema_Slide.GroupElements"></a>
<a id="tocSslide.groupelements"></a>
<a id="tocsslide.groupelements"></a>

```json
{
  "groupElementTypeId": 0,
  "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupElementTypeId|integer(int32)|false|none|none|
|groupElementTypePk|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|parentGroupElementId|string(uuid) \| null|false|none|none|
|shapeTreeId|string(uuid) \| null|false|none|none|
|ultimateParentShapeTreeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Slide.GroupElements.Details">Slide.GroupElements.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.groupelements.details"></a>
<a id="schema_Slide.GroupElements.Details"></a>
<a id="tocSslide.groupelements.details"></a>
<a id="tocsslide.groupelements.details"></a>

```json
{
  "childGroupElements": [
    {
      "childGroupElements": [
        {}
      ],
      "connector": {},
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "graphic": {},
      "group": {},
      "groupElementTypeId": 0,
      "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentGroupElement": {},
      "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "shape": {},
      "shapeTree": {},
      "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "typeInfo": {
        "dateCreated": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "typeId": 0,
        "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "connector": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "endConnectionIdx": 0,
    "endConnectionShape": {},
    "endConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "startConnectionIdx": 0,
    "startConnectionShape": {},
    "startConnectionShapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "graphic": {
    "chart": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphicTypeId": 0,
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "picture": {},
    "smartArt": {},
    "table": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "group": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "groupElement": {},
    "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "svgBlobUrl": "string",
    "title": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "groupElementTypeId": 0,
  "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentGroupElement": {
    "childGroupElements": [
      {}
    ],
    "connector": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphic": {},
    "group": {},
    "groupElementTypeId": 0,
    "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentGroupElement": {},
    "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shape": {},
    "shapeTree": {},
    "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "typeInfo": {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "typeId": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shape": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effect": {},
    "fillMap": {},
    "flipHorizontal": true,
    "flipVertical": true,
    "freeFormPathXml": "string",
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isThemeEffect": true,
    "isThemeFill": true,
    "isThemeLine": true,
    "line": {},
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "presetTypeId": "string",
    "rotation": 0,
    "svgBlobUrl": "string",
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "shapeTree": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "groupElement": {},
    "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupElements": [
      {}
    ],
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "title": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "typeInfo": {
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "typeId": 0,
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childGroupElements|[[Slide.GroupElements.Details](#schemaslide.groupelements.details)]|false|none|none|
|connector|[Slide.Connector.Details](#schemaslide.connector.details)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|graphic|[Slide.Graphics.Details](#schemaslide.graphics.details)|false|none|The graphics class provides a bridge between the Slides and <br>lower level models including Charts, Tables, Pictures, and SmartArts|
|group|[Slide.Groups.Details](#schemaslide.groups.details)|false|none|none|
|groupElementTypeId|integer(int32)|false|none|none|
|groupElementTypePk|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|parentGroupElement|[Slide.GroupElements.Details](#schemaslide.groupelements.details)|false|none|none|
|parentGroupElementId|string(uuid) \| null|false|none|none|
|shape|[Slide.Shapes.Details](#schemaslide.shapes.details)|false|none|none|
|shapeTree|[Slide.ShapeTrees.Details](#schemaslide.shapetrees.details)|false|none|none|
|shapeTreeId|string(uuid) \| null|false|none|none|
|typeInfo|[Slide.GroupElementTypes.Details](#schemaslide.groupelementtypes.details)|false|none|none|
|ultimateParentShapeTreeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.Groups">Slide.Groups</h2>
<!-- backwards compatibility -->
<a id="schemaslide.groups"></a>
<a id="schema_Slide.Groups"></a>
<a id="tocSslide.groups"></a>
<a id="tocsslide.groups"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "svgBlobUrl": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|groupElementId|string(uuid) \| null|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_Slide.Groups.Details">Slide.Groups.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.groups.details"></a>
<a id="schema_Slide.Groups.Details"></a>
<a id="tocSslide.groups.details"></a>
<a id="tocsslide.groups.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "groupElement": {
    "childGroupElements": [
      {}
    ],
    "connector": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphic": {},
    "group": {},
    "groupElementTypeId": 0,
    "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentGroupElement": {},
    "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shape": {},
    "shapeTree": {},
    "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "typeInfo": {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "typeId": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "svgBlobUrl": "string",
  "title": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|groupElement|[Slide.GroupElements.Details](#schemaslide.groupelements.details)|false|none|none|
|groupElementId|string(uuid) \| null|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|title|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.ShapeTrees">Slide.ShapeTrees</h2>
<!-- backwards compatibility -->
<a id="schemaslide.shapetrees"></a>
<a id="schema_Slide.ShapeTrees"></a>
<a id="tocSslide.shapetrees"></a>
<a id="tocsslide.shapetrees"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|groupElementId|string(uuid) \| null|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|slideId|string(uuid) \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_Slide.ShapeTrees.Details">Slide.ShapeTrees.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.shapetrees.details"></a>
<a id="schema_Slide.ShapeTrees.Details"></a>
<a id="tocSslide.shapetrees.details"></a>
<a id="tocsslide.shapetrees.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "groupElement": {
    "childGroupElements": [
      {}
    ],
    "connector": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphic": {},
    "group": {},
    "groupElementTypeId": 0,
    "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentGroupElement": {},
    "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shape": {},
    "shapeTree": {},
    "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "typeInfo": {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "typeId": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "groupElements": [
    {
      "childGroupElements": [
        {}
      ],
      "connector": {},
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "graphic": {},
      "group": {},
      "groupElementTypeId": 0,
      "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentGroupElement": {},
      "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "shape": {},
      "shapeTree": {},
      "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "typeInfo": {
        "dateCreated": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "typeId": 0,
        "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "slide": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "document": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "number": 0,
    "ooxmlId": 0,
    "packageUri": "string",
    "shapeTree": {},
    "slideDocumentUrl": "string",
    "slideMaster": {},
    "svgBlobUrl": "string",
    "theme": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "svgBlobUrl": "string",
  "title": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|groupElement|[Slide.GroupElements.Details](#schemaslide.groupelements.details)|false|none|none|
|groupElementId|string(uuid) \| null|false|none|none|
|groupElements|[[Slide.GroupElements.Details](#schemaslide.groupelements.details)]|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|slide|[Slide.Slides.Details](#schemaslide.slides.details)|false|none|none|
|slideId|string(uuid) \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|title|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.Shapes">Slide.Shapes</h2>
<!-- backwards compatibility -->
<a id="schemaslide.shapes"></a>
<a id="schema_Slide.Shapes"></a>
<a id="tocSslide.shapes"></a>
<a id="tocsslide.shapes"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "svgBlobUrl": "string",
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|flipHorizontal|boolean|false|none|none|
|flipVertical|boolean|false|none|none|
|freeFormPathXml|string \| null|false|none|none|
|groupElementsId|string(uuid) \| null|false|none|none|
|height|integer(int32)|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|isThemeEffect|boolean|false|none|none|
|isThemeFill|boolean|false|none|none|
|isThemeLine|boolean|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|presetTypeId|string \| null|false|none|none|
|rotation|integer(int32)|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|width|integer(int32)|false|none|none|
|xOffset|integer(int32)|false|none|none|
|yOffset|integer(int32)|false|none|none|

<h2 id="tocS_Slide.Shapes.Details">Slide.Shapes.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.shapes.details"></a>
<a id="schema_Slide.Shapes.Details"></a>
<a id="tocSslide.shapes.details"></a>
<a id="tocsslide.shapes.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effect": {
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttributes": [
      {}
    ],
    "effectMap": {},
    "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "parentConnector": {},
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "flipHorizontal": true,
  "flipVertical": true,
  "freeFormPathXml": "string",
  "groupElement": {
    "childGroupElements": [
      {}
    ],
    "connector": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphic": {},
    "group": {},
    "groupElementTypeId": 0,
    "groupElementTypePk": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentGroupElement": {},
    "parentGroupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shape": {},
    "shapeTree": {},
    "shapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "typeInfo": {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "typeId": 0,
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "ultimateParentShapeTreeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isThemeEffect": true,
  "isThemeFill": true,
  "isThemeLine": true,
  "line": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "name": "string",
  "ooxmlId": 0,
  "packageUri": "string",
  "presetTypeId": "string",
  "rotation": 0,
  "svgBlobUrl": "string",
  "textContainer": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "outerXml": "string",
    "paragraphs": [
      {}
    ],
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "width": 0,
  "xOffset": 0,
  "yOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effect|[Shared.Effects.Details](#schemashared.effects.details)|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|flipHorizontal|boolean|false|none|none|
|flipVertical|boolean|false|none|none|
|freeFormPathXml|string \| null|false|none|none|
|groupElement|[Slide.GroupElements.Details](#schemaslide.groupelements.details)|false|none|none|
|groupElementsId|string(uuid) \| null|false|none|none|
|height|integer(int32)|false|none|none|
|hidden|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|isThemeEffect|boolean|false|none|none|
|isThemeFill|boolean|false|none|none|
|isThemeLine|boolean|false|none|none|
|line|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|name|string \| null|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|presetTypeId|string \| null|false|none|none|
|rotation|integer(int32)|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|textContainer|[Shared.TextContainer.Details](#schemashared.textcontainer.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
|width|integer(int32)|false|none|none|
|xOffset|integer(int32)|false|none|none|
|yOffset|integer(int32)|false|none|none|

<h2 id="tocS_Slide.SlideMasters">Slide.SlideMasters</h2>
<!-- backwards compatibility -->
<a id="schemaslide.slidemasters"></a>
<a id="schema_Slide.SlideMasters"></a>
<a id="tocSslide.slidemasters"></a>
<a id="tocsslide.slidemasters"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|slideId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Slide.SlideMasters.Details">Slide.SlideMasters.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.slidemasters.details"></a>
<a id="schema_Slide.SlideMasters.Details"></a>
<a id="tocSslide.slidemasters.details"></a>
<a id="tocsslide.slidemasters.details"></a>

```json
{
  "colorMap": {
    "accent1": 0,
    "accent2": 0,
    "accent3": 0,
    "accent4": 0,
    "accent5": 0,
    "accent6": 0,
    "background1": 0,
    "background2": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "followedHyperlink": 0,
    "hyperlink": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "slideMaster": {},
    "slideMasterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "text1": 0,
    "text2": 0,
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentSlide": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "document": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "number": 0,
    "ooxmlId": 0,
    "packageUri": "string",
    "shapeTree": {},
    "slideDocumentUrl": "string",
    "slideMaster": {},
    "svgBlobUrl": "string",
    "theme": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorMap|[Slide.ColorMaps.Details](#schemaslide.colormaps.details)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|parentSlide|[Slide.Slides.Details](#schemaslide.slides.details)|false|none|none|
|slideId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.Slides">Slide.Slides</h2>
<!-- backwards compatibility -->
<a id="schemaslide.slides"></a>
<a id="schema_Slide.Slides"></a>
<a id="tocSslide.slides"></a>
<a id="tocsslide.slides"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "number": 0,
  "ooxmlId": 0,
  "packageUri": "string",
  "slideDocumentUrl": "string",
  "svgBlobUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|documentId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|number|integer(int32)|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|slideDocumentUrl|string \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|

<h2 id="tocS_Slide.Slides.Details">Slide.Slides.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.slides.details"></a>
<a id="schema_Slide.Slides.Details"></a>
<a id="tocSslide.slides.details"></a>
<a id="tocsslide.slides.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "document": {
    "baseElementBlobUrl": "string",
    "blobLocation": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "documentTypeId": 0,
    "filename": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ownerGuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "packageUri": "string",
    "slides": [
      {}
    ],
    "storyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableStylesXmlBlobUrl": "string",
    "title": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "number": 0,
  "ooxmlId": 0,
  "packageUri": "string",
  "shapeTree": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "groupElement": {},
    "groupElementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "groupElements": [
      {}
    ],
    "hidden": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "svgBlobUrl": "string",
    "title": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "slideDocumentUrl": "string",
  "slideMaster": {
    "colorMap": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentSlide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "svgBlobUrl": "string",
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|document|[Document.Details](#schemadocument.details)|false|none|none|
|documentId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|number|integer(int32)|false|none|none|
|ooxmlId|integer(int32)|false|none|none|
|packageUri|string \| null|false|none|none|
|shapeTree|[Slide.ShapeTrees.Details](#schemaslide.shapetrees.details)|false|none|none|
|slideDocumentUrl|string \| null|false|none|none|
|slideMaster|[Slide.SlideMasters.Details](#schemaslide.slidemasters.details)|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Slide.SmartArts">Slide.SmartArts</h2>
<!-- backwards compatibility -->
<a id="schemaslide.smartarts"></a>
<a id="schema_Slide.SmartArts"></a>
<a id="tocSslide.smartarts"></a>
<a id="tocsslide.smartarts"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "svgBlobUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|graphicsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|

<h2 id="tocS_Slide.SmartArts.Details">Slide.SmartArts.Details</h2>
<!-- backwards compatibility -->
<a id="schemaslide.smartarts.details"></a>
<a id="schema_Slide.SmartArts.Details"></a>
<a id="tocSslide.smartarts.details"></a>
<a id="tocsslide.smartarts.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "graphicsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {
    "chart": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphicTypeId": 0,
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "picture": {},
    "smartArt": {},
    "table": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "svgBlobUrl": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|graphicsId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|parentGraphic|[Slide.Graphics.Details](#schemaslide.graphics.details)|false|none|The graphics class provides a bridge between the Slides and <br>lower level models including Charts, Tables, Pictures, and SmartArts|
|svgBlobUrl|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Table.Borders">Table.Borders</h2>
<!-- backwards compatibility -->
<a id="schematable.borders"></a>
<a id="schema_Table.Borders"></a>
<a id="tocStable.borders"></a>
<a id="tocstable.borders"></a>

```json
{
  "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellId|string(uuid) \| null|false|none|none|
|id|string(uuid)|false|none|none|

<h2 id="tocS_Table.Borders.Details">Table.Borders.Details</h2>
<!-- backwards compatibility -->
<a id="schematable.borders.details"></a>
<a id="schema_Table.Borders.Details"></a>
<a id="tocStable.borders.details"></a>
<a id="tocstable.borders.details"></a>

```json
{
  "bLtoTR": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "bottom": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "cell": {
    "border": {},
    "column": {},
    "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "columnSpan": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "fillMap": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "isMergedHorozontal": true,
    "isMergedVertical": true,
    "row": {},
    "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rowSpan": 0,
    "textContainer": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "left": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "right": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "tLtoBR": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "top": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bLtoTR|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|bottom|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|cell|[Table.Cells.Details](#schematable.cells.details)|false|none|none|
|cellId|string(uuid) \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|left|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|right|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|tLtoBR|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|top|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Table.Cells">Table.Cells</h2>
<!-- backwards compatibility -->
<a id="schematable.cells"></a>
<a id="schema_Table.Cells"></a>
<a id="tocStable.cells"></a>
<a id="tocstable.cells"></a>

```json
{
  "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnSpan": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isMergedHorozontal": true,
  "isMergedVertical": true,
  "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowSpan": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnId|string(uuid) \| null|false|none|none|
|columnSpan|integer(int32)|false|none|none|
|id|string(uuid)|false|none|none|
|isMergedHorozontal|boolean|false|none|none|
|isMergedVertical|boolean|false|none|none|
|rowId|string(uuid) \| null|false|none|none|
|rowSpan|integer(int32)|false|none|none|

<h2 id="tocS_Table.Cells.Details">Table.Cells.Details</h2>
<!-- backwards compatibility -->
<a id="schematable.cells.details"></a>
<a id="schema_Table.Cells.Details"></a>
<a id="tocStable.cells.details"></a>
<a id="tocstable.cells.details"></a>

```json
{
  "border": {
    "bLtoTR": {},
    "bottom": {},
    "cell": {},
    "cellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "left": {},
    "right": {},
    "tLtoBR": {},
    "top": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "column": {
    "cells": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": 0,
    "table": {},
    "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0
  },
  "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "columnSpan": 0,
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isMergedHorozontal": true,
  "isMergedVertical": true,
  "row": {
    "cells": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "index": 0,
    "table": {},
    "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rowSpan": 0,
  "textContainer": {
    "axis": {},
    "axisId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "chart": {},
    "chartId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "outerXml": "string",
    "paragraphs": [
      {}
    ],
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|border|[Table.Borders.Details](#schematable.borders.details)|false|none|none|
|column|[Table.Columns.Details](#schematable.columns.details)|false|none|none|
|columnId|string(uuid) \| null|false|none|none|
|columnSpan|integer(int32)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|id|string(uuid)|false|none|none|
|isMergedHorozontal|boolean|false|none|none|
|isMergedVertical|boolean|false|none|none|
|row|[Table.Rows.Details](#schematable.rows.details)|false|none|none|
|rowId|string(uuid) \| null|false|none|none|
|rowSpan|integer(int32)|false|none|none|
|textContainer|[Shared.TextContainer.Details](#schemashared.textcontainer.details)|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Table.Columns">Table.Columns</h2>
<!-- backwards compatibility -->
<a id="schematable.columns"></a>
<a id="schema_Table.Columns"></a>
<a id="tocStable.columns"></a>
<a id="tocstable.columns"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|tableId|string(uuid) \| null|false|none|none|
|width|integer(int64)|false|none|none|

<h2 id="tocS_Table.Columns.Details">Table.Columns.Details</h2>
<!-- backwards compatibility -->
<a id="schematable.columns.details"></a>
<a id="schema_Table.Columns.Details"></a>
<a id="tocStable.columns.details"></a>
<a id="tocstable.columns.details"></a>

```json
{
  "cells": [
    {
      "border": {},
      "column": {},
      "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "columnSpan": 0,
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "fillMap": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isMergedHorozontal": true,
      "isMergedVertical": true,
      "row": {},
      "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "rowSpan": 0,
      "textContainer": {},
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "table": {
    "baseElementBlobUrl": "string",
    "cells": [
      {}
    ],
    "changedBaseElementBlobUrl": "string",
    "columns": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "hasStylePart": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rows": [
      {}
    ],
    "stylePartOuterXml": "string",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[Table.Cells.Details](#schematable.cells.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|table|[Table.Tables.Details](#schematable.tables.details)|false|none|none|
|tableId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
|width|integer(int64)|false|none|none|

<h2 id="tocS_Table.Rows">Table.Rows</h2>
<!-- backwards compatibility -->
<a id="schematable.rows"></a>
<a id="schema_Table.Rows"></a>
<a id="tocStable.rows"></a>
<a id="tocstable.rows"></a>

```json
{
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int64)|false|none|none|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|tableId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Table.Rows.Details">Table.Rows.Details</h2>
<!-- backwards compatibility -->
<a id="schematable.rows.details"></a>
<a id="schema_Table.Rows.Details"></a>
<a id="tocStable.rows.details"></a>
<a id="tocstable.rows.details"></a>

```json
{
  "cells": [
    {
      "border": {},
      "column": {},
      "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "columnSpan": 0,
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "fillMap": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isMergedHorozontal": true,
      "isMergedVertical": true,
      "row": {},
      "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "rowSpan": 0,
      "textContainer": {},
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "index": 0,
  "table": {
    "baseElementBlobUrl": "string",
    "cells": [
      {}
    ],
    "changedBaseElementBlobUrl": "string",
    "columns": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "hasStylePart": true,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "packageUri": "string",
    "parentGraphic": {},
    "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "rows": [
      {}
    ],
    "stylePartOuterXml": "string",
    "svgBlobUrl": "string",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[Table.Cells.Details](#schematable.cells.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|height|integer(int64)|false|none|none|
|id|string(uuid)|false|none|none|
|index|integer(int32)|false|none|none|
|table|[Table.Tables.Details](#schematable.tables.details)|false|none|none|
|tableId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Table.TableDataDTO">Table.TableDataDTO</h2>
<!-- backwards compatibility -->
<a id="schematable.tabledatadto"></a>
<a id="schema_Table.TableDataDTO"></a>
<a id="tocStable.tabledatadto"></a>
<a id="tocstable.tabledatadto"></a>

```json
{
  "tableData": [
    [
      "string"
    ]
  ],
  "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableData|[[string]]|false|none|none|
|tableId|string(uuid)|false|none|none|

<h2 id="tocS_Table.Tables">Table.Tables</h2>
<!-- backwards compatibility -->
<a id="schematable.tables"></a>
<a id="schema_Table.Tables"></a>
<a id="tocStable.tables"></a>
<a id="tocstable.tables"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "hasStylePart": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "stylePartOuterXml": "string",
  "svgBlobUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|hasStylePart|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|parentGraphicId|string(uuid) \| null|false|none|none|
|stylePartOuterXml|string \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|

<h2 id="tocS_Table.Tables.Details">Table.Tables.Details</h2>
<!-- backwards compatibility -->
<a id="schematable.tables.details"></a>
<a id="schema_Table.Tables.Details"></a>
<a id="tocStable.tables.details"></a>
<a id="tocstable.tables.details"></a>

```json
{
  "baseElementBlobUrl": "string",
  "cells": [
    {
      "border": {},
      "column": {},
      "columnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "columnSpan": 0,
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "fillMap": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isMergedHorozontal": true,
      "isMergedVertical": true,
      "row": {},
      "rowId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "rowSpan": 0,
      "textContainer": {},
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "changedBaseElementBlobUrl": "string",
  "columns": [
    {
      "cells": [
        {}
      ],
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "index": 0,
      "table": {},
      "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "width": 0
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "hasStylePart": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "parentGraphic": {
    "chart": {},
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "graphicTypeId": 0,
    "groupElement": {},
    "groupElementsId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "ooxmlId": 0,
    "picture": {},
    "smartArt": {},
    "table": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "width": 0,
    "xOffset": 0,
    "yOffset": 0
  },
  "parentGraphicId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "rows": [
    {
      "cells": [
        {}
      ],
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "height": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "index": 0,
      "table": {},
      "tableId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "stylePartOuterXml": "string",
  "svgBlobUrl": "string",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|cells|[[Table.Cells.Details](#schematable.cells.details)]|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|columns|[[Table.Columns.Details](#schematable.columns.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|hasStylePart|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|parentGraphic|[Slide.Graphics.Details](#schemaslide.graphics.details)|false|none|The graphics class provides a bridge between the Slides and <br>lower level models including Charts, Tables, Pictures, and SmartArts|
|parentGraphicId|string(uuid) \| null|false|none|none|
|rows|[[Table.Rows.Details](#schematable.rows.details)]|false|none|none|
|stylePartOuterXml|string \| null|false|none|none|
|svgBlobUrl|string \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.BackgroundFills">Theme.BackgroundFills</h2>
<!-- backwards compatibility -->
<a id="schematheme.backgroundfills"></a>
<a id="schema_Theme.BackgroundFills"></a>
<a id="tocStheme.backgroundfills"></a>
<a id="tocstheme.backgroundfills"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.BackgroundFills.Details">Theme.BackgroundFills.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.backgroundfills.details"></a>
<a id="schema_Theme.BackgroundFills.Details"></a>
<a id="tocStheme.backgroundfills.details"></a>
<a id="tocstheme.backgroundfills.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.Colors">Theme.Colors</h2>
<!-- backwards compatibility -->
<a id="schematheme.colors"></a>
<a id="schema_Theme.Colors"></a>
<a id="tocStheme.colors"></a>
<a id="tocstheme.colors"></a>

```json
{
  "accent1": "string",
  "accent2": "string",
  "accent3": "string",
  "accent4": "string",
  "accent5": "string",
  "accent6": "string",
  "dark1": "string",
  "dark2": "string",
  "followedHyperlink": "string",
  "hyperlink": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "light1": "string",
  "light2": "string",
  "name": "string",
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent1|string \| null|false|none|none|
|accent2|string \| null|false|none|none|
|accent3|string \| null|false|none|none|
|accent4|string \| null|false|none|none|
|accent5|string \| null|false|none|none|
|accent6|string \| null|false|none|none|
|dark1|string \| null|false|none|none|
|dark2|string \| null|false|none|none|
|followedHyperlink|string \| null|false|none|none|
|hyperlink|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|light1|string \| null|false|none|none|
|light2|string \| null|false|none|none|
|name|string \| null|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.Colors.Details">Theme.Colors.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.colors.details"></a>
<a id="schema_Theme.Colors.Details"></a>
<a id="tocStheme.colors.details"></a>
<a id="tocstheme.colors.details"></a>

```json
{
  "accent1": "string",
  "accent2": "string",
  "accent3": "string",
  "accent4": "string",
  "accent5": "string",
  "accent6": "string",
  "dark1": "string",
  "dark2": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "followedHyperlink": "string",
  "hyperlink": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "light1": "string",
  "light2": "string",
  "name": "string",
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent1|string \| null|false|none|none|
|accent2|string \| null|false|none|none|
|accent3|string \| null|false|none|none|
|accent4|string \| null|false|none|none|
|accent5|string \| null|false|none|none|
|accent6|string \| null|false|none|none|
|dark1|string \| null|false|none|none|
|dark2|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|followedHyperlink|string \| null|false|none|none|
|hyperlink|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|light1|string \| null|false|none|none|
|light2|string \| null|false|none|none|
|name|string \| null|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.CustomColors">Theme.CustomColors</h2>
<!-- backwards compatibility -->
<a id="schematheme.customcolors"></a>
<a id="schema_Theme.CustomColors"></a>
<a id="tocStheme.customcolors"></a>
<a id="tocstheme.customcolors"></a>

```json
{
  "hexValue": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hexValue|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.CustomColors.Details">Theme.CustomColors.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.customcolors.details"></a>
<a id="schema_Theme.CustomColors.Details"></a>
<a id="tocStheme.customcolors.details"></a>
<a id="tocstheme.customcolors.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "hexValue": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|hexValue|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.EffectMap">Theme.EffectMap</h2>
<!-- backwards compatibility -->
<a id="schematheme.effectmap"></a>
<a id="schema_Theme.EffectMap"></a>
<a id="tocStheme.effectmap"></a>
<a id="tocstheme.effectmap"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.EffectMap.Details">Theme.EffectMap.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.effectmap.details"></a>
<a id="schema_Theme.EffectMap.Details"></a>
<a id="tocStheme.effectmap.details"></a>
<a id="tocstheme.effectmap.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effect": {
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttributes": [
      {}
    ],
    "effectMap": {},
    "effectMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "parentConnector": {},
    "parentShape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effect|[Shared.Effects.Details](#schemashared.effects.details)|false|none|none|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.Fills">Theme.Fills</h2>
<!-- backwards compatibility -->
<a id="schematheme.fills"></a>
<a id="schema_Theme.Fills"></a>
<a id="tocStheme.fills"></a>
<a id="tocstheme.fills"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.Fills.Details">Theme.Fills.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.fills.details"></a>
<a id="schema_Theme.Fills.Details"></a>
<a id="tocStheme.fills.details"></a>
<a id="tocstheme.fills.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "fillMap": {
    "connector": {},
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectAttribute": {},
    "effectAttributeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "fillTypeId": 0,
    "gradientFill": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageFill": {},
    "shape": {},
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "solidFill": {},
    "tableCell": {},
    "tableCellId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeBackgroundFill": {},
    "themeBackgroundFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "themeFill": {},
    "themeFillId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|fillMap|[Shared.FillMap.Details](#schemashared.fillmap.details)|false|none|none|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.Fonts">Theme.Fonts</h2>
<!-- backwards compatibility -->
<a id="schematheme.fonts"></a>
<a id="schema_Theme.Fonts"></a>
<a id="tocStheme.fonts"></a>
<a id="tocstheme.fonts"></a>

```json
{
  "bodyFont": "string",
  "headingFont": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyFont|string \| null|false|none|none|
|headingFont|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.Fonts.Details">Theme.Fonts.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.fonts.details"></a>
<a id="schema_Theme.Fonts.Details"></a>
<a id="tocStheme.fonts.details"></a>
<a id="tocstheme.fonts.details"></a>

```json
{
  "bodyFont": "string",
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "headingFont": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyFont|string \| null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|headingFont|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.Intensity">Theme.Intensity</h2>
<!-- backwards compatibility -->
<a id="schematheme.intensity"></a>
<a id="schema_Theme.Intensity"></a>
<a id="tocStheme.intensity"></a>
<a id="tocstheme.intensity"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "typeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_Theme.LineMap">Theme.LineMap</h2>
<!-- backwards compatibility -->
<a id="schematheme.linemap"></a>
<a id="schema_Theme.LineMap"></a>
<a id="tocStheme.linemap"></a>
<a id="tocstheme.linemap"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.LineMap.Details">Theme.LineMap.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.linemap.details"></a>
<a id="schema_Theme.LineMap.Details"></a>
<a id="tocStheme.linemap.details"></a>
<a id="tocstheme.linemap.details"></a>

```json
{
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "intensityId": 0,
  "line": {
    "bLtoTRBorder": {},
    "bLtoTRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "bottomBorder": {},
    "bottomBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "connectorId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dashTypeId": 0,
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headEndHeightId": 0,
    "headEndTypeId": 0,
    "headEndWidthId": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "leftBorder": {},
    "leftBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineColorSolidFill": {},
    "lineMap": {},
    "lineMapId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "parentConnector": {},
    "parentShape": {},
    "rightBorder": {},
    "rightBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shapeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tLtoBRBorder": {},
    "tLtoBRBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "tailEndHeightId": 0,
    "tailEndTypeId": 0,
    "tailEndWidthId": 0,
    "topBorder": {},
    "topBorderId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "weight": 0
  },
  "theme": {
    "backgroundFills": [
      {}
    ],
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "colors": {},
    "customColors": [
      {}
    ],
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "effectMaps": [
      {}
    ],
    "fills": [
      {}
    ],
    "fonts": {},
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "lineMaps": [
      {}
    ],
    "name": "string",
    "packageUri": "string",
    "slide": {},
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|intensityId|integer(int32)|false|none|none|
|line|[Shared.Lines.Details](#schemashared.lines.details)|false|none|none|
|theme|[Theme.Themes.Details](#schematheme.themes.details)|false|none|none|
|themeId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|

<h2 id="tocS_Theme.Themes">Theme.Themes</h2>
<!-- backwards compatibility -->
<a id="schematheme.themes"></a>
<a id="schema_Theme.Themes"></a>
<a id="tocStheme.themes"></a>
<a id="tocstheme.themes"></a>

```json
{
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "packageUri": "string",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|id|string(uuid)|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|slideId|string(uuid) \| null|false|none|none|

<h2 id="tocS_Theme.Themes.Details">Theme.Themes.Details</h2>
<!-- backwards compatibility -->
<a id="schematheme.themes.details"></a>
<a id="schema_Theme.Themes.Details"></a>
<a id="tocStheme.themes.details"></a>
<a id="tocstheme.themes.details"></a>

```json
{
  "backgroundFills": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "fillMap": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "intensityId": 0,
      "theme": {},
      "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "baseElementBlobUrl": "string",
  "changedBaseElementBlobUrl": "string",
  "colors": {
    "accent1": "string",
    "accent2": "string",
    "accent3": "string",
    "accent4": "string",
    "accent5": "string",
    "accent6": "string",
    "dark1": "string",
    "dark2": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "followedHyperlink": "string",
    "hyperlink": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "light1": "string",
    "light2": "string",
    "name": "string",
    "theme": {},
    "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "customColors": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "hexValue": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "theme": {},
      "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "dateCreated": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "effectMaps": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "effect": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "intensityId": 0,
      "theme": {},
      "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "fills": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "fillMap": {},
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "intensityId": 0,
      "theme": {},
      "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "fonts": {
    "bodyFont": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "headingFont": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "theme": {},
    "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lineMaps": [
    {
      "dateCreated": "1970-01-01T00:00:00Z",
      "dateModified": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "intensityId": 0,
      "line": {},
      "theme": {},
      "themeId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "name": "string",
  "packageUri": "string",
  "slide": {
    "baseElementBlobUrl": "string",
    "changedBaseElementBlobUrl": "string",
    "dateCreated": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "document": {},
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "number": 0,
    "ooxmlId": 0,
    "packageUri": "string",
    "shapeTree": {},
    "slideDocumentUrl": "string",
    "slideMaster": {},
    "svgBlobUrl": "string",
    "theme": {},
    "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userCreated": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userModified": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundFills|[[Theme.BackgroundFills.Details](#schematheme.backgroundfills.details)]|false|none|none|
|baseElementBlobUrl|string \| null|false|none|none|
|changedBaseElementBlobUrl|string \| null|false|none|none|
|colors|[Theme.Colors.Details](#schematheme.colors.details)|false|none|none|
|customColors|[[Theme.CustomColors.Details](#schematheme.customcolors.details)]|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateModified|string(date-time)|false|none|none|
|effectMaps|[[Theme.EffectMap.Details](#schematheme.effectmap.details)]|false|none|none|
|fills|[[Theme.Fills.Details](#schematheme.fills.details)]|false|none|none|
|fonts|[Theme.Fonts.Details](#schematheme.fonts.details)|false|none|none|
|id|string(uuid)|false|none|none|
|lineMaps|[[Theme.LineMap.Details](#schematheme.linemap.details)]|false|none|none|
|name|string \| null|false|none|none|
|packageUri|string \| null|false|none|none|
|slide|[Slide.Slides.Details](#schemaslide.slides.details)|false|none|none|
|slideId|string(uuid) \| null|false|none|none|
|userCreated|string(uuid)|false|none|none|
|userModified|string(uuid)|false|none|none|
