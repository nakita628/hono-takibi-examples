<h1 id="responses-with-various-schema-formats">Responses with various schema formats v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="responses-with-various-schema-formats-default">Default</h1>

## Array of Everything

> Code samples

```bash
curl https://example.com/anything/top-level-array \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "objectOfObjectsAndArrays": {
        "singleObject": {
          "string": "string",
          "boolean": true,
          "number": 0
        },
        "arrayOfPrimitives": [
          "string"
        ],
        "arrayOfObjects": [
          {
            "string": "string",
            "boolean": true,
            "number": 0
          }
        ],
        "primitive": "string"
      },
      "arrayOfObjectsOfObjectsAndArrays": [
        {
          "singleObject": {
            "string": "string",
            "boolean": true,
            "number": 0
          },
          "arrayOfPrimitives": [
            "string"
          ],
          "arrayOfObjects": [
            {
              "string": "string",
              "boolean": true,
              "number": 0
            }
          ],
          "primitive": "string"
        }
      ],
      "objectOfAdditionalProperties": {
        "property1": {
          "primitive": "string",
          "boolean": true,
          "metadata": {}
        },
        "property2": {
          "primitive": "string",
          "boolean": true,
          "metadata": {}
        }
      },
      "string": "string"
    }
  ]'
```

`PUT /anything/top-level-array`

This payload is an array containing a complex payload of arrays, objects, and primitives.

> Body parameter

```json
[
  {
    "objectOfObjectsAndArrays": {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    },
    "arrayOfObjectsOfObjectsAndArrays": [
      {
        "singleObject": {
          "string": "string",
          "boolean": true,
          "number": 0
        },
        "arrayOfPrimitives": [
          "string"
        ],
        "arrayOfObjects": [
          {
            "string": "string",
            "boolean": true,
            "number": 0
          }
        ],
        "primitive": "string"
      }
    ],
    "objectOfAdditionalProperties": {
      "property1": {
        "primitive": "string",
        "boolean": true,
        "metadata": {}
      },
      "property2": {
        "primitive": "string",
        "boolean": true,
        "metadata": {}
      }
    },
    "string": "string"
  }
]
```

<h3 id="array-of-everything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ObjectOfEverything](#schemaobjectofeverything)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "objectOfObjectsAndArrays": {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    },
    "arrayOfObjectsOfObjectsAndArrays": [
      {
        "singleObject": {
          "string": "string",
          "boolean": true,
          "number": 0
        },
        "arrayOfPrimitives": [
          "string"
        ],
        "arrayOfObjects": [
          {
            "string": "string",
            "boolean": true,
            "number": 0
          }
        ],
        "primitive": "string"
      }
    ],
    "objectOfAdditionalProperties": {
      "property1": {
        "primitive": "string",
        "boolean": true,
        "metadata": {}
      },
      "property2": {
        "primitive": "string",
        "boolean": true,
        "metadata": {}
      }
    },
    "string": "string"
  }
]
```

<h3 id="array-of-everything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="array-of-everything-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ObjectOfEverything](#schemaobjectofeverything)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Simple Array

> Code samples

```bash
curl https://example.com/anything/top-level-array \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "string": "string",
      "boolean": true,
      "number": 0
    }
  ]'
```

`POST /anything/top-level-array`

This payload is an array containing a simple flat object.

> Body parameter

```json
[
  {
    "string": "string",
    "boolean": true,
    "number": 0
  }
]
```

<h3 id="simple-array-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArrayOfFlatObjects](#schemaarrayofflatobjects)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "string": "string",
    "boolean": true,
    "number": 0
  }
]
```

<h3 id="simple-array-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArrayOfFlatObjects](#schemaarrayofflatobjects)|

<aside class="success">
This operation does not require authentication
</aside>

## Simple Object

> Code samples

```bash
curl https://example.com/anything/top-level-object/simple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "nestedObject_1": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "nestedObject_2": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "nestedObject_3": {
      "string": "string",
      "boolean": true,
      "number": 0
    }
  }'
```

`POST /anything/top-level-object/simple`

This payload is an object comprised of simple flat objects.

> Body parameter

```json
{
  "nestedObject_1": {
    "string": "string",
    "boolean": true,
    "number": 0
  },
  "nestedObject_2": {
    "string": "string",
    "boolean": true,
    "number": 0
  },
  "nestedObject_3": {
    "string": "string",
    "boolean": true,
    "number": 0
  }
}
```

<h3 id="simple-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» nestedObject_1|body|[FlatObject](#schemaflatobject)|false|none|
|» nestedObject_2|body|[FlatObject](#schemaflatobject)|false|none|
|» nestedObject_3|body|[FlatObject](#schemaflatobject)|false|none|

> Example responses

> 200 Response

```json
{
  "nestedObject": {
    "string": "string",
    "boolean": true,
    "number": 0
  }
}
```

<h3 id="simple-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="simple-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nestedObject|[FlatObject](#schemaflatobject)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Object of Everything

> Code samples

```bash
curl https://example.com/top-level-object/of-everything \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "objectOfObjectsAndArrays": {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    },
    "arrayOfObjectsOfObjectsAndArrays": [
      {
        "singleObject": {
          "string": "string",
          "boolean": true,
          "number": 0
        },
        "arrayOfPrimitives": [
          "string"
        ],
        "arrayOfObjects": [
          {
            "string": "string",
            "boolean": true,
            "number": 0
          }
        ],
        "primitive": "string"
      }
    ],
    "objectOfAdditionalProperties": {
      "property1": {
        "primitive": "string",
        "boolean": true,
        "metadata": {}
      },
      "property2": {
        "primitive": "string",
        "boolean": true,
        "metadata": {}
      }
    },
    "string": "string"
  }'
```

`POST /top-level-object/of-everything`

> Body parameter

```json
{
  "objectOfObjectsAndArrays": {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  },
  "arrayOfObjectsOfObjectsAndArrays": [
    {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    }
  ],
  "objectOfAdditionalProperties": {
    "property1": {
      "primitive": "string",
      "boolean": true,
      "metadata": {}
    },
    "property2": {
      "primitive": "string",
      "boolean": true,
      "metadata": {}
    }
  },
  "string": "string"
}
```

<h3 id="object-of-everything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ObjectOfEverything](#schemaobjectofeverything)|false|none|
|» objectOfObjectsAndArrays|body|[ObjectOfObjectsAndArrays](#schemaobjectofobjectsandarrays)|false|Object containing objects and arrays|
|» arrayOfObjectsOfObjectsAndArrays|body|[ArrayOfObjectsOfObjectsAndArrays](#schemaarrayofobjectsofobjectsandarrays)|false|Array of objects (containing objects and arrays)|
|» objectOfAdditionalProperties|body|[ObjectOfAdditionalPropertiesObjectPolymorphism](#schemaobjectofadditionalpropertiesobjectpolymorphism)|false|Object containing an `additionalProperties` declaration that's comprised of a polymorphic `oneOf`.|
|» string|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "objectOfObjectsAndArrays": {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  },
  "arrayOfObjectsOfObjectsAndArrays": [
    {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    }
  ],
  "objectOfAdditionalProperties": {
    "property1": {
      "primitive": "string",
      "boolean": true,
      "metadata": {}
    },
    "property2": {
      "primitive": "string",
      "boolean": true,
      "metadata": {}
    }
  },
  "string": "string"
}
```

<h3 id="object-of-everything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ObjectOfEverything](#schemaobjectofeverything)|

<aside class="success">
This operation does not require authentication
</aside>

## Multischema of Everything

> Code samples

```bash
curl https://example.com/multischema/of-everything \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    }
  ]'
```

`POST /multischema/of-everything`

> Body parameter

```json
[
  {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  }
]
```

<h3 id="multischema-of-everything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MultischemaOfEverything](#schemamultischemaofeverything)|false|none|
|» *oneOf*|body|[ArrayOfObjectsOfObjectsAndArrays](#schemaarrayofobjectsofobjectsandarrays) \| object|false|none|
|» *oneOf*|body|[ArrayOfObjectsOfObjectsAndArrays](#schemaarrayofobjectsofobjectsandarrays)|false|none|
|» *oneOf*|body|object|false|none|
|» objEverything|body|[ObjectOfEverything](#schemaobjectofeverything)|false|none|
|» flatObj|body|[FlatObject](#schemaflatobject)|false|none|
|» *oneOf*|body|[ArrayOfPrimitives](#schemaarrayofprimitives)|false|none|
|» *oneOf*|body|[ArrayOfFlatObjects](#schemaarrayofflatobjects)|false|none|
|» *oneOf*|body|[FlatObject](#schemaflatobject)|false|none|
|» *oneOf*|body|[ObjectOfEverything](#schemaobjectofeverything)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  }
]
```

<h3 id="multischema-of-everything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MultischemaOfEverything](#schemamultischemaofeverything)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_MultischemaOfEverything">MultischemaOfEverything</h2>
<!-- backwards compatibility -->
<a id="schemamultischemaofeverything"></a>
<a id="schema_MultischemaOfEverything"></a>
<a id="tocSmultischemaofeverything"></a>
<a id="tocsmultischemaofeverything"></a>

```json
[
  {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  }
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ArrayOfObjectsOfObjectsAndArrays](#schemaarrayofobjectsofobjectsandarrays) \| object|false|none|none|
|*oneOf*|[ArrayOfObjectsOfObjectsAndArrays](#schemaarrayofobjectsofobjectsandarrays)|false|none|none|
|*oneOf*|object|false|none|none|
|objEverything|[ObjectOfEverything](#schemaobjectofeverything)|false|none|none|
|flatObj|[FlatObject](#schemaflatobject)|false|none|none|
|*oneOf*|[ArrayOfPrimitives](#schemaarrayofprimitives)|false|none|none|
|*oneOf*|[ArrayOfFlatObjects](#schemaarrayofflatobjects)|false|none|none|
|*oneOf*|[FlatObject](#schemaflatobject)|false|none|none|
|*oneOf*|[ObjectOfEverything](#schemaobjectofeverything)|false|none|none|

<h2 id="tocS_ArrayOfObjectsOfObjectsAndArrays">ArrayOfObjectsOfObjectsAndArrays</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofobjectsofobjectsandarrays"></a>
<a id="schema_ArrayOfObjectsOfObjectsAndArrays"></a>
<a id="tocSarrayofobjectsofobjectsandarrays"></a>
<a id="tocsarrayofobjectsofobjectsandarrays"></a>

```json
[
  {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  }
]
```

<h2 id="tocS_ObjectOfEverything">ObjectOfEverything</h2>
<!-- backwards compatibility -->
<a id="schemaobjectofeverything"></a>
<a id="schema_ObjectOfEverything"></a>
<a id="tocSobjectofeverything"></a>
<a id="tocsobjectofeverything"></a>

```json
{
  "objectOfObjectsAndArrays": {
    "singleObject": {
      "string": "string",
      "boolean": true,
      "number": 0
    },
    "arrayOfPrimitives": [
      "string"
    ],
    "arrayOfObjects": [
      {
        "string": "string",
        "boolean": true,
        "number": 0
      }
    ],
    "primitive": "string"
  },
  "arrayOfObjectsOfObjectsAndArrays": [
    {
      "singleObject": {
        "string": "string",
        "boolean": true,
        "number": 0
      },
      "arrayOfPrimitives": [
        "string"
      ],
      "arrayOfObjects": [
        {
          "string": "string",
          "boolean": true,
          "number": 0
        }
      ],
      "primitive": "string"
    }
  ],
  "objectOfAdditionalProperties": {
    "property1": {
      "primitive": "string",
      "boolean": true,
      "metadata": {}
    },
    "property2": {
      "primitive": "string",
      "boolean": true,
      "metadata": {}
    }
  },
  "string": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectOfObjectsAndArrays|[ObjectOfObjectsAndArrays](#schemaobjectofobjectsandarrays)|false|none|Object containing objects and arrays|
|arrayOfObjectsOfObjectsAndArrays|[ArrayOfObjectsOfObjectsAndArrays](#schemaarrayofobjectsofobjectsandarrays)|false|none|Array of objects (containing objects and arrays)|
|objectOfAdditionalProperties|[ObjectOfAdditionalPropertiesObjectPolymorphism](#schemaobjectofadditionalpropertiesobjectpolymorphism)|false|none|Object containing an `additionalProperties` declaration that's comprised of a polymorphic `oneOf`.|
|string|string|false|none|none|

<h2 id="tocS_ArrayOfPrimitives">ArrayOfPrimitives</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofprimitives"></a>
<a id="schema_ArrayOfPrimitives"></a>
<a id="tocSarrayofprimitives"></a>
<a id="tocsarrayofprimitives"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ArrayOfFlatObjects">ArrayOfFlatObjects</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofflatobjects"></a>
<a id="schema_ArrayOfFlatObjects"></a>
<a id="tocSarrayofflatobjects"></a>
<a id="tocsarrayofflatobjects"></a>

```json
[
  {
    "string": "string",
    "boolean": true,
    "number": 0
  }
]
```

<h2 id="tocS_ObjectOfObjectsAndArrays">ObjectOfObjectsAndArrays</h2>
<!-- backwards compatibility -->
<a id="schemaobjectofobjectsandarrays"></a>
<a id="schema_ObjectOfObjectsAndArrays"></a>
<a id="tocSobjectofobjectsandarrays"></a>
<a id="tocsobjectofobjectsandarrays"></a>

```json
{
  "singleObject": {
    "string": "string",
    "boolean": true,
    "number": 0
  },
  "arrayOfPrimitives": [
    "string"
  ],
  "arrayOfObjects": [
    {
      "string": "string",
      "boolean": true,
      "number": 0
    }
  ],
  "primitive": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|singleObject|[FlatObject](#schemaflatobject)|false|none|Simple flat object|
|arrayOfPrimitives|[ArrayOfPrimitives](#schemaarrayofprimitives)|false|none|Array of primitives|
|arrayOfObjects|[ArrayOfFlatObjects](#schemaarrayofflatobjects)|false|none|Array of objects|
|primitive|string|false|none|none|

<h2 id="tocS_ObjectOfAdditionalPropertiesObjectPolymorphism">ObjectOfAdditionalPropertiesObjectPolymorphism</h2>
<!-- backwards compatibility -->
<a id="schemaobjectofadditionalpropertiesobjectpolymorphism"></a>
<a id="schema_ObjectOfAdditionalPropertiesObjectPolymorphism"></a>
<a id="tocSobjectofadditionalpropertiesobjectpolymorphism"></a>
<a id="tocsobjectofadditionalpropertiesobjectpolymorphism"></a>

```json
{
  "property1": {
    "primitive": "string",
    "boolean": true,
    "metadata": {}
  },
  "property2": {
    "primitive": "string",
    "boolean": true,
    "metadata": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_FlatObject">FlatObject</h2>
<!-- backwards compatibility -->
<a id="schemaflatobject"></a>
<a id="schema_FlatObject"></a>
<a id="tocSflatobject"></a>
<a id="tocsflatobject"></a>

```json
{
  "string": "string",
  "boolean": true,
  "number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|string|string|false|none|none|
|boolean|boolean|false|none|none|
|number|number|false|none|none|

<h2 id="tocS_ObjectWithArray">ObjectWithArray</h2>
<!-- backwards compatibility -->
<a id="schemaobjectwitharray"></a>
<a id="schema_ObjectWithArray"></a>
<a id="tocSobjectwitharray"></a>
<a id="tocsobjectwitharray"></a>

```json
{
  "Array": [
    {
      "inputs": [
        {
          "input 1": "string",
          "input 2": "string"
        }
      ],
      "nums": [
        0
      ]
    }
  ]
}
```

Metadata for defining additional objects related to your API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Array|[object]|false|none|none|
