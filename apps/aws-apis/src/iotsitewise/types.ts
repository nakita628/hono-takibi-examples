type InvalidRequestException = { [x: string]: unknown }
type ResourceAlreadyExistsException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type InternalFailureException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ConflictingOperationException = { [x: string]: unknown }
type ID = string
type BatchAssociateProjectAssetsResponse = { errors?: {} | undefined }
type BatchDisassociateProjectAssetsResponse = { errors?: {} | undefined }
type BatchGetAssetPropertyAggregatesEntry = {
  entryId: {}
  assetId?: {} | undefined
  propertyId?: {} | undefined
  propertyAlias?: {} | undefined
  aggregateTypes: {}
  resolution: {}
  startDate: {}
  endDate: {}
  qualities?: {} | undefined
  timeOrdering?: {} | undefined
}
type BatchGetAssetPropertyAggregatesResponse = {
  errorEntries: {}
  successEntries: {}
  skippedEntries: {}
  nextToken?: {} | undefined
}
type ServiceUnavailableException = { [x: string]: unknown }
type BatchGetAssetPropertyValueEntry = {
  entryId: {}
  assetId?: {} | undefined
  propertyId?: {} | undefined
  propertyAlias?: {} | undefined
}
type BatchGetAssetPropertyValueResponse = {
  errorEntries: {}
  successEntries: {}
  skippedEntries: {}
  nextToken?: {} | undefined
}
type BatchGetAssetPropertyValueHistoryEntry = {
  entryId: {}
  assetId?: {} | undefined
  propertyId?: {} | undefined
  propertyAlias?: {} | undefined
  startDate?: {} | undefined
  endDate?: {} | undefined
  qualities?: {} | undefined
  timeOrdering?: {} | undefined
}
type BatchGetAssetPropertyValueHistoryResponse = {
  errorEntries: {}
  successEntries: {}
  skippedEntries: {}
  nextToken?: {} | undefined
}
type PutAssetPropertyValueEntry = {
  entryId: {}
  assetId?: {} | undefined
  propertyId?: {} | undefined
  propertyAlias?: {} | undefined
  propertyValues: {}
}
type BatchPutAssetPropertyValueResponse = { errorEntries: {} }
type TagValue = string
type CreateAccessPolicyResponse = { accessPolicyId: {}; accessPolicyArn: {} }
type ListAccessPoliciesResponse = { accessPolicySummaries: {}; nextToken?: {} | undefined }
type CreateAssetResponse = {
  assetId: {}
  assetArn: {}
  assetStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type ListAssetsResponse = { assetSummaries: {}; nextToken?: {} | undefined }
type ForwardingConfig = { state: {} }
type AssetModelPropertyDefinition = {
  name: {}
  dataType: {}
  dataTypeSpec?: {} | undefined
  unit?: {} | undefined
  type: {
    attribute?: { defaultValue?: {} | undefined } | undefined
    measurement?: { processingConfig?: { forwardingConfig: { state: {} } } | undefined } | undefined
    transform?:
      | {
          expression: {}
          variables: {}
          processingConfig?:
            | { computeLocation: {}; forwardingConfig?: ForwardingConfig | undefined }
            | undefined
        }
      | undefined
    metric?:
      | {
          expression: {}
          variables: {}
          window: { tumbling?: { interval: {}; offset?: {} | undefined } | undefined }
          processingConfig?: { computeLocation: {} } | undefined
        }
      | undefined
  }
}
type AssetModelHierarchyDefinition = { name: {}; childAssetModelId: {} }
type AssetModelCompositeModelDefinition = {
  name: {}
  description?: {} | undefined
  type: {}
  properties?: { [x: string]: unknown } | undefined
}
type CreateAssetModelResponse = {
  assetModelId: {}
  assetModelArn: {}
  assetModelStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type ListAssetModelsResponse = { assetModelSummaries: {}; nextToken?: {} | undefined }
type File2 = { bucket: {}; key: {}; versionId?: {} | undefined }
type CreateBulkImportJobResponse = { jobId: {}; jobName: {}; jobStatus: {} }
type ListBulkImportJobsResponse = { jobSummaries: {}; nextToken?: {} | undefined }
type CreateDashboardResponse = { dashboardId: {}; dashboardArn: {} }
type CreateGatewayResponse = { gatewayId: {}; gatewayArn: {} }
type ListGatewaysResponse = { gatewaySummaries: {}; nextToken?: {} | undefined }
type CreatePortalResponse = {
  portalId: {}
  portalArn: {}
  portalStartUrl: {}
  portalStatus: {
    state: {}
    error?: { code?: {} | undefined; message?: {} | undefined } | undefined
  }
  ssoApplicationId: {}
}
type ListPortalsResponse = { portalSummaries?: {} | undefined; nextToken?: {} | undefined }
type CreateProjectResponse = { projectId: {}; projectArn: {} }
type DeleteAccessPolicyResponse = { [x: string]: unknown }
type DescribeAccessPolicyResponse = {
  accessPolicyId: {}
  accessPolicyArn: {}
  accessPolicyIdentity: {
    user?: { id: {} } | undefined
    group?: { id: {} } | undefined
    iamUser?: { arn: {} } | undefined
    iamRole?: { arn: {} } | undefined
  }
  accessPolicyResource: { portal?: { id: {} } | undefined; project?: { id: {} } | undefined }
  accessPolicyPermission: {}
  accessPolicyCreationDate: {}
  accessPolicyLastUpdateDate: {}
}
type UpdateAccessPolicyResponse = { [x: string]: unknown }
type DeleteAssetResponse = {
  assetStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type DescribeAssetResponse = {
  assetId: {}
  assetArn: {}
  assetName: {}
  assetModelId: {}
  assetProperties: {}
  assetHierarchies: {}
  assetCompositeModels?: {} | undefined
  assetCreationDate: {}
  assetLastUpdateDate: {}
  assetStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
  assetDescription?: {} | undefined
}
type UpdateAssetResponse = {
  assetStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type DeleteAssetModelResponse = {
  assetModelStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type DescribeAssetModelResponse = {
  assetModelId: {}
  assetModelArn: {}
  assetModelName: {}
  assetModelDescription: {}
  assetModelProperties: {}
  assetModelHierarchies: {}
  assetModelCompositeModels?: {} | undefined
  assetModelCreationDate: {}
  assetModelLastUpdateDate: {}
  assetModelStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type AssetModelProperty = {
  id?: {} | undefined
  name: {}
  dataType: {}
  dataTypeSpec?: {} | undefined
  unit?: {} | undefined
  type: {
    attribute?: { defaultValue?: {} | undefined } | undefined
    measurement?: { processingConfig?: { forwardingConfig: { state: {} } } | undefined } | undefined
    transform?:
      | {
          expression: {}
          variables: {}
          processingConfig?:
            | { computeLocation: {}; forwardingConfig?: ForwardingConfig | undefined }
            | undefined
        }
      | undefined
    metric?:
      | {
          expression: {}
          variables: {}
          window: { tumbling?: { interval: {}; offset?: {} | undefined } | undefined }
          processingConfig?: { computeLocation: {} } | undefined
        }
      | undefined
  }
}
type AssetModelHierarchy = { id?: {} | undefined; name: {}; childAssetModelId: {} }
type AssetModelCompositeModel = {
  name: {}
  description?: {} | undefined
  type: {}
  properties?: { [x: string]: unknown } | undefined
  id?: {} | undefined
}
type UpdateAssetModelResponse = {
  assetModelStatus: {
    state: {}
    error?: { code: {}; message: {}; details?: {} | undefined } | undefined
  }
}
type DeleteDashboardResponse = { [x: string]: unknown }
type DescribeDashboardResponse = {
  dashboardId: {}
  dashboardArn: {}
  dashboardName: {}
  projectId: {}
  dashboardDescription?: {} | undefined
  dashboardDefinition: {}
  dashboardCreationDate: {}
  dashboardLastUpdateDate: {}
}
type UpdateDashboardResponse = { [x: string]: unknown }
type DescribeGatewayResponse = {
  gatewayId: {}
  gatewayName: {}
  gatewayArn: {}
  gatewayPlatform?:
    | {
        greengrass?: { groupArn: {} } | undefined
        greengrassV2?: { coreDeviceThingName: {} } | undefined
      }
    | undefined
  gatewayCapabilitySummaries: {}
  creationDate: {}
  lastUpdateDate: {}
}
type DeletePortalResponse = {
  portalStatus: {
    state: {}
    error?: { code?: {} | undefined; message?: {} | undefined } | undefined
  }
}
type DescribePortalResponse = {
  portalId: {}
  portalArn: {}
  portalName: {}
  portalDescription?: {} | undefined
  portalClientId: {}
  portalStartUrl: {}
  portalContactEmail: {}
  portalStatus: {
    state: {}
    error?: { code?: {} | undefined; message?: {} | undefined } | undefined
  }
  portalCreationDate: {}
  portalLastUpdateDate: {}
  portalLogoImageLocation?: { id: {}; url: {} } | undefined
  roleArn?: {} | undefined
  portalAuthMode?: {} | undefined
  notificationSenderEmail?: {} | undefined
  alarms?: { alarmRoleArn: {}; notificationLambdaArn?: {} | undefined } | undefined
}
type ImageFile = { data: {}; type: {} }
type UpdatePortalResponse = {
  portalStatus: {
    state: {}
    error?: { code?: {} | undefined; message?: {} | undefined } | undefined
  }
}
type DeleteProjectResponse = { [x: string]: unknown }
type DescribeProjectResponse = {
  projectId: {}
  projectArn: {}
  projectName: {}
  portalId: {}
  projectDescription?: {} | undefined
  projectCreationDate: {}
  projectLastUpdateDate: {}
}
type UpdateProjectResponse = { [x: string]: unknown }
type Property = {
  id: {}
  name: {}
  alias?: {} | undefined
  notification?: { topic: {}; state: {} } | undefined
  dataType: {}
  unit?: {} | undefined
  type?:
    | {
        attribute?: { defaultValue?: {} | undefined } | undefined
        measurement?:
          | { processingConfig?: { forwardingConfig: { state: {} } } | undefined }
          | undefined
        transform?:
          | {
              expression: {}
              variables: {}
              processingConfig?:
                | { computeLocation: {}; forwardingConfig?: ForwardingConfig | undefined }
                | undefined
            }
          | undefined
        metric?:
          | {
              expression: {}
              variables: {}
              window: { tumbling?: { interval: {}; offset?: {} | undefined } | undefined }
              processingConfig?: { computeLocation: {} } | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeAssetPropertyResponse = {
  assetId: {}
  assetName: {}
  assetModelId: {}
  assetProperty?:
    | {
        id: {}
        name: {}
        alias?: {} | undefined
        notification?: { topic: {}; state: {} } | undefined
        dataType: {}
        unit?: {} | undefined
        type?:
          | {
              attribute?: { defaultValue?: {} | undefined } | undefined
              measurement?:
                | { processingConfig?: { forwardingConfig: { state: {} } } | undefined }
                | undefined
              transform?:
                | {
                    expression: {}
                    variables: {}
                    processingConfig?:
                      | { computeLocation: {}; forwardingConfig?: ForwardingConfig | undefined }
                      | undefined
                  }
                | undefined
              metric?:
                | {
                    expression: {}
                    variables: {}
                    window: { tumbling?: { interval: {}; offset?: {} | undefined } | undefined }
                    processingConfig?: { computeLocation: {} } | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  compositeModel?: { name: {}; type: {}; assetProperty: Property; id?: {} | undefined } | undefined
}
type DescribeBulkImportJobResponse = {
  jobId: {}
  jobName: {}
  jobStatus: {}
  jobRoleArn: {}
  files: {}
  errorReportLocation: { bucket: {}; prefix: {} }
  jobConfiguration: { fileFormat: { csv?: { columnNames?: {} | undefined } | undefined } }
  jobCreationDate: {}
  jobLastUpdateDate: {}
}
type DescribeDefaultEncryptionConfigurationResponse = {
  encryptionType: {}
  kmsKeyArn?: {} | undefined
  configurationStatus: { state: {}; error?: { code: {}; message: {} } | undefined }
}
type PutDefaultEncryptionConfigurationResponse = {
  encryptionType: {}
  kmsKeyArn?: {} | undefined
  configurationStatus: { state: {}; error?: { code: {}; message: {} } | undefined }
}
type DescribeGatewayCapabilityConfigurationResponse = {
  gatewayId: {}
  capabilityNamespace: {}
  capabilityConfiguration: {}
  capabilitySyncStatus: {}
}
type DescribeLoggingOptionsResponse = { loggingOptions: { level: {} } }
type PutLoggingOptionsResponse = { [x: string]: unknown }
type ConfigurationStatus = { state: {}; error?: { code: {}; message: {} } | undefined }
type DescribeStorageConfigurationResponse = {
  storageType: {}
  multiLayerStorage?: { customerManagedS3Storage: { s3ResourceArn: {}; roleArn: {} } } | undefined
  disassociatedDataStorage?: {} | undefined
  retentionPeriod?: { numberOfDays?: {} | undefined; unlimited?: {} | undefined } | undefined
  configurationStatus: ConfigurationStatus
  lastUpdateDate?: {} | undefined
}
type RetentionPeriod = { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
type PutStorageConfigurationResponse = {
  storageType: {}
  multiLayerStorage?: { customerManagedS3Storage: { s3ResourceArn: {}; roleArn: {} } } | undefined
  disassociatedDataStorage?: {} | undefined
  retentionPeriod?: RetentionPeriod | undefined
  configurationStatus: ConfigurationStatus
}
type DescribeTimeSeriesResponse = {
  assetId?: {} | undefined
  propertyId?: {} | undefined
  alias?: {} | undefined
  timeSeriesId: {}
  dataType: {}
  dataTypeSpec?: {} | undefined
  timeSeriesCreationDate: {}
  timeSeriesLastUpdateDate: {}
  timeSeriesArn: {}
}
type AggregateType = 'AVERAGE' | 'COUNT' | 'MAXIMUM' | 'MINIMUM' | 'SUM' | 'STANDARD_DEVIATION'
type Quality = 'GOOD' | 'BAD' | 'UNCERTAIN'
type GetAssetPropertyAggregatesResponse = { aggregatedValues: {}; nextToken?: {} | undefined }
type GetAssetPropertyValueResponse = {
  propertyValue?:
    | {
        value: {
          stringValue?: {} | undefined
          integerValue?: {} | undefined
          doubleValue?: {} | undefined
          booleanValue?: {} | undefined
        }
        timestamp: { timeInSeconds: {}; offsetInNanos?: {} | undefined }
        quality?: {} | undefined
      }
    | undefined
}
type GetAssetPropertyValueHistoryResponse = {
  assetPropertyValueHistory: {}
  nextToken?: {} | undefined
}
type GetInterpolatedAssetPropertyValuesResponse = {
  interpolatedAssetPropertyValues: {}
  nextToken?: {} | undefined
}
type ListAssetModelPropertiesResponse = {
  assetModelPropertySummaries: {}
  nextToken?: {} | undefined
}
type ListAssetPropertiesResponse = { assetPropertySummaries: {}; nextToken?: {} | undefined }
type ListAssetRelationshipsResponse = { assetRelationshipSummaries: {}; nextToken?: {} | undefined }
type ListAssociatedAssetsResponse = { assetSummaries: {}; nextToken?: {} | undefined }
type ListDashboardsResponse = { dashboardSummaries: {}; nextToken?: {} | undefined }
type ListProjectAssetsResponse = { assetIds: {}; nextToken?: {} | undefined }
type ListProjectsResponse = { projectSummaries: {}; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type UnauthorizedException = { [x: string]: unknown }
type TagResourceResponse = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type ListTimeSeriesResponse = { TimeSeriesSummaries: {}; nextToken?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateGatewayCapabilityConfigurationResponse = {
  capabilityNamespace: {}
  capabilitySyncStatus: {}
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/assets/:assetId/associate': {
      $post:
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/timeseries/associate/#alias&assetId&propertyId': {
      $post:
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/projects/:projectId/assets/associate': {
      $post:
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: BatchAssociateProjectAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/projects/:projectId/assets/disassociate': {
      $post:
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: BatchDisassociateProjectAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { projectId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { assetIds: ID[]; clientToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/properties/batch/aggregates': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyAggregatesEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: BatchGetAssetPropertyAggregatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyAggregatesEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyAggregatesEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyAggregatesEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyAggregatesEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/properties/batch/latest': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
              json: { entries: BatchGetAssetPropertyValueEntry[]; nextToken?: string | undefined }
            }
            output: BatchGetAssetPropertyValueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
              json: { entries: BatchGetAssetPropertyValueEntry[]; nextToken?: string | undefined }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
              json: { entries: BatchGetAssetPropertyValueEntry[]; nextToken?: string | undefined }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
              json: { entries: BatchGetAssetPropertyValueEntry[]; nextToken?: string | undefined }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
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
              json: { entries: BatchGetAssetPropertyValueEntry[]; nextToken?: string | undefined }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/properties/batch/history': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyValueHistoryEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: BatchGetAssetPropertyValueHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyValueHistoryEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyValueHistoryEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyValueHistoryEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
            } & {
              json: {
                entries: BatchGetAssetPropertyValueHistoryEntry[]
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/properties': {
      $post:
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: BatchPutAssetPropertyValueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            } & { json: { entries: PutAssetPropertyValueEntry[] } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/access-policies': {
      $post:
        | {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateAccessPolicyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                identityType?: 'USER' | 'GROUP' | 'IAM' | undefined
                identityId?: string | undefined
                resourceType?: 'PORTAL' | 'PROJECT' | undefined
                resourceId?: string | undefined
                iamArn?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ListAccessPoliciesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                identityType?: 'USER' | 'GROUP' | 'IAM' | undefined
                identityId?: string | undefined
                resourceType?: 'PORTAL' | 'PROJECT' | undefined
                resourceId?: string | undefined
                iamArn?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                identityType?: 'USER' | 'GROUP' | 'IAM' | undefined
                identityId?: string | undefined
                resourceType?: 'PORTAL' | 'PROJECT' | undefined
                resourceId?: string | undefined
                iamArn?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                identityType?: 'USER' | 'GROUP' | 'IAM' | undefined
                identityId?: string | undefined
                resourceType?: 'PORTAL' | 'PROJECT' | undefined
                resourceId?: string | undefined
                iamArn?: string | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/assets': {
      $post:
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: CreateAssetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                assetName: string
                assetModelId: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
                assetDescription?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetModelId?: string | undefined
                filter?: 'ALL' | 'TOP_LEVEL' | undefined
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
            output: ListAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetModelId?: string | undefined
                filter?: 'ALL' | 'TOP_LEVEL' | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetModelId?: string | undefined
                filter?: 'ALL' | 'TOP_LEVEL' | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetModelId?: string | undefined
                filter?: 'ALL' | 'TOP_LEVEL' | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetModelId?: string | undefined
                filter?: 'ALL' | 'TOP_LEVEL' | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/asset-models': {
      $post:
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateAssetModelResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelPropertyDefinition[] | undefined
                assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ListAssetModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/jobs': {
      $post:
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: CreateBulkImportJobResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                jobName: string
                jobRoleArn: string
                files: File2[]
                errorReportLocation: { bucket?: {} | undefined; prefix?: {} | undefined }
                jobConfiguration: {
                  fileFormat?: { csv?: { columnNames?: {} | undefined } | undefined } | undefined
                }
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?:
                  | 'ALL'
                  | 'PENDING'
                  | 'RUNNING'
                  | 'CANCELLED'
                  | 'FAILED'
                  | 'COMPLETED_WITH_FAILURES'
                  | 'COMPLETED'
                  | undefined
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
            output: ListBulkImportJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?:
                  | 'ALL'
                  | 'PENDING'
                  | 'RUNNING'
                  | 'CANCELLED'
                  | 'FAILED'
                  | 'COMPLETED_WITH_FAILURES'
                  | 'COMPLETED'
                  | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?:
                  | 'ALL'
                  | 'PENDING'
                  | 'RUNNING'
                  | 'CANCELLED'
                  | 'FAILED'
                  | 'COMPLETED_WITH_FAILURES'
                  | 'COMPLETED'
                  | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?:
                  | 'ALL'
                  | 'PENDING'
                  | 'RUNNING'
                  | 'CANCELLED'
                  | 'FAILED'
                  | 'COMPLETED_WITH_FAILURES'
                  | 'COMPLETED'
                  | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?:
                  | 'ALL'
                  | 'PENDING'
                  | 'RUNNING'
                  | 'CANCELLED'
                  | 'FAILED'
                  | 'COMPLETED_WITH_FAILURES'
                  | 'COMPLETED'
                  | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/dashboards': {
      $post:
        | {
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
                projectId: string
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateDashboardResponse
            outputFormat: 'json'
            status: 201
          }
        | {
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
                projectId: string
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                projectId: string
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                projectId: string
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                projectId: string
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                projectId: string
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/20200301/gateways': {
      $post:
        | {
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
                gatewayName: string
                gatewayPlatform: {
                  greengrass?: { groupArn: {} } | undefined
                  greengrassV2?: { coreDeviceThingName: {} } | undefined
                }
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateGatewayResponse
            outputFormat: 'json'
            status: 201
          }
        | {
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
                gatewayName: string
                gatewayPlatform: {
                  greengrass?: { groupArn: {} } | undefined
                  greengrassV2?: { coreDeviceThingName: {} } | undefined
                }
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                gatewayName: string
                gatewayPlatform: {
                  greengrass?: { groupArn: {} } | undefined
                  greengrassV2?: { coreDeviceThingName: {} } | undefined
                }
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                gatewayName: string
                gatewayPlatform: {
                  greengrass?: { groupArn: {} } | undefined
                  greengrassV2?: { coreDeviceThingName: {} } | undefined
                }
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                gatewayName: string
                gatewayPlatform: {
                  greengrass?: { groupArn: {} } | undefined
                  greengrassV2?: { coreDeviceThingName: {} } | undefined
                }
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                gatewayName: string
                gatewayPlatform: {
                  greengrass?: { groupArn: {} } | undefined
                  greengrassV2?: { coreDeviceThingName: {} } | undefined
                }
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ListGatewaysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/portals': {
      $post:
        | {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                clientToken?: string | undefined
                portalLogoImageFile?: { data?: {} | undefined; type?: {} | undefined } | undefined
                roleArn: string
                tags?: { [x: string]: TagValue } | undefined
                portalAuthMode?: 'IAM' | 'SSO' | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: CreatePortalResponse
            outputFormat: 'json'
            status: 202
          }
        | {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                clientToken?: string | undefined
                portalLogoImageFile?: { data?: {} | undefined; type?: {} | undefined } | undefined
                roleArn: string
                tags?: { [x: string]: TagValue } | undefined
                portalAuthMode?: 'IAM' | 'SSO' | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                clientToken?: string | undefined
                portalLogoImageFile?: { data?: {} | undefined; type?: {} | undefined } | undefined
                roleArn: string
                tags?: { [x: string]: TagValue } | undefined
                portalAuthMode?: 'IAM' | 'SSO' | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                clientToken?: string | undefined
                portalLogoImageFile?: { data?: {} | undefined; type?: {} | undefined } | undefined
                roleArn: string
                tags?: { [x: string]: TagValue } | undefined
                portalAuthMode?: 'IAM' | 'SSO' | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                clientToken?: string | undefined
                portalLogoImageFile?: { data?: {} | undefined; type?: {} | undefined } | undefined
                roleArn: string
                tags?: { [x: string]: TagValue } | undefined
                portalAuthMode?: 'IAM' | 'SSO' | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                clientToken?: string | undefined
                portalLogoImageFile?: { data?: {} | undefined; type?: {} | undefined } | undefined
                roleArn: string
                tags?: { [x: string]: TagValue } | undefined
                portalAuthMode?: 'IAM' | 'SSO' | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ListPortalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/projects': {
      $post:
        | {
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
                portalId: string
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateProjectResponse
            outputFormat: 'json'
            status: 201
          }
        | {
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
                portalId: string
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                portalId: string
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                portalId: string
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                portalId: string
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                portalId: string
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/access-policies/:accessPolicyId': {
      $delete:
        | {
            input: { param: { accessPolicyId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: DeleteAccessPolicyResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { accessPolicyId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { accessPolicyId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { accessPolicyId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { accessPolicyId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { accessPolicyId: string } } & {
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
            output: DescribeAccessPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { accessPolicyId: string } } & {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
              }
            }
            output: UpdateAccessPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { accessPolicyId: string } } & {
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
                accessPolicyIdentity: {
                  user?: { id: {} } | undefined
                  group?: { id: {} } | undefined
                  iamUser?: { arn: {} } | undefined
                  iamRole?: { arn: {} } | undefined
                }
                accessPolicyResource: {
                  portal?: { id: {} } | undefined
                  project?: { id: {} } | undefined
                }
                accessPolicyPermission: 'ADMINISTRATOR' | 'VIEWER'
                clientToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/assets/:assetId': {
      $delete:
        | {
            input: { param: { assetId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: DeleteAssetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { assetId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { assetId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: DescribeAssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: UpdateAssetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { assetId: string } } & {
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
                assetName: string
                clientToken?: string | undefined
                assetDescription?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/asset-models/:assetModelId': {
      $delete:
        | {
            input: { param: { assetModelId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: DeleteAssetModelResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { assetModelId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: DescribeAssetModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: { excludeProperties?: boolean | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: UpdateAssetModelResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { assetModelId: string } } & {
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
                assetModelName: string
                assetModelDescription?: string | undefined
                assetModelProperties?: AssetModelProperty[] | undefined
                assetModelHierarchies?: AssetModelHierarchy[] | undefined
                assetModelCompositeModels?: AssetModelCompositeModel[] | undefined
                clientToken?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/dashboards/:dashboardId': {
      $delete:
        | {
            input: { param: { dashboardId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: DeleteDashboardResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { dashboardId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { dashboardId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { dashboardId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { dashboardId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { dashboardId: string } } & {
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
            output: DescribeDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { dashboardId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { dashboardId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { dashboardId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { dashboardId: string } } & {
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
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
              }
            }
            output: UpdateDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & {
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
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { dashboardId: string } } & {
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
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { dashboardId: string } } & {
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
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { dashboardId: string } } & {
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
                dashboardName: string
                dashboardDescription?: string | undefined
                dashboardDefinition: string
                clientToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/20200301/gateways/:gatewayId': {
      $delete:
        | {
            input: { param: { gatewayId: string } } & {
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
            status: 200
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { gatewayId: string } } & {
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
            output: DescribeGatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { gatewayId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { gatewayName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { gatewayName: string } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { gatewayName: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { gatewayName: string } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { gatewayName: string } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { gatewayName: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/portals/:portalId': {
      $delete:
        | {
            input: { param: { portalId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: DeletePortalResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { portalId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { portalId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { portalId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { portalId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { portalId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { portalId: string } } & {
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
            output: DescribePortalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portalId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { portalId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { portalId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { portalId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { portalId: string } } & {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                portalLogoImage?: { id?: {} | undefined; file?: ImageFile | undefined } | undefined
                roleArn: string
                clientToken?: string | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: UpdatePortalResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { portalId: string } } & {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                portalLogoImage?: { id?: {} | undefined; file?: ImageFile | undefined } | undefined
                roleArn: string
                clientToken?: string | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { portalId: string } } & {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                portalLogoImage?: { id?: {} | undefined; file?: ImageFile | undefined } | undefined
                roleArn: string
                clientToken?: string | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { portalId: string } } & {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                portalLogoImage?: { id?: {} | undefined; file?: ImageFile | undefined } | undefined
                roleArn: string
                clientToken?: string | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { portalId: string } } & {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                portalLogoImage?: { id?: {} | undefined; file?: ImageFile | undefined } | undefined
                roleArn: string
                clientToken?: string | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { portalId: string } } & {
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
                portalName: string
                portalDescription?: string | undefined
                portalContactEmail: string
                portalLogoImage?: { id?: {} | undefined; file?: ImageFile | undefined } | undefined
                roleArn: string
                clientToken?: string | undefined
                notificationSenderEmail?: string | undefined
                alarms?:
                  | { alarmRoleArn?: {} | undefined; notificationLambdaArn?: {} | undefined }
                  | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/projects/:projectId': {
      $delete:
        | {
            input: { param: { projectId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: DeleteProjectResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { projectId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { projectId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { projectId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { projectId: string } } & {
              query: { clientToken?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { projectId: string } } & {
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
            output: DescribeProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { projectId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { projectId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { projectId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { projectId: string } } & {
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
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
              }
            }
            output: UpdateProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
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
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { projectId: string } } & {
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
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { projectId: string } } & {
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
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { projectId: string } } & {
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
                projectName: string
                projectDescription?: string | undefined
                clientToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/timeseries/delete/': {
      $post:
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            } & { json: { clientToken?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            } & { json: { clientToken?: string | undefined } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            } & { json: { clientToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            } & { json: { clientToken?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            } & { json: { clientToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            } & { json: { clientToken?: string | undefined } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/assets/:assetId/properties/:propertyId': {
      $get:
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
            output: DescribeAssetPropertyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
                propertyAlias?: string | undefined
                propertyNotificationState?: 'ENABLED' | 'DISABLED' | undefined
                clientToken?: string | undefined
                propertyUnit?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
                propertyAlias?: string | undefined
                propertyNotificationState?: 'ENABLED' | 'DISABLED' | undefined
                clientToken?: string | undefined
                propertyUnit?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
                propertyAlias?: string | undefined
                propertyNotificationState?: 'ENABLED' | 'DISABLED' | undefined
                clientToken?: string | undefined
                propertyUnit?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
                propertyAlias?: string | undefined
                propertyNotificationState?: 'ENABLED' | 'DISABLED' | undefined
                clientToken?: string | undefined
                propertyUnit?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
                propertyAlias?: string | undefined
                propertyNotificationState?: 'ENABLED' | 'DISABLED' | undefined
                clientToken?: string | undefined
                propertyUnit?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetId: string; propertyId: string } } & {
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
                propertyAlias?: string | undefined
                propertyNotificationState?: 'ENABLED' | 'DISABLED' | undefined
                clientToken?: string | undefined
                propertyUnit?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/jobs/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } } & {
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
            output: DescribeBulkImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { jobId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { jobId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { jobId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/configuration/account/encryption': {
      $get:
        | {
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
            }
            output: DescribeDefaultEncryptionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
      $post:
        | {
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
                encryptionType: 'SITEWISE_DEFAULT_ENCRYPTION' | 'KMS_BASED_ENCRYPTION'
                kmsKeyId?: string | undefined
              }
            }
            output: PutDefaultEncryptionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                encryptionType: 'SITEWISE_DEFAULT_ENCRYPTION' | 'KMS_BASED_ENCRYPTION'
                kmsKeyId?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                encryptionType: 'SITEWISE_DEFAULT_ENCRYPTION' | 'KMS_BASED_ENCRYPTION'
                kmsKeyId?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                encryptionType: 'SITEWISE_DEFAULT_ENCRYPTION' | 'KMS_BASED_ENCRYPTION'
                kmsKeyId?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                encryptionType: 'SITEWISE_DEFAULT_ENCRYPTION' | 'KMS_BASED_ENCRYPTION'
                kmsKeyId?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                encryptionType: 'SITEWISE_DEFAULT_ENCRYPTION' | 'KMS_BASED_ENCRYPTION'
                kmsKeyId?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/20200301/gateways/:gatewayId/capability/:capabilityNamespace': {
      $get:
        | {
            input: { param: { gatewayId: string; capabilityNamespace: string } } & {
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
            output: DescribeGatewayCapabilityConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gatewayId: string; capabilityNamespace: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { gatewayId: string; capabilityNamespace: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { gatewayId: string; capabilityNamespace: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { gatewayId: string; capabilityNamespace: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/logging': {
      $get:
        | {
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
            }
            output: DescribeLoggingOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
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
            } & { json: { loggingOptions: { level?: {} | undefined } } }
            output: PutLoggingOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { loggingOptions: { level?: {} | undefined } } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { loggingOptions: { level?: {} | undefined } } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { loggingOptions: { level?: {} | undefined } } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            } & { json: { loggingOptions: { level?: {} | undefined } } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            } & { json: { loggingOptions: { level?: {} | undefined } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/configuration/account/storage': {
      $get:
        | {
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
            }
            output: DescribeStorageConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 485
          }
      $post:
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: PutStorageConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                storageType: 'SITEWISE_DEFAULT_STORAGE' | 'MULTI_LAYER_STORAGE'
                multiLayerStorage?:
                  | { customerManagedS3Storage?: { s3ResourceArn: {}; roleArn: {} } | undefined }
                  | undefined
                disassociatedDataStorage?: 'ENABLED' | 'DISABLED' | undefined
                retentionPeriod?:
                  | { numberOfDays?: {} | undefined; unlimited?: {} | undefined }
                  | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/timeseries/describe/': {
      $get:
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            output: DescribeTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                alias?: string | undefined
                assetId?: string | undefined
                propertyId?: string | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/assets/:assetId/disassociate': {
      $post:
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { assetId: string } } & {
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
              json: { hierarchyId: string; childAssetId: string; clientToken?: string | undefined }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/timeseries/disassociate/#alias&assetId&propertyId': {
      $post:
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { alias: string; assetId: string; propertyId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientToken?: string | undefined } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/properties/aggregates#aggregateTypes&resolution&startDate&endDate': {
      $get:
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                aggregateTypes: AggregateType[]
                resolution: string
                qualities?: Quality[] | undefined
                startDate: string
                endDate: string
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: GetAssetPropertyAggregatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                aggregateTypes: AggregateType[]
                resolution: string
                qualities?: Quality[] | undefined
                startDate: string
                endDate: string
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                aggregateTypes: AggregateType[]
                resolution: string
                qualities?: Quality[] | undefined
                startDate: string
                endDate: string
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                aggregateTypes: AggregateType[]
                resolution: string
                qualities?: Quality[] | undefined
                startDate: string
                endDate: string
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                aggregateTypes: AggregateType[]
                resolution: string
                qualities?: Quality[] | undefined
                startDate: string
                endDate: string
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                aggregateTypes: AggregateType[]
                resolution: string
                qualities?: Quality[] | undefined
                startDate: string
                endDate: string
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/properties/latest': {
      $get:
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
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
            output: GetAssetPropertyValueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/properties/history': {
      $get:
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                qualities?: Quality[] | undefined
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: GetAssetPropertyValueHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                qualities?: Quality[] | undefined
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                qualities?: Quality[] | undefined
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                qualities?: Quality[] | undefined
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                qualities?: Quality[] | undefined
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                qualities?: Quality[] | undefined
                timeOrdering?: 'ASCENDING' | 'DESCENDING' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type': {
      $get:
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startTimeInSeconds: number
                startTimeOffsetInNanos?: number | undefined
                endTimeInSeconds: number
                endTimeOffsetInNanos?: number | undefined
                quality: 'GOOD' | 'BAD' | 'UNCERTAIN'
                intervalInSeconds: number
                nextToken?: string | undefined
                maxResults?: number | undefined
                type: string
                intervalWindowInSeconds?: number | undefined
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
            output: GetInterpolatedAssetPropertyValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startTimeInSeconds: number
                startTimeOffsetInNanos?: number | undefined
                endTimeInSeconds: number
                endTimeOffsetInNanos?: number | undefined
                quality: 'GOOD' | 'BAD' | 'UNCERTAIN'
                intervalInSeconds: number
                nextToken?: string | undefined
                maxResults?: number | undefined
                type: string
                intervalWindowInSeconds?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startTimeInSeconds: number
                startTimeOffsetInNanos?: number | undefined
                endTimeInSeconds: number
                endTimeOffsetInNanos?: number | undefined
                quality: 'GOOD' | 'BAD' | 'UNCERTAIN'
                intervalInSeconds: number
                nextToken?: string | undefined
                maxResults?: number | undefined
                type: string
                intervalWindowInSeconds?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startTimeInSeconds: number
                startTimeOffsetInNanos?: number | undefined
                endTimeInSeconds: number
                endTimeOffsetInNanos?: number | undefined
                quality: 'GOOD' | 'BAD' | 'UNCERTAIN'
                intervalInSeconds: number
                nextToken?: string | undefined
                maxResults?: number | undefined
                type: string
                intervalWindowInSeconds?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startTimeInSeconds: number
                startTimeOffsetInNanos?: number | undefined
                endTimeInSeconds: number
                endTimeOffsetInNanos?: number | undefined
                quality: 'GOOD' | 'BAD' | 'UNCERTAIN'
                intervalInSeconds: number
                nextToken?: string | undefined
                maxResults?: number | undefined
                type: string
                intervalWindowInSeconds?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                assetId?: string | undefined
                propertyId?: string | undefined
                propertyAlias?: string | undefined
                startTimeInSeconds: number
                startTimeOffsetInNanos?: number | undefined
                endTimeInSeconds: number
                endTimeOffsetInNanos?: number | undefined
                quality: 'GOOD' | 'BAD' | 'UNCERTAIN'
                intervalInSeconds: number
                nextToken?: string | undefined
                maxResults?: number | undefined
                type: string
                intervalWindowInSeconds?: number | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/asset-models/:assetModelId/properties': {
      $get:
        | {
            input: { param: { assetModelId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: ListAssetModelPropertiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetModelId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/assets/:assetId/properties': {
      $get:
        | {
            input: { param: { assetId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: ListAssetPropertiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                filter?: 'ALL' | 'BASE' | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/assets/:assetId/assetRelationships#traversalType': {
      $get:
        | {
            input: { param: { assetId: string } } & {
              query: {
                traversalType: 'PATH_TO_ROOT'
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ListAssetRelationshipsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                traversalType: 'PATH_TO_ROOT'
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                traversalType: 'PATH_TO_ROOT'
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                traversalType: 'PATH_TO_ROOT'
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                traversalType: 'PATH_TO_ROOT'
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/assets/:assetId/hierarchies': {
      $get:
        | {
            input: { param: { assetId: string } } & {
              query: {
                hierarchyId?: string | undefined
                traversalDirection?: 'PARENT' | 'CHILD' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ListAssociatedAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                hierarchyId?: string | undefined
                traversalDirection?: 'PARENT' | 'CHILD' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                hierarchyId?: string | undefined
                traversalDirection?: 'PARENT' | 'CHILD' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                hierarchyId?: string | undefined
                traversalDirection?: 'PARENT' | 'CHILD' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { assetId: string } } & {
              query: {
                hierarchyId?: string | undefined
                traversalDirection?: 'PARENT' | 'CHILD' | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/dashboards#projectId': {
      $get:
        | {
            input: {
              query: {
                projectId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ListDashboardsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                projectId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                projectId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/projects/:projectId/assets': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ListProjectAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { projectId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { projectId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/projects#portalId': {
      $get:
        | {
            input: {
              query: {
                portalId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ListProjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                portalId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                portalId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                portalId: string
                nextToken?: string | undefined
                maxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/tags#resourceArn': {
      $get:
        | {
            input: { query: { resourceArn: string } } & {
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
        | {
            input: { query: { resourceArn: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { resourceArn: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { resourceArn: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { resourceArn: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { resourceArn: string } } & {
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
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { resourceArn: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { resourceArn: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 486
          }
      $post:
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: TagValue } } }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/timeseries/': {
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetId?: string | undefined
                aliasPrefix?: string | undefined
                timeSeriesType?: 'ASSOCIATED' | 'DISASSOCIATED' | undefined
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
            output: ListTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetId?: string | undefined
                aliasPrefix?: string | undefined
                timeSeriesType?: 'ASSOCIATED' | 'DISASSOCIATED' | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetId?: string | undefined
                aliasPrefix?: string | undefined
                timeSeriesType?: 'ASSOCIATED' | 'DISASSOCIATED' | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetId?: string | undefined
                aliasPrefix?: string | undefined
                timeSeriesType?: 'ASSOCIATED' | 'DISASSOCIATED' | undefined
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                assetId?: string | undefined
                aliasPrefix?: string | undefined
                timeSeriesType?: 'ASSOCIATED' | 'DISASSOCIATED' | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/tags#resourceArn&tagKeys': {
      $delete:
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/20200301/gateways/:gatewayId/capability': {
      $post:
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: UpdateGatewayCapabilityConfigurationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { gatewayId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { capabilityNamespace: string; capabilityConfiguration: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  },
  '/'
>
export default routes
