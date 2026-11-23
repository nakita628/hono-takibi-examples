type CreateCapacityProviderRequest = {
  name: {}
  autoScalingGroupProvider: {
    autoScalingGroupArn: {}
    managedScaling?:
      | {
          status?: {} | undefined
          targetCapacity?: {} | undefined
          minimumScalingStepSize?: {} | undefined
          maximumScalingStepSize?: {} | undefined
          instanceWarmupPeriod?: {} | undefined
        }
      | undefined
    managedTerminationProtection?: {} | undefined
  }
  tags?: {} | undefined
}
type CreateCapacityProviderResponse = {
  capacityProvider?:
    | {
        capacityProviderArn?: {} | undefined
        name?: {} | undefined
        status?: {} | undefined
        autoScalingGroupProvider?:
          | {
              autoScalingGroupArn: {}
              managedScaling?:
                | {
                    status?: {} | undefined
                    targetCapacity?: {} | undefined
                    minimumScalingStepSize?: {} | undefined
                    maximumScalingStepSize?: {} | undefined
                    instanceWarmupPeriod?: {} | undefined
                  }
                | undefined
              managedTerminationProtection?: {} | undefined
            }
          | undefined
        updateStatus?: {} | undefined
        updateStatusReason?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ServerException = { [x: string]: unknown }
type ClientException = { [x: string]: unknown }
type InvalidParameterException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type UpdateInProgressException = { [x: string]: unknown }
type CreateClusterRequest = {
  clusterName?: {} | undefined
  tags?: {} | undefined
  settings?: {} | undefined
  configuration?:
    | {
        executeCommandConfiguration?:
          | {
              kmsKeyId?: {} | undefined
              logging?: {} | undefined
              logConfiguration?:
                | {
                    cloudWatchLogGroupName?: {} | undefined
                    cloudWatchEncryptionEnabled?: {} | undefined
                    s3BucketName?: {} | undefined
                    s3EncryptionEnabled?: {} | undefined
                    s3KeyPrefix?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  capacityProviders?: {} | undefined
  defaultCapacityProviderStrategy?: {} | undefined
  serviceConnectDefaults?: { namespace: {} } | undefined
}
type CreateClusterResponse = {
  cluster?:
    | {
        clusterArn?: {} | undefined
        clusterName?: {} | undefined
        configuration?:
          | {
              executeCommandConfiguration?:
                | {
                    kmsKeyId?: {} | undefined
                    logging?: {} | undefined
                    logConfiguration?:
                      | {
                          cloudWatchLogGroupName?: {} | undefined
                          cloudWatchEncryptionEnabled?: {} | undefined
                          s3BucketName?: {} | undefined
                          s3EncryptionEnabled?: {} | undefined
                          s3KeyPrefix?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        status?: {} | undefined
        registeredContainerInstancesCount?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        activeServicesCount?: {} | undefined
        statistics?: {} | undefined
        tags?: {} | undefined
        settings?: {} | undefined
        capacityProviders?: {} | undefined
        defaultCapacityProviderStrategy?: {} | undefined
        attachments?: {} | undefined
        attachmentsStatus?: {} | undefined
        serviceConnectDefaults?: { namespace?: {} | undefined } | undefined
      }
    | undefined
}
type NamespaceNotFoundException = { [x: string]: unknown }
type LogConfiguration = { logDriver: {}; options?: {} | undefined; secretOptions?: {} | undefined }
type CreateServiceRequest = {
  cluster?: {} | undefined
  serviceName: {}
  taskDefinition?: {} | undefined
  loadBalancers?: {} | undefined
  serviceRegistries?: {} | undefined
  desiredCount?: {} | undefined
  clientToken?: {} | undefined
  launchType?: {} | undefined
  capacityProviderStrategy?: {} | undefined
  platformVersion?: {} | undefined
  role?: {} | undefined
  deploymentConfiguration?:
    | {
        deploymentCircuitBreaker?: { enable: {}; rollback: {} } | undefined
        maximumPercent?: {} | undefined
        minimumHealthyPercent?: {} | undefined
        alarms?: { alarmNames: {}; enable: {}; rollback: {} } | undefined
      }
    | undefined
  placementConstraints?: {} | undefined
  placementStrategy?: {} | undefined
  networkConfiguration?:
    | {
        awsvpcConfiguration?:
          | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
          | undefined
      }
    | undefined
  healthCheckGracePeriodSeconds?: {} | undefined
  schedulingStrategy?: {} | undefined
  deploymentController?: { type: {} } | undefined
  tags?: {} | undefined
  enableECSManagedTags?: {} | undefined
  propagateTags?: {} | undefined
  enableExecuteCommand?: {} | undefined
  serviceConnectConfiguration?:
    | {
        enabled: {}
        namespace?: {} | undefined
        services?: {} | undefined
        logConfiguration?: LogConfiguration | undefined
      }
    | undefined
}
type CreateServiceResponse = {
  service?:
    | {
        serviceArn?: {} | undefined
        serviceName?: {} | undefined
        clusterArn?: {} | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        status?: {} | undefined
        desiredCount?: {} | undefined
        runningCount?: {} | undefined
        pendingCount?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        taskDefinition?: {} | undefined
        deploymentConfiguration?:
          | {
              deploymentCircuitBreaker?: { enable: {}; rollback: {} } | undefined
              maximumPercent?: {} | undefined
              minimumHealthyPercent?: {} | undefined
              alarms?: { alarmNames: {}; enable: {}; rollback: {} } | undefined
            }
          | undefined
        taskSets?: {} | undefined
        deployments?: {} | undefined
        roleArn?: {} | undefined
        events?: {} | undefined
        createdAt?: {} | undefined
        placementConstraints?: {} | undefined
        placementStrategy?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        healthCheckGracePeriodSeconds?: {} | undefined
        schedulingStrategy?: {} | undefined
        deploymentController?: { type: {} } | undefined
        tags?: {} | undefined
        createdBy?: {} | undefined
        enableECSManagedTags?: {} | undefined
        propagateTags?: {} | undefined
        enableExecuteCommand?: {} | undefined
      }
    | undefined
}
type ClusterNotFoundException = { [x: string]: unknown }
type UnsupportedFeatureException = { [x: string]: unknown }
type PlatformUnknownException = { [x: string]: unknown }
type PlatformTaskDefinitionIncompatibilityException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type CreateTaskSetRequest = {
  service: {}
  cluster: {}
  externalId?: {} | undefined
  taskDefinition: {}
  networkConfiguration?:
    | {
        awsvpcConfiguration?:
          | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
          | undefined
      }
    | undefined
  loadBalancers?: {} | undefined
  serviceRegistries?: {} | undefined
  launchType?: {} | undefined
  capacityProviderStrategy?: {} | undefined
  platformVersion?: {} | undefined
  scale?: { value?: {} | undefined; unit?: {} | undefined } | undefined
  clientToken?: {} | undefined
  tags?: {} | undefined
}
type CreateTaskSetResponse = {
  taskSet?:
    | {
        id?: {} | undefined
        taskSetArn?: {} | undefined
        serviceArn?: {} | undefined
        clusterArn?: {} | undefined
        startedBy?: {} | undefined
        externalId?: {} | undefined
        status?: {} | undefined
        taskDefinition?: {} | undefined
        computedDesiredCount?: {} | undefined
        pendingCount?: {} | undefined
        runningCount?: {} | undefined
        createdAt?: {} | undefined
        updatedAt?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        scale?: { value?: {} | undefined; unit?: {} | undefined } | undefined
        stabilityStatus?: {} | undefined
        stabilityStatusAt?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ServiceNotFoundException = { [x: string]: unknown }
type ServiceNotActiveException = { [x: string]: unknown }
type DeleteAccountSettingRequest = { name: {}; principalArn?: {} | undefined }
type DeleteAccountSettingResponse = {
  setting?:
    | { name?: {} | undefined; value?: {} | undefined; principalArn?: {} | undefined }
    | undefined
}
type DeleteAttributesRequest = { cluster?: {} | undefined; attributes: {} }
type DeleteAttributesResponse = { attributes?: {} | undefined }
type TargetNotFoundException = { [x: string]: unknown }
type DeleteCapacityProviderRequest = { capacityProvider: {} }
type DeleteCapacityProviderResponse = {
  capacityProvider?:
    | {
        capacityProviderArn?: {} | undefined
        name?: {} | undefined
        status?: {} | undefined
        autoScalingGroupProvider?:
          | {
              autoScalingGroupArn: {}
              managedScaling?:
                | {
                    status?: {} | undefined
                    targetCapacity?: {} | undefined
                    minimumScalingStepSize?: {} | undefined
                    maximumScalingStepSize?: {} | undefined
                    instanceWarmupPeriod?: {} | undefined
                  }
                | undefined
              managedTerminationProtection?: {} | undefined
            }
          | undefined
        updateStatus?: {} | undefined
        updateStatusReason?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type DeleteClusterRequest = { cluster: {} }
type DeleteClusterResponse = {
  cluster?:
    | {
        clusterArn?: {} | undefined
        clusterName?: {} | undefined
        configuration?:
          | {
              executeCommandConfiguration?:
                | {
                    kmsKeyId?: {} | undefined
                    logging?: {} | undefined
                    logConfiguration?:
                      | {
                          cloudWatchLogGroupName?: {} | undefined
                          cloudWatchEncryptionEnabled?: {} | undefined
                          s3BucketName?: {} | undefined
                          s3EncryptionEnabled?: {} | undefined
                          s3KeyPrefix?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        status?: {} | undefined
        registeredContainerInstancesCount?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        activeServicesCount?: {} | undefined
        statistics?: {} | undefined
        tags?: {} | undefined
        settings?: {} | undefined
        capacityProviders?: {} | undefined
        defaultCapacityProviderStrategy?: {} | undefined
        attachments?: {} | undefined
        attachmentsStatus?: {} | undefined
        serviceConnectDefaults?: { namespace?: {} | undefined } | undefined
      }
    | undefined
}
type ClusterContainsContainerInstancesException = { [x: string]: unknown }
type ClusterContainsServicesException = { [x: string]: unknown }
type ClusterContainsTasksException = { [x: string]: unknown }
type DeleteServiceRequest = { cluster?: {} | undefined; service: {}; force?: {} | undefined }
type DeleteServiceResponse = {
  service?:
    | {
        serviceArn?: {} | undefined
        serviceName?: {} | undefined
        clusterArn?: {} | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        status?: {} | undefined
        desiredCount?: {} | undefined
        runningCount?: {} | undefined
        pendingCount?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        taskDefinition?: {} | undefined
        deploymentConfiguration?:
          | {
              deploymentCircuitBreaker?: { enable: {}; rollback: {} } | undefined
              maximumPercent?: {} | undefined
              minimumHealthyPercent?: {} | undefined
              alarms?: { alarmNames: {}; enable: {}; rollback: {} } | undefined
            }
          | undefined
        taskSets?: {} | undefined
        deployments?: {} | undefined
        roleArn?: {} | undefined
        events?: {} | undefined
        createdAt?: {} | undefined
        placementConstraints?: {} | undefined
        placementStrategy?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        healthCheckGracePeriodSeconds?: {} | undefined
        schedulingStrategy?: {} | undefined
        deploymentController?: { type: {} } | undefined
        tags?: {} | undefined
        createdBy?: {} | undefined
        enableECSManagedTags?: {} | undefined
        propagateTags?: {} | undefined
        enableExecuteCommand?: {} | undefined
      }
    | undefined
}
type DeleteTaskDefinitionsRequest = { taskDefinitions: {} }
type DeleteTaskDefinitionsResponse = { taskDefinitions?: {} | undefined; failures?: {} | undefined }
type DeleteTaskSetRequest = { cluster: {}; service: {}; taskSet: {}; force?: {} | undefined }
type DeleteTaskSetResponse = {
  taskSet?:
    | {
        id?: {} | undefined
        taskSetArn?: {} | undefined
        serviceArn?: {} | undefined
        clusterArn?: {} | undefined
        startedBy?: {} | undefined
        externalId?: {} | undefined
        status?: {} | undefined
        taskDefinition?: {} | undefined
        computedDesiredCount?: {} | undefined
        pendingCount?: {} | undefined
        runningCount?: {} | undefined
        createdAt?: {} | undefined
        updatedAt?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        scale?: { value?: {} | undefined; unit?: {} | undefined } | undefined
        stabilityStatus?: {} | undefined
        stabilityStatusAt?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type TaskSetNotFoundException = { [x: string]: unknown }
type DeregisterContainerInstanceRequest = {
  cluster?: {} | undefined
  containerInstance: {}
  force?: {} | undefined
}
type DeregisterContainerInstanceResponse = {
  containerInstance?:
    | {
        containerInstanceArn?: {} | undefined
        ec2InstanceId?: {} | undefined
        capacityProviderName?: {} | undefined
        version?: {} | undefined
        versionInfo?:
          | {
              agentVersion?: {} | undefined
              agentHash?: {} | undefined
              dockerVersion?: {} | undefined
            }
          | undefined
        remainingResources?: {} | undefined
        registeredResources?: {} | undefined
        status?: {} | undefined
        statusReason?: {} | undefined
        agentConnected?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        agentUpdateStatus?: {} | undefined
        attributes?: {} | undefined
        registeredAt?: {} | undefined
        attachments?: {} | undefined
        tags?: {} | undefined
        healthStatus?: { overallStatus?: {} | undefined; details?: {} | undefined } | undefined
      }
    | undefined
}
type DeregisterTaskDefinitionRequest = { taskDefinition: {} }
type DeregisterTaskDefinitionResponse = {
  taskDefinition?:
    | {
        taskDefinitionArn?: {} | undefined
        containerDefinitions?: {} | undefined
        family?: {} | undefined
        taskRoleArn?: {} | undefined
        executionRoleArn?: {} | undefined
        networkMode?: {} | undefined
        revision?: {} | undefined
        volumes?: {} | undefined
        status?: {} | undefined
        requiresAttributes?: {} | undefined
        placementConstraints?: {} | undefined
        compatibilities?: {} | undefined
        runtimePlatform?:
          | { cpuArchitecture?: {} | undefined; operatingSystemFamily?: {} | undefined }
          | undefined
        requiresCompatibilities?: {} | undefined
        cpu?: {} | undefined
        memory?: {} | undefined
        inferenceAccelerators?: {} | undefined
        pidMode?: {} | undefined
        ipcMode?: {} | undefined
        proxyConfiguration?:
          | {
              type?: {} | undefined
              containerName: {}
              properties?: { [x: string]: unknown } | undefined
            }
          | undefined
        registeredAt?: {} | undefined
        deregisteredAt?: {} | undefined
        registeredBy?: {} | undefined
        ephemeralStorage?: { sizeInGiB: {} } | undefined
      }
    | undefined
}
type DescribeCapacityProvidersRequest = {
  capacityProviders?: {} | undefined
  include?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeCapacityProvidersResponse = {
  capacityProviders?: {} | undefined
  failures?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeClustersRequest = { clusters?: {} | undefined; include?: {} | undefined }
type DescribeClustersResponse = { clusters?: {} | undefined; failures?: {} | undefined }
type DescribeContainerInstancesRequest = {
  cluster?: {} | undefined
  containerInstances: {}
  include?: {} | undefined
}
type DescribeContainerInstancesResponse = {
  containerInstances?: {} | undefined
  failures?: {} | undefined
}
type DescribeServicesRequest = { cluster?: {} | undefined; services: {}; include?: {} | undefined }
type DescribeServicesResponse = { services?: {} | undefined; failures?: {} | undefined }
type DescribeTaskDefinitionRequest = { taskDefinition: {}; include?: {} | undefined }
type DescribeTaskDefinitionResponse = {
  taskDefinition?:
    | {
        taskDefinitionArn?: {} | undefined
        containerDefinitions?: {} | undefined
        family?: {} | undefined
        taskRoleArn?: {} | undefined
        executionRoleArn?: {} | undefined
        networkMode?: {} | undefined
        revision?: {} | undefined
        volumes?: {} | undefined
        status?: {} | undefined
        requiresAttributes?: {} | undefined
        placementConstraints?: {} | undefined
        compatibilities?: {} | undefined
        runtimePlatform?:
          | { cpuArchitecture?: {} | undefined; operatingSystemFamily?: {} | undefined }
          | undefined
        requiresCompatibilities?: {} | undefined
        cpu?: {} | undefined
        memory?: {} | undefined
        inferenceAccelerators?: {} | undefined
        pidMode?: {} | undefined
        ipcMode?: {} | undefined
        proxyConfiguration?:
          | {
              type?: {} | undefined
              containerName: {}
              properties?: { [x: string]: unknown } | undefined
            }
          | undefined
        registeredAt?: {} | undefined
        deregisteredAt?: {} | undefined
        registeredBy?: {} | undefined
        ephemeralStorage?: { sizeInGiB: {} } | undefined
      }
    | undefined
  tags?: {} | undefined
}
type DescribeTaskSetsRequest = {
  cluster: {}
  service: {}
  taskSets?: {} | undefined
  include?: {} | undefined
}
type DescribeTaskSetsResponse = { taskSets?: {} | undefined; failures?: {} | undefined }
type DescribeTasksRequest = { cluster?: {} | undefined; tasks: {}; include?: {} | undefined }
type DescribeTasksResponse = { tasks?: {} | undefined; failures?: {} | undefined }
type DiscoverPollEndpointRequest = { containerInstance?: {} | undefined; cluster?: {} | undefined }
type DiscoverPollEndpointResponse = {
  endpoint?: {} | undefined
  telemetryEndpoint?: {} | undefined
  serviceConnectEndpoint?: {} | undefined
}
type ExecuteCommandRequest = {
  cluster?: {} | undefined
  container?: {} | undefined
  command: {}
  interactive: {}
  task: {}
}
type ExecuteCommandResponse = {
  clusterArn?: {} | undefined
  containerArn?: {} | undefined
  containerName?: {} | undefined
  interactive?: {} | undefined
  session?:
    | { sessionId?: {} | undefined; streamUrl?: {} | undefined; tokenValue?: {} | undefined }
    | undefined
  taskArn?: {} | undefined
}
type TargetNotConnectedException = { [x: string]: unknown }
type GetTaskProtectionRequest = { cluster: {}; tasks?: {} | undefined }
type GetTaskProtectionResponse = { protectedTasks?: {} | undefined; failures?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type ListAccountSettingsRequest = {
  name?: {} | undefined
  value?: {} | undefined
  principalArn?: {} | undefined
  effectiveSettings?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListAccountSettingsResponse = { settings?: {} | undefined; nextToken?: {} | undefined }
type ListAttributesRequest = {
  cluster?: {} | undefined
  targetType: {}
  attributeName?: {} | undefined
  attributeValue?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListAttributesResponse = { attributes?: {} | undefined; nextToken?: {} | undefined }
type ListClustersRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListClustersResponse = { clusterArns?: {} | undefined; nextToken?: {} | undefined }
type ListContainerInstancesRequest = {
  cluster?: {} | undefined
  filter?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  status?: {} | undefined
}
type ListContainerInstancesResponse = {
  containerInstanceArns?: {} | undefined
  nextToken?: {} | undefined
}
type ListServicesRequest = {
  cluster?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  launchType?: {} | undefined
  schedulingStrategy?: {} | undefined
}
type ListServicesResponse = { serviceArns?: {} | undefined; nextToken?: {} | undefined }
type ListServicesByNamespaceRequest = {
  namespace: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListServicesByNamespaceResponse = { serviceArns?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceRequest = { resourceArn: {} }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type ListTaskDefinitionFamiliesRequest = {
  familyPrefix?: {} | undefined
  status?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListTaskDefinitionFamiliesResponse = { families?: {} | undefined; nextToken?: {} | undefined }
type ListTaskDefinitionsRequest = {
  familyPrefix?: {} | undefined
  status?: {} | undefined
  sort?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListTaskDefinitionsResponse = {
  taskDefinitionArns?: {} | undefined
  nextToken?: {} | undefined
}
type ListTasksRequest = {
  cluster?: {} | undefined
  containerInstance?: {} | undefined
  family?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  startedBy?: {} | undefined
  serviceName?: {} | undefined
  desiredStatus?: {} | undefined
  launchType?: {} | undefined
}
type ListTasksResponse = { taskArns?: {} | undefined; nextToken?: {} | undefined }
type PutAccountSettingRequest = { name: {}; value: {}; principalArn?: {} | undefined }
type PutAccountSettingResponse = {
  setting?:
    | { name?: {} | undefined; value?: {} | undefined; principalArn?: {} | undefined }
    | undefined
}
type PutAccountSettingDefaultRequest = { name: {}; value: {} }
type PutAccountSettingDefaultResponse = {
  setting?:
    | { name?: {} | undefined; value?: {} | undefined; principalArn?: {} | undefined }
    | undefined
}
type PutAttributesRequest = { cluster?: {} | undefined; attributes: {} }
type PutAttributesResponse = { attributes?: {} | undefined }
type AttributeLimitExceededException = { [x: string]: unknown }
type PutClusterCapacityProvidersRequest = {
  cluster: {}
  capacityProviders: {}
  defaultCapacityProviderStrategy: {}
}
type PutClusterCapacityProvidersResponse = {
  cluster?:
    | {
        clusterArn?: {} | undefined
        clusterName?: {} | undefined
        configuration?:
          | {
              executeCommandConfiguration?:
                | {
                    kmsKeyId?: {} | undefined
                    logging?: {} | undefined
                    logConfiguration?:
                      | {
                          cloudWatchLogGroupName?: {} | undefined
                          cloudWatchEncryptionEnabled?: {} | undefined
                          s3BucketName?: {} | undefined
                          s3EncryptionEnabled?: {} | undefined
                          s3KeyPrefix?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        status?: {} | undefined
        registeredContainerInstancesCount?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        activeServicesCount?: {} | undefined
        statistics?: {} | undefined
        tags?: {} | undefined
        settings?: {} | undefined
        capacityProviders?: {} | undefined
        defaultCapacityProviderStrategy?: {} | undefined
        attachments?: {} | undefined
        attachmentsStatus?: {} | undefined
        serviceConnectDefaults?: { namespace?: {} | undefined } | undefined
      }
    | undefined
}
type ResourceInUseException = { [x: string]: unknown }
type RegisterContainerInstanceRequest = {
  cluster?: {} | undefined
  instanceIdentityDocument?: {} | undefined
  instanceIdentityDocumentSignature?: {} | undefined
  totalResources?: {} | undefined
  versionInfo?:
    | { agentVersion?: {} | undefined; agentHash?: {} | undefined; dockerVersion?: {} | undefined }
    | undefined
  containerInstanceArn?: {} | undefined
  attributes?: {} | undefined
  platformDevices?: {} | undefined
  tags?: {} | undefined
}
type RegisterContainerInstanceResponse = {
  containerInstance?:
    | {
        containerInstanceArn?: {} | undefined
        ec2InstanceId?: {} | undefined
        capacityProviderName?: {} | undefined
        version?: {} | undefined
        versionInfo?:
          | {
              agentVersion?: {} | undefined
              agentHash?: {} | undefined
              dockerVersion?: {} | undefined
            }
          | undefined
        remainingResources?: {} | undefined
        registeredResources?: {} | undefined
        status?: {} | undefined
        statusReason?: {} | undefined
        agentConnected?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        agentUpdateStatus?: {} | undefined
        attributes?: {} | undefined
        registeredAt?: {} | undefined
        attachments?: {} | undefined
        tags?: {} | undefined
        healthStatus?: { overallStatus?: {} | undefined; details?: {} | undefined } | undefined
      }
    | undefined
}
type RegisterTaskDefinitionRequest = {
  family: {}
  taskRoleArn?: {} | undefined
  executionRoleArn?: {} | undefined
  networkMode?: {} | undefined
  containerDefinitions: {}
  volumes?: {} | undefined
  placementConstraints?: {} | undefined
  requiresCompatibilities?: {} | undefined
  cpu?: {} | undefined
  memory?: {} | undefined
  tags?: {} | undefined
  pidMode?: {} | undefined
  ipcMode?: {} | undefined
  proxyConfiguration?:
    | {
        type?: {} | undefined
        containerName: {}
        properties?: { [x: string]: unknown } | undefined
      }
    | undefined
  inferenceAccelerators?: {} | undefined
  ephemeralStorage?: { sizeInGiB: {} } | undefined
  runtimePlatform?:
    | { cpuArchitecture?: {} | undefined; operatingSystemFamily?: {} | undefined }
    | undefined
}
type RegisterTaskDefinitionResponse = {
  taskDefinition?:
    | {
        taskDefinitionArn?: {} | undefined
        containerDefinitions?: {} | undefined
        family?: {} | undefined
        taskRoleArn?: {} | undefined
        executionRoleArn?: {} | undefined
        networkMode?: {} | undefined
        revision?: {} | undefined
        volumes?: {} | undefined
        status?: {} | undefined
        requiresAttributes?: {} | undefined
        placementConstraints?: {} | undefined
        compatibilities?: {} | undefined
        runtimePlatform?:
          | { cpuArchitecture?: {} | undefined; operatingSystemFamily?: {} | undefined }
          | undefined
        requiresCompatibilities?: {} | undefined
        cpu?: {} | undefined
        memory?: {} | undefined
        inferenceAccelerators?: {} | undefined
        pidMode?: {} | undefined
        ipcMode?: {} | undefined
        proxyConfiguration?:
          | {
              type?: {} | undefined
              containerName: {}
              properties?: { [x: string]: unknown } | undefined
            }
          | undefined
        registeredAt?: {} | undefined
        deregisteredAt?: {} | undefined
        registeredBy?: {} | undefined
        ephemeralStorage?: { sizeInGiB: {} } | undefined
      }
    | undefined
  tags?: {} | undefined
}
type RunTaskRequest = {
  capacityProviderStrategy?: {} | undefined
  cluster?: {} | undefined
  count?: {} | undefined
  enableECSManagedTags?: {} | undefined
  enableExecuteCommand?: {} | undefined
  group?: {} | undefined
  launchType?: {} | undefined
  networkConfiguration?:
    | {
        awsvpcConfiguration?:
          | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
          | undefined
      }
    | undefined
  overrides?:
    | {
        containerOverrides?: {} | undefined
        cpu?: {} | undefined
        inferenceAcceleratorOverrides?: {} | undefined
        executionRoleArn?: {} | undefined
        memory?: {} | undefined
        taskRoleArn?: {} | undefined
        ephemeralStorage?: { sizeInGiB: {} } | undefined
      }
    | undefined
  placementConstraints?: {} | undefined
  placementStrategy?: {} | undefined
  platformVersion?: {} | undefined
  propagateTags?: {} | undefined
  referenceId?: {} | undefined
  startedBy?: {} | undefined
  tags?: {} | undefined
  taskDefinition: {}
}
type RunTaskResponse = { tasks?: {} | undefined; failures?: {} | undefined }
type BlockedException = { [x: string]: unknown }
type StartTaskRequest = {
  cluster?: {} | undefined
  containerInstances: {}
  enableECSManagedTags?: {} | undefined
  enableExecuteCommand?: {} | undefined
  group?: {} | undefined
  networkConfiguration?:
    | {
        awsvpcConfiguration?:
          | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
          | undefined
      }
    | undefined
  overrides?:
    | {
        containerOverrides?: {} | undefined
        cpu?: {} | undefined
        inferenceAcceleratorOverrides?: {} | undefined
        executionRoleArn?: {} | undefined
        memory?: {} | undefined
        taskRoleArn?: {} | undefined
        ephemeralStorage?: { sizeInGiB: {} } | undefined
      }
    | undefined
  propagateTags?: {} | undefined
  referenceId?: {} | undefined
  startedBy?: {} | undefined
  tags?: {} | undefined
  taskDefinition: {}
}
type StartTaskResponse = { tasks?: {} | undefined; failures?: {} | undefined }
type StopTaskRequest = { cluster?: {} | undefined; task: {}; reason?: {} | undefined }
type StopTaskResponse = {
  task?:
    | {
        attachments?: {} | undefined
        attributes?: {} | undefined
        availabilityZone?: {} | undefined
        capacityProviderName?: {} | undefined
        clusterArn?: {} | undefined
        connectivity?: {} | undefined
        connectivityAt?: {} | undefined
        containerInstanceArn?: {} | undefined
        containers?: {} | undefined
        cpu?: {} | undefined
        createdAt?: {} | undefined
        desiredStatus?: {} | undefined
        enableExecuteCommand?: {} | undefined
        executionStoppedAt?: {} | undefined
        group?: {} | undefined
        healthStatus?: {} | undefined
        inferenceAccelerators?: {} | undefined
        lastStatus?: {} | undefined
        launchType?: {} | undefined
        memory?: {} | undefined
        overrides?:
          | {
              containerOverrides?: {} | undefined
              cpu?: {} | undefined
              inferenceAcceleratorOverrides?: {} | undefined
              executionRoleArn?: {} | undefined
              memory?: {} | undefined
              taskRoleArn?: {} | undefined
              ephemeralStorage?: { sizeInGiB: {} } | undefined
            }
          | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        pullStartedAt?: {} | undefined
        pullStoppedAt?: {} | undefined
        startedAt?: {} | undefined
        startedBy?: {} | undefined
        stopCode?: {} | undefined
        stoppedAt?: {} | undefined
        stoppedReason?: {} | undefined
        stoppingAt?: {} | undefined
        tags?: {} | undefined
        taskArn?: {} | undefined
        taskDefinitionArn?: {} | undefined
        version?: {} | undefined
        ephemeralStorage?: { sizeInGiB: {} } | undefined
      }
    | undefined
}
type SubmitAttachmentStateChangesRequest = { cluster?: {} | undefined; attachments: {} }
type SubmitAttachmentStateChangesResponse = { acknowledgment?: {} | undefined }
type SubmitContainerStateChangeRequest = {
  cluster?: {} | undefined
  task?: {} | undefined
  containerName?: {} | undefined
  runtimeId?: {} | undefined
  status?: {} | undefined
  exitCode?: {} | undefined
  reason?: {} | undefined
  networkBindings?: {} | undefined
}
type SubmitContainerStateChangeResponse = { acknowledgment?: {} | undefined }
type SubmitTaskStateChangeRequest = {
  cluster?: {} | undefined
  task?: {} | undefined
  status?: {} | undefined
  reason?: {} | undefined
  containers?: {} | undefined
  attachments?: {} | undefined
  managedAgents?: {} | undefined
  pullStartedAt?: {} | undefined
  pullStoppedAt?: {} | undefined
  executionStoppedAt?: {} | undefined
}
type SubmitTaskStateChangeResponse = { acknowledgment?: {} | undefined }
type TagResourceRequest = { resourceArn: {}; tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateCapacityProviderRequest = {
  name: {}
  autoScalingGroupProvider: {
    managedScaling?:
      | {
          status?: {} | undefined
          targetCapacity?: {} | undefined
          minimumScalingStepSize?: {} | undefined
          maximumScalingStepSize?: {} | undefined
          instanceWarmupPeriod?: {} | undefined
        }
      | undefined
    managedTerminationProtection?: {} | undefined
  }
}
type UpdateCapacityProviderResponse = {
  capacityProvider?:
    | {
        capacityProviderArn?: {} | undefined
        name?: {} | undefined
        status?: {} | undefined
        autoScalingGroupProvider?:
          | {
              autoScalingGroupArn: {}
              managedScaling?:
                | {
                    status?: {} | undefined
                    targetCapacity?: {} | undefined
                    minimumScalingStepSize?: {} | undefined
                    maximumScalingStepSize?: {} | undefined
                    instanceWarmupPeriod?: {} | undefined
                  }
                | undefined
              managedTerminationProtection?: {} | undefined
            }
          | undefined
        updateStatus?: {} | undefined
        updateStatusReason?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type UpdateClusterRequest = {
  cluster: {}
  settings?: {} | undefined
  configuration?:
    | {
        executeCommandConfiguration?:
          | {
              kmsKeyId?: {} | undefined
              logging?: {} | undefined
              logConfiguration?:
                | {
                    cloudWatchLogGroupName?: {} | undefined
                    cloudWatchEncryptionEnabled?: {} | undefined
                    s3BucketName?: {} | undefined
                    s3EncryptionEnabled?: {} | undefined
                    s3KeyPrefix?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  serviceConnectDefaults?: { namespace: {} } | undefined
}
type UpdateClusterResponse = {
  cluster?:
    | {
        clusterArn?: {} | undefined
        clusterName?: {} | undefined
        configuration?:
          | {
              executeCommandConfiguration?:
                | {
                    kmsKeyId?: {} | undefined
                    logging?: {} | undefined
                    logConfiguration?:
                      | {
                          cloudWatchLogGroupName?: {} | undefined
                          cloudWatchEncryptionEnabled?: {} | undefined
                          s3BucketName?: {} | undefined
                          s3EncryptionEnabled?: {} | undefined
                          s3KeyPrefix?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        status?: {} | undefined
        registeredContainerInstancesCount?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        activeServicesCount?: {} | undefined
        statistics?: {} | undefined
        tags?: {} | undefined
        settings?: {} | undefined
        capacityProviders?: {} | undefined
        defaultCapacityProviderStrategy?: {} | undefined
        attachments?: {} | undefined
        attachmentsStatus?: {} | undefined
        serviceConnectDefaults?: { namespace?: {} | undefined } | undefined
      }
    | undefined
}
type UpdateClusterSettingsRequest = { cluster: {}; settings: {} }
type UpdateClusterSettingsResponse = {
  cluster?:
    | {
        clusterArn?: {} | undefined
        clusterName?: {} | undefined
        configuration?:
          | {
              executeCommandConfiguration?:
                | {
                    kmsKeyId?: {} | undefined
                    logging?: {} | undefined
                    logConfiguration?:
                      | {
                          cloudWatchLogGroupName?: {} | undefined
                          cloudWatchEncryptionEnabled?: {} | undefined
                          s3BucketName?: {} | undefined
                          s3EncryptionEnabled?: {} | undefined
                          s3KeyPrefix?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        status?: {} | undefined
        registeredContainerInstancesCount?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        activeServicesCount?: {} | undefined
        statistics?: {} | undefined
        tags?: {} | undefined
        settings?: {} | undefined
        capacityProviders?: {} | undefined
        defaultCapacityProviderStrategy?: {} | undefined
        attachments?: {} | undefined
        attachmentsStatus?: {} | undefined
        serviceConnectDefaults?: { namespace?: {} | undefined } | undefined
      }
    | undefined
}
type UpdateContainerAgentRequest = { cluster?: {} | undefined; containerInstance: {} }
type UpdateContainerAgentResponse = {
  containerInstance?:
    | {
        containerInstanceArn?: {} | undefined
        ec2InstanceId?: {} | undefined
        capacityProviderName?: {} | undefined
        version?: {} | undefined
        versionInfo?:
          | {
              agentVersion?: {} | undefined
              agentHash?: {} | undefined
              dockerVersion?: {} | undefined
            }
          | undefined
        remainingResources?: {} | undefined
        registeredResources?: {} | undefined
        status?: {} | undefined
        statusReason?: {} | undefined
        agentConnected?: {} | undefined
        runningTasksCount?: {} | undefined
        pendingTasksCount?: {} | undefined
        agentUpdateStatus?: {} | undefined
        attributes?: {} | undefined
        registeredAt?: {} | undefined
        attachments?: {} | undefined
        tags?: {} | undefined
        healthStatus?: { overallStatus?: {} | undefined; details?: {} | undefined } | undefined
      }
    | undefined
}
type NoUpdateAvailableException = { [x: string]: unknown }
type MissingVersionException = { [x: string]: unknown }
type UpdateContainerInstancesStateRequest = {
  cluster?: {} | undefined
  containerInstances: {}
  status: {}
}
type UpdateContainerInstancesStateResponse = {
  containerInstances?: {} | undefined
  failures?: {} | undefined
}
type UpdateServiceRequest = {
  cluster?: {} | undefined
  service: {}
  desiredCount?: {} | undefined
  taskDefinition?: {} | undefined
  capacityProviderStrategy?: {} | undefined
  deploymentConfiguration?:
    | {
        deploymentCircuitBreaker?: { enable: {}; rollback: {} } | undefined
        maximumPercent?: {} | undefined
        minimumHealthyPercent?: {} | undefined
        alarms?: { alarmNames: {}; enable: {}; rollback: {} } | undefined
      }
    | undefined
  networkConfiguration?:
    | {
        awsvpcConfiguration?:
          | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
          | undefined
      }
    | undefined
  placementConstraints?: {} | undefined
  placementStrategy?: {} | undefined
  platformVersion?: {} | undefined
  forceNewDeployment?: {} | undefined
  healthCheckGracePeriodSeconds?: {} | undefined
  enableExecuteCommand?: {} | undefined
  enableECSManagedTags?: {} | undefined
  loadBalancers?: {} | undefined
  propagateTags?: {} | undefined
  serviceRegistries?: {} | undefined
  serviceConnectConfiguration?:
    | {
        enabled: {}
        namespace?: {} | undefined
        services?: {} | undefined
        logConfiguration?: LogConfiguration | undefined
      }
    | undefined
}
type UpdateServiceResponse = {
  service?:
    | {
        serviceArn?: {} | undefined
        serviceName?: {} | undefined
        clusterArn?: {} | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        status?: {} | undefined
        desiredCount?: {} | undefined
        runningCount?: {} | undefined
        pendingCount?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        taskDefinition?: {} | undefined
        deploymentConfiguration?:
          | {
              deploymentCircuitBreaker?: { enable: {}; rollback: {} } | undefined
              maximumPercent?: {} | undefined
              minimumHealthyPercent?: {} | undefined
              alarms?: { alarmNames: {}; enable: {}; rollback: {} } | undefined
            }
          | undefined
        taskSets?: {} | undefined
        deployments?: {} | undefined
        roleArn?: {} | undefined
        events?: {} | undefined
        createdAt?: {} | undefined
        placementConstraints?: {} | undefined
        placementStrategy?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        healthCheckGracePeriodSeconds?: {} | undefined
        schedulingStrategy?: {} | undefined
        deploymentController?: { type: {} } | undefined
        tags?: {} | undefined
        createdBy?: {} | undefined
        enableECSManagedTags?: {} | undefined
        propagateTags?: {} | undefined
        enableExecuteCommand?: {} | undefined
      }
    | undefined
}
type UpdateServicePrimaryTaskSetRequest = { cluster: {}; service: {}; primaryTaskSet: {} }
type UpdateServicePrimaryTaskSetResponse = {
  taskSet?:
    | {
        id?: {} | undefined
        taskSetArn?: {} | undefined
        serviceArn?: {} | undefined
        clusterArn?: {} | undefined
        startedBy?: {} | undefined
        externalId?: {} | undefined
        status?: {} | undefined
        taskDefinition?: {} | undefined
        computedDesiredCount?: {} | undefined
        pendingCount?: {} | undefined
        runningCount?: {} | undefined
        createdAt?: {} | undefined
        updatedAt?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        scale?: { value?: {} | undefined; unit?: {} | undefined } | undefined
        stabilityStatus?: {} | undefined
        stabilityStatusAt?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type UpdateTaskProtectionRequest = {
  cluster: {}
  tasks: {}
  protectionEnabled: {}
  expiresInMinutes?: {} | undefined
}
type UpdateTaskProtectionResponse = { protectedTasks?: {} | undefined; failures?: {} | undefined }
type UpdateTaskSetRequest = {
  cluster: {}
  service: {}
  taskSet: {}
  scale: { value?: {} | undefined; unit?: {} | undefined }
}
type UpdateTaskSetResponse = {
  taskSet?:
    | {
        id?: {} | undefined
        taskSetArn?: {} | undefined
        serviceArn?: {} | undefined
        clusterArn?: {} | undefined
        startedBy?: {} | undefined
        externalId?: {} | undefined
        status?: {} | undefined
        taskDefinition?: {} | undefined
        computedDesiredCount?: {} | undefined
        pendingCount?: {} | undefined
        runningCount?: {} | undefined
        createdAt?: {} | undefined
        updatedAt?: {} | undefined
        launchType?: {} | undefined
        capacityProviderStrategy?: {} | undefined
        platformVersion?: {} | undefined
        platformFamily?: {} | undefined
        networkConfiguration?:
          | {
              awsvpcConfiguration?:
                | { subnets: {}; securityGroups?: {} | undefined; assignPublicIp?: {} | undefined }
                | undefined
            }
          | undefined
        loadBalancers?: {} | undefined
        serviceRegistries?: {} | undefined
        scale?: { value?: {} | undefined; unit?: {} | undefined } | undefined
        stabilityStatus?: {} | undefined
        stabilityStatusAt?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCapacityProviderRequest }
            output: CreateCapacityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCapacityProviderRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCapacityProviderRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCapacityProviderRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCapacityProviderRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCapacityProviderRequest }
            output: UpdateInProgressException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterRequest }
            output: CreateClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterRequest }
            output: NamespaceNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: CreateServiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: PlatformUnknownException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: PlatformTaskDefinitionIncompatibilityException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServiceRequest }
            output: NamespaceNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: CreateTaskSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: PlatformUnknownException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: PlatformTaskDefinitionIncompatibilityException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: ServiceNotActiveException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.CreateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskSetRequest }
            output: NamespaceNotFoundException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAccountSettingRequest }
            output: DeleteAccountSettingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAccountSettingRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAccountSettingRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAccountSettingRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAttributesRequest }
            output: DeleteAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAttributesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAttributesRequest }
            output: TargetNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAttributesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCapacityProviderRequest }
            output: DeleteCapacityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCapacityProviderRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCapacityProviderRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteCapacityProviderRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: DeleteClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: ClusterContainsContainerInstancesException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: ClusterContainsServicesException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: ClusterContainsTasksException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteClusterRequest }
            output: UpdateInProgressException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServiceRequest }
            output: DeleteServiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServiceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServiceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServiceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServiceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServiceRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskDefinitionsRequest }
            output: DeleteTaskDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskDefinitionsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskDefinitionsRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskDefinitionsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskDefinitionsRequest }
            output: ServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: DeleteTaskSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: ServiceNotActiveException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskSetRequest }
            output: TaskSetNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterContainerInstanceRequest }
            output: DeregisterContainerInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterContainerInstanceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterContainerInstanceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterContainerInstanceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterContainerInstanceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTaskDefinitionRequest }
            output: DeregisterTaskDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTaskDefinitionRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTaskDefinitionRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTaskDefinitionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCapacityProvidersRequest }
            output: DescribeCapacityProvidersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCapacityProvidersRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCapacityProvidersRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCapacityProvidersRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeClustersRequest }
            output: DescribeClustersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeClustersRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeClustersRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeClustersRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContainerInstancesRequest }
            output: DescribeContainerInstancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContainerInstancesRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContainerInstancesRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContainerInstancesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeContainerInstancesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServicesRequest }
            output: DescribeServicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServicesRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServicesRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServicesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServicesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskDefinitionRequest }
            output: DescribeTaskDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskDefinitionRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskDefinitionRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskDefinitionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: DescribeTaskSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskSetsRequest }
            output: ServiceNotActiveException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTasksRequest }
            output: DescribeTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTasksRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTasksRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTasksRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DescribeTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTasksRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DiscoverPollEndpointRequest }
            output: DiscoverPollEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DiscoverPollEndpointRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DiscoverPollEndpointRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: ExecuteCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ExecuteCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExecuteCommandRequest }
            output: TargetNotConnectedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: GetTaskProtectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: ServerException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.GetTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetTaskProtectionRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAccountSettingsRequest }
            output: ListAccountSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAccountSettingsRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAccountSettingsRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAccountSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAccountSettingsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAttributesRequest }
            output: ListAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAttributesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAttributesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListClustersRequest }
            output: ListClustersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListClustersRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListClustersRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListClustersRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContainerInstancesRequest }
            output: ListContainerInstancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContainerInstancesRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContainerInstancesRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContainerInstancesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListContainerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListContainerInstancesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesRequest }
            output: ListServicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServices'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesByNamespaceRequest }
            output: ListServicesByNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesByNamespaceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesByNamespaceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesByNamespaceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListServicesByNamespaceRequest }
            output: NamespaceNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTagsForResource'
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
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionFamiliesRequest }
            output: ListTaskDefinitionFamiliesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionFamiliesRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionFamiliesRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionFamiliesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionsRequest }
            output: ListTaskDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionsRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionsRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskDefinitionsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: ListTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingRequest }
            output: PutAccountSettingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSetting'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingDefaultRequest }
            output: PutAccountSettingDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingDefaultRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingDefaultRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAccountSettingDefaultRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAttributesRequest }
            output: PutAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAttributesRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAttributesRequest }
            output: TargetNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAttributesRequest }
            output: AttributeLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAttributesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: PutClusterCapacityProvidersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: ResourceInUseException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutClusterCapacityProvidersRequest }
            output: UpdateInProgressException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterContainerInstanceRequest }
            output: RegisterContainerInstanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterContainerInstanceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterContainerInstanceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterContainerInstanceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTaskDefinitionRequest }
            output: RegisterTaskDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTaskDefinitionRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTaskDefinitionRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTaskDefinitionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: RunTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: PlatformUnknownException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: PlatformTaskDefinitionIncompatibilityException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.RunTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RunTaskRequest }
            output: BlockedException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StartTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskRequest }
            output: StartTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StartTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StartTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StartTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StartTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StopTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTaskRequest }
            output: StopTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StopTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTaskRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StopTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTaskRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StopTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTaskRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.StopTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopTaskRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitAttachmentStateChangesRequest }
            output: SubmitAttachmentStateChangesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitAttachmentStateChangesRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitAttachmentStateChangesRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitAttachmentStateChangesRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitAttachmentStateChangesRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitContainerStateChangeRequest }
            output: SubmitContainerStateChangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitContainerStateChangeRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitContainerStateChangeRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitContainerStateChangeRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitTaskStateChangeRequest }
            output: SubmitTaskStateChangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitTaskStateChangeRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitTaskStateChangeRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitTaskStateChangeRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SubmitTaskStateChangeRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.TagResource'
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
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UntagResource'
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
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateCapacityProviderRequest }
            output: UpdateCapacityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateCapacityProviderRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateCapacityProviderRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateCapacityProviderRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterRequest }
            output: UpdateClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterRequest }
            output: NamespaceNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterSettingsRequest }
            output: UpdateClusterSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterSettingsRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterSettingsRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterSettingsRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateClusterSettingsRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: UpdateContainerAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: UpdateInProgressException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: NoUpdateAvailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerAgentRequest }
            output: MissingVersionException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerInstancesStateRequest }
            output: UpdateContainerInstancesStateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerInstancesStateRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerInstancesStateRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerInstancesStateRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateContainerInstancesStateRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: UpdateServiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: ServiceNotActiveException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: PlatformUnknownException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: PlatformTaskDefinitionIncompatibilityException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateService'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServiceRequest }
            output: NamespaceNotFoundException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: UpdateServicePrimaryTaskSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: ServiceNotActiveException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: TaskSetNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServicePrimaryTaskSetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: UpdateTaskProtectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: ServerException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskProtectionRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: UpdateTaskSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: ServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: ClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: ClusterNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: UnsupportedFeatureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: ServiceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: ServiceNotActiveException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskSetRequest }
            output: TaskSetNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  },
  '/'
>
export default routes
