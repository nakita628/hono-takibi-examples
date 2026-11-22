type GoogleChromePolicyVersionsV1UploadPolicyFileRequest = { policyField?: string | undefined }
type GoogleChromePolicyVersionsV1UploadPolicyFileResponse = { downloadUri?: string | undefined }
type GoogleChromePolicyVersionsV1PolicyTargetKey = {
  additionalTargetKeys?: { [x: string]: string } | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest = {
  policySchema?: string | undefined
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
}
type GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = {
  requests?: GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[] | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleChromePolicyVersionsV1PolicyValue = {
  policySchema?: string | undefined
  value?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest = {
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
  policyValue?: GoogleChromePolicyVersionsV1PolicyValue | undefined
  updateMask?: string | undefined
}
type GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest = {
  requests?: GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest[] | undefined
}
type GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest = {
  policyNamespace?: string | undefined
  policySchema?: string | undefined
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
}
type GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse = {
  groupIds?: string[] | undefined
  policyNamespace?: string | undefined
  policySchema?: string | undefined
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
}
type GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest = {
  groupIds?: string[] | undefined
  policyNamespace?: string | undefined
  policySchema?: string | undefined
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
}
type GoogleChromePolicyVersionsV1NetworkSetting = {
  policySchema?: string | undefined
  value?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleChromePolicyVersionsV1DefineCertificateRequest = {
  ceritificateName?: string | undefined
  certificate?: string | undefined
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[] | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1DefineCertificateResponse = {
  networkId?: string | undefined
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[] | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1DefineNetworkRequest = {
  name?: string | undefined
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[] | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1DefineNetworkResponse = {
  networkId?: string | undefined
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[] | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1RemoveCertificateRequest = {
  networkId?: string | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1RemoveCertificateResponse = { [x: string]: unknown }
type GoogleChromePolicyVersionsV1RemoveNetworkRequest = {
  networkId?: string | undefined
  targetResource?: string | undefined
}
type GoogleChromePolicyVersionsV1RemoveNetworkResponse = { [x: string]: unknown }
type GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest = {
  policySchema?: string | undefined
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
}
type GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest = {
  requests?: GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest[] | undefined
}
type GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest = {
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
  policyValue?: GoogleChromePolicyVersionsV1PolicyValue | undefined
  updateMask?: string | undefined
}
type GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest = {
  requests?: GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest[] | undefined
}
type GoogleChromePolicyVersionsV1ResolveRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
  policySchemaFilter?: string | undefined
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
}
type GoogleChromePolicyVersionsV1ResolvedPolicy = {
  addedSourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
  sourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
  targetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey | undefined
  value?: GoogleChromePolicyVersionsV1PolicyValue | undefined
}
type GoogleChromePolicyVersionsV1ResolveResponse = {
  nextPageToken?: string | undefined
  resolvedPolicies?: GoogleChromePolicyVersionsV1ResolvedPolicy[] | undefined
}
type GoogleChromePolicyVersionsV1AdditionalTargetKeyName = {
  key?: string | undefined
  keyDescription?: string | undefined
}
type Proto2EnumValueDescriptorProto = { name?: string | undefined; number?: number | undefined }
type Proto2EnumDescriptorProto = {
  name?: string | undefined
  value?: Proto2EnumValueDescriptorProto[] | undefined
}
type Proto2FieldDescriptorProto = {
  defaultValue?: string | undefined
  jsonName?: string | undefined
  label?: 'LABEL_OPTIONAL' | 'LABEL_REQUIRED' | 'LABEL_REPEATED' | undefined
  name?: string | undefined
  number?: number | undefined
  oneofIndex?: number | undefined
  proto3Optional?: boolean | undefined
  type?:
    | 'TYPE_DOUBLE'
    | 'TYPE_FLOAT'
    | 'TYPE_INT64'
    | 'TYPE_UINT64'
    | 'TYPE_INT32'
    | 'TYPE_FIXED64'
    | 'TYPE_FIXED32'
    | 'TYPE_BOOL'
    | 'TYPE_STRING'
    | 'TYPE_GROUP'
    | 'TYPE_MESSAGE'
    | 'TYPE_BYTES'
    | 'TYPE_UINT32'
    | 'TYPE_ENUM'
    | 'TYPE_SFIXED32'
    | 'TYPE_SFIXED64'
    | 'TYPE_SINT32'
    | 'TYPE_SINT64'
    | undefined
  typeName?: string | undefined
}
type Proto2OneofDescriptorProto = { name?: string | undefined }
type Proto2DescriptorProto = {
  enumType?: Proto2EnumDescriptorProto[] | undefined
  field?: Proto2FieldDescriptorProto[] | undefined
  name?: string | undefined
  nestedType?: Proto2DescriptorProto[] | undefined
  oneofDecl?: Proto2OneofDescriptorProto[] | undefined
}
type Proto2FileDescriptorProto = {
  enumType?: Proto2EnumDescriptorProto[] | undefined
  messageType?: Proto2DescriptorProto[] | undefined
  name?: string | undefined
  package?: string | undefined
  syntax?: string | undefined
}
type GoogleChromePolicyVersionsV1NumericRangeConstraint = {
  maximum?: string | undefined
  minimum?: string | undefined
}
type GoogleChromePolicyVersionsV1FieldConstraints = {
  numericRangeConstraint?: GoogleChromePolicyVersionsV1NumericRangeConstraint | undefined
}
type GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies = {
  sourceField?: string | undefined
  sourceFieldValue?: string | undefined
}
type GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription = {
  description?: string | undefined
  value?: string | undefined
}
type GoogleChromePolicyVersionsV1PolicySchemaRequiredItems = {
  fieldConditions?: string[] | undefined
  requiredFields?: string[] | undefined
}
type GoogleChromePolicyVersionsV1PolicySchemaFieldDescription = {
  defaultValue?: { [x: string]: unknown } | undefined
  description?: string | undefined
  field?: string | undefined
  fieldConstraints?: GoogleChromePolicyVersionsV1FieldConstraints | undefined
  fieldDependencies?: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies[] | undefined
  fieldDescription?: string | undefined
  inputConstraint?: string | undefined
  knownValueDescriptions?:
    | GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription[]
    | undefined
  name?: string | undefined
  nestedFieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[] | undefined
  requiredItems?: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems[] | undefined
}
type GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription = {
  acknowledgementRequired?: boolean | undefined
  field?: string | undefined
  noticeMessage?: string | undefined
  noticeValue?: string | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle = {
  deprecatedInFavorOf?: string[] | undefined
  description?: string | undefined
  endSupport?: GoogleTypeDate | undefined
  policyApiLifecycleStage?:
    | 'API_UNSPECIFIED'
    | 'API_PREVIEW'
    | 'API_DEVELOPMENT'
    | 'API_CURRENT'
    | 'API_DEPRECATED'
    | undefined
}
type GoogleChromePolicyVersionsV1PolicySchema = {
  accessRestrictions?: string[] | undefined
  additionalTargetKeyNames?: GoogleChromePolicyVersionsV1AdditionalTargetKeyName[] | undefined
  categoryTitle?: string | undefined
  definition?: Proto2FileDescriptorProto | undefined
  fieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[] | undefined
  name?: string | undefined
  notices?: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription[] | undefined
  policyApiLifecycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle | undefined
  policyDescription?: string | undefined
  schemaName?: string | undefined
  supportUri?: string | undefined
  validTargetResources?: ('TARGET_RESOURCE_UNSPECIFIED' | 'ORG_UNIT' | 'GROUP')[] | undefined
}
type GoogleChromePolicyVersionsV1ListPolicySchemasResponse = {
  nextPageToken?: string | undefined
  policySchemas?: GoogleChromePolicyVersionsV1PolicySchema[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:customer/policies/files:uploadPolicyFile': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1UploadPolicyFileRequest }
        output: GoogleChromePolicyVersionsV1UploadPolicyFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/groups:batchDelete': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/groups:batchModify': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/groups:listGroupPriorityOrdering': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest }
        output: GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/groups:updateGroupPriorityOrdering': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/networks:defineCertificate': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1DefineCertificateRequest }
        output: GoogleChromePolicyVersionsV1DefineCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/networks:defineNetwork': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1DefineNetworkRequest }
        output: GoogleChromePolicyVersionsV1DefineNetworkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/networks:removeCertificate': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1RemoveCertificateRequest }
        output: GoogleChromePolicyVersionsV1RemoveCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/networks:removeNetwork': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1RemoveNetworkRequest }
        output: GoogleChromePolicyVersionsV1RemoveNetworkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/orgunits:batchInherit': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies/orgunits:batchModify': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/policies:resolve': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleChromePolicyVersionsV1ResolveRequest }
        output: GoogleChromePolicyVersionsV1ResolveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $get: {
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
        }
        output: GoogleChromePolicyVersionsV1PolicySchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/policySchemas': {
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
        output: GoogleChromePolicyVersionsV1ListPolicySchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
