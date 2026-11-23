type GoogleCloudPrivatecatalogproducerV1beta1Catalog = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  parent?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse = {
  catalogs?: GoogleCloudPrivatecatalogproducerV1beta1Catalog[] | undefined
  nextPageToken?: string | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudPrivatecatalogproducerV1beta1Version = {
  asset?: { [x: string]: { [x: string]: unknown } } | undefined
  createTime?: string | undefined
  description?: string | undefined
  name?: string | undefined
  originalAsset?: { [x: string]: { [x: string]: unknown } } | undefined
  updateTime?: string | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest = {
  destinationProductName?: string | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest = { [x: string]: unknown }
type GoogleCloudPrivatecatalogproducerV1beta1Association = {
  createTime?: string | undefined
  name?: string | undefined
  resource?: string | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse = {
  associations?: GoogleCloudPrivatecatalogproducerV1beta1Association[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest = {
  association?: GoogleCloudPrivatecatalogproducerV1beta1Association | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1Product = {
  assetType?: string | undefined
  createTime?: string | undefined
  displayMetadata?: { [x: string]: { [x: string]: unknown } } | undefined
  iconUri?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse = {
  nextPageToken?: string | undefined
  products?: GoogleCloudPrivatecatalogproducerV1beta1Product[] | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse = {
  nextPageToken?: string | undefined
  versions?: GoogleCloudPrivatecatalogproducerV1beta1Version[] | undefined
}
type GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest = { icon?: string | undefined }
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = {
  policy?: GoogleIamV1Policy | undefined
  updateMask?: string | undefined
}
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/catalogs': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            parent?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1Catalog }
        output: GoogleLongrunningOperation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/operations': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            name?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogproducerV1beta1Version
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1Version }
        output: GoogleCloudPrivatecatalogproducerV1beta1Version
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleLongrunningCancelOperationRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:copy': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:undelete': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest }
        output: GoogleCloudPrivatecatalogproducerV1beta1Catalog
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/associations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest }
        output: GoogleCloudPrivatecatalogproducerV1beta1Association
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/products': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1Product }
        output: GoogleCloudPrivatecatalogproducerV1beta1Product
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/versions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1Version }
        output: GoogleLongrunningOperation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:product/icons:upload': {
      $post: {
        input: { param: { product: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        }
        output: GoogleIamV1Policy
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            alt?: 'json' | 'media' | 'proto' | undefined
            key?: string | undefined
            access_token?: string | undefined
            upload_protocol?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            oauth_token?: string | undefined
            callback?: string | undefined
          }
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
