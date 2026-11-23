type AddThingToBillingGroupResponse = { [x: string]: unknown }
type AddThingToThingGroupResponse = { [x: string]: unknown }
type TargetArn = string
type AssociateTargetsWithJobResponse = {
  jobArn?: {} | undefined
  jobId?: {} | undefined
  description?: {} | undefined
}
type AttachSecurityProfileResponse = { [x: string]: unknown }
type DetachSecurityProfileResponse = { [x: string]: unknown }
type AttachThingPrincipalResponse = { [x: string]: unknown }
type DetachThingPrincipalResponse = { [x: string]: unknown }
type CancelAuditMitigationActionsTaskResponse = { [x: string]: unknown }
type CancelAuditTaskResponse = { [x: string]: unknown }
type CancelDetectMitigationActionsTaskResponse = { [x: string]: unknown }
type CancelJobResponse = {
  jobArn?: {} | undefined
  jobId?: {} | undefined
  description?: {} | undefined
}
type DetailsValue = string
type ClearDefaultAuthorizerResponse = { [x: string]: unknown }
type DescribeDefaultAuthorizerResponse = {
  authorizerDescription?:
    | {
        authorizerName?: {} | undefined
        authorizerArn?: {} | undefined
        authorizerFunctionArn?: {} | undefined
        tokenKeyName?: {} | undefined
        tokenSigningPublicKeys?: {} | undefined
        status?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        signingDisabled?: {} | undefined
        enableCachingForHttp?: {} | undefined
      }
    | undefined
}
type SetDefaultAuthorizerResponse = {
  authorizerName?: {} | undefined
  authorizerArn?: {} | undefined
}
type ConfirmTopicRuleDestinationResponse = { [x: string]: unknown }
type CreateAuditSuppressionResponse = { [x: string]: unknown }
type KeyValue = string
type Tag = { Key: {}; Value?: {} | undefined }
type CreateAuthorizerResponse = { authorizerName?: {} | undefined; authorizerArn?: {} | undefined }
type DeleteAuthorizerResponse = { [x: string]: unknown }
type DescribeAuthorizerResponse = {
  authorizerDescription?:
    | {
        authorizerName?: {} | undefined
        authorizerArn?: {} | undefined
        authorizerFunctionArn?: {} | undefined
        tokenKeyName?: {} | undefined
        tokenSigningPublicKeys?: {} | undefined
        status?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        signingDisabled?: {} | undefined
        enableCachingForHttp?: {} | undefined
      }
    | undefined
}
type UpdateAuthorizerResponse = { authorizerName?: {} | undefined; authorizerArn?: {} | undefined }
type CreateBillingGroupResponse = {
  billingGroupName?: {} | undefined
  billingGroupArn?: {} | undefined
  billingGroupId?: {} | undefined
}
type DeleteBillingGroupResponse = { [x: string]: unknown }
type DescribeBillingGroupResponse = {
  billingGroupName?: {} | undefined
  billingGroupId?: {} | undefined
  billingGroupArn?: {} | undefined
  version?: {} | undefined
  billingGroupProperties?: { billingGroupDescription?: {} | undefined } | undefined
  billingGroupMetadata?: { creationDate?: {} | undefined } | undefined
}
type UpdateBillingGroupResponse = { version?: {} | undefined }
type CreateCertificateFromCsrResponse = {
  certificateArn?: {} | undefined
  certificateId?: {} | undefined
  certificatePem?: {} | undefined
}
type ListCertificatesResponse = { certificates?: {} | undefined; nextMarker?: {} | undefined }
type CreateCustomMetricResponse = { metricName?: {} | undefined; metricArn?: {} | undefined }
type DeleteCustomMetricResponse = { [x: string]: unknown }
type DescribeCustomMetricResponse = {
  metricName?: {} | undefined
  metricArn?: {} | undefined
  metricType?: {} | undefined
  displayName?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type UpdateCustomMetricResponse = {
  metricName?: {} | undefined
  metricArn?: {} | undefined
  metricType?: {} | undefined
  displayName?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type DimensionStringValue = string
type CreateDimensionResponse = { name?: {} | undefined; arn?: {} | undefined }
type DeleteDimensionResponse = { [x: string]: unknown }
type DescribeDimensionResponse = {
  name?: {} | undefined
  arn?: {} | undefined
  type?: {} | undefined
  stringValues?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type UpdateDimensionResponse = {
  name?: {} | undefined
  arn?: {} | undefined
  type?: {} | undefined
  stringValues?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type AcmCertificateArn = string
type CreateDomainConfigurationResponse = {
  domainConfigurationName?: {} | undefined
  domainConfigurationArn?: {} | undefined
}
type DeleteDomainConfigurationResponse = { [x: string]: unknown }
type DescribeDomainConfigurationResponse = {
  domainConfigurationName?: {} | undefined
  domainConfigurationArn?: {} | undefined
  domainName?: {} | undefined
  serverCertificates?: {} | undefined
  authorizerConfig?:
    | { defaultAuthorizerName?: {} | undefined; allowAuthorizerOverride?: {} | undefined }
    | undefined
  domainConfigurationStatus?: {} | undefined
  serviceType?: {} | undefined
  domainType?: {} | undefined
  lastStatusChangeDate?: {} | undefined
}
type UpdateDomainConfigurationResponse = {
  domainConfigurationName?: {} | undefined
  domainConfigurationArn?: {} | undefined
}
type CreateDynamicThingGroupResponse = {
  thingGroupName?: {} | undefined
  thingGroupArn?: {} | undefined
  thingGroupId?: {} | undefined
  indexName?: {} | undefined
  queryString?: {} | undefined
  queryVersion?: {} | undefined
}
type DeleteDynamicThingGroupResponse = { [x: string]: unknown }
type UpdateDynamicThingGroupResponse = { version?: {} | undefined }
type CreateFleetMetricResponse = { metricName?: {} | undefined; metricArn?: {} | undefined }
type DescribeFleetMetricResponse = {
  metricName?: {} | undefined
  queryString?: {} | undefined
  aggregationType?: { name: {}; values?: {} | undefined } | undefined
  period?: {} | undefined
  aggregationField?: {} | undefined
  description?: {} | undefined
  queryVersion?: {} | undefined
  indexName?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
  unit?: {} | undefined
  version?: {} | undefined
  metricArn?: {} | undefined
}
type ParameterValue = string
type CreateJobResponse = {
  jobArn?: {} | undefined
  jobId?: {} | undefined
  description?: {} | undefined
}
type DescribeJobResponse = {
  documentSource?: {} | undefined
  job?:
    | {
        jobArn?: {} | undefined
        jobId?: {} | undefined
        targetSelection?: {} | undefined
        status?: {} | undefined
        forceCanceled?: {} | undefined
        reasonCode?: {} | undefined
        comment?: {} | undefined
        targets?: {} | undefined
        description?: {} | undefined
        presignedUrlConfig?: { roleArn?: {} | undefined; expiresInSec?: {} | undefined } | undefined
        jobExecutionsRolloutConfig?:
          | {
              maximumPerMinute?: {} | undefined
              exponentialRate?:
                | {
                    baseRatePerMinute: {}
                    incrementFactor: {}
                    rateIncreaseCriteria: {
                      numberOfNotifiedThings?: {} | undefined
                      numberOfSucceededThings?: {} | undefined
                    }
                  }
                | undefined
            }
          | undefined
        abortConfig?: { criteriaList: {} } | undefined
        createdAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        completedAt?: {} | undefined
        jobProcessDetails?:
          | {
              processingTargets?: {} | undefined
              numberOfCanceledThings?: {} | undefined
              numberOfSucceededThings?: {} | undefined
              numberOfFailedThings?: {} | undefined
              numberOfRejectedThings?: {} | undefined
              numberOfQueuedThings?: {} | undefined
              numberOfInProgressThings?: {} | undefined
              numberOfRemovedThings?: {} | undefined
              numberOfTimedOutThings?: {} | undefined
            }
          | undefined
        timeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
        namespaceId?: {} | undefined
        jobTemplateArn?: {} | undefined
        jobExecutionsRetryConfig?: { criteriaList: {} } | undefined
        documentParameters?: {} | undefined
        isConcurrent?: {} | undefined
        schedulingConfig?:
          | {
              startTime?: {} | undefined
              endTime?: {} | undefined
              endBehavior?: {} | undefined
              maintenanceWindows?: {} | undefined
            }
          | undefined
        scheduledJobRollouts?: {} | undefined
      }
    | undefined
}
type MaintenanceWindow = { startTime: {}; durationInMinutes: {} }
type CreateJobTemplateResponse = { jobTemplateArn?: {} | undefined; jobTemplateId?: {} | undefined }
type PresignedUrlConfig = { roleArn?: {} | undefined; expiresInSec?: {} | undefined }
type JobExecutionsRolloutConfig = {
  maximumPerMinute?: {} | undefined
  exponentialRate?:
    | {
        baseRatePerMinute: {}
        incrementFactor: {}
        rateIncreaseCriteria: {
          numberOfNotifiedThings?: {} | undefined
          numberOfSucceededThings?: {} | undefined
        }
      }
    | undefined
}
type AbortConfig = { criteriaList: {} }
type TimeoutConfig = { inProgressTimeoutInMinutes?: {} | undefined }
type DescribeJobTemplateResponse = {
  jobTemplateArn?: {} | undefined
  jobTemplateId?: {} | undefined
  description?: {} | undefined
  documentSource?: {} | undefined
  document?: {} | undefined
  createdAt?: {} | undefined
  presignedUrlConfig?: PresignedUrlConfig | undefined
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined
  abortConfig?: AbortConfig | undefined
  timeoutConfig?: TimeoutConfig | undefined
  jobExecutionsRetryConfig?: { criteriaList: {} } | undefined
  maintenanceWindows?: {} | undefined
}
type CreateKeysAndCertificateResponse = {
  certificateArn?: {} | undefined
  certificateId?: {} | undefined
  certificatePem?: {} | undefined
  keyPair?: { PublicKey?: {} | undefined; PrivateKey?: {} | undefined } | undefined
}
type CreateMitigationActionResponse = { actionArn?: {} | undefined; actionId?: {} | undefined }
type DeleteMitigationActionResponse = { [x: string]: unknown }
type DescribeMitigationActionResponse = {
  actionName?: {} | undefined
  actionType?: {} | undefined
  actionArn?: {} | undefined
  actionId?: {} | undefined
  roleArn?: {} | undefined
  actionParams?:
    | {
        updateDeviceCertificateParams?: { action: {} } | undefined
        updateCACertificateParams?: { action: {} } | undefined
        addThingsToThingGroupParams?:
          | { thingGroupNames: {}; overrideDynamicGroups?: {} | undefined }
          | undefined
        replaceDefaultPolicyVersionParams?: { templateName: {} } | undefined
        enableIoTLoggingParams?: { roleArnForLogging: {}; logLevel: {} } | undefined
        publishFindingToSnsParams?: { topicArn: {} } | undefined
      }
    | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type UpdateMitigationActionResponse = { actionArn?: {} | undefined; actionId?: {} | undefined }
type Target = string
type Protocol = 'MQTT' | 'HTTP'
type OTAUpdateFile = {
  fileName?: {} | undefined
  fileType?: {} | undefined
  fileVersion?: {} | undefined
  fileLocation?:
    | {
        stream?: { streamId?: {} | undefined; fileId?: {} | undefined } | undefined
        s3Location?:
          | { bucket?: {} | undefined; key?: {} | undefined; version?: {} | undefined }
          | undefined
      }
    | undefined
  codeSigning?:
    | {
        awsSignerJobId?: {} | undefined
        startSigningJobParameter?:
          | {
              signingProfileParameter?:
                | {
                    certificateArn?: {} | undefined
                    platform?: {} | undefined
                    certificatePathOnDevice?: {} | undefined
                  }
                | undefined
              signingProfileName?: {} | undefined
              destination?:
                | {
                    s3Destination?: { bucket?: {} | undefined; prefix?: {} | undefined } | undefined
                  }
                | undefined
            }
          | undefined
        customCodeSigning?:
          | {
              signature?: { inlineDocument?: {} | undefined } | undefined
              certificateChain?:
                | { certificateName?: {} | undefined; inlineDocument?: {} | undefined }
                | undefined
              hashAlgorithm?: {} | undefined
              signatureAlgorithm?: {} | undefined
            }
          | undefined
      }
    | undefined
  attributes?: {} | undefined
}
type Value = string
type CreateOTAUpdateResponse = {
  otaUpdateId?: {} | undefined
  awsIotJobId?: {} | undefined
  otaUpdateArn?: {} | undefined
  awsIotJobArn?: {} | undefined
  otaUpdateStatus?: {} | undefined
}
type DeleteOTAUpdateResponse = { [x: string]: unknown }
type GetOTAUpdateResponse = {
  otaUpdateInfo?:
    | {
        otaUpdateId?: {} | undefined
        otaUpdateArn?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        description?: {} | undefined
        targets?: {} | undefined
        protocols?: {} | undefined
        awsJobExecutionsRolloutConfig?:
          | {
              maximumPerMinute?: {} | undefined
              exponentialRate?:
                | {
                    baseRatePerMinute: {}
                    incrementFactor: {}
                    rateIncreaseCriteria: {
                      numberOfNotifiedThings?: {} | undefined
                      numberOfSucceededThings?: {} | undefined
                    }
                  }
                | undefined
            }
          | undefined
        awsJobPresignedUrlConfig?: { expiresInSec?: {} | undefined } | undefined
        targetSelection?: {} | undefined
        otaUpdateFiles?: {} | undefined
        otaUpdateStatus?: {} | undefined
        awsIotJobId?: {} | undefined
        awsIotJobArn?: {} | undefined
        errorInfo?: { code?: {} | undefined; message?: {} | undefined } | undefined
        additionalParameters?: {} | undefined
      }
    | undefined
}
type CreatePolicyResponse = {
  policyName?: {} | undefined
  policyArn?: {} | undefined
  policyDocument?: {} | undefined
  policyVersionId?: {} | undefined
}
type GetPolicyResponse = {
  policyName?: {} | undefined
  policyArn?: {} | undefined
  policyDocument?: {} | undefined
  defaultVersionId?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
  generationId?: {} | undefined
}
type CreatePolicyVersionResponse = {
  policyArn?: {} | undefined
  policyDocument?: {} | undefined
  policyVersionId?: {} | undefined
  isDefaultVersion?: {} | undefined
}
type ListPolicyVersionsResponse = { policyVersions?: {} | undefined }
type CreateProvisioningClaimResponse = {
  certificateId?: {} | undefined
  certificatePem?: {} | undefined
  keyPair?: { PublicKey?: {} | undefined; PrivateKey?: {} | undefined } | undefined
  expiration?: {} | undefined
}
type CreateProvisioningTemplateResponse = {
  templateArn?: {} | undefined
  templateName?: {} | undefined
  defaultVersionId?: {} | undefined
}
type ListProvisioningTemplatesResponse = { templates?: {} | undefined; nextToken?: {} | undefined }
type CreateProvisioningTemplateVersionResponse = {
  templateArn?: {} | undefined
  templateName?: {} | undefined
  versionId?: {} | undefined
  isDefaultVersion?: {} | undefined
}
type ListProvisioningTemplateVersionsResponse = {
  versions?: {} | undefined
  nextToken?: {} | undefined
}
type CreateRoleAliasResponse = { roleAlias?: {} | undefined; roleAliasArn?: {} | undefined }
type DeleteRoleAliasResponse = { [x: string]: unknown }
type DescribeRoleAliasResponse = {
  roleAliasDescription?:
    | {
        roleAlias?: {} | undefined
        roleAliasArn?: {} | undefined
        roleArn?: {} | undefined
        owner?: {} | undefined
        credentialDurationSeconds?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
      }
    | undefined
}
type UpdateRoleAliasResponse = { roleAlias?: {} | undefined; roleAliasArn?: {} | undefined }
type AuditCheckName = string
type CreateScheduledAuditResponse = { scheduledAuditArn?: {} | undefined }
type DeleteScheduledAuditResponse = { [x: string]: unknown }
type DescribeScheduledAuditResponse = {
  frequency?: {} | undefined
  dayOfMonth?: {} | undefined
  dayOfWeek?: {} | undefined
  targetCheckNames?: {} | undefined
  scheduledAuditName?: {} | undefined
  scheduledAuditArn?: {} | undefined
}
type UpdateScheduledAuditResponse = { scheduledAuditArn?: {} | undefined }
type Behavior = {
  name: {}
  metric?: {} | undefined
  metricDimension?: { dimensionName: {}; operator?: {} | undefined } | undefined
  criteria?:
    | {
        comparisonOperator?: {} | undefined
        value?:
          | {
              count?: {} | undefined
              cidrs?: {} | undefined
              ports?: {} | undefined
              number?: {} | undefined
              numbers?: {} | undefined
              strings?: {} | undefined
            }
          | undefined
        durationSeconds?: {} | undefined
        consecutiveDatapointsToAlarm?: {} | undefined
        consecutiveDatapointsToClear?: {} | undefined
        statisticalThreshold?: { statistic?: {} | undefined } | undefined
        mlDetectionConfig?: { confidenceLevel: {} } | undefined
      }
    | undefined
  suppressAlerts?: {} | undefined
}
type AlertTarget = { alertTargetArn: {}; roleArn: {} }
type BehaviorMetric = string
type MetricToRetain = {
  metric: {}
  metricDimension?: { dimensionName: {}; operator?: {} | undefined } | undefined
}
type CreateSecurityProfileResponse = {
  securityProfileName?: {} | undefined
  securityProfileArn?: {} | undefined
}
type DeleteSecurityProfileResponse = { [x: string]: unknown }
type DescribeSecurityProfileResponse = {
  securityProfileName?: {} | undefined
  securityProfileArn?: {} | undefined
  securityProfileDescription?: {} | undefined
  behaviors?: {} | undefined
  alertTargets?: {} | undefined
  additionalMetricsToRetain?: {} | undefined
  additionalMetricsToRetainV2?: {} | undefined
  version?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type UpdateSecurityProfileResponse = {
  securityProfileName?: {} | undefined
  securityProfileArn?: {} | undefined
  securityProfileDescription?: {} | undefined
  behaviors?: {} | undefined
  alertTargets?: {} | undefined
  additionalMetricsToRetain?: {} | undefined
  additionalMetricsToRetainV2?: {} | undefined
  version?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type StreamFile = {
  fileId?: {} | undefined
  s3Location?:
    | { bucket?: {} | undefined; key?: {} | undefined; version?: {} | undefined }
    | undefined
}
type CreateStreamResponse = {
  streamId?: {} | undefined
  streamArn?: {} | undefined
  description?: {} | undefined
  streamVersion?: {} | undefined
}
type DeleteStreamResponse = { [x: string]: unknown }
type DescribeStreamResponse = {
  streamInfo?:
    | {
        streamId?: {} | undefined
        streamArn?: {} | undefined
        streamVersion?: {} | undefined
        description?: {} | undefined
        files?: {} | undefined
        createdAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        roleArn?: {} | undefined
      }
    | undefined
}
type UpdateStreamResponse = {
  streamId?: {} | undefined
  streamArn?: {} | undefined
  description?: {} | undefined
  streamVersion?: {} | undefined
}
type CreateThingResponse = {
  thingName?: {} | undefined
  thingArn?: {} | undefined
  thingId?: {} | undefined
}
type DeleteThingResponse = { [x: string]: unknown }
type DescribeThingResponse = {
  defaultClientId?: {} | undefined
  thingName?: {} | undefined
  thingId?: {} | undefined
  thingArn?: {} | undefined
  thingTypeName?: {} | undefined
  attributes?: {} | undefined
  version?: {} | undefined
  billingGroupName?: {} | undefined
}
type UpdateThingResponse = { [x: string]: unknown }
type CreateThingGroupResponse = {
  thingGroupName?: {} | undefined
  thingGroupArn?: {} | undefined
  thingGroupId?: {} | undefined
}
type DeleteThingGroupResponse = { [x: string]: unknown }
type DescribeThingGroupResponse = {
  thingGroupName?: {} | undefined
  thingGroupId?: {} | undefined
  thingGroupArn?: {} | undefined
  version?: {} | undefined
  thingGroupProperties?:
    | {
        thingGroupDescription?: {} | undefined
        attributePayload?: { attributes?: {} | undefined; merge?: {} | undefined } | undefined
      }
    | undefined
  thingGroupMetadata?:
    | {
        parentGroupName?: {} | undefined
        rootToParentThingGroups?: {} | undefined
        creationDate?: {} | undefined
      }
    | undefined
  indexName?: {} | undefined
  queryString?: {} | undefined
  queryVersion?: {} | undefined
  status?: {} | undefined
}
type UpdateThingGroupResponse = { version?: {} | undefined }
type CreateThingTypeResponse = {
  thingTypeName?: {} | undefined
  thingTypeArn?: {} | undefined
  thingTypeId?: {} | undefined
}
type DeleteThingTypeResponse = { [x: string]: unknown }
type DescribeThingTypeResponse = {
  thingTypeName?: {} | undefined
  thingTypeId?: {} | undefined
  thingTypeArn?: {} | undefined
  thingTypeProperties?:
    | { thingTypeDescription?: {} | undefined; searchableAttributes?: {} | undefined }
    | undefined
  thingTypeMetadata?:
    | {
        deprecated?: {} | undefined
        deprecationDate?: {} | undefined
        creationDate?: {} | undefined
      }
    | undefined
}
type GetTopicRuleResponse = {
  ruleArn?: {} | undefined
  rule?:
    | {
        ruleName?: {} | undefined
        sql?: {} | undefined
        description?: {} | undefined
        createdAt?: {} | undefined
        actions?: {} | undefined
        ruleDisabled?: {} | undefined
        awsIotSqlVersion?: {} | undefined
        errorAction?:
          | {
              dynamoDB?:
                | {
                    tableName: {}
                    roleArn: {}
                    operation?: {} | undefined
                    hashKeyField: {}
                    hashKeyValue: {}
                    hashKeyType?: {} | undefined
                    rangeKeyField?: {} | undefined
                    rangeKeyValue?: {} | undefined
                    rangeKeyType?: {} | undefined
                    payloadField?: {} | undefined
                  }
                | undefined
              dynamoDBv2?: { roleArn: {}; putItem: { tableName: {} } } | undefined
              lambda?: { functionArn: {} } | undefined
              sns?: { targetArn: {}; roleArn: {}; messageFormat?: {} | undefined } | undefined
              sqs?: { roleArn: {}; queueUrl: {}; useBase64?: {} | undefined } | undefined
              kinesis?: { roleArn: {}; streamName: {}; partitionKey?: {} | undefined } | undefined
              republish?:
                | {
                    roleArn: {}
                    topic: {}
                    qos?: {} | undefined
                    headers?:
                      | {
                          payloadFormatIndicator?: {} | undefined
                          contentType?: {} | undefined
                          responseTopic?: {} | undefined
                          correlationData?: {} | undefined
                          messageExpiry?: {} | undefined
                          userProperties?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              s3?: { roleArn: {}; bucketName: {}; key: {}; cannedAcl?: {} | undefined } | undefined
              firehose?:
                | {
                    roleArn: {}
                    deliveryStreamName: {}
                    separator?: {} | undefined
                    batchMode?: {} | undefined
                  }
                | undefined
              cloudwatchMetric?:
                | {
                    roleArn: {}
                    metricNamespace: {}
                    metricName: {}
                    metricValue: {}
                    metricUnit: {}
                    metricTimestamp?: {} | undefined
                  }
                | undefined
              cloudwatchAlarm?:
                | { roleArn: {}; alarmName: {}; stateReason: {}; stateValue: {} }
                | undefined
              cloudwatchLogs?:
                | { roleArn: {}; logGroupName: {}; batchMode?: {} | undefined }
                | undefined
              elasticsearch?: { roleArn: {}; endpoint: {}; index: {}; type: {}; id: {} } | undefined
              salesforce?: { token: {}; url: {} } | undefined
              iotAnalytics?:
                | {
                    channelArn?: {} | undefined
                    channelName?: {} | undefined
                    batchMode?: {} | undefined
                    roleArn?: {} | undefined
                  }
                | undefined
              iotEvents?:
                | {
                    inputName: {}
                    messageId?: {} | undefined
                    batchMode?: {} | undefined
                    roleArn: {}
                  }
                | undefined
              iotSiteWise?: { putAssetPropertyValueEntries: {}; roleArn: {} } | undefined
              stepFunctions?:
                | { executionNamePrefix?: {} | undefined; stateMachineName: {}; roleArn: {} }
                | undefined
              timestream?:
                | {
                    roleArn: {}
                    databaseName: {}
                    tableName: {}
                    dimensions: {}
                    timestamp?: { value: {}; unit: {} } | undefined
                  }
                | undefined
              http?:
                | {
                    url: {}
                    confirmationUrl?: {} | undefined
                    headers?: {} | undefined
                    auth?:
                      | { sigv4?: { signingRegion: {}; serviceName: {}; roleArn: {} } | undefined }
                      | undefined
                  }
                | undefined
              kafka?:
                | {
                    destinationArn: {}
                    topic: {}
                    key?: {} | undefined
                    partition?: {} | undefined
                    clientProperties: {}
                  }
                | undefined
              openSearch?: { roleArn: {}; endpoint: {}; index: {}; type: {}; id: {} } | undefined
              location?:
                | {
                    roleArn: {}
                    trackerName: {}
                    deviceId: {}
                    timestamp?: { value: {}; unit?: {} | undefined } | undefined
                    latitude: {}
                    longitude: {}
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateTopicRuleDestinationResponse = {
  topicRuleDestination?:
    | {
        arn?: {} | undefined
        status?: {} | undefined
        createdAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        statusReason?: {} | undefined
        httpUrlProperties?: { confirmationUrl?: {} | undefined } | undefined
        vpcProperties?:
          | {
              subnetIds?: {} | undefined
              securityGroups?: {} | undefined
              vpcId?: {} | undefined
              roleArn?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListTopicRuleDestinationsResponse = {
  destinationSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type UpdateTopicRuleDestinationResponse = { [x: string]: unknown }
type DeleteAccountAuditConfigurationResponse = { [x: string]: unknown }
type DescribeAccountAuditConfigurationResponse = {
  roleArn?: {} | undefined
  auditNotificationTargetConfigurations?: {} | undefined
  auditCheckConfigurations?: {} | undefined
}
type AuditNotificationTarget = {
  targetArn?: {} | undefined
  roleArn?: {} | undefined
  enabled?: {} | undefined
}
type AuditCheckConfiguration = { enabled?: {} | undefined }
type UpdateAccountAuditConfigurationResponse = { [x: string]: unknown }
type DeleteAuditSuppressionResponse = { [x: string]: unknown }
type DeleteCACertificateResponse = { [x: string]: unknown }
type DescribeCACertificateResponse = {
  certificateDescription?:
    | {
        certificateArn?: {} | undefined
        certificateId?: {} | undefined
        status?: {} | undefined
        certificatePem?: {} | undefined
        ownedBy?: {} | undefined
        creationDate?: {} | undefined
        autoRegistrationStatus?: {} | undefined
        lastModifiedDate?: {} | undefined
        customerVersion?: {} | undefined
        generationId?: {} | undefined
        validity?: { notBefore?: {} | undefined; notAfter?: {} | undefined } | undefined
        certificateMode?: {} | undefined
      }
    | undefined
  registrationConfig?:
    | { templateBody?: {} | undefined; roleArn?: {} | undefined; templateName?: {} | undefined }
    | undefined
}
type DescribeCertificateResponse = {
  certificateDescription?:
    | {
        certificateArn?: {} | undefined
        certificateId?: {} | undefined
        caCertificateId?: {} | undefined
        status?: {} | undefined
        certificatePem?: {} | undefined
        ownedBy?: {} | undefined
        previousOwnedBy?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        customerVersion?: {} | undefined
        transferData?:
          | {
              transferMessage?: {} | undefined
              rejectReason?: {} | undefined
              transferDate?: {} | undefined
              acceptDate?: {} | undefined
              rejectDate?: {} | undefined
            }
          | undefined
        generationId?: {} | undefined
        validity?: { notBefore?: {} | undefined; notAfter?: {} | undefined } | undefined
        certificateMode?: {} | undefined
      }
    | undefined
}
type GetPolicyVersionResponse = {
  policyArn?: {} | undefined
  policyName?: {} | undefined
  policyDocument?: {} | undefined
  policyVersionId?: {} | undefined
  isDefaultVersion?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
  generationId?: {} | undefined
}
type DeleteProvisioningTemplateResponse = { [x: string]: unknown }
type DescribeProvisioningTemplateResponse = {
  templateArn?: {} | undefined
  templateName?: {} | undefined
  description?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
  defaultVersionId?: {} | undefined
  templateBody?: {} | undefined
  enabled?: {} | undefined
  provisioningRoleArn?: {} | undefined
  preProvisioningHook?: { payloadVersion?: {} | undefined; targetArn: {} } | undefined
  type?: {} | undefined
}
type UpdateProvisioningTemplateResponse = { [x: string]: unknown }
type DeleteProvisioningTemplateVersionResponse = { [x: string]: unknown }
type DescribeProvisioningTemplateVersionResponse = {
  versionId?: {} | undefined
  creationDate?: {} | undefined
  templateBody?: {} | undefined
  isDefaultVersion?: {} | undefined
}
type DeleteRegistrationCodeResponse = { [x: string]: unknown }
type GetRegistrationCodeResponse = { registrationCode?: {} | undefined }
type DeleteTopicRuleDestinationResponse = { [x: string]: unknown }
type GetTopicRuleDestinationResponse = {
  topicRuleDestination?:
    | {
        arn?: {} | undefined
        status?: {} | undefined
        createdAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        statusReason?: {} | undefined
        httpUrlProperties?: { confirmationUrl?: {} | undefined } | undefined
        vpcProperties?:
          | {
              subnetIds?: {} | undefined
              securityGroups?: {} | undefined
              vpcId?: {} | undefined
              roleArn?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DeprecateThingTypeResponse = { [x: string]: unknown }
type AuditFinding = {
  findingId?: {} | undefined
  taskId?: {} | undefined
  checkName?: {} | undefined
  taskStartTime?: {} | undefined
  findingTime?: {} | undefined
  severity?: {} | undefined
  nonCompliantResource?:
    | {
        resourceType?: {} | undefined
        resourceIdentifier?:
          | {
              deviceCertificateId?: {} | undefined
              caCertificateId?: {} | undefined
              cognitoIdentityPoolId?: {} | undefined
              clientId?: {} | undefined
              policyVersionIdentifier?:
                | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                | undefined
              account?: {} | undefined
              iamRoleArn?: {} | undefined
              roleAliasArn?: {} | undefined
              issuerCertificateIdentifier?:
                | {
                    issuerCertificateSubject?: {} | undefined
                    issuerId?: {} | undefined
                    issuerCertificateSerialNumber?: {} | undefined
                  }
                | undefined
              deviceCertificateArn?: {} | undefined
            }
          | undefined
        additionalInfo?: {} | undefined
      }
    | undefined
  relatedResources?: {} | undefined
  reasonForNonCompliance?: {} | undefined
  reasonForNonComplianceCode?: {} | undefined
  isSuppressed?: {} | undefined
}
type DescribeAuditFindingResponse = { finding?: AuditFinding | undefined }
type DescribeAuditMitigationActionsTaskResponse = {
  taskStatus?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  taskStatistics?: {} | undefined
  target?:
    | {
        auditTaskId?: {} | undefined
        findingIds?: {} | undefined
        auditCheckToReasonCodeFilter?: {} | undefined
      }
    | undefined
  auditCheckToActionsMapping?: {} | undefined
  actionsDefinition?: {} | undefined
}
type MitigationActionName = string
type MitigationActionNameList = MitigationActionName[]
type StartAuditMitigationActionsTaskResponse = { taskId?: {} | undefined }
type ResourceIdentifier = {
  deviceCertificateId?: {} | undefined
  caCertificateId?: {} | undefined
  cognitoIdentityPoolId?: {} | undefined
  clientId?: {} | undefined
  policyVersionIdentifier?:
    | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
    | undefined
  account?: {} | undefined
  iamRoleArn?: {} | undefined
  roleAliasArn?: {} | undefined
  issuerCertificateIdentifier?:
    | {
        issuerCertificateSubject?: {} | undefined
        issuerId?: {} | undefined
        issuerCertificateSerialNumber?: {} | undefined
      }
    | undefined
  deviceCertificateArn?: {} | undefined
}
type DescribeAuditSuppressionResponse = {
  checkName?: AuditCheckName | undefined
  resourceIdentifier?: ResourceIdentifier | undefined
  expirationDate?: {} | undefined
  suppressIndefinitely?: {} | undefined
  description?: {} | undefined
}
type DescribeAuditTaskResponse = {
  taskStatus?: {} | undefined
  taskType?: {} | undefined
  taskStartTime?: {} | undefined
  taskStatistics?:
    | {
        totalChecks?: {} | undefined
        inProgressChecks?: {} | undefined
        waitingForDataCollectionChecks?: {} | undefined
        compliantChecks?: {} | undefined
        nonCompliantChecks?: {} | undefined
        failedChecks?: {} | undefined
        canceledChecks?: {} | undefined
      }
    | undefined
  scheduledAuditName?: {} | undefined
  auditDetails?: {} | undefined
}
type DescribeDetectMitigationActionsTaskResponse = {
  taskSummary?:
    | {
        taskId?: {} | undefined
        taskStatus?: {} | undefined
        taskStartTime?: {} | undefined
        taskEndTime?: {} | undefined
        target?:
          | {
              violationIds?: {} | undefined
              securityProfileName?: {} | undefined
              behaviorName?: {} | undefined
            }
          | undefined
        violationEventOccurrenceRange?: { startTime: {}; endTime: {} } | undefined
        onlyActiveViolationsIncluded?: {} | undefined
        suppressedAlertsIncluded?: {} | undefined
        actionsDefinition?: {} | undefined
        taskStatistics?:
          | {
              actionsExecuted?: {} | undefined
              actionsSkipped?: {} | undefined
              actionsFailed?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type StartDetectMitigationActionsTaskResponse = { taskId?: {} | undefined }
type DescribeEndpointResponse = { endpointAddress?: {} | undefined }
type DescribeEventConfigurationsResponse = {
  eventConfigurations?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
}
type Configuration = { Enabled?: {} | undefined }
type UpdateEventConfigurationsResponse = { [x: string]: unknown }
type DescribeIndexResponse = {
  indexName?: {} | undefined
  indexStatus?: {} | undefined
  schema?: {} | undefined
}
type DescribeJobExecutionResponse = {
  execution?:
    | {
        jobId?: {} | undefined
        status?: {} | undefined
        forceCanceled?: {} | undefined
        statusDetails?: { detailsMap?: {} | undefined } | undefined
        thingArn?: {} | undefined
        queuedAt?: {} | undefined
        startedAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        executionNumber?: {} | undefined
        versionNumber?: {} | undefined
        approximateSecondsBeforeTimedOut?: {} | undefined
      }
    | undefined
}
type DescribeManagedJobTemplateResponse = {
  templateName?: {} | undefined
  templateArn?: {} | undefined
  description?: {} | undefined
  templateVersion?: {} | undefined
  environments?: {} | undefined
  documentParameters?: {} | undefined
  document?: {} | undefined
}
type DescribeThingRegistrationTaskResponse = {
  taskId?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedDate?: {} | undefined
  templateBody?: {} | undefined
  inputFileBucket?: {} | undefined
  inputFileKey?: {} | undefined
  roleArn?: {} | undefined
  status?: {} | undefined
  message?: {} | undefined
  successCount?: {} | undefined
  failureCount?: {} | undefined
  percentageProgress?: {} | undefined
}
type GetBehaviorModelTrainingSummariesResponse = {
  summaries?: {} | undefined
  nextToken?: {} | undefined
}
type GetBucketsAggregationResponse = { totalCount?: {} | undefined; buckets?: {} | undefined }
type GetCardinalityResponse = { cardinality?: {} | undefined }
type GetEffectivePoliciesResponse = { effectivePolicies?: {} | undefined }
type GetIndexingConfigurationResponse = {
  thingIndexingConfiguration?:
    | {
        thingIndexingMode: {}
        thingConnectivityIndexingMode?: {} | undefined
        deviceDefenderIndexingMode?: {} | undefined
        namedShadowIndexingMode?: {} | undefined
        managedFields?: {} | undefined
        customFields?: {} | undefined
        filter?: { namedShadowNames?: {} | undefined } | undefined
      }
    | undefined
  thingGroupIndexingConfiguration?:
    | { thingGroupIndexingMode: {}; managedFields?: {} | undefined; customFields?: {} | undefined }
    | undefined
}
type UpdateIndexingConfigurationResponse = { [x: string]: unknown }
type GetJobDocumentResponse = { document?: {} | undefined }
type GetLoggingOptionsResponse = { roleArn?: {} | undefined; logLevel?: {} | undefined }
type Percent = number
type GetPercentilesResponse = { percentiles?: {} | undefined }
type GetStatisticsResponse = {
  statistics?:
    | {
        count?: {} | undefined
        average?: {} | undefined
        sum?: {} | undefined
        minimum?: {} | undefined
        maximum?: {} | undefined
        sumOfSquares?: {} | undefined
        variance?: {} | undefined
        stdDeviation?: {} | undefined
      }
    | undefined
}
type GetV2LoggingOptionsResponse = {
  roleArn?: {} | undefined
  defaultLogLevel?: {} | undefined
  disableAllLogs?: {} | undefined
}
type ListActiveViolationsResponse = {
  activeViolations?: {} | undefined
  nextToken?: {} | undefined
}
type ListAttachedPoliciesResponse = { policies?: {} | undefined; nextMarker?: {} | undefined }
type ListAuditFindingsResponse = { findings?: {} | undefined; nextToken?: {} | undefined }
type ListAuditMitigationActionsExecutionsResponse = {
  actionsExecutions?: {} | undefined
  nextToken?: {} | undefined
}
type ListAuditMitigationActionsTasksResponse = {
  tasks?: {} | undefined
  nextToken?: {} | undefined
}
type ListAuditSuppressionsResponse = { suppressions?: {} | undefined; nextToken?: {} | undefined }
type ListAuditTasksResponse = { tasks?: {} | undefined; nextToken?: {} | undefined }
type ListAuthorizersResponse = { authorizers?: {} | undefined; nextMarker?: {} | undefined }
type ListBillingGroupsResponse = { billingGroups?: {} | undefined; nextToken?: {} | undefined }
type ListCACertificatesResponse = { certificates?: {} | undefined; nextMarker?: {} | undefined }
type ListCertificatesByCAResponse = { certificates?: {} | undefined; nextMarker?: {} | undefined }
type ListCustomMetricsResponse = { metricNames?: {} | undefined; nextToken?: {} | undefined }
type ListDetectMitigationActionsExecutionsResponse = {
  actionsExecutions?: {} | undefined
  nextToken?: {} | undefined
}
type ListDetectMitigationActionsTasksResponse = {
  tasks?: {} | undefined
  nextToken?: {} | undefined
}
type ListDimensionsResponse = { dimensionNames?: {} | undefined; nextToken?: {} | undefined }
type ListDomainConfigurationsResponse = {
  domainConfigurations?: {} | undefined
  nextMarker?: {} | undefined
}
type ListFleetMetricsResponse = { fleetMetrics?: {} | undefined; nextToken?: {} | undefined }
type ListIndicesResponse = { indexNames?: {} | undefined; nextToken?: {} | undefined }
type ListJobExecutionsForJobResponse = {
  executionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListJobExecutionsForThingResponse = {
  executionSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListJobTemplatesResponse = { jobTemplates?: {} | undefined; nextToken?: {} | undefined }
type ListJobsResponse = { jobs?: {} | undefined; nextToken?: {} | undefined }
type ListManagedJobTemplatesResponse = {
  managedJobTemplates?: {} | undefined
  nextToken?: {} | undefined
}
type ListMetricValuesResponse = { metricDatumList?: {} | undefined; nextToken?: {} | undefined }
type ListMitigationActionsResponse = {
  actionIdentifiers?: {} | undefined
  nextToken?: {} | undefined
}
type ListOTAUpdatesResponse = { otaUpdates?: {} | undefined; nextToken?: {} | undefined }
type ListOutgoingCertificatesResponse = {
  outgoingCertificates?: {} | undefined
  nextMarker?: {} | undefined
}
type ListPoliciesResponse = { policies?: {} | undefined; nextMarker?: {} | undefined }
type ListPolicyPrincipalsResponse = { principals?: {} | undefined; nextMarker?: {} | undefined }
type ListPrincipalPoliciesResponse = { policies?: {} | undefined; nextMarker?: {} | undefined }
type ListPrincipalThingsResponse = { things?: {} | undefined; nextToken?: {} | undefined }
type ListRelatedResourcesForAuditFindingResponse = {
  relatedResources?: {} | undefined
  nextToken?: {} | undefined
}
type ListRoleAliasesResponse = { roleAliases?: {} | undefined; nextMarker?: {} | undefined }
type ListScheduledAuditsResponse = { scheduledAudits?: {} | undefined; nextToken?: {} | undefined }
type ListSecurityProfilesResponse = {
  securityProfileIdentifiers?: {} | undefined
  nextToken?: {} | undefined
}
type ListSecurityProfilesForTargetResponse = {
  securityProfileTargetMappings?: {} | undefined
  nextToken?: {} | undefined
}
type ListStreamsResponse = { streams?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined; nextToken?: {} | undefined }
type ListTargetsForPolicyResponse = { targets?: {} | undefined; nextMarker?: {} | undefined }
type ListTargetsForSecurityProfileResponse = {
  securityProfileTargets?: {} | undefined
  nextToken?: {} | undefined
}
type ListThingGroupsResponse = { thingGroups?: {} | undefined; nextToken?: {} | undefined }
type ListThingGroupsForThingResponse = { thingGroups?: {} | undefined; nextToken?: {} | undefined }
type ListThingPrincipalsResponse = { principals?: {} | undefined; nextToken?: {} | undefined }
type ListThingRegistrationTaskReportsResponse = {
  resourceLinks?: {} | undefined
  reportType?: {} | undefined
  nextToken?: {} | undefined
}
type ListThingRegistrationTasksResponse = { taskIds?: {} | undefined; nextToken?: {} | undefined }
type StartThingRegistrationTaskResponse = { taskId?: {} | undefined }
type ListThingTypesResponse = { thingTypes?: {} | undefined; nextToken?: {} | undefined }
type ListThingsResponse = { things?: {} | undefined; nextToken?: {} | undefined }
type RegisterThingResponse = { certificatePem?: {} | undefined; resourceArns?: {} | undefined }
type ListThingsInBillingGroupResponse = { things?: {} | undefined; nextToken?: {} | undefined }
type ListThingsInThingGroupResponse = { things?: {} | undefined; nextToken?: {} | undefined }
type ListTopicRulesResponse = { rules?: {} | undefined; nextToken?: {} | undefined }
type ListV2LoggingLevelsResponse = {
  logTargetConfigurations?: {} | undefined
  nextToken?: {} | undefined
}
type ListViolationEventsResponse = { violationEvents?: {} | undefined; nextToken?: {} | undefined }
type PutVerificationStateOnViolationResponse = { [x: string]: unknown }
type RegisterCACertificateResponse = {
  certificateArn?: {} | undefined
  certificateId?: {} | undefined
}
type RegisterCertificateResponse = {
  certificateArn?: {} | undefined
  certificateId?: {} | undefined
}
type RegisterCertificateWithoutCAResponse = {
  certificateArn?: {} | undefined
  certificateId?: {} | undefined
}
type RemoveThingFromBillingGroupResponse = { [x: string]: unknown }
type RemoveThingFromThingGroupResponse = { [x: string]: unknown }
type SearchIndexResponse = {
  nextToken?: {} | undefined
  things?: {} | undefined
  thingGroups?: {} | undefined
}
type StartOnDemandAuditTaskResponse = { taskId?: {} | undefined }
type StopThingRegistrationTaskResponse = { [x: string]: unknown }
type TagResourceResponse = { [x: string]: unknown }
type AuthInfo = { actionType?: {} | undefined; resources: {} }
type PolicyName = string
type TestAuthorizationResponse = { authResults?: {} | undefined }
type TestInvokeAuthorizerResponse = {
  isAuthenticated?: {} | undefined
  principalId?: {} | undefined
  policyDocuments?: {} | undefined
  refreshAfterInSeconds?: {} | undefined
  disconnectAfterInSeconds?: {} | undefined
}
type TransferCertificateResponse = { transferredCertificateArn?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAuditSuppressionResponse = { [x: string]: unknown }
type ThingGroupName = string
type UpdateThingGroupsForThingResponse = { [x: string]: unknown }
type ValidateSecurityProfileBehaviorsResponse = {
  valid?: {} | undefined
  validationErrors?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accept-certificate-transfer/:certificateId': {
      $patch: {
        input: { param: { certificateId: string } } & {
          query: { setAsActive?: boolean | undefined }
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/billing-groups/addThingToBillingGroup': {
      $put: {
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
            billingGroupName?: string | undefined
            billingGroupArn?: string | undefined
            thingName?: string | undefined
            thingArn?: string | undefined
          }
        }
        output: AddThingToBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-groups/addThingToThingGroup': {
      $put: {
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
            thingGroupName?: string | undefined
            thingGroupArn?: string | undefined
            thingName?: string | undefined
            thingArn?: string | undefined
            overrideDynamicGroups?: boolean | undefined
          }
        }
        output: AddThingToThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/targets': {
      $post: {
        input: { param: { jobId: string } } & { query: { namespaceId?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { targets: TargetArn[]; comment?: string | undefined } }
        output: AssociateTargetsWithJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/target-policies/:policyName': {
      $put: {
        input: { param: { policyName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { target: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { policyName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { target: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/principal-policies/:policyName#x-amzn-iot-principal': {
      $put: {
        input: { param: { policyName: string } } & {
          header: {
            'x-amzn-iot-principal': string
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
      $delete: {
        input: { param: { policyName: string } } & {
          header: {
            'x-amzn-iot-principal': string
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
    }
  } & {
    '/security-profiles/:securityProfileName/targets#securityProfileTargetArn': {
      $put: {
        input: { param: { securityProfileName: string } } & {
          query: { securityProfileTargetArn: string }
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
        output: AttachSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { securityProfileName: string } } & {
          query: { securityProfileTargetArn: string }
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
        output: DetachSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/principals#x-amzn-principal': {
      $put: {
        input: { param: { thingName: string } } & {
          header: {
            'x-amzn-principal': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AttachThingPrincipalResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { thingName: string } } & {
          header: {
            'x-amzn-principal': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DetachThingPrincipalResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/mitigationactions/tasks/:taskId/cancel': {
      $put: {
        input: { param: { taskId: string } } & {
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
        output: CancelAuditMitigationActionsTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/tasks/:taskId/cancel': {
      $put: {
        input: { param: { taskId: string } } & {
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
        output: CancelAuditTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cancel-certificate-transfer/:certificateId': {
      $patch: {
        input: { param: { certificateId: string } } & {
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
    }
  } & {
    '/detect/mitigationactions/tasks/:taskId/cancel': {
      $put: {
        input: { param: { taskId: string } } & {
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
        output: CancelDetectMitigationActionsTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/cancel': {
      $put: {
        input: { param: { jobId: string } } & { query: { force?: boolean | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { reasonCode?: string | undefined; comment?: string | undefined } }
        output: CancelJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/jobs/:jobId/cancel': {
      $put: {
        input: { param: { jobId: string; thingName: string } } & {
          query: { force?: boolean | undefined }
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
            expectedVersion?: number | undefined
            statusDetails?: { [x: string]: DetailsValue } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/default-authorizer': {
      $delete: {
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
        output: ClearDefaultAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        output: DescribeDefaultAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: { authorizerName: string } }
        output: SetDefaultAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/confirmdestination/:confirmationToken': {
      $get: {
        input: { param: { confirmationToken: string } } & {
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
        output: ConfirmTopicRuleDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/suppressions/create': {
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
            checkName: string
            resourceIdentifier: {
              deviceCertificateId?: {} | undefined
              caCertificateId?: {} | undefined
              cognitoIdentityPoolId?: {} | undefined
              clientId?: {} | undefined
              policyVersionIdentifier?:
                | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                | undefined
              account?: {} | undefined
              iamRoleArn?: {} | undefined
              roleAliasArn?: {} | undefined
              issuerCertificateIdentifier?:
                | {
                    issuerCertificateSubject?: {} | undefined
                    issuerId?: {} | undefined
                    issuerCertificateSerialNumber?: {} | undefined
                  }
                | undefined
              deviceCertificateArn?: {} | undefined
            }
            expirationDate?: string | undefined
            suppressIndefinitely?: boolean | undefined
            description?: string | undefined
            clientRequestToken: string
          }
        }
        output: CreateAuditSuppressionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/authorizer/:authorizerName': {
      $post: {
        input: { param: { authorizerName: string } } & {
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
            authorizerFunctionArn: string
            tokenKeyName?: string | undefined
            tokenSigningPublicKeys?: { [x: string]: KeyValue } | undefined
            status?: 'ACTIVE' | 'INACTIVE' | undefined
            tags?: Tag[] | undefined
            signingDisabled?: boolean | undefined
            enableCachingForHttp?: boolean | undefined
          }
        }
        output: CreateAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { authorizerName: string } } & {
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
        output: DeleteAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { authorizerName: string } } & {
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
        output: DescribeAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { authorizerName: string } } & {
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
            authorizerFunctionArn?: string | undefined
            tokenKeyName?: string | undefined
            tokenSigningPublicKeys?: { [x: string]: KeyValue } | undefined
            status?: 'ACTIVE' | 'INACTIVE' | undefined
            enableCachingForHttp?: boolean | undefined
          }
        }
        output: UpdateAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-groups/:billingGroupName': {
      $post: {
        input: { param: { billingGroupName: string } } & {
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
            billingGroupProperties?: { billingGroupDescription?: {} | undefined } | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { billingGroupName: string } } & {
          query: { expectedVersion?: number | undefined }
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
        output: DeleteBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { billingGroupName: string } } & {
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
        output: DescribeBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { billingGroupName: string } } & {
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
            billingGroupProperties: { billingGroupDescription?: {} | undefined }
            expectedVersion?: number | undefined
          }
        }
        output: UpdateBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates': {
      $post: {
        input: { query: { setAsActive?: boolean | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { certificateSigningRequest: string } }
        output: CreateCertificateFromCsrResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            marker?: string | undefined
            isAscendingOrder?: boolean | undefined
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
        output: ListCertificatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-metric/:metricName': {
      $post: {
        input: { param: { metricName: string } } & {
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
            displayName?: string | undefined
            metricType: 'string-list' | 'ip-address-list' | 'number-list' | 'number'
            tags?: Tag[] | undefined
            clientRequestToken: string
          }
        }
        output: CreateCustomMetricResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { metricName: string } } & {
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
        output: DeleteCustomMetricResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { metricName: string } } & {
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
        output: DescribeCustomMetricResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { metricName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { displayName: string } }
        output: UpdateCustomMetricResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dimensions/:name': {
      $post: {
        input: { param: { name: string } } & {
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
            type: 'TOPIC_FILTER'
            stringValues: DimensionStringValue[]
            tags?: Tag[] | undefined
            clientRequestToken: string
          }
        }
        output: CreateDimensionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } } & {
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
        output: DeleteDimensionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        output: DescribeDimensionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { stringValues: DimensionStringValue[] } }
        output: UpdateDimensionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domainConfigurations/:domainConfigurationName': {
      $post: {
        input: { param: { domainConfigurationName: string } } & {
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
            domainName?: string | undefined
            serverCertificateArns?: AcmCertificateArn[] | undefined
            validationCertificateArn?: string | undefined
            authorizerConfig?:
              | { defaultAuthorizerName?: {} | undefined; allowAuthorizerOverride?: {} | undefined }
              | undefined
            serviceType?: 'DATA' | 'CREDENTIAL_PROVIDER' | 'JOBS' | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateDomainConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { domainConfigurationName: string } } & {
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
        output: DeleteDomainConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { domainConfigurationName: string } } & {
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
        output: DescribeDomainConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { domainConfigurationName: string } } & {
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
            authorizerConfig?:
              | { defaultAuthorizerName?: {} | undefined; allowAuthorizerOverride?: {} | undefined }
              | undefined
            domainConfigurationStatus?: 'ENABLED' | 'DISABLED' | undefined
            removeAuthorizerConfig?: boolean | undefined
          }
        }
        output: UpdateDomainConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dynamic-thing-groups/:thingGroupName': {
      $post: {
        input: { param: { thingGroupName: string } } & {
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
            thingGroupProperties?:
              | {
                  thingGroupDescription?: {} | undefined
                  attributePayload?:
                    | { attributes?: {} | undefined; merge?: {} | undefined }
                    | undefined
                }
              | undefined
            indexName?: string | undefined
            queryString: string
            queryVersion?: string | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateDynamicThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { thingGroupName: string } } & {
          query: { expectedVersion?: number | undefined }
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
        output: DeleteDynamicThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { thingGroupName: string } } & {
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
            thingGroupProperties: {
              thingGroupDescription?: {} | undefined
              attributePayload?: { attributes?: {} | undefined; merge?: {} | undefined } | undefined
            }
            expectedVersion?: number | undefined
            indexName?: string | undefined
            queryString?: string | undefined
            queryVersion?: string | undefined
          }
        }
        output: UpdateDynamicThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fleet-metric/:metricName': {
      $put: {
        input: { param: { metricName: string } } & {
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
            queryString: string
            aggregationType: { name?: {} | undefined; values?: {} | undefined }
            period: number
            aggregationField: string
            description?: string | undefined
            queryVersion?: string | undefined
            indexName?: string | undefined
            unit?:
              | 'Seconds'
              | 'Microseconds'
              | 'Milliseconds'
              | 'Bytes'
              | 'Kilobytes'
              | 'Megabytes'
              | 'Gigabytes'
              | 'Terabytes'
              | 'Bits'
              | 'Kilobits'
              | 'Megabits'
              | 'Gigabits'
              | 'Terabits'
              | 'Percent'
              | 'Count'
              | 'Bytes/Second'
              | 'Kilobytes/Second'
              | 'Megabytes/Second'
              | 'Gigabytes/Second'
              | 'Terabytes/Second'
              | 'Bits/Second'
              | 'Kilobits/Second'
              | 'Megabits/Second'
              | 'Gigabits/Second'
              | 'Terabits/Second'
              | 'Count/Second'
              | 'None'
              | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateFleetMetricResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { metricName: string } } & {
          query: { expectedVersion?: number | undefined }
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { metricName: string } } & {
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
        output: DescribeFleetMetricResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { metricName: string } } & {
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
            queryString?: string | undefined
            aggregationType?: { name?: {} | undefined; values?: {} | undefined } | undefined
            period?: number | undefined
            aggregationField?: string | undefined
            description?: string | undefined
            queryVersion?: string | undefined
            indexName: string
            unit?:
              | 'Seconds'
              | 'Microseconds'
              | 'Milliseconds'
              | 'Bytes'
              | 'Kilobytes'
              | 'Megabytes'
              | 'Gigabytes'
              | 'Terabytes'
              | 'Bits'
              | 'Kilobits'
              | 'Megabits'
              | 'Gigabits'
              | 'Terabits'
              | 'Percent'
              | 'Count'
              | 'Bytes/Second'
              | 'Kilobytes/Second'
              | 'Megabytes/Second'
              | 'Gigabytes/Second'
              | 'Terabytes/Second'
              | 'Bits/Second'
              | 'Kilobits/Second'
              | 'Megabits/Second'
              | 'Gigabits/Second'
              | 'Terabits/Second'
              | 'Count/Second'
              | 'None'
              | undefined
            expectedVersion?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/jobs/:jobId': {
      $put: {
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
        } & {
          json: {
            targets: TargetArn[]
            documentSource?: string | undefined
            document?: string | undefined
            description?: string | undefined
            presignedUrlConfig?:
              | { roleArn?: {} | undefined; expiresInSec?: {} | undefined }
              | undefined
            targetSelection?: 'CONTINUOUS' | 'SNAPSHOT' | undefined
            jobExecutionsRolloutConfig?:
              | {
                  maximumPerMinute?: {} | undefined
                  exponentialRate?:
                    | {
                        baseRatePerMinute: {}
                        incrementFactor: {}
                        rateIncreaseCriteria: {
                          numberOfNotifiedThings?: {} | undefined
                          numberOfSucceededThings?: {} | undefined
                        }
                      }
                    | undefined
                }
              | undefined
            abortConfig?: { criteriaList?: {} | undefined } | undefined
            timeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
            tags?: Tag[] | undefined
            namespaceId?: string | undefined
            jobTemplateArn?: string | undefined
            jobExecutionsRetryConfig?: { criteriaList?: {} | undefined } | undefined
            documentParameters?: { [x: string]: ParameterValue } | undefined
            schedulingConfig?:
              | {
                  startTime?: {} | undefined
                  endTime?: {} | undefined
                  endBehavior?: {} | undefined
                  maintenanceWindows?: {} | undefined
                }
              | undefined
          }
        }
        output: CreateJobResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { jobId: string } } & {
          query: { force?: boolean | undefined; namespaceId?: string | undefined }
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
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
        output: DescribeJobResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { jobId: string } } & { query: { namespaceId?: string | undefined } } & {
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
            description?: string | undefined
            presignedUrlConfig?:
              | { roleArn?: {} | undefined; expiresInSec?: {} | undefined }
              | undefined
            jobExecutionsRolloutConfig?:
              | {
                  maximumPerMinute?: {} | undefined
                  exponentialRate?:
                    | {
                        baseRatePerMinute: {}
                        incrementFactor: {}
                        rateIncreaseCriteria: {
                          numberOfNotifiedThings?: {} | undefined
                          numberOfSucceededThings?: {} | undefined
                        }
                      }
                    | undefined
                }
              | undefined
            abortConfig?: { criteriaList?: {} | undefined } | undefined
            timeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
            jobExecutionsRetryConfig?: { criteriaList?: {} | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/job-templates/:jobTemplateId': {
      $put: {
        input: { param: { jobTemplateId: string } } & {
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
            jobArn?: string | undefined
            documentSource?: string | undefined
            document?: string | undefined
            description: string
            presignedUrlConfig?:
              | { roleArn?: {} | undefined; expiresInSec?: {} | undefined }
              | undefined
            jobExecutionsRolloutConfig?:
              | {
                  maximumPerMinute?: {} | undefined
                  exponentialRate?:
                    | {
                        baseRatePerMinute: {}
                        incrementFactor: {}
                        rateIncreaseCriteria: {
                          numberOfNotifiedThings?: {} | undefined
                          numberOfSucceededThings?: {} | undefined
                        }
                      }
                    | undefined
                }
              | undefined
            abortConfig?: { criteriaList?: {} | undefined } | undefined
            timeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
            tags?: Tag[] | undefined
            jobExecutionsRetryConfig?: { criteriaList?: {} | undefined } | undefined
            maintenanceWindows?: MaintenanceWindow[] | undefined
          }
        }
        output: CreateJobTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { jobTemplateId: string } } & {
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
      $get: {
        input: { param: { jobTemplateId: string } } & {
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
        output: DescribeJobTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/keys-and-certificate': {
      $post: {
        input: { query: { setAsActive?: boolean | undefined } } & {
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
        output: CreateKeysAndCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mitigationactions/actions/:actionName': {
      $post: {
        input: { param: { actionName: string } } & {
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
            roleArn: string
            actionParams: {
              updateDeviceCertificateParams?: { action: {} } | undefined
              updateCACertificateParams?: { action: {} } | undefined
              addThingsToThingGroupParams?:
                | { thingGroupNames: {}; overrideDynamicGroups?: {} | undefined }
                | undefined
              replaceDefaultPolicyVersionParams?: { templateName: {} } | undefined
              enableIoTLoggingParams?: { roleArnForLogging: {}; logLevel: {} } | undefined
              publishFindingToSnsParams?: { topicArn: {} } | undefined
            }
            tags?: Tag[] | undefined
          }
        }
        output: CreateMitigationActionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { actionName: string } } & {
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
        output: DeleteMitigationActionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { actionName: string } } & {
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
        output: DescribeMitigationActionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { actionName: string } } & {
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
            roleArn?: string | undefined
            actionParams?:
              | {
                  updateDeviceCertificateParams?: { action: {} } | undefined
                  updateCACertificateParams?: { action: {} } | undefined
                  addThingsToThingGroupParams?:
                    | { thingGroupNames: {}; overrideDynamicGroups?: {} | undefined }
                    | undefined
                  replaceDefaultPolicyVersionParams?: { templateName: {} } | undefined
                  enableIoTLoggingParams?: { roleArnForLogging: {}; logLevel: {} } | undefined
                  publishFindingToSnsParams?: { topicArn: {} } | undefined
                }
              | undefined
          }
        }
        output: UpdateMitigationActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/otaUpdates/:otaUpdateId': {
      $post: {
        input: { param: { otaUpdateId: string } } & {
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
            description?: string | undefined
            targets: Target[]
            protocols?: Protocol[] | undefined
            targetSelection?: 'CONTINUOUS' | 'SNAPSHOT' | undefined
            awsJobExecutionsRolloutConfig?:
              | {
                  maximumPerMinute?: {} | undefined
                  exponentialRate?:
                    | {
                        baseRatePerMinute: {}
                        incrementFactor: {}
                        rateIncreaseCriteria: {
                          numberOfNotifiedThings?: {} | undefined
                          numberOfSucceededThings?: {} | undefined
                        }
                      }
                    | undefined
                }
              | undefined
            awsJobPresignedUrlConfig?: { expiresInSec?: {} | undefined } | undefined
            awsJobAbortConfig?: { abortCriteriaList?: {} | undefined } | undefined
            awsJobTimeoutConfig?: { inProgressTimeoutInMinutes?: {} | undefined } | undefined
            files: OTAUpdateFile[]
            roleArn: string
            additionalParameters?: { [x: string]: Value } | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateOTAUpdateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { otaUpdateId: string } } & {
          query: { deleteStream?: boolean | undefined; forceDeleteAWSJob?: boolean | undefined }
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
        output: DeleteOTAUpdateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { otaUpdateId: string } } & {
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
        output: GetOTAUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policies/:policyName': {
      $post: {
        input: { param: { policyName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { policyDocument: string; tags?: Tag[] | undefined } }
        output: CreatePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { policyName: string } } & {
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
      $get: {
        input: { param: { policyName: string } } & {
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
        output: GetPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policies/:policyName/version': {
      $post: {
        input: { param: { policyName: string } } & {
          query: { setAsDefault?: boolean | undefined }
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
        } & { json: { policyDocument: string } }
        output: CreatePolicyVersionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { policyName: string } } & {
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
        output: ListPolicyVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/provisioning-templates/:templateName/provisioning-claim': {
      $post: {
        input: { param: { templateName: string } } & {
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
        output: CreateProvisioningClaimResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/provisioning-templates': {
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
            templateName: string
            description?: string | undefined
            templateBody: string
            enabled?: boolean | undefined
            provisioningRoleArn: string
            preProvisioningHook?:
              | { payloadVersion?: {} | undefined; targetArn?: {} | undefined }
              | undefined
            tags?: Tag[] | undefined
            type?: 'FLEET_PROVISIONING' | 'JITP' | undefined
          }
        }
        output: CreateProvisioningTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListProvisioningTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/provisioning-templates/:templateName/versions': {
      $post: {
        input: { param: { templateName: string } } & {
          query: { setAsDefault?: boolean | undefined }
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
        } & { json: { templateBody: string } }
        output: CreateProvisioningTemplateVersionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { templateName: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListProvisioningTemplateVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/role-aliases/:roleAlias': {
      $post: {
        input: { param: { roleAlias: string } } & {
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
            roleArn: string
            credentialDurationSeconds?: number | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateRoleAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { roleAlias: string } } & {
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
        output: DeleteRoleAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { roleAlias: string } } & {
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
        output: DescribeRoleAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { roleAlias: string } } & {
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
          json: { roleArn?: string | undefined; credentialDurationSeconds?: number | undefined }
        }
        output: UpdateRoleAliasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/scheduledaudits/:scheduledAuditName': {
      $post: {
        input: { param: { scheduledAuditName: string } } & {
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
            frequency: 'DAILY' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY'
            dayOfMonth?: string | undefined
            dayOfWeek?: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | undefined
            targetCheckNames: AuditCheckName[]
            tags?: Tag[] | undefined
          }
        }
        output: CreateScheduledAuditResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { scheduledAuditName: string } } & {
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
        output: DeleteScheduledAuditResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { scheduledAuditName: string } } & {
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
        output: DescribeScheduledAuditResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { scheduledAuditName: string } } & {
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
            frequency?: 'DAILY' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' | undefined
            dayOfMonth?: string | undefined
            dayOfWeek?: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | undefined
            targetCheckNames?: AuditCheckName[] | undefined
          }
        }
        output: UpdateScheduledAuditResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-profiles/:securityProfileName': {
      $post: {
        input: { param: { securityProfileName: string } } & {
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
            securityProfileDescription?: string | undefined
            behaviors?: Behavior[] | undefined
            alertTargets?: { [x: string]: AlertTarget } | undefined
            additionalMetricsToRetain?: BehaviorMetric[] | undefined
            additionalMetricsToRetainV2?: MetricToRetain[] | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { securityProfileName: string } } & {
          query: { expectedVersion?: number | undefined }
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
        output: DeleteSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { securityProfileName: string } } & {
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
        output: DescribeSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { securityProfileName: string } } & {
          query: { expectedVersion?: number | undefined }
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
            securityProfileDescription?: string | undefined
            behaviors?: Behavior[] | undefined
            alertTargets?: { [x: string]: AlertTarget } | undefined
            additionalMetricsToRetain?: BehaviorMetric[] | undefined
            additionalMetricsToRetainV2?: MetricToRetain[] | undefined
            deleteBehaviors?: boolean | undefined
            deleteAlertTargets?: boolean | undefined
            deleteAdditionalMetricsToRetain?: boolean | undefined
          }
        }
        output: UpdateSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/streams/:streamId': {
      $post: {
        input: { param: { streamId: string } } & {
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
            description?: string | undefined
            files: StreamFile[]
            roleArn: string
            tags?: Tag[] | undefined
          }
        }
        output: CreateStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { streamId: string } } & {
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
        output: DeleteStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { streamId: string } } & {
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
        output: DescribeStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { streamId: string } } & {
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
            description?: string | undefined
            files?: StreamFile[] | undefined
            roleArn?: string | undefined
          }
        }
        output: UpdateStreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName': {
      $post: {
        input: { param: { thingName: string } } & {
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
            thingTypeName?: string | undefined
            attributePayload?: { attributes?: {} | undefined; merge?: {} | undefined } | undefined
            billingGroupName?: string | undefined
          }
        }
        output: CreateThingResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { thingName: string } } & {
          query: { expectedVersion?: number | undefined }
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
        output: DeleteThingResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { thingName: string } } & {
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
        output: DescribeThingResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { thingName: string } } & {
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
            thingTypeName?: string | undefined
            attributePayload?: { attributes?: {} | undefined; merge?: {} | undefined } | undefined
            expectedVersion?: number | undefined
            removeThingType?: boolean | undefined
          }
        }
        output: UpdateThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-groups/:thingGroupName': {
      $post: {
        input: { param: { thingGroupName: string } } & {
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
            parentGroupName?: string | undefined
            thingGroupProperties?:
              | {
                  thingGroupDescription?: {} | undefined
                  attributePayload?:
                    | { attributes?: {} | undefined; merge?: {} | undefined }
                    | undefined
                }
              | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { thingGroupName: string } } & {
          query: { expectedVersion?: number | undefined }
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
        output: DeleteThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { thingGroupName: string } } & {
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
        output: DescribeThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { thingGroupName: string } } & {
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
            thingGroupProperties: {
              thingGroupDescription?: {} | undefined
              attributePayload?: { attributes?: {} | undefined; merge?: {} | undefined } | undefined
            }
            expectedVersion?: number | undefined
          }
        }
        output: UpdateThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-types/:thingTypeName': {
      $post: {
        input: { param: { thingTypeName: string } } & {
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
            thingTypeProperties?:
              | { thingTypeDescription?: {} | undefined; searchableAttributes?: {} | undefined }
              | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateThingTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { thingTypeName: string } } & {
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
        output: DeleteThingTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { thingTypeName: string } } & {
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
        output: DescribeThingTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules/:ruleName': {
      $post: {
        input: { param: { ruleName: string } } & {
          header: {
            'x-amz-tagging'?: string | undefined
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
            topicRulePayload: {
              sql?: {} | undefined
              description?: {} | undefined
              actions?: {} | undefined
              ruleDisabled?: {} | undefined
              awsIotSqlVersion?: {} | undefined
              errorAction?:
                | {
                    dynamoDB?:
                      | {
                          tableName: {}
                          roleArn: {}
                          operation?: {} | undefined
                          hashKeyField: {}
                          hashKeyValue: {}
                          hashKeyType?: {} | undefined
                          rangeKeyField?: {} | undefined
                          rangeKeyValue?: {} | undefined
                          rangeKeyType?: {} | undefined
                          payloadField?: {} | undefined
                        }
                      | undefined
                    dynamoDBv2?: { roleArn: {}; putItem: { tableName: {} } } | undefined
                    lambda?: { functionArn: {} } | undefined
                    sns?: { targetArn: {}; roleArn: {}; messageFormat?: {} | undefined } | undefined
                    sqs?: { roleArn: {}; queueUrl: {}; useBase64?: {} | undefined } | undefined
                    kinesis?:
                      | { roleArn: {}; streamName: {}; partitionKey?: {} | undefined }
                      | undefined
                    republish?:
                      | {
                          roleArn: {}
                          topic: {}
                          qos?: {} | undefined
                          headers?:
                            | {
                                payloadFormatIndicator?: {} | undefined
                                contentType?: {} | undefined
                                responseTopic?: {} | undefined
                                correlationData?: {} | undefined
                                messageExpiry?: {} | undefined
                                userProperties?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                    s3?:
                      | { roleArn: {}; bucketName: {}; key: {}; cannedAcl?: {} | undefined }
                      | undefined
                    firehose?:
                      | {
                          roleArn: {}
                          deliveryStreamName: {}
                          separator?: {} | undefined
                          batchMode?: {} | undefined
                        }
                      | undefined
                    cloudwatchMetric?:
                      | {
                          roleArn: {}
                          metricNamespace: {}
                          metricName: {}
                          metricValue: {}
                          metricUnit: {}
                          metricTimestamp?: {} | undefined
                        }
                      | undefined
                    cloudwatchAlarm?:
                      | { roleArn: {}; alarmName: {}; stateReason: {}; stateValue: {} }
                      | undefined
                    cloudwatchLogs?:
                      | { roleArn: {}; logGroupName: {}; batchMode?: {} | undefined }
                      | undefined
                    elasticsearch?:
                      | { roleArn: {}; endpoint: {}; index: {}; type: {}; id: {} }
                      | undefined
                    salesforce?: { token: {}; url: {} } | undefined
                    iotAnalytics?:
                      | {
                          channelArn?: {} | undefined
                          channelName?: {} | undefined
                          batchMode?: {} | undefined
                          roleArn?: {} | undefined
                        }
                      | undefined
                    iotEvents?:
                      | {
                          inputName: {}
                          messageId?: {} | undefined
                          batchMode?: {} | undefined
                          roleArn: {}
                        }
                      | undefined
                    iotSiteWise?: { putAssetPropertyValueEntries: {}; roleArn: {} } | undefined
                    stepFunctions?:
                      | { executionNamePrefix?: {} | undefined; stateMachineName: {}; roleArn: {} }
                      | undefined
                    timestream?:
                      | {
                          roleArn: {}
                          databaseName: {}
                          tableName: {}
                          dimensions: {}
                          timestamp?: { value: {}; unit: {} } | undefined
                        }
                      | undefined
                    http?:
                      | {
                          url: {}
                          confirmationUrl?: {} | undefined
                          headers?: {} | undefined
                          auth?:
                            | {
                                sigv4?:
                                  | { signingRegion: {}; serviceName: {}; roleArn: {} }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    kafka?:
                      | {
                          destinationArn: {}
                          topic: {}
                          key?: {} | undefined
                          partition?: {} | undefined
                          clientProperties: {}
                        }
                      | undefined
                    openSearch?:
                      | { roleArn: {}; endpoint: {}; index: {}; type: {}; id: {} }
                      | undefined
                    location?:
                      | {
                          roleArn: {}
                          trackerName: {}
                          deviceId: {}
                          timestamp?: { value: {}; unit?: {} | undefined } | undefined
                          latitude: {}
                          longitude: {}
                        }
                      | undefined
                  }
                | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { ruleName: string } } & {
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
      $get: {
        input: { param: { ruleName: string } } & {
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
        output: GetTopicRuleResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ruleName: string } } & {
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
            topicRulePayload: {
              sql?: {} | undefined
              description?: {} | undefined
              actions?: {} | undefined
              ruleDisabled?: {} | undefined
              awsIotSqlVersion?: {} | undefined
              errorAction?:
                | {
                    dynamoDB?:
                      | {
                          tableName: {}
                          roleArn: {}
                          operation?: {} | undefined
                          hashKeyField: {}
                          hashKeyValue: {}
                          hashKeyType?: {} | undefined
                          rangeKeyField?: {} | undefined
                          rangeKeyValue?: {} | undefined
                          rangeKeyType?: {} | undefined
                          payloadField?: {} | undefined
                        }
                      | undefined
                    dynamoDBv2?: { roleArn: {}; putItem: { tableName: {} } } | undefined
                    lambda?: { functionArn: {} } | undefined
                    sns?: { targetArn: {}; roleArn: {}; messageFormat?: {} | undefined } | undefined
                    sqs?: { roleArn: {}; queueUrl: {}; useBase64?: {} | undefined } | undefined
                    kinesis?:
                      | { roleArn: {}; streamName: {}; partitionKey?: {} | undefined }
                      | undefined
                    republish?:
                      | {
                          roleArn: {}
                          topic: {}
                          qos?: {} | undefined
                          headers?:
                            | {
                                payloadFormatIndicator?: {} | undefined
                                contentType?: {} | undefined
                                responseTopic?: {} | undefined
                                correlationData?: {} | undefined
                                messageExpiry?: {} | undefined
                                userProperties?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                    s3?:
                      | { roleArn: {}; bucketName: {}; key: {}; cannedAcl?: {} | undefined }
                      | undefined
                    firehose?:
                      | {
                          roleArn: {}
                          deliveryStreamName: {}
                          separator?: {} | undefined
                          batchMode?: {} | undefined
                        }
                      | undefined
                    cloudwatchMetric?:
                      | {
                          roleArn: {}
                          metricNamespace: {}
                          metricName: {}
                          metricValue: {}
                          metricUnit: {}
                          metricTimestamp?: {} | undefined
                        }
                      | undefined
                    cloudwatchAlarm?:
                      | { roleArn: {}; alarmName: {}; stateReason: {}; stateValue: {} }
                      | undefined
                    cloudwatchLogs?:
                      | { roleArn: {}; logGroupName: {}; batchMode?: {} | undefined }
                      | undefined
                    elasticsearch?:
                      | { roleArn: {}; endpoint: {}; index: {}; type: {}; id: {} }
                      | undefined
                    salesforce?: { token: {}; url: {} } | undefined
                    iotAnalytics?:
                      | {
                          channelArn?: {} | undefined
                          channelName?: {} | undefined
                          batchMode?: {} | undefined
                          roleArn?: {} | undefined
                        }
                      | undefined
                    iotEvents?:
                      | {
                          inputName: {}
                          messageId?: {} | undefined
                          batchMode?: {} | undefined
                          roleArn: {}
                        }
                      | undefined
                    iotSiteWise?: { putAssetPropertyValueEntries: {}; roleArn: {} } | undefined
                    stepFunctions?:
                      | { executionNamePrefix?: {} | undefined; stateMachineName: {}; roleArn: {} }
                      | undefined
                    timestream?:
                      | {
                          roleArn: {}
                          databaseName: {}
                          tableName: {}
                          dimensions: {}
                          timestamp?: { value: {}; unit: {} } | undefined
                        }
                      | undefined
                    http?:
                      | {
                          url: {}
                          confirmationUrl?: {} | undefined
                          headers?: {} | undefined
                          auth?:
                            | {
                                sigv4?:
                                  | { signingRegion: {}; serviceName: {}; roleArn: {} }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    kafka?:
                      | {
                          destinationArn: {}
                          topic: {}
                          key?: {} | undefined
                          partition?: {} | undefined
                          clientProperties: {}
                        }
                      | undefined
                    openSearch?:
                      | { roleArn: {}; endpoint: {}; index: {}; type: {}; id: {} }
                      | undefined
                    location?:
                      | {
                          roleArn: {}
                          trackerName: {}
                          deviceId: {}
                          timestamp?: { value: {}; unit?: {} | undefined } | undefined
                          latitude: {}
                          longitude: {}
                        }
                      | undefined
                  }
                | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/destinations': {
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
            destinationConfiguration: {
              httpUrlConfiguration?: { confirmationUrl: {} } | undefined
              vpcConfiguration?:
                | { subnetIds: {}; securityGroups?: {} | undefined; vpcId: {}; roleArn: {} }
                | undefined
            }
          }
        }
        output: CreateTopicRuleDestinationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListTopicRuleDestinationsResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
            arn: string
            status: 'ENABLED' | 'IN_PROGRESS' | 'DISABLED' | 'ERROR' | 'DELETING'
          }
        }
        output: UpdateTopicRuleDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/configuration': {
      $delete: {
        input: { query: { deleteScheduledAudits?: boolean | undefined } } & {
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
        output: DeleteAccountAuditConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        output: DescribeAccountAuditConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
            roleArn?: string | undefined
            auditNotificationTargetConfigurations?:
              | { [x: string]: AuditNotificationTarget }
              | undefined
            auditCheckConfigurations?: { [x: string]: AuditCheckConfiguration } | undefined
          }
        }
        output: UpdateAccountAuditConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/suppressions/delete': {
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
            checkName: string
            resourceIdentifier: {
              deviceCertificateId?: {} | undefined
              caCertificateId?: {} | undefined
              cognitoIdentityPoolId?: {} | undefined
              clientId?: {} | undefined
              policyVersionIdentifier?:
                | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                | undefined
              account?: {} | undefined
              iamRoleArn?: {} | undefined
              roleAliasArn?: {} | undefined
              issuerCertificateIdentifier?:
                | {
                    issuerCertificateSubject?: {} | undefined
                    issuerId?: {} | undefined
                    issuerCertificateSerialNumber?: {} | undefined
                  }
                | undefined
              deviceCertificateArn?: {} | undefined
            }
          }
        }
        output: DeleteAuditSuppressionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cacertificate/:caCertificateId': {
      $delete: {
        input: { param: { caCertificateId: string } } & {
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
        output: DeleteCACertificateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { caCertificateId: string } } & {
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
        output: DescribeCACertificateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { caCertificateId: string } } & {
          query: {
            newStatus?: 'ACTIVE' | 'INACTIVE' | undefined
            newAutoRegistrationStatus?: 'ENABLE' | 'DISABLE' | undefined
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
        } & {
          json: {
            registrationConfig?:
              | {
                  templateBody?: {} | undefined
                  roleArn?: {} | undefined
                  templateName?: {} | undefined
                }
              | undefined
            removeAutoRegistration?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/certificates/:certificateId': {
      $delete: {
        input: { param: { certificateId: string } } & {
          query: { forceDelete?: boolean | undefined }
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { certificateId: string } } & {
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
        output: DescribeCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/jobs/:jobId/executionNumber/:executionNumber': {
      $delete: {
        input: { param: { jobId: string; thingName: string; executionNumber: number } } & {
          query: { force?: boolean | undefined; namespaceId?: string | undefined }
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/policies/:policyName/version/:policyVersionId': {
      $delete: {
        input: { param: { policyName: string; policyVersionId: string } } & {
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
      $get: {
        input: { param: { policyName: string; policyVersionId: string } } & {
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
        output: GetPolicyVersionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { policyName: string; policyVersionId: string } } & {
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
    }
  } & {
    '/provisioning-templates/:templateName': {
      $delete: {
        input: { param: { templateName: string } } & {
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
        output: DeleteProvisioningTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { templateName: string } } & {
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
        output: DescribeProvisioningTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { templateName: string } } & {
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
            description?: string | undefined
            enabled?: boolean | undefined
            defaultVersionId?: number | undefined
            provisioningRoleArn?: string | undefined
            preProvisioningHook?:
              | { payloadVersion?: {} | undefined; targetArn?: {} | undefined }
              | undefined
            removePreProvisioningHook?: boolean | undefined
          }
        }
        output: UpdateProvisioningTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/provisioning-templates/:templateName/versions/:versionId': {
      $delete: {
        input: { param: { templateName: string; versionId: number } } & {
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
        output: DeleteProvisioningTemplateVersionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { templateName: string; versionId: number } } & {
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
        output: DescribeProvisioningTemplateVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/registrationcode': {
      $delete: {
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
        output: DeleteRegistrationCodeResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        output: GetRegistrationCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/destinations/:arn': {
      $delete: {
        input: { param: { arn: string } } & {
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
        output: DeleteTopicRuleDestinationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { arn: string } } & {
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
        output: GetTopicRuleDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2LoggingLevel#targetType&targetName': {
      $delete: {
        input: {
          query: {
            targetType: 'DEFAULT' | 'THING_GROUP' | 'CLIENT_ID' | 'SOURCE_IP' | 'PRINCIPAL_ID'
            targetName: string
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/thing-types/:thingTypeName/deprecate': {
      $post: {
        input: { param: { thingTypeName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { undoDeprecate?: boolean | undefined } }
        output: DeprecateThingTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/findings/:findingId': {
      $get: {
        input: { param: { findingId: string } } & {
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
        output: DescribeAuditFindingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/mitigationactions/tasks/:taskId': {
      $get: {
        input: { param: { taskId: string } } & {
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
        output: DescribeAuditMitigationActionsTaskResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { taskId: string } } & {
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
            target: {
              auditTaskId?: {} | undefined
              findingIds?: {} | undefined
              auditCheckToReasonCodeFilter?: {} | undefined
            }
            auditCheckToActionsMapping: { [x: string]: MitigationActionNameList }
            clientRequestToken: string
          }
        }
        output: StartAuditMitigationActionsTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/suppressions/describe': {
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
            checkName: string
            resourceIdentifier: {
              deviceCertificateId?: {} | undefined
              caCertificateId?: {} | undefined
              cognitoIdentityPoolId?: {} | undefined
              clientId?: {} | undefined
              policyVersionIdentifier?:
                | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                | undefined
              account?: {} | undefined
              iamRoleArn?: {} | undefined
              roleAliasArn?: {} | undefined
              issuerCertificateIdentifier?:
                | {
                    issuerCertificateSubject?: {} | undefined
                    issuerId?: {} | undefined
                    issuerCertificateSerialNumber?: {} | undefined
                  }
                | undefined
              deviceCertificateArn?: {} | undefined
            }
          }
        }
        output: DescribeAuditSuppressionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/tasks/:taskId': {
      $get: {
        input: { param: { taskId: string } } & {
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
        output: DescribeAuditTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detect/mitigationactions/tasks/:taskId': {
      $get: {
        input: { param: { taskId: string } } & {
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
        output: DescribeDetectMitigationActionsTaskResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { taskId: string } } & {
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
            target: {
              violationIds?: {} | undefined
              securityProfileName?: {} | undefined
              behaviorName?: {} | undefined
            }
            actions: MitigationActionName[]
            violationEventOccurrenceRange?:
              | { startTime?: {} | undefined; endTime?: {} | undefined }
              | undefined
            includeOnlyActiveViolations?: boolean | undefined
            includeSuppressedAlerts?: boolean | undefined
            clientRequestToken: string
          }
        }
        output: StartDetectMitigationActionsTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/endpoint': {
      $get: {
        input: { query: { endpointType?: string | undefined } } & {
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
        output: DescribeEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/event-configurations': {
      $get: {
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
        output: DescribeEventConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
        } & { json: { eventConfigurations?: { [x: string]: Configuration } | undefined } }
        output: UpdateEventConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indices/:indexName': {
      $get: {
        input: { param: { indexName: string } } & {
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
        output: DescribeIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/jobs/:jobId': {
      $get: {
        input: { param: { jobId: string; thingName: string } } & {
          query: { executionNumber?: number | undefined }
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
        output: DescribeJobExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/managed-job-templates/:templateName': {
      $get: {
        input: { param: { templateName: string } } & {
          query: { templateVersion?: string | undefined }
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
        output: DescribeManagedJobTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-registration-tasks/:taskId': {
      $get: {
        input: { param: { taskId: string } } & {
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
        output: DescribeThingRegistrationTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules/:ruleName/disable': {
      $post: {
        input: { param: { ruleName: string } } & {
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
    }
  } & {
    '/rules/:ruleName/enable': {
      $post: {
        input: { param: { ruleName: string } } & {
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
    }
  } & {
    '/behavior-model-training/summaries': {
      $get: {
        input: {
          query: {
            securityProfileName?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: GetBehaviorModelTrainingSummariesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indices/buckets': {
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
            indexName?: string | undefined
            queryString: string
            aggregationField: string
            queryVersion?: string | undefined
            bucketsAggregationType: {
              termsAggregation?: { maxBuckets?: {} | undefined } | undefined
            }
          }
        }
        output: GetBucketsAggregationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indices/cardinality': {
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
            indexName?: string | undefined
            queryString: string
            aggregationField?: string | undefined
            queryVersion?: string | undefined
          }
        }
        output: GetCardinalityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/effective-policies': {
      $post: {
        input: { query: { thingName?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { principal?: string | undefined; cognitoIdentityPoolId?: string | undefined } }
        output: GetEffectivePoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indexing/config': {
      $get: {
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
        output: GetIndexingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
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
            thingIndexingConfiguration?:
              | {
                  thingIndexingMode?: {} | undefined
                  thingConnectivityIndexingMode?: {} | undefined
                  deviceDefenderIndexingMode?: {} | undefined
                  namedShadowIndexingMode?: {} | undefined
                  managedFields?: {} | undefined
                  customFields?: {} | undefined
                  filter?: { namedShadowNames?: {} | undefined } | undefined
                }
              | undefined
            thingGroupIndexingConfiguration?:
              | {
                  thingGroupIndexingMode?: {} | undefined
                  managedFields?: {} | undefined
                  customFields?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateIndexingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/job-document': {
      $get: {
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
        output: GetJobDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/loggingOptions': {
      $get: {
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
        output: GetLoggingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
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
          json: { loggingOptionsPayload: { roleArn?: {} | undefined; logLevel?: {} | undefined } }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/indices/percentiles': {
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
            indexName?: string | undefined
            queryString: string
            aggregationField?: string | undefined
            queryVersion?: string | undefined
            percents?: Percent[] | undefined
          }
        }
        output: GetPercentilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indices/statistics': {
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
            indexName?: string | undefined
            queryString: string
            aggregationField?: string | undefined
            queryVersion?: string | undefined
          }
        }
        output: GetStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2LoggingOptions': {
      $get: {
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
        output: GetV2LoggingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
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
            roleArn?: string | undefined
            defaultLogLevel?: 'DEBUG' | 'INFO' | 'ERROR' | 'WARN' | 'DISABLED' | undefined
            disableAllLogs?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/active-violations': {
      $get: {
        input: {
          query: {
            thingName?: string | undefined
            securityProfileName?: string | undefined
            behaviorCriteriaType?: 'STATIC' | 'STATISTICAL' | 'MACHINE_LEARNING' | undefined
            listSuppressedAlerts?: boolean | undefined
            verificationState?:
              | 'FALSE_POSITIVE'
              | 'BENIGN_POSITIVE'
              | 'TRUE_POSITIVE'
              | 'UNKNOWN'
              | undefined
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
        output: ListActiveViolationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attached-policies/:target': {
      $post: {
        input: { param: { target: string } } & {
          query: {
            recursive?: boolean | undefined
            marker?: string | undefined
            pageSize?: number | undefined
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
        output: ListAttachedPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/findings': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            taskId?: string | undefined
            checkName?: string | undefined
            resourceIdentifier?:
              | {
                  deviceCertificateId?: {} | undefined
                  caCertificateId?: {} | undefined
                  cognitoIdentityPoolId?: {} | undefined
                  clientId?: {} | undefined
                  policyVersionIdentifier?:
                    | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                    | undefined
                  account?: {} | undefined
                  iamRoleArn?: {} | undefined
                  roleAliasArn?: {} | undefined
                  issuerCertificateIdentifier?:
                    | {
                        issuerCertificateSubject?: {} | undefined
                        issuerId?: {} | undefined
                        issuerCertificateSerialNumber?: {} | undefined
                      }
                    | undefined
                  deviceCertificateArn?: {} | undefined
                }
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            startTime?: string | undefined
            endTime?: string | undefined
            listSuppressedFindings?: boolean | undefined
          }
        }
        output: ListAuditFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/mitigationactions/executions#taskId&findingId': {
      $get: {
        input: {
          query: {
            taskId: string
            actionStatus?:
              | 'IN_PROGRESS'
              | 'COMPLETED'
              | 'FAILED'
              | 'CANCELED'
              | 'SKIPPED'
              | 'PENDING'
              | undefined
            findingId: string
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListAuditMitigationActionsExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/mitigationactions/tasks#startTime&endTime': {
      $get: {
        input: {
          query: {
            auditTaskId?: string | undefined
            findingId?: string | undefined
            taskStatus?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CANCELED' | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            startTime: string
            endTime: string
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
        output: ListAuditMitigationActionsTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/suppressions/list': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            checkName?: string | undefined
            resourceIdentifier?:
              | {
                  deviceCertificateId?: {} | undefined
                  caCertificateId?: {} | undefined
                  cognitoIdentityPoolId?: {} | undefined
                  clientId?: {} | undefined
                  policyVersionIdentifier?:
                    | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                    | undefined
                  account?: {} | undefined
                  iamRoleArn?: {} | undefined
                  roleAliasArn?: {} | undefined
                  issuerCertificateIdentifier?:
                    | {
                        issuerCertificateSubject?: {} | undefined
                        issuerId?: {} | undefined
                        issuerCertificateSerialNumber?: {} | undefined
                      }
                    | undefined
                  deviceCertificateArn?: {} | undefined
                }
              | undefined
            ascendingOrder?: boolean | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: ListAuditSuppressionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/tasks#startTime&endTime': {
      $get: {
        input: {
          query: {
            startTime: string
            endTime: string
            taskType?: 'ON_DEMAND_AUDIT_TASK' | 'SCHEDULED_AUDIT_TASK' | undefined
            taskStatus?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CANCELED' | undefined
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
        output: ListAuditTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/authorizers/': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            marker?: string | undefined
            isAscendingOrder?: boolean | undefined
            status?: 'ACTIVE' | 'INACTIVE' | undefined
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
        output: ListAuthorizersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-groups': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            namePrefixFilter?: string | undefined
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
        output: ListBillingGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cacertificates': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            marker?: string | undefined
            isAscendingOrder?: boolean | undefined
            templateName?: string | undefined
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
        output: ListCACertificatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates-by-ca/:caCertificateId': {
      $get: {
        input: { param: { caCertificateId: string } } & {
          query: {
            pageSize?: number | undefined
            marker?: string | undefined
            isAscendingOrder?: boolean | undefined
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
        output: ListCertificatesByCAResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-metrics': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListCustomMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detect/mitigationactions/executions': {
      $get: {
        input: {
          query: {
            taskId?: string | undefined
            violationId?: string | undefined
            thingName?: string | undefined
            startTime?: string | undefined
            endTime?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListDetectMitigationActionsExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/detect/mitigationactions/tasks#startTime&endTime': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            startTime: string
            endTime: string
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
        output: ListDetectMitigationActionsTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dimensions': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListDimensionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domainConfigurations': {
      $get: {
        input: {
          query: {
            marker?: string | undefined
            pageSize?: number | undefined
            serviceType?: 'DATA' | 'CREDENTIAL_PROVIDER' | 'JOBS' | undefined
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
        output: ListDomainConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fleet-metrics': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListFleetMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indices': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListIndicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/things': {
      $get: {
        input: { param: { jobId: string } } & {
          query: {
            status?:
              | 'QUEUED'
              | 'IN_PROGRESS'
              | 'SUCCEEDED'
              | 'FAILED'
              | 'TIMED_OUT'
              | 'REJECTED'
              | 'REMOVED'
              | 'CANCELED'
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListJobExecutionsForJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/jobs': {
      $get: {
        input: { param: { thingName: string } } & {
          query: {
            status?:
              | 'QUEUED'
              | 'IN_PROGRESS'
              | 'SUCCEEDED'
              | 'FAILED'
              | 'TIMED_OUT'
              | 'REJECTED'
              | 'REMOVED'
              | 'CANCELED'
              | undefined
            namespaceId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            jobId?: string | undefined
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
        output: ListJobExecutionsForThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/job-templates': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListJobTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
      $get: {
        input: {
          query: {
            status?:
              | 'IN_PROGRESS'
              | 'CANCELED'
              | 'COMPLETED'
              | 'DELETION_IN_PROGRESS'
              | 'SCHEDULED'
              | undefined
            targetSelection?: 'CONTINUOUS' | 'SNAPSHOT' | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            thingGroupName?: string | undefined
            thingGroupId?: string | undefined
            namespaceId?: string | undefined
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/managed-job-templates': {
      $get: {
        input: {
          query: {
            templateName?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListManagedJobTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metric-values#thingName&metricName&startTime&endTime': {
      $get: {
        input: {
          query: {
            thingName: string
            metricName: string
            dimensionName?: string | undefined
            dimensionValueOperator?: 'IN' | 'NOT_IN' | undefined
            startTime: string
            endTime: string
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListMetricValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mitigationactions/actions': {
      $get: {
        input: {
          query: {
            actionType?:
              | 'UPDATE_DEVICE_CERTIFICATE'
              | 'UPDATE_CA_CERTIFICATE'
              | 'ADD_THINGS_TO_THING_GROUP'
              | 'REPLACE_DEFAULT_POLICY_VERSION'
              | 'ENABLE_IOT_LOGGING'
              | 'PUBLISH_FINDING_TO_SNS'
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListMitigationActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/otaUpdates': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            otaUpdateStatus?:
              | 'CREATE_PENDING'
              | 'CREATE_IN_PROGRESS'
              | 'CREATE_COMPLETE'
              | 'CREATE_FAILED'
              | 'DELETE_IN_PROGRESS'
              | 'DELETE_FAILED'
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
        output: ListOTAUpdatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates-out-going': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            marker?: string | undefined
            isAscendingOrder?: boolean | undefined
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
        output: ListOutgoingCertificatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policies': {
      $get: {
        input: {
          query: {
            marker?: string | undefined
            pageSize?: number | undefined
            isAscendingOrder?: boolean | undefined
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
        output: ListPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policy-principals#x-amzn-iot-policy': {
      $get: {
        input: {
          query: {
            marker?: string | undefined
            pageSize?: number | undefined
            isAscendingOrder?: boolean | undefined
          }
        } & {
          header: {
            'x-amzn-iot-policy': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPolicyPrincipalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/principal-policies#x-amzn-iot-principal': {
      $get: {
        input: {
          query: {
            marker?: string | undefined
            pageSize?: number | undefined
            isAscendingOrder?: boolean | undefined
          }
        } & {
          header: {
            'x-amzn-iot-principal': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPrincipalPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/principals/things#x-amzn-principal': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'x-amzn-principal': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPrincipalThingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/relatedResources#findingId': {
      $get: {
        input: {
          query: {
            findingId: string
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
        output: ListRelatedResourcesForAuditFindingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/role-aliases': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            marker?: string | undefined
            isAscendingOrder?: boolean | undefined
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
        output: ListRoleAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/scheduledaudits': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListScheduledAuditsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-profiles': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            dimensionName?: string | undefined
            metricName?: string | undefined
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
        output: ListSecurityProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-profiles-for-target#securityProfileTargetArn': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            recursive?: boolean | undefined
            securityProfileTargetArn: string
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
        output: ListSecurityProfilesForTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/streams': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            isAscendingOrder?: boolean | undefined
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
        output: ListStreamsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags#resourceArn': {
      $get: {
        input: { query: { resourceArn: string; nextToken?: string | undefined } } & {
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
    }
  } & {
    '/policy-targets/:policyName': {
      $post: {
        input: { param: { policyName: string } } & {
          query: { marker?: string | undefined; pageSize?: number | undefined }
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
        output: ListTargetsForPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-profiles/:securityProfileName/targets': {
      $get: {
        input: { param: { securityProfileName: string } } & {
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
        output: ListTargetsForSecurityProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-groups': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            parentGroup?: string | undefined
            namePrefixFilter?: string | undefined
            recursive?: boolean | undefined
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
        output: ListThingGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/thing-groups': {
      $get: {
        input: { param: { thingName: string } } & {
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
        output: ListThingGroupsForThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/principals': {
      $get: {
        input: { param: { thingName: string } } & {
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
        output: ListThingPrincipalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-registration-tasks/:taskId/reports#reportType': {
      $get: {
        input: { param: { taskId: string } } & {
          query: {
            reportType: 'ERRORS' | 'RESULTS'
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
        output: ListThingRegistrationTaskReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-registration-tasks': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            status?: 'InProgress' | 'Completed' | 'Failed' | 'Cancelled' | 'Cancelling' | undefined
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
        output: ListThingRegistrationTasksResponse
        outputFormat: 'json'
        status: 200
      }
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
            templateBody: string
            inputFileBucket: string
            inputFileKey: string
            roleArn: string
          }
        }
        output: StartThingRegistrationTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-types': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            thingTypeName?: string | undefined
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
        output: ListThingTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            attributeName?: string | undefined
            attributeValue?: string | undefined
            thingTypeName?: string | undefined
            usePrefixAttributeValue?: boolean | undefined
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
        output: ListThingsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: { templateBody: string; parameters?: { [x: string]: Value } | undefined } }
        output: RegisterThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-groups/:billingGroupName/things': {
      $get: {
        input: { param: { billingGroupName: string } } & {
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
        output: ListThingsInBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-groups/:thingGroupName/things': {
      $get: {
        input: { param: { thingGroupName: string } } & {
          query: {
            recursive?: boolean | undefined
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
        output: ListThingsInThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules': {
      $get: {
        input: {
          query: {
            topic?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            ruleDisabled?: boolean | undefined
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
        output: ListTopicRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2LoggingLevel': {
      $get: {
        input: {
          query: {
            targetType?:
              | 'DEFAULT'
              | 'THING_GROUP'
              | 'CLIENT_ID'
              | 'SOURCE_IP'
              | 'PRINCIPAL_ID'
              | undefined
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
        output: ListV2LoggingLevelsResponse
        outputFormat: 'json'
        status: 200
      }
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
            logTarget: { targetType?: {} | undefined; targetName?: {} | undefined }
            logLevel: 'DEBUG' | 'INFO' | 'ERROR' | 'WARN' | 'DISABLED'
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/violation-events#startTime&endTime': {
      $get: {
        input: {
          query: {
            startTime: string
            endTime: string
            thingName?: string | undefined
            securityProfileName?: string | undefined
            behaviorCriteriaType?: 'STATIC' | 'STATISTICAL' | 'MACHINE_LEARNING' | undefined
            listSuppressedAlerts?: boolean | undefined
            verificationState?:
              | 'FALSE_POSITIVE'
              | 'BENIGN_POSITIVE'
              | 'TRUE_POSITIVE'
              | 'UNKNOWN'
              | undefined
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
        output: ListViolationEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/violations/verification-state/:violationId': {
      $post: {
        input: { param: { violationId: string } } & {
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
            verificationState: 'FALSE_POSITIVE' | 'BENIGN_POSITIVE' | 'TRUE_POSITIVE' | 'UNKNOWN'
            verificationStateDescription?: string | undefined
          }
        }
        output: PutVerificationStateOnViolationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cacertificate': {
      $post: {
        input: {
          query: { setAsActive?: boolean | undefined; allowAutoRegistration?: boolean | undefined }
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
            caCertificate: string
            verificationCertificate?: string | undefined
            registrationConfig?:
              | {
                  templateBody?: {} | undefined
                  roleArn?: {} | undefined
                  templateName?: {} | undefined
                }
              | undefined
            tags?: Tag[] | undefined
            certificateMode?: 'DEFAULT' | 'SNI_ONLY' | undefined
          }
        }
        output: RegisterCACertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificate/register': {
      $post: {
        input: { query: { setAsActive?: boolean | undefined } } & {
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
            certificatePem: string
            caCertificatePem?: string | undefined
            status?:
              | 'ACTIVE'
              | 'INACTIVE'
              | 'REVOKED'
              | 'PENDING_TRANSFER'
              | 'REGISTER_INACTIVE'
              | 'PENDING_ACTIVATION'
              | undefined
          }
        }
        output: RegisterCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificate/register-no-ca': {
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
            certificatePem: string
            status?:
              | 'ACTIVE'
              | 'INACTIVE'
              | 'REVOKED'
              | 'PENDING_TRANSFER'
              | 'REGISTER_INACTIVE'
              | 'PENDING_ACTIVATION'
              | undefined
          }
        }
        output: RegisterCertificateWithoutCAResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reject-certificate-transfer/:certificateId': {
      $patch: {
        input: { param: { certificateId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { rejectReason?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/billing-groups/removeThingFromBillingGroup': {
      $put: {
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
            billingGroupName?: string | undefined
            billingGroupArn?: string | undefined
            thingName?: string | undefined
            thingArn?: string | undefined
          }
        }
        output: RemoveThingFromBillingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-groups/removeThingFromThingGroup': {
      $put: {
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
            thingGroupName?: string | undefined
            thingGroupArn?: string | undefined
            thingName?: string | undefined
            thingArn?: string | undefined
          }
        }
        output: RemoveThingFromThingGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indices/search': {
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
            indexName?: string | undefined
            queryString: string
            nextToken?: string | undefined
            maxResults?: number | undefined
            queryVersion?: string | undefined
          }
        }
        output: SearchIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/tasks': {
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
        } & { json: { targetCheckNames: AuditCheckName[] } }
        output: StartOnDemandAuditTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thing-registration-tasks/:taskId/cancel': {
      $put: {
        input: { param: { taskId: string } } & {
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
        output: StopThingRegistrationTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags': {
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
        } & { json: { resourceArn: string; tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/test-authorization': {
      $post: {
        input: { query: { clientId?: string | undefined } } & {
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
            principal?: string | undefined
            cognitoIdentityPoolId?: string | undefined
            authInfos: AuthInfo[]
            policyNamesToAdd?: PolicyName[] | undefined
            policyNamesToSkip?: PolicyName[] | undefined
          }
        }
        output: TestAuthorizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/authorizer/:authorizerName/test': {
      $post: {
        input: { param: { authorizerName: string } } & {
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
            token?: string | undefined
            tokenSignature?: string | undefined
            httpContext?: { headers?: {} | undefined; queryString?: {} | undefined } | undefined
            mqttContext?:
              | { username?: {} | undefined; password?: {} | undefined; clientId?: {} | undefined }
              | undefined
            tlsContext?: { serverName?: {} | undefined } | undefined
          }
        }
        output: TestInvokeAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transfer-certificate/:certificateId#targetAwsAccount': {
      $patch: {
        input: { param: { certificateId: string } } & { query: { targetAwsAccount: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { transferMessage?: string | undefined } }
        output: TransferCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/untag': {
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
        } & { json: { resourceArn: string; tagKeys: TagKey[] } }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit/suppressions/update': {
      $patch: {
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
            checkName: string
            resourceIdentifier: {
              deviceCertificateId?: {} | undefined
              caCertificateId?: {} | undefined
              cognitoIdentityPoolId?: {} | undefined
              clientId?: {} | undefined
              policyVersionIdentifier?:
                | { policyName?: {} | undefined; policyVersionId?: {} | undefined }
                | undefined
              account?: {} | undefined
              iamRoleArn?: {} | undefined
              roleAliasArn?: {} | undefined
              issuerCertificateIdentifier?:
                | {
                    issuerCertificateSubject?: {} | undefined
                    issuerId?: {} | undefined
                    issuerCertificateSerialNumber?: {} | undefined
                  }
                | undefined
              deviceCertificateArn?: {} | undefined
            }
            expirationDate?: string | undefined
            suppressIndefinitely?: boolean | undefined
            description?: string | undefined
          }
        }
        output: UpdateAuditSuppressionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificates/:certificateId#newStatus': {
      $put: {
        input: { param: { certificateId: string } } & {
          query: {
            newStatus:
              | 'ACTIVE'
              | 'INACTIVE'
              | 'REVOKED'
              | 'PENDING_TRANSFER'
              | 'REGISTER_INACTIVE'
              | 'PENDING_ACTIVATION'
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/thing-groups/updateThingGroupsForThing': {
      $put: {
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
            thingName?: string | undefined
            thingGroupsToAdd?: ThingGroupName[] | undefined
            thingGroupsToRemove?: ThingGroupName[] | undefined
            overrideDynamicGroups?: boolean | undefined
          }
        }
        output: UpdateThingGroupsForThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-profile-behaviors/validate': {
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
        } & { json: { behaviors: Behavior[] } }
        output: ValidateSecurityProfileBehaviorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
