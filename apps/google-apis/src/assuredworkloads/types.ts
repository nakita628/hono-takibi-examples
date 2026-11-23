type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext = {
  acknowledgementTime?: string | undefined
  comment?: string | undefined
  principalEmail?: string | undefined
}
type GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole = {
  additionalLinks?: string[] | undefined
  consoleUris?: string[] | undefined
  steps?: string[] | undefined
}
type GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud = {
  additionalLinks?: string[] | undefined
  gcloudCommands?: string[] | undefined
  steps?: string[] | undefined
}
type GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions = {
  consoleInstructions?:
    | GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole
    | undefined
  gcloudInstructions?:
    | GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud
    | undefined
}
type GoogleCloudAssuredworkloadsV1beta1ViolationRemediation = {
  compliantValues?: string[] | undefined
  instructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions | undefined
  remediationType?:
    | 'REMEDIATION_TYPE_UNSPECIFIED'
    | 'REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION'
    | 'REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION'
    | 'REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION'
    | 'REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION'
    | undefined
}
type GoogleCloudAssuredworkloadsV1beta1Violation = {
  acknowledged?: boolean | undefined
  acknowledgementTime?: string | undefined
  auditLogLink?: string | undefined
  beginTime?: string | undefined
  category?: string | undefined
  description?: string | undefined
  exceptionAuditLogLink?: string | undefined
  exceptionContexts?: GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext[] | undefined
  name?: string | undefined
  nonCompliantOrgPolicy?: string | undefined
  orgPolicyConstraint?: string | undefined
  remediation?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediation | undefined
  resolveTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RESOLVED' | 'UNRESOLVED' | 'EXCEPTION' | undefined
  updateTime?: string | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings = {
  nextRotationTime?: string | undefined
  rotationPeriod?: string | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings = {
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus = {
  acknowledgedViolationCount?: number | undefined
  activeViolationCount?: number | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse = {
  ekmProvisioningErrorDomain?:
    | 'EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED'
    | 'UNSPECIFIED_ERROR'
    | 'GOOGLE_SERVER_ERROR'
    | 'EXTERNAL_USER_ERROR'
    | 'EXTERNAL_PARTNER_ERROR'
    | 'TIMEOUT_ERROR'
    | undefined
  ekmProvisioningErrorMapping?:
    | 'EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED'
    | 'INVALID_SERVICE_ACCOUNT'
    | 'MISSING_METRICS_SCOPE_ADMIN_PERMISSION'
    | 'MISSING_EKM_CONNECTION_ADMIN_PERMISSION'
    | undefined
  ekmProvisioningState?:
    | 'EKM_PROVISIONING_STATE_UNSPECIFIED'
    | 'EKM_PROVISIONING_STATE_PENDING'
    | 'EKM_PROVISIONING_STATE_FAILED'
    | 'EKM_PROVISIONING_STATE_COMPLETED'
    | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings = {
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings = {
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings = {
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings = {
  displayName?: string | undefined
  resourceId?: string | undefined
  resourceType?:
    | 'RESOURCE_TYPE_UNSPECIFIED'
    | 'CONSUMER_PROJECT'
    | 'CONSUMER_FOLDER'
    | 'ENCRYPTION_KEYS_PROJECT'
    | 'KEYRING'
    | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo = {
  resourceId?: string | undefined
  resourceType?:
    | 'RESOURCE_TYPE_UNSPECIFIED'
    | 'CONSUMER_PROJECT'
    | 'CONSUMER_FOLDER'
    | 'ENCRYPTION_KEYS_PROJECT'
    | 'KEYRING'
    | undefined
}
type GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse = {
  setupErrors?:
    | (
        | 'SETUP_ERROR_UNSPECIFIED'
        | 'ERROR_INVALID_BASE_SETUP'
        | 'ERROR_MISSING_EXTERNAL_SIGNING_KEY'
        | 'ERROR_NOT_ALL_SERVICES_ENROLLED'
        | 'ERROR_SETUP_CHECK_FAILED'
      )[]
    | undefined
  setupStatus?: 'SETUP_STATE_UNSPECIFIED' | 'STATUS_PENDING' | 'STATUS_COMPLETE' | undefined
}
type GoogleCloudAssuredworkloadsV1beta1Workload = {
  billingAccount?: string | undefined
  cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings | undefined
  complianceRegime?:
    | 'COMPLIANCE_REGIME_UNSPECIFIED'
    | 'IL4'
    | 'CJIS'
    | 'FEDRAMP_HIGH'
    | 'FEDRAMP_MODERATE'
    | 'US_REGIONAL_ACCESS'
    | 'HIPAA'
    | 'HITRUST'
    | 'EU_REGIONS_AND_SUPPORT'
    | 'CA_REGIONS_AND_SUPPORT'
    | 'ITAR'
    | 'AU_REGIONS_AND_US_SUPPORT'
    | 'ASSURED_WORKLOADS_FOR_PARTNERS'
    | 'ISR_REGIONS'
    | 'ISR_REGIONS_AND_SUPPORT'
    | 'CA_PROTECTED_B'
    | undefined
  complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus | undefined
  compliantButDisallowedServices?: string[] | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  ekmProvisioningResponse?:
    | GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse
    | undefined
  enableSovereignControls?: boolean | undefined
  etag?: string | undefined
  fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings | undefined
  fedrampModerateSettings?:
    | GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings
    | undefined
  il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings | undefined
  kajEnrollmentState?:
    | 'KAJ_ENROLLMENT_STATE_UNSPECIFIED'
    | 'KAJ_ENROLLMENT_STATE_PENDING'
    | 'KAJ_ENROLLMENT_STATE_COMPLETE'
    | undefined
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  partner?:
    | 'PARTNER_UNSPECIFIED'
    | 'LOCAL_CONTROLS_BY_S3NS'
    | 'SOVEREIGN_CONTROLS_BY_T_SYSTEMS'
    | 'SOVEREIGN_CONTROLS_BY_SIA_MINSAIT'
    | 'SOVEREIGN_CONTROLS_BY_PSN'
    | undefined
  provisionedResourcesParent?: string | undefined
  resourceSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[] | undefined
  resources?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[] | undefined
  saaEnrollmentResponse?:
    | GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse
    | undefined
  violationNotificationsEnabled?: boolean | undefined
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
type GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest = {
  comment?: string | undefined
  nonCompliantOrgPolicy?: string | undefined
}
type GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse = { [x: string]: unknown }
type GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest = {
  restrictionType?:
    | 'RESTRICTION_TYPE_UNSPECIFIED'
    | 'ALLOW_ALL_GCP_RESOURCES'
    | 'ALLOW_COMPLIANT_RESOURCES'
    | 'APPEND_COMPLIANT_RESOURCES'
    | undefined
}
type GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse = { [x: string]: unknown }
type GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse = {
  nextPageToken?: string | undefined
  violations?: GoogleCloudAssuredworkloadsV1beta1Violation[] | undefined
}
type GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse = {
  nextPageToken?: string | undefined
  workloads?: GoogleCloudAssuredworkloadsV1beta1Workload[] | undefined
}
type GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse = {
  blockers?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            etag?: string | undefined
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
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
        output: GoogleCloudAssuredworkloadsV1beta1Violation
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
        } & { json: GoogleCloudAssuredworkloadsV1beta1Workload }
        output: GoogleCloudAssuredworkloadsV1beta1Workload
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:acknowledge': {
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
        } & { json: GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest }
        output: GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:restrictAllowedResources': {
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
        } & { json: GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest }
        output: GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/violations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            'interval.endTime'?: string | undefined
            'interval.startTime'?: string | undefined
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
        output: GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/workloads': {
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
        output: GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            externalId?: string | undefined
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
        } & { json: GoogleCloudAssuredworkloadsV1beta1Workload }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:project/:target:analyzeWorkloadMove': {
      $get: {
        input: { param: { project: string; target: string } } & {
          query: {
            source?: string | undefined
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
        output: GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:source/:target:analyzeWorkloadMove': {
      $get: {
        input: { param: { source: string; target: string } } & {
          query: {
            project?: string | undefined
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
        output: GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
