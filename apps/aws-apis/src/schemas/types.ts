type String = string
type CreateDiscovererResponse = {
  Description?: {} | undefined
  DiscovererArn?: {} | undefined
  DiscovererId?: {} | undefined
  SourceArn?: {} | undefined
  State?: {} | undefined
  CrossAccount?: {} | undefined
  Tags?: {} | undefined
}
type ListDiscoverersResponse = { Discoverers?: {} | undefined; NextToken?: {} | undefined }
type CreateRegistryResponse = {
  Description?: {} | undefined
  RegistryArn?: {} | undefined
  RegistryName?: {} | undefined
  Tags?: {} | undefined
}
type DescribeRegistryResponse = {
  Description?: {} | undefined
  RegistryArn?: {} | undefined
  RegistryName?: {} | undefined
  Tags?: {} | undefined
}
type UpdateRegistryResponse = {
  Description?: {} | undefined
  RegistryArn?: {} | undefined
  RegistryName?: {} | undefined
  Tags?: {} | undefined
}
type CreateSchemaResponse = {
  Description?: {} | undefined
  LastModified?: {} | undefined
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  SchemaVersion?: {} | undefined
  Tags?: {} | undefined
  Type?: {} | undefined
  VersionCreatedDate?: {} | undefined
}
type DescribeSchemaResponse = {
  Content?: {} | undefined
  Description?: {} | undefined
  LastModified?: {} | undefined
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  SchemaVersion?: {} | undefined
  Tags?: {} | undefined
  Type?: {} | undefined
  VersionCreatedDate?: {} | undefined
}
type UpdateSchemaResponse = {
  Description?: {} | undefined
  LastModified?: {} | undefined
  SchemaArn?: {} | undefined
  SchemaName?: {} | undefined
  SchemaVersion?: {} | undefined
  Tags?: {} | undefined
  Type?: {} | undefined
  VersionCreatedDate?: {} | undefined
}
type DescribeDiscovererResponse = {
  Description?: {} | undefined
  DiscovererArn?: {} | undefined
  DiscovererId?: {} | undefined
  SourceArn?: {} | undefined
  State?: {} | undefined
  CrossAccount?: {} | undefined
  Tags?: {} | undefined
}
type UpdateDiscovererResponse = {
  Description?: {} | undefined
  DiscovererArn?: {} | undefined
  DiscovererId?: {} | undefined
  SourceArn?: {} | undefined
  State?: {} | undefined
  CrossAccount?: {} | undefined
  Tags?: {} | undefined
}
type GetResourcePolicyResponse = { Policy?: {} | undefined; RevisionId?: {} | undefined }
type PutResourcePolicyResponse = { Policy?: {} | undefined; RevisionId?: {} | undefined }
type DescribeCodeBindingResponse = {
  CreationDate?: {} | undefined
  LastModified?: {} | undefined
  SchemaVersion?: {} | undefined
  Status?: {} | undefined
}
type PutCodeBindingResponse = {
  CreationDate?: {} | undefined
  LastModified?: {} | undefined
  SchemaVersion?: {} | undefined
  Status?: {} | undefined
}
type ExportSchemaResponse = {
  Content?: String | undefined
  SchemaArn?: String | undefined
  SchemaName?: String | undefined
  SchemaVersion?: String | undefined
  Type?: String | undefined
}
type Body = string
type GetCodeBindingSourceResponse = { Body?: Body | undefined }
type GetDiscoveredSchemaVersionItemInput = string
type GetDiscoveredSchemaResponse = { Content?: {} | undefined }
type ListRegistriesResponse = { NextToken?: {} | undefined; Registries?: {} | undefined }
type ListSchemaVersionsResponse = { NextToken?: {} | undefined; SchemaVersions?: {} | undefined }
type ListSchemasResponse = { NextToken?: {} | undefined; Schemas?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type SearchSchemasResponse = { NextToken?: {} | undefined; Schemas?: {} | undefined }
type StartDiscovererResponse = { DiscovererId?: {} | undefined; State?: {} | undefined }
type StopDiscovererResponse = { DiscovererId?: {} | undefined; State?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/discoverers': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            SourceArn: string
            CrossAccount?: boolean | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateDiscovererResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            discovererIdPrefix?: string | undefined
            limit?: number | undefined
            nextToken?: string | undefined
            sourceArnPrefix?: string | undefined
            Limit?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDiscoverersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries/name/:registryName': {
      $post: {
        input: { param: { registryName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { Description?: string | undefined; tags?: { [x: string]: String } | undefined }
        }
        output: CreateRegistryResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { registryName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { registryName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeRegistryResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { registryName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined } }
        output: UpdateRegistryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/name/:schemaName': {
      $post: {
        input: { param: { registryName: string; schemaName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Content: string
            Description?: string | undefined
            tags?: { [x: string]: String } | undefined
            Type: 'OpenApi3' | 'JSONSchemaDraft4'
          }
        }
        output: CreateSchemaResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { registryName: string; schemaName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { registryName: string; schemaName: string } } & {
          query: { schemaVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeSchemaResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { registryName: string; schemaName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ClientTokenId?: string | undefined
            Content?: string | undefined
            Description?: string | undefined
            Type?: 'OpenApi3' | 'JSONSchemaDraft4' | undefined
          }
        }
        output: UpdateSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/discoverers/id/:discovererId': {
      $delete: {
        input: { param: { discovererId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { discovererId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDiscovererResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { discovererId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined; CrossAccount?: boolean | undefined } }
        output: UpdateDiscovererResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/policy': {
      $delete: {
        input: { query: { registryName?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { query: { registryName?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { registryName?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy: string; RevisionId?: string | undefined } }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/name/:schemaName/version/:schemaVersion': {
      $delete: {
        input: { param: { registryName: string; schemaName: string; schemaVersion: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language': {
      $get: {
        input: { param: { language: string; registryName: string; schemaName: string } } & {
          query: { schemaVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeCodeBindingResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { language: string; registryName: string; schemaName: string } } & {
          query: { schemaVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PutCodeBindingResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/name/:schemaName/export#type': {
      $get: {
        input: { param: { registryName: string; schemaName: string } } & {
          query: { schemaVersion?: string | undefined; type: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExportSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/name/:schemaName/language/:language/source': {
      $get: {
        input: { param: { language: string; registryName: string; schemaName: string } } & {
          query: { schemaVersion?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCodeBindingSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/discover': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Events: GetDiscoveredSchemaVersionItemInput[]
            Type: 'OpenApi3' | 'JSONSchemaDraft4'
          }
        }
        output: GetDiscoveredSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            nextToken?: string | undefined
            registryNamePrefix?: string | undefined
            scope?: string | undefined
            Limit?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListRegistriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/name/:schemaName/versions': {
      $get: {
        input: { param: { registryName: string; schemaName: string } } & {
          query: {
            limit?: number | undefined
            nextToken?: string | undefined
            Limit?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSchemaVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas': {
      $get: {
        input: { param: { registryName: string } } & {
          query: {
            limit?: number | undefined
            nextToken?: string | undefined
            schemaNamePrefix?: string | undefined
            Limit?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource-arn': {
      $get: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/registries/name/:registryName/schemas/search#keywords': {
      $get: {
        input: { param: { registryName: string } } & {
          query: {
            keywords: string
            limit?: number | undefined
            nextToken?: string | undefined
            Limit?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SearchSchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/discoverers/id/:discovererId/start': {
      $post: {
        input: { param: { discovererId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartDiscovererResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/discoverers/id/:discovererId/stop': {
      $post: {
        input: { param: { discovererId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopDiscovererResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
