type AddTagsToOnPremisesInstancesInput = { tags: {}; instanceNames: {} }
type InstanceNameRequiredException = { [x: string]: unknown }
type InvalidInstanceNameException = { [x: string]: unknown }
type TagRequiredException = { [x: string]: unknown }
type InvalidTagException = { [x: string]: unknown }
type TagLimitExceededException = { [x: string]: unknown }
type InstanceLimitExceededException = { [x: string]: unknown }
type InstanceNotRegisteredException = { [x: string]: unknown }
type BatchGetApplicationRevisionsInput = { applicationName: {}; revisions: {} }
type BatchGetApplicationRevisionsOutput = {
  applicationName?: {} | undefined
  errorMessage?: {} | undefined
  revisions?: {} | undefined
}
type ApplicationDoesNotExistException = { [x: string]: unknown }
type ApplicationNameRequiredException = { [x: string]: unknown }
type InvalidApplicationNameException = { [x: string]: unknown }
type RevisionRequiredException = { [x: string]: unknown }
type InvalidRevisionException = { [x: string]: unknown }
type BatchLimitExceededException = { [x: string]: unknown }
type BatchGetApplicationsInput = { applicationNames: {} }
type BatchGetApplicationsOutput = { applicationsInfo?: {} | undefined }
type BatchGetDeploymentGroupsInput = { applicationName: {}; deploymentGroupNames: {} }
type BatchGetDeploymentGroupsOutput = {
  deploymentGroupsInfo?: {} | undefined
  errorMessage?: {} | undefined
}
type DeploymentGroupNameRequiredException = { [x: string]: unknown }
type InvalidDeploymentGroupNameException = { [x: string]: unknown }
type DeploymentConfigDoesNotExistException = { [x: string]: unknown }
type BatchGetDeploymentInstancesInput = { deploymentId: {}; instanceIds: {} }
type BatchGetDeploymentInstancesOutput = {
  instancesSummary?: {} | undefined
  errorMessage?: {} | undefined
}
type DeploymentIdRequiredException = { [x: string]: unknown }
type DeploymentDoesNotExistException = { [x: string]: unknown }
type InstanceIdRequiredException = { [x: string]: unknown }
type InvalidDeploymentIdException = { [x: string]: unknown }
type InvalidComputePlatformException = { [x: string]: unknown }
type BatchGetDeploymentTargetsInput = { deploymentId?: {} | undefined; targetIds?: {} | undefined }
type BatchGetDeploymentTargetsOutput = { deploymentTargets?: {} | undefined }
type DeploymentNotStartedException = { [x: string]: unknown }
type DeploymentTargetIdRequiredException = { [x: string]: unknown }
type InvalidDeploymentTargetIdException = { [x: string]: unknown }
type DeploymentTargetDoesNotExistException = { [x: string]: unknown }
type DeploymentTargetListSizeExceededException = { [x: string]: unknown }
type InstanceDoesNotExistException = { [x: string]: unknown }
type BatchGetDeploymentsInput = { deploymentIds: {} }
type BatchGetDeploymentsOutput = { deploymentsInfo?: {} | undefined }
type BatchGetOnPremisesInstancesInput = { instanceNames: {} }
type BatchGetOnPremisesInstancesOutput = { instanceInfos?: {} | undefined }
type ContinueDeploymentInput = {
  deploymentId?: {} | undefined
  deploymentWaitType?: {} | undefined
}
type DeploymentAlreadyCompletedException = { [x: string]: unknown }
type DeploymentIsNotInReadyStateException = { [x: string]: unknown }
type UnsupportedActionForDeploymentTypeException = { [x: string]: unknown }
type InvalidDeploymentWaitTypeException = { [x: string]: unknown }
type InvalidDeploymentStatusException = { [x: string]: unknown }
type CreateApplicationInput = {
  applicationName: {}
  computePlatform?: {} | undefined
  tags?: {} | undefined
}
type CreateApplicationOutput = { applicationId?: {} | undefined }
type ApplicationAlreadyExistsException = { [x: string]: unknown }
type ApplicationLimitExceededException = { [x: string]: unknown }
type InvalidTagsToAddException = { [x: string]: unknown }
type CreateDeploymentInput = {
  applicationName: {}
  deploymentGroupName?: {} | undefined
  revision?:
    | {
        revisionType?: {} | undefined
        s3Location?:
          | {
              bucket?: {} | undefined
              key?: {} | undefined
              bundleType?: {} | undefined
              version?: {} | undefined
              eTag?: {} | undefined
            }
          | undefined
        gitHubLocation?: { repository?: {} | undefined; commitId?: {} | undefined } | undefined
        string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
        appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
      }
    | undefined
  deploymentConfigName?: {} | undefined
  description?: {} | undefined
  ignoreApplicationStopFailures?: {} | undefined
  targetInstances?:
    | {
        tagFilters?: {} | undefined
        autoScalingGroups?: {} | undefined
        ec2TagSet?: { ec2TagSetList?: {} | undefined } | undefined
      }
    | undefined
  autoRollbackConfiguration?: { enabled?: {} | undefined; events?: {} | undefined } | undefined
  updateOutdatedInstancesOnly?: {} | undefined
  fileExistsBehavior?: {} | undefined
  overrideAlarmConfiguration?:
    | { enabled?: {} | undefined; ignorePollAlarmFailure?: {} | undefined; alarms?: {} | undefined }
    | undefined
}
type CreateDeploymentOutput = { deploymentId?: {} | undefined }
type DeploymentGroupDoesNotExistException = { [x: string]: unknown }
type RevisionDoesNotExistException = { [x: string]: unknown }
type InvalidDeploymentConfigNameException = { [x: string]: unknown }
type DescriptionTooLongException = { [x: string]: unknown }
type DeploymentLimitExceededException = { [x: string]: unknown }
type InvalidTargetInstancesException = { [x: string]: unknown }
type InvalidAlarmConfigException = { [x: string]: unknown }
type AlarmsLimitExceededException = { [x: string]: unknown }
type InvalidAutoRollbackConfigException = { [x: string]: unknown }
type InvalidLoadBalancerInfoException = { [x: string]: unknown }
type InvalidFileExistsBehaviorException = { [x: string]: unknown }
type InvalidRoleException = { [x: string]: unknown }
type InvalidAutoScalingGroupException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type InvalidUpdateOutdatedInstancesOnlyValueException = { [x: string]: unknown }
type InvalidIgnoreApplicationStopFailuresValueException = { [x: string]: unknown }
type InvalidGitHubAccountTokenException = { [x: string]: unknown }
type InvalidTrafficRoutingConfigurationException = { [x: string]: unknown }
type CreateDeploymentConfigInput = {
  deploymentConfigName: {}
  minimumHealthyHosts?: { type?: {} | undefined; value?: {} | undefined } | undefined
  trafficRoutingConfig?:
    | {
        type?: {} | undefined
        timeBasedCanary?:
          | { canaryPercentage?: {} | undefined; canaryInterval?: {} | undefined }
          | undefined
        timeBasedLinear?:
          | { linearPercentage?: {} | undefined; linearInterval?: {} | undefined }
          | undefined
      }
    | undefined
  computePlatform?: {} | undefined
}
type CreateDeploymentConfigOutput = { deploymentConfigId?: {} | undefined }
type DeploymentConfigNameRequiredException = { [x: string]: unknown }
type DeploymentConfigAlreadyExistsException = { [x: string]: unknown }
type InvalidMinimumHealthyHostValueException = { [x: string]: unknown }
type DeploymentConfigLimitExceededException = { [x: string]: unknown }
type CreateDeploymentGroupInput = {
  applicationName: {}
  deploymentGroupName: {}
  deploymentConfigName?: {} | undefined
  ec2TagFilters?: {} | undefined
  onPremisesInstanceTagFilters?: {} | undefined
  autoScalingGroups?: {} | undefined
  serviceRoleArn: {}
  triggerConfigurations?: {} | undefined
  alarmConfiguration?:
    | { enabled?: {} | undefined; ignorePollAlarmFailure?: {} | undefined; alarms?: {} | undefined }
    | undefined
  autoRollbackConfiguration?: { enabled?: {} | undefined; events?: {} | undefined } | undefined
  outdatedInstancesStrategy?: {} | undefined
  deploymentStyle?:
    | { deploymentType?: {} | undefined; deploymentOption?: {} | undefined }
    | undefined
  blueGreenDeploymentConfiguration?:
    | {
        terminateBlueInstancesOnDeploymentSuccess?:
          | { action?: {} | undefined; terminationWaitTimeInMinutes?: {} | undefined }
          | undefined
        deploymentReadyOption?:
          | { actionOnTimeout?: {} | undefined; waitTimeInMinutes?: {} | undefined }
          | undefined
        greenFleetProvisioningOption?: { action?: {} | undefined } | undefined
      }
    | undefined
  loadBalancerInfo?:
    | {
        elbInfoList?: {} | undefined
        targetGroupInfoList?: {} | undefined
        targetGroupPairInfoList?: {} | undefined
      }
    | undefined
  ec2TagSet?: { ec2TagSetList?: {} | undefined } | undefined
  ecsServices?: {} | undefined
  onPremisesTagSet?: { onPremisesTagSetList?: {} | undefined } | undefined
  tags?: {} | undefined
}
type CreateDeploymentGroupOutput = { deploymentGroupId?: {} | undefined }
type DeploymentGroupAlreadyExistsException = { [x: string]: unknown }
type InvalidEC2TagException = { [x: string]: unknown }
type RoleRequiredException = { [x: string]: unknown }
type DeploymentGroupLimitExceededException = { [x: string]: unknown }
type LifecycleHookLimitExceededException = { [x: string]: unknown }
type InvalidTriggerConfigException = { [x: string]: unknown }
type TriggerTargetsLimitExceededException = { [x: string]: unknown }
type InvalidDeploymentStyleException = { [x: string]: unknown }
type InvalidBlueGreenDeploymentConfigurationException = { [x: string]: unknown }
type InvalidEC2TagCombinationException = { [x: string]: unknown }
type InvalidOnPremisesTagCombinationException = { [x: string]: unknown }
type TagSetListLimitExceededException = { [x: string]: unknown }
type InvalidInputException = { [x: string]: unknown }
type InvalidECSServiceException = { [x: string]: unknown }
type InvalidTargetGroupPairException = { [x: string]: unknown }
type ECSServiceMappingLimitExceededException = { [x: string]: unknown }
type DeleteApplicationInput = { applicationName: {} }
type DeleteDeploymentConfigInput = { deploymentConfigName: {} }
type DeploymentConfigInUseException = { [x: string]: unknown }
type InvalidOperationException = { [x: string]: unknown }
type DeleteDeploymentGroupInput = { applicationName: {}; deploymentGroupName: {} }
type DeleteDeploymentGroupOutput = { hooksNotCleanedUp?: {} | undefined }
type DeleteGitHubAccountTokenInput = { tokenName?: {} | undefined }
type DeleteGitHubAccountTokenOutput = { tokenName?: {} | undefined }
type GitHubAccountTokenNameRequiredException = { [x: string]: unknown }
type GitHubAccountTokenDoesNotExistException = { [x: string]: unknown }
type InvalidGitHubAccountTokenNameException = { [x: string]: unknown }
type ResourceValidationException = { [x: string]: unknown }
type OperationNotSupportedException = { [x: string]: unknown }
type DeleteResourcesByExternalIdInput = { externalId?: {} | undefined }
type DeleteResourcesByExternalIdOutput = { [x: string]: unknown }
type DeregisterOnPremisesInstanceInput = { instanceName: {} }
type GetApplicationInput = { applicationName: {} }
type GetApplicationOutput = {
  application?:
    | {
        applicationId?: {} | undefined
        applicationName?: {} | undefined
        createTime?: {} | undefined
        linkedToGitHub?: {} | undefined
        gitHubAccountName?: {} | undefined
        computePlatform?: {} | undefined
      }
    | undefined
}
type GetApplicationRevisionInput = {
  applicationName: {}
  revision: {
    revisionType?: {} | undefined
    s3Location?:
      | {
          bucket?: {} | undefined
          key?: {} | undefined
          bundleType?: {} | undefined
          version?: {} | undefined
          eTag?: {} | undefined
        }
      | undefined
    gitHubLocation?: { repository?: {} | undefined; commitId?: {} | undefined } | undefined
    string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
    appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
  }
}
type GetApplicationRevisionOutput = {
  applicationName?: {} | undefined
  revision?:
    | {
        revisionType?: {} | undefined
        s3Location?:
          | {
              bucket?: {} | undefined
              key?: {} | undefined
              bundleType?: {} | undefined
              version?: {} | undefined
              eTag?: {} | undefined
            }
          | undefined
        gitHubLocation?: { repository?: {} | undefined; commitId?: {} | undefined } | undefined
        string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
        appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
      }
    | undefined
  revisionInfo?:
    | {
        description?: {} | undefined
        deploymentGroups?: {} | undefined
        firstUsedTime?: {} | undefined
        lastUsedTime?: {} | undefined
        registerTime?: {} | undefined
      }
    | undefined
}
type GetDeploymentInput = { deploymentId: {} }
type RelatedDeployments = {
  autoUpdateOutdatedInstancesRootDeploymentId?: {} | undefined
  autoUpdateOutdatedInstancesDeploymentIds?: {} | undefined
}
type AlarmConfiguration = {
  enabled?: {} | undefined
  ignorePollAlarmFailure?: {} | undefined
  alarms?: {} | undefined
}
type GetDeploymentOutput = {
  deploymentInfo?:
    | {
        applicationName?: {} | undefined
        deploymentGroupName?: {} | undefined
        deploymentConfigName?: {} | undefined
        deploymentId?: {} | undefined
        previousRevision?:
          | {
              revisionType?: {} | undefined
              s3Location?:
                | {
                    bucket?: {} | undefined
                    key?: {} | undefined
                    bundleType?: {} | undefined
                    version?: {} | undefined
                    eTag?: {} | undefined
                  }
                | undefined
              gitHubLocation?:
                | { repository?: {} | undefined; commitId?: {} | undefined }
                | undefined
              string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
              appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
            }
          | undefined
        revision?:
          | {
              revisionType?: {} | undefined
              s3Location?:
                | {
                    bucket?: {} | undefined
                    key?: {} | undefined
                    bundleType?: {} | undefined
                    version?: {} | undefined
                    eTag?: {} | undefined
                  }
                | undefined
              gitHubLocation?:
                | { repository?: {} | undefined; commitId?: {} | undefined }
                | undefined
              string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
              appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
            }
          | undefined
        status?: {} | undefined
        errorInformation?: { code?: {} | undefined; message?: {} | undefined } | undefined
        createTime?: {} | undefined
        startTime?: {} | undefined
        completeTime?: {} | undefined
        deploymentOverview?:
          | {
              Pending?: {} | undefined
              InProgress?: {} | undefined
              Succeeded?: {} | undefined
              Failed?: {} | undefined
              Skipped?: {} | undefined
              Ready?: {} | undefined
            }
          | undefined
        description?: {} | undefined
        creator?: {} | undefined
        ignoreApplicationStopFailures?: {} | undefined
        autoRollbackConfiguration?:
          | { enabled?: {} | undefined; events?: {} | undefined }
          | undefined
        updateOutdatedInstancesOnly?: {} | undefined
        rollbackInfo?:
          | {
              rollbackDeploymentId?: {} | undefined
              rollbackTriggeringDeploymentId?: {} | undefined
              rollbackMessage?: {} | undefined
            }
          | undefined
        deploymentStyle?:
          | { deploymentType?: {} | undefined; deploymentOption?: {} | undefined }
          | undefined
        targetInstances?:
          | {
              tagFilters?: {} | undefined
              autoScalingGroups?: {} | undefined
              ec2TagSet?: { ec2TagSetList?: {} | undefined } | undefined
            }
          | undefined
        instanceTerminationWaitTimeStarted?: {} | undefined
        blueGreenDeploymentConfiguration?:
          | {
              terminateBlueInstancesOnDeploymentSuccess?:
                | { action?: {} | undefined; terminationWaitTimeInMinutes?: {} | undefined }
                | undefined
              deploymentReadyOption?:
                | { actionOnTimeout?: {} | undefined; waitTimeInMinutes?: {} | undefined }
                | undefined
              greenFleetProvisioningOption?: { action?: {} | undefined } | undefined
            }
          | undefined
        loadBalancerInfo?:
          | {
              elbInfoList?: {} | undefined
              targetGroupInfoList?: {} | undefined
              targetGroupPairInfoList?: {} | undefined
            }
          | undefined
        additionalDeploymentStatusInfo?: {} | undefined
        fileExistsBehavior?: {} | undefined
        deploymentStatusMessages?: {} | undefined
        computePlatform?: {} | undefined
        externalId?: {} | undefined
        relatedDeployments?: RelatedDeployments | undefined
        overrideAlarmConfiguration?: AlarmConfiguration | undefined
      }
    | undefined
}
type GetDeploymentConfigInput = { deploymentConfigName: {} }
type GetDeploymentConfigOutput = {
  deploymentConfigInfo?:
    | {
        deploymentConfigId?: {} | undefined
        deploymentConfigName?: {} | undefined
        minimumHealthyHosts?: { type?: {} | undefined; value?: {} | undefined } | undefined
        createTime?: {} | undefined
        computePlatform?: {} | undefined
        trafficRoutingConfig?:
          | {
              type?: {} | undefined
              timeBasedCanary?:
                | { canaryPercentage?: {} | undefined; canaryInterval?: {} | undefined }
                | undefined
              timeBasedLinear?:
                | { linearPercentage?: {} | undefined; linearInterval?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetDeploymentGroupInput = { applicationName: {}; deploymentGroupName: {} }
type GetDeploymentGroupOutput = {
  deploymentGroupInfo?:
    | {
        applicationName?: {} | undefined
        deploymentGroupId?: {} | undefined
        deploymentGroupName?: {} | undefined
        deploymentConfigName?: {} | undefined
        ec2TagFilters?: {} | undefined
        onPremisesInstanceTagFilters?: {} | undefined
        autoScalingGroups?: {} | undefined
        serviceRoleArn?: {} | undefined
        targetRevision?:
          | {
              revisionType?: {} | undefined
              s3Location?:
                | {
                    bucket?: {} | undefined
                    key?: {} | undefined
                    bundleType?: {} | undefined
                    version?: {} | undefined
                    eTag?: {} | undefined
                  }
                | undefined
              gitHubLocation?:
                | { repository?: {} | undefined; commitId?: {} | undefined }
                | undefined
              string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
              appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
            }
          | undefined
        triggerConfigurations?: {} | undefined
        alarmConfiguration?:
          | {
              enabled?: {} | undefined
              ignorePollAlarmFailure?: {} | undefined
              alarms?: {} | undefined
            }
          | undefined
        autoRollbackConfiguration?:
          | { enabled?: {} | undefined; events?: {} | undefined }
          | undefined
        deploymentStyle?:
          | { deploymentType?: {} | undefined; deploymentOption?: {} | undefined }
          | undefined
        outdatedInstancesStrategy?: {} | undefined
        blueGreenDeploymentConfiguration?:
          | {
              terminateBlueInstancesOnDeploymentSuccess?:
                | { action?: {} | undefined; terminationWaitTimeInMinutes?: {} | undefined }
                | undefined
              deploymentReadyOption?:
                | { actionOnTimeout?: {} | undefined; waitTimeInMinutes?: {} | undefined }
                | undefined
              greenFleetProvisioningOption?: { action?: {} | undefined } | undefined
            }
          | undefined
        loadBalancerInfo?:
          | {
              elbInfoList?: {} | undefined
              targetGroupInfoList?: {} | undefined
              targetGroupPairInfoList?: {} | undefined
            }
          | undefined
        lastSuccessfulDeployment?:
          | {
              deploymentId?: {} | undefined
              status?: {} | undefined
              endTime?: {} | undefined
              createTime?: {} | undefined
            }
          | undefined
        lastAttemptedDeployment?:
          | {
              deploymentId?: {} | undefined
              status?: {} | undefined
              endTime?: {} | undefined
              createTime?: {} | undefined
            }
          | undefined
        ec2TagSet?: { ec2TagSetList?: {} | undefined } | undefined
        onPremisesTagSet?: { onPremisesTagSetList?: {} | undefined } | undefined
        computePlatform?: {} | undefined
        ecsServices?: {} | undefined
      }
    | undefined
}
type GetDeploymentInstanceInput = { deploymentId: {}; instanceId: {} }
type GetDeploymentInstanceOutput = {
  instanceSummary?:
    | {
        deploymentId?: {} | undefined
        instanceId?: {} | undefined
        status?: {} | undefined
        lastUpdatedAt?: {} | undefined
        lifecycleEvents?: {} | undefined
        instanceType?: {} | undefined
      }
    | undefined
}
type GetDeploymentTargetInput = { deploymentId?: {} | undefined; targetId?: {} | undefined }
type CloudFormationTarget = {
  deploymentId?: {} | undefined
  targetId?: {} | undefined
  lastUpdatedAt?: {} | undefined
  lifecycleEvents?: {} | undefined
  status?: {} | undefined
  resourceType?: {} | undefined
  targetVersionWeight?: {} | undefined
}
type GetDeploymentTargetOutput = {
  deploymentTarget?:
    | {
        deploymentTargetType?: {} | undefined
        instanceTarget?:
          | {
              deploymentId?: {} | undefined
              targetId?: {} | undefined
              targetArn?: {} | undefined
              status?: {} | undefined
              lastUpdatedAt?: {} | undefined
              lifecycleEvents?: {} | undefined
              instanceLabel?: {} | undefined
            }
          | undefined
        lambdaTarget?:
          | {
              deploymentId?: {} | undefined
              targetId?: {} | undefined
              targetArn?: {} | undefined
              status?: {} | undefined
              lastUpdatedAt?: {} | undefined
              lifecycleEvents?: {} | undefined
              lambdaFunctionInfo?:
                | {
                    functionName?: {} | undefined
                    functionAlias?: {} | undefined
                    currentVersion?: {} | undefined
                    targetVersion?: {} | undefined
                    targetVersionWeight?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ecsTarget?:
          | {
              deploymentId?: {} | undefined
              targetId?: {} | undefined
              targetArn?: {} | undefined
              lastUpdatedAt?: {} | undefined
              lifecycleEvents?: {} | undefined
              status?: {} | undefined
              taskSetsInfo?: {} | undefined
            }
          | undefined
        cloudFormationTarget?: CloudFormationTarget | undefined
      }
    | undefined
}
type GetOnPremisesInstanceInput = { instanceName: {} }
type GetOnPremisesInstanceOutput = {
  instanceInfo?:
    | {
        instanceName?: {} | undefined
        iamSessionArn?: {} | undefined
        iamUserArn?: {} | undefined
        instanceArn?: {} | undefined
        registerTime?: {} | undefined
        deregisterTime?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListApplicationRevisionsInput = {
  applicationName: {}
  sortBy?: {} | undefined
  sortOrder?: {} | undefined
  s3Bucket?: {} | undefined
  s3KeyPrefix?: {} | undefined
  deployed?: {} | undefined
  nextToken?: {} | undefined
}
type ListApplicationRevisionsOutput = { revisions?: {} | undefined; nextToken?: {} | undefined }
type InvalidSortByException = { [x: string]: unknown }
type InvalidSortOrderException = { [x: string]: unknown }
type InvalidBucketNameFilterException = { [x: string]: unknown }
type InvalidKeyPrefixFilterException = { [x: string]: unknown }
type BucketNameFilterRequiredException = { [x: string]: unknown }
type InvalidDeployedStateFilterException = { [x: string]: unknown }
type InvalidNextTokenException = { [x: string]: unknown }
type ListApplicationsInput = { nextToken?: {} | undefined }
type ListApplicationsOutput = { applications?: {} | undefined; nextToken?: {} | undefined }
type ListDeploymentConfigsInput = { nextToken?: {} | undefined }
type ListDeploymentConfigsOutput = {
  deploymentConfigsList?: {} | undefined
  nextToken?: {} | undefined
}
type ListDeploymentGroupsInput = { applicationName: {}; nextToken?: {} | undefined }
type ListDeploymentGroupsOutput = {
  applicationName?: {} | undefined
  deploymentGroups?: {} | undefined
  nextToken?: {} | undefined
}
type ListDeploymentInstancesInput = {
  deploymentId: {}
  nextToken?: {} | undefined
  instanceStatusFilter?: {} | undefined
  instanceTypeFilter?: {} | undefined
}
type ListDeploymentInstancesOutput = { instancesList?: {} | undefined; nextToken?: {} | undefined }
type InvalidInstanceStatusException = { [x: string]: unknown }
type InvalidInstanceTypeException = { [x: string]: unknown }
type InvalidDeploymentInstanceTypeException = { [x: string]: unknown }
type InvalidTargetFilterNameException = { [x: string]: unknown }
type ListDeploymentTargetsInput = {
  deploymentId?: {} | undefined
  nextToken?: {} | undefined
  targetFilters?: {} | undefined
}
type ListDeploymentTargetsOutput = { targetIds?: {} | undefined; nextToken?: {} | undefined }
type ListDeploymentsInput = {
  applicationName?: {} | undefined
  deploymentGroupName?: {} | undefined
  externalId?: {} | undefined
  includeOnlyStatuses?: {} | undefined
  createTimeRange?: { start?: {} | undefined; end?: {} | undefined } | undefined
  nextToken?: {} | undefined
}
type ListDeploymentsOutput = { deployments?: {} | undefined; nextToken?: {} | undefined }
type InvalidTimeRangeException = { [x: string]: unknown }
type InvalidExternalIdException = { [x: string]: unknown }
type ListGitHubAccountTokenNamesInput = { nextToken?: {} | undefined }
type ListGitHubAccountTokenNamesOutput = {
  tokenNameList?: {} | undefined
  nextToken?: {} | undefined
}
type ListOnPremisesInstancesInput = {
  registrationStatus?: {} | undefined
  tagFilters?: {} | undefined
  nextToken?: {} | undefined
}
type ListOnPremisesInstancesOutput = { instanceNames?: {} | undefined; nextToken?: {} | undefined }
type InvalidRegistrationStatusException = { [x: string]: unknown }
type InvalidTagFilterException = { [x: string]: unknown }
type ListTagsForResourceInput = { ResourceArn: {}; NextToken?: {} | undefined }
type ListTagsForResourceOutput = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ArnNotSupportedException = { [x: string]: unknown }
type InvalidArnException = { [x: string]: unknown }
type ResourceArnRequiredException = { [x: string]: unknown }
type PutLifecycleEventHookExecutionStatusInput = {
  deploymentId?: {} | undefined
  lifecycleEventHookExecutionId?: {} | undefined
  status?: {} | undefined
}
type PutLifecycleEventHookExecutionStatusOutput = { lifecycleEventHookExecutionId?: {} | undefined }
type InvalidLifecycleEventHookExecutionStatusException = { [x: string]: unknown }
type InvalidLifecycleEventHookExecutionIdException = { [x: string]: unknown }
type LifecycleEventAlreadyCompletedException = { [x: string]: unknown }
type RegisterApplicationRevisionInput = {
  applicationName: {}
  description?: {} | undefined
  revision: {
    revisionType?: {} | undefined
    s3Location?:
      | {
          bucket?: {} | undefined
          key?: {} | undefined
          bundleType?: {} | undefined
          version?: {} | undefined
          eTag?: {} | undefined
        }
      | undefined
    gitHubLocation?: { repository?: {} | undefined; commitId?: {} | undefined } | undefined
    string?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
    appSpecContent?: { content?: {} | undefined; sha256?: {} | undefined } | undefined
  }
}
type RegisterOnPremisesInstanceInput = {
  instanceName: {}
  iamSessionArn?: {} | undefined
  iamUserArn?: {} | undefined
}
type InstanceNameAlreadyRegisteredException = { [x: string]: unknown }
type IamArnRequiredException = { [x: string]: unknown }
type IamSessionArnAlreadyRegisteredException = { [x: string]: unknown }
type IamUserArnAlreadyRegisteredException = { [x: string]: unknown }
type IamUserArnRequiredException = { [x: string]: unknown }
type InvalidIamSessionArnException = { [x: string]: unknown }
type InvalidIamUserArnException = { [x: string]: unknown }
type MultipleIamArnsProvidedException = { [x: string]: unknown }
type RemoveTagsFromOnPremisesInstancesInput = { tags: {}; instanceNames: {} }
type SkipWaitTimeForInstanceTerminationInput = { deploymentId?: {} | undefined }
type StopDeploymentInput = { deploymentId: {}; autoRollbackEnabled?: {} | undefined }
type StopDeploymentOutput = { status?: {} | undefined; statusMessage?: {} | undefined }
type TagResourceInput = { ResourceArn: {}; Tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type UntagResourceInput = { ResourceArn: {}; TagKeys: {} }
type UntagResourceOutput = { [x: string]: unknown }
type UpdateApplicationInput = {
  applicationName?: {} | undefined
  newApplicationName?: {} | undefined
}
type UpdateDeploymentGroupInput = {
  applicationName: {}
  currentDeploymentGroupName: {}
  newDeploymentGroupName?: {} | undefined
  deploymentConfigName?: {} | undefined
  ec2TagFilters?: {} | undefined
  onPremisesInstanceTagFilters?: {} | undefined
  autoScalingGroups?: {} | undefined
  serviceRoleArn?: {} | undefined
  triggerConfigurations?: {} | undefined
  alarmConfiguration?:
    | { enabled?: {} | undefined; ignorePollAlarmFailure?: {} | undefined; alarms?: {} | undefined }
    | undefined
  autoRollbackConfiguration?: { enabled?: {} | undefined; events?: {} | undefined } | undefined
  outdatedInstancesStrategy?: {} | undefined
  deploymentStyle?:
    | { deploymentType?: {} | undefined; deploymentOption?: {} | undefined }
    | undefined
  blueGreenDeploymentConfiguration?:
    | {
        terminateBlueInstancesOnDeploymentSuccess?:
          | { action?: {} | undefined; terminationWaitTimeInMinutes?: {} | undefined }
          | undefined
        deploymentReadyOption?:
          | { actionOnTimeout?: {} | undefined; waitTimeInMinutes?: {} | undefined }
          | undefined
        greenFleetProvisioningOption?: { action?: {} | undefined } | undefined
      }
    | undefined
  loadBalancerInfo?:
    | {
        elbInfoList?: {} | undefined
        targetGroupInfoList?: {} | undefined
        targetGroupPairInfoList?: {} | undefined
      }
    | undefined
  ec2TagSet?: { ec2TagSetList?: {} | undefined } | undefined
  ecsServices?: {} | undefined
  onPremisesTagSet?: { onPremisesTagSetList?: {} | undefined } | undefined
}
type UpdateDeploymentGroupOutput = { hooksNotCleanedUp?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: InstanceNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: TagRequiredException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: InvalidTagException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: TagLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: InstanceLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.AddTagsToOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsToOnPremisesInstancesInput }
            output: InstanceNotRegisteredException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: BatchGetApplicationRevisionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: RevisionRequiredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: InvalidRevisionException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationRevisionsInput }
            output: BatchLimitExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationsInput }
            output: BatchGetApplicationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationsInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationsInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationsInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetApplicationsInput }
            output: BatchLimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: BatchGetDeploymentGroupsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: BatchLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentGroupsInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: BatchGetDeploymentInstancesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: InstanceIdRequiredException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: BatchLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentInstancesInput }
            output: InvalidComputePlatformException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: BatchGetDeploymentTargetsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: DeploymentNotStartedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: DeploymentTargetIdRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: InvalidDeploymentTargetIdException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: DeploymentTargetDoesNotExistException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: DeploymentTargetListSizeExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentTargetsInput }
            output: InstanceDoesNotExistException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentsInput }
            output: BatchGetDeploymentsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentsInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentsInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetDeploymentsInput }
            output: BatchLimitExceededException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetOnPremisesInstancesInput }
            output: BatchGetOnPremisesInstancesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetOnPremisesInstancesInput }
            output: InstanceNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetOnPremisesInstancesInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.BatchGetOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchGetOnPremisesInstancesInput }
            output: BatchLimitExceededException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: DeploymentAlreadyCompletedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: DeploymentIsNotInReadyStateException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: UnsupportedActionForDeploymentTypeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: InvalidDeploymentWaitTypeException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ContinueDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ContinueDeploymentInput }
            output: InvalidDeploymentStatusException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.CreateApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: CreateApplicationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: ApplicationAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: ApplicationLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: InvalidComputePlatformException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateApplicationInput }
            output: InvalidTagsToAddException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeployment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: CreateDeploymentOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: RevisionRequiredException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: RevisionDoesNotExistException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidRevisionException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidDeploymentConfigNameException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: DescriptionTooLongException
            outputFormat: 'json'
            status: 491
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: DeploymentLimitExceededException
            outputFormat: 'json'
            status: 492
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidTargetInstancesException
            outputFormat: 'json'
            status: 493
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidAlarmConfigException
            outputFormat: 'json'
            status: 494
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: AlarmsLimitExceededException
            outputFormat: 'json'
            status: 495
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidAutoRollbackConfigException
            outputFormat: 'json'
            status: 496
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidLoadBalancerInfoException
            outputFormat: 'json'
            status: 497
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidFileExistsBehaviorException
            outputFormat: 'json'
            status: 498
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 499
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidAutoScalingGroupException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: ThrottlingException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidUpdateOutdatedInstancesOnlyValueException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidIgnoreApplicationStopFailuresValueException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidGitHubAccountTokenException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentInput }
            output: InvalidTrafficRoutingConfigurationException
            outputFormat: 'json'
            status: 505
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: CreateDeploymentConfigOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: InvalidDeploymentConfigNameException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: DeploymentConfigNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: DeploymentConfigAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: InvalidMinimumHealthyHostValueException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: DeploymentConfigLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: InvalidComputePlatformException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentConfigInput }
            output: InvalidTrafficRoutingConfigurationException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: CreateDeploymentGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: DeploymentGroupAlreadyExistsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidEC2TagException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidTagException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidAutoScalingGroupException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidDeploymentConfigNameException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: RoleRequiredException
            outputFormat: 'json'
            status: 491
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 492
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: DeploymentGroupLimitExceededException
            outputFormat: 'json'
            status: 493
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: LifecycleHookLimitExceededException
            outputFormat: 'json'
            status: 494
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidTriggerConfigException
            outputFormat: 'json'
            status: 495
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: TriggerTargetsLimitExceededException
            outputFormat: 'json'
            status: 496
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidAlarmConfigException
            outputFormat: 'json'
            status: 497
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: AlarmsLimitExceededException
            outputFormat: 'json'
            status: 498
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidAutoRollbackConfigException
            outputFormat: 'json'
            status: 499
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidLoadBalancerInfoException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidDeploymentStyleException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidBlueGreenDeploymentConfigurationException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidEC2TagCombinationException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidOnPremisesTagCombinationException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: TagSetListLimitExceededException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: ThrottlingException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidECSServiceException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidTargetGroupPairException
            outputFormat: 'json'
            status: 509
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: ECSServiceMappingLimitExceededException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidTagsToAddException
            outputFormat: 'json'
            status: 511
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.CreateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentGroupInput }
            output: InvalidTrafficRoutingConfigurationException
            outputFormat: 'json'
            status: 512
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteApplicationInput }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentConfigInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentConfigInput }
            output: InvalidDeploymentConfigNameException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentConfigInput }
            output: DeploymentConfigNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentConfigInput }
            output: DeploymentConfigInUseException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentConfigInput }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentGroupInput }
            output: DeleteDeploymentGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentGroupInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentGroupInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentGroupInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentGroupInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDeploymentGroupInput }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteGitHubAccountToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGitHubAccountTokenInput }
            output: DeleteGitHubAccountTokenOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteGitHubAccountToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGitHubAccountTokenInput }
            output: GitHubAccountTokenNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteGitHubAccountToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGitHubAccountTokenInput }
            output: GitHubAccountTokenDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteGitHubAccountToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGitHubAccountTokenInput }
            output: InvalidGitHubAccountTokenNameException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteGitHubAccountToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGitHubAccountTokenInput }
            output: ResourceValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeleteGitHubAccountToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGitHubAccountTokenInput }
            output: OperationNotSupportedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeDeploy_20141006.DeleteResourcesByExternalId'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcesByExternalIdInput }
        output: DeleteResourcesByExternalIdOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeregisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterOnPremisesInstanceInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeregisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterOnPremisesInstanceInput }
            output: InstanceNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.DeregisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterOnPremisesInstanceInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationInput }
            output: GetApplicationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: GetApplicationRevisionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: RevisionDoesNotExistException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: RevisionRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetApplicationRevisionInput }
            output: InvalidRevisionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeployment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInput }
            output: GetDeploymentOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentConfigInput }
            output: GetDeploymentConfigOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentConfigInput }
            output: InvalidDeploymentConfigNameException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentConfigInput }
            output: DeploymentConfigNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentConfigInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentConfig'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentConfigInput }
            output: InvalidComputePlatformException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: GetDeploymentGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentGroupInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: GetDeploymentInstanceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: InstanceIdRequiredException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: InstanceDoesNotExistException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentInstanceInput }
            output: InvalidComputePlatformException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: GetDeploymentTargetOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: DeploymentNotStartedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: DeploymentTargetIdRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: InvalidDeploymentTargetIdException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: DeploymentTargetDoesNotExistException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetDeploymentTarget'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetDeploymentTargetInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOnPremisesInstanceInput }
            output: GetOnPremisesInstanceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOnPremisesInstanceInput }
            output: InstanceNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOnPremisesInstanceInput }
            output: InstanceNotRegisteredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.GetOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetOnPremisesInstanceInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: ListApplicationRevisionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidSortByException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidSortOrderException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidBucketNameFilterException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidKeyPrefixFilterException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: BucketNameFilterRequiredException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidDeployedStateFilterException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplicationRevisions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationRevisionsInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListApplications': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationsInput }
            output: ListApplicationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListApplications'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListApplicationsInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentConfigs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentConfigsInput }
            output: ListDeploymentConfigsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentConfigs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentConfigsInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentGroupsInput }
            output: ListDeploymentGroupsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentGroupsInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentGroupsInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentGroupsInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentGroupsInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: ListDeploymentInstancesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: DeploymentNotStartedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidInstanceStatusException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidInstanceTypeException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidDeploymentInstanceTypeException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidTargetFilterNameException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentInstancesInput }
            output: InvalidComputePlatformException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: ListDeploymentTargetsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: DeploymentNotStartedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: InvalidInstanceStatusException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: InvalidInstanceTypeException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeploymentTargets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentTargetsInput }
            output: InvalidDeploymentInstanceTypeException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeployments': {
      $post:
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: ListDeploymentsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidTimeRangeException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidDeploymentStatusException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidExternalIdException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: { query: { nextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDeploymentsInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListGitHubAccountTokenNames'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGitHubAccountTokenNamesInput }
            output: ListGitHubAccountTokenNamesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListGitHubAccountTokenNames'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGitHubAccountTokenNamesInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListGitHubAccountTokenNames'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGitHubAccountTokenNamesInput }
            output: ResourceValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListGitHubAccountTokenNames'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGitHubAccountTokenNamesInput }
            output: OperationNotSupportedException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOnPremisesInstancesInput }
            output: ListOnPremisesInstancesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOnPremisesInstancesInput }
            output: InvalidRegistrationStatusException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOnPremisesInstancesInput }
            output: InvalidTagFilterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListOnPremisesInstancesInput }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceInput }
            output: ListTagsForResourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceInput }
            output: ArnNotSupportedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceInput }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceInput }
            output: ResourceArnRequiredException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: PutLifecycleEventHookExecutionStatusOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: InvalidLifecycleEventHookExecutionStatusException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: InvalidLifecycleEventHookExecutionIdException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: LifecycleEventAlreadyCompletedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutLifecycleEventHookExecutionStatusInput }
            output: UnsupportedActionForDeploymentTypeException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: DescriptionTooLongException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: RevisionRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterApplicationRevision'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterApplicationRevisionInput }
            output: InvalidRevisionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: InstanceNameAlreadyRegisteredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: IamArnRequiredException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: IamSessionArnAlreadyRegisteredException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: IamUserArnAlreadyRegisteredException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: InstanceNameRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: IamUserArnRequiredException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: InvalidIamSessionArnException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: InvalidIamUserArnException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RegisterOnPremisesInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterOnPremisesInstanceInput }
            output: MultipleIamArnsProvidedException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: InstanceNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: InvalidInstanceNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: TagRequiredException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: InvalidTagException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: TagLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: InstanceLimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsFromOnPremisesInstancesInput }
            output: InstanceNotRegisteredException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: DeploymentAlreadyCompletedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: DeploymentNotStartedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SkipWaitTimeForInstanceTerminationInput }
            output: UnsupportedActionForDeploymentTypeException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.StopDeployment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: StopDeploymentOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: DeploymentIdRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: DeploymentDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: DeploymentAlreadyCompletedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: InvalidDeploymentIdException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.StopDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDeploymentInput }
            output: UnsupportedActionForDeploymentTypeException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: TagResourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: ResourceArnRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: TagRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: InvalidTagsToAddException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: ArnNotSupportedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceInput }
            output: InvalidArnException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: UntagResourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: ResourceArnRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: TagRequiredException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: InvalidTagsToAddException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: ArnNotSupportedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceInput }
            output: InvalidArnException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.UpdateApplication': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationInput }
            output: ApplicationAlreadyExistsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateApplication'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateApplicationInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: UpdateDeploymentGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: ApplicationNameRequiredException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidApplicationNameException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: ApplicationDoesNotExistException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidDeploymentGroupNameException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: DeploymentGroupAlreadyExistsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: DeploymentGroupNameRequiredException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: DeploymentGroupDoesNotExistException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidEC2TagException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidTagException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidAutoScalingGroupException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidDeploymentConfigNameException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: DeploymentConfigDoesNotExistException
            outputFormat: 'json'
            status: 491
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidRoleException
            outputFormat: 'json'
            status: 492
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: LifecycleHookLimitExceededException
            outputFormat: 'json'
            status: 493
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidTriggerConfigException
            outputFormat: 'json'
            status: 494
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: TriggerTargetsLimitExceededException
            outputFormat: 'json'
            status: 495
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidAlarmConfigException
            outputFormat: 'json'
            status: 496
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: AlarmsLimitExceededException
            outputFormat: 'json'
            status: 497
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidAutoRollbackConfigException
            outputFormat: 'json'
            status: 498
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidLoadBalancerInfoException
            outputFormat: 'json'
            status: 499
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidDeploymentStyleException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidBlueGreenDeploymentConfigurationException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidEC2TagCombinationException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidOnPremisesTagCombinationException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: TagSetListLimitExceededException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidInputException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: ThrottlingException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidECSServiceException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidTargetGroupPairException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: ECSServiceMappingLimitExceededException
            outputFormat: 'json'
            status: 509
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeDeploy_20141006.UpdateDeploymentGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDeploymentGroupInput }
            output: InvalidTrafficRoutingConfigurationException
            outputFormat: 'json'
            status: 510
          }
    }
  },
  '/'
>
export default routes
