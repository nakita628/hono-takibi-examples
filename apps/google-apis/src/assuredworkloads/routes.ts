import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequestSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Business justification explaining the need for violation acknowledgement',
      }),
    nonCompliantOrgPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}',
      }),
  })
  .openapi({ description: 'Request for acknowledging the violation Next Id: 4', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest')

const GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponseSchema = z
  .object({})
  .openapi({ description: 'Response for violation acknowledgement' })
  .openapi('GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse')

const GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponseSchema = z
  .object({
    blockers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of blockers that should be addressed before moving the source project or project-based workload to the destination folder-based workload.',
      }),
  })
  .openapi({
    description: 'A response that includes the analysis of the hypothetical resource move.',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse')

const GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContextSchema = z
  .object({
    acknowledgementTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when the violation was acknowledged.' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Business justification provided towards the acknowledgement of the violation.',
      }),
    principalEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the user (or service account) who acknowledged the violation.',
      }),
  })
  .openapi({ description: 'Violation exception detail. Next Id: 5', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext')

const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsoleSchema = z
  .object({
    additionalLinks: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional urls for more information about steps' }),
    consoleUris: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Link to console page where violations can be resolved' }),
    steps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Steps to resolve violation via cloud console' }),
  })
  .openapi({
    description: 'Remediation instructions to resolve violation via cloud console',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole')

const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloudSchema = z
  .object({
    additionalLinks: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional urls for more information about steps' }),
    gcloudCommands: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Gcloud command to resolve violation' }),
    steps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Steps to resolve violation via gcloud cli' }),
  })
  .openapi({
    description: 'Remediation instructions to resolve violation via gcloud cli',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud')

const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsSchema = z
  .object({
    consoleInstructions:
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsoleSchema.exactOptional().openapi(
        { description: 'Remediation instructions to resolve violation via cloud console' },
      ),
    gcloudInstructions:
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloudSchema.exactOptional().openapi(
        { description: 'Remediation instructions to resolve violation via gcloud cli' },
      ),
  })
  .openapi({ description: 'Instructions to remediate violation', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions')

const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationSchema = z
  .object({
    compliantValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values',
      }),
    instructions:
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsSchema.exactOptional().openapi(
        { description: 'Required. Remediation instructions to resolve violations' },
      ),
    remediationType: z
      .enum([
        'REMEDIATION_TYPE_UNSPECIFIED',
        'REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION',
        'REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION',
        'REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION',
        'REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Reemediation type based on the type of org policy values violated',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents remediation guidance to resolve compliance violation for AssuredWorkload',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ViolationRemediation')

const GoogleCloudAssuredworkloadsV1beta1ViolationSchema = z
  .object({
    acknowledged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A boolean that indicates if the violation is acknowledged' }),
    acknowledgementTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false.',
      }),
    auditLogLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder}',
        readOnly: true,
      }),
    beginTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time of the event which triggered the Violation.',
        readOnly: true,
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.',
        readOnly: true,
      }),
    exceptionAuditLogLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization}',
        readOnly: true,
      }),
    exceptionContexts: z
      .array(GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContextSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. List of all the exception detail added for the violation.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id}',
        readOnly: true,
      }),
    nonCompliantOrgPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}',
        readOnly: true,
      }),
    orgPolicyConstraint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.',
        readOnly: true,
      }),
    remediation:
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationSchema.exactOptional().openapi({
        description: 'Output only. Compliance violation remediation',
        readOnly: true,
      }),
    resolveTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RESOLVED', 'UNRESOLVED', 'EXCEPTION'])
      .exactOptional()
      .openapi({ description: 'Output only. State of the violation', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last time when the Violation record was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Workload monitoring Violation. Next Id: 22', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1Violation')

const GoogleCloudAssuredworkloadsV1beta1ListViolationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page token. Returns empty if reached the last page.' }),
    violations: z
      .array(GoogleCloudAssuredworkloadsV1beta1ViolationSchema)
      .exactOptional()
      .openapi({ description: 'List of Violations under a Workload.' }),
  })
  .openapi({ description: 'Response of ListViolations endpoint.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse')

const GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettingsSchema = z
  .object({
    nextRotationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.',
      }),
    rotationPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.',
      }),
  })
  .openapi({ description: 'Settings specific to the Key Management Service.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings')

const GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettingsSchema = z
  .object({
    kmsSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettingsSchema.exactOptional().openapi({
        description: 'Input only. Immutable. Settings used to create a CMEK crypto key.',
      }),
  })
  .openapi({ description: 'Settings specific to resources needed for CJIS.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings')

const GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatusSchema = z
  .object({
    acknowledgedViolationCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Count of active Violations which are acknowledged in the Workload.',
      }),
    activeViolationCount: z
      .int32()
      .exactOptional()
      .openapi({ description: "Count of active Violations which haven't been acknowledged." }),
  })
  .openapi({ description: 'Represents the Compliance Status of this workload', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus')

const GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponseSchema = z
  .object({
    ekmProvisioningErrorDomain: z
      .enum([
        'EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED',
        'UNSPECIFIED_ERROR',
        'GOOGLE_SERVER_ERROR',
        'EXTERNAL_USER_ERROR',
        'EXTERNAL_PARTNER_ERROR',
        'TIMEOUT_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates Ekm provisioning error if any.' }),
    ekmProvisioningErrorMapping: z
      .enum([
        'EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED',
        'INVALID_SERVICE_ACCOUNT',
        'MISSING_METRICS_SCOPE_ADMIN_PERMISSION',
        'MISSING_EKM_CONNECTION_ADMIN_PERMISSION',
      ])
      .exactOptional()
      .openapi({ description: 'Detailed error message if Ekm provisioning fails' }),
    ekmProvisioningState: z
      .enum([
        'EKM_PROVISIONING_STATE_UNSPECIFIED',
        'EKM_PROVISIONING_STATE_PENDING',
        'EKM_PROVISIONING_STATE_FAILED',
        'EKM_PROVISIONING_STATE_COMPLETED',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates Ekm enrollment Provisioning of a given workload.' }),
  })
  .openapi({
    description: 'External key management systems(EKM) Provisioning response',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse')

const GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettingsSchema = z
  .object({
    kmsSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettingsSchema.exactOptional().openapi({
        description: 'Input only. Immutable. Settings used to create a CMEK crypto key.',
      }),
  })
  .openapi({ description: 'Settings specific to resources needed for FedRAMP High.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings')

const GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettingsSchema = z
  .object({
    kmsSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettingsSchema.exactOptional().openapi({
        description: 'Input only. Immutable. Settings used to create a CMEK crypto key.',
      }),
  })
  .openapi({
    description: 'Settings specific to resources needed for FedRAMP Moderate.',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings')

const GoogleCloudAssuredworkloadsV1beta1WorkloadIL4SettingsSchema = z
  .object({
    kmsSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettingsSchema.exactOptional().openapi({
        description: 'Input only. Immutable. Settings used to create a CMEK crypto key.',
      }),
  })
  .openapi({ description: 'Settings specific to resources needed for IL4.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings')

const GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-assigned resource display name. If not empty it will be used to create a resource with the specified name.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.",
      }),
    resourceType: z
      .enum([
        'RESOURCE_TYPE_UNSPECIFIED',
        'CONSUMER_PROJECT',
        'CONSUMER_FOLDER',
        'ENCRYPTION_KEYS_PROJECT',
        'KEYRING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT)',
      }),
  })
  .openapi({
    description: 'Represent the custom settings for the resources to be created.',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings')

const GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoSchema = z
  .object({
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource identifier. For a project this represents project_number.',
      }),
    resourceType: z
      .enum([
        'RESOURCE_TYPE_UNSPECIFIED',
        'CONSUMER_PROJECT',
        'CONSUMER_FOLDER',
        'ENCRYPTION_KEYS_PROJECT',
        'KEYRING',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the type of resource.' }),
  })
  .openapi({
    description: 'Represent the resources that are children of this Workload.',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo')

const GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSchema = z
  .object({
    setupErrors: z
      .array(
        z.enum([
          'SETUP_ERROR_UNSPECIFIED',
          'ERROR_INVALID_BASE_SETUP',
          'ERROR_MISSING_EXTERNAL_SIGNING_KEY',
          'ERROR_NOT_ALL_SERVICES_ENROLLED',
          'ERROR_SETUP_CHECK_FAILED',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Indicates SAA enrollment setup error if any.' }),
    setupStatus: z
      .enum(['SETUP_STATE_UNSPECIFIED', 'STATUS_PENDING', 'STATUS_COMPLETE'])
      .exactOptional()
      .openapi({ description: 'Indicates SAA enrollment status of a given workload.' }),
  })
  .openapi({ description: 'Signed Access Approvals (SAA) enrollment response.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse')

const GoogleCloudAssuredworkloadsV1beta1WorkloadSchema = z
  .object({
    billingAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.',
      }),
    cjisSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettingsSchema.exactOptional().openapi({
        description: 'Input only. Immutable. Settings specific to resources needed for CJIS.',
      }),
    complianceRegime: z
      .enum([
        'COMPLIANCE_REGIME_UNSPECIFIED',
        'IL4',
        'CJIS',
        'FEDRAMP_HIGH',
        'FEDRAMP_MODERATE',
        'US_REGIONAL_ACCESS',
        'HIPAA',
        'HITRUST',
        'EU_REGIONS_AND_SUPPORT',
        'CA_REGIONS_AND_SUPPORT',
        'ITAR',
        'AU_REGIONS_AND_US_SUPPORT',
        'ASSURED_WORKLOADS_FOR_PARTNERS',
        'ISR_REGIONS',
        'ISR_REGIONS_AND_SUPPORT',
        'CA_PROTECTED_B',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. Compliance Regime associated with this workload.',
      }),
    complianceStatus:
      GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatusSchema.exactOptional().openapi({
        description: 'Output only. Count of active Violations in the Workload.',
        readOnly: true,
      }),
    compliantButDisallowedServices: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment."',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Immutable. The Workload creation timestamp.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload',
      }),
    ekmProvisioningResponse:
      GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponseSchema.exactOptional().openapi(
        { description: 'Optional. Represents the Ekm Provisioning State of the given workload.' },
      ),
    enableSovereignControls: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.',
      }),
    fedrampHighSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettingsSchema.exactOptional().openapi({
        description:
          'Input only. Immutable. Settings specific to resources needed for FedRAMP High.',
      }),
    fedrampModerateSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettingsSchema.exactOptional().openapi(
        {
          description:
            'Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.',
        },
      ),
    il4Settings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadIL4SettingsSchema.exactOptional().openapi({
        description: 'Input only. Immutable. Settings specific to resources needed for IL4.',
      }),
    kajEnrollmentState: z
      .enum([
        'KAJ_ENROLLMENT_STATE_UNSPECIFIED',
        'KAJ_ENROLLMENT_STATE_PENDING',
        'KAJ_ENROLLMENT_STATE_COMPLETE',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Represents the KAJ enrollment state of the given workload.',
        readOnly: true,
      }),
    kmsSettings:
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettingsSchema.exactOptional().openapi({
        description:
          'Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Labels applied to the workload.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.',
      }),
    partner: z
      .enum([
        'PARTNER_UNSPECIFIED',
        'LOCAL_CONTROLS_BY_S3NS',
        'SOVEREIGN_CONTROLS_BY_T_SYSTEMS',
        'SOVEREIGN_CONTROLS_BY_SIA_MINSAIT',
        'SOVEREIGN_CONTROLS_BY_PSN',
      ])
      .exactOptional()
      .openapi({ description: 'Optional. Partner regime associated with this workload.' }),
    provisionedResourcesParent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}',
      }),
    resourceSettings: z
      .array(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsSchema)
      .exactOptional()
      .openapi({
        description:
          'Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.',
      }),
    resources: z
      .array(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.',
        readOnly: true,
      }),
    saaEnrollmentResponse:
      GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponseSchema.exactOptional().openapi(
        {
          description:
            'Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page.',
          readOnly: true,
        },
      ),
    violationNotificationsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.',
      }),
  })
  .openapi({
    description: 'A Workload object for managing highly regulated workloads of cloud customers.',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1Workload')

const GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page token. Return empty if reached the last page.' }),
    workloads: z
      .array(GoogleCloudAssuredworkloadsV1beta1WorkloadSchema)
      .exactOptional()
      .openapi({ description: 'List of Workloads under a given parent.' }),
  })
  .openapi({ description: 'Response of ListWorkloads endpoint.', required: [] })
  .openapi('GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse')

const GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestSchema = z
  .object({
    restrictionType: z
      .enum([
        'RESTRICTION_TYPE_UNSPECIFIED',
        'ALLOW_ALL_GCP_RESOURCES',
        'ALLOW_COMPLIANT_RESOURCES',
        'APPEND_COMPLIANT_RESOURCES',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of restriction for using gcp products in the Workload environment.',
      }),
  })
  .openapi({
    description: 'Request for restricting list of available resources in Workload environment.',
    required: [],
  })
  .openapi('GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest')

const GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponseSchema = z
  .object({})
  .openapi({ description: 'Response for restricting the list of allowed resources.' })
  .openapi('GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['organizations'],
  description: 'Retrieves Assured Workload Violation based on ID.',
  operationId: 'assuredworkloads.organizations.locations.workloads.violations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudAssuredworkloadsV1beta1ViolationSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['organizations'],
  description:
    "Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.",
  operationId: 'assuredworkloads.organizations.locations.workloads.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      etag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The etag of the workload. If this is provided, it must match the server's etag.",
            in: 'query',
            name: 'etag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['organizations'],
  description:
    "Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.",
  operationId: 'assuredworkloads.organizations.locations.workloads.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The list of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudAssuredworkloadsV1beta1WorkloadSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudAssuredworkloadsV1beta1WorkloadSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['organizations'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'assuredworkloads.organizations.locations.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:acknowledge',
  tags: ['organizations'],
  description:
    'Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.',
  operationId: 'assuredworkloads.organizations.locations.workloads.violations.acknowledge',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameRestrictAllowedResourcesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:restrictAllowedResources',
  tags: ['organizations'],
  description:
    'Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.',
  operationId: 'assuredworkloads.organizations.locations.workloads.restrictAllowedResources',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Workload. This is the workloads\'s relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentViolationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/violations',
  tags: ['organizations'],
  description:
    "Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`",
  operationId: 'assuredworkloads.organizations.locations.workloads.violations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. A custom filter for filtering by the Violations properties.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'interval.endTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end of the time window.',
            in: 'query',
            name: 'interval.endTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'interval.startTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The start of the time window.',
            in: 'query',
            name: 'interval.startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Page token returned from previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1ListViolationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentWorkloadsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/workloads',
  tags: ['organizations'],
  description: 'Lists Assured Workloads under a CRM Node.',
  operationId: 'assuredworkloads.organizations.locations.workloads.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentWorkloadsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/workloads',
  tags: ['organizations'],
  description: 'Creates Assured Workload.',
  operationId: 'assuredworkloads.organizations.locations.workloads.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      externalId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.',
            in: 'query',
            name: 'externalId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudAssuredworkloadsV1beta1WorkloadSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ProjectTargetAnalyzeWorkloadMoveRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{project}/{target}:analyzeWorkloadMove',
  tags: ['projects'],
  description:
    'Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.',
  operationId: 'assuredworkloads.projects.organizations.locations.workloads.analyzeWorkloadMove',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source type is a project-based workload. Specify the workloads\'s relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-1"',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description:
              'The source type is a project. Specify the project\'s relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource ID of the folder-based destination workload. This workload is where the source project will hypothetically be moved to. Specify the workload\'s relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"',
            in: 'path',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1SourceTargetAnalyzeWorkloadMoveRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{source}/{target}:analyzeWorkloadMove',
  tags: ['organizations'],
  description:
    'Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.',
  operationId:
    'assuredworkloads.organizations.locations.workloads.organizations.locations.workloads.analyzeWorkloadMove',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      project: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source type is a project. Specify the project\'s relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.',
            in: 'query',
            name: 'project',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      source: z
        .string()
        .openapi({
          param: {
            description:
              'The source type is a project-based workload. Specify the workloads\'s relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-1"',
            in: 'path',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource ID of the folder-based destination workload. This workload is where the source project will hypothetically be moved to. Specify the workload\'s relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"',
            in: 'path',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
