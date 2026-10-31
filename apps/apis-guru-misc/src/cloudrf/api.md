<h1 id="cloud-rf-api">Cloud-RF API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use this JSON API to build and test radio links for any radio, anywhere. Authenticate with your API2.0 key in the request header as key

Base URLs:

* <a href="https://api.cloudrf.com">https://api.cloudrf.com</a>

<a href="https://cloudrf.com/terms-and-conditions/">Terms of service</a>
Email: <a href="mailto:support@cloudrf.com">support@cloudrf.com</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **key**, in: header.

<h1 id="cloud-rf-api-manage">Manage</h1>

## Delete a calculation from the database.

<a id="opIddelete"></a>

> Code samples

```bash
curl 'https://example.com/archive/delete?cid=0' \
  -H "key: ${API_KEY}"
```

`GET /archive/delete`

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

<h3 id="delete-a-calculation-from-the-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cid|query|integer|true|Unique calculation ID number|

<h3 id="delete-a-calculation-from-the-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an entire network

<a id="opIddeleteNetwork"></a>

> Code samples

```bash
curl 'https://example.com/archive/delete/network?nid=string' \
  -H "key: ${API_KEY}"
```

`GET /archive/delete/network`

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

<h3 id="delete-an-entire-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nid|query|string|true|Network name|

<h3 id="delete-an-entire-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Export a calculation in a GIS file format

<a id="opIdexport"></a>

> Code samples

```bash
curl 'https://example.com/archive/export?file=string&fmt=kml' \
  -H "key: ${API_KEY}"
```

`GET /archive/export`

Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.

<h3 id="export-a-calculation-in-a-gis-file-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|true|Calculation file name|
|fmt|query|string|true|Raster/Vector file format: KML, KMZ, SHP, GeoTIFF|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fmt|kml|
|fmt|kml|
|fmt|kmzppa|
|fmt|shp|
|fmt|tiff|

<h3 id="export-a-calculation-in-a-gis-file-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List calculations from your archive

<a id="opIdlist"></a>

> Code samples

```bash
curl https://example.com/archive/list \
  -H "key: ${API_KEY}"
```

`GET /archive/list`

List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.

<h3 id="list-calculations-from-your-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|query|number(float)|false|North bounding box|
|e|query|number(float)|false|East bounding box|
|s|query|number(float)|false|South bounding box|
|w|query|number(float)|false|West bounding box|

<h3 id="list-calculations-from-your-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Upload clutter data as GeoJSON

<a id="opIdaddClutter"></a>

> Code samples

```bash
curl https://example.com/clutter/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "key: ${API_KEY}" \
  -d '{
    "features": [
      {
        "geometry": "{'\''type'\'':'\''Polygon'\'','\''coordinates'\'':[[]]}",
        "properties": "{'\''height'\'':4,'\''material'\'':1}",
        "type": "Feature"
      }
    ],
    "name": "Clutter",
    "type": "FeatureCollection"
  }'
```

`POST /clutter/add`

Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1	Trees –	0.25,2Trees +	0.5,3	Timber –	1.0,4	Timber +	1.5,5	Brick – 	1.5,6	Brick +	2.0,7	Concrete –	3.0,8	Concrete +	4.0,9	Metal	6.0

> Body parameter

```json
{
  "features": [
    {
      "geometry": "{'type':'Polygon','coordinates':[[]]}",
      "properties": "{'height':4,'material':1}",
      "type": "Feature"
    }
  ],
  "name": "Clutter",
  "type": "FeatureCollection"
}
```

<h3 id="upload-clutter-data-as-geojson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» features|body|[[Feature](#schemafeature)]|false|none|
|» name|body|string|false|none|
|» type|body|string|false|none|

<h3 id="upload-clutter-data-as-geojson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="cloud-rf-api-create">Create</h1>

## Create a point-to-multipoint heatmap

<a id="opIdarea"></a>

> Code samples

```bash
curl https://example.com/area \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "key: ${API_KEY}" \
  -d '{
    "antenna": {
      "ant": 1,
      "azi": 0,
      "hbw": 0,
      "pol": "v",
      "tlt": 0,
      "txg": 2.15,
      "txl": 0,
      "vbw": 0
    },
    "environment": {
      "cll": 2,
      "clm": 1,
      "mat": 0.25
    },
    "model": {
      "cli": 6,
      "ked": 0,
      "pe": 2,
      "pm": 1,
      "rel": 95,
      "ter": 4
    },
    "network": "Testing",
    "output": {
      "ber": 0,
      "col": "RAINBOW.dBm",
      "mod": 0,
      "nf": -114,
      "out": 2,
      "rad": 5,
      "res": 10,
      "units": "metric"
    },
    "receiver": {
      "alt": 0.1,
      "lat": 0,
      "lon": 0,
      "rxg": 2.15,
      "rxs": -90
    },
    "site": "A1",
    "transmitter": {
      "alt": 1,
      "bwi": 0.1,
      "frq": 868,
      "lat": 38.916,
      "lon": 1.448,
      "txw": 0.1
    }
  }'
```

`POST /area`

An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

> Body parameter

```json
{
  "antenna": {
    "ant": 1,
    "azi": 0,
    "hbw": 0,
    "pol": "v",
    "tlt": 0,
    "txg": 2.15,
    "txl": 0,
    "vbw": 0
  },
  "environment": {
    "cll": 2,
    "clm": 1,
    "mat": 0.25
  },
  "model": {
    "cli": 6,
    "ked": 0,
    "pe": 2,
    "pm": 1,
    "rel": 95,
    "ter": 4
  },
  "network": "Testing",
  "output": {
    "ber": 0,
    "col": "RAINBOW.dBm",
    "mod": 0,
    "nf": -114,
    "out": 2,
    "rad": 5,
    "res": 10,
    "units": "metric"
  },
  "receiver": {
    "alt": 0.1,
    "lat": 0,
    "lon": 0,
    "rxg": 2.15,
    "rxs": -90
  },
  "site": "A1",
  "transmitter": {
    "alt": 1,
    "bwi": 0.1,
    "frq": 868,
    "lat": 38.916,
    "lon": 1.448,
    "txw": 0.1
  }
}
```

<h3 id="create-a-point-to-multipoint-heatmap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.|
|» antenna|body|[Antenna](#schemaantenna)|false|none|
|» environment|body|[Environment](#schemaenvironment)|false|none|
|» model|body|[Model](#schemamodel)|false|none|
|» network|body|string|false|Network name/group|
|» output|body|[Output](#schemaoutput)|false|none|
|» receiver|body|[Receiver](#schemareceiver)|false|none|
|» site|body|string|false|Site name|
|» transmitter|body|[Transmitter](#schematransmitter)|false|none|

<h3 id="create-a-point-to-multipoint-heatmap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Point-to-point path profile analysis (Tx to Rx)

<a id="opIdpath"></a>

> Code samples

```bash
curl https://example.com/path \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "key: ${API_KEY}" \
  -d '{
    "antenna": {
      "ant": 1,
      "azi": 0,
      "hbw": 0,
      "pol": "v",
      "tlt": 0,
      "txg": 2.15,
      "txl": 0,
      "vbw": 0
    },
    "environment": {
      "cll": 2,
      "clm": 1,
      "mat": 0.25
    },
    "model": {
      "cli": 6,
      "ked": 0,
      "pe": 2,
      "pm": 1,
      "rel": 95,
      "ter": 4
    },
    "network": "Testing",
    "output": {
      "ber": 0,
      "col": "RAINBOW.dBm",
      "mod": 0,
      "nf": -114,
      "out": 2,
      "rad": 5,
      "res": 10,
      "units": "metric"
    },
    "receiver": {
      "alt": 0.1,
      "lat": 0,
      "lon": 0,
      "rxg": 2.15,
      "rxs": -90
    },
    "site": "Link",
    "transmitter": {
      "alt": 1,
      "bwi": 0.1,
      "frq": 868,
      "lat": 38.916,
      "lon": 1.448,
      "txw": 0.1
    }
  }'
```

`POST /path`

A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

> Body parameter

```json
{
  "antenna": {
    "ant": 1,
    "azi": 0,
    "hbw": 0,
    "pol": "v",
    "tlt": 0,
    "txg": 2.15,
    "txl": 0,
    "vbw": 0
  },
  "environment": {
    "cll": 2,
    "clm": 1,
    "mat": 0.25
  },
  "model": {
    "cli": 6,
    "ked": 0,
    "pe": 2,
    "pm": 1,
    "rel": 95,
    "ter": 4
  },
  "network": "Testing",
  "output": {
    "ber": 0,
    "col": "RAINBOW.dBm",
    "mod": 0,
    "nf": -114,
    "out": 2,
    "rad": 5,
    "res": 10,
    "units": "metric"
  },
  "receiver": {
    "alt": 0.1,
    "lat": 0,
    "lon": 0,
    "rxg": 2.15,
    "rxs": -90
  },
  "site": "Link",
  "transmitter": {
    "alt": 1,
    "bwi": 0.1,
    "frq": 868,
    "lat": 38.916,
    "lon": 1.448,
    "txw": 0.1
  }
}
```

<h3 id="point-to-point-path-profile-analysis-tx-to-rx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.|
|» antenna|body|[Antenna](#schemaantenna)|false|none|
|» environment|body|[Environment](#schemaenvironment)|false|none|
|» model|body|[Model](#schemamodel)|false|none|
|» network|body|string|false|Network name/group|
|» output|body|[Output](#schemaoutput)|false|none|
|» receiver|body|[Receiver](#schemareceiver)|false|none|
|» site|body|string|false|Site name|
|» transmitter|body|[Transmitter](#schematransmitter)|false|none|

<h3 id="point-to-point-path-profile-analysis-tx-to-rx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Point-to-multipoint path profile analysis (Many Tx, one Rx)

<a id="opIdpoints"></a>

> Code samples

```bash
curl https://example.com/points \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "key: ${API_KEY}" \
  -d '{
    "antenna": {
      "ant": 1,
      "azi": 0,
      "hbw": 0,
      "pol": "v",
      "tlt": 0,
      "txg": 2.15,
      "txl": 0,
      "vbw": 0
    },
    "environment": {
      "cll": 2,
      "clm": 1,
      "mat": 0.25
    },
    "model": {
      "cli": 6,
      "ked": 0,
      "pe": 2,
      "pm": 1,
      "rel": 95,
      "ter": 4
    },
    "network": "Testing",
    "output": {
      "ber": 0,
      "col": "RAINBOW.dBm",
      "mod": 0,
      "nf": -114,
      "out": 2,
      "rad": 5,
      "res": 10,
      "units": "metric"
    },
    "points": [
      {
        "alt": 1,
        "lat": 38.916,
        "lon": 1.411
      }
    ],
    "receiver": {
      "alt": 0.1,
      "lat": 0,
      "lon": 0,
      "rxg": 2.15,
      "rxs": -90
    },
    "site": "Points",
    "transmitter": {
      "alt": 1,
      "bwi": 0.1,
      "frq": 868,
      "lat": 38.916,
      "lon": 1.448,
      "txw": 0.1
    }
  }'
```

`POST /points`

The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.

> Body parameter

```json
{
  "antenna": {
    "ant": 1,
    "azi": 0,
    "hbw": 0,
    "pol": "v",
    "tlt": 0,
    "txg": 2.15,
    "txl": 0,
    "vbw": 0
  },
  "environment": {
    "cll": 2,
    "clm": 1,
    "mat": 0.25
  },
  "model": {
    "cli": 6,
    "ked": 0,
    "pe": 2,
    "pm": 1,
    "rel": 95,
    "ter": 4
  },
  "network": "Testing",
  "output": {
    "ber": 0,
    "col": "RAINBOW.dBm",
    "mod": 0,
    "nf": -114,
    "out": 2,
    "rad": 5,
    "res": 10,
    "units": "metric"
  },
  "points": [
    {
      "alt": 1,
      "lat": 38.916,
      "lon": 1.411
    }
  ],
  "receiver": {
    "alt": 0.1,
    "lat": 0,
    "lon": 0,
    "rxg": 2.15,
    "rxs": -90
  },
  "site": "Points",
  "transmitter": {
    "alt": 1,
    "bwi": 0.1,
    "frq": 868,
    "lat": 38.916,
    "lon": 1.448,
    "txw": 0.1
  }
}
```

<h3 id="point-to-multipoint-path-profile-analysis-many-tx-one-rx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.|
|» antenna|body|[Antenna](#schemaantenna)|false|none|
|» environment|body|[Environment](#schemaenvironment)|false|none|
|» model|body|[Model](#schemamodel)|false|none|
|» network|body|string|false|Network name/group|
|» output|body|[Output](#schemaoutput)|false|none|
|» points|body|[[Point](#schemapoint)]|false|none|
|» receiver|body|[Receiver](#schemareceiver)|false|none|
|» site|body|string|false|Site name|
|» transmitter|body|[Transmitter](#schematransmitter)|false|none|

<h3 id="point-to-multipoint-path-profile-analysis-many-tx-one-rx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="cloud-rf-api-analyse">Analyse</h1>

## Find the best server for overlapping coverage

<a id="opIdinterference"></a>

> Code samples

```bash
curl 'https://example.com/interference?network=string&name=string' \
  -H "key: ${API_KEY}"
```

`GET /interference`

Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.

<h3 id="find-the-best-server-for-overlapping-coverage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network|query|string|true|Network name eg. Overlapping broadcast stations|
|name|query|string|true|Interference layer name eg. QRM_map|

<h3 id="find-the-best-server-for-overlapping-coverage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Merge sites into a super layer.

<a id="opIdmesh"></a>

> Code samples

```bash
curl 'https://example.com/mesh?network=string&name=string' \
  -H "key: ${API_KEY}"
```

`GET /mesh`

A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.

<h3 id="merge-sites-into-a-super-layer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network|query|string|true|Network name eg. 100_BLUE_repeaters_nationwide|
|name|query|string|true|Super layer name eg. National_map|

<h3 id="merge-sites-into-a-super-layer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Find the best server for somewhere

<a id="opIdnetwork"></a>

> Code samples

```bash
curl 'https://example.com/network?net=string&nam=string&lat=0&lon=0&alt=0' \
  -H "key: ${API_KEY}"
```

`GET /network`

Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.

<h3 id="find-the-best-server-for-somewhere-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|net|query|string|true|Network name|
|nam|query|string|true|Super layer name|
|lat|query|number(float)|true|Latitude in decimal degrees|
|lon|query|number(float)|true|Longitude in decimal degrees|
|alt|query|integer(int32)|true|Height above ground level in metres|
|rxg|query|number(float)|false|Receiver gain in dBi|

<h3 id="find-the-best-server-for-somewhere-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Antenna">Antenna</h2>
<!-- backwards compatibility -->
<a id="schemaantenna"></a>
<a id="schema_Antenna"></a>
<a id="tocSantenna"></a>
<a id="tocsantenna"></a>

```json
{
  "ant": 1,
  "azi": 0,
  "hbw": 0,
  "pol": "v",
  "tlt": 0,
  "txg": 2.15,
  "txl": 0,
  "vbw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ant|integer(int32)|false|none|Antenna pattern code. 1=Vertical dipole (Omni-directional)|
|azi|integer(int32)|false|none|Antenna azimuth in degrees north|
|hbw|integer(int32)|false|none|Custom antenna horizontal beamwidth in degrees. For use only with ant=0|
|pol|string|false|none|Antenna polarization as either h or v|
|tlt|number(float)|false|none|Antenna tilt in degrees below the horizon (inverted)|
|txg|number(float)|false|none|Transmitter antenna gain in dBi|
|txl|number(float)|false|none|Feeder loss in dB|
|vbw|integer(int32)|false|none|Custom antenna vertical beamwidth in degrees. For use only with ant=0|

#### Enumerated Values

|Property|Value|
|---|---|
|pol|h|
|pol|v|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "cll": 2,
  "clm": 1,
  "mat": 0.25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cll|integer(int32)|false|none|Clutter loss. 0=None/DSM only, 1=Hard / LOS mode, 2=Soft / NLOS mode|
|clm|integer(int32)|false|none|Clutter mode. 0=None/DSM only, 1=System & custom clutter, 2=Custom clutter only|
|mat|number(float)|false|none|Clutter attenuation override in dB/m based on a tree block OR hollow building. Light foliage=0.1dB/m, brick=1.0dB/m, concrete=5dB/m|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "geometry": "{'type':'Polygon','coordinates':[[]]}",
  "properties": "{'height':4,'material':1}",
  "type": "Feature"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|string|false|none|none|
|properties|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "cli": 6,
  "ked": 0,
  "pe": 2,
  "pm": 1,
  "rel": 95,
  "ter": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cli|integer(int32)|false|none|Radio climate for ITM model (1). 1: Equatorial (Congo) 2: Continental Subtropical (Sudan) 3: Maritime Subtropical (West coast of Africa) 4: Desert (Sahara) 5: Continental Temperate 6: Maritime Temperate, over land (UK and west coasts of US & EU) 7: Maritime Temperate, over sea|
|ked|integer|false|none|Knife edge diffraction for enhancing basic empirical models (Already in ITM)|
|pe|integer(int32)|false|none|Propagation model subtype/environment. 1=Conservative/Urban,2=Average/Suburban,3=Optimistic/rural|
|pm|integer(int32)|false|none|Propagation model. 1=Irregular Terrain Model, 2=Line of Sight (LOS), 3=Hata, 4=ECC33, 5=SUI Microwave, 6=COST231, 7=Free space path loss, 9=Ericsson9999, 10=Plane earth loss, 11=Egli.|
|rel|integer(int32)|false|none|ITM model required reliability as %|
|ter|integer(int32)|false|none|Terrain code for ITM model (1). 1=Water,2=Wet ground,3=Farmland,4=Forest/Average,5=Mountain/Sand,6=City/Poor ground|

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "ber": 0,
  "col": "RAINBOW.dBm",
  "mod": 0,
  "nf": -114,
  "out": 2,
  "rad": 5,
  "res": 10,
  "units": "metric"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ber|integer(int32)|false|none|Bit error rate. 1=0.1, 2=0.01, 3=0.001, 4=0.0001,5=0.00001,6=0.000001. >6=Lora: 7=SF7,8=SF8,9=SF9,10=SF10,11=SF11,12=SF12|
|col|string|false|none|Colour schema code OR filename. 1 = Cellular (5), 2=Red, 3=Green, 4=Blue, 5=Microwave(7), 7=Custom RGB, 8=Automatic by frequency, 9=Greyscale / GIS, 10=Rainbow(24), 11=Green/Blue/Red, 13=Sub noise floor (10), 14=TV broadcasting (4), 15=Red threshold, 16=Green threshold, 17=Blue threshold. RAINBOW.dBm, CUSTOMSCHEMA.dBm..|
|mod|integer(int32)|false|none|Modulation. 1=4QAM,2=16QAM,3=64QAM,4=256QAM,5=1024QAM,6=BPSK,7=QPSK,8=8PSK,9=16PSK,10=32PSK,11=LoRa|
|nf|integer(int32)|false|none|Noise floor in dBm for use with out=4 / SNR|
|out|integer(int32)|false|none|Measured units. 1=dB,2=dBm,3=dBuV,4=SNR|
|rad|number(float)|false|none|Radius in kilometres for output|
|res|integer(int32)|false|none|Resolution in metres for output|
|units|string|false|none|Distance units in either metres/kilometres (metric) or feet/miles (imperial)|

#### Enumerated Values

|Property|Value|
|---|---|
|units|metric|
|units|imperial|

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "alt": 1,
  "lat": 38.916,
  "lon": 1.411
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alt|number(float)|false|none|Altitude above ground level in metres OR feet|
|lat|number(float)|false|none|Latitude in decimal degrees|
|lon|number(float)|false|none|Longitude in decimal degrees|

<h2 id="tocS_Receiver">Receiver</h2>
<!-- backwards compatibility -->
<a id="schemareceiver"></a>
<a id="schema_Receiver"></a>
<a id="tocSreceiver"></a>
<a id="tocsreceiver"></a>

```json
{
  "alt": 0.1,
  "lat": 0,
  "lon": 0,
  "rxg": 2.15,
  "rxs": -90
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alt|number(float)|false|none|Altitude above ground level in metres OR feet|
|lat|number(float)|false|none|Latitude in decimal degrees|
|lon|number(float)|false|none|Longitude in decimal degrees|
|rxg|number(float)|false|none|Receiver antenna gain in dBi|
|rxs|number(float)|false|none|Receiver sensitivity/threshold in measured units defined by 'out' param|

<h2 id="tocS_Transmitter">Transmitter</h2>
<!-- backwards compatibility -->
<a id="schematransmitter"></a>
<a id="schema_Transmitter"></a>
<a id="tocStransmitter"></a>
<a id="tocstransmitter"></a>

```json
{
  "alt": 1,
  "bwi": 0.1,
  "frq": 868,
  "lat": 38.916,
  "lon": 1.448,
  "txw": 0.1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alt|number(float)|false|none|Altitude above ground level in metres OR feet|
|bwi|number(float)|false|none|Bandwidth in MHz. 1MHz has a noise floor of -114dBm. 10MHz = -104dBm, 20MHz = -101dBm|
|frq|number(float)|false|none|Centre frequency in megahertz|
|lat|number(float)|false|none|Latitude in decimal degrees|
|lon|number(float)|false|none|Longitude in decimal degrees|
|txw|number(float)|false|none|Transmitter power in watts before the antenna|
