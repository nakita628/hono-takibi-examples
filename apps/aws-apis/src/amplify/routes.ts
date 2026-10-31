import { createRoute, z } from '@hono/zod-openapi'

const AppIdSchema = z
  .string()
  .regex(/d[a-z0-9]+/)
  .min(1)
  .max(20)
  .openapi('AppId')

const AppArnSchema = z.string().max(1000).openapi('AppArn')

const NameSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(255)
  .openapi('Name')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const DescriptionSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(1000)
  .openapi('Description')

const RepositorySchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(1000)
  .openapi('Repository')

const PlatformSchema = z.enum(['WEB', 'WEB_DYNAMIC', 'WEB_COMPUTE']).openapi('Platform')

const CreateTimeSchema = z.iso.datetime({ offset: true }).openapi('CreateTime')

const UpdateTimeSchema = z.iso.datetime({ offset: true }).openapi('UpdateTime')

const ServiceRoleArnSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .min(0)
  .max(1000)
  .openapi('ServiceRoleArn')

const EnvValueSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(5500)
  .openapi('EnvValue')

const EnvironmentVariablesSchema = z
  .record(z.string(), EnvValueSchema)
  .openapi('EnvironmentVariables')

const DefaultDomainSchema = z.string().min(1).max(1000).openapi('DefaultDomain')

const EnableBranchAutoBuildSchema = z.boolean().openapi('EnableBranchAutoBuild')

const EnableBranchAutoDeletionSchema = z.boolean().openapi('EnableBranchAutoDeletion')

const EnableBasicAuthSchema = z.boolean().openapi('EnableBasicAuth')

const BasicAuthCredentialsSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(2000)
  .openapi('BasicAuthCredentials')

const SourceSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(2048)
  .openapi('Source')

const TargetSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(2048)
  .openapi('Target')

const StatusSchema = z
  .string()
  .regex(/.{3,7}/)
  .min(3)
  .max(7)
  .openapi('Status')

const ConditionSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .min(0)
  .max(2048)
  .openapi('Condition')

const CustomRuleSchema = z
  .object({
    source: SourceSchema.and(
      z.any().openapi({ description: ' The source pattern for a URL rewrite or redirect rule. ' }),
    ),
    target: TargetSchema.and(
      z.any().openapi({ description: ' The target pattern for a URL rewrite or redirect rule. ' }),
    ),
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The status code for a URL rewrite or redirect rule. </p> <dl> <dt>200</dt> <dd> <p>Represents a 200 rewrite rule.</p> </dd> <dt>301</dt> <dd> <p>Represents a 301 (moved pemanently) redirect rule. This and all future requests should be directed to the target URL. </p> </dd> <dt>302</dt> <dd> <p>Represents a 302 temporary redirect rule.</p> </dd> <dt>404</dt> <dd> <p>Represents a 404 redirect rule.</p> </dd> <dt>404-200</dt> <dd> <p>Represents a 404 rewrite rule.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The condition for a URL rewrite or redirect rule, such as a country code. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['source', 'target'],
    description: ' Describes a custom rewrite or redirect rule. ',
  })
  .openapi('CustomRule')

const CustomRulesSchema = z.array(CustomRuleSchema).openapi('CustomRules')

const LastDeployTimeSchema = z.iso.datetime({ offset: true }).openapi('LastDeployTime')

const ThumbnailUrlSchema = z.string().min(1).max(2000).openapi('ThumbnailUrl')

const BranchNameSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(255)
  .openapi('BranchName')

const ProductionBranchSchema = z
  .object({
    lastDeployTime: LastDeployTimeSchema.and(
      z.any().openapi({ description: ' The last deploy time of the production branch. ' }),
    ).exactOptional(),
    status: StatusSchema.and(
      z.any().openapi({ description: ' The status of the production branch. ' }),
    ).exactOptional(),
    thumbnailUrl: ThumbnailUrlSchema.and(
      z.any().openapi({ description: ' The thumbnail URL for the production branch. ' }),
    ).exactOptional(),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The branch name for the production branch. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Describes the information about a production branch for an Amplify app. ',
    required: [],
  })
  .openapi('ProductionBranch')

const BuildSpecSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(25000)
  .openapi({ description: ' The build specification (build spec) file for an Amplify app build. ' })
  .openapi('BuildSpec')

const CustomHeadersSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .min(0)
  .max(25000)
  .openapi('CustomHeaders')

const EnableAutoBranchCreationSchema = z.boolean().openapi('EnableAutoBranchCreation')

const AutoBranchCreationPatternSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(2048)
  .openapi('AutoBranchCreationPattern')

const AutoBranchCreationPatternsSchema = z
  .array(AutoBranchCreationPatternSchema)
  .openapi('AutoBranchCreationPatterns')

const StageSchema = z
  .enum(['PRODUCTION', 'BETA', 'DEVELOPMENT', 'EXPERIMENTAL', 'PULL_REQUEST'])
  .openapi('Stage')

const FrameworkSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('Framework')

const EnableAutoBuildSchema = z.boolean().openapi('EnableAutoBuild')

const EnablePerformanceModeSchema = z.boolean().openapi('EnablePerformanceMode')

const EnablePullRequestPreviewSchema = z.boolean().openapi('EnablePullRequestPreview')

const PullRequestEnvironmentNameSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(20)
  .openapi('PullRequestEnvironmentName')

const AutoBranchCreationConfigSchema = z
  .object({
    stage: StageSchema.and(
      z.any().openapi({ description: ' Describes the current stage for the autocreated branch. ' }),
    ).exactOptional(),
    framework: FrameworkSchema.and(
      z.any().openapi({ description: ' The framework for the autocreated branch. ' }),
    ).exactOptional(),
    enableAutoBuild: EnableAutoBuildSchema.and(
      z.any().openapi({ description: ' Enables auto building for the autocreated branch. ' }),
    ).exactOptional(),
    environmentVariables: EnvironmentVariablesSchema.and(
      z.any().openapi({ description: ' The environment variables for the autocreated branch. ' }),
    ).exactOptional(),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The basic authorization credentials for the autocreated branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z.any().openapi({ description: ' Enables basic authorization for the autocreated branch. ' }),
    ).exactOptional(),
    enablePerformanceMode: EnablePerformanceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
        }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z
        .any()
        .openapi({
          description: ' The build specification (build spec) for the autocreated branch. ',
        }),
    ).exactOptional(),
    enablePullRequestPreview: EnablePullRequestPreviewSchema.and(
      z
        .any()
        .openapi({ description: ' Enables pull request previews for the autocreated branch. ' }),
    ).exactOptional(),
    pullRequestEnvironmentName: PullRequestEnvironmentNameSchema.and(
      z.any().openapi({ description: ' The Amplify environment name for the pull request. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Describes the automated branch creation configuration. ',
    required: [],
  })
  .openapi('AutoBranchCreationConfig')

const RepositoryCloneMethodSchema = z
  .enum(['SSH', 'TOKEN', 'SIGV4'])
  .openapi('RepositoryCloneMethod')

const AppSchema = z
  .object({
    appId: AppIdSchema.and(z.any().openapi({ description: ' The unique ID of the Amplify app. ' })),
    appArn: AppArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) of the Amplify app. ' }),
    ),
    name: NameSchema.and(z.any().openapi({ description: ' The name for the Amplify app. ' })),
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tag for the Amplify app. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for the Amplify app. ' }),
    ),
    repository: RepositorySchema.and(
      z.any().openapi({ description: ' The Git repository for the Amplify app. ' }),
    ),
    platform: PlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            " The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.",
        }),
    ),
    createTime: CreateTimeSchema.and(
      z.any().openapi({ description: ' Creates a date and time for the Amplify app. ' }),
    ),
    updateTime: UpdateTimeSchema.and(
      z.any().openapi({ description: ' Updates the date and time for the Amplify app. ' }),
    ),
    iamServiceRoleArn: ServiceRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) of the Amplify app. ',
        }),
    ).exactOptional(),
    environmentVariables: EnvironmentVariablesSchema.and(
      z.any().openapi({ description: ' The environment variables for the Amplify app. ' }),
    ),
    defaultDomain: DefaultDomainSchema.and(
      z.any().openapi({ description: ' The default domain for the Amplify app. ' }),
    ),
    enableBranchAutoBuild: EnableBranchAutoBuildSchema.and(
      z
        .any()
        .openapi({ description: ' Enables the auto-building of branches for the Amplify app. ' }),
    ),
    enableBranchAutoDeletion: EnableBranchAutoDeletionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Automatically disconnect a branch in the Amplify Console when you delete a branch from your Git repository. ',
        }),
    ).exactOptional(),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z
        .any()
        .openapi({ description: " Enables basic authorization for the Amplify app's branches. " }),
    ),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The basic authorization credentials for branches for the Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    customRules: CustomRulesSchema.and(
      z
        .any()
        .openapi({
          description: ' Describes the custom redirect and rewrite rules for the Amplify app. ',
        }),
    ).exactOptional(),
    productionBranch: ProductionBranchSchema.and(
      z
        .any()
        .openapi({
          description: ' Describes the information about a production branch of the Amplify app. ',
        }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the content of the build specification (build spec) for the Amplify app. ',
        }),
    ).exactOptional(),
    customHeaders: CustomHeadersSchema.and(
      z.any().openapi({ description: 'Describes the custom HTTP headers for the Amplify app.' }),
    ).exactOptional(),
    enableAutoBranchCreation: EnableAutoBranchCreationSchema.and(
      z.any().openapi({ description: ' Enables automated branch creation for the Amplify app. ' }),
    ).exactOptional(),
    autoBranchCreationPatterns: AutoBranchCreationPatternsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the automated branch creation glob patterns for the Amplify app. ',
        }),
    ).exactOptional(),
    autoBranchCreationConfig: AutoBranchCreationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the automated branch creation configuration for the Amplify app. ',
        }),
    ).exactOptional(),
    repositoryCloneMethod: RepositoryCloneMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>This is for internal use.</p> </note> <p>The Amplify service uses this parameter to specify the authentication protocol to use to access the Git repository for an Amplify app. Amplify specifies <code>TOKEN</code> for a GitHub repository, <code>SIGV4</code> for an Amazon Web Services CodeCommit repository, and <code>SSH</code> for GitLab and Bitbucket repositories.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'appId',
      'appArn',
      'name',
      'description',
      'repository',
      'platform',
      'createTime',
      'updateTime',
      'environmentVariables',
      'defaultDomain',
      'enableBranchAutoBuild',
      'enableBasicAuth',
    ],
    description:
      ' Represents the different branches of a repository for building, deploying, and hosting an Amplify app. ',
  })
  .openapi('App')

const CreateAppResultSchema = z
  .object({ app: AppSchema })
  .openapi({ required: ['app'] })
  .openapi('CreateAppResult')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DependentServiceFailureExceptionSchema = z.any().openapi('DependentServiceFailureException')

const BackendEnvironmentArnSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .min(0)
  .max(1000)
  .openapi('BackendEnvironmentArn')

const EnvironmentNameSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(255)
  .openapi('EnvironmentName')

const StackNameSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(255)
  .openapi('StackName')

const DeploymentArtifactsSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(1000)
  .openapi('DeploymentArtifacts')

const BackendEnvironmentSchema = z
  .object({
    backendEnvironmentArn: BackendEnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. ',
        }),
    ),
    environmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name for a backend environment that is part of an Amplify app. ',
        }),
    ),
    stackName: StackNameSchema.and(
      z
        .any()
        .openapi({ description: ' The AWS CloudFormation stack name of a backend environment. ' }),
    ).exactOptional(),
    deploymentArtifacts: DeploymentArtifactsSchema.and(
      z.any().openapi({ description: ' The name of deployment artifacts. ' }),
    ).exactOptional(),
    createTime: CreateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The creation date and time for a backend environment that is part of an Amplify app. ',
        }),
    ),
    updateTime: UpdateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The last updated date and time for a backend environment that is part of an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['backendEnvironmentArn', 'environmentName', 'createTime', 'updateTime'],
    description: ' Describes the backend environment for an Amplify app. ',
  })
  .openapi('BackendEnvironment')

const CreateBackendEnvironmentResultSchema = z
  .object({
    backendEnvironment: BackendEnvironmentSchema.and(
      z.any().openapi({ description: ' Describes the backend environment for an Amplify app. ' }),
    ),
  })
  .openapi({
    required: ['backendEnvironment'],
    description: ' The result structure for the create backend environment request. ',
  })
  .openapi('CreateBackendEnvironmentResult')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const BranchArnSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(1000)
  .openapi('BranchArn')

const DisplayNameSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('DisplayName')

const EnableNotificationSchema = z.boolean().openapi('EnableNotification')

const CustomDomainSchema = z.string().max(255).openapi('CustomDomain')

const CustomDomainsSchema = z.array(CustomDomainSchema).max(255).openapi('CustomDomains')

const ActiveJobIdSchema = z.string().max(1000).openapi('ActiveJobId')

const TotalNumberOfJobsSchema = z.string().max(1000).openapi('TotalNumberOfJobs')

const TTLSchema = z
  .string()
  .regex(/\d*/)
  .min(0)
  .max(32)
  .openapi({ description: ' The content Time to Live (TTL) for the website in seconds. ' })
  .openapi('TTL')

const AssociatedResourceSchema = z.string().min(1).max(2048).openapi('AssociatedResource')

const AssociatedResourcesSchema = z.array(AssociatedResourceSchema).openapi('AssociatedResources')

const BranchSchema = z
  .object({
    branchArn: BranchArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. ',
        }),
    ),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The name for the branch that is part of an Amplify app. ' }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: ' The description for the branch that is part of an Amplify app. ',
        }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tag for the branch of an Amplify app. ' }),
    ).exactOptional(),
    stage: StageSchema.and(
      z
        .any()
        .openapi({
          description: ' The current stage for the branch that is part of an Amplify app. ',
        }),
    ),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The display name for the branch. This is used as the default domain prefix. ',
        }),
    ),
    enableNotification: EnableNotificationSchema.and(
      z
        .any()
        .openapi({
          description: ' Enables notifications for a branch that is part of an Amplify app. ',
        }),
    ),
    createTime: CreateTimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The creation date and time for a branch that is part of an Amplify app. ',
        }),
    ),
    updateTime: UpdateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The last updated date and time for a branch that is part of an Amplify app. ',
        }),
    ),
    environmentVariables: EnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description: ' The environment variables specific to a branch of an Amplify app. ',
        }),
    ),
    enableAutoBuild: EnableAutoBuildSchema.and(
      z
        .any()
        .openapi({
          description: ' Enables auto-building on push for a branch of an Amplify app. ',
        }),
    ),
    customDomains: CustomDomainsSchema.and(
      z.any().openapi({ description: ' The custom domains for a branch of an Amplify app. ' }),
    ),
    framework: FrameworkSchema.and(
      z.any().openapi({ description: ' The framework for a branch of an Amplify app. ' }),
    ),
    activeJobId: ActiveJobIdSchema.and(
      z
        .any()
        .openapi({ description: ' The ID of the active job for a branch of an Amplify app. ' }),
    ),
    totalNumberOfJobs: TotalNumberOfJobsSchema.and(
      z
        .any()
        .openapi({ description: ' The total number of jobs that are part of an Amplify app. ' }),
    ),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z
        .any()
        .openapi({ description: ' Enables basic authorization for a branch of an Amplify app. ' }),
    ),
    enablePerformanceMode: EnablePerformanceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
        }),
    ).exactOptional(),
    thumbnailUrl: ThumbnailUrlSchema.and(
      z.any().openapi({ description: ' The thumbnail URL for the branch of an Amplify app. ' }),
    ).exactOptional(),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The basic authorization credentials for a branch of an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The build specification (build spec) content for the branch of an Amplify app. ',
        }),
    ).exactOptional(),
    ttl: TTLSchema.and(
      z
        .any()
        .openapi({ description: ' The content Time to Live (TTL) for the website in seconds. ' }),
    ),
    associatedResources: AssociatedResourcesSchema.and(
      z
        .any()
        .openapi({ description: ' A list of custom resources that are linked to this branch. ' }),
    ).exactOptional(),
    enablePullRequestPreview: EnablePullRequestPreviewSchema.and(
      z.any().openapi({ description: ' Enables pull request previews for the branch. ' }),
    ),
    pullRequestEnvironmentName: PullRequestEnvironmentNameSchema.and(
      z.any().openapi({ description: ' The Amplify environment name for the pull request. ' }),
    ).exactOptional(),
    destinationBranch: BranchNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The destination branch if the branch is a pull request branch. ',
        }),
    ).exactOptional(),
    sourceBranch: BranchNameSchema.and(
      z
        .any()
        .openapi({ description: ' The source branch if the branch is a pull request branch. ' }),
    ).exactOptional(),
    backendEnvironmentArn: BackendEnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'branchArn',
      'branchName',
      'description',
      'stage',
      'displayName',
      'enableNotification',
      'createTime',
      'updateTime',
      'environmentVariables',
      'enableAutoBuild',
      'customDomains',
      'framework',
      'activeJobId',
      'totalNumberOfJobs',
      'enableBasicAuth',
      'ttl',
      'enablePullRequestPreview',
    ],
    description: ' The branch for an Amplify app, which maps to a third-party repository branch. ',
  })
  .openapi('Branch')

const CreateBranchResultSchema = z
  .object({
    branch: BranchSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the branch for an Amplify app, which maps to a third-party repository branch. ',
        }),
    ),
  })
  .openapi({
    required: ['branch'],
    description: ' The result structure for create branch request. ',
  })
  .openapi('CreateBranchResult')

const JobIdSchema = z
  .string()
  .regex(/[0-9]+/)
  .max(255)
  .openapi('JobId')

const UploadUrlSchema = z.string().max(1000).openapi('UploadUrl')

const FileUploadUrlsSchema = z.record(z.string(), UploadUrlSchema).openapi('FileUploadUrls')

const CreateDeploymentResultSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The job ID for this deployment. will supply to start deployment api. ',
        }),
    ).exactOptional(),
    fileUploadUrls: FileUploadUrlsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' When the <code>fileMap</code> argument is provided in the request, <code>fileUploadUrls</code> will contain a map of file names to upload URLs. ',
        }),
    ),
    zipUploadUrl: UploadUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' When the <code>fileMap</code> argument is not provided in the request, this <code>zipUploadUrl</code> is returned. ',
        }),
    ),
  })
  .openapi({
    required: ['fileUploadUrls', 'zipUploadUrl'],
    description: ' The result structure for the create a new deployment request. ',
  })
  .openapi('CreateDeploymentResult')

const MD5HashSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(32)
  .openapi('MD5Hash')

const DomainAssociationArnSchema = z.string().max(1000).openapi('DomainAssociationArn')

const DomainNameSchema = z
  .string()
  .regex(/^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$/)
  .max(64)
  .openapi('DomainName')

const EnableAutoSubDomainSchema = z.boolean().openapi('EnableAutoSubDomain')

const AutoSubDomainCreationPatternSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(2048)
  .openapi('AutoSubDomainCreationPattern')

const AutoSubDomainCreationPatternsSchema = z
  .array(AutoSubDomainCreationPatternSchema)
  .openapi('AutoSubDomainCreationPatterns')

const AutoSubDomainIAMRoleSchema = z
  .string()
  .regex(/^$|^arn:aws:iam::\d{12}:role.+/)
  .max(1000)
  .openapi('AutoSubDomainIAMRole')

const DomainStatusSchema = z
  .enum([
    'PENDING_VERIFICATION',
    'IN_PROGRESS',
    'AVAILABLE',
    'PENDING_DEPLOYMENT',
    'FAILED',
    'CREATING',
    'REQUESTING_CERTIFICATE',
    'UPDATING',
  ])
  .openapi('DomainStatus')

const StatusReasonSchema = z.string().max(1000).openapi('StatusReason')

const CertificateVerificationDNSRecordSchema = z
  .string()
  .max(1000)
  .openapi('CertificateVerificationDNSRecord')

const DomainPrefixSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('DomainPrefix')

const SubDomainSettingSchema = z
  .object({
    prefix: DomainPrefixSchema.and(
      z.any().openapi({ description: ' The prefix setting for the subdomain. ' }),
    ),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The branch name setting for the subdomain. ' }),
    ),
  })
  .openapi({
    required: ['prefix', 'branchName'],
    description: ' Describes the settings for the subdomain. ',
  })
  .openapi('SubDomainSetting')

const VerifiedSchema = z.boolean().openapi('Verified')

const DNSRecordSchema = z.string().max(1000).openapi('DNSRecord')

const SubDomainSchema = z
  .object({
    subDomainSetting: SubDomainSettingSchema.and(
      z.any().openapi({ description: ' Describes the settings for the subdomain. ' }),
    ),
    verified: VerifiedSchema.and(
      z.any().openapi({ description: ' The verified status of the subdomain ' }),
    ),
    dnsRecord: DNSRecordSchema.and(
      z.any().openapi({ description: ' The DNS record for the subdomain. ' }),
    ),
  })
  .openapi({
    required: ['subDomainSetting', 'verified', 'dnsRecord'],
    description: ' The subdomain for the domain association. ',
  })
  .openapi('SubDomain')

const SubDomainsSchema = z.array(SubDomainSchema).max(500).openapi('SubDomains')

const DomainAssociationSchema = z
  .object({
    domainAssociationArn: DomainAssociationArnSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Resource Name (ARN) for the domain association. ' }),
    ),
    domainName: DomainNameSchema.and(z.any().openapi({ description: ' The name of the domain. ' })),
    enableAutoSubDomain: EnableAutoSubDomainSchema.and(
      z
        .any()
        .openapi({ description: ' Enables the automated creation of subdomains for branches. ' }),
    ),
    autoSubDomainCreationPatterns: AutoSubDomainCreationPatternsSchema.and(
      z.any().openapi({ description: ' Sets branch patterns for automatic subdomain creation. ' }),
    ).exactOptional(),
    autoSubDomainIAMRole: AutoSubDomainIAMRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. ',
        }),
    ).exactOptional(),
    domainStatus: DomainStatusSchema.and(
      z.any().openapi({ description: ' The current status of the domain association. ' }),
    ),
    statusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({ description: ' The reason for the current status of the domain association. ' }),
    ),
    certificateVerificationDNSRecord: CertificateVerificationDNSRecordSchema.and(
      z.any().openapi({ description: ' The DNS record for certificate verification. ' }),
    ).exactOptional(),
    subDomains: SubDomainsSchema.and(
      z.any().openapi({ description: ' The subdomains for the domain association. ' }),
    ),
  })
  .openapi({
    required: [
      'domainAssociationArn',
      'domainName',
      'enableAutoSubDomain',
      'domainStatus',
      'statusReason',
      'subDomains',
    ],
    description:
      ' Describes a domain association that associates a custom domain with an Amplify app. ',
  })
  .openapi('DomainAssociation')

const CreateDomainAssociationResultSchema = z
  .object({
    domainAssociation: DomainAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the structure of a domain association, which associates a custom domain with an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['domainAssociation'],
    description: ' The result structure for the create domain association request. ',
  })
  .openapi('CreateDomainAssociationResult')

const WebhookArnSchema = z.string().max(1000).openapi('WebhookArn')

const WebhookIdSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('WebhookId')

const WebhookUrlSchema = z.string().max(1000).openapi('WebhookUrl')

const WebhookSchema = z
  .object({
    webhookArn: WebhookArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) for the webhook. ' }),
    ),
    webhookId: WebhookIdSchema.and(z.any().openapi({ description: ' The ID of the webhook. ' })),
    webhookUrl: WebhookUrlSchema.and(z.any().openapi({ description: ' The URL of the webhook. ' })),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The name for a branch that is part of an Amplify app. ' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for a webhook. ' }),
    ),
    createTime: CreateTimeSchema.and(
      z.any().openapi({ description: ' The create date and time for a webhook. ' }),
    ),
    updateTime: UpdateTimeSchema.and(
      z.any().openapi({ description: ' Updates the date and time for a webhook. ' }),
    ),
  })
  .openapi({
    required: [
      'webhookArn',
      'webhookId',
      'webhookUrl',
      'branchName',
      'description',
      'createTime',
      'updateTime',
    ],
    description: ' Describes a webhook that connects repository events to an Amplify app. ',
  })
  .openapi('Webhook')

const CreateWebhookResultSchema = z
  .object({
    webhook: WebhookSchema.and(
      z
        .any()
        .openapi({
          description: ' Describes a webhook that connects repository events to an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['webhook'],
    description: ' The result structure for the create webhook request. ',
  })
  .openapi('CreateWebhookResult')

const DeleteAppResultSchema = z
  .object({ app: AppSchema })
  .openapi({ required: ['app'], description: ' The result structure for the delete app request. ' })
  .openapi('DeleteAppResult')

const DeleteBackendEnvironmentResultSchema = z
  .object({
    backendEnvironment: BackendEnvironmentSchema.and(
      z.any().openapi({ description: ' Describes the backend environment for an Amplify app. ' }),
    ),
  })
  .openapi({
    required: ['backendEnvironment'],
    description: ' The result structure of the delete backend environment result. ',
  })
  .openapi('DeleteBackendEnvironmentResult')

const DeleteBranchResultSchema = z
  .object({
    branch: BranchSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The branch for an Amplify app, which maps to a third-party repository branch. ',
        }),
    ),
  })
  .openapi({
    required: ['branch'],
    description: ' The result structure for the delete branch request. ',
  })
  .openapi('DeleteBranchResult')

const DeleteDomainAssociationResultSchema = z
  .object({ domainAssociation: DomainAssociationSchema })
  .openapi({ required: ['domainAssociation'] })
  .openapi('DeleteDomainAssociationResult')

const JobArnSchema = z.string().max(1000).openapi('JobArn')

const CommitIdSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('CommitId')

const CommitMessageSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(10000)
  .openapi('CommitMessage')

const CommitTimeSchema = z.iso.datetime({ offset: true }).openapi('CommitTime')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const JobStatusSchema = z
  .enum(['PENDING', 'PROVISIONING', 'RUNNING', 'FAILED', 'SUCCEED', 'CANCELLING', 'CANCELLED'])
  .openapi('JobStatus')

const EndTimeSchema = z.iso.datetime({ offset: true }).openapi('EndTime')

const JobTypeSchema = z.enum(['RELEASE', 'RETRY', 'MANUAL', 'WEB_HOOK']).openapi('JobType')

const JobSummarySchema = z
  .object({
    jobArn: JobArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) for the job. ' }),
    ),
    jobId: JobIdSchema.and(z.any().openapi({ description: ' The unique ID for the job. ' })),
    commitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The commit ID from a third-party repository provider for the job. ',
        }),
    ),
    commitMessage: CommitMessageSchema.and(
      z
        .any()
        .openapi({
          description: ' The commit message from a third-party repository provider for the job. ',
        }),
    ),
    commitTime: CommitTimeSchema.and(
      z.any().openapi({ description: ' The commit date and time for the job. ' }),
    ),
    startTime: StartTimeSchema.and(
      z.any().openapi({ description: ' The start date and time for the job. ' }),
    ),
    status: JobStatusSchema.and(
      z.any().openapi({ description: ' The current status for the job. ' }),
    ),
    endTime: EndTimeSchema.and(
      z.any().openapi({ description: ' The end date and time for the job. ' }),
    ).exactOptional(),
    jobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type for the job. If the value is <code>RELEASE</code>, the job was manually released from its source by using the <code>StartJob</code> API. If the value is <code>RETRY</code>, the job was manually retried using the <code>StartJob</code> API. If the value is <code>WEB_HOOK</code>, the job was automatically triggered by webhooks. ',
        }),
    ),
  })
  .openapi({
    required: [
      'jobArn',
      'jobId',
      'commitId',
      'commitMessage',
      'commitTime',
      'startTime',
      'status',
      'jobType',
    ],
    description: ' Describes the summary for an execution job for an Amplify app. ',
  })
  .openapi('JobSummary')

const DeleteJobResultSchema = z
  .object({ jobSummary: JobSummarySchema })
  .openapi({
    required: ['jobSummary'],
    description: ' The result structure for the delete job request. ',
  })
  .openapi('DeleteJobResult')

const DeleteWebhookResultSchema = z
  .object({
    webhook: WebhookSchema.and(
      z
        .any()
        .openapi({
          description: ' Describes a webhook that connects repository events to an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['webhook'],
    description: ' The result structure for the delete webhook request. ',
  })
  .openapi('DeleteWebhookResult')

const LogUrlSchema = z.string().max(1000).openapi('LogUrl')

const GenerateAccessLogsResultSchema = z
  .object({
    logUrl: LogUrlSchema.and(
      z.any().openapi({ description: ' The pre-signed URL for the requested access logs. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The result structure for the generate access logs request. ',
    required: [],
  })
  .openapi('GenerateAccessLogsResult')

const GetAppResultSchema = z
  .object({ app: AppSchema })
  .openapi({ required: ['app'] })
  .openapi('GetAppResult')

const ArtifactIdSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('ArtifactId')

const ArtifactUrlSchema = z.string().max(1000).openapi('ArtifactUrl')

const GetArtifactUrlResultSchema = z
  .object({
    artifactId: ArtifactIdSchema.and(
      z.any().openapi({ description: ' The unique ID for an artifact. ' }),
    ),
    artifactUrl: ArtifactUrlSchema.and(
      z.any().openapi({ description: ' The presigned URL for the artifact. ' }),
    ),
  })
  .openapi({
    required: ['artifactId', 'artifactUrl'],
    description: ' Returns the result structure for the get artifact request. ',
  })
  .openapi('GetArtifactUrlResult')

const GetBackendEnvironmentResultSchema = z
  .object({
    backendEnvironment: BackendEnvironmentSchema.and(
      z.any().openapi({ description: ' Describes the backend environment for an Amplify app. ' }),
    ),
  })
  .openapi({
    required: ['backendEnvironment'],
    description: ' The result structure for the get backend environment result. ',
  })
  .openapi('GetBackendEnvironmentResult')

const GetBranchResultSchema = z
  .object({ branch: BranchSchema })
  .openapi({ required: ['branch'] })
  .openapi('GetBranchResult')

const GetDomainAssociationResultSchema = z
  .object({
    domainAssociation: DomainAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the structure of a domain association, which associates a custom domain with an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['domainAssociation'],
    description: ' The result structure for the get domain association request. ',
  })
  .openapi('GetDomainAssociationResult')

const StepNameSchema = z.string().max(255).openapi('StepName')

const ArtifactsUrlSchema = z.string().max(1000).openapi('ArtifactsUrl')

const TestArtifactsUrlSchema = z.string().max(1000).openapi('TestArtifactsUrl')

const TestConfigUrlSchema = z.string().max(1000).openapi('TestConfigUrl')

const ScreenshotsSchema = z.record(z.string(), ThumbnailUrlSchema).openapi('Screenshots')

const ContextSchema = z.string().openapi('Context')

const StepSchema = z
  .object({
    stepName: StepNameSchema.and(
      z.any().openapi({ description: ' The name of the execution step. ' }),
    ),
    startTime: StartTimeSchema.and(
      z.any().openapi({ description: ' The start date and time of the execution step. ' }),
    ),
    status: JobStatusSchema.and(
      z.any().openapi({ description: ' The status of the execution step. ' }),
    ),
    endTime: EndTimeSchema.and(
      z.any().openapi({ description: ' The end date and time of the execution step. ' }),
    ),
    logUrl: LogUrlSchema.and(
      z.any().openapi({ description: ' The URL to the logs for the execution step. ' }),
    ).exactOptional(),
    artifactsUrl: ArtifactsUrlSchema.and(
      z.any().openapi({ description: ' The URL to the artifact for the execution step. ' }),
    ).exactOptional(),
    testArtifactsUrl: TestArtifactsUrlSchema.and(
      z.any().openapi({ description: ' The URL to the test artifact for the execution step. ' }),
    ).exactOptional(),
    testConfigUrl: TestConfigUrlSchema.and(
      z
        .any()
        .openapi({ description: ' The URL to the test configuration for the execution step. ' }),
    ).exactOptional(),
    screenshots: ScreenshotsSchema.and(
      z
        .any()
        .openapi({
          description: ' The list of screenshot URLs for the execution step, if relevant. ',
        }),
    ).exactOptional(),
    statusReason: StatusReasonSchema.and(
      z.any().openapi({ description: ' The reason for the current step status. ' }),
    ).exactOptional(),
    context: ContextSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The context for the current step. Includes a build image if the step is build. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['stepName', 'startTime', 'status', 'endTime'],
    description: ' Describes an execution step, for an execution job, for an Amplify app. ',
  })
  .openapi('Step')

const StepsSchema = z.array(StepSchema).openapi('Steps')

const JobSchema = z
  .object({
    summary: JobSummarySchema.and(
      z
        .any()
        .openapi({
          description: ' Describes the summary for an execution job for an Amplify app. ',
        }),
    ),
    steps: StepsSchema.and(
      z
        .any()
        .openapi({
          description: ' The execution steps for an execution job, for an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['summary', 'steps'],
    description: ' Describes an execution job for an Amplify app. ',
  })
  .openapi('Job')

const GetJobResultSchema = z
  .object({ job: JobSchema })
  .openapi({ required: ['job'] })
  .openapi('GetJobResult')

const GetWebhookResultSchema = z
  .object({
    webhook: WebhookSchema.and(
      z.any().openapi({ description: ' Describes the structure of a webhook. ' }),
    ),
  })
  .openapi({
    required: ['webhook'],
    description: ' The result structure for the get webhook request. ',
  })
  .openapi('GetWebhookResult')

const AppsSchema = z.array(AppSchema).openapi('Apps')

const NextTokenSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(2000)
  .openapi('NextToken')

const ListAppsResultSchema = z
  .object({
    apps: AppsSchema.and(z.any().openapi({ description: ' A list of Amplify apps. ' })),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. Set to null to start listing apps from start. If non-null, the pagination token is returned in a result. Pass its value in here to list more projects. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['apps'],
    description: ' The result structure for an Amplify app list request. ',
  })
  .openapi('ListAppsResult')

const ArtifactFileNameSchema = z.string().max(1000).openapi('ArtifactFileName')

const ArtifactSchema = z
  .object({
    artifactFileName: ArtifactFileNameSchema.and(
      z.any().openapi({ description: ' The file name for the artifact. ' }),
    ),
    artifactId: ArtifactIdSchema.and(
      z.any().openapi({ description: ' The unique ID for the artifact. ' }),
    ),
  })
  .openapi({
    required: ['artifactFileName', 'artifactId'],
    description: ' Describes an artifact. ',
  })
  .openapi('Artifact')

const ArtifactsSchema = z.array(ArtifactSchema).openapi('Artifacts')

const ListArtifactsResultSchema = z
  .object({
    artifacts: ArtifactsSchema.and(z.any().openapi({ description: ' A list of artifacts. ' })),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['artifacts'],
    description: ' The result structure for the list artifacts request. ',
  })
  .openapi('ListArtifactsResult')

const BackendEnvironmentsSchema = z.array(BackendEnvironmentSchema).openapi('BackendEnvironments')

const ListBackendEnvironmentsResultSchema = z
  .object({
    backendEnvironments: BackendEnvironmentsSchema.and(
      z.any().openapi({ description: ' The list of backend environments for an Amplify app. ' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['backendEnvironments'],
    description: ' The result structure for the list backend environments result. ',
  })
  .openapi('ListBackendEnvironmentsResult')

const BranchesSchema = z.array(BranchSchema).max(255).openapi('Branches')

const ListBranchesResultSchema = z
  .object({
    branches: BranchesSchema.and(
      z.any().openapi({ description: ' A list of branches for an Amplify app. ' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['branches'],
    description: ' The result structure for the list branches request. ',
  })
  .openapi('ListBranchesResult')

const DomainAssociationsSchema = z
  .array(DomainAssociationSchema)
  .max(255)
  .openapi('DomainAssociations')

const ListDomainAssociationsResultSchema = z
  .object({
    domainAssociations: DomainAssociationsSchema.and(
      z.any().openapi({ description: ' A list of domain associations. ' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. If non-null, a pagination token is returned in a result. Pass its value in another request to retrieve more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['domainAssociations'],
    description: ' The result structure for the list domain association request. ',
  })
  .openapi('ListDomainAssociationsResult')

const JobSummariesSchema = z.array(JobSummarySchema).openapi('JobSummaries')

const ListJobsResultSchema = z
  .object({
    jobSummaries: JobSummariesSchema.and(
      z.any().openapi({ description: ' The result structure for the list job result request. ' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. If non-null the pagination token is returned in a result. Pass its value in another request to retrieve more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobSummaries'],
    description: ' The maximum number of records to list in a single response. ',
  })
  .openapi('ListJobsResult')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of tags for the specified The Amazon Resource Name (ARN). ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The response for the list tags for resource request. ', required: [] })
  .openapi('ListTagsForResourceResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const WebhooksSchema = z.array(WebhookSchema).openapi('Webhooks')

const ListWebhooksResultSchema = z
  .object({
    webhooks: WebhooksSchema.and(z.any().openapi({ description: ' A list of webhooks. ' })),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['webhooks'],
    description: ' The result structure for the list webhooks request. ',
  })
  .openapi('ListWebhooksResult')

const StartDeploymentResultSchema = z
  .object({
    jobSummary: JobSummarySchema.and(
      z.any().openapi({ description: ' The summary for the job. ' }),
    ),
  })
  .openapi({
    required: ['jobSummary'],
    description: ' The result structure for the start a deployment request. ',
  })
  .openapi('StartDeploymentResult')

const StartJobResultSchema = z
  .object({
    jobSummary: JobSummarySchema.and(
      z.any().openapi({ description: ' The summary for the job. ' }),
    ),
  })
  .openapi({
    required: ['jobSummary'],
    description: ' The result structure for the run job request. ',
  })
  .openapi('StartJobResult')

const StopJobResultSchema = z
  .object({
    jobSummary: JobSummarySchema.and(
      z.any().openapi({ description: ' The summary for the job. ' }),
    ),
  })
  .openapi({
    required: ['jobSummary'],
    description: ' The result structure for the stop job request. ',
  })
  .openapi('StopJobResult')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ description: ' The response for the tag resource request. ' })
  .openapi('TagResourceResponse')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ description: ' The response for the untag resource request. ' })
  .openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateAppResultSchema = z
  .object({
    app: AppSchema.and(z.any().openapi({ description: ' Represents the updated Amplify app. ' })),
  })
  .openapi({
    required: ['app'],
    description: ' The result structure for an Amplify app update request. ',
  })
  .openapi('UpdateAppResult')

const UpdateBranchResultSchema = z
  .object({
    branch: BranchSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The branch for an Amplify app, which maps to a third-party repository branch. ',
        }),
    ),
  })
  .openapi({
    required: ['branch'],
    description: ' The result structure for the update branch request. ',
  })
  .openapi('UpdateBranchResult')

const UpdateDomainAssociationResultSchema = z
  .object({
    domainAssociation: DomainAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes a domain association, which associates a custom domain with an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['domainAssociation'],
    description: ' The result structure for the update domain association request. ',
  })
  .openapi('UpdateDomainAssociationResult')

const UpdateWebhookResultSchema = z
  .object({
    webhook: WebhookSchema.and(
      z
        .any()
        .openapi({
          description: ' Describes a webhook that connects repository events to an Amplify app. ',
        }),
    ),
  })
  .openapi({
    required: ['webhook'],
    description: ' The result structure for the update webhook request. ',
  })
  .openapi('UpdateWebhookResult')

const AccessTokenSchema = z
  .string()
  .regex(/\(\?s\).\+/)
  .min(1)
  .max(255)
  .openapi('AccessToken')

const OauthTokenSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(1000)
  .openapi('OauthToken')

const CreateAppRequestSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: ' The name for an Amplify app. ' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for an Amplify app. ' }),
    ).exactOptional(),
    repository: RepositorySchema.and(
      z.any().openapi({ description: ' The repository for an Amplify app. ' }),
    ).exactOptional(),
    platform: PlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            " The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.",
        }),
    ).exactOptional(),
    iamServiceRoleArn: ServiceRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The AWS Identity and Access Management (IAM) service role for an Amplify app. ',
        }),
    ).exactOptional(),
    oauthToken: OauthTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
        }),
    ).exactOptional(),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
        }),
    ).exactOptional(),
    environmentVariables: EnvironmentVariablesSchema.and(
      z.any().openapi({ description: ' The environment variables map for an Amplify app. ' }),
    ).exactOptional(),
    enableBranchAutoBuild: EnableBranchAutoBuildSchema.and(
      z
        .any()
        .openapi({ description: ' Enables the auto building of branches for an Amplify app. ' }),
    ).exactOptional(),
    enableBranchAutoDeletion: EnableBranchAutoDeletionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. ',
        }),
    ).exactOptional(),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app. ',
        }),
    ).exactOptional(),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    customRules: CustomRulesSchema.and(
      z
        .any()
        .openapi({ description: ' The custom rewrite and redirect rules for an Amplify app. ' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tag for an Amplify app. ' }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z
        .any()
        .openapi({ description: ' The build specification (build spec) for an Amplify app. ' }),
    ).exactOptional(),
    customHeaders: CustomHeadersSchema.and(
      z.any().openapi({ description: 'The custom HTTP headers for an Amplify app.' }),
    ).exactOptional(),
    enableAutoBranchCreation: EnableAutoBranchCreationSchema.and(
      z.any().openapi({ description: ' Enables automated branch creation for an Amplify app. ' }),
    ).exactOptional(),
    autoBranchCreationPatterns: AutoBranchCreationPatternsSchema.and(
      z
        .any()
        .openapi({
          description: ' The automated branch creation glob patterns for an Amplify app. ',
        }),
    ).exactOptional(),
    autoBranchCreationConfig: AutoBranchCreationConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' The automated branch creation configuration for an Amplify app. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'CreateAppRequest',
    description: ' The request structure used to create apps in Amplify. ',
  })
  .openapi('CreateAppRequest')

const CreateBackendEnvironmentRequestSchema = z
  .object({
    environmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: ' The name for the backend environment. ' }),
    ),
    stackName: StackNameSchema.and(
      z
        .any()
        .openapi({ description: ' The AWS CloudFormation stack name of a backend environment. ' }),
    ).exactOptional(),
    deploymentArtifacts: DeploymentArtifactsSchema.and(
      z.any().openapi({ description: ' The name of deployment artifacts. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['environmentName'],
    title: 'CreateBackendEnvironmentRequest',
    description: ' The request structure for the backend environment create request. ',
  })
  .openapi('CreateBackendEnvironmentRequest')

const CreateBranchRequestSchema = z
  .object({
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The name for the branch. ' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for the branch. ' }),
    ).exactOptional(),
    stage: StageSchema.and(
      z.any().openapi({ description: ' Describes the current stage for the branch. ' }),
    ).exactOptional(),
    framework: FrameworkSchema.and(
      z.any().openapi({ description: ' The framework for the branch. ' }),
    ).exactOptional(),
    enableNotification: EnableNotificationSchema.and(
      z.any().openapi({ description: ' Enables notifications for the branch. ' }),
    ).exactOptional(),
    enableAutoBuild: EnableAutoBuildSchema.and(
      z.any().openapi({ description: ' Enables auto building for the branch. ' }),
    ).exactOptional(),
    environmentVariables: EnvironmentVariablesSchema.and(
      z.any().openapi({ description: ' The environment variables for the branch. ' }),
    ).exactOptional(),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z.any().openapi({ description: ' Enables basic authorization for the branch. ' }),
    ).exactOptional(),
    enablePerformanceMode: EnablePerformanceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tag for the branch. ' }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z.any().openapi({ description: ' The build specification (build spec) for the branch. ' }),
    ).exactOptional(),
    ttl: TTLSchema.and(
      z
        .any()
        .openapi({ description: ' The content Time To Live (TTL) for the website in seconds. ' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The display name for a branch. This is used as the default domain prefix. ',
        }),
    ).exactOptional(),
    enablePullRequestPreview: EnablePullRequestPreviewSchema.and(
      z.any().openapi({ description: ' Enables pull request previews for this branch. ' }),
    ).exactOptional(),
    pullRequestEnvironmentName: PullRequestEnvironmentNameSchema.and(
      z.any().openapi({ description: ' The Amplify environment name for the pull request. ' }),
    ).exactOptional(),
    backendEnvironmentArn: BackendEnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['branchName'],
    title: 'CreateBranchRequest',
    description: ' The request structure for the create branch request. ',
  })
  .openapi('CreateBranchRequest')

const FileMapSchema = z.record(z.string(), MD5HashSchema).openapi('FileMap')

const CreateDeploymentRequestSchema = z
  .object({
    fileMap: FileMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateDeploymentRequest',
    description: ' The request structure for the create a new deployment request. ',
    required: [],
  })
  .openapi('CreateDeploymentRequest')

const SubDomainSettingsSchema = z
  .array(SubDomainSettingSchema)
  .max(500)
  .openapi('SubDomainSettings')

const CreateDomainAssociationRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z.any().openapi({ description: ' The domain name for the domain association. ' }),
    ),
    enableAutoSubDomain: EnableAutoSubDomainSchema.and(
      z
        .any()
        .openapi({ description: ' Enables the automated creation of subdomains for branches. ' }),
    ).exactOptional(),
    subDomainSettings: SubDomainSettingsSchema.and(
      z.any().openapi({ description: ' The setting for the subdomain. ' }),
    ),
    autoSubDomainCreationPatterns: AutoSubDomainCreationPatternsSchema.and(
      z
        .any()
        .openapi({ description: ' Sets the branch patterns for automatic subdomain creation. ' }),
    ).exactOptional(),
    autoSubDomainIAMRole: AutoSubDomainIAMRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['domainName', 'subDomainSettings'],
    title: 'CreateDomainAssociationRequest',
    description: ' The request structure for the create domain association request. ',
  })
  .openapi('CreateDomainAssociationRequest')

const CreateWebhookRequestSchema = z
  .object({
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The name for a branch that is part of an Amplify app. ' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for a webhook. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['branchName'],
    title: 'CreateWebhookRequest',
    description: ' The request structure for the create webhook request. ',
  })
  .openapi('CreateWebhookRequest')

const DeleteAppRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteAppRequest',
    description: ' Describes the request structure for the delete app request. ',
  })
  .openapi('DeleteAppRequest')

const DeleteBackendEnvironmentRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteBackendEnvironmentRequest',
    description: ' The request structure for the delete backend environment request. ',
  })
  .openapi('DeleteBackendEnvironmentRequest')

const DeleteBranchRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteBranchRequest',
    description: ' The request structure for the delete branch request. ',
  })
  .openapi('DeleteBranchRequest')

const DeleteDomainAssociationRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDomainAssociationRequest',
    description: ' The request structure for the delete domain association request. ',
  })
  .openapi('DeleteDomainAssociationRequest')

const DeleteJobRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteJobRequest',
    description: ' The request structure for the delete job request. ',
  })
  .openapi('DeleteJobRequest')

const DeleteWebhookRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteWebhookRequest',
    description: ' The request structure for the delete webhook request. ',
  })
  .openapi('DeleteWebhookRequest')

const EnvKeySchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('EnvKey')

const FileNameSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('FileName')

const GenerateAccessLogsRequestSchema = z
  .object({
    startTime: StartTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time at which the logs should start. The time range specified is inclusive of the start time. ',
        }),
    ).exactOptional(),
    endTime: EndTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time at which the logs should end. The time range specified is inclusive of the end time. ',
        }),
    ).exactOptional(),
    domainName: DomainNameSchema.and(z.any().openapi({ description: ' The name of the domain. ' })),
  })
  .openapi({
    required: ['domainName'],
    title: 'GenerateAccessLogsRequest',
    description: ' The request structure for the generate access logs request. ',
  })
  .openapi('GenerateAccessLogsRequest')

const GetAppRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAppRequest',
    description: ' The request structure for the get app request. ',
  })
  .openapi('GetAppRequest')

const GetArtifactUrlRequestSchema = z
  .object({})
  .openapi({
    title: 'GetArtifactUrlRequest',
    description: ' Returns the request structure for the get artifact request. ',
  })
  .openapi('GetArtifactUrlRequest')

const GetBackendEnvironmentRequestSchema = z
  .object({})
  .openapi({
    title: 'GetBackendEnvironmentRequest',
    description: ' The request structure for the get backend environment request. ',
  })
  .openapi('GetBackendEnvironmentRequest')

const GetBranchRequestSchema = z
  .object({})
  .openapi({
    title: 'GetBranchRequest',
    description: ' The request structure for the get branch request. ',
  })
  .openapi('GetBranchRequest')

const GetDomainAssociationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDomainAssociationRequest',
    description: ' The request structure for the get domain association request. ',
  })
  .openapi('GetDomainAssociationRequest')

const GetJobRequestSchema = z
  .object({})
  .openapi({
    title: 'GetJobRequest',
    description: ' The request structure for the get job request. ',
  })
  .openapi('GetJobRequest')

const GetWebhookRequestSchema = z
  .object({})
  .openapi({
    title: 'GetWebhookRequest',
    description: ' The request structure for the get webhook request. ',
  })
  .openapi('GetWebhookRequest')

const JobReasonSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(255)
  .openapi('JobReason')

const MaxResultsSchema = z.int().min(0).max(100).openapi('MaxResults')

const ListAppsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListAppsRequest',
    description: ' The request structure for the list apps request. ',
  })
  .openapi('ListAppsRequest')

const ListArtifactsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListArtifactsRequest',
    description: ' Describes the request structure for the list artifacts request. ',
  })
  .openapi('ListArtifactsRequest')

const ListBackendEnvironmentsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListBackendEnvironmentsRequest',
    description: ' The request structure for the list backend environments request. ',
  })
  .openapi('ListBackendEnvironmentsRequest')

const ListBranchesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListBranchesRequest',
    description: ' The request structure for the list branches request. ',
  })
  .openapi('ListBranchesRequest')

const ListDomainAssociationsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListDomainAssociationsRequest',
    description: ' The request structure for the list domain associations request. ',
  })
  .openapi('ListDomainAssociationsRequest')

const ListJobsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListJobsRequest',
    description: ' The request structure for the list jobs request. ',
  })
  .openapi('ListJobsRequest')

const ResourceArnSchema = z
  .string()
  .regex(/^arn:aws:amplify:.*/)
  .min(0)
  .max(2048)
  .openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'ListTagsForResourceRequest',
    description: ' The request structure to use to list tags for a resource. ',
  })
  .openapi('ListTagsForResourceRequest')

const ListWebhooksRequestSchema = z
  .object({})
  .openapi({
    title: 'ListWebhooksRequest',
    description: ' The request structure for the list webhooks request. ',
  })
  .openapi('ListWebhooksRequest')

const SourceUrlSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .max(3000)
  .openapi('SourceUrl')

const StartDeploymentRequestSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The job ID for this deployment, generated by the create deployment request. ',
        }),
    ).exactOptional(),
    sourceUrl: SourceUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'StartDeploymentRequest',
    description: ' The request structure for the start a deployment request. ',
    required: [],
  })
  .openapi('StartDeploymentRequest')

const StartJobRequestSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>. ',
        }),
    ).exactOptional(),
    jobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required. ',
        }),
    ),
    jobReason: JobReasonSchema.and(
      z.any().openapi({ description: ' A descriptive reason for starting this job. ' }),
    ).exactOptional(),
    commitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The commit ID from a third-party repository provider for the job. ',
        }),
    ).exactOptional(),
    commitMessage: CommitMessageSchema.and(
      z
        .any()
        .openapi({
          description: ' The commit message from a third-party repository provider for the job. ',
        }),
    ).exactOptional(),
    commitTime: CommitTimeSchema.and(
      z.any().openapi({ description: ' The commit date and time for the job. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['jobType'],
    title: 'StartJobRequest',
    description: ' The request structure for the start job request. ',
  })
  .openapi('StartJobRequest')

const StopJobRequestSchema = z
  .object({})
  .openapi({
    title: 'StopJobRequest',
    description: ' The request structure for the stop job request. ',
  })
  .openapi('StopJobRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tags used to tag the resource. ' }),
    ),
  })
  .openapi({
    required: ['tags'],
    title: 'TagResourceRequest',
    description: ' The request structure to tag a resource with a tag key and value. ',
  })
  .openapi('TagResourceRequest')

const ThumbnailNameSchema = z.string().max(256).openapi('ThumbnailName')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'UntagResourceRequest',
    description: ' The request structure for the untag resource request. ',
  })
  .openapi('UntagResourceRequest')

const UpdateAppRequestSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: ' The name for an Amplify app. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for an Amplify app. ' }),
    ).exactOptional(),
    platform: PlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            " The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.",
        }),
    ).exactOptional(),
    iamServiceRoleArn: ServiceRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The AWS Identity and Access Management (IAM) service role for an Amplify app. ',
        }),
    ).exactOptional(),
    environmentVariables: EnvironmentVariablesSchema.and(
      z.any().openapi({ description: ' The environment variables for an Amplify app. ' }),
    ).exactOptional(),
    enableBranchAutoBuild: EnableAutoBuildSchema.and(
      z.any().openapi({ description: ' Enables branch auto-building for an Amplify app. ' }),
    ).exactOptional(),
    enableBranchAutoDeletion: EnableBranchAutoDeletionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. ',
        }),
    ).exactOptional(),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z.any().openapi({ description: ' Enables basic authorization for an Amplify app. ' }),
    ).exactOptional(),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    customRules: CustomRulesSchema.and(
      z
        .any()
        .openapi({ description: ' The custom redirect and rewrite rules for an Amplify app. ' }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z
        .any()
        .openapi({ description: ' The build specification (build spec) for an Amplify app. ' }),
    ).exactOptional(),
    customHeaders: CustomHeadersSchema.and(
      z.any().openapi({ description: 'The custom HTTP headers for an Amplify app.' }),
    ).exactOptional(),
    enableAutoBranchCreation: EnableAutoBranchCreationSchema.and(
      z.any().openapi({ description: ' Enables automated branch creation for an Amplify app. ' }),
    ).exactOptional(),
    autoBranchCreationPatterns: AutoBranchCreationPatternsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the automated branch creation glob patterns for an Amplify app. ',
        }),
    ).exactOptional(),
    autoBranchCreationConfig: AutoBranchCreationConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' The automated branch creation configuration for an Amplify app. ',
        }),
    ).exactOptional(),
    repository: RepositorySchema.and(
      z.any().openapi({ description: ' The name of the repository for an Amplify app ' }),
    ).exactOptional(),
    oauthToken: OauthTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit.</p> <p>To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
        }),
    ).exactOptional(),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateAppRequest',
    description: ' The request structure for the update app request. ',
    required: [],
  })
  .openapi('UpdateAppRequest')

const UpdateBranchRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for the branch. ' }),
    ).exactOptional(),
    framework: FrameworkSchema.and(
      z.any().openapi({ description: ' The framework for the branch. ' }),
    ).exactOptional(),
    stage: StageSchema.and(
      z.any().openapi({ description: ' Describes the current stage for the branch. ' }),
    ).exactOptional(),
    enableNotification: EnableNotificationSchema.and(
      z.any().openapi({ description: ' Enables notifications for the branch. ' }),
    ).exactOptional(),
    enableAutoBuild: EnableAutoBuildSchema.and(
      z.any().openapi({ description: ' Enables auto building for the branch. ' }),
    ).exactOptional(),
    environmentVariables: EnvironmentVariablesSchema.and(
      z.any().openapi({ description: ' The environment variables for the branch. ' }),
    ).exactOptional(),
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
        }),
    ).exactOptional(),
    enableBasicAuth: EnableBasicAuthSchema.and(
      z.any().openapi({ description: ' Enables basic authorization for the branch. ' }),
    ).exactOptional(),
    enablePerformanceMode: EnablePerformanceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
        }),
    ).exactOptional(),
    buildSpec: BuildSpecSchema.and(
      z.any().openapi({ description: ' The build specification (build spec) for the branch. ' }),
    ).exactOptional(),
    ttl: TTLSchema.and(
      z
        .any()
        .openapi({ description: ' The content Time to Live (TTL) for the website in seconds. ' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The display name for a branch. This is used as the default domain prefix. ',
        }),
    ).exactOptional(),
    enablePullRequestPreview: EnablePullRequestPreviewSchema.and(
      z.any().openapi({ description: ' Enables pull request previews for this branch. ' }),
    ).exactOptional(),
    pullRequestEnvironmentName: PullRequestEnvironmentNameSchema.and(
      z.any().openapi({ description: ' The Amplify environment name for the pull request. ' }),
    ).exactOptional(),
    backendEnvironmentArn: BackendEnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateBranchRequest',
    description: ' The request structure for the update branch request. ',
    required: [],
  })
  .openapi('UpdateBranchRequest')

const UpdateDomainAssociationRequestSchema = z
  .object({
    enableAutoSubDomain: EnableAutoSubDomainSchema.and(
      z
        .any()
        .openapi({ description: ' Enables the automated creation of subdomains for branches. ' }),
    ).exactOptional(),
    subDomainSettings: SubDomainSettingsSchema.and(
      z.any().openapi({ description: ' Describes the settings for the subdomain. ' }),
    ).exactOptional(),
    autoSubDomainCreationPatterns: AutoSubDomainCreationPatternsSchema.and(
      z
        .any()
        .openapi({ description: ' Sets the branch patterns for automatic subdomain creation. ' }),
    ).exactOptional(),
    autoSubDomainIAMRole: AutoSubDomainIAMRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateDomainAssociationRequest',
    description: ' The request structure for the update domain association request. ',
    required: [],
  })
  .openapi('UpdateDomainAssociationRequest')

const UpdateWebhookRequestSchema = z
  .object({
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: ' The name for a branch that is part of an Amplify app. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' The description for a webhook. ' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateWebhookRequest',
    description: ' The request structure for the update webhook request. ',
    required: [],
  })
  .openapi('UpdateWebhookRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getAppsRoute = createRoute({
  method: 'get',
  path: '/apps',
  description: ' Returns a list of the existing Amplify apps. ',
  operationId: 'ListApps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAppsResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsRoute = createRoute({
  method: 'post',
  path: '/apps',
  description: ' Creates a new Amplify app. ',
  operationId: 'CreateApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .openapi({ description: ' The name for an Amplify app. ' }),
              description: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description for an Amplify app. ' }),
              repository: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The repository for an Amplify app. ' }),
              platform: z
                .enum(['WEB', 'WEB_DYNAMIC', 'WEB_COMPUTE'])
                .exactOptional()
                .openapi({
                  description:
                    " The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.",
                }),
              iamServiceRoleArn: z
                .string()
                .regex(/\(\?s\).*/)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The AWS Identity and Access Management (IAM) service role for an Amplify app. ',
                }),
              oauthToken: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
                }),
              accessToken: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
                }),
              environmentVariables: z
                .record(z.string(), EnvValueSchema)
                .exactOptional()
                .openapi({ description: ' The environment variables map for an Amplify app. ' }),
              enableBranchAutoBuild: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: ' Enables the auto building of branches for an Amplify app. ',
                }),
              enableBranchAutoDeletion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. ',
                }),
              enableBasicAuth: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app. ',
                }),
              basicAuthCredentials: z
                .string()
                .regex(/\(\?s\).*/)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    ' The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
                }),
              customRules: z
                .array(CustomRuleSchema)
                .exactOptional()
                .openapi({
                  description: ' The custom rewrite and redirect rules for an Amplify app. ',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: ' The tag for an Amplify app. ' }),
              buildSpec: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(25000)
                .exactOptional()
                .openapi({
                  description:
                    ' The build specification (build spec) file for an Amplify app build. ',
                }),
              customHeaders: z
                .string()
                .regex(/\(\?s\).*/)
                .min(0)
                .max(25000)
                .exactOptional()
                .openapi({ description: 'The custom HTTP headers for an Amplify app.' }),
              enableAutoBranchCreation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: ' Enables automated branch creation for an Amplify app. ',
                }),
              autoBranchCreationPatterns: z
                .array(AutoBranchCreationPatternSchema)
                .exactOptional()
                .openapi({
                  description: ' The automated branch creation glob patterns for an Amplify app. ',
                }),
              autoBranchCreationConfig: z
                .object({
                  stage: StageSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Describes the current stage for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  framework: FrameworkSchema.and(
                    z.any().openapi({ description: ' The framework for the autocreated branch. ' }),
                  ).exactOptional(),
                  enableAutoBuild: EnableAutoBuildSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Enables auto building for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  environmentVariables: EnvironmentVariablesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' The environment variables for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  basicAuthCredentials: BasicAuthCredentialsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The basic authorization credentials for the autocreated branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
                      }),
                  ).exactOptional(),
                  enableBasicAuth: EnableBasicAuthSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Enables basic authorization for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  enablePerformanceMode: EnablePerformanceModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
                      }),
                  ).exactOptional(),
                  buildSpec: BuildSpecSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The build specification (build spec) for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  enablePullRequestPreview: EnablePullRequestPreviewSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Enables pull request previews for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  pullRequestEnvironmentName: PullRequestEnvironmentNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' The Amplify environment name for the pull request. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' Describes the automated branch creation configuration. ',
                  required: [],
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdBackendenvironmentsRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/backendenvironments',
  description: ' Lists the backend environments for an Amplify app. ',
  operationId: 'ListBackendEnvironments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    query: z.object({
      environmentName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'environmentName',
            in: 'query',
            required: false,
            description: ' The name of the backend environment ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBackendEnvironmentsResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdBackendenvironmentsRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/backendenvironments',
  description: ' Creates a new backend environment for an Amplify app. ',
  operationId: 'CreateBackendEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              environmentName: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .openapi({ description: ' The name for the backend environment. ' }),
              stackName: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: ' The AWS CloudFormation stack name of a backend environment. ',
                }),
              deploymentArtifacts: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The name of deployment artifacts. ' }),
            })
            .openapi({ required: ['environmentName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackendEnvironmentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAppsAppIdBranchesRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/branches',
  description: ' Lists the branches of an Amplify app. ',
  operationId: 'ListBranches',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBranchesResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdBranchesRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/branches',
  description: ' Creates a new branch for an Amplify app. ',
  operationId: 'CreateBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              branchName: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .openapi({ description: ' The name for the branch. ' }),
              description: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description for the branch. ' }),
              stage: z
                .enum(['PRODUCTION', 'BETA', 'DEVELOPMENT', 'EXPERIMENTAL', 'PULL_REQUEST'])
                .exactOptional()
                .openapi({ description: ' Describes the current stage for the branch. ' }),
              framework: z
                .string()
                .regex(/\(\?s\).*/)
                .max(255)
                .exactOptional()
                .openapi({ description: ' The framework for the branch. ' }),
              enableNotification: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables notifications for the branch. ' }),
              enableAutoBuild: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables auto building for the branch. ' }),
              environmentVariables: z
                .record(z.string(), EnvValueSchema)
                .exactOptional()
                .openapi({ description: ' The environment variables for the branch. ' }),
              basicAuthCredentials: z
                .string()
                .regex(/\(\?s\).*/)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    ' The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
                }),
              enableBasicAuth: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables basic authorization for the branch. ' }),
              enablePerformanceMode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: ' The tag for the branch. ' }),
              buildSpec: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(25000)
                .exactOptional()
                .openapi({
                  description:
                    ' The build specification (build spec) file for an Amplify app build. ',
                }),
              ttl: z
                .string()
                .regex(/\d*/)
                .min(0)
                .max(32)
                .exactOptional()
                .openapi({
                  description: ' The content Time to Live (TTL) for the website in seconds. ',
                }),
              displayName: z
                .string()
                .regex(/\(\?s\).*/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    ' The display name for a branch. This is used as the default domain prefix. ',
                }),
              enablePullRequestPreview: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables pull request previews for this branch. ' }),
              pullRequestEnvironmentName: z
                .string()
                .regex(/\(\?s\).*/)
                .max(20)
                .exactOptional()
                .openapi({ description: ' The Amplify environment name for the pull request. ' }),
              backendEnvironmentArn: z
                .string()
                .regex(/\(\?s\).*/)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. ',
                }),
            })
            .openapi({ required: ['branchName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBranchResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdBranchesBranchNameDeploymentsRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/branches/{branchName}/deployments',
  description:
    ' Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. ',
  operationId: 'CreateDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch, for the job. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileMap: z
                .record(z.string(), MD5HashSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAppsAppIdDomainsRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/domains',
  description: ' Returns the domain associations for an Amplify app. ',
  operationId: 'ListDomainAssociations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainAssociationsResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdDomainsRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/domains',
  description:
    ' Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app ',
  operationId: 'CreateDomainAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domainName: z
                .string()
                .regex(
                  /^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$/,
                )
                .max(64)
                .openapi({ description: ' The domain name for the domain association. ' }),
              enableAutoSubDomain: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: ' Enables the automated creation of subdomains for branches. ',
                }),
              subDomainSettings: z
                .array(SubDomainSettingSchema)
                .max(500)
                .openapi({ description: ' The setting for the subdomain. ' }),
              autoSubDomainCreationPatterns: z
                .array(AutoSubDomainCreationPatternSchema)
                .exactOptional()
                .openapi({
                  description: ' Sets the branch patterns for automatic subdomain creation. ',
                }),
              autoSubDomainIAMRole: z
                .string()
                .regex(/^$|^arn:aws:iam::\d{12}:role.+/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. ',
                }),
            })
            .openapi({ required: ['domainName', 'subDomainSettings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDomainAssociationResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/webhooks',
  description: ' Returns a list of webhooks for an Amplify app. ',
  operationId: 'ListWebhooks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWebhooksResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postAppsAppIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/webhooks',
  description: ' Creates a new webhook on an Amplify app. ',
  operationId: 'CreateWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              branchName: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .openapi({
                  description: ' The name for a branch that is part of an Amplify app. ',
                }),
              description: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description for a webhook. ' }),
            })
            .openapi({ required: ['branchName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWebhookResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}',
  description: ' Returns an existing Amplify app by appID. ',
  operationId: 'GetApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}',
  description: ' Updates an existing Amplify app. ',
  operationId: 'UpdateApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: ' The name for an Amplify app. ' }),
              description: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description for an Amplify app. ' }),
              platform: z
                .enum(['WEB', 'WEB_DYNAMIC', 'WEB_COMPUTE'])
                .exactOptional()
                .openapi({
                  description:
                    " The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>.",
                }),
              iamServiceRoleArn: z
                .string()
                .regex(/\(\?s\).*/)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The AWS Identity and Access Management (IAM) service role for an Amplify app. ',
                }),
              environmentVariables: z
                .record(z.string(), EnvValueSchema)
                .exactOptional()
                .openapi({ description: ' The environment variables for an Amplify app. ' }),
              enableBranchAutoBuild: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables branch auto-building for an Amplify app. ' }),
              enableBranchAutoDeletion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. ',
                }),
              enableBasicAuth: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables basic authorization for an Amplify app. ' }),
              basicAuthCredentials: z
                .string()
                .regex(/\(\?s\).*/)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    ' The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
                }),
              customRules: z
                .array(CustomRuleSchema)
                .exactOptional()
                .openapi({
                  description: ' The custom redirect and rewrite rules for an Amplify app. ',
                }),
              buildSpec: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(25000)
                .exactOptional()
                .openapi({
                  description:
                    ' The build specification (build spec) file for an Amplify app build. ',
                }),
              customHeaders: z
                .string()
                .regex(/\(\?s\).*/)
                .min(0)
                .max(25000)
                .exactOptional()
                .openapi({ description: 'The custom HTTP headers for an Amplify app.' }),
              enableAutoBranchCreation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: ' Enables automated branch creation for an Amplify app. ',
                }),
              autoBranchCreationPatterns: z
                .array(AutoBranchCreationPatternSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' Describes the automated branch creation glob patterns for an Amplify app. ',
                }),
              autoBranchCreationConfig: z
                .object({
                  stage: StageSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Describes the current stage for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  framework: FrameworkSchema.and(
                    z.any().openapi({ description: ' The framework for the autocreated branch. ' }),
                  ).exactOptional(),
                  enableAutoBuild: EnableAutoBuildSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Enables auto building for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  environmentVariables: EnvironmentVariablesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' The environment variables for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  basicAuthCredentials: BasicAuthCredentialsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The basic authorization credentials for the autocreated branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
                      }),
                  ).exactOptional(),
                  enableBasicAuth: EnableBasicAuthSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Enables basic authorization for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  enablePerformanceMode: EnablePerformanceModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
                      }),
                  ).exactOptional(),
                  buildSpec: BuildSpecSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The build specification (build spec) for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  enablePullRequestPreview: EnablePullRequestPreviewSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' Enables pull request previews for the autocreated branch. ',
                      }),
                  ).exactOptional(),
                  pullRequestEnvironmentName: PullRequestEnvironmentNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' The Amplify environment name for the pull request. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: ' Describes the automated branch creation configuration. ',
                  required: [],
                }),
              repository: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The name of the repository for an Amplify app ' }),
              oauthToken: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit.</p> <p>To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
                }),
              accessToken: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAppResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const deleteAppsAppIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}',
  description: ' Deletes an existing Amplify app specified by an app ID. ',
  operationId: 'DeleteApp',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAppResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdBackendenvironmentsEnvironmentNameRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/backendenvironments/{environmentName}',
  description: ' Returns a backend environment for an Amplify app. ',
  operationId: 'GetBackendEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique id for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      environmentName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'environmentName',
            in: 'path',
            required: true,
            description: ' The name for the backend environment. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackendEnvironmentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const deleteAppsAppIdBackendenvironmentsEnvironmentNameRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}/backendenvironments/{environmentName}',
  description: ' Deletes a backend environment for an Amplify app. ',
  operationId: 'DeleteBackendEnvironment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID of an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      environmentName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'environmentName',
            in: 'path',
            required: true,
            description: ' The name of a backend environment of an Amplify app. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackendEnvironmentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdBranchesBranchNameRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/branches/{branchName}',
  description: ' Returns a branch for an Amplify app. ',
  operationId: 'GetBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBranchResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdBranchesBranchNameRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/branches/{branchName}',
  description: ' Updates a branch for an Amplify app. ',
  operationId: 'UpdateBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description for the branch. ' }),
              framework: z
                .string()
                .regex(/\(\?s\).*/)
                .max(255)
                .exactOptional()
                .openapi({ description: ' The framework for the branch. ' }),
              stage: z
                .enum(['PRODUCTION', 'BETA', 'DEVELOPMENT', 'EXPERIMENTAL', 'PULL_REQUEST'])
                .exactOptional()
                .openapi({ description: ' Describes the current stage for the branch. ' }),
              enableNotification: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables notifications for the branch. ' }),
              enableAutoBuild: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables auto building for the branch. ' }),
              environmentVariables: z
                .record(z.string(), EnvValueSchema)
                .exactOptional()
                .openapi({ description: ' The environment variables for the branch. ' }),
              basicAuthCredentials: z
                .string()
                .regex(/\(\?s\).*/)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    ' The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.',
                }),
              enableBasicAuth: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables basic authorization for the branch. ' }),
              enablePerformanceMode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>',
                }),
              buildSpec: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(25000)
                .exactOptional()
                .openapi({
                  description:
                    ' The build specification (build spec) file for an Amplify app build. ',
                }),
              ttl: z
                .string()
                .regex(/\d*/)
                .min(0)
                .max(32)
                .exactOptional()
                .openapi({
                  description: ' The content Time to Live (TTL) for the website in seconds. ',
                }),
              displayName: z
                .string()
                .regex(/\(\?s\).*/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    ' The display name for a branch. This is used as the default domain prefix. ',
                }),
              enablePullRequestPreview: z
                .boolean()
                .exactOptional()
                .openapi({ description: ' Enables pull request previews for this branch. ' }),
              pullRequestEnvironmentName: z
                .string()
                .regex(/\(\?s\).*/)
                .max(20)
                .exactOptional()
                .openapi({ description: ' The Amplify environment name for the pull request. ' }),
              backendEnvironmentArn: z
                .string()
                .regex(/\(\?s\).*/)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBranchResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAppsAppIdBranchesBranchNameRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}/branches/{branchName}',
  description: ' Deletes a branch for an Amplify app. ',
  operationId: 'DeleteBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBranchResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdDomainsDomainNameRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/domains/{domainName}',
  description: ' Returns the domain information for an Amplify app. ',
  operationId: 'GetDomainAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique id for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      domainName: z
        .string()
        .regex(
          /^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$/,
        )
        .max(64)
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: ' The name of the domain. ',
            schema: {
              type: 'string',
              pattern:
                '^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\\.)?$',
              maxLength: 64,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainAssociationResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postAppsAppIdDomainsDomainNameRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/domains/{domainName}',
  description: ' Creates a new domain association for an Amplify app.',
  operationId: 'UpdateDomainAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      domainName: z
        .string()
        .regex(
          /^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$/,
        )
        .max(64)
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: ' The name of the domain. ',
            schema: {
              type: 'string',
              pattern:
                '^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\\.)?$',
              maxLength: 64,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enableAutoSubDomain: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: ' Enables the automated creation of subdomains for branches. ',
                }),
              subDomainSettings: z
                .array(SubDomainSettingSchema)
                .max(500)
                .exactOptional()
                .openapi({ description: ' Describes the settings for the subdomain. ' }),
              autoSubDomainCreationPatterns: z
                .array(AutoSubDomainCreationPatternSchema)
                .exactOptional()
                .openapi({
                  description: ' Sets the branch patterns for automatic subdomain creation. ',
                }),
              autoSubDomainIAMRole: z
                .string()
                .regex(/^$|^arn:aws:iam::\d{12}:role.+/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDomainAssociationResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const deleteAppsAppIdDomainsDomainNameRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}/domains/{domainName}',
  description: ' Deletes a domain association for an Amplify app. ',
  operationId: 'DeleteDomainAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique id for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      domainName: z
        .string()
        .regex(
          /^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$/,
        )
        .max(64)
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: ' The name of the domain. ',
            schema: {
              type: 'string',
              pattern:
                '^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\\.)?$',
              maxLength: 64,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainAssociationResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const getAppsAppIdBranchesBranchNameJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/branches/{branchName}/jobs/{jobId}',
  description: ' Returns a job for a branch of an Amplify app. ',
  operationId: 'GetJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The branch name for the job. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
      jobId: z
        .string()
        .regex(/[0-9]+/)
        .max(255)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: ' The unique ID for the job. ',
            schema: { type: 'string', pattern: '[0-9]+', maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteAppsAppIdBranchesBranchNameJobsJobIdRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}/branches/{branchName}/jobs/{jobId}',
  description: ' Deletes a job for a branch of an Amplify app. ',
  operationId: 'DeleteJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch, for the job. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
      jobId: z
        .string()
        .regex(/[0-9]+/)
        .max(255)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: ' The unique ID for the job. ',
            schema: { type: 'string', pattern: '[0-9]+', maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJobResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhookId}',
  description: ' Returns the webhook information that corresponds to a specified webhook ID. ',
  operationId: 'GetWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      webhookId: z
        .string()
        .regex(/\(\?s\).*/)
        .max(255)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: ' The unique ID for a webhook. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWebhookResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postWebhooksWebhookIdRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhookId}',
  description: ' Updates a webhook. ',
  operationId: 'UpdateWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      webhookId: z
        .string()
        .regex(/\(\?s\).*/)
        .max(255)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: ' The unique ID for a webhook. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              branchName: z
                .string()
                .regex(/\(\?s\).\+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description: ' The name for a branch that is part of an Amplify app. ',
                }),
              description: z
                .string()
                .regex(/\(\?s\).*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description for a webhook. ' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWebhookResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'DependentServiceFailureException',
      content: { 'application/json': { schema: DependentServiceFailureExceptionSchema } },
    },
  },
})

export const deleteWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhookId}',
  description: ' Deletes a webhook. ',
  operationId: 'DeleteWebhook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      webhookId: z
        .string()
        .regex(/\(\?s\).*/)
        .max(255)
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: ' The unique ID for a webhook. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWebhookResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postAppsAppIdAccesslogsRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/accesslogs',
  description: ' Returns the website access logs for a specific time range using a presigned URL. ',
  operationId: 'GenerateAccessLogs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              startTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    ' The time at which the logs should start. The time range specified is inclusive of the start time. ',
                }),
              endTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    ' The time at which the logs should end. The time range specified is inclusive of the end time. ',
                }),
              domainName: z
                .string()
                .regex(
                  /^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$/,
                )
                .max(64)
                .openapi({ description: ' The name of the domain. ' }),
            })
            .openapi({ required: ['domainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenerateAccessLogsResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const getArtifactsArtifactIdRoute = createRoute({
  method: 'get',
  path: '/artifacts/{artifactId}',
  description: ' Returns the artifact info that corresponds to an artifact id. ',
  operationId: 'GetArtifactUrl',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      artifactId: z
        .string()
        .regex(/\(\?s\).*/)
        .max(255)
        .openapi({
          param: {
            name: 'artifactId',
            in: 'path',
            required: true,
            description: ' The unique ID for an artifact. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetArtifactUrlResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAppsAppIdBranchesBranchNameJobsJobIdArtifactsRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts',
  description: ' Returns a list of artifacts for a specified app, branch, and job. ',
  operationId: 'ListArtifacts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name of a branch that is part of an Amplify app. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
      jobId: z
        .string()
        .regex(/[0-9]+/)
        .max(255)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: ' The unique ID for a job. ',
            schema: { type: 'string', pattern: '[0-9]+', maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. Set to null to start listing artifacts from start. If a non-null pagination token is returned in a result, pass its value in here to list more artifacts. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListArtifactsResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAppsAppIdBranchesBranchNameJobsRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}/branches/{branchName}/jobs',
  description: ' Lists the jobs for a branch of an Amplify app. ',
  operationId: 'ListJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for a branch. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/\(\?s\).*/)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).*', maxLength: 2000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of records to list in a single response. ',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postAppsAppIdBranchesBranchNameJobsRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/branches/{branchName}/jobs',
  description: ' Starts a new job for a branch of an Amplify app. ',
  operationId: 'StartJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The branch name for the job. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z
                .string()
                .regex(/[0-9]+/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    ' The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>. ',
                }),
              jobType: z
                .enum(['RELEASE', 'RETRY', 'MANUAL', 'WEB_HOOK'])
                .openapi({
                  description:
                    ' Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required. ',
                }),
              jobReason: z
                .string()
                .regex(/\(\?s\).*/)
                .max(255)
                .exactOptional()
                .openapi({ description: ' A descriptive reason for starting this job. ' }),
              commitId: z
                .string()
                .regex(/\(\?s\).*/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    ' The commit ID from a third-party repository provider for the job. ',
                }),
              commitMessage: z
                .string()
                .regex(/\(\?s\).*/)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    ' The commit message from a third-party repository provider for the job. ',
                }),
              commitTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: ' The commit date and time for the job. ' }),
            })
            .openapi({ required: ['jobType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartJobResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: ' Returns a list of tags for a specified Amazon Resource Name (ARN). ',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:amplify:.*/)
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) to use to list tags. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws:amplify:.*',
              minLength: 0,
              maxLength: 2048,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: ' Tags the resource with a tag key and value. ',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:amplify:.*/)
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) to use to tag a resource. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws:amplify:.*',
              minLength: 0,
              maxLength: 2048,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: ' The tags used to tag the resource. ' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAppsAppIdBranchesBranchNameDeploymentsStartRoute = createRoute({
  method: 'post',
  path: '/apps/{appId}/branches/{branchName}/deployments/start',
  description:
    ' Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. ',
  operationId: 'StartDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch, for the job. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z
                .string()
                .regex(/[0-9]+/)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    ' The job ID for this deployment, generated by the create deployment request. ',
                }),
              sourceUrl: z
                .string()
                .regex(/\(\?s\).*/)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    ' The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file. ',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDeploymentResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteAppsAppIdBranchesBranchNameJobsJobIdStopRoute = createRoute({
  method: 'delete',
  path: '/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop',
  description: ' Stops a job that is in progress for a branch of an Amplify app. ',
  operationId: 'StopJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      appId: z
        .string()
        .regex(/d[a-z0-9]+/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: ' The unique ID for an Amplify app. ',
            schema: { type: 'string', pattern: 'd[a-z0-9]+', minLength: 1, maxLength: 20 },
          },
        }),
      branchName: z
        .string()
        .regex(/\(\?s\).\+/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'branchName',
            in: 'path',
            required: true,
            description: ' The name for the branch, for the job. ',
            schema: { type: 'string', pattern: '\\(\\?s\\).\\+', minLength: 1, maxLength: 255 },
          },
        }),
      jobId: z
        .string()
        .regex(/[0-9]+/)
        .max(255)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: ' The unique id for the job. ',
            schema: { type: 'string', pattern: '[0-9]+', maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopJobResultSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: ' Untags a resource with a specified Amazon Resource Name (ARN). ',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:amplify:.*/)
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) to use to untag a resource. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws:amplify:.*',
              minLength: 0,
              maxLength: 2048,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: ' The tag keys to use to untag a resource. ',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
