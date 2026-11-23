type AllocateStaticIpRequest = { staticIpName: {} }
type AllocateStaticIpResult = { operations?: {} | undefined }
type AttachCertificateToDistributionRequest = { distributionName: {}; certificateName: {} }
type AttachCertificateToDistributionResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type AttachDiskRequest = {
  diskName: {}
  instanceName: {}
  diskPath: {}
  autoMounting?: {} | undefined
}
type AttachDiskResult = { operations?: {} | undefined }
type AttachInstancesToLoadBalancerRequest = { loadBalancerName: {}; instanceNames: {} }
type AttachInstancesToLoadBalancerResult = { operations?: {} | undefined }
type AttachLoadBalancerTlsCertificateRequest = { loadBalancerName: {}; certificateName: {} }
type AttachLoadBalancerTlsCertificateResult = { operations?: {} | undefined }
type AttachStaticIpRequest = { staticIpName: {}; instanceName: {} }
type AttachStaticIpResult = { operations?: {} | undefined }
type CloseInstancePublicPortsRequest = {
  portInfo: {
    fromPort?: {} | undefined
    toPort?: {} | undefined
    protocol?: {} | undefined
    cidrs?: {} | undefined
    ipv6Cidrs?: {} | undefined
    cidrListAliases?: {} | undefined
  }
  instanceName: {}
}
type CloseInstancePublicPortsResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type CopySnapshotRequest = {
  sourceSnapshotName?: {} | undefined
  sourceResourceName?: {} | undefined
  restoreDate?: {} | undefined
  useLatestRestorableAutoSnapshot?: {} | undefined
  targetSnapshotName: {}
  sourceRegion: {}
}
type CopySnapshotResult = { operations?: {} | undefined }
type CreateBucketRequest = {
  bucketName: {}
  bundleId: {}
  tags?: {} | undefined
  enableObjectVersioning?: {} | undefined
}
type CreateBucketResult = {
  bucket?:
    | {
        resourceType?: {} | undefined
        accessRules?:
          | { getObject?: {} | undefined; allowPublicOverrides?: {} | undefined }
          | undefined
        arn?: {} | undefined
        bundleId?: {} | undefined
        createdAt?: {} | undefined
        url?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        name?: {} | undefined
        supportCode?: {} | undefined
        tags?: {} | undefined
        objectVersioning?: {} | undefined
        ableToUpdateBundle?: {} | undefined
        readonlyAccessAccounts?: {} | undefined
        resourcesReceivingAccess?: {} | undefined
        state?: { code?: {} | undefined; message?: {} | undefined } | undefined
        accessLogConfig?:
          | { enabled: {}; destination?: {} | undefined; prefix?: {} | undefined }
          | undefined
      }
    | undefined
  operations?: {} | undefined
}
type CreateBucketAccessKeyRequest = { bucketName: {} }
type CreateBucketAccessKeyResult = {
  accessKey?:
    | {
        accessKeyId?: {} | undefined
        secretAccessKey?: {} | undefined
        status?: {} | undefined
        createdAt?: {} | undefined
        lastUsed?:
          | { lastUsedDate?: {} | undefined; region?: {} | undefined; serviceName?: {} | undefined }
          | undefined
      }
    | undefined
  operations?: {} | undefined
}
type CreateCertificateRequest = {
  certificateName: {}
  domainName: {}
  subjectAlternativeNames?: {} | undefined
  tags?: {} | undefined
}
type CreateCertificateResult = {
  certificate?:
    | {
        certificateArn?: {} | undefined
        certificateName?: {} | undefined
        domainName?: {} | undefined
        certificateDetail?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              domainName?: {} | undefined
              status?: {} | undefined
              serialNumber?: {} | undefined
              subjectAlternativeNames?: {} | undefined
              domainValidationRecords?: {} | undefined
              requestFailureReason?: {} | undefined
              inUseResourceCount?: {} | undefined
              keyAlgorithm?: {} | undefined
              createdAt?: {} | undefined
              issuedAt?: {} | undefined
              issuerCA?: {} | undefined
              notBefore?: {} | undefined
              notAfter?: {} | undefined
              eligibleToRenew?: {} | undefined
              renewalSummary?:
                | {
                    domainValidationRecords?: {} | undefined
                    renewalStatus?: {} | undefined
                    renewalStatusReason?: {} | undefined
                    updatedAt?: {} | undefined
                  }
                | undefined
              revokedAt?: {} | undefined
              revocationReason?: {} | undefined
              tags?: {} | undefined
              supportCode?: {} | undefined
            }
          | undefined
        tags?: {} | undefined
      }
    | undefined
  operations?: {} | undefined
}
type CreateCloudFormationStackRequest = { instances: {} }
type CreateCloudFormationStackResult = { operations?: {} | undefined }
type CreateContactMethodRequest = { protocol: {}; contactEndpoint: {} }
type CreateContactMethodResult = { operations?: {} | undefined }
type CreateContainerServiceRequest = {
  serviceName: {}
  power: {}
  scale: {}
  tags?: {} | undefined
  publicDomainNames?: {} | undefined
  deployment?:
    | {
        containers?: {} | undefined
        publicEndpoint?:
          | {
              containerName: {}
              containerPort: {}
              healthCheck?:
                | {
                    healthyThreshold?: {} | undefined
                    unhealthyThreshold?: {} | undefined
                    timeoutSeconds?: {} | undefined
                    intervalSeconds?: {} | undefined
                    path?: {} | undefined
                    successCodes?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  privateRegistryAccess?:
    | { ecrImagePullerRole?: { isActive?: {} | undefined } | undefined }
    | undefined
}
type CreateContainerServiceResult = {
  containerService?:
    | {
        containerServiceName?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        power?: {} | undefined
        powerId?: {} | undefined
        state?: {} | undefined
        stateDetail?: { code?: {} | undefined; message?: {} | undefined } | undefined
        scale?: {} | undefined
        currentDeployment?:
          | {
              version?: {} | undefined
              state?: {} | undefined
              containers?: {} | undefined
              publicEndpoint?:
                | {
                    containerName?: {} | undefined
                    containerPort?: {} | undefined
                    healthCheck?:
                      | {
                          healthyThreshold?: {} | undefined
                          unhealthyThreshold?: {} | undefined
                          timeoutSeconds?: {} | undefined
                          intervalSeconds?: {} | undefined
                          path?: {} | undefined
                          successCodes?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: {} | undefined
            }
          | undefined
        nextDeployment?:
          | {
              version?: {} | undefined
              state?: {} | undefined
              containers?: {} | undefined
              publicEndpoint?:
                | {
                    containerName?: {} | undefined
                    containerPort?: {} | undefined
                    healthCheck?:
                      | {
                          healthyThreshold?: {} | undefined
                          unhealthyThreshold?: {} | undefined
                          timeoutSeconds?: {} | undefined
                          intervalSeconds?: {} | undefined
                          path?: {} | undefined
                          successCodes?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: {} | undefined
            }
          | undefined
        isDisabled?: {} | undefined
        principalArn?: {} | undefined
        privateDomainName?: {} | undefined
        publicDomainNames?: {} | undefined
        url?: {} | undefined
        privateRegistryAccess?:
          | {
              ecrImagePullerRole?:
                | { isActive?: {} | undefined; principalArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateContainerServiceDeploymentRequest = {
  serviceName: {}
  containers?: {} | undefined
  publicEndpoint?:
    | {
        containerName: {}
        containerPort: {}
        healthCheck?:
          | {
              healthyThreshold?: {} | undefined
              unhealthyThreshold?: {} | undefined
              timeoutSeconds?: {} | undefined
              intervalSeconds?: {} | undefined
              path?: {} | undefined
              successCodes?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateContainerServiceDeploymentResult = {
  containerService?:
    | {
        containerServiceName?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        power?: {} | undefined
        powerId?: {} | undefined
        state?: {} | undefined
        stateDetail?: { code?: {} | undefined; message?: {} | undefined } | undefined
        scale?: {} | undefined
        currentDeployment?:
          | {
              version?: {} | undefined
              state?: {} | undefined
              containers?: {} | undefined
              publicEndpoint?:
                | {
                    containerName?: {} | undefined
                    containerPort?: {} | undefined
                    healthCheck?:
                      | {
                          healthyThreshold?: {} | undefined
                          unhealthyThreshold?: {} | undefined
                          timeoutSeconds?: {} | undefined
                          intervalSeconds?: {} | undefined
                          path?: {} | undefined
                          successCodes?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: {} | undefined
            }
          | undefined
        nextDeployment?:
          | {
              version?: {} | undefined
              state?: {} | undefined
              containers?: {} | undefined
              publicEndpoint?:
                | {
                    containerName?: {} | undefined
                    containerPort?: {} | undefined
                    healthCheck?:
                      | {
                          healthyThreshold?: {} | undefined
                          unhealthyThreshold?: {} | undefined
                          timeoutSeconds?: {} | undefined
                          intervalSeconds?: {} | undefined
                          path?: {} | undefined
                          successCodes?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: {} | undefined
            }
          | undefined
        isDisabled?: {} | undefined
        principalArn?: {} | undefined
        privateDomainName?: {} | undefined
        publicDomainNames?: {} | undefined
        url?: {} | undefined
        privateRegistryAccess?:
          | {
              ecrImagePullerRole?:
                | { isActive?: {} | undefined; principalArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateContainerServiceRegistryLoginRequest = { [x: string]: unknown }
type CreateContainerServiceRegistryLoginResult = {
  registryLogin?:
    | {
        username?: {} | undefined
        password?: {} | undefined
        expiresAt?: {} | undefined
        registry?: {} | undefined
      }
    | undefined
}
type CreateDiskRequest = {
  diskName: {}
  availabilityZone: {}
  sizeInGb: {}
  tags?: {} | undefined
  addOns?: {} | undefined
}
type CreateDiskResult = { operations?: {} | undefined }
type CreateDiskFromSnapshotRequest = {
  diskName: {}
  diskSnapshotName?: {} | undefined
  availabilityZone: {}
  sizeInGb: {}
  tags?: {} | undefined
  addOns?: {} | undefined
  sourceDiskName?: {} | undefined
  restoreDate?: {} | undefined
  useLatestRestorableAutoSnapshot?: {} | undefined
}
type CreateDiskFromSnapshotResult = { operations?: {} | undefined }
type CreateDiskSnapshotRequest = {
  diskName?: {} | undefined
  diskSnapshotName: {}
  instanceName?: {} | undefined
  tags?: {} | undefined
}
type CreateDiskSnapshotResult = { operations?: {} | undefined }
type CreateDistributionRequest = {
  distributionName: {}
  origin: { name?: {} | undefined; regionName?: {} | undefined; protocolPolicy?: {} | undefined }
  defaultCacheBehavior: { behavior?: {} | undefined }
  cacheBehaviorSettings?:
    | {
        defaultTTL?: {} | undefined
        minimumTTL?: {} | undefined
        maximumTTL?: {} | undefined
        allowedHTTPMethods?: {} | undefined
        cachedHTTPMethods?: {} | undefined
        forwardedCookies?:
          | { option?: {} | undefined; cookiesAllowList?: {} | undefined }
          | undefined
        forwardedHeaders?:
          | { option?: {} | undefined; headersAllowList?: {} | undefined }
          | undefined
        forwardedQueryStrings?:
          | { option?: {} | undefined; queryStringsAllowList?: {} | undefined }
          | undefined
      }
    | undefined
  cacheBehaviors?: {} | undefined
  bundleId: {}
  ipAddressType?: {} | undefined
  tags?: {} | undefined
}
type CreateDistributionResult = {
  distribution?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        alternativeDomainNames?: {} | undefined
        status?: {} | undefined
        isEnabled?: {} | undefined
        domainName?: {} | undefined
        bundleId?: {} | undefined
        certificateName?: {} | undefined
        origin?:
          | {
              name?: {} | undefined
              resourceType?: {} | undefined
              regionName?: {} | undefined
              protocolPolicy?: {} | undefined
            }
          | undefined
        originPublicDNS?: {} | undefined
        defaultCacheBehavior?: { behavior?: {} | undefined } | undefined
        cacheBehaviorSettings?:
          | {
              defaultTTL?: {} | undefined
              minimumTTL?: {} | undefined
              maximumTTL?: {} | undefined
              allowedHTTPMethods?: {} | undefined
              cachedHTTPMethods?: {} | undefined
              forwardedCookies?:
                | { option?: {} | undefined; cookiesAllowList?: {} | undefined }
                | undefined
              forwardedHeaders?:
                | { option?: {} | undefined; headersAllowList?: {} | undefined }
                | undefined
              forwardedQueryStrings?:
                | { option?: {} | undefined; queryStringsAllowList?: {} | undefined }
                | undefined
            }
          | undefined
        cacheBehaviors?: {} | undefined
        ableToUpdateBundle?: {} | undefined
        ipAddressType?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type CreateDomainRequest = { domainName: {}; tags?: {} | undefined }
type CreateDomainResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type CreateDomainEntryRequest = {
  domainName: {}
  domainEntry: {
    id?: {} | undefined
    name?: {} | undefined
    target?: {} | undefined
    isAlias?: {} | undefined
    type?: {} | undefined
    options?: {} | undefined
  }
}
type CreateDomainEntryResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type CreateGUISessionAccessDetailsRequest = { resourceName: {} }
type CreateGUISessionAccessDetailsResult = {
  resourceName?: {} | undefined
  status?: {} | undefined
  percentageComplete?: {} | undefined
  failureReason?: {} | undefined
  sessions?: {} | undefined
}
type CreateInstanceSnapshotRequest = {
  instanceSnapshotName: {}
  instanceName: {}
  tags?: {} | undefined
}
type CreateInstanceSnapshotResult = { operations?: {} | undefined }
type CreateInstancesRequest = {
  instanceNames: {}
  availabilityZone: {}
  customImageName?: {} | undefined
  blueprintId: {}
  bundleId: {}
  userData?: {} | undefined
  keyPairName?: {} | undefined
  tags?: {} | undefined
  addOns?: {} | undefined
  ipAddressType?: {} | undefined
}
type CreateInstancesResult = { operations?: {} | undefined }
type CreateInstancesFromSnapshotRequest = {
  instanceNames: {}
  attachedDiskMapping?: {} | undefined
  availabilityZone: {}
  instanceSnapshotName?: {} | undefined
  bundleId: {}
  userData?: {} | undefined
  keyPairName?: {} | undefined
  tags?: {} | undefined
  addOns?: {} | undefined
  ipAddressType?: {} | undefined
  sourceInstanceName?: {} | undefined
  restoreDate?: {} | undefined
  useLatestRestorableAutoSnapshot?: {} | undefined
}
type CreateInstancesFromSnapshotResult = { operations?: {} | undefined }
type CreateKeyPairRequest = { keyPairName: {}; tags?: {} | undefined }
type CreateKeyPairResult = {
  keyPair?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        fingerprint?: {} | undefined
      }
    | undefined
  publicKeyBase64?: {} | undefined
  privateKeyBase64?: {} | undefined
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type CreateLoadBalancerRequest = {
  loadBalancerName: {}
  instancePort: {}
  healthCheckPath?: {} | undefined
  certificateName?: {} | undefined
  certificateDomainName?: {} | undefined
  certificateAlternativeNames?: {} | undefined
  tags?: {} | undefined
  ipAddressType?: {} | undefined
  tlsPolicyName?: {} | undefined
}
type CreateLoadBalancerResult = { operations?: {} | undefined }
type CreateLoadBalancerTlsCertificateRequest = {
  loadBalancerName: {}
  certificateName: {}
  certificateDomainName: {}
  certificateAlternativeNames?: {} | undefined
  tags?: {} | undefined
}
type CreateLoadBalancerTlsCertificateResult = { operations?: {} | undefined }
type CreateRelationalDatabaseRequest = {
  relationalDatabaseName: {}
  availabilityZone?: {} | undefined
  relationalDatabaseBlueprintId: {}
  relationalDatabaseBundleId: {}
  masterDatabaseName: {}
  masterUsername: {}
  masterUserPassword?: {} | undefined
  preferredBackupWindow?: {} | undefined
  preferredMaintenanceWindow?: {} | undefined
  publiclyAccessible?: {} | undefined
  tags?: {} | undefined
}
type CreateRelationalDatabaseResult = { operations?: {} | undefined }
type CreateRelationalDatabaseFromSnapshotRequest = {
  relationalDatabaseName: {}
  availabilityZone?: {} | undefined
  publiclyAccessible?: {} | undefined
  relationalDatabaseSnapshotName?: {} | undefined
  relationalDatabaseBundleId?: {} | undefined
  sourceRelationalDatabaseName?: {} | undefined
  restoreTime?: {} | undefined
  useLatestRestorableTime?: {} | undefined
  tags?: {} | undefined
}
type CreateRelationalDatabaseFromSnapshotResult = { operations?: {} | undefined }
type CreateRelationalDatabaseSnapshotRequest = {
  relationalDatabaseName: {}
  relationalDatabaseSnapshotName: {}
  tags?: {} | undefined
}
type CreateRelationalDatabaseSnapshotResult = { operations?: {} | undefined }
type DeleteAlarmRequest = { alarmName: {} }
type DeleteAlarmResult = { operations?: {} | undefined }
type DeleteAutoSnapshotRequest = { resourceName: {}; date: {} }
type DeleteAutoSnapshotResult = { operations?: {} | undefined }
type DeleteBucketRequest = { bucketName: {}; forceDelete?: {} | undefined }
type DeleteBucketResult = { operations?: {} | undefined }
type DeleteBucketAccessKeyRequest = { bucketName: {}; accessKeyId: {} }
type DeleteBucketAccessKeyResult = { operations?: {} | undefined }
type DeleteCertificateRequest = { certificateName: {} }
type DeleteCertificateResult = { operations?: {} | undefined }
type DeleteContactMethodRequest = { protocol: {} }
type DeleteContactMethodResult = { operations?: {} | undefined }
type DeleteContainerImageRequest = { serviceName: {}; image: {} }
type DeleteContainerImageResult = { [x: string]: unknown }
type DeleteContainerServiceRequest = { serviceName: {} }
type DeleteContainerServiceResult = { [x: string]: unknown }
type DeleteDiskRequest = { diskName: {}; forceDeleteAddOns?: {} | undefined }
type DeleteDiskResult = { operations?: {} | undefined }
type DeleteDiskSnapshotRequest = { diskSnapshotName: {} }
type DeleteDiskSnapshotResult = { operations?: {} | undefined }
type DeleteDistributionRequest = { distributionName?: {} | undefined }
type DeleteDistributionResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type DeleteDomainRequest = { domainName: {} }
type DeleteDomainResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type DeleteDomainEntryRequest = {
  domainName: {}
  domainEntry: {
    id?: {} | undefined
    name?: {} | undefined
    target?: {} | undefined
    isAlias?: {} | undefined
    type?: {} | undefined
    options?: {} | undefined
  }
}
type DeleteDomainEntryResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type DeleteInstanceRequest = { instanceName: {}; forceDeleteAddOns?: {} | undefined }
type DeleteInstanceResult = { operations?: {} | undefined }
type DeleteInstanceSnapshotRequest = { instanceSnapshotName: {} }
type DeleteInstanceSnapshotResult = { operations?: {} | undefined }
type DeleteKeyPairRequest = { keyPairName: {}; expectedFingerprint?: {} | undefined }
type DeleteKeyPairResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type DeleteKnownHostKeysRequest = { instanceName: {} }
type DeleteKnownHostKeysResult = { operations?: {} | undefined }
type DeleteLoadBalancerRequest = { loadBalancerName: {} }
type DeleteLoadBalancerResult = { operations?: {} | undefined }
type DeleteLoadBalancerTlsCertificateRequest = {
  loadBalancerName: {}
  certificateName: {}
  force?: {} | undefined
}
type DeleteLoadBalancerTlsCertificateResult = { operations?: {} | undefined }
type DeleteRelationalDatabaseRequest = {
  relationalDatabaseName: {}
  skipFinalSnapshot?: {} | undefined
  finalRelationalDatabaseSnapshotName?: {} | undefined
}
type DeleteRelationalDatabaseResult = { operations?: {} | undefined }
type DeleteRelationalDatabaseSnapshotRequest = { relationalDatabaseSnapshotName: {} }
type DeleteRelationalDatabaseSnapshotResult = { operations?: {} | undefined }
type DetachCertificateFromDistributionRequest = { distributionName: {} }
type DetachCertificateFromDistributionResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type DetachDiskRequest = { diskName: {} }
type DetachDiskResult = { operations?: {} | undefined }
type DetachInstancesFromLoadBalancerRequest = { loadBalancerName: {}; instanceNames: {} }
type DetachInstancesFromLoadBalancerResult = { operations?: {} | undefined }
type DetachStaticIpRequest = { staticIpName: {} }
type DetachStaticIpResult = { operations?: {} | undefined }
type DisableAddOnRequest = { addOnType: {}; resourceName: {} }
type DisableAddOnResult = { operations?: {} | undefined }
type DownloadDefaultKeyPairRequest = { [x: string]: unknown }
type DownloadDefaultKeyPairResult = {
  publicKeyBase64?: {} | undefined
  privateKeyBase64?: {} | undefined
  createdAt?: {} | undefined
}
type EnableAddOnRequest = {
  resourceName: {}
  addOnRequest: {
    addOnType: {}
    autoSnapshotAddOnRequest?: { snapshotTimeOfDay?: {} | undefined } | undefined
    stopInstanceOnIdleRequest?:
      | { threshold?: {} | undefined; duration?: {} | undefined }
      | undefined
  }
}
type EnableAddOnResult = { operations?: {} | undefined }
type ExportSnapshotRequest = { sourceSnapshotName: {} }
type ExportSnapshotResult = { operations?: {} | undefined }
type GetActiveNamesRequest = { pageToken?: {} | undefined }
type GetActiveNamesResult = { activeNames?: {} | undefined; nextPageToken?: {} | undefined }
type GetAlarmsRequest = {
  alarmName?: {} | undefined
  pageToken?: {} | undefined
  monitoredResourceName?: {} | undefined
}
type GetAlarmsResult = { alarms?: {} | undefined; nextPageToken?: {} | undefined }
type GetAutoSnapshotsRequest = { resourceName: {} }
type GetAutoSnapshotsResult = {
  resourceName?: {} | undefined
  resourceType?: {} | undefined
  autoSnapshots?: {} | undefined
}
type GetBlueprintsRequest = {
  includeInactive?: {} | undefined
  pageToken?: {} | undefined
  appCategory?: {} | undefined
}
type GetBlueprintsResult = { blueprints?: {} | undefined; nextPageToken?: {} | undefined }
type GetBucketAccessKeysRequest = { bucketName: {} }
type GetBucketAccessKeysResult = { accessKeys?: {} | undefined }
type GetBucketBundlesRequest = { includeInactive?: {} | undefined }
type GetBucketBundlesResult = { bundles?: {} | undefined }
type GetBucketMetricDataRequest = {
  bucketName: {}
  metricName: {}
  startTime: {}
  endTime: {}
  period: {}
  statistics: {}
  unit: {}
}
type GetBucketMetricDataResult = { metricName?: {} | undefined; metricData?: {} | undefined }
type GetBucketsRequest = {
  bucketName?: {} | undefined
  pageToken?: {} | undefined
  includeConnectedResources?: {} | undefined
}
type GetBucketsResult = {
  buckets?: {} | undefined
  nextPageToken?: {} | undefined
  accountLevelBpaSync?:
    | {
        status?: {} | undefined
        lastSyncedAt?: {} | undefined
        message?: {} | undefined
        bpaImpactsLightsail?: {} | undefined
      }
    | undefined
}
type GetBundlesRequest = {
  includeInactive?: {} | undefined
  pageToken?: {} | undefined
  appCategory?: {} | undefined
}
type GetBundlesResult = { bundles?: {} | undefined; nextPageToken?: {} | undefined }
type GetCertificatesRequest = {
  certificateStatuses?: {} | undefined
  includeCertificateDetails?: {} | undefined
  certificateName?: {} | undefined
}
type GetCertificatesResult = { certificates?: {} | undefined }
type GetCloudFormationStackRecordsRequest = { pageToken?: {} | undefined }
type GetCloudFormationStackRecordsResult = {
  cloudFormationStackRecords?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetContactMethodsRequest = { protocols?: {} | undefined }
type GetContactMethodsResult = { contactMethods?: {} | undefined }
type GetContainerAPIMetadataRequest = { [x: string]: unknown }
type GetContainerAPIMetadataResult = { metadata?: {} | undefined }
type GetContainerImagesRequest = { serviceName: {} }
type GetContainerImagesResult = { containerImages?: {} | undefined }
type GetContainerLogRequest = {
  serviceName: {}
  containerName: {}
  startTime?: {} | undefined
  endTime?: {} | undefined
  filterPattern?: {} | undefined
  pageToken?: {} | undefined
}
type GetContainerLogResult = { logEvents?: {} | undefined; nextPageToken?: {} | undefined }
type GetContainerServiceDeploymentsRequest = { serviceName: {} }
type GetContainerServiceDeploymentsResult = { deployments?: {} | undefined }
type GetContainerServiceMetricDataRequest = {
  serviceName: {}
  metricName: {}
  startTime: {}
  endTime: {}
  period: {}
  statistics: {}
}
type GetContainerServiceMetricDataResult = {
  metricName?: {} | undefined
  metricData?: {} | undefined
}
type GetContainerServicePowersRequest = { [x: string]: unknown }
type GetContainerServicePowersResult = { powers?: {} | undefined }
type GetContainerServicesRequest = { serviceName?: {} | undefined }
type ContainerServicesListResult = { containerServices?: {} | undefined }
type GetCostEstimateRequest = { resourceName: {}; startTime: {}; endTime: {} }
type GetCostEstimateResult = { resourcesBudgetEstimate?: {} | undefined }
type GetDiskRequest = { diskName: {} }
type GetDiskResult = {
  disk?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        addOns?: {} | undefined
        sizeInGb?: {} | undefined
        isSystemDisk?: {} | undefined
        iops?: {} | undefined
        path?: {} | undefined
        state?: {} | undefined
        attachedTo?: {} | undefined
        isAttached?: {} | undefined
        attachmentState?: {} | undefined
        gbInUse?: {} | undefined
        autoMountStatus?: {} | undefined
      }
    | undefined
}
type GetDiskSnapshotRequest = { diskSnapshotName: {} }
type GetDiskSnapshotResult = {
  diskSnapshot?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        sizeInGb?: {} | undefined
        state?: {} | undefined
        progress?: {} | undefined
        fromDiskName?: {} | undefined
        fromDiskArn?: {} | undefined
        fromInstanceName?: {} | undefined
        fromInstanceArn?: {} | undefined
        isFromAutoSnapshot?: {} | undefined
      }
    | undefined
}
type GetDiskSnapshotsRequest = { pageToken?: {} | undefined }
type GetDiskSnapshotsResult = { diskSnapshots?: {} | undefined; nextPageToken?: {} | undefined }
type GetDisksRequest = { pageToken?: {} | undefined }
type GetDisksResult = { disks?: {} | undefined; nextPageToken?: {} | undefined }
type GetDistributionBundlesRequest = { [x: string]: unknown }
type GetDistributionBundlesResult = { bundles?: {} | undefined }
type GetDistributionLatestCacheResetRequest = { distributionName?: {} | undefined }
type GetDistributionLatestCacheResetResult = {
  status?: {} | undefined
  createTime?: {} | undefined
}
type GetDistributionMetricDataRequest = {
  distributionName: {}
  metricName: {}
  startTime: {}
  endTime: {}
  period: {}
  unit: {}
  statistics: {}
}
type GetDistributionMetricDataResult = { metricName?: {} | undefined; metricData?: {} | undefined }
type GetDistributionsRequest = { distributionName?: {} | undefined; pageToken?: {} | undefined }
type GetDistributionsResult = { distributions?: {} | undefined; nextPageToken?: {} | undefined }
type GetDomainRequest = { domainName: {} }
type GetDomainResult = {
  domain?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        domainEntries?: {} | undefined
        registeredDomainDelegationInfo?:
          | {
              nameServersUpdateState?:
                | { code?: {} | undefined; message?: {} | undefined }
                | undefined
              r53HostedZoneDeletionState?:
                | { code?: {} | undefined; message?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetDomainsRequest = { pageToken?: {} | undefined }
type GetDomainsResult = { domains?: {} | undefined; nextPageToken?: {} | undefined }
type GetExportSnapshotRecordsRequest = { pageToken?: {} | undefined }
type GetExportSnapshotRecordsResult = {
  exportSnapshotRecords?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetInstanceRequest = { instanceName: {} }
type GetInstanceResult = {
  instance?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        blueprintId?: {} | undefined
        blueprintName?: {} | undefined
        bundleId?: {} | undefined
        addOns?: {} | undefined
        isStaticIp?: {} | undefined
        privateIpAddress?: {} | undefined
        publicIpAddress?: {} | undefined
        ipv6Addresses?: {} | undefined
        ipAddressType?: {} | undefined
        hardware?:
          | { cpuCount?: {} | undefined; disks?: {} | undefined; ramSizeInGb?: {} | undefined }
          | undefined
        networking?:
          | {
              monthlyTransfer?: { gbPerMonthAllocated?: {} | undefined } | undefined
              ports?: {} | undefined
            }
          | undefined
        state?: { code?: {} | undefined; name?: {} | undefined } | undefined
        username?: {} | undefined
        sshKeyName?: {} | undefined
        metadataOptions?:
          | {
              state?: {} | undefined
              httpTokens?: {} | undefined
              httpEndpoint?: {} | undefined
              httpPutResponseHopLimit?: {} | undefined
              httpProtocolIpv6?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetInstanceAccessDetailsRequest = { instanceName: {}; protocol?: {} | undefined }
type GetInstanceAccessDetailsResult = {
  accessDetails?:
    | {
        certKey?: {} | undefined
        expiresAt?: {} | undefined
        ipAddress?: {} | undefined
        password?: {} | undefined
        passwordData?: { ciphertext?: {} | undefined; keyPairName?: {} | undefined } | undefined
        privateKey?: {} | undefined
        protocol?: {} | undefined
        instanceName?: {} | undefined
        username?: {} | undefined
        hostKeys?: {} | undefined
      }
    | undefined
}
type GetInstanceMetricDataRequest = {
  instanceName: {}
  metricName: {}
  period: {}
  startTime: {}
  endTime: {}
  unit: {}
  statistics: {}
}
type GetInstanceMetricDataResult = { metricName?: {} | undefined; metricData?: {} | undefined }
type GetInstancePortStatesRequest = { instanceName: {} }
type GetInstancePortStatesResult = { portStates?: {} | undefined }
type GetInstanceSnapshotRequest = { instanceSnapshotName: {} }
type GetInstanceSnapshotResult = {
  instanceSnapshot?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        state?: {} | undefined
        progress?: {} | undefined
        fromAttachedDisks?: {} | undefined
        fromInstanceName?: {} | undefined
        fromInstanceArn?: {} | undefined
        fromBlueprintId?: {} | undefined
        fromBundleId?: {} | undefined
        isFromAutoSnapshot?: {} | undefined
        sizeInGb?: {} | undefined
      }
    | undefined
}
type GetInstanceSnapshotsRequest = { pageToken?: {} | undefined }
type GetInstanceSnapshotsResult = {
  instanceSnapshots?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetInstanceStateRequest = { instanceName: {} }
type GetInstanceStateResult = {
  state?: { code?: {} | undefined; name?: {} | undefined } | undefined
}
type GetInstancesRequest = { pageToken?: {} | undefined }
type GetInstancesResult = { instances?: {} | undefined; nextPageToken?: {} | undefined }
type GetKeyPairRequest = { keyPairName: {} }
type GetKeyPairResult = {
  keyPair?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        fingerprint?: {} | undefined
      }
    | undefined
}
type GetKeyPairsRequest = { pageToken?: {} | undefined; includeDefaultKeyPair?: {} | undefined }
type GetKeyPairsResult = { keyPairs?: {} | undefined; nextPageToken?: {} | undefined }
type GetLoadBalancerRequest = { loadBalancerName: {} }
type GetLoadBalancerResult = {
  loadBalancer?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        dnsName?: {} | undefined
        state?: {} | undefined
        protocol?: {} | undefined
        publicPorts?: {} | undefined
        healthCheckPath?: {} | undefined
        instancePort?: {} | undefined
        instanceHealthSummary?: {} | undefined
        tlsCertificateSummaries?: {} | undefined
        configurationOptions?: {} | undefined
        ipAddressType?: {} | undefined
        httpsRedirectionEnabled?: {} | undefined
        tlsPolicyName?: {} | undefined
      }
    | undefined
}
type GetLoadBalancerMetricDataRequest = {
  loadBalancerName: {}
  metricName: {}
  period: {}
  startTime: {}
  endTime: {}
  unit: {}
  statistics: {}
}
type GetLoadBalancerMetricDataResult = { metricName?: {} | undefined; metricData?: {} | undefined }
type GetLoadBalancerTlsCertificatesRequest = { loadBalancerName: {} }
type GetLoadBalancerTlsCertificatesResult = { tlsCertificates?: {} | undefined }
type GetLoadBalancerTlsPoliciesRequest = { pageToken?: {} | undefined }
type GetLoadBalancerTlsPoliciesResult = {
  tlsPolicies?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetLoadBalancersRequest = { pageToken?: {} | undefined }
type GetLoadBalancersResult = { loadBalancers?: {} | undefined; nextPageToken?: {} | undefined }
type GetOperationRequest = { operationId: {} }
type GetOperationResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type GetOperationsRequest = { pageToken?: {} | undefined }
type GetOperationsResult = { operations?: {} | undefined; nextPageToken?: {} | undefined }
type GetOperationsForResourceRequest = { resourceName: {}; pageToken?: {} | undefined }
type GetOperationsForResourceResult = {
  operations?: {} | undefined
  nextPageCount?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetRegionsRequest = {
  includeAvailabilityZones?: {} | undefined
  includeRelationalDatabaseAvailabilityZones?: {} | undefined
}
type GetRegionsResult = { regions?: {} | undefined }
type GetRelationalDatabaseRequest = { relationalDatabaseName: {} }
type GetRelationalDatabaseResult = {
  relationalDatabase?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        relationalDatabaseBlueprintId?: {} | undefined
        relationalDatabaseBundleId?: {} | undefined
        masterDatabaseName?: {} | undefined
        hardware?:
          | {
              cpuCount?: {} | undefined
              diskSizeInGb?: {} | undefined
              ramSizeInGb?: {} | undefined
            }
          | undefined
        state?: {} | undefined
        secondaryAvailabilityZone?: {} | undefined
        backupRetentionEnabled?: {} | undefined
        pendingModifiedValues?:
          | {
              masterUserPassword?: {} | undefined
              engineVersion?: {} | undefined
              backupRetentionEnabled?: {} | undefined
            }
          | undefined
        engine?: {} | undefined
        engineVersion?: {} | undefined
        latestRestorableTime?: {} | undefined
        masterUsername?: {} | undefined
        parameterApplyStatus?: {} | undefined
        preferredBackupWindow?: {} | undefined
        preferredMaintenanceWindow?: {} | undefined
        publiclyAccessible?: {} | undefined
        masterEndpoint?: { port?: {} | undefined; address?: {} | undefined } | undefined
        pendingMaintenanceActions?: {} | undefined
        caCertificateIdentifier?: {} | undefined
      }
    | undefined
}
type GetRelationalDatabaseBlueprintsRequest = { pageToken?: {} | undefined }
type GetRelationalDatabaseBlueprintsResult = {
  blueprints?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetRelationalDatabaseBundlesRequest = {
  pageToken?: {} | undefined
  includeInactive?: {} | undefined
}
type GetRelationalDatabaseBundlesResult = {
  bundles?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetRelationalDatabaseEventsRequest = {
  relationalDatabaseName: {}
  durationInMinutes?: {} | undefined
  pageToken?: {} | undefined
}
type GetRelationalDatabaseEventsResult = {
  relationalDatabaseEvents?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetRelationalDatabaseLogEventsRequest = {
  relationalDatabaseName: {}
  logStreamName: {}
  startTime?: {} | undefined
  endTime?: {} | undefined
  startFromHead?: {} | undefined
  pageToken?: {} | undefined
}
type GetRelationalDatabaseLogEventsResult = {
  resourceLogEvents?: {} | undefined
  nextBackwardToken?: {} | undefined
  nextForwardToken?: {} | undefined
}
type GetRelationalDatabaseLogStreamsRequest = { relationalDatabaseName: {} }
type GetRelationalDatabaseLogStreamsResult = { logStreams?: {} | undefined }
type GetRelationalDatabaseMasterUserPasswordRequest = {
  relationalDatabaseName: {}
  passwordVersion?: {} | undefined
}
type GetRelationalDatabaseMasterUserPasswordResult = {
  masterUserPassword?: {} | undefined
  createdAt?: {} | undefined
}
type GetRelationalDatabaseMetricDataRequest = {
  relationalDatabaseName: {}
  metricName: {}
  period: {}
  startTime: {}
  endTime: {}
  unit: {}
  statistics: {}
}
type GetRelationalDatabaseMetricDataResult = {
  metricName?: {} | undefined
  metricData?: {} | undefined
}
type GetRelationalDatabaseParametersRequest = {
  relationalDatabaseName: {}
  pageToken?: {} | undefined
}
type GetRelationalDatabaseParametersResult = {
  parameters?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetRelationalDatabaseSnapshotRequest = { relationalDatabaseSnapshotName: {} }
type GetRelationalDatabaseSnapshotResult = {
  relationalDatabaseSnapshot?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        engine?: {} | undefined
        engineVersion?: {} | undefined
        sizeInGb?: {} | undefined
        state?: {} | undefined
        fromRelationalDatabaseName?: {} | undefined
        fromRelationalDatabaseArn?: {} | undefined
        fromRelationalDatabaseBundleId?: {} | undefined
        fromRelationalDatabaseBlueprintId?: {} | undefined
      }
    | undefined
}
type GetRelationalDatabaseSnapshotsRequest = { pageToken?: {} | undefined }
type GetRelationalDatabaseSnapshotsResult = {
  relationalDatabaseSnapshots?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetRelationalDatabasesRequest = { pageToken?: {} | undefined }
type GetRelationalDatabasesResult = {
  relationalDatabases?: {} | undefined
  nextPageToken?: {} | undefined
}
type GetStaticIpRequest = { staticIpName: {} }
type GetStaticIpResult = {
  staticIp?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        supportCode?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        ipAddress?: {} | undefined
        attachedTo?: {} | undefined
        isAttached?: {} | undefined
      }
    | undefined
}
type GetStaticIpsRequest = { pageToken?: {} | undefined }
type GetStaticIpsResult = { staticIps?: {} | undefined; nextPageToken?: {} | undefined }
type ImportKeyPairRequest = { keyPairName: {}; publicKeyBase64: {} }
type ImportKeyPairResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type IsVpcPeeredRequest = { [x: string]: unknown }
type IsVpcPeeredResult = { isPeered?: {} | undefined }
type OpenInstancePublicPortsRequest = {
  portInfo: {
    fromPort?: {} | undefined
    toPort?: {} | undefined
    protocol?: {} | undefined
    cidrs?: {} | undefined
    ipv6Cidrs?: {} | undefined
    cidrListAliases?: {} | undefined
  }
  instanceName: {}
}
type OpenInstancePublicPortsResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type PeerVpcRequest = { [x: string]: unknown }
type PeerVpcResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type PutAlarmRequest = {
  alarmName: {}
  metricName: {}
  monitoredResourceName: {}
  comparisonOperator: {}
  threshold: {}
  evaluationPeriods: {}
  datapointsToAlarm?: {} | undefined
  treatMissingData?: {} | undefined
  contactProtocols?: {} | undefined
  notificationTriggers?: {} | undefined
  notificationEnabled?: {} | undefined
}
type PutAlarmResult = { operations?: {} | undefined }
type PutInstancePublicPortsRequest = { portInfos: {}; instanceName: {} }
type PutInstancePublicPortsResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type RebootInstanceRequest = { instanceName: {} }
type RebootInstanceResult = { operations?: {} | undefined }
type RebootRelationalDatabaseRequest = { relationalDatabaseName: {} }
type RebootRelationalDatabaseResult = { operations?: {} | undefined }
type RegisterContainerImageRequest = { serviceName: {}; label: {}; digest: {} }
type RegisterContainerImageResult = {
  containerImage?:
    | { image?: {} | undefined; digest?: {} | undefined; createdAt?: {} | undefined }
    | undefined
}
type ReleaseStaticIpRequest = { staticIpName: {} }
type ReleaseStaticIpResult = { operations?: {} | undefined }
type ResetDistributionCacheRequest = { distributionName?: {} | undefined }
type ResetDistributionCacheResult = {
  status?: {} | undefined
  createTime?: {} | undefined
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type SendContactMethodVerificationRequest = { protocol: {} }
type SendContactMethodVerificationResult = { operations?: {} | undefined }
type SetIpAddressTypeRequest = { resourceType: {}; resourceName: {}; ipAddressType: {} }
type SetIpAddressTypeResult = { operations?: {} | undefined }
type SetResourceAccessForBucketRequest = { resourceName: {}; bucketName: {}; access: {} }
type SetResourceAccessForBucketResult = { operations?: {} | undefined }
type StartGUISessionRequest = { resourceName: {} }
type StartGUISessionResult = { operations?: {} | undefined }
type StartInstanceRequest = { instanceName: {} }
type StartInstanceResult = { operations?: {} | undefined }
type StartRelationalDatabaseRequest = { relationalDatabaseName: {} }
type StartRelationalDatabaseResult = { operations?: {} | undefined }
type StopGUISessionRequest = { resourceName: {} }
type StopGUISessionResult = { operations?: {} | undefined }
type StopInstanceRequest = { instanceName: {}; force?: {} | undefined }
type StopInstanceResult = { operations?: {} | undefined }
type StopRelationalDatabaseRequest = {
  relationalDatabaseName: {}
  relationalDatabaseSnapshotName?: {} | undefined
}
type StopRelationalDatabaseResult = { operations?: {} | undefined }
type TagResourceRequest = { resourceName: {}; resourceArn?: {} | undefined; tags: {} }
type TagResourceResult = { operations?: {} | undefined }
type TestAlarmRequest = { alarmName: {}; state: {} }
type TestAlarmResult = { operations?: {} | undefined }
type UnpeerVpcRequest = { [x: string]: unknown }
type UnpeerVpcResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type UntagResourceRequest = { resourceName: {}; resourceArn?: {} | undefined; tagKeys: {} }
type UntagResourceResult = { operations?: {} | undefined }
type UpdateBucketRequest = {
  bucketName: {}
  accessRules?: { getObject?: {} | undefined; allowPublicOverrides?: {} | undefined } | undefined
  versioning?: {} | undefined
  readonlyAccessAccounts?: {} | undefined
  accessLogConfig?:
    | { enabled: {}; destination?: {} | undefined; prefix?: {} | undefined }
    | undefined
}
type UpdateBucketResult = {
  bucket?:
    | {
        resourceType?: {} | undefined
        accessRules?:
          | { getObject?: {} | undefined; allowPublicOverrides?: {} | undefined }
          | undefined
        arn?: {} | undefined
        bundleId?: {} | undefined
        createdAt?: {} | undefined
        url?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        name?: {} | undefined
        supportCode?: {} | undefined
        tags?: {} | undefined
        objectVersioning?: {} | undefined
        ableToUpdateBundle?: {} | undefined
        readonlyAccessAccounts?: {} | undefined
        resourcesReceivingAccess?: {} | undefined
        state?: { code?: {} | undefined; message?: {} | undefined } | undefined
        accessLogConfig?:
          | { enabled: {}; destination?: {} | undefined; prefix?: {} | undefined }
          | undefined
      }
    | undefined
  operations?: {} | undefined
}
type UpdateBucketBundleRequest = { bucketName: {}; bundleId: {} }
type UpdateBucketBundleResult = { operations?: {} | undefined }
type UpdateContainerServiceRequest = {
  serviceName: {}
  power?: {} | undefined
  scale?: {} | undefined
  isDisabled?: {} | undefined
  publicDomainNames?: {} | undefined
  privateRegistryAccess?:
    | { ecrImagePullerRole?: { isActive?: {} | undefined } | undefined }
    | undefined
}
type UpdateContainerServiceResult = {
  containerService?:
    | {
        containerServiceName?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        resourceType?: {} | undefined
        tags?: {} | undefined
        power?: {} | undefined
        powerId?: {} | undefined
        state?: {} | undefined
        stateDetail?: { code?: {} | undefined; message?: {} | undefined } | undefined
        scale?: {} | undefined
        currentDeployment?:
          | {
              version?: {} | undefined
              state?: {} | undefined
              containers?: {} | undefined
              publicEndpoint?:
                | {
                    containerName?: {} | undefined
                    containerPort?: {} | undefined
                    healthCheck?:
                      | {
                          healthyThreshold?: {} | undefined
                          unhealthyThreshold?: {} | undefined
                          timeoutSeconds?: {} | undefined
                          intervalSeconds?: {} | undefined
                          path?: {} | undefined
                          successCodes?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: {} | undefined
            }
          | undefined
        nextDeployment?:
          | {
              version?: {} | undefined
              state?: {} | undefined
              containers?: {} | undefined
              publicEndpoint?:
                | {
                    containerName?: {} | undefined
                    containerPort?: {} | undefined
                    healthCheck?:
                      | {
                          healthyThreshold?: {} | undefined
                          unhealthyThreshold?: {} | undefined
                          timeoutSeconds?: {} | undefined
                          intervalSeconds?: {} | undefined
                          path?: {} | undefined
                          successCodes?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              createdAt?: {} | undefined
            }
          | undefined
        isDisabled?: {} | undefined
        principalArn?: {} | undefined
        privateDomainName?: {} | undefined
        publicDomainNames?: {} | undefined
        url?: {} | undefined
        privateRegistryAccess?:
          | {
              ecrImagePullerRole?:
                | { isActive?: {} | undefined; principalArn?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateDistributionRequest = {
  distributionName: {}
  origin?:
    | { name?: {} | undefined; regionName?: {} | undefined; protocolPolicy?: {} | undefined }
    | undefined
  defaultCacheBehavior?: { behavior?: {} | undefined } | undefined
  cacheBehaviorSettings?:
    | {
        defaultTTL?: {} | undefined
        minimumTTL?: {} | undefined
        maximumTTL?: {} | undefined
        allowedHTTPMethods?: {} | undefined
        cachedHTTPMethods?: {} | undefined
        forwardedCookies?:
          | { option?: {} | undefined; cookiesAllowList?: {} | undefined }
          | undefined
        forwardedHeaders?:
          | { option?: {} | undefined; headersAllowList?: {} | undefined }
          | undefined
        forwardedQueryStrings?:
          | { option?: {} | undefined; queryStringsAllowList?: {} | undefined }
          | undefined
      }
    | undefined
  cacheBehaviors?: {} | undefined
  isEnabled?: {} | undefined
}
type UpdateDistributionResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type UpdateDistributionBundleRequest = {
  distributionName?: {} | undefined
  bundleId?: {} | undefined
}
type UpdateDistributionBundleResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type UpdateDomainEntryRequest = {
  domainName: {}
  domainEntry: {
    id?: {} | undefined
    name?: {} | undefined
    target?: {} | undefined
    isAlias?: {} | undefined
    type?: {} | undefined
    options?: {} | undefined
  }
}
type UpdateDomainEntryResult = { operations?: {} | undefined }
type UpdateInstanceMetadataOptionsRequest = {
  instanceName: {}
  httpTokens?: {} | undefined
  httpEndpoint?: {} | undefined
  httpPutResponseHopLimit?: {} | undefined
  httpProtocolIpv6?: {} | undefined
}
type UpdateInstanceMetadataOptionsResult = {
  operation?:
    | {
        id?: {} | undefined
        resourceName?: {} | undefined
        resourceType?: {} | undefined
        createdAt?: {} | undefined
        location?: { availabilityZone?: {} | undefined; regionName?: {} | undefined } | undefined
        isTerminal?: {} | undefined
        operationDetails?: {} | undefined
        operationType?: {} | undefined
        status?: {} | undefined
        statusChangedAt?: {} | undefined
        errorCode?: {} | undefined
        errorDetails?: {} | undefined
      }
    | undefined
}
type UpdateLoadBalancerAttributeRequest = {
  loadBalancerName: {}
  attributeName: {}
  attributeValue: {}
}
type UpdateLoadBalancerAttributeResult = { operations?: {} | undefined }
type UpdateRelationalDatabaseRequest = {
  relationalDatabaseName: {}
  masterUserPassword?: {} | undefined
  rotateMasterUserPassword?: {} | undefined
  preferredBackupWindow?: {} | undefined
  preferredMaintenanceWindow?: {} | undefined
  enableBackupRetention?: {} | undefined
  disableBackupRetention?: {} | undefined
  publiclyAccessible?: {} | undefined
  applyImmediately?: {} | undefined
  caCertificateIdentifier?: {} | undefined
}
type UpdateRelationalDatabaseResult = { operations?: {} | undefined }
type UpdateRelationalDatabaseParametersRequest = { relationalDatabaseName: {}; parameters: {} }
type UpdateRelationalDatabaseParametersResult = { operations?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Lightsail_20161128.AllocateStaticIp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.AllocateStaticIp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AllocateStaticIpRequest }
        output: AllocateStaticIpResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.AttachCertificateToDistribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachCertificateToDistributionRequest }
        output: AttachCertificateToDistributionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.AttachDisk': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.AttachDisk'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachDiskRequest }
        output: AttachDiskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.AttachInstancesToLoadBalancer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachInstancesToLoadBalancerRequest }
        output: AttachInstancesToLoadBalancerResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.AttachLoadBalancerTlsCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachLoadBalancerTlsCertificateRequest }
        output: AttachLoadBalancerTlsCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.AttachStaticIp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.AttachStaticIp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachStaticIpRequest }
        output: AttachStaticIpResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CloseInstancePublicPorts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CloseInstancePublicPortsRequest }
        output: CloseInstancePublicPortsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CopySnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CopySnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopySnapshotRequest }
        output: CopySnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateBucket': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateBucket'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBucketRequest }
        output: CreateBucketResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateBucketAccessKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBucketAccessKeyRequest }
        output: CreateBucketAccessKeyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCertificateRequest }
        output: CreateCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateCloudFormationStack'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCloudFormationStackRequest }
        output: CreateCloudFormationStackResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateContactMethod': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateContactMethod'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContactMethodRequest }
        output: CreateContactMethodResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateContainerService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContainerServiceRequest }
        output: CreateContainerServiceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateContainerServiceDeployment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContainerServiceDeploymentRequest }
        output: CreateContainerServiceDeploymentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateContainerServiceRegistryLogin'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContainerServiceRegistryLoginRequest }
        output: CreateContainerServiceRegistryLoginResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateDisk': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateDisk'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDiskRequest }
        output: CreateDiskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateDiskFromSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDiskFromSnapshotRequest }
        output: CreateDiskFromSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateDiskSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDiskSnapshotRequest }
        output: CreateDiskSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateDistribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateDistribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDistributionRequest }
        output: CreateDistributionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDomainRequest }
        output: CreateDomainResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateDomainEntry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateDomainEntry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDomainEntryRequest }
        output: CreateDomainEntryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateGUISessionAccessDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGUISessionAccessDetailsRequest }
        output: CreateGUISessionAccessDetailsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateInstanceSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateInstanceSnapshotRequest }
        output: CreateInstanceSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateInstances': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateInstancesRequest }
        output: CreateInstancesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateInstancesFromSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateInstancesFromSnapshotRequest }
        output: CreateInstancesFromSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateKeyPair': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateKeyPair'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateKeyPairRequest }
        output: CreateKeyPairResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateLoadBalancer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLoadBalancerRequest }
        output: CreateLoadBalancerResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateLoadBalancerTlsCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLoadBalancerTlsCertificateRequest }
        output: CreateLoadBalancerTlsCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRelationalDatabaseRequest }
        output: CreateRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateRelationalDatabaseFromSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRelationalDatabaseFromSnapshotRequest }
        output: CreateRelationalDatabaseFromSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.CreateRelationalDatabaseSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRelationalDatabaseSnapshotRequest }
        output: CreateRelationalDatabaseSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteAlarm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteAlarm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAlarmRequest }
        output: DeleteAlarmResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteAutoSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAutoSnapshotRequest }
        output: DeleteAutoSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteBucket': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteBucket'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBucketRequest }
        output: DeleteBucketResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteBucketAccessKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBucketAccessKeyRequest }
        output: DeleteBucketAccessKeyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCertificateRequest }
        output: DeleteCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteContactMethod': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteContactMethod'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteContactMethodRequest }
        output: DeleteContactMethodResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteContainerImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteContainerImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteContainerImageRequest }
        output: DeleteContainerImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteContainerService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteContainerService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteContainerServiceRequest }
        output: DeleteContainerServiceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteDisk': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteDisk'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDiskRequest }
        output: DeleteDiskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteDiskSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDiskSnapshotRequest }
        output: DeleteDiskSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteDistribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteDistribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDistributionRequest }
        output: DeleteDistributionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDomainRequest }
        output: DeleteDomainResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteDomainEntry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDomainEntryRequest }
        output: DeleteDomainEntryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInstanceRequest }
        output: DeleteInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteInstanceSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInstanceSnapshotRequest }
        output: DeleteInstanceSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteKeyPair': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteKeyPair'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteKeyPairRequest }
        output: DeleteKeyPairResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteKnownHostKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteKnownHostKeysRequest }
        output: DeleteKnownHostKeysResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteLoadBalancer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLoadBalancerRequest }
        output: DeleteLoadBalancerResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteLoadBalancerTlsCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLoadBalancerTlsCertificateRequest }
        output: DeleteLoadBalancerTlsCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRelationalDatabaseRequest }
        output: DeleteRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DeleteRelationalDatabaseSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRelationalDatabaseSnapshotRequest }
        output: DeleteRelationalDatabaseSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DetachCertificateFromDistribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachCertificateFromDistributionRequest }
        output: DetachCertificateFromDistributionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DetachDisk': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DetachDisk'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachDiskRequest }
        output: DetachDiskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DetachInstancesFromLoadBalancer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachInstancesFromLoadBalancerRequest }
        output: DetachInstancesFromLoadBalancerResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DetachStaticIp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DetachStaticIp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachStaticIpRequest }
        output: DetachStaticIpResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DisableAddOn': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DisableAddOn'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableAddOnRequest }
        output: DisableAddOnResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.DownloadDefaultKeyPair'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DownloadDefaultKeyPairRequest }
        output: DownloadDefaultKeyPairResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.EnableAddOn': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.EnableAddOn'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableAddOnRequest }
        output: EnableAddOnResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.ExportSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.ExportSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportSnapshotRequest }
        output: ExportSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetActiveNames': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetActiveNames'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetActiveNamesRequest }
        output: GetActiveNamesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetAlarms': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetAlarms'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAlarmsRequest }
        output: GetAlarmsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetAutoSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAutoSnapshotsRequest }
        output: GetAutoSnapshotsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetBlueprints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetBlueprints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBlueprintsRequest }
        output: GetBlueprintsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetBucketAccessKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBucketAccessKeysRequest }
        output: GetBucketAccessKeysResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetBucketBundles': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetBucketBundles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBucketBundlesRequest }
        output: GetBucketBundlesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetBucketMetricData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetBucketMetricData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBucketMetricDataRequest }
        output: GetBucketMetricDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetBuckets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetBuckets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBucketsRequest }
        output: GetBucketsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetBundles': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetBundles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBundlesRequest }
        output: GetBundlesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetCertificates': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetCertificates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCertificatesRequest }
        output: GetCertificatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetCloudFormationStackRecords'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCloudFormationStackRecordsRequest }
        output: GetCloudFormationStackRecordsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContactMethods': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContactMethods'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContactMethodsRequest }
        output: GetContactMethodsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerAPIMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerAPIMetadataRequest }
        output: GetContainerAPIMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerImages': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerImagesRequest }
        output: GetContainerImagesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerLog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerLog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerLogRequest }
        output: GetContainerLogResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerServiceDeployments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerServiceDeploymentsRequest }
        output: GetContainerServiceDeploymentsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerServiceMetricData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerServiceMetricDataRequest }
        output: GetContainerServiceMetricDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerServicePowers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerServicePowersRequest }
        output: GetContainerServicePowersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServices': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetContainerServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContainerServicesRequest }
        output: ContainerServicesListResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetCostEstimate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetCostEstimate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCostEstimateRequest }
        output: GetCostEstimateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDisk': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDisk'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDiskRequest }
        output: GetDiskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDiskSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDiskSnapshotRequest }
        output: GetDiskSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDiskSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDiskSnapshotsRequest }
        output: GetDiskSnapshotsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDisks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDisks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDisksRequest }
        output: GetDisksResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionBundles': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDistributionBundles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDistributionBundlesRequest }
        output: GetDistributionBundlesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDistributionLatestCacheReset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDistributionLatestCacheResetRequest }
        output: GetDistributionLatestCacheResetResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDistributionMetricData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDistributionMetricDataRequest }
        output: GetDistributionMetricDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDistributions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDistributions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDistributionsRequest }
        output: GetDistributionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDomainRequest }
        output: GetDomainResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetDomains': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDomainsRequest }
        output: GetDomainsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetExportSnapshotRecords'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetExportSnapshotRecordsRequest }
        output: GetExportSnapshotRecordsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceRequest }
        output: GetInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstanceAccessDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceAccessDetailsRequest }
        output: GetInstanceAccessDetailsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstanceMetricData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceMetricDataRequest }
        output: GetInstanceMetricDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstancePortStates': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstancePortStates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstancePortStatesRequest }
        output: GetInstancePortStatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstanceSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceSnapshotRequest }
        output: GetInstanceSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstanceSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceSnapshotsRequest }
        output: GetInstanceSnapshotsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstanceState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceStateRequest }
        output: GetInstanceStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetInstances': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstancesRequest }
        output: GetInstancesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetKeyPair': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetKeyPair'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetKeyPairRequest }
        output: GetKeyPairResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetKeyPairs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetKeyPairs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetKeyPairsRequest }
        output: GetKeyPairsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetLoadBalancer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoadBalancerRequest }
        output: GetLoadBalancerResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetLoadBalancerMetricData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoadBalancerMetricDataRequest }
        output: GetLoadBalancerMetricDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetLoadBalancerTlsCertificates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoadBalancerTlsCertificatesRequest }
        output: GetLoadBalancerTlsCertificatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetLoadBalancerTlsPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoadBalancerTlsPoliciesRequest }
        output: GetLoadBalancerTlsPoliciesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetLoadBalancers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoadBalancersRequest }
        output: GetLoadBalancersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetOperation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetOperation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOperationRequest }
        output: GetOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetOperations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetOperations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOperationsRequest }
        output: GetOperationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetOperationsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetOperationsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOperationsForResourceRequest }
        output: GetOperationsForResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRegions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRegions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegionsRequest }
        output: GetRegionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseRequest }
        output: GetRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseBlueprints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseBlueprintsRequest }
        output: GetRelationalDatabaseBlueprintsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseBundles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseBundlesRequest }
        output: GetRelationalDatabaseBundlesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseEventsRequest }
        output: GetRelationalDatabaseEventsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseLogEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseLogEventsRequest }
        output: GetRelationalDatabaseLogEventsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseLogStreams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseLogStreamsRequest }
        output: GetRelationalDatabaseLogStreamsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseMasterUserPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseMasterUserPasswordRequest }
        output: GetRelationalDatabaseMasterUserPasswordResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseMetricData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseMetricDataRequest }
        output: GetRelationalDatabaseMetricDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseParametersRequest }
        output: GetRelationalDatabaseParametersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseSnapshotRequest }
        output: GetRelationalDatabaseSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabaseSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabaseSnapshotsRequest }
        output: GetRelationalDatabaseSnapshotsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetRelationalDatabases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRelationalDatabasesRequest }
        output: GetRelationalDatabasesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetStaticIp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetStaticIp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetStaticIpRequest }
        output: GetStaticIpResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.GetStaticIps': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.GetStaticIps'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetStaticIpsRequest }
        output: GetStaticIpsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.ImportKeyPair': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.ImportKeyPair'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportKeyPairRequest }
        output: ImportKeyPairResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.IsVpcPeered': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.IsVpcPeered'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IsVpcPeeredRequest }
        output: IsVpcPeeredResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.OpenInstancePublicPorts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: OpenInstancePublicPortsRequest }
        output: OpenInstancePublicPortsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.PeerVpc': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.PeerVpc'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PeerVpcRequest }
        output: PeerVpcResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.PutAlarm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.PutAlarm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAlarmRequest }
        output: PutAlarmResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.PutInstancePublicPorts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInstancePublicPortsRequest }
        output: PutInstancePublicPortsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.RebootInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.RebootInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootInstanceRequest }
        output: RebootInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.RebootRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootRelationalDatabaseRequest }
        output: RebootRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.RegisterContainerImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.RegisterContainerImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterContainerImageRequest }
        output: RegisterContainerImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.ReleaseStaticIp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReleaseStaticIpRequest }
        output: ReleaseStaticIpResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.ResetDistributionCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.ResetDistributionCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetDistributionCacheRequest }
        output: ResetDistributionCacheResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.SendContactMethodVerification'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendContactMethodVerificationRequest }
        output: SendContactMethodVerificationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.SetIpAddressType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.SetIpAddressType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetIpAddressTypeRequest }
        output: SetIpAddressTypeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.SetResourceAccessForBucket'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetResourceAccessForBucketRequest }
        output: SetResourceAccessForBucketResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.StartGUISession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.StartGUISession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartGUISessionRequest }
        output: StartGUISessionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.StartInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.StartInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartInstanceRequest }
        output: StartInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.StartRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartRelationalDatabaseRequest }
        output: StartRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.StopGUISession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.StopGUISession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopGUISessionRequest }
        output: StopGUISessionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.StopInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.StopInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopInstanceRequest }
        output: StopInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.StopRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopRelationalDatabaseRequest }
        output: StopRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.TestAlarm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.TestAlarm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestAlarmRequest }
        output: TestAlarmResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UnpeerVpc': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UnpeerVpc'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UnpeerVpcRequest }
        output: UnpeerVpcResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateBucket': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateBucket'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBucketRequest }
        output: UpdateBucketResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateBucketBundle'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBucketBundleRequest }
        output: UpdateBucketBundleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateContainerService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateContainerService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateContainerServiceRequest }
        output: UpdateContainerServiceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateDistribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateDistribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDistributionRequest }
        output: UpdateDistributionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateDistributionBundle'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDistributionBundleRequest }
        output: UpdateDistributionBundleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateDomainEntry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDomainEntryRequest }
        output: UpdateDomainEntryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateInstanceMetadataOptions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateInstanceMetadataOptionsRequest }
        output: UpdateInstanceMetadataOptionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateLoadBalancerAttribute'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLoadBalancerAttributeRequest }
        output: UpdateLoadBalancerAttributeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateRelationalDatabase'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRelationalDatabaseRequest }
        output: UpdateRelationalDatabaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Lightsail_20161128.UpdateRelationalDatabaseParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRelationalDatabaseParametersRequest }
        output: UpdateRelationalDatabaseParametersResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
