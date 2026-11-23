type AcceptEnvironmentAccountConnectionInput = { id: {} }
type AcceptEnvironmentAccountConnectionOutput = {
  environmentAccountConnection: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    environmentAccountId: {}
    environmentName: {}
    id: {}
    lastModifiedAt: {}
    managementAccountId: {}
    requestedAt: {}
    roleArn: {}
    status: {}
  }
}
type CancelComponentDeploymentInput = { componentName: {} }
type CancelComponentDeploymentOutput = {
  component: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt?: {} | undefined
    lastDeploymentSucceededAt?: {} | undefined
    lastModifiedAt: {}
    name: {}
    serviceInstanceName?: {} | undefined
    serviceName?: {} | undefined
    serviceSpec?: {} | undefined
  }
}
type CancelEnvironmentDeploymentInput = { environmentName: {} }
type CancelEnvironmentDeploymentOutput = {
  environment: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentAccountConnectionId?: {} | undefined
    environmentAccountId?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    protonServiceRoleArn?: {} | undefined
    provisioning?: {} | undefined
    provisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type CancelServiceInstanceDeploymentInput = { serviceInstanceName: {}; serviceName: {} }
type CancelServiceInstanceDeploymentOutput = {
  serviceInstance: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    serviceName: {}
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type CancelServicePipelineDeploymentInput = { serviceName: {} }
type CancelServicePipelineDeploymentOutput = {
  pipeline: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type CreateComponentInput = {
  clientToken?: {} | undefined
  description?: {} | undefined
  environmentName?: {} | undefined
  manifest: {}
  name: {}
  serviceInstanceName?: {} | undefined
  serviceName?: {} | undefined
  serviceSpec?: {} | undefined
  tags?: {} | undefined
  templateFile: {}
}
type CreateComponentOutput = {
  component: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt?: {} | undefined
    lastDeploymentSucceededAt?: {} | undefined
    lastModifiedAt: {}
    name: {}
    serviceInstanceName?: {} | undefined
    serviceName?: {} | undefined
    serviceSpec?: {} | undefined
  }
}
type CreateEnvironmentInput = {
  codebuildRoleArn?: {} | undefined
  componentRoleArn?: {} | undefined
  description?: {} | undefined
  environmentAccountConnectionId?: {} | undefined
  name: {}
  protonServiceRoleArn?: {} | undefined
  provisioningRepository?: { branch: {}; name: {}; provider: {} } | undefined
  spec: {}
  tags?: {} | undefined
  templateMajorVersion: {}
  templateMinorVersion?: {} | undefined
  templateName: {}
}
type CreateEnvironmentOutput = {
  environment: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentAccountConnectionId?: {} | undefined
    environmentAccountId?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    protonServiceRoleArn?: {} | undefined
    provisioning?: {} | undefined
    provisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type CreateEnvironmentAccountConnectionInput = {
  clientToken?: {} | undefined
  codebuildRoleArn?: {} | undefined
  componentRoleArn?: {} | undefined
  environmentName: {}
  managementAccountId: {}
  roleArn?: {} | undefined
  tags?: {} | undefined
}
type CreateEnvironmentAccountConnectionOutput = {
  environmentAccountConnection: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    environmentAccountId: {}
    environmentName: {}
    id: {}
    lastModifiedAt: {}
    managementAccountId: {}
    requestedAt: {}
    roleArn: {}
    status: {}
  }
}
type CreateEnvironmentTemplateInput = {
  description?: {} | undefined
  displayName?: {} | undefined
  encryptionKey?: {} | undefined
  name: {}
  provisioning?: {} | undefined
  tags?: {} | undefined
}
type CreateEnvironmentTemplateOutput = {
  environmentTemplate: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    displayName?: {} | undefined
    encryptionKey?: {} | undefined
    lastModifiedAt: {}
    name: {}
    provisioning?: {} | undefined
    recommendedVersion?: {} | undefined
  }
}
type CreateEnvironmentTemplateVersionInput = {
  clientToken?: {} | undefined
  description?: {} | undefined
  majorVersion?: {} | undefined
  source: { s3?: { bucket: {}; key: {} } | undefined }
  tags?: {} | undefined
  templateName: {}
}
type CreateEnvironmentTemplateVersionOutput = {
  environmentTemplateVersion: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    majorVersion: {}
    minorVersion: {}
    recommendedMinorVersion?: {} | undefined
    schema?: {} | undefined
    status: {}
    statusMessage?: {} | undefined
    templateName: {}
  }
}
type CreateRepositoryInput = {
  connectionArn: {}
  encryptionKey?: {} | undefined
  name: {}
  provider: {}
  tags?: {} | undefined
}
type CreateRepositoryOutput = {
  repository: { arn: {}; connectionArn: {}; encryptionKey?: {} | undefined; name: {}; provider: {} }
}
type CreateServiceInput = {
  branchName?: {} | undefined
  description?: {} | undefined
  name: {}
  repositoryConnectionArn?: {} | undefined
  repositoryId?: {} | undefined
  spec: {}
  tags?: {} | undefined
  templateMajorVersion: {}
  templateMinorVersion?: {} | undefined
  templateName: {}
}
type CreateServiceOutput = {
  service: {
    arn: {}
    branchName?: {} | undefined
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    name: {}
    pipeline?:
      | {
          arn: {}
          createdAt: {}
          deploymentStatus: {}
          deploymentStatusMessage?: {} | undefined
          lastDeploymentAttemptedAt: {}
          lastDeploymentSucceededAt: {}
          spec?: {} | undefined
          templateMajorVersion: {}
          templateMinorVersion: {}
          templateName: {}
        }
      | undefined
    repositoryConnectionArn?: {} | undefined
    repositoryId?: {} | undefined
    spec: {}
    status: {}
    statusMessage?: {} | undefined
    templateName: {}
  }
}
type CreateServiceInstanceInput = {
  clientToken?: {} | undefined
  name: {}
  serviceName: {}
  spec: {}
  tags?: {} | undefined
  templateMajorVersion?: {} | undefined
  templateMinorVersion?: {} | undefined
}
type CreateServiceInstanceOutput = {
  serviceInstance: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    serviceName: {}
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type CreateServiceSyncConfigInput = {
  branch: {}
  filePath: {}
  repositoryName: {}
  repositoryProvider: {}
  serviceName: {}
}
type CreateServiceSyncConfigOutput = {
  serviceSyncConfig?:
    | { branch: {}; filePath: {}; repositoryName: {}; repositoryProvider: {}; serviceName: {} }
    | undefined
}
type CreateServiceTemplateInput = {
  description?: {} | undefined
  displayName?: {} | undefined
  encryptionKey?: {} | undefined
  name: {}
  pipelineProvisioning?: {} | undefined
  tags?: {} | undefined
}
type CreateServiceTemplateOutput = {
  serviceTemplate: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    displayName?: {} | undefined
    encryptionKey?: {} | undefined
    lastModifiedAt: {}
    name: {}
    pipelineProvisioning?: {} | undefined
    recommendedVersion?: {} | undefined
  }
}
type CreateServiceTemplateVersionInput = {
  clientToken?: {} | undefined
  compatibleEnvironmentTemplates: {}
  description?: {} | undefined
  majorVersion?: {} | undefined
  source: { s3?: { bucket: {}; key: {} } | undefined }
  supportedComponentSources?: {} | undefined
  tags?: {} | undefined
  templateName: {}
}
type CreateServiceTemplateVersionOutput = {
  serviceTemplateVersion: {
    arn: {}
    compatibleEnvironmentTemplates: {}
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    majorVersion: {}
    minorVersion: {}
    recommendedMinorVersion?: {} | undefined
    schema?: {} | undefined
    status: {}
    statusMessage?: {} | undefined
    supportedComponentSources?: {} | undefined
    templateName: {}
  }
}
type CreateTemplateSyncConfigInput = {
  branch: {}
  repositoryName: {}
  repositoryProvider: {}
  subdirectory?: {} | undefined
  templateName: {}
  templateType: {}
}
type CreateTemplateSyncConfigOutput = {
  templateSyncConfig?:
    | {
        branch: {}
        repositoryName: {}
        repositoryProvider: {}
        subdirectory?: {} | undefined
        templateName: {}
        templateType: {}
      }
    | undefined
}
type DeleteComponentInput = { name: {} }
type DeleteComponentOutput = {
  component?:
    | {
        arn: {}
        createdAt: {}
        deploymentStatus: {}
        deploymentStatusMessage?: {} | undefined
        description?: {} | undefined
        environmentName: {}
        lastClientRequestToken?: {} | undefined
        lastDeploymentAttemptedAt?: {} | undefined
        lastDeploymentSucceededAt?: {} | undefined
        lastModifiedAt: {}
        name: {}
        serviceInstanceName?: {} | undefined
        serviceName?: {} | undefined
        serviceSpec?: {} | undefined
      }
    | undefined
}
type DeleteEnvironmentInput = { name: {} }
type DeleteEnvironmentOutput = {
  environment?:
    | {
        arn: {}
        codebuildRoleArn?: {} | undefined
        componentRoleArn?: {} | undefined
        createdAt: {}
        deploymentStatus: {}
        deploymentStatusMessage?: {} | undefined
        description?: {} | undefined
        environmentAccountConnectionId?: {} | undefined
        environmentAccountId?: {} | undefined
        lastDeploymentAttemptedAt: {}
        lastDeploymentSucceededAt: {}
        name: {}
        protonServiceRoleArn?: {} | undefined
        provisioning?: {} | undefined
        provisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
        spec?: {} | undefined
        templateMajorVersion: {}
        templateMinorVersion: {}
        templateName: {}
      }
    | undefined
}
type DeleteEnvironmentAccountConnectionInput = { id: {} }
type DeleteEnvironmentAccountConnectionOutput = {
  environmentAccountConnection?:
    | {
        arn: {}
        codebuildRoleArn?: {} | undefined
        componentRoleArn?: {} | undefined
        environmentAccountId: {}
        environmentName: {}
        id: {}
        lastModifiedAt: {}
        managementAccountId: {}
        requestedAt: {}
        roleArn: {}
        status: {}
      }
    | undefined
}
type DeleteEnvironmentTemplateInput = { name: {} }
type DeleteEnvironmentTemplateOutput = {
  environmentTemplate?:
    | {
        arn: {}
        createdAt: {}
        description?: {} | undefined
        displayName?: {} | undefined
        encryptionKey?: {} | undefined
        lastModifiedAt: {}
        name: {}
        provisioning?: {} | undefined
        recommendedVersion?: {} | undefined
      }
    | undefined
}
type DeleteEnvironmentTemplateVersionInput = {
  majorVersion: {}
  minorVersion: {}
  templateName: {}
}
type DeleteEnvironmentTemplateVersionOutput = {
  environmentTemplateVersion?:
    | {
        arn: {}
        createdAt: {}
        description?: {} | undefined
        lastModifiedAt: {}
        majorVersion: {}
        minorVersion: {}
        recommendedMinorVersion?: {} | undefined
        schema?: {} | undefined
        status: {}
        statusMessage?: {} | undefined
        templateName: {}
      }
    | undefined
}
type DeleteRepositoryInput = { name: {}; provider: {} }
type DeleteRepositoryOutput = {
  repository?:
    | { arn: {}; connectionArn: {}; encryptionKey?: {} | undefined; name: {}; provider: {} }
    | undefined
}
type DeleteServiceInput = { name: {} }
type DeleteServiceOutput = {
  service?:
    | {
        arn: {}
        branchName?: {} | undefined
        createdAt: {}
        description?: {} | undefined
        lastModifiedAt: {}
        name: {}
        pipeline?:
          | {
              arn: {}
              createdAt: {}
              deploymentStatus: {}
              deploymentStatusMessage?: {} | undefined
              lastDeploymentAttemptedAt: {}
              lastDeploymentSucceededAt: {}
              spec?: {} | undefined
              templateMajorVersion: {}
              templateMinorVersion: {}
              templateName: {}
            }
          | undefined
        repositoryConnectionArn?: {} | undefined
        repositoryId?: {} | undefined
        spec: {}
        status: {}
        statusMessage?: {} | undefined
        templateName: {}
      }
    | undefined
}
type DeleteServiceSyncConfigInput = { serviceName: {} }
type DeleteServiceSyncConfigOutput = {
  serviceSyncConfig?:
    | { branch: {}; filePath: {}; repositoryName: {}; repositoryProvider: {}; serviceName: {} }
    | undefined
}
type DeleteServiceTemplateInput = { name: {} }
type DeleteServiceTemplateOutput = {
  serviceTemplate?:
    | {
        arn: {}
        createdAt: {}
        description?: {} | undefined
        displayName?: {} | undefined
        encryptionKey?: {} | undefined
        lastModifiedAt: {}
        name: {}
        pipelineProvisioning?: {} | undefined
        recommendedVersion?: {} | undefined
      }
    | undefined
}
type DeleteServiceTemplateVersionInput = { majorVersion: {}; minorVersion: {}; templateName: {} }
type DeleteServiceTemplateVersionOutput = {
  serviceTemplateVersion?:
    | {
        arn: {}
        compatibleEnvironmentTemplates: {}
        createdAt: {}
        description?: {} | undefined
        lastModifiedAt: {}
        majorVersion: {}
        minorVersion: {}
        recommendedMinorVersion?: {} | undefined
        schema?: {} | undefined
        status: {}
        statusMessage?: {} | undefined
        supportedComponentSources?: {} | undefined
        templateName: {}
      }
    | undefined
}
type DeleteTemplateSyncConfigInput = { templateName: {}; templateType: {} }
type DeleteTemplateSyncConfigOutput = {
  templateSyncConfig?:
    | {
        branch: {}
        repositoryName: {}
        repositoryProvider: {}
        subdirectory?: {} | undefined
        templateName: {}
        templateType: {}
      }
    | undefined
}
type GetAccountSettingsInput = { [x: string]: unknown }
type GetAccountSettingsOutput = {
  accountSettings?:
    | {
        pipelineCodebuildRoleArn?: {} | undefined
        pipelineProvisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
        pipelineServiceRoleArn?: {} | undefined
      }
    | undefined
}
type GetComponentInput = { name: {} }
type GetComponentOutput = {
  component?:
    | {
        arn: {}
        createdAt: {}
        deploymentStatus: {}
        deploymentStatusMessage?: {} | undefined
        description?: {} | undefined
        environmentName: {}
        lastClientRequestToken?: {} | undefined
        lastDeploymentAttemptedAt?: {} | undefined
        lastDeploymentSucceededAt?: {} | undefined
        lastModifiedAt: {}
        name: {}
        serviceInstanceName?: {} | undefined
        serviceName?: {} | undefined
        serviceSpec?: {} | undefined
      }
    | undefined
}
type GetEnvironmentInput = { name: {} }
type GetEnvironmentOutput = {
  environment: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentAccountConnectionId?: {} | undefined
    environmentAccountId?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    protonServiceRoleArn?: {} | undefined
    provisioning?: {} | undefined
    provisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type GetEnvironmentAccountConnectionInput = { id: {} }
type GetEnvironmentAccountConnectionOutput = {
  environmentAccountConnection: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    environmentAccountId: {}
    environmentName: {}
    id: {}
    lastModifiedAt: {}
    managementAccountId: {}
    requestedAt: {}
    roleArn: {}
    status: {}
  }
}
type GetEnvironmentTemplateInput = { name: {} }
type GetEnvironmentTemplateOutput = {
  environmentTemplate: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    displayName?: {} | undefined
    encryptionKey?: {} | undefined
    lastModifiedAt: {}
    name: {}
    provisioning?: {} | undefined
    recommendedVersion?: {} | undefined
  }
}
type GetEnvironmentTemplateVersionInput = { majorVersion: {}; minorVersion: {}; templateName: {} }
type GetEnvironmentTemplateVersionOutput = {
  environmentTemplateVersion: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    majorVersion: {}
    minorVersion: {}
    recommendedMinorVersion?: {} | undefined
    schema?: {} | undefined
    status: {}
    statusMessage?: {} | undefined
    templateName: {}
  }
}
type GetRepositoryInput = { name: {}; provider: {} }
type GetRepositoryOutput = {
  repository: { arn: {}; connectionArn: {}; encryptionKey?: {} | undefined; name: {}; provider: {} }
}
type GetRepositorySyncStatusInput = {
  branch: {}
  repositoryName: {}
  repositoryProvider: {}
  syncType: {}
}
type GetRepositorySyncStatusOutput = {
  latestSync?: { events: {}; startedAt: {}; status: {} } | undefined
}
type GetResourcesSummaryInput = { [x: string]: unknown }
type GetResourcesSummaryOutput = {
  counts: {
    components?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
    environmentTemplates?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
    environments?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
    pipelines?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
    serviceInstances?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
    serviceTemplates?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
    services?:
      | {
          behindMajor?: {} | undefined
          behindMinor?: {} | undefined
          failed?: {} | undefined
          total: {}
          upToDate?: {} | undefined
        }
      | undefined
  }
}
type GetServiceInput = { name: {} }
type GetServiceOutput = {
  service?:
    | {
        arn: {}
        branchName?: {} | undefined
        createdAt: {}
        description?: {} | undefined
        lastModifiedAt: {}
        name: {}
        pipeline?:
          | {
              arn: {}
              createdAt: {}
              deploymentStatus: {}
              deploymentStatusMessage?: {} | undefined
              lastDeploymentAttemptedAt: {}
              lastDeploymentSucceededAt: {}
              spec?: {} | undefined
              templateMajorVersion: {}
              templateMinorVersion: {}
              templateName: {}
            }
          | undefined
        repositoryConnectionArn?: {} | undefined
        repositoryId?: {} | undefined
        spec: {}
        status: {}
        statusMessage?: {} | undefined
        templateName: {}
      }
    | undefined
}
type GetServiceInstanceInput = { name: {}; serviceName: {} }
type GetServiceInstanceOutput = {
  serviceInstance: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    serviceName: {}
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type GetServiceInstanceSyncStatusInput = { serviceInstanceName: {}; serviceName: {} }
type GetServiceInstanceSyncStatusOutput = {
  desiredState?:
    | { branch: {}; directory: {}; repositoryName: {}; repositoryProvider: {}; sha: {} }
    | undefined
  latestSuccessfulSync?:
    | {
        events: {}
        initialRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
        startedAt: {}
        status: {}
        target: {}
        targetRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
      }
    | undefined
  latestSync?:
    | {
        events: {}
        initialRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
        startedAt: {}
        status: {}
        target: {}
        targetRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
      }
    | undefined
}
type GetServiceSyncBlockerSummaryInput = { serviceInstanceName?: {} | undefined; serviceName: {} }
type GetServiceSyncBlockerSummaryOutput = {
  serviceSyncBlockerSummary?:
    | { latestBlockers?: {} | undefined; serviceInstanceName?: {} | undefined; serviceName: {} }
    | undefined
}
type GetServiceSyncConfigInput = { serviceName: {} }
type GetServiceSyncConfigOutput = {
  serviceSyncConfig?:
    | { branch: {}; filePath: {}; repositoryName: {}; repositoryProvider: {}; serviceName: {} }
    | undefined
}
type GetServiceTemplateInput = { name: {} }
type GetServiceTemplateOutput = {
  serviceTemplate: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    displayName?: {} | undefined
    encryptionKey?: {} | undefined
    lastModifiedAt: {}
    name: {}
    pipelineProvisioning?: {} | undefined
    recommendedVersion?: {} | undefined
  }
}
type GetServiceTemplateVersionInput = { majorVersion: {}; minorVersion: {}; templateName: {} }
type GetServiceTemplateVersionOutput = {
  serviceTemplateVersion: {
    arn: {}
    compatibleEnvironmentTemplates: {}
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    majorVersion: {}
    minorVersion: {}
    recommendedMinorVersion?: {} | undefined
    schema?: {} | undefined
    status: {}
    statusMessage?: {} | undefined
    supportedComponentSources?: {} | undefined
    templateName: {}
  }
}
type GetTemplateSyncConfigInput = { templateName: {}; templateType: {} }
type GetTemplateSyncConfigOutput = {
  templateSyncConfig?:
    | {
        branch: {}
        repositoryName: {}
        repositoryProvider: {}
        subdirectory?: {} | undefined
        templateName: {}
        templateType: {}
      }
    | undefined
}
type GetTemplateSyncStatusInput = { templateName: {}; templateType: {}; templateVersion: {} }
type GetTemplateSyncStatusOutput = {
  desiredState?:
    | { branch: {}; directory: {}; repositoryName: {}; repositoryProvider: {}; sha: {} }
    | undefined
  latestSuccessfulSync?:
    | {
        events: {}
        initialRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
        startedAt: {}
        status: {}
        target: {}
        targetRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
      }
    | undefined
  latestSync?:
    | {
        events: {}
        initialRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
        startedAt: {}
        status: {}
        target: {}
        targetRevision: {
          branch: {}
          directory: {}
          repositoryName: {}
          repositoryProvider: {}
          sha: {}
        }
      }
    | undefined
}
type ListComponentOutputsInput = { componentName: {}; nextToken?: {} | undefined }
type ListComponentOutputsOutput = { nextToken?: {} | undefined; outputs: {} }
type ListComponentProvisionedResourcesInput = { componentName: {}; nextToken?: {} | undefined }
type ListComponentProvisionedResourcesOutput = {
  nextToken?: {} | undefined
  provisionedResources: {}
}
type ListComponentsInput = {
  environmentName?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  serviceInstanceName?: {} | undefined
  serviceName?: {} | undefined
}
type ListComponentsOutput = { components: {}; nextToken?: {} | undefined }
type ListEnvironmentAccountConnectionsInput = {
  environmentName?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  requestedBy: {}
  statuses?: {} | undefined
}
type ListEnvironmentAccountConnectionsOutput = {
  environmentAccountConnections: {}
  nextToken?: {} | undefined
}
type ListEnvironmentOutputsInput = { environmentName: {}; nextToken?: {} | undefined }
type ListEnvironmentOutputsOutput = { nextToken?: {} | undefined; outputs: {} }
type ListEnvironmentProvisionedResourcesInput = { environmentName: {}; nextToken?: {} | undefined }
type ListEnvironmentProvisionedResourcesOutput = {
  nextToken?: {} | undefined
  provisionedResources: {}
}
type ListEnvironmentTemplateVersionsInput = {
  majorVersion?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  templateName: {}
}
type ListEnvironmentTemplateVersionsOutput = { nextToken?: {} | undefined; templateVersions: {} }
type ListEnvironmentTemplatesInput = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListEnvironmentTemplatesOutput = { nextToken?: {} | undefined; templates: {} }
type ListEnvironmentsInput = {
  environmentTemplates?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListEnvironmentsOutput = { environments: {}; nextToken?: {} | undefined }
type ListRepositoriesInput = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListRepositoriesOutput = { nextToken?: {} | undefined; repositories: {} }
type ListRepositorySyncDefinitionsInput = {
  nextToken?: {} | undefined
  repositoryName: {}
  repositoryProvider: {}
  syncType: {}
}
type ListRepositorySyncDefinitionsOutput = { nextToken?: {} | undefined; syncDefinitions: {} }
type ListServiceInstanceOutputsInput = {
  nextToken?: {} | undefined
  serviceInstanceName: {}
  serviceName: {}
}
type ListServiceInstanceOutputsOutput = { nextToken?: {} | undefined; outputs: {} }
type ListServiceInstanceProvisionedResourcesInput = {
  nextToken?: {} | undefined
  serviceInstanceName: {}
  serviceName: {}
}
type ListServiceInstanceProvisionedResourcesOutput = {
  nextToken?: {} | undefined
  provisionedResources: {}
}
type ListServiceInstancesInput = {
  filters?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  serviceName?: {} | undefined
  sortBy?: {} | undefined
  sortOrder?: {} | undefined
}
type ListServiceInstancesOutput = { nextToken?: {} | undefined; serviceInstances: {} }
type ListServicePipelineOutputsInput = { nextToken?: {} | undefined; serviceName: {} }
type ListServicePipelineOutputsOutput = { nextToken?: {} | undefined; outputs: {} }
type ListServicePipelineProvisionedResourcesInput = { nextToken?: {} | undefined; serviceName: {} }
type ListServicePipelineProvisionedResourcesOutput = {
  nextToken?: {} | undefined
  provisionedResources: {}
}
type ListServiceTemplateVersionsInput = {
  majorVersion?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  templateName: {}
}
type ListServiceTemplateVersionsOutput = { nextToken?: {} | undefined; templateVersions: {} }
type ListServiceTemplatesInput = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListServiceTemplatesOutput = { nextToken?: {} | undefined; templates: {} }
type ListServicesInput = { maxResults?: {} | undefined; nextToken?: {} | undefined }
type ListServicesOutput = { nextToken?: {} | undefined; services: {} }
type ListTagsForResourceInput = {
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  resourceArn: {}
}
type ListTagsForResourceOutput = { nextToken?: {} | undefined; tags: {} }
type NotifyResourceDeploymentStatusChangeInput = {
  deploymentId?: {} | undefined
  outputs?: {} | undefined
  resourceArn: {}
  status?: {} | undefined
  statusMessage?: {} | undefined
}
type NotifyResourceDeploymentStatusChangeOutput = { [x: string]: unknown }
type RejectEnvironmentAccountConnectionInput = { id: {} }
type RejectEnvironmentAccountConnectionOutput = {
  environmentAccountConnection: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    environmentAccountId: {}
    environmentName: {}
    id: {}
    lastModifiedAt: {}
    managementAccountId: {}
    requestedAt: {}
    roleArn: {}
    status: {}
  }
}
type TagResourceInput = { resourceArn: {}; tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type UntagResourceInput = { resourceArn: {}; tagKeys: {} }
type UntagResourceOutput = { [x: string]: unknown }
type UpdateAccountSettingsInput = {
  deletePipelineProvisioningRepository?: {} | undefined
  pipelineCodebuildRoleArn?: {} | undefined
  pipelineProvisioningRepository?: { branch: {}; name: {}; provider: {} } | undefined
  pipelineServiceRoleArn?: {} | undefined
}
type UpdateAccountSettingsOutput = {
  accountSettings: {
    pipelineCodebuildRoleArn?: {} | undefined
    pipelineProvisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
    pipelineServiceRoleArn?: {} | undefined
  }
}
type UpdateComponentInput = {
  clientToken?: {} | undefined
  deploymentType: {}
  description?: {} | undefined
  name: {}
  serviceInstanceName?: {} | undefined
  serviceName?: {} | undefined
  serviceSpec?: {} | undefined
  templateFile?: {} | undefined
}
type UpdateComponentOutput = {
  component: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt?: {} | undefined
    lastDeploymentSucceededAt?: {} | undefined
    lastModifiedAt: {}
    name: {}
    serviceInstanceName?: {} | undefined
    serviceName?: {} | undefined
    serviceSpec?: {} | undefined
  }
}
type UpdateEnvironmentInput = {
  codebuildRoleArn?: {} | undefined
  componentRoleArn?: {} | undefined
  deploymentType: {}
  description?: {} | undefined
  environmentAccountConnectionId?: {} | undefined
  name: {}
  protonServiceRoleArn?: {} | undefined
  provisioningRepository?: { branch: {}; name: {}; provider: {} } | undefined
  spec?: {} | undefined
  templateMajorVersion?: {} | undefined
  templateMinorVersion?: {} | undefined
}
type UpdateEnvironmentOutput = {
  environment: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    description?: {} | undefined
    environmentAccountConnectionId?: {} | undefined
    environmentAccountId?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    protonServiceRoleArn?: {} | undefined
    provisioning?: {} | undefined
    provisioningRepository?: { arn: {}; branch: {}; name: {}; provider: {} } | undefined
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type UpdateEnvironmentAccountConnectionInput = {
  codebuildRoleArn?: {} | undefined
  componentRoleArn?: {} | undefined
  id: {}
  roleArn?: {} | undefined
}
type UpdateEnvironmentAccountConnectionOutput = {
  environmentAccountConnection: {
    arn: {}
    codebuildRoleArn?: {} | undefined
    componentRoleArn?: {} | undefined
    environmentAccountId: {}
    environmentName: {}
    id: {}
    lastModifiedAt: {}
    managementAccountId: {}
    requestedAt: {}
    roleArn: {}
    status: {}
  }
}
type UpdateEnvironmentTemplateInput = {
  description?: {} | undefined
  displayName?: {} | undefined
  name: {}
}
type UpdateEnvironmentTemplateOutput = {
  environmentTemplate: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    displayName?: {} | undefined
    encryptionKey?: {} | undefined
    lastModifiedAt: {}
    name: {}
    provisioning?: {} | undefined
    recommendedVersion?: {} | undefined
  }
}
type UpdateEnvironmentTemplateVersionInput = {
  description?: {} | undefined
  majorVersion: {}
  minorVersion: {}
  status?: {} | undefined
  templateName: {}
}
type UpdateEnvironmentTemplateVersionOutput = {
  environmentTemplateVersion: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    majorVersion: {}
    minorVersion: {}
    recommendedMinorVersion?: {} | undefined
    schema?: {} | undefined
    status: {}
    statusMessage?: {} | undefined
    templateName: {}
  }
}
type UpdateServiceInput = { description?: {} | undefined; name: {}; spec?: {} | undefined }
type UpdateServiceOutput = {
  service: {
    arn: {}
    branchName?: {} | undefined
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    name: {}
    pipeline?:
      | {
          arn: {}
          createdAt: {}
          deploymentStatus: {}
          deploymentStatusMessage?: {} | undefined
          lastDeploymentAttemptedAt: {}
          lastDeploymentSucceededAt: {}
          spec?: {} | undefined
          templateMajorVersion: {}
          templateMinorVersion: {}
          templateName: {}
        }
      | undefined
    repositoryConnectionArn?: {} | undefined
    repositoryId?: {} | undefined
    spec: {}
    status: {}
    statusMessage?: {} | undefined
    templateName: {}
  }
}
type UpdateServiceInstanceInput = {
  clientToken?: {} | undefined
  deploymentType: {}
  name: {}
  serviceName: {}
  spec?: {} | undefined
  templateMajorVersion?: {} | undefined
  templateMinorVersion?: {} | undefined
}
type UpdateServiceInstanceOutput = {
  serviceInstance: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    environmentName: {}
    lastClientRequestToken?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    name: {}
    serviceName: {}
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type UpdateServicePipelineInput = {
  deploymentType: {}
  serviceName: {}
  spec: {}
  templateMajorVersion?: {} | undefined
  templateMinorVersion?: {} | undefined
}
type UpdateServicePipelineOutput = {
  pipeline: {
    arn: {}
    createdAt: {}
    deploymentStatus: {}
    deploymentStatusMessage?: {} | undefined
    lastDeploymentAttemptedAt: {}
    lastDeploymentSucceededAt: {}
    spec?: {} | undefined
    templateMajorVersion: {}
    templateMinorVersion: {}
    templateName: {}
  }
}
type UpdateServiceSyncBlockerInput = { id: {}; resolvedReason: {} }
type UpdateServiceSyncBlockerOutput = {
  serviceInstanceName?: {} | undefined
  serviceName: {}
  serviceSyncBlocker: {
    contexts?: {} | undefined
    createdAt: {}
    createdReason: {}
    id: {}
    resolvedAt?: {} | undefined
    resolvedReason?: {} | undefined
    status: {}
    type: {}
  }
}
type UpdateServiceSyncConfigInput = {
  branch: {}
  filePath: {}
  repositoryName: {}
  repositoryProvider: {}
  serviceName: {}
}
type UpdateServiceSyncConfigOutput = {
  serviceSyncConfig?:
    | { branch: {}; filePath: {}; repositoryName: {}; repositoryProvider: {}; serviceName: {} }
    | undefined
}
type UpdateServiceTemplateInput = {
  description?: {} | undefined
  displayName?: {} | undefined
  name: {}
}
type UpdateServiceTemplateOutput = {
  serviceTemplate: {
    arn: {}
    createdAt: {}
    description?: {} | undefined
    displayName?: {} | undefined
    encryptionKey?: {} | undefined
    lastModifiedAt: {}
    name: {}
    pipelineProvisioning?: {} | undefined
    recommendedVersion?: {} | undefined
  }
}
type UpdateServiceTemplateVersionInput = {
  compatibleEnvironmentTemplates?: {} | undefined
  description?: {} | undefined
  majorVersion: {}
  minorVersion: {}
  status?: {} | undefined
  supportedComponentSources?: {} | undefined
  templateName: {}
}
type UpdateServiceTemplateVersionOutput = {
  serviceTemplateVersion: {
    arn: {}
    compatibleEnvironmentTemplates: {}
    createdAt: {}
    description?: {} | undefined
    lastModifiedAt: {}
    majorVersion: {}
    minorVersion: {}
    recommendedMinorVersion?: {} | undefined
    schema?: {} | undefined
    status: {}
    statusMessage?: {} | undefined
    supportedComponentSources?: {} | undefined
    templateName: {}
  }
}
type UpdateTemplateSyncConfigInput = {
  branch: {}
  repositoryName: {}
  repositoryProvider: {}
  subdirectory?: {} | undefined
  templateName: {}
  templateType: {}
}
type UpdateTemplateSyncConfigOutput = {
  templateSyncConfig?:
    | {
        branch: {}
        repositoryName: {}
        repositoryProvider: {}
        subdirectory?: {} | undefined
        templateName: {}
        templateType: {}
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.AcceptEnvironmentAccountConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptEnvironmentAccountConnectionInput }
        output: AcceptEnvironmentAccountConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CancelComponentDeployment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CancelComponentDeployment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelComponentDeploymentInput }
        output: CancelComponentDeploymentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CancelEnvironmentDeployment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelEnvironmentDeploymentInput }
        output: CancelEnvironmentDeploymentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CancelServiceInstanceDeployment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelServiceInstanceDeploymentInput }
        output: CancelServiceInstanceDeploymentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CancelServicePipelineDeployment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelServicePipelineDeploymentInput }
        output: CancelServicePipelineDeploymentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateComponent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateComponent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateComponentInput }
        output: CreateComponentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateEnvironment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEnvironmentInput }
        output: CreateEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateEnvironmentAccountConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEnvironmentAccountConnectionInput }
        output: CreateEnvironmentAccountConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateEnvironmentTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEnvironmentTemplateInput }
        output: CreateEnvironmentTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateEnvironmentTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEnvironmentTemplateVersionInput }
        output: CreateEnvironmentTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRepositoryInput }
        output: CreateRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceInput }
        output: CreateServiceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateServiceInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateServiceInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceInstanceInput }
        output: CreateServiceInstanceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateServiceSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceSyncConfigInput }
        output: CreateServiceSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateServiceTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceTemplateInput }
        output: CreateServiceTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateServiceTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceTemplateVersionInput }
        output: CreateServiceTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.CreateTemplateSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTemplateSyncConfigInput }
        output: CreateTemplateSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteComponent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteComponent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteComponentInput }
        output: DeleteComponentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteEnvironment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentInput }
        output: DeleteEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteEnvironmentAccountConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentAccountConnectionInput }
        output: DeleteEnvironmentAccountConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteEnvironmentTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentTemplateInput }
        output: DeleteEnvironmentTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteEnvironmentTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEnvironmentTemplateVersionInput }
        output: DeleteEnvironmentTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRepositoryInput }
        output: DeleteRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceInput }
        output: DeleteServiceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteServiceSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceSyncConfigInput }
        output: DeleteServiceSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteServiceTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceTemplateInput }
        output: DeleteServiceTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteServiceTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceTemplateVersionInput }
        output: DeleteServiceTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.DeleteTemplateSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTemplateSyncConfigInput }
        output: DeleteTemplateSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetAccountSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetAccountSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccountSettingsInput }
        output: GetAccountSettingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetComponent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetComponent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetComponentInput }
        output: GetComponentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetEnvironment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetEnvironment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEnvironmentInput }
        output: GetEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetEnvironmentAccountConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEnvironmentAccountConnectionInput }
        output: GetEnvironmentAccountConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetEnvironmentTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEnvironmentTemplateInput }
        output: GetEnvironmentTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetEnvironmentTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEnvironmentTemplateVersionInput }
        output: GetEnvironmentTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRepositoryInput }
        output: GetRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetRepositorySyncStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRepositorySyncStatusInput }
        output: GetRepositorySyncStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetResourcesSummary': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetResourcesSummary'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcesSummaryInput }
        output: GetResourcesSummaryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceInput }
        output: GetServiceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetServiceInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetServiceInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceInstanceInput }
        output: GetServiceInstanceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetServiceInstanceSyncStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceInstanceSyncStatusInput }
        output: GetServiceInstanceSyncStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetServiceSyncBlockerSummary'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceSyncBlockerSummaryInput }
        output: GetServiceSyncBlockerSummaryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetServiceSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceSyncConfigInput }
        output: GetServiceSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetServiceTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetServiceTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceTemplateInput }
        output: GetServiceTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetServiceTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceTemplateVersionInput }
        output: GetServiceTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetTemplateSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTemplateSyncConfigInput }
        output: GetTemplateSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.GetTemplateSyncStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTemplateSyncStatusInput }
        output: GetTemplateSyncStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListComponentOutputs': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListComponentOutputs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListComponentOutputsInput }
        output: ListComponentOutputsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListComponentProvisionedResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListComponentProvisionedResourcesInput }
        output: ListComponentProvisionedResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListComponents': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListComponents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListComponentsInput }
        output: ListComponentsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListEnvironmentAccountConnections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentAccountConnectionsInput }
        output: ListEnvironmentAccountConnectionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListEnvironmentOutputs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentOutputsInput }
        output: ListEnvironmentOutputsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListEnvironmentProvisionedResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentProvisionedResourcesInput }
        output: ListEnvironmentProvisionedResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListEnvironmentTemplateVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentTemplateVersionsInput }
        output: ListEnvironmentTemplateVersionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListEnvironmentTemplates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentTemplatesInput }
        output: ListEnvironmentTemplatesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListEnvironments': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListEnvironments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEnvironmentsInput }
        output: ListEnvironmentsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListRepositories': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRepositoriesInput }
        output: ListRepositoriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListRepositorySyncDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRepositorySyncDefinitionsInput }
        output: ListRepositorySyncDefinitionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServiceInstanceOutputs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceInstanceOutputsInput }
        output: ListServiceInstanceOutputsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServiceInstanceProvisionedResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceInstanceProvisionedResourcesInput }
        output: ListServiceInstanceProvisionedResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstances': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServiceInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceInstancesInput }
        output: ListServiceInstancesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServicePipelineOutputs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServicePipelineOutputsInput }
        output: ListServicePipelineOutputsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServicePipelineProvisionedResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServicePipelineProvisionedResourcesInput }
        output: ListServicePipelineProvisionedResourcesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServiceTemplateVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceTemplateVersionsInput }
        output: ListServiceTemplateVersionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServiceTemplates': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServiceTemplates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceTemplatesInput }
        output: ListServiceTemplatesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListServices': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServicesInput }
        output: ListServicesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.ListTagsForResource': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AwsProton20200720.ListTagsForResource'
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
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.NotifyResourceDeploymentStatusChange'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyResourceDeploymentStatusChangeInput }
        output: NotifyResourceDeploymentStatusChangeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.RejectEnvironmentAccountConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectEnvironmentAccountConnectionInput }
        output: RejectEnvironmentAccountConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.TagResource'
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
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UntagResource'
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
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateAccountSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateAccountSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAccountSettingsInput }
        output: UpdateAccountSettingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateComponent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateComponent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateComponentInput }
        output: UpdateComponentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateEnvironment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnvironmentInput }
        output: UpdateEnvironmentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateEnvironmentAccountConnection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnvironmentAccountConnectionInput }
        output: UpdateEnvironmentAccountConnectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateEnvironmentTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnvironmentTemplateInput }
        output: UpdateEnvironmentTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateEnvironmentTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEnvironmentTemplateVersionInput }
        output: UpdateEnvironmentTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceInput }
        output: UpdateServiceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateServiceInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceInstanceInput }
        output: UpdateServiceInstanceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateServicePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateServicePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServicePipelineInput }
        output: UpdateServicePipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateServiceSyncBlocker'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceSyncBlockerInput }
        output: UpdateServiceSyncBlockerOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateServiceSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceSyncConfigInput }
        output: UpdateServiceSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateServiceTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceTemplateInput }
        output: UpdateServiceTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateServiceTemplateVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceTemplateVersionInput }
        output: UpdateServiceTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AwsProton20200720.UpdateTemplateSyncConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTemplateSyncConfigInput }
        output: UpdateTemplateSyncConfigOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
