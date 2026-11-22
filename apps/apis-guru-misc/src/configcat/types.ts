type ReferenceLine = { lineNumber: number; lineText?: (string | null) | undefined }
type ReferenceLines = {
  file: string
  fileUrl?: (string | null) | undefined
  postLines?: (ReferenceLine[] | null) | undefined
  preLines?: (ReferenceLine[] | null) | undefined
  referenceLine: ReferenceLine
}
type FlagReference = { references: ReferenceLines[]; settingId: number }
type CodeReferenceRequest = {
  activeBranches?: (string[] | null) | undefined
  branch: string
  commitHash?: (string | null) | undefined
  commitUrl?: (string | null) | undefined
  configId: string
  flagReferences?: (FlagReference[] | null) | undefined
  repository: string
  uploader?: (string | null) | undefined
}
type DeleteRepositoryReportsRequest = {
  branch?: (string | null) | undefined
  configId: string
  repository: string
  settingId?: (number | null) | undefined
}
type ConfigModelHaljson = {
  _embedded?:
    | {
        product?:
          | {
              _embedded?:
                | {
                    organization?:
                      | {
                          _links?:
                            | { members?: string | undefined; products?: string | undefined }
                            | undefined
                          name?: (string | null) | undefined
                          organizationId?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?:
                | {
                    configs?: string | undefined
                    environments?: string | undefined
                    members?: string | undefined
                    'permission-groups'?: string | undefined
                    segments?: string | undefined
                    self?: string | undefined
                    tags?: string | undefined
                  }
                | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              productId?: string | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined; settings?: string | undefined } | undefined
  configId?: string | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
}
type OrganizationModel = { name?: (string | null) | undefined; organizationId?: string | undefined }
type ProductModel = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  organization?: OrganizationModel | undefined
  productId?: string | undefined
  reasonRequired?: boolean | undefined
}
type ConfigModel = {
  configId?: string | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  product?: ProductModel | undefined
}
type UpdateConfigRequest = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type SettingType = 'boolean' | 'string' | 'int' | 'double'
type SettingModelHaljson = {
  _embedded?:
    | {
        tags?:
          | {
              _embedded?:
                | {
                    product?:
                      | {
                          _embedded?:
                            | {
                                organization?:
                                  | {
                                      _links?:
                                        | {
                                            members?: string | undefined
                                            products?: string | undefined
                                          }
                                        | undefined
                                      name?: (string | null) | undefined
                                      organizationId?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          _links?:
                            | {
                                configs?: string | undefined
                                environments?: string | undefined
                                members?: string | undefined
                                'permission-groups'?: string | undefined
                                segments?: string | undefined
                                self?: string | undefined
                                tags?: string | undefined
                              }
                            | undefined
                          description?: (string | null) | undefined
                          name?: (string | null) | undefined
                          order?: number | undefined
                          productId?: string | undefined
                          reasonRequired?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?: { self?: string | undefined } | undefined
              color?: (string | null) | undefined
              name?: (string | null) | undefined
              tagId?: bigint | undefined
            }[]
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  configId?: string | undefined
  configName?: (string | null) | undefined
  hint?: (string | null) | undefined
  key?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  settingId?: number | undefined
  settingType?: SettingType | undefined
}
type TagModel = {
  color?: (string | null) | undefined
  name?: (string | null) | undefined
  product?: ProductModel | undefined
  tagId?: bigint | undefined
}
type SettingModel = {
  configId?: string | undefined
  configName?: (string | null) | undefined
  hint?: (string | null) | undefined
  key?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  settingId?: number | undefined
  settingType?: SettingType | undefined
  tags?: (TagModel[] | null) | undefined
}
type SdkKeysModel = {
  primary?: (string | null) | undefined
  secondary?: (string | null) | undefined
}
type EnvironmentModel = {
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  environmentId?: string | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  product?: ProductModel | undefined
  reasonRequired?: boolean | undefined
}
type IntegrationLinkType = 'trello' | 'jira' | 'monday'
type IntegrationLinkModel = {
  description?: (string | null) | undefined
  integrationLinkType?: IntegrationLinkType | undefined
  key?: (string | null) | undefined
  url?: (string | null) | undefined
}
type RolloutPercentageItemModel = {
  percentage: bigint
  value?: ({ [x: string]: unknown } | null) | undefined
}
type RolloutRuleComparator =
  | 'isOneOf'
  | 'isNotOneOf'
  | 'contains'
  | 'doesNotContain'
  | 'semVerIsOneOf'
  | 'semVerIsNotOneOf'
  | 'semVerLess'
  | 'semVerLessOrEquals'
  | 'semVerGreater'
  | 'semVerGreaterOrEquals'
  | 'numberEquals'
  | 'numberDoesNotEqual'
  | 'numberLess'
  | 'numberLessOrEquals'
  | 'numberGreater'
  | 'numberGreaterOrEquals'
  | 'sensitiveIsOneOf'
  | 'sensitiveIsNotOneOf'
type SegmentComparator = 'isIn' | 'isNotIn'
type RolloutRuleModel = {
  comparator?: RolloutRuleComparator | undefined
  comparisonAttribute?: (string | null) | undefined
  comparisonValue?: (string | null) | undefined
  segmentComparator?: SegmentComparator | undefined
  segmentId?: (string | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type SettingDataModel = {
  createdAt?: (string | null) | undefined
  creatorEmail?: (string | null) | undefined
  creatorFullName?: (string | null) | undefined
  hint?: (string | null) | undefined
  isWatching?: boolean | undefined
  key?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  settingId?: number | undefined
  settingType?: SettingType | undefined
}
type SettingTagModel = {
  color?: (string | null) | undefined
  name?: (string | null) | undefined
  settingTagId?: bigint | undefined
  tagId?: bigint | undefined
}
type ConfigSettingValueModel = {
  integrationLinks?: (IntegrationLinkModel[] | null) | undefined
  lastUpdaterUserEmail?: (string | null) | undefined
  lastUpdaterUserFullName?: (string | null) | undefined
  rolloutPercentageItems?: (RolloutPercentageItemModel[] | null) | undefined
  rolloutRules?: (RolloutRuleModel[] | null) | undefined
  setting?: SettingDataModel | undefined
  settingTags?: (SettingTagModel[] | null) | undefined
  updatedAt?: (string | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type ConfigSettingValuesModel = {
  config?: ConfigModel | undefined
  environment?: EnvironmentModel | undefined
  readOnly?: boolean | undefined
  settingValues?: (ConfigSettingValueModel[] | null) | undefined
}
type InitialValue = {
  environmentId?: string | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type CreateSettingInitialValues = {
  hint?: (string | null) | undefined
  initialValues?: (InitialValue[] | null) | undefined
  key: string
  name: string
  settingType: SettingType
  tags?: (bigint[] | null) | undefined
}
type EnvironmentModelHaljson = {
  _embedded?:
    | {
        product?:
          | {
              _embedded?:
                | {
                    organization?:
                      | {
                          _links?:
                            | { members?: string | undefined; products?: string | undefined }
                            | undefined
                          name?: (string | null) | undefined
                          organizationId?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?:
                | {
                    configs?: string | undefined
                    environments?: string | undefined
                    members?: string | undefined
                    'permission-groups'?: string | undefined
                    segments?: string | undefined
                    self?: string | undefined
                    tags?: string | undefined
                  }
                | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              productId?: string | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  environmentId?: string | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  reasonRequired?: boolean | undefined
}
type UpdateEnvironmentModel = {
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type DeleteIntegrationLinkModel = { hasRemainingIntegrationLink?: boolean | undefined }
type AddOrUpdateIntegrationLinkModel = {
  description?: (string | null) | undefined
  url?: (string | null) | undefined
}
type SettingValueModelHaljson = {
  _embedded?:
    | {
        config?:
          | {
              _embedded?:
                | {
                    product?:
                      | {
                          _embedded?:
                            | {
                                organization?:
                                  | {
                                      _links?:
                                        | {
                                            members?: string | undefined
                                            products?: string | undefined
                                          }
                                        | undefined
                                      name?: (string | null) | undefined
                                      organizationId?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          _links?:
                            | {
                                configs?: string | undefined
                                environments?: string | undefined
                                members?: string | undefined
                                'permission-groups'?: string | undefined
                                segments?: string | undefined
                                self?: string | undefined
                                tags?: string | undefined
                              }
                            | undefined
                          description?: (string | null) | undefined
                          name?: (string | null) | undefined
                          order?: number | undefined
                          productId?: string | undefined
                          reasonRequired?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?: { self?: string | undefined; settings?: string | undefined } | undefined
              configId?: string | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
            }
          | undefined
        environment?:
          | {
              _embedded?:
                | {
                    product?:
                      | {
                          _embedded?:
                            | {
                                organization?:
                                  | {
                                      _links?:
                                        | {
                                            members?: string | undefined
                                            products?: string | undefined
                                          }
                                        | undefined
                                      name?: (string | null) | undefined
                                      organizationId?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          _links?:
                            | {
                                configs?: string | undefined
                                environments?: string | undefined
                                members?: string | undefined
                                'permission-groups'?: string | undefined
                                segments?: string | undefined
                                self?: string | undefined
                                tags?: string | undefined
                              }
                            | undefined
                          description?: (string | null) | undefined
                          name?: (string | null) | undefined
                          order?: number | undefined
                          productId?: string | undefined
                          reasonRequired?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?: { self?: string | undefined } | undefined
              color?: (string | null) | undefined
              description?: (string | null) | undefined
              environmentId?: string | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
        integrationLinks?:
          | {
              description?: (string | null) | undefined
              integrationLinkType?: IntegrationLinkType | undefined
              key?: (string | null) | undefined
              url?: (string | null) | undefined
            }[]
          | undefined
        setting?:
          | {
              createdAt?: (string | null) | undefined
              creatorEmail?: (string | null) | undefined
              creatorFullName?: (string | null) | undefined
              hint?: (string | null) | undefined
              isWatching?: boolean | undefined
              key?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              settingId?: number | undefined
              settingType?: SettingType | undefined
            }
          | undefined
        settingTags?:
          | {
              color?: (string | null) | undefined
              name?: (string | null) | undefined
              settingTagId?: bigint | undefined
              tagId?: bigint | undefined
            }[]
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  lastUpdaterUserEmail?: (string | null) | undefined
  lastUpdaterUserFullName?: (string | null) | undefined
  readOnly?: boolean | undefined
  rolloutPercentageItems?: (RolloutPercentageItemModel[] | null) | undefined
  rolloutRules?: (RolloutRuleModel[] | null) | undefined
  updatedAt?: (string | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type SettingValueModel = {
  config?: ConfigModel | undefined
  environment?: EnvironmentModel | undefined
  integrationLinks?: (IntegrationLinkModel[] | null) | undefined
  lastUpdaterUserEmail?: (string | null) | undefined
  lastUpdaterUserFullName?: (string | null) | undefined
  readOnly?: boolean | undefined
  rolloutPercentageItems?: (RolloutPercentageItemModel[] | null) | undefined
  rolloutRules?: (RolloutRuleModel[] | null) | undefined
  setting?: SettingDataModel | undefined
  settingTags?: (SettingTagModel[] | null) | undefined
  updatedAt?: (string | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type JsonPointerKind = 'unspecified' | 'plain' | 'uriEncoded'
type PointerSegment = { source?: (string | null) | undefined; value?: (string | null) | undefined }
type JsonPointer = {
  isUriEncoded?: boolean | undefined
  kind?: JsonPointerKind | undefined
  segments?: (PointerSegment[] | null) | undefined
  source?: (string | null) | undefined
}
type OperationType = 'unknown' | 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
type JsonNodeOptions = { propertyNameCaseInsensitive?: boolean | undefined }
type JsonNode = {
  options?: JsonNodeOptions | undefined
  parent?: JsonNode | undefined
  root?: JsonNode | undefined
}
type PatchOperation = {
  from?: JsonPointer | undefined
  op?: OperationType | undefined
  path?: JsonPointer | undefined
  value?: JsonNode | undefined
}
type JsonPatch = { operations?: (PatchOperation[] | null) | undefined }
type UpdateSettingValueModel = {
  rolloutPercentageItems?: (RolloutPercentageItemModel[] | null) | undefined
  rolloutRules?: (RolloutRuleModel[] | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
}
type IntegrationLinkDetail = {
  config?: ConfigModel | undefined
  environment?: EnvironmentModel | undefined
  product?: ProductModel | undefined
  readOnly?: boolean | undefined
  setting?: SettingDataModel | undefined
  status?: (string | null) | undefined
}
type IntegrationLinkDetailsModel = {
  allIntegrationLinkCount?: number | undefined
  details?: (IntegrationLinkDetail[] | null) | undefined
}
type ConnectRequest = { clientKey: string; jiraJwtToken: string }
type AddOrUpdateJiraIntegrationLinkModel = {
  clientKey: string
  description?: (string | null) | undefined
  jiraJwtToken: string
  url?: (string | null) | undefined
}
type MeModel = { email?: (string | null) | undefined; fullName?: (string | null) | undefined }
type OrganizationModelHaljson = {
  _links?: { members?: string | undefined; products?: string | undefined } | undefined
  name?: (string | null) | undefined
  organizationId?: string | undefined
}
type AuditLogType =
  | 'productCreated'
  | 'productChanged'
  | 'productOwnershipTransferred'
  | 'productDeleted'
  | 'productsReordered'
  | 'teamMemberInvited'
  | 'teamMemberInvitationRevoked'
  | 'teamMemberJoined'
  | 'teamMemberPermissionGroupChanged'
  | 'teamMemberRemoved'
  | 'teamMemberLeft'
  | 'teamMemberInvitationChanged'
  | 'teamMemberInvitationResent'
  | 'teamMemberInvitationRejected'
  | 'configCreated'
  | 'configChanged'
  | 'configDeleted'
  | 'configsReordered'
  | 'environmentCreated'
  | 'environmentChanged'
  | 'environmentDeleted'
  | 'environmentsReordered'
  | 'settingCreated'
  | 'settingChanged'
  | 'settingDeleted'
  | 'settingsReordered'
  | 'settingValueChanged'
  | 'webHookCreated'
  | 'webHookChanged'
  | 'webHookDeleted'
  | 'subscriptionChanged'
  | 'permissionGroupCreated'
  | 'permissionGroupChanged'
  | 'permissionGroupDeleted'
  | 'permissionGroupDefault'
  | 'apiKeyAdded'
  | 'apiKeyRemoved'
  | 'integrationAdded'
  | 'integrationChanged'
  | 'integrationRemoved'
  | 'apiKeyConnected'
  | 'integrationLinkAdded'
  | 'integrationLinkRemoved'
  | 'organizationAdded'
  | 'organizationRemoved'
  | 'organizationChanged'
  | 'organizationSubscriptionTypeChanged'
  | 'organizationAdminChanged'
  | 'organizationAdminLeft'
  | 'organizationAdminDisabled2FA'
  | 'tagAdded'
  | 'tagChanged'
  | 'tagRemoved'
  | 'settingTagAdded'
  | 'settingTagRemoved'
  | 'publicApiAccessTokenAdded'
  | 'publicApiAccessTokenRemoved'
  | 'domainAdded'
  | 'domainVerified'
  | 'domainRemoved'
  | 'domainSamlConfigured'
  | 'domainSamlDeleted'
  | 'autoProvisioningConfigurationChanged'
  | 'organizationMemberJoined'
  | 'organizationMemberProductJoinRequested'
  | 'organizationMemberProductJoinRequestRejected'
  | 'organizationMemberProductJoinRequestApproved'
  | 'codeReferencesUploaded'
  | 'codeReferenceDeleted'
  | 'codeReferenceStaleBranchDeleted'
  | 'segmentCreated'
  | 'segmentChanged'
  | 'segmentDeleted'
  | 'webhookSigningKeyDeleted'
  | 'webhookSigningKeyCreated'
type AuditLogItemModel = {
  actionTarget?: (string | null) | undefined
  auditLogDateTime?: string | undefined
  auditLogId?: bigint | undefined
  auditLogType?: (string | null) | undefined
  auditLogTypeEnum?: AuditLogType | undefined
  details?: (string | null) | undefined
  userEmail?: (string | null) | undefined
  userName?: (string | null) | undefined
  where?: (string | null) | undefined
  why?: (string | null) | undefined
}
type UserModel = {
  email?: (string | null) | undefined
  fullName?: (string | null) | undefined
  userId?: (string | null) | undefined
}
type AddUserToGroupRequest = { permissionGroupIds: bigint[] }
type CreateProductRequest = { description?: (string | null) | undefined; name: string }
type ProductModelHaljson = {
  _embedded?:
    | {
        organization?:
          | {
              _links?: { members?: string | undefined; products?: string | undefined } | undefined
              name?: (string | null) | undefined
              organizationId?: string | undefined
            }
          | undefined
      }
    | undefined
  _links?:
    | {
        configs?: string | undefined
        environments?: string | undefined
        members?: string | undefined
        'permission-groups'?: string | undefined
        segments?: string | undefined
        self?: string | undefined
        tags?: string | undefined
      }
    | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  productId?: string | undefined
  reasonRequired?: boolean | undefined
}
type AccessType = 'readOnly' | 'full' | 'custom'
type EnvironmentAccessType = 'full' | 'readOnly' | 'none'
type EnvironmentAccessModel = {
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  environmentAccessType?: EnvironmentAccessType | undefined
  environmentId?: string | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  reasonRequired?: boolean | undefined
}
type PermissionGroupModelHaljson = {
  _embedded?:
    | {
        product?:
          | {
              _embedded?:
                | {
                    organization?:
                      | {
                          _links?:
                            | { members?: string | undefined; products?: string | undefined }
                            | undefined
                          name?: (string | null) | undefined
                          organizationId?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?:
                | {
                    configs?: string | undefined
                    environments?: string | undefined
                    members?: string | undefined
                    'permission-groups'?: string | undefined
                    segments?: string | undefined
                    self?: string | undefined
                    tags?: string | undefined
                  }
                | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              productId?: string | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  accessType?: AccessType | undefined
  canCreateOrUpdateConfig?: boolean | undefined
  canCreateOrUpdateEnvironment?: boolean | undefined
  canCreateOrUpdateSegments?: boolean | undefined
  canCreateOrUpdateSetting?: boolean | undefined
  canCreateOrUpdateTag?: boolean | undefined
  canDeleteConfig?: boolean | undefined
  canDeleteEnvironment?: boolean | undefined
  canDeleteSegments?: boolean | undefined
  canDeleteSetting?: boolean | undefined
  canDeleteTag?: boolean | undefined
  canManageIntegrations?: boolean | undefined
  canManageMembers?: boolean | undefined
  canManageProductPreferences?: boolean | undefined
  canManageWebhook?: boolean | undefined
  canRotateSdkKey?: boolean | undefined
  canTagSetting?: boolean | undefined
  canUseExportImport?: boolean | undefined
  canViewProductAuditLog?: boolean | undefined
  canViewProductStatistics?: boolean | undefined
  canViewSdkKey?: boolean | undefined
  environmentAccesses?: (EnvironmentAccessModel[] | null) | undefined
  name?: (string | null) | undefined
  newEnvironmentAccessType?: EnvironmentAccessType | undefined
  permissionGroupId?: bigint | undefined
}
type PermissionGroupModel = {
  accessType?: AccessType | undefined
  canCreateOrUpdateConfig?: boolean | undefined
  canCreateOrUpdateEnvironment?: boolean | undefined
  canCreateOrUpdateSegments?: boolean | undefined
  canCreateOrUpdateSetting?: boolean | undefined
  canCreateOrUpdateTag?: boolean | undefined
  canDeleteConfig?: boolean | undefined
  canDeleteEnvironment?: boolean | undefined
  canDeleteSegments?: boolean | undefined
  canDeleteSetting?: boolean | undefined
  canDeleteTag?: boolean | undefined
  canManageIntegrations?: boolean | undefined
  canManageMembers?: boolean | undefined
  canManageProductPreferences?: boolean | undefined
  canManageWebhook?: boolean | undefined
  canRotateSdkKey?: boolean | undefined
  canTagSetting?: boolean | undefined
  canUseExportImport?: boolean | undefined
  canViewProductAuditLog?: boolean | undefined
  canViewProductStatistics?: boolean | undefined
  canViewSdkKey?: boolean | undefined
  environmentAccesses?: (EnvironmentAccessModel[] | null) | undefined
  name?: (string | null) | undefined
  newEnvironmentAccessType?: EnvironmentAccessType | undefined
  permissionGroupId?: bigint | undefined
  product?: ProductModel | undefined
}
type CreateOrUpdateEnvironmentAccessModel = {
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  environmentAccessType?: EnvironmentAccessType | undefined
  environmentId?: string | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  reasonRequired?: boolean | undefined
}
type UpdatePermissionGroupRequest = {
  accessType?: AccessType | undefined
  canCreateOrUpdateConfig?: (boolean | null) | undefined
  canCreateOrUpdateEnvironment?: (boolean | null) | undefined
  canCreateOrUpdateSegments?: (boolean | null) | undefined
  canCreateOrUpdateSetting?: (boolean | null) | undefined
  canCreateOrUpdateTag?: (boolean | null) | undefined
  canDeleteConfig?: (boolean | null) | undefined
  canDeleteEnvironment?: (boolean | null) | undefined
  canDeleteSegments?: (boolean | null) | undefined
  canDeleteSetting?: (boolean | null) | undefined
  canDeleteTag?: (boolean | null) | undefined
  canManageIntegrations?: (boolean | null) | undefined
  canManageMembers?: (boolean | null) | undefined
  canManageProductPreferences?: (boolean | null) | undefined
  canManageWebhook?: (boolean | null) | undefined
  canRotateSdkKey?: (boolean | null) | undefined
  canTagSetting?: (boolean | null) | undefined
  canUseExportImport?: (boolean | null) | undefined
  canViewProductAuditLog?: (boolean | null) | undefined
  canViewProductStatistics?: (boolean | null) | undefined
  canViewSdkKey?: (boolean | null) | undefined
  environmentAccesses?: (CreateOrUpdateEnvironmentAccessModel[] | null) | undefined
  name?: (string | null) | undefined
  newEnvironmentAccessType?: EnvironmentAccessType | undefined
}
type UpdateProductRequest = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type CreateConfigRequest = { description?: (string | null) | undefined; name: string }
type CreateEnvironmentModel = {
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  name: string
}
type MemberModel = {
  email?: (string | null) | undefined
  fullName?: (string | null) | undefined
  permissionGroupId?: bigint | undefined
  productId?: string | undefined
  userId?: (string | null) | undefined
}
type InviteMembersRequest = { emails: string[]; permissionGroupId: bigint }
type CreatePermissionGroupRequest = {
  accessType?: AccessType | undefined
  canCreateOrUpdateConfig?: boolean | undefined
  canCreateOrUpdateEnvironment?: boolean | undefined
  canCreateOrUpdateSegments?: boolean | undefined
  canCreateOrUpdateSetting?: boolean | undefined
  canCreateOrUpdateTag?: boolean | undefined
  canDeleteConfig?: boolean | undefined
  canDeleteEnvironment?: boolean | undefined
  canDeleteSegments?: boolean | undefined
  canDeleteSetting?: boolean | undefined
  canDeleteTag?: boolean | undefined
  canManageIntegrations?: boolean | undefined
  canManageMembers?: boolean | undefined
  canManageProductPreferences?: boolean | undefined
  canManageWebhook?: boolean | undefined
  canRotateSdkKey?: boolean | undefined
  canTagSetting?: boolean | undefined
  canUseExportImport?: boolean | undefined
  canViewProductAuditLog?: boolean | undefined
  canViewProductStatistics?: boolean | undefined
  canViewSdkKey?: boolean | undefined
  environmentAccesses?: (CreateOrUpdateEnvironmentAccessModel[] | null) | undefined
  name: string
  newEnvironmentAccessType?: EnvironmentAccessType | undefined
}
type SegmentListModelHaljson = {
  _embedded?:
    | {
        product?:
          | {
              _embedded?:
                | {
                    organization?:
                      | {
                          _links?:
                            | { members?: string | undefined; products?: string | undefined }
                            | undefined
                          name?: (string | null) | undefined
                          organizationId?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?:
                | {
                    configs?: string | undefined
                    environments?: string | undefined
                    members?: string | undefined
                    'permission-groups'?: string | undefined
                    segments?: string | undefined
                    self?: string | undefined
                    tags?: string | undefined
                  }
                | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              productId?: string | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  createdAt?: string | undefined
  creatorEmail?: (string | null) | undefined
  creatorFullName?: (string | null) | undefined
  description?: (string | null) | undefined
  lastUpdaterEmail?: (string | null) | undefined
  lastUpdaterFullName?: (string | null) | undefined
  name?: (string | null) | undefined
  segmentId?: string | undefined
  updatedAt?: string | undefined
  usage?: number | undefined
}
type SegmentListModel = {
  createdAt?: string | undefined
  creatorEmail?: (string | null) | undefined
  creatorFullName?: (string | null) | undefined
  description?: (string | null) | undefined
  lastUpdaterEmail?: (string | null) | undefined
  lastUpdaterFullName?: (string | null) | undefined
  name?: (string | null) | undefined
  product?: ProductModel | undefined
  segmentId?: string | undefined
  updatedAt?: string | undefined
  usage?: number | undefined
}
type CreateSegmentModel = {
  comparator: RolloutRuleComparator
  comparisonAttribute: string
  comparisonValue: string
  description?: (string | null) | undefined
  name: string
}
type SegmentModelHaljson = {
  _embedded?:
    | {
        product?:
          | {
              _embedded?:
                | {
                    organization?:
                      | {
                          _links?:
                            | { members?: string | undefined; products?: string | undefined }
                            | undefined
                          name?: (string | null) | undefined
                          organizationId?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?:
                | {
                    configs?: string | undefined
                    environments?: string | undefined
                    members?: string | undefined
                    'permission-groups'?: string | undefined
                    segments?: string | undefined
                    self?: string | undefined
                    tags?: string | undefined
                  }
                | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              productId?: string | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  comparator?: RolloutRuleComparator | undefined
  comparisonAttribute?: (string | null) | undefined
  comparisonValue?: (string | null) | undefined
  createdAt?: string | undefined
  creatorEmail?: (string | null) | undefined
  creatorFullName?: (string | null) | undefined
  description?: (string | null) | undefined
  lastUpdaterEmail?: (string | null) | undefined
  lastUpdaterFullName?: (string | null) | undefined
  name?: (string | null) | undefined
  segmentId?: string | undefined
  updatedAt?: string | undefined
}
type SegmentModel = {
  comparator?: RolloutRuleComparator | undefined
  comparisonAttribute?: (string | null) | undefined
  comparisonValue?: (string | null) | undefined
  createdAt?: string | undefined
  creatorEmail?: (string | null) | undefined
  creatorFullName?: (string | null) | undefined
  description?: (string | null) | undefined
  lastUpdaterEmail?: (string | null) | undefined
  lastUpdaterFullName?: (string | null) | undefined
  name?: (string | null) | undefined
  product?: ProductModel | undefined
  segmentId?: string | undefined
  updatedAt?: string | undefined
}
type TagModelHaljson = {
  _embedded?:
    | {
        product?:
          | {
              _embedded?:
                | {
                    organization?:
                      | {
                          _links?:
                            | { members?: string | undefined; products?: string | undefined }
                            | undefined
                          name?: (string | null) | undefined
                          organizationId?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              _links?:
                | {
                    configs?: string | undefined
                    environments?: string | undefined
                    members?: string | undefined
                    'permission-groups'?: string | undefined
                    segments?: string | undefined
                    self?: string | undefined
                    tags?: string | undefined
                  }
                | undefined
              description?: (string | null) | undefined
              name?: (string | null) | undefined
              order?: number | undefined
              productId?: string | undefined
              reasonRequired?: boolean | undefined
            }
          | undefined
      }
    | undefined
  _links?: { self?: string | undefined } | undefined
  color?: (string | null) | undefined
  name?: (string | null) | undefined
  tagId?: bigint | undefined
}
type CreateTagModel = { color?: (string | null) | undefined; name: string }
type UpdateSegmentModel = {
  comparator?: RolloutRuleComparator | undefined
  comparisonAttribute?: (string | null) | undefined
  comparisonValue?: (string | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
}
type UpdateTagModel = { color?: (string | null) | undefined; name?: (string | null) | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/code-references': {
      $post:
        | { input: { json: CodeReferenceRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: CodeReferenceRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CodeReferenceRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CodeReferenceRequest }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: CodeReferenceRequest }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/code-references/delete-reports': {
      $post:
        | {
            input: { json: DeleteRepositoryReportsRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: DeleteRepositoryReportsRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DeleteRepositoryReportsRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: DeleteRepositoryReportsRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: DeleteRepositoryReportsRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/configs/:configId': {
      $delete:
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { configId: string } }
            output: ConfigModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } }
            output: ConfigModel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { configId: string } } & { json: UpdateConfigRequest }
            output: ConfigModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } } & { json: UpdateConfigRequest }
            output: ConfigModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } } & { json: UpdateConfigRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { configId: string } } & { json: UpdateConfigRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { configId: string } } & { json: UpdateConfigRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { configId: string } } & { json: UpdateConfigRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/configs/:configId/deleted-settings': {
      $get:
        | {
            input: { param: { configId: string } }
            output: SettingModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } }
            output: SettingModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/configs/:configId/environments/:environmentId': {
      $get:
        | {
            input: { param: { configId: string; environmentId: string } }
            output: SdkKeysModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: SdkKeysModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/configs/:configId/environments/:environmentId/values': {
      $get:
        | {
            input: { param: { configId: string; environmentId: string } }
            output: ConfigSettingValuesModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: ConfigSettingValuesModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { configId: string; environmentId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/configs/:configId/settings': {
      $get:
        | {
            input: { param: { configId: string } }
            output: SettingModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } }
            output: SettingModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { configId: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { configId: string } } & { json: CreateSettingInitialValues }
            output: SettingModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { configId: string } } & { json: CreateSettingInitialValues }
            output: SettingModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { configId: string } } & { json: CreateSettingInitialValues }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { configId: string } } & { json: CreateSettingInitialValues }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { configId: string } } & { json: CreateSettingInitialValues }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { configId: string } } & { json: CreateSettingInitialValues }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/environments/:environmentId': {
      $delete:
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { environmentId: string } }
            output: EnvironmentModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: EnvironmentModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $put:
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentModel }
            output: EnvironmentModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentModel }
            output: EnvironmentModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key': {
      $delete:
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            }
            output: DeleteIntegrationLinkModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            }
            output: DeleteIntegrationLinkModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            } & { json: AddOrUpdateIntegrationLinkModel }
            output: IntegrationLinkModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            } & { json: AddOrUpdateIntegrationLinkModel }
            output: IntegrationLinkModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            } & { json: AddOrUpdateIntegrationLinkModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            } & { json: AddOrUpdateIntegrationLinkModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            } & { json: AddOrUpdateIntegrationLinkModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                environmentId: string
                settingId: number
                integrationLinkType: IntegrationLinkType
                key: string
              }
            } & { json: AddOrUpdateIntegrationLinkModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/environments/:environmentId/settings/:settingId/value': {
      $get:
        | {
            input: { param: { environmentId: string; settingId: number } }
            output: SettingValueModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number } }
            output: SettingValueModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string; settingId: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string; settingId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string; settingId: number } }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: SettingValueModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: SettingValueModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 429
          }
      $put:
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: UpdateSettingValueModel }
            output: SettingValueModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: UpdateSettingValueModel }
            output: SettingValueModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: UpdateSettingValueModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: UpdateSettingValueModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: UpdateSettingValueModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string; settingId: number } } & {
              query: { reason?: string | undefined }
            } & { json: UpdateSettingValueModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/integrationLink/:integrationLinkType/:key/details': {
      $get:
        | {
            input: { param: { integrationLinkType: IntegrationLinkType; key: string } }
            output: IntegrationLinkDetailsModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationLinkType: IntegrationLinkType; key: string } }
            output: IntegrationLinkDetailsModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationLinkType: IntegrationLinkType; key: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { integrationLinkType: IntegrationLinkType; key: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { integrationLinkType: IntegrationLinkType; key: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { integrationLinkType: IntegrationLinkType; key: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/jira/Connect': {
      $post:
        | { input: { json: ConnectRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ConnectRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ConnectRequest }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/jira/environments/:environmentId/settings/:settingId/integrationLinks/:key': {
      $post:
        | {
            input: { param: { environmentId: string; settingId: number; key: string } } & {
              json: AddOrUpdateJiraIntegrationLinkModel
            }
            output: IntegrationLinkModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number; key: string } } & {
              json: AddOrUpdateJiraIntegrationLinkModel
            }
            output: IntegrationLinkModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; settingId: number; key: string } } & {
              json: AddOrUpdateJiraIntegrationLinkModel
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: string; settingId: number; key: string } } & {
              json: AddOrUpdateJiraIntegrationLinkModel
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { environmentId: string; settingId: number; key: string } } & {
              json: AddOrUpdateJiraIntegrationLinkModel
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: string; settingId: number; key: string } } & {
              json: AddOrUpdateJiraIntegrationLinkModel
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/me': {
      $get:
        | { input: {}; output: MeModel; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MeModel; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/organizations': {
      $get:
        | { input: {}; output: OrganizationModelHaljson[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: OrganizationModel[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/organizations/:organizationId/auditlogs': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                productId?: string | undefined
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: AuditLogItemModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                productId?: string | undefined
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: AuditLogItemModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                productId?: string | undefined
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                productId?: string | undefined
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                productId?: string | undefined
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                productId?: string | undefined
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/organizations/:organizationId/members': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: UserModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: UserModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/organizations/:organizationId/members/:userId': {
      $delete:
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: AddUserToGroupRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: AddUserToGroupRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: AddUserToGroupRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: AddUserToGroupRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: AddUserToGroupRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/organizations/:organizationId/products': {
      $post:
        | {
            input: { param: { organizationId: string } } & { json: CreateProductRequest }
            output: ProductModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateProductRequest }
            output: ProductModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateProductRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateProductRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateProductRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateProductRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/permissions/:permissionGroupId': {
      $delete:
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { permissionGroupId: bigint } }
            output: PermissionGroupModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: PermissionGroupModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { permissionGroupId: bigint } }
            output: {}
            outputFormat: string
            status: 429
          }
      $put:
        | {
            input: { param: { permissionGroupId: bigint } } & { json: UpdatePermissionGroupRequest }
            output: PermissionGroupModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionGroupId: bigint } } & { json: UpdatePermissionGroupRequest }
            output: PermissionGroupModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionGroupId: bigint } } & { json: UpdatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { permissionGroupId: bigint } } & { json: UpdatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { permissionGroupId: bigint } } & { json: UpdatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { permissionGroupId: bigint } } & { json: UpdatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products': {
      $get:
        | { input: {}; output: ProductModelHaljson[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProductModel[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/products/:productId': {
      $delete:
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { productId: string } }
            output: ProductModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: ProductModel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { productId: string } } & { json: UpdateProductRequest }
            output: ProductModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } } & { json: UpdateProductRequest }
            output: ProductModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } } & { json: UpdateProductRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: UpdateProductRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: UpdateProductRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: UpdateProductRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/auditlogs': {
      $get:
        | {
            input: { param: { productId: string } } & {
              query: {
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: AuditLogItemModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } } & {
              query: {
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: AuditLogItemModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } } & {
              query: {
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & {
              query: {
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & {
              query: {
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & {
              query: {
                configId?: string | undefined
                environmentId?: string | undefined
                auditLogType?: {} | undefined
                fromUtcDateTime?: string | undefined
                toUtcDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/configs': {
      $get:
        | {
            input: { param: { productId: string } }
            output: ConfigModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: ConfigModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { productId: string } } & { json: CreateConfigRequest }
            output: ConfigModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateConfigRequest }
            output: ConfigModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateConfigRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: CreateConfigRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: CreateConfigRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: CreateConfigRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/environments': {
      $get:
        | {
            input: { param: { productId: string } }
            output: EnvironmentModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: EnvironmentModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { productId: string } } & { json: CreateEnvironmentModel }
            output: EnvironmentModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateEnvironmentModel }
            output: EnvironmentModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: CreateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: CreateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: CreateEnvironmentModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/members': {
      $get:
        | {
            input: { param: { productId: string } }
            output: MemberModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: MemberModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/products/:productId/members/invite': {
      $post:
        | {
            input: { param: { productId: string } } & { json: InviteMembersRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { productId: string } } & { json: InviteMembersRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: InviteMembersRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: InviteMembersRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: InviteMembersRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/members/:userId': {
      $delete:
        | {
            input: { param: { productId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { productId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/permissions': {
      $get:
        | {
            input: { param: { productId: string } }
            output: PermissionGroupModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: PermissionGroupModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { productId: string } } & { json: CreatePermissionGroupRequest }
            output: PermissionGroupModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreatePermissionGroupRequest }
            output: PermissionGroupModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: CreatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: CreatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: CreatePermissionGroupRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/segments': {
      $get:
        | {
            input: { param: { productId: string } }
            output: SegmentListModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: SegmentListModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { productId: string } } & { json: CreateSegmentModel }
            output: SegmentModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateSegmentModel }
            output: SegmentModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateSegmentModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: CreateSegmentModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: CreateSegmentModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: CreateSegmentModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/products/:productId/tags': {
      $get:
        | {
            input: { param: { productId: string } }
            output: TagModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: TagModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { productId: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { productId: string } } & { json: CreateTagModel }
            output: TagModelHaljson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateTagModel }
            output: TagModel
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { productId: string } } & { json: CreateTagModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productId: string } } & { json: CreateTagModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { productId: string } } & { json: CreateTagModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productId: string } } & { json: CreateTagModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/segments/:segmentId': {
      $delete:
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { segmentId: string } }
            output: SegmentModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segmentId: string } }
            output: SegmentModel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { segmentId: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { segmentId: string } } & { json: UpdateSegmentModel }
            output: SegmentModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segmentId: string } } & { json: UpdateSegmentModel }
            output: SegmentModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segmentId: string } } & { json: UpdateSegmentModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { segmentId: string } } & { json: UpdateSegmentModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { segmentId: string } } & { json: UpdateSegmentModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { segmentId: string } } & { json: UpdateSegmentModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/settings/:settingId': {
      $delete:
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { settingId: number } }
            output: SettingModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingId: number } }
            output: SettingModel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { settingId: number } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { settingId: number } } & { json: JsonPatch }
            output: SettingModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingId: number } } & { json: JsonPatch }
            output: SettingModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingId: number } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { settingId: number } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { settingId: number } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { settingId: number } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/settings/:settingKeyOrId/value': {
      $get:
        | {
            input: { param: { settingKeyOrId: string } } & {
              header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined }
            }
            output: SettingValueModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined }
            }
            output: SettingValueModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: SettingValueModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: SettingValueModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & { json: JsonPatch }
            output: {}
            outputFormat: string
            status: 429
          }
      $put:
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & {
              json: UpdateSettingValueModel
            }
            output: SettingValueModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & {
              json: UpdateSettingValueModel
            }
            output: SettingValueModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & {
              json: UpdateSettingValueModel
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & {
              json: UpdateSettingValueModel
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & {
              json: UpdateSettingValueModel
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { settingKeyOrId: string } } & {
              query: { reason?: string | undefined }
            } & { header: { 'X-CONFIGCAT-SDKKEY'?: string | undefined } } & {
              json: UpdateSettingValueModel
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/tags/:tagId': {
      $delete:
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { tagId: bigint } }
            output: TagModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: TagModel
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { tagId: bigint } } & { json: UpdateTagModel }
            output: TagModelHaljson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: UpdateTagModel }
            output: TagModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: UpdateTagModel }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tagId: bigint } } & { json: UpdateTagModel }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & { json: UpdateTagModel }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & { json: UpdateTagModel }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/tags/:tagId/settings': {
      $get:
        | {
            input: { param: { tagId: bigint } }
            output: SettingModelHaljson[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: SettingModel[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 429 }
    }
  },
  '/'
>
export default routes
