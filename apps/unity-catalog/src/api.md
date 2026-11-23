<h1 id="unity-catalog-api">Unity Catalog API v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://localhost:8080/api/2.1/unity-catalog">http://localhost:8080/api/2.1/unity-catalog</a> - Localhost reference server

<h1 id="unity-catalog-api-catalogs">Catalogs</h1>

A catalog is the first layer of Unity Catalog’s three-level namespace. It’s used to organize your data assets.


## List catalogs

<a id="opIdlistCatalogs"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/catalogs \
  -H 'Accept: application/json'
```

`GET /catalogs`

Lists the available catalogs. There is no guarantee of a specific ordering of the elements in the list.


<h3 id="list-catalogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_token|query|string|false|Opaque pagination token to go to next page based on previous query.<br>|
|max_results|query|integer(int32)|false|Maximum number of catalogs to return.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br>|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "catalogs": [
    {
      "browse_only": true,
      "name": "string",
      "comment": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "id": "string",
      "storage_root": "string",
      "storage_location": "string"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-catalogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The catalog list was successfully retrieved.|[ListCatalogsResponse](#schemalistcatalogsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a catalog

<a id="opIdcreateCatalog"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/catalogs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "comment": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "storage_root": "string"
  }'
```

`POST /catalogs`

Creates a new catalog instance.


> Body parameter

```json
{
  "name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "storage_root": "string"
}
```

<h3 id="create-a-catalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCatalog](#schemacreatecatalog)|false|none|
|» name|body|string|true|Name of catalog.|
|» comment|body|string|false|User-provided free-form text description.|
|» properties|body|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|A map of key-value properties attached to the securable.|
|» storage_root|body|string|false|Storage root URL for managed storage location of catalog. Example: s3://bucket/ucroot<br>|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

<h3 id="create-a-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new catalog was successfully created.|[CatalogInfo](#schemacataloginfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a catalog

<a id="opIdgetCatalog"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/catalogs/string \
  -H 'Accept: application/json'
```

`GET /catalogs/{name}`

Gets the specified catalog.


<h3 id="get-a-catalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|name|path|string|true|The name of the catalog.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

<h3 id="get-a-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The catalog was successfully retrieved.|[CatalogInfo](#schemacataloginfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a catalog

<a id="opIddeleteCatalog"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/catalogs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /catalogs/{name}`

Deletes the catalog that matches the supplied name.


<h3 id="delete-a-catalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Force deletion even if the catalog is not empty.|
|name|path|string|true|The name of the catalog.|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The catalog was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a catalog

<a id="opIdupdateCatalog"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/catalogs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "owner": "string",
    "comment": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "new_name": "string"
  }'
```

`PATCH /catalogs/{name}`

Updates the catalog that matches the supplied name.


> Body parameter

```json
{
  "owner": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "new_name": "string"
}
```

<h3 id="update-a-catalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the catalog.|
|body|body|[UpdateCatalog](#schemaupdatecatalog)|false|none|
|» owner|body|string|false|Username of the new owner. The user must already exist.|
|» comment|body|string|false|User-provided free-form text description.|
|» properties|body|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|A map of key-value properties attached to the securable.|
|» new_name|body|string|false|New name for the catalog.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

<h3 id="update-a-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The catalog was successfully updated.|[CatalogInfo](#schemacataloginfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-schemas">Schemas</h1>

A schema (also called a database) is the second layer of Unity Catalog’s three-level namespace. A schema organizes tables, volumes and functions.


## List schemas

<a id="opIdlistSchemas"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/2.1/unity-catalog/schemas?catalog_name=string' \
  -H 'Accept: application/json'
```

`GET /schemas`

Gets an array of schemas for a catalog.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog_name|query|string|true|Parent catalog for schemas of interest.|
|max_results|query|integer(int32)|false|Maximum number of schemas to return.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br>|
|page_token|query|string|false|Opaque pagination token to go to next page based on previous query.<br>|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "schemas": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "comment": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "full_name": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "schema_id": "string",
      "storage_root": "string",
      "storage_location": "string"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The schemas list was successfully retrieved.|[ListSchemasResponse](#schemalistschemasresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a schema

<a id="opIdcreateSchema"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/schemas \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "catalog_name": "string",
    "comment": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "storage_root": "string"
  }'
```

`POST /schemas`

Creates a new schema in the specified catalog.


> Body parameter

```json
{
  "name": "string",
  "catalog_name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "storage_root": "string"
}
```

<h3 id="create-a-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSchema](#schemacreateschema)|false|none|
|» name|body|string|true|Name of schema, relative to parent catalog.|
|» catalog_name|body|string|true|Name of parent catalog.|
|» comment|body|string|false|User-provided free-form text description.|
|» properties|body|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|A map of key-value properties attached to the securable.|
|» storage_root|body|string|false|Storage root URL for managed storage location of schema. If not set, managed securables<br>under this schema will try to use the storage_location of the parent catalog instead.<br>Example: s3://bucket/ucroot<br>|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "schema_id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

<h3 id="create-a-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new schema was successfully created.|[SchemaInfo](#schemaschemainfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a schema

<a id="opIdgetSchema"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/schemas/string \
  -H 'Accept: application/json'
```

`GET /schemas/{full_name}`

Gets the specified schema for a catalog.


<h3 id="get-a-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|full_name|path|string|true|Full name of the schema.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "schema_id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

<h3 id="get-a-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The schema was successfully retrieved.|[SchemaInfo](#schemaschemainfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a schema

<a id="opIddeleteSchema"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/schemas/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /schemas/{full_name}`

Deletes the specified schema from the parent catalog.


<h3 id="delete-a-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Force deletion even if the catalog is not empty.|
|full_name|path|string|true|Full name of the schema.|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The schema was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a schema

<a id="opIdupdateSchema"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/schemas/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "owner": "string",
    "comment": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "new_name": "string"
  }'
```

`PATCH /schemas/{full_name}`

Updates the specified schema.


> Body parameter

```json
{
  "owner": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "new_name": "string"
}
```

<h3 id="update-a-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the schema.|
|body|body|[UpdateSchema](#schemaupdateschema)|false|none|
|» owner|body|string|false|Username of the new owner. The user must already exist.|
|» comment|body|string|false|User-provided free-form text description.|
|» properties|body|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|A map of key-value properties attached to the securable.|
|» new_name|body|string|false|New name for the schema.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "schema_id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

<h3 id="update-a-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The schema was successfully updated.|[SchemaInfo](#schemaschemainfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-tables">Tables</h1>

A table resides in the third layer of Unity Catalog’s three-level namespace. It contains rows of data. 
A table can be managed or external.


## Create a staging table

<a id="opIdcreateStagingTable"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/staging-tables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "catalog_name": "string",
    "schema_name": "string"
  }'
```

`POST /staging-tables`

Creates a new staging table instance. Staging tables are used during managed table creation. Creating a managed
table requires performing two actions – initializing the table data in cloud storage and creating the named
table entry in the catalog – and these should appear as an atomic operation to other operations on catalog
tables. A staging table is used to allocate storage for the managed table, and the catalog_name.schema_name.name
parameters provided in this request are used to initialize any required storage properties and determine the
storage URL that should be used for the data contained by this table.

Temporary credentials can be obtained as though the staging table were a regular table to get access to the
staging table’s storage. After the table’s data is initialized, the staging table is “promoted” to a managed
table by creating a managed table with the same location as the staging table. This allows for the atomic
creation of a managed table that already has full data written to its storage location. Note: the name provided
must match the name used to initialize the staging table originally.

WARNING: This API is experimental and may change in future versions.


> Body parameter

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string"
}
```

<h3 id="create-a-staging-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateStagingTable](#schemacreatestagingtable)|false|none|
|» name|body|string|true|Name of table, relative to parent schema.|
|» catalog_name|body|string|true|Name of parent catalog.|
|» schema_name|body|string|true|Name of parent schema relative to its parent catalog.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "id": "string",
  "staging_location": "string"
}
```

<h3 id="create-a-staging-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new staging table was successfully created.|[StagingTableInfo](#schemastagingtableinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List tables

<a id="opIdlistTables"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/2.1/unity-catalog/tables?catalog_name=string&schema_name=string' \
  -H 'Accept: application/json'
```

`GET /tables`

Gets the list of all available tables under the parent catalog and schema.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-tables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog_name|query|string|true|Name of parent catalog for tables of interest.|
|schema_name|query|string|true|Parent schema of tables.|
|max_results|query|integer(int32)|false|Maximum number of tables to return.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br>|
|page_token|query|string|false|Opaque token to send for the next page of results (pagination).|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "tables": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "table_type": "MANAGED",
      "data_source_format": "DELTA",
      "columns": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "comment": "string",
          "nullable": "true",
          "partition_index": 0
        }
      ],
      "storage_location": "string",
      "comment": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "table_id": "string",
      "view_definition": "string",
      "view_dependencies": {
        "dependencies": [
          {
            "table": {
              "table_full_name": "string"
            },
            "function": {
              "function_full_name": "string"
            }
          }
        ]
      }
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-tables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tables list was successfully retrieved.|[ListTablesResponse](#schemalisttablesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a table. Only external table creation is supported. WARNING: This API is experimental and will change in future versions.

<a id="opIdcreateTable"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/tables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "catalog_name": "string",
    "schema_name": "string",
    "table_type": "MANAGED",
    "data_source_format": "DELTA",
    "columns": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "comment": "string",
        "nullable": "true",
        "partition_index": 0
      }
    ],
    "storage_location": "string",
    "comment": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "view_definition": "string",
    "view_dependencies": {
      "dependencies": [
        {
          "table": {
            "table_full_name": "string"
          },
          "function": {
            "function_full_name": "string"
          }
        }
      ]
    }
  }'
```

`POST /tables`

Creates a new external table instance.
WARNING: This API is experimental and will change in future versions.


> Body parameter

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "table_type": "MANAGED",
  "data_source_format": "DELTA",
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ],
  "storage_location": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "view_definition": "string",
  "view_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  }
}
```

<h3 id="create-a-table-only-external-table-creation-is-supported-warning-this-api-is-experimental-and-will-change-in-future-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTable](#schemacreatetable)|false|none|
|» name|body|string|true|Name of table, relative to parent schema.|
|» catalog_name|body|string|true|Name of parent catalog.|
|» schema_name|body|string|true|Name of parent schema relative to its parent catalog.|
|» table_type|body|[TableType](#schematabletype)|true|none|
|» data_source_format|body|[DataSourceFormat](#schemadatasourceformat)|false|Data source format|
|» columns|body|[[ColumnInfo](#schemacolumninfo)]|true|The array of __ColumnInfo__ definitions of the table's columns.|
|» storage_location|body|string|false|Storage root URL for external table|
|» comment|body|string|false|User-provided free-form text description.|
|» properties|body|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|A map of key-value properties attached to the securable.|
|» view_definition|body|string|false|Definition text for view-like table types such as VIEW, MATERIALIZED_VIEW, STREAMING_TABLE, and METRIC_VIEW. The format depends on the table type (SQL for views, YAML for metric views).|
|» view_dependencies|body|[DependencyList](#schemadependencylist)|false|A list of dependencies.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» table_type|MANAGED|
|» table_type|EXTERNAL|
|» table_type|STREAMING_TABLE|
|» table_type|MATERIALIZED_VIEW|
|» table_type|METRIC_VIEW|
|» table_type|VIEW|
|» data_source_format|DELTA|
|» data_source_format|ICEBERG|
|» data_source_format|CSV|
|» data_source_format|JSON|
|» data_source_format|AVRO|
|» data_source_format|PARQUET|
|» data_source_format|ORC|
|» data_source_format|TEXT|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "table_type": "MANAGED",
  "data_source_format": "DELTA",
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ],
  "storage_location": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "table_id": "string",
  "view_definition": "string",
  "view_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  }
}
```

<h3 id="create-a-table-only-external-table-creation-is-supported-warning-this-api-is-experimental-and-will-change-in-future-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new external table was successfully created.|[TableInfo](#schematableinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a table

<a id="opIdgetTable"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/tables/string \
  -H 'Accept: application/json'
```

`GET /tables/{full_name}`

Gets a table for a specific catalog and schema.


<h3 id="get-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|read_streaming_table_as_managed|query|boolean|false|Whether to read Streaming Tables as Managed tables.<br>|
|read_materialized_view_as_managed|query|boolean|false|Whether to read Materialized Views as Managed tables.<br>|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|full_name|path|string|true|Full name of the table.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "table_type": "MANAGED",
  "data_source_format": "DELTA",
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ],
  "storage_location": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "table_id": "string",
  "view_definition": "string",
  "view_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  }
}
```

<h3 id="get-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The table was successfully retrieved.|[TableInfo](#schematableinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a table

<a id="opIddeleteTable"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/tables/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /tables/{full_name}`

Deletes a table from the specified parent catalog and schema.


<h3 id="delete-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the table.|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The table was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a table owner

<a id="opIdupdateTable"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/tables/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "owner": "string"
  }'
```

`PATCH /tables/{full_name}`

Transfers ownership of a table or view to an existing user.

> Body parameter

```json
{
  "owner": "string"
}
```

<h3 id="update-a-table-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the table.|
|body|body|[UpdateTable](#schemaupdatetable)|true|none|
|» owner|body|string|true|Username of the new owner. Only a metastore admin can transfer a view to another user.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "table_type": "MANAGED",
  "data_source_format": "DELTA",
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ],
  "storage_location": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "table_id": "string",
  "view_definition": "string",
  "view_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  }
}
```

<h3 id="update-a-table-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The table owner was successfully updated.|[TableInfo](#schematableinfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-volumes">Volumes</h1>

Volumes are a Unity Catalog capability for accessing, storing, governing, organizing and processing files. Use cases include running machine learning on unstructured data such as image, audio, video, or PDF files, organizing data sets during the data exploration stages in data science, working with libraries that require access to the local file system on cluster machines, storing library and config files of arbitrary formats such as .whl or .txt centrally and providing secure access across workspaces to it, or transforming and querying non-tabular data files in ETL.


## List Volumes

<a id="opIdlistVolumes"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/2.1/unity-catalog/volumes?catalog_name=main&schema_name=default' \
  -H 'Accept: application/json'
```

`GET /volumes`

Gets an array of available volumes under the parent catalog and schema.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-volumes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog_name|query|string|true|The identifier of the catalog|
|schema_name|query|string|true|The identifier of the schema|
|max_results|query|integer(int32)|false|Maximum number of volumes to return (page length).<br><br>If not set, the page length is set to a server configured value.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br><br>Note: this parameter controls only the maximum number of volumes to return. The actual number of volumes returned in a page may be smaller than this value, including 0, even if there are more pages.<br><br>|
|page_token|query|string|false|Opaque token returned by a previous request. It must be included in the request to retrieve the next page of results (pagination).|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "volumes": [
    {
      "catalog_name": "main",
      "schema_name": "default",
      "name": "my_volume",
      "volume_type": "EXTERNAL",
      "created_at": 1666369196203,
      "updated_at": 1666369196203,
      "comment": "This is my first volume"
    },
    {
      "catalog_name": "main",
      "schema_name": "default",
      "name": "my_another_volume",
      "volume_type": "EXTERNAL",
      "created_at": 1666369196203,
      "updated_at": 1666369196203,
      "comment": "This is my other volume"
    }
  ]
}
```

<h3 id="list-volumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The volume list was successfully retrieved|[ListVolumesResponseContent](#schemalistvolumesresponsecontent)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Volume

<a id="opIdcreateVolume"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/volumes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "catalog_name": "main",
    "schema_name": "default",
    "name": "my_volume",
    "volume_type": "EXTERNAL",
    "comment": "This is my first volume"
  }'
```

`POST /volumes`

Creates a new volume.


> Body parameter

```json
{
  "catalog_name": "main",
  "schema_name": "default",
  "name": "my_volume",
  "volume_type": "EXTERNAL",
  "comment": "This is my first volume"
}
```

<h3 id="create-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateVolumeRequestContent](#schemacreatevolumerequestcontent)|true|none|
|» catalog_name|body|string|true|The name of the catalog where the schema and the volume are|
|» schema_name|body|string|true|The name of the schema where the volume is|
|» name|body|string|true|The name of the volume|
|» volume_type|body|[VolumeType](#schemavolumetype)|true|The type of the volume|
|» comment|body|string|false|The comment attached to the volume|
|» storage_location|body|string|false|The storage location of the volume|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» volume_type|MANAGED|
|» volume_type|EXTERNAL|

> Example responses

> 200 Response

```json
{
  "catalog_name": "main",
  "schema_name": "default",
  "name": "my_volume",
  "volume_type": "EXTERNAL",
  "created_at": 1666369196203,
  "updated_at": 1666369196203,
  "comment": "This is my first volume"
}
```

<h3 id="create-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the volume|[VolumeInfo](#schemavolumeinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Volume

<a id="opIdgetVolume"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/volumes/main.default.my_volume \
  -H 'Accept: application/json'
```

`GET /volumes/{name}`

Gets a volume for a specific catalog and schema.


<h3 id="get-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|name|path|string|true|The three-level (fully qualified) name of the volume|

> Example responses

> 200 Response

```json
{
  "catalog_name": "main",
  "schema_name": "default",
  "name": "my_volume",
  "volume_type": "EXTERNAL",
  "created_at": 1666369196203,
  "updated_at": 1666369196203,
  "comment": "This is my first volume"
}
```

<h3 id="get-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the properties of the volume|[VolumeInfo](#schemavolumeinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Volume

<a id="opIddeleteVolume"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/volumes/main.default.my_volume \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /volumes/{name}`

Deletes a volume from the specified parent catalog and schema.


<h3 id="delete-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The three-level (fully qualified) name of the volume|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted the volume|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Volume

<a id="opIdupdateVolume"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/volumes/main.default.my_volume \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "new_name": "my_new_volume"
  }'
```

`PATCH /volumes/{name}`

Updates the specified volume under the specified parent catalog and schema.

You can update the volume's name, comment, or owner.


> Body parameter

```json
{
  "new_name": "my_new_volume"
}
```

<h3 id="update-a-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The three-level (fully qualified) name of the volume|
|body|body|[UpdateVolumeRequestContent](#schemaupdatevolumerequestcontent)|false|none|
|» owner|body|string|false|Username of the new owner. The user must already exist.|
|» comment|body|string|false|The comment attached to the volume|
|» new_name|body|string|false|New name for the volume.|

> Example responses

> 200 Response

```json
{
  "catalog_name": "main",
  "schema_name": "default",
  "name": "my_new_volume",
  "volume_type": "EXTERNAL",
  "created_at": 1666369196203,
  "updated_at": 1666369207415,
  "comment": "This is my new volume"
}
```

<h3 id="update-a-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the properties of the volume|[VolumeInfo](#schemavolumeinfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-functions">Functions</h1>

Functions implement User-Defined Functions (UDFs) in Unity Catalog.
The function implementation can be a SQL expression/query or a python function, and it can be invoked wherever a table reference is allowed in a query.
In Unity Catalog, a function resides at the same level as a table, so it can be referenced with the form __catalog_name__.__schema_name__.__function_name__.


## List functions

<a id="opIdlistFunctions"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/2.1/unity-catalog/functions?catalog_name=string&schema_name=string' \
  -H 'Accept: application/json'
```

`GET /functions`

List functions within the specified parent catalog and schema.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog_name|query|string|true|Name of parent catalog for functions of interest.|
|schema_name|query|string|true|Parent schema of functions.|
|max_results|query|integer(int32)|false|Maximum number of functions to return.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br>|
|page_token|query|string|false|Opaque pagination token to go to next page based on previous query.|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "functions": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "input_params": {
        "parameters": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "parameter_mode": "IN",
            "parameter_type": "PARAM",
            "parameter_default": "string",
            "comment": "string"
          }
        ]
      },
      "data_type": "BOOLEAN",
      "full_data_type": "string",
      "return_params": {
        "parameters": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "parameter_mode": "IN",
            "parameter_type": "PARAM",
            "parameter_default": "string",
            "comment": "string"
          }
        ]
      },
      "routine_body": "SQL",
      "routine_definition": "string",
      "routine_dependencies": {
        "dependencies": [
          {
            "table": {
              "table_full_name": "string"
            },
            "function": {
              "function_full_name": "string"
            }
          }
        ]
      },
      "parameter_style": "S",
      "is_deterministic": true,
      "sql_data_access": "CONTAINS_SQL",
      "is_null_call": true,
      "security_type": "DEFINER",
      "specific_name": "string",
      "comment": "string",
      "properties": "string",
      "full_name": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "function_id": "string",
      "external_language": "string"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The function list was successfully retrieved.|[ListFunctionsResponse](#schemalistfunctionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a function. WARNING: This API is experimental and will change in future versions.

<a id="opIdcreateFunction"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "function_info": {
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "input_params": {
        "parameters": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "parameter_mode": "IN",
            "parameter_type": "PARAM",
            "parameter_default": "string",
            "comment": "string"
          }
        ]
      },
      "data_type": "BOOLEAN",
      "full_data_type": "string",
      "return_params": {
        "parameters": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "parameter_mode": "IN",
            "parameter_type": "PARAM",
            "parameter_default": "string",
            "comment": "string"
          }
        ]
      },
      "routine_body": "SQL",
      "routine_definition": "string",
      "routine_dependencies": {
        "dependencies": [
          {
            "table": {
              "table_full_name": "string"
            },
            "function": {
              "function_full_name": "string"
            }
          }
        ]
      },
      "parameter_style": "S",
      "is_deterministic": true,
      "sql_data_access": "CONTAINS_SQL",
      "is_null_call": true,
      "security_type": "DEFINER",
      "specific_name": "string",
      "comment": "string",
      "properties": "string",
      "external_language": "string"
    }
  }'
```

`POST /functions`

Creates a new function instance.
WARNING: This API is experimental and will change in future versions.


> Body parameter

```json
{
  "function_info": {
    "name": "string",
    "catalog_name": "string",
    "schema_name": "string",
    "input_params": {
      "parameters": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "parameter_mode": "IN",
          "parameter_type": "PARAM",
          "parameter_default": "string",
          "comment": "string"
        }
      ]
    },
    "data_type": "BOOLEAN",
    "full_data_type": "string",
    "return_params": {
      "parameters": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "parameter_mode": "IN",
          "parameter_type": "PARAM",
          "parameter_default": "string",
          "comment": "string"
        }
      ]
    },
    "routine_body": "SQL",
    "routine_definition": "string",
    "routine_dependencies": {
      "dependencies": [
        {
          "table": {
            "table_full_name": "string"
          },
          "function": {
            "function_full_name": "string"
          }
        }
      ]
    },
    "parameter_style": "S",
    "is_deterministic": true,
    "sql_data_access": "CONTAINS_SQL",
    "is_null_call": true,
    "security_type": "DEFINER",
    "specific_name": "string",
    "comment": "string",
    "properties": "string",
    "external_language": "string"
  }
}
```

<h3 id="create-a-function-warning-this-api-is-experimental-and-will-change-in-future-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateFunctionRequest](#schemacreatefunctionrequest)|false|none|
|» function_info|body|[CreateFunction](#schemacreatefunction)|true|none|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "input_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "data_type": "BOOLEAN",
  "full_data_type": "string",
  "return_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "routine_body": "SQL",
  "routine_definition": "string",
  "routine_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  },
  "parameter_style": "S",
  "is_deterministic": true,
  "sql_data_access": "CONTAINS_SQL",
  "is_null_call": true,
  "security_type": "DEFINER",
  "specific_name": "string",
  "comment": "string",
  "properties": "string",
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "function_id": "string",
  "external_language": "string"
}
```

<h3 id="create-a-function-warning-this-api-is-experimental-and-will-change-in-future-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new function was successfully created.|[FunctionInfo](#schemafunctioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a function

<a id="opIdgetFunction"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/functions/string \
  -H 'Accept: application/json'
```

`GET /functions/{name}`

Gets a function from within a parent catalog and schema.

<h3 id="get-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|name|path|string|true|The fully-qualified name of the function (of the form __catalog_name__.__schema_name__.__function__name__).|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "input_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "data_type": "BOOLEAN",
  "full_data_type": "string",
  "return_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "routine_body": "SQL",
  "routine_definition": "string",
  "routine_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  },
  "parameter_style": "S",
  "is_deterministic": true,
  "sql_data_access": "CONTAINS_SQL",
  "is_null_call": true,
  "security_type": "DEFINER",
  "specific_name": "string",
  "comment": "string",
  "properties": "string",
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "function_id": "string",
  "external_language": "string"
}
```

<h3 id="get-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The function was successfully retrieved.|[FunctionInfo](#schemafunctioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a function

<a id="opIddeleteFunction"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/functions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /functions/{name}`

Deletes the function that matches the supplied name.

<h3 id="delete-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The fully-qualified name of the function (of the form __catalog_name__.__schema_name__.__function__name__).|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The function was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a function owner

<a id="opIdupdateFunction"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/functions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "owner": "string"
  }'
```

`PATCH /functions/{name}`

Transfers ownership of a function to an existing user.

> Body parameter

```json
{
  "owner": "string"
}
```

<h3 id="update-a-function-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The fully-qualified name of the function (of the form __catalog_name__.__schema_name__.__function__name__).|
|body|body|[UpdateFunction](#schemaupdatefunction)|true|none|
|» owner|body|string|true|Username of the new owner. Only a metastore admin can transfer a function to another user.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "input_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "data_type": "BOOLEAN",
  "full_data_type": "string",
  "return_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "routine_body": "SQL",
  "routine_definition": "string",
  "routine_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  },
  "parameter_style": "S",
  "is_deterministic": true,
  "sql_data_access": "CONTAINS_SQL",
  "is_null_call": true,
  "security_type": "DEFINER",
  "specific_name": "string",
  "comment": "string",
  "properties": "string",
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "function_id": "string",
  "external_language": "string"
}
```

<h3 id="update-a-function-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The function owner was successfully updated.|[FunctionInfo](#schemafunctioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-registeredmodels">RegisteredModels</h1>

Registered models are machine learning models that are stored within the Unity Catalog model registry. They are comprised of all versions of a single model that a user wishes to keep.
A registered model resides in the third layer of Unity Catalog’s three-level namespace, and can be referenced with the form __catalog_name__.__schema_name__.__model_name__.


## List models

<a id="opIdlistRegisteredModels"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models \
  -H 'Accept: application/json'
```

`GET /models`

Gets a paginated list of all available models either under the specified parent catalog and schema, or all models stored in UC.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog_name|query|string|false|Name of parent catalog for models of interest.|
|schema_name|query|string|false|Name of parent schema for models of interest.|
|max_results|query|integer(int32)|false|Maximum number of models to return.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br>|
|page_token|query|string|false|Opaque token to send for the next page of results (pagination).|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "registered_models": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "storage_location": "string",
      "full_name": "string",
      "comment": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "id": "string"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The models list was successfully retrieved.|[ListRegisteredModelsResponse](#schemalistregisteredmodelsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a model. WARNING: This API is experimental and will change in future versions.

<a id="opIdcreateRegisteredModel"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "catalog_name": "string",
    "schema_name": "string",
    "comment": "string"
  }'
```

`POST /models`

Creates a new model instance.
WARNING: This API is experimental and will change in future versions.


> Body parameter

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "comment": "string"
}
```

<h3 id="create-a-model-warning-this-api-is-experimental-and-will-change-in-future-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateRegisteredModel](#schemacreateregisteredmodel)|false|none|
|» name|body|string|true|Name of model, relative to parent schema.|
|» catalog_name|body|string|true|Name of parent catalog.|
|» schema_name|body|string|true|Name of parent schema relative to its parent catalog.|
|» comment|body|string|false|User-provided free-form text description.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "storage_location": "string",
  "full_name": "string",
  "comment": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="create-a-model-warning-this-api-is-experimental-and-will-change-in-future-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new registered model was successfully created.|[RegisteredModelInfo](#schemaregisteredmodelinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specified registered model

<a id="opIdgetRegisteredModel"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string \
  -H 'Accept: application/json'
```

`GET /models/{full_name}`

Gets a fully specified registered model.


<h3 id="get-a-specified-registered-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|full_name|path|string|true|Full name of the model.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "storage_location": "string",
  "full_name": "string",
  "comment": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="get-a-specified-registered-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The registered model was successfully retrieved.|[RegisteredModelInfo](#schemaregisteredmodelinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a specified registered model.

<a id="opIddeleteRegisteredModel"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /models/{full_name}`

Deletes a fully specified registered model. All versions of the model must have already been deleted.


<h3 id="delete-a-specified-registered-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Force deletion even if the registered model still has model versions.|
|full_name|path|string|true|Full name of the model.|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-specified-registered-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The registered model was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a registered model

<a id="opIdupdateRegisteredModel"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "owner": "string",
    "comment": "string",
    "new_name": "string"
  }'
```

`PATCH /models/{full_name}`

Updates the specified registered model.


> Body parameter

```json
{
  "owner": "string",
  "comment": "string",
  "new_name": "string"
}
```

<h3 id="update-a-registered-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the model.|
|body|body|[UpdateRegisteredModel](#schemaupdateregisteredmodel)|false|none|
|» owner|body|string|false|Username of the new owner. Only a metastore admin can transfer a model to another user.|
|» comment|body|string|false|User-provided free-form text description.|
|» new_name|body|string|false|New name for the model.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "storage_location": "string",
  "full_name": "string",
  "comment": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="update-a-registered-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The registered model was successfully updated.|[RegisteredModelInfo](#schemaregisteredmodelinfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-modelversions">ModelVersions</h1>

Model versions contain all artifact files associated with an individual machine learning model. They are associated with a single parent model and have an integer identifier, indicating the version number of the model.
Model versions are referenced via model URI's using the Unity Catalog three-level namespace of the registered model and the version identifier.


## Create a model version.

<a id="opIdcreateModelVersion"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model_name": "string",
    "catalog_name": "string",
    "schema_name": "string",
    "source": "string",
    "run_id": "string",
    "comment": "string"
  }'
```

`POST /models/versions`

Creates a new model version instance.


> Body parameter

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "source": "string",
  "run_id": "string",
  "comment": "string"
}
```

<h3 id="create-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateModelVersion](#schemacreatemodelversion)|false|none|
|» model_name|body|string|true|Name of registered model, relative to parent schema.|
|» catalog_name|body|string|true|Name of parent catalog.|
|» schema_name|body|string|true|Name of parent schema relative to its parent catalog.|
|» source|body|string|true|URI indicating the location of the source model artifacts.|
|» run_id|body|string|false|The run id used by the ML package that generated the model.|
|» comment|body|string|false|User-provided free-form text description.|

> Example responses

> 200 Response

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "version": 0,
  "source": "string",
  "run_id": "string",
  "status": "MODEL_VERSION_STATUS_UNKNOWN",
  "storage_location": "string",
  "comment": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="create-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new model version was successfully created.|[ModelVersionInfo](#schemamodelversioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## List model versions of the specified registered model.

<a id="opIdlistModelVersions"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string/versions \
  -H 'Accept: application/json'
```

`GET /models/{full_name}/versions`

Gets the paginated list of all available model versions under the specified registered model.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-model-versions-of-the-specified-registered-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the registered model.|
|max_results|query|integer(int32)|false|Maximum number of model versions to return.<br>- when set to a value greater than 0, the page length is the minimum of this value and a server configured value;<br>- when set to 0, the page length is set to a server configured value;<br>- when set to a value less than 0, an invalid parameter error is returned;<br>|
|page_token|query|string|false|Opaque token to send for the next page of results (pagination).|

> Example responses

> 200 Response

```json
{
  "model_versions": [
    {
      "model_name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "version": 0,
      "source": "string",
      "run_id": "string",
      "status": "MODEL_VERSION_STATUS_UNKNOWN",
      "storage_location": "string",
      "comment": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "id": "string"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-model-versions-of-the-specified-registered-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model versions list was successfully retrieved.|[ListModelVersionsResponse](#schemalistmodelversionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a model version

<a id="opIdgetModelVersion"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string/versions/0 \
  -H 'Accept: application/json'
```

`GET /models/{full_name}/versions/{version}`

Gets a specific model version for a specific model.


<h3 id="get-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the model.|
|version|path|integer(int64)|true|Version number of the model version.|

> Example responses

> 200 Response

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "version": 0,
  "source": "string",
  "run_id": "string",
  "status": "MODEL_VERSION_STATUS_UNKNOWN",
  "storage_location": "string",
  "comment": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="get-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model version was successfully retrieved.|[ModelVersionInfo](#schemamodelversioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a model version

<a id="opIddeleteModelVersion"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string/versions/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /models/{full_name}/versions/{version}`

Deletes the specified model version.


<h3 id="delete-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the model.|
|version|path|integer(int64)|true|Version number of the model version.|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model version was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a model version

<a id="opIdupdateModelVersion"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string/versions/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comment": "string"
  }'
```

`PATCH /models/{full_name}/versions/{version}`

Updates the specified model version.


> Body parameter

```json
{
  "comment": "string"
}
```

<h3 id="update-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the model.|
|version|path|integer(int64)|true|Version number of the model version.|
|body|body|[UpdateModelVersion](#schemaupdatemodelversion)|false|none|
|» comment|body|string|false|User-provided free-form text description.|

> Example responses

> 200 Response

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "version": 0,
  "source": "string",
  "run_id": "string",
  "status": "MODEL_VERSION_STATUS_UNKNOWN",
  "storage_location": "string",
  "comment": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="update-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model version was successfully updated.|[ModelVersionInfo](#schemamodelversioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Finalize a model version

<a id="opIdfinalizeModelVersion"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/models/string/versions/0/finalize \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "full_name": "string",
    "version": 0
  }'
```

`PATCH /models/{full_name}/versions/{version}/finalize`

Finalizes the status of the specified model version.


> Body parameter

```json
{
  "full_name": "string",
  "version": 0
}
```

<h3 id="finalize-a-model-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full_name|path|string|true|Full name of the model.|
|version|path|integer(int64)|true|Version number of the model version.|
|body|body|[FinalizeModelVersion](#schemafinalizemodelversion)|false|none|
|» full_name|body|string|true|The full name of the registered model to finalize.|
|» version|body|integer(int64)|true|Version number of the version to finalize.|

> Example responses

> 200 Response

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "version": 0,
  "source": "string",
  "run_id": "string",
  "status": "MODEL_VERSION_STATUS_UNKNOWN",
  "storage_location": "string",
  "comment": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

<h3 id="finalize-a-model-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model version was successfully finalized.|[ModelVersionInfo](#schemamodelversioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-temporarycredentials">TemporaryCredentials</h1>

Temporary credentials are used to access storage locations or assets for a limited lifetime.


## Generate temporary model version credentials. These credentials are used by clients to write and retrieve model artifacts from the model versions external storage location.

<a id="opIdgenerateTemporaryModelVersionCredentials"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/temporary-model-version-credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "catalog_name": "catalog_name",
    "schema_name": "schema_name",
    "model_name": "model_name",
    "version": "version",
    "operation": null
  }'
```

`POST /temporary-model-version-credentials`

> Body parameter

```json
{
  "catalog_name": "catalog_name",
  "schema_name": "schema_name",
  "model_name": "model_name",
  "version": "version",
  "operation": null
}
```

<h3 id="generate-temporary-model-version-credentials-these-credentials-are-used-by-clients-to-write-and-retrieve-model-artifacts-from-the-model-versions-external-storage-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateTemporaryModelVersionCredential](#schemageneratetemporarymodelversioncredential)|false|none|
|» catalog_name|body|string|true|Catalog name for which temporary credentials are generated. <br>Can be obtained from models/{full_name} (get model info) API.<br>|
|» schema_name|body|string|true|Schema name for which temporary credentials are generated. <br>Can be obtained from models/{full_name} (get model info) API.<br>|
|» model_name|body|string|true|Model name for which temporary credentials are generated. <br>Can be obtained from models/{full_name} (get model info) API.<br>|
|» version|body|integer(int64)|true|Model version for which temporary credentials are generated.<br>|
|» operation|body|[ModelVersionOperation](#schemamodelversionoperation)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operation|UNKNOWN_MODEL_VERSION_OPERATION|
|» operation|READ_MODEL_VERSION|
|» operation|READ_WRITE_MODEL_VERSION|

> Example responses

> 200 Response

```json
{
  "aws_temp_credentials": {
    "access_key_id": "string",
    "secret_access_key": "string",
    "session_token": "string",
    "s3_endpoint": "string",
    "s3_region": "string"
  },
  "azure_user_delegation_sas": {
    "sas_token": "string"
  },
  "gcp_oauth_token": {
    "oauth_token": "string"
  },
  "expiration_time": 0,
  "url": "string"
}
```

<h3 id="generate-temporary-model-version-credentials-these-credentials-are-used-by-clients-to-write-and-retrieve-model-artifacts-from-the-model-versions-external-storage-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TemporaryCredentials](#schematemporarycredentials)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate temporary table credentials.

<a id="opIdgenerateTemporaryTableCredentials"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/temporary-table-credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table_id": "table_id",
    "operation": null
  }'
```

`POST /temporary-table-credentials`

> Body parameter

```json
{
  "table_id": "table_id",
  "operation": null
}
```

<h3 id="generate-temporary-table-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateTemporaryTableCredential](#schemageneratetemporarytablecredential)|false|none|
|» table_id|body|string|true|Table id for which temporary credentials are generated. <br>Can be obtained from tables/{full_name} (get table info) API.<br>|
|» operation|body|[TableOperation](#schematableoperation)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operation|UNKNOWN_TABLE_OPERATION|
|» operation|READ|
|» operation|READ_WRITE|

> Example responses

> 200 Response

```json
{
  "aws_temp_credentials": {
    "access_key_id": "string",
    "secret_access_key": "string",
    "session_token": "string",
    "s3_endpoint": "string",
    "s3_region": "string"
  },
  "azure_user_delegation_sas": {
    "sas_token": "string"
  },
  "gcp_oauth_token": {
    "oauth_token": "string"
  },
  "expiration_time": 0,
  "url": "string"
}
```

<h3 id="generate-temporary-table-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TemporaryCredentials](#schematemporarycredentials)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate temporary volume credentials.

<a id="opIdgenerateTemporaryVolumeCredentials"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/temporary-volume-credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "volume_id": "string",
    "operation": "UNKNOWN_VOLUME_OPERATION"
  }'
```

`POST /temporary-volume-credentials`

> Body parameter

```json
{
  "volume_id": "string",
  "operation": "UNKNOWN_VOLUME_OPERATION"
}
```

<h3 id="generate-temporary-volume-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateTemporaryVolumeCredential](#schemageneratetemporaryvolumecredential)|false|none|
|» volume_id|body|string|true|Volume id for which temporary credentials are generated. <br>Can be obtained from volumes/{full_name} (get volume info) API.<br>|
|» operation|body|[VolumeOperation](#schemavolumeoperation)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operation|UNKNOWN_VOLUME_OPERATION|
|» operation|READ_VOLUME|
|» operation|WRITE_VOLUME|

> Example responses

> 200 Response

```json
{
  "aws_temp_credentials": {
    "access_key_id": "string",
    "secret_access_key": "string",
    "session_token": "string",
    "s3_endpoint": "string",
    "s3_region": "string"
  },
  "azure_user_delegation_sas": {
    "sas_token": "string"
  },
  "gcp_oauth_token": {
    "oauth_token": "string"
  },
  "expiration_time": 0,
  "url": "string"
}
```

<h3 id="generate-temporary-volume-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TemporaryCredentials](#schematemporarycredentials)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate temporary path credentials.

<a id="opIdgenerateTemporaryPathCredentials"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/temporary-path-credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "string",
    "operation": "UNKNOWN_PATH_OPERATION"
  }'
```

`POST /temporary-path-credentials`

> Body parameter

```json
{
  "url": "string",
  "operation": "UNKNOWN_PATH_OPERATION"
}
```

<h3 id="generate-temporary-path-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateTemporaryPathCredential](#schemageneratetemporarypathcredential)|false|none|
|» url|body|string|true|The URL of the storage path for which temporary credentials need to be generated.|
|» operation|body|[PathOperation](#schemapathoperation)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operation|UNKNOWN_PATH_OPERATION|
|» operation|PATH_READ|
|» operation|PATH_READ_WRITE|
|» operation|PATH_CREATE_TABLE|

> Example responses

> 200 Response

```json
{
  "aws_temp_credentials": {
    "access_key_id": "string",
    "secret_access_key": "string",
    "session_token": "string",
    "s3_endpoint": "string",
    "s3_region": "string"
  },
  "azure_user_delegation_sas": {
    "sas_token": "string"
  },
  "gcp_oauth_token": {
    "oauth_token": "string"
  },
  "expiration_time": 0,
  "url": "string"
}
```

<h3 id="generate-temporary-path-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TemporaryCredentials](#schematemporarycredentials)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-metastores">Metastores</h1>

A metastore is the top-level container of objects in Unity Catalog that stores all UC assets.


## Get metastore summary

<a id="opIdsummary"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/metastore_summary \
  -H 'Accept: application/json'
```

`GET /metastore_summary`

Gets information about the metastore hosted by this Unity Catalog service (currently the service hosts only one metastore)


> Example responses

> 200 Response

```json
{
  "metastore_id": "string"
}
```

<h3 id="get-metastore-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The metastore summary was successfully retrieved.|[GetMetastoreSummaryResponse](#schemagetmetastoresummaryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-deltacommits">DeltaCommits</h1>

"Delta commits" is a Delta tables feature that allows Delta tables to designate a coordinator to coordinate commits. This is Unity Catalog's API to allow Unity Catalog be the commit coordinator for managed tables. (See https://github.com/delta-io/delta/blob/master/protocol_rfcs/catalog-managed.md for more details)


## List unbackfilled Delta table commits. WARNING: This API is experimental and may change in future versions.

<a id="opIdgetCommits"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/delta/preview/commits \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table_id": "string",
    "table_uri": "string",
    "start_version": 0,
    "end_version": 0
  }'
```

`GET /delta/preview/commits`

List all the unbackfilled Delta commits that are currently being tracked by the UC coordinator.
If no commits are being tracked in the specific version range (from start_version to an optional end_version),
it will return an empty list.
WARNING: This API is experimental and may change in future versions.


> Body parameter

```json
{
  "table_id": "string",
  "table_uri": "string",
  "start_version": 0,
  "end_version": 0
}
```

<h3 id="list-unbackfilled-delta-table-commits-warning-this-api-is-experimental-and-may-change-in-future-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeltaGetCommits](#schemadeltagetcommits)|false|none|
|» table_id|body|string|true|The ID of the table to get the commits for. This ID uniquely identifies a table.|
|» table_uri|body|string|true|The URI of the storage location of the table. If the table_id exists but the table_uri is <br>different from the one previously registered (e.g., if the client moved the table), the request will fail.<br>Example: s3://bucket-name/tables/some-table-id<br>|
|» start_version|body|integer(int64)|true|The start version from which to retrieve commits (inclusive). This along with the<br>optional end_version specifies the range of commit versions that this request wants.<br>|
|» end_version|body|integer(int64)|false|The end version upto which to retrieve commits (inclusive).<br>If not set, the latest version will be used as the end version. This does not affect the<br>latest_table_version in the response.<br>If num of commits that meet this criteria is larger than a limit set by server config,<br>the response will be limited to the first X commits. Call can send request again with a<br>larger start_version according to the response to get the remaining commits.<br>|

> Example responses

> 200 Response

```json
{
  "commits": [
    {
      "version": 0,
      "timestamp": 0,
      "file_name": "string",
      "file_size": 0,
      "file_modification_timestamp": 0
    }
  ],
  "latest_table_version": 0
}
```

<h3 id="list-unbackfilled-delta-table-commits-warning-this-api-is-experimental-and-may-change-in-future-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeltaGetCommitsResponse](#schemadeltagetcommitsresponse)|
|400|Bad Request|Bad request or Invalid Argument. Example: table_uri in the request doesn't match the existing table_uri for the table.<br>|None|
|401|Unauthorized|Unauthorized. Authentication credentials are missing or incorrect.|None|
|403|Forbidden|Forbidden. The user does not have the necessary permissions to perform this action.|None|
|404|Not Found|Not Found. The specified table does not exist.|None|
|500|Internal Server Error|Internal Server Error. An unexpected error occurred on the server.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Commit changes to a specified Delta table. The server has a limit defined in config on how many unbackfilled commits it can hold. Clients are expected to do active backfill of the commit after committing to UC. So in most cases the number of unbackfilled commits should be close to zero or one. But if clients misbehave and unbackfilled commits accumulate beyond the limit, server will reject further commits until more backfill is done. Replaying an already-accepted commit (same version and file-name) is an idempotent no-op that returns 200, so a client that lost the response can safely resend. WARNING: This API is experimental and may change in future versions.

<a id="opIdcommit"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/delta/preview/commits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "table_id": "string",
    "table_uri": "string",
    "commit_info": {
      "version": 0,
      "timestamp": 0,
      "file_name": "string",
      "file_size": 0,
      "file_modification_timestamp": 0
    },
    "latest_backfilled_version": 0,
    "metadata": {
      "description": "string",
      "schema": {
        "columns": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "comment": "string",
            "nullable": "true",
            "partition_index": 0
          }
        ]
      },
      "properties": {
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "uniform": {
      "iceberg": {
        "metadata_location": "http://example.com",
        "converted_delta_version": 0,
        "converted_delta_timestamp": "string",
        "base_converted_delta_version": 0
      }
    }
  }'
```

`POST /delta/preview/commits`

> Body parameter

```json
{
  "table_id": "string",
  "table_uri": "string",
  "commit_info": {
    "version": 0,
    "timestamp": 0,
    "file_name": "string",
    "file_size": 0,
    "file_modification_timestamp": 0
  },
  "latest_backfilled_version": 0,
  "metadata": {
    "description": "string",
    "schema": {
      "columns": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "comment": "string",
          "nullable": "true",
          "partition_index": 0
        }
      ]
    },
    "properties": {
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "uniform": {
    "iceberg": {
      "metadata_location": "http://example.com",
      "converted_delta_version": 0,
      "converted_delta_timestamp": "string",
      "base_converted_delta_version": 0
    }
  }
}
```

<h3 id="commit-changes-to-a-specified-delta-table-the-server-has-a-limit-defined-in-config-on-how-many-unbackfilled-commits-it-can-hold-clients-are-expected-to-do-active-backfill-of-the-commit-after-committing-to-uc-so-in-most-cases-the-number-of-unbackfilled-commits-should-be-close-to-zero-or-one-but-if-clients-misbehave-and-unbackfilled-commits-accumulate-beyond-the-limit-server-will-reject-further-commits-until-more-backfill-is-done-replaying-an-already-accepted-commit-same-version-and-file-name-is-an-idempotent-no-op-that-returns-200-so-a-client-that-lost-the-response-can-safely-resend-warning-this-api-is-experimental-and-may-change-in-future-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeltaCommit](#schemadeltacommit)|true|none|
|» table_id|body|string|true|The ID of the table to commit to. This ID uniquely identifies a table.|
|» table_uri|body|string|true|The URI of the storage location of the table. If the table_id exists but the table_uri is <br>different from the one previously registered (e.g., if the client moved the table), the request will fail.<br>Example: s3://bucket-name/tables/some-table-id<br>|
|» commit_info|body|[DeltaCommitInfo](#schemadeltacommitinfo)|false|Represents a Delta commit version.|
|» latest_backfilled_version|body|integer(int64)|false|The highest version of the commits that have been backfilled for this table; meaning UC no longer <br>needs to keep track of commits of versions <= this version.<br>|
|» metadata|body|[DeltaMetadata](#schemadeltametadata)|false|Represents a Delta metadata action (see https://github.com/delta-io/delta/blob/master/PROTOCOL.md#change-metadata for more information).|
|» uniform|body|[DeltaUniform](#schemadeltauniform)|false|Optional UniForm metadata to be committed alongside this Delta commit. Whether this field is<br>strictly required by a UC API compatible implementation is left up to the implementation.<br>It is set by UniForm conversion processes after converting a Delta commit. When set, <br>UC will atomically update the table's format-specific metadata (e.g. DeltaUniformIceberg),<br>keeping the conversion state synchronized with the Delta version.<br>Uniform enables Delta tables to be read by other table formats (e.g., Iceberg) without data conversion.<br>Independent of the `metadata` field, both can be provided together or separately.<br>|

> Example responses

> 200 Response

```json
{}
```

<h3 id="commit-changes-to-a-specified-delta-table-the-server-has-a-limit-defined-in-config-on-how-many-unbackfilled-commits-it-can-hold-clients-are-expected-to-do-active-backfill-of-the-commit-after-committing-to-uc-so-in-most-cases-the-number-of-unbackfilled-commits-should-be-close-to-zero-or-one-but-if-clients-misbehave-and-unbackfilled-commits-accumulate-beyond-the-limit-server-will-reject-further-commits-until-more-backfill-is-done-replaying-an-already-accepted-commit-same-version-and-file-name-is-an-idempotent-no-op-that-returns-200-so-a-client-that-lost-the-response-can-safely-resend-warning-this-api-is-experimental-and-may-change-in-future-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeltaCommitResponse](#schemadeltacommitresponse)|
|400|Bad Request|Bad request or Invalid Argument. Example: Commit version is not expected (e.g., latest_table_version +1) <br>or Latest backfilled version exceeds the last commit version or table_uri in the request doesn't match the <br>existing table_uri for the table.<br>|None|
|401|Unauthorized|Unauthorized. Authentication credentials are missing or incorrect.|None|
|403|Forbidden|Forbidden. The user does not have the necessary permissions to perform this action.|None|
|404|Not Found|Not Found. The specified table does not exist.|None|
|409|Conflict|Conflict. Indicates that a different commit with the same version already exists.|None|
|429|Too Many Requests|The maximum number of unbackfilled commits per table has been reached. Please backfill some commits before retrying.|None|
|500|Internal Server Error|Internal Server Error. An unexpected error occurred on the server.|None|
|501|Not Implemented|Not Implemented. The requested functionality is not supported.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-grants">Grants</h1>

## Get permissions

<a id="opIdget"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/permissions/metastore/string \
  -H 'Accept: application/json'
```

`GET /permissions/{securable_type}/{full_name}`

Gets the permissions for a securable.


<h3 id="get-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|principal|query|string|false|If provided, only the permissions for the specified principal (user or group) are returned.<br>|
|securable_type|path|[SecurableType](#schemasecurabletype)|true|Type of securable.|
|full_name|path|string|true|Full name of securable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|securable_type|metastore|
|securable_type|catalog|
|securable_type|schema|
|securable_type|table|
|securable_type|function|
|securable_type|volume|
|securable_type|registered_model|
|securable_type|external_location|
|securable_type|credential|

> Example responses

> 200 Response

```json
{
  "privilege_assignments": [
    {
      "principal": "string",
      "privileges": [
        "CREATE CATALOG"
      ]
    }
  ]
}
```

<h3 id="get-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The permissions list for securable was successfully retrieved.|[PermissionsList](#schemapermissionslist)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a permission

<a id="opIdupdate"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/permissions/metastore/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "changes": [
      {
        "principal": "string",
        "add": [
          "CREATE CATALOG"
        ],
        "remove": [
          "CREATE CATALOG"
        ]
      }
    ]
  }'
```

`PATCH /permissions/{securable_type}/{full_name}`

Updates the permissions for a securable.


> Body parameter

```json
{
  "changes": [
    {
      "principal": "string",
      "add": [
        "CREATE CATALOG"
      ],
      "remove": [
        "CREATE CATALOG"
      ]
    }
  ]
}
```

<h3 id="update-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|securable_type|path|[SecurableType](#schemasecurabletype)|true|Type of securable.|
|full_name|path|string|true|Full name of securable.|
|body|body|[UpdatePermissions](#schemaupdatepermissions)|false|none|
|» changes|body|[[PermissionsChange](#schemapermissionschange)]|true|Array of permissions change objects.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|securable_type|metastore|
|securable_type|catalog|
|securable_type|schema|
|securable_type|table|
|securable_type|function|
|securable_type|volume|
|securable_type|registered_model|
|securable_type|external_location|
|securable_type|credential|

> Example responses

> 200 Response

```json
{
  "privilege_assignments": [
    {
      "principal": "string",
      "privileges": [
        "CREATE CATALOG"
      ]
    }
  ]
}
```

<h3 id="update-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The permissions list for securable was successfully updated.|[PermissionsList](#schemapermissionslist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-credentials">Credentials</h1>

## List credentials

<a id="opIdlistCredentials"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/credentials \
  -H 'Accept: application/json'
```

`GET /credentials`

Gets an array of credentials (as __CredentialInfo__ objects).
The array is limited to only those credentials the caller has permission to access.
If the caller is a metastore admin, retrieval of credentials is unrestricted.
There is no guarantee of a specific ordering of the elements in the array.


<h3 id="list-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_results|query|integer(int32)|false|Maximum number of credentials to return.<br>  - If not set, the default max page size is used.<br>  - When set to a value greater than 0, the page length is the minimum of<br>    this value and a server-configured value.<br>  - When set to 0, the page length is set to a server-configured value<br>    (recommended).<br>  - When set to a value less than 0, an invalid parameter error is<br>    returned.<br>|
|page_token|query|string|false|Opaque pagination token to go to next page based on previous query.|
|purpose|query|[CredentialPurpose](#schemacredentialpurpose)|false|Return only credentials for the specified purpose.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|purpose|STORAGE|

> Example responses

> 200 Response

```json
{
  "credentials": [
    {
      "name": "string",
      "aws_iam_role": {
        "role_arn": "string",
        "unity_catalog_iam_arn": "string",
        "external_id": "string"
      },
      "s3_compatible": {
        "s3_endpoint": "string",
        "access_key_id": "string",
        "assume_role": {
          "sts_endpoint": "string",
          "role_arn": "string",
          "sts_region": "string"
        }
      },
      "comment": "string",
      "owner": "string",
      "full_name": "string",
      "id": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "purpose": "STORAGE"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The credentials list was successfully retrieved.|[ListCredentialsResponse](#schemalistcredentialsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a credential

<a id="opIdcreateCredential"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "comment": "string",
    "aws_iam_role": {
      "role_arn": "string"
    },
    "s3_compatible": {
      "s3_endpoint": "string",
      "access_key_id": "string",
      "secret_access_key": "string",
      "assume_role": {
        "sts_endpoint": "string",
        "role_arn": "string",
        "sts_region": "string"
      }
    },
    "purpose": "STORAGE"
  }'
```

`POST /credentials`

Creates a new credential. The type of credential to be created is determined by the **purpose** field.
Set exactly one of `aws_iam_role` and `s3_compatible`; otherwise the request fails with
`INVALID_ARGUMENT`.

EXPERIMENTAL: `s3_compatible` is available only when the server property
`server.s3-compatible-storage.enabled` is `true`. Otherwise a create or update request that
sets `s3_compatible`, and vending for a path under one, fail with `INVALID_ARGUMENT`; other
updates, reads, lists and deletes of existing ones still work. An `s3_compatible`
credential holds an access key pair of S3-compatible storage and the storage's S3 endpoint.
`s3_endpoint` and `assume_role.sts_endpoint` are http or https URLs with a host, and
without user info, a query or a fragment; other values fail with `INVALID_ARGUMENT`. With
`assume_role`, the key pair signs AssumeRole on the storage's STS, and Unity Catalog vends
short-lived credentials scoped to the requested path and privilege. Without it, the server
property `server.s3-compatible-storage.static-key-vending` decides what clients receive:

* `endpoint-only` (default): the S3 endpoint and region, but no keys; engines bring their
  own.
* `static-key`: the key pair itself. It is not scoped to the requested path or privilege,
  and changing Unity Catalog permissions does not revoke a key pair already vended.

Vends with keys (`assume_role` sessions and `static-key` key pairs) suit only servers whose
clients all read `s3_endpoint`: a client that does not would send the keys to AWS S3.
Without `assume_role`, in both modes the vended `expiration_time` is a refetch time an hour
ahead, not when the keys expire, and the Iceberg REST table config of a `static-key` vend
carries no expiration. A running client need not fetch again then; the UC Hadoop connector
picks up a changed endpoint on its first table load after `expiration_time`. The external
locations of an `s3_compatible` credential must be `s3://` paths. Paths stay
`s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential of the
external location covering it, so one bucket name can be on several storage systems under
different, non-overlapping locations.

> Body parameter

```json
{
  "name": "string",
  "comment": "string",
  "aws_iam_role": {
    "role_arn": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "secret_access_key": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "purpose": "STORAGE"
}
```

<h3 id="create-a-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCredentialRequest](#schemacreatecredentialrequest)|false|none|
|» name|body|string|true|The credential name. The name must be unique within the metastore.|
|» comment|body|string|false|Comment associated with the credential.|
|» aws_iam_role|body|[AwsIamRoleRequest](#schemaawsiamrolerequest)|false|none|
|» s3_compatible|body|[S3CompatibleRequest](#schemas3compatiblerequest)|false|EXPERIMENTAL. Available only when the server property `server.s3-compatible-storage.enabled`<br>is `true`; otherwise a create or update request that sets one, and vending for paths under<br>one, fail with `INVALID_ARGUMENT`. Access key pair of S3-compatible storage, and the<br>storage's S3 endpoint. With `assume_role`, the key pair signs AssumeRole on the storage's<br>STS, and Unity Catalog vends the resulting short-lived credentials scoped to the requested<br>path and privilege. Without `assume_role`, the key pair is the only identity, and the<br>server property `server.s3-compatible-storage.static-key-vending` decides what clients<br>receive:<br> * `endpoint-only` (default): the S3 endpoint and region, but no keys. The server uses the<br>   key pair for its own storage access; engines bring their own keys. Its<br>   `expiration_time`, an hour ahead, tells engines when they may fetch again, to pick up a<br>   changed endpoint; one that does not, such as the UC Hadoop connector, picks it up on<br>   its first table load after that time.<br> * `static-key`: the key pair itself. Its `expiration_time`, an hour ahead, only<br>   tells engines when to fetch credentials again, so that they pick up an updated key pair:<br>   the key pair stays valid until the storage rotates or revokes it, and changing Unity<br>   Catalog permissions does not revoke a key pair already vended. The storage applies the<br>   key pair's own permissions rather than the requested path and privilege. The Iceberg REST<br>   table config carries no expiration, so Iceberg clients keep the key pair until they<br>   load the table again.<br>Paths stay `s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential<br>of the external location covering it. External locations cannot overlap, so each path has<br>one storage, and one bucket name can be on several storage systems under different<br>locations. An update replaces the whole object (see `updateCredential`); changing the<br>endpoint moves every path under the credential's locations, for example to the storage's new<br>host name.<br>|
|» purpose|body|[CredentialPurpose](#schemacredentialpurpose)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» purpose|STORAGE|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "aws_iam_role": {
    "role_arn": "string",
    "unity_catalog_iam_arn": "string",
    "external_id": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "comment": "string",
  "owner": "string",
  "full_name": "string",
  "id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "purpose": "STORAGE"
}
```

<h3 id="create-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new credential was successfully created.|[CredentialInfo](#schemacredentialinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a credential

<a id="opIdgetCredential"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/credentials/string \
  -H 'Accept: application/json'
```

`GET /credentials/{name}`

Gets a credential from the metastore.
The caller must be a metastore admin, the owner of the credential, or have some permission on the credential.


<h3 id="get-a-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the credential.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "aws_iam_role": {
    "role_arn": "string",
    "unity_catalog_iam_arn": "string",
    "external_id": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "comment": "string",
  "owner": "string",
  "full_name": "string",
  "id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "purpose": "STORAGE"
}
```

<h3 id="get-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The credential was successfully retrieved.|[CredentialInfo](#schemacredentialinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a credential

<a id="opIddeleteCredential"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/credentials/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /credentials/{name}`

Deletes a credential from the metastore.
The caller must be a metastore admin, the credential owner,
or have MANAGE on the credential.

<h3 id="delete-a-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Force deletion even if there are dependent external locations. The dependent external locations are kept, and they have no credential until they are updated with a new credential_name.|
|name|path|string|true|Name of the credential.|

> Example responses

> 200 Response

```json
null
```

<h3 id="delete-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The credential was successfully deleted.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a credential

<a id="opIdupdateCredential"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/credentials/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comment": "string",
    "owner": "string",
    "aws_iam_role": {
      "role_arn": "string"
    },
    "s3_compatible": {
      "s3_endpoint": "string",
      "access_key_id": "string",
      "secret_access_key": "string",
      "assume_role": {
        "sts_endpoint": "string",
        "role_arn": "string",
        "sts_region": "string"
      }
    },
    "new_name": "string"
  }'
```

`PATCH /credentials/{name}`

Updates a credential.
The caller must be a metastore admin, the credential owner,
or have MANAGE on the credential.
Set at most one of `aws_iam_role` and `s3_compatible`; setting both fails with
`INVALID_ARGUMENT`. Either one replaces the stored credential as a whole, with no field-level
merge, and can change its type: an `s3_compatible` update carries `secret_access_key` again,
and leaving out `assume_role` removes it. Updates without either, such as of the name or
comment, keep the stored credential.

EXPERIMENTAL: whoever may update a credential is trusted with where the data under it lives.
Changing `s3_endpoint` of an `s3_compatible` credential moves data access for every path
under its external locations, including tables and volumes other principals own, to the new
host; changing `sts_endpoint` moves where their credentials are issued. The server itself
connects to both endpoints. An `s3_compatible` credential has only `s3://` external
locations: setting `s3_compatible` while a location outside `s3://` uses the credential,
or creating or updating such a location to use it, fails with `INVALID_ARGUMENT`.

> Body parameter

```json
{
  "comment": "string",
  "owner": "string",
  "aws_iam_role": {
    "role_arn": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "secret_access_key": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "new_name": "string"
}
```

<h3 id="update-a-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the credential.|
|body|body|[UpdateCredentialRequest](#schemaupdatecredentialrequest)|false|none|
|» comment|body|string|false|Comment associated with the credential.|
|» owner|body|string|false|Username of the new owner. The user must already exist.|
|» aws_iam_role|body|[AwsIamRoleRequest](#schemaawsiamrolerequest)|false|none|
|» s3_compatible|body|[S3CompatibleRequest](#schemas3compatiblerequest)|false|EXPERIMENTAL. Available only when the server property `server.s3-compatible-storage.enabled`<br>is `true`; otherwise a create or update request that sets one, and vending for paths under<br>one, fail with `INVALID_ARGUMENT`. Access key pair of S3-compatible storage, and the<br>storage's S3 endpoint. With `assume_role`, the key pair signs AssumeRole on the storage's<br>STS, and Unity Catalog vends the resulting short-lived credentials scoped to the requested<br>path and privilege. Without `assume_role`, the key pair is the only identity, and the<br>server property `server.s3-compatible-storage.static-key-vending` decides what clients<br>receive:<br> * `endpoint-only` (default): the S3 endpoint and region, but no keys. The server uses the<br>   key pair for its own storage access; engines bring their own keys. Its<br>   `expiration_time`, an hour ahead, tells engines when they may fetch again, to pick up a<br>   changed endpoint; one that does not, such as the UC Hadoop connector, picks it up on<br>   its first table load after that time.<br> * `static-key`: the key pair itself. Its `expiration_time`, an hour ahead, only<br>   tells engines when to fetch credentials again, so that they pick up an updated key pair:<br>   the key pair stays valid until the storage rotates or revokes it, and changing Unity<br>   Catalog permissions does not revoke a key pair already vended. The storage applies the<br>   key pair's own permissions rather than the requested path and privilege. The Iceberg REST<br>   table config carries no expiration, so Iceberg clients keep the key pair until they<br>   load the table again.<br>Paths stay `s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential<br>of the external location covering it. External locations cannot overlap, so each path has<br>one storage, and one bucket name can be on several storage systems under different<br>locations. An update replaces the whole object (see `updateCredential`); changing the<br>endpoint moves every path under the credential's locations, for example to the storage's new<br>host name.<br>|
|» new_name|body|string|false|New name for the credential.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "aws_iam_role": {
    "role_arn": "string",
    "unity_catalog_iam_arn": "string",
    "external_id": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "comment": "string",
  "owner": "string",
  "full_name": "string",
  "id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "purpose": "STORAGE"
}
```

<h3 id="update-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The credential was successfully updated.|[CredentialInfo](#schemacredentialinfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="unity-catalog-api-external-locations">External Locations</h1>

## List external locations

<a id="opIdlistExternalLocations"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/external-locations \
  -H 'Accept: application/json'
```

`GET /external-locations`

Gets an array of external locations (ExternalLocationInfo objects) from the metastore. The caller must be a metastore admin, the owner of the external location, or a user with some privilege on the external location.
Locations visible only through BROWSE are included only with include_browse=true
and return discovery metadata with browse_only=true.


<h3 id="list-external-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_results|query|integer(int32)|false|Maximum number of external locations to return. If not set, all external locations are returned.<br>|
|page_token|query|string|false|Opaque pagination token to go to the next page.|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|

> Example responses

> 200 Response

```json
{
  "external_locations": [
    {
      "browse_only": true,
      "name": "string",
      "id": "string",
      "url": "string",
      "credential_name": "string",
      "comment": "string",
      "owner": "string",
      "credential_id": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string"
    }
  ],
  "next_page_token": "string"
}
```

<h3 id="list-external-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The external location list was successfully retrieved.|[ListExternalLocationsResponse](#schemalistexternallocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an external location

<a id="opIdcreateExternalLocation"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/external-locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "url": "string",
    "credential_name": "string",
    "comment": "string"
  }'
```

`POST /external-locations`

Creates a new external location entry in the metastore. The caller must be a metastore admin to be able to create external locations.
EXPERIMENTAL: a location whose credential is `s3_compatible` must have an `s3://` URL;
otherwise the request fails with `INVALID_ARGUMENT`.


> Body parameter

```json
{
  "name": "string",
  "url": "string",
  "credential_name": "string",
  "comment": "string"
}
```

<h3 id="create-an-external-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateExternalLocation](#schemacreateexternallocation)|true|none|
|» name|body|string|true|Name of the external location.|
|» url|body|string|true|Path URL of the external location.|
|» credential_name|body|string|true|Name of the storage credential used with this location.|
|» comment|body|string|false|User-provided free-form text description.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "id": "string",
  "url": "string",
  "credential_name": "string",
  "comment": "string",
  "owner": "string",
  "credential_id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string"
}
```

<h3 id="create-an-external-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new external location was successfully created.|[ExternalLocationInfo](#schemaexternallocationinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an external location

<a id="opIdgetExternalLocation"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/external-locations/string \
  -H 'Accept: application/json'
```

`GET /external-locations/{name}`

Gets an external location from the metastore. The caller must be a metastore admin, the owner of the external location, or a user with some privilege on the external location.
A BROWSE grant alone requires include_browse=true and returns discovery metadata
with browse_only=true.


<h3 id="get-an-external-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_browse|query|boolean|false|Include discovery metadata for objects visible through BROWSE when ordinary access fails.<br>Such objects have browse_only=true. Ordinary access returns full metadata.<br>|
|name|path|string|true|Name of the external location.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "id": "string",
  "url": "string",
  "credential_name": "string",
  "comment": "string",
  "owner": "string",
  "credential_id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string"
}
```

<h3 id="get-an-external-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The external location was successfully retrieved.|[ExternalLocationInfo](#schemaexternallocationinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an external location

<a id="opIddeleteExternalLocation"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/external-locations/string \
  -X DELETE
```

`DELETE /external-locations/{name}`

Deletes the specified external location from the metastore.
The caller must be a metastore admin, the external location owner,
or have MANAGE on the external location.
Unless force is true, the deletion fails while the location is in use: a table, volume
or registered model is stored under it, a catalog or schema keeps its managed storage
under it, or a storage cleanup is pending there.

<h3 id="delete-an-external-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Force deletion even if the external location is in use.|
|name|path|string|true|Name of the external location.|

<h3 id="delete-an-external-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The external location was successfully deleted.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an external location

<a id="opIdupdateExternalLocation"></a>

> Code samples

```bash
curl http://localhost:8080/api/2.1/unity-catalog/external-locations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "string",
    "credential_name": "string",
    "comment": "string",
    "owner": "string",
    "new_name": "string",
    "force": true
  }'
```

`PATCH /external-locations/{name}`

Updates an external location in the metastore.
The caller must be a metastore admin, the external location owner,
or have MANAGE on the external location.
Unless force is true, changing the url fails if the location is in use (as described for
deleting it), unless the new url is the same as, or a parent of, the old one.
EXPERIMENTAL: a location whose credential is `s3_compatible` must have an `s3://` URL;
otherwise the request fails with `INVALID_ARGUMENT`.

> Body parameter

```json
{
  "url": "string",
  "credential_name": "string",
  "comment": "string",
  "owner": "string",
  "new_name": "string",
  "force": true
}
```

<h3 id="update-an-external-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the external location.|
|body|body|[UpdateExternalLocation](#schemaupdateexternallocation)|true|none|
|» url|body|string|false|Path URL of the external location.|
|» credential_name|body|string|false|Name of the storage credential used with this location. Setting it on an external location whose credential was force-deleted repairs the location.|
|» comment|body|string|false|User-provided free-form text description.|
|» owner|body|string|false|Username of the new owner. The user must already exist.|
|» new_name|body|string|false|New name for the external location.|
|» force|body|boolean|false|Force the url change even if the external location is in use.|

> Example responses

> 200 Response

```json
{
  "browse_only": true,
  "name": "string",
  "id": "string",
  "url": "string",
  "credential_name": "string",
  "comment": "string",
  "owner": "string",
  "credential_id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string"
}
```

<h3 id="update-an-external-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The external location was successfully updated.|[ExternalLocationInfo](#schemaexternallocationinfo)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_SecurablePropertiesMap">SecurablePropertiesMap</h2>
<!-- backwards compatibility -->
<a id="schemasecurablepropertiesmap"></a>
<a id="schema_SecurablePropertiesMap"></a>
<a id="tocSsecurablepropertiesmap"></a>
<a id="tocssecurablepropertiesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A map of key-value properties attached to the securable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"MANAGED"
```

The type of the volume

<h2 id="tocS_CreateVolumeRequestContent">CreateVolumeRequestContent</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolumerequestcontent"></a>
<a id="schema_CreateVolumeRequestContent"></a>
<a id="tocScreatevolumerequestcontent"></a>
<a id="tocscreatevolumerequestcontent"></a>

```json
{
  "catalog_name": "string",
  "schema_name": "string",
  "name": "string",
  "volume_type": "MANAGED",
  "comment": "string",
  "storage_location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalog_name|string|true|none|The name of the catalog where the schema and the volume are|
|schema_name|string|true|none|The name of the schema where the volume is|
|name|string|true|none|The name of the volume|
|volume_type|[VolumeType](#schemavolumetype)|true|none|The type of the volume|
|comment|string|false|none|The comment attached to the volume|
|storage_location|string|false|none|The storage location of the volume|

#### Enumerated Values

|Property|Value|
|---|---|
|volume_type|MANAGED|
|volume_type|EXTERNAL|

<h2 id="tocS_ListVolumesResponseContent">ListVolumesResponseContent</h2>
<!-- backwards compatibility -->
<a id="schemalistvolumesresponsecontent"></a>
<a id="schema_ListVolumesResponseContent"></a>
<a id="tocSlistvolumesresponsecontent"></a>
<a id="tocslistvolumesresponsecontent"></a>

```json
{
  "volumes": [
    {
      "browse_only": true,
      "catalog_name": "string",
      "schema_name": "string",
      "name": "string",
      "comment": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "volume_id": "string",
      "volume_type": "MANAGED",
      "storage_location": "string",
      "full_name": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumes|[[VolumeInfo](#schemavolumeinfo)]|false|none|none|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request to retrieve the next page of results.<br>|

<h2 id="tocS_UpdateVolumeRequestContent">UpdateVolumeRequestContent</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevolumerequestcontent"></a>
<a id="schema_UpdateVolumeRequestContent"></a>
<a id="tocSupdatevolumerequestcontent"></a>
<a id="tocsupdatevolumerequestcontent"></a>

```json
{
  "owner": "string",
  "comment": "string",
  "new_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|false|none|Username of the new owner. The user must already exist.|
|comment|string|false|none|The comment attached to the volume|
|new_name|string|false|none|New name for the volume.|

<h2 id="tocS_VolumeInfo">VolumeInfo</h2>
<!-- backwards compatibility -->
<a id="schemavolumeinfo"></a>
<a id="schema_VolumeInfo"></a>
<a id="tocSvolumeinfo"></a>
<a id="tocsvolumeinfo"></a>

```json
{
  "browse_only": true,
  "catalog_name": "string",
  "schema_name": "string",
  "name": "string",
  "comment": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "volume_id": "string",
  "volume_type": "MANAGED",
  "storage_location": "string",
  "full_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|catalog_name|string|false|none|The name of the catalog where the schema and the volume are|
|schema_name|string|false|none|The name of the schema where the volume is|
|name|string|false|none|The name of the volume|
|comment|string|false|none|The comment attached to the volume|
|owner|string|false|none|The identifier of the user who owns the volume|
|created_at|integer(int64)|false|none|Time at which this volume was created, in epoch milliseconds.|
|created_by|string|false|none|TThe identifier of the user who created the volume|
|updated_at|integer(int64)|false|none|Time at which this volume was last modified, in epoch milliseconds.|
|updated_by|string|false|none|The identifier of the user who updated the volume last time|
|volume_id|string|false|none|Unique identifier of the volume|
|volume_type|[VolumeType](#schemavolumetype)|false|none|The type of the volume|
|storage_location|string|false|none|The storage location of the volume|
|full_name|string|false|none|Full name of volume, in form of __catalog_name__.__schema_name__.__volume_name__.|

#### Enumerated Values

|Property|Value|
|---|---|
|volume_type|MANAGED|
|volume_type|EXTERNAL|

<h2 id="tocS_ColumnTypeName">ColumnTypeName</h2>
<!-- backwards compatibility -->
<a id="schemacolumntypename"></a>
<a id="schema_ColumnTypeName"></a>
<a id="tocScolumntypename"></a>
<a id="tocscolumntypename"></a>

```json
"BOOLEAN"
```

Name of type (INT, STRUCT, MAP, etc.).

<h2 id="tocS_ColumnInfo">ColumnInfo</h2>
<!-- backwards compatibility -->
<a id="schemacolumninfo"></a>
<a id="schema_ColumnInfo"></a>
<a id="tocScolumninfo"></a>
<a id="tocscolumninfo"></a>

```json
{
  "name": "string",
  "type_text": "string",
  "type_json": "string",
  "type_name": "BOOLEAN",
  "type_precision": 0,
  "type_scale": 0,
  "type_interval_type": "string",
  "position": 0,
  "comment": "string",
  "nullable": "true",
  "partition_index": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of Column.|
|type_text|string|false|none|Full data type specification as SQL/catalogString text.|
|type_json|string|false|none|Full data type specification, JSON-serialized.|
|type_name|[ColumnTypeName](#schemacolumntypename)|false|none|Name of type (INT, STRUCT, MAP, etc.).|
|type_precision|integer(int32)|false|none|Digits of precision; required for DecimalTypes.|
|type_scale|integer(int32)|false|none|Digits to right of decimal; Required for DecimalTypes.|
|type_interval_type|string|false|none|Format of IntervalType.|
|position|integer(int32)|false|none|Ordinal position of column (starting at position 0).|
|comment|string|false|none|User-provided free-form text description.|
|nullable|boolean|false|none|Whether field may be Null.|
|partition_index|integer(int32)|false|none|Partition index for column.|

#### Enumerated Values

|Property|Value|
|---|---|
|type_name|BOOLEAN|
|type_name|BYTE|
|type_name|SHORT|
|type_name|INT|
|type_name|LONG|
|type_name|FLOAT|
|type_name|DOUBLE|
|type_name|DATE|
|type_name|TIMESTAMP|
|type_name|TIMESTAMP_NTZ|
|type_name|STRING|
|type_name|BINARY|
|type_name|DECIMAL|
|type_name|INTERVAL|
|type_name|ARRAY|
|type_name|STRUCT|
|type_name|MAP|
|type_name|VARIANT|
|type_name|CHAR|
|type_name|NULL|
|type_name|USER_DEFINED_TYPE|
|type_name|TABLE_TYPE|

<h2 id="tocS_TableType">TableType</h2>
<!-- backwards compatibility -->
<a id="schematabletype"></a>
<a id="schema_TableType"></a>
<a id="tocStabletype"></a>
<a id="tocstabletype"></a>

```json
"MANAGED"
```

<h2 id="tocS_DataSourceFormat">DataSourceFormat</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceformat"></a>
<a id="schema_DataSourceFormat"></a>
<a id="tocSdatasourceformat"></a>
<a id="tocsdatasourceformat"></a>

```json
"DELTA"
```

Data source format

<h2 id="tocS_TableInfo">TableInfo</h2>
<!-- backwards compatibility -->
<a id="schematableinfo"></a>
<a id="schema_TableInfo"></a>
<a id="tocStableinfo"></a>
<a id="tocstableinfo"></a>

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "table_type": "MANAGED",
  "data_source_format": "DELTA",
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ],
  "storage_location": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "table_id": "string",
  "view_definition": "string",
  "view_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|name|string|false|none|Name of table, relative to parent schema.|
|catalog_name|string|false|none|Name of parent catalog.|
|schema_name|string|false|none|Name of parent schema relative to its parent catalog.|
|table_type|[TableType](#schematabletype)|false|none|none|
|data_source_format|[DataSourceFormat](#schemadatasourceformat)|false|none|Data source format|
|columns|[[ColumnInfo](#schemacolumninfo)]|false|none|The array of __ColumnInfo__ definitions of the table's columns.|
|storage_location|string|false|none|Storage root URL for table (for **MANAGED**, **EXTERNAL** tables)|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|owner|string|false|none|Username of current owner of table.|
|created_at|integer(int64)|false|none|Time at which this table was created, in epoch milliseconds.|
|created_by|string|false|none|Username of table creator.|
|updated_at|integer(int64)|false|none|Time at which this table was last modified, in epoch milliseconds.|
|updated_by|string|false|none|Username of user who last modified the table.|
|table_id|string|false|none|Unique identifier for the table.|
|view_definition|string|false|none|Definition text for view-like table types such as VIEW, MATERIALIZED_VIEW, STREAMING_TABLE, and METRIC_VIEW. The format depends on the table type (SQL for views, YAML for metric views).|
|view_dependencies|[DependencyList](#schemadependencylist)|false|none|A list of dependencies.|

#### Enumerated Values

|Property|Value|
|---|---|
|table_type|MANAGED|
|table_type|EXTERNAL|
|table_type|STREAMING_TABLE|
|table_type|MATERIALIZED_VIEW|
|table_type|METRIC_VIEW|
|table_type|VIEW|
|data_source_format|DELTA|
|data_source_format|ICEBERG|
|data_source_format|CSV|
|data_source_format|JSON|
|data_source_format|AVRO|
|data_source_format|PARQUET|
|data_source_format|ORC|
|data_source_format|TEXT|

<h2 id="tocS_CreateTable">CreateTable</h2>
<!-- backwards compatibility -->
<a id="schemacreatetable"></a>
<a id="schema_CreateTable"></a>
<a id="tocScreatetable"></a>
<a id="tocscreatetable"></a>

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "table_type": "MANAGED",
  "data_source_format": "DELTA",
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ],
  "storage_location": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "view_definition": "string",
  "view_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of table, relative to parent schema.|
|catalog_name|string|true|none|Name of parent catalog.|
|schema_name|string|true|none|Name of parent schema relative to its parent catalog.|
|table_type|[TableType](#schematabletype)|true|none|none|
|data_source_format|[DataSourceFormat](#schemadatasourceformat)|false|none|Data source format|
|columns|[[ColumnInfo](#schemacolumninfo)]|true|none|The array of __ColumnInfo__ definitions of the table's columns.|
|storage_location|string|false|none|Storage root URL for external table|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|view_definition|string|false|none|Definition text for view-like table types such as VIEW, MATERIALIZED_VIEW, STREAMING_TABLE, and METRIC_VIEW. The format depends on the table type (SQL for views, YAML for metric views).|
|view_dependencies|[DependencyList](#schemadependencylist)|false|none|A list of dependencies.|

#### Enumerated Values

|Property|Value|
|---|---|
|table_type|MANAGED|
|table_type|EXTERNAL|
|table_type|STREAMING_TABLE|
|table_type|MATERIALIZED_VIEW|
|table_type|METRIC_VIEW|
|table_type|VIEW|
|data_source_format|DELTA|
|data_source_format|ICEBERG|
|data_source_format|CSV|
|data_source_format|JSON|
|data_source_format|AVRO|
|data_source_format|PARQUET|
|data_source_format|ORC|
|data_source_format|TEXT|

<h2 id="tocS_StagingTableInfo">StagingTableInfo</h2>
<!-- backwards compatibility -->
<a id="schemastagingtableinfo"></a>
<a id="schema_StagingTableInfo"></a>
<a id="tocSstagingtableinfo"></a>
<a id="tocsstagingtableinfo"></a>

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "id": "string",
  "staging_location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of table, relative to parent schema.|
|catalog_name|string|false|none|Name of parent catalog.|
|schema_name|string|false|none|Name of parent schema relative to its parent catalog.|
|id|string|false|none|Unique identifier for the table.|
|staging_location|string|false|none|URI generated for the staging table|

<h2 id="tocS_CreateStagingTable">CreateStagingTable</h2>
<!-- backwards compatibility -->
<a id="schemacreatestagingtable"></a>
<a id="schema_CreateStagingTable"></a>
<a id="tocScreatestagingtable"></a>
<a id="tocscreatestagingtable"></a>

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of table, relative to parent schema.|
|catalog_name|string|true|none|Name of parent catalog.|
|schema_name|string|true|none|Name of parent schema relative to its parent catalog.|

<h2 id="tocS_ListTablesResponse">ListTablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesresponse"></a>
<a id="schema_ListTablesResponse"></a>
<a id="tocSlisttablesresponse"></a>
<a id="tocslisttablesresponse"></a>

```json
{
  "tables": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "table_type": "MANAGED",
      "data_source_format": "DELTA",
      "columns": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "comment": "string",
          "nullable": "true",
          "partition_index": 0
        }
      ],
      "storage_location": "string",
      "comment": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "table_id": "string",
      "view_definition": "string",
      "view_dependencies": {
        "dependencies": [
          {
            "table": {
              "table_full_name": "string"
            },
            "function": {
              "function_full_name": "string"
            }
          }
        ]
      }
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tables|[[TableInfo](#schematableinfo)]|false|none|An array of table information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_SchemaInfo">SchemaInfo</h2>
<!-- backwards compatibility -->
<a id="schemaschemainfo"></a>
<a id="schema_SchemaInfo"></a>
<a id="tocSschemainfo"></a>
<a id="tocsschemainfo"></a>

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "schema_id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|name|string|false|none|Name of schema, relative to parent catalog.|
|catalog_name|string|false|none|Name of parent catalog.|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|full_name|string|false|none|Full name of schema, in form of __catalog_name__.__schema_name__.|
|owner|string|false|none|Username of current owner of schema.|
|created_at|integer(int64)|false|none|Time at which this schema was created, in epoch milliseconds.|
|created_by|string|false|none|Username of schema creator.|
|updated_at|integer(int64)|false|none|Time at which this schema was last modified, in epoch milliseconds.|
|updated_by|string|false|none|Username of user who last modified schema.|
|schema_id|string|false|none|Unique identifier for the schema.|
|storage_root|string|false|none|Storage root URL for managed storage location of schema. This can be set when creating a<br>schema. Example: s3://bucket/ucroot<br>|
|storage_location|string|false|none|Storage Location URL (full path) for managed storage location of schema. This is an<br>automatically generated unique path under storage_root. If it is absent, managed<br>securables under this schema will try to use storage_location of the parent catalog<br>instead. Example: s3://bucket/ucroot/__unitystorage/schemas/{schema_id}<br>|

<h2 id="tocS_CreateSchema">CreateSchema</h2>
<!-- backwards compatibility -->
<a id="schemacreateschema"></a>
<a id="schema_CreateSchema"></a>
<a id="tocScreateschema"></a>
<a id="tocscreateschema"></a>

```json
{
  "name": "string",
  "catalog_name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "storage_root": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of schema, relative to parent catalog.|
|catalog_name|string|true|none|Name of parent catalog.|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|storage_root|string|false|none|Storage root URL for managed storage location of schema. If not set, managed securables<br>under this schema will try to use the storage_location of the parent catalog instead.<br>Example: s3://bucket/ucroot<br>|

<h2 id="tocS_UpdateSchema">UpdateSchema</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschema"></a>
<a id="schema_UpdateSchema"></a>
<a id="tocSupdateschema"></a>
<a id="tocsupdateschema"></a>

```json
{
  "owner": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "new_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|false|none|Username of the new owner. The user must already exist.|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|new_name|string|false|none|New name for the schema.|

<h2 id="tocS_ListSchemasResponse">ListSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasresponse"></a>
<a id="schema_ListSchemasResponse"></a>
<a id="tocSlistschemasresponse"></a>
<a id="tocslistschemasresponse"></a>

```json
{
  "schemas": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "comment": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "full_name": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "schema_id": "string",
      "storage_root": "string",
      "storage_location": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[[SchemaInfo](#schemaschemainfo)]|false|none|An array of schema information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_CatalogInfo">CatalogInfo</h2>
<!-- backwards compatibility -->
<a id="schemacataloginfo"></a>
<a id="schema_CatalogInfo"></a>
<a id="tocScataloginfo"></a>
<a id="tocscataloginfo"></a>

```json
{
  "browse_only": true,
  "name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string",
  "storage_root": "string",
  "storage_location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|name|string|false|none|Name of catalog.|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|owner|string|false|none|Username of current owner of catalog.|
|created_at|integer(int64)|false|none|Time at which this catalog was created, in epoch milliseconds.|
|created_by|string|false|none|Username of catalog creator.|
|updated_at|integer(int64)|false|none|Time at which this catalog was last modified, in epoch milliseconds.|
|updated_by|string|false|none|Username of user who last modified catalog.|
|id|string|false|none|Unique identifier for the catalog.|
|storage_root|string|false|none|Storage root URL for managed storage location of catalog. This can be set when creating<br>a catalog. Example: s3://bucket/ucroot<br>|
|storage_location|string|false|none|Storage Location URL (full path) for managed storage location of catalog. This is an<br>automatically generated unique path under storage_root.<br>Example: s3://bucket/ucroot/__unitystorage/catalogs/{catalog_id}<br>|

<h2 id="tocS_CreateCatalog">CreateCatalog</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatalog"></a>
<a id="schema_CreateCatalog"></a>
<a id="tocScreatecatalog"></a>
<a id="tocscreatecatalog"></a>

```json
{
  "name": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "storage_root": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of catalog.|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|storage_root|string|false|none|Storage root URL for managed storage location of catalog. Example: s3://bucket/ucroot<br>|

<h2 id="tocS_UpdateCatalog">UpdateCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecatalog"></a>
<a id="schema_UpdateCatalog"></a>
<a id="tocSupdatecatalog"></a>
<a id="tocsupdatecatalog"></a>

```json
{
  "owner": "string",
  "comment": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "new_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|false|none|Username of the new owner. The user must already exist.|
|comment|string|false|none|User-provided free-form text description.|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|
|new_name|string|false|none|New name for the catalog.|

<h2 id="tocS_ListCatalogsResponse">ListCatalogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcatalogsresponse"></a>
<a id="schema_ListCatalogsResponse"></a>
<a id="tocSlistcatalogsresponse"></a>
<a id="tocslistcatalogsresponse"></a>

```json
{
  "catalogs": [
    {
      "browse_only": true,
      "name": "string",
      "comment": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "id": "string",
      "storage_root": "string",
      "storage_location": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogs|[[CatalogInfo](#schemacataloginfo)]|false|none|An array of catalog information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_FunctionParameterType">FunctionParameterType</h2>
<!-- backwards compatibility -->
<a id="schemafunctionparametertype"></a>
<a id="schema_FunctionParameterType"></a>
<a id="tocSfunctionparametertype"></a>
<a id="tocsfunctionparametertype"></a>

```json
"PARAM"
```

The type of function parameter.

<h2 id="tocS_FunctionParameterMode">FunctionParameterMode</h2>
<!-- backwards compatibility -->
<a id="schemafunctionparametermode"></a>
<a id="schema_FunctionParameterMode"></a>
<a id="tocSfunctionparametermode"></a>
<a id="tocsfunctionparametermode"></a>

```json
"IN"
```

The mode of the function parameter.

<h2 id="tocS_FunctionParameterInfo">FunctionParameterInfo</h2>
<!-- backwards compatibility -->
<a id="schemafunctionparameterinfo"></a>
<a id="schema_FunctionParameterInfo"></a>
<a id="tocSfunctionparameterinfo"></a>
<a id="tocsfunctionparameterinfo"></a>

```json
{
  "name": "string",
  "type_text": "string",
  "type_json": "string",
  "type_name": "BOOLEAN",
  "type_precision": 0,
  "type_scale": 0,
  "type_interval_type": "string",
  "position": 0,
  "parameter_mode": "IN",
  "parameter_type": "PARAM",
  "parameter_default": "string",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of parameter.|
|type_text|string|true|none|Full data type spec, SQL/catalogString text.|
|type_json|string|true|none|Full data type spec, JSON-serialized.|
|type_name|[ColumnTypeName](#schemacolumntypename)|true|none|Name of type (INT, STRUCT, MAP, etc.).|
|type_precision|integer(int32)|false|none|Digits of precision; required on Create for DecimalTypes.|
|type_scale|integer(int32)|false|none|Digits to right of decimal; Required on Create for DecimalTypes.|
|type_interval_type|string|false|none|Format of IntervalType.|
|position|integer(int32)|true|none|Ordinal position of column (starting at position 0).|
|parameter_mode|[FunctionParameterMode](#schemafunctionparametermode)|false|none|The mode of the function parameter.|
|parameter_type|[FunctionParameterType](#schemafunctionparametertype)|false|none|The type of function parameter.|
|parameter_default|string|false|none|Default value of the parameter.|
|comment|string|false|none|User-provided free-form text description.|

#### Enumerated Values

|Property|Value|
|---|---|
|type_name|BOOLEAN|
|type_name|BYTE|
|type_name|SHORT|
|type_name|INT|
|type_name|LONG|
|type_name|FLOAT|
|type_name|DOUBLE|
|type_name|DATE|
|type_name|TIMESTAMP|
|type_name|TIMESTAMP_NTZ|
|type_name|STRING|
|type_name|BINARY|
|type_name|DECIMAL|
|type_name|INTERVAL|
|type_name|ARRAY|
|type_name|STRUCT|
|type_name|MAP|
|type_name|VARIANT|
|type_name|CHAR|
|type_name|NULL|
|type_name|USER_DEFINED_TYPE|
|type_name|TABLE_TYPE|
|parameter_mode|IN|
|parameter_type|PARAM|
|parameter_type|COLUMN|

<h2 id="tocS_FunctionParameterInfos">FunctionParameterInfos</h2>
<!-- backwards compatibility -->
<a id="schemafunctionparameterinfos"></a>
<a id="schema_FunctionParameterInfos"></a>
<a id="tocSfunctionparameterinfos"></a>
<a id="tocsfunctionparameterinfos"></a>

```json
{
  "parameters": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "parameter_mode": "IN",
      "parameter_type": "PARAM",
      "parameter_default": "string",
      "comment": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|[[FunctionParameterInfo](#schemafunctionparameterinfo)]|false|none|The array of __FunctionParameterInfo__ definitions of the function's parameters.|

<h2 id="tocS_CreateFunctionRequest">CreateFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionrequest"></a>
<a id="schema_CreateFunctionRequest"></a>
<a id="tocScreatefunctionrequest"></a>
<a id="tocscreatefunctionrequest"></a>

```json
{
  "function_info": {
    "name": "string",
    "catalog_name": "string",
    "schema_name": "string",
    "input_params": {
      "parameters": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "parameter_mode": "IN",
          "parameter_type": "PARAM",
          "parameter_default": "string",
          "comment": "string"
        }
      ]
    },
    "data_type": "BOOLEAN",
    "full_data_type": "string",
    "return_params": {
      "parameters": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "parameter_mode": "IN",
          "parameter_type": "PARAM",
          "parameter_default": "string",
          "comment": "string"
        }
      ]
    },
    "routine_body": "SQL",
    "routine_definition": "string",
    "routine_dependencies": {
      "dependencies": [
        {
          "table": {
            "table_full_name": "string"
          },
          "function": {
            "function_full_name": "string"
          }
        }
      ]
    },
    "parameter_style": "S",
    "is_deterministic": true,
    "sql_data_access": "CONTAINS_SQL",
    "is_null_call": true,
    "security_type": "DEFINER",
    "specific_name": "string",
    "comment": "string",
    "properties": "string",
    "external_language": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function_info|[CreateFunction](#schemacreatefunction)|true|none|none|

<h2 id="tocS_UpdateFunction">UpdateFunction</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunction"></a>
<a id="schema_UpdateFunction"></a>
<a id="tocSupdatefunction"></a>
<a id="tocsupdatefunction"></a>

```json
{
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|true|none|Username of the new owner. Only a metastore admin can transfer a function to another user.|

<h2 id="tocS_UpdateTable">UpdateTable</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetable"></a>
<a id="schema_UpdateTable"></a>
<a id="tocSupdatetable"></a>
<a id="tocsupdatetable"></a>

```json
{
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|true|none|Username of the new owner. Only a metastore admin can transfer a view to another user.|

<h2 id="tocS_FunctionDependency">FunctionDependency</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondependency"></a>
<a id="schema_FunctionDependency"></a>
<a id="tocSfunctiondependency"></a>
<a id="tocsfunctiondependency"></a>

```json
{
  "function_full_name": "string"
}
```

A function that is dependent on a SQL object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function_full_name|string|true|none|Full name of the dependent function, in the form of __catalog_name__.__schema_name__.__function_name__.|

<h2 id="tocS_TableDependency">TableDependency</h2>
<!-- backwards compatibility -->
<a id="schematabledependency"></a>
<a id="schema_TableDependency"></a>
<a id="tocStabledependency"></a>
<a id="tocstabledependency"></a>

```json
{
  "table_full_name": "string"
}
```

A table that is dependent on a SQL object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table_full_name|string|true|none|Full name of the dependent table, in the form of __catalog_name__.__schema_name__.__table_name__.|

<h2 id="tocS_Dependency">Dependency</h2>
<!-- backwards compatibility -->
<a id="schemadependency"></a>
<a id="schema_Dependency"></a>
<a id="tocSdependency"></a>
<a id="tocsdependency"></a>

```json
{
  "table": {
    "table_full_name": "string"
  },
  "function": {
    "function_full_name": "string"
  }
}
```

A dependency of a SQL object. Either the __table__ field or the __function__ field must be defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table|[TableDependency](#schematabledependency)|false|none|A table that is dependent on a SQL object.|
|function|[FunctionDependency](#schemafunctiondependency)|false|none|A function that is dependent on a SQL object.|

<h2 id="tocS_DependencyList">DependencyList</h2>
<!-- backwards compatibility -->
<a id="schemadependencylist"></a>
<a id="schema_DependencyList"></a>
<a id="tocSdependencylist"></a>
<a id="tocsdependencylist"></a>

```json
{
  "dependencies": [
    {
      "table": {
        "table_full_name": "string"
      },
      "function": {
        "function_full_name": "string"
      }
    }
  ]
}
```

A list of dependencies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencies|[[Dependency](#schemadependency)]|false|none|Array of dependencies.|

<h2 id="tocS_CreateFunction">CreateFunction</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunction"></a>
<a id="schema_CreateFunction"></a>
<a id="tocScreatefunction"></a>
<a id="tocscreatefunction"></a>

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "input_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "data_type": "BOOLEAN",
  "full_data_type": "string",
  "return_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "routine_body": "SQL",
  "routine_definition": "string",
  "routine_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  },
  "parameter_style": "S",
  "is_deterministic": true,
  "sql_data_access": "CONTAINS_SQL",
  "is_null_call": true,
  "security_type": "DEFINER",
  "specific_name": "string",
  "comment": "string",
  "properties": "string",
  "external_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of function, relative to parent schema.|
|catalog_name|string|true|none|Name of parent catalog.|
|schema_name|string|true|none|Name of parent schema relative to its parent catalog.|
|input_params|[FunctionParameterInfos](#schemafunctionparameterinfos)|true|none|none|
|data_type|[ColumnTypeName](#schemacolumntypename)|true|none|Name of type (INT, STRUCT, MAP, etc.).|
|full_data_type|string|true|none|Pretty printed function data type.|
|return_params|[FunctionParameterInfos](#schemafunctionparameterinfos)|false|none|none|
|routine_body|string|true|none|Function language. When **EXTERNAL** is used, the language of the routine function should be specified in the __external_language__ field, <br>and the __return_params__ of the function cannot be used (as **TABLE** return type is not supported),<br>and the __sql_data_access__ field must be **NO_SQL**.<br>|
|routine_definition|string|true|none|Function body.|
|routine_dependencies|[DependencyList](#schemadependencylist)|false|none|A list of dependencies.|
|parameter_style|string|true|none|Function parameter style. **S** is the value for SQL.|
|is_deterministic|boolean|true|none|Whether the function is deterministic.|
|sql_data_access|string|true|none|Function SQL data access.|
|is_null_call|boolean|true|none|Function null call.|
|security_type|string|true|none|Function security type.|
|specific_name|string|true|none|Specific name of the function; Reserved for future use.|
|comment|string|false|none|User-provided free-form text description.|
|properties|string|false|none|JSON-serialized key-value pair map, encoded (escaped) as a string.|
|external_language|string|false|none|External language of the function.|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|BOOLEAN|
|data_type|BYTE|
|data_type|SHORT|
|data_type|INT|
|data_type|LONG|
|data_type|FLOAT|
|data_type|DOUBLE|
|data_type|DATE|
|data_type|TIMESTAMP|
|data_type|TIMESTAMP_NTZ|
|data_type|STRING|
|data_type|BINARY|
|data_type|DECIMAL|
|data_type|INTERVAL|
|data_type|ARRAY|
|data_type|STRUCT|
|data_type|MAP|
|data_type|VARIANT|
|data_type|CHAR|
|data_type|NULL|
|data_type|USER_DEFINED_TYPE|
|data_type|TABLE_TYPE|
|routine_body|SQL|
|routine_body|EXTERNAL|
|parameter_style|S|
|sql_data_access|CONTAINS_SQL|
|sql_data_access|READS_SQL_DATA|
|sql_data_access|NO_SQL|
|security_type|DEFINER|

<h2 id="tocS_FunctionInfo">FunctionInfo</h2>
<!-- backwards compatibility -->
<a id="schemafunctioninfo"></a>
<a id="schema_FunctionInfo"></a>
<a id="tocSfunctioninfo"></a>
<a id="tocsfunctioninfo"></a>

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "input_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "data_type": "BOOLEAN",
  "full_data_type": "string",
  "return_params": {
    "parameters": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "parameter_mode": "IN",
        "parameter_type": "PARAM",
        "parameter_default": "string",
        "comment": "string"
      }
    ]
  },
  "routine_body": "SQL",
  "routine_definition": "string",
  "routine_dependencies": {
    "dependencies": [
      {
        "table": {
          "table_full_name": "string"
        },
        "function": {
          "function_full_name": "string"
        }
      }
    ]
  },
  "parameter_style": "S",
  "is_deterministic": true,
  "sql_data_access": "CONTAINS_SQL",
  "is_null_call": true,
  "security_type": "DEFINER",
  "specific_name": "string",
  "comment": "string",
  "properties": "string",
  "full_name": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "function_id": "string",
  "external_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|name|string|false|none|Name of function, relative to parent schema.|
|catalog_name|string|false|none|Name of parent catalog.|
|schema_name|string|false|none|Name of parent schema relative to its parent catalog.|
|input_params|[FunctionParameterInfos](#schemafunctionparameterinfos)|false|none|none|
|data_type|[ColumnTypeName](#schemacolumntypename)|false|none|Name of type (INT, STRUCT, MAP, etc.).|
|full_data_type|string|false|none|Pretty printed function data type.|
|return_params|[FunctionParameterInfos](#schemafunctionparameterinfos)|false|none|none|
|routine_body|string|false|none|Function language. When **EXTERNAL** is used, the language of the routine function should be specified in the __external_language__ field, <br>and the __return_params__ of the function cannot be used (as **TABLE** return type is not supported),<br>and the __sql_data_access__ field must be **NO_SQL**.<br>|
|routine_definition|string|false|none|Function body.|
|routine_dependencies|[DependencyList](#schemadependencylist)|false|none|A list of dependencies.|
|parameter_style|string|false|none|Function parameter style. **S** is the value for SQL.|
|is_deterministic|boolean|false|none|Whether the function is deterministic.|
|sql_data_access|string|false|none|Function SQL data access.|
|is_null_call|boolean|false|none|Function null call.|
|security_type|string|false|none|Function security type.|
|specific_name|string|false|none|Specific name of the function; Reserved for future use.|
|comment|string|false|none|User-provided free-form text description.|
|properties|string|false|none|JSON-serialized key-value pair map, encoded (escaped) as a string.|
|full_name|string|false|none|Full name of function, in form of __catalog_name__.__schema_name__.__function__name__|
|owner|string|false|none|Username of current owner of function.|
|created_at|integer(int64)|false|none|Time at which this function was created, in epoch milliseconds.|
|created_by|string|false|none|Username of function creator.|
|updated_at|integer(int64)|false|none|Time at which this function was last updated, in epoch milliseconds.|
|updated_by|string|false|none|Username of user who last modified function.|
|function_id|string|false|none|Id of Function, relative to parent schema.|
|external_language|string|false|none|External language of the function.|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|BOOLEAN|
|data_type|BYTE|
|data_type|SHORT|
|data_type|INT|
|data_type|LONG|
|data_type|FLOAT|
|data_type|DOUBLE|
|data_type|DATE|
|data_type|TIMESTAMP|
|data_type|TIMESTAMP_NTZ|
|data_type|STRING|
|data_type|BINARY|
|data_type|DECIMAL|
|data_type|INTERVAL|
|data_type|ARRAY|
|data_type|STRUCT|
|data_type|MAP|
|data_type|VARIANT|
|data_type|CHAR|
|data_type|NULL|
|data_type|USER_DEFINED_TYPE|
|data_type|TABLE_TYPE|
|routine_body|SQL|
|routine_body|EXTERNAL|
|parameter_style|S|
|sql_data_access|CONTAINS_SQL|
|sql_data_access|READS_SQL_DATA|
|sql_data_access|NO_SQL|
|security_type|DEFINER|

<h2 id="tocS_ListFunctionsResponse">ListFunctionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsresponse"></a>
<a id="schema_ListFunctionsResponse"></a>
<a id="tocSlistfunctionsresponse"></a>
<a id="tocslistfunctionsresponse"></a>

```json
{
  "functions": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "input_params": {
        "parameters": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "parameter_mode": "IN",
            "parameter_type": "PARAM",
            "parameter_default": "string",
            "comment": "string"
          }
        ]
      },
      "data_type": "BOOLEAN",
      "full_data_type": "string",
      "return_params": {
        "parameters": [
          {
            "name": "string",
            "type_text": "string",
            "type_json": "string",
            "type_name": "BOOLEAN",
            "type_precision": 0,
            "type_scale": 0,
            "type_interval_type": "string",
            "position": 0,
            "parameter_mode": "IN",
            "parameter_type": "PARAM",
            "parameter_default": "string",
            "comment": "string"
          }
        ]
      },
      "routine_body": "SQL",
      "routine_definition": "string",
      "routine_dependencies": {
        "dependencies": [
          {
            "table": {
              "table_full_name": "string"
            },
            "function": {
              "function_full_name": "string"
            }
          }
        ]
      },
      "parameter_style": "S",
      "is_deterministic": true,
      "sql_data_access": "CONTAINS_SQL",
      "is_null_call": true,
      "security_type": "DEFINER",
      "specific_name": "string",
      "comment": "string",
      "properties": "string",
      "full_name": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "function_id": "string",
      "external_language": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functions|[[FunctionInfo](#schemafunctioninfo)]|false|none|An array of function information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_GenerateTemporaryModelVersionCredential">GenerateTemporaryModelVersionCredential</h2>
<!-- backwards compatibility -->
<a id="schemageneratetemporarymodelversioncredential"></a>
<a id="schema_GenerateTemporaryModelVersionCredential"></a>
<a id="tocSgeneratetemporarymodelversioncredential"></a>
<a id="tocsgeneratetemporarymodelversioncredential"></a>

```json
{
  "catalog_name": "catalog_name",
  "schema_name": "schema_name",
  "model_name": "model_name",
  "version": "version",
  "operation": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalog_name|string|true|none|Catalog name for which temporary credentials are generated. <br>Can be obtained from models/{full_name} (get model info) API.<br>|
|schema_name|string|true|none|Schema name for which temporary credentials are generated. <br>Can be obtained from models/{full_name} (get model info) API.<br>|
|model_name|string|true|none|Model name for which temporary credentials are generated. <br>Can be obtained from models/{full_name} (get model info) API.<br>|
|version|integer(int64)|true|none|Model version for which temporary credentials are generated.<br>|
|operation|[ModelVersionOperation](#schemamodelversionoperation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|UNKNOWN_MODEL_VERSION_OPERATION|
|operation|READ_MODEL_VERSION|
|operation|READ_WRITE_MODEL_VERSION|

<h2 id="tocS_ModelVersionOperation">ModelVersionOperation</h2>
<!-- backwards compatibility -->
<a id="schemamodelversionoperation"></a>
<a id="schema_ModelVersionOperation"></a>
<a id="tocSmodelversionoperation"></a>
<a id="tocsmodelversionoperation"></a>

```json
"UNKNOWN_MODEL_VERSION_OPERATION"
```

<h2 id="tocS_GenerateTemporaryTableCredential">GenerateTemporaryTableCredential</h2>
<!-- backwards compatibility -->
<a id="schemageneratetemporarytablecredential"></a>
<a id="schema_GenerateTemporaryTableCredential"></a>
<a id="tocSgeneratetemporarytablecredential"></a>
<a id="tocsgeneratetemporarytablecredential"></a>

```json
{
  "table_id": "table_id",
  "operation": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table_id|string|true|none|Table id for which temporary credentials are generated. <br>Can be obtained from tables/{full_name} (get table info) API.<br>|
|operation|[TableOperation](#schematableoperation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|UNKNOWN_TABLE_OPERATION|
|operation|READ|
|operation|READ_WRITE|

<h2 id="tocS_TableOperation">TableOperation</h2>
<!-- backwards compatibility -->
<a id="schematableoperation"></a>
<a id="schema_TableOperation"></a>
<a id="tocStableoperation"></a>
<a id="tocstableoperation"></a>

```json
"UNKNOWN_TABLE_OPERATION"
```

<h2 id="tocS_AwsCredentials">AwsCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaawscredentials"></a>
<a id="schema_AwsCredentials"></a>
<a id="tocSawscredentials"></a>
<a id="tocsawscredentials"></a>

```json
{
  "access_key_id": "string",
  "secret_access_key": "string",
  "session_token": "string",
  "s3_endpoint": "string",
  "s3_region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_key_id|string|false|none|The access key ID that identifies the temporary credentials.|
|secret_access_key|string|false|none|The secret access key that can be used to sign AWS API requests.|
|session_token|string|false|none|The token that users must pass to AWS API to use the temporary credentials.|
|s3_endpoint|string|false|none|EXPERIMENTAL. The S3 API endpoint to send requests for the path to, set when the path is on S3-compatible storage. It is the `s3_endpoint` of the storage credential of the external location covering the path. Requests to it always use path-style addressing. Absent for AWS S3. When that credential does not vend keys, this and `s3_region` are the only fields set. A client that does not support this field must not use the credentials, and must not send their requests to AWS S3.|
|s3_region|string|false|none|EXPERIMENTAL. The region to sign S3 requests with, set together with `s3_endpoint`. Unity Catalog asks the storage for the bucket's region, and uses `us-east-1` if it does not say.|

<h2 id="tocS_AzureUserDelegationSAS">AzureUserDelegationSAS</h2>
<!-- backwards compatibility -->
<a id="schemaazureuserdelegationsas"></a>
<a id="schema_AzureUserDelegationSAS"></a>
<a id="tocSazureuserdelegationsas"></a>
<a id="tocsazureuserdelegationsas"></a>

```json
{
  "sas_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sas_token|string|false|none|Azure SAS Token|

<h2 id="tocS_GcpOauthToken">GcpOauthToken</h2>
<!-- backwards compatibility -->
<a id="schemagcpoauthtoken"></a>
<a id="schema_GcpOauthToken"></a>
<a id="tocSgcpoauthtoken"></a>
<a id="tocsgcpoauthtoken"></a>

```json
{
  "oauth_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth_token|string|false|none|Gcp Token|

<h2 id="tocS_GenerateTemporaryVolumeCredential">GenerateTemporaryVolumeCredential</h2>
<!-- backwards compatibility -->
<a id="schemageneratetemporaryvolumecredential"></a>
<a id="schema_GenerateTemporaryVolumeCredential"></a>
<a id="tocSgeneratetemporaryvolumecredential"></a>
<a id="tocsgeneratetemporaryvolumecredential"></a>

```json
{
  "volume_id": "string",
  "operation": "UNKNOWN_VOLUME_OPERATION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volume_id|string|true|none|Volume id for which temporary credentials are generated. <br>Can be obtained from volumes/{full_name} (get volume info) API.<br>|
|operation|[VolumeOperation](#schemavolumeoperation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|UNKNOWN_VOLUME_OPERATION|
|operation|READ_VOLUME|
|operation|WRITE_VOLUME|

<h2 id="tocS_VolumeOperation">VolumeOperation</h2>
<!-- backwards compatibility -->
<a id="schemavolumeoperation"></a>
<a id="schema_VolumeOperation"></a>
<a id="tocSvolumeoperation"></a>
<a id="tocsvolumeoperation"></a>

```json
"UNKNOWN_VOLUME_OPERATION"
```

<h2 id="tocS_RegisteredModelInfo">RegisteredModelInfo</h2>
<!-- backwards compatibility -->
<a id="schemaregisteredmodelinfo"></a>
<a id="schema_RegisteredModelInfo"></a>
<a id="tocSregisteredmodelinfo"></a>
<a id="tocsregisteredmodelinfo"></a>

```json
{
  "browse_only": true,
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "storage_location": "string",
  "full_name": "string",
  "comment": "string",
  "owner": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|name|string|false|none|The name of the registered model|
|catalog_name|string|false|none|The name of the catalog where the schema and the registered model reside|
|schema_name|string|false|none|The name of the schema where the registered model resides|
|storage_location|string|false|none|The storage location on the cloud under which model version data files are stored|
|full_name|string|false|none|The three-level (fully qualified) name of the registered model|
|comment|string|false|none|The comment attached to the registered model|
|owner|string|false|none|The identifier of the user who owns the registered model|
|created_at|integer(int64)|false|none|Creation timestamp of the registered model in milliseconds since the Unix epoch|
|created_by|string|false|none|The identifier of the user who created the registered model|
|updated_at|integer(int64)|false|none|Last-update timestamp of the registered model in milliseconds since the Unix epoch|
|updated_by|string|false|none|The identifier of the user who updated the registered model last time|
|id|string|false|none|Unique identifier for the registered model.|

<h2 id="tocS_ModelVersionInfo">ModelVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemamodelversioninfo"></a>
<a id="schema_ModelVersionInfo"></a>
<a id="tocSmodelversioninfo"></a>
<a id="tocsmodelversioninfo"></a>

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "version": 0,
  "source": "string",
  "run_id": "string",
  "status": "MODEL_VERSION_STATUS_UNKNOWN",
  "storage_location": "string",
  "comment": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|The name of the parent registered model of the model version, relative to parent schema|
|catalog_name|string|false|none|The name of the catalog containing the model version|
|schema_name|string|false|none|The name of the schema containing the model version, relative to parent catalog|
|version|integer(int64)|false|none|Integer model version number, used to reference the model version in API requests.|
|source|string|false|none|URI indicating the location of the source artifacts (files) for the model version|
|run_id|string|false|none|The run id used by the ML package that generated the model.|
|status|[ModelVersionStatus](#schemamodelversionstatus)|false|none|All possible model version statuses.|
|storage_location|string|false|none|The storage location on the cloud under which model version data files are stored|
|comment|string|false|none|The comment attached to the model version|
|created_at|integer(int64)|false|none|Time at which this model version was created, in epoch milliseconds.|
|created_by|string|false|none|The identifier of the user who created the model version|
|updated_at|integer(int64)|false|none|Time at which this model version was last modified, in epoch milliseconds.|
|updated_by|string|false|none|The identifier of the user who updated the model version last time|
|id|string|false|none|Unique identifier for the model version.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|MODEL_VERSION_STATUS_UNKNOWN|
|status|PENDING_REGISTRATION|
|status|FAILED_REGISTRATION|
|status|READY|

<h2 id="tocS_ModelVersionStatus">ModelVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelversionstatus"></a>
<a id="schema_ModelVersionStatus"></a>
<a id="tocSmodelversionstatus"></a>
<a id="tocsmodelversionstatus"></a>

```json
"MODEL_VERSION_STATUS_UNKNOWN"
```

All possible model version statuses.

<h2 id="tocS_CreateRegisteredModel">CreateRegisteredModel</h2>
<!-- backwards compatibility -->
<a id="schemacreateregisteredmodel"></a>
<a id="schema_CreateRegisteredModel"></a>
<a id="tocScreateregisteredmodel"></a>
<a id="tocscreateregisteredmodel"></a>

```json
{
  "name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of model, relative to parent schema.|
|catalog_name|string|true|none|Name of parent catalog.|
|schema_name|string|true|none|Name of parent schema relative to its parent catalog.|
|comment|string|false|none|User-provided free-form text description.|

<h2 id="tocS_UpdateRegisteredModel">UpdateRegisteredModel</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregisteredmodel"></a>
<a id="schema_UpdateRegisteredModel"></a>
<a id="tocSupdateregisteredmodel"></a>
<a id="tocsupdateregisteredmodel"></a>

```json
{
  "owner": "string",
  "comment": "string",
  "new_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|string|false|none|Username of the new owner. Only a metastore admin can transfer a model to another user.|
|comment|string|false|none|User-provided free-form text description.|
|new_name|string|false|none|New name for the model.|

<h2 id="tocS_ListRegisteredModelsResponse">ListRegisteredModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistregisteredmodelsresponse"></a>
<a id="schema_ListRegisteredModelsResponse"></a>
<a id="tocSlistregisteredmodelsresponse"></a>
<a id="tocslistregisteredmodelsresponse"></a>

```json
{
  "registered_models": [
    {
      "browse_only": true,
      "name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "storage_location": "string",
      "full_name": "string",
      "comment": "string",
      "owner": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "id": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registered_models|[[RegisteredModelInfo](#schemaregisteredmodelinfo)]|false|none|An array of model information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_CreateModelVersion">CreateModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelversion"></a>
<a id="schema_CreateModelVersion"></a>
<a id="tocScreatemodelversion"></a>
<a id="tocscreatemodelversion"></a>

```json
{
  "model_name": "string",
  "catalog_name": "string",
  "schema_name": "string",
  "source": "string",
  "run_id": "string",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|true|none|Name of registered model, relative to parent schema.|
|catalog_name|string|true|none|Name of parent catalog.|
|schema_name|string|true|none|Name of parent schema relative to its parent catalog.|
|source|string|true|none|URI indicating the location of the source model artifacts.|
|run_id|string|false|none|The run id used by the ML package that generated the model.|
|comment|string|false|none|User-provided free-form text description.|

<h2 id="tocS_UpdateModelVersion">UpdateModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelversion"></a>
<a id="schema_UpdateModelVersion"></a>
<a id="tocSupdatemodelversion"></a>
<a id="tocsupdatemodelversion"></a>

```json
{
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|User-provided free-form text description.|

<h2 id="tocS_ListModelVersionsResponse">ListModelVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelversionsresponse"></a>
<a id="schema_ListModelVersionsResponse"></a>
<a id="tocSlistmodelversionsresponse"></a>
<a id="tocslistmodelversionsresponse"></a>

```json
{
  "model_versions": [
    {
      "model_name": "string",
      "catalog_name": "string",
      "schema_name": "string",
      "version": 0,
      "source": "string",
      "run_id": "string",
      "status": "MODEL_VERSION_STATUS_UNKNOWN",
      "storage_location": "string",
      "comment": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "id": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_versions|[[ModelVersionInfo](#schemamodelversioninfo)]|false|none|An array of model version information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_FinalizeModelVersion">FinalizeModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemafinalizemodelversion"></a>
<a id="schema_FinalizeModelVersion"></a>
<a id="tocSfinalizemodelversion"></a>
<a id="tocsfinalizemodelversion"></a>

```json
{
  "full_name": "string",
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|string|true|none|The full name of the registered model to finalize.|
|version|integer(int64)|true|none|Version number of the version to finalize.|

<h2 id="tocS_GenerateTemporaryPathCredential">GenerateTemporaryPathCredential</h2>
<!-- backwards compatibility -->
<a id="schemageneratetemporarypathcredential"></a>
<a id="schema_GenerateTemporaryPathCredential"></a>
<a id="tocSgeneratetemporarypathcredential"></a>
<a id="tocsgeneratetemporarypathcredential"></a>

```json
{
  "url": "string",
  "operation": "UNKNOWN_PATH_OPERATION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|The URL of the storage path for which temporary credentials need to be generated.|
|operation|[PathOperation](#schemapathoperation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|UNKNOWN_PATH_OPERATION|
|operation|PATH_READ|
|operation|PATH_READ_WRITE|
|operation|PATH_CREATE_TABLE|

<h2 id="tocS_TemporaryCredentials">TemporaryCredentials</h2>
<!-- backwards compatibility -->
<a id="schematemporarycredentials"></a>
<a id="schema_TemporaryCredentials"></a>
<a id="tocStemporarycredentials"></a>
<a id="tocstemporarycredentials"></a>

```json
{
  "aws_temp_credentials": {
    "access_key_id": "string",
    "secret_access_key": "string",
    "session_token": "string",
    "s3_endpoint": "string",
    "s3_region": "string"
  },
  "azure_user_delegation_sas": {
    "sas_token": "string"
  },
  "gcp_oauth_token": {
    "oauth_token": "string"
  },
  "expiration_time": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aws_temp_credentials|[AwsCredentials](#schemaawscredentials)|false|none|none|
|azure_user_delegation_sas|[AzureUserDelegationSAS](#schemaazureuserdelegationsas)|false|none|none|
|gcp_oauth_token|[GcpOauthToken](#schemagcpoauthtoken)|false|none|none|
|expiration_time|integer(int64)|false|none|Server time when the credential will expire, in epoch milliseconds.<br>The API client is advised to cache the credential given this expiration time.<br>EXPERIMENTAL: for S3-compatible storage without `assume_role`, it is a refetch time an<br>hour ahead, not when the keys expire: a vended key pair stays valid until the storage<br>rotates or revokes it, and a vend without keys has none to expire. A running client<br>need not fetch again then; the UC Hadoop connector picks up a changed endpoint on its<br>first table load after this time.<br>|
|url|string|false|none|The normalized URL of the storage path the temporary credential was generated for.|

<h2 id="tocS_PathOperation">PathOperation</h2>
<!-- backwards compatibility -->
<a id="schemapathoperation"></a>
<a id="schema_PathOperation"></a>
<a id="tocSpathoperation"></a>
<a id="tocspathoperation"></a>

```json
"UNKNOWN_PATH_OPERATION"
```

<h2 id="tocS_PrincipalType">PrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltype"></a>
<a id="schema_PrincipalType"></a>
<a id="tocSprincipaltype"></a>
<a id="tocsprincipaltype"></a>

```json
"USER"
```

The type of the principal.

<h2 id="tocS_SecurableType">SecurableType</h2>
<!-- backwards compatibility -->
<a id="schemasecurabletype"></a>
<a id="schema_SecurableType"></a>
<a id="tocSsecurabletype"></a>
<a id="tocssecurabletype"></a>

```json
"metastore"
```

The type of the resource.

<h2 id="tocS_Privilege">Privilege</h2>
<!-- backwards compatibility -->
<a id="schemaprivilege"></a>
<a id="schema_Privilege"></a>
<a id="tocSprivilege"></a>
<a id="tocsprivilege"></a>

```json
"CREATE CATALOG"
```

The privilege to grant.

<h2 id="tocS_UpdatePermissions">UpdatePermissions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepermissions"></a>
<a id="schema_UpdatePermissions"></a>
<a id="tocSupdatepermissions"></a>
<a id="tocsupdatepermissions"></a>

```json
{
  "changes": [
    {
      "principal": "string",
      "add": [
        "CREATE CATALOG"
      ],
      "remove": [
        "CREATE CATALOG"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[PermissionsChange](#schemapermissionschange)]|true|none|Array of permissions change objects.|

<h2 id="tocS_PermissionsChange">PermissionsChange</h2>
<!-- backwards compatibility -->
<a id="schemapermissionschange"></a>
<a id="schema_PermissionsChange"></a>
<a id="tocSpermissionschange"></a>
<a id="tocspermissionschange"></a>

```json
{
  "principal": "string",
  "add": [
    "CREATE CATALOG"
  ],
  "remove": [
    "CREATE CATALOG"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principal|string|true|none|The principal whose privileges we are changing.|
|add|[[Privilege](#schemaprivilege)]|true|none|The set of privileges to add.|
|remove|[[Privilege](#schemaprivilege)]|true|none|The set of privileges to remove.|

#### Enumerated Values

|Property|Value|
|---|---|
|add|CREATE CATALOG|
|add|USE CATALOG|
|add|CREATE SCHEMA|
|add|USE SCHEMA|
|add|CREATE TABLE|
|add|SELECT|
|add|MODIFY|
|add|CREATE FUNCTION|
|add|EXECUTE|
|add|CREATE VOLUME|
|add|READ VOLUME|
|add|CREATE MODEL|
|add|CREATE EXTERNAL LOCATION|
|add|READ FILES|
|add|WRITE FILES|
|add|CREATE EXTERNAL TABLE|
|add|CREATE EXTERNAL VOLUME|
|add|CREATE MANAGED STORAGE|
|add|CREATE STORAGE CREDENTIAL|
|add|BROWSE|
|add|MANAGE|
|add|WRITE VOLUME|
|add|CREATE MODEL VERSION|
|add|READ METADATA|
|remove|CREATE CATALOG|
|remove|USE CATALOG|
|remove|CREATE SCHEMA|
|remove|USE SCHEMA|
|remove|CREATE TABLE|
|remove|SELECT|
|remove|MODIFY|
|remove|CREATE FUNCTION|
|remove|EXECUTE|
|remove|CREATE VOLUME|
|remove|READ VOLUME|
|remove|CREATE MODEL|
|remove|CREATE EXTERNAL LOCATION|
|remove|READ FILES|
|remove|WRITE FILES|
|remove|CREATE EXTERNAL TABLE|
|remove|CREATE EXTERNAL VOLUME|
|remove|CREATE MANAGED STORAGE|
|remove|CREATE STORAGE CREDENTIAL|
|remove|BROWSE|
|remove|MANAGE|
|remove|WRITE VOLUME|
|remove|CREATE MODEL VERSION|
|remove|READ METADATA|

<h2 id="tocS_PermissionsList">PermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionslist"></a>
<a id="schema_PermissionsList"></a>
<a id="tocSpermissionslist"></a>
<a id="tocspermissionslist"></a>

```json
{
  "privilege_assignments": [
    {
      "principal": "string",
      "privileges": [
        "CREATE CATALOG"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privilege_assignments|[[PrivilegeAssignment](#schemaprivilegeassignment)]|true|none|The privileges assigned to each principal.|

<h2 id="tocS_PrivilegeAssignment">PrivilegeAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaprivilegeassignment"></a>
<a id="schema_PrivilegeAssignment"></a>
<a id="tocSprivilegeassignment"></a>
<a id="tocsprivilegeassignment"></a>

```json
{
  "principal": "string",
  "privileges": [
    "CREATE CATALOG"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principal|string|true|none|The principal (user email address or group name).|
|privileges|[[Privilege](#schemaprivilege)]|true|none|The privileges assigned to the principal.|

#### Enumerated Values

|Property|Value|
|---|---|
|privileges|CREATE CATALOG|
|privileges|USE CATALOG|
|privileges|CREATE SCHEMA|
|privileges|USE SCHEMA|
|privileges|CREATE TABLE|
|privileges|SELECT|
|privileges|MODIFY|
|privileges|CREATE FUNCTION|
|privileges|EXECUTE|
|privileges|CREATE VOLUME|
|privileges|READ VOLUME|
|privileges|CREATE MODEL|
|privileges|CREATE EXTERNAL LOCATION|
|privileges|READ FILES|
|privileges|WRITE FILES|
|privileges|CREATE EXTERNAL TABLE|
|privileges|CREATE EXTERNAL VOLUME|
|privileges|CREATE MANAGED STORAGE|
|privileges|CREATE STORAGE CREDENTIAL|
|privileges|BROWSE|
|privileges|MANAGE|
|privileges|WRITE VOLUME|
|privileges|CREATE MODEL VERSION|
|privileges|READ METADATA|

<h2 id="tocS_GetMetastoreSummaryResponse">GetMetastoreSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmetastoresummaryresponse"></a>
<a id="schema_GetMetastoreSummaryResponse"></a>
<a id="tocSgetmetastoresummaryresponse"></a>
<a id="tocsgetmetastoresummaryresponse"></a>

```json
{
  "metastore_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metastore_id|string|false|none|Unique identifier of the metastore.|

<h2 id="tocS_CredentialInfo">CredentialInfo</h2>
<!-- backwards compatibility -->
<a id="schemacredentialinfo"></a>
<a id="schema_CredentialInfo"></a>
<a id="tocScredentialinfo"></a>
<a id="tocscredentialinfo"></a>

```json
{
  "name": "string",
  "aws_iam_role": {
    "role_arn": "string",
    "unity_catalog_iam_arn": "string",
    "external_id": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "comment": "string",
  "owner": "string",
  "full_name": "string",
  "id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string",
  "purpose": "STORAGE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The credential name. The name must be unique within the metastore.|
|aws_iam_role|[AwsIamRoleResponse](#schemaawsiamroleresponse)|false|none|none|
|s3_compatible|[S3CompatibleResponse](#schemas3compatibleresponse)|false|none|EXPERIMENTAL. An `s3_compatible` storage credential as returned, without its write-only<br>`secret_access_key`; see `S3CompatibleRequest`.<br>|
|comment|string|false|none|Comment associated with the credential.|
|owner|string|false|none|Username of current owner of credential.|
|full_name|string|false|none|The full name of the credential.|
|id|string|false|none|The unique identifier of the credential.|
|created_at|integer(int64)|false|none|Time at which this Credential was created, in epoch milliseconds.|
|created_by|string|false|none|Username of credential creator.|
|updated_at|integer(int64)|false|none|Time at which this credential was last modified, in epoch milliseconds.|
|updated_by|string|false|none|Username of user who last modified the credential.|
|purpose|[CredentialPurpose](#schemacredentialpurpose)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|STORAGE|

<h2 id="tocS_CreateCredentialRequest">CreateCredentialRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecredentialrequest"></a>
<a id="schema_CreateCredentialRequest"></a>
<a id="tocScreatecredentialrequest"></a>
<a id="tocscreatecredentialrequest"></a>

```json
{
  "name": "string",
  "comment": "string",
  "aws_iam_role": {
    "role_arn": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "secret_access_key": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "purpose": "STORAGE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The credential name. The name must be unique within the metastore.|
|comment|string|false|none|Comment associated with the credential.|
|aws_iam_role|[AwsIamRoleRequest](#schemaawsiamrolerequest)|false|none|none|
|s3_compatible|[S3CompatibleRequest](#schemas3compatiblerequest)|false|none|EXPERIMENTAL. Available only when the server property `server.s3-compatible-storage.enabled`<br>is `true`; otherwise a create or update request that sets one, and vending for paths under<br>one, fail with `INVALID_ARGUMENT`. Access key pair of S3-compatible storage, and the<br>storage's S3 endpoint. With `assume_role`, the key pair signs AssumeRole on the storage's<br>STS, and Unity Catalog vends the resulting short-lived credentials scoped to the requested<br>path and privilege. Without `assume_role`, the key pair is the only identity, and the<br>server property `server.s3-compatible-storage.static-key-vending` decides what clients<br>receive:<br> * `endpoint-only` (default): the S3 endpoint and region, but no keys. The server uses the<br>   key pair for its own storage access; engines bring their own keys. Its<br>   `expiration_time`, an hour ahead, tells engines when they may fetch again, to pick up a<br>   changed endpoint; one that does not, such as the UC Hadoop connector, picks it up on<br>   its first table load after that time.<br> * `static-key`: the key pair itself. Its `expiration_time`, an hour ahead, only<br>   tells engines when to fetch credentials again, so that they pick up an updated key pair:<br>   the key pair stays valid until the storage rotates or revokes it, and changing Unity<br>   Catalog permissions does not revoke a key pair already vended. The storage applies the<br>   key pair's own permissions rather than the requested path and privilege. The Iceberg REST<br>   table config carries no expiration, so Iceberg clients keep the key pair until they<br>   load the table again.<br>Paths stay `s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential<br>of the external location covering it. External locations cannot overlap, so each path has<br>one storage, and one bucket name can be on several storage systems under different<br>locations. An update replaces the whole object (see `updateCredential`); changing the<br>endpoint moves every path under the credential's locations, for example to the storage's new<br>host name.<br>|
|purpose|[CredentialPurpose](#schemacredentialpurpose)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|STORAGE|

<h2 id="tocS_UpdateCredentialRequest">UpdateCredentialRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecredentialrequest"></a>
<a id="schema_UpdateCredentialRequest"></a>
<a id="tocSupdatecredentialrequest"></a>
<a id="tocsupdatecredentialrequest"></a>

```json
{
  "comment": "string",
  "owner": "string",
  "aws_iam_role": {
    "role_arn": "string"
  },
  "s3_compatible": {
    "s3_endpoint": "string",
    "access_key_id": "string",
    "secret_access_key": "string",
    "assume_role": {
      "sts_endpoint": "string",
      "role_arn": "string",
      "sts_region": "string"
    }
  },
  "new_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|Comment associated with the credential.|
|owner|string|false|none|Username of the new owner. The user must already exist.|
|aws_iam_role|[AwsIamRoleRequest](#schemaawsiamrolerequest)|false|none|none|
|s3_compatible|[S3CompatibleRequest](#schemas3compatiblerequest)|false|none|EXPERIMENTAL. Available only when the server property `server.s3-compatible-storage.enabled`<br>is `true`; otherwise a create or update request that sets one, and vending for paths under<br>one, fail with `INVALID_ARGUMENT`. Access key pair of S3-compatible storage, and the<br>storage's S3 endpoint. With `assume_role`, the key pair signs AssumeRole on the storage's<br>STS, and Unity Catalog vends the resulting short-lived credentials scoped to the requested<br>path and privilege. Without `assume_role`, the key pair is the only identity, and the<br>server property `server.s3-compatible-storage.static-key-vending` decides what clients<br>receive:<br> * `endpoint-only` (default): the S3 endpoint and region, but no keys. The server uses the<br>   key pair for its own storage access; engines bring their own keys. Its<br>   `expiration_time`, an hour ahead, tells engines when they may fetch again, to pick up a<br>   changed endpoint; one that does not, such as the UC Hadoop connector, picks it up on<br>   its first table load after that time.<br> * `static-key`: the key pair itself. Its `expiration_time`, an hour ahead, only<br>   tells engines when to fetch credentials again, so that they pick up an updated key pair:<br>   the key pair stays valid until the storage rotates or revokes it, and changing Unity<br>   Catalog permissions does not revoke a key pair already vended. The storage applies the<br>   key pair's own permissions rather than the requested path and privilege. The Iceberg REST<br>   table config carries no expiration, so Iceberg clients keep the key pair until they<br>   load the table again.<br>Paths stay `s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential<br>of the external location covering it. External locations cannot overlap, so each path has<br>one storage, and one bucket name can be on several storage systems under different<br>locations. An update replaces the whole object (see `updateCredential`); changing the<br>endpoint moves every path under the credential's locations, for example to the storage's new<br>host name.<br>|
|new_name|string|false|none|New name for the credential.|

<h2 id="tocS_AwsIamRoleArn">AwsIamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaawsiamrolearn"></a>
<a id="schema_AwsIamRoleArn"></a>
<a id="tocSawsiamrolearn"></a>
<a id="tocsawsiamrolearn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) of the AWS IAM role used to vend temporary credentials.

<h2 id="tocS_AwsIamRoleRequest">AwsIamRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaawsiamrolerequest"></a>
<a id="schema_AwsIamRoleRequest"></a>
<a id="tocSawsiamrolerequest"></a>
<a id="tocsawsiamrolerequest"></a>

```json
{
  "role_arn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_arn|[AwsIamRoleArn](#schemaawsiamrolearn)|true|none|The Amazon Resource Name (ARN) of the AWS IAM role used to vend temporary credentials.|

<h2 id="tocS_AwsIamRoleResponse">AwsIamRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaawsiamroleresponse"></a>
<a id="schema_AwsIamRoleResponse"></a>
<a id="tocSawsiamroleresponse"></a>
<a id="tocsawsiamroleresponse"></a>

```json
{
  "role_arn": "string",
  "unity_catalog_iam_arn": "string",
  "external_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_arn|[AwsIamRoleArn](#schemaawsiamrolearn)|true|none|The Amazon Resource Name (ARN) of the AWS IAM role used to vend temporary credentials.|
|unity_catalog_iam_arn|string|false|none|The Amazon Resource Name (ARN) of the AWS IAM used by the Unity Catalog Server. This is the identity that is going to assume the AWS IAM role.|
|external_id|string|false|none|The external ID used in role assumption to prevent confused deputy problem.|

<h2 id="tocS_S3CompatibleRequest">S3CompatibleRequest</h2>
<!-- backwards compatibility -->
<a id="schemas3compatiblerequest"></a>
<a id="schema_S3CompatibleRequest"></a>
<a id="tocSs3compatiblerequest"></a>
<a id="tocss3compatiblerequest"></a>

```json
{
  "s3_endpoint": "string",
  "access_key_id": "string",
  "secret_access_key": "string",
  "assume_role": {
    "sts_endpoint": "string",
    "role_arn": "string",
    "sts_region": "string"
  }
}
```

EXPERIMENTAL. Available only when the server property `server.s3-compatible-storage.enabled`
is `true`; otherwise a create or update request that sets one, and vending for paths under
one, fail with `INVALID_ARGUMENT`. Access key pair of S3-compatible storage, and the
storage's S3 endpoint. With `assume_role`, the key pair signs AssumeRole on the storage's
STS, and Unity Catalog vends the resulting short-lived credentials scoped to the requested
path and privilege. Without `assume_role`, the key pair is the only identity, and the
server property `server.s3-compatible-storage.static-key-vending` decides what clients
receive:
 * `endpoint-only` (default): the S3 endpoint and region, but no keys. The server uses the
   key pair for its own storage access; engines bring their own keys. Its
   `expiration_time`, an hour ahead, tells engines when they may fetch again, to pick up a
   changed endpoint; one that does not, such as the UC Hadoop connector, picks it up on
   its first table load after that time.
 * `static-key`: the key pair itself. Its `expiration_time`, an hour ahead, only
   tells engines when to fetch credentials again, so that they pick up an updated key pair:
   the key pair stays valid until the storage rotates or revokes it, and changing Unity
   Catalog permissions does not revoke a key pair already vended. The storage applies the
   key pair's own permissions rather than the requested path and privilege. The Iceberg REST
   table config carries no expiration, so Iceberg clients keep the key pair until they
   load the table again.
Paths stay `s3://<bucket>/<path>` everywhere: a path reaches the storage of the credential
of the external location covering it. External locations cannot overlap, so each path has
one storage, and one bucket name can be on several storage systems under different
locations. An update replaces the whole object (see `updateCredential`); changing the
endpoint moves every path under the credential's locations, for example to the storage's new
host name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3_endpoint|[S3CompatibleS3Endpoint](#schemas3compatibles3endpoint)|true|none|EXPERIMENTAL. S3 API endpoint of the S3-compatible storage, for example<br>`https://minio.example.com:9000`: an http or https URL with a host, and without user info, a<br>query or a fragment; other values fail with `INVALID_ARGUMENT`. Credential vending returns<br>it with the region engines need to reach the storage; requests to it use path-style<br>addressing.<br>|
|access_key_id|string|true|none|EXPERIMENTAL. The access key ID.|
|secret_access_key|string|true|none|EXPERIMENTAL. The secret access key. Write-only; never returned.|
|assume_role|[S3AssumeRole](#schemas3assumerole)|false|none|EXPERIMENTAL. AssumeRole on the STS of S3-compatible storage, signed with the credential's<br>key pair; see `S3CompatibleRequest`.<br>|

<h2 id="tocS_S3CompatibleResponse">S3CompatibleResponse</h2>
<!-- backwards compatibility -->
<a id="schemas3compatibleresponse"></a>
<a id="schema_S3CompatibleResponse"></a>
<a id="tocSs3compatibleresponse"></a>
<a id="tocss3compatibleresponse"></a>

```json
{
  "s3_endpoint": "string",
  "access_key_id": "string",
  "assume_role": {
    "sts_endpoint": "string",
    "role_arn": "string",
    "sts_region": "string"
  }
}
```

EXPERIMENTAL. An `s3_compatible` storage credential as returned, without its write-only
`secret_access_key`; see `S3CompatibleRequest`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3_endpoint|[S3CompatibleS3Endpoint](#schemas3compatibles3endpoint)|true|none|EXPERIMENTAL. S3 API endpoint of the S3-compatible storage, for example<br>`https://minio.example.com:9000`: an http or https URL with a host, and without user info, a<br>query or a fragment; other values fail with `INVALID_ARGUMENT`. Credential vending returns<br>it with the region engines need to reach the storage; requests to it use path-style<br>addressing.<br>|
|access_key_id|string|true|none|EXPERIMENTAL. The access key ID.|
|assume_role|[S3AssumeRole](#schemas3assumerole)|false|none|EXPERIMENTAL. AssumeRole on the STS of S3-compatible storage, signed with the credential's<br>key pair; see `S3CompatibleRequest`.<br>|

<h2 id="tocS_S3CompatibleS3Endpoint">S3CompatibleS3Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemas3compatibles3endpoint"></a>
<a id="schema_S3CompatibleS3Endpoint"></a>
<a id="tocSs3compatibles3endpoint"></a>
<a id="tocss3compatibles3endpoint"></a>

```json
"string"
```

EXPERIMENTAL. S3 API endpoint of the S3-compatible storage, for example
`https://minio.example.com:9000`: an http or https URL with a host, and without user info, a
query or a fragment; other values fail with `INVALID_ARGUMENT`. Credential vending returns
it with the region engines need to reach the storage; requests to it use path-style
addressing.

<h2 id="tocS_S3AssumeRole">S3AssumeRole</h2>
<!-- backwards compatibility -->
<a id="schemas3assumerole"></a>
<a id="schema_S3AssumeRole"></a>
<a id="tocSs3assumerole"></a>
<a id="tocss3assumerole"></a>

```json
{
  "sts_endpoint": "string",
  "role_arn": "string",
  "sts_region": "string"
}
```

EXPERIMENTAL. AssumeRole on the STS of S3-compatible storage, signed with the credential's
key pair; see `S3CompatibleRequest`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sts_endpoint|string|false|none|EXPERIMENTAL. STS endpoint of the storage to call AssumeRole on, for example<br>`https://minio.example.com:9000`: an http or https URL with a host, and without user<br>info, a query or a fragment; other values fail with `INVALID_ARGUMENT`. Absent when not<br>set: AssumeRole then goes to the credential's `s3_endpoint`, so a change of<br>`s3_endpoint` moves it too.<br>|
|role_arn|string|true|none|EXPERIMENTAL. The role to assume.|
|sts_region|string|false|none|EXPERIMENTAL. The region to sign the AssumeRole request with, of letters, digits, '.',<br>'_' and '-'. If not set, the region of the S3-compatible storage holding the requested<br>path is used.<br>|

<h2 id="tocS_ListCredentialsResponse">ListCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcredentialsresponse"></a>
<a id="schema_ListCredentialsResponse"></a>
<a id="tocSlistcredentialsresponse"></a>
<a id="tocslistcredentialsresponse"></a>

```json
{
  "credentials": [
    {
      "name": "string",
      "aws_iam_role": {
        "role_arn": "string",
        "unity_catalog_iam_arn": "string",
        "external_id": "string"
      },
      "s3_compatible": {
        "s3_endpoint": "string",
        "access_key_id": "string",
        "assume_role": {
          "sts_endpoint": "string",
          "role_arn": "string",
          "sts_region": "string"
        }
      },
      "comment": "string",
      "owner": "string",
      "full_name": "string",
      "id": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string",
      "purpose": "STORAGE"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[[CredentialInfo](#schemacredentialinfo)]|false|none|An array of credential information objects.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages.<br>__page_token__ should be set to this value for the next request (for the next page of results).<br>|

<h2 id="tocS_CredentialPurpose">CredentialPurpose</h2>
<!-- backwards compatibility -->
<a id="schemacredentialpurpose"></a>
<a id="schema_CredentialPurpose"></a>
<a id="tocScredentialpurpose"></a>
<a id="tocscredentialpurpose"></a>

```json
"STORAGE"
```

<h2 id="tocS_ExternalLocationInfo">ExternalLocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexternallocationinfo"></a>
<a id="schema_ExternalLocationInfo"></a>
<a id="tocSexternallocationinfo"></a>
<a id="tocsexternallocationinfo"></a>

```json
{
  "browse_only": true,
  "name": "string",
  "id": "string",
  "url": "string",
  "credential_name": "string",
  "comment": "string",
  "owner": "string",
  "credential_id": "string",
  "created_at": 0,
  "created_by": "string",
  "updated_at": 0,
  "updated_by": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browse_only|boolean|false|none|True when the response contains only discovery metadata authorized by BROWSE.|
|name|string|false|none|Name of the external location.|
|id|string|false|none|Unique identifier for the external location.|
|url|string|false|none|Path URL of the external location.|
|credential_name|string|false|none|Name of the storage credential used with this location. Omitted when the credential no longer exists, for example after it was force-deleted. Updating the external location with a new credential_name repairs it.|
|comment|string|false|none|User-provided free-form text description.|
|owner|string|false|none|The owner of the external location.|
|credential_id|string|false|none|Unique ID of the location's storage credential.|
|created_at|integer(int64)|false|none|Time at which this external location was created, in epoch milliseconds.|
|created_by|string|false|none|Username of external location creator.|
|updated_at|integer(int64)|false|none|Time at which external location this was last modified, in epoch milliseconds.|
|updated_by|string|false|none|Username of user who last modified the external location.|

<h2 id="tocS_CreateExternalLocation">CreateExternalLocation</h2>
<!-- backwards compatibility -->
<a id="schemacreateexternallocation"></a>
<a id="schema_CreateExternalLocation"></a>
<a id="tocScreateexternallocation"></a>
<a id="tocscreateexternallocation"></a>

```json
{
  "name": "string",
  "url": "string",
  "credential_name": "string",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the external location.|
|url|string|true|none|Path URL of the external location.|
|credential_name|string|true|none|Name of the storage credential used with this location.|
|comment|string|false|none|User-provided free-form text description.|

<h2 id="tocS_UpdateExternalLocation">UpdateExternalLocation</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexternallocation"></a>
<a id="schema_UpdateExternalLocation"></a>
<a id="tocSupdateexternallocation"></a>
<a id="tocsupdateexternallocation"></a>

```json
{
  "url": "string",
  "credential_name": "string",
  "comment": "string",
  "owner": "string",
  "new_name": "string",
  "force": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|Path URL of the external location.|
|credential_name|string|false|none|Name of the storage credential used with this location. Setting it on an external location whose credential was force-deleted repairs the location.|
|comment|string|false|none|User-provided free-form text description.|
|owner|string|false|none|Username of the new owner. The user must already exist.|
|new_name|string|false|none|New name for the external location.|
|force|boolean|false|none|Force the url change even if the external location is in use.|

<h2 id="tocS_ListExternalLocationsResponse">ListExternalLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexternallocationsresponse"></a>
<a id="schema_ListExternalLocationsResponse"></a>
<a id="tocSlistexternallocationsresponse"></a>
<a id="tocslistexternallocationsresponse"></a>

```json
{
  "external_locations": [
    {
      "browse_only": true,
      "name": "string",
      "id": "string",
      "url": "string",
      "credential_name": "string",
      "comment": "string",
      "owner": "string",
      "credential_id": "string",
      "created_at": 0,
      "created_by": "string",
      "updated_at": 0,
      "updated_by": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_locations|[[ExternalLocationInfo](#schemaexternallocationinfo)]|false|none|An array of external locations.|
|next_page_token|string|false|none|Opaque token to retrieve the next page of results. Absent if there are no more pages. __page_token__ should be set to this value for the next request (for the next page of results).|

<h2 id="tocS_DeltaCommit">DeltaCommit</h2>
<!-- backwards compatibility -->
<a id="schemadeltacommit"></a>
<a id="schema_DeltaCommit"></a>
<a id="tocSdeltacommit"></a>
<a id="tocsdeltacommit"></a>

```json
{
  "table_id": "string",
  "table_uri": "string",
  "commit_info": {
    "version": 0,
    "timestamp": 0,
    "file_name": "string",
    "file_size": 0,
    "file_modification_timestamp": 0
  },
  "latest_backfilled_version": 0,
  "metadata": {
    "description": "string",
    "schema": {
      "columns": [
        {
          "name": "string",
          "type_text": "string",
          "type_json": "string",
          "type_name": "BOOLEAN",
          "type_precision": 0,
          "type_scale": 0,
          "type_interval_type": "string",
          "position": 0,
          "comment": "string",
          "nullable": "true",
          "partition_index": 0
        }
      ]
    },
    "properties": {
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "uniform": {
    "iceberg": {
      "metadata_location": "http://example.com",
      "converted_delta_version": 0,
      "converted_delta_timestamp": "string",
      "base_converted_delta_version": 0
    }
  }
}
```

Request body for committing changes to a specified Delta table. At least one of commit_info and latest_backfilled_version must be present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table_id|string|true|none|The ID of the table to commit to. This ID uniquely identifies a table.|
|table_uri|string|true|none|The URI of the storage location of the table. If the table_id exists but the table_uri is <br>different from the one previously registered (e.g., if the client moved the table), the request will fail.<br>Example: s3://bucket-name/tables/some-table-id<br>|
|commit_info|[DeltaCommitInfo](#schemadeltacommitinfo)|false|none|Represents a Delta commit version.|
|latest_backfilled_version|integer(int64)|false|none|The highest version of the commits that have been backfilled for this table; meaning UC no longer <br>needs to keep track of commits of versions <= this version.<br>|
|metadata|[DeltaMetadata](#schemadeltametadata)|false|none|Represents a Delta metadata action (see https://github.com/delta-io/delta/blob/master/PROTOCOL.md#change-metadata for more information).|
|uniform|[DeltaUniform](#schemadeltauniform)|false|none|Optional UniForm metadata to be committed alongside this Delta commit. Whether this field is<br>strictly required by a UC API compatible implementation is left up to the implementation.<br>It is set by UniForm conversion processes after converting a Delta commit. When set, <br>UC will atomically update the table's format-specific metadata (e.g. DeltaUniformIceberg),<br>keeping the conversion state synchronized with the Delta version.<br>Uniform enables Delta tables to be read by other table formats (e.g., Iceberg) without data conversion.<br>Independent of the `metadata` field, both can be provided together or separately.<br>|

<h2 id="tocS_DeltaMetadata">DeltaMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeltametadata"></a>
<a id="schema_DeltaMetadata"></a>
<a id="tocSdeltametadata"></a>
<a id="tocsdeltametadata"></a>

```json
{
  "description": "string",
  "schema": {
    "columns": [
      {
        "name": "string",
        "type_text": "string",
        "type_json": "string",
        "type_name": "BOOLEAN",
        "type_precision": 0,
        "type_scale": 0,
        "type_interval_type": "string",
        "position": 0,
        "comment": "string",
        "nullable": "true",
        "partition_index": 0
      }
    ]
  },
  "properties": {
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Represents a Delta metadata action (see https://github.com/delta-io/delta/blob/master/PROTOCOL.md#change-metadata for more information).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The table comment.|
|schema|[ColumnInfos](#schemacolumninfos)|false|none|The schema of the table.|
|properties|[DeltaCommitMetadataProperties](#schemadeltacommitmetadataproperties)|false|none|The properties of the Delta table. Updated by UC if set.|

<h2 id="tocS_DeltaCommitMetadataProperties">DeltaCommitMetadataProperties</h2>
<!-- backwards compatibility -->
<a id="schemadeltacommitmetadataproperties"></a>
<a id="schema_DeltaCommitMetadataProperties"></a>
<a id="tocSdeltacommitmetadataproperties"></a>
<a id="tocsdeltacommitmetadataproperties"></a>

```json
{
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

The properties of the Delta table. Updated by UC if set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[SecurablePropertiesMap](#schemasecurablepropertiesmap)|false|none|A map of key-value properties attached to the securable.|

<h2 id="tocS_ColumnInfos">ColumnInfos</h2>
<!-- backwards compatibility -->
<a id="schemacolumninfos"></a>
<a id="schema_ColumnInfos"></a>
<a id="tocScolumninfos"></a>
<a id="tocscolumninfos"></a>

```json
{
  "columns": [
    {
      "name": "string",
      "type_text": "string",
      "type_json": "string",
      "type_name": "BOOLEAN",
      "type_precision": 0,
      "type_scale": 0,
      "type_interval_type": "string",
      "position": 0,
      "comment": "string",
      "nullable": "true",
      "partition_index": 0
    }
  ]
}
```

The schema of the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ColumnInfo](#schemacolumninfo)]|false|none|The array of column descriptions.|

<h2 id="tocS_DeltaCommitInfo">DeltaCommitInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeltacommitinfo"></a>
<a id="schema_DeltaCommitInfo"></a>
<a id="tocSdeltacommitinfo"></a>
<a id="tocsdeltacommitinfo"></a>

```json
{
  "version": 0,
  "timestamp": 0,
  "file_name": "string",
  "file_size": 0,
  "file_modification_timestamp": 0
}
```

Represents a Delta commit version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer(int64)|true|none|The version of this commit.|
|timestamp|integer(int64)|true|none|The timestamp for when the commit was made. This is the in-commit timestamp as produced by the Delta client writing to the table.|
|file_name|string|true|none|The filename of the UUID-based commit file.|
|file_size|integer(int64)|true|none|The size of the commit file in bytes.|
|file_modification_timestamp|integer(int64)|true|none|The modification time of the commit file. This is the mod time of the file as written to the file system.|

<h2 id="tocS_DeltaCommitResponse">DeltaCommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeltacommitresponse"></a>
<a id="schema_DeltaCommitResponse"></a>
<a id="tocSdeltacommitresponse"></a>
<a id="tocsdeltacommitresponse"></a>

```json
{}
```

The response for the Delta commit action

<h2 id="tocS_DeltaUniform">DeltaUniform</h2>
<!-- backwards compatibility -->
<a id="schemadeltauniform"></a>
<a id="schema_DeltaUniform"></a>
<a id="tocSdeltauniform"></a>
<a id="tocsdeltauniform"></a>

```json
{
  "iceberg": {
    "metadata_location": "http://example.com",
    "converted_delta_version": 0,
    "converted_delta_timestamp": "string",
    "base_converted_delta_version": 0
  }
}
```

Uniform metadata that can be atomically committed alongside a Delta commit.
Uniform enables Delta tables to be read by other table formats (e.g. Iceberg)
without data conversion. When this message is provided in a Commit request,
UC will atomically update the table's format-specific metadata during the commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iceberg|[DeltaUniformIceberg](#schemadeltauniformiceberg)|true|none|Metadata for Delta UniForm Iceberg conversion.|

<h2 id="tocS_DeltaUniformIceberg">DeltaUniformIceberg</h2>
<!-- backwards compatibility -->
<a id="schemadeltauniformiceberg"></a>
<a id="schema_DeltaUniformIceberg"></a>
<a id="tocSdeltauniformiceberg"></a>
<a id="tocsdeltauniformiceberg"></a>

```json
{
  "metadata_location": "http://example.com",
  "converted_delta_version": 0,
  "converted_delta_timestamp": "string",
  "base_converted_delta_version": 0
}
```

Iceberg conversion metadata tracking the Delta-to-Iceberg conversion state.
It contains the metadata location pointer, converted Delta version, timestamp, and 
optional base converted Delta version of the corresponding conversion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata_location|string(uri)|true|none|The latest Iceberg metadata location.<br>Example: s3://abc/def/metadata/v1.json<br>|
|converted_delta_version|integer(int64)|true|none|The Delta version that was converted to Iceberg to produce the Iceberg metadata location.<br>It should match the Delta version in the commit info.<br>Example: 1044<br>|
|converted_delta_timestamp|string|true|none|The timestamp that Delta finished conversion to produce the Iceberg metadata location.<br>The string must represent a valid instant in UTC with ISO 8601 format.<br>Example: 2025-01-04T03:13:11.423Z<br>|
|base_converted_delta_version|integer(int64)|false|none|Optional Delta version used to incrementally convert Delta changes to Iceberg changes to<br>produce the latest Iceberg metadata at the metadata_location.<br>Example: 1042<br>|

<h2 id="tocS_DeltaGetCommits">DeltaGetCommits</h2>
<!-- backwards compatibility -->
<a id="schemadeltagetcommits"></a>
<a id="schema_DeltaGetCommits"></a>
<a id="tocSdeltagetcommits"></a>
<a id="tocsdeltagetcommits"></a>

```json
{
  "table_id": "string",
  "table_uri": "string",
  "start_version": 0,
  "end_version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|table_id|string|true|none|The ID of the table to get the commits for. This ID uniquely identifies a table.|
|table_uri|string|true|none|The URI of the storage location of the table. If the table_id exists but the table_uri is <br>different from the one previously registered (e.g., if the client moved the table), the request will fail.<br>Example: s3://bucket-name/tables/some-table-id<br>|
|start_version|integer(int64)|true|none|The start version from which to retrieve commits (inclusive). This along with the<br>optional end_version specifies the range of commit versions that this request wants.<br>|
|end_version|integer(int64)|false|none|The end version upto which to retrieve commits (inclusive).<br>If not set, the latest version will be used as the end version. This does not affect the<br>latest_table_version in the response.<br>If num of commits that meet this criteria is larger than a limit set by server config,<br>the response will be limited to the first X commits. Call can send request again with a<br>larger start_version according to the response to get the remaining commits.<br>|

<h2 id="tocS_DeltaGetCommitsResponse">DeltaGetCommitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeltagetcommitsresponse"></a>
<a id="schema_DeltaGetCommitsResponse"></a>
<a id="tocSdeltagetcommitsresponse"></a>
<a id="tocsdeltagetcommitsresponse"></a>

```json
{
  "commits": [
    {
      "version": 0,
      "timestamp": 0,
      "file_name": "string",
      "file_size": 0,
      "file_modification_timestamp": 0
    }
  ],
  "latest_table_version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commits|[[DeltaCommitInfo](#schemadeltacommitinfo)]|true|none|The list of unbackfilled Delta table commits. Can be in arbitrary order.|
|latest_table_version|integer(int64)|true|none|Represents the latest version of the table tracked by UC. For a newly created managed table<br>with no commits, this returns 0. Use this field to manage pagination —<br>if the returned commits don't cover the range up to latest_table_version or end_version (whichever is smaller),<br>it indicates that more unbackfilled commits may be available.<br>|
