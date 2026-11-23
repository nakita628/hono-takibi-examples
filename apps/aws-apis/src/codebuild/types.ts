type BatchDeleteBuildsInput = { ids: {} }
type BatchDeleteBuildsOutput = { buildsDeleted?: {} | undefined; buildsNotDeleted?: {} | undefined }
type BatchGetBuildBatchesInput = { ids: {} }
type BatchGetBuildBatchesOutput = {
  buildBatches?: {} | undefined
  buildBatchesNotFound?: {} | undefined
}
type BatchGetBuildsInput = { ids: {} }
type BatchGetBuildsOutput = { builds?: {} | undefined; buildsNotFound?: {} | undefined }
type BatchGetProjectsInput = { names: {} }
type BatchGetProjectsOutput = { projects?: {} | undefined; projectsNotFound?: {} | undefined }
type BatchGetReportGroupsInput = { reportGroupArns: {} }
type BatchGetReportGroupsOutput = {
  reportGroups?: {} | undefined
  reportGroupsNotFound?: {} | undefined
}
type BatchGetReportsInput = { reportArns: {} }
type BatchGetReportsOutput = { reports?: {} | undefined; reportsNotFound?: {} | undefined }
type BucketOwnerAccess = 'NONE' | 'READ_ONLY' | 'FULL'
type CreateProjectInput = {
  name: {}
  description?: {} | undefined
  source: {
    type: {}
    location?: {} | undefined
    gitCloneDepth?: {} | undefined
    gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
    buildspec?: {} | undefined
    auth?: { type: {}; resource?: {} | undefined } | undefined
    reportBuildStatus?: {} | undefined
    buildStatusConfig?: { context?: {} | undefined; targetUrl?: {} | undefined } | undefined
    insecureSsl?: {} | undefined
    sourceIdentifier?: {} | undefined
  }
  secondarySources?: {} | undefined
  sourceVersion?: {} | undefined
  secondarySourceVersions?: {} | undefined
  artifacts: {
    type: {}
    location?: {} | undefined
    path?: {} | undefined
    namespaceType?: {} | undefined
    name?: {} | undefined
    packaging?: {} | undefined
    overrideArtifactName?: {} | undefined
    encryptionDisabled?: {} | undefined
    artifactIdentifier?: {} | undefined
    bucketOwnerAccess?: BucketOwnerAccess | undefined
  }
  secondaryArtifacts?: {} | undefined
  cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
  environment: {
    type: {}
    image: {}
    computeType: {}
    environmentVariables?: {} | undefined
    privilegedMode?: {} | undefined
    certificate?: {} | undefined
    registryCredential?: { credential: {}; credentialProvider: {} } | undefined
    imagePullCredentialsType?: {} | undefined
  }
  serviceRole: {}
  timeoutInMinutes?: {} | undefined
  queuedTimeoutInMinutes?: {} | undefined
  encryptionKey?: {} | undefined
  tags?: {} | undefined
  vpcConfig?:
    | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
    | undefined
  badgeEnabled?: {} | undefined
  logsConfig?:
    | {
        cloudWatchLogs?:
          | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
          | undefined
        s3Logs?:
          | {
              status: {}
              location?: {} | undefined
              encryptionDisabled?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
      }
    | undefined
  fileSystemLocations?: {} | undefined
  buildBatchConfig?:
    | {
        serviceRole?: {} | undefined
        combineArtifacts?: {} | undefined
        restrictions?:
          | { maximumBuildsAllowed?: {} | undefined; computeTypesAllowed?: {} | undefined }
          | undefined
        timeoutInMins?: {} | undefined
        batchReportMode?: {} | undefined
      }
    | undefined
  concurrentBuildLimit?: {} | undefined
}
type ProjectVisibilityType = 'PUBLIC_READ' | 'PRIVATE'
type CreateProjectOutput = {
  project?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        source?:
          | {
              type: {}
              location?: {} | undefined
              gitCloneDepth?: {} | undefined
              gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
              buildspec?: {} | undefined
              auth?: { type: {}; resource?: {} | undefined } | undefined
              reportBuildStatus?: {} | undefined
              buildStatusConfig?:
                | { context?: {} | undefined; targetUrl?: {} | undefined }
                | undefined
              insecureSsl?: {} | undefined
              sourceIdentifier?: {} | undefined
            }
          | undefined
        secondarySources?: {} | undefined
        sourceVersion?: {} | undefined
        secondarySourceVersions?: {} | undefined
        artifacts?:
          | {
              type: {}
              location?: {} | undefined
              path?: {} | undefined
              namespaceType?: {} | undefined
              name?: {} | undefined
              packaging?: {} | undefined
              overrideArtifactName?: {} | undefined
              encryptionDisabled?: {} | undefined
              artifactIdentifier?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
        secondaryArtifacts?: {} | undefined
        cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
        environment?:
          | {
              type: {}
              image: {}
              computeType: {}
              environmentVariables?: {} | undefined
              privilegedMode?: {} | undefined
              certificate?: {} | undefined
              registryCredential?: { credential: {}; credentialProvider: {} } | undefined
              imagePullCredentialsType?: {} | undefined
            }
          | undefined
        serviceRole?: {} | undefined
        timeoutInMinutes?: {} | undefined
        queuedTimeoutInMinutes?: {} | undefined
        encryptionKey?: {} | undefined
        tags?: {} | undefined
        created?: {} | undefined
        lastModified?: {} | undefined
        webhook?:
          | {
              url?: {} | undefined
              payloadUrl?: {} | undefined
              secret?: {} | undefined
              branchFilter?: {} | undefined
              filterGroups?: {} | undefined
              buildType?: {} | undefined
              lastModifiedSecret?: {} | undefined
            }
          | undefined
        vpcConfig?:
          | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
          | undefined
        badge?: { badgeEnabled?: {} | undefined; badgeRequestUrl?: {} | undefined } | undefined
        logsConfig?:
          | {
              cloudWatchLogs?:
                | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
                | undefined
              s3Logs?:
                | {
                    status: {}
                    location?: {} | undefined
                    encryptionDisabled?: {} | undefined
                    bucketOwnerAccess?: BucketOwnerAccess | undefined
                  }
                | undefined
            }
          | undefined
        fileSystemLocations?: {} | undefined
        buildBatchConfig?:
          | {
              serviceRole?: {} | undefined
              combineArtifacts?: {} | undefined
              restrictions?:
                | { maximumBuildsAllowed?: {} | undefined; computeTypesAllowed?: {} | undefined }
                | undefined
              timeoutInMins?: {} | undefined
              batchReportMode?: {} | undefined
            }
          | undefined
        concurrentBuildLimit?: {} | undefined
        projectVisibility?: ProjectVisibilityType | undefined
        publicProjectAlias?: {} | undefined
        resourceAccessRole?: {} | undefined
      }
    | undefined
}
type CreateReportGroupInput = {
  name: {}
  type: {}
  exportConfig: {
    exportConfigType?: {} | undefined
    s3Destination?:
      | {
          bucket?: {} | undefined
          bucketOwner?: {} | undefined
          path?: {} | undefined
          packaging?: {} | undefined
          encryptionKey?: {} | undefined
          encryptionDisabled?: {} | undefined
        }
      | undefined
  }
  tags?: {} | undefined
}
type CreateReportGroupOutput = {
  reportGroup?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        exportConfig?:
          | {
              exportConfigType?: {} | undefined
              s3Destination?:
                | {
                    bucket?: {} | undefined
                    bucketOwner?: {} | undefined
                    path?: {} | undefined
                    packaging?: {} | undefined
                    encryptionKey?: {} | undefined
                    encryptionDisabled?: {} | undefined
                  }
                | undefined
            }
          | undefined
        created?: {} | undefined
        lastModified?: {} | undefined
        tags?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type CreateWebhookInput = {
  projectName: {}
  branchFilter?: {} | undefined
  filterGroups?: {} | undefined
  buildType?: {} | undefined
}
type CreateWebhookOutput = {
  webhook?:
    | {
        url?: {} | undefined
        payloadUrl?: {} | undefined
        secret?: {} | undefined
        branchFilter?: {} | undefined
        filterGroups?: {} | undefined
        buildType?: {} | undefined
        lastModifiedSecret?: {} | undefined
      }
    | undefined
}
type DeleteBuildBatchInput = { id: {} }
type DeleteBuildBatchOutput = {
  statusCode?: {} | undefined
  buildsDeleted?: {} | undefined
  buildsNotDeleted?: {} | undefined
}
type DeleteProjectInput = { name: {} }
type DeleteProjectOutput = { [x: string]: unknown }
type DeleteReportInput = { arn: {} }
type DeleteReportOutput = { [x: string]: unknown }
type DeleteReportGroupInput = { arn: {}; deleteReports?: {} | undefined }
type DeleteReportGroupOutput = { [x: string]: unknown }
type DeleteResourcePolicyInput = { resourceArn: {} }
type DeleteResourcePolicyOutput = { [x: string]: unknown }
type DeleteSourceCredentialsInput = { arn: {} }
type DeleteSourceCredentialsOutput = { arn?: {} | undefined }
type DeleteWebhookInput = { projectName: {} }
type DeleteWebhookOutput = { [x: string]: unknown }
type DescribeCodeCoveragesInput = {
  reportArn: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  sortOrder?: {} | undefined
  sortBy?: {} | undefined
  minLineCoveragePercentage?: {} | undefined
  maxLineCoveragePercentage?: {} | undefined
}
type DescribeCodeCoveragesOutput = { nextToken?: {} | undefined; codeCoverages?: {} | undefined }
type DescribeTestCasesInput = {
  reportArn: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filter?: { status?: {} | undefined; keyword?: {} | undefined } | undefined
}
type DescribeTestCasesOutput = { nextToken?: {} | undefined; testCases?: {} | undefined }
type GetReportGroupTrendInput = {
  reportGroupArn: {}
  numOfReports?: {} | undefined
  trendField: {}
}
type GetReportGroupTrendOutput = {
  stats?: { average?: {} | undefined; max?: {} | undefined; min?: {} | undefined } | undefined
  rawData?: {} | undefined
}
type GetResourcePolicyInput = { resourceArn: {} }
type GetResourcePolicyOutput = { policy?: {} | undefined }
type ImportSourceCredentialsInput = {
  username?: {} | undefined
  token: {}
  serverType: {}
  authType: {}
  shouldOverwrite?: {} | undefined
}
type ImportSourceCredentialsOutput = { arn?: {} | undefined }
type InvalidateProjectCacheInput = { projectName: {} }
type InvalidateProjectCacheOutput = { [x: string]: unknown }
type ListBuildBatchesInput = {
  filter?: { status?: {} | undefined } | undefined
  maxResults?: {} | undefined
  sortOrder?: {} | undefined
  nextToken?: {} | undefined
}
type ListBuildBatchesOutput = { ids?: {} | undefined; nextToken?: {} | undefined }
type ListBuildBatchesForProjectInput = {
  projectName?: {} | undefined
  filter?: { status?: {} | undefined } | undefined
  maxResults?: {} | undefined
  sortOrder?: {} | undefined
  nextToken?: {} | undefined
}
type ListBuildBatchesForProjectOutput = { ids?: {} | undefined; nextToken?: {} | undefined }
type ListBuildsInput = { sortOrder?: {} | undefined; nextToken?: {} | undefined }
type ListBuildsOutput = { ids?: {} | undefined; nextToken?: {} | undefined }
type ListBuildsForProjectInput = {
  projectName: {}
  sortOrder?: {} | undefined
  nextToken?: {} | undefined
}
type ListBuildsForProjectOutput = { ids?: {} | undefined; nextToken?: {} | undefined }
type ListCuratedEnvironmentImagesInput = { [x: string]: unknown }
type ListCuratedEnvironmentImagesOutput = { platforms?: {} | undefined }
type ListProjectsInput = {
  sortBy?: {} | undefined
  sortOrder?: {} | undefined
  nextToken?: {} | undefined
}
type ListProjectsOutput = { nextToken?: {} | undefined; projects?: {} | undefined }
type ListReportGroupsInput = {
  sortOrder?: {} | undefined
  sortBy?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListReportGroupsOutput = { nextToken?: {} | undefined; reportGroups?: {} | undefined }
type ListReportsInput = {
  sortOrder?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filter?: { status?: {} | undefined } | undefined
}
type ListReportsOutput = { nextToken?: {} | undefined; reports?: {} | undefined }
type ListReportsForReportGroupInput = {
  reportGroupArn: {}
  nextToken?: {} | undefined
  sortOrder?: {} | undefined
  maxResults?: {} | undefined
  filter?: { status?: {} | undefined } | undefined
}
type ListReportsForReportGroupOutput = { nextToken?: {} | undefined; reports?: {} | undefined }
type ListSharedProjectsInput = {
  sortBy?: {} | undefined
  sortOrder?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListSharedProjectsOutput = { nextToken?: {} | undefined; projects?: {} | undefined }
type ListSharedReportGroupsInput = {
  sortOrder?: {} | undefined
  sortBy?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListSharedReportGroupsOutput = { nextToken?: {} | undefined; reportGroups?: {} | undefined }
type ListSourceCredentialsInput = { [x: string]: unknown }
type ListSourceCredentialsOutput = { sourceCredentialsInfos?: {} | undefined }
type PutResourcePolicyInput = { policy: {}; resourceArn: {} }
type PutResourcePolicyOutput = { resourceArn?: {} | undefined }
type RetryBuildInput = { id?: {} | undefined }
type Build = {
  id?: {} | undefined
  arn?: {} | undefined
  buildNumber?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  currentPhase?: {} | undefined
  buildStatus?: {} | undefined
  sourceVersion?: {} | undefined
  resolvedSourceVersion?: {} | undefined
  projectName?: {} | undefined
  phases?: {} | undefined
  source?:
    | {
        type: {}
        location?: {} | undefined
        gitCloneDepth?: {} | undefined
        gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
        buildspec?: {} | undefined
        auth?: { type: {}; resource?: {} | undefined } | undefined
        reportBuildStatus?: {} | undefined
        buildStatusConfig?: { context?: {} | undefined; targetUrl?: {} | undefined } | undefined
        insecureSsl?: {} | undefined
        sourceIdentifier?: {} | undefined
      }
    | undefined
  secondarySources?: {} | undefined
  secondarySourceVersions?: {} | undefined
  artifacts?:
    | {
        location?: {} | undefined
        sha256sum?: {} | undefined
        md5sum?: {} | undefined
        overrideArtifactName?: {} | undefined
        encryptionDisabled?: {} | undefined
        artifactIdentifier?: {} | undefined
        bucketOwnerAccess?: BucketOwnerAccess | undefined
      }
    | undefined
  secondaryArtifacts?: {} | undefined
  cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
  environment?:
    | {
        type: {}
        image: {}
        computeType: {}
        environmentVariables?: {} | undefined
        privilegedMode?: {} | undefined
        certificate?: {} | undefined
        registryCredential?: { credential: {}; credentialProvider: {} } | undefined
        imagePullCredentialsType?: {} | undefined
      }
    | undefined
  serviceRole?: {} | undefined
  logs?:
    | {
        groupName?: {} | undefined
        streamName?: {} | undefined
        deepLink?: {} | undefined
        s3DeepLink?: {} | undefined
        cloudWatchLogsArn?: {} | undefined
        s3LogsArn?: {} | undefined
        cloudWatchLogs?:
          | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
          | undefined
        s3Logs?:
          | {
              status: {}
              location?: {} | undefined
              encryptionDisabled?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
      }
    | undefined
  timeoutInMinutes?: {} | undefined
  queuedTimeoutInMinutes?: {} | undefined
  buildComplete?: {} | undefined
  initiator?: {} | undefined
  vpcConfig?:
    | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
    | undefined
  networkInterface?: { subnetId?: {} | undefined; networkInterfaceId?: {} | undefined } | undefined
  encryptionKey?: {} | undefined
  exportedEnvironmentVariables?: {} | undefined
  reportArns?: {} | undefined
  fileSystemLocations?: {} | undefined
  debugSession?: { sessionEnabled?: {} | undefined; sessionTarget?: {} | undefined } | undefined
  buildBatchArn?: {} | undefined
}
type RetryBuildOutput = { build?: Build | undefined }
type RetryBuildBatchInput = { id?: {} | undefined; retryType?: {} | undefined }
type ProjectSource = {
  type: {}
  location?: {} | undefined
  gitCloneDepth?: {} | undefined
  gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
  buildspec?: {} | undefined
  auth?: { type: {}; resource?: {} | undefined } | undefined
  reportBuildStatus?: {} | undefined
  buildStatusConfig?: { context?: {} | undefined; targetUrl?: {} | undefined } | undefined
  insecureSsl?: {} | undefined
  sourceIdentifier?: {} | undefined
}
type ProjectCache = { type: {}; location?: {} | undefined; modes?: {} | undefined }
type ProjectEnvironment = {
  type: {}
  image: {}
  computeType: {}
  environmentVariables?: {} | undefined
  privilegedMode?: {} | undefined
  certificate?: {} | undefined
  registryCredential?: { credential: {}; credentialProvider: {} } | undefined
  imagePullCredentialsType?: {} | undefined
}
type LogsConfig = {
  cloudWatchLogs?:
    | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
    | undefined
  s3Logs?:
    | {
        status: {}
        location?: {} | undefined
        encryptionDisabled?: {} | undefined
        bucketOwnerAccess?: BucketOwnerAccess | undefined
      }
    | undefined
}
type VpcConfig = {
  vpcId?: {} | undefined
  subnets?: {} | undefined
  securityGroupIds?: {} | undefined
}
type ProjectBuildBatchConfig = {
  serviceRole?: {} | undefined
  combineArtifacts?: {} | undefined
  restrictions?:
    | { maximumBuildsAllowed?: {} | undefined; computeTypesAllowed?: {} | undefined }
    | undefined
  timeoutInMins?: {} | undefined
  batchReportMode?: {} | undefined
}
type BuildBatch = {
  id?: {} | undefined
  arn?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  currentPhase?: {} | undefined
  buildBatchStatus?: {} | undefined
  sourceVersion?: {} | undefined
  resolvedSourceVersion?: {} | undefined
  projectName?: {} | undefined
  phases?: {} | undefined
  source?: ProjectSource | undefined
  secondarySources?: {} | undefined
  secondarySourceVersions?: {} | undefined
  artifacts?:
    | {
        location?: {} | undefined
        sha256sum?: {} | undefined
        md5sum?: {} | undefined
        overrideArtifactName?: {} | undefined
        encryptionDisabled?: {} | undefined
        artifactIdentifier?: {} | undefined
        bucketOwnerAccess?: BucketOwnerAccess | undefined
      }
    | undefined
  secondaryArtifacts?: {} | undefined
  cache?: ProjectCache | undefined
  environment?: ProjectEnvironment | undefined
  serviceRole?: {} | undefined
  logConfig?: LogsConfig | undefined
  buildTimeoutInMinutes?: {} | undefined
  queuedTimeoutInMinutes?: {} | undefined
  complete?: {} | undefined
  initiator?: {} | undefined
  vpcConfig?: VpcConfig | undefined
  encryptionKey?: {} | undefined
  buildBatchNumber?: {} | undefined
  fileSystemLocations?: {} | undefined
  buildBatchConfig?: ProjectBuildBatchConfig | undefined
  buildGroups?: {} | undefined
  debugSessionEnabled?: {} | undefined
}
type RetryBuildBatchOutput = { buildBatch?: BuildBatch | undefined }
type StartBuildInput = {
  projectName: {}
  secondarySourcesOverride?: {} | undefined
  secondarySourcesVersionOverride?: {} | undefined
  sourceVersion?: {} | undefined
  artifactsOverride?:
    | {
        type: {}
        location?: {} | undefined
        path?: {} | undefined
        namespaceType?: {} | undefined
        name?: {} | undefined
        packaging?: {} | undefined
        overrideArtifactName?: {} | undefined
        encryptionDisabled?: {} | undefined
        artifactIdentifier?: {} | undefined
        bucketOwnerAccess?: BucketOwnerAccess | undefined
      }
    | undefined
  secondaryArtifactsOverride?: {} | undefined
  environmentVariablesOverride?: {} | undefined
  sourceTypeOverride?: {} | undefined
  sourceLocationOverride?: {} | undefined
  sourceAuthOverride?: { type: {}; resource?: {} | undefined } | undefined
  gitCloneDepthOverride?: {} | undefined
  gitSubmodulesConfigOverride?: { fetchSubmodules: {} } | undefined
  buildspecOverride?: {} | undefined
  insecureSslOverride?: {} | undefined
  reportBuildStatusOverride?: {} | undefined
  buildStatusConfigOverride?: { context?: {} | undefined; targetUrl?: {} | undefined } | undefined
  environmentTypeOverride?: {} | undefined
  imageOverride?: {} | undefined
  computeTypeOverride?: {} | undefined
  certificateOverride?: {} | undefined
  cacheOverride?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
  serviceRoleOverride?: {} | undefined
  privilegedModeOverride?: {} | undefined
  timeoutInMinutesOverride?: {} | undefined
  queuedTimeoutInMinutesOverride?: {} | undefined
  encryptionKeyOverride?: {} | undefined
  logsConfigOverride?:
    | {
        cloudWatchLogs?:
          | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
          | undefined
        s3Logs?:
          | {
              status: {}
              location?: {} | undefined
              encryptionDisabled?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
      }
    | undefined
  registryCredentialOverride?: { credential: {}; credentialProvider: {} } | undefined
  imagePullCredentialsTypeOverride?: {} | undefined
  debugSessionEnabled?: {} | undefined
}
type StartBuildOutput = {
  build?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        buildNumber?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
        currentPhase?: {} | undefined
        buildStatus?: {} | undefined
        sourceVersion?: {} | undefined
        resolvedSourceVersion?: {} | undefined
        projectName?: {} | undefined
        phases?: {} | undefined
        source?:
          | {
              type: {}
              location?: {} | undefined
              gitCloneDepth?: {} | undefined
              gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
              buildspec?: {} | undefined
              auth?: { type: {}; resource?: {} | undefined } | undefined
              reportBuildStatus?: {} | undefined
              buildStatusConfig?:
                | { context?: {} | undefined; targetUrl?: {} | undefined }
                | undefined
              insecureSsl?: {} | undefined
              sourceIdentifier?: {} | undefined
            }
          | undefined
        secondarySources?: {} | undefined
        secondarySourceVersions?: {} | undefined
        artifacts?:
          | {
              location?: {} | undefined
              sha256sum?: {} | undefined
              md5sum?: {} | undefined
              overrideArtifactName?: {} | undefined
              encryptionDisabled?: {} | undefined
              artifactIdentifier?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
        secondaryArtifacts?: {} | undefined
        cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
        environment?:
          | {
              type: {}
              image: {}
              computeType: {}
              environmentVariables?: {} | undefined
              privilegedMode?: {} | undefined
              certificate?: {} | undefined
              registryCredential?: { credential: {}; credentialProvider: {} } | undefined
              imagePullCredentialsType?: {} | undefined
            }
          | undefined
        serviceRole?: {} | undefined
        logs?:
          | {
              groupName?: {} | undefined
              streamName?: {} | undefined
              deepLink?: {} | undefined
              s3DeepLink?: {} | undefined
              cloudWatchLogsArn?: {} | undefined
              s3LogsArn?: {} | undefined
              cloudWatchLogs?:
                | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
                | undefined
              s3Logs?:
                | {
                    status: {}
                    location?: {} | undefined
                    encryptionDisabled?: {} | undefined
                    bucketOwnerAccess?: BucketOwnerAccess | undefined
                  }
                | undefined
            }
          | undefined
        timeoutInMinutes?: {} | undefined
        queuedTimeoutInMinutes?: {} | undefined
        buildComplete?: {} | undefined
        initiator?: {} | undefined
        vpcConfig?:
          | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
          | undefined
        networkInterface?:
          | { subnetId?: {} | undefined; networkInterfaceId?: {} | undefined }
          | undefined
        encryptionKey?: {} | undefined
        exportedEnvironmentVariables?: {} | undefined
        reportArns?: {} | undefined
        fileSystemLocations?: {} | undefined
        debugSession?:
          | { sessionEnabled?: {} | undefined; sessionTarget?: {} | undefined }
          | undefined
        buildBatchArn?: {} | undefined
      }
    | undefined
}
type StartBuildBatchInput = {
  projectName: {}
  secondarySourcesOverride?: {} | undefined
  secondarySourcesVersionOverride?: {} | undefined
  sourceVersion?: {} | undefined
  artifactsOverride?:
    | {
        type: {}
        location?: {} | undefined
        path?: {} | undefined
        namespaceType?: {} | undefined
        name?: {} | undefined
        packaging?: {} | undefined
        overrideArtifactName?: {} | undefined
        encryptionDisabled?: {} | undefined
        artifactIdentifier?: {} | undefined
        bucketOwnerAccess?: BucketOwnerAccess | undefined
      }
    | undefined
  secondaryArtifactsOverride?: {} | undefined
  environmentVariablesOverride?: {} | undefined
  sourceTypeOverride?: {} | undefined
  sourceLocationOverride?: {} | undefined
  sourceAuthOverride?: { type: {}; resource?: {} | undefined } | undefined
  gitCloneDepthOverride?: {} | undefined
  gitSubmodulesConfigOverride?: { fetchSubmodules: {} } | undefined
  buildspecOverride?: {} | undefined
  insecureSslOverride?: {} | undefined
  reportBuildBatchStatusOverride?: {} | undefined
  environmentTypeOverride?: {} | undefined
  imageOverride?: {} | undefined
  computeTypeOverride?: {} | undefined
  certificateOverride?: {} | undefined
  cacheOverride?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
  serviceRoleOverride?: {} | undefined
  privilegedModeOverride?: {} | undefined
  buildTimeoutInMinutesOverride?: {} | undefined
  queuedTimeoutInMinutesOverride?: {} | undefined
  encryptionKeyOverride?: {} | undefined
  logsConfigOverride?:
    | {
        cloudWatchLogs?:
          | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
          | undefined
        s3Logs?:
          | {
              status: {}
              location?: {} | undefined
              encryptionDisabled?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
      }
    | undefined
  registryCredentialOverride?: { credential: {}; credentialProvider: {} } | undefined
  imagePullCredentialsTypeOverride?: {} | undefined
  buildBatchConfigOverride?:
    | {
        serviceRole?: {} | undefined
        combineArtifacts?: {} | undefined
        restrictions?:
          | { maximumBuildsAllowed?: {} | undefined; computeTypesAllowed?: {} | undefined }
          | undefined
        timeoutInMins?: {} | undefined
        batchReportMode?: {} | undefined
      }
    | undefined
  debugSessionEnabled?: {} | undefined
}
type StartBuildBatchOutput = {
  buildBatch?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
        currentPhase?: {} | undefined
        buildBatchStatus?: {} | undefined
        sourceVersion?: {} | undefined
        resolvedSourceVersion?: {} | undefined
        projectName?: {} | undefined
        phases?: {} | undefined
        source?: ProjectSource | undefined
        secondarySources?: {} | undefined
        secondarySourceVersions?: {} | undefined
        artifacts?:
          | {
              location?: {} | undefined
              sha256sum?: {} | undefined
              md5sum?: {} | undefined
              overrideArtifactName?: {} | undefined
              encryptionDisabled?: {} | undefined
              artifactIdentifier?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
        secondaryArtifacts?: {} | undefined
        cache?: ProjectCache | undefined
        environment?: ProjectEnvironment | undefined
        serviceRole?: {} | undefined
        logConfig?: LogsConfig | undefined
        buildTimeoutInMinutes?: {} | undefined
        queuedTimeoutInMinutes?: {} | undefined
        complete?: {} | undefined
        initiator?: {} | undefined
        vpcConfig?: VpcConfig | undefined
        encryptionKey?: {} | undefined
        buildBatchNumber?: {} | undefined
        fileSystemLocations?: {} | undefined
        buildBatchConfig?: ProjectBuildBatchConfig | undefined
        buildGroups?: {} | undefined
        debugSessionEnabled?: {} | undefined
      }
    | undefined
}
type StopBuildInput = { id: {} }
type StopBuildOutput = {
  build?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        buildNumber?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
        currentPhase?: {} | undefined
        buildStatus?: {} | undefined
        sourceVersion?: {} | undefined
        resolvedSourceVersion?: {} | undefined
        projectName?: {} | undefined
        phases?: {} | undefined
        source?:
          | {
              type: {}
              location?: {} | undefined
              gitCloneDepth?: {} | undefined
              gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
              buildspec?: {} | undefined
              auth?: { type: {}; resource?: {} | undefined } | undefined
              reportBuildStatus?: {} | undefined
              buildStatusConfig?:
                | { context?: {} | undefined; targetUrl?: {} | undefined }
                | undefined
              insecureSsl?: {} | undefined
              sourceIdentifier?: {} | undefined
            }
          | undefined
        secondarySources?: {} | undefined
        secondarySourceVersions?: {} | undefined
        artifacts?:
          | {
              location?: {} | undefined
              sha256sum?: {} | undefined
              md5sum?: {} | undefined
              overrideArtifactName?: {} | undefined
              encryptionDisabled?: {} | undefined
              artifactIdentifier?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
        secondaryArtifacts?: {} | undefined
        cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
        environment?:
          | {
              type: {}
              image: {}
              computeType: {}
              environmentVariables?: {} | undefined
              privilegedMode?: {} | undefined
              certificate?: {} | undefined
              registryCredential?: { credential: {}; credentialProvider: {} } | undefined
              imagePullCredentialsType?: {} | undefined
            }
          | undefined
        serviceRole?: {} | undefined
        logs?:
          | {
              groupName?: {} | undefined
              streamName?: {} | undefined
              deepLink?: {} | undefined
              s3DeepLink?: {} | undefined
              cloudWatchLogsArn?: {} | undefined
              s3LogsArn?: {} | undefined
              cloudWatchLogs?:
                | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
                | undefined
              s3Logs?:
                | {
                    status: {}
                    location?: {} | undefined
                    encryptionDisabled?: {} | undefined
                    bucketOwnerAccess?: BucketOwnerAccess | undefined
                  }
                | undefined
            }
          | undefined
        timeoutInMinutes?: {} | undefined
        queuedTimeoutInMinutes?: {} | undefined
        buildComplete?: {} | undefined
        initiator?: {} | undefined
        vpcConfig?:
          | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
          | undefined
        networkInterface?:
          | { subnetId?: {} | undefined; networkInterfaceId?: {} | undefined }
          | undefined
        encryptionKey?: {} | undefined
        exportedEnvironmentVariables?: {} | undefined
        reportArns?: {} | undefined
        fileSystemLocations?: {} | undefined
        debugSession?:
          | { sessionEnabled?: {} | undefined; sessionTarget?: {} | undefined }
          | undefined
        buildBatchArn?: {} | undefined
      }
    | undefined
}
type StopBuildBatchInput = { id: {} }
type StopBuildBatchOutput = { buildBatch?: BuildBatch | undefined }
type UpdateProjectInput = {
  name: {}
  description?: {} | undefined
  source?:
    | {
        type: {}
        location?: {} | undefined
        gitCloneDepth?: {} | undefined
        gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
        buildspec?: {} | undefined
        auth?: { type: {}; resource?: {} | undefined } | undefined
        reportBuildStatus?: {} | undefined
        buildStatusConfig?: { context?: {} | undefined; targetUrl?: {} | undefined } | undefined
        insecureSsl?: {} | undefined
        sourceIdentifier?: {} | undefined
      }
    | undefined
  secondarySources?: {} | undefined
  sourceVersion?: {} | undefined
  secondarySourceVersions?: {} | undefined
  artifacts?:
    | {
        type: {}
        location?: {} | undefined
        path?: {} | undefined
        namespaceType?: {} | undefined
        name?: {} | undefined
        packaging?: {} | undefined
        overrideArtifactName?: {} | undefined
        encryptionDisabled?: {} | undefined
        artifactIdentifier?: {} | undefined
        bucketOwnerAccess?: BucketOwnerAccess | undefined
      }
    | undefined
  secondaryArtifacts?: {} | undefined
  cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
  environment?:
    | {
        type: {}
        image: {}
        computeType: {}
        environmentVariables?: {} | undefined
        privilegedMode?: {} | undefined
        certificate?: {} | undefined
        registryCredential?: { credential: {}; credentialProvider: {} } | undefined
        imagePullCredentialsType?: {} | undefined
      }
    | undefined
  serviceRole?: {} | undefined
  timeoutInMinutes?: {} | undefined
  queuedTimeoutInMinutes?: {} | undefined
  encryptionKey?: {} | undefined
  tags?: {} | undefined
  vpcConfig?:
    | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
    | undefined
  badgeEnabled?: {} | undefined
  logsConfig?:
    | {
        cloudWatchLogs?:
          | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
          | undefined
        s3Logs?:
          | {
              status: {}
              location?: {} | undefined
              encryptionDisabled?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
      }
    | undefined
  fileSystemLocations?: {} | undefined
  buildBatchConfig?: ProjectBuildBatchConfig | undefined
  concurrentBuildLimit?: {} | undefined
}
type UpdateProjectOutput = {
  project?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        source?:
          | {
              type: {}
              location?: {} | undefined
              gitCloneDepth?: {} | undefined
              gitSubmodulesConfig?: { fetchSubmodules: {} } | undefined
              buildspec?: {} | undefined
              auth?: { type: {}; resource?: {} | undefined } | undefined
              reportBuildStatus?: {} | undefined
              buildStatusConfig?:
                | { context?: {} | undefined; targetUrl?: {} | undefined }
                | undefined
              insecureSsl?: {} | undefined
              sourceIdentifier?: {} | undefined
            }
          | undefined
        secondarySources?: {} | undefined
        sourceVersion?: {} | undefined
        secondarySourceVersions?: {} | undefined
        artifacts?:
          | {
              type: {}
              location?: {} | undefined
              path?: {} | undefined
              namespaceType?: {} | undefined
              name?: {} | undefined
              packaging?: {} | undefined
              overrideArtifactName?: {} | undefined
              encryptionDisabled?: {} | undefined
              artifactIdentifier?: {} | undefined
              bucketOwnerAccess?: BucketOwnerAccess | undefined
            }
          | undefined
        secondaryArtifacts?: {} | undefined
        cache?: { type: {}; location?: {} | undefined; modes?: {} | undefined } | undefined
        environment?:
          | {
              type: {}
              image: {}
              computeType: {}
              environmentVariables?: {} | undefined
              privilegedMode?: {} | undefined
              certificate?: {} | undefined
              registryCredential?: { credential: {}; credentialProvider: {} } | undefined
              imagePullCredentialsType?: {} | undefined
            }
          | undefined
        serviceRole?: {} | undefined
        timeoutInMinutes?: {} | undefined
        queuedTimeoutInMinutes?: {} | undefined
        encryptionKey?: {} | undefined
        tags?: {} | undefined
        created?: {} | undefined
        lastModified?: {} | undefined
        webhook?:
          | {
              url?: {} | undefined
              payloadUrl?: {} | undefined
              secret?: {} | undefined
              branchFilter?: {} | undefined
              filterGroups?: {} | undefined
              buildType?: {} | undefined
              lastModifiedSecret?: {} | undefined
            }
          | undefined
        vpcConfig?:
          | { vpcId?: {} | undefined; subnets?: {} | undefined; securityGroupIds?: {} | undefined }
          | undefined
        badge?: { badgeEnabled?: {} | undefined; badgeRequestUrl?: {} | undefined } | undefined
        logsConfig?:
          | {
              cloudWatchLogs?:
                | { status: {}; groupName?: {} | undefined; streamName?: {} | undefined }
                | undefined
              s3Logs?:
                | {
                    status: {}
                    location?: {} | undefined
                    encryptionDisabled?: {} | undefined
                    bucketOwnerAccess?: BucketOwnerAccess | undefined
                  }
                | undefined
            }
          | undefined
        fileSystemLocations?: {} | undefined
        buildBatchConfig?:
          | {
              serviceRole?: {} | undefined
              combineArtifacts?: {} | undefined
              restrictions?:
                | { maximumBuildsAllowed?: {} | undefined; computeTypesAllowed?: {} | undefined }
                | undefined
              timeoutInMins?: {} | undefined
              batchReportMode?: {} | undefined
            }
          | undefined
        concurrentBuildLimit?: {} | undefined
        projectVisibility?: ProjectVisibilityType | undefined
        publicProjectAlias?: {} | undefined
        resourceAccessRole?: {} | undefined
      }
    | undefined
}
type UpdateProjectVisibilityInput = {
  projectArn: {}
  projectVisibility: ProjectVisibilityType
  resourceAccessRole?: {} | undefined
}
type UpdateProjectVisibilityOutput = {
  projectArn?: {} | undefined
  publicProjectAlias?: {} | undefined
  projectVisibility?: ProjectVisibilityType | undefined
}
type UpdateReportGroupInput = {
  arn: {}
  exportConfig?:
    | {
        exportConfigType?: {} | undefined
        s3Destination?:
          | {
              bucket?: {} | undefined
              bucketOwner?: {} | undefined
              path?: {} | undefined
              packaging?: {} | undefined
              encryptionKey?: {} | undefined
              encryptionDisabled?: {} | undefined
            }
          | undefined
      }
    | undefined
  tags?: {} | undefined
}
type UpdateReportGroupOutput = {
  reportGroup?:
    | {
        arn?: {} | undefined
        name?: {} | undefined
        type?: {} | undefined
        exportConfig?:
          | {
              exportConfigType?: {} | undefined
              s3Destination?:
                | {
                    bucket?: {} | undefined
                    bucketOwner?: {} | undefined
                    path?: {} | undefined
                    packaging?: {} | undefined
                    encryptionKey?: {} | undefined
                    encryptionDisabled?: {} | undefined
                  }
                | undefined
            }
          | undefined
        created?: {} | undefined
        lastModified?: {} | undefined
        tags?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type UpdateWebhookInput = {
  projectName: {}
  branchFilter?: {} | undefined
  rotateSecret?: {} | undefined
  filterGroups?: {} | undefined
  buildType?: {} | undefined
}
type UpdateWebhookOutput = {
  webhook?:
    | {
        url?: {} | undefined
        payloadUrl?: {} | undefined
        secret?: {} | undefined
        branchFilter?: {} | undefined
        filterGroups?: {} | undefined
        buildType?: {} | undefined
        lastModifiedSecret?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.BatchDeleteBuilds'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteBuildsInput }
        output: BatchDeleteBuildsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.BatchGetBuildBatches'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetBuildBatchesInput }
        output: BatchGetBuildBatchesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.BatchGetBuilds'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetBuildsInput }
        output: BatchGetBuildsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.BatchGetProjects'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetProjectsInput }
        output: BatchGetProjectsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.BatchGetReportGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetReportGroupsInput }
        output: BatchGetReportGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetReports': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.BatchGetReports'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetReportsInput }
        output: BatchGetReportsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.CreateProject': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.CreateProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProjectInput }
        output: CreateProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.CreateReportGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateReportGroupInput }
        output: CreateReportGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.CreateWebhook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.CreateWebhook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWebhookInput }
        output: CreateWebhookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteBuildBatch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBuildBatchInput }
        output: DeleteBuildBatchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteProject': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProjectInput }
        output: DeleteProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteReport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteReport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteReportInput }
        output: DeleteReportOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteReportGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteReportGroupInput }
        output: DeleteReportGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcePolicyInput }
        output: DeleteResourcePolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteSourceCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSourceCredentialsInput }
        output: DeleteSourceCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DeleteWebhook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWebhookInput }
        output: DeleteWebhookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DescribeCodeCoverages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCodeCoveragesInput }
        output: DescribeCodeCoveragesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.DescribeTestCases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTestCasesInput }
        output: DescribeTestCasesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.GetReportGroupTrend'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReportGroupTrendInput }
        output: GetReportGroupTrendOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.GetResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcePolicyInput }
        output: GetResourcePolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ImportSourceCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportSourceCredentialsInput }
        output: ImportSourceCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.InvalidateProjectCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InvalidateProjectCacheInput }
        output: InvalidateProjectCacheOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatches': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListBuildBatches'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBuildBatchesInput }
        output: ListBuildBatchesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListBuildBatchesForProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBuildBatchesForProjectInput }
        output: ListBuildBatchesForProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListBuilds': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListBuilds'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBuildsInput }
        output: ListBuildsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListBuildsForProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBuildsForProjectInput }
        output: ListBuildsForProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListCuratedEnvironmentImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCuratedEnvironmentImagesInput }
        output: ListCuratedEnvironmentImagesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListProjects': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListProjects'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProjectsInput }
        output: ListProjectsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListReportGroups': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListReportGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReportGroupsInput }
        output: ListReportGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListReports': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListReports'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReportsInput }
        output: ListReportsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListReportsForReportGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReportsForReportGroupInput }
        output: ListReportsForReportGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListSharedProjects'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSharedProjectsInput }
        output: ListSharedProjectsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListSharedReportGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSharedReportGroupsInput }
        output: ListSharedReportGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.ListSourceCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSourceCredentialsInput }
        output: ListSourceCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.PutResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResourcePolicyInput }
        output: PutResourcePolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.RetryBuild': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.RetryBuild'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetryBuildInput }
        output: RetryBuildOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.RetryBuildBatch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetryBuildBatchInput }
        output: RetryBuildBatchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.StartBuild': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.StartBuild'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartBuildInput }
        output: StartBuildOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.StartBuildBatch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.StartBuildBatch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartBuildBatchInput }
        output: StartBuildBatchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.StopBuild': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.StopBuild'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopBuildInput }
        output: StopBuildOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.StopBuildBatch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.StopBuildBatch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopBuildBatchInput }
        output: StopBuildBatchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.UpdateProject': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.UpdateProject'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProjectInput }
        output: UpdateProjectOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.UpdateProjectVisibility'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProjectVisibilityInput }
        output: UpdateProjectVisibilityOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.UpdateReportGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateReportGroupInput }
        output: UpdateReportGroupOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeBuild_20161006.UpdateWebhook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateWebhookInput }
        output: UpdateWebhookOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
