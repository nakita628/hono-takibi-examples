type EnvValue = string
type CustomRule = { source: {}; target: {}; status?: {} | undefined; condition?: {} | undefined }
type TagValue = string
type AutoBranchCreationPattern = string
type App = {
  appId: {}
  appArn: {}
  name: {}
  tags?: {} | undefined
  description: {}
  repository: {}
  platform: {}
  createTime: {}
  updateTime: {}
  iamServiceRoleArn?: {} | undefined
  environmentVariables: {}
  defaultDomain: {}
  enableBranchAutoBuild: {}
  enableBranchAutoDeletion?: {} | undefined
  enableBasicAuth: {}
  basicAuthCredentials?: {} | undefined
  customRules?: {} | undefined
  productionBranch?:
    | {
        lastDeployTime?: {} | undefined
        status?: {} | undefined
        thumbnailUrl?: {} | undefined
        branchName?: {} | undefined
      }
    | undefined
  buildSpec?: {} | undefined
  customHeaders?: {} | undefined
  enableAutoBranchCreation?: {} | undefined
  autoBranchCreationPatterns?: {} | undefined
  autoBranchCreationConfig?:
    | {
        stage?: {} | undefined
        framework?: {} | undefined
        enableAutoBuild?: {} | undefined
        environmentVariables?: {} | undefined
        basicAuthCredentials?: {} | undefined
        enableBasicAuth?: {} | undefined
        enablePerformanceMode?: {} | undefined
        buildSpec?: {} | undefined
        enablePullRequestPreview?: {} | undefined
        pullRequestEnvironmentName?: {} | undefined
      }
    | undefined
  repositoryCloneMethod?: {} | undefined
}
type CreateAppResult = { app: App }
type BadRequestException = { [x: string]: unknown }
type UnauthorizedException = { [x: string]: unknown }
type InternalFailureException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type DependentServiceFailureException = { [x: string]: unknown }
type ListAppsResult = { apps: {}; nextToken?: {} | undefined }
type CreateBackendEnvironmentResult = {
  backendEnvironment: {
    backendEnvironmentArn: {}
    environmentName: {}
    stackName?: {} | undefined
    deploymentArtifacts?: {} | undefined
    createTime: {}
    updateTime: {}
  }
}
type NotFoundException = { [x: string]: unknown }
type ListBackendEnvironmentsResult = { backendEnvironments: {}; nextToken?: {} | undefined }
type CreateBranchResult = {
  branch: {
    branchArn: {}
    branchName: {}
    description: {}
    tags?: {} | undefined
    stage: {}
    displayName: {}
    enableNotification: {}
    createTime: {}
    updateTime: {}
    environmentVariables: {}
    enableAutoBuild: {}
    customDomains: {}
    framework: {}
    activeJobId: {}
    totalNumberOfJobs: {}
    enableBasicAuth: {}
    enablePerformanceMode?: {} | undefined
    thumbnailUrl?: {} | undefined
    basicAuthCredentials?: {} | undefined
    buildSpec?: {} | undefined
    ttl: {}
    associatedResources?: {} | undefined
    enablePullRequestPreview: {}
    pullRequestEnvironmentName?: {} | undefined
    destinationBranch?: {} | undefined
    sourceBranch?: {} | undefined
    backendEnvironmentArn?: {} | undefined
  }
}
type ListBranchesResult = { branches: {}; nextToken?: {} | undefined }
type MD5Hash = string
type CreateDeploymentResult = { jobId?: {} | undefined; fileUploadUrls: {}; zipUploadUrl: {} }
type SubDomainSetting = { prefix: {}; branchName: {} }
type AutoSubDomainCreationPattern = string
type CreateDomainAssociationResult = {
  domainAssociation: {
    domainAssociationArn: {}
    domainName: {}
    enableAutoSubDomain: {}
    autoSubDomainCreationPatterns?: {} | undefined
    autoSubDomainIAMRole?: {} | undefined
    domainStatus: {}
    statusReason: {}
    certificateVerificationDNSRecord?: {} | undefined
    subDomains: {}
  }
}
type ListDomainAssociationsResult = { domainAssociations: {}; nextToken?: {} | undefined }
type CreateWebhookResult = {
  webhook: {
    webhookArn: {}
    webhookId: {}
    webhookUrl: {}
    branchName: {}
    description: {}
    createTime: {}
    updateTime: {}
  }
}
type ListWebhooksResult = { webhooks: {}; nextToken?: {} | undefined }
type DeleteAppResult = { app: App }
type GetAppResult = { app: App }
type UpdateAppResult = {
  app: {
    appId: {}
    appArn: {}
    name: {}
    tags?: {} | undefined
    description: {}
    repository: {}
    platform: {}
    createTime: {}
    updateTime: {}
    iamServiceRoleArn?: {} | undefined
    environmentVariables: {}
    defaultDomain: {}
    enableBranchAutoBuild: {}
    enableBranchAutoDeletion?: {} | undefined
    enableBasicAuth: {}
    basicAuthCredentials?: {} | undefined
    customRules?: {} | undefined
    productionBranch?:
      | {
          lastDeployTime?: {} | undefined
          status?: {} | undefined
          thumbnailUrl?: {} | undefined
          branchName?: {} | undefined
        }
      | undefined
    buildSpec?: {} | undefined
    customHeaders?: {} | undefined
    enableAutoBranchCreation?: {} | undefined
    autoBranchCreationPatterns?: {} | undefined
    autoBranchCreationConfig?:
      | {
          stage?: {} | undefined
          framework?: {} | undefined
          enableAutoBuild?: {} | undefined
          environmentVariables?: {} | undefined
          basicAuthCredentials?: {} | undefined
          enableBasicAuth?: {} | undefined
          enablePerformanceMode?: {} | undefined
          buildSpec?: {} | undefined
          enablePullRequestPreview?: {} | undefined
          pullRequestEnvironmentName?: {} | undefined
        }
      | undefined
    repositoryCloneMethod?: {} | undefined
  }
}
type DeleteBackendEnvironmentResult = {
  backendEnvironment: {
    backendEnvironmentArn: {}
    environmentName: {}
    stackName?: {} | undefined
    deploymentArtifacts?: {} | undefined
    createTime: {}
    updateTime: {}
  }
}
type GetBackendEnvironmentResult = {
  backendEnvironment: {
    backendEnvironmentArn: {}
    environmentName: {}
    stackName?: {} | undefined
    deploymentArtifacts?: {} | undefined
    createTime: {}
    updateTime: {}
  }
}
type DeleteBranchResult = {
  branch: {
    branchArn: {}
    branchName: {}
    description: {}
    tags?: {} | undefined
    stage: {}
    displayName: {}
    enableNotification: {}
    createTime: {}
    updateTime: {}
    environmentVariables: {}
    enableAutoBuild: {}
    customDomains: {}
    framework: {}
    activeJobId: {}
    totalNumberOfJobs: {}
    enableBasicAuth: {}
    enablePerformanceMode?: {} | undefined
    thumbnailUrl?: {} | undefined
    basicAuthCredentials?: {} | undefined
    buildSpec?: {} | undefined
    ttl: {}
    associatedResources?: {} | undefined
    enablePullRequestPreview: {}
    pullRequestEnvironmentName?: {} | undefined
    destinationBranch?: {} | undefined
    sourceBranch?: {} | undefined
    backendEnvironmentArn?: {} | undefined
  }
}
type Branch = {
  branchArn: {}
  branchName: {}
  description: {}
  tags?: {} | undefined
  stage: {}
  displayName: {}
  enableNotification: {}
  createTime: {}
  updateTime: {}
  environmentVariables: {}
  enableAutoBuild: {}
  customDomains: {}
  framework: {}
  activeJobId: {}
  totalNumberOfJobs: {}
  enableBasicAuth: {}
  enablePerformanceMode?: {} | undefined
  thumbnailUrl?: {} | undefined
  basicAuthCredentials?: {} | undefined
  buildSpec?: {} | undefined
  ttl: {}
  associatedResources?: {} | undefined
  enablePullRequestPreview: {}
  pullRequestEnvironmentName?: {} | undefined
  destinationBranch?: {} | undefined
  sourceBranch?: {} | undefined
  backendEnvironmentArn?: {} | undefined
}
type GetBranchResult = { branch: Branch }
type UpdateBranchResult = {
  branch: {
    branchArn: {}
    branchName: {}
    description: {}
    tags?: {} | undefined
    stage: {}
    displayName: {}
    enableNotification: {}
    createTime: {}
    updateTime: {}
    environmentVariables: {}
    enableAutoBuild: {}
    customDomains: {}
    framework: {}
    activeJobId: {}
    totalNumberOfJobs: {}
    enableBasicAuth: {}
    enablePerformanceMode?: {} | undefined
    thumbnailUrl?: {} | undefined
    basicAuthCredentials?: {} | undefined
    buildSpec?: {} | undefined
    ttl: {}
    associatedResources?: {} | undefined
    enablePullRequestPreview: {}
    pullRequestEnvironmentName?: {} | undefined
    destinationBranch?: {} | undefined
    sourceBranch?: {} | undefined
    backendEnvironmentArn?: {} | undefined
  }
}
type DomainAssociation = {
  domainAssociationArn: {}
  domainName: {}
  enableAutoSubDomain: {}
  autoSubDomainCreationPatterns?: {} | undefined
  autoSubDomainIAMRole?: {} | undefined
  domainStatus: {}
  statusReason: {}
  certificateVerificationDNSRecord?: {} | undefined
  subDomains: {}
}
type DeleteDomainAssociationResult = { domainAssociation: DomainAssociation }
type GetDomainAssociationResult = {
  domainAssociation: {
    domainAssociationArn: {}
    domainName: {}
    enableAutoSubDomain: {}
    autoSubDomainCreationPatterns?: {} | undefined
    autoSubDomainIAMRole?: {} | undefined
    domainStatus: {}
    statusReason: {}
    certificateVerificationDNSRecord?: {} | undefined
    subDomains: {}
  }
}
type UpdateDomainAssociationResult = {
  domainAssociation: {
    domainAssociationArn: {}
    domainName: {}
    enableAutoSubDomain: {}
    autoSubDomainCreationPatterns?: {} | undefined
    autoSubDomainIAMRole?: {} | undefined
    domainStatus: {}
    statusReason: {}
    certificateVerificationDNSRecord?: {} | undefined
    subDomains: {}
  }
}
type JobSummary = {
  jobArn: {}
  jobId: {}
  commitId: {}
  commitMessage: {}
  commitTime: {}
  startTime: {}
  status: {}
  endTime?: {} | undefined
  jobType: {}
}
type DeleteJobResult = { jobSummary: JobSummary }
type Job = {
  summary: {
    jobArn: {}
    jobId: {}
    commitId: {}
    commitMessage: {}
    commitTime: {}
    startTime: {}
    status: {}
    endTime?: {} | undefined
    jobType: {}
  }
  steps: {}
}
type GetJobResult = { job: Job }
type DeleteWebhookResult = {
  webhook: {
    webhookArn: {}
    webhookId: {}
    webhookUrl: {}
    branchName: {}
    description: {}
    createTime: {}
    updateTime: {}
  }
}
type GetWebhookResult = {
  webhook: {
    webhookArn: {}
    webhookId: {}
    webhookUrl: {}
    branchName: {}
    description: {}
    createTime: {}
    updateTime: {}
  }
}
type UpdateWebhookResult = {
  webhook: {
    webhookArn: {}
    webhookId: {}
    webhookUrl: {}
    branchName: {}
    description: {}
    createTime: {}
    updateTime: {}
  }
}
type GenerateAccessLogsResult = { logUrl?: {} | undefined }
type GetArtifactUrlResult = { artifactId: {}; artifactUrl: {} }
type ListArtifactsResult = { artifacts: {}; nextToken?: {} | undefined }
type ListJobsResult = { jobSummaries: {}; nextToken?: {} | undefined }
type StartJobResult = {
  jobSummary: {
    jobArn: {}
    jobId: {}
    commitId: {}
    commitMessage: {}
    commitTime: {}
    startTime: {}
    status: {}
    endTime?: {} | undefined
    jobType: {}
  }
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type TagResourceResponse = { [x: string]: unknown }
type StartDeploymentResult = {
  jobSummary: {
    jobArn: {}
    jobId: {}
    commitId: {}
    commitMessage: {}
    commitTime: {}
    startTime: {}
    status: {}
    endTime?: {} | undefined
    jobType: {}
  }
}
type StopJobResult = {
  jobSummary: {
    jobArn: {}
    jobId: {}
    commitId: {}
    commitMessage: {}
    commitTime: {}
    startTime: {}
    status: {}
    endTime?: {} | undefined
    jobType: {}
  }
}
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apps': {
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
                name: string
                description?: string | undefined
                repository?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
              }
            }
            output: CreateAppResult
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
                name: string
                description?: string | undefined
                repository?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
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
                name: string
                description?: string | undefined
                repository?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UnauthorizedException
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
                name: string
                description?: string | undefined
                repository?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
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
                name: string
                description?: string | undefined
                repository?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
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
                name: string
                description?: string | undefined
                repository?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
              }
            }
            output: DependentServiceFailureException
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
            output: ListAppsResult
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
            output: BadRequestException
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
            output: UnauthorizedException
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/apps/:appId/backendenvironments': {
      $post:
        | {
            input: { param: { appId: string } } & {
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
                environmentName: string
                stackName?: string | undefined
                deploymentArtifacts?: string | undefined
              }
            }
            output: CreateBackendEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
                environmentName: string
                stackName?: string | undefined
                deploymentArtifacts?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
                environmentName: string
                stackName?: string | undefined
                deploymentArtifacts?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
                environmentName: string
                stackName?: string | undefined
                deploymentArtifacts?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
                environmentName: string
                stackName?: string | undefined
                deploymentArtifacts?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string } } & {
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
                environmentName: string
                stackName?: string | undefined
                deploymentArtifacts?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { appId: string } } & {
              query: {
                environmentName?: string | undefined
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
            output: ListBackendEnvironmentsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              query: {
                environmentName?: string | undefined
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              query: {
                environmentName?: string | undefined
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              query: {
                environmentName?: string | undefined
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
    }
  } & {
    '/apps/:appId/branches': {
      $post:
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: CreateBranchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { appId: string } } & {
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
                branchName: string
                description?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                framework?: string | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                tags?: { [x: string]: TagValue } | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { appId: string } } & {
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
            output: ListBranchesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
            status: 482
          }
    }
  } & {
    '/apps/:appId/branches/:branchName/deployments': {
      $post:
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { fileMap?: { [x: string]: MD5Hash } | undefined } }
            output: CreateDeploymentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { fileMap?: { [x: string]: MD5Hash } | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { fileMap?: { [x: string]: MD5Hash } | undefined } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { fileMap?: { [x: string]: MD5Hash } | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { fileMap?: { [x: string]: MD5Hash } | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/apps/:appId/domains': {
      $post:
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: CreateDomainAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { appId: string } } & {
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
                domainName: string
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings: SubDomainSetting[]
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { appId: string } } & {
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
            output: ListDomainAssociationsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
            status: 482
          }
    }
  } & {
    '/apps/:appId/webhooks': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: CreateWebhookResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName: string; description?: string | undefined } }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { appId: string } } & {
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
            output: ListWebhooksResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/apps/:appId': {
      $delete:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteAppResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetAppResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
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
            status: 483
          }
      $post:
        | {
            input: { param: { appId: string } } & {
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
                name?: string | undefined
                description?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
                repository?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
              }
            }
            output: UpdateAppResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
                name?: string | undefined
                description?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
                repository?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
                name?: string | undefined
                description?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
                repository?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
                name?: string | undefined
                description?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
                repository?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
                name?: string | undefined
                description?: string | undefined
                platform?: 'WEB' | 'WEB_DYNAMIC' | 'WEB_COMPUTE' | undefined
                iamServiceRoleArn?: string | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                enableBranchAutoBuild?: boolean | undefined
                enableBranchAutoDeletion?: boolean | undefined
                enableBasicAuth?: boolean | undefined
                basicAuthCredentials?: string | undefined
                customRules?: CustomRule[] | undefined
                buildSpec?: string | undefined
                customHeaders?: string | undefined
                enableAutoBranchCreation?: boolean | undefined
                autoBranchCreationPatterns?: AutoBranchCreationPattern[] | undefined
                autoBranchCreationConfig?:
                  | {
                      stage?: {} | undefined
                      framework?: {} | undefined
                      enableAutoBuild?: {} | undefined
                      environmentVariables?: {} | undefined
                      basicAuthCredentials?: {} | undefined
                      enableBasicAuth?: {} | undefined
                      enablePerformanceMode?: {} | undefined
                      buildSpec?: {} | undefined
                      enablePullRequestPreview?: {} | undefined
                      pullRequestEnvironmentName?: {} | undefined
                    }
                  | undefined
                repository?: string | undefined
                oauthToken?: string | undefined
                accessToken?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/apps/:appId/backendenvironments/:environmentName': {
      $delete:
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteBackendEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetBackendEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; environmentName: string } } & {
              header: {
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
            status: 483
          }
    }
  } & {
    '/apps/:appId/branches/:branchName': {
      $delete:
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteBranchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetBranchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
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
            status: 483
          }
      $post:
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                framework?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: UpdateBranchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                framework?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                framework?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                framework?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                framework?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                framework?: string | undefined
                stage?:
                  | 'PRODUCTION'
                  | 'BETA'
                  | 'DEVELOPMENT'
                  | 'EXPERIMENTAL'
                  | 'PULL_REQUEST'
                  | undefined
                enableNotification?: boolean | undefined
                enableAutoBuild?: boolean | undefined
                environmentVariables?: { [x: string]: EnvValue } | undefined
                basicAuthCredentials?: string | undefined
                enableBasicAuth?: boolean | undefined
                enablePerformanceMode?: boolean | undefined
                buildSpec?: string | undefined
                ttl?: string | undefined
                displayName?: string | undefined
                enablePullRequestPreview?: boolean | undefined
                pullRequestEnvironmentName?: string | undefined
                backendEnvironmentArn?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/apps/:appId/domains/:domainName': {
      $delete:
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDomainAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDomainAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
              header: {
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
            status: 483
          }
      $post:
        | {
            input: { param: { appId: string; domainName: string } } & {
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
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings?: SubDomainSetting[] | undefined
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: UpdateDomainAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
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
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings?: SubDomainSetting[] | undefined
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
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
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings?: SubDomainSetting[] | undefined
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
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
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings?: SubDomainSetting[] | undefined
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
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
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings?: SubDomainSetting[] | undefined
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; domainName: string } } & {
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
                enableAutoSubDomain?: boolean | undefined
                subDomainSettings?: SubDomainSetting[] | undefined
                autoSubDomainCreationPatterns?: AutoSubDomainCreationPattern[] | undefined
                autoSubDomainIAMRole?: string | undefined
              }
            }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/apps/:appId/branches/:branchName/jobs/:jobId': {
      $delete:
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteJobResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
      $get:
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetJobResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
    }
  } & {
    '/webhooks/:webhookId': {
      $delete:
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteWebhookResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
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
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
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
      $get:
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWebhookResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
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
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
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
      $post:
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName?: string | undefined; description?: string | undefined } }
            output: UpdateWebhookResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName?: string | undefined; description?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName?: string | undefined; description?: string | undefined } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName?: string | undefined; description?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName?: string | undefined; description?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { webhookId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { branchName?: string | undefined; description?: string | undefined } }
            output: DependentServiceFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/apps/:appId/accesslogs': {
      $post:
        | {
            input: { param: { appId: string } } & {
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
                startTime?: string | undefined
                endTime?: string | undefined
                domainName: string
              }
            }
            output: GenerateAccessLogsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
                startTime?: string | undefined
                endTime?: string | undefined
                domainName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
                startTime?: string | undefined
                endTime?: string | undefined
                domainName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
                startTime?: string | undefined
                endTime?: string | undefined
                domainName: string
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
                startTime?: string | undefined
                endTime?: string | undefined
                domainName: string
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/artifacts/:artifactId': {
      $get:
        | {
            input: { param: { artifactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetArtifactUrlResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { artifactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { artifactId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { artifactId: string } } & {
              header: {
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
            input: { param: { artifactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { artifactId: string } } & {
              header: {
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
    }
  } & {
    '/apps/:appId/branches/:branchName/jobs/:jobId/artifacts': {
      $get:
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
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
            output: ListArtifactsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
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
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/apps/:appId/branches/:branchName/jobs': {
      $get:
        | {
            input: { param: { appId: string; branchName: string } } & {
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
            output: ListJobsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                jobId?: string | undefined
                jobType: 'RELEASE' | 'RETRY' | 'MANUAL' | 'WEB_HOOK'
                jobReason?: string | undefined
                commitId?: string | undefined
                commitMessage?: string | undefined
                commitTime?: string | undefined
              }
            }
            output: StartJobResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                jobId?: string | undefined
                jobType: 'RELEASE' | 'RETRY' | 'MANUAL' | 'WEB_HOOK'
                jobReason?: string | undefined
                commitId?: string | undefined
                commitMessage?: string | undefined
                commitTime?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                jobId?: string | undefined
                jobType: 'RELEASE' | 'RETRY' | 'MANUAL' | 'WEB_HOOK'
                jobReason?: string | undefined
                commitId?: string | undefined
                commitMessage?: string | undefined
                commitTime?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                jobId?: string | undefined
                jobType: 'RELEASE' | 'RETRY' | 'MANUAL' | 'WEB_HOOK'
                jobReason?: string | undefined
                commitId?: string | undefined
                commitMessage?: string | undefined
                commitTime?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                jobId?: string | undefined
                jobType: 'RELEASE' | 'RETRY' | 'MANUAL' | 'WEB_HOOK'
                jobReason?: string | undefined
                commitId?: string | undefined
                commitMessage?: string | undefined
                commitTime?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
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
                jobId?: string | undefined
                jobType: 'RELEASE' | 'RETRY' | 'MANUAL' | 'WEB_HOOK'
                jobReason?: string | undefined
                commitId?: string | undefined
                commitMessage?: string | undefined
                commitTime?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tags/:resourceArn': {
      $get:
        | {
            input: { param: { resourceArn: string } } & {
              header: {
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
            input: { param: { resourceArn: string } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
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
      $post:
        | {
            input: { param: { resourceArn: string } } & {
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
            input: { param: { resourceArn: string } } & {
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
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
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
            status: 482
          }
    }
  } & {
    '/apps/:appId/branches/:branchName/deployments/start': {
      $post:
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobId?: string | undefined; sourceUrl?: string | undefined } }
            output: StartDeploymentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobId?: string | undefined; sourceUrl?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobId?: string | undefined; sourceUrl?: string | undefined } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobId?: string | undefined; sourceUrl?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobId?: string | undefined; sourceUrl?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobId?: string | undefined; sourceUrl?: string | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/apps/:appId/branches/:branchName/jobs/:jobId/stop': {
      $delete:
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: StopJobResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { appId: string; branchName: string; jobId: string } } & {
              header: {
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
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
              header: {
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
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
              header: {
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
    }
  },
  '/'
>
export default routes
