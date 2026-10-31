<h1 id="simple-api-overview">Simple API overview v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="simple-api-overview-default">Default</h1>

## List API versions

<a id="opIdlistVersionsv2"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

> Example responses

> 200 Response

```json
{
  "versions": [
    {
      "status": "CURRENT",
      "updated": "2011-01-21T11:33:21Z",
      "id": "v2.0",
      "links": [
        {
          "href": "http://127.0.0.1:8774/v2/",
          "rel": "self"
        }
      ]
    },
    {
      "status": "EXPERIMENTAL",
      "updated": "2013-07-23T11:33:21Z",
      "id": "v3.0",
      "links": [
        {
          "href": "http://127.0.0.1:8774/v3/",
          "rel": "self"
        }
      ]
    }
  ]
}
```

> 300 Response

```json
{
  "versions": [
    {
      "status": "CURRENT",
      "updated": "2011-01-21T11:33:21Z",
      "id": "v2.0",
      "links": [
        {
          "href": "http://127.0.0.1:8774/v2/",
          "rel": "self"
        }
      ]
    },
    {
      "status": "EXPERIMENTAL",
      "updated": "2013-07-23T11:33:21Z",
      "id": "v3.0",
      "links": [
        {
          "href": "http://127.0.0.1:8774/v3/",
          "rel": "self"
        }
      ]
    }
  ]
}
```

<h3 id="list-api-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|None|
|300|Multiple Choices|300 response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show API version details

<a id="opIdgetVersionDetailsv2"></a>

> Code samples

```bash
curl https://example.com/v2 \
  -H 'Accept: application/json'
```

`GET /v2`

> Example responses

> 200 Response

```json
{
  "version": {
    "status": "CURRENT",
    "updated": "2011-01-21T11:33:21Z",
    "media-types": [
      {
        "base": "application/xml",
        "type": "application/vnd.openstack.compute+xml;version=2"
      },
      {
        "base": "application/json",
        "type": "application/vnd.openstack.compute+json;version=2"
      }
    ],
    "id": "v2.0",
    "links": [
      {
        "href": "http://127.0.0.1:8774/v2/",
        "rel": "self"
      },
      {
        "href": "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
        "type": "application/pdf",
        "rel": "describedby"
      },
      {
        "href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
        "type": "application/vnd.sun.wadl+xml",
        "rel": "describedby"
      },
      {
        "href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
        "type": "application/vnd.sun.wadl+xml",
        "rel": "describedby"
      }
    ]
  }
}
```

> 203 Response

```json
{
  "version": {
    "status": "CURRENT",
    "updated": "2011-01-21T11:33:21Z",
    "media-types": [
      {
        "base": "application/xml",
        "type": "application/vnd.openstack.compute+xml;version=2"
      },
      {
        "base": "application/json",
        "type": "application/vnd.openstack.compute+json;version=2"
      }
    ],
    "id": "v2.0",
    "links": [
      {
        "href": "http://23.253.228.211:8774/v2/",
        "rel": "self"
      },
      {
        "href": "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
        "type": "application/pdf",
        "rel": "describedby"
      },
      {
        "href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
        "type": "application/vnd.sun.wadl+xml",
        "rel": "describedby"
      }
    ]
  }
}
```

<h3 id="show-api-version-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|None|
|203|Non-Authoritative Information|203 response|None|

<aside class="success">
This operation does not require authentication
</aside>
