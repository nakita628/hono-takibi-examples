type CreateDevicePoolRequest = {
  projectArn: {}
  name: {}
  description?: {} | undefined
  rules: {}
  maxDevices?: {} | undefined
}
type CreateDevicePoolResult = {
  devicePool?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        rules?: {} | undefined
        maxDevices?: {} | undefined
      }
    | undefined
}
type ArgumentException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type ServiceAccountException = { [x: string]: unknown }
type CreateInstanceProfileRequest = {
  name: {}
  description?: {} | undefined
  packageCleanup?: {} | undefined
  excludeAppPackagesFromCleanup?: {} | undefined
  rebootAfterUse?: {} | undefined
}
type CreateInstanceProfileResult = {
  instanceProfile?:
    | {
        arn?: {} | undefined
        packageCleanup?: {} | undefined
        excludeAppPackagesFromCleanup?: {} | undefined
        rebootAfterUse?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
      }
    | undefined
}
type CreateNetworkProfileRequest = {
  projectArn: {}
  name: {}
  description?: {} | undefined
  type?: {} | undefined
  uplinkBandwidthBits?: {} | undefined
  downlinkBandwidthBits?: {} | undefined
  uplinkDelayMs?: {} | undefined
  downlinkDelayMs?: {} | undefined
  uplinkJitterMs?: {} | undefined
  downlinkJitterMs?: {} | undefined
  uplinkLossPercent?: {} | undefined
  downlinkLossPercent?: {} | undefined
}
type CreateNetworkProfileResult = {
  networkProfile?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        uplinkBandwidthBits?: {} | undefined
        downlinkBandwidthBits?: {} | undefined
        uplinkDelayMs?: {} | undefined
        downlinkDelayMs?: {} | undefined
        uplinkJitterMs?: {} | undefined
        downlinkJitterMs?: {} | undefined
        uplinkLossPercent?: {} | undefined
        downlinkLossPercent?: {} | undefined
      }
    | undefined
}
type CreateProjectRequest = {
  name: {}
  defaultJobTimeoutMinutes?: {} | undefined
  vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
}
type CreateProjectResult = {
  project?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        defaultJobTimeoutMinutes?: {} | undefined
        created?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type TagOperationException = { [x: string]: unknown }
type CreateRemoteAccessSessionRequest = {
  projectArn: {}
  deviceArn: {}
  instanceArn?: {} | undefined
  sshPublicKey?: {} | undefined
  remoteDebugEnabled?: {} | undefined
  remoteRecordEnabled?: {} | undefined
  remoteRecordAppArn?: {} | undefined
  name?: {} | undefined
  clientId?: {} | undefined
  configuration?:
    | { billingMethod?: {} | undefined; vpceConfigurationArns?: {} | undefined }
    | undefined
  interactionMode?: {} | undefined
  skipAppResign?: {} | undefined
}
type CreateRemoteAccessSessionResult = {
  remoteAccessSession?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        message?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        device?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              manufacturer?: {} | undefined
              model?: {} | undefined
              modelId?: {} | undefined
              formFactor?: {} | undefined
              platform?: {} | undefined
              os?: {} | undefined
              cpu?:
                | {
                    frequency?: {} | undefined
                    architecture?: {} | undefined
                    clock?: {} | undefined
                  }
                | undefined
              resolution?: { width?: {} | undefined; height?: {} | undefined } | undefined
              heapSize?: {} | undefined
              memory?: {} | undefined
              image?: {} | undefined
              carrier?: {} | undefined
              radio?: {} | undefined
              remoteAccessEnabled?: {} | undefined
              remoteDebugEnabled?: {} | undefined
              fleetType?: {} | undefined
              fleetName?: {} | undefined
              instances?: {} | undefined
              availability?: {} | undefined
            }
          | undefined
        instanceArn?: {} | undefined
        remoteDebugEnabled?: {} | undefined
        remoteRecordEnabled?: {} | undefined
        remoteRecordAppArn?: {} | undefined
        hostAddress?: {} | undefined
        clientId?: {} | undefined
        billingMethod?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        endpoint?: {} | undefined
        deviceUdid?: {} | undefined
        interactionMode?: {} | undefined
        skipAppResign?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type CreateTestGridProjectRequest = {
  name: {}
  description?: {} | undefined
  vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
}
type CreateTestGridProjectResult = {
  testGridProject?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
        created?: {} | undefined
      }
    | undefined
}
type InternalServiceException = { [x: string]: unknown }
type CreateTestGridUrlRequest = { projectArn: {}; expiresInSeconds: {} }
type CreateTestGridUrlResult = { url?: {} | undefined; expires?: {} | undefined }
type CreateUploadRequest = { projectArn: {}; name: {}; type: {}; contentType?: {} | undefined }
type CreateUploadResult = {
  upload?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
        url?: {} | undefined
        metadata?: {} | undefined
        contentType?: {} | undefined
        message?: {} | undefined
        category?: {} | undefined
      }
    | undefined
}
type CreateVPCEConfigurationRequest = {
  vpceConfigurationName: {}
  vpceServiceName: {}
  serviceDnsName: {}
  vpceConfigurationDescription?: {} | undefined
}
type CreateVPCEConfigurationResult = {
  vpceConfiguration?:
    | {
        arn?: {} | undefined
        vpceConfigurationName?: {} | undefined
        vpceServiceName?: {} | undefined
        serviceDnsName?: {} | undefined
        vpceConfigurationDescription?: {} | undefined
      }
    | undefined
}
type DeleteDevicePoolRequest = { arn: {} }
type DeleteDevicePoolResult = { [x: string]: unknown }
type DeleteInstanceProfileRequest = { arn: {} }
type DeleteInstanceProfileResult = { [x: string]: unknown }
type DeleteNetworkProfileRequest = { arn: {} }
type DeleteNetworkProfileResult = { [x: string]: unknown }
type DeleteProjectRequest = { arn: {} }
type DeleteProjectResult = { [x: string]: unknown }
type DeleteRemoteAccessSessionRequest = { arn: {} }
type DeleteRemoteAccessSessionResult = { [x: string]: unknown }
type DeleteRunRequest = { arn: {} }
type DeleteRunResult = { [x: string]: unknown }
type DeleteTestGridProjectRequest = { projectArn: {} }
type DeleteTestGridProjectResult = { [x: string]: unknown }
type CannotDeleteException = { [x: string]: unknown }
type DeleteUploadRequest = { arn: {} }
type DeleteUploadResult = { [x: string]: unknown }
type DeleteVPCEConfigurationRequest = { arn: {} }
type DeleteVPCEConfigurationResult = { [x: string]: unknown }
type InvalidOperationException = { [x: string]: unknown }
type GetAccountSettingsRequest = { [x: string]: unknown }
type GetAccountSettingsResult = {
  accountSettings?:
    | {
        awsAccountNumber?: {} | undefined
        unmeteredDevices?: {} | undefined
        unmeteredRemoteAccessDevices?: {} | undefined
        maxJobTimeoutMinutes?: {} | undefined
        trialMinutes?: { total?: {} | undefined; remaining?: {} | undefined } | undefined
        maxSlots?: {} | undefined
        defaultJobTimeoutMinutes?: {} | undefined
        skipAppResign?: {} | undefined
      }
    | undefined
}
type GetDeviceRequest = { arn: {} }
type GetDeviceResult = {
  device?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        manufacturer?: {} | undefined
        model?: {} | undefined
        modelId?: {} | undefined
        formFactor?: {} | undefined
        platform?: {} | undefined
        os?: {} | undefined
        cpu?:
          | { frequency?: {} | undefined; architecture?: {} | undefined; clock?: {} | undefined }
          | undefined
        resolution?: { width?: {} | undefined; height?: {} | undefined } | undefined
        heapSize?: {} | undefined
        memory?: {} | undefined
        image?: {} | undefined
        carrier?: {} | undefined
        radio?: {} | undefined
        remoteAccessEnabled?: {} | undefined
        remoteDebugEnabled?: {} | undefined
        fleetType?: {} | undefined
        fleetName?: {} | undefined
        instances?: {} | undefined
        availability?: {} | undefined
      }
    | undefined
}
type GetDeviceInstanceRequest = { arn: {} }
type GetDeviceInstanceResult = {
  deviceInstance?:
    | {
        arn?: {} | undefined
        deviceArn?: {} | undefined
        labels?: {} | undefined
        status?: {} | undefined
        udid?: {} | undefined
        instanceProfile?:
          | {
              arn?: {} | undefined
              packageCleanup?: {} | undefined
              excludeAppPackagesFromCleanup?: {} | undefined
              rebootAfterUse?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetDevicePoolRequest = { arn: {} }
type GetDevicePoolResult = {
  devicePool?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        rules?: {} | undefined
        maxDevices?: {} | undefined
      }
    | undefined
}
type GetDevicePoolCompatibilityRequest = {
  devicePoolArn: {}
  appArn?: {} | undefined
  testType?: {} | undefined
  test?:
    | {
        type: {}
        testPackageArn?: {} | undefined
        testSpecArn?: {} | undefined
        filter?: {} | undefined
        parameters?: {} | undefined
      }
    | undefined
  configuration?:
    | {
        extraDataPackageArn?: {} | undefined
        networkProfileArn?: {} | undefined
        locale?: {} | undefined
        location?: { latitude: {}; longitude: {} } | undefined
        vpceConfigurationArns?: {} | undefined
        customerArtifactPaths?:
          | {
              iosPaths?: {} | undefined
              androidPaths?: {} | undefined
              deviceHostPaths?: {} | undefined
            }
          | undefined
        radios?:
          | {
              wifi?: {} | undefined
              bluetooth?: {} | undefined
              nfc?: {} | undefined
              gps?: {} | undefined
            }
          | undefined
        auxiliaryApps?: {} | undefined
        billingMethod?: {} | undefined
      }
    | undefined
}
type GetDevicePoolCompatibilityResult = {
  compatibleDevices?: {} | undefined
  incompatibleDevices?: {} | undefined
}
type GetInstanceProfileRequest = { arn: {} }
type GetInstanceProfileResult = {
  instanceProfile?:
    | {
        arn?: {} | undefined
        packageCleanup?: {} | undefined
        excludeAppPackagesFromCleanup?: {} | undefined
        rebootAfterUse?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
      }
    | undefined
}
type GetJobRequest = { arn: {} }
type GetJobResult = {
  job?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        device?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              manufacturer?: {} | undefined
              model?: {} | undefined
              modelId?: {} | undefined
              formFactor?: {} | undefined
              platform?: {} | undefined
              os?: {} | undefined
              cpu?:
                | {
                    frequency?: {} | undefined
                    architecture?: {} | undefined
                    clock?: {} | undefined
                  }
                | undefined
              resolution?: { width?: {} | undefined; height?: {} | undefined } | undefined
              heapSize?: {} | undefined
              memory?: {} | undefined
              image?: {} | undefined
              carrier?: {} | undefined
              radio?: {} | undefined
              remoteAccessEnabled?: {} | undefined
              remoteDebugEnabled?: {} | undefined
              fleetType?: {} | undefined
              fleetName?: {} | undefined
              instances?: {} | undefined
              availability?: {} | undefined
            }
          | undefined
        instanceArn?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        videoEndpoint?: {} | undefined
        videoCapture?: {} | undefined
      }
    | undefined
}
type GetNetworkProfileRequest = { arn: {} }
type GetNetworkProfileResult = {
  networkProfile?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        uplinkBandwidthBits?: {} | undefined
        downlinkBandwidthBits?: {} | undefined
        uplinkDelayMs?: {} | undefined
        downlinkDelayMs?: {} | undefined
        uplinkJitterMs?: {} | undefined
        downlinkJitterMs?: {} | undefined
        uplinkLossPercent?: {} | undefined
        downlinkLossPercent?: {} | undefined
      }
    | undefined
}
type GetOfferingStatusRequest = { nextToken?: {} | undefined }
type GetOfferingStatusResult = {
  current?: {} | undefined
  nextPeriod?: {} | undefined
  nextToken?: {} | undefined
}
type NotEligibleException = { [x: string]: unknown }
type GetProjectRequest = { arn: {} }
type GetProjectResult = {
  project?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        defaultJobTimeoutMinutes?: {} | undefined
        created?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type GetRemoteAccessSessionRequest = { arn: {} }
type GetRemoteAccessSessionResult = {
  remoteAccessSession?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        message?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        device?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              manufacturer?: {} | undefined
              model?: {} | undefined
              modelId?: {} | undefined
              formFactor?: {} | undefined
              platform?: {} | undefined
              os?: {} | undefined
              cpu?:
                | {
                    frequency?: {} | undefined
                    architecture?: {} | undefined
                    clock?: {} | undefined
                  }
                | undefined
              resolution?: { width?: {} | undefined; height?: {} | undefined } | undefined
              heapSize?: {} | undefined
              memory?: {} | undefined
              image?: {} | undefined
              carrier?: {} | undefined
              radio?: {} | undefined
              remoteAccessEnabled?: {} | undefined
              remoteDebugEnabled?: {} | undefined
              fleetType?: {} | undefined
              fleetName?: {} | undefined
              instances?: {} | undefined
              availability?: {} | undefined
            }
          | undefined
        instanceArn?: {} | undefined
        remoteDebugEnabled?: {} | undefined
        remoteRecordEnabled?: {} | undefined
        remoteRecordAppArn?: {} | undefined
        hostAddress?: {} | undefined
        clientId?: {} | undefined
        billingMethod?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        endpoint?: {} | undefined
        deviceUdid?: {} | undefined
        interactionMode?: {} | undefined
        skipAppResign?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type GetRunRequest = { arn: {} }
type GetRunResult = {
  run?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        platform?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        totalJobs?: {} | undefined
        completedJobs?: {} | undefined
        billingMethod?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        networkProfile?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              type?: {} | undefined
              uplinkBandwidthBits?: {} | undefined
              downlinkBandwidthBits?: {} | undefined
              uplinkDelayMs?: {} | undefined
              downlinkDelayMs?: {} | undefined
              uplinkJitterMs?: {} | undefined
              downlinkJitterMs?: {} | undefined
              uplinkLossPercent?: {} | undefined
              downlinkLossPercent?: {} | undefined
            }
          | undefined
        parsingResultUrl?: {} | undefined
        resultCode?: {} | undefined
        seed?: {} | undefined
        appUpload?: {} | undefined
        eventCount?: {} | undefined
        jobTimeoutMinutes?: {} | undefined
        devicePoolArn?: {} | undefined
        locale?: {} | undefined
        radios?:
          | {
              wifi?: {} | undefined
              bluetooth?: {} | undefined
              nfc?: {} | undefined
              gps?: {} | undefined
            }
          | undefined
        location?: { latitude: {}; longitude: {} } | undefined
        customerArtifactPaths?:
          | {
              iosPaths?: {} | undefined
              androidPaths?: {} | undefined
              deviceHostPaths?: {} | undefined
            }
          | undefined
        webUrl?: {} | undefined
        skipAppResign?: {} | undefined
        testSpecArn?: {} | undefined
        deviceSelectionResult?:
          | {
              filters?: {} | undefined
              matchedDevicesCount?: {} | undefined
              maxDevices?: {} | undefined
            }
          | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type GetSuiteRequest = { arn: {} }
type GetSuiteResult = {
  suite?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetTestRequest = { arn: {} }
type GetTestResult = {
  test?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetTestGridProjectRequest = { projectArn: {} }
type GetTestGridProjectResult = {
  testGridProject?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
        created?: {} | undefined
      }
    | undefined
}
type GetTestGridSessionRequest = {
  projectArn?: {} | undefined
  sessionId?: {} | undefined
  sessionArn?: {} | undefined
}
type GetTestGridSessionResult = {
  testGridSession?:
    | {
        arn?: {} | undefined
        status?: {} | undefined
        created?: {} | undefined
        ended?: {} | undefined
        billingMinutes?: {} | undefined
        seleniumProperties?: {} | undefined
      }
    | undefined
}
type GetUploadRequest = { arn: {} }
type GetUploadResult = {
  upload?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
        url?: {} | undefined
        metadata?: {} | undefined
        contentType?: {} | undefined
        message?: {} | undefined
        category?: {} | undefined
      }
    | undefined
}
type GetVPCEConfigurationRequest = { arn: {} }
type GetVPCEConfigurationResult = {
  vpceConfiguration?:
    | {
        arn?: {} | undefined
        vpceConfigurationName?: {} | undefined
        vpceServiceName?: {} | undefined
        serviceDnsName?: {} | undefined
        vpceConfigurationDescription?: {} | undefined
      }
    | undefined
}
type InstallToRemoteAccessSessionRequest = { remoteAccessSessionArn: {}; appArn: {} }
type InstallToRemoteAccessSessionResult = {
  appUpload?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
        url?: {} | undefined
        metadata?: {} | undefined
        contentType?: {} | undefined
        message?: {} | undefined
        category?: {} | undefined
      }
    | undefined
}
type ListArtifactsRequest = { arn: {}; type: {}; nextToken?: {} | undefined }
type ListArtifactsResult = { artifacts?: {} | undefined; nextToken?: {} | undefined }
type ListDeviceInstancesRequest = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListDeviceInstancesResult = { deviceInstances?: {} | undefined; nextToken?: {} | undefined }
type ListDevicePoolsRequest = { arn: {}; type?: {} | undefined; nextToken?: {} | undefined }
type ListDevicePoolsResult = { devicePools?: {} | undefined; nextToken?: {} | undefined }
type ListDevicesRequest = {
  arn?: {} | undefined
  nextToken?: {} | undefined
  filters?: {} | undefined
}
type ListDevicesResult = { devices?: {} | undefined; nextToken?: {} | undefined }
type ListInstanceProfilesRequest = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListInstanceProfilesResult = { instanceProfiles?: {} | undefined; nextToken?: {} | undefined }
type ListJobsRequest = { arn: {}; nextToken?: {} | undefined }
type ListJobsResult = { jobs?: {} | undefined; nextToken?: {} | undefined }
type ListNetworkProfilesRequest = { arn: {}; type?: {} | undefined; nextToken?: {} | undefined }
type ListNetworkProfilesResult = { networkProfiles?: {} | undefined; nextToken?: {} | undefined }
type ListOfferingPromotionsRequest = { nextToken?: {} | undefined }
type ListOfferingPromotionsResult = {
  offeringPromotions?: {} | undefined
  nextToken?: {} | undefined
}
type ListOfferingTransactionsRequest = { nextToken?: {} | undefined }
type ListOfferingTransactionsResult = {
  offeringTransactions?: {} | undefined
  nextToken?: {} | undefined
}
type ListOfferingsRequest = { nextToken?: {} | undefined }
type ListOfferingsResult = { offerings?: {} | undefined; nextToken?: {} | undefined }
type ListProjectsRequest = { arn?: {} | undefined; nextToken?: {} | undefined }
type ListProjectsResult = { projects?: {} | undefined; nextToken?: {} | undefined }
type ListRemoteAccessSessionsRequest = { arn: {}; nextToken?: {} | undefined }
type ListRemoteAccessSessionsResult = {
  remoteAccessSessions?: {} | undefined
  nextToken?: {} | undefined
}
type ListRunsRequest = { arn: {}; nextToken?: {} | undefined }
type ListRunsResult = { runs?: {} | undefined; nextToken?: {} | undefined }
type ListSamplesRequest = { arn: {}; nextToken?: {} | undefined }
type ListSamplesResult = { samples?: {} | undefined; nextToken?: {} | undefined }
type ListSuitesRequest = { arn: {}; nextToken?: {} | undefined }
type ListSuitesResult = { suites?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListTestGridProjectsRequest = { maxResult?: {} | undefined; nextToken?: {} | undefined }
type ListTestGridProjectsResult = { testGridProjects?: {} | undefined; nextToken?: {} | undefined }
type ListTestGridSessionActionsRequest = {
  sessionArn: {}
  maxResult?: {} | undefined
  nextToken?: {} | undefined
}
type ListTestGridSessionActionsResult = { actions?: {} | undefined; nextToken?: {} | undefined }
type ListTestGridSessionArtifactsRequest = {
  sessionArn: {}
  type?: {} | undefined
  maxResult?: {} | undefined
  nextToken?: {} | undefined
}
type ListTestGridSessionArtifactsResult = { artifacts?: {} | undefined; nextToken?: {} | undefined }
type ListTestGridSessionsRequest = {
  projectArn: {}
  status?: {} | undefined
  creationTimeAfter?: {} | undefined
  creationTimeBefore?: {} | undefined
  endTimeAfter?: {} | undefined
  endTimeBefore?: {} | undefined
  maxResult?: {} | undefined
  nextToken?: {} | undefined
}
type ListTestGridSessionsResult = { testGridSessions?: {} | undefined; nextToken?: {} | undefined }
type ListTestsRequest = { arn: {}; nextToken?: {} | undefined }
type ListTestsResult = { tests?: {} | undefined; nextToken?: {} | undefined }
type ListUniqueProblemsRequest = { arn: {}; nextToken?: {} | undefined }
type ListUniqueProblemsResult = { uniqueProblems?: {} | undefined; nextToken?: {} | undefined }
type ListUploadsRequest = { arn: {}; type?: {} | undefined; nextToken?: {} | undefined }
type ListUploadsResult = { uploads?: {} | undefined; nextToken?: {} | undefined }
type ListVPCEConfigurationsRequest = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListVPCEConfigurationsResult = {
  vpceConfigurations?: {} | undefined
  nextToken?: {} | undefined
}
type PurchaseOfferingRequest = {
  offeringId: {}
  quantity: {}
  offeringPromotionId?: {} | undefined
}
type PurchaseOfferingResult = {
  offeringTransaction?:
    | {
        offeringStatus?:
          | {
              type?: {} | undefined
              offering?:
                | {
                    id?: {} | undefined
                    description?: {} | undefined
                    type?: {} | undefined
                    platform?: {} | undefined
                    recurringCharges?: {} | undefined
                  }
                | undefined
              quantity?: {} | undefined
              effectiveOn?: {} | undefined
            }
          | undefined
        transactionId?: {} | undefined
        offeringPromotionId?: {} | undefined
        createdOn?: {} | undefined
        cost?: { amount?: {} | undefined; currencyCode?: {} | undefined } | undefined
      }
    | undefined
}
type RenewOfferingRequest = { offeringId: {}; quantity: {} }
type RenewOfferingResult = {
  offeringTransaction?:
    | {
        offeringStatus?:
          | {
              type?: {} | undefined
              offering?:
                | {
                    id?: {} | undefined
                    description?: {} | undefined
                    type?: {} | undefined
                    platform?: {} | undefined
                    recurringCharges?: {} | undefined
                  }
                | undefined
              quantity?: {} | undefined
              effectiveOn?: {} | undefined
            }
          | undefined
        transactionId?: {} | undefined
        offeringPromotionId?: {} | undefined
        createdOn?: {} | undefined
        cost?: { amount?: {} | undefined; currencyCode?: {} | undefined } | undefined
      }
    | undefined
}
type ScheduleRunRequest = {
  projectArn: {}
  appArn?: {} | undefined
  devicePoolArn?: {} | undefined
  deviceSelectionConfiguration?: { filters: {}; maxDevices: {} } | undefined
  name?: {} | undefined
  test: {
    type: {}
    testPackageArn?: {} | undefined
    testSpecArn?: {} | undefined
    filter?: {} | undefined
    parameters?: {} | undefined
  }
  configuration?:
    | {
        extraDataPackageArn?: {} | undefined
        networkProfileArn?: {} | undefined
        locale?: {} | undefined
        location?: { latitude: {}; longitude: {} } | undefined
        vpceConfigurationArns?: {} | undefined
        customerArtifactPaths?:
          | {
              iosPaths?: {} | undefined
              androidPaths?: {} | undefined
              deviceHostPaths?: {} | undefined
            }
          | undefined
        radios?:
          | {
              wifi?: {} | undefined
              bluetooth?: {} | undefined
              nfc?: {} | undefined
              gps?: {} | undefined
            }
          | undefined
        auxiliaryApps?: {} | undefined
        billingMethod?: {} | undefined
      }
    | undefined
  executionConfiguration?:
    | {
        jobTimeoutMinutes?: {} | undefined
        accountsCleanup?: {} | undefined
        appPackagesCleanup?: {} | undefined
        videoCapture?: {} | undefined
        skipAppResign?: {} | undefined
      }
    | undefined
}
type ScheduleRunResult = {
  run?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        platform?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        totalJobs?: {} | undefined
        completedJobs?: {} | undefined
        billingMethod?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        networkProfile?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              type?: {} | undefined
              uplinkBandwidthBits?: {} | undefined
              downlinkBandwidthBits?: {} | undefined
              uplinkDelayMs?: {} | undefined
              downlinkDelayMs?: {} | undefined
              uplinkJitterMs?: {} | undefined
              downlinkJitterMs?: {} | undefined
              uplinkLossPercent?: {} | undefined
              downlinkLossPercent?: {} | undefined
            }
          | undefined
        parsingResultUrl?: {} | undefined
        resultCode?: {} | undefined
        seed?: {} | undefined
        appUpload?: {} | undefined
        eventCount?: {} | undefined
        jobTimeoutMinutes?: {} | undefined
        devicePoolArn?: {} | undefined
        locale?: {} | undefined
        radios?:
          | {
              wifi?: {} | undefined
              bluetooth?: {} | undefined
              nfc?: {} | undefined
              gps?: {} | undefined
            }
          | undefined
        location?: { latitude: {}; longitude: {} } | undefined
        customerArtifactPaths?:
          | {
              iosPaths?: {} | undefined
              androidPaths?: {} | undefined
              deviceHostPaths?: {} | undefined
            }
          | undefined
        webUrl?: {} | undefined
        skipAppResign?: {} | undefined
        testSpecArn?: {} | undefined
        deviceSelectionResult?:
          | {
              filters?: {} | undefined
              matchedDevicesCount?: {} | undefined
              maxDevices?: {} | undefined
            }
          | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type IdempotencyException = { [x: string]: unknown }
type StopJobRequest = { arn: {} }
type StopJobResult = {
  job?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        device?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              manufacturer?: {} | undefined
              model?: {} | undefined
              modelId?: {} | undefined
              formFactor?: {} | undefined
              platform?: {} | undefined
              os?: {} | undefined
              cpu?:
                | {
                    frequency?: {} | undefined
                    architecture?: {} | undefined
                    clock?: {} | undefined
                  }
                | undefined
              resolution?: { width?: {} | undefined; height?: {} | undefined } | undefined
              heapSize?: {} | undefined
              memory?: {} | undefined
              image?: {} | undefined
              carrier?: {} | undefined
              radio?: {} | undefined
              remoteAccessEnabled?: {} | undefined
              remoteDebugEnabled?: {} | undefined
              fleetType?: {} | undefined
              fleetName?: {} | undefined
              instances?: {} | undefined
              availability?: {} | undefined
            }
          | undefined
        instanceArn?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        videoEndpoint?: {} | undefined
        videoCapture?: {} | undefined
      }
    | undefined
}
type StopRemoteAccessSessionRequest = { arn: {} }
type StopRemoteAccessSessionResult = {
  remoteAccessSession?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        message?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        device?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              manufacturer?: {} | undefined
              model?: {} | undefined
              modelId?: {} | undefined
              formFactor?: {} | undefined
              platform?: {} | undefined
              os?: {} | undefined
              cpu?:
                | {
                    frequency?: {} | undefined
                    architecture?: {} | undefined
                    clock?: {} | undefined
                  }
                | undefined
              resolution?: { width?: {} | undefined; height?: {} | undefined } | undefined
              heapSize?: {} | undefined
              memory?: {} | undefined
              image?: {} | undefined
              carrier?: {} | undefined
              radio?: {} | undefined
              remoteAccessEnabled?: {} | undefined
              remoteDebugEnabled?: {} | undefined
              fleetType?: {} | undefined
              fleetName?: {} | undefined
              instances?: {} | undefined
              availability?: {} | undefined
            }
          | undefined
        instanceArn?: {} | undefined
        remoteDebugEnabled?: {} | undefined
        remoteRecordEnabled?: {} | undefined
        remoteRecordAppArn?: {} | undefined
        hostAddress?: {} | undefined
        clientId?: {} | undefined
        billingMethod?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        endpoint?: {} | undefined
        deviceUdid?: {} | undefined
        interactionMode?: {} | undefined
        skipAppResign?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type StopRunRequest = { arn: {} }
type StopRunResult = {
  run?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        platform?: {} | undefined
        created?: {} | undefined
        status?: {} | undefined
        result?: {} | undefined
        started?: {} | undefined
        stopped?: {} | undefined
        counters?:
          | {
              total?: {} | undefined
              passed?: {} | undefined
              failed?: {} | undefined
              warned?: {} | undefined
              errored?: {} | undefined
              stopped?: {} | undefined
              skipped?: {} | undefined
            }
          | undefined
        message?: {} | undefined
        totalJobs?: {} | undefined
        completedJobs?: {} | undefined
        billingMethod?: {} | undefined
        deviceMinutes?:
          | { total?: {} | undefined; metered?: {} | undefined; unmetered?: {} | undefined }
          | undefined
        networkProfile?:
          | {
              arn?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
              type?: {} | undefined
              uplinkBandwidthBits?: {} | undefined
              downlinkBandwidthBits?: {} | undefined
              uplinkDelayMs?: {} | undefined
              downlinkDelayMs?: {} | undefined
              uplinkJitterMs?: {} | undefined
              downlinkJitterMs?: {} | undefined
              uplinkLossPercent?: {} | undefined
              downlinkLossPercent?: {} | undefined
            }
          | undefined
        parsingResultUrl?: {} | undefined
        resultCode?: {} | undefined
        seed?: {} | undefined
        appUpload?: {} | undefined
        eventCount?: {} | undefined
        jobTimeoutMinutes?: {} | undefined
        devicePoolArn?: {} | undefined
        locale?: {} | undefined
        radios?:
          | {
              wifi?: {} | undefined
              bluetooth?: {} | undefined
              nfc?: {} | undefined
              gps?: {} | undefined
            }
          | undefined
        location?: { latitude: {}; longitude: {} } | undefined
        customerArtifactPaths?:
          | {
              iosPaths?: {} | undefined
              androidPaths?: {} | undefined
              deviceHostPaths?: {} | undefined
            }
          | undefined
        webUrl?: {} | undefined
        skipAppResign?: {} | undefined
        testSpecArn?: {} | undefined
        deviceSelectionResult?:
          | {
              filters?: {} | undefined
              matchedDevicesCount?: {} | undefined
              maxDevices?: {} | undefined
            }
          | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type TagPolicyException = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDeviceInstanceRequest = { arn: {}; profileArn?: {} | undefined; labels?: {} | undefined }
type UpdateDeviceInstanceResult = {
  deviceInstance?:
    | {
        arn?: {} | undefined
        deviceArn?: {} | undefined
        labels?: {} | undefined
        status?: {} | undefined
        udid?: {} | undefined
        instanceProfile?:
          | {
              arn?: {} | undefined
              packageCleanup?: {} | undefined
              excludeAppPackagesFromCleanup?: {} | undefined
              rebootAfterUse?: {} | undefined
              name?: {} | undefined
              description?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateDevicePoolRequest = {
  arn: {}
  name?: {} | undefined
  description?: {} | undefined
  rules?: {} | undefined
  maxDevices?: {} | undefined
  clearMaxDevices?: {} | undefined
}
type UpdateDevicePoolResult = {
  devicePool?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        rules?: {} | undefined
        maxDevices?: {} | undefined
      }
    | undefined
}
type UpdateInstanceProfileRequest = {
  arn: {}
  name?: {} | undefined
  description?: {} | undefined
  packageCleanup?: {} | undefined
  excludeAppPackagesFromCleanup?: {} | undefined
  rebootAfterUse?: {} | undefined
}
type UpdateInstanceProfileResult = {
  instanceProfile?:
    | {
        arn?: {} | undefined
        packageCleanup?: {} | undefined
        excludeAppPackagesFromCleanup?: {} | undefined
        rebootAfterUse?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
      }
    | undefined
}
type UpdateNetworkProfileRequest = {
  arn: {}
  name?: {} | undefined
  description?: {} | undefined
  type?: {} | undefined
  uplinkBandwidthBits?: {} | undefined
  downlinkBandwidthBits?: {} | undefined
  uplinkDelayMs?: {} | undefined
  downlinkDelayMs?: {} | undefined
  uplinkJitterMs?: {} | undefined
  downlinkJitterMs?: {} | undefined
  uplinkLossPercent?: {} | undefined
  downlinkLossPercent?: {} | undefined
}
type UpdateNetworkProfileResult = {
  networkProfile?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        uplinkBandwidthBits?: {} | undefined
        downlinkBandwidthBits?: {} | undefined
        uplinkDelayMs?: {} | undefined
        downlinkDelayMs?: {} | undefined
        uplinkJitterMs?: {} | undefined
        downlinkJitterMs?: {} | undefined
        uplinkLossPercent?: {} | undefined
        downlinkLossPercent?: {} | undefined
      }
    | undefined
}
type UpdateProjectRequest = {
  arn: {}
  name?: {} | undefined
  defaultJobTimeoutMinutes?: {} | undefined
  vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
}
type UpdateProjectResult = {
  project?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        defaultJobTimeoutMinutes?: {} | undefined
        created?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
      }
    | undefined
}
type UpdateTestGridProjectRequest = {
  projectArn: {}
  name?: {} | undefined
  description?: {} | undefined
  vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
}
type UpdateTestGridProjectResult = {
  testGridProject?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        vpcConfig?: { securityGroupIds: {}; subnetIds: {}; vpcId: {} } | undefined
        created?: {} | undefined
      }
    | undefined
}
type UpdateUploadRequest = {
  arn: {}
  name?: {} | undefined
  contentType?: {} | undefined
  editContent?: {} | undefined
}
type UpdateUploadResult = {
  upload?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        created?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
        url?: {} | undefined
        metadata?: {} | undefined
        contentType?: {} | undefined
        message?: {} | undefined
        category?: {} | undefined
      }
    | undefined
}
type UpdateVPCEConfigurationRequest = {
  arn: {}
  vpceConfigurationName?: {} | undefined
  vpceServiceName?: {} | undefined
  serviceDnsName?: {} | undefined
  vpceConfigurationDescription?: {} | undefined
}
type UpdateVPCEConfigurationResult = {
  vpceConfiguration?:
    | {
        arn?: {} | undefined
        vpceConfigurationName?: {} | undefined
        vpceServiceName?: {} | undefined
        serviceDnsName?: {} | undefined
        vpceConfigurationDescription?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDevicePoolRequest }
            output: CreateDevicePoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDevicePoolRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDevicePoolRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDevicePoolRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDevicePoolRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceProfileRequest }
            output: CreateInstanceProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNetworkProfileRequest }
            output: CreateNetworkProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNetworkProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNetworkProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNetworkProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateNetworkProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: CreateProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateProjectRequest }
            output: TagOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRemoteAccessSessionRequest }
            output: CreateRemoteAccessSessionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRemoteAccessSessionRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRemoteAccessSessionRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRemoteAccessSessionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRemoteAccessSessionRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridProjectRequest }
            output: CreateTestGridProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridProjectRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridUrlRequest }
            output: CreateTestGridUrlResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridUrlRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridUrlRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateTestGridUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTestGridUrlRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateUpload': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUploadRequest }
            output: CreateUploadResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUploadRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUploadRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUploadRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUploadRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVPCEConfigurationRequest }
            output: CreateVPCEConfigurationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVPCEConfigurationRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVPCEConfigurationRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.CreateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVPCEConfigurationRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDevicePoolRequest }
            output: DeleteDevicePoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDevicePoolRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDevicePoolRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDevicePoolRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDevicePoolRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceProfileRequest }
            output: DeleteInstanceProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNetworkProfileRequest }
            output: DeleteNetworkProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNetworkProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNetworkProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNetworkProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNetworkProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: DeleteProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProjectRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemoteAccessSessionRequest }
            output: DeleteRemoteAccessSessionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemoteAccessSessionRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemoteAccessSessionRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemoteAccessSessionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRemoteAccessSessionRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRunRequest }
            output: DeleteRunResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRunRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRunRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRunRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRunRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTestGridProjectRequest }
            output: DeleteTestGridProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTestGridProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTestGridProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTestGridProjectRequest }
            output: CannotDeleteException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTestGridProjectRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteUpload': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUploadRequest }
            output: DeleteUploadResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUploadRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUploadRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUploadRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUploadRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVPCEConfigurationRequest }
            output: DeleteVPCEConfigurationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVPCEConfigurationRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVPCEConfigurationRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVPCEConfigurationRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.DeleteVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVPCEConfigurationRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAccountSettingsRequest }
            output: GetAccountSettingsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAccountSettingsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAccountSettingsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAccountSettingsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAccountSettingsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevice': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceRequest }
            output: GetDeviceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevice'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceInstanceRequest }
            output: GetDeviceInstanceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceInstanceRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceInstanceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceInstanceRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeviceInstanceRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePool': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolRequest }
            output: GetDevicePoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePoolCompatibility'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolCompatibilityRequest }
            output: GetDevicePoolCompatibilityResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePoolCompatibility'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolCompatibilityRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePoolCompatibility'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolCompatibilityRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePoolCompatibility'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolCompatibilityRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetDevicePoolCompatibility'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDevicePoolCompatibilityRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceProfileRequest }
            output: GetInstanceProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetJobRequest }
            output: GetJobResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetJobRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetJobRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetJobRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetJobRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNetworkProfileRequest }
            output: GetNetworkProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNetworkProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNetworkProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNetworkProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNetworkProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetOfferingStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOfferingStatusRequest }
            output: GetOfferingStatusResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetOfferingStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOfferingStatusRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetOfferingStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOfferingStatusRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetOfferingStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOfferingStatusRequest }
            output: NotEligibleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetOfferingStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOfferingStatusRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetOfferingStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOfferingStatusRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProjectRequest }
            output: GetProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProjectRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRemoteAccessSessionRequest }
            output: GetRemoteAccessSessionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRemoteAccessSessionRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRemoteAccessSessionRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRemoteAccessSessionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRemoteAccessSessionRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRunRequest }
            output: GetRunResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRunRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRunRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRunRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRunRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetSuite': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetSuite'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSuiteRequest }
            output: GetSuiteResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetSuite'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSuiteRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetSuite'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSuiteRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetSuite'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSuiteRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetSuite'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSuiteRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetTest': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestRequest }
            output: GetTestResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridProjectRequest }
            output: GetTestGridProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridProjectRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridSessionRequest }
            output: GetTestGridSessionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridSessionRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridSessionRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetTestGridSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTestGridSessionRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetUpload': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetUploadRequest }
            output: GetUploadResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetUploadRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetUploadRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetUploadRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetUploadRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetVPCEConfigurationRequest }
            output: GetVPCEConfigurationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetVPCEConfigurationRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetVPCEConfigurationRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.GetVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetVPCEConfigurationRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.InstallToRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: InstallToRemoteAccessSessionRequest }
            output: InstallToRemoteAccessSessionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.InstallToRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: InstallToRemoteAccessSessionRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.InstallToRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: InstallToRemoteAccessSessionRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.InstallToRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: InstallToRemoteAccessSessionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.InstallToRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: InstallToRemoteAccessSessionRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListArtifacts': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: ListArtifactsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListArtifactsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDeviceInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeviceInstancesRequest }
            output: ListDeviceInstancesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDeviceInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeviceInstancesRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDeviceInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeviceInstancesRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDeviceInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeviceInstancesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDeviceInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeviceInstancesRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListDevicePools': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevicePools'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicePoolsRequest }
            output: ListDevicePoolsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevicePools'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicePoolsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevicePools'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicePoolsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevicePools'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicePoolsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevicePools'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicePoolsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListDevices': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicesRequest }
            output: ListDevicesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicesRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicesRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListDevices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDevicesRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListInstanceProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInstanceProfilesRequest }
            output: ListInstanceProfilesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListInstanceProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInstanceProfilesRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListInstanceProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInstanceProfilesRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListInstanceProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInstanceProfilesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListInstanceProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListInstanceProfilesRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListJobs': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListJobsRequest }
            output: ListJobsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListJobsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListJobsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListJobsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListJobs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListJobsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListNetworkProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListNetworkProfilesRequest }
            output: ListNetworkProfilesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListNetworkProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListNetworkProfilesRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListNetworkProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListNetworkProfilesRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListNetworkProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListNetworkProfilesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListNetworkProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListNetworkProfilesRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingPromotions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingPromotionsRequest }
            output: ListOfferingPromotionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingPromotions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingPromotionsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingPromotions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingPromotionsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingPromotions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingPromotionsRequest }
            output: NotEligibleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingPromotions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingPromotionsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingPromotions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingPromotionsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingTransactions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingTransactionsRequest }
            output: ListOfferingTransactionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingTransactions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingTransactionsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingTransactions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingTransactionsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingTransactions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingTransactionsRequest }
            output: NotEligibleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingTransactions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingTransactionsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferingTransactions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingTransactionsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferings': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingsRequest }
            output: ListOfferingsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingsRequest }
            output: NotEligibleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListOfferings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOfferingsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListProjects': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectsRequest }
            output: ListProjectsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProjectsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRemoteAccessSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRemoteAccessSessionsRequest }
            output: ListRemoteAccessSessionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRemoteAccessSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRemoteAccessSessionsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRemoteAccessSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRemoteAccessSessionsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRemoteAccessSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRemoteAccessSessionsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRemoteAccessSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRemoteAccessSessionsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListRuns': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRunsRequest }
            output: ListRunsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRunsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRunsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRunsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListRuns'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListRunsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListSamples': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSamples'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSamplesRequest }
            output: ListSamplesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSamples'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSamplesRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSamples'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSamplesRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSamples'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSamplesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSamples'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSamplesRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListSuites': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSuites'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSuitesRequest }
            output: ListSuitesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSuites'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSuitesRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSuites'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSuitesRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSuites'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSuitesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListSuites'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListSuitesRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: TagOperationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects': {
      $post:
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridProjectsRequest }
            output: ListTestGridProjectsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridProjectsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridProjects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridProjectsRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions': {
      $post:
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionActionsRequest }
            output: ListTestGridSessionActionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionActionsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionActionsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionActionsRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts': {
      $post:
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionArtifactsRequest }
            output: ListTestGridSessionArtifactsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionArtifactsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionArtifactsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessionArtifacts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionArtifactsRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions': {
      $post:
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionsRequest }
            output: ListTestGridSessionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { maxResult?: string | undefined; nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTestGridSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestGridSessionsRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListTests': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestsRequest }
            output: ListTestsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListTests'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTestsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUniqueProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUniqueProblemsRequest }
            output: ListUniqueProblemsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUniqueProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUniqueProblemsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUniqueProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUniqueProblemsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUniqueProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUniqueProblemsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUniqueProblems'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUniqueProblemsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListUploads': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUploads'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUploadsRequest }
            output: ListUploadsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUploads'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUploadsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUploads'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUploadsRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUploads'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUploadsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListUploads'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListUploadsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListVPCEConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListVPCEConfigurationsRequest }
            output: ListVPCEConfigurationsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListVPCEConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListVPCEConfigurationsRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ListVPCEConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListVPCEConfigurationsRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.PurchaseOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PurchaseOfferingRequest }
            output: PurchaseOfferingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.PurchaseOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PurchaseOfferingRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.PurchaseOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PurchaseOfferingRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.PurchaseOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PurchaseOfferingRequest }
            output: NotEligibleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.PurchaseOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PurchaseOfferingRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.PurchaseOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PurchaseOfferingRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.RenewOffering': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.RenewOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewOfferingRequest }
            output: RenewOfferingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.RenewOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewOfferingRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.RenewOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewOfferingRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.RenewOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewOfferingRequest }
            output: NotEligibleException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.RenewOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewOfferingRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.RenewOffering'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RenewOfferingRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.ScheduleRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ScheduleRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScheduleRunRequest }
            output: ScheduleRunResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ScheduleRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScheduleRunRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ScheduleRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScheduleRunRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ScheduleRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScheduleRunRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ScheduleRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScheduleRunRequest }
            output: IdempotencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.ScheduleRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ScheduleRunRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.StopJob': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopJobRequest }
            output: StopJobResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopJobRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopJobRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopJobRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopJob'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopJobRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRemoteAccessSessionRequest }
            output: StopRemoteAccessSessionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRemoteAccessSessionRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRemoteAccessSessionRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRemoteAccessSessionRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRemoteAccessSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRemoteAccessSessionRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.StopRun': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRunRequest }
            output: StopRunResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRunRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRunRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRunRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.StopRun'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopRunRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagPolicyException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: TagOperationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceInstanceRequest }
            output: UpdateDeviceInstanceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceInstanceRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceInstanceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceInstanceRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDeviceInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeviceInstanceRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDevicePoolRequest }
            output: UpdateDevicePoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDevicePoolRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDevicePoolRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDevicePoolRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateDevicePool'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDevicePoolRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceProfileRequest }
            output: UpdateInstanceProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateInstanceProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNetworkProfileRequest }
            output: UpdateNetworkProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNetworkProfileRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNetworkProfileRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNetworkProfileRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateNetworkProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateNetworkProfileRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateProjectRequest }
            output: UpdateProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateProjectRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTestGridProjectRequest }
            output: UpdateTestGridProjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTestGridProjectRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTestGridProjectRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTestGridProjectRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateTestGridProject'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTestGridProjectRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateUpload': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUploadRequest }
            output: UpdateUploadResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUploadRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUploadRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUploadRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateUpload'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUploadRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVPCEConfigurationRequest }
            output: UpdateVPCEConfigurationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVPCEConfigurationRequest }
            output: ArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVPCEConfigurationRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVPCEConfigurationRequest }
            output: ServiceAccountException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DeviceFarm_20150623.UpdateVPCEConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVPCEConfigurationRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
