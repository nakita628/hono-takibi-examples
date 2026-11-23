type GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope = {
  includeGcpPublicDatasets?: boolean | undefined
  includeOrgIds?: string[] | undefined
  includeProjectIds?: string[] | undefined
  restrictedLocations?: string[] | undefined
}
type GoogleCloudDatacatalogV1beta1SearchCatalogRequest = {
  orderBy?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  query?: string | undefined
  scope?: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope | undefined
}
type GoogleCloudDatacatalogV1beta1SearchCatalogResult = {
  linkedResource?: string | undefined
  modifyTime?: string | undefined
  relativeResourceName?: string | undefined
  searchResultSubtype?: string | undefined
  searchResultType?:
    | 'SEARCH_RESULT_TYPE_UNSPECIFIED'
    | 'ENTRY'
    | 'TAG_TEMPLATE'
    | 'ENTRY_GROUP'
    | undefined
}
type GoogleCloudDatacatalogV1beta1SearchCatalogResponse = {
  nextPageToken?: string | undefined
  results?: GoogleCloudDatacatalogV1beta1SearchCatalogResult[] | undefined
  totalSize?: number | undefined
  unreachable?: string[] | undefined
}
type GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec = {
  dataset?: string | undefined
  shardCount?: string | undefined
  tablePrefix?: string | undefined
}
type GoogleCloudDatacatalogV1beta1TableSpec = { groupedEntry?: string | undefined }
type GoogleCloudDatacatalogV1beta1ViewSpec = { viewQuery?: string | undefined }
type GoogleCloudDatacatalogV1beta1BigQueryTableSpec = {
  tableSourceType?:
    | 'TABLE_SOURCE_TYPE_UNSPECIFIED'
    | 'BIGQUERY_VIEW'
    | 'BIGQUERY_TABLE'
    | 'BIGQUERY_MATERIALIZED_VIEW'
    | undefined
  tableSpec?: GoogleCloudDatacatalogV1beta1TableSpec | undefined
  viewSpec?: GoogleCloudDatacatalogV1beta1ViewSpec | undefined
}
type GoogleCloudDatacatalogV1beta1SystemTimestamps = {
  createTime?: string | undefined
  expireTime?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDatacatalogV1beta1GcsFileSpec = {
  filePath?: string | undefined
  gcsTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps | undefined
  sizeBytes?: string | undefined
}
type GoogleCloudDatacatalogV1beta1GcsFilesetSpec = {
  filePatterns?: string[] | undefined
  sampleGcsFileSpecs?: GoogleCloudDatacatalogV1beta1GcsFileSpec[] | undefined
}
type GoogleCloudDatacatalogV1beta1ColumnSchema = {
  column?: string | undefined
  description?: string | undefined
  mode?: string | undefined
  subcolumns?: GoogleCloudDatacatalogV1beta1ColumnSchema[] | undefined
  type?: string | undefined
}
type GoogleCloudDatacatalogV1beta1Schema = {
  columns?: GoogleCloudDatacatalogV1beta1ColumnSchema[] | undefined
}
type GoogleCloudDatacatalogV1beta1UsageStats = {
  totalCancellations?: number | undefined
  totalCompletions?: number | undefined
  totalExecutionTimeForCompletionsMillis?: number | undefined
  totalFailures?: number | undefined
}
type GoogleCloudDatacatalogV1beta1UsageSignal = {
  updateTime?: string | undefined
  usageWithinTimeRange?: { [x: string]: GoogleCloudDatacatalogV1beta1UsageStats } | undefined
}
type GoogleCloudDatacatalogV1beta1Entry = {
  bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec | undefined
  bigqueryTableSpec?: GoogleCloudDatacatalogV1beta1BigQueryTableSpec | undefined
  description?: string | undefined
  displayName?: string | undefined
  gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpec | undefined
  integratedSystem?: 'INTEGRATED_SYSTEM_UNSPECIFIED' | 'BIGQUERY' | 'CLOUD_PUBSUB' | undefined
  linkedResource?: string | undefined
  name?: string | undefined
  schema?: GoogleCloudDatacatalogV1beta1Schema | undefined
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps | undefined
  type?: 'ENTRY_TYPE_UNSPECIFIED' | 'TABLE' | 'MODEL' | 'DATA_STREAM' | 'FILESET' | undefined
  usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal | undefined
  userSpecifiedSystem?: string | undefined
  userSpecifiedType?: string | undefined
}
type Empty = { [x: string]: unknown }
type GoogleCloudDatacatalogV1beta1PolicyTag = {
  childPolicyTags?: string[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  parentPolicyTag?: string | undefined
}
type GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest = {
  newEnumValueDisplayName?: string | undefined
}
type GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue = { displayName?: string | undefined }
type GoogleCloudDatacatalogV1beta1FieldTypeEnumType = {
  allowedValues?: GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[] | undefined
}
type GoogleCloudDatacatalogV1beta1FieldType = {
  enumType?: GoogleCloudDatacatalogV1beta1FieldTypeEnumType | undefined
  primitiveType?:
    | 'PRIMITIVE_TYPE_UNSPECIFIED'
    | 'DOUBLE'
    | 'STRING'
    | 'BOOL'
    | 'TIMESTAMP'
    | undefined
}
type GoogleCloudDatacatalogV1beta1TagTemplateField = {
  description?: string | undefined
  displayName?: string | undefined
  isRequired?: boolean | undefined
  name?: string | undefined
  order?: number | undefined
  type?: GoogleCloudDatacatalogV1beta1FieldType | undefined
}
type GoogleCloudDatacatalogV1beta1ListEntriesResponse = {
  entries?: GoogleCloudDatacatalogV1beta1Entry[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatacatalogV1beta1EntryGroup = {
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse = {
  entryGroups?: GoogleCloudDatacatalogV1beta1EntryGroup[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse = {
  nextPageToken?: string | undefined
  policyTags?: GoogleCloudDatacatalogV1beta1PolicyTag[] | undefined
}
type GoogleCloudDatacatalogV1beta1TagTemplate = {
  displayName?: string | undefined
  fields?: { [x: string]: GoogleCloudDatacatalogV1beta1TagTemplateField } | undefined
  name?: string | undefined
}
type GoogleCloudDatacatalogV1beta1TagFieldEnumValue = { displayName?: string | undefined }
type GoogleCloudDatacatalogV1beta1TagField = {
  boolValue?: boolean | undefined
  displayName?: string | undefined
  doubleValue?: number | undefined
  enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue | undefined
  order?: number | undefined
  stringValue?: string | undefined
  timestampValue?: string | undefined
}
type GoogleCloudDatacatalogV1beta1Tag = {
  column?: string | undefined
  fields?: { [x: string]: GoogleCloudDatacatalogV1beta1TagField } | undefined
  name?: string | undefined
  template?: string | undefined
  templateDisplayName?: string | undefined
}
type GoogleCloudDatacatalogV1beta1ListTagsResponse = {
  nextPageToken?: string | undefined
  tags?: GoogleCloudDatacatalogV1beta1Tag[] | undefined
}
type GoogleCloudDatacatalogV1beta1TaxonomyService = {
  identity?: string | undefined
  name?:
    | 'MANAGING_SYSTEM_UNSPECIFIED'
    | 'MANAGING_SYSTEM_DATAPLEX'
    | 'MANAGING_SYSTEM_OTHER'
    | undefined
}
type GoogleCloudDatacatalogV1beta1Taxonomy = {
  activatedPolicyTypes?: ('POLICY_TYPE_UNSPECIFIED' | 'FINE_GRAINED_ACCESS_CONTROL')[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  policyTagCount?: number | undefined
  service?: GoogleCloudDatacatalogV1beta1TaxonomyService | undefined
  taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps | undefined
}
type GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse = {
  nextPageToken?: string | undefined
  taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[] | undefined
}
type GoogleCloudDatacatalogV1beta1SerializedPolicyTag = {
  childPolicyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  policyTag?: string | undefined
}
type GoogleCloudDatacatalogV1beta1SerializedTaxonomy = {
  activatedPolicyTypes?: ('POLICY_TYPE_UNSPECIFIED' | 'FINE_GRAINED_ACCESS_CONTROL')[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  policyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[] | undefined
}
type GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse = {
  taxonomies?: GoogleCloudDatacatalogV1beta1SerializedTaxonomy[] | undefined
}
type GoogleCloudDatacatalogV1beta1InlineSource = {
  taxonomies?: GoogleCloudDatacatalogV1beta1SerializedTaxonomy[] | undefined
}
type GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest = {
  inlineSource?: GoogleCloudDatacatalogV1beta1InlineSource | undefined
}
type GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse = {
  taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[] | undefined
}
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/catalog:search': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1SearchCatalogRequest }
        output: GoogleCloudDatacatalogV1beta1SearchCatalogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/entries:lookup': {
      $get: {
        input: {
          query: {
            linkedResource?: string | undefined
            sqlResource?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1Entry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1PolicyTag
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1PolicyTag }
        output: GoogleCloudDatacatalogV1beta1PolicyTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:rename': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest }
        output: GoogleCloudDatacatalogV1beta1TagTemplateField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/entries': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1ListEntriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            entryId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1Entry }
        output: GoogleCloudDatacatalogV1beta1Entry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/entryGroups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            entryGroupId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1EntryGroup }
        output: GoogleCloudDatacatalogV1beta1EntryGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fields': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            tagTemplateFieldId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1TagTemplateField }
        output: GoogleCloudDatacatalogV1beta1TagTemplateField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/policyTags': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1PolicyTag }
        output: GoogleCloudDatacatalogV1beta1PolicyTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/tagTemplates': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            tagTemplateId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1TagTemplate }
        output: GoogleCloudDatacatalogV1beta1TagTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/tags': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1Tag }
        output: GoogleCloudDatacatalogV1beta1Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/taxonomies': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1Taxonomy }
        output: GoogleCloudDatacatalogV1beta1Taxonomy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/taxonomies:export': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            serializedTaxonomies?: boolean | undefined
            taxonomies?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/taxonomies:import': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest }
        output: GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
