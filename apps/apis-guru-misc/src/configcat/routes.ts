import { createRoute, z } from '@hono/zod-openapi'

const JsonNodeOptionsSchema = z
  .strictObject({ propertyNameCaseInsensitive: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('JsonNodeOptions')

type JsonNodeType = {
  options?: z.infer<typeof JsonNodeOptionsSchema>
  parent?: JsonNodeType
  root?: JsonNodeType
}

const AccessTypeSchema = z.enum(['readOnly', 'full', 'custom']).openapi('AccessType')

const AddOrUpdateIntegrationLinkModelSchema = z
  .strictObject({
    description: z.string().max(1000).nullable().exactOptional(),
    url: z.string().max(1000).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddOrUpdateIntegrationLinkModel')

const AddOrUpdateJiraIntegrationLinkModelSchema = z
  .strictObject({
    clientKey: z.string().min(0).max(255),
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    jiraJwtToken: z.string().min(0).max(15000),
    url: z.string().min(0).max(1000).nullable().exactOptional(),
  })
  .openapi({ required: ['clientKey', 'jiraJwtToken'] })
  .openapi('AddOrUpdateJiraIntegrationLinkModel')

const AddUserToGroupRequestSchema = z
  .strictObject({
    permissionGroupIds: z.array(
      z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
    ),
  })
  .openapi({ required: ['permissionGroupIds'] })
  .openapi('AddUserToGroupRequest')

const AuditLogTypeSchema = z
  .enum([
    'productCreated',
    'productChanged',
    'productOwnershipTransferred',
    'productDeleted',
    'productsReordered',
    'teamMemberInvited',
    'teamMemberInvitationRevoked',
    'teamMemberJoined',
    'teamMemberPermissionGroupChanged',
    'teamMemberRemoved',
    'teamMemberLeft',
    'teamMemberInvitationChanged',
    'teamMemberInvitationResent',
    'teamMemberInvitationRejected',
    'configCreated',
    'configChanged',
    'configDeleted',
    'configsReordered',
    'environmentCreated',
    'environmentChanged',
    'environmentDeleted',
    'environmentsReordered',
    'settingCreated',
    'settingChanged',
    'settingDeleted',
    'settingsReordered',
    'settingValueChanged',
    'webHookCreated',
    'webHookChanged',
    'webHookDeleted',
    'subscriptionChanged',
    'permissionGroupCreated',
    'permissionGroupChanged',
    'permissionGroupDeleted',
    'permissionGroupDefault',
    'apiKeyAdded',
    'apiKeyRemoved',
    'integrationAdded',
    'integrationChanged',
    'integrationRemoved',
    'apiKeyConnected',
    'integrationLinkAdded',
    'integrationLinkRemoved',
    'organizationAdded',
    'organizationRemoved',
    'organizationChanged',
    'organizationSubscriptionTypeChanged',
    'organizationAdminChanged',
    'organizationAdminLeft',
    'organizationAdminDisabled2FA',
    'tagAdded',
    'tagChanged',
    'tagRemoved',
    'settingTagAdded',
    'settingTagRemoved',
    'publicApiAccessTokenAdded',
    'publicApiAccessTokenRemoved',
    'domainAdded',
    'domainVerified',
    'domainRemoved',
    'domainSamlConfigured',
    'domainSamlDeleted',
    'autoProvisioningConfigurationChanged',
    'organizationMemberJoined',
    'organizationMemberProductJoinRequested',
    'organizationMemberProductJoinRequestRejected',
    'organizationMemberProductJoinRequestApproved',
    'codeReferencesUploaded',
    'codeReferenceDeleted',
    'codeReferenceStaleBranchDeleted',
    'segmentCreated',
    'segmentChanged',
    'segmentDeleted',
    'webhookSigningKeyDeleted',
    'webhookSigningKeyCreated',
  ])
  .openapi('AuditLogType')

const AuditLogItemModelSchema = z
  .strictObject({
    actionTarget: z.string().nullable().exactOptional(),
    auditLogDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    auditLogId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    auditLogType: z.string().nullable().exactOptional(),
    auditLogTypeEnum: AuditLogTypeSchema.exactOptional(),
    details: z.string().nullable().exactOptional(),
    userEmail: z.string().nullable().exactOptional(),
    userName: z.string().nullable().exactOptional(),
    where: z.string().nullable().exactOptional(),
    why: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuditLogItemModel')

const ReferenceLineSchema = z
  .strictObject({
    lineNumber: z.int32().openapi({ description: 'The line number of the reference line.' }),
    lineText: z
      .string()
      .min(0)
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The content of the reference line.' }),
  })
  .openapi({ required: ['lineNumber'] })
  .openapi('ReferenceLine')

const ReferenceLinesSchema = z
  .strictObject({
    file: z
      .string()
      .min(0)
      .max(255)
      .openapi({
        description:
          "The file's name in where the code reference has been found. (Appears on the ConfigCat Dashboard)",
      }),
    fileUrl: z
      .string()
      .min(0)
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({
        description: "The file's url. (Used to point to the file on the repository's website)",
      }),
    postLines: z
      .array(ReferenceLineSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The lines after the actual reference line.' }),
    preLines: z
      .array(ReferenceLineSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The lines before the actual reference line.' }),
    referenceLine: ReferenceLineSchema,
  })
  .openapi({ required: ['file', 'referenceLine'] })
  .openapi('ReferenceLines')

const FlagReferenceSchema = z
  .strictObject({
    references: z
      .array(ReferenceLinesSchema)
      .openapi({ description: 'The actual references to the given Feature Flag or Setting.' }),
    settingId: z
      .int32()
      .openapi({
        description: 'The identifier of the Feature Flag or Setting the code reference belongs to.',
      }),
  })
  .openapi({ required: ['references', 'settingId'] })
  .openapi('FlagReference')

const CodeReferenceRequestSchema = z
  .strictObject({
    activeBranches: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted.',
      }),
    branch: z
      .string()
      .min(0)
      .max(255)
      .openapi({
        description:
          'The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)',
      }),
    commitHash: z
      .string()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: "The related commit's hash. (Appears on the ConfigCat Dashboard)" }),
    commitUrl: z
      .string()
      .min(0)
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({ description: "The related commit's URL. (Appears on the ConfigCat Dashboard)" }),
    configId: z
      .uuid()
      .openapi({ description: "The Config's identifier the scanning was performed against." }),
    flagReferences: z
      .array(FlagReferenceSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The actual code reference collection.' }),
    repository: z
      .string()
      .min(0)
      .max(255)
      .openapi({
        description:
          'The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)',
      }),
    uploader: z
      .string()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: "The scanning tool's name. (Appears on the ConfigCat Dashboard)" }),
  })
  .openapi({ required: ['branch', 'configId', 'repository'] })
  .openapi('CodeReferenceRequest')

const OrganizationModelSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    organizationId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganizationModel')

const ProductModelSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    organization: OrganizationModelSchema.exactOptional(),
    productId: z.uuid().exactOptional(),
    reasonRequired: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductModel')

const ConfigModelSchema = z
  .strictObject({
    configId: z.uuid().exactOptional(),
    description: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    product: ProductModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigModel')

const ConfigModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        product: z
          .object({
            _embedded: z
              .object({
                organization: z
                  .object({
                    _links: z
                      .object({
                        members: z.string().exactOptional(),
                        products: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    name: z.string().nullable().exactOptional(),
                    organizationId: z.uuid().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({
                configs: z.string().exactOptional(),
                environments: z.string().exactOptional(),
                members: z.string().exactOptional(),
                'permission-groups': z.string().exactOptional(),
                segments: z.string().exactOptional(),
                self: z.string().exactOptional(),
                tags: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            productId: z.uuid().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional(), settings: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    configId: z.uuid().exactOptional(),
    description: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigModelHaljson')

const IntegrationLinkTypeSchema = z
  .enum(['trello', 'jira', 'monday'])
  .openapi('IntegrationLinkType')

const IntegrationLinkModelSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    integrationLinkType: IntegrationLinkTypeSchema.exactOptional(),
    key: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntegrationLinkModel')

const RolloutPercentageItemModelSchema = z
  .strictObject({
    percentage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The percentage value for the rule.',
      }),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The value to serve when the user falls in the percentage rule. It must respect the setting type.',
      }),
  })
  .openapi({ required: ['percentage'] })
  .openapi('RolloutPercentageItemModel')

const RolloutRuleComparatorSchema = z
  .enum([
    'isOneOf',
    'isNotOneOf',
    'contains',
    'doesNotContain',
    'semVerIsOneOf',
    'semVerIsNotOneOf',
    'semVerLess',
    'semVerLessOrEquals',
    'semVerGreater',
    'semVerGreaterOrEquals',
    'numberEquals',
    'numberDoesNotEqual',
    'numberLess',
    'numberLessOrEquals',
    'numberGreater',
    'numberGreaterOrEquals',
    'sensitiveIsOneOf',
    'sensitiveIsNotOneOf',
  ])
  .openapi('RolloutRuleComparator')

const SegmentComparatorSchema = z.enum(['isIn', 'isNotIn']).openapi('SegmentComparator')

const RolloutRuleModelSchema = z
  .strictObject({
    comparator: RolloutRuleComparatorSchema.exactOptional(),
    comparisonAttribute: z
      .string()
      .min(0)
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user attribute to compare.' }),
    comparisonValue: z
      .string()
      .min(0)
      .max(65535)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value to compare against.' }),
    segmentComparator: SegmentComparatorSchema.exactOptional(),
    segmentId: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The segment to compare against.' }),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The value to serve when the comparison matches. It must respect the setting type.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RolloutRuleModel')

const SettingTypeSchema = z.enum(['boolean', 'string', 'int', 'double']).openapi('SettingType')

const SettingDataModelSchema = z
  .strictObject({
    createdAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    creatorEmail: z.string().nullable().exactOptional(),
    creatorFullName: z.string().nullable().exactOptional(),
    hint: z.string().nullable().exactOptional(),
    isWatching: z.boolean().exactOptional(),
    key: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    settingId: z.int32().exactOptional(),
    settingType: SettingTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettingDataModel')

const SettingTagModelSchema = z
  .strictObject({
    color: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    settingTagId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tagId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SettingTagModel')

const ConfigSettingValueModelSchema = z
  .strictObject({
    integrationLinks: z.array(IntegrationLinkModelSchema).nullable().exactOptional(),
    lastUpdaterUserEmail: z.string().nullable().exactOptional(),
    lastUpdaterUserFullName: z.string().nullable().exactOptional(),
    rolloutPercentageItems: z
      .array(RolloutPercentageItemModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The percentage rule collection.' }),
    rolloutRules: z
      .array(RolloutRuleModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The targeting rule collection.' }),
    setting: SettingDataModelSchema.exactOptional(),
    settingTags: z.array(SettingTagModelSchema).nullable().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value to serve. It must respect the setting type.' }),
  })
  .openapi({ required: [] })
  .openapi('ConfigSettingValueModel')

const EnvironmentModelSchema = z
  .strictObject({
    color: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    environmentId: z.uuid().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    product: ProductModelSchema.exactOptional(),
    reasonRequired: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentModel')

const ConfigSettingValuesModelSchema = z
  .strictObject({
    config: ConfigModelSchema.exactOptional(),
    environment: EnvironmentModelSchema.exactOptional(),
    readOnly: z.boolean().exactOptional(),
    settingValues: z.array(ConfigSettingValueModelSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigSettingValuesModel')

const ConnectRequestSchema = z
  .strictObject({
    clientKey: z.string().min(0).max(255),
    jiraJwtToken: z.string().min(0).max(15000),
  })
  .openapi({ required: ['clientKey', 'jiraJwtToken'] })
  .openapi('ConnectRequest')

const CreateConfigRequestSchema = z
  .strictObject({
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(255),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateConfigRequest')

const CreateEnvironmentModelSchema = z
  .strictObject({
    color: z.string().min(0).max(255).nullable().exactOptional(),
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(255),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateEnvironmentModel')

const EnvironmentAccessTypeSchema = z
  .enum(['full', 'readOnly', 'none'])
  .openapi('EnvironmentAccessType')

const CreateOrUpdateEnvironmentAccessModelSchema = z
  .strictObject({
    color: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    environmentAccessType: EnvironmentAccessTypeSchema.exactOptional(),
    environmentId: z.uuid().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    reasonRequired: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOrUpdateEnvironmentAccessModel')

const CreatePermissionGroupRequestSchema = z
  .strictObject({
    accessType: AccessTypeSchema.exactOptional(),
    canCreateOrUpdateConfig: z.boolean().exactOptional(),
    canCreateOrUpdateEnvironment: z.boolean().exactOptional(),
    canCreateOrUpdateSegments: z.boolean().exactOptional(),
    canCreateOrUpdateSetting: z.boolean().exactOptional(),
    canCreateOrUpdateTag: z.boolean().exactOptional(),
    canDeleteConfig: z.boolean().exactOptional(),
    canDeleteEnvironment: z.boolean().exactOptional(),
    canDeleteSegments: z.boolean().exactOptional(),
    canDeleteSetting: z.boolean().exactOptional(),
    canDeleteTag: z.boolean().exactOptional(),
    canManageIntegrations: z.boolean().exactOptional(),
    canManageMembers: z.boolean().exactOptional(),
    canManageProductPreferences: z.boolean().exactOptional(),
    canManageWebhook: z.boolean().exactOptional(),
    canRotateSdkKey: z.boolean().exactOptional(),
    canTagSetting: z.boolean().exactOptional(),
    canUseExportImport: z.boolean().exactOptional(),
    canViewProductAuditLog: z.boolean().exactOptional(),
    canViewProductStatistics: z.boolean().exactOptional(),
    canViewSdkKey: z.boolean().exactOptional(),
    environmentAccesses: z
      .array(CreateOrUpdateEnvironmentAccessModelSchema)
      .nullable()
      .exactOptional(),
    name: z.string().min(0).max(255),
    newEnvironmentAccessType: EnvironmentAccessTypeSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('CreatePermissionGroupRequest')

const CreateProductRequestSchema = z
  .strictObject({
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(1000),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateProductRequest')

const CreateSegmentModelSchema = z
  .strictObject({
    comparator: RolloutRuleComparatorSchema,
    comparisonAttribute: z.string().min(0).max(1000),
    comparisonValue: z.string().min(0).max(65535),
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(255),
  })
  .openapi({ required: ['comparator', 'comparisonAttribute', 'comparisonValue', 'name'] })
  .openapi('CreateSegmentModel')

const InitialValueSchema = z
  .strictObject({
    environmentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the Environment where the initial value should be set.' }),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The initial value in the given Environment. It must respect the setting type.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InitialValue')

const CreateSettingInitialValuesSchema = z
  .strictObject({
    hint: z
      .string()
      .min(0)
      .max(1000)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A short description for the setting, shown on the Dashboard UI.' }),
    initialValues: z
      .array(InitialValueSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional, initial values of the feature flag or setting in the given Environments.',
      }),
    key: z
      .string()
      .regex(/^[a-zA-Z]+[a-zA-Z0-9_]*/)
      .min(0)
      .max(255)
      .openapi({ description: 'The key of the setting.' }),
    name: z
      .string()
      .min(0)
      .max(255)
      .openapi({ description: 'The name of the setting, shown on the Dashboard UI.' }),
    settingType: SettingTypeSchema,
    tags: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'The IDs of the tags which are attached to the setting.' }),
  })
  .openapi({ required: ['key', 'name', 'settingType'] })
  .openapi('CreateSettingInitialValues')

const CreateTagModelSchema = z
  .strictObject({
    color: z.string().min(0).max(255).nullable().exactOptional(),
    name: z.string().min(0).max(255),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateTagModel')

const DeleteIntegrationLinkModelSchema = z
  .strictObject({ hasRemainingIntegrationLink: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteIntegrationLinkModel')

const DeleteRepositoryReportsRequestSchema = z
  .strictObject({
    branch: z
      .string()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "If it's set, only this branch's reports belonging to the given repository will be deleted.",
      }),
    configId: z
      .uuid()
      .openapi({
        description: "The Config's identifier from where the reports should be deleted.",
      }),
    repository: z
      .string()
      .min(0)
      .max(255)
      .openapi({ description: "The source control repository which's reports should be deleted." }),
    settingId: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "If it's set, only this setting's reports belonging to the given repository will be deleted.",
      }),
  })
  .openapi({ required: ['configId', 'repository'] })
  .openapi('DeleteRepositoryReportsRequest')

const EnvironmentAccessModelSchema = z
  .strictObject({
    color: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    environmentAccessType: EnvironmentAccessTypeSchema.exactOptional(),
    environmentId: z.uuid().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    reasonRequired: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentAccessModel')

const EnvironmentModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        product: z
          .object({
            _embedded: z
              .object({
                organization: z
                  .object({
                    _links: z
                      .object({
                        members: z.string().exactOptional(),
                        products: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    name: z.string().nullable().exactOptional(),
                    organizationId: z.uuid().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({
                configs: z.string().exactOptional(),
                environments: z.string().exactOptional(),
                members: z.string().exactOptional(),
                'permission-groups': z.string().exactOptional(),
                segments: z.string().exactOptional(),
                self: z.string().exactOptional(),
                tags: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            productId: z.uuid().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    color: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    environmentId: z.uuid().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    reasonRequired: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentModelHaljson')

const IntegrationLinkDetailSchema = z
  .strictObject({
    config: ConfigModelSchema.exactOptional(),
    environment: EnvironmentModelSchema.exactOptional(),
    product: ProductModelSchema.exactOptional(),
    readOnly: z.boolean().exactOptional(),
    setting: SettingDataModelSchema.exactOptional(),
    status: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntegrationLinkDetail')

const IntegrationLinkDetailsModelSchema = z
  .strictObject({
    allIntegrationLinkCount: z.int32().exactOptional(),
    details: z
      .array(IntegrationLinkDetailSchema)
      .nullable()
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationLinkDetailsModel')

const InviteMembersRequestSchema = z
  .strictObject({
    emails: z.array(z.string()),
    permissionGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['emails', 'permissionGroupId'] })
  .openapi('InviteMembersRequest')

const JsonNodeSchema: z.ZodType<JsonNodeType> = z
  .lazy(() =>
    z
      .strictObject({
        options: JsonNodeOptionsSchema.exactOptional(),
        parent: JsonNodeSchema.exactOptional(),
        root: JsonNodeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('JsonNode')

const JsonPointerKindSchema = z
  .enum(['unspecified', 'plain', 'uriEncoded'])
  .openapi('JsonPointerKind')

const PointerSegmentSchema = z
  .strictObject({
    source: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    value: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('PointerSegment')

const JsonPointerSchema = z
  .strictObject({
    isUriEncoded: z.boolean().exactOptional().openapi({ readOnly: true }),
    kind: JsonPointerKindSchema.exactOptional(),
    segments: z.array(PointerSegmentSchema).nullable().exactOptional().openapi({ readOnly: true }),
    source: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('JsonPointer')

const OperationTypeSchema = z
  .enum(['unknown', 'add', 'remove', 'replace', 'move', 'copy', 'test'])
  .openapi('OperationType')

const PatchOperationSchema = z
  .strictObject({
    from: JsonPointerSchema.exactOptional(),
    op: OperationTypeSchema.exactOptional(),
    path: JsonPointerSchema.exactOptional(),
    value: JsonNodeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchOperation')

const JsonPatchSchema = z
  .strictObject({ operations: z.array(PatchOperationSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('JsonPatch')

const MeModelSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    fullName: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('MeModel')

const MemberModelSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    fullName: z.string().nullable().exactOptional(),
    permissionGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    productId: z.uuid().exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberModel')

const OrganizationModelHaljsonSchema = z
  .object({
    _links: z
      .object({ members: z.string().exactOptional(), products: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().nullable().exactOptional(),
    organizationId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganizationModelHaljson')

const PermissionGroupModelSchema = z
  .strictObject({
    accessType: AccessTypeSchema.exactOptional(),
    canCreateOrUpdateConfig: z.boolean().exactOptional(),
    canCreateOrUpdateEnvironment: z.boolean().exactOptional(),
    canCreateOrUpdateSegments: z.boolean().exactOptional(),
    canCreateOrUpdateSetting: z.boolean().exactOptional(),
    canCreateOrUpdateTag: z.boolean().exactOptional(),
    canDeleteConfig: z.boolean().exactOptional(),
    canDeleteEnvironment: z.boolean().exactOptional(),
    canDeleteSegments: z.boolean().exactOptional(),
    canDeleteSetting: z.boolean().exactOptional(),
    canDeleteTag: z.boolean().exactOptional(),
    canManageIntegrations: z.boolean().exactOptional(),
    canManageMembers: z.boolean().exactOptional(),
    canManageProductPreferences: z.boolean().exactOptional(),
    canManageWebhook: z.boolean().exactOptional(),
    canRotateSdkKey: z.boolean().exactOptional(),
    canTagSetting: z.boolean().exactOptional(),
    canUseExportImport: z.boolean().exactOptional(),
    canViewProductAuditLog: z.boolean().exactOptional(),
    canViewProductStatistics: z.boolean().exactOptional(),
    canViewSdkKey: z.boolean().exactOptional(),
    environmentAccesses: z.array(EnvironmentAccessModelSchema).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    newEnvironmentAccessType: EnvironmentAccessTypeSchema.exactOptional(),
    permissionGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    product: ProductModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PermissionGroupModel')

const PermissionGroupModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        product: z
          .object({
            _embedded: z
              .object({
                organization: z
                  .object({
                    _links: z
                      .object({
                        members: z.string().exactOptional(),
                        products: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    name: z.string().nullable().exactOptional(),
                    organizationId: z.uuid().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({
                configs: z.string().exactOptional(),
                environments: z.string().exactOptional(),
                members: z.string().exactOptional(),
                'permission-groups': z.string().exactOptional(),
                segments: z.string().exactOptional(),
                self: z.string().exactOptional(),
                tags: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            productId: z.uuid().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    accessType: AccessTypeSchema.exactOptional(),
    canCreateOrUpdateConfig: z.boolean().exactOptional(),
    canCreateOrUpdateEnvironment: z.boolean().exactOptional(),
    canCreateOrUpdateSegments: z.boolean().exactOptional(),
    canCreateOrUpdateSetting: z.boolean().exactOptional(),
    canCreateOrUpdateTag: z.boolean().exactOptional(),
    canDeleteConfig: z.boolean().exactOptional(),
    canDeleteEnvironment: z.boolean().exactOptional(),
    canDeleteSegments: z.boolean().exactOptional(),
    canDeleteSetting: z.boolean().exactOptional(),
    canDeleteTag: z.boolean().exactOptional(),
    canManageIntegrations: z.boolean().exactOptional(),
    canManageMembers: z.boolean().exactOptional(),
    canManageProductPreferences: z.boolean().exactOptional(),
    canManageWebhook: z.boolean().exactOptional(),
    canRotateSdkKey: z.boolean().exactOptional(),
    canTagSetting: z.boolean().exactOptional(),
    canUseExportImport: z.boolean().exactOptional(),
    canViewProductAuditLog: z.boolean().exactOptional(),
    canViewProductStatistics: z.boolean().exactOptional(),
    canViewSdkKey: z.boolean().exactOptional(),
    environmentAccesses: z.array(EnvironmentAccessModelSchema).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    newEnvironmentAccessType: EnvironmentAccessTypeSchema.exactOptional(),
    permissionGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PermissionGroupModelHaljson')

const ProductModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        organization: z
          .object({
            _links: z
              .object({ members: z.string().exactOptional(), products: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            name: z.string().nullable().exactOptional(),
            organizationId: z.uuid().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({
        configs: z.string().exactOptional(),
        environments: z.string().exactOptional(),
        members: z.string().exactOptional(),
        'permission-groups': z.string().exactOptional(),
        segments: z.string().exactOptional(),
        self: z.string().exactOptional(),
        tags: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    description: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    productId: z.uuid().exactOptional(),
    reasonRequired: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductModelHaljson')

const SdkKeysModelSchema = z
  .strictObject({
    primary: z.string().nullable().exactOptional(),
    secondary: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SdkKeysModel')

const SegmentListModelSchema = z
  .strictObject({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    creatorEmail: z.string().nullable().exactOptional(),
    creatorFullName: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    lastUpdaterEmail: z.string().nullable().exactOptional(),
    lastUpdaterFullName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    product: ProductModelSchema.exactOptional(),
    segmentId: z.uuid().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    usage: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SegmentListModel')

const SegmentListModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        product: z
          .object({
            _embedded: z
              .object({
                organization: z
                  .object({
                    _links: z
                      .object({
                        members: z.string().exactOptional(),
                        products: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    name: z.string().nullable().exactOptional(),
                    organizationId: z.uuid().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({
                configs: z.string().exactOptional(),
                environments: z.string().exactOptional(),
                members: z.string().exactOptional(),
                'permission-groups': z.string().exactOptional(),
                segments: z.string().exactOptional(),
                self: z.string().exactOptional(),
                tags: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            productId: z.uuid().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    creatorEmail: z.string().nullable().exactOptional(),
    creatorFullName: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    lastUpdaterEmail: z.string().nullable().exactOptional(),
    lastUpdaterFullName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    segmentId: z.uuid().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    usage: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SegmentListModelHaljson')

const SegmentModelSchema = z
  .strictObject({
    comparator: RolloutRuleComparatorSchema.exactOptional(),
    comparisonAttribute: z.string().nullable().exactOptional(),
    comparisonValue: z.string().nullable().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    creatorEmail: z.string().nullable().exactOptional(),
    creatorFullName: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    lastUpdaterEmail: z.string().nullable().exactOptional(),
    lastUpdaterFullName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    product: ProductModelSchema.exactOptional(),
    segmentId: z.uuid().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SegmentModel')

const SegmentModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        product: z
          .object({
            _embedded: z
              .object({
                organization: z
                  .object({
                    _links: z
                      .object({
                        members: z.string().exactOptional(),
                        products: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    name: z.string().nullable().exactOptional(),
                    organizationId: z.uuid().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({
                configs: z.string().exactOptional(),
                environments: z.string().exactOptional(),
                members: z.string().exactOptional(),
                'permission-groups': z.string().exactOptional(),
                segments: z.string().exactOptional(),
                self: z.string().exactOptional(),
                tags: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            productId: z.uuid().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    comparator: RolloutRuleComparatorSchema.exactOptional(),
    comparisonAttribute: z.string().nullable().exactOptional(),
    comparisonValue: z.string().nullable().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    creatorEmail: z.string().nullable().exactOptional(),
    creatorFullName: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    lastUpdaterEmail: z.string().nullable().exactOptional(),
    lastUpdaterFullName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    segmentId: z.uuid().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SegmentModelHaljson')

const TagModelSchema = z
  .strictObject({
    color: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    product: ProductModelSchema.exactOptional(),
    tagId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('TagModel')

const SettingModelSchema = z
  .strictObject({
    configId: z.uuid().exactOptional(),
    configName: z.string().nullable().exactOptional(),
    hint: z.string().nullable().exactOptional(),
    key: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    settingId: z.int32().exactOptional(),
    settingType: SettingTypeSchema.exactOptional(),
    tags: z.array(TagModelSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettingModel')

const SettingModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        tags: z
          .array(
            z
              .object({
                _embedded: z
                  .object({
                    product: z
                      .object({
                        _embedded: z
                          .object({
                            organization: z
                              .object({
                                _links: z
                                  .object({
                                    members: z.string().exactOptional(),
                                    products: z.string().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                name: z.string().nullable().exactOptional(),
                                organizationId: z.uuid().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        _links: z
                          .object({
                            configs: z.string().exactOptional(),
                            environments: z.string().exactOptional(),
                            members: z.string().exactOptional(),
                            'permission-groups': z.string().exactOptional(),
                            segments: z.string().exactOptional(),
                            self: z.string().exactOptional(),
                            tags: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        description: z.string().nullable().exactOptional(),
                        name: z.string().nullable().exactOptional(),
                        order: z.int32().exactOptional(),
                        productId: z.uuid().exactOptional(),
                        reasonRequired: z.boolean().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                _links: z
                  .object({ self: z.string().exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
                color: z.string().nullable().exactOptional(),
                name: z.string().nullable().exactOptional(),
                tagId: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .exactOptional()
                  .openapi({ type: 'integer', format: 'int64' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    configId: z.uuid().exactOptional(),
    configName: z.string().nullable().exactOptional(),
    hint: z.string().nullable().exactOptional(),
    key: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    settingId: z.int32().exactOptional(),
    settingType: SettingTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettingModelHaljson')

const SettingValueModelSchema = z
  .strictObject({
    config: ConfigModelSchema.exactOptional(),
    environment: EnvironmentModelSchema.exactOptional(),
    integrationLinks: z.array(IntegrationLinkModelSchema).nullable().exactOptional(),
    lastUpdaterUserEmail: z.string().nullable().exactOptional(),
    lastUpdaterUserFullName: z.string().nullable().exactOptional(),
    readOnly: z.boolean().exactOptional(),
    rolloutPercentageItems: z
      .array(RolloutPercentageItemModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The percentage rule collection.' }),
    rolloutRules: z
      .array(RolloutRuleModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The targeting rule collection.' }),
    setting: SettingDataModelSchema.exactOptional(),
    settingTags: z.array(SettingTagModelSchema).nullable().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value to serve. It must respect the setting type.' }),
  })
  .openapi({ required: [] })
  .openapi('SettingValueModel')

const SettingValueModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        config: z
          .object({
            _embedded: z
              .object({
                product: z
                  .object({
                    _embedded: z
                      .object({
                        organization: z
                          .object({
                            _links: z
                              .object({
                                members: z.string().exactOptional(),
                                products: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            name: z.string().nullable().exactOptional(),
                            organizationId: z.uuid().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    _links: z
                      .object({
                        configs: z.string().exactOptional(),
                        environments: z.string().exactOptional(),
                        members: z.string().exactOptional(),
                        'permission-groups': z.string().exactOptional(),
                        segments: z.string().exactOptional(),
                        self: z.string().exactOptional(),
                        tags: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    description: z.string().nullable().exactOptional(),
                    name: z.string().nullable().exactOptional(),
                    order: z.int32().exactOptional(),
                    productId: z.uuid().exactOptional(),
                    reasonRequired: z.boolean().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({ self: z.string().exactOptional(), settings: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            configId: z.uuid().exactOptional(),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        environment: z
          .object({
            _embedded: z
              .object({
                product: z
                  .object({
                    _embedded: z
                      .object({
                        organization: z
                          .object({
                            _links: z
                              .object({
                                members: z.string().exactOptional(),
                                products: z.string().exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            name: z.string().nullable().exactOptional(),
                            organizationId: z.uuid().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    _links: z
                      .object({
                        configs: z.string().exactOptional(),
                        environments: z.string().exactOptional(),
                        members: z.string().exactOptional(),
                        'permission-groups': z.string().exactOptional(),
                        segments: z.string().exactOptional(),
                        self: z.string().exactOptional(),
                        tags: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    description: z.string().nullable().exactOptional(),
                    name: z.string().nullable().exactOptional(),
                    order: z.int32().exactOptional(),
                    productId: z.uuid().exactOptional(),
                    reasonRequired: z.boolean().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({ self: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            color: z.string().nullable().exactOptional(),
            description: z.string().nullable().exactOptional(),
            environmentId: z.uuid().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        integrationLinks: z
          .array(
            z
              .strictObject({
                description: z.string().nullable().exactOptional(),
                integrationLinkType: IntegrationLinkTypeSchema.exactOptional(),
                key: z.string().nullable().exactOptional(),
                url: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        setting: z
          .strictObject({
            createdAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
            creatorEmail: z.string().nullable().exactOptional(),
            creatorFullName: z.string().nullable().exactOptional(),
            hint: z.string().nullable().exactOptional(),
            isWatching: z.boolean().exactOptional(),
            key: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            settingId: z.int32().exactOptional(),
            settingType: SettingTypeSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        settingTags: z
          .array(
            z
              .strictObject({
                color: z.string().nullable().exactOptional(),
                name: z.string().nullable().exactOptional(),
                settingTagId: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .exactOptional()
                  .openapi({ type: 'integer', format: 'int64' }),
                tagId: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .exactOptional()
                  .openapi({ type: 'integer', format: 'int64' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    lastUpdaterUserEmail: z.string().nullable().exactOptional(),
    lastUpdaterUserFullName: z.string().nullable().exactOptional(),
    readOnly: z.boolean().exactOptional(),
    rolloutPercentageItems: z
      .array(RolloutPercentageItemModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The percentage rule collection.' }),
    rolloutRules: z
      .array(RolloutRuleModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The targeting rule collection.' }),
    updatedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value to serve. It must respect the setting type.' }),
  })
  .openapi({ required: [] })
  .openapi('SettingValueModelHaljson')

const TagModelHaljsonSchema = z
  .object({
    _embedded: z
      .object({
        product: z
          .object({
            _embedded: z
              .object({
                organization: z
                  .object({
                    _links: z
                      .object({
                        members: z.string().exactOptional(),
                        products: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    name: z.string().nullable().exactOptional(),
                    organizationId: z.uuid().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            _links: z
              .object({
                configs: z.string().exactOptional(),
                environments: z.string().exactOptional(),
                members: z.string().exactOptional(),
                'permission-groups': z.string().exactOptional(),
                segments: z.string().exactOptional(),
                self: z.string().exactOptional(),
                tags: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            description: z.string().nullable().exactOptional(),
            name: z.string().nullable().exactOptional(),
            order: z.int32().exactOptional(),
            productId: z.uuid().exactOptional(),
            reasonRequired: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    _links: z
      .object({ self: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    color: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    tagId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('TagModelHaljson')

const UpdateConfigRequestSchema = z
  .strictObject({
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(255).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConfigRequest')

const UpdateEnvironmentModelSchema = z
  .strictObject({
    color: z.string().min(0).max(255).nullable().exactOptional(),
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(255).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEnvironmentModel')

const UpdatePermissionGroupRequestSchema = z
  .strictObject({
    accessType: AccessTypeSchema.exactOptional(),
    canCreateOrUpdateConfig: z.boolean().nullable().exactOptional(),
    canCreateOrUpdateEnvironment: z.boolean().nullable().exactOptional(),
    canCreateOrUpdateSegments: z.boolean().nullable().exactOptional(),
    canCreateOrUpdateSetting: z.boolean().nullable().exactOptional(),
    canCreateOrUpdateTag: z.boolean().nullable().exactOptional(),
    canDeleteConfig: z.boolean().nullable().exactOptional(),
    canDeleteEnvironment: z.boolean().nullable().exactOptional(),
    canDeleteSegments: z.boolean().nullable().exactOptional(),
    canDeleteSetting: z.boolean().nullable().exactOptional(),
    canDeleteTag: z.boolean().nullable().exactOptional(),
    canManageIntegrations: z.boolean().nullable().exactOptional(),
    canManageMembers: z.boolean().nullable().exactOptional(),
    canManageProductPreferences: z.boolean().nullable().exactOptional(),
    canManageWebhook: z.boolean().nullable().exactOptional(),
    canRotateSdkKey: z.boolean().nullable().exactOptional(),
    canTagSetting: z.boolean().nullable().exactOptional(),
    canUseExportImport: z.boolean().nullable().exactOptional(),
    canViewProductAuditLog: z.boolean().nullable().exactOptional(),
    canViewProductStatistics: z.boolean().nullable().exactOptional(),
    canViewSdkKey: z.boolean().nullable().exactOptional(),
    environmentAccesses: z
      .array(CreateOrUpdateEnvironmentAccessModelSchema)
      .nullable()
      .exactOptional(),
    name: z.string().min(0).max(255).nullable().exactOptional(),
    newEnvironmentAccessType: EnvironmentAccessTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePermissionGroupRequest')

const UpdateProductRequestSchema = z
  .strictObject({
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(1000).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProductRequest')

const UpdateSegmentModelSchema = z
  .strictObject({
    comparator: RolloutRuleComparatorSchema.exactOptional(),
    comparisonAttribute: z.string().min(0).max(1000).nullable().exactOptional(),
    comparisonValue: z.string().min(0).max(65535).nullable().exactOptional(),
    description: z.string().min(0).max(1000).nullable().exactOptional(),
    name: z.string().min(0).max(255).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSegmentModel')

const UpdateSettingValueModelSchema = z
  .strictObject({
    rolloutPercentageItems: z
      .array(RolloutPercentageItemModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The percentage rule collection.' }),
    rolloutRules: z
      .array(RolloutRuleModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The targeting rule collection.' }),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value to serve. It must respect the setting type.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSettingValueModel')

const UpdateTagModelSchema = z
  .strictObject({
    color: z.string().min(0).max(255).nullable().exactOptional(),
    name: z.string().min(0).max(255).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTagModel')

const UserModelSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    fullName: z.string().nullable().exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserModel')

const BasicSecurityScheme = {
  description:
    'To authenticate with the API you have to fill the `Authorization` HTTP request header with your Public API credentials.\n\nYou can create your credentials on the <a target="_blank" href="https://app.configcat.com/my-account/public-api-credentials">Public API credentials management page</a>.',
  scheme: 'basic',
  type: 'http',
}

export const postV1CodeReferencesRoute = createRoute({
  method: 'post',
  path: '/v1/code-references',
  tags: ['Code References'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: CodeReferenceRequestSchema },
        'application/json': { schema: CodeReferenceRequestSchema },
        'text/json': { schema: CodeReferenceRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1CodeReferencesDeleteReportsRoute = createRoute({
  method: 'post',
  path: '/v1/code-references/delete-reports',
  tags: ['Code References'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: DeleteRepositoryReportsRequestSchema },
        'application/json': { schema: DeleteRepositoryReportsRequestSchema },
        'text/json': { schema: DeleteRepositoryReportsRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ConfigsConfigIdRoute = createRoute({
  method: 'get',
  path: '/v1/configs/{configId}',
  tags: ['Configs'],
  summary: 'Get Config',
  description: 'This endpoint returns the metadata of a Config\nidentified by the `configId`.',
  operationId: 'get-config',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the config data returned.',
      content: {
        'application/hal+json': { schema: ConfigModelHaljsonSchema },
        'application/json': { schema: ConfigModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1ConfigsConfigIdRoute = createRoute({
  method: 'put',
  path: '/v1/configs/{configId}',
  tags: ['Configs'],
  summary: 'Update Config',
  description: 'This endpoint updates a Config identified by the `configId` parameter.',
  operationId: 'update-config',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateConfigRequestSchema },
        'application/json': { schema: UpdateConfigRequestSchema },
        'text/json': { schema: UpdateConfigRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: ConfigModelHaljsonSchema },
        'application/json': { schema: ConfigModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1ConfigsConfigIdRoute = createRoute({
  method: 'delete',
  path: '/v1/configs/{configId}',
  tags: ['Configs'],
  summary: 'Delete Config',
  description: 'This endpoint removes a Config identified by the `configId` parameter.',
  operationId: 'delete-config',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ConfigsConfigIdDeletedSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/configs/{configId}/deleted-settings',
  tags: ['Audit logs'],
  summary: 'List Deleted Settings',
  description:
    'This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.',
  operationId: 'get-deleted-settings',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(SettingModelHaljsonSchema) },
        'application/json': { schema: z.array(SettingModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ConfigsConfigIdEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/configs/{configId}/environments/{environmentId}',
  tags: ['SDK Keys'],
  summary: 'Get SDK Key',
  description: 'This endpoint returns the SDK Key for your Config in a specified Environment.',
  operationId: 'get-sdk-keys',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: SdkKeysModelSchema },
        'application/json': { schema: SdkKeysModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesRoute = createRoute({
  method: 'get',
  path: '/v1/configs/{configId}/environments/{environmentId}/values',
  tags: ['Feature Flag & Setting values'],
  summary: 'Get values',
  description:
    "This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter\nin a specified Environment identified by the `environmentId` parameter.\n\nThe most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.\nThe `value` represents what the clients will get when the evaluation requests of our SDKs \nare not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.\n\nThe `rolloutRules` and `percentageRules` attributes are representing the current \nTargeting and Percentage Rules configuration of the actual Feature Flag or Setting \nin an **ordered** collection, which means the order of the returned rules is matching to the\nevaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).",
  operationId: 'get-setting-values',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the setting values returned.',
      content: {
        'application/hal+json': { schema: ConfigSettingValuesModelSchema },
        'application/json': { schema: ConfigSettingValuesModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ConfigsConfigIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/configs/{configId}/settings',
  tags: ['Feature Flags & Settings'],
  summary: 'List Flags',
  description:
    'This endpoint returns the list of the Feature Flags and Settings defined in a \nspecified Config, identified by the `configId` parameter.',
  operationId: 'get-settings',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(SettingModelHaljsonSchema) },
        'application/json': { schema: z.array(SettingModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ConfigsConfigIdSettingsRoute = createRoute({
  method: 'post',
  path: '/v1/configs/{configId}/settings',
  tags: ['Feature Flags & Settings'],
  summary: 'Create Flag',
  description:
    'This endpoint creates a new Feature Flag or Setting in a specified Config\nidentified by the `configId` parameter.\n\n**Important:** The `key` attribute must be unique within the given Config.',
  operationId: 'create-setting',
  request: {
    params: z.object({
      configId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateSettingInitialValuesSchema },
        'application/json': { schema: CreateSettingInitialValuesSchema },
        'text/json': { schema: CreateSettingInitialValuesSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: SettingModelHaljsonSchema },
        'application/json': { schema: SettingModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1EnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/environments/{environmentId}',
  tags: ['Environments'],
  summary: 'Get Environment',
  description:
    'This endpoint returns the metadata of an Environment \nidentified by the `environmentId`.',
  operationId: 'get-environment',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the environment data returned.',
      content: {
        'application/hal+json': { schema: EnvironmentModelHaljsonSchema },
        'application/json': { schema: EnvironmentModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1EnvironmentsEnvironmentIdRoute = createRoute({
  method: 'put',
  path: '/v1/environments/{environmentId}',
  tags: ['Environments'],
  summary: 'Update Environment',
  description: 'This endpoint updates an Environment identified by the `environmentId` parameter.',
  operationId: 'update-environment',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateEnvironmentModelSchema },
        'application/json': { schema: UpdateEnvironmentModelSchema },
        'text/json': { schema: UpdateEnvironmentModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: EnvironmentModelHaljsonSchema },
        'application/json': { schema: EnvironmentModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1EnvironmentsEnvironmentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/environments/{environmentId}',
  tags: ['Environments'],
  summary: 'Delete Environment',
  description: 'This endpoint removes an Environment identified by the `environmentId` parameter.',
  operationId: 'delete-environment',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute =
  createRoute({
    method: 'post',
    path: '/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}',
    tags: ['Integration links'],
    summary: 'Add or update Integration link',
    operationId: 'add-or-update-integration-link',
    request: {
      params: z.object({
        environmentId: z
          .uuid()
          .openapi({
            param: {
              description: 'The identifier of the Environment.',
              in: 'path',
              name: 'environmentId',
              required: true,
              schema: { format: 'uuid', type: 'string' },
            },
          }),
        settingId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The id of the Setting.',
              in: 'path',
              name: 'settingId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        integrationLinkType: IntegrationLinkTypeSchema.openapi({
          param: {
            description: "The integration link's type.",
            in: 'path',
            name: 'integrationLinkType',
            required: true,
            schema: { $ref: '#/components/schemas/IntegrationLinkType' },
          },
        }),
        key: z
          .string()
          .openapi({
            param: {
              description: 'The key of the integration link.',
              in: 'path',
              name: 'key',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: AddOrUpdateIntegrationLinkModelSchema },
          'application/json': { schema: AddOrUpdateIntegrationLinkModelSchema },
          'text/json': { schema: AddOrUpdateIntegrationLinkModelSchema },
        },
      },
    },
    responses: {
      200: {
        description: 'When everything is ok, the integration link data returned.',
        content: {
          'application/hal+json': { schema: IntegrationLinkModelSchema },
          'application/json': { schema: IntegrationLinkModelSchema },
        },
      },
      400: { description: 'Bad request.' },
      401: {
        description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
      },
      404: { description: 'Not found.' },
      429: {
        description: 'Too many requests. In case of the request rate exceeds the rate limits.',
      },
    },
  })

export const deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute =
  createRoute({
    method: 'delete',
    path: '/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}',
    tags: ['Integration links'],
    summary: 'Delete Integration link',
    operationId: 'delete-integration-link',
    request: {
      params: z.object({
        environmentId: z
          .uuid()
          .openapi({
            param: {
              description: 'The identifier of the Environment.',
              in: 'path',
              name: 'environmentId',
              required: true,
              schema: { format: 'uuid', type: 'string' },
            },
          }),
        settingId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The id of the Setting.',
              in: 'path',
              name: 'settingId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        integrationLinkType: IntegrationLinkTypeSchema.openapi({
          param: {
            description: "The integration's type.",
            in: 'path',
            name: 'integrationLinkType',
            required: true,
            schema: { $ref: '#/components/schemas/IntegrationLinkType' },
          },
        }),
        key: z
          .string()
          .openapi({
            param: {
              description: 'The key of the integration link.',
              in: 'path',
              name: 'key',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'When everything is ok.',
        content: {
          'application/hal+json': { schema: DeleteIntegrationLinkModelSchema },
          'application/json': { schema: DeleteIntegrationLinkModelSchema },
        },
      },
      400: { description: 'Bad request.' },
      401: {
        description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
      },
      404: { description: 'Not found.' },
      429: {
        description: 'Too many requests. In case of the request rate exceeds the rate limits.',
      },
    },
  })

export const getV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute = createRoute({
  method: 'get',
  path: '/v1/environments/{environmentId}/settings/{settingId}/value',
  tags: ['Feature Flag & Setting values'],
  summary: 'Get value',
  description:
    'This endpoint returns the value of a Feature Flag or Setting \nin a specified Environment identified by the `environmentId` parameter.\n\nThe most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.\nThe `value` represents what the clients will get when the evaluation requests of our SDKs \nare not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.\n\nThe `rolloutRules` and `percentageRules` attributes are representing the current \nTargeting and Percentage Rules configuration of the actual Feature Flag or Setting \nin an **ordered** collection, which means the order of the returned rules is matching to the\nevaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).',
  operationId: 'get-setting-value',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      settingId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Setting.',
            in: 'path',
            name: 'settingId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the setting value data returned.',
      content: {
        'application/hal+json': { schema: SettingValueModelHaljsonSchema },
        'application/json': { schema: SettingValueModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute = createRoute({
  method: 'put',
  path: '/v1/environments/{environmentId}/settings/{settingId}/value',
  tags: ['Feature Flag & Setting values'],
  summary: 'Replace value',
  description:
    'This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.\n\nOnly the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.\n\n**Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t \nwant to change in its original state. Not listing one means that it will reset.\n\nFor example: We have the following resource.\n```\n{\n\t"rolloutPercentageItems": [\n\t\t{\n\t\t\t"percentage": 30,\n\t\t\t"value": true\n\t\t},\n\t\t{\n\t\t\t"percentage": 70,\n\t\t\t"value": false\n\t\t}\n\t],\n\t"rolloutRules": [],\n\t"value": false\n}\n```\nIf we send a replace request body as below:\n```\n{\n\t"value": true\n}\n```\nThen besides that the default value is set to `true`, all the Percentage Rules are deleted. \nSo we get a response like this:\n```\n{\n\t"rolloutPercentageItems": [],\n\t"rolloutRules": [],\n\t"value": true\n}\n```\n\nThe `rolloutRules` property describes two types of rules:\n\n- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.\n- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.',
  operationId: 'replace-setting-value',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      settingId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Setting.',
            in: 'path',
            name: 'settingId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The reason note for the Audit Log if the Product\'s "Config changes require a reason" preference is turned on.',
            in: 'query',
            name: 'reason',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': {
          schema: UpdateSettingValueModelSchema,
          examples: {
            advanced: {
              description:
                'This example turns on a feature flag and adds two items to its percentage evaluation rules.',
              value: {
                rolloutPercentageItems: [
                  { percentage: 30, value: true },
                  { percentage: 70, value: false },
                ],
                value: true,
              },
            },
            simple: {
              description: 'This example turns on a feature flag.',
              value: { value: true },
            },
          },
        },
        'application/json': {
          schema: UpdateSettingValueModelSchema,
          examples: {
            advanced: {
              description:
                'This example turns on a feature flag and adds two items to its percentage evaluation rules.',
              value: {
                rolloutPercentageItems: [
                  { percentage: 30, value: true },
                  { percentage: 70, value: false },
                ],
                value: true,
              },
            },
            simple: {
              description: 'This example turns on a feature flag.',
              value: { value: true },
            },
          },
        },
        'text/json': {
          schema: UpdateSettingValueModelSchema,
          examples: {
            advanced: {
              description:
                'This example turns on a feature flag and adds two items to its percentage evaluation rules.',
              value: {
                rolloutPercentageItems: [
                  { percentage: 30, value: true },
                  { percentage: 70, value: false },
                ],
                value: true,
              },
            },
            simple: {
              description: 'This example turns on a feature flag.',
              value: { value: true },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: SettingValueModelHaljsonSchema },
        'application/json': { schema: SettingValueModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const patchV1EnvironmentsEnvironmentIdSettingsSettingIdValueRoute = createRoute({
  method: 'patch',
  path: '/v1/environments/{environmentId}/settings/{settingId}/value',
  tags: ['Feature Flag & Setting values'],
  summary: 'Update value',
  description:
    'This endpoint updates the value of a Feature Flag or Setting \nwith a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.\n\nOnly the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.\n\nThe advantage of using JSON Patch is that you can describe individual update operations on a resource\nwithout touching attributes that you don\'t want to change. It supports collection reordering, so it also \ncan be used for reordering the targeting rules of a Feature Flag or Setting.\n\nFor example: We have the following resource.\n```\n{\n\t"rolloutPercentageItems": [\n\t\t{\n\t\t\t"percentage": 30,\n\t\t\t"value": true\n\t\t},\n\t\t{\n\t\t\t"percentage": 70,\n\t\t\t"value": false\n\t\t}\n\t],\n\t"rolloutRules": [],\n\t"value": false\n}\n```\nIf we send an update request body as below:\n```\n[\n\t{\n\t\t"op": "replace",\n\t\t"path": "/value",\n\t\t"value": true\n\t}\n]\n```\nOnly the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.\nSo we get a response like this:\n```\n{\n\t"rolloutPercentageItems": [\n\t\t{\n\t\t\t"percentage": 30,\n\t\t\t"value": true\n\t\t},\n\t\t{\n\t\t\t"percentage": 70,\n\t\t\t"value": false\n\t\t}\n\t],\n\t"rolloutRules": [],\n\t"value": true\n}\n```\n\nThe `rolloutRules` property describes two types of rules:\n\n- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.\n- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.',
  operationId: 'update-setting-value',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      settingId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The id of the Setting.',
            in: 'path',
            name: 'settingId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The reason note for the Audit Log if the Product\'s "Config changes require a reason" preference is turned on.',
            in: 'query',
            name: 'reason',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': {
          schema: JsonPatchSchema,
          examples: {
            'add percentage rules': {
              description: 'This example adds two items to the percentage evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 30, value: true },
                },
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 70, value: false },
                },
              ],
            },
            'add segment rules': {
              description: 'This example adds a segment to the evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    segmentComparator: 'isIn',
                    segmentId: '008a1fd6-8245-4ea8-90dc-a1dc36c1b4ff',
                  },
                },
              ],
            },
            'add targeting rules': {
              description: 'This example adds two items to the targeting evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'contains',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@example.com',
                    value: true,
                  },
                },
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'isOneOf',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@blacklist.com',
                    value: false,
                  },
                },
              ],
            },
            'modify targeting rule': {
              description:
                "This example modifies the first targeting rule's comparison value and the second's value.",
              value: [
                { op: 'replace', path: '/rolloutRules/0/comparisonValue', value: '@example2.com' },
                { op: 'replace', path: '/rolloutRules/1/value', value: true },
              ],
            },
            'reorder targeting rules': {
              description: 'This example swaps the first and the second targeting evaluation rule.',
              value: [{ from: '/rolloutRules/0', op: 'move', path: '/rolloutRules/1' }],
            },
            'turn on a feature flag': {
              description: 'This example turns on a feature flag.',
              value: [{ op: 'replace', path: '/value', value: true }],
            },
          },
        },
        'application/json': {
          schema: JsonPatchSchema,
          examples: {
            'add percentage rules': {
              description: 'This example adds two items to the percentage evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 30, value: true },
                },
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 70, value: false },
                },
              ],
            },
            'add segment rules': {
              description: 'This example adds a segment to the evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    segmentComparator: 'isIn',
                    segmentId: '008a1fd6-8245-4ea8-90dc-a1dc36c1b4ff',
                  },
                },
              ],
            },
            'add targeting rules': {
              description: 'This example adds two items to the targeting evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'contains',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@example.com',
                    value: true,
                  },
                },
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'isOneOf',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@blacklist.com',
                    value: false,
                  },
                },
              ],
            },
            'modify targeting rule': {
              description:
                "This example modifies the first targeting rule's comparison value and the second's value.",
              value: [
                { op: 'replace', path: '/rolloutRules/0/comparisonValue', value: '@example2.com' },
                { op: 'replace', path: '/rolloutRules/1/value', value: true },
              ],
            },
            'reorder targeting rules': {
              description: 'This example swaps the first and the second targeting evaluation rule.',
              value: [{ from: '/rolloutRules/0', op: 'move', path: '/rolloutRules/1' }],
            },
            'turn on a feature flag': {
              description: 'This example turns on a feature flag.',
              value: [{ op: 'replace', path: '/value', value: true }],
            },
          },
        },
        'text/json': {
          schema: JsonPatchSchema,
          examples: {
            'add percentage rules': {
              description: 'This example adds two items to the percentage evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 30, value: true },
                },
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 70, value: false },
                },
              ],
            },
            'add segment rules': {
              description: 'This example adds a segment to the evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    segmentComparator: 'isIn',
                    segmentId: '008a1fd6-8245-4ea8-90dc-a1dc36c1b4ff',
                  },
                },
              ],
            },
            'add targeting rules': {
              description: 'This example adds two items to the targeting evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'contains',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@example.com',
                    value: true,
                  },
                },
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'isOneOf',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@blacklist.com',
                    value: false,
                  },
                },
              ],
            },
            'modify targeting rule': {
              description:
                "This example modifies the first targeting rule's comparison value and the second's value.",
              value: [
                { op: 'replace', path: '/rolloutRules/0/comparisonValue', value: '@example2.com' },
                { op: 'replace', path: '/rolloutRules/1/value', value: true },
              ],
            },
            'reorder targeting rules': {
              description: 'This example swaps the first and the second targeting evaluation rule.',
              value: [{ from: '/rolloutRules/0', op: 'move', path: '/rolloutRules/1' }],
            },
            'turn on a feature flag': {
              description: 'This example turns on a feature flag.',
              value: [{ op: 'replace', path: '/value', value: true }],
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'When the patch was successful.',
      content: {
        'application/hal+json': { schema: SettingValueModelHaljsonSchema },
        'application/json': { schema: SettingValueModelSchema },
      },
    },
    204: { description: 'When no change applied on the resource.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRoute = createRoute({
  method: 'get',
  path: '/v1/integrationLink/{integrationLinkType}/{key}/details',
  tags: ['Integration links'],
  summary: 'Get Integration link',
  operationId: 'get-integration-link-details',
  request: {
    params: z.object({
      integrationLinkType: IntegrationLinkTypeSchema.openapi({
        param: {
          description: "The integration link's type.",
          in: 'path',
          name: 'integrationLinkType',
          required: true,
          schema: { $ref: '#/components/schemas/IntegrationLinkType' },
        },
      }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'The key of the integration link.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the details for the integration link returned.',
      content: {
        'application/hal+json': { schema: IntegrationLinkDetailsModelSchema },
        'application/json': { schema: IntegrationLinkDetailsModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1JiraConnectRoute = createRoute({
  method: 'post',
  path: '/v1/jira/Connect',
  tags: ['Integration links'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: ConnectRequestSchema },
        'application/json': { schema: ConnectRequestSchema },
        'text/json': { schema: ConnectRequestSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRoute =
  createRoute({
    method: 'post',
    path: '/v1/jira/environments/{environmentId}/settings/{settingId}/integrationLinks/{key}',
    tags: ['Integration links'],
    operationId: 'jira-add-or-update-integration-link',
    request: {
      params: z.object({
        environmentId: z
          .uuid()
          .openapi({
            param: {
              description: 'The identifier of the Environment.',
              in: 'path',
              name: 'environmentId',
              required: true,
              schema: { format: 'uuid', type: 'string' },
            },
          }),
        settingId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The id of the Setting.',
              in: 'path',
              name: 'settingId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        key: z
          .string()
          .openapi({
            param: {
              description: 'The key of the integration link.',
              in: 'path',
              name: 'key',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: AddOrUpdateJiraIntegrationLinkModelSchema },
          'application/json': { schema: AddOrUpdateJiraIntegrationLinkModelSchema },
          'text/json': { schema: AddOrUpdateJiraIntegrationLinkModelSchema },
        },
      },
    },
    responses: {
      200: {
        description: 'When everything is ok, the integration link data returned.',
        content: {
          'application/hal+json': { schema: IntegrationLinkModelSchema },
          'application/json': { schema: IntegrationLinkModelSchema },
        },
      },
      400: { description: 'Bad request.' },
      401: {
        description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
      },
      404: { description: 'Not found.' },
      429: {
        description: 'Too many requests. In case of the request rate exceeds the rate limits.',
      },
    },
  })

export const getV1MeRoute = createRoute({
  method: 'get',
  path: '/v1/me',
  tags: ['Me'],
  summary: 'Get authenticated user details',
  operationId: 'get-me',
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: MeModelSchema },
        'application/json': { schema: MeModelSchema },
      },
    },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1OrganizationsRoute = createRoute({
  method: 'get',
  path: '/v1/organizations',
  tags: ['Organizations'],
  summary: 'List Organizations',
  description: 'This endpoint returns the list of the Organizations that belongs to the user.',
  operationId: 'get-organizations',
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(OrganizationModelHaljsonSchema) },
        'application/json': { schema: z.array(OrganizationModelSchema) },
      },
    },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1OrganizationsOrganizationIdAuditlogsRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{organizationId}/auditlogs',
  tags: ['Audit logs'],
  summary: 'List Audit log items for Organization',
  description:
    'This endpoint returns the list of Audit log items for a given Organization \nand the result can be optionally filtered by Product and/or Config and/or Environment.',
  operationId: 'get-organization-auditlogs',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      productId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'query',
            name: 'productId',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      configId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'query',
            name: 'configId',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      environmentId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'query',
            name: 'environmentId',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      auditLogType: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        AuditLogTypeSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Audit logs by Audit log type.',
            in: 'query',
            name: 'auditLogType',
            schema: { allOf: [{ $ref: '#/components/schemas/AuditLogType' }], nullable: true },
            required: false,
          },
        }),
      fromUtcDateTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Audit logs by starting UTC date.',
            in: 'query',
            name: 'fromUtcDateTime',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      toUtcDateTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Audit logs by ending UTC date.',
            in: 'query',
            name: 'toUtcDateTime',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(AuditLogItemModelSchema) },
        'application/json': { schema: z.array(AuditLogItemModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1OrganizationsOrganizationIdMembersRoute = createRoute({
  method: 'get',
  path: '/v1/organizations/{organizationId}/members',
  tags: ['Members'],
  summary: 'List Organization Members',
  description:
    'This endpoint returns the list of Members that belongs \nto the given Organization, identified by the `organizationId` parameter.',
  operationId: 'get-organization-members',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(UserModelSchema) },
        'application/json': { schema: z.array(UserModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1OrganizationsOrganizationIdMembersUserIdRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/{organizationId}/members/{userId}',
  tags: ['Members'],
  summary: 'Update Member Permissions',
  description:
    'This endpoint adds a Member identified by the `userId` to one or more Permission Groups. \nThis endpoint can also be used to move a Member between Permission Groups within a Product.\nOnly a single Permission Group can be set per Product.',
  operationId: 'add-member-to-group',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the Member.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: AddUserToGroupRequestSchema },
        'application/json': { schema: AddUserToGroupRequestSchema },
        'text/json': { schema: AddUserToGroupRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'When the addition was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1OrganizationsOrganizationIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/organizations/{organizationId}/members/{userId}',
  tags: ['Members'],
  summary: 'Delete Member from Organization',
  description:
    'This endpoint removes a Member identified by the `userId` from the \ngiven Organization identified by the `organizationId` parameter.',
  operationId: 'delete-organization-member',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the Member.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1OrganizationsOrganizationIdProductsRoute = createRoute({
  method: 'post',
  path: '/v1/organizations/{organizationId}/products',
  tags: ['Products'],
  summary: 'Create Product',
  description:
    'This endpoint creates a new Product in a specified Organization \nidentified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.',
  operationId: 'create-product',
  request: {
    params: z.object({
      organizationId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateProductRequestSchema },
        'application/json': { schema: CreateProductRequestSchema },
        'text/json': { schema: CreateProductRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: ProductModelHaljsonSchema },
        'application/json': { schema: ProductModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1PermissionsPermissionGroupIdRoute = createRoute({
  method: 'get',
  path: '/v1/permissions/{permissionGroupId}',
  tags: ['Permission Groups'],
  summary: 'Get Permission Group',
  description:
    'This endpoint returns the metadata of a Permission Group \nidentified by the `permissionGroupId`.',
  operationId: 'get-permission-group',
  request: {
    params: z.object({
      permissionGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Permission Group.',
            in: 'path',
            name: 'permissionGroupId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the permission group data returned.',
      content: {
        'application/hal+json': { schema: PermissionGroupModelHaljsonSchema },
        'application/json': { schema: PermissionGroupModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1PermissionsPermissionGroupIdRoute = createRoute({
  method: 'put',
  path: '/v1/permissions/{permissionGroupId}',
  tags: ['Permission Groups'],
  summary: 'Update Permission Group',
  description:
    'This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.',
  operationId: 'update-permission-group',
  request: {
    params: z.object({
      permissionGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Permission Group.',
            in: 'path',
            name: 'permissionGroupId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdatePermissionGroupRequestSchema },
        'application/json': { schema: UpdatePermissionGroupRequestSchema },
        'text/json': { schema: UpdatePermissionGroupRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: PermissionGroupModelHaljsonSchema },
        'application/json': { schema: PermissionGroupModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1PermissionsPermissionGroupIdRoute = createRoute({
  method: 'delete',
  path: '/v1/permissions/{permissionGroupId}',
  tags: ['Permission Groups'],
  summary: 'Delete Permission Group',
  description:
    'This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.',
  operationId: 'delete-permission-group',
  request: {
    params: z.object({
      permissionGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Permission Group.',
            in: 'path',
            name: 'permissionGroupId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsRoute = createRoute({
  method: 'get',
  path: '/v1/products',
  tags: ['Products'],
  summary: 'List Products',
  description: 'This endpoint returns the list of the Products that belongs to the user.',
  operationId: 'get-products',
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(ProductModelHaljsonSchema) },
        'application/json': { schema: z.array(ProductModelSchema) },
      },
    },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}',
  tags: ['Products'],
  summary: 'Get Product',
  description: 'This endpoint returns the metadata of a Product \nidentified by the `productId`.',
  operationId: 'get-product',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the product data returned.',
      content: {
        'application/hal+json': { schema: ProductModelHaljsonSchema },
        'application/json': { schema: ProductModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1ProductsProductIdRoute = createRoute({
  method: 'put',
  path: '/v1/products/{productId}',
  tags: ['Products'],
  summary: 'Update Product',
  description: 'This endpoint updates a Product identified by the `productId` parameter.',
  operationId: 'update-product',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateProductRequestSchema },
        'application/json': { schema: UpdateProductRequestSchema },
        'text/json': { schema: UpdateProductRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: ProductModelHaljsonSchema },
        'application/json': { schema: ProductModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1ProductsProductIdRoute = createRoute({
  method: 'delete',
  path: '/v1/products/{productId}',
  tags: ['Products'],
  summary: 'Delete Product',
  description: 'This endpoint removes a Product identified by the `productId` parameter.',
  operationId: 'delete-product',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdAuditlogsRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/auditlogs',
  tags: ['Audit logs'],
  summary: 'List Audit log items for Product',
  description:
    'This endpoint returns the list of Audit log items for a given Product \nand the result can be optionally filtered by Config and/or Environment.',
  operationId: 'get-auditlogs',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      configId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The identifier of the Config.',
            in: 'query',
            name: 'configId',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      environmentId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The identifier of the Environment.',
            in: 'query',
            name: 'environmentId',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      auditLogType: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        AuditLogTypeSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Audit logs by Audit log type.',
            in: 'query',
            name: 'auditLogType',
            schema: { allOf: [{ $ref: '#/components/schemas/AuditLogType' }], nullable: true },
            required: false,
          },
        }),
      fromUtcDateTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Audit logs by starting UTC date.',
            in: 'query',
            name: 'fromUtcDateTime',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      toUtcDateTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter Audit logs by ending UTC date.',
            in: 'query',
            name: 'toUtcDateTime',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(AuditLogItemModelSchema) },
        'application/json': { schema: z.array(AuditLogItemModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/configs',
  tags: ['Configs'],
  summary: 'List Configs',
  description:
    'This endpoint returns the list of the Configs that belongs to the given Product identified by the\n`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'get-configs',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(ConfigModelHaljsonSchema) },
        'application/json': { schema: z.array(ConfigModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ProductsProductIdConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/products/{productId}/configs',
  tags: ['Configs'],
  summary: 'Create Config',
  description:
    'This endpoint creates a new Config in a specified Product \nidentified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'create-config',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateConfigRequestSchema },
        'application/json': { schema: CreateConfigRequestSchema },
        'text/json': { schema: CreateConfigRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: ConfigModelHaljsonSchema },
        'application/json': { schema: ConfigModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/environments',
  tags: ['Environments'],
  summary: 'List Environments',
  description:
    'This endpoint returns the list of the Environments that belongs to the given Product identified by the\n`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'get-environments',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(EnvironmentModelHaljsonSchema) },
        'application/json': { schema: z.array(EnvironmentModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ProductsProductIdEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1/products/{productId}/environments',
  tags: ['Environments'],
  summary: 'Create Environment',
  description:
    'This endpoint creates a new Environment in a specified Product \nidentified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'create-environment',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateEnvironmentModelSchema },
        'application/json': { schema: CreateEnvironmentModelSchema },
        'text/json': { schema: CreateEnvironmentModelSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: EnvironmentModelHaljsonSchema },
        'application/json': { schema: EnvironmentModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdMembersRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/members',
  tags: ['Members'],
  summary: 'List Product Members',
  description:
    'This endpoint returns the list of Members that belongs \nto the given Product, identified by the `productId` parameter.',
  operationId: 'get-product-members',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(MemberModelSchema) },
        'application/json': { schema: z.array(MemberModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ProductsProductIdMembersInviteRoute = createRoute({
  method: 'post',
  path: '/v1/products/{productId}/members/invite',
  tags: ['Members'],
  summary: 'Invite Member',
  description:
    'This endpoint invites a Member into the given Product identified by the `productId` parameter.',
  operationId: 'invite-member',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: InviteMembersRequestSchema },
        'application/json': { schema: InviteMembersRequestSchema },
        'text/json': { schema: InviteMembersRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'When the invite was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1ProductsProductIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/products/{productId}/members/{userId}',
  tags: ['Members'],
  summary: 'Delete Member from Product',
  description:
    'This endpoint removes a Member identified by the `userId` from the \ngiven Product identified by the `productId` parameter.',
  operationId: 'delete-product-member',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the Member.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/permissions',
  tags: ['Permission Groups'],
  summary: 'List Permission Groups',
  description:
    'This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the\n`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'get-permission-groups',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(PermissionGroupModelHaljsonSchema) },
        'application/json': { schema: z.array(PermissionGroupModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ProductsProductIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/products/{productId}/permissions',
  tags: ['Permission Groups'],
  summary: 'Create Permission Group',
  description:
    'This endpoint creates a new Permission Group in a specified Product \nidentified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'create-permission-group',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreatePermissionGroupRequestSchema },
        'application/json': { schema: CreatePermissionGroupRequestSchema },
        'text/json': { schema: CreatePermissionGroupRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: PermissionGroupModelHaljsonSchema },
        'application/json': { schema: PermissionGroupModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdSegmentsRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/segments',
  tags: ['Segments'],
  summary: 'List Segments',
  description:
    'This endpoint returns the list of the Segments that belongs to the given Product identified by the\n`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'get-segments',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(SegmentListModelHaljsonSchema) },
        'application/json': { schema: z.array(SegmentListModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ProductsProductIdSegmentsRoute = createRoute({
  method: 'post',
  path: '/v1/products/{productId}/segments',
  tags: ['Segments'],
  summary: 'Create Segment',
  description:
    'This endpoint creates a new Segment in a specified Product \nidentified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'create-segment',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateSegmentModelSchema },
        'application/json': { schema: CreateSegmentModelSchema },
        'text/json': { schema: CreateSegmentModelSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: SegmentModelHaljsonSchema },
        'application/json': { schema: SegmentModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1ProductsProductIdTagsRoute = createRoute({
  method: 'get',
  path: '/v1/products/{productId}/tags',
  tags: ['Tags'],
  summary: 'List Tags',
  description:
    'This endpoint returns the list of the Tags in a \nspecified Product, identified by the `productId` parameter.',
  operationId: 'get-tags',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: z.array(TagModelHaljsonSchema) },
        'application/json': { schema: z.array(TagModelSchema) },
      },
    },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const postV1ProductsProductIdTagsRoute = createRoute({
  method: 'post',
  path: '/v1/products/{productId}/tags',
  tags: ['Tags'],
  summary: 'Create Tag',
  description:
    'This endpoint creates a new Tag in a specified Product \nidentified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.',
  operationId: 'create-tag',
  request: {
    params: z.object({
      productId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Organization.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateTagModelSchema },
        'application/json': { schema: CreateTagModelSchema },
        'text/json': { schema: CreateTagModelSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'When the creation was successful.',
      content: {
        'application/hal+json': { schema: TagModelHaljsonSchema },
        'application/json': { schema: TagModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1SegmentsSegmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/segments/{segmentId}',
  tags: ['Segments'],
  summary: 'Get Segment',
  description: 'This endpoint returns the metadata of a Segment\nidentified by the `segmentId`.',
  operationId: 'get-segment',
  request: {
    params: z.object({
      segmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Segment.',
            in: 'path',
            name: 'segmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the config data returned.',
      content: {
        'application/hal+json': { schema: SegmentModelHaljsonSchema },
        'application/json': { schema: SegmentModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1SegmentsSegmentIdRoute = createRoute({
  method: 'put',
  path: '/v1/segments/{segmentId}',
  tags: ['Segments'],
  summary: 'Update Segment',
  description: 'This endpoint updates a Segment identified by the `segmentId` parameter.',
  operationId: 'update-segment',
  request: {
    params: z.object({
      segmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Segment.',
            in: 'path',
            name: 'segmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateSegmentModelSchema },
        'application/json': { schema: UpdateSegmentModelSchema },
        'text/json': { schema: UpdateSegmentModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: SegmentModelHaljsonSchema },
        'application/json': { schema: SegmentModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1SegmentsSegmentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/segments/{segmentId}',
  tags: ['Segments'],
  summary: 'Delete Segment',
  description: 'This endpoint removes a Segment identified by the `segmentId` parameter.',
  operationId: 'delete-segment',
  request: {
    params: z.object({
      segmentId: z
        .uuid()
        .openapi({
          param: {
            description: 'The identifier of the Segment.',
            in: 'path',
            name: 'segmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1SettingsSettingIdRoute = createRoute({
  method: 'get',
  path: '/v1/settings/{settingId}',
  tags: ['Feature Flags & Settings'],
  summary: 'Get Flag',
  description:
    'This endpoint returns the metadata attributes of a Feature Flag or Setting \nidentified by the `settingId` parameter.',
  operationId: 'get-setting',
  request: {
    params: z.object({
      settingId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The identifier of the Setting.',
            in: 'path',
            name: 'settingId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the setting data returned.',
      content: {
        'application/hal+json': { schema: SettingModelHaljsonSchema },
        'application/json': { schema: SettingModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1SettingsSettingIdRoute = createRoute({
  method: 'delete',
  path: '/v1/settings/{settingId}',
  tags: ['Feature Flags & Settings'],
  summary: 'Delete Flag',
  description:
    'This endpoint removes a Feature Flag or Setting from a specified Config, \nidentified by the `configId` parameter.',
  operationId: 'delete-setting',
  request: {
    params: z.object({
      settingId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The identifier of the Setting.',
            in: 'path',
            name: 'settingId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const patchV1SettingsSettingIdRoute = createRoute({
  method: 'patch',
  path: '/v1/settings/{settingId}',
  tags: ['Feature Flags & Settings'],
  summary: 'Update Flag',
  description:
    'This endpoint updates the metadata of a Feature Flag or Setting \nwith a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.\n\nOnly the `name`, `hint` and `tags` attributes are modifiable by this endpoint.\nThe `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.\n\nThe advantage of using JSON Patch is that you can describe individual update operations on a resource\nwithout touching attributes that you don\'t want to change.\n\nFor example: We have the following resource.\n```\n{\n\t"settingId": 5345,\n\t"key": "myGrandFeature",\n\t"name": "Tihs is a naem with soem typos.",\n\t"hint": "This flag controls my grandioso feature.",\n\t"settingType": "boolean",\n\t"tags": [\n\t\t{\n\t\t\t"tagId": 0,\n\t\t\t"name": "sample tag",\n\t\t\t"color": "whale"\n\t\t}\n\t]\n}\n```\nIf we send an update request body as below (it changes the name and adds the already existing tag with the id 2):\n```\n[\n\t{\n\t\t"op": "replace",\n\t\t"path": "/name",\n\t\t"value": "This is the name without typos."\n\t},\n\t{\n\t\t"op": "add",\n\t\t"path": "/tags/-",\n\t\t"value": 2\n\t}\n]\n```\nOnly the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.\nSo we get a response like this:\n```\n{\n\t"settingId": 5345,\n\t"key": "myGrandFeature",\n\t"name": "This is the name without typos.",\n\t"hint": "This flag controls my grandioso feature.",\n\t"settingType": "boolean",\n\t"tags": [\n\t\t{\n\t\t\t"tagId": 0,\n\t\t\t"name": "sample tag",\n\t\t\t"color": "whale"\n\t\t},\n\t\t{\n\t\t\t"tagId": 2,\n\t\t\t"name": "another tag",\n\t\t\t"color": "koala"\n\t\t}\n\t]\n}\n```',
  operationId: 'update-setting',
  request: {
    params: z.object({
      settingId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The identifier of the Setting.',
            in: 'path',
            name: 'settingId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: JsonPatchSchema },
        'application/json': { schema: JsonPatchSchema },
        'text/json': { schema: JsonPatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'When the update was successful.',
      content: {
        'application/hal+json': { schema: SettingModelHaljsonSchema },
        'application/json': { schema: SettingModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1SettingsSettingKeyOrIdValueRoute = createRoute({
  method: 'get',
  path: '/v1/settings/{settingKeyOrId}/value',
  tags: ['Feature Flag & Setting values using SDK Key'],
  summary: 'Get value',
  description:
    'This endpoint returns the value of a Feature Flag or Setting \nin a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.\n\nThe most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.\nThe `value` represents what the clients will get when the evaluation requests of our SDKs \nare not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.\n\nThe `rolloutRules` and `percentageRules` attributes are representing the current \nTargeting and Percentage Rules configuration of the actual Feature Flag or Setting \nin an **ordered** collection, which means the order of the returned rules is matching to the\nevaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).',
  operationId: 'get-setting-value-by-sdkkey',
  request: {
    params: z.object({
      settingKeyOrId: z
        .string()
        .openapi({
          param: {
            description: 'The key or id of the Setting.',
            in: 'path',
            name: 'settingKeyOrId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-CONFIGCAT-SDKKEY': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)',
            in: 'header',
            name: 'X-CONFIGCAT-SDKKEY',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: SettingValueModelHaljsonSchema },
        'application/json': { schema: SettingValueModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1SettingsSettingKeyOrIdValueRoute = createRoute({
  method: 'put',
  path: '/v1/settings/{settingKeyOrId}/value',
  tags: ['Feature Flag & Setting values using SDK Key'],
  summary: 'Replace value',
  description:
    'This endpoint replaces the value of a Feature Flag or Setting \nin a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.\n\nOnly the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.\n\n**Important:** As this endpoint is doing a complete replace, it\'s important to set every other attribute that you don\'t \nwant to change to its original state. Not listing one means that it will reset.\n\nFor example: We have the following resource.\n```\n{\n\t"rolloutPercentageItems": [\n\t\t{\n\t\t\t"percentage": 30,\n\t\t\t"value": true\n\t\t},\n\t\t{\n\t\t\t"percentage": 70,\n\t\t\t"value": false\n\t\t}\n\t],\n\t"rolloutRules": [],\n\t"value": false\n}\n```\nIf we send a replace request body as below:\n```\n{\n\t"value": true\n}\n```\nThen besides that the default served value is set to `true`, all the Percentage Rules are deleted. \nSo we get a response like this:\n```\n{\n\t"rolloutPercentageItems": [],\n\t"rolloutRules": [],\n\t"value": true\n}\n```',
  operationId: 'replace-setting-value-by-sdkkey',
  request: {
    params: z.object({
      settingKeyOrId: z
        .string()
        .openapi({
          param: {
            description: 'The key or id of the Setting.',
            in: 'path',
            name: 'settingKeyOrId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The reason note for the Audit Log if the Product\'s "Config changes require a reason" preference is turned on.',
            in: 'query',
            name: 'reason',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-CONFIGCAT-SDKKEY': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)',
            in: 'header',
            name: 'X-CONFIGCAT-SDKKEY',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': {
          schema: UpdateSettingValueModelSchema,
          examples: {
            advanced: {
              description:
                'This example turns on a feature flag and adds two items to its percentage evaluation rules.',
              value: {
                rolloutPercentageItems: [
                  { percentage: 30, value: true },
                  { percentage: 70, value: false },
                ],
                value: true,
              },
            },
            simple: {
              description: 'This example turns on a feature flag.',
              value: { value: true },
            },
          },
        },
        'application/json': {
          schema: UpdateSettingValueModelSchema,
          examples: {
            advanced: {
              description:
                'This example turns on a feature flag and adds two items to its percentage evaluation rules.',
              value: {
                rolloutPercentageItems: [
                  { percentage: 30, value: true },
                  { percentage: 70, value: false },
                ],
                value: true,
              },
            },
            simple: {
              description: 'This example turns on a feature flag.',
              value: { value: true },
            },
          },
        },
        'text/json': {
          schema: UpdateSettingValueModelSchema,
          examples: {
            advanced: {
              description:
                'This example turns on a feature flag and adds two items to its percentage evaluation rules.',
              value: {
                rolloutPercentageItems: [
                  { percentage: 30, value: true },
                  { percentage: 70, value: false },
                ],
                value: true,
              },
            },
            simple: {
              description: 'This example turns on a feature flag.',
              value: { value: true },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: SettingValueModelHaljsonSchema },
        'application/json': { schema: SettingValueModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const patchV1SettingsSettingKeyOrIdValueRoute = createRoute({
  method: 'patch',
  path: '/v1/settings/{settingKeyOrId}/value',
  tags: ['Feature Flag & Setting values using SDK Key'],
  summary: 'Update value',
  description:
    'This endpoint updates the value of a Feature Flag or Setting \nwith a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment\nidentified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.\n\nOnly the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.\n\nThe advantage of using JSON Patch is that you can describe individual update operations on a resource\nwithout touching attributes that you don\'t want to change. It supports collection reordering, so it also \ncan be used for reordering the targeting rules of a Feature Flag or Setting.\n\nFor example: We have the following resource.\n```\n{\n\t"rolloutPercentageItems": [\n\t\t{\n\t\t\t"percentage": 30,\n\t\t\t"value": true\n\t\t},\n\t\t{\n\t\t\t"percentage": 70,\n\t\t\t"value": false\n\t\t}\n\t],\n\t"rolloutRules": [],\n\t"value": false\n}\n```\nIf we send an update request body as below:\n```\n[\n\t{\n\t\t"op": "replace",\n\t\t"path": "/value",\n\t\t"value": true\n\t}\n]\n```\nOnly the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.\nSo we get a response like this:\n```\n{\n\t"rolloutPercentageItems": [\n\t\t{\n\t\t\t"percentage": 30,\n\t\t\t"value": true\n\t\t},\n\t\t{\n\t\t\t"percentage": 70,\n\t\t\t"value": false\n\t\t}\n\t],\n\t"rolloutRules": [],\n\t"value": true\n}\n```',
  operationId: 'update-setting-value-by-sdkkey',
  request: {
    params: z.object({
      settingKeyOrId: z
        .string()
        .openapi({
          param: {
            description: 'The key or id of the Setting.',
            in: 'path',
            name: 'settingKeyOrId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The reason note for the Audit Log if the Product\'s "Config changes require a reason" preference is turned on.',
            in: 'query',
            name: 'reason',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-CONFIGCAT-SDKKEY': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)',
            in: 'header',
            name: 'X-CONFIGCAT-SDKKEY',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': {
          schema: JsonPatchSchema,
          examples: {
            'add percentage rules': {
              description: 'This example adds two items to the percentage evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 30, value: true },
                },
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 70, value: false },
                },
              ],
            },
            'add segment rules': {
              description: 'This example adds a segment to the evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    segmentComparator: 'isIn',
                    segmentId: '008a1fd6-8245-4ea8-90dc-a1dc36c1b4ff',
                  },
                },
              ],
            },
            'add targeting rules': {
              description: 'This example adds two items to the targeting evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'contains',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@example.com',
                    value: true,
                  },
                },
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'isOneOf',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@blacklist.com',
                    value: false,
                  },
                },
              ],
            },
            'modify targeting rule': {
              description:
                "This example modifies the first targeting rule's comparison value and the second's value.",
              value: [
                { op: 'replace', path: '/rolloutRules/0/comparisonValue', value: '@example2.com' },
                { op: 'replace', path: '/rolloutRules/1/value', value: true },
              ],
            },
            'reorder targeting rules': {
              description: 'This example swaps the first and the second targeting evaluation rule.',
              value: [{ from: '/rolloutRules/0', op: 'move', path: '/rolloutRules/1' }],
            },
            'turn on a feature flag': {
              description: 'This example turns on a feature flag.',
              value: [{ op: 'replace', path: '/value', value: true }],
            },
          },
        },
        'application/json': {
          schema: JsonPatchSchema,
          examples: {
            'add percentage rules': {
              description: 'This example adds two items to the percentage evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 30, value: true },
                },
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 70, value: false },
                },
              ],
            },
            'add segment rules': {
              description: 'This example adds a segment to the evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    segmentComparator: 'isIn',
                    segmentId: '008a1fd6-8245-4ea8-90dc-a1dc36c1b4ff',
                  },
                },
              ],
            },
            'add targeting rules': {
              description: 'This example adds two items to the targeting evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'contains',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@example.com',
                    value: true,
                  },
                },
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'isOneOf',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@blacklist.com',
                    value: false,
                  },
                },
              ],
            },
            'modify targeting rule': {
              description:
                "This example modifies the first targeting rule's comparison value and the second's value.",
              value: [
                { op: 'replace', path: '/rolloutRules/0/comparisonValue', value: '@example2.com' },
                { op: 'replace', path: '/rolloutRules/1/value', value: true },
              ],
            },
            'reorder targeting rules': {
              description: 'This example swaps the first and the second targeting evaluation rule.',
              value: [{ from: '/rolloutRules/0', op: 'move', path: '/rolloutRules/1' }],
            },
            'turn on a feature flag': {
              description: 'This example turns on a feature flag.',
              value: [{ op: 'replace', path: '/value', value: true }],
            },
          },
        },
        'text/json': {
          schema: JsonPatchSchema,
          examples: {
            'add percentage rules': {
              description: 'This example adds two items to the percentage evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 30, value: true },
                },
                {
                  op: 'add',
                  path: '/rolloutPercentageItems/-',
                  value: { percentage: 70, value: false },
                },
              ],
            },
            'add segment rules': {
              description: 'This example adds a segment to the evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    segmentComparator: 'isIn',
                    segmentId: '008a1fd6-8245-4ea8-90dc-a1dc36c1b4ff',
                  },
                },
              ],
            },
            'add targeting rules': {
              description: 'This example adds two items to the targeting evaluation rules.',
              value: [
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'contains',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@example.com',
                    value: true,
                  },
                },
                {
                  op: 'add',
                  path: '/rolloutRules/-',
                  value: {
                    comparator: 'isOneOf',
                    comparisonAttribute: 'Identifier',
                    comparisonValue: '@blacklist.com',
                    value: false,
                  },
                },
              ],
            },
            'modify targeting rule': {
              description:
                "This example modifies the first targeting rule's comparison value and the second's value.",
              value: [
                { op: 'replace', path: '/rolloutRules/0/comparisonValue', value: '@example2.com' },
                { op: 'replace', path: '/rolloutRules/1/value', value: true },
              ],
            },
            'reorder targeting rules': {
              description: 'This example swaps the first and the second targeting evaluation rule.',
              value: [{ from: '/rolloutRules/0', op: 'move', path: '/rolloutRules/1' }],
            },
            'turn on a feature flag': {
              description: 'This example turns on a feature flag.',
              value: [{ op: 'replace', path: '/value', value: true }],
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: SettingValueModelHaljsonSchema },
        'application/json': { schema: SettingValueModelSchema },
      },
    },
    204: { description: 'When no change applied on the resource.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1TagsTagIdRoute = createRoute({
  method: 'get',
  path: '/v1/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Get Tag',
  description: 'This endpoint returns the metadata of a Tag \nidentified by the `tagId`.',
  operationId: 'get-tag',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the tag data returned.',
      content: {
        'application/hal+json': { schema: TagModelHaljsonSchema },
        'application/json': { schema: TagModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const putV1TagsTagIdRoute = createRoute({
  method: 'put',
  path: '/v1/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Update Tag',
  description: 'This endpoint updates a Tag identified by the `tagId` parameter.',
  operationId: 'update-tag',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateTagModelSchema },
        'application/json': { schema: UpdateTagModelSchema },
        'text/json': { schema: UpdateTagModelSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/hal+json': { schema: TagModelHaljsonSchema },
        'application/json': { schema: TagModelSchema },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const deleteV1TagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/v1/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Delete Tag',
  description:
    'This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.',
  operationId: 'delete-tag',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'When the delete was successful.' },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})

export const getV1TagsTagIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/tags/{tagId}/settings',
  tags: ['Tags'],
  summary: 'List Settings by Tag',
  description:
    'This endpoint returns the list of the Settings that \nhas the specified Tag, identified by the `tagId` parameter.',
  operationId: 'get-settings-by-tag',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The identifier of the Tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When everything is ok, the settings data returned.',
      content: {
        'application/hal+json': { schema: z.array(SettingModelHaljsonSchema) },
        'application/json': { schema: z.array(SettingModelSchema) },
      },
    },
    400: { description: 'Bad request.' },
    401: {
      description: 'Unauthorized. In case of the Public Management API credentials are invalid.',
    },
    404: { description: 'Not found.' },
    429: { description: 'Too many requests. In case of the request rate exceeds the rate limits.' },
  },
})
